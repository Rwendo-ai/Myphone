import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-jal-jinaesseoyo',
  module: 1,
  lesson: 4,
  title: 'Jal Jinaesseoyo? — Have You Been Well?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After 안녕하세요, the natural follow-up is the wellness check: 잘 지냈어요? — have you been well? It's the Korean equivalent of 'how have you been?' between people who already know each other.",
    culturalNote: "Koreans don't typically ask 'how are you?' as a daily greeting to strangers (that's an American habit). 잘 지냈어요? is for friends, coworkers you haven't seen in a while, or family.",
  },

  chunks: [
    { id: 'jal_jinaesseoyo', target: '잘 지냈어요?', native: 'Have you been well?', literal: 'well got-along-yo?', emoji: '🤔', phonetic: 'jal ji-nae-sseo-yo', audioRef: null },
    { id: 'ne_jal', target: '네, 잘 지냈어요', native: "Yes, I've been well", literal: 'yes well got-along', emoji: '👍', phonetic: 'ne, jal ji-nae-sseo-yo', audioRef: null },
    { id: 'oraenmaniyeyo', target: '오랜만이에요', native: "It's been a while", literal: 'long-time-it-is', emoji: '⏰', phonetic: 'o-raen-man-i-e-yo', audioRef: null },
  ],

  pattern: {
    name: 'The reunion check',
    explanation: "When you see someone you haven't seen for a while, pair 오랜만이에요 with 잘 지냈어요? — 'long time! have you been well?'",
    examples: [
      { target: '오랜만이에요!', native: "It's been a while!" },
      { target: '잘 지냈어요?', native: 'Have you been well?' },
      { target: '네, 잘 지냈어요', native: "Yes, I've been well" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match the phrase to its meaning', pairs: [
      { left: '잘 지냈어요?', right: 'Have you been well?' },
      { left: '오랜만이에요', right: "It's been a while" },
      { left: '네, 잘 지냈어요', right: "Yes, I've been well" },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "It's been a while", correct: ['오랜만이에요', 'oraenmanieyo'] },
    { type: 'fill_blank', instruction: 'Reply naturally', sentence: '잘 지냈어요? — 네, _____.', options: ['잘 지냈어요', '안녕', '반갑습니다'], correct: '잘 지냈어요', context: 'They asked if you have been well. Mirror it back.' },
    { type: 'build_sentence', instruction: 'Build "Long time! Have you been well?"', words: ['잘 지냈어요?', '오랜만이에요!'], correct: ['오랜만이에요!', '잘 지냈어요?'], translation: "It's been a while! Have you been well?" },
    { type: 'multiple_choice', instruction: 'A coworker you haven\'t seen in a month walks in. Best opener?', question: 'Pick the natural reunion line', options: [
      { text: '오랜만이에요! 잘 지냈어요?', correct: true },
      { text: '안녕', correct: false },
      { text: '처음 뵙겠습니다', correct: false },
    ], explanation: "You know them — the reunion pair fits perfectly. 처음 뵙겠습니다 is for first meetings only." },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Have you been well?', correct: ['잘 지냈어요?', 'jal jinaesseoyo', 'jal jinaesseoyo?'] },
  ],

  rwenDialogue: {
    intro: "You bump into a Korean friend at Itaewon Station. You haven't seen her in two months.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '오랜만이에요! 잘 지냈어요?', native: "It's been a while! Have you been well?", correct: true, feedback: "Perfect reunion combo. Warm and natural." },
        { target: '안녕하세요, 처음 뵙겠습니다', native: 'Hello, first time meeting', correct: false, feedback: "You already know her — 처음 뵙겠습니다 only fits first meetings." },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: "That's a farewell — wrong direction." },
      ]},
      { speaker: 'npc', target: '네, 잘 지냈어요. 오랜만이에요!', native: "Yes, I've been well. It's been a while!" },
      { speaker: 'rwen', rwenLine: "Reunion locked. The 오랜만 + 잘 지냈어요 pair is your standard catch-up opener.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "It's been a while", correct: ['오랜만이에요', 'oraenmanieyo'] },
      { prompt: 'Have you been well?', correct: ['잘 지냈어요?', 'jal jinaesseoyo', 'jal jinaesseoyo?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture the last person you reconnected with after a gap. Now run the Korean version: 오랜만이에요! 잘 지냈어요? Say it out loud.",
    rwenSignoff: "Reunion is its own register in Korean. You've got it.",
  },

  phase8: {
    scenario: "You're at an Itaewon bar. A Korean coworker you haven't seen in three months spots you across the room and walks over.",
    rwenRole: "Coworker — early 30s, warm, polite register.",
    successCriteria: "User opens with 오랜만이에요 and asks 잘 지냈어요? Replies appropriately when asked back. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
