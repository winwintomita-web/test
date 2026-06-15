const { chromium } = require('playwright');

const BASE = 'http://localhost:9090';
const results = [];

function log(icon, msg) {
  const line = `${icon} ${msg}`;
  results.push(line);
  console.log(line);
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page    = await browser.newPage();

  // JS エラーを拾う
  const jsErrors = [];
  page.on('pageerror', e => jsErrors.push(e.message));
  page.on('console', msg => {
    if (msg.type() === 'error') jsErrors.push(msg.text());
  });

  // ── hub.html ──────────────────────────────────────────
  log('🔍', '--- hub.html ---');
  await page.goto(`${BASE}/hub.html`);
  log((await page.title()).includes('スタッフハブ') ? '✅' : '❌', 'タイトル確認');
  for (const href of ['index.html','result.html','booth-a.html','booth-b.html','admin.html']) {
    const links = await page.$$eval('a[href]', els => els.map(e => e.getAttribute('href')));
    log(links.includes(href) ? '✅' : '❌', `リンク存在: ${href}`);
  }
  const clock = await page.$eval('#clock', el => el.textContent);
  log(/\d{2}:\d{2}:\d{2}/.test(clock) ? '✅' : '❌', `時計: ${clock}`);
  await page.waitForTimeout(1500);
  log(await page.$('#reception-qr canvas') ? '✅' : '❌', 'QRコード生成済み');

  // ── index.html ────────────────────────────────────────
  log('🔍', '--- index.html ---');
  jsErrors.length = 0;
  await page.goto(`${BASE}/index.html`);
  await page.waitForLoadState('networkidle');   // CDNスクリプト読み込み待ち

  log((await page.title()).includes('受付') ? '✅' : '❌', 'タイトル確認');

  // QRCode ライブラリがロードされているか
  const qrLibLoaded = await page.evaluate(() => typeof QRCode !== 'undefined');
  log(qrLibLoaded ? '✅' : '❌', `qrcodejs CDN ロード: ${qrLibLoaded}`);

  log(await page.$eval('#screen-welcome', el => el.classList.contains('active')) ? '✅' : '❌',
      'ウェルカム画面が初期表示');

  // ウェルカム → フォーム
  await page.click('#screen-welcome button.btn-primary');
  await page.waitForTimeout(400);
  log(await page.$eval('#screen-form', el => el.classList.contains('active')) ? '✅' : '❌',
      '受付開始 → フォーム画面');

  // フォーム入力
  await page.click('#btn-male');
  await page.selectOption('#dob-year', '1985');
  await page.selectOption('#dob-month', '6');
  await page.selectOption('#dob-day', '15');
  await page.fill('#height', '170');
  await page.fill('#weight', '65');
  await page.fill('#email', 'test@example.com');

  // フォーム → 確認画面
  await page.click('#screen-form button.btn-primary');
  await page.waitForTimeout(400);
  log(await page.$eval('#screen-confirm', el => el.classList.contains('active')) ? '✅' : '❌',
      'フォーム → 確認画面');

  // 確認 → QR発行（直接 JS 関数を呼ぶ）
  await page.evaluate(() => register());
  await page.waitForTimeout(1500);

  const qrActive = await page.$eval('#screen-qr', el => el.classList.contains('active'));
  log(qrActive ? '✅' : '❌', 'register() 実行 → QR発行画面');

  const qrCanvas = await page.$('#qr-box canvas');
  log(qrCanvas ? '✅' : '❌', 'QRコード canvas 生成');

  if (jsErrors.length > 0) {
    log('⚠️', `JSエラー: ${jsErrors.join(' | ').slice(0,100)}`);
    jsErrors.length = 0;
  }

  // localStorage 確認
  const recs = await page.evaluate(() => JSON.parse(localStorage.getItem('aidock_records') || '[]'));
  log(recs.length > 0 ? '✅' : '❌', `localStorage: ${recs.length}件 保存`);
  const saved = recs[recs.length - 1];
  log(saved?.email === 'test@example.com' ? '✅' : '❌', `email保存: ${saved?.email}`);
  log(saved?.gender === '男性' ? '✅' : '❌', `gender保存: ${saved?.gender}`);
  log(saved?.height !== '' ? '✅' : '❌', `height保存: ${saved?.height}`);
  log(saved?.uid?.startsWith('AID-') ? '✅' : '❌', `uid形式: ${saved?.uid}`);

  // ── booth-a.html ──────────────────────────────────────
  log('🔍', '--- booth-a.html ---');
  jsErrors.length = 0;
  await page.goto(`${BASE}/booth-a.html`);
  await page.waitForLoadState('networkidle');

  log((await page.title()).includes('ブースA') ? '✅' : '❌', 'タイトル確認');
  log(await page.$eval('#screen-start', el => el.classList.contains('active')) ? '✅' : '❌',
      'スタート画面が初期表示');

  const testQr = JSON.stringify({
    id: 'AID-TESTXXX', name: 'test@example.com',
    gender: '男性', age: 40, height: '170', weight: '65',
    tier: '現役世代', fukuY: 60, kata: 30,
    ts: new Date().toISOString()
  });
  await page.fill('#manual-qr', testQr);
  await page.click('#screen-start button.btn-secondary');
  await page.waitForTimeout(500);
  log(await page.$eval('#screen-ready', el => el.classList.contains('active')) ? '✅' : '❌',
      'QRデータ入力 → 準備画面');

  const tierLabel = await page.$eval('#ready-tier-label', el => el.textContent);
  log(tierLabel.includes('現役世代') ? '✅' : '❌', `年齢区分バッジ: ${tierLabel}`);
  log(await page.$eval('#ready-secs', el => el.textContent) === '60' ? '✅' : '❌',
      '測定秒数: 60秒');
  const userInfo = await page.$eval('#ready-user-info', el => el.textContent);
  log(userInfo.includes('40 歳') ? '✅' : '❌', `ユーザー情報: ${userInfo.slice(0,40)}`);

  if (jsErrors.length > 0) {
    log('⚠️', `JSエラー: ${jsErrors.join(' | ').slice(0,100)}`);
    jsErrors.length = 0;
  }

  // ── admin.html ────────────────────────────────────────
  log('🔍', '--- admin.html ---');
  jsErrors.length = 0;
  await page.goto(`${BASE}/admin.html`);
  await page.waitForLoadState('networkidle');

  log((await page.title()).includes('管理者') ? '✅' : '❌', 'タイトル確認');
  log(await page.$eval('#screen-pin', el => el.classList.contains('active')) ? '✅' : '❌',
      'PIN画面が初期表示');

  // 間違いPIN: 1231
  for (const d of ['1','2','3','1']) await page.click(`.pin-key:text("${d}")`);
  await page.waitForTimeout(500);
  log(await page.$eval('#pin-error', el => el.style.display !== 'none') ? '✅' : '❌',
      '間違いPINでエラー');

  // 正しいPIN: 1234
  await page.click('.pin-key.del');
  await page.click(`.pin-key:text("4")`);
  await page.waitForTimeout(500);
  log(await page.$eval('#screen-admin', el => el.classList.contains('active')) ? '✅' : '❌',
      '正しいPIN(1234)でログイン');
  log(await page.$eval('#mode-auto', el => el.classList.contains('selected')) ? '✅' : '❌',
      'デフォルトモード: auto');

  // 会場追加
  await page.fill('#venue-input', 'テスト会場A');
  await page.click('.venue-add-row button');
  await page.waitForTimeout(300);
  const venueCount = await page.$$eval('.venue-item', els => els.length);
  log(venueCount > 0 ? '✅' : '❌', `会場追加: ${venueCount}件`);

  // 会場選択
  const venueItems = await page.$$('.venue-item');
  await venueItems[venueItems.length - 1].click();
  await page.waitForTimeout(300);
  log(await page.$eval('#selected-venue-badge', el => el.style.display !== 'none') ? '✅' : '❌',
      '会場選択 → バッジ表示');

  // カスタムモード選択テスト
  await page.click('#mode-custom');
  await page.waitForTimeout(200);
  log(await page.$eval('#mode-custom', el => el.classList.contains('selected')) ? '✅' : '❌',
      'カスタムモード選択');
  const customOpacity = await page.$eval('#custom-time-row', el => el.style.opacity);
  log(customOpacity === '1' ? '✅' : '❌', `カスタム入力欄 表示: opacity=${customOpacity}`);

  // autoに戻す＆保存
  await page.click('#mode-auto');
  await page.click('button[onclick="saveSettings()"]');
  await page.waitForTimeout(400);
  const bannerText = await page.$eval('#save-banner', el => el.textContent);
  log(bannerText.includes('保存') ? '✅' : '❌', `保存バナー: ${bannerText}`);

  log(await page.$('button[onclick="downloadCSV()"]') ? '✅' : '❌', 'CSVダウンロードボタン存在');

  if (jsErrors.length > 0) {
    log('⚠️', `JSエラー: ${jsErrors.join(' | ').slice(0,100)}`);
    jsErrors.length = 0;
  }

  // ── result.html (データなし) ───────────────────────────
  log('🔍', '--- result.html (データなし) ---');
  await page.evaluate(() => {
    sessionStorage.removeItem('final_result');
    sessionStorage.removeItem('posture_photo');
    const r = JSON.parse(localStorage.getItem('aidock_records') || '[]');
    r.forEach(rec => delete rec.completedAt);
    localStorage.setItem('aidock_records', JSON.stringify(r));
  });
  await page.goto(`${BASE}/result.html`);
  await page.waitForTimeout(1200);
  const heroHtml = await page.$eval('#hero', el => el.textContent);
  log(heroHtml.includes('測定データがありません') ? '✅' : '❌',
      `データなし表示: ${heroHtml.slice(0,30)}`);

  // ── result.html (完全データ) ───────────────────────────
  log('🔍', '--- result.html (完全データ) ---');
  jsErrors.length = 0;
  await page.evaluate(() => {
    localStorage.setItem('aidock_records', JSON.stringify([{
      uid: 'AID-FULLTEST',
      email: 'test@example.com',
      gender: '男性', age: 40, height: '170', weight: '65',
      tier: '現役世代', venue: 'テスト会場',
      registeredAt: new Date().toISOString(),
      boothA_count: 45, boothA_sec: 60, boothA_score: 75,
      leftHeld: 25, rightHeld: 28, balScore: 88, combined: 81,
      completedAt: new Date().toISOString()
    }]));
    sessionStorage.setItem('final_result', JSON.stringify({
      uid: 'AID-FULLTEST',
      email: 'test@example.com',
      gender: '男性', age: 40, height: '170', weight: '65',
      tier: '現役世代', count: 45, sec: 60, total: 75,
      leftHeld: 25, rightHeld: 28, balScore: 88, combined: 81,
      hasPhoto: false,
    }));
  });
  await page.goto(`${BASE}/result.html`);
  await page.waitForTimeout(1800);

  log(await page.$eval('#loading', el => el.style.display === 'none') ? '✅' : '❌',
      'ローディング非表示');
  const bodyAge = await page.$eval('#body-age', el => el.textContent);
  log(/^\d+$/.test(bodyAge) && bodyAge !== '—' ? '✅' : '❌', `からだ年齢: ${bodyAge}歳`);
  log((await page.$eval('#hero-name', el => el.textContent)).includes('test@example.com') ? '✅' : '❌',
      'メールアドレス表示');
  log(await page.$eval('#hero-score', el => el.textContent) === '81' ? '✅' : '❌',
      '総合スコア: 81点');
  log(await page.$eval('#score-a', el => el.textContent) === '75' ? '✅' : '❌',
      'ブースAスコア: 75点');
  log(await page.$eval('#score-b', el => el.textContent) === '88' ? '✅' : '❌',
      'ブースBスコア: 88点');
  log(await page.$('canvas#radar') ? '✅' : '❌', 'レーダーチャート canvas');
  log(await page.$eval('#advice-list', el => el.innerHTML.length) > 50 ? '✅' : '❌',
      'アドバイス生成済み');
  log(await page.$eval('#age-diff', el => el.textContent).then(t => t.includes('若い') || t.includes('年上') || t.includes('同等')) ? '✅' : '❌',
      `年齢差: ${await page.$eval('#age-diff', el => el.textContent)}`);
  log(await page.$eval('#history-card', el => el.style.display === 'none') ? '✅' : '❌',
      '過去データ: 1件→非表示');
  log(await page.$('.action-btn.home') ? '✅' : '❌', '🏠ハブへボタン');
  log(await page.$('a[href="index.html"]') ? '✅' : '❌', '次の利用者リンク');

  const expected = 40 + Math.round((70 - 81) / 2);
  log(parseInt(bodyAge) === expected ? '✅' : '❌',
      `からだ年齢計算: 期待${expected}歳 / 実際${bodyAge}歳`);

  if (jsErrors.length > 0) {
    log('⚠️', `JSエラー: ${jsErrors.join(' | ').slice(0,150)}`);
    jsErrors.length = 0;
  }

  // ── booth-b.html ──────────────────────────────────────
  log('🔍', '--- booth-b.html ---');
  jsErrors.length = 0;
  await page.evaluate(() => {
    sessionStorage.setItem('boothA_result', JSON.stringify({
      uid: 'AID-TESTXXX', email: 'test@example.com',
      gender: '男性', age: 40, height: '170', weight: '65',
      tier: '現役世代', count: 45, sec: 60, total: 75, scores: {}
    }));
  });
  await page.goto(`${BASE}/booth-b.html`);
  await page.waitForLoadState('networkidle');

  log((await page.title()).includes('ブースB') ? '✅' : '❌', 'タイトル確認');
  log(await page.$eval('#screen-intro', el => el.classList.contains('active')) ? '✅' : '❌',
      'イントロ画面が初期表示');
  log(await page.$eval('#prev-count', el => el.textContent) === '45 回' ? '✅' : '❌',
      'ブースAカウント引き継ぎ: 45回');
  log(await page.$eval('#prev-score', el => el.textContent) === '75 点' ? '✅' : '❌',
      'ブースAスコア引き継ぎ: 75点');
  log(await page.$eval('#prev-tier', el => el.textContent) === '現役世代' ? '✅' : '❌',
      '年齢区分引き継ぎ: 現役世代');

  // 「足が下りました」ボタンが初期非表示か
  log(await page.$eval('#foot-down-btn', el => el.style.display === 'none' || el.style.display === '') ? '✅' : '❌',
      '「足が下りました」ボタン初期非表示');

  if (jsErrors.length > 0) {
    log('⚠️', `JSエラー: ${jsErrors.join(' | ').slice(0,150)}`);
  }

  await browser.close();

  console.log('\n===== 動作確認まとめ =====');
  const passed = results.filter(r => r.startsWith('✅')).length;
  const failed = results.filter(r => r.startsWith('❌')).length;
  const warned = results.filter(r => r.startsWith('⚠️')).length;
  console.log(`✅ 合格: ${passed} 件`);
  console.log(`❌ 不合格: ${failed} 件`);
  console.log(`⚠️ 警告: ${warned} 件`);
  if (failed > 0) {
    console.log('\n--- 失敗項目 ---');
    results.filter(r => r.startsWith('❌')).forEach(r => console.log(r));
  }
}

run().catch(e => {
  console.error('❌ スクリプトエラー:', e.message.slice(0, 400));
  process.exit(1);
});
