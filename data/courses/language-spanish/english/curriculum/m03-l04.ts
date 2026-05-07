import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-vivo-en',
  module: 3,
  lesson: 4,
  title: 'Vivo En — Where I Live',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Watch this trap: 'I am from Mexico' uses ser ('Soy de México') — origin is permanent. 'I am in Mexico' uses estar ('Estoy en México') — location is temporary, even if you've lived there 40 years. And 'I LIVE in Mexico' uses neither — it has its own verb: vivir. 'Vivo en México.' Three different ideas, three different verbs.",
    culturalNote: "When Latin Americans ask '¿de dónde eres?' they're often asking where you're really from — your origins, even if you live elsewhere. Latinos in the diaspora typically answer with two layers: 'Soy de Colombia, pero vivo en Miami.' Both halves matter — origin and current life.",
  },

  chunks: [
    {
      id: 'vivo_en',
      target: 'Vivo en...',
      native: 'I live in...',
      literal: 'I-live in...',
      emoji: '🏠',
      phonetic: 'BEE-bo en',
      audioRef: null,
    },
    {
      id: 'soy_de',
      target: 'Soy de...',
      native: 'I am from... (origin)',
      literal: 'I-am from...',
      emoji: '🌎',
      phonetic: 'soy deh',
      audioRef: null,
    },
    {
      id: 'donde_vives',
      target: '¿Dónde vives?',
      native: 'Where do you live?',
      literal: 'Where you-live?',
      emoji: '📍',
      phonetic: 'DON-deh BEE-bes',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ser de (origin) vs Vivir en (residence)',
    explanation: "Two different ideas English smushes together. 'Soy de Argentina' means I am Argentine — that's permanent identity, ser. 'Vivo en Argentina' means I currently live there — that's residence, vivir. You can be both ('Soy de Argentina y vivo en Argentina') or just one ('Soy de Argentina pero vivo en España').",
    examples: [
      { target: 'Soy de México', native: 'I am from Mexico (origin)' },
      { target: 'Vivo en Estados Unidos', native: 'I live in the United States' },
      { target: 'Soy de Bogotá pero vivo en Madrid', native: 'I\'m from Bogotá but I live in Madrid' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Vivo en...', right: 'I live in...' },
        { left: 'Soy de...', right: 'I am from... (origin)' },
        { left: '¿Dónde vives?', right: 'Where do you live?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right verb for current residence',
      sentence: '_____ en Chicago.',
      options: ['Vivo', 'Soy', 'Estoy'],
      correct: 'Vivo',
      context: 'Where you currently live uses the dedicated verb vivir.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I am from Mexico (origin)',
      correct: ['Soy de México', 'soy de México', 'Soy de Mexico', 'soy de mexico', 'Soy de mexico'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks '¿De dónde eres?' — they want to know:",
      question: 'What is the question really asking?',
      options: [
        { text: 'Where you originally come from', correct: true },
        { text: 'Where you slept last night', correct: false },
        { text: 'Where your house is right now', correct: false },
      ],
      explanation: "'De dónde' (from where) + ser asks origin. Answer with 'Soy de [country]'. For current residence they'd ask '¿dónde vives?' instead.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I\'m from Texas but I live in Mexico City"',
      words: ['Ciudad', 'pero', 'México', 'vivo', 'Soy', 'de', 'de', 'Texas', 'en'],
      correct: ['Soy', 'de', 'Texas', 'pero', 'vivo', 'en', 'Ciudad', 'de', 'México'],
      translation: "I'm from Texas but I live in Mexico City",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Where do you live? (informal "tú")',
      correct: ['¿Dónde vives?', 'Dónde vives?', 'donde vives?', '¿Donde vives?', 'dónde vives?', '¿Dónde vives'],
    },
  ],

  rwenDialogue: {
    intro: "A video call with abuela in Monterrey. She picks up on the third ring, eyes squinting at the camera, and asks where you are now.",
    lines: [
      {
        speaker: 'npc',
        target: 'M\'ija, ¿dónde vives ahora? ¿Y de dónde son tus papás?',
        native: 'Sweetie, where do you live now? And where are your parents from?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Vivo en Houston, abuela. Soy de Texas pero papá es de Monterrey.', native: 'I live in Houston, grandma. I\'m from Texas but dad is from Monterrey.', correct: true, feedback: "Vivo en for residence, soy de for origin, two clean halves. Abuela's eyes go misty — Monterrey." },
          { target: 'Estoy en Houston.', native: 'I am in Houston.', correct: false, feedback: "Estar en works for being-located-there RIGHT NOW (like 'I'm in Houston this week'), but for where you LIVE you want 'Vivo en Houston'." },
          { target: 'Soy en Houston.', native: 'I AM in Houston.', correct: false, feedback: "Ser is for identity, not location. For 'I am from' use 'Soy de'; for 'I live in' use 'Vivo en'." },
        ],
      },
      {
        speaker: 'npc',
        target: '¡Ay, qué bueno! Tu abuelo es de Monterrey también, m\'ija.',
        native: 'Oh, how wonderful! Your grandfather is from Monterrey too, sweetie.',
      },
      {
        speaker: 'rwen',
        rwenLine: "She said 'es de' for grandpa's origin — same ser de pattern. Two video-call sentences and you'd never guess you mix up vivir and ser. Solid.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I live in... (start of phrase)', correct: ['Vivo en', 'vivo en'] },
      { prompt: 'I am from... (origin, start of phrase)', correct: ['Soy de', 'soy de'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say where you're from AND where you live today — both in Spanish. 'Soy de [origin]. Vivo en [current city].' Don't blur the two verbs.",
    rwenSignoff: "Origin and residence are two separate things in Spanish — and now in your head too. ¡Hablamos pronto!",
  },

  phase8: {
    scenario: "Saturday morning video call with your abuela in Monterrey. She wants to know where you're living now and pieces together which side of the family you're connected to.",
    rwenRole: "Abuela Cuca — your grandmother in Monterrey, ~80, slightly hard of hearing, will only speak Spanish, asks layered questions about origin AND residence.",
    successCriteria: "User uses 'Vivo en [city]' for current residence (NOT 'Soy en' or 'Estoy en' for permanent residence), 'Soy de [country/state]' for origin, and can string both together with 'pero' if origin and residence differ. Doesn't conflate ser, estar, and vivir.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
