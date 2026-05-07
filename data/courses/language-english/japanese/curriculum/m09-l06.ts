import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-airport',
  module: 9,
  lesson: 6,
  title: 'At the airport — 空港で',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Boarding pass」「Departure gate」「Customs」 — 空港の必須英語。",
    culturalNote: "海外の空港アナウンスは早口で聞き取りにくい。掲示板で gate / time を確認するのが安全。「Boarding pass, please」と頻繁に求められます。",
  },

  chunks: [
    { id: 'boarding_pass', target: 'Boarding pass', native: '搭乗券 (Toujouken)', literal: 'Boarding pass', emoji: '🛂', phonetic: 'BOR-ding-PAS', audioRef: null },
    { id: 'departure_gate', target: 'Departure gate', native: '出発ゲート (Shuppatsu geeto)', literal: 'Departure gate', emoji: '🚪', phonetic: 'di-PAR-cher-GAYT', audioRef: null },
    { id: 'customs', target: 'Customs', native: '税関 (Zeikan)', literal: 'Customs', emoji: '🛃', phonetic: 'KUS-tums', audioRef: null },
  ],

  pattern: {
    name: 'Airport vocabulary',
    explanation: "Boarding pass（搭乗券）、Departure gate（出発ゲート）、Customs（税関）、Immigration（入国審査）、Baggage claim（荷物受取）。指示は短く明確。",
    examples: [
      { target: 'Where is the departure gate?', native: '出発ゲートはどこ？' },
      { target: "Here's my boarding pass.", native: '搭乗券です。' },
      { target: 'I need to go through customs.', native: '税関を通る必要がある。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Boarding pass', right: '搭乗券' },
      { left: 'Departure gate', right: '出発ゲート' },
      { left: 'Customs', right: '税関' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '搭乗券', correct: ['Boarding pass', 'boarding pass'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'Where is the ____ gate?', options: ['departure', 'depart', 'departing'], correct: 'departure' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '空港で荷物を受け取る場所は？', options: [
      { text: 'Baggage claim', correct: true },
      { text: 'Boarding pass', correct: false },
      { text: 'Customs', correct: false },
    ], explanation: 'Baggage claim = 荷物受取所。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['gate', 'departure', 'the', 'is', 'Where'], correct: ['Where', 'is', 'the', 'departure', 'gate'], translation: '出発ゲートはどこ？' },
    { type: 'translate', instruction: '英語で', prompt: '税関', correct: ['Customs', 'customs'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのヒースロー空港でゲート確認。',
    lines: [
      { speaker: 'npc', target: 'Boarding pass, please.', native: '搭乗券をお願いします。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Here's my boarding pass. Where is the departure gate for Tokyo?", native: '搭乗券です。東京行きの出発ゲートは？', correct: true, feedback: '完璧 — 質問も加えました。' },
          { target: 'Pass.', native: 'パス。', correct: false, feedback: '完全な文で。' },
          { target: 'Toujouken.', native: '搭乗券。', correct: false, feedback: '英語：「Here\'s my boarding pass」。' },
        ],
      },
      { speaker: 'npc', target: "Gate 23, on the right.", native: '23番ゲート、右側。' },
      { speaker: 'rwen', rwenLine: '空港英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '搭乗券 (英語で)', correct: ['Boarding pass', 'boarding pass'] },
      { prompt: '出発ゲートはどこ？ (英語で)', correct: ['Where is the departure gate?', 'Where is the departure gate'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '空港の用語5つを英語で：boarding pass, gate, customs, baggage claim, immigration。',
    rwenSignoff: 'Have a good flight! See you next.',
  },

  phase8: {
    scenario: 'ヒースロー空港で出発前のチェックイン・ゲート確認。',
    rwenRole: 'Agent — 空港スタッフ。',
    successCriteria: "User uses airport vocab correctly (boarding pass, departure gate, customs), presents documents on request, asks for gate location.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
