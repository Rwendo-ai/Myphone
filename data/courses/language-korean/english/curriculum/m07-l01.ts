import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-bap',
  module: 7,
  lesson: 1,
  title: 'Bap — Rice Is Life',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "밥 (rice) is metaphor in Korean. 밥 먹었어요? = 'have you eaten rice?' = 'how are you?'. Asking after someone's rice IS asking after their wellbeing.",
    culturalNote: "밥 먹었어요? is the most-asked daily-life question in Korea. The expected answer is 네, 먹었어요 (yes, I ate). Saying 아니요 (no) often gets you fed on the spot.",
  },

  chunks: [
    { id: 'bap', target: '밥', native: 'Rice / meal', literal: 'cooked-rice', emoji: '🍚', phonetic: 'bap', audioRef: null },
    { id: 'bap_meogeo', target: '밥 먹었어요?', native: 'Have you eaten? (lit. eaten rice?)', literal: 'rice ate-yo?', emoji: '🍚', phonetic: 'bap meo-geo-sseo-yo', audioRef: null },
    { id: 'meogeosseoyo', target: '네, 먹었어요', native: 'Yes, I ate', literal: 'yes, ate-yo', emoji: '😋', phonetic: 'ne, meo-geo-sseo-yo', audioRef: null },
  ],

  pattern: {
    name: 'Past polite: -었/았어요',
    explanation: "Past polite ending: 먹다 (eat) → 먹었어요 (ate). 가다 (go) → 갔어요 (went). The 었/았 marks past, the 어요 keeps polite.",
    examples: [
      { target: '먹었어요', native: 'I ate' },
      { target: '갔어요', native: 'I went' },
      { target: '왔어요', native: 'I came' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '밥', right: 'Rice / meal' },
      { left: '밥 먹었어요?', right: 'Have you eaten?' },
      { left: '먹었어요', right: 'I ate' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Have you eaten?', correct: ['밥 먹었어요?', 'bap meogeosseoyo'] },
    { type: 'fill_blank', instruction: 'Reply you have eaten', sentence: '네, _____.', options: ['먹었어요', '먹어요', '먹을게요'], correct: '먹었어요', context: 'Past polite — you finished eating.' },
    { type: 'build_sentence', instruction: 'Build "Yes, I ate"', words: ['먹었어요', '네,'], correct: ['네,', '먹었어요'], translation: 'Yes, I ate.' },
    { type: 'multiple_choice', instruction: "Korean elder asks 밥 먹었어요? You haven't eaten. Best reply?", question: 'Pick the polite answer', options: [
      { text: '아니요, 아직 안 먹었어요', correct: true },
      { text: '아니', correct: false },
      { text: '비싸요', correct: false },
    ], explanation: 'Aspiration: warmly hedged — "no, not yet". Bare 아니 to elder = rude.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Rice / meal', correct: ['밥', 'bap'] },
  ],

  rwenDialogue: {
    intro: "Korean coworker bumps into you in the office hallway at 1pm.",
    lines: [
      { speaker: 'npc', target: '밥 먹었어요?', native: 'Have you eaten?' },
      { speaker: 'user', userChoices: [
        { target: '네, 먹었어요. 잘 지내요?', native: "Yes, I ate. How are you?", correct: true, feedback: 'Standard reply + bounce. Very Korean.' },
        { target: '아니', native: 'No (banmal)', correct: false, feedback: 'Banmal at work = wrong register.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'rwen', rwenLine: "밥 먹었어요? — Korean's wellness check via rice. Always answer with care.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Have you eaten?', correct: ['밥 먹었어요?', 'bap meogeosseoyo'] },
      { prompt: 'Yes, I ate', correct: ['네, 먹었어요', 'ne meogeosseoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice when you'd ask 'how are you?' in English today. Imagine asking 밥 먹었어요? instead. Same care, different frame.",
    rwenSignoff: "Rice = life in Korean. The question is the care.",
  },

  phase8: {
    scenario: "Mid-day in a Seoul office. A coworker asks 밥 먹었어요? as casual greeting.",
    rwenRole: "Coworker — peer, polite.",
    successCriteria: "User answers 네, 먹었어요 or 아니요, 아직 안 먹었어요. Bounces the question back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
