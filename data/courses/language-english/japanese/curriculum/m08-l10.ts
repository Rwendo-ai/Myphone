import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-conversation',
  module: 8,
  lesson: 10,
  title: 'A day-in-life conversation — My day in English',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 8 完成！過去・現在・未来を全部使った一日の物語を組み立てます。",
    culturalNote: "時制を組み合わせて一日を語れると、英語の表現力が大きく上がります。",
  },

  chunks: [
    { id: 'review_morning_routine', target: 'I wake up at 6, take a shower, and have breakfast.', native: '6時に起きて、シャワーを浴びて、朝食を食べる。', literal: 'Morning routine', emoji: '🌅', phonetic: 'ay-WAYK-UP-at-SIX', audioRef: null },
    { id: 'review_workday', target: 'I go to work, have meetings, and make plans.', native: '仕事に行って、会議をして、計画を立てる。', literal: 'Workday verbs', emoji: '💼', phonetic: 'ay-GOH-too-WERK', audioRef: null },
    { id: 'review_past_future', target: 'Yesterday I went home early; tomorrow I will work late.', native: '昨日は早く帰った、明日は遅くまで働く。', literal: 'Past + future', emoji: '🔄', phonetic: 'YES-ter-day-ay-WENT', audioRef: null },
  ],

  pattern: {
    name: 'Tense flow: past + present + future',
    explanation: "一日の流れで時制が変わります：昨日（過去）→ 今日（現在）→ 明日（未来）。それぞれ went / go / will go と使い分けます。",
    examples: [
      { target: 'Yesterday I went to Tokyo.', native: '昨日東京に行った。' },
      { target: 'Today I work from home.', native: '今日は在宅勤務。' },
      { target: 'Tomorrow I will travel.', native: '明日は出張する。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Yesterday I went', right: '昨日行った' },
      { left: 'Today I go', right: '今日行く' },
      { left: 'Tomorrow I will go', right: '明日行く' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '6時に起きて、シャワーを浴びて、朝食を食べる', correct: [
      'I wake up at 6, take a shower, and have breakfast',
      'I wake up at 6, take a shower, and have breakfast.',
    ]},
    { type: 'translate', instruction: '英語で', prompt: '昨日は早く帰った、明日は遅くまで働く', correct: [
      'Yesterday I went home early; tomorrow I will work late',
      'Yesterday I went home early, tomorrow I will work late',
      'Yesterday I went home early. Tomorrow I will work late.',
    ]},
    { type: 'build_sentence', instruction: '並べ替え', words: ['breakfast', 'have', 'I'], correct: ['I', 'have', 'breakfast'], translation: '朝食を食べる' },
    { type: 'fill_blank', instruction: '空欄 (時制)', sentence: 'Tomorrow I ____ travel.', options: ['will', 'went', 'go'], correct: 'will' },
    { type: 'multiple_choice', instruction: '正しい時制', question: '昨日のことを言うときの動詞は？', options: [
      { text: 'Past tense (went, did, was)', correct: true },
      { text: 'Future (will go)', correct: false },
      { text: 'Present (go)', correct: false },
    ], explanation: '昨日 = 過去形。' },
  ],

  rwenDialogue: {
    intro: '東京の英会話カフェで、海外の友達と一日のリズムを話します。',
    lines: [
      { speaker: 'npc', target: "Tell me about your typical day.", native: '普通の一日の流れを教えて。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6, go to work at 9, and have meetings until 6 P.M. Yesterday I went home early. Tomorrow I will visit Kyoto.", native: '6時に起きて、9時に仕事へ、6時まで会議。昨日は早く帰った。明日は京都へ行く。', correct: true, feedback: '完璧 — 過去・現在・未来を全部。' },
          { target: "I work meeting Kyoto.", native: '仕事 会議 京都。', correct: false, feedback: '完全な文と時制を使って。' },
          { target: "Tomorrow I went Kyoto.", native: '明日京都に行った。', correct: false, feedback: '明日 = will、昨日 = went — 時制を一致させて。' },
        ],
      },
      { speaker: 'npc', target: "Busy life! Have fun in Kyoto.", native: '忙しいね！京都楽しんで。' },
      { speaker: 'rwen', rwenLine: 'Module 8 完了！過去・現在・未来を自由に使えるようになりました。Module 9 で道案内・旅行を学びましょう。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください — 時制を含む完全文。',
    prompts: [
      { prompt: '6時に起きて、シャワーを浴びて、朝食を食べる (英語で)', correct: [
        'I wake up at 6, take a shower, and have breakfast',
        'I wake up at 6, take a shower, and have breakfast.',
      ]},
      { prompt: '昨日は早く帰った、明日は遅くまで働く (英語で)', correct: [
        'Yesterday I went home early; tomorrow I will work late',
        'Yesterday I went home early, tomorrow I will work late',
      ]},
    ],
  },

  mission: {
    title: 'Module 8 ミッション — 一日の物語',
    task: '今日の自分を3つの時制で：「Yesterday I __」「Today I __」「Tomorrow I will __」。',
    rwenSignoff: 'Module 8 完了！時間を自由に行き来できる英語力がつきました。',
  },

  phase8: {
    scenario: '東京の英会話カフェで海外の友達と一週間の話を時制を交えて。',
    rwenRole: 'James — 30歳の友達、好奇心旺盛。',
    successCriteria: "User uses past (yesterday went/saw), present (today I work), future (tomorrow I will / I'm going to) consistently, doesn't mix tenses incorrectly.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
