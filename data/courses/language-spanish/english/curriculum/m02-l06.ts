import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-habla-ingles',
  module: 2,
  lesson: 6,
  title: '¿Habla inglés? — Do You Speak English?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Sometimes you'll hit a wall — a medical form, a legal question, a complicated emergency. The escape hatch is asking if they speak English. Use it sparingly — but know exactly how when you need it.",
    culturalNote: "In big cities — CDMX, Bogotá, Buenos Aires — many service workers speak some English. But asking '¿habla inglés?' before even trying any Spanish reads as lazy or entitled. Lead with effort: greet, attempt, then if you're truly stuck, ask. Notice the formal 'usted' form 'habla' — it's the safer default with strangers across all of Latin America.",
  },

  chunks: [
    {
      id: 'habla_ingles',
      target: '¿Habla inglés?',
      native: 'Do you speak English? (formal)',
      literal: 'Speak-you English?',
      emoji: '🇬🇧',
      phonetic: 'AH-bla een-GLEHS',
      audioRef: null,
    },
    {
      id: 'hablo_un_poco',
      target: 'Hablo un poco de español',
      native: 'I speak a little Spanish',
      literal: 'I-speak a little of Spanish',
      emoji: '🤏',
      phonetic: 'AH-blo oon POH-koh deh es-pah-NYOL',
      audioRef: null,
    },
    {
      id: 'soy_extranjero',
      target: 'Soy extranjero / extranjera',
      native: "I'm a foreigner (m / f)",
      literal: 'I-am foreign',
      emoji: '🌍',
      phonetic: 'soy ex-tran-HEH-roh / -rah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tú vs usted — pick the safe default',
    explanation: "Spanish has two 'you' forms: 'tú' (informal, friends/peers) and 'usted' (formal, strangers/elders/service contexts). The verb endings change. With anyone you don't know personally — shop staff, hotel staff, taxi drivers, anyone older — use usted. '¿Hablas inglés?' (tú) sounds chummy with a stranger; '¿Habla inglés?' (usted) is respectful.",
    examples: [
      { target: '¿Habla inglés? (usted)', native: 'Do you speak English? (formal)' },
      { target: '¿Hablas inglés? (tú)', native: 'Do you speak English? (informal)' },
      { target: 'Hablo un poco', native: 'I speak a little' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: '¿Habla inglés?', right: 'Do you speak English? (formal)' },
        { left: 'Hablo un poco', right: 'I speak a little' },
        { left: 'Soy extranjero', right: "I'm a foreigner" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You're asking a 60-year-old hotel receptionist if she speaks English. Which is right?",
      question: 'Choose the appropriate form',
      options: [
        { text: '¿Habla inglés?', correct: true },
        { text: '¿Hablas inglés?', correct: false },
        { text: 'Hablo inglés', correct: false },
      ],
      explanation: "With a stranger working a service role, default to 'usted' — '¿Habla inglés?'. The 'tú' form '¿Hablas inglés?' is for friends and peers.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (formal)',
      prompt: 'Do you speak English?',
      correct: ['¿Habla inglés?', '¿habla inglés?', 'Habla inglés?', 'habla inglés?', '¿Habla ingles?', 'habla ingles'],
    },
    {
      type: 'fill_blank',
      instruction: 'Lower the stakes — admit your level',
      sentence: 'Hablo _____ de español.',
      options: ['un poco', 'mucho', 'nada'],
      correct: 'un poco',
      context: 'You want to flag that you can try — but slowly.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I speak a little Spanish"',
      words: ['de español', 'un poco', 'Hablo'],
      correct: ['Hablo', 'un poco', 'de español'],
      translation: 'I speak a little Spanish',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'm a foreigner (male)",
      correct: ['Soy extranjero', 'soy extranjero'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a small farmacia in Cartagena and need a specific medication. Your Spanish has a wall in front of it.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas tardes. Hablo un poco de español. ¿Habla inglés?', native: "Good afternoon. I speak a little Spanish. Do you speak English?", correct: true, feedback: "Greeting + effort + ask. That's the order. The pharmacist nods and switches halfway." },
          { target: '¿Habla inglés?', native: 'Do you speak English?', correct: false, feedback: "Too cold without a greeting and without flagging that you're trying. Lead with effort: 'Hablo un poco de español. ¿Habla inglés?'" },
          { target: '¿Hablas inglés?', native: 'Do you speak English? (informal)', correct: false, feedback: "Wrong register — 'tú' is for friends. With a pharmacist you don't know, use 'usted': '¿Habla inglés?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Un poquito. ¿En qué le puedo ayudar?',
        native: 'A little bit. How can I help you?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You earned the English by leading with Spanish. That's the move — every time.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Do you speak English? (formal)', correct: ['¿Habla inglés?', '¿habla inglés?', 'Habla inglés?', 'habla inglés', '¿Habla ingles?', 'habla ingles'] },
      { prompt: 'I speak a little Spanish', correct: ['Hablo un poco de español', 'hablo un poco de español', 'Hablo un poco de espanol'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice the chain in your head: greeting → 'Hablo un poco de español' → '¿Habla inglés?'. That's the order. The greeting earns the ask.",
    rwenSignoff: "Effort first, then the escape hatch. ¡Buen camino!",
  },

  phase8: {
    scenario: "You're at a small farmacia near the Plaza San Diego in Cartagena's old town and you need an antihistamine for a serious bee sting that's swelling fast. Your Spanish covers small talk but not the medication name. Lead with effort, then ask for English.",
    rwenRole: "Doña Patricia — ~55, pharmacist who's worked the same farmacia for 20 years, knows some English from the cruise-ship season but only switches to it for travellers who actually try in Spanish first.",
    successCriteria: "User opens with a greeting, uses 'Hablo un poco de español' to flag effort, then asks '¿Habla inglés?' (formal usted, NOT informal '¿Hablas inglés?' with a stranger her age) — chains the three in that order rather than cold-asking for English first.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
