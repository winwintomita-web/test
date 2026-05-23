/* ============================================================
   自転車（軽車両）違反行為クイズ - quiz.js
   カテゴリ: ながら運転・信号無視/一時不停止・逆走・歩行者妨害・酒気帯び(1問)
   全20問 / 4択 / 問題・選択肢をランダム化
   ============================================================ */

'use strict';

const SUPPORTED_LANGS = ['ja', 'en', 'zh', 'ko', 'vi', 'tl', 'id', 'my', 'pt', 'fr', 'it'];
const DEFAULT_LANG = 'ja';

const UI_TEXT = {
  ja: {
    appTitle: '自転車 違反行為クイズ',
    appSubtitle: '青切符で学ぶ！ながら・酒気帯び・信号無視・逆走・歩行者妨害',
    startTitle: 'あなたは大丈夫？<br>自転車の違反をチェック！',
    warningTitle: '🔔 2026年5月施行 改正道路交通法',
    warningText: ' 自転車にも青切符（交通反則告知書）が交付されます。知らなかったでは済みません。このクイズで違反行為を確認しましょう！',
    feature1: '🔢 全 <strong>20問</strong>・4択クイズ',
    feature2: '💡 <strong>解説＆反則金</strong>の説明あり',
    start: 'スタート 🚀',
    progressPrefix: '問題',
    progressScoreLabel: '🏆 正解数',
    score: (ok, all) => `✅ ${ok} / ${all}`,
    next: '次の問題へ ▶',
    result: '結果を見る 🏁',
    categoryFallback: 'カテゴリ',
    verdictOk: '✅ 正解！',
    verdictNg: '❌ 不正解…',
    correctAnswer: ans => `正解：${ans}`,
    fineLabel: '反則金 目安',
    penaltyLabel: '罰則',
    criminalTarget: '刑事罰の対象'
  },
  en: { appTitle: 'Bicycle Violation Quiz', appSubtitle: 'Learn traffic safety before penalties', startTitle: 'Are you ready?<br>Check bicycle violations!', warningTitle: '🔔 Road Traffic Law revision (May 2026)', warningText: ' Bicycle violations can receive a blue ticket. Review key rules with this quiz.', feature1: '🔢 <strong>20 questions</strong>, 4 choices each', feature2: '💡 Includes <strong>explanations & fine guide</strong>', start: 'Start 🚀', progressPrefix: 'Question', progressScoreLabel: '🏆 Correct', score: (ok, all) => `✅ ${ok} / ${all}`, next: 'Next ▶', result: 'See Result 🏁', categoryFallback: 'Category', verdictOk: '✅ Correct!', verdictNg: '❌ Incorrect', correctAnswer: ans => `Correct: ${ans}`, fineLabel: 'Estimated Fine', penaltyLabel: 'Penalty', criminalTarget: 'Subject to criminal penalty' },
  zh: { appTitle: '自行车违规测验', appSubtitle: '蓝色罚单与交通安全', startTitle: '你准备好了吗？<br>检查自行车违规行为！', warningTitle: '🔔 2026年5月修订道路交通法', warningText: ' 自行车违规也可能收到蓝色罚单。通过测验确认规则。', feature1: '🔢 共 <strong>20题</strong>，每题4选1', feature2: '💡 含<strong>解析与罚款参考</strong>', start: '开始 🚀', progressPrefix: '题目', progressScoreLabel: '🏆 正确数', score: (ok, all) => `✅ ${ok} / ${all}`, next: '下一题 ▶', result: '查看结果 🏁', categoryFallback: '类别', verdictOk: '✅ 正确！', verdictNg: '❌ 错误', correctAnswer: ans => `正确答案：${ans}`, fineLabel: '罚款参考', penaltyLabel: '处罚', criminalTarget: '可能涉及刑事处罚' },
  ko: { appTitle: '자전거 위반 퀴즈', appSubtitle: '교통안전을 위한 블루티켓 대비', startTitle: '준비되셨나요?<br>자전거 위반을 확인해보세요!', warningTitle: '🔔 2026년 5월 도로교통법 개정', warningText: ' 자전거 위반에도 블루티켓이 적용될 수 있습니다. 퀴즈로 확인하세요.', feature1: '🔢 총 <strong>20문항</strong>, 4지선다', feature2: '💡 <strong>해설 및 범칙금</strong> 안내 포함', start: '시작 🚀', progressPrefix: '문제', progressScoreLabel: '🏆 정답 수', score: (ok, all) => `✅ ${ok} / ${all}`, next: '다음 문제 ▶', result: '결과 보기 🏁', categoryFallback: '카테고리', verdictOk: '✅ 정답!', verdictNg: '❌ 오답', correctAnswer: ans => `정답: ${ans}`, fineLabel: '예상 범칙금', penaltyLabel: '처벌', criminalTarget: '형사처벌 대상' },
  vi: { appTitle: 'Trac nghiem vi pham xe dap', appSubtitle: 'Hoc an toan giao thong truoc khi bi phat', startTitle: 'Ban da san sang?<br>Kiem tra vi pham xe dap!', warningTitle: '🔔 Sua doi luat giao thong thang 5/2026', warningText: ' Vi pham xe dap cung co the bi phieu phat mau xanh. Hay kiem tra bang quiz.', feature1: '🔢 <strong>20 cau hoi</strong>, moi cau 4 lua chon', feature2: '💡 Co <strong>giai thich va muc phat tham khao</strong>', start: 'Bat dau 🚀', progressPrefix: 'Cau', progressScoreLabel: '🏆 So cau dung', score: (ok, all) => `✅ ${ok} / ${all}`, next: 'Cau tiep ▶', result: 'Xem ket qua 🏁', categoryFallback: 'Danh muc', verdictOk: '✅ Dung!', verdictNg: '❌ Sai', correctAnswer: ans => `Dap an dung: ${ans}`, fineLabel: 'Muc phat tham khao', penaltyLabel: 'Xu phat', criminalTarget: 'Co the bi xu ly hinh su' },
  tl: { appTitle: 'Bicycle Violation Quiz', appSubtitle: 'Aralin ang traffic safety at blue ticket rules', startTitle: 'Handa ka na ba?<br>Suriin ang bicycle violations!', warningTitle: '🔔 Revised Road Traffic Law sa Mayo 2026', warningText: ' Maaaring mabigyan ng blue ticket ang paglabag sa bisikleta. Suriin sa quiz na ito.', feature1: '🔢 <strong>20 tanong</strong>, 4 na pagpipilian bawat isa', feature2: '💡 May <strong>paliwanag at gabay sa multa</strong>', start: 'Simulan 🚀', progressPrefix: 'Tanong', progressScoreLabel: '🏆 Tama', score: (ok, all) => `✅ ${ok} / ${all}`, next: 'Susunod ▶', result: 'Tingnan ang Resulta 🏁', categoryFallback: 'Kategorya', verdictOk: '✅ Tama!', verdictNg: '❌ Mali', correctAnswer: ans => `Tamang sagot: ${ans}`, fineLabel: 'Tantyang Multa', penaltyLabel: 'Parusa', criminalTarget: 'Sakop ng parusang kriminal' },
  id: { appTitle: 'Kuis Pelanggaran Sepeda', appSubtitle: 'Belajar keselamatan lalu lintas dan blue ticket', startTitle: 'Sudah siap?<br>Periksa pelanggaran sepeda Anda!', warningTitle: '🔔 Revisi UU Lalu Lintas Mei 2026', warningText: ' Pelanggaran sepeda juga bisa dikenai blue ticket. Cek aturan lewat kuis ini.', feature1: '🔢 <strong>20 soal</strong>, masing-masing 4 pilihan', feature2: '💡 Dilengkapi <strong>penjelasan & panduan denda</strong>', start: 'Mulai 🚀', progressPrefix: 'Soal', progressScoreLabel: '🏆 Benar', score: (ok, all) => `✅ ${ok} / ${all}`, next: 'Soal Berikutnya ▶', result: 'Lihat Hasil 🏁', categoryFallback: 'Kategori', verdictOk: '✅ Benar!', verdictNg: '❌ Salah', correctAnswer: ans => `Jawaban benar: ${ans}`, fineLabel: 'Perkiraan Denda', penaltyLabel: 'Sanksi', criminalTarget: 'Dapat terkena pidana' },
  my: { appTitle: 'စက္ဘီးစည္းကမ္း ခ်ိဳးေဖာက္မႈ Quiz', appSubtitle: 'လမ္းအသံုးျပဳလံုျခံဳေရးကို ေလ့လာပါ', startTitle: 'အသင့္ျဖစ္ၿပီလား?<br>စက္ဘီးခ်ိဳးေဖာက္မႈ စစ္ေဆးပါ!', warningTitle: '🔔 2026 ေမ လမ္းစည္းကမ္းဥပေဒ ျပင္ဆင္ခ်က္', warningText: ' စက္ဘီးခ်ိဳးေဖာက္မႈမ်ားအတြက္ blue ticket ခ်မွတ္ႏိုင္ပါသည္။ ဤ quiz ျဖင့္ စစ္ေဆးပါ။', feature1: '🔢 <strong>ေမးခြန္း 20</strong>၊ ေရြးခ်ယ္မႈ 4 ခု', feature2: '💡 <strong>ရွင္းလင္းခ်က္ႏွင့္ ဒဏ္ေငြ</strong> ပါဝင္သည္', start: 'စတင္မည္ 🚀', progressPrefix: 'ေမးခြန္း', progressScoreLabel: '🏆 မွန္ကန္', score: (ok, all) => `✅ ${ok} / ${all}`, next: 'ေနာက္တစ္ခု ▶', result: 'ရလဒ္ၾကည့္မည္ 🏁', categoryFallback: 'အမ်ိဳးအစား', verdictOk: '✅ မွန္သည္!', verdictNg: '❌ မွားသည္', correctAnswer: ans => `အမွန္အေျဖ: ${ans}`, fineLabel: 'ခန္႔မွန္းဒဏ္ေငြ', penaltyLabel: 'အျပစ္ေပးမႈ', criminalTarget: 'ရာဇဝတ္ျပစ္ဒဏ္ သက္ေရာက္ႏိုင္သည္' },
  pt: { appTitle: 'Quiz de Infracoes de Bicicleta', appSubtitle: 'Aprenda seguranca no transito e regras de multa', startTitle: 'Tudo certo?<br>Verifique infracoes de bicicleta!', warningTitle: '🔔 Revisao da lei de transito em maio de 2026', warningText: ' Infracoes de bicicleta tambem podem receber multa azul. Confira no quiz.', feature1: '🔢 <strong>20 perguntas</strong>, 4 opcoes cada', feature2: '💡 Inclui <strong>explicacoes e guia de multa</strong>', start: 'Comecar 🚀', progressPrefix: 'Pergunta', progressScoreLabel: '🏆 Acertos', score: (ok, all) => `✅ ${ok} / ${all}`, next: 'Proxima ▶', result: 'Ver Resultado 🏁', categoryFallback: 'Categoria', verdictOk: '✅ Correto!', verdictNg: '❌ Incorreto', correctAnswer: ans => `Resposta correta: ${ans}`, fineLabel: 'Multa estimada', penaltyLabel: 'Penalidade', criminalTarget: 'Sujeito a penalidade criminal' },
  fr: { appTitle: 'Quiz des infractions a velo', appSubtitle: 'Apprenez la securite routiere et les regles', startTitle: 'Pret ?<br>Verifiez les infractions a velo !', warningTitle: '🔔 Revision du code de la route en mai 2026', warningText: ' Les infractions a velo peuvent aussi recevoir un ticket bleu. Verifiez avec ce quiz.', feature1: '🔢 <strong>20 questions</strong>, 4 choix chacune', feature2: '💡 Avec <strong>explications et estimation des amendes</strong>', start: 'Demarrer 🚀', progressPrefix: 'Question', progressScoreLabel: '🏆 Bonnes reponses', score: (ok, all) => `✅ ${ok} / ${all}`, next: 'Suivant ▶', result: 'Voir le resultat 🏁', categoryFallback: 'Categorie', verdictOk: '✅ Correct !', verdictNg: '❌ Incorrect', correctAnswer: ans => `Bonne reponse : ${ans}`, fineLabel: 'Amende estimee', penaltyLabel: 'Sanction', criminalTarget: 'Peut relever du penal' },
  it: { appTitle: 'Quiz sulle violazioni in bicicletta', appSubtitle: 'Impara sicurezza stradale e regole delle multe', startTitle: 'Pronto?<br>Controlla le violazioni in bici!', warningTitle: '🔔 Revisione del codice stradale da maggio 2026', warningText: ' Anche le violazioni in bici possono ricevere il ticket blu. Verifica con il quiz.', feature1: '🔢 <strong>20 domande</strong>, 4 opzioni ciascuna', feature2: '💡 Include <strong>spiegazioni e guida alle sanzioni</strong>', start: 'Inizia 🚀', progressPrefix: 'Domanda', progressScoreLabel: '🏆 Corrette', score: (ok, all) => `✅ ${ok} / ${all}`, next: 'Prossima ▶', result: 'Vedi risultato 🏁', categoryFallback: 'Categoria', verdictOk: '✅ Corretta!', verdictNg: '❌ Errata', correctAnswer: ans => `Risposta corretta: ${ans}`, fineLabel: 'Sanzione stimata', penaltyLabel: 'Sanzione', criminalTarget: 'Soggetto a pena penale' }
};

const CATEGORY_I18N = {
  'ながら運転': { en: 'Distracted riding', zh: '分心骑行', ko: '주의분산 운전', vi: 'Lai xe mat tap trung', tl: 'Distracted riding', id: 'Berkendara tidak fokus', my: 'အာရံုလြဲ စီးနင္းျခင္း', pt: 'Conducao distraida', fr: 'Conduite distraite', it: 'Guida distratta' },
  '酒気帯び運転': { en: 'Riding under influence', zh: '酒后骑行', ko: '음주 상태 운전', vi: 'Lai xe sau khi uong ruou', tl: 'Pagmamaneho na may alak', id: 'Berkendara dalam pengaruh alkohol', my: 'အရက္ေသာက္ၿပီး စီးနင္းျခင္း', pt: 'Conducao sob efeito de alcool', fr: 'Conduite sous alcool', it: 'Guida in stato di ebbrezza' },
  '信号無視': { en: 'Signal violation', zh: '闯红灯', ko: '신호 위반', vi: 'Vuot den do', tl: 'Paglabag sa ilaw trapiko', id: 'Melanggar lampu lalu lintas', my: 'မီးပြိဳင့္မလိုက္နာ', pt: 'Avanco de sinal', fr: 'Non-respect du feu', it: 'Violazione del semaforo' },
  '一時不停止': { en: 'Failure to stop', zh: '未停车让行', ko: '일시정지 위반', vi: 'Khong dung han tai diem dung', tl: 'Hindi paghinto', id: 'Tidak berhenti', my: 'မရပ္တန္႔ျခင္း', pt: 'Nao parar', fr: 'Non-arret', it: 'Mancato stop' },
  '逆走・右側通行': { en: 'Wrong-way riding', zh: '逆行/靠右行驶', ko: '역주행/우측통행', vi: 'Di nguoc chieu', tl: 'Pagmamaneho sa maling direksyon', id: 'Melawan arus', my: 'လမ္းေျပာင္းျပန္ စီးနင္းျခင္း', pt: 'Contramao', fr: 'Contresens', it: 'Contromano' },
  '歩行者妨害': { en: 'Pedestrian obstruction', zh: '妨碍行人', ko: '보행자 방해', vi: 'Can tro nguoi di bo', tl: 'Pangharang sa pedestrian', id: 'Menghalangi pejalan kaki', my: 'လမ္းေလွ်ာက္သူကို ေႏွာင့္ယွက္ျခင္း', pt: 'Obstrucao de pedestres', fr: 'Gene aux pietons', it: 'Ostacolo ai pedoni' },
  'その他の違反': { en: 'Other violations', zh: '其他违规', ko: '기타 위반', vi: 'Vi pham khac', tl: 'Iba pang paglabag', id: 'Pelanggaran lain', my: 'အျခားခ်ိဳးေဖာက္မႈ', pt: 'Outras infracoes', fr: 'Autres infractions', it: 'Altre violazioni' }
};

function getCurrentLang() {
  const saved = localStorage.getItem('bicycleRulesQuizLang') || DEFAULT_LANG;
  return SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG;
}

function t() {
  return UI_TEXT[getCurrentLang()] || UI_TEXT[DEFAULT_LANG];
}

/* 多言語テキストオブジェクト { ja:'…', en:'…', … } から現在の言語を返す */
function L(obj) {
  if (typeof obj === 'string') return obj;
  const lang = getCurrentLang();
  return obj[lang] || obj.en || obj.ja || '';
}

function localizeCategory(category) {
  const lang = getCurrentLang();
  if (lang === 'ja') return category;
  return CATEGORY_I18N[category]?.[lang] || CATEGORY_I18N[category]?.en || category;
}

/* ----------------------------------------------------------
   問題データは js/quiz-data.js で定義（多言語対応）
   ---------------------------------------------------------- */


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
  answer(choice) {
    const q          = this.current();
    const isCorrect  = choice.correct;
    const correctChoice = q.choices.find(c => c.correct);
    if (isCorrect) this.score++;
    this.answers.push({
      questionId:   q.id,
      question:     L(q.question),
      category:     q.category,
      signImage:    q.signImage,
      correctText:  L(correctChoice.text),
      selectedText: L(choice.text),
      correct:      isCorrect,
      explanation:  L(q.explanation),
      fineAmount:   q.fineAmount || null,
      criminal:     q.criminal   || false
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

  initLanguageUI() {
    const langSelect = document.getElementById('lang-select');
    if (!langSelect) return;
    langSelect.value = getCurrentLang();
    this.applyStaticText();
    langSelect.addEventListener('change', (e) => {
      localStorage.setItem('bicycleRulesQuizLang', e.target.value);
      this.applyStaticText();
      if (!this.quizScreen.classList.contains('hidden')) {
        this.renderQuestion();
      }
    });
  },

  applyStaticText() {
    const text = t();
    document.documentElement.lang = getCurrentLang();
    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };
    const setHtml = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = value;
    };
    setText('lang-label', 'Languages');
    setText('app-title', text.appTitle);
    setText('app-subtitle', text.appSubtitle);
    setHtml('start-title', text.startTitle);
    setText('warning-title', text.warningTitle);
    setText('warning-text', text.warningText);
    setHtml('feature-1', text.feature1);
    setHtml('feature-2', text.feature2);
    setText('btn-start', text.start);
    setText('progress-prefix', text.progressPrefix);
    setText('progress-score-label', text.progressScoreLabel);
    setText('category-label', text.categoryFallback);
    if (QuizApp.currentIndex === QuizApp.questions.length - 1 && !this.btnNext.classList.contains('hidden')) {
      this.btnNext.textContent = text.result;
    } else {
      this.btnNext.textContent = text.next;
    }
  },

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
    const text = t();
    const q = QuizApp.current();
    const { num, total, pct } = QuizApp.progress();

    // 進捗更新
    this.questionNumEl.textContent  = num;
    this.progressFillEl.style.width = pct + '%';
    this.scoreDisplayEl.textContent = text.score(QuizApp.score, QuizApp.currentIndex);

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
      this.categoryLabelEl.textContent  = localizeCategory(q.category);
      this.categoryLabelEl.style.background = catColor;
    }

    // 危険シーン画像
    this._renderSignImage(q);

    // 問題文
    this.questionTextEl.textContent = L(q.question);

    // 選択肢生成（シャッフル済み）
    const grid = this.choicesGridEl;
    grid.innerHTML = '';
    QuizApp.getShuffledChoices().forEach(choice => {
      const btn = document.createElement('button');
      btn.type              = 'button';
      btn.className         = 'choice-btn';
      btn.textContent       = L(choice.text);
      btn.dataset.correct   = choice.correct ? 'true' : 'false';
      // iOS Safari / LINE内部ブラウザ対策: タップ後すぐblurしてfocus残りを防ぐ
      btn.addEventListener('touchend', () => { setTimeout(() => btn.blur(), 100); }, { passive: true });
      btn.addEventListener('click', () => this.onChoiceClick(btn, choice, grid));
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
  onChoiceClick(clickedBtn, choice, grid) {
    const isCorrect = QuizApp.answer(choice);

    // 全ボタン無効化
    grid.querySelectorAll('.choice-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.correct === 'true') btn.classList.add('correct');
    });
    if (!isCorrect) clickedBtn.classList.add('wrong');

    // 解説表示
    const text = t();
    const correctText = L(QuizApp.current().choices.find(c => c.correct).text);
    this.verdictEl.textContent    = isCorrect ? text.verdictOk : text.verdictNg;
    this.verdictEl.className      = isCorrect ? 'verdict-ok' : 'verdict-ng';
    this.correctAnsEl.textContent = isCorrect ? '' : text.correctAnswer(correctText);

    // 反則金バッジ＋解説文
    this._renderExplanation(QuizApp.current());

    this.explanationEl.classList.remove('hidden');
    this.btnNext.classList.remove('hidden');

    // スコア更新
    this.scoreDisplayEl.textContent = text.score(QuizApp.score, QuizApp.currentIndex + 1);

    // 最終問題なら「結果を見る」
    if (QuizApp.currentIndex === QuizApp.questions.length - 1) {
      this.btnNext.textContent = text.result;
    } else {
      this.btnNext.textContent = text.next;
    }
  },

  /* --- 解説＋反則金バッジのレンダリング --- */
  _renderExplanation(q) {
    const panel = this.descTextEl;
    panel.innerHTML = '';

    const p = document.createElement('p');
    p.textContent = L(q.explanation);
    panel.appendChild(p);

    const textSet = t();
    const lang    = getCurrentLang();

    if (q.fineAmount) {
      const amount  = lang === 'ja' ? q.fineAmount + '円' : '¥' + q.fineAmount;
      const badge   = document.createElement('div');
      badge.className = 'fine-badge';
      badge.innerHTML = `<span class="fine-icon">💴</span><span class="fine-label">${textSet.fineLabel}</span>${amount}`;
      panel.appendChild(badge);
    } else if (q.criminal) {
      const badge = document.createElement('div');
      badge.className = 'fine-badge fine-criminal';
      badge.innerHTML = `<span class="fine-icon">⚖️</span><span class="fine-label">${textSet.penaltyLabel}</span>${textSet.criminalTarget}`;
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
  App.initLanguageUI();
  App.showStart();

  document.getElementById('btn-start').addEventListener('click', () => App.startQuiz());
  document.getElementById('btn-next').addEventListener('click',  () => App.goNext());
});
