import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l06-aeropuerto',
  module: 9,
  lesson: 6,
  title: 'En el Aeropuerto — At the Airport',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The first words a Spanish-speaking country says to you are at the airport: 'Pasaporte, por favor'. Cancún, Mexico City, Madrid-Barajas — same airport-Spanish. Today we handle check-in, immigration and luggage in the language of the country you're entering.",
    culturalNote: "Cancún airport runs almost entirely bilingual, but immigration officers visibly warm up the moment you greet them in Spanish. Even a basic 'Buenos días' before the inevitable English 'Tourist? How long?' shifts the tone — you're a guest who tried, not a tourist who didn't.",
  },

  chunks: [
    {
      id: 'pasaporte',
      target: 'El pasaporte',
      native: 'The passport',
      literal: 'The passport',
      emoji: '🛂',
      phonetic: 'el pah-sah-POR-teh',
      audioRef: null,
    },
    {
      id: 'la_maleta',
      target: 'La maleta',
      native: 'The suitcase',
      literal: 'The suitcase',
      emoji: '🧳',
      phonetic: 'lah mah-LEH-tah',
      audioRef: null,
    },
    {
      id: 'vuelo',
      target: 'El vuelo',
      native: 'The flight',
      literal: 'The flight',
      emoji: '✈️',
      phonetic: 'el BWEH-loh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Vengo de... / Voy a... — coming from / going to',
    explanation: "Two phrases handle every immigration question: 'Vengo de [country]' (I come from...) and 'Voy a [city]' (I'm going to...). 'De' shows origin, 'a' shows destination. Vengo de Australia, voy a Ciudad de México por dos semanas — origin, destination, duration.",
    examples: [
      { target: 'Vengo de Australia', native: 'I come from Australia' },
      { target: 'Voy a Ciudad de México', native: "I'm going to Mexico City" },
      { target: '¿Dónde está mi maleta?', native: 'Where is my suitcase?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the airport word to its meaning',
      pairs: [
        { left: 'El pasaporte', right: 'The passport' },
        { left: 'La maleta', right: 'The suitcase' },
        { left: 'El vuelo', right: 'The flight' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell the immigration officer where you came from',
      sentence: 'Vengo _____ Australia.',
      options: ['de', 'a', 'en'],
      correct: 'de',
      context: 'I come from Australia.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'The flight',
      correct: ['El vuelo', 'el vuelo'],
    },
    {
      type: 'multiple_choice',
      instruction: "Immigration asks where you're going. What's a complete answer?",
      question: 'A full destination answer:',
      options: [
        { text: 'Voy a Cancún por una semana', correct: true },
        { text: 'Cancún', correct: false },
        { text: 'Sí', correct: false },
      ],
      explanation: "'Voy a [city] por [duration]' = I'm going to [city] for [duration]. One sentence, three pieces of info. Officers nod and stamp.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Where is my suitcase?'",
      words: ['¿Dónde', 'está', 'mi', 'maleta?'],
      correct: ['¿Dónde', 'está', 'mi', 'maleta?'],
      translation: 'Where is my suitcase?',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I come from Australia',
      correct: ['Vengo de Australia', 'vengo de Australia', 'vengo de australia'],
    },
  ],

  rwenDialogue: {
    intro: "You've just landed at Cancún airport. The immigration officer takes your passport.",
    lines: [
      {
        speaker: 'npc',
        target: 'Buenas tardes. ¿De dónde viene y por cuánto tiempo?',
        native: 'Good afternoon. Where do you come from, and for how long?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas tardes. Vengo de Australia y voy a Tulum por diez días.', native: 'Good afternoon. I come from Australia and I\'m going to Tulum for ten days.', correct: true, feedback: "Greeting back + origin + destination + duration. Officer stamps without follow-up. Welcome to Mexico." },
          { target: 'Australia', native: 'Australia', correct: false, feedback: "Give a full answer: 'Vengo de Australia y voy a Tulum por diez días.'" },
          { target: 'Voy a Tulum', native: "I'm going to Tulum", correct: false, feedback: "Add origin and duration: 'Vengo de Australia y voy a Tulum por diez días.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Vengo de + voy a + por [duration]. Three slots, full answer. Memorise the order — officers around the world get the same data, just in Spanish.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The passport', correct: ['El pasaporte', 'el pasaporte'] },
      { prompt: 'I come from... (start of sentence)', correct: ['Vengo de', 'vengo de'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practise the immigration answer out loud: 'Vengo de [your country] y voy a [destination] por [duration].' Say it until the slots come automatic. The first 30 seconds at any Spanish-speaking border are now solved.",
    rwenSignoff: "Pasaporte ready. Vuelo arrived. Hasta mañana.",
  },

  phase8: {
    scenario: "You've just stepped off the plane at Cancún airport, walked the long fluorescent corridor, and you're at the immigration counter. The officer takes your passport, and you have to answer in Spanish: where you came from, where you're going in Mexico, and for how long. One clean sentence and you're stamped through.",
    rwenRole: "Oficial Ramírez — Cancún immigration officer, 40s, sees a thousand tourists a day; she'll switch to English the second she senses hesitation, but warms up immediately when you handle 'vengo de' and 'voy a' cleanly in Spanish.",
    successCriteria: "User opens with 'Buenas tardes' (matching her greeting register), uses 'Vengo de [country]' for origin and 'Voy a [city]' for destination, anchors duration with 'por [number] días/semanas', and does NOT switch to English mid-sentence. Bonus if they say 'gracias' when she returns the passport.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
