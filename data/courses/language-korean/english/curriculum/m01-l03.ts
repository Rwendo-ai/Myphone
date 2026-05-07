import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-annyeonghigaseyo',
  module: 1,
  lesson: 3,
  title: 'Annyeonghi Gaseyo — Goodbye',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Korean has TWO goodbyes — and which one you use depends on who's leaving. The one staying says one thing; the one going says another. Mix them up and it's confusing.",
    culturalNote: "안녕히 가세요 = 'go in peace' (you stay, they leave). 안녕히 계세요 = 'stay in peace' (you leave, they stay). Both end with 세요 — polite. K-drama farewells lean on these constantly.",
  },

  chunks: [
    { id: 'gaseyo', target: '안녕히 가세요', native: 'Goodbye (you stay, they go)', literal: 'in-peace go-please', emoji: '👋', phonetic: 'an-nyeong-hi ga-se-yo', audioRef: null },
    { id: 'gyeseyo', target: '안녕히 계세요', native: 'Goodbye (you go, they stay)', literal: 'in-peace stay-please', emoji: '🚪', phonetic: 'an-nyeong-hi gye-se-yo', audioRef: null },
    { id: 'jal_ga', target: '잘 가', native: 'Bye (casual — to friends)', literal: 'well go', emoji: '✌️', phonetic: 'jal ga', audioRef: null },
  ],

  pattern: {
    name: 'Two goodbyes — the staying/leaving rule',
    explanation: "The one STAYING says 안녕히 가세요 (go in peace). The one LEAVING says 안녕히 계세요 (stay in peace). Both polite — same register, opposite direction.",
    examples: [
      { target: '안녕히 가세요', native: 'Said by the host, the cashier, the one staying' },
      { target: '안녕히 계세요', native: 'Said by the guest, the customer, the one leaving' },
      { target: '잘 가', native: 'Casual — friends, younger' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match goodbye to who says it', pairs: [
      { left: '안녕히 가세요', right: 'Said by the one staying' },
      { left: '안녕히 계세요', right: 'Said by the one leaving' },
      { left: '잘 가', right: 'Casual — to a friend' },
    ]},
    { type: 'multiple_choice', instruction: "You're leaving the café. The barista is staying. What do YOU say?", question: 'Pick the right form', options: [
      { text: '안녕히 계세요', correct: true },
      { text: '안녕히 가세요', correct: false },
      { text: '잘 가', correct: false },
    ], explanation: "You're leaving — say 'stay in peace' (계세요). The barista will say 가세요 to you." },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Goodbye (you are leaving, they are staying)', correct: ['안녕히 계세요', 'annyeonghi gyeseyo'] },
    { type: 'fill_blank', instruction: 'Complete the farewell — your friend is going home', sentence: '안녕히 _____!', options: ['가세요', '계세요', '하세요'], correct: '가세요', context: 'You are staying; they are leaving.' },
    { type: 'build_sentence', instruction: 'Build "Bye" (casual to a friend)', words: ['가', '잘'], correct: ['잘', '가'], translation: 'Bye (casual)' },
    { type: 'translate', instruction: 'Type in Korean — said by the one staying', prompt: 'Goodbye (go in peace)', correct: ['안녕히 가세요', 'annyeonghi gaseyo'] },
  ],

  rwenDialogue: {
    intro: "You're leaving the Seoul café from Lesson 1. The barista is behind the counter — she's staying.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '안녕히 계세요', native: 'Stay in peace (I am leaving)', correct: true, feedback: "Right — you're going, she's staying. 계세요." },
        { target: '안녕히 가세요', native: 'Go in peace', correct: false, feedback: "She's the one staying. SHE says 가세요 to YOU." },
        { target: '잘 가', native: 'Bye (casual)', correct: false, feedback: "Too casual for a stranger — even a friendly barista." },
      ]},
      { speaker: 'npc', target: '네, 안녕히 가세요!', native: 'Yes, go in peace!' },
      { speaker: 'rwen', rwenLine: "She gave you 가세요 because YOU are leaving. The pair locks in.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Goodbye — you are leaving, they are staying', correct: ['안녕히 계세요', 'annyeonghi gyeseyo'] },
      { prompt: 'Goodbye — you are staying, they are leaving', correct: ['안녕히 가세요', 'annyeonghi gaseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk through the staying/leaving rule in your head three times today. Picture leaving a café — say 계세요. Picture seeing them off at your door — say 가세요.",
    rwenSignoff: "Two goodbyes. One language. You'll never confuse them again.",
  },

  phase8: {
    scenario: "You've finished a meal at a Busan beach restaurant. The owner walks you to the door. You both need to farewell each other.",
    rwenRole: "Restaurant owner — late 50s, warm, expects polite farewells.",
    successCriteria: "User says 안녕히 계세요 (because they are leaving). Owner replies 안녕히 가세요. User does NOT swap them.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
