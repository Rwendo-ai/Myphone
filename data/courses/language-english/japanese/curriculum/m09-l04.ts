import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-transport',
  module: 9,
  lesson: 4,
  title: 'Bus, Taxi, Train — 交通機関',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「The bus」「A taxi」「The train」 — 交通機関の英語。",
    culturalNote: "ロンドンの地下鉄は「the Tube」、NYは「the subway」、東京は「the metro / subway」。同じ地下鉄でも国で呼び方が違います。",
  },

  chunks: [
    { id: 'the_bus', target: 'The bus', native: 'バス (Basu)', literal: 'The bus', emoji: '🚌', phonetic: 'thuh-BUS', audioRef: null },
    { id: 'taxi', target: 'A taxi', native: 'タクシー (Takushii)', literal: 'A taxi', emoji: '🚕', phonetic: 'uh-TAK-see', audioRef: null },
    { id: 'the_train', target: 'The train', native: '電車 (Densha)', literal: 'The train', emoji: '🚆', phonetic: 'thuh-TRAYN', audioRef: null },
  ],

  pattern: {
    name: 'Transport + take / catch',
    explanation: "「Take + 交通機関」が基本：「I take the bus」「I take a taxi」。「Catch」も使えます：「Catch the train」（電車に乗る）。",
    examples: [
      { target: 'I take the bus to work.', native: 'バスで仕事に行く。' },
      { target: "Let's take a taxi.", native: 'タクシーに乗ろう。' },
      { target: 'I catch the 8 A.M. train.', native: '8時の電車に乗る。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'The bus', right: 'バス' },
      { left: 'A taxi', right: 'タクシー' },
      { left: 'The train', right: '電車' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'バスで仕事に行く', correct: ['I take the bus to work', 'I take the bus to work.'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "Let's ____ a taxi.", options: ['take', 'do', 'go'], correct: 'take' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'ロンドンで地下鉄を呼ぶ言い方は？', options: [
      { text: 'The Tube', correct: true },
      { text: 'The subway', correct: false },
      { text: 'The metro', correct: false },
    ], explanation: 'ロンドン: the Tube、NY: the subway。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['bus', 'the', 'take', 'I'], correct: ['I', 'take', 'the', 'bus'], translation: 'バスに乗る' },
    { type: 'translate', instruction: '英語で', prompt: 'タクシーに乗ろう', correct: ["Let's take a taxi", 'Take a taxi', "Let's get a taxi"] },
  ],

  rwenDialogue: {
    intro: 'ロンドンで友達と移動方法を相談。',
    lines: [
      { speaker: 'npc', target: 'How should we get there?', native: 'どうやって行く？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Let's take the Tube — it's faster than a taxi.", native: '地下鉄で行こう — タクシーより速い。', correct: true, feedback: '完璧 — 比較も入れました。' },
          { target: 'Bus.', native: 'バス。', correct: false, feedback: '完全な文で：「Let\'s take the bus」。' },
          { target: 'Densha.', native: '電車。', correct: false, feedback: '英語：「the train」または「the Tube」。' },
        ],
      },
      { speaker: 'npc', target: "Tube it is.", native: '地下鉄で。' },
      { speaker: 'rwen', rwenLine: '交通機関の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'バスに乗る (英語で)', correct: ['I take the bus', 'Take the bus'] },
      { prompt: 'タクシー (英語で)', correct: ['A taxi', 'Taxi'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '通勤・通学の手段を英語で：「I take the __ to work / school.」',
    rwenSignoff: 'Take the lesson — see you next!',
  },

  phase8: {
    scenario: 'ロンドンで友達と最適な移動手段の選択。',
    rwenRole: 'Lily — 友達、ロンドン在住。',
    successCriteria: "User uses 'take the [bus/train/Tube]' or 'take a taxi', uses correct articles (the for known/specific, a for any).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
