import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-agua-bebidas',
  module: 7,
  lesson: 2,
  title: 'Agua y Bebidas — Water & Drinks',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Spain or Latin America, ordering water is a small test. 'Una botella de agua' gets you a plastic bottle with a bill. '¿Me trae agua del grifo?' (tap water) is free in Spain — but doesn't really exist as a concept in much of Mexico. Knowing what to ask for matters.",
    culturalNote: "Tap water (agua del grifo / agua de la llave) is normal to drink in Spain and most of Argentina, Chile, Uruguay. In Mexico, Peru, Central America — bottled or filtered is the safer default. Asking '¿el agua del grifo se puede tomar?' (is the tap water drinkable?) is normal and expected.",
  },

  chunks: [
    {
      id: 'agua',
      target: 'el agua',
      native: 'water (technically feminine — el agua, but la agua fría)',
      literal: 'el agua — water (feminine but takes el)',
      emoji: '💧',
      phonetic: 'el AH-gwah',
      audioRef: null,
    },
    {
      id: 'cafe',
      target: 'el café',
      native: 'coffee',
      literal: 'el café — coffee',
      emoji: '☕',
      phonetic: 'el kah-FEH',
      audioRef: null,
    },
    {
      id: 'tengo_sed',
      target: 'Tengo sed',
      native: "I'm thirsty",
      literal: 'I-have thirst',
      emoji: '😮‍💨',
      phonetic: 'TEN-goh SED',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'El agua — feminine noun, masculine article',
    explanation: "Agua is feminine, but Spanish uses 'el' before any singular feminine noun starting with stressed a- to avoid 'la a-' tongue-tangles. So: el agua, but the adjective stays feminine — 'el agua fría' (cold water), not 'el agua frío'. Same for 'el águila' (eagle), 'el hambre'.",
    examples: [
      { target: 'el agua fría', native: 'cold water (feminine adjective)' },
      { target: 'las aguas', native: 'the waters (plural reverts to las)' },
      { target: 'Tengo sed, quiero agua', native: "I'm thirsty, I want water" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the drink word to its meaning',
      pairs: [
        { left: 'el agua', right: 'water' },
        { left: 'el café', right: 'coffee' },
        { left: 'Tengo sed', right: "I'm thirsty" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Order cold water',
      sentence: 'Quiero el agua _____, por favor.',
      options: ['fría', 'frío', 'frias'],
      correct: 'fría',
      context: 'I want the cold water, please. (agua is feminine — adjective stays feminine)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'm thirsty",
      correct: ['Tengo sed', 'tengo sed'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're in Madrid and want free tap water at a restaurant. What do you ask for?",
      question: 'Free tap water in Spain:',
      options: [
        { text: 'Agua del grifo, por favor', correct: true },
        { text: 'Agua de botella, por favor', correct: false },
        { text: 'Agua mineral, por favor', correct: false },
      ],
      explanation: "Agua del grifo = tap water; free in Spain and totally normal to ask for. Agua de botella / mineral = bottled, you'll be charged 2-3 €. In Mexico, however, tap water isn't generally drunk — bottled is standard.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I'm thirsty, I want a coffee'",
      words: ['Tengo', 'sed,', 'quiero', 'un', 'café.'],
      correct: ['Tengo', 'sed,', 'quiero', 'un', 'café.'],
      translation: "I'm thirsty, I want a coffee",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'water (with article)',
      correct: ['el agua', 'agua', 'el Agua'],
    },
  ],

  rwenDialogue: {
    intro: "You're in a sunny Madrid plaza on a 35-degree afternoon. The waiter pulls up to your table.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Qué le pongo?',
        native: 'What can I bring you? (lit. what shall I put for you)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tengo mucha sed. Un agua del grifo bien fría, por favor.', native: "I'm very thirsty. A glass of tap water, very cold, please.", correct: true, feedback: "Asked for tap water specifically — Spanish-style and free. The waiter nods and is back in 30 seconds." },
          { target: 'Soy sed', native: 'I am thirst', correct: false, feedback: "Same trap as hambre — use tener: 'Tengo sed, quiero agua del grifo.'" },
          { target: 'Quiero la agua fría', native: 'I want the (la) cold water', correct: false, feedback: "Agua takes 'el' even though it's feminine: 'el agua fría'. Try 'Quiero el agua fría, por favor.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Marchando un agua bien fresquita.',
        native: "Coming right up — one ice-cold water on the way.",
      },
      {
        speaker: 'rwen',
        rwenLine: "El agua. Two words, one tongue-twister of grammar — but you've ordered like a Madrileño.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'water (with article)', correct: ['el agua', 'agua'] },
      { prompt: "I'm thirsty", correct: ['Tengo sed', 'tengo sed'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you drink water, say 'Tengo sed — quiero agua' before the first sip. Practise the el-agua-fría sequence in your head until the article-mismatch stops feeling weird.",
    rwenSignoff: "Hasta mañana — el agua siempre primero.",
  },

  phase8: {
    scenario: "You've been walking around Madrid's Retiro park in the August heat. You stumble into a café terraza near Puerta de Alcalá and collapse into a chair. The waiter swings by with an empty tray, ready to take your order. You need water — fast — and you'd prefer not to pay 4 € for a bottle.",
    rwenRole: "Javier — café waiter, mid 30s, polite and efficient Madrileño; will quietly judge anyone who orders 'agua' without specifying grifo or botella, but warms up to clear orders.",
    successCriteria: "User uses 'Tengo sed' (NOT 'estoy sed' / 'soy sed'), specifies 'agua del grifo' to get free tap water (or knowingly orders 'una botella' if they want bottled), pairs the feminine adjective correctly ('agua fría' not 'agua frío'), and uses 'por favor' to close.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
