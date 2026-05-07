import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-the',
  module: 4,
  lesson: 2,
  title: 'The — When to use it',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'The' ka matlab hai 'wo wala' — jo cheez aap dono jante hain. Hindi mein iska seedha translation nahi hai — hum context se samajh lete hain. Lekin English mein 'the' likhna padta hai.",
    culturalNote: "Hindi mein agar aap kahein 'kitaab laao', to sun-ne wala context se samajh jaata hai ki kaun si kitaab. English mein aapko bolna padega 'bring the book' — wo specific kitaab. 'A book' = koi bhi kitaab. 'The book' = wo wali kitaab jiski humne baat ki thi. IT job mein boss kahega 'send me the report' — matlab wo specific report jiski abhi baat hui — 'a report' nahi.",
  },

  chunks: [
    {
      id: 'the_report',
      target: 'The report',
      native: 'Wo report (jisko hum dono jante hain)',
      literal: 'specific/known report',
      emoji: '📊',
      phonetic: 'thuh-ri-PORT',
      audioRef: null,
    },
    {
      id: 'the_india_team',
      target: 'The India team',
      native: 'India ki team',
      literal: 'the team of India (only one)',
      emoji: '🇮🇳',
      phonetic: 'thuh-IN-dee-uh-teem',
      audioRef: null,
    },
    {
      id: 'the_morning',
      target: 'The morning',
      native: 'Subah (vo waqt)',
      literal: 'the (one and only) morning',
      emoji: '🌅',
      phonetic: 'thuh-MOR-ning',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Definite article: 'the'",
    explanation: "'The' tab use karo jab: (1) dono log jaante hain wo cheez kya hai — 'pass me the salt'; (2) wo cheez ek hi hai duniya mein — 'the sun', 'the CEO'; (3) pehle se mention ho chuki hai — 'I bought a phone. The phone is good'.",
    examples: [
      { target: 'I have a car. The car is red.',  native: 'Meri ek car hai. Wo car laal hai.' },
      { target: 'The sun is hot.',                 native: 'Sooraj garam hai. (ek hi sooraj hai)' },
      { target: 'Send me the report, please.',    native: 'Mujhe wo report bhejiye, please. (jis ki baat hui thi)' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "'a', 'an', ya 'the' chuniye",
      sentence: 'I bought _____ laptop yesterday. _____ laptop is fast.',
      options: ['a / The', 'The / A', 'An / A'],
      correct: 'a / The',
      context: 'Pehli baar mention — "a laptop". Doosri baar — "the laptop" (ab dono jante hain).',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Mujhe wo report padhni hai',
      correct: ['I want to read the report', 'I want to read the report.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vakya banaiye: "The sun is bright"',
      words: ['bright.', 'sun', 'The', 'is'],
      correct: ['The', 'sun', 'is', 'bright.'],
      translation: 'Sooraj chamak raha hai',
    },
    {
      type: 'fill_blank',
      instruction: "'the' chahiye ya nahi?",
      sentence: '_____ Prime Minister of India gave a speech.',
      options: ['The', 'A', 'An'],
      correct: 'The',
      context: 'India ka ek hi PM hai — isliye "the".',
    },
    {
      type: 'multiple_choice',
      instruction: '"The" sahi kahan use hua?',
      question: 'Sahi vakya chuniye',
      options: [
        { text: 'Pass me the salt, please.', correct: true },
        { text: 'Pass me a salt, please.', correct: false },
        { text: 'Pass me salt the, please.', correct: false },
      ],
      explanation: 'Table par sab namak jaante hain — isliye "the salt". Word order bhi dhyan rakhiye: "the" pehle aata hai.',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Chand raat ko chamakta hai',
      correct: ['The moon shines at night', 'The moon shines at night.'],
    },
  ],

  rwenDialogue: {
    intro: "Aap ek IT firm mein kaam karte hain. Manager ne kal ek specific report ke baare mein discuss kiya tha. Aaj wo us report ko maang rahe hain — dhyaan dijiye 'a report' aur 'the report' ka antar.",
    lines: [
      {
        speaker: 'npc',
        target: "Could you send me the report we discussed yesterday?",
        native: 'Kya aap wo report bhej sakte hain jiski humne kal baat ki thi?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, sir. I'll send the report right away.", native: 'Ji haan sir. Main wo report abhi bhej deta hoon.', correct: true, feedback: "Sahi — 'the report' kyunki dono jante hain kaun si." },
          { target: "Yes, sir. I'll send a report right away.", native: 'Ji haan sir. Main ek report abhi bhej deta hoon.', correct: false, feedback: "'A report' ka matlab hota hai 'koi bhi report' — manager ko specific wali chahiye. 'The report' bolo." },
          { target: "Yes, sir. I'll send report right away.", native: 'Ji haan sir. Main report abhi bhej deta hoon.', correct: false, feedback: "Article chhodna Hindi-English habit hai. Office English mein 'the report' lagana zaroori hai." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shabaash. 'The' batata hai ki dono ko pata hai kis cheez ki baat ho rahi hai — IT mein yeh bahut zaroori hai.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bina dekhe likhiye.',
    prompts: [
      { prompt: 'The report (English mein)', correct: ['The report', 'the report'] },
      { prompt: 'The morning (English mein)', correct: ['The morning', 'the morning'] },
    ],
  },

  mission: {
    title: 'Aaj ka Kaam',
    task: "Aaj shaam ek English news bulletin sun-iye ya padhiye. 5 baar 'the' giniye. Note kijiye 'a/an' kitni baar aata hai aur 'the' kitni baar — yeh sirf article-fest nahi hai!",
    rwenSignoff: "'The' un cheezon ke liye hai jo dono jaante hain. Aaj dhyaan dijiye.",
  },

  phase8: {
    scenario: "Office mein — aapka boss aapse specific documents maang raha hai. Aapko 'the' (specific cheez) aur 'a/an' (nayi cheez) ka antar samajhna hai aur sahi reply karna hai.",
    rwenRole: "Senior manager — friendly but expects clear written/spoken English. Specific files, reports, aur emails maang rahe hain.",
    successCriteria: "User uses 'the' for previously-mentioned or known items (e.g. 'the report', 'the file', 'the meeting') and 'a/an' for new items, in at least three exchanges, without dropping articles entirely.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
