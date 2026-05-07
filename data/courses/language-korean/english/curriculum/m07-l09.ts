import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-paying',
  module: 7,
  lesson: 9,
  title: 'Paying — Who Pays in Korea',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Splitting the bill is becoming common but Korean default is 한 사람이 다 내요 — one person pays. Often the eldest, the host, or the person who invited. Saying 제가 낼게요 (I'll pay) is a gesture of warmth.",
    culturalNote: "더치페이 (Dutch pay = split) is increasingly common among 20s/30s peers. With elders/bosses/dates, expect one-pays. Offering to pay is itself the gesture — usually deflected back politely.",
  },

  chunks: [
    { id: 'jega_naelgeyo', target: '제가 낼게요', native: "I'll pay", literal: 'I-SUBJ pay-will-yo', emoji: '💳', phonetic: 'je-ga nael-ge-yo', audioRef: null },
    { id: 'dutch', target: '더치페이 할까요?', native: 'Shall we split?', literal: 'Dutch-pay shall-we?', emoji: '🤝', phonetic: 'deo-chi-pe-i hal-kka-yo', audioRef: null },
    { id: 'bill', target: '계산서 주세요', native: 'Bill please', literal: 'calculation-paper give-please', emoji: '🧾', phonetic: 'gye-san-seo ju-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'Pay-offering rituals',
    explanation: "Whoever invited often pays. Younger should attempt to pay even if older insists. The dance of 제가 낼게요 / 아니에요, 제가 낼게요 is itself the politeness.",
    examples: [
      { target: '제가 낼게요', native: "I'll pay" },
      { target: '아니에요, 제가 낼게요', native: "No, I'll pay" },
      { target: '더치페이 할까요?', native: 'Shall we split?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '제가 낼게요', right: "I'll pay" },
      { left: '더치페이', right: 'Split the bill' },
      { left: '계산서 주세요', right: 'Bill please' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "I'll pay", correct: ['제가 낼게요', 'jega naelgeyo'] },
    { type: 'fill_blank', instruction: 'Ask the server for the bill', sentence: '_____ 주세요.', options: ['계산서', '비싸', '얼마'], correct: '계산서', context: 'Bill / receipt.' },
    { type: 'build_sentence', instruction: 'Build "Shall we split?"', words: ['할까요?', '더치페이'], correct: ['더치페이', '할까요?'], translation: 'Shall we split?' },
    { type: 'multiple_choice', instruction: 'Date with someone older. They reach for the bill. Best move?', question: 'Pick the warm gesture', options: [
      { text: '제가 낼게요', correct: true },
      { text: '비싸요', correct: false },
      { text: '안녕히 가세요', correct: false },
    ], explanation: 'Even if they overrule, offering is the gesture. Deflecting reads as ungrateful.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Bill please', correct: ['계산서 주세요', 'gyesanseo juseyo'] },
  ],

  rwenDialogue: {
    intro: "Dinner with a Korean coworker who's older.",
    lines: [
      { speaker: 'npc', target: '계산서 주세요!', native: 'Bill please!' },
      { speaker: 'user', userChoices: [
        { target: '제가 낼게요', native: "I'll pay", correct: true, feedback: 'Offer first — even if she overrules.' },
        { target: '더치페이 해요', native: 'Let\'s split', correct: false, feedback: 'With elder, splitting suggestion can read as ungrateful.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong moment.' },
      ]},
      { speaker: 'npc', target: '아니에요, 오늘은 제가 낼게요. 다음에 사세요!', native: "No, I'll pay today. Next time you treat!" },
      { speaker: 'rwen', rwenLine: "The pay-dance — offer, deflection, next-time exchange. Korean dining ritual.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: "I'll pay", correct: ['제가 낼게요', 'jega naelgeyo'] },
      { prompt: 'Bill please', correct: ['계산서 주세요', 'gyesanseo juseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture a meal with an older Korean. Practice the pay-offer: 제가 낼게요. The gesture matters more than the outcome.",
    rwenSignoff: "Pay-dance = relational warmth. Offer first.",
  },

  phase8: {
    scenario: "Dinner with an older Korean coworker. Bill arrives — the politeness dance plays out.",
    rwenRole: "Coworker — 40s, polite-formal, will likely overrule offer.",
    successCriteria: "User offers 제가 낼게요 first. If overruled, offers 다음에 제가 낼게요 (next time I pay). Does NOT push 더치페이 with elder.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
