import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-cheoncheonhi',
  module: 2,
  lesson: 5,
  title: 'Cheoncheonhi Malhaejuseyo — Please Speak Slowly',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Korean spoken at native speed is fast. The lifesaver phrase: 천천히 말해주세요 — please speak slowly. Pair it with 다시 말해주세요 — please say it again. These two phrases save every traveler.",
    culturalNote: "Koreans appreciate when you try — they will slow down and repeat happily if asked politely. Don't apologize for not knowing; just ask clearly.",
  },

  chunks: [
    { id: 'cheoncheonhi', target: '천천히 말해주세요', native: 'Please speak slowly', literal: 'slowly speak-give-please', emoji: '🐢', phonetic: 'cheon-cheon-hi mal-hae-ju-se-yo', audioRef: null },
    { id: 'dasi', target: '다시 말해주세요', native: 'Please say it again', literal: 'again speak-give-please', emoji: '🔁', phonetic: 'da-si mal-hae-ju-se-yo', audioRef: null },
    { id: 'moreugesseoyo', target: '잘 모르겠어요', native: "I don't know / I don't understand", literal: 'well not-know-yo', emoji: '🤷', phonetic: 'jal mo-reu-ge-sseo-yo', audioRef: null },
  ],

  pattern: {
    name: 'Survival self-rescue trio',
    explanation: "Three phrases unlock any conversation you're losing: 천천히 (slow down), 다시 (again), 잘 모르겠어요 (I don't know).",
    examples: [
      { target: '천천히 말해주세요', native: 'Please speak slowly' },
      { target: '다시 말해주세요', native: 'Please say it again' },
      { target: '잘 모르겠어요', native: "I don't understand" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '천천히 말해주세요', right: 'Please speak slowly' },
      { left: '다시 말해주세요', right: 'Please say it again' },
      { left: '잘 모르겠어요', right: "I don't understand" },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Please speak slowly', correct: ['천천히 말해주세요', 'cheoncheonhi malhaejuseyo'] },
    { type: 'fill_blank', instruction: 'You missed what they said', sentence: '_____ 말해주세요.', options: ['다시', '천천히', '안녕'], correct: '다시', context: 'Ask them to repeat.' },
    { type: 'build_sentence', instruction: 'Build "I don\'t understand"', words: ['모르겠어요', '잘'], correct: ['잘', '모르겠어요'], translation: "I don't understand." },
    { type: 'multiple_choice', instruction: 'A taxi driver speaks fast. You catch nothing. Best phrase?', question: 'Pick the rescue', options: [
      { text: '천천히 말해주세요', correct: true },
      { text: '안녕히 가세요', correct: false },
      { text: '잘 부탁드립니다', correct: false },
    ], explanation: 'Slow him down — that\'s the right rescue here.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Please say it again', correct: ['다시 말해주세요', 'dasi malhaejuseyo'] },
  ],

  rwenDialogue: {
    intro: "A Seoul taxi driver rattles off a question at full speed.",
    lines: [
      { speaker: 'npc', target: '어디로 가세요? 강남이요? 명동이요?', native: 'Where to? Gangnam? Myeongdong?' },
      { speaker: 'user', userChoices: [
        { target: '천천히 말해주세요', native: 'Please speak slowly', correct: true, feedback: 'He nods, slows down. Crisis averted.' },
        { target: '잘 부탁드립니다', native: 'Please take care of me', correct: false, feedback: 'Wrong tool — that\'s for first introductions.' },
        { target: '안녕히 계세요', native: 'Goodbye', correct: false, feedback: "You haven't even started the trip yet." },
      ]},
      { speaker: 'npc', target: '아, 네. 어디로 가세요?', native: 'Ah, ok. Where are you going?' },
      { speaker: 'rwen', rwenLine: "천천히 + 다시 + 잘 모르겠어요 — your survival trio. Use without shame.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Please speak slowly', correct: ['천천히 말해주세요', 'cheoncheonhi malhaejuseyo'] },
      { prompt: "I don't understand", correct: ['잘 모르겠어요', 'jal moreugesseoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Lock the trio: 천천히 / 다시 / 잘 모르겠어요. These three phrases save every conversation you'll ever have in Korea.",
    rwenSignoff: "Asking for help is fluent. Use the trio without apology.",
  },

  phase8: {
    scenario: "Seoul taxi from Incheon Airport. The driver speaks fast and you need to slow him down and ask him to repeat once.",
    rwenRole: "Taxi driver — 50s, talkative, slightly fast.",
    successCriteria: "User uses 천천히 말해주세요 at least once. Adds 다시 말해주세요 if needed. Does NOT panic into English.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
