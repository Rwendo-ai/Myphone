import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-ir',
  module: 8,
  lesson: 1,
  title: 'Ir — To Go',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Spanish has three verb families — -ar, -er, -ir — and each one conjugates a little differently. Ir (to go) is irregular and the most-used verb in any Spanish day. Yo voy, tú vas, él va — and notice you can drop 'yo' entirely. The ending tells you who.",
    culturalNote: "In Mexico City and Madrid alike, 'voy' alone is a complete sentence. Spanish doesn't need subject pronouns the way English does — the verb ending carries the person. Saying 'yo voy' constantly sounds either emphatic ('I'm the one going') or like a textbook. Drop the pronoun unless you need to contrast.",
  },

  chunks: [
    {
      id: 'voy',
      target: 'Voy',
      native: 'I go / I am going',
      literal: '(yo) voy — irregular ir, 1st person',
      emoji: '🚶',
      phonetic: 'BOY',
      audioRef: null,
    },
    {
      id: 'vas',
      target: 'Vas',
      native: 'You go (informal)',
      literal: '(tú) vas — 2nd person',
      emoji: '👉',
      phonetic: 'BAHS',
      audioRef: null,
    },
    {
      id: 'voy_a',
      target: 'Voy a trabajar',
      native: "I'm going to work / I'm about to work",
      literal: 'I-go to work-INF — near-future structure',
      emoji: '➡️',
      phonetic: 'BOY ah trah-bah-HAR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ir + a + infinitive — the near-future shortcut',
    explanation: "Spanish has a simple future ('iré') but in everyday speech almost everyone uses 'ir + a + infinitive' for plans — exactly like English 'I'm going to...'. Voy a comer (I'm going to eat). Vas a venir (You're going to come). It's the most natural way to talk about what's next.",
    examples: [
      { target: 'Voy al trabajo', native: 'I go to work / I am going to work' },
      { target: 'Voy a comer', native: "I'm going to eat" },
      { target: '¿Vas a la fiesta?', native: 'Are you going to the party?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form of ir to the subject',
      pairs: [
        { left: 'Voy', right: 'I go' },
        { left: 'Vas', right: 'You go (informal)' },
        { left: 'Va', right: 'He/She goes / You go (formal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the near-future sentence',
      sentence: 'Voy _____ trabajar mañana.',
      options: ['a', 'de', 'en'],
      correct: 'a',
      context: "I'm going to work tomorrow.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'm going to the office",
      correct: ['Voy a la oficina', 'voy a la oficina'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A coworker in Mexico City asks where you are heading. The most natural reply is:',
      question: 'Going to a meeting:',
      options: [
        { text: 'Voy a una reunión', correct: true },
        { text: 'Yo voy yo a una reunión', correct: false },
        { text: 'Iré a una reunión', correct: false },
      ],
      explanation: "'Voy a una reunión' is what people actually say. Doubling 'yo' is wrong; 'iré' (simple future) sounds bookish for next-hour plans.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I'm going to eat with friends'",
      words: ['Voy', 'a', 'comer', 'con', 'amigos.'],
      correct: ['Voy', 'a', 'comer', 'con', 'amigos.'],
      translation: "I'm going to eat with friends",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (informal you)',
      prompt: 'Are you going to the party?',
      correct: ['¿Vas a la fiesta?', 'Vas a la fiesta?', 'vas a la fiesta?'],
    },
  ],

  rwenDialogue: {
    intro: "Tuesday morning at a coworking space in Roma Norte, Mexico City. Your colleague Lucía catches you in the kitchen with a coffee.",
    lines: [
      {
        speaker: 'npc',
        target: '¿A dónde vas ahora?',
        native: 'Where are you going now?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Voy a una reunión a las diez.', native: "I'm going to a meeting at ten.", correct: true, feedback: "Pronoun dropped, 'a' connector in place — that's how Lucía would say it back." },
          { target: 'Yo voy yo reunión.', native: 'I I go I meeting.', correct: false, feedback: "Spanish drops 'yo' once the verb ending shows the person. Try: 'Voy a una reunión a las diez.'" },
          { target: 'Voy reunión.', native: 'I-go meeting.', correct: false, feedback: "You need the connector 'a' — 'Voy a una reunión.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Vale, yo voy a la mía después. ¡Suerte!',
        native: "Cool, I'm going to mine after. Good luck!",
      },
      {
        speaker: 'rwen',
        rwenLine: "Voy. Three letters, the whole verb. That's Spanish — efficient, person baked into the ending.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I go / I am going', correct: ['Voy', 'voy'] },
      { prompt: "I'm going to work (near future)", correct: ['Voy a trabajar', 'voy a trabajar'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three times today, narrate your next move in Spanish: 'Voy a [verb in infinitive].' Voy a comer. Voy a salir. Voy a dormir. Notice how the pronoun isn't there — and you don't miss it.",
    rwenSignoff: "Voy. The Spanish day starts with going. ¡Buen camino!",
  },

  phase8: {
    scenario: "Wednesday 9:15am at a coworking space in Roma Norte, Mexico City. You're refilling your café americano at the kitchen when Lucía — the project manager you share a desk pod with — asks where you're heading and what your morning looks like. She wants the next two or three things on your agenda, in Spanish.",
    rwenRole: "Lucía — Mexico City project manager, mid-30s, friendly peer. Uses tú with you. Switches between Spanish and English casually but keeps you on Spanish when she sees you trying.",
    successCriteria: "User uses 'voy a + infinitive' for at least two upcoming activities (e.g. 'Voy a una reunión... después voy a comer'), drops the redundant 'yo' pronoun, and uses 'vas' correctly when asking Lucía back what she's doing. No English crutches for the verbs.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
