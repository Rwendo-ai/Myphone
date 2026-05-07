import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-please',
  module: 2,
  lesson: 1,
  title: 'Please — お願いします',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Please」は英語で何かを頼む時のマジックワード。なくても通じるけど、あるかないかで印象が大違いです。",
    culturalNote: "日本語の「すみません」は謝罪と注意喚起の両方で使えますが、英語では「Sorry」（謝罪）と「Excuse me」（注意・呼びかけ）を区別します。「Please」は依頼に必ず添える礼儀 — 日本語の「お願いします」と同じ役割。",
  },

  chunks: [
    { id: 'please', target: 'Please', native: 'お願いします (Onegaishimasu)', literal: 'Please', emoji: '🙏', phonetic: 'PLEEZ', audioRef: null },
    { id: 'excuse_me', target: 'Excuse me', native: 'すみません（呼びかけ） (Sumimasen)', literal: 'Excuse me', emoji: '✋', phonetic: 'eks-KYOOZ-mee', audioRef: null },
    { id: 'sorry', target: 'Sorry', native: 'ごめんなさい (Gomennasai)', literal: 'Sorry', emoji: '😔', phonetic: 'SOH-ree', audioRef: null },
  ],

  pattern: {
    name: 'Please / Excuse me / Sorry',
    explanation: "Please = 依頼の最後（Could I have water, please?）。Excuse me = 注意を引く・通る時。Sorry = 謝罪（過ちを認める）。日本語の「すみません」は3つを兼ねていますが、英語では場面で使い分けます。",
    examples: [
      { target: 'Water, please.', native: '水をお願いします。' },
      { target: "Excuse me, where's the toilet?", native: 'すみません、トイレはどこですか？' },
      { target: "Sorry, I'm late.", native: 'ごめんなさい、遅れました。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせてください', pairs: [
      { left: 'Please', right: 'お願いします' },
      { left: 'Excuse me', right: 'すみません（呼びかけ）' },
      { left: 'Sorry', right: 'ごめんなさい' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'お願いします', correct: ['Please', 'please'] },
    { type: 'multiple_choice', instruction: '正しい答え', question: '混雑した電車で人を通り抜けたい時は？', options: [
      { text: 'Excuse me.', correct: true },
      { text: 'Sorry.', correct: false },
      { text: 'Please.', correct: false },
    ], explanation: '「Excuse me」は通り抜けや呼びかけ。「Sorry」は本当に謝るとき。' },
    { type: 'fill_blank', instruction: '空欄を埋める', sentence: 'A coffee, ____.', options: ['please', 'sorry', 'excuse'], correct: 'please' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['please', 'A', 'coffee'], correct: ['A', 'coffee', 'please'], translation: 'コーヒーをお願いします' },
    { type: 'translate', instruction: '英語で', prompt: 'すみません（呼びかけ）', correct: ['Excuse me', 'excuse me'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのカフェで注文。レジ前に到着しました。',
    lines: [
      { speaker: 'npc', target: 'Hi there, what can I get you?', native: 'いらっしゃい、何にしますか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'A coffee, please.', native: 'コーヒーをお願いします。', correct: true, feedback: '完璧 — 「Please」を必ず付けるのがイギリス英語の基本。' },
          { target: 'Coffee.', native: 'コーヒー。', correct: false, feedback: '失礼に聞こえます — 「please」を付けましょう。' },
          { target: 'Sorry, coffee.', native: 'ごめんなさい、コーヒー。', correct: false, feedback: '謝る理由はありません — 「Please」が正解。' },
        ],
      },
      { speaker: 'npc', target: "Sure, that's £3.20.", native: 'はい、3.20ポンドです。' },
      { speaker: 'rwen', rwenLine: '英語の「マジックワード」マスター！「Please」を忘れないと印象が違います。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'お願いします (英語で)', correct: ['Please', 'please'] },
      { prompt: 'すみません（呼びかけ） (英語で)', correct: ['Excuse me', 'excuse me'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今日、何かを頼む時に「please」を必ず付けてみてください — コーヒー、水、何でも。',
    rwenSignoff: 'See you next lesson, please!',
  },

  phase8: {
    scenario: 'ロンドンのスターバックスで朝の注文。バリスタとの短いやり取り。',
    rwenRole: 'Jack — 22歳のバリスタ、忙しいけど親切。',
    successCriteria: "User adds 'please' to every request, uses 'Excuse me' (not 'Sorry') to get attention, keeps order brief and polite.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
