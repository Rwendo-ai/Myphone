import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-meokda-masida',
  module: 8,
  lesson: 3,
  title: 'Meokda / Masida — Eat & Drink',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "먹다 (to eat) and 마시다 (to drink) — daily-life essentials. With food/drink as object: 김치를 먹어요, 커피를 마셔요. SOV again, polite 어/아요 ending.",
    culturalNote: "Honorific equivalents: 드시다 (eat — used for elders/respected). When grandma eats: 할머니가 드세요. When you eat: 저는 먹어요.",
  },

  chunks: [
    { id: 'meokda', target: '먹어요', native: 'I eat (polite)', literal: 'eat-yo', emoji: '🍴', phonetic: 'meo-geo-yo', audioRef: null },
    { id: 'masida', target: '마셔요', native: 'I drink (polite)', literal: 'drink-yo', emoji: '🥤', phonetic: 'ma-syeo-yo', audioRef: null },
    { id: 'deusida', target: '드세요', native: 'eat (honorific to elder)', literal: 'eat-honorific', emoji: '🙇', phonetic: 'deu-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'Object + 을/를 + 먹다/마시다',
    explanation: "SOV. Food = 먹다 (eat). Drink = 마시다 (drink). Use honorific 드세요 when subject is elder.",
    examples: [
      { target: '저는 김치를 먹어요', native: 'I eat kimchi' },
      { target: '저는 커피를 마셔요', native: 'I drink coffee' },
      { target: '할머니가 밥을 드세요', native: 'Grandma eats rice (honorific)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match verb to meaning', pairs: [
      { left: '먹어요', right: 'I eat' },
      { left: '마셔요', right: 'I drink' },
      { left: '드세요', right: 'eat (honorific)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I drink coffee', correct: ['커피를 마셔요', '저는 커피를 마셔요', 'keopireul masyeoyo'] },
    { type: 'fill_blank', instruction: 'Honor the elder', sentence: '할아버지가 _____.', options: ['드세요', '먹어', '먹어요'], correct: '드세요', context: 'Grandfather subject = honorific.' },
    { type: 'build_sentence', instruction: 'Build "I eat kimchi"', words: ['먹어요', '김치를', '저는'], correct: ['저는', '김치를', '먹어요'], translation: 'I eat kimchi.' },
    { type: 'multiple_choice', instruction: '"What do you eat for breakfast?"', question: 'Pick the natural Korean', options: [
      { text: '아침에 뭐 먹어요?', correct: true },
      { text: '아침에 뭐 마셔요?', correct: false },
      { text: '아침에 뭐 가요?', correct: false },
    ], explanation: '먹다 for solid food. 마시다 for drinks. 가다 = go (wrong verb).' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I eat (polite)', correct: ['먹어요', 'meogeoyo'] },
  ],

  rwenDialogue: {
    intro: "Lunch chat with a Korean coworker.",
    lines: [
      { speaker: 'npc', target: '점심 뭐 먹었어요?', native: 'What did you eat for lunch?' },
      { speaker: 'user', userChoices: [
        { target: '비빔밥을 먹었어요', native: 'I ate bibimbap', correct: true, feedback: 'Object + 을 + 먹었어요. Past polite locked.' },
        { target: '비빔밥 가요', native: 'I go bibimbap (wrong verb)', correct: false, feedback: '가다 = go. 먹다 = eat. Pick the food verb.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '맛있었어요?', native: 'Was it tasty?' },
      { speaker: 'rwen', rwenLine: "먹다/마시다 + object marker. Daily Korean food/drink — covered.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I drink coffee', correct: ['커피를 마셔요', 'keopireul masyeoyo'] },
      { prompt: 'eat (honorific to elder)', correct: ['드세요', 'deuseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three things you ate/drank today. Build SOV: 저는 X를 먹었어요/마셨어요.",
    rwenSignoff: "Eat and drink in Korean. Daily verbs locked.",
  },

  phase8: {
    scenario: "Lunch chat — talking about what you eat and drink in a typical day.",
    rwenRole: "Coworker — peer, polite.",
    successCriteria: "User uses 먹다 for food and 마시다 for drinks with correct object markers. Switches to 드세요 when subject is elder.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
