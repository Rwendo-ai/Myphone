import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-future',
  module: 8,
  lesson: 7,
  title: 'Future / Intent — -ㄹ게요 / -ㄹ거예요',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Future intent: -(으)ㄹ게요 (I will, promise/commit) and -(으)ㄹ 거예요 (I will, simple future). 갈게요 = I'll go (commit). 갈 거예요 = I'll go (just future).",
    culturalNote: "-ㄹ게요 carries intent toward the listener — 'I'll do this for you'. K-drama lovers say 기다릴게요 (I'll wait — for you). -ㄹ 거예요 is detached future.",
  },

  chunks: [
    { id: 'lgeyo', target: '-(으)ㄹ게요', native: "I will (commit)", literal: 'will-yo', emoji: '🤝', phonetic: '-(eu)l-ge-yo', audioRef: null },
    { id: 'lgeoyeyo', target: '-(으)ㄹ 거예요', native: 'I will (simple future)', literal: 'will thing-is', emoji: '➡️', phonetic: '-(eu)l geo-ye-yo', audioRef: null },
    { id: 'galgeyo', target: '갈게요', native: "I'll go (commit)", literal: 'go-will-yo', emoji: '🚶', phonetic: 'gal-ge-yo', audioRef: null },
  ],

  pattern: {
    name: 'Commit vs neutral future',
    explanation: "-ㄹ게요 = commitment to listener (I will, for you / I promise). -ㄹ 거예요 = neutral future statement.",
    examples: [
      { target: '갈게요', native: "I'll go (committing)" },
      { target: '갈 거예요', native: "I will go (just stating)" },
      { target: '먹을게요', native: "I'll eat it (commit)" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match form to nuance', pairs: [
      { left: '-ㄹ게요', right: 'Commit / for you' },
      { left: '-ㄹ 거예요', right: 'Neutral future' },
      { left: '갈게요', right: "I'll go (commit)" },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "I'll pay (commit)", correct: ['제가 낼게요', 'jega naelgeyo'] },
    { type: 'fill_blank', instruction: 'Promise to wait', sentence: '여기서 _____.', options: ['기다릴게요', '기다려요', '기다렸어요'], correct: '기다릴게요', context: 'Commit to wait FOR them.' },
    { type: 'build_sentence', instruction: 'Build "I will eat it" (commit)', words: ['먹을게요', '제가'], correct: ['제가', '먹을게요'], translation: "I'll eat it." },
    { type: 'multiple_choice', instruction: 'Best for "I will go to Korea next year (just stating)"?', question: 'Pick the right form', options: [
      { text: '내년에 한국에 갈 거예요', correct: true },
      { text: '내년에 한국에 갈게요', correct: false },
      { text: '내년에 한국에 가요', correct: false },
    ], explanation: 'Just stating future = -ㄹ 거예요. -ㄹ게요 implies commitment to the listener.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "I'll go (commit)", correct: ['갈게요', '제가 갈게요', 'galgeyo'] },
  ],

  rwenDialogue: {
    intro: "Friend asks if you'll come to a meetup.",
    lines: [
      { speaker: 'npc', target: '내일 만날까요?', native: 'Shall we meet tomorrow?' },
      { speaker: 'user', userChoices: [
        { target: '네! 갈게요!', native: "Yes! I'll come (commit)", correct: true, feedback: '-ㄹ게요 commits — they know you\'re coming.' },
        { target: '네, 갈 거예요', native: "Yes, I'll go (neutral)", correct: false, feedback: 'Detached — sounds half-committal.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '좋아요! 7시에 봐요!', native: 'Great! See you at 7!' },
      { speaker: 'rwen', rwenLine: "-ㄹ게요 — for the listener. -ㄹ 거예요 — just facts. The commitment dial.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: "I'll go (commit)", correct: ['갈게요', 'galgeyo'] },
      { prompt: "I will go (neutral future)", correct: ['갈 거예요', 'gal geoyeyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one promise you can make in Korean. Use -ㄹ게요. The listener feels the weight.",
    rwenSignoff: "Future unlocked. Korean carries promises in its grammar.",
  },

  phase8: {
    scenario: "Friend asks if you'll come to dinner. You commit.",
    rwenRole: "Korean friend — peer, polite.",
    successCriteria: "User uses -ㄹ게요 to commit (갈게요, 만날게요). Distinguishes from neutral -ㄹ 거예요 future.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
