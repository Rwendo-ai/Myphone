import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09',
  module: 4,
  lesson: 9,
  title: 'Inviting Guests — The Heart of Hospitality',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "In Ndebele culture, an unfed guest is a stain on the household. Today you flip roles — you are the host. 'Woza udle.' 'Come and eat.' Two words that change everything.",
    culturalNote: "Ndebele hospitality (ukuphana) is a sacred obligation. A visitor who arrives at your door at any hour is offered food and drink, even if it's the last food in the house. The proverb 'isisu somhambi asingakanani' — 'a traveller's stomach is not large' — reminds the host that even a small offering matters. Refusing to feed a guest is a serious moral failure.",
  },

  chunks: [
    {
      id: 'woza',
      target: 'Woza',
      native: 'Come (informal command)',
      emoji: '👋',
      phonetic: 'WOH-zah',
      audioRef: null,
    },
    {
      id: 'udle',
      target: 'udle',
      native: 'eat (you, polite/imperative)',
      emoji: '🍽️',
      phonetic: 'oo-DLEH',
      audioRef: null,
    },
    {
      id: 'woza_udle',
      target: 'Woza udle',
      native: 'Come and eat',
      emoji: '🍲',
      phonetic: 'WOH-zah oo-DLEH',
      audioRef: null,
    },
    {
      id: 'ungene',
      target: 'Ungene',
      native: 'Come in / enter',
      emoji: '🚪',
      phonetic: 'oon-GEH-neh',
      audioRef: null,
    },
    {
      id: 'sondela',
      target: 'Sondela esitulweni',
      native: 'Come closer / pull up a chair',
      emoji: '🪑',
      phonetic: 'sohn-DEH-lah eh-see-TOOL-weh-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The host\'s welcome triad: Ungene → Sondela → Woza udle',
    explanation: "Ndebele welcoming has a three-beat rhythm. First 'Ungene' (come in) at the door. Then 'Sondela esitulweni' (pull up a chair) once they're inside. Finally 'Woza udle' (come and eat) once food appears. You can collapse it or extend it, but the three beats — door, chair, food — are the spine of hosting.",
    examples: [
      { target: 'Ungene!', native: 'Come in!' },
      { target: 'Sondela esitulweni.', native: 'Pull up a chair.' },
      { target: 'Woza udle.', native: 'Come and eat.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each host phrase to its English meaning',
      pairs: [
        { left: 'Woza udle',          right: 'Come and eat' },
        { left: 'Ungene',             right: 'Come in' },
        { left: 'Sondela esitulweni', right: 'Pull up a chair' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Cultural question',
      question: 'A neighbour drops in unannounced at 11am. You have not yet eaten and there is only enough food for one. What does Ndebele hospitality expect?',
      options: [
        { text: "Offer some of the food anyway — even a little is better than nothing.", correct: true },
        { text: "Hide the food and pretend you have nothing.", correct: false },
        { text: "Say 'sorry, no food today' and continue your morning.", correct: false },
      ],
      explanation: "Isisu somhambi asingakanani — a traveller's stomach is not large. The expectation is to share, even if the share is small. The act matters more than the portion.",
    },
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: 'Come and eat',
      correct: ['Woza udle', 'woza udle'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the host's three-beat welcome (in order)",
      words: ['Sondela esitulweni.', 'Ungene!', 'Woza udle.'],
      correct: ['Ungene!', 'Sondela esitulweni.', 'Woza udle.'],
      translation: 'Come in! Pull up a chair. Come and eat.',
    },
  ],

  rwenDialogue: {
    intro: "Late afternoon at your home. A friend, Sipho, has dropped by unexpectedly. He's standing at your door.",
    lines: [
      { speaker: 'rwen', rwenLine: "You are the host today. Three beats — door, chair, food. Use them all." },
      { speaker: 'user', userChoices: [
        { target: 'Sipho! Ungene.', native: 'Sipho! Come in.', correct: true, feedback: 'First beat — door. Welcome him in.' },
        { target: 'Yini ufuna?', native: 'What do you want?', correct: false, feedback: "Sounds suspicious — guests don't need to justify arriving." },
      ] },
      { speaker: 'npc',  target: 'Salibonani! Ngiyabonga ngokungivumela.', native: 'Hello! Thank you for letting me in.' },
      { speaker: 'user', userChoices: [
        { target: 'Sondela esitulweni. Ungalambe?', native: 'Pull up a chair. Are you hungry?', correct: true, feedback: 'Second beat plus the cue. Now he can be honest.' },
      ] },
      { speaker: 'npc',  target: 'Ngilambile kancane.', native: 'I am a little hungry.' },
      { speaker: 'user', userChoices: [
        { target: 'Woza udle. Kulesitshwala lenyama.', native: 'Come and eat. There is isitshwala and meat.', correct: true, feedback: 'Third beat — and you named the food. Generous and clear.' },
        { target: 'Hatshi, akukho ukudla.', native: 'No, there is no food.', correct: false, feedback: 'Even with very little, the cultural expectation is to share what you have.' },
      ] },
    ],
  },

  activeRecall: {
    instruction: 'Type your answer.',
    prompts: [
      { prompt: "How do you say 'Come and eat'?",                              correct: ['Woza udle', 'woza udle'] },
      { prompt: "How do you welcome a guest in at the door?",                  correct: ['Ungene', 'ungene', 'Ungene!', 'ungene!'] },
      { prompt: "How do you invite a guest to pull up a chair?",               correct: ['Sondela esitulweni', 'sondela esitulweni'] },
    ],
  },

  mission: {
    title: 'Practice the three-beat welcome',
    task: "Tomorrow, when the next person enters your home — partner, flatmate, parcel courier — silently run the three beats in your head. 'Ungene. Sondela esitulweni. Woza udle.' You don't have to say them out loud. The point is to internalise the rhythm of Ndebele hospitality.",
    rwenSignoff: "A culture's hosting style is a window into what it values. Three beats. Door, chair, food. Nothing left out.",
  },

  phase8: {
    scenario: "A friend has dropped by your home unexpectedly. You play host. Welcome them at the door, invite them to sit, ask if they are hungry, and offer food.",
    rwenRole: "Sipho — your friend who has just dropped in for an unplanned visit; he is hungry but won't say so until you ask.",
    successCriteria: "User used at least two of the three host beats ('Ungene', 'Sondela esitulweni', 'Woza udle'), asked about hunger or thirst, and offered specific food or drink.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
