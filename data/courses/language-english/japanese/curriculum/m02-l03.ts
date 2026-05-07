import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-help',
  module: 2,
  lesson: 3,
  title: 'Can you help me? — 助けてもらえますか？',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Can you help me?」は困った時の救命ボート。海外で迷ったら、まずこの一言。",
    culturalNote: "日本では「ご迷惑をおかけしますが」など回りくどい前置きが丁寧ですが、英語では「Can you help me?」と直接言ってOK。「Could you...?」のほうがさらに丁寧 — 仮定法で柔らかさを出します。",
  },

  chunks: [
    { id: 'can_you_help_me', target: 'Can you help me?', native: '助けてもらえますか？ (Tasukete moraemasu ka?)', literal: 'Can you help me?', emoji: '🆘', phonetic: 'KAN-yoo-HELP-mee', audioRef: null },
    { id: 'i_need_help', target: 'I need help', native: '助けが必要です (Tasuke ga hitsuyou desu)', literal: 'I need help', emoji: '🙋', phonetic: 'AY-need-HELP', audioRef: null },
    { id: 'im_lost', target: "I'm lost", native: '道に迷いました (Michi ni mayoimashita)', literal: 'I-am lost', emoji: '🧭', phonetic: 'aym-LOST', audioRef: null },
  ],

  pattern: {
    name: 'Asking for help',
    explanation: "「Can you...?」は普通の依頼。「Could you...?」は丁寧。「I need...」は事実の説明。日本語の「〜していただけますか」と同じく、Could が一番丁寧です。",
    examples: [
      { target: 'Can you help me?', native: '助けてもらえますか？' },
      { target: 'Could you help me, please?', native: '助けていただけますか？' },
      { target: "I'm lost. I need help.", native: '道に迷いました。助けが必要です。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Can you help me?', right: '助けてもらえますか？' },
      { left: 'I need help', right: '助けが必要です' },
      { left: "I'm lost", right: '道に迷いました' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '道に迷いました', correct: ["I'm lost", "i'm lost", 'I am lost'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "Can you ____ me?", options: ['help', 'get', 'do'], correct: 'help' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '一番丁寧な依頼は？', options: [
      { text: 'Could you help me, please?', correct: true },
      { text: 'Help me!', correct: false },
      { text: 'Help.', correct: false },
    ], explanation: '「Could」+ 「please」が最も丁寧です。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['help', 'me', 'you', 'Can'], correct: ['Can', 'you', 'help', 'me'], translation: '助けてもらえますか？' },
    { type: 'translate', instruction: '英語で', prompt: '助けが必要です', correct: ['I need help', 'i need help'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンの地下鉄駅で出口がわからない。駅員さんに声をかけます。',
    lines: [
      { speaker: 'npc', target: 'Yes, can I help you?', native: 'はい、何かお手伝いできますか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'm lost. Could you help me, please?", native: 'はい、道に迷いました。助けていただけますか？', correct: true, feedback: '完璧 — 状況を説明して、丁寧な「Could」で頼みました。' },
          { target: 'Help.', native: '助けて。', correct: false, feedback: '緊急時以外は「Could you help me?」のほうが自然。' },
          { target: 'Sumimasen.', native: 'すみません。', correct: false, feedback: '日本語は通じません — 「Excuse me, could you help me?」を試してみて。' },
        ],
      },
      { speaker: 'npc', target: 'Of course. Where do you need to go?', native: 'もちろん。どこに行きたいですか？' },
      { speaker: 'rwen', rwenLine: '助けの求め方マスター！「Could you...?」が最強の丁寧表現です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '助けてもらえますか？ (英語で)', correct: ['Can you help me?', 'Could you help me?', 'can you help me?'] },
      { prompt: '道に迷いました (英語で)', correct: ["I'm lost", 'I am lost'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '海外で迷う想定で「Excuse me, I\'m lost. Could you help me, please?」を声に出して練習。',
    rwenSignoff: "I'm here to help. See you in the next lesson.",
  },

  phase8: {
    scenario: 'ロンドンのキングスクロス駅で出口を探して迷う。駅員に道を聞きます。',
    rwenRole: 'Tom — 45歳の駅員、忙しいけど親切。',
    successCriteria: "User uses 'Could you help me?' (more polite than 'Can you...'), explains situation with 'I'm lost', adds 'please' to requests.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
