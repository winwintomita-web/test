// ==========================================
// ライセンス管理サーバー（管理者専用）
// このファイルは「別のGASプロジェクト」としてデプロイしてください
// ==========================================
//
// 【管理スプレッドシートの1行目（見出し）】
// A列: ライセンスキー
// B列: 使用者名
// C列: 状態（「有効」または「無効」と入力）
// D列: 有効期限（例: 2027/01/01　空欄は無期限）
// E列: 登録日
// F列: 備考
//
// 【デプロイ手順】
// 1. このファイルを新しいGASプロジェクトに貼り付ける
// 2. 下の SHEET_ID に管理スプレッドシートのIDを設定する
// 3. デプロイ → 新しいデプロイ → 種類:ウェブアプリ
//    アクセス:「全員（匿名ユーザーを含む）」に設定
// 4. 発行されたURLをユーザー用 Code.gs の LICENSE_SERVER_URL に設定する
// ==========================================

// ★ここを管理スプレッドシートのIDに変更してください★
// URLの /d/XXXXX/edit の XXXXX の部分です
var SHEET_ID = 'ここに管理スプレッドシートのIDを貼り付けてください';
var SHEET_NAME = 'ライセンス'; // シート名（変更可）

// ライセンス確認API（外部からのGETリクエストを受け付ける）
function doGet(e) {
  var key = e.parameter.key || '';
  var result = checkLicense(key);

  // CORS対応のためのレスポンス
  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// ライセンスキーを確認して結果を返す
function checkLicense(key) {
  if (!key || key.trim() === '') {
    return { valid: false, message: 'ライセンスキーが入力されていません。' };
  }

  try {
    var ss    = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
    var data  = sheet.getDataRange().getValues();

    for (var i = 1; i < data.length; i++) {
      var rowKey = data[i][0] ? data[i][0].toString().trim() : '';
      if (rowKey === key.trim()) {
        var userName = data[i][1] ? data[i][1].toString() : '不明';
        var status   = data[i][2] ? data[i][2].toString().trim() : '';
        var expiry   = data[i][3];

        // 状態チェック
        if (status !== '有効') {
          return { valid: false, message: 'このライセンスは現在「無効」です。管理者にお問い合わせください。' };
        }

        // 有効期限チェック（空欄は無期限）
        if (expiry) {
          var expiryDate = new Date(expiry);
          if (!isNaN(expiryDate.getTime()) && expiryDate < new Date()) {
            return { valid: false, message: 'ライセンスの有効期限（' + formatDate(expiryDate) + '）が切れています。更新についてはご連絡ください。' };
          }
        }

        // 認証成功：最終使用日を記録
        sheet.getRange(i + 1, 5).setValue(Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm'));

        return {
          valid: true,
          message: 'ライセンス認証に成功しました。',
          userName: userName,
          expiry: expiry ? formatDate(new Date(expiry)) : '無期限'
        };
      }
    }

    return { valid: false, message: '無効なライセンスキーです。キーをご確認ください。' };

  } catch (e) {
    return { valid: false, message: 'サーバーエラーが発生しました: ' + e.message };
  }
}

function formatDate(date) {
  return Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy年MM月dd日');
}

// ------------------------------------------
// 管理者用ユーティリティ関数
// （GASエディタから手動で実行してください）
// ------------------------------------------

// ランダムなライセンスキーを生成してコンソールに出力する
function generateLicenseKey() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var key = 'LIC';
  for (var i = 0; i < 3; i++) {
    key += '-';
    for (var j = 0; j < 4; j++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }
  Logger.log('生成されたライセンスキー: ' + key);
  return key;
}

// スプレッドシートに新しいライセンスを追加する
// 使い方: addLicense('LIC-XXXX-YYYY-ZZZZ', '山田商事', '2027/01/01')
function addLicense(key, userName, expiry) {
  var ss    = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  var today = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd');

  sheet.appendRow([key, userName, '有効', expiry || '', today, '']);
  Logger.log('ライセンスを追加しました: ' + key + ' / ' + userName);
}

// ライセンスの一覧をコンソールに表示する
function listLicenses() {
  var ss    = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  var data  = sheet.getDataRange().getValues();

  Logger.log('=== ライセンス一覧 ===');
  for (var i = 1; i < data.length; i++) {
    Logger.log('[' + i + '] ' + data[i][0] + ' | ' + data[i][1] + ' | 状態: ' + data[i][2] + ' | 期限: ' + (data[i][3] || '無期限'));
  }
}

// 管理スプレッドシートの見出し行を初期設定する（初回だけ実行）
function setupSheet() {
  var ss    = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // 見出し行を設定
  sheet.getRange(1, 1, 1, 6).setValues([[
    'ライセンスキー', '使用者名', '状態', '有効期限', '最終使用日', '備考'
  ]]);

  // 見出し行のスタイルを設定
  var headerRange = sheet.getRange(1, 1, 1, 6);
  headerRange.setBackground('#2b6cb0');
  headerRange.setFontColor('white');
  headerRange.setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 200);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidth(3, 80);
  sheet.setColumnWidth(4, 120);
  sheet.setColumnWidth(5, 150);
  sheet.setColumnWidth(6, 200);

  Logger.log('シートのセットアップが完了しました。');
}
