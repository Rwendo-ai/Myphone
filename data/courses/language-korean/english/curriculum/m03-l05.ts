import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-chwimi',
  module: 3,
  lesson: 5,
  title: 'Chwimi — Hobbies',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "취미 (hobby) is a magnetic small-talk topic. Koreans love asking — and the answers always lead somewhere. K-pop fan? K-drama? Hiking? Gaming? Pick yours.",
    culturalNote: "Hiking (등산) and golfing are massive in middle-aged Korea. Gaming (게임) and K-pop dance covers among Gen Z. Saying you watch K-drama gets a smile from anyone.",
  },

  chunks: [
    { id: 'chwimi', target: '취미가 뭐예요?', native: "What's your hobby?", literal: 'hobby-SUBJ what-is?', emoji: '🎯', phonetic: 'chwi-mi-ga mwo-ye-yo', audioRef: null },
    { id: 'joahaeyo', target: '___ 좋아해요', native: 'I like ___', literal: '___ like-yo', emoji: '❤️', phonetic: '___ jo-a-hae-yo', audioRef: null },
    { id: 'kpop', target: 'K-pop 좋아해요', native: 'I like K-pop', literal: 'K-pop like-yo', emoji: '🎤', phonetic: 'K-pop jo-a-hae-yo', audioRef: null },
  ],

  pattern: {
    name: '좋아해요 — the universal "I like"',
    explanation: "Object + 좋아해요. The verb 좋아하다 means 'to like'. Polite form 좋아해요 takes no particle in casual speech (technically 을/를 but often dropped).",
    examples: [
      { target: 'K-드라마 좋아해요', native: 'I like K-dramas' },
      { target: '등산 좋아해요', native: 'I like hiking' },
      { target: '게임 좋아해요', native: 'I like games' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match hobby to Korean', pairs: [
      { left: '등산', right: 'Hiking' },
      { left: '게임', right: 'Games' },
      { left: 'K-드라마', right: 'K-drama' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "What's your hobby?", correct: ['취미가 뭐예요?', 'chwimiga mwoeyo'] },
    { type: 'fill_blank', instruction: 'Express liking', sentence: '저는 K-pop _____.', options: ['좋아해요', '비싸요', '주세요'], correct: '좋아해요', context: 'I like K-pop.' },
    { type: 'build_sentence', instruction: 'Build "I like K-drama"', words: ['좋아해요', 'K-드라마'], correct: ['K-드라마', '좋아해요'], translation: 'I like K-drama.' },
    { type: 'multiple_choice', instruction: 'Best Korean opener for "I love K-pop"?', question: 'Pick the natural sentence', options: [
      { text: '저는 K-pop 정말 좋아해요', correct: true },
      { text: 'K-pop 비싸요', correct: false },
      { text: 'K-pop 어디예요?', correct: false },
    ], explanation: '정말 = really. Adds emphasis. The other two are wrong verbs.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I like hiking', correct: ['등산 좋아해요', 'deungsan joahaeyo'] },
  ],

  rwenDialogue: {
    intro: "Korean friend asks about your weekend.",
    lines: [
      { speaker: 'npc', target: '취미가 뭐예요?', native: "What's your hobby?" },
      { speaker: 'user', userChoices: [
        { target: 'K-드라마 좋아해요', native: 'I like K-dramas', correct: true, feedback: 'Universal Korean small-talk goldmine.' },
        { target: 'K-드라마 비싸요', native: 'K-dramas are expensive', correct: false, feedback: 'Wrong verb.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '아, 어떤 드라마 좋아해요?', native: 'Oh, which dramas do you like?' },
      { speaker: 'rwen', rwenLine: "취미 + 좋아해요 — the small-talk engine. Pick a hobby and the conversation runs itself.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: "What's your hobby?", correct: ['취미가 뭐예요?', 'chwimiga mwoeyo'] },
      { prompt: 'I like K-pop', correct: ['K-pop 좋아해요', 'K-pop joahaeyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick your hobby in Korean. K-pop, K-드라마, 등산, 게임, or another. Build the line: 저는 ___ 좋아해요.",
    rwenSignoff: "취미 = bridge to anyone. Build yours.",
  },

  phase8: {
    scenario: "Casual chat with a Korean friend at a Hongdae café — they're curious about what you do for fun.",
    rwenRole: "Korean friend — peer, polite register, warm.",
    successCriteria: "User uses 저는 ___ 좋아해요 with at least one hobby. Asks back with 취미가 뭐예요? Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
