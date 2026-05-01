import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-conversation',
  module: 6,
  lesson: 10,
  title: 'Money & time — full conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Time to put it all together, kaibigan. Native numbers for things, Spanish-loan for time and money, days and months as Spanish loans, two seasons. Today: a real number-heavy conversation — jeepney fare, meet-up time, palengke prices.",
    culturalNote: "Numbers thread through everyday Filipino life — `bayad po` to the jeepney driver, `anong oras na?` at the office, `magkano?` at the palengke. By the end of this lesson you can navigate a normal Manila day in Tagalog without anyone switching to English on you.",
  },

  chunks: [
    {
      id: 'bayad_po',
      target: 'Bayad po',
      native: 'Here\'s my fare (polite)',
      literal: 'payment (polite)',
      emoji: '🚌',
      phonetic: 'BA-yad po',
      audioRef: null,
    },
    {
      id: 'sukli',
      target: 'Sukli po',
      native: 'My change, please',
      literal: 'change (polite)',
      emoji: '🪙',
      phonetic: 'SOOK-lee po',
      audioRef: null,
    },
    {
      id: 'magkita_tayo',
      target: 'Magkita tayo',
      native: "Let's meet up",
      literal: 'meet we (incl.)',
      emoji: '🤝',
      phonetic: 'mag-KEE-ta TA-yo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Number-heavy daily talk',
    explanation: 'Combine everything: `Bayad po, dyes pesos` (here\'s my 10-peso fare), `Sukli po` (my change please), `Magkita tayo alas singko ng hapon, sa Sabado` (let\'s meet at 5 PM on Saturday). Native numbers stay for things, Spanish-loan for time and money, day names Spanish-loan.',
    examples: [
      { target: 'Bayad po, dyes pesos', native: "Here's my 10-peso fare" },
      { target: 'Magkita tayo alas dos', native: "Let's meet at 2 o'clock" },
      { target: 'Sa Sabado, alas singko ng hapon', native: 'On Saturday at 5 PM' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Bayad po', right: "Here's my fare (polite)" },
        { left: 'Sukli po', right: 'My change, please' },
        { left: 'Magkita tayo', right: "Let's meet up" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Boarding the jeepney, handing over your fare.",
      sentence: '_____ po, dyes pesos.',
      options: ['Bayad', 'Sukli', 'Tawad'],
      correct: 'Bayad',
      context: '`Bayad po` is the universal jeepney/tricycle phrase — you say it as you hand over money.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "Let's meet at 5 PM on Saturday",
      correct: [
        'Magkita tayo alas singko ng hapon, sa Sabado',
        'magkita tayo alas singko ng hapon, sa Sabado',
        'Magkita tayo sa Sabado, alas singko ng hapon',
        'Magkita tayo sa Sabado alas singko ng hapon',
      ],
    },
    {
      type: 'build_sentence',
      instruction: "Drag: 'My change, please'",
      words: ['po', 'Sukli'],
      correct: ['Sukli', 'po'],
      translation: 'My change, please.',
    },
    {
      type: 'multiple_choice',
      instruction: "Which sentence MIXES the number systems wrongly?",
      question: 'Pick the wrong one.',
      options: [
        { text: 'Tatlong mangga, alas tres ng hapon. (3 mangoes, 3 PM)', correct: false },
        { text: 'Singkwenta pesos lahat-lahat. (50 pesos in total)', correct: false },
        { text: 'Lima ng hapon. (5 PM using native number)', correct: true },
      ],
      explanation: 'Time is ALWAYS Spanish-loan — `alas singko ng hapon`, never `lima ng hapon`. The first two are perfectly Filipino.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "Here's my fare (polite, on a jeepney)",
      correct: ['Bayad po', 'bayad po'],
    },
  ],

  rwenDialogue: {
    intro: "It's a Saturday morning. You ride a jeepney to Quiapo, buy mangoes at the palengke, then text your friend to meet up at 5 PM.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bayad! (jeepney driver)',
        native: 'Fares!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bayad po, dyes pesos. Sukli po singko.', native: "Here's my 10-peso fare. 5-peso change, please.", correct: true, feedback: 'Polite + Spanish-loan numbers for money. Real Manila commuter Tagalog.' },
          { target: 'Bayad po, sampung pesos', native: '10 (native) pesos', correct: false, feedback: "Money uses Spanish-loan — `dyes pesos`, never `sampung pesos`." },
          { target: 'Salamat po', native: 'Thank you', correct: false, feedback: "Polite, but the driver needs your fare first." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige po. (later, at palengke) Magkano? (your friend, texting)',
        native: 'Okay. (later) (your friend texting): How much?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Magkita tayo alas singko ng hapon, sa SM!', native: "Let's meet at 5 PM at SM!", correct: true, feedback: 'Spanish-loan time + day-of-week meet-up. Full A2 fluency.' },
          { target: 'Magkita tayo lima ng hapon', native: "Let's meet at 5 (native)", correct: false, feedback: 'Time is always Spanish-loan — `alas singko`.' },
          { target: 'Sandaan pesos', native: '100 pesos', correct: false, feedback: "That's a price, not a meet-up time." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Bayad, sukli, magkita tayo. Numbers, time, money — you walked through a whole Manila Saturday in Tagalog.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Here's my fare (polite, on a jeepney)", correct: ['Bayad po', 'bayad po'] },
      { prompt: "Let's meet up (in Tagalog)", correct: ['Magkita tayo', 'magkita tayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'String together one full Tagalog sentence today that uses BOTH a Spanish-loan time and a Spanish-loan price. E.g., `Alas tres ng hapon, singkwenta pesos.`',
    rwenSignoff: "Tapos na ang Module 6. Galing ka talaga — see you in Module 7, kaibigan.",
  },

  phase8: {
    scenario: "It's Saturday morning. You ride a jeepney to Quiapo (`bayad po`, get `sukli`), buy mangoes at the palengke (`magkano? pwede pong tawad?`), then text Maricel to meet at SM at 5 PM (`magkita tayo alas singko ng hapon`). One conversation, all of Module 6.",
    rwenRole: "Three quick characters in sequence: jeepney driver (gruff, just wants the bayad), Aling Beth the tindera (haggling at the palengke), Maricel (texting back about meet-up time and place). Rwen narrates transitions.",
    successCriteria: "User correctly: (1) hands over jeepney fare with `bayad po` + Spanish-loan price, (2) asks `magkano?` and uses `tawad` or `lahat-lahat`, (3) proposes a meet-up using `magkita tayo` + Spanish-loan time + day name. All three sub-scenes hit.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
