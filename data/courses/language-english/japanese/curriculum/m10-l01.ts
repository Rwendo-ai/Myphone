import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-happy-sad',
  module: 10,
  lesson: 1,
  title: 'Happy & Sad — 嬉しい・悲しい',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「I'm happy」「I'm sad」「It made me feel...」 — 感情の英語。",
    culturalNote: "日本人は感情を直接言うのに抵抗がありますが、英語圏では「I'm sad」と素直に言うのが普通。むしろ感情を隠す方が不思議がられます。",
  },

  chunks: [
    { id: 'im_happy', target: "I'm happy", native: '嬉しい (Ureshii)', literal: 'I am happy', emoji: '😊', phonetic: 'aym-HAP-ee', audioRef: null },
    { id: 'im_sad', target: "I'm sad", native: '悲しい (Kanashii)', literal: 'I am sad', emoji: '😔', phonetic: 'aym-SAD', audioRef: null },
    { id: 'made_me_feel', target: 'It made me feel...', native: '〜な気持ちになった (... na kimochi ni natta)', literal: 'It made me feel ...', emoji: '💭', phonetic: 'it-MAYD-mee-FEEL', audioRef: null },
  ],

  pattern: {
    name: "I'm + emotion / It made me feel",
    explanation: "感情：I'm happy / sad / excited / nervous。原因：「It made me feel happy」（〜が私を嬉しくした）。日本語の「〜のおかげで嬉しい」と同じ構造。",
    examples: [
      { target: "I'm so happy today.", native: '今日とても嬉しい。' },
      { target: "I'm sad about the news.", native: 'ニュースで悲しい。' },
      { target: 'It made me feel proud.', native: '誇らしい気持ちになった。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: "I'm happy", right: '嬉しい' },
      { left: "I'm sad", right: '悲しい' },
      { left: 'It made me feel...', right: '〜な気持ちになった' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '嬉しい', correct: ["I'm happy", 'I am happy', 'Happy'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "It ____ me feel happy.", options: ['made', 'make', 'making'], correct: 'made' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '感情を表す自然な英語は？', options: [
      { text: "I'm sad about it.", correct: true },
      { text: 'I have sad.', correct: false },
      { text: 'Sad I.', correct: false },
    ], explanation: '感情は be 動詞：「I\'m sad」。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['feel', 'me', 'made', 'It', 'happy'], correct: ['It', 'made', 'me', 'feel', 'happy'], translation: '嬉しい気持ちになった' },
    { type: 'translate', instruction: '英語で', prompt: '悲しい', correct: ["I'm sad", 'I am sad'] },
  ],

  rwenDialogue: {
    intro: 'シドニーで親しい友達と感情の話。',
    lines: [
      { speaker: 'npc', target: 'How are you really feeling?', native: '本当はどんな気持ち？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm happy I'm here, but a bit sad about leaving home. It made me feel both at once.", native: 'ここにいるのは嬉しい、でも故郷を離れて少し悲しい。両方の気持ち。', correct: true, feedback: '完璧 — 複雑な感情を英語で表現。' },
          { target: 'OK.', native: '大丈夫。', correct: false, feedback: '本音をもっと出して — 「I\'m happy/sad」。' },
          { target: 'Genki.', native: '元気。', correct: false, feedback: '英語：「I\'m happy」。' },
        ],
      },
      { speaker: 'npc', target: "That's so honest. Thanks for sharing.", native: '正直でいいね。話してくれてありがとう。' },
      { speaker: 'rwen', rwenLine: '感情の英語マスター！本音を言うのが英語の流儀。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '嬉しい (英語で)', correct: ["I'm happy", 'I am happy'] },
      { prompt: '悲しい (英語で)', correct: ["I'm sad", 'I am sad'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今日の自分の感情を3つ英語で：「I\'m __」「I\'m __」「It made me feel __」。',
    rwenSignoff: 'Feel your feelings. See you next!',
  },

  phase8: {
    scenario: 'シドニーで親友と感情の深い話。',
    rwenRole: 'Sarah — 親友、聞き上手。',
    successCriteria: "User uses 'I'm + emotion' (am, not 'have'), uses 'It made me feel...' for causes, expresses real feelings without over-deflecting.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
