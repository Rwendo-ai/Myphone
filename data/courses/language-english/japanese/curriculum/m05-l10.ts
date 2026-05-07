import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-conversation',
  module: 5,
  lesson: 10,
  title: 'A family conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 5 完成！家族の話を英語で全部できる総合練習です。",
    culturalNote: "家族の話題は世界共通の親近感の入り口。詳しく話せると、海外でもすぐに友達ができます。",
  },

  chunks: [
    { id: 'family_intro', target: "I have a big family. My parents and my two siblings live in Osaka.", native: '大家族です。両親と兄弟2人は大阪に住んでいます。', literal: 'I have a big family + parents + siblings', emoji: '👨‍👩‍👧‍👦', phonetic: 'I hav uh BIG FAM-uh-lee', audioRef: null },
    { id: 'extended_family', target: "My grandmother lives in Kyoto, and my aunt — my father's sister — lives in Tokyo.", native: '祖母は京都、おば（父の妹）は東京。', literal: 'Extended family description', emoji: '🏡', phonetic: 'mahy GRAND-muh-thuh livz', audioRef: null },
    { id: 'family_actions', target: "I visit them every year, I call my mother every week, and I miss my brother who lives abroad.", native: '毎年訪ねて、母には毎週電話、海外の弟が恋しい。', literal: 'Family verbs combined', emoji: '📞', phonetic: 'I VIH-zit them', audioRef: null },
  ],

  pattern: {
    name: 'Full family description',
    explanation: "完璧な家族説明：(1) 規模 (big/small family) (2) 親族の名前と住所 (3) 動作（visit, call, miss）。日本語の家族紹介と同じ流れで英語にできます。",
    examples: [
      { target: 'I have a small family.', native: '小さな家族です。' },
      { target: "My parents live in Osaka.", native: '両親は大阪に住んでいます。' },
      { target: 'I miss my brother who lives in the US.', native: 'アメリカの弟が恋しい。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I have a big family', right: '大家族です' },
      { left: 'My grandmother', right: '祖母' },
      { left: 'I visit them', right: '彼らを訪ねます' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '大家族です。両親と兄弟2人は大阪に住んでいます。', correct: [
      "I have a big family. My parents and my two siblings live in Osaka.",
      "I have a big family. My parents and two siblings live in Osaka.",
    ]},
    { type: 'translate', instruction: '英語で', prompt: '海外の弟が恋しい', correct: [
      'I miss my brother who lives abroad',
      'I miss my brother who lives abroad.',
      'I miss my younger brother who lives abroad',
    ]},
    { type: 'build_sentence', instruction: '並べ替え', words: ['week', 'every', 'mother', 'my', 'call', 'I'], correct: ['I', 'call', 'my', 'mother', 'every', 'week'], translation: '毎週母に電話します' },
    { type: 'fill_blank', instruction: '空欄', sentence: "I ____ them every year.", options: ['visit', 'call', 'miss'], correct: 'visit' },
    { type: 'multiple_choice', instruction: '正しい流れ', question: '家族紹介の良い始まりは？', options: [
      { text: "I have a big/small family.", correct: true },
      { text: 'Family yes.', correct: false },
      { text: 'I am family.', correct: false },
    ], explanation: 'まず規模を伝えてから詳細に。' },
  ],

  rwenDialogue: {
    intro: '東京の英会話カフェで、海外から来た新しい知り合いと家族の話で盛り上がります。',
    lines: [
      { speaker: 'npc', target: "Tell me about your family, Yuki.", native: '家族について教えて、ユキ。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have a big family. My parents and my younger sister live in Osaka. My grandmother lives in Kyoto. I visit them every summer and I call my mother every week. And yourself?", native: '大家族です。両親と妹は大阪、祖母は京都。毎年夏に訪ね、母には毎週電話。あなたは？', correct: true, feedback: '完璧 — 家族の規模、住所、動詞、質問返しまでできました。' },
          { target: "Family Osaka.", native: '家族大阪。', correct: false, feedback: '完全な文で家族紹介を。' },
          { target: "I have family.", native: '家族います。', correct: false, feedback: 'もっと詳しく — 「I have a big family」から始めて。' },
        ],
      },
      { speaker: 'npc', target: "Lovely! My family's quite small — just me and my mum.", native: '素敵！うちは小さい — 母と私だけ。' },
      { speaker: 'rwen', rwenLine: 'Module 5 完了！家族について英語で全部話せるようになりました。Module 6 で数字と時間を学びましょう。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください — 家族紹介の流れ。',
    prompts: [
      { prompt: '大家族です (英語で)', correct: ['I have a big family', 'I have a big family.'] },
      { prompt: '毎週母に電話します (英語で)', correct: ['I call my mother every week', 'I call my mother every week.'] },
    ],
  },

  mission: {
    title: 'Module 5 ミッション — 家族の物語',
    task: '60秒で家族紹介：規模 → 親族 → 住所 → 動作（visit/call/miss）。',
    rwenSignoff: 'Module 5 完了！家族の言葉が増えました。',
  },

  phase8: {
    scenario: '東京の英会話カフェで、新しいインターナショナルな友達と家族について深く話す。',
    rwenRole: 'James — 28歳のロンドン人、好奇心旺盛。',
    successCriteria: "User runs full family flow: size → close family → extended family → action verbs (visit/call/miss) → returns the question. Uses Module 5 chunks naturally.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
