import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04',
  module: 7,
  lesson: 4,
  title: 'At the bus station',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Renkini and Egodini in Bulawayo are loud, fast, and forgiving — if you can ask one question. 'Iya ngaphi le tekisi?' tells the conductor you want to know where his vehicle is going. Five words save you an hour on the wrong route.",
    culturalNote: "Renkini terminus serves the southern routes — Gwanda, Beitbridge, West Nicholson. Egodini handles township and city kombis. Don't be afraid to ask the conductor (umqhubi) twice — they shout over engine noise and expect repetition.",
  },

  chunks: [
    {
      id: 'iya_ngaphi',
      target: 'Iya ngaphi le tekisi?',
      native: 'Where is this taxi going?',
      literal: 'it-goes where this taxi',
      emoji: '🚐',
      phonetic: 'ee-yah ngah-pee leh teh-kee-see',
      audioRef: null,
    },
    {
      id: 'malini',
      target: 'Malini?',
      native: 'How much?',
      emoji: '💵',
      phonetic: 'mah-lee-nee',
      audioRef: null,
    },
    {
      id: 'isikhathi',
      target: 'Isuka nini?',
      native: 'When does it leave?',
      literal: 'it-departs when',
      emoji: '⏰',
      phonetic: 'ee-soo-kah nee-nee',
      audioRef: null,
    },
    {
      id: 'umqhubi',
      target: 'umqhubi',
      native: 'driver / conductor',
      emoji: '👨‍✈️',
      phonetic: 'oom-choo-bee',
      audioRef: null,
    },
    {
      id: 'isitishi',
      target: 'isitishi sebhasi',
      native: 'bus station',
      literal: 'station of-bus',
      emoji: '🚏',
      phonetic: 'ee-see-tee-shee seh-bah-see',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Question words follow the verb',
    explanation: "Unlike English, isiNdebele puts question words like ngaphi (where), nini (when) and njani (how) at the END of the sentence, not the start. 'Iya ngaphi?' = 'It-goes where?' The verb tells you who's doing what; the question word at the end specifies what you don't know.",
    examples: [
      { target: 'Uya ngaphi?', native: 'You go WHERE?' },
      { target: 'Isuka nini?', native: 'It leaves WHEN?' },
      { target: 'Uhamba njani?', native: 'You travel HOW?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each station phrase to its meaning',
      pairs: [
        { left: 'Iya ngaphi le tekisi?', right: 'Where is this taxi going?' },
        { left: 'Malini?', right: 'How much?' },
        { left: 'Isuka nini?', right: 'When does it leave?' },
        { left: 'umqhubi', right: 'driver / conductor' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the question',
      sentence: 'Isuka ___ ? (when does it leave?)',
      options: ['nini', 'ngaphi', 'njani'],
      correct: 'nini',
    },
    {
      type: 'translate',
      instruction: 'Translate into isiNdebele',
      prompt: 'How much?',
      correct: ['Malini?', 'Malini', 'malini?', 'malini'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "Which station serves long-distance routes south from Bulawayo?",
      options: [
        { text: 'Renkini', correct: true },
        { text: 'Egodini', correct: false },
        { text: 'Mzilikazi market', correct: false },
      ],
      explanation: "Renkini is the long-distance terminus — Gwanda, Beitbridge, West Nicholson, Joburg. Egodini is for city and township kombis.",
    },
  ],

  rwenDialogue: {
    intro: "Renkini terminus, mid-morning. You're looking for the kombi to Gwanda.",
    lines: [
      { speaker: 'rwen', rwenLine: "Pick a kombi that looks loaded — half-full kombis don't leave. Ask the conductor first." },
      { speaker: 'user', userChoices: [
        { target: 'Sawubona, iya ngaphi le tekisi?', native: 'Hello, where is this kombi going?', correct: true, feedback: "Greeting + question — exactly how locals do it." },
        { target: 'Malini?', native: 'How much?', correct: false, feedback: "Skip ahead too fast and you'll pay before knowing the destination." },
        { target: 'Ngiya eGwanda.', native: 'I am going to Gwanda.', correct: false, feedback: "Useful, but you don't yet know if HE is going there. Ask first." },
      ]},
      { speaker: 'npc',  target: 'Iya eGwanda, mfowethu. Malini? R$50 nge-passenger.', native: 'It goes to Gwanda, brother. How much? $50 per passenger.' },
      { speaker: 'rwen', rwenLine: "He gave you the route AND the price. You're nearly home." },
      { speaker: 'user', userChoices: [
        { target: 'Isuka nini?', native: 'When does it leave?', correct: true, feedback: "The last question. Now you have route, price, and time." },
        { target: 'Hamba kuhle.', native: 'Go well.', correct: false, feedback: "You're not leaving yet — you haven't boarded." },
      ]},
      { speaker: 'npc',  target: 'Sigcwele kuthi sisuke. Mhlawumbe ihola.', native: "We leave when we're full. Maybe an hour." },
    ],
  },

  activeRecall: {
    instruction: 'Recall the station questions.',
    prompts: [
      { prompt: 'How do you ask "Where is this taxi going?"', correct: ['Iya ngaphi le tekisi?', 'Iya ngaphi le tekisi', 'iya ngaphi le tekisi?'] },
      { prompt: 'How do you ask "How much?"', correct: ['Malini?', 'malini?', 'Malini', 'malini'] },
      { prompt: 'How do you ask "When does it leave?"', correct: ['Isuka nini?', 'isuka nini?', 'Isuka nini', 'isuka nini'] },
    ],
  },

  mission: {
    title: 'Three questions, one bus',
    task: "Imagine you're at Renkini. Say all three questions out loud, in order: 'Iya ngaphi le tekisi?' — 'Malini?' — 'Isuka nini?' Twice through. The order matters: route first, price second, time third.",
    rwenSignoff: "Three questions are all you need. Memorise the order and any bus rank in Matabeleland is yours.",
  },

  phase8: {
    scenario: "You're at Renkini terminus trying to get to Gwanda. The conductor is impatient and the engine is running. Ask all three key questions and confirm you're on the right kombi.",
    rwenRole: "Renkini kombi conductor, mid-40s, gruff but fair, in a hurry",
    successCriteria: "User asked the destination, the price, and the departure question — and confirmed the answer.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
