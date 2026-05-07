import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-jeong',
  module: 7,
  lesson: 6,
  title: 'Jeong — Sharing Food Is Care',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "정 (jeong) — Korean's word for the deep relational warmth that grows through shared meals, small acts, repetition. Sharing food is the primary jeong-channel. Refusing food at someone's home cuts the channel.",
    culturalNote: "An ahjumma who hands you extra banchan is not being polite — she's transmitting jeong. Saying 잘 먹겠습니다 (I will eat well) before a meal and 잘 먹었습니다 (I ate well) after = receiving the jeong.",
  },

  chunks: [
    { id: 'jeong', target: '정', native: 'Jeong (relational warmth)', literal: 'feeling/affection', emoji: '💞', phonetic: 'jeong', audioRef: null },
    { id: 'jal_meogetseumnida', target: '잘 먹겠습니다', native: 'I will eat well (pre-meal)', literal: 'well will-eat', emoji: '🥢', phonetic: 'jal meo-get-seum-ni-da', audioRef: null },
    { id: 'jal_meogeotseumnida', target: '잘 먹었습니다', native: 'I ate well (post-meal)', literal: 'well ate-formal', emoji: '🍽️', phonetic: 'jal meo-geot-seum-ni-da', audioRef: null },
  ],

  pattern: {
    name: 'Pre/post-meal formula',
    explanation: "잘 먹겠습니다 BEFORE eating (especially someone else cooked/paid). 잘 먹었습니다 AFTER. Both formal/respectful — even use 잘 먹을게요 / 잘 먹었어요 with peers.",
    examples: [
      { target: '잘 먹겠습니다', native: 'I will eat well (formal pre-meal)' },
      { target: '잘 먹었습니다', native: 'I ate well (formal post-meal)' },
      { target: '많이 드세요', native: 'Eat a lot (host\'s line, honorific)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to moment', pairs: [
      { left: '잘 먹겠습니다', right: 'Pre-meal' },
      { left: '잘 먹었습니다', right: 'Post-meal' },
      { left: '많이 드세요', right: "Host's invitation" },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I will eat well (pre-meal)', correct: ['잘 먹겠습니다', 'jal meogetseumnida'] },
    { type: 'fill_blank', instruction: 'After dinner at host\'s home', sentence: '_____. 정말 맛있었어요.', options: ['잘 먹었습니다', '잘 먹겠습니다', '비싸요'], correct: '잘 먹었습니다', context: 'Post-meal — past tense.' },
    { type: 'build_sentence', instruction: 'Build "I will eat well" (formal)', words: ['잘', '먹겠습니다'], correct: ['잘', '먹겠습니다'], translation: 'I will eat well.' },
    { type: 'multiple_choice', instruction: 'Korean host serves you a homemade meal. First words?', question: 'Pick the warm pre-meal line', options: [
      { text: '잘 먹겠습니다', correct: true },
      { text: '얼마예요?', correct: false },
      { text: '안녕히 가세요', correct: false },
    ], explanation: 'Pre-meal formal — receives the jeong.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I ate well (post-meal)', correct: ['잘 먹었습니다', 'jal meogeotseumnida'] },
  ],

  rwenDialogue: {
    intro: "Korean friend's mother has cooked an elaborate dinner.",
    lines: [
      { speaker: 'npc', target: '많이 드세요!', native: 'Eat a lot!' },
      { speaker: 'user', userChoices: [
        { target: '잘 먹겠습니다', native: 'I will eat well (formal)', correct: true, feedback: 'Pre-meal formal — receives her jeong.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'You\'re a guest — never ask price.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong line entirely.' },
      ]},
      { speaker: 'rwen', rwenLine: "잘 먹겠습니다 — three syllables, hours of jeong received.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I will eat well (pre-meal)', correct: ['잘 먹겠습니다', 'jal meogetseumnida'] },
      { prompt: 'I ate well (post-meal)', correct: ['잘 먹었습니다', 'jal meogeotseumnida'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Before your next meal, say 잘 먹겠습니다 in your head. After, 잘 먹었습니다. Receive the jeong.",
    rwenSignoff: "정 — relational warmth. Words mark the channel; food carries it.",
  },

  phase8: {
    scenario: "Dinner at your Korean friend's mother's home. She has cooked an elaborate meal.",
    rwenRole: "Friend's mother — 60s, traditional, generous.",
    successCriteria: "User says 잘 먹겠습니다 before eating, 잘 먹었습니다 after. Compliments with 맛있어요. Receives banchan refills warmly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
