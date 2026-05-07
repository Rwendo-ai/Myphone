import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-conversation',
  module: 6,
  lesson: 10,
  title: 'Money & time conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 6 完成！数字、時間、お金を全部使った実践会話を組み立てます。",
    culturalNote: "数字・時間・お金の英語は海外生活の根幹。スムーズに話せれば、買い物・予約・約束すべてが自分でできます。",
  },

  chunks: [
    { id: 'price_time', target: "It costs twenty dollars and the shop closes at six P.M.", native: '20ドルで、お店は午後6時に閉まります。', literal: 'price + time', emoji: '🛒', phonetic: 'it-kosts-TWEN-tee-DOL-arz', audioRef: null },
    { id: 'when_meet', target: "Let's meet on Friday at half past seven.", native: '金曜の7時半に会いましょう。', literal: "Let's meet on Friday at half past seven", emoji: '🤝', phonetic: "lets-MEET-on-FRY-day", audioRef: null },
    { id: 'total_with_discount', target: "The total is fifty dollars with a ten percent discount.", native: '10%引きで合計50ドルです。', literal: 'total + discount', emoji: '🧾', phonetic: 'thuh-TOH-tul-iz-FIF-tee', audioRef: null },
  ],

  pattern: {
    name: 'Numbers in real flow',
    explanation: "数字、曜日、時間、価格、割引 — 一文に複数の数字情報を入れる練習。日付＋時刻、価格＋割引などの組み合わせがビジネス英語の基本。",
    examples: [
      { target: "Let's meet on Monday at two P.M.", native: '月曜午後2時に会おう。' },
      { target: 'It opens at nine A.M. and closes at six P.M.', native: '午前9時開店、午後6時閉店。' },
      { target: 'The total is one hundred dollars.', native: '合計100ドル。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: "Half past seven", right: '7時半' },
      { left: 'Twenty dollars', right: '20ドル' },
      { left: 'Ten percent discount', right: '10%引き' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '金曜の7時半に会いましょう', correct: [
      "Let's meet on Friday at half past seven",
      "Let's meet on Friday at half past seven.",
      "Let's meet at half past seven on Friday",
    ]},
    { type: 'translate', instruction: '英語で', prompt: '10%引きで合計50ドル', correct: [
      'The total is fifty dollars with a ten percent discount',
      'The total is fifty dollars with a ten percent discount.',
      'Fifty dollars total with ten percent discount',
    ]},
    { type: 'build_sentence', instruction: '並べ替え', words: ['P.M.', 'six', 'at', 'closes', 'It'], correct: ['It', 'closes', 'at', 'six', 'P.M.'], translation: '午後6時に閉まります' },
    { type: 'fill_blank', instruction: '空欄', sentence: "Let's meet ____ Friday at three.", options: ['on', 'in', 'at'], correct: 'on' },
    { type: 'multiple_choice', instruction: '正しい流れ', question: '「月曜午後2時に会おう」を英語で？', options: [
      { text: "Let's meet on Monday at two P.M.", correct: true },
      { text: "Monday two meet.", correct: false },
      { text: "Let's meet two on Monday.", correct: false },
    ], explanation: '日付（on）→ 時刻（at）の順が自然。' },
  ],

  rwenDialogue: {
    intro: '東京の英会話カフェで、海外の友達とディナーの予約と買い物の計画。',
    lines: [
      { speaker: 'npc', target: "When and where should we meet?", native: 'いつ、どこで会う？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Let's meet on Saturday at half past six. The restaurant costs about thirty dollars per person.", native: '土曜の6時半に会いましょう。レストランは1人30ドルくらい。', correct: true, feedback: '完璧 — 曜日・時間・価格を全部英語で。' },
          { target: "Saturday meeting yes.", native: '土曜会議はい。', correct: false, feedback: '完全な文で：「Let\'s meet on Saturday」。' },
          { target: "Doyoubi roku-ji han.", native: '土曜6時半。', correct: false, feedback: '英語：「Saturday at half past six」。' },
        ],
      },
      { speaker: 'npc', target: "Sounds good. The total with drinks will be around forty dollars each.", native: '飲み物含めて1人40ドルくらいかな。' },
      { speaker: 'rwen', rwenLine: 'Module 6 完了！数字・時間・お金を全部英語でできるようになりました。Module 7 で食べ物の英語を学びましょう。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください — 完全な文。',
    prompts: [
      { prompt: '金曜の7時半に会いましょう (英語で)', correct: [
        "Let's meet on Friday at half past seven",
        "Let's meet on Friday at half past seven.",
      ]},
      { prompt: '20ドルで、お店は午後6時に閉まります (英語で)', correct: [
        "It costs twenty dollars and the shop closes at six P.M.",
        "It costs twenty dollars and the shop closes at six P.M",
      ]},
    ],
  },

  mission: {
    title: 'Module 6 ミッション — 予定を英語で',
    task: '次の予定を英語で完全な文に：「会う曜日 + 時間 + 場所 + 予算」。',
    rwenSignoff: 'Module 6 完了！数字の世界が英語で開きました。',
  },

  phase8: {
    scenario: '東京の英会話カフェで、海外の友達と次の食事会の予定と予算を計画する。',
    rwenRole: 'Anna — 30歳のロンドン人デザイナー、計画好き。',
    successCriteria: "User combines day + time + price + discount in single sentences naturally, uses 'on' for days, 'at' for times, currency words (dollars/pounds/yen).",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
