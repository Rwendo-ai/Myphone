import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02',
  module: 4,
  lesson: 2,
  title: 'Water and Drinks',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Amanzi. Itiye. Ikhofi. Umqombothi. Four drinks — water, tea, coffee, and a millennia-old sorghum beer. The first three you already know. The fourth has a click in it.",
    culturalNote: "Tea (itiye) is the everyday social drink in Matabeleland — milky, very sweet, served at any hour a guest arrives. Umqombothi is a different category entirely: it is brewed for ancestral ceremonies (amadlozi), funerals, and weddings. Pouring some on the ground for the ancestors before drinking is normal.",
  },

  chunks: [
    {
      id: 'amanzi',
      target: 'amanzi',
      native: 'water',
      emoji: '💧',
      phonetic: 'ah-MAHN-zee',
      audioRef: null,
    },
    {
      id: 'itiye',
      target: 'itiye',
      native: 'tea',
      emoji: '🍵',
      phonetic: 'ee-TEE-yeh',
      audioRef: null,
    },
    {
      id: 'ikhofi',
      target: 'ikhofi',
      native: 'coffee',
      emoji: '☕',
      phonetic: 'ee-KHOH-fee',
      audioRef: null,
    },
    {
      id: 'umqombothi',
      target: 'umqombothi',
      native: 'sorghum beer (traditional, ceremonial)',
      emoji: '🍺',
      phonetic: 'oom-[q]ohm-BOH-tee',
      audioRef: null,
    },
    {
      id: 'ngicela',
      target: 'Ngicela amanzi',
      native: 'I would like water (please)',
      literal: 'I-request water',
      emoji: '🙏',
      phonetic: 'ngee-CHEH-lah ah-MAHN-zee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Noun classes you can hear: am-, i-, um-',
    explanation: "isiNdebele nouns come in classes, and the class is usually visible in the prefix. 'Amanzi' starts with am- (a class for liquids and abstract things). 'Itiye' and 'ikhofi' start with i- (a borrowed-word class). 'Umqombothi' starts with um- (a class with many older indigenous nouns). You don't need to memorise classes today — just notice the prefix.",
    examples: [
      { target: 'amanzi', native: 'water (am- class)' },
      { target: 'itiye', native: 'tea (i- class, borrowed)' },
      { target: 'umqombothi', native: 'sorghum beer (um- class)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the drinks',
      pairs: [
        { left: 'amanzi',     right: 'water' },
        { left: 'itiye',      right: 'tea' },
        { left: 'ikhofi',     right: 'coffee' },
        { left: 'umqombothi', right: 'sorghum beer' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Politely ask for water',
      sentence: 'Ngicela ____.',
      options: ['amanzi', 'itiye', 'umqombothi'],
      correct: 'amanzi',
      context: "'Ngicela' means 'I request' — a polite way to ask for something.",
    },
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: 'Tea',
      correct: ['itiye'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Choose the best answer',
      question: "Which click does 'umqombothi' contain?",
      options: [
        { text: 'q (palatal click — sharp pop)', correct: true },
        { text: 'c (dental click — tsk-tsk)', correct: false },
        { text: 'x (lateral click — horse clop)', correct: false },
      ],
      explanation: "The 'q' in 'umqombothi' is the palatal click you learned in Module 1 — a sharp pop, like a cork. The drink itself is brewed from sorghum and used at ceremonies for the ancestors.",
    },
  ],

  rwenDialogue: {
    intro: "Late afternoon at a homestead outside Plumtree. Auntie Sibongile asks what you would like to drink.",
    lines: [
      { speaker: 'npc',  target: 'Uyaphuza? Itiye? Ikhofi?', native: 'Will you drink? Tea? Coffee?' },
      { speaker: 'user', userChoices: [
        { target: 'Ngicela itiye.', native: 'I would like tea.', correct: true, feedback: 'Perfect — polite and clear.' },
        { target: 'Itiye.', native: 'Tea.', correct: false, feedback: "Understandable, but 'Ngicela itiye' adds the politeness she expects." },
      ] },
      { speaker: 'npc',  target: 'Ulambile? Loku iqhwa lika-Gogo umqombothi.', native: 'Are you hungry? And there is also Grandma\'s umqombothi.' },
      { speaker: 'rwen', rwenLine: "Pause — umqombothi from a grandmother is a small ceremony. Accepting is meaningful. If you don't drink, decline gently." },
      { speaker: 'user', userChoices: [
        { target: 'Ngiyabonga, ngicela amanzi.', native: 'Thank you, may I have water.', correct: true, feedback: 'Graceful — declining without rejecting the gesture.' },
        { target: 'Hatshi, hatshi!', native: 'No, no!', correct: false, feedback: "Too sharp for a grandmother's offering. Soften with 'ngiyabonga' (thank you) first." },
      ] },
    ],
  },

  activeRecall: {
    instruction: 'Type your answer.',
    prompts: [
      { prompt: "How do you say 'water' in isiNdebele?", correct: ['amanzi'] },
      { prompt: "How do you politely ask for tea?",      correct: ['Ngicela itiye', 'ngicela itiye'] },
      { prompt: "What is umqombothi?",                   correct: ['sorghum beer', 'beer', 'traditional beer', 'sorghum beer (traditional, ceremonial)'] },
    ],
  },

  mission: {
    title: 'Order your next drink in isiNdebele (in your head)',
    task: "Next time you reach for a drink at home, say the isiNdebele word for it before you take a sip — itiye, ikhofi, or amanzi. If it's none of those, just say 'amanzi' and drink some water afterwards.",
    rwenSignoff: "Vocabulary tied to action becomes habit. Habit becomes memory.",
  },

  phase8: {
    scenario: "You are visiting an elder's homestead. She offers you a choice between tea, coffee, water, and (later) umqombothi. Decline one drink politely and accept another.",
    rwenRole: "MaKhumalo — a Ndebele grandmother who has just brewed umqombothi for an upcoming ceremony.",
    successCriteria: "User used 'Ngicela' to request a drink, named at least two drinks correctly, and declined one offer politely with 'ngiyabonga'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
