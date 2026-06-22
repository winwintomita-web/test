// ===================================================
// からだ年齢AIドック - Google Apps Script
// ===================================================
// 【設定】以下3つを変更してください
const SHEET_NAME      = '測定記録';
const RESULT_BASE_URL = 'https://hplite.com/test/sportstest/result.html';
const SPREADSHEET_ID  = '1kU_6f_8Ww0YkxPaD4QIHQxFtarKmvqxKftEkSAO7o6o'; // ← スプレッドシートのURLにある長いIDを貼り付け
// ===================================================

// ===== POST受信（各HTMLからのデータ送信） =====
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.action === 'register') {
      saveRegister(data);
    } else if (data.action === 'booth_a') {
      saveBoothA(data);
    } else if (data.action === 'complete') {
      saveComplete(data);
    }
    return res({ status: 'ok' });
  } catch (err) {
    return res({ status: 'error', message: err.message });
  }
}

// ===== GET受信（result.htmlからのデータ取得） =====
function doGet(e) {
  const uid = e.parameter.uid;
  if (!uid) return res({ status: 'error', message: 'uid required' });
  const record = getRecord(uid);
  if (!record) return res({ status: 'error', message: 'not found' });
  return res(record);
}

// ===== 受付データ保存 =====
function saveRegister(data) {
  const sheet = getSheet();
  const existing = findRow(sheet, data.uid);
  const row = {
    uid:          data.uid          || '',
    registeredAt: data.registeredAt || '',
    gender:       data.gender       || '',
    age:          data.age          || '',
    year:         data.year         || '',
    month:        data.month        || '',
    day:          data.day          || '',
    height:       data.height       || '',
    weight:       data.weight       || '',
    email:        data.email        || '',
    tier:         data.tier         || '',
    venue:        data.venue        || '',
  };
  if (existing) {
    updateRow(sheet, existing, row);
  } else {
    appendRow(sheet, row);
  }
}

// ===== ブースA測定データ保存 =====
function saveBoothA(data) {
  const sheet  = getSheet();
  const rowIdx = findRow(sheet, data.uid);
  const boothAData = {
    boothA_count: data.boothA_count !== undefined ? data.boothA_count : '',
    boothA_sec:   data.boothA_sec   !== undefined ? data.boothA_sec   : '',
    boothA_score: data.boothA_score !== undefined ? data.boothA_score : '',
    a_ai1_score:  data.a_ai1_score  !== undefined ? data.a_ai1_score  : '',
    a_ai1_adv:    data.a_ai1_adv    !== undefined ? data.a_ai1_adv    : '',
    a_ai2_score:  data.a_ai2_score  !== undefined ? data.a_ai2_score  : '',
    a_ai2_adv:    data.a_ai2_adv    !== undefined ? data.a_ai2_adv    : '',
    a_ai3_score:  data.a_ai3_score  !== undefined ? data.a_ai3_score  : '',
    a_ai3_adv:    data.a_ai3_adv    !== undefined ? data.a_ai3_adv    : '',
  };
  if (rowIdx) {
    updateRow(sheet, rowIdx, boothAData);
  } else {
    appendRow(sheet, { uid: data.uid, ...boothAData });
  }
}

// ===== ブースB測定完了データ保存＋メール送信 =====
function saveComplete(data) {
  const sheet  = getSheet();
  const rowIdx = findRow(sheet, data.uid);
  // nullや未定義の値でブースAの既存データを上書きしないよう有効値のみ書き込む
  function val(v) { return (v !== undefined && v !== null && v !== '') ? v : undefined; }
  const measureData = {
    leftHeld:    data.leftHeld    !== undefined ? data.leftHeld    : '',
    rightHeld:   data.rightHeld   !== undefined ? data.rightHeld   : '',
    balScore:    data.balScore    !== undefined ? data.balScore    : '',
    combined:    data.combined    !== undefined ? data.combined    : '',
    b_ai1_score: data.b_ai1_score !== undefined ? data.b_ai1_score : '',
    b_ai1_adv:   data.b_ai1_adv   !== undefined ? data.b_ai1_adv   : '',
    b_ai2_score: data.b_ai2_score !== undefined ? data.b_ai2_score : '',
    b_ai2_adv:   data.b_ai2_adv   !== undefined ? data.b_ai2_adv   : '',
    b_ai3_score: data.b_ai3_score !== undefined ? data.b_ai3_score : '',
    b_ai3_adv:   data.b_ai3_adv   !== undefined ? data.b_ai3_adv   : '',
    aiCombined:  data.aiCombined  !== undefined ? data.aiCombined  : '',
    completedAt: data.completedAt || new Date().toISOString(),
    emailSent:   '',
  };
  // ブースAのデータは有効値がある場合のみ上書き（既存データを保護）
  if (val(data.boothA_count) !== undefined) measureData.boothA_count = data.boothA_count;
  if (val(data.boothA_sec)   !== undefined) measureData.boothA_sec   = data.boothA_sec;
  if (val(data.boothA_score) !== undefined) measureData.boothA_score = data.boothA_score;
  if (rowIdx) {
    updateRow(sheet, rowIdx, measureData);
  } else {
    appendRow(sheet, { uid: data.uid, ...measureData });
  }
  const record = getRecord(data.uid);
  // ブースA・B両方のデータが揃っている場合のみメール送信
  const bothComplete = record &&
    record.boothA_count !== '' && record.boothA_count !== null &&
    record.leftHeld     !== '' && record.leftHeld     !== null;
  if (bothComplete && record.email) {
    try {
      sendResultEmail(record);
      updateRow(sheet, findRow(sheet, data.uid), { emailSent: 'YES' });
    } catch (e) {
      updateRow(sheet, findRow(sheet, data.uid), { emailSent: 'ERROR: ' + e.message });
    }
  }
}

// ===== 結果URLメール送信（Gmail） =====
function sendResultEmail(record) {
  const resultUrl = RESULT_BASE_URL + '?uid=' + encodeURIComponent(record.uid);
  const subject   = '【からだ年齢AIドック】測定結果レポートのご案内';
  const html = `<!DOCTYPE html>
<html lang="ja">
<body style="font-family:'Hiragino Kaku Gothic ProN','Meiryo',sans-serif;background:#f1f5f9;margin:0;padding:20px;">
<div style="max-width:520px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">

  <div style="background:linear-gradient(135deg,#0ea5e9,#0284c7);color:#fff;padding:28px 24px;text-align:center;">
    <h1 style="font-size:20px;margin:0 0 6px;">🏃 からだ年齢 AIドック</h1>
    <p style="font-size:13px;opacity:0.85;margin:0;">測定が完了しました</p>
  </div>

  <div style="padding:28px 24px;">
    <p style="font-size:15px;line-height:1.9;margin-bottom:24px;color:#334155;">
      本日は「からだ年齢 AIドック」にご参加いただきありがとうございます。<br>
      すべての測定が完了しました。以下のボタンから結果レポートをご確認ください。
    </p>

    <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
      <div style="font-size:13px;color:#166534;margin-bottom:6px;font-weight:700;">受付番号：${record.uid || ''}</div>
      <div style="font-size:13px;color:#166534;">会場：${record.venue || ''}</div>
    </div>

    <div style="text-align:center;margin-bottom:24px;">
      <a href="${resultUrl}"
         style="display:inline-block;background:linear-gradient(135deg,#1e40af,#1e3a8a);color:#fff;text-decoration:none;padding:16px 32px;border-radius:999px;font-size:1rem;font-weight:700;">
        📊 結果レポートを見る
      </a>
    </div>

    <div style="background:#fef9c3;border:1px solid #fde047;border-radius:10px;padding:12px 16px;font-size:13px;color:#713f12;line-height:1.7;">
      📌 上のボタンをタップすると結果ページが開きます。<br>
      スマートフォンのブラウザで開いてください。
    </div>
  </div>

  <div style="background:#0f172a;color:#fff;padding:16px 24px;text-align:center;font-size:12px;opacity:0.85;">
    からだ年齢 AIドック — 自動送信メールです。返信はご遠慮ください。
  </div>
</div>
</body>
</html>`;

  GmailApp.sendEmail(record.email, subject, resultUrl, { htmlBody: html });
}

// ===== Sheets ヘルパー =====
const COL = {
  uid: 1, registeredAt: 2, gender: 3, age: 4, year: 5, month: 6, day: 7,
  height: 8, weight: 9, email: 10, tier: 11, venue: 12,
  boothA_count: 13, boothA_sec: 14, boothA_score: 15,
  leftHeld: 16, rightHeld: 17, balScore: 18, combined: 19,
  a_ai1_score: 20, a_ai1_adv: 21,
  a_ai2_score: 22, a_ai2_adv: 23,
  a_ai3_score: 24, a_ai3_adv: 25,
  b_ai1_score: 26, b_ai1_adv: 27,
  b_ai2_score: 28, b_ai2_adv: 29,
  b_ai3_score: 30, b_ai3_adv: 31,
  aiCombined: 32,
  completedAt: 33, emailSent: 34,
};
const COL_HEADERS = [
  'uid','registeredAt','gender','age','year','month','day',
  'height','weight','email','tier','venue',
  'boothA_count','boothA_sec','boothA_score',
  'leftHeld','rightHeld','balScore','combined',
  'a_ai1_score','a_ai1_adv','a_ai2_score','a_ai2_adv','a_ai3_score','a_ai3_adv',
  'b_ai1_score','b_ai1_adv','b_ai2_score','b_ai2_adv','b_ai3_score','b_ai3_adv',
  'aiCombined',
  'completedAt','emailSent',
];

function getSheet() {
  const ss    = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  let   sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(COL_HEADERS);
    sheet.getRange(1, 1, 1, COL_HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

function findRow(sheet, uid) {
  const vals = sheet.getDataRange().getValues();
  for (let i = 1; i < vals.length; i++) {
    if (String(vals[i][0]) === String(uid)) return i + 1;
  }
  return null;
}

function appendRow(sheet, obj) {
  sheet.appendRow(COL_HEADERS.map(k => obj[k] !== undefined ? obj[k] : ''));
}

function updateRow(sheet, rowIdx, obj) {
  Object.keys(obj).forEach(k => {
    if (COL[k]) sheet.getRange(rowIdx, COL[k]).setValue(obj[k]);
  });
}

function getRecord(uid) {
  const sheet  = getSheet();
  const rowIdx = findRow(sheet, uid);
  if (!rowIdx) return null;
  const vals   = sheet.getRange(rowIdx, 1, 1, COL_HEADERS.length).getValues()[0];
  const record = {};
  COL_HEADERS.forEach((k, i) => { record[k] = vals[i]; });
  return record;
}

function res(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
