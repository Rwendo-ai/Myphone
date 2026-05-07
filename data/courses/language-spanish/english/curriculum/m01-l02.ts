import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-buenos-dias',
  module: 1,
  lesson: 2,
  title: 'Buenos Días — Good Morning',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday: 'Hola'. Today: the morning upgrade. 'Buenos días' is what shopkeepers, neighbours, and waiters expect before noon. Skip it and you sound rushed. Use it and you sound like you belong.",
    culturalNote: "In Mexico, Colombia, and most of Latin America, 'Buenos días' is the default greeting until midday — even between strangers passing on the street. In small towns especially, NOT greeting someone you cross paths with can come across as cold or even hostile.",
  },

  chunks: [
    {
      id: 'buenos_dias',
      target: 'Buenos días',
      native: 'Good morning',
      literal: 'Good days (plural is idiomatic)',
      emoji: '🌅',
      phonetic: 'BWEH-nohs DEE-ahs',
      audioRef: null,
    },
    {
      id: 'como_amaneciste',
      target: '¿Cómo amaneciste?',
      native: 'How did you wake? (warm, common in Mexico/Colombia)',
      literal: 'How did-you-dawn?',
      emoji: '☀️',
      phonetic: 'KOH-moh ah-mah-neh-SEES-teh',
      audioRef: null,
    },
    {
      id: 'muy_bien',
      target: 'Muy bien, gracias',
      native: 'Very well, thanks',
      literal: 'Very well, thank-you',
      emoji: '😊',
      phonetic: 'mwee bee-EHN GRAH-syahs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Buenos / Buenas — agreement with the noun',
    explanation: "Spanish adjectives change ending to match the noun. 'Día' (day) is masculine — so 'buenoS días'. 'Tarde' and 'noche' are feminine — so 'buenAS tardes' / 'buenAS noches'. One letter — but get it wrong and you sound like a tourist.",
    examples: [
      { target: 'Buenos días', native: 'Good morning (masc. noun)' },
      { target: 'Buenas tardes', native: 'Good afternoon (fem. noun)' },
      { target: 'Buenas noches', native: 'Good evening / night (fem. noun)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Buenos días', right: 'Good morning' },
        { left: '¿Cómo amaneciste?', right: 'How did you wake?' },
        { left: 'Muy bien, gracias', right: 'Very well, thanks' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the morning greeting',
      sentence: '_____ días, señora.',
      options: ['Buenos', 'Buenas', 'Bueno'],
      correct: 'Buenos',
      context: "'Día' is masculine — match the ending.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Good morning',
      correct: ['Buenos días', 'buenos días', 'Buenos dias', 'buenos dias'],
    },
    {
      type: 'multiple_choice',
      instruction: "It's 9am at the bakery. The owner looks up. What do you say?",
      question: 'Choose the right morning greeting',
      options: [
        { text: 'Buenos días', correct: true },
        { text: 'Buenas noches', correct: false },
        { text: 'Adiós', correct: false },
      ],
      explanation: "'Buenos días' covers everything from sunrise until about midday. 'Buenas noches' is for evening/night; 'Adiós' is goodbye.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build the polite morning greeting',
      words: ['días,', '¿cómo', 'Buenos', 'amaneciste?'],
      correct: ['Buenos', 'días,', '¿cómo', 'amaneciste?'],
      translation: 'Good morning, how did you wake?',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Very well, thanks',
      correct: ['Muy bien, gracias', 'muy bien, gracias', 'Muy bien gracias', 'muy bien gracias'],
    },
  ],

  rwenDialogue: {
    intro: "It's 8am. You walk into a panadería in Colonia Condesa. The owner is arranging conchas behind the counter. Greet her properly.",
    lines: [
      {
        speaker: 'npc',
        target: 'Buenos días, ¿cómo amaneciste?',
        native: 'Good morning, how did you wake?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Muy bien, gracias. ¿Y usted?', native: 'Very well, thanks. And you?', correct: true, feedback: "Beautiful — you answered AND asked back. That's how Mexican mornings open." },
          { target: 'Hola', native: 'Hi', correct: false, feedback: "Not wrong — but she gave you 'Buenos días' and a wellness check. Match her warmth: 'Muy bien, gracias'." },
          { target: 'Buenas noches', native: 'Good evening', correct: false, feedback: "It's 8am — 'Buenas noches' is for night. 'Buenos días' is the morning form." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bien también. ¿Un cafecito?',
        native: 'Well too. A little coffee?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You read the morning, you matched her warmth, and you asked back. That's a real Spanish exchange.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Good morning (in Spanish)', correct: ['Buenos días', 'buenos días', 'Buenos dias', 'buenos dias'] },
      { prompt: 'Very well, thanks', correct: ['Muy bien, gracias', 'muy bien, gracias', 'Muy bien gracias', 'muy bien gracias'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Buenos días' to one person before noon today. A neighbour, a coworker, a stranger. Watch the difference between that and a silent nod.",
    rwenSignoff: "Buen día — have a good day.",
  },

  phase8: {
    scenario: "It's 7:30am in a panadería in Colonia Condesa, Mexico City. The owner — a woman who's been running this place for twenty years — looks up from arranging the morning conchas as you walk in. The whole encounter takes 90 seconds, but how you open it tells her whether you're a tourist or someone who gets it.",
    rwenRole: "Doña Carmen — panadería owner, ~58, observant and warm but old-school; she greets every customer with 'Buenos días' before they speak, and notices when one greets her back properly.",
    successCriteria: "User opens with 'Buenos días' (NOT bare 'Hola' which is too casual at 7:30am with someone older, NOT the wrong-time 'Buenas noches'), uses the masculine 'Buenos' (NOT 'Buenas días'), and replies to her wellness check with 'Muy bien, gracias' rather than just ordering. Bonus if they ask back '¿Y usted?'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
