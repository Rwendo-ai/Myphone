import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'En el Hotel — Checking In',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "A Bogotá hotel reception at midnight. The receptionist looks up. You can either default to English — or you can check in in Spanish and watch the room get upgraded. Three sentences cover most of it: I have a reservation, the name is X, here's my passport.",
    culturalNote: "In Colombia, reception staff are unusually formal — expect 'señor' / 'señora' even at a budget hostel. Match the register: 'usted' commands and 'gracias, señorita / caballero' close the loop. In Spain it's looser; in Mexico it's somewhere between. Default to formal until they relax — they almost always do.",
  },

  chunks: [
    {
      id: 'reservacion',
      target: 'Tengo una reservación',
      native: 'I have a reservation',
      literal: 'I-have a reservation',
      emoji: '🏨',
      phonetic: 'TEN-goh OO-nah reh-sehr-vah-SYON',
      audioRef: null,
    },
    {
      id: 'habitacion',
      target: 'La habitación',
      native: 'The room',
      literal: 'The room',
      emoji: '🛏️',
      phonetic: 'lah ah-bee-tah-SYON',
      audioRef: null,
    },
    {
      id: 'a_nombre_de',
      target: 'A nombre de...',
      native: 'Under the name of... / In the name of...',
      literal: 'To name of...',
      emoji: '📝',
      phonetic: 'ah NOM-breh deh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tengo / Necesito / Quisiera — three levels of asking',
    explanation: "Three verbs to get what you want at reception: 'Tengo' (I have — for stating a fact: I have a reservation), 'Necesito' (I need — direct: I need a room), 'Quisiera' (I would like — politest: I'd like a quiet room). Quisiera is the conditional of 'querer' and is the softest of the three — perfect for asking favours of staff.",
    examples: [
      { target: 'Tengo una reservación', native: 'I have a reservation' },
      { target: 'Necesito una habitación', native: 'I need a room' },
      { target: 'Quisiera una habitación tranquila', native: "I'd like a quiet room" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the hotel phrase to its meaning',
      pairs: [
        { left: 'Tengo una reservación', right: 'I have a reservation' },
        { left: 'La habitación', right: 'The room' },
        { left: 'A nombre de...', right: 'Under the name of...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell reception your reservation is under the name García',
      sentence: 'A _____ de García.',
      options: ['nombre', 'lado', 'cargo'],
      correct: 'nombre',
      context: 'Under the name of García.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I have a reservation',
      correct: ['Tengo una reservación', 'tengo una reservación', 'tengo una reservacion'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to politely request a quiet room. Which verb opens the request?",
      question: 'Politest verb to ask for something:',
      options: [
        { text: 'Quisiera', correct: true },
        { text: 'Tengo', correct: false },
        { text: 'Necesito', correct: false },
      ],
      explanation: "'Quisiera' (I would like) is the softest. 'Necesito' (I need) is direct. 'Tengo' (I have) just states facts. For favours, lead with quisiera and watch the receptionist help more.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I would like a room for two nights'",
      words: ['Quisiera', 'una', 'habitación', 'por', 'dos', 'noches.'],
      correct: ['Quisiera', 'una', 'habitación', 'por', 'dos', 'noches.'],
      translation: 'I would like a room for two nights',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'The room',
      correct: ['La habitación', 'la habitación', 'la habitacion'],
    },
  ],

  rwenDialogue: {
    intro: "It's 10pm and you've just walked into a small hotel in La Candelaria, Bogotá.",
    lines: [
      {
        speaker: 'npc',
        target: 'Buenas noches, ¿en qué le puedo ayudar?',
        native: 'Good evening, how can I help you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas noches. Tengo una reservación a nombre de García, por dos noches.', native: 'Good evening. I have a reservation under the name García, for two nights.', correct: true, feedback: "Greeting + reservation + name + duration. He pulls up the booking instantly. Smooth check-in." },
          { target: 'Quiero habitación', native: 'I want room', correct: false, feedback: "Use the full pattern: 'Tengo una reservación a nombre de [your name].'" },
          { target: '¿Habitación?', native: 'Room?', correct: false, feedback: "Lead with reservation: 'Tengo una reservación a nombre de [your name], por dos noches.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Por supuesto, señor. Su pasaporte, por favor.',
        native: 'Of course, sir. Your passport, please.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Reservation found, passport requested, key on its way. Three sentences and the room is yours. Notice 'señor' — Bogotá reception is formal. Match the register.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I have a reservation', correct: ['Tengo una reservación', 'tengo una reservación', 'tengo una reservacion'] },
      { prompt: 'Under the name of...', correct: ['A nombre de', 'a nombre de'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine arriving at a hotel in Bogotá. Practise the full check-in: 'Buenas noches. Tengo una reservación a nombre de [your name], por [number] noches.' Say it five times until it's reflex.",
    rwenSignoff: "Reservation in. Habitación assigned. Hasta mañana.",
  },

  phase8: {
    scenario: "It's late evening in Bogotá. You've taken a TransMilenio from the airport and walked the last block to a small hotel in La Candelaria. The receptionist greets you in formal Spanish — and you have to check in cleanly: state the reservation, give the name, hand over the passport, and stay in the formal register the whole way.",
    rwenRole: "Don Andrés — hotel receptionist in Bogotá's La Candelaria, late 30s, formal and unhurried, will absolutely lean into Spanish if you started it; addresses guests as 'señor' or 'señora' and expects the same level back.",
    successCriteria: "User opens with 'Buenas noches' (matching his greeting), uses 'Tengo una reservación a nombre de [name]', specifies duration with 'por [N] noches', stays in usted/formal register (not tú), and uses 'quisiera' rather than 'quiero' if asking a favour like a quieter room.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
