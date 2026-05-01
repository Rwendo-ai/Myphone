import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-ordering',
  module: 7,
  lesson: 4,
  title: 'Pag-order — Ordering Food',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Now we order. The magic word is 'paki-' — stick it on the front of any verb and it becomes a polite request. Pakidalhan, pakibigay, pakihingi — the kitchen staff will love you for it.",
    culturalNote: "Filipinos rarely bark orders — even at karinderyas. The 'paki-' prefix turns a command into a please. Combined with 'po', you sound like someone who was raised right.",
  },

  chunks: [
    {
      id: 'gusto_ko_po_ng',
      target: 'Gusto ko po ng adobo',
      native: "I'd like adobo, please",
      literal: 'Want I sir/maam some adobo',
      emoji: '🍛',
      phonetic: 'gus-TO ko po nang a-DO-bo',
      audioRef: null,
    },
    {
      id: 'pakidalhan_ng',
      target: 'Pakidalhan po ng kanin',
      native: 'Please bring me some rice',
      literal: 'Please-bring sir/maam some rice',
      emoji: '🍚',
      phonetic: 'pa-ki-DAL-han po nang KA-nin',
      audioRef: null,
    },
    {
      id: 'walang_sibuyas_po',
      target: 'Walang sibuyas, po',
      native: 'No onions, please',
      literal: 'No onion sir/maam',
      emoji: '🧅',
      phonetic: 'wa-LANG si-BU-yas po',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Paki- (polite request)',
    explanation: "Attach **paki-** to a verb root and it becomes 'please [verb]'. Pakikuha = please get. Pakidalhan = please bring. Pakibigay = please give. Add 'po' for full politeness.",
    examples: [
      { target: 'Pakidalhan po ng tubig', native: 'Please bring some water' },
      { target: 'Pakikuha po ng tinidor', native: 'Please get a fork' },
      { target: 'Pakibigay po ng tissue', native: 'Please pass the tissue' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the order to its meaning',
      pairs: [
        { left: 'Gusto ko po ng adobo', right: "I'd like adobo, please" },
        { left: 'Pakidalhan po ng kanin', right: 'Please bring me some rice' },
        { left: 'Walang sibuyas, po', right: 'No onions, please' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're allergic to onions. What do you say after ordering?",
      sentence: '_____ sibuyas, po.',
      options: ['Walang', 'Gusto', 'Maraming'],
      correct: 'Walang',
      context: 'Walang = without / no. Maraming = a lot of.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'd like adobo, please",
      correct: ['Gusto ko po ng adobo', 'gusto ko po ng adobo'],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely ask for rice to be brought',
      words: ['kanin', 'po', 'ng', 'Pakidalhan'],
      correct: ['Pakidalhan', 'po', 'ng', 'kanin'],
      translation: 'Please bring me some rice',
    },
    {
      type: 'multiple_choice',
      instruction: "Server arrives. You want sinigang but hate onions. What's the smartest opener?",
      question: 'Choose the best phrase',
      options: [
        { text: 'Gusto ko po ng sinigang. Walang sibuyas, po.', correct: true },
        { text: 'Bill po', correct: false },
        { text: 'Mesa para sa dalawa, po', correct: false },
      ],
      explanation: "Order first, then add the dietary note — and 'po' both times.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'No onions, please',
      correct: ['Walang sibuyas, po', 'Walang sibuyas po', 'walang sibuyas po'],
    },
  ],

  rwenDialogue: {
    intro: "The server is at your table, pen ready. You've decided on adobo — but not the onions.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anong order po?',
        native: 'What would you like to order?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Gusto ko po ng adobo, walang sibuyas', native: 'I want adobo, no onions, please', correct: true, feedback: 'Clear, polite, specific. Chef will read this and smile.' },
          { target: 'Adobo!', native: 'Adobo!', correct: false, feedback: "Direct — but missing the politeness Filipinos expect from you." },
          { target: 'Bill po', native: 'The bill, please', correct: false, feedback: "You haven't even eaten yet!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige po, dadalhin ko agad.',
        native: "Sure — I'll bring it right away.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Two phrases, full meal handled. You ordered like a local.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'd like adobo, please (Tagalog)", correct: ['Gusto ko po ng adobo', 'gusto ko po ng adobo'] },
      { prompt: 'Please bring some rice (Tagalog)', correct: ['Pakidalhan po ng kanin', 'pakidalhan po ng kanin'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one specific dish you'd order in a Manila karinderya. Practise the full sentence: 'Gusto ko po ng [dish]'. Say it three times.",
    rwenSignoff: "Sarap! Tomorrow — what we love and don't.",
  },

  phase8: {
    scenario: "You're seated at a karinderya in Quezon City. Plastic-covered menu in hand, the server is waiting at your table. You need to order one specific dish, with one specific modification (no onions, less spicy, extra rice — your choice).",
    rwenRole: "Kuya Mark — server, ~30yo, friendly and quick; he'll repeat your order back, so you have a chance to confirm or correct. Loves when foreigners use 'po' and 'paki-'.",
    successCriteria: "User opens with 'Gusto ko po ng [dish]', adds at least one modification using 'walang' or 'paki-', and uses 'po' at least twice in the conversation.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
