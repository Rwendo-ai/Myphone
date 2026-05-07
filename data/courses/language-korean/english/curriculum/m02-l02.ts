import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-gamsahamnida',
  module: 2,
  lesson: 2,
  title: 'Gamsahamnida — Thank You',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Korean has multiple thank-yous and the level matters. 감사합니다 (formal), 고마워요 (polite), 고마워 (banmal). Picking the wrong one telegraphs your read of the relationship.",
    culturalNote: "Saying 감사합니다 too much can sound stiff between friends. Saying 고마워 to a stranger can sound presumptuous. Match the room — it's a constant calibration.",
  },

  chunks: [
    { id: 'gamsahamnida', target: '감사합니다', native: 'Thank you (formal)', literal: 'gratitude-do', emoji: '🙇', phonetic: 'gam-sa-ham-ni-da', audioRef: null },
    { id: 'gomawayo', target: '고마워요', native: 'Thank you (polite)', literal: 'thankful-yo', emoji: '🙏', phonetic: 'go-ma-wo-yo', audioRef: null },
    { id: 'gomawo', target: '고마워', native: 'Thanks (banmal)', literal: 'thankful', emoji: '😊', phonetic: 'go-ma-wo', audioRef: null },
  ],

  pattern: {
    name: 'Three thank-yous, three rooms',
    explanation: "감사합니다 = work, elders, strangers. 고마워요 = polite peers, daily warm. 고마워 = close friends, younger.",
    examples: [
      { target: '감사합니다', native: 'Formal — strangers, elders, work' },
      { target: '고마워요', native: 'Polite — peers, daily life' },
      { target: '고마워', native: 'Casual — close friends only' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match thank-you to register', pairs: [
      { left: '감사합니다', right: 'Formal — strangers, elders' },
      { left: '고마워요', right: 'Polite — peers' },
      { left: '고마워', right: 'Casual — close friends' },
    ]},
    { type: 'multiple_choice', instruction: "An elder hands you change at a shop. What do you say?", question: 'Pick the right register', options: [
      { text: '감사합니다', correct: true },
      { text: '고마워', correct: false },
      { text: '안녕', correct: false },
    ], explanation: 'Elder + stranger = 감사합니다. Banmal would be rude.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Thank you (formal)', correct: ['감사합니다', 'gamsahamnida'] },
    { type: 'fill_blank', instruction: "Reply to a friend's small favor", sentence: '___, 친구야!', options: ['고마워', '감사합니다', '안녕히 가세요'], correct: '고마워', context: 'Close friend = banmal.' },
    { type: 'build_sentence', instruction: 'Build "Thank you very much (formal)"', words: ['감사합니다', '정말'], correct: ['정말', '감사합니다'], translation: 'Really, thank you. (Thank you very much.)' },
    { type: 'translate', instruction: 'Type in Korean — polite version', prompt: 'Thank you (polite)', correct: ['고마워요', 'gomawoyo'] },
  ],

  rwenDialogue: {
    intro: "A stranger picks up your dropped phone in Itaewon and hands it back.",
    lines: [
      { speaker: 'npc', target: '여기요.', native: 'Here you go.' },
      { speaker: 'user', userChoices: [
        { target: '정말 감사합니다', native: 'Thank you very much (formal)', correct: true, feedback: 'Stranger + favor = formal thanks. 정말 (really) adds warmth.' },
        { target: '고마워', native: 'Thanks (banmal)', correct: false, feedback: "Stranger — too casual. They'll feel disrespected." },
        { target: '안녕', native: 'Hi', correct: false, feedback: 'Wrong direction — they did you a favor.' },
      ]},
      { speaker: 'npc', target: '아니에요. 안녕히 가세요.', native: "It's nothing. Goodbye." },
      { speaker: 'rwen', rwenLine: "Three thank-yous, three rooms. Pick the right one and warmth lands.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Thank you (formal — to a stranger)', correct: ['감사합니다', 'gamsahamnida'] },
      { prompt: 'Thanks (banmal — to a close friend)', correct: ['고마워', 'gomawo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice every 'thank you' moment today. Decide: formal, polite, or banmal? Say the Korean version in your head.",
    rwenSignoff: "Gratitude in three registers. You can now thank anyone correctly.",
  },

  phase8: {
    scenario: "Multiple small thank-you moments at a Seoul convenience store: cashier, an elder who holds the door, a friend who texts back.",
    rwenRole: "Multiple — cashier (formal), elder (formal), friend (banmal).",
    successCriteria: "User picks 감사합니다 for cashier and elder, 고마워 for the close friend. Does NOT use 고마워 with the elder.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
