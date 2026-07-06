// ==========================================
// 営業メール自動送信システム - Code.gs
// Google Apps Script バックエンド
// ==========================================

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('営業メール自動送信システム')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// ------------------------------------------
// スプレッドシートからデータを取得する
// ------------------------------------------
function getSpreadsheetData(spreadsheetUrl) {
  try {
    var ss = SpreadsheetApp.openByUrl(spreadsheetUrl);
    var sheet = ss.getSheets()[0];
    var allData = sheet.getDataRange().getValues();

    if (allData.length < 2) {
      return {
        success: false,
        message: 'データが2行以上必要です（1行目：見出し、2行目以降：送信データ）'
      };
    }

    return {
      success: true,
      headers: allData[0],
      allData: allData,
      totalCount: allData.length - 1
    };
  } catch (e) {
    return {
      success: false,
      message: 'スプレッドシートの読み込みエラー: ' + e.message
        + '\nURLが正しいか、アクセス権があるか確認してください。'
    };
  }
}

// ------------------------------------------
// Googleドキュメントから本文テキストを取得する
// ------------------------------------------
function getDocumentContent(docUrl) {
  try {
    var doc = DocumentApp.openByUrl(docUrl);
    return { success: true, content: doc.getBody().getText() };
  } catch (e) {
    return {
      success: false,
      message: 'ドキュメントの読み込みエラー: ' + e.message
        + '\nURLが正しいか、アクセス権があるか確認してください。'
    };
  }
}

// ------------------------------------------
// テンプレート文字列の置き換え（敬称対応）
// ヘッダーの直後に「敬称」列があれば、{列名} を「値 敬称」に結合する
// ------------------------------------------
function processTemplate(template, allData, rowIndex, headers) {
  var result = template;
  var row = allData[rowIndex];

  for (var i = 0; i < headers.length; i++) {
    var header = headers[i] ? headers[i].toString().trim() : '';
    if (!header || header === '敬称') continue;

    var value = (row[i] !== undefined && row[i] !== null) ? row[i].toString() : '';

    // 直後の列が「敬称」なら値と敬称を結合する
    if (i + 1 < headers.length
        && headers[i + 1]
        && headers[i + 1].toString().trim() === '敬称') {
      var honorific = (row[i + 1] !== undefined && row[i + 1] !== null)
        ? row[i + 1].toString().trim() : '';
      if (honorific) value = value + ' ' + honorific;
    }

    var placeholder = new RegExp('\\{' + escapeRegExp(header) + '\\}', 'g');
    result = result.replace(placeholder, value);
  }

  return result;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Google Drive URL からファイルIDを抽出する
function extractFileIdFromUrl(url) {
  var patterns = [/\/d\/([a-zA-Z0-9-_]+)/, /id=([a-zA-Z0-9-_]+)/];
  for (var i = 0; i < patterns.length; i++) {
    var match = url.match(patterns[i]);
    if (match) return match[1];
  }
  return null;
}

// ------------------------------------------
// プレビュー：最初の送信対象行のメールを生成して返す
// ------------------------------------------
function previewEmail(config) {
  try {
    var ssResult = getSpreadsheetData(config.spreadsheetUrl);
    if (!ssResult.success) return ssResult;

    var docResult = getDocumentContent(config.docUrl);
    if (!docResult.success) return docResult;

    var headers = ssResult.headers;
    var allData = ssResult.allData;

    var emailColIndex  = headers.indexOf('メールアドレス');
    var checkColIndex  = headers.indexOf('送信チェック');
    var statusColIndex = headers.indexOf('送信ステータス');

    // 最初の送信対象行を探す
    var targetRowIndex = -1;
    for (var i = 1; i < allData.length; i++) {
      if (checkColIndex !== -1 && !allData[i][checkColIndex]) continue;
      targetRowIndex = i;
      break;
    }
    if (targetRowIndex === -1) {
      return { success: false, message: 'プレビュー対象のデータが見つかりません（「送信チェック」列にチェックが入っていない可能性があります）' };
    }

    var body    = processTemplate(docResult.content, allData, targetRowIndex, headers);
    var subject = processTemplate(config.subject,    allData, targetRowIndex, headers);

    if (config.unsubscribeLink === '付ける') {
      body += '\n\n---\n配信停止をご希望の方はこちらにご返信ください。';
    }

    // 送信対象件数をカウント
    var targetCount = 0;
    for (var i = 1; i < allData.length; i++) {
      if (checkColIndex !== -1 && !allData[i][checkColIndex]) continue;
      var status = statusColIndex !== -1 ? allData[i][statusColIndex].toString() : '';
      if (status !== '送信成功' && status !== '下書き作成済') targetCount++;
    }

    return {
      success: true,
      subject: subject,
      body: body,
      email: emailColIndex !== -1 ? allData[targetRowIndex][emailColIndex].toString() : '（メールアドレス列なし）',
      totalCount: ssResult.totalCount,
      targetCount: targetCount
    };
  } catch (e) {
    return { success: false, message: 'プレビューエラー: ' + e.message };
  }
}

// ------------------------------------------
// メール一括送信のメイン処理
// ------------------------------------------
function sendBulkEmails(config) {
  try {
    var ssResult = getSpreadsheetData(config.spreadsheetUrl);
    if (!ssResult.success) return ssResult;

    var docResult = getDocumentContent(config.docUrl);
    if (!docResult.success) return docResult;

    var ss       = SpreadsheetApp.openByUrl(config.spreadsheetUrl);
    var sheet    = ss.getSheets()[0];
    var allData  = ssResult.allData;
    var headers  = ssResult.headers;

    var emailColIndex  = headers.indexOf('メールアドレス');
    var checkColIndex  = headers.indexOf('送信チェック');
    var statusColIndex = headers.indexOf('送信ステータス');
    var attachColIndex = headers.indexOf('添付ファイルURL');

    if (emailColIndex === -1) {
      return { success: false, message: '「メールアドレス」列が見つかりません。スプレッドシートの1行目に「メールアドレス」と書いた列が必要です。' };
    }
    if (statusColIndex === -1) {
      return { success: false, message: '「送信ステータス」列が見つかりません。スプレッドシートの1行目に「送信ステータス」と書いた列が必要です。' };
    }

    var results      = [];
    var successCount = 0;
    var errorCount   = 0;
    var skipCount    = 0;
    var sentCount    = 0;
    var maxSend      = parseInt(config.maxCount) || 50;

    for (var i = 1; i < allData.length; i++) {

      // 送信上限チェック
      if (sentCount >= maxSend) {
        results.push({ row: i + 1, status: 'スキップ（上限' + maxSend + '件に到達）', email: allData[i][emailColIndex] });
        skipCount++;
        continue;
      }

      // 送信チェック列がある場合、チェックがない行はスキップ
      if (checkColIndex !== -1 && !allData[i][checkColIndex]) continue;

      var email = allData[i][emailColIndex] ? allData[i][emailColIndex].toString().trim() : '';
      if (!email) continue;

      // 送信済みの行はスキップ
      var currentStatus = allData[i][statusColIndex] ? allData[i][statusColIndex].toString() : '';
      if (currentStatus === '送信成功' || currentStatus === '下書き作成済') {
        results.push({ row: i + 1, status: '送信済（スキップ）', email: email });
        skipCount++;
        continue;
      }

      // メールアドレスの形式チェック
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        sheet.getRange(i + 1, statusColIndex + 1).setValue('エラー: メールアドレス形式不正');
        results.push({ row: i + 1, status: 'エラー: メールアドレス形式不正', email: email });
        errorCount++;
        continue;
      }

      try {
        var body    = processTemplate(docResult.content, allData, i, headers);
        var subject = processTemplate(config.subject,    allData, i, headers);

        if (config.unsubscribeLink === '付ける') {
          body += '\n\n---\n配信停止をご希望の方はこちらにご返信ください。';
        }

        // 添付ファイルの処理
        var attachments = [];
        if (attachColIndex !== -1 && allData[i][attachColIndex]) {
          try {
            var fileId = extractFileIdFromUrl(allData[i][attachColIndex].toString().trim());
            if (fileId) {
              attachments.push(DriveApp.getFileById(fileId).getBlob());
            }
          } catch (attachError) {
            Logger.log('添付ファイルエラー（行' + (i + 1) + '）: ' + attachError.message);
          }
        }

        var mailOptions = { htmlBody: body.replace(/\n/g, '<br>') };
        if (config.senderName) mailOptions.name = config.senderName;
        if (attachments.length > 0) mailOptions.attachments = attachments;

        if (config.sendMode === '直接送信') {
          GmailApp.sendEmail(email, subject, body, mailOptions);
          sheet.getRange(i + 1, statusColIndex + 1).setValue('送信成功');
          results.push({ row: i + 1, status: '送信成功', email: email });
        } else {
          GmailApp.createDraft(email, subject, body, mailOptions);
          sheet.getRange(i + 1, statusColIndex + 1).setValue('下書き作成済');
          results.push({ row: i + 1, status: '下書き作成済', email: email });
        }

        successCount++;
        sentCount++;

        // Google API レート制限対策
        Utilities.sleep(500);

      } catch (sendError) {
        var errorMsg = 'エラー: ' + sendError.message;
        sheet.getRange(i + 1, statusColIndex + 1).setValue(errorMsg);
        results.push({ row: i + 1, status: errorMsg, email: email });
        errorCount++;
      }
    }

    var modeLabel = config.sendMode === '直接送信' ? '送信' : '下書き作成';

    return {
      success: true,
      successCount: successCount,
      errorCount: errorCount,
      skipCount: skipCount,
      results: results,
      message: modeLabel + '完了\n成功: ' + successCount + '件\nエラー: ' + errorCount + '件\nスキップ: ' + skipCount + '件'
    };

  } catch (e) {
    return { success: false, message: '処理中に予期しないエラーが発生しました: ' + e.message };
  }
}
