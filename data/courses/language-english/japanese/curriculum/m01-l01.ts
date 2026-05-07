import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-hello',
  module: 1,
  lesson: 1,
  title: 'Hello — こんにちは',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hello! 英語で人に会ったら、まず「Hello」。お辞儀ではなく、ただの一言。短くて、誰にでも使えます。",
    culturalNote: "日本語では「こんにちは」と一緒にお辞儀がセットですが、英語の「Hello」は手も振らないし、頭も下げない。声だけで完結する挨拶です。フォーマル過ぎず、カジュアル過ぎず — 上司にもクライアントにも知らない人にも使える、便利な万能挨拶。",
  },

  chunks: [
    {
      id: 'hello',
      target: 'Hello',
      native: 'こんにちは / ハロー',
      literal: 'Hello (Haroo)',
      emoji: '👋',
      phonetic: 'heh-LOH / ハロー',
      audioRef: null,
    },
    {
      id: 'how_are_you',
      target: 'How are you?',
      native: 'お元気ですか？ (Ogenki desu ka?)',
      literal: 'How / are / you?',
      emoji: '👀',
      phonetic: 'how-AHR-yoo / ハウ・アー・ユー',
      audioRef: null,
    },
    {
      id: 'im_fine_thanks',
      target: "I'm fine, thanks.",
      native: '元気です、ありがとう。 (Genki desu, arigatou.)',
      literal: 'I-am fine, thanks',
      emoji: '✨',
      phonetic: 'aym-FAYN-thanks / アイム・ファイン・サンクス',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Greetings',
    explanation: "英語の「How are you?」は本当の質問ではなく、挨拶の一部です。日本語の「お元気ですか？」と違い、英語では実際の体調を答える必要はありません。「I'm fine, thanks」と返すのが標準。SVO（主語＋動詞＋目的語）の語順に注意 — 日本語のSOV（主語＋目的語＋動詞）と逆です。",
    examples: [
      { target: 'Hello',        native: 'こんにちは' },
      { target: 'Hi',           native: 'やあ (カジュアル)' },
      { target: 'How are you?', native: 'お元気ですか？' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: '英語と日本語を組み合わせてください',
      pairs: [
        { left: 'Hello',         right: 'こんにちは' },
        { left: 'How are you?',  right: 'お元気ですか？' },
        { left: "I'm fine",      right: '元気です' },
      ],
    },
    {
      type: 'translate',
      instruction: '英語で書いてください',
      prompt: 'こんにちは',
      correct: ['Hello', 'hello', 'Hi', 'hi'],
    },
    {
      type: 'fill_blank',
      instruction: '空欄を埋めてください',
      sentence: "Hello! ____ are you?",
      options: ['How', 'What', 'Who'],
      correct: 'How',
      context: 'アメリカ人クライアントとのZoom会議の最初の挨拶。',
    },
    {
      type: 'multiple_choice',
      instruction: '正しい答えを選んでください',
      question: "クライアントが 'How are you?' と聞きました。何と答えますか？",
      options: [
        { text: "I'm fine, thanks.", correct: true },
        { text: 'Yes, please.',      correct: false },
        { text: 'Goodbye.',          correct: false },
      ],
      explanation: "「I'm fine, thanks」が一番安全で自然な返事です。本当に元気じゃなくても、これがビジネスの標準。",
    },
    {
      type: 'build_sentence',
      instruction: '正しい順番に並べてください',
      words: ['How', 'you', 'are'],
      correct: ['How', 'are', 'you'],
      translation: 'お元気ですか？',
    },
    {
      type: 'translate',
      instruction: '英語で書いてください',
      prompt: '元気です、ありがとう。',
      correct: ["I'm fine, thanks", "i'm fine, thanks", "I am fine, thanks", "I'm fine thanks"],
    },
  ],

  rwenDialogue: {
    intro: '東京のオフィスで、アメリカ人のクライアントと初めてビデオ会議。画面が繋がった瞬間です。',
    lines: [
      { speaker: 'npc',  target: 'Hello! How are you?', native: 'こんにちは！お元気ですか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hello, I'm fine, thanks. How are you?", native: 'こんにちは、元気です、ありがとう。あなたは？', correct: true,  feedback: '完璧です — 答えて、質問を返した。これが自然な英語のキャッチボールです。' },
          { target: 'Hello.',                                  native: 'こんにちは。',                                  correct: false, feedback: '少し短すぎます — クライアントには返答プラス質問を返しましょう。' },
          { target: 'Yes.',                                    native: 'はい。',                                          correct: false, feedback: '「Yes」はこの質問の答えではありません。「I\'m fine, thanks」と答えてください。' },
        ],
      },
      { speaker: 'npc',  target: "I'm good, thanks. Nice to meet you.", native: '元気ですよ、ありがとう。はじめまして。' },
      {
        speaker: 'rwen',
        rwenLine: "よくできました！最初の英語の挨拶クリア — 過剰でも控えめでもない、ちょうどいいバランスでした。",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: '見ないで、記憶から書いてください。',
    prompts: [
      { prompt: 'Hello (英語で)', correct: ['Hello', 'hello', 'Hi', 'hi'] },
      { prompt: 'How are you? (英語で)', correct: ['How are you?', 'How are you', 'how are you?', 'how are you'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: "今日、誰かに — 日本語で話す相手でも構いません — 「Hello, how are you?」と声に出して言ってみてください。鏡の前でもOK。",
    rwenSignoff: "また明日。Take care.",
  },

  phase8: {
    scenario: "東京の本社で、ニューヨークの新しいクライアントと初Zoom。9時のミーティング開始直後、相手があなたを英語で挨拶してきます。フォーマル過ぎず、自然な英語で短く返答する練習です。",
    rwenRole: "Sarah — 35歳のニューヨークのプロジェクトマネージャー。フレンドリーだが時間に厳しい。日本のチームとは初めての仕事。",
    successCriteria: "User opens with 'Hello' (NOT 'Konnichiwa, sir' which is over-formal mixing), responds 'I'm fine, thanks' to 'How are you?' (NOT a literal long answer about being tired/busy), and asks 'How are you?' back to keep the exchange flowing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
