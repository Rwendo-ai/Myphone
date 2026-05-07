import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency-travel',
  module: 9,
  lesson: 8,
  title: 'Lost & Travel emergencies — 旅のトラブル',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「I'm lost」「I missed my bus」「I lost my bag」 — 旅のトラブル英語。",
    culturalNote: "海外で困った時にすぐ言える英語があるかどうかは安全に直結。短く、はっきり、状況を伝えるのが鉄則です。",
  },

  chunks: [
    { id: 'im_lost', target: "I'm lost.", native: '迷いました (Mayoimashita)', literal: 'I am lost', emoji: '😰', phonetic: 'aym-LOST', audioRef: null },
    { id: 'i_missed_my_bus', target: 'I missed my bus.', native: 'バスに乗り遅れました (Basu ni nori-okuremashita)', literal: 'I missed my bus', emoji: '🚌', phonetic: 'ay-MIST-my-BUS', audioRef: null },
    { id: 'i_lost_my_bag', target: 'I lost my bag.', native: 'カバンをなくしました (Kaban wo nakushimashita)', literal: 'I lost my bag', emoji: '👜', phonetic: 'ay-LOST-my-BAG', audioRef: null },
  ],

  pattern: {
    name: 'Trouble verbs',
    explanation: "Lost = 道に迷う／物をなくす（両方の意味）。Missed = 乗り損ねる／逃す。状況を完全な文で：「I + 動詞過去形 + 目的語」。",
    examples: [
      { target: "I'm lost. Could you help me?", native: '迷いました。助けてもらえますか？' },
      { target: 'I missed my flight.', native: 'フライトに乗り遅れました。' },
      { target: 'I lost my passport.', native: 'パスポートをなくしました。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: "I'm lost", right: '迷った' },
      { left: 'I missed my bus', right: 'バスに乗り遅れた' },
      { left: 'I lost my bag', right: 'カバンをなくした' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'パスポートをなくしました', correct: ['I lost my passport', 'I lost my passport.'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I ____ my bus.', options: ['missed', 'miss', 'missing'], correct: 'missed' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '緊急時の最初の一言は？', options: [
      { text: "Excuse me, I'm lost. Could you help me?", correct: true },
      { text: 'Lost.', correct: false },
      { text: 'Sumimasen.', correct: false },
    ], explanation: '完全な文と頼みで：「Excuse me, I\'m lost. Could you help me?」。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['bag', 'my', 'lost', 'I'], correct: ['I', 'lost', 'my', 'bag'], translation: 'カバンをなくした' },
    { type: 'translate', instruction: '英語で', prompt: '迷いました', correct: ["I'm lost", 'I am lost'] },
  ],

  rwenDialogue: {
    intro: 'NYの地下鉄で、降りる駅が分からず迷子に。',
    lines: [
      { speaker: 'npc', target: 'Are you OK?', native: '大丈夫？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I'm lost. I missed my stop. Could you help me?", native: 'すみません、迷いました。降りる駅を逃しました。助けてもらえますか？', correct: true, feedback: '完璧 — 状況をはっきり。' },
          { target: 'Lost stop.', native: '迷った駅。', correct: false, feedback: '完全な文で。' },
          { target: 'Mayotta.', native: '迷った。', correct: false, feedback: '英語：「I\'m lost」。' },
        ],
      },
      { speaker: 'npc', target: "Where are you trying to go?", native: 'どこに行きたいの？' },
      { speaker: 'rwen', rwenLine: 'トラブル英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '迷いました (英語で)', correct: ["I'm lost", 'I am lost'] },
      { prompt: 'カバンをなくしました (英語で)', correct: ['I lost my bag', 'I lost my bag.'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '緊急時の3パターン：「I\'m lost」「I missed __」「I lost __」を声に出して練習。',
    rwenSignoff: "I won't let you get lost. See you!",
  },

  phase8: {
    scenario: 'NYの地下鉄で降車駅を間違えて迷子。助けを求める。',
    rwenRole: 'Local — 親切な現地人。',
    successCriteria: "User states problem clearly with 'I'm lost' / 'I missed' / 'I lost', uses past tense for 'missed/lost', requests help with 'Could you help me?'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
