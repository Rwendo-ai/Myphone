import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-tomorrow',
  module: 8,
  lesson: 9,
  title: 'Future tense — Tomorrow I will...',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「Tomorrow I will...」「I'm going to...」 — 未来形の英語。",
    culturalNote: "日本語は「明日行きます」と現在形で未来も表せますが、英語は「will」または「going to」で明示します。「will」は決めたばかり、「going to」は計画済み。",
  },

  chunks: [
    { id: 'tomorrow_i_will', target: 'Tomorrow I will call you.', native: '明日電話します (Ashita denwa shimasu)', literal: 'Tomorrow I will call you', emoji: '📞', phonetic: 'tu-MOR-oh-ay-WIL-KAWL-yoo', audioRef: null },
    { id: 'im_going_to', target: "I'm going to study tonight.", native: '今夜勉強します (Konya benkyou shimasu)', literal: "I am going to study", emoji: '📚', phonetic: 'aym-GOH-ing-too-STUH-dee', audioRef: null },
    { id: 'see_you_tomorrow', target: 'See you tomorrow!', native: 'また明日 (Mata ashita)', literal: 'See you tomorrow', emoji: '👋', phonetic: 'SEE-yoo-tu-MOR-oh', audioRef: null },
  ],

  pattern: {
    name: 'Future: will / going to',
    explanation: "Will = その場で決めた未来（I will call you）。Going to = 既に計画した未来（I'm going to study tonight）。日本人にはどちらも同じに見えますが、ネイティブはニュアンスを使い分けます。",
    examples: [
      { target: 'I will call you tomorrow.', native: '明日電話します。' },
      { target: "I'm going to visit Tokyo next week.", native: '来週東京に行く予定。' },
      { target: 'See you tomorrow!', native: 'また明日！' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I will call', right: '電話します' },
      { left: "I'm going to study", right: '勉強する予定' },
      { left: 'See you tomorrow', right: 'また明日' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '明日電話します', correct: ['Tomorrow I will call you', "I'll call you tomorrow", 'I will call you tomorrow'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'm ____ to study tonight.", options: ['going', 'go', 'gone'], correct: 'going' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '計画済みの未来を表すには？', options: [
      { text: "I'm going to study tonight.", correct: true },
      { text: "I will study tonight.", correct: false },
      { text: "I study tonight.", correct: false },
    ], explanation: '既に計画済み = going to。その場で決めた = will。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['you', 'tomorrow', 'See'], correct: ['See', 'you', 'tomorrow'], translation: 'また明日' },
    { type: 'translate', instruction: '英語で', prompt: '今夜勉強します', correct: ["I'm going to study tonight", 'I will study tonight', 'I am going to study tonight'] },
  ],

  rwenDialogue: {
    intro: '東京のオフィス、海外チームとの会議終盤。',
    lines: [
      { speaker: 'npc', target: "When can you send the report?", native: 'レポートいつ送れる？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'll send it tomorrow. I'm going to finish it tonight.", native: '明日送ります。今夜仕上げる予定。', correct: true, feedback: '完璧 — will と going to を使い分け。' },
          { target: 'Tomorrow send.', native: '明日送る。', correct: false, feedback: '完全な文で：「I\'ll send it tomorrow」。' },
          { target: "I send tomorrow.", native: '私 送る 明日。', correct: false, feedback: '未来形：「I will send」または「I\'m going to send」。' },
        ],
      },
      { speaker: 'npc', target: "Great, thanks!", native: 'ありがとう！' },
      { speaker: 'rwen', rwenLine: '未来形マスター！will / going to を使い分けられました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '明日電話します (英語で)', correct: ["I'll call you tomorrow", 'I will call you tomorrow'] },
      { prompt: 'また明日 (英語で)', correct: ['See you tomorrow', 'See you tomorrow!'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '明日の予定を3文：「Tomorrow I will __」「I\'m going to __」「See you __」',
    rwenSignoff: "I'll see you next lesson!",
  },

  phase8: {
    scenario: '東京のオフィスで海外クライアントとの締め切り調整。',
    rwenRole: 'Susan — NYのプロマネ。',
    successCriteria: "User distinguishes 'will' (just decided) from 'going to' (planned), uses future correctly with 'tomorrow', 'tonight', 'next week'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
