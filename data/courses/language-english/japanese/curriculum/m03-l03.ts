import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-job',
  module: 3,
  lesson: 3,
  title: 'What do you do? — お仕事は何ですか？',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「What do you do?」は仕事を聞く定番。日本語の「お仕事は何をされていますか？」と同じです。",
    culturalNote: "日本では会社名と肩書きを言うのが普通（「ABC株式会社の営業です」）ですが、英語圏では職種を言うのが普通：「I'm a salesperson」「I work in sales」。会社名は二の次です。",
  },

  chunks: [
    { id: 'what_do_you_do', target: 'What do you do?', native: 'お仕事は何ですか？ (Oshigoto wa nan desu ka?)', literal: 'What do you do?', emoji: '💼', phonetic: 'wut-doo-yoo-DOO', audioRef: null },
    { id: 'im_a_teacher', target: "I'm a teacher", native: '教師です (Kyoushi desu)', literal: 'I-am a teacher', emoji: '👩‍🏫', phonetic: 'aym-uh-TEE-cher', audioRef: null },
    { id: 'i_work_in_it', target: 'I work in IT', native: 'IT業界で働いています (IT gyoukai de hataraite imasu)', literal: 'I work in IT', emoji: '💻', phonetic: 'ay-WURK-in-AY-TEE', audioRef: null },
  ],

  pattern: {
    name: 'Job descriptions',
    explanation: "職業の言い方は2通り：(1)「I'm a + 職業」(I'm a teacher) (2)「I work in + 業界」(I work in IT)。冠詞「a」を忘れずに。「engineer」のように母音始まりは「an engineer」。",
    examples: [
      { target: 'What do you do?', native: 'お仕事は何ですか？' },
      { target: "I'm an engineer.", native: 'エンジニアです。' },
      { target: 'I work in finance.', native: '金融業界で働いています。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'What do you do?', right: 'お仕事は何ですか？' },
      { left: "I'm a teacher", right: '教師です' },
      { left: 'I work in IT', right: 'IT業界で働いています' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '教師です', correct: ["I'm a teacher", 'I am a teacher'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'm ____ engineer.", options: ['an', 'a', 'the'], correct: 'an' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「What do you do?」は何の質問？', options: [
      { text: '職業を聞いている', correct: true },
      { text: '今何をしているか', correct: false },
      { text: '名前を聞いている', correct: false },
    ], explanation: '「What do you do?」= 「お仕事は？」。今やっている事は「What are you doing?」です。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['IT', 'work', 'in', 'I'], correct: ['I', 'work', 'in', 'IT'], translation: 'IT業界で働いています' },
    { type: 'translate', instruction: '英語で', prompt: 'エンジニアです', correct: ["I'm an engineer", 'I am an engineer'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのビジネス交流会で、初対面のイギリス人と話します。',
    lines: [
      { speaker: 'npc', target: 'So, what do you do, Yuki?', native: 'では、お仕事は何ですか、ユキ？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm an engineer. I work in IT. And you?", native: 'エンジニアです。IT業界で働いています。あなたは？', correct: true, feedback: '完璧 — 職種と業界を伝えて、質問も返しました。' },
          { target: 'I work Tanaka company.', native: '田中会社で働く。', correct: false, feedback: '英語圏では会社名より職種を先に。「I\'m an engineer」が自然。' },
          { target: 'Salaryman.', native: 'サラリーマン。', correct: false, feedback: '「Salaryman」は和製英語。「I work in [業界]」が伝わります。' },
        ],
      },
      { speaker: 'npc', target: "Cool. I'm a consultant.", native: '面白いね。私はコンサルタント。' },
      { speaker: 'rwen', rwenLine: '仕事の伝え方マスター！「a」と業界の言い方を覚えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'お仕事は何ですか？ (英語で)', correct: ['What do you do?', 'what do you do?'] },
      { prompt: 'IT業界で働いています (英語で)', correct: ['I work in IT', 'i work in IT'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の仕事を英語で「I\'m a [職業]」または「I work in [業界]」と練習。',
    rwenSignoff: "What do I do? I help you learn. See you next.",
  },

  phase8: {
    scenario: 'ロンドンのネットワーキングイベントでビジネスパーソンと立ち話。',
    rwenRole: 'Henry — 38歳のロンドンのコンサルタント、社交的。',
    successCriteria: "User says 'I'm a [profession]' or 'I work in [field]' (not 'Salaryman' or company-first), uses correct article 'a'/'an', returns the question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
