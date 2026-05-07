import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-hasta-luego',
  module: 1,
  lesson: 9,
  title: 'Adiós / Hasta Luego — Goodbye',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Every conversation has a closing. In Spanish, the right farewell tells the other person whether you'll see them again — or whether this might be the last time. It's not just 'bye'. It's a small promise.",
    culturalNote: "'Adiós' literally invokes God ('a Dios' — to God) and feels final, weighty — Latinos use it less than 'Hasta luego' for everyday goodbyes. 'Hasta luego' (until later) is the safe, warm default. 'Chau' (from Italian 'ciao') is universal in Argentina/Uruguay and creeping into the rest of LatAm. 'Nos vemos' — we'll see each other — is what friends say.",
  },

  chunks: [
    {
      id: 'hasta_luego',
      target: 'Hasta luego',
      native: 'See you later (universal goodbye)',
      literal: 'Until later',
      emoji: '👋',
      phonetic: 'AHS-tah loo-EH-goh',
      audioRef: null,
    },
    {
      id: 'nos_vemos',
      target: 'Nos vemos',
      native: "We'll see each other / See you (friendly)",
      literal: 'We see-each-other',
      emoji: '🤝',
      phonetic: 'nohs VEH-mohs',
      audioRef: null,
    },
    {
      id: 'que_te_vaya',
      target: 'Que te vaya bien',
      native: 'May things go well for you (warm sendoff)',
      literal: 'That for-you it-goes well',
      emoji: '✨',
      phonetic: 'keh teh VAH-yah bee-EHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adiós vs Hasta luego — Final vs Soon',
    explanation: "Spanish encodes when you'll see them again. 'Adiós' carries weight — used for long goodbyes or when you might not meet again. 'Hasta luego' is the everyday default — 'until later, sometime'. 'Hasta mañana' (until tomorrow), 'Hasta pronto' (until soon), 'Nos vemos' (we'll see each other). Pick by how soon.",
    examples: [
      { target: 'Adiós', native: 'Goodbye (formal / final / weighty)' },
      { target: 'Hasta luego', native: 'See you later (everyday default)' },
      { target: 'Hasta mañana', native: 'Until tomorrow' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the farewell to its feel',
      pairs: [
        { left: 'Adiós', right: 'Goodbye (final / weighty)' },
        { left: 'Hasta luego', right: 'See you later (everyday)' },
        { left: 'Que te vaya bien', right: 'May things go well for you' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You're leaving a friend's house — you'll see them again next week. What's the right farewell?",
      question: 'Choose the natural everyday goodbye',
      options: [
        { text: 'Hasta luego', correct: true },
        { text: 'Adiós', correct: false },
        { text: 'Hola', correct: false },
      ],
      explanation: "'Hasta luego' is the everyday default — warm, soon, casual. 'Adiós' would feel oddly final for next week. 'Hola' is hello.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the warm sendoff",
      sentence: 'Que te _____ bien.',
      options: ['vaya', 'sea', 'tienes'],
      correct: 'vaya',
      context: 'A friend is leaving for a job interview. Wish them well.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'See you later (everyday)',
      correct: ['Hasta luego', 'hasta luego'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the friendly farewell',
      words: ['vemos', 'mañana', 'Nos'],
      correct: ['Nos', 'vemos', 'mañana'],
      translation: "We'll see each other tomorrow",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'May things go well for you (informal)',
      correct: ['Que te vaya bien', 'que te vaya bien'],
    },
  ],

  rwenDialogue: {
    intro: "We've spent the afternoon together at a café in Buenos Aires. The cortados are empty, the bill is paid. Time to head our separate ways.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Bueno, me tengo que ir. ¡Hasta luego!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hasta luego, ¡que te vaya bien!', native: "See you later — may things go well for you!", correct: true, feedback: "Perfect — warm, friendly, AND a small blessing on top. That's how you close a Latin American afternoon." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "Not wrong — but 'Adiós' feels final, like you might not meet again. With a friend you'll see soon, 'Hasta luego' is warmer." },
          { target: 'Hola', native: 'Hi', correct: false, feedback: "That's a greeting, not a farewell. We're leaving — try 'Hasta luego'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Igualmente. ¡Nos vemos!',
      },
      {
        speaker: 'rwen',
        rwenLine: "You closed the day with warmth and a wish. That's not just goodbye — that's a small gift.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'See you later (everyday goodbye)', correct: ['Hasta luego', 'hasta luego'] },
      { prompt: "We'll see each other / See you", correct: ['Nos vemos', 'nos vemos'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Replace one 'bye' today with 'Hasta luego' or 'Nos vemos'. Out loud, to a real person. Notice the warmth.",
    rwenSignoff: "Hasta mañana — until tomorrow.",
  },

  phase8: {
    scenario: "It's late afternoon at a café in Palermo, Buenos Aires. You and your friend Sofía have spent two hours talking over cortados. The bill is paid, the table needs to come back, and she's heading off to meet her sister. You'll see her again next week.",
    rwenRole: "Sofía — your Argentine friend, ~30, expressive and affectionate; in Buenos Aires the goodbye includes a kiss on the cheek and several layered farewell phrases — bare 'Adiós' would feel oddly cold from her.",
    successCriteria: "User uses 'Hasta luego' or 'Nos vemos' (NOT bare 'Adiós' which feels final and weighty for a casual coffee), adds a warm closer like 'Que te vaya bien' or 'Chau', and avoids responding 'Hola' as a goodbye. Bonus if they specify 'Hasta la próxima' (until next time) or 'Hasta el lunes' (until Monday).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
