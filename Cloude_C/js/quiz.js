'use strict';

const STORAGE_KEY = 'it-terms-beginner-progress-v1';
const GROUP_SIZE = 5;

const TERMS = [
  ['生成AI', '文章や画像、コードを自動生成するAI技術。', '___は文章や画像、コードを自動生成するAI技術。'],
  ['LLM', '大量テキストを学習し、人のように文章を扱う大規模言語モデル。', '___は大量テキストを学習し、人のように文章を扱う大規模言語モデル。'],
  ['RAG', '外部データを検索してからAIに回答させる手法。', '___は外部データを検索してからAIに回答させる手法。'],
  ['プロンプト', 'AIに望む出力をさせるための指示文。', '___はAIに望む出力をさせるための指示文。'],
  ['ファインチューニング', '既存モデルを追加学習で特定用途向けに調整すること。', '___は既存モデルを追加学習で特定用途向けに調整すること。'],
  ['ベクトルDB', '意味の近さで検索できるデータベース。', '___は意味の近さで検索できるデータベース。'],
  ['エンベディング', 'テキストなどを数値ベクトルに変換した表現。', '___はテキストなどを数値ベクトルに変換した表現。'],
  ['トークン', 'モデルが文章を処理する最小単位。', '___はモデルが文章を処理する最小単位。'],
  ['コンテキストウィンドウ', 'モデルが一度に参照できる入力範囲。', '___はモデルが一度に参照できる入力範囲。'],
  ['ハルシネーション', 'AIが事実でない内容をもっともらしく出力する現象。', '___はAIが事実でない内容をもっともらしく出力する現象。'],
  ['クラウドネイティブ', 'クラウド前提で設計・運用されるアプリ方式。', '___はクラウド前提で設計・運用されるアプリ方式。'],
  ['コンテナ', 'アプリ実行に必要な環境をまとめた軽量実行単位。', '___はアプリ実行に必要な環境をまとめた軽量実行単位。'],
  ['Docker', 'コンテナの作成・配布・実行を行う代表的ツール。', '___はコンテナの作成・配布・実行を行う代表的ツール。'],
  ['Kubernetes', '多数のコンテナを自動管理するオーケストレーション基盤。', '___は多数のコンテナを自動管理する基盤。'],
  ['サーバーレス', 'サーバー管理を意識せず実行できるクラウド実行形態。', '___はサーバー管理を意識せず実行できる形態。'],
  ['IaC', 'インフラ構成をコードで管理する考え方。', '___はインフラ構成をコードで管理する考え方。'],
  ['Terraform', 'IaCで広く使われるインフラ定義ツール。', '___はIaCで広く使われるインフラ定義ツール。'],
  ['CI/CD', 'ビルド・テスト・デプロイを自動化する開発運用手法。', '___はビルド・テスト・デプロイを自動化する手法。'],
  ['GitHub Actions', 'GitHub上でCI/CDワークフローを実行する機能。', '___はGitHub上でCI/CDワークフローを実行する機能。'],
  ['Observability', 'ログ・メトリクス・トレースでシステム状態を把握する考え方。', '___はログ・メトリクス・トレースで状態を把握する考え方。'],
  ['フロントエンド', 'ユーザーが直接触る画面側の開発領域。', '___はユーザーが直接触る画面側の開発領域。'],
  ['バックエンド', 'データ処理やAPI提供を担うサーバー側の開発領域。', '___はデータ処理やAPI提供を担うサーバー側の開発領域。'],
  ['TypeScript', 'JavaScriptに型を追加した開発言語。', '___はJavaScriptに型を追加した開発言語。'],
  ['React', 'UIをコンポーネントで構築するJavaScriptライブラリ。', '___はUIをコンポーネントで構築するライブラリ。'],
  ['Next.js', 'ReactベースでSSRやルーティングを提供するフレームワーク。', '___はReactベースでSSRやルーティングを提供する。'],
  ['SSR', 'サーバー側でHTMLを生成して表示速度やSEOを高める方式。', '___はサーバー側でHTMLを生成する方式。'],
  ['SPA', '1ページ内で画面遷移のように動くWebアプリ構成。', '___は1ページ内で画面遷移のように動く構成。'],
  ['状態管理', 'アプリ内データの変化を一元的に扱う仕組み。', '___はアプリ内データの変化を一元的に扱う仕組み。'],
  ['レスポンシブデザイン', '画面サイズに応じて表示を最適化する設計。', '___は画面サイズに応じて表示を最適化する設計。'],
  ['アクセシビリティ', '誰でも使えるように配慮した設計品質。', '___は誰でも使えるように配慮した設計品質。'],
  ['REST API', 'HTTPを使ってリソースを操作する設計スタイル。', '___はHTTPでリソースを操作する設計スタイル。'],
  ['GraphQL', '必要なデータだけ取得できるAPIクエリ言語。', '___は必要なデータだけ取得できるAPIクエリ言語。'],
  ['WebSocket', '双方向リアルタイム通信を行う仕組み。', '___は双方向リアルタイム通信を行う仕組み。'],
  ['認証', '利用者が本人か確認する仕組み。', '___は利用者が本人か確認する仕組み。'],
  ['認可', '認証済みユーザーの操作権限を制御する仕組み。', '___は操作権限を制御する仕組み。'],
  ['OAuth 2.0', '外部サービス連携で広く使われる認可フレームワーク。', '___は外部サービス連携で使われる認可フレームワーク。'],
  ['JWT', '署名付きで情報をやり取りするトークン形式。', '___は署名付きで情報をやり取りするトークン形式。'],
  ['SQL', 'リレーショナルDBを操作するための言語。', '___はリレーショナルDBを操作する言語。'],
  ['NoSQL', '柔軟なデータ構造を扱える非リレーショナルDB群。', '___は柔軟なデータ構造を扱えるDB群。'],
  ['Redis', 'インメモリで高速処理できるキー・バリュー型ストア。', '___はインメモリで高速処理できるストア。'],
  ['インデックス', '検索を高速化するためのデータ構造。', '___は検索を高速化するためのデータ構造。'],
  ['キャッシュ', '計算や取得済み結果を一時保存して高速化する仕組み。', '___は結果を一時保存して高速化する仕組み。'],
  ['レイテンシ', 'リクエストから応答までにかかる遅延時間。', '___はリクエストから応答までの遅延時間。'],
  ['スループット', '単位時間あたりに処理できる量。', '___は単位時間あたりに処理できる量。'],
  ['負荷分散', 'アクセスを複数サーバーに振り分ける仕組み。', '___はアクセスを複数サーバーに振り分ける仕組み。'],
  ['ゼロトラスト', '常に検証して信頼を前提にしないセキュリティモデル。', '___は常に検証して信頼を前提にしないモデル。'],
  ['脆弱性', '攻撃される可能性がある弱点。', '___は攻撃される可能性がある弱点。'],
  ['XSS', '悪意あるスクリプトを実行させるWeb攻撃。', '___は悪意あるスクリプトを実行させるWeb攻撃。'],
  ['CSRF', 'ユーザーになりすまして意図しない操作をさせる攻撃。', '___はなりすましで意図しない操作をさせる攻撃。'],
  ['テスト自動化', 'テストをスクリプトで継続実行し品質を保つ手法。', '___はテストを継続実行して品質を保つ手法。']
].map((item, i) => ({ id: i + 1, term: item[0], description: item[1], cloze_text: item[2] }));

const GROUPS = Array.from({ length: 10 }, (_, i) => TERMS.slice(i * GROUP_SIZE, i * GROUP_SIZE + GROUP_SIZE));

const PHASES = {
  LEARN: '学習モード',
  QUIZ: 'クイズモード',
  REVIEW1: '確認モード1',
  REVIEW2: '確認モード2',
  FINISH: '修了'
};

const state = {
  currentGroup: 1,
  phase: PHASES.LEARN,
  index: 0,
  session: [],
  progress: { unlockedGroup: 1, completed: false },
  selectedChoice: '',
  inputText: ''
};

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function loadProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    if (raw && typeof raw.unlockedGroup === 'number') {
      state.progress = {
        unlockedGroup: Math.min(10, Math.max(1, raw.unlockedGroup)),
        completed: Boolean(raw.completed)
      };
    }
  } catch (_) {}
}

function getGroup(n) {
  return GROUPS[n - 1] || [];
}

function sampleChoices(correctTerm) {
  const others = TERMS.filter(t => t.term !== correctTerm).map(t => t.term);
  const picked = shuffle(others).slice(0, 3);
  return shuffle([correctTerm, ...picked]);
}

function mountTermList() {
  const el = document.getElementById('term-list');
  el.innerHTML = TERMS.map((t, i) => `<div class="term-item"><strong>${i + 1}. ${t.term}</strong><p>${t.description}</p></div>`).join('');
}

function showConfetti() {
  const el = document.getElementById('confetti');
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 1200);
}

function setFeedback(text, ok) {
  const fb = document.getElementById('feedback');
  fb.textContent = text;
  fb.className = `feedback ${ok ? 'ok' : 'ng'}`;
}

function clearFeedback() {
  const fb = document.getElementById('feedback');
  fb.className = 'feedback hidden';
  fb.textContent = '';
}

function newSession(items, transform) {
  state.session = shuffle(items).map(transform);
  state.index = 0;
  state.selectedChoice = '';
  state.inputText = '';
}

function currentItem() {
  return state.session[state.index];
}

function renderStatus() {
  document.getElementById('phase-label').textContent = state.phase;
  document.getElementById('group-label').textContent = `Group ${state.currentGroup}`;
  const done = Math.floor(((state.currentGroup - 1) / 10) * 100);
  document.getElementById('progress-label').textContent = `${done}%`;
  document.getElementById('progress-fill').style.width = `${done}%`;
}

function showFinish() {
  document.getElementById('screen-start').classList.add('hidden');
  document.getElementById('screen-app').classList.add('hidden');
  document.getElementById('screen-finish').classList.remove('hidden');
}

function advanceFlowAfterPerfect() {
  if (state.phase === PHASES.QUIZ) {
    if (state.currentGroup === 1) {
      state.currentGroup += 1;
      state.progress.unlockedGroup = Math.max(state.progress.unlockedGroup, state.currentGroup);
      saveProgress();
      startLearning();
      return;
    }
    startReview1();
    return;
  }
  if (state.phase === PHASES.REVIEW1) {
    if (state.currentGroup <= 2) {
      state.currentGroup += 1;
      state.progress.unlockedGroup = Math.max(state.progress.unlockedGroup, state.currentGroup);
      saveProgress();
      startLearning();
      return;
    }
    startReview2();
    return;
  }
  if (state.phase === PHASES.REVIEW2) {
    if (state.currentGroup >= 10) {
      state.progress.completed = true;
      state.progress.unlockedGroup = 10;
      saveProgress();
      showFinish();
      return;
    }
    state.currentGroup += 1;
    state.progress.unlockedGroup = Math.max(state.progress.unlockedGroup, state.currentGroup);
    saveProgress();
    startLearning();
  }
}

function checkAndMoveNext() {
  state.index += 1;
  if (state.index >= state.session.length) {
    showConfetti();
    advanceFlowAfterPerfect();
  } else {
    render();
  }
}

function restartCurrentPhase() {
  if (state.phase === PHASES.QUIZ) startQuiz();
  if (state.phase === PHASES.REVIEW1) startReview1();
  if (state.phase === PHASES.REVIEW2) startReview2();
}

function startLearning() {
  state.phase = PHASES.LEARN;
  newSession(getGroup(state.currentGroup), t => ({ ...t, reveal: false }));
  render();
}

function startQuiz() {
  state.phase = PHASES.QUIZ;
  newSession(getGroup(state.currentGroup), t => ({ ...t, choices: sampleChoices(t.term) }));
  render();
}

function startReview1() {
  state.phase = PHASES.REVIEW1;
  newSession(getGroup(state.currentGroup - 1), t => {
    const wrong = shuffle(TERMS.filter(x => x.id !== t.id)).slice(0, 3).map(x => x.description);
    return { ...t, choices: shuffle([t.description, ...wrong]) };
  });
  render();
}

function startReview2() {
  const oldGroups = Array.from({ length: state.currentGroup - 2 }, (_, i) => i + 1);
  const pool = oldGroups.flatMap(n => getGroup(n));
  state.phase = PHASES.REVIEW2;
  newSession(pool, t => ({ ...t }));
  render();
}

function renderLearning(item) {
  const area = document.getElementById('question-area');
  document.getElementById('card-title').textContent = `${item.term}`;
  document.getElementById('mode-help').textContent = '意味を読んで、穴埋め文を確認し、最後に全文を見ます。';
  area.innerHTML = `
    <p><strong>説明:</strong> ${item.description}</p>
    <p><strong>虫食い文:</strong> ${item.cloze_text}</p>
    <div class="${item.reveal ? '' : 'hidden'}"><strong>全文:</strong> ${item.description}</div>
  `;
  document.getElementById('btn-submit').classList.add('hidden');
  const nextBtn = document.getElementById('btn-next');
  nextBtn.classList.remove('hidden');
  nextBtn.textContent = item.reveal ? '次の単語へ' : '全文を表示';
}

function renderChoiceMode(item, title, help, questionText, pickHandler) {
  const area = document.getElementById('question-area');
  document.getElementById('card-title').textContent = title;
  document.getElementById('mode-help').textContent = help;
  area.innerHTML = `<p class="question">${questionText}</p><div class="choices"></div>`;
  const box = area.querySelector('.choices');
  item.choices.forEach(choice => {
    const b = document.createElement('button');
    b.className = `choice ${state.selectedChoice === choice ? 'selected' : ''}`;
    b.textContent = choice;
    b.addEventListener('click', () => pickHandler(choice));
    box.appendChild(b);
  });
  document.getElementById('btn-next').classList.add('hidden');
  document.getElementById('btn-submit').classList.remove('hidden');
}

function renderReview2(item) {
  const area = document.getElementById('question-area');
  document.getElementById('card-title').textContent = '確認モード2';
  document.getElementById('mode-help').textContent = '虫食い文を見て、用語を直接入力してください。';
  area.innerHTML = `
    <p class="question">${item.cloze_text}</p>
    <input id="term-input" class="term-input" value="${state.inputText}" placeholder="用語を入力">
  `;
  const input = document.getElementById('term-input');
  input.addEventListener('input', (e) => {
    state.inputText = e.target.value;
  });
  document.getElementById('btn-next').classList.add('hidden');
  document.getElementById('btn-submit').classList.remove('hidden');
}

function render() {
  document.getElementById('screen-start').classList.add('hidden');
  document.getElementById('screen-finish').classList.add('hidden');
  document.getElementById('screen-app').classList.remove('hidden');
  clearFeedback();
  renderStatus();
  const item = currentItem();
  if (!item) return;

  if (state.phase === PHASES.LEARN) {
    renderLearning(item);
    return;
  }
  if (state.phase === PHASES.QUIZ) {
    renderChoiceMode(item, 'クイズモード', '虫食い文から正しい用語を1つ選びます。', item.cloze_text, (choice) => {
      state.selectedChoice = choice;
      render();
    });
    return;
  }
  if (state.phase === PHASES.REVIEW1) {
    renderChoiceMode(item, '確認モード1', '用語を見て、正しい説明文を選びます。', item.term, (choice) => {
      state.selectedChoice = choice;
      render();
    });
    return;
  }
  renderReview2(item);
}

function submitAnswer() {
  const item = currentItem();
  if (!item) return;
  let ok = false;
  if (state.phase === PHASES.QUIZ) ok = state.selectedChoice === item.term;
  if (state.phase === PHASES.REVIEW1) ok = state.selectedChoice === item.description;
  if (state.phase === PHASES.REVIEW2) ok = state.inputText.trim().toLowerCase() === item.term.toLowerCase();

  if (ok) {
    setFeedback('正解です。次へ進みます。', true);
    setTimeout(checkAndMoveNext, 450);
  } else {
    setFeedback('不正解です。このモードを最初からやり直します。100%で突破しましょう。', false);
    setTimeout(restartCurrentPhase, 850);
  }
}

function nextInLearning() {
  const item = currentItem();
  if (!item) return;
  if (!item.reveal) {
    item.reveal = true;
    render();
    return;
  }
  state.index += 1;
  if (state.index >= state.session.length) {
    showConfetti();
    startQuiz();
  } else {
    render();
  }
}

function startFromProgress() {
  if (state.progress.completed) {
    showFinish();
    return;
  }
  state.currentGroup = state.progress.unlockedGroup;
  startLearning();
}

function resetAll() {
  localStorage.removeItem(STORAGE_KEY);
  state.progress = { unlockedGroup: 1, completed: false };
  state.currentGroup = 1;
  state.phase = PHASES.LEARN;
  state.index = 0;
  document.getElementById('screen-finish').classList.add('hidden');
  document.getElementById('screen-app').classList.add('hidden');
  document.getElementById('screen-start').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  mountTermList();

  document.getElementById('btn-start').addEventListener('click', startFromProgress);
  document.getElementById('btn-reset').addEventListener('click', resetAll);
  document.getElementById('btn-restart').addEventListener('click', resetAll);
  document.getElementById('btn-submit').addEventListener('click', submitAnswer);
  document.getElementById('btn-next').addEventListener('click', nextInLearning);
});
