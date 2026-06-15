'use strict';
/* ============================================================
   自転車交通ルール学習アプリ - quiz.js
   多言語対応: ja / en / vi / zh / tl / id / my
   ============================================================ */

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const QuizApp = {
  questions: [],
  currentIndex: 0,
  score: 0,
  answers: [],

  init() {
    this.questions = shuffle(QUIZ_DATA);
    this.currentIndex = 0;
    this.score = 0;
    this.answers = [];
  },

  current() {
    return this.questions[this.currentIndex];
  },

  getShuffledChoices() {
    return shuffle(this.current().choices);
  },

  answer(choice) {
    const q = this.current();
    const isCorrect = choice.correct;
    const correctChoice = q.choices.find(c => c.correct);
    if (isCorrect) this.score++;
    this.answers.push({
      questionId:   q.id,
      question:     L(q.question),
      signName:     L(q.signName),
      signImage:    q.signImage || null,
      explanation:  L(q.explanation),
      correct:      isCorrect,
      selectedText: L(choice.text),
      correctText:  L(correctChoice.text),
    });
    return isCorrect;
  },

  next() {
    this.currentIndex++;
    return this.currentIndex < this.questions.length;
  },

  progress() {
    return {
      current: this.currentIndex + 1,
      total:   this.questions.length,
      percent: Math.round((this.currentIndex / this.questions.length) * 100),
    };
  },

  saveResult() {
    const result = {
      score:   this.score,
      total:   this.questions.length,
      answers: this.answers,
      lang:    getCurrentLang(),
      timestamp: Date.now(),
    };
    localStorage.setItem('bicycleQuizResult', JSON.stringify(result));
    return result;
  },
};

const App = {
  el: {
    startScreen:      () => document.getElementById('start-screen'),
    quizScreen:       () => document.getElementById('quiz-screen'),
    questionNum:      () => document.getElementById('question-num'),
    totalNum:         () => document.getElementById('total-num'),
    progressFill:     () => document.getElementById('progress-fill'),
    scoreDisplay:     () => document.getElementById('score-display'),
    signContainer:    () => document.getElementById('sign-svg-container'),
    signLabel:        () => document.getElementById('sign-label'),
    questionText:     () => document.getElementById('question-text'),
    choicesGrid:      () => document.getElementById('choices-grid'),
    explanationPanel: () => document.getElementById('explanation-panel'),
    verdictEl:        () => document.getElementById('verdict'),
    correctAns:       () => document.getElementById('correct-answer'),
    descText:         () => document.getElementById('desc-text'),
    btnNext:          () => document.getElementById('btn-next'),
    progressPrefix:   () => document.getElementById('progress-prefix'),
    progressScoreLabel: () => document.getElementById('progress-score-label'),
  },

  initLanguageUI() {
    const btn      = document.getElementById('lang-btn');
    const dropdown = document.getElementById('lang-dropdown');
    const flagSpan = document.getElementById('lang-flag-img');
    const sel      = document.getElementById('lang-select');
    if (!btn) return;

    const CC = { ja:'jp', en:'us', vi:'vn', zh:'cn', tl:'ph', id:'id', my:'mm' };
    const setFlag = lang => { flagSpan.className = 'fi fi-' + (CC[lang] || 'jp'); };
    setFlag(getCurrentLang());

    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = dropdown.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    dropdown.querySelectorAll('[data-lang]').forEach(lb => {
      lb.addEventListener('click', () => {
        const lang = lb.dataset.lang;
        localStorage.setItem(LANG_KEY, lang);
        setFlag(lang);
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        if (sel) { sel.value = lang; }
        this.applyStaticText();
        if (!this.el.quizScreen().classList.contains('hidden')) {
          this.renderQuestion();
        }
      });
    });
    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  },

  applyStaticText() {
    const tx = t();
    document.documentElement.lang = getCurrentLang();
    const set  = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
    const html = (id, v) => { const e = document.getElementById(id); if (e) e.innerHTML  = v; };
    set('app-title',    tx.appTitle);
    set('app-subtitle', tx.appSubtitle);
    set('start-title',  tx.startTitle);
    html('feature-1',   tx.feature1);
    html('feature-2',   tx.feature2);
    set('btn-start',    tx.start);

    const isLast = QuizApp.questions.length > 0 &&
                   QuizApp.currentIndex === QuizApp.questions.length - 1;
    if (this.el.btnNext()) {
      this.el.btnNext().textContent = isLast ? tx.result : tx.next;
    }
  },

  _renderSignImage(q) {
    const container = this.el.signContainer();
    container.innerHTML = '';
    container.classList.remove('has-image', 'has-svg');
    const img = document.createElement('img');
    img.src       = q.signImage;
    img.alt       = L(q.signName);
    img.className = 'sign-img';
    img.onload    = () => container.classList.add('has-image');
    container.appendChild(img);
  },

  startQuiz() {
    QuizApp.init();
    this.el.startScreen().classList.add('hidden');
    this.el.quizScreen().classList.remove('hidden');
    this.renderQuestion();
  },

  renderQuestion() {
    const tx = t();
    const q  = QuizApp.current();
    const p  = QuizApp.progress();

    const prefixEl = this.el.progressPrefix();
    if (prefixEl) prefixEl.textContent = tx.progressPrefix;
    const scoreLabelEl = this.el.progressScoreLabel();
    if (scoreLabelEl) scoreLabelEl.textContent = tx.progressScoreLabel;

    this.el.questionNum().textContent   = p.current;
    this.el.totalNum().textContent      = p.total;
    this.el.progressFill().style.width  = p.percent + '%';
    this.el.scoreDisplay().textContent  = tx.score(QuizApp.score, p.current - 1);

    this._renderSignImage(q);
    this.el.signLabel().textContent   = L(q.signName);
    this.el.questionText().textContent = L(q.question);

    const grid = this.el.choicesGrid();
    grid.innerHTML = '';
    shuffle(q.choices).forEach(choice => {
      const btn = document.createElement('button');
      btn.className          = 'choice-btn';
      btn.textContent        = L(choice.text);
      btn.dataset.correct    = choice.correct ? 'true' : 'false';
      btn.addEventListener('click', () => this.onChoiceClick(btn, choice, grid));
      grid.appendChild(btn);
    });

    const panel = this.el.explanationPanel();
    panel.style.display = 'none';
    panel.classList.remove('correct-bg', 'wrong-bg');
    this.el.btnNext().classList.add('hidden');
  },

  onChoiceClick(clickedBtn, choice, grid) {
    const isCorrect = QuizApp.answer(choice);

    Array.from(grid.querySelectorAll('.choice-btn')).forEach(btn => {
      btn.disabled = true;
      if (btn.dataset.correct === 'true') {
        btn.classList.add(btn === clickedBtn ? 'correct' : 'reveal-correct');
      } else if (btn === clickedBtn) {
        btn.classList.add('wrong');
      }
    });

    this.showExplanation(isCorrect);

    const tx = t();
    const btnNext = this.el.btnNext();
    btnNext.classList.remove('hidden');
    btnNext.textContent = (QuizApp.currentIndex === QuizApp.questions.length - 1)
      ? tx.result : tx.next;
  },

  showExplanation(isCorrect) {
    const tx = t();
    const q  = QuizApp.current();
    const panel = this.el.explanationPanel();
    panel.style.display = 'block';
    panel.classList.add(isCorrect ? 'correct-bg' : 'wrong-bg');

    this.el.verdictEl().innerHTML = isCorrect
      ? `<span class="verdict ok">${tx.verdictOk}</span>`
      : `<span class="verdict ng">${tx.verdictNg}</span>`;

    const correctText = L(q.choices.find(c => c.correct).text);
    this.el.correctAns().textContent = tx.correctAnswer(correctText);
    this.el.descText().textContent   = L(q.explanation);
  },

  onNextClick() {
    const isLast = !QuizApp.next();
    if (isLast) {
      QuizApp.saveResult();
      window.location.href = 'interstitial.html';
    } else {
      this.renderQuestion();
      document.getElementById('quiz-screen')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },
};

document.addEventListener('DOMContentLoaded', () => {
  App.initLanguageUI();
  App.applyStaticText();

  const startBtn = document.getElementById('btn-start');
  if (startBtn) startBtn.addEventListener('click', () => App.startQuiz());

  const nextBtn = document.getElementById('btn-next');
  if (nextBtn) nextBtn.addEventListener('click', () => App.onNextClick());
});
