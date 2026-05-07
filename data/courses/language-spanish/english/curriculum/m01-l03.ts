import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-buenas-tardes',
  module: 1,
  lesson: 3,
  title: 'Buenas Tardes — Good Afternoon',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Lunch is over. The sun is high. Saying 'Buenos días' now would be like wishing someone good morning at 4pm — odd, off-key. From midday onward, Spanish switches to 'Buenas tardes'. Let's lock it in.",
    culturalNote: "In most of Latin America, 'Buenas tardes' kicks in right after the midday meal — usually around 1-2pm — and runs until the sun goes down. In Argentina and Uruguay, where dinner is famously late (10pm+), 'Buenas tardes' can stretch until almost 8pm.",
  },

  chunks: [
    {
      id: 'buenas_tardes',
      target: 'Buenas tardes',
      native: 'Good afternoon',
      literal: 'Good afternoons (idiomatic plural)',
      emoji: '🌤️',
      phonetic: 'BWEH-nahs TAR-dehs',
      audioRef: null,
    },
    {
      id: 'que_calor',
      target: '¡Qué calor!',
      native: 'It\'s so hot! (a classic afternoon opener in LatAm)',
      literal: 'What heat!',
      emoji: '🥵',
      phonetic: 'keh kah-LOHR',
      audioRef: null,
    },
    {
      id: 'igualmente',
      target: 'Igualmente',
      native: 'Likewise / Same to you',
      literal: 'Equally',
      emoji: '↔️',
      phonetic: 'ee-gwahl-MEN-teh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day greetings: días / tardes / noches',
    explanation: "Three windows, three greetings. Get the time wrong and people gently correct you — or just smile and switch. The rule: días (morning until ~midday), tardes (midday until sundown), noches (after dark).",
    examples: [
      { target: 'Buenos días', native: 'Good morning (sunrise – ~midday)' },
      { target: 'Buenas tardes', native: 'Good afternoon (midday – sundown)' },
      { target: 'Buenas noches', native: 'Good evening / night (after dark)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the greeting to the time of day',
      pairs: [
        { left: 'Buenos días', right: 'Morning' },
        { left: 'Buenas tardes', right: 'Afternoon' },
        { left: '¡Qué calor!', right: "It's so hot!" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "It's 3pm at a market in Lima. You see a vendor. What do you say?",
      question: 'Choose the right afternoon greeting',
      options: [
        { text: 'Buenas tardes', correct: true },
        { text: 'Buenos días', correct: false },
        { text: 'Buenas noches', correct: false },
      ],
      explanation: "After midday, switch from 'Buenos días' to 'Buenas tardes'. 'Buenas noches' is reserved for after sundown.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the afternoon greeting',
      sentence: 'Buenas _____.',
      options: ['tardes', 'días', 'mañanas'],
      correct: 'tardes',
      context: "It's 4pm. You're greeting a shopkeeper.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Good afternoon',
      correct: ['Buenas tardes', 'buenas tardes'],
    },
    {
      type: 'build_sentence',
      instruction: "Order the afternoon small talk: 'Good afternoon — it's so hot!'",
      words: ['¡Qué', 'tardes,', 'Buenas', 'calor!'],
      correct: ['Buenas', 'tardes,', '¡Qué', 'calor!'],
      translation: "Good afternoon — it's so hot!",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Likewise / Same to you',
      correct: ['Igualmente', 'igualmente'],
    },
  ],

  rwenDialogue: {
    intro: "It's 2pm at the Mercado Central in Lima. You stop at a fruit stall — papayas, mangoes, lúcumas. The vendor wipes her hands on her apron and looks up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Buenas tardes, ¡qué calor!',
        native: "Good afternoon — it's so hot!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas tardes. ¡Sí, qué calor!', native: "Good afternoon. Yes, it's so hot!", correct: true, feedback: "Perfect — you matched the greeting AND joined her commentary on the heat. That's connection." },
          { target: 'Buenos días', native: 'Good morning', correct: false, feedback: "It's 2pm — 'Buenos días' is the morning form. Switch to 'Buenas tardes'." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "You've just arrived — that's a farewell. Open with 'Buenas tardes'." },
        ],
      },
      {
        speaker: 'npc',
        target: '¿Una papaya bien madura?',
        native: 'A nice ripe papaya?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You read the time of day, mirrored her greeting, and joined her on the heat. That's how Latin American small talk opens.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Good afternoon (in Spanish)', correct: ['Buenas tardes', 'buenas tardes'] },
      { prompt: 'Likewise / Same to you', correct: ['Igualmente', 'igualmente'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'Buenas tardes' once today after midday — out loud, to a real person. Notice how it lands warmer than a silent nod.",
    rwenSignoff: "Buenas tardes. Until tomorrow.",
  },

  phase8: {
    scenario: "It's 2:15pm at the Mercado Central in Lima — humid, bustling, the smell of fresh fruit and grilled chicken. You stop at a fruit vendor's stall to buy papaya for the week. She's mid-50s, has been here for decades, and is fanning herself with a piece of cardboard.",
    rwenRole: "Doña Rosa — fruit vendor at Mercado Central, ~55, sharp and warm; she's seen every type of customer and rewards the ones who greet her properly with the best fruit and a small bonus mango.",
    successCriteria: "User opens with 'Buenas tardes' (NOT 'Buenos días' since it's 2pm, NOT bare 'Hola' which skips the wellness frame), uses the feminine 'Buenas' agreement (NOT 'Buenos tardes'), and joins her '¡Qué calor!' commentary rather than going straight transactional.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
