import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-irumi',
  module: 1,
  lesson: 5,
  title: "Ireumi Mwoeyo? — What's Your Name?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Names in Korean carry weight — and the question 이름이 뭐예요? introduces a key grammar piece: the subject marker 이/가. Today you learn to ask AND answer.",
    culturalNote: "Korean names usually run family-name-first (Kim Min-jun, not Min-jun Kim). When introducing yourself to peers, given name is fine; in business, family name + position title is the norm.",
  },

  chunks: [
    { id: 'ireumi_mwoeyo', target: '이름이 뭐예요?', native: "What's your name?", literal: 'name-SUBJ what-is?', emoji: '🏷️', phonetic: 'i-reum-i mwo-ye-yo', audioRef: null },
    { id: 'jeoneun', target: '저는 ___이에요', native: 'I am ___', literal: 'I-TOPIC ___-am', emoji: '🙋', phonetic: 'jeo-neun ___-i-e-yo', audioRef: null },
    { id: 'seonghami', target: '성함이 어떻게 되세요?', native: 'May I ask your name? (very polite)', literal: 'name(honorific)-SUBJ how becomes?', emoji: '🙇', phonetic: 'seong-ham-i eo-tteoke doe-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'Name exchange + the subject marker 이/가',
    explanation: "이름이 — name + 이 (subject marker after a consonant). 저는 — I + 는 (topic marker). The marker on 이름 makes it the subject of 'is what'.",
    examples: [
      { target: '이름이 뭐예요?', native: "What is (your) name?" },
      { target: '저는 민준이에요', native: 'I am Min-jun' },
      { target: '성함이 어떻게 되세요?', native: 'May I ask your name? (very polite)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match the phrase to its meaning', pairs: [
      { left: '이름이 뭐예요?', right: "What's your name?" },
      { left: '저는 ___이에요', right: 'I am ___' },
      { left: '성함이 어떻게 되세요?', right: 'May I ask your name? (very polite)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "What's your name?", correct: ['이름이 뭐예요?', 'ireumi mwoeyo', 'ireumi mwoeyo?'] },
    { type: 'fill_blank', instruction: 'Introduce yourself', sentence: '저는 Sam_____.', options: ['이에요', '예요', '입니다'], correct: '이에요', context: 'Sam ends in a consonant → use 이에요.' },
    { type: 'build_sentence', instruction: 'Build "What is your name?" (very polite)', words: ['되세요?', '어떻게', '성함이'], correct: ['성함이', '어떻게', '되세요?'], translation: 'May I ask your name? (very polite)' },
    { type: 'multiple_choice', instruction: 'You are introducing yourself to a CEO. Best phrasing?', question: 'Pick the most respectful', options: [
      { text: '저는 ___입니다', correct: true },
      { text: '저는 ___이에요', correct: false },
      { text: '나는 ___야', correct: false },
    ], explanation: "입니다 is the formal copula — fits the CEO context. 야 is banmal (way too casual)." },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am Anna', correct: ['저는 Anna이에요', '저는 Anna예요', 'jeoneun Anna ieyo', 'jeoneun Anna yeyo'] },
  ],

  rwenDialogue: {
    intro: "You're at a Hongdae café. The barista smiles after taking your order.",
    lines: [
      { speaker: 'npc', target: '이름이 뭐예요?', native: "What's your name?" },
      { speaker: 'user', userChoices: [
        { target: '저는 Sam이에요', native: 'I am Sam', correct: true, feedback: "Polite, clear, mirrors her register." },
        { target: '나 Sam', native: 'Me Sam (banmal)', correct: false, feedback: "Banmal to a stranger — very rude." },
        { target: 'Sam', native: '(just the name)', correct: false, feedback: "Grammatically incomplete — Koreans expect 저는 ___이에요." },
      ]},
      { speaker: 'rwen', rwenLine: "저는 ___이에요 is your daily-life name template. Lock it in.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "What's your name? (polite daily)", correct: ['이름이 뭐예요?', 'ireumi mwoeyo', 'ireumi mwoeyo?'] },
      { prompt: 'I am Sam (polite)', correct: ['저는 Sam이에요', '저는 Sam예요', 'jeoneun Sam ieyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your introduction out loud: 저는 [your name]이에요. Pair it with the bow you learned in lesson 2.",
    rwenSignoff: "Your name in Korean — that's where identity starts.",
  },

  phase8: {
    scenario: "You're at a Seoul language exchange. A Korean introduces themselves and asks for your name.",
    rwenRole: "Korean peer — late 20s, friendly, polite register.",
    successCriteria: "User answers using 저는 ___이에요/예요 (polite). Asks back with 이름이 뭐예요? Does NOT use 나 or banmal.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
