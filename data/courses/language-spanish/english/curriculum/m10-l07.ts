import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-emocionado',
  module: 10,
  lesson: 7,
  title: 'Estoy emocionado/a — Excitement & Encouragement',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "There's a difference in Spanish between 'feliz' (happy) and 'emocionado/a' (excited, moved, looking forward). 'Estoy emocionado/a' is the word for the night before a trip, the morning of a wedding, the moment a job offer lands. It says: I'm not just pleased — I'm electric. And '¡Tú puedes!' is how you light that same fire in someone else.",
    culturalNote: "Latin American Spanish loves encouragement. '¡Tú puedes!' (You can do it!), '¡Échale ganas!' (Give it your all! — Mexican), '¡Ánimo!' (Take heart!) are everyday phrases shouted to children before exams, to friends before interviews, to relatives heading to the airport. Spanish doesn't whisper hope — it cheers it.",
  },

  chunks: [
    {
      id: 'estoy_emocionado',
      target: 'Estoy emocionado/a',
      native: 'I am excited / moved',
      literal: 'Estoy + emocionado (-o) / emocionada (-a)',
      emoji: '🤩',
      phonetic: 'es-TOY eh-moh-see-oh-NAH-doh/dah',
      audioRef: null,
    },
    {
      id: 'tu_puedes',
      target: '¡Tú puedes!',
      native: 'You can do it!',
      literal: 'You can! — direct second-person encouragement',
      emoji: '💪',
      phonetic: 'too PWEH-dehs',
      audioRef: null,
    },
    {
      id: 'echale_ganas',
      target: '¡Échale ganas! / ¡Ánimo!',
      native: 'Give it your all! / Take heart!',
      literal: '¡Échale ganas! (Mexico, throw it desire) / ¡Ánimo! (LatAm-wide, courage)',
      emoji: '🔥',
      phonetic: 'EH-chah-leh GAH-nahs / AH-nee-moh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Encouragement imperatives — short, loud, repeatable',
    explanation: "Encouragement in Spanish lives in short bursts. '¡Tú puedes!', '¡Ánimo!', '¡Échale ganas!', '¡Vamos!' (let's go!), '¡Adelante!' (forward!). They're shouted in stadiums, whispered to nervous children, texted before interviews. Stack two or three together — '¡Ánimo, tú puedes, échale ganas!' — and the energy multiplies.",
    examples: [
      { target: '¡Tú puedes! ¡Yo creo en ti!', native: 'You can do it! I believe in you!' },
      { target: '¡Ánimo! Todo va a salir bien.', native: 'Take heart! Everything will go well.' },
      { target: 'Estoy emocionada por mañana', native: "I'm excited for tomorrow" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the excitement/encouragement phrase to its meaning',
      pairs: [
        { left: 'Estoy emocionado/a', right: 'I am excited' },
        { left: '¡Tú puedes!', right: 'You can do it!' },
        { left: '¡Ánimo!', right: 'Take heart!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Encourage a friend before a big presentation",
      sentence: '¡_____ puedes! Yo creo en ti.',
      options: ['Tú', 'Yo', 'Él'],
      correct: 'Tú',
      context: 'You can do it! I believe in you.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (a man speaking)',
      prompt: 'I am excited',
      correct: ['Estoy emocionado', 'estoy emocionado'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your cousin is about to take her university entrance exam in Mexico City. What do you text?",
      question: 'Best Mexican-flavoured encouragement:',
      options: [
        { text: '¡Échale ganas, prima! ¡Tú puedes!', correct: true },
        { text: 'Estoy enojado', correct: false },
        { text: 'No te preocupes', correct: false },
      ],
      explanation: "'¡Échale ganas!' is signature Mexican encouragement — give it your all. Pair with '¡Tú puedes!' and the personal 'prima' (cousin) and you've sent a perfect pre-exam message.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am very excited about the trip' (a woman speaking)",
      words: ['Estoy', 'muy', 'emocionada', 'por', 'el', 'viaje.'],
      correct: ['Estoy', 'muy', 'emocionada', 'por', 'el', 'viaje.'],
      translation: 'I am very excited about the trip',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'You can do it!',
      correct: ['¡Tú puedes!', 'Tú puedes!', 'Tú puedes', 'tú puedes'],
    },
  ],

  rwenDialogue: {
    intro: "Your niece Sofía in Buenos Aires is about to walk into her university entrance exam. She texts you a panicky voice note.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tío/Tía, estoy muy nerviosa. No sé si puedo.',
        native: "Uncle/Aunt, I'm so nervous. I don't know if I can.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '¡Sofía, tú puedes! ¡Ánimo! Yo creo en ti. Estoy emocionado/a por ti.', native: "Sofía, you can do it! Take heart! I believe in you. I'm excited for you.", correct: true, feedback: "Four sentences, increasing warmth — the imperative, the cheer, the belief, the personal pride. She'll walk in lifted." },
          { target: 'Estoy preocupado/a', native: "I'm worried", correct: false, feedback: "Don't add to her nerves — give her energy: '¡Tú puedes! ¡Ánimo! Yo creo en ti.'" },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "She needs courage now — '¡Sofía, tú puedes! ¡Ánimo! Yo creo en ti.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Gracias, tío/tía. Voy a entrar.',
        native: "Thanks, uncle/aunt. I'm going in.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Spanish encouragement is loud on purpose. '¡Tú puedes!' three times beats a long English paragraph any day.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am excited (a woman)', correct: ['Estoy emocionada', 'estoy emocionada'] },
      { prompt: 'You can do it!', correct: ['¡Tú puedes!', 'Tú puedes!', 'tú puedes', 'Tú puedes'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Send one person — a friend, a relative, anyone — a short Spanish encouragement today: '¡Tú puedes! ¡Ánimo!' Watch how a four-word text in their second-favourite language hits.",
    rwenSignoff: "El ánimo se contagia. Pásalo. Hasta mañana.",
  },

  phase8: {
    scenario: "Tuesday morning, 7:50am. Your niece Sofía in Buenos Aires is sitting outside the exam hall for her university entrance test. She's just sent you a panicky voice note in Spanish. The exam starts at 8:00. You have ten minutes to send her courage in Spanish — voice or text, not English.",
    rwenRole: "Sofía — ~18, your niece, brilliant but anxious; she'll listen to a 30-second voice note three times before walking in. She doesn't need information, she needs energy in her language.",
    successCriteria: "User uses at least TWO encouragement imperatives ('¡Tú puedes!', '¡Ánimo!', '¡Échale ganas!'), names her ('Sofía') so it's personal, and adds a believing sentence ('Yo creo en ti' / 'Estoy orgulloso/a de ti'). Stacked, loud, warm — Spanish encouragement done right.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
