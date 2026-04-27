/* ============================================================
   自転車（軽車両）違反行為クイズ - quiz.js
   カテゴリ: ながら運転・信号無視/一時不停止・逆走・歩行者妨害・酒気帯び(1問)
   全20問 / 4択 / 問題・選択肢をランダム化
   ============================================================ */

'use strict';

/* ----------------------------------------------------------
   問題データ
   signImage: img/ フォルダに後から差し替え可能な画像パス
   ---------------------------------------------------------- */
const QUIZ_DATA = [

  /* ===== カテゴリ1: ながら運転（スマホ等の保持・注視） ===== */
  {
    id: 1,
    question: '自転車に乗りながらスマートフォンを手に持って通話した。これはどんな違反ですか？',
    signImage: 'img/kiken01.png',
    category: 'ながら運転',
    choices: [
      { text: '片手運転になるが違反ではない', correct: false },
      { text: 'ながら運転（携帯電話使用等）の違反', correct: true },
      { text: '周囲に注意すれば問題ない', correct: false },
      { text: 'ハンズフリーでないと違反', correct: false }
    ],
    explanation: '自転車に乗りながらスマートフォンを手で保持して通話することは「携帯電話使用等（保持）」の違反です。2026年5月施行の改正道路交通法により自転車にも青切符が交付されます。反則金（目安：6,000円）。'
  },
  {
    id: 2,
    question: '自転車で走行中、ポケットからスマホを取り出し画面を見ながら走った。問題はありますか？',
    signImage: 'img/kiken02.png',
    category: 'ながら運転',
    choices: [
      { text: '一瞬なら問題ない', correct: false },
      { text: '止まってから見れば問題ない（走行中は違反）', correct: true },
      { text: '歩道なら問題ない', correct: false },
      { text: 'ながら運転は自動車だけの規制', correct: false }
    ],
    explanation: '走行中に画面を注視する行為は「携帯電話使用等（画像目視）」に該当し、自転車でも違反です。交差点や歩道での事故リスクが非常に高く、危険性があると判断されればより重い罰則が適用される場合もあります。反則金（目安：6,000円）。'
  },
  {
    id: 3,
    question: '自転車に乗りながらイヤホンを両耳につけて音楽を聴いた。どうなりますか？',
    signImage: 'img/kiken03.png',
    category: 'ながら運転',
    choices: [
      { text: '音量を小さくすれば問題ない', correct: false },
      { text: '片耳だけなら問題ない', correct: false },
      { text: '周囲の音が聞こえない状態は違反になる', correct: true },
      { text: '骨伝導イヤホンなら常に問題ない', correct: false }
    ],
    explanation: '両耳にイヤホンをつけて周囲の音が聞こえない状態での運転は、都道府県の交通規則により「安全運転義務違反」等に問われます。緊急車両のサイレンや他者の警告が聞こえず重大事故につながります。反則金（目安：3,000〜6,000円程度、都道府県による）。'
  },
  {
    id: 4,
    question: '自転車走行中に傘を片手でさしながら雨の中を走った。この行為は？',
    signImage: 'img/kiken04.png',
    category: 'ながら運転',
    choices: [
      { text: '小雨なら問題ない', correct: false },
      { text: '歩道を走るなら傘を差してもよい', correct: false },
      { text: '傘差し運転は安全運転義務違反', correct: true },
      { text: '片手でも安全に走れれば問題ない', correct: false }
    ],
    explanation: '傘を片手で差しながら自転車を運転する「傘差し運転」は、ハンドル操作が不十分になり安全運転義務違反に該当します。2026年5月施行の改正道路交通法で青切符の対象です。雨天時はレインコートを使用しましょう。反則金（目安：3,000円）。'
  },

  /* ===== カテゴリ2: 酒気帯び運転（1問のみ） ===== */
  {
    id: 5,
    question: 'お酒を飲んだ後に自転車に乗ってはいけない理由として、正しいものはどれですか？',
    signImage: 'img/kiken05.png',
    category: '酒気帯び運転',
    choices: [
      { text: '自転車は飲酒運転の規則に含まれない', correct: false },
      { text: 'ふらついて事故を起こしやすく、法律で禁止されている', correct: true },
      { text: '歩道を走れば大丈夫', correct: false },
      { text: '近所なら問題ない', correct: false }
    ],
    explanation: 'お酒を飲むと判断力や運動能力が下がり、ふらついて歩行者や車にぶつかる危険があります。自転車の飲酒運転は道路交通法で厳しく禁止されており、重い罰則があります。「少しだから」「近くだから」は通じません。絶対にやめましょう。'
  },
  {
    id: 6,
    question: '友達を自転車の後ろに乗せて2人で走った。これは違反になりますか？',
    signImage: 'img/kiken06.png',
    category: 'その他の違反',
    choices: [
      { text: '友達なら乗せてもよい', correct: false },
      { text: '歩道なら2人乗りしてもよい', correct: false },
      { text: '原則として違反になる', correct: true },
      { text: 'ゆっくり走れば問題ない', correct: false }
    ],
    explanation: '自転車の二人乗りは原則として違反です（安全運転義務違反）。ただし、幼児用座席に6歳未満の子どもを乗せる場合や、特別に認められた自転車（タンデム自転車など）は例外です。「友達だから」「近くだから」は関係なく、転倒すると2人とも大けがをする危険があります。反則金（目安：3,000円）。'
  },

  /* ===== カテゴリ3: 信号無視・一時不停止 ===== */
  {
    id: 7,
    question: '赤信号で止まろうとしたとき「自転車だから少しくらい…」と思い、そのまま進んだ。これは？',
    signImage: 'img/kiken07.png',
    category: '信号無視',
    choices: [
      { text: '自転車は信号に従わなくてよい', correct: false },
      { text: '歩行者信号に従えばよい', correct: false },
      { text: '信号無視の違反、青切符の対象', correct: true },
      { text: '車が来ていなければ問題ない', correct: false }
    ],
    explanation: '自転車も信号機に従う義務があります。赤信号を無視して進むのは信号無視の違反です。2026年5月施行の改正道路交通法で自転車にも青切符が交付されます。反則金（目安：6,000円）。'
  },
  {
    id: 8,
    question: '「止まれ（一時停止）」の標識のある交差点で、左右を見ながらゆっくり通過した。問題は？',
    signImage: 'img/kiken08.png',
    category: '一時不停止',
    choices: [
      { text: '徐行したから問題ない', correct: false },
      { text: '車輪が止まらなければ一時不停止の違反', correct: true },
      { text: '自転車は止まれ標識に従わなくてよい', correct: false },
      { text: '左右確認すれば一時停止しなくてよい', correct: false }
    ],
    explanation: '「止まれ」標識では、車輪が完全に止まるまで一時停止しなければなりません。「ゆっくり通過」「徐行」では違反になります。2026年5月施行の改正道路交通法で青切符の対象です。反則金（目安：5,000円）。'
  },
  {
    id: 9,
    question: '黄色信号になったとき「急いで渡り切ろう」と加速して交差点に進入した。これは？',
    signImage: 'img/kiken09.png',
    category: '信号無視',
    choices: [
      { text: '黄色は「注意して進め」なので問題ない', correct: false },
      { text: '交差点手前で止まれる場合は停止が原則', correct: true },
      { text: '速度を上げれば問題ない', correct: false },
      { text: '自転車は黄信号を無視できる', correct: false }
    ],
    explanation: '黄色信号は「止まれ（停止できる場合）」を意味します。交差点手前で安全に停止できるなら止まるのが原則で、加速して進入するのは信号無視に準じた危険行為です。自転車も信号機の規則に従わなければなりません。反則金（目安：6,000円）。'
  },
  {
    id: 10,
    question: '踏切の前に「止まれ」の標示がありました。自転車はどうすべきですか？',
    signImage: 'img/kiken10.png',
    category: '一時不停止',
    choices: [
      { text: '電車が来ていなければ止まらなくてよい', correct: false },
      { text: '遮断機が上がっていれば止まらなくてよい', correct: false },
      { text: '必ず一時停止して左右を確認してから通過', correct: true },
      { text: '自転車は踏切に「止まれ」は適用されない', correct: false }
    ],
    explanation: '踏切では、電車の有無にかかわらず一時停止して安全を確認する義務があります（道路交通法第33条）。自転車も同様です。一時停止を怠ると踏切安全義務違反になります。反則金（目安：5,000円）。'
  },

  /* ===== カテゴリ4: 逆走（右側通行） ===== */
  {
    id: 11,
    question: '目的地が近いので、車道の右側（対向車線側）を自転車で走った。これは？',
    signImage: 'img/kiken11.png',
    category: '逆走・右側通行',
    choices: [
      { text: '自転車は右側でも走れる', correct: false },
      { text: '右側通行（逆走）の違反', correct: true },
      { text: '歩道が混んでいれば右側でもよい', correct: false },
      { text: '夜間なら右側の方が安全', correct: false }
    ],
    explanation: '自転車は車道の左側を通行しなければなりません（道路交通法第17条・第18条）。右側通行（逆走）は、対向車との正面衝突事故を引き起こす非常に危険な行為です。2026年5月施行の改正道路交通法で青切符の対象です。反則金（目安：5,000円）。'
  },
  {
    id: 12,
    question: '「一方通行」の標識がある道路を、自転車で逆方向に走った。標識には「自転車を除く」などの追加の表示はありません。これは違反ですか？',
    signImage: 'img/kiken12.png',
    category: '逆走・右側通行',
    choices: [
      { text: '自転車は一方通行に関係ない', correct: false },
      { text: '補助標識がなければ逆走は違反', correct: true },
      { text: '一方通行は自動車だけに適用される', correct: false },
      { text: 'ゆっくり走れば逆走できる', correct: false }
    ],
    explanation: '一方通行の道路では、「自転車を除く」「軽車両を除く」「自動車・原付」などの補助標識がある場合に限り逆走が許可されます。補助標識がなければ自転車も一方通行に従う義務があります。無視すると交通違反（青切符）の対象です。反則金（目安：5,000円）。'
  },
  {
    id: 13,
    question: '自転車専用レーンが設けられた道路で、右側のレーンを使って走った。問題はありますか？',
    signImage: 'img/kiken13.png',
    category: '逆走・右側通行',
    choices: [
      { text: '自転車専用レーンならどこでも走れる', correct: false },
      { text: '左側の自転車専用レーンを走らなければならない', correct: true },
      { text: 'レーンがあれば右側でも問題ない', correct: false },
      { text: '対向車がいなければ右側でもよい', correct: false }
    ],
    explanation: '自転車専用レーン（青線）が設置されている場合でも、左側通行の原則は守らなければなりません。右側の逆走レーンを使うことは右側通行違反になります。自転車は必ず進行方向左側のレーンを走行してください。反則金（目安：5,000円）。'
  },

  /* ===== カテゴリ5: 歩行者妨害 ===== */
  {
    id: 14,
    question: '横断歩道を歩行者が渡っているのに止まらず、横断歩道の脇をすり抜けて通った。これは？',
    signImage: 'img/kiken14.png',
    category: '歩行者妨害',
    choices: [
      { text: '当たらなければ問題ない', correct: false },
      { text: '横断歩行者等妨害の違反', correct: true },
      { text: '歩行者が先に気をつけるべき', correct: false },
      { text: '自転車は横断歩道のルールに縛られない', correct: false }
    ],
    explanation: '横断歩道に歩行者がいる場合、自転車は必ず一時停止して歩行者を先に渡らせなければなりません（道路交通法第38条）。横断歩道の脇をすり抜けることも妨害行為に当たります。2026年5月施行の改正道路交通法で青切符の対象です。反則金（目安：6,000円）。'
  },
  {
    id: 15,
    question: '歩行者専用道路を自転車で速く走り、歩行者の間を縫うように走り抜けた。どうなりますか？',
    signImage: 'img/kiken15.png',
    category: '歩行者妨害',
    choices: [
      { text: '歩行者専用道路は自転車も自由に走れる', correct: false },
      { text: '歩行者優先義務違反・歩行者妨害', correct: true },
      { text: 'ベルを鳴らせば問題ない', correct: false },
      { text: '車道が危険なら歩道をどう走ってもよい', correct: false }
    ],
    explanation: '歩行者専用道路は歩行者のための道路です。補助標識で自転車の通行が認められている場合でも、歩行者優先で徐行し歩行者を妨害してはなりません。速く走ったりすり抜けたりすれば歩行者妨害・安全運転義務違反です。反則金（目安：6,000円）。'
  },
  {
    id: 16,
    question: '歩道で歩行者が前を歩いていたので、ベルを鳴らして道を空けさせた。問題は？',
    signImage: 'img/kiken16.png',
    category: '歩行者妨害',
    choices: [
      { text: '警告するためのベルは常に使ってよい', correct: false },
      { text: 'ベルで歩行者をどかすのは歩行者妨害・警音器使用義務違反', correct: true },
      { text: '歩道では自転車が優先', correct: false },
      { text: '歩行者が気づかないのが悪い', correct: false }
    ],
    explanation: '自転車のベル（警音器）は危険回避など法定の場合にのみ使用できます。歩行者をどかすためにベルを鳴らすのは、警音器使用義務違反かつ歩行者妨害にあたります。歩道では歩行者最優先。自転車は降りて押すか、歩行者が通るのを待ちましょう。反則金（目安：3,000円）。'
  },
  {
    id: 17,
    question: '夜間、歩道を無灯火で走行中に歩行者と接触しそうになった。どんな違反ですか？',
    signImage: 'img/kiken17.png',
    category: '歩行者妨害',
    choices: [
      { text: '夜間の無灯火は自転車には関係ない', correct: false },
      { text: '無灯火運転＋安全運転義務違反', correct: true },
      { text: '反射材をつけていれば無灯火でよい', correct: false },
      { text: '街灯があれば灯火不要', correct: false }
    ],
    explanation: '夜間（日没〜日出）は自転車もライトを点灯する義務があります（道路交通法第52条）。無灯火での走行は「灯火不備（無灯火）」の違反です。視認性が下がり歩行者や他の車両と衝突する危険性が高まります。反則金（目安：5,000円）。'
  },

  /* ===== 複合・その他 ===== */
  {
    id: 18,
    question: '夜間、イヤホンをしてスマホを手に持ったまま赤信号を無視してライトなしで自転車で走った。このとき同時にいくつの違反をしていますか？',
    signImage: 'img/kiken18.png',
    category: 'ながら運転',
    choices: [
      { text: '1つ（スマホを持っているだけ）', correct: false },
      { text: '2つ（スマホ＋信号無視）', correct: false },
      { text: '3つ（スマホ＋イヤホン＋信号無視）', correct: false },
      { text: '4つ（スマホ＋イヤホン＋信号無視＋無灯火）', correct: true }
    ],
    explanation: 'この行為は4つの違反が同時に重なっています。①スマホ保持（ながら運転）、②イヤホンで周囲の音が聞こえない（安全運転義務違反）、③赤信号を無視（信号無視）、④夜間ライトなし（無灯火）。違反が重なるほど罰則も重くなります。一つひとつは「たいしたことない」と思っても、重なると大きな事故につながります！'
  },
  {
    id: 19,
    question: '自転車に乗るとき、ヘルメットについて正しいのはどれですか？',
    signImage: 'img/kiken19.png',
    category: 'その他の違反',
    choices: [
      { text: 'ヘルメットは子どもだけかぶればよい', correct: false },
      { text: '大人も子どもも全員かぶることが望ましい', correct: true },
      { text: 'ヘルメットはスピードを出すときだけかぶればよい', correct: false },
      { text: 'ヘルメットをかぶると視界が悪くなるので不要', correct: false }
    ],
    explanation: '2023年4月の道路交通法改正により、自転車に乗るすべての人（大人も含む）のヘルメット着用が「努力義務」になりました。罰則はありませんが、転倒時に頭を守るためにかぶることが強く推奨されています。また、自転車乗車中の死亡事故の約6割が頭部へのダメージが原因です。'
  },
  {
    id: 20,
    question: '自転車で走っていて、不注意で歩行者にぶつかってケガをさせてしまいました。このとき自転車側はどうなりますか？',
    signImage: 'img/kiken20.png',
    category: '歩行者妨害',
    choices: [
      { text: '自転車は軽いので責任は軽い', correct: false },
      { text: 'ぶつかった相手が悪いので責任はない', correct: false },
      { text: '「ごめんなさい」と謝れば解決する', correct: false },
      { text: '相手の治療費などを払う責任が生じる', correct: true }
    ],
    explanation: '自転車で歩行者にぶつかってケガをさせると、治療費や慰謝料などを払う責任（民事責任）が生じます。場合によっては何百万円もの賠償になることもあります。自転車保険に加入していれば保険で対応できます。自転車に乗るときは常に「もし誰かにぶつかったら」と意識して安全運転を心がけましょう。'
  }

]; /* /QUIZ_DATA */


/* ----------------------------------------------------------
   ユーティリティ: Fisher-Yates シャッフル
   ---------------------------------------------------------- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


/* ----------------------------------------------------------
   QuizApp: クイズのステート管理
   ---------------------------------------------------------- */
const QuizApp = {
  questions:    [],
  currentIndex: 0,
  score:        0,
  answers:      [],

  /** 初期化（問題をシャッフル） */
  init() {
    this.questions    = shuffle(QUIZ_DATA);
    this.currentIndex = 0;
    this.score        = 0;
    this.answers      = [];
  },

  /** 現在の問題を返す */
  current() {
    return this.questions[this.currentIndex];
  },

  /** 選択肢をシャッフルして返す */
  getShuffledChoices() {
    return shuffle(this.current().choices);
  },

  /** 回答を記録してスコアを更新、正否を返す */
  answer(choiceText) {
    const q = this.current();
    const correctText = q.choices.find(c => c.correct).text;
    const isCorrect   = (choiceText === correctText);
    if (isCorrect) this.score++;
    this.answers.push({
      questionId:   q.id,
      question:     q.question,
      category:     q.category,
      signImage:    q.signImage,
      correctText,
      selectedText: choiceText,
      correct:      isCorrect,
      explanation:  q.explanation
    });
    return isCorrect;
  },

  /** 次の問題へ進む。問題が残っていれば true、終了なら false */
  next() {
    this.currentIndex++;
    return this.currentIndex < this.questions.length;
  },

  /** 進捗情報を返す */
  progress() {
    const total = this.questions.length;
    const num   = this.currentIndex + 1;
    return {
      num,
      total,
      pct: Math.round((this.currentIndex / total) * 100)
    };
  },

  /** 結果を localStorage に保存 */
  saveResult() {
    const data = {
      score: this.score,
      total: this.questions.length,
      answers: this.answers
    };
    localStorage.setItem('bicycleRulesQuizResult', JSON.stringify(data));
  }
};


/* ----------------------------------------------------------
   DOM レンダラー
   ---------------------------------------------------------- */
const App = {

  /* --- 要素取得 --- */
  get startScreen()     { return document.getElementById('start-screen'); },
  get quizScreen()      { return document.getElementById('quiz-screen'); },
  get questionNumEl()   { return document.getElementById('question-num'); },
  get totalNumEl()      { return document.getElementById('total-num'); },
  get progressFillEl()  { return document.getElementById('progress-fill'); },
  get scoreDisplayEl()  { return document.getElementById('score-display'); },
  get signContainerEl() { return document.getElementById('sign-container'); },
  get categoryLabelEl() { return document.getElementById('category-label'); },
  get questionTextEl()  { return document.getElementById('question-text'); },
  get choicesGridEl()   { return document.getElementById('choices-grid'); },
  get explanationEl()   { return document.getElementById('explanation-panel'); },
  get verdictEl()       { return document.getElementById('verdict'); },
  get correctAnsEl()    { return document.getElementById('correct-answer'); },
  get descTextEl()      { return document.getElementById('desc-text'); },
  get btnNext()         { return document.getElementById('btn-next'); },

  /* --- 開始画面表示 --- */
  showStart() {
    this.startScreen.classList.remove('hidden');
    this.quizScreen.classList.add('hidden');
  },

  /* --- クイズ開始 --- */
  startQuiz() {
    QuizApp.init();
    this.startScreen.classList.add('hidden');
    this.quizScreen.classList.remove('hidden');
    this.totalNumEl.textContent = QuizApp.questions.length;
    this.renderQuestion();
  },

  /* --- 問題をレンダリング --- */
  renderQuestion() {
    const q = QuizApp.current();
    const { num, total, pct } = QuizApp.progress();

    // 進捗更新
    this.questionNumEl.textContent  = num;
    this.progressFillEl.style.width = pct + '%';
    this.scoreDisplayEl.textContent = `✅ ${QuizApp.score} / ${QuizApp.currentIndex}`;

    // カテゴリラベル
    const catColors = {
      'ながら運転':    '#FF6D00',
      '酒気帯び運転':  '#9C27B0',
      '信号無視':      '#E53935',
      '一時不停止':    '#E53935',
      '逆走・右側通行':'#1565C0',
      '歩行者妨害':    '#2E7D32'
    };
    const catColor = catColors[q.category] || '#546E7A';
    if (this.categoryLabelEl) {
      this.categoryLabelEl.textContent  = q.category;
      this.categoryLabelEl.style.background = catColor;
    }

    // 危険シーン画像
    this._renderSignImage(q);

    // 問題文
    this.questionTextEl.textContent = q.question;

    // 選択肢生成（シャッフル済み）
    const grid = this.choicesGridEl;
    grid.innerHTML = '';
    QuizApp.getShuffledChoices().forEach(choice => {
      const btn = document.createElement('button');
      btn.type        = 'button';
      btn.className   = 'choice-btn';
      btn.textContent = choice.text;
      // iOS Safari / LINE内部ブラウザ対策: タップ後すぐblurしてfocus残りを防ぐ
      btn.addEventListener('touchend', () => { setTimeout(() => btn.blur(), 100); }, { passive: true });
      btn.addEventListener('click', () => this.onChoiceClick(btn, choice.text, grid));
      grid.appendChild(btn);
    });

    // 解説パネルを非表示
    this.explanationEl.classList.add('hidden');
    this.btnNext.classList.add('hidden');
  },

  /* --- 画像レンダリング --- */
  _renderSignImage(q) {
    const container = this.signContainerEl;
    container.innerHTML = '';
    if (q.signImage) {
      const img = document.createElement('img');
      img.src   = q.signImage;
      img.alt   = q.category;
      img.className = 'sign-img';
      container.appendChild(img);
    }
  },

  /* --- 選択肢クリック --- */
  onChoiceClick(clickedBtn, choiceText, grid) {
    const isCorrect = QuizApp.answer(choiceText);
    const correctText = QuizApp.current().choices.find(c => c.correct).text;

    // 全ボタン無効化
    grid.querySelectorAll('.choice-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctText) btn.classList.add('correct');
    });
    if (!isCorrect) clickedBtn.classList.add('wrong');

    // 解説表示
    this.verdictEl.textContent   = isCorrect ? '✅ 正解！' : '❌ 不正解…';
    this.verdictEl.className     = isCorrect ? 'verdict-ok' : 'verdict-ng';
    this.correctAnsEl.textContent = isCorrect ? '' : `正解：${correctText}`;

    // 反則金バッジ＋解説文
    const expText = QuizApp.current().explanation;
    this._renderExplanation(expText);

    this.explanationEl.classList.remove('hidden');
    this.btnNext.classList.remove('hidden');

    // スコア更新
    this.scoreDisplayEl.textContent = `✅ ${QuizApp.score} / ${QuizApp.currentIndex + 1}`;

    // 最終問題なら「結果を見る」
    if (QuizApp.currentIndex === QuizApp.questions.length - 1) {
      this.btnNext.textContent = '結果を見る 🏁';
    }
  },

  /* --- 解説＋反則金バッジのレンダリング --- */
  _renderExplanation(text) {
    const panel = this.descTextEl;
    panel.innerHTML = '';

    // 反則金パターン: 「反則金（目安：○円）」または「反則金（目安：○円程度）」を抽出
    const fineMatch = text.match(/反則金（目安：([^）]+)）/);
    // 刑事罰パターン
    const criminalMatch = text.match(/刑事罰（[^）]+）|重い罰則|懲役|罰金が科/);

    // 解説文から反則金部分を除去してクリーンなテキストを作成
    const cleanText = text.replace(/反則金（目安：[^）]+）。?/g, '').trim();

    // 解説テキストを表示
    const p = document.createElement('p');
    p.textContent = cleanText;
    panel.appendChild(p);

    // 反則金バッジを生成
    if (fineMatch) {
      const amount = fineMatch[1];
      const badge = document.createElement('div');
      badge.className = 'fine-badge';
      badge.innerHTML = `<span class="fine-icon">💴</span><span class="fine-label">反則金 目安</span>${amount}`;
      panel.appendChild(badge);
    } else if (criminalMatch) {
      const badge = document.createElement('div');
      badge.className = 'fine-badge fine-criminal';
      badge.innerHTML = `<span class="fine-icon">⚖️</span><span class="fine-label">罰則</span>刑事罰の対象`;
      panel.appendChild(badge);
    }
  },

  /* --- 次の問題 / 結果へ --- */
  goNext() {
    const hasMore = QuizApp.next();
    if (hasMore) {
      this.renderQuestion();
      // 進捗バーの先頭までスクロール
      this.progressArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // 最終問題終了 → 中間ページへ
      QuizApp.saveResult();
      window.location.href = 'interstitial.html';
    }
  },

  get progressArea() { return document.querySelector('.progress-area'); }
};


/* ----------------------------------------------------------
   イベントバインド
   ---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  App.showStart();

  document.getElementById('btn-start').addEventListener('click', () => App.startQuiz());
  document.getElementById('btn-next').addEventListener('click',  () => App.goNext());
});
