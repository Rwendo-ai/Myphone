import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-jeong-deep',
  module: 10,
  lesson: 3,
  title: 'Jeong — The Bond That Builds',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "정 (jeong) returns — but deeper. It's the bond built through repetition, small acts, sharing food, time together. 정이 들어요 = jeong settles in. Once jeong forms, it doesn't easily break.",
    culturalNote: "Korean elders sometimes give food/money/care to the same neighbors for decades — that's jeong. Foreigners often experience this when an ahjumma 'adopts' them: regular check-ins, extra portions. You can't ask for jeong; it accumulates.",
  },

  chunks: [
    { id: 'jeong_deep', target: '정', native: 'Jeong (deep relational bond)', literal: 'feeling-bond', emoji: '💞', phonetic: 'jeong', audioRef: null },
    { id: 'jeongideureo', target: '정이 들었어요', native: "Jeong has settled in", literal: 'jeong-SUBJ entered-yo', emoji: '🌱', phonetic: 'jeong-i deu-reo-sseo-yo', audioRef: null },
    { id: 'jeong_manaeyo', target: '정이 많아요', native: 'They have lots of jeong (warm-hearted)', literal: 'jeong-SUBJ many-yo', emoji: '🫂', phonetic: 'jeong-i ma-na-yo', audioRef: null },
  ],

  pattern: {
    name: '정이 들다 / 많다',
    explanation: "정이 들어요 = jeong settles (built through time). 정이 많아요 = full of warmth. 정이 떨어져요 = jeong falls off (the bond breaks).",
    examples: [
      { target: '정이 들었어요', native: "Jeong has settled" },
      { target: '정이 많은 사람이에요', native: 'A warm-hearted person' },
      { target: '정이 떨어졌어요', native: 'The bond broke' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '정이 들었어요', right: 'Jeong has settled' },
      { left: '정이 많아요', right: 'Warm-hearted' },
      { left: '정이 떨어졌어요', right: 'Bond broke' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Jeong has settled in', correct: ['정이 들었어요', 'jeongi deureosseoyo'] },
    { type: 'fill_blank', instruction: 'A warm-hearted person', sentence: '정이 _____ 사람이에요.', options: ['많은', '비싼', '맛있는'], correct: '많은', context: 'Lots of jeong = warm-hearted.' },
    { type: 'build_sentence', instruction: 'Build "Jeong has settled with my coworkers"', words: ['들었어요', '동료들이랑', '정이'], correct: ['동료들이랑', '정이', '들었어요'], translation: 'Jeong has settled with my coworkers.' },
    { type: 'multiple_choice', instruction: 'How does jeong build?', question: 'Pick the cultural read', options: [
      { text: 'Through repetition + small acts + time', correct: true },
      { text: 'Through one big gesture', correct: false },
      { text: 'Instantly between strangers', correct: false },
    ], explanation: 'Jeong accumulates. It cannot be rushed.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Warm-hearted (lots of jeong)', correct: ['정이 많아요', 'jeongi manayo'] },
  ],

  rwenDialogue: {
    intro: "After three months at your Korean office, an older coworker reflects.",
    lines: [
      { speaker: 'npc', target: 'Sam씨, 이제 정이 들었어요.', native: "Sam, jeong has settled now." },
      { speaker: 'user', userChoices: [
        { target: '저도요. 감사합니다', native: "Me too. Thank you", correct: true, feedback: 'Mirror the warmth + thanks. Beautiful close.' },
        { target: '비싸요?', native: 'Expensive?', correct: false, feedback: 'Wrong topic.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'rwen', rwenLine: "정 — Korean's slow love. Receive it with warmth.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Jeong has settled in', correct: ['정이 들었어요', 'jeongi deureosseoyo'] },
      { prompt: 'Warm-hearted (lots of jeong)', correct: ['정이 많아요', 'jeongi manayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice jeong-builders in your day: regular contact, small acts, shared food. Korean has a word for what you've been doing.",
    rwenSignoff: "정 — slow Korean love. Now you can name it.",
  },

  phase8: {
    scenario: "Older coworker reflects after months — jeong has settled. You receive it warmly.",
    rwenRole: "Coworker — 50s, warm, has been mentoring you.",
    successCriteria: "User receives the 정이 들었어요 statement warmly. Mirrors with own affirmation. Uses 감사합니다.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
