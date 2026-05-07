import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-feliz',
  module: 10,
  lesson: 1,
  title: 'Estoy feliz — Joy in Spanish',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Module 10. The heart module. Spanish has lush emotional vocabulary — and a quiet rule that runs through it: emotions use 'estar', not 'ser'. You're not happy as an identity; you're happy in this moment. 'Estoy feliz' — and tomorrow you might be something else. That's the freedom emotions get in Spanish.",
    culturalNote: "Latin American Spanish leans expressive. Joy is shown loudly — '¡Qué alegría!' (what joy!), '¡Felicidades!' (congratulations!), and bodies say it too: a hug, a hand on the shoulder, a kiss on the cheek. Saying 'Estoy feliz' with a flat face confuses people. Spanish joy wants the whole face in.",
  },

  chunks: [
    {
      id: 'estoy_feliz',
      target: 'Estoy feliz',
      native: 'I am happy',
      literal: 'Estoy (I am — temporary state) + feliz (happy)',
      emoji: '😄',
      phonetic: 'es-TOY feh-LEES',
      audioRef: null,
    },
    {
      id: 'que_alegria',
      target: '¡Qué alegría!',
      native: 'What joy! / How wonderful!',
      literal: 'What joy! — pure exclamation of delight',
      emoji: '✨',
      phonetic: 'keh ah-leh-GREE-ah',
      audioRef: null,
    },
    {
      id: 'felicidades',
      target: '¡Felicidades!',
      native: 'Congratulations!',
      literal: 'Felicidades — said for births, weddings, graduations, good news',
      emoji: '🎉',
      phonetic: 'feh-lee-see-DAH-dehs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Estar for emotional states (not ser)',
    explanation: "Emotions in Spanish use 'estar' — the verb of temporary states — never 'ser'. 'Estoy feliz' (I'm happy right now). 'Soy feliz' exists but means 'I am a happy person by nature' — a much bigger claim. Day to day, every emotion takes estoy/estás/está.",
    examples: [
      { target: 'Estoy feliz', native: 'I am happy (right now)' },
      { target: 'Estás contento', native: 'You are content / pleased' },
      { target: 'Está alegre', native: 'He/she is cheerful' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the joy phrase to its meaning',
      pairs: [
        { left: 'Estoy feliz', right: 'I am happy' },
        { left: '¡Qué alegría!', right: 'What joy!' },
        { left: '¡Felicidades!', right: 'Congratulations!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Use the right verb for an emotional state',
      sentence: '_____ feliz hoy.',
      options: ['Estoy', 'Soy', 'Tengo'],
      correct: 'Estoy',
      context: 'I am happy today (right now — temporary state).',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I am happy',
      correct: ['Estoy feliz', 'estoy feliz'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your friend just got engaged in Buenos Aires. What do you say?',
      question: 'Best response to engagement news:',
      options: [
        { text: '¡Felicidades! ¡Qué alegría!', correct: true },
        { text: 'Adiós', correct: false },
        { text: 'No sé', correct: false },
      ],
      explanation: "'¡Felicidades! ¡Qué alegría!' chains the formal congratulations with a warm exclamation — exactly the energy a Spanish-speaking friend wants to hear.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am very happy to see you'",
      words: ['Estoy', 'muy', 'feliz', 'de', 'verte.'],
      correct: ['Estoy', 'muy', 'feliz', 'de', 'verte.'],
      translation: 'I am very happy to see you',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'What joy! / How wonderful!',
      correct: ['¡Qué alegría!', 'Qué alegría!', '¡Qué alegría', 'qué alegría'],
    },
  ],

  rwenDialogue: {
    intro: "You bump into your friend Lucía at a café in Mexico City — she just landed her first teaching job. Match her energy in Spanish.",
    lines: [
      {
        speaker: 'npc',
        target: '¡Conseguí el trabajo! Empiezo el lunes.',
        native: 'I got the job! I start Monday.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '¡Felicidades, Lucía! ¡Qué alegría! Estoy muy feliz por ti.', native: "Congratulations, Lucía! What joy! I'm so happy for you.", correct: true, feedback: "Three layers — the formal congrats, the exclamation, then 'estoy feliz por ti' to make it personal. That's how Spanish friendship celebrates." },
          { target: 'Estoy feliz', native: 'I am happy', correct: false, feedback: "Centre HER joy — '¡Felicidades! ¡Qué alegría! Estoy feliz por ti.' The 'por ti' (for you) is what makes it about her." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "She just shared great news — celebrate it: '¡Felicidades, Lucía! ¡Qué alegría!'" },
        ],
      },
      {
        speaker: 'npc',
        target: '¡Gracias! Tenía tantas ganas.',
        native: 'Thank you! I wanted it so badly.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Spanish joy is shared joy. '¡Felicidades!' wraps your friend in it. Module 10 begins where the heart lives.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am happy', correct: ['Estoy feliz', 'estoy feliz'] },
      { prompt: 'Congratulations!', correct: ['¡Felicidades!', 'Felicidades!', 'felicidades', 'Felicidades'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell one person today — out loud, in Spanish — 'Estoy feliz porque...' (I am happy because...). Finish the sentence. Let Spanish hold a real piece of your day.",
    rwenSignoff: "La alegría compartida se multiplica. Hasta mañana.",
  },

  phase8: {
    scenario: "Saturday afternoon at a small bakery in Polanco, Mexico City. Your friend Lucía rushes in — she just got the teaching job she's been chasing for a year. She's grinning, half out of breath, waiting for you to react in Spanish, not English.",
    rwenRole: "Lucía — your close friend, ~28, expressive, has been quietly stressed for months and finally gets to celebrate; she'll feel the difference between a flat 'qué bien' and a real Spanish celebration.",
    successCriteria: "User opens with '¡Felicidades!', layers '¡Qué alegría!' or 'Estoy muy feliz por ti' (note: por TI, not for me), and uses 'estar' (estoy/estás) NOT 'ser' for the emotional state. Bonus if they ask a follow-up like '¿Cuándo empiezas?' so it sounds like a real friend, not a script.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
