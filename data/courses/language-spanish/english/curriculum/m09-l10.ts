import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-viaje-completo',
  module: 9,
  lesson: 10,
  title: 'El Viaje Completo — A Whole Journey in Spanish',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 9 finale. From the Mexico City airport gate to a Coyoacán café, end-to-end in Spanish: immigration, taxi or Metro, hotel check-in, asking the way, ordering coffee at the destination. You've collected every piece. Today we run them as one journey.",
    culturalNote: "The completed-journey-in-Spanish moment is the first time most learners realise they don't NEED English — at least not for navigation. After this, the city changes. You stop scanning for English signs. You read the map in Spanish. The country opens because you stopped looking for the back door.",
  },

  chunks: [
    {
      id: 'ya_llegue',
      target: 'Ya llegué',
      native: "I've arrived (just now)",
      literal: 'Already I-arrived',
      emoji: '🎉',
      phonetic: 'yah yeh-GEH',
      audioRef: null,
    },
    {
      id: 'el_viaje',
      target: 'El viaje',
      native: 'The journey / The trip',
      literal: 'The journey',
      emoji: '🧳',
      phonetic: 'el BYAH-heh',
      audioRef: null,
    },
    {
      id: 'que_tengas',
      target: 'Que tengas un buen viaje',
      native: 'Have a good trip',
      literal: 'That you-have a good trip',
      emoji: '👋',
      phonetic: 'keh TEN-gas oon bwen BYAH-heh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Llegar — to arrive (the journey-end verb)',
    explanation: "'Llegar' is to arrive. Llego (I arrive — habit), estoy llegando (I'm arriving — right now), llegué (I arrived — completed past), ya llegué (I've already arrived — perfect for the moment you walk through the hotel door). One verb, four tenses, four moments of the journey. Module 9 lives in this verb.",
    examples: [
      { target: 'Ya llegué', native: "I've arrived (just now)" },
      { target: 'Estoy llegando', native: "I'm arriving (right now)" },
      { target: '¿A qué hora llegamos?', native: 'What time do we arrive?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the journey phrase to its meaning',
      pairs: [
        { left: 'Ya llegué', right: "I've arrived" },
        { left: 'El viaje', right: 'The journey' },
        { left: 'Que tengas un buen viaje', right: 'Have a good trip' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You've just stepped into your hotel after a long flight. What do you say?",
      question: "I've just arrived:",
      options: [
        { text: 'Ya llegué', correct: true },
        { text: 'Voy a llegar', correct: false },
        { text: 'Llegaré', correct: false },
      ],
      explanation: "'Ya llegué' — I've already arrived (just now). 'Voy a llegar' = I'm going to arrive. 'Llegaré' = I will arrive. For the just-walked-in moment, 'Ya llegué' is the natural Spanish.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I've arrived (just now)",
      correct: ['Ya llegué', 'ya llegué', 'ya llegue', 'Ya llegue'],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask what time you arrive',
      sentence: '¿A qué hora _____?',
      options: ['llegamos', 'vamos', 'salimos'],
      correct: 'llegamos',
      context: 'What time do we arrive?',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'How do I get to the kombi station? I want to go to the centre.'",
      words: ['¿Cómo', 'llego', 'a', 'la', 'parada?', 'Quiero', 'ir', 'al', 'centro.'],
      correct: ['¿Cómo', 'llego', 'a', 'la', 'parada?', 'Quiero', 'ir', 'al', 'centro.'],
      translation: 'How do I get to the (bus) stop? I want to go to the centre.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Have a good trip',
      correct: ['Que tengas un buen viaje', 'que tengas un buen viaje'],
    },
  ],

  rwenDialogue: {
    intro: "The Module 9 capstone: airport → taxi → hotel → café — all in Spanish. Run the whole journey.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Acabas de aterrizar en Ciudad de México. Inmigración te pregunta de dónde vienes y por cuánto tiempo. ¿Qué dices?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenos días. Vengo de Australia y voy a Coyoacán por una semana.', native: "Good morning. I come from Australia and I'm going to Coyoacán for a week.", correct: true, feedback: "Greeting + origin + destination + duration. Officer stamps without follow-up. Module 9 Lesson 6 nailed." },
          { target: 'Coyoacán', native: 'Coyoacán', correct: false, feedback: "Full immigration answer: 'Vengo de Australia y voy a Coyoacán por una semana.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Estás en la fila de taxis. ¿Cómo le pides al taxista que te lleve a tu hotel en Calle Hidalgo 200?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas tardes. ¿Cuánto cuesta hasta Calle Hidalgo 200, Coyoacán? Lléveme, por favor.', native: 'Good afternoon. How much to Calle Hidalgo 200, Coyoacán? Take me, please.', correct: true, feedback: "Price first, address street-then-number, formal lléveme. Lima rules apply across LatAm — agree fare, then ride." },
          { target: 'Lléveme 200 Hidalgo', native: 'Take me 200 Hidalgo', correct: false, feedback: "Street first, number second: 'Calle Hidalgo 200'. And ask the price first: '¿Cuánto cuesta hasta Calle Hidalgo 200?'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Llegas al hotel. La recepcionista te saluda. Tienes una reservación a nombre de tu apellido.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas tardes. Tengo una reservación a nombre de [your name], por siete noches.', native: 'Good afternoon. I have a reservation under [your name], for seven nights.', correct: true, feedback: "Reservation + name + duration. Module 9 Lesson 7. Room key comes out instantly." },
          { target: 'Quiero habitación', native: 'I want room', correct: false, feedback: "Lead with reservation: 'Tengo una reservación a nombre de [your name], por siete noches.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Has aterrizado, has tomado el taxi, te has registrado, todo en español. Ya llegaste. Módulo 9 completo. México ya no es un país extranjero — es un país que entiendes.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I've arrived", correct: ['Ya llegué', 'ya llegué', 'ya llegue'] },
      { prompt: 'Have a good trip', correct: ['Que tengas un buen viaje', 'que tengas un buen viaje'] },
    ],
  },

  mission: {
    title: "Your Module 9 Mission",
    task: "Plan a real or imagined journey end-to-end in Spanish: immigration line → taxi or Metro → hotel reception → first café. Speak each step out loud, in order. Use Vengo de... → Lléveme a... → Tengo una reservación... → ¿Cómo llego a...? → Ya llegué. Run the whole journey in Spanish before you ever land.",
    rwenSignoff: "Ya llegaste. You completed Module 9. Every transit point in twenty Spanish-speaking countries now has a phrase. Module 10 — the deep end — comes next. Hasta entonces.",
  },

  phase8: {
    scenario: "Module 9 capstone: from the moment you land at Mexico City's Benito Juárez airport, you must navigate end-to-end in Spanish — clear immigration, agree a taxi fare and address, check into a hotel in Coyoacán, and ask a local how to walk to the café down the road. Multiple Spanish-speaking strangers, one continuous journey, no English fallback.",
    rwenRole: "Rwen will play four characters in sequence: Oficial Ramírez (immigration officer at Benito Juárez), Don Carlos (taxi driver to Coyoacán), Don Andrés (hotel receptionist), and Doña Carmen (local pointing you to the café). Each switches register — formal at immigration, negotiating in the taxi, polite at reception, casual on the street. The user must match each.",
    successCriteria: "User chains at least four Module 9 patterns into one continuous Spanish journey: 'Vengo de... voy a... por...' at immigration, '¿cuánto cuesta?' BEFORE 'lléveme a...' with street-then-number address, 'Tengo una reservación a nombre de...' at reception, '¿cómo llego al café?' for the final leg, and closes with 'Ya llegué' at the destination — all without dropping into English.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
