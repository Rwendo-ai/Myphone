import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-de-donde-eres',
  module: 1,
  lesson: 8,
  title: '¿De Dónde Eres? — Where Are You From?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Names land. Origins connect. Latin Americans LOVE comparing where you're from — Mexico City vs Guadalajara, Argentina vs Uruguay, Bogotá vs Medellín. The question opens whole conversations. And they'll always tell you theirs back.",
    culturalNote: "In Mexico, Colombia, and Peru, '¿De dónde eres?' is one of the very first questions in any new conversation. Argentines often skip straight to it. The answer often unlocks shared connections — a relative in your hometown, a trip there, a soccer team rivalry.",
  },

  chunks: [
    {
      id: 'de_donde_eres',
      target: '¿De dónde eres?',
      native: 'Where are you from? (informal)',
      literal: 'From where are-you (tú)?',
      emoji: '🗺️',
      phonetic: 'deh DOHN-deh EH-rehs',
      audioRef: null,
    },
    {
      id: 'soy_de',
      target: 'Soy de...',
      native: "I'm from...",
      literal: 'I-am from...',
      emoji: '📍',
      phonetic: 'soy deh',
      audioRef: null,
    },
    {
      id: 'vivo_en',
      target: 'Vivo en...',
      native: 'I live in...',
      literal: 'I-live in...',
      emoji: '🏡',
      phonetic: 'VEE-voh ehn',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ser vs Vivir — Origin vs Current Home',
    explanation: "Spanish separates where you're FROM (origin, identity → 'ser') and where you LIVE NOW (current address → 'vivir'). 'Soy de México' means I'm Mexican (origin). 'Vivo en México' means I currently live there. Same person can answer both differently — 'Soy de Argentina, pero vivo en Madrid'.",
    examples: [
      { target: 'Soy de Colombia', native: "I'm from Colombia (origin)" },
      { target: 'Vivo en Bogotá', native: 'I live in Bogotá (current home)' },
      { target: '¿De dónde eres?', native: 'Where are you from? (informal)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: '¿De dónde eres?', right: 'Where are you from?' },
        { left: 'Soy de...', right: "I'm from..." },
        { left: 'Vivo en...', right: 'I live in...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell someone where you live',
      sentence: 'Vivo _____ Londres.',
      options: ['en', 'de', 'a'],
      correct: 'en',
      context: '"Live IN" a place — not "from".',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Where are you from? (informal)',
      correct: ['¿De dónde eres?', 'De dónde eres?', '¿De dónde eres', 'de dónde eres?', 'De donde eres?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I\'m from Colombia"',
      words: ['Colombia', 'Soy', 'de'],
      correct: ['Soy', 'de', 'Colombia'],
      translation: "I'm from Colombia",
    },
    {
      type: 'multiple_choice',
      instruction: "Someone says 'Soy de Argentina, pero vivo en México'. What does this tell you?",
      question: 'What\'s the meaning?',
      options: [
        { text: "They're Argentine but currently live in Mexico", correct: true },
        { text: "They're Mexican but currently live in Argentina", correct: false },
        { text: "They're both Argentine and Mexican", correct: false },
      ],
      explanation: "'Soy de' = origin (Argentine). 'Vivo en' = where they currently live (Mexico). Two facts, one sentence.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I live in... (start of the phrase)',
      correct: ['Vivo en', 'vivo en'],
    },
  ],

  rwenDialogue: {
    intro: "We're sharing a long bus ride from Mexico City to Oaxaca. The conversation has finally moved past the small talk. Now the real question.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Y tú, ¿de dónde eres?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Soy de... ¿y tú?', native: "I'm from... and you?", correct: true, feedback: "Perfect — you shared AND asked back. That's how road trips become friendships in Latin America." },
          { target: 'Vivo en...', native: 'I live in...', correct: false, feedback: "Close — but I asked where you're FROM (origin), not where you live. Use 'Soy de...'." },
          { target: 'Me llamo...', native: 'My name is...', correct: false, feedback: "We already shared names — now it's about origin. Try 'Soy de...'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Buenísimo! Yo soy de Oaxaca, pero ahora vivo en CDMX.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Origin shared both ways. Now you're not just travelling beside each other — you're talking.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Where are you from? (informal)', correct: ['¿De dónde eres?', 'De dónde eres?', 'de dónde eres?', 'De donde eres?'] },
      { prompt: "I'm from... (start of the phrase)", correct: ['Soy de', 'soy de'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell someone where you're from in Spanish today: 'Soy de [place]'. Even silently in your head as you walk to the shops.",
    rwenSignoff: "Tu origen es tu historia — your origin is your story.",
  },

  phase8: {
    scenario: "You're sitting at a small taco truck on a corner in Boyle Heights, Los Angeles — birria tacos, consommé, a plastic stool by the curb. The cook, a Jaliscense who's been here twenty years, hands you your order and starts a friendly conversation while you wait for the salsa verde. He asks where you're from.",
    rwenRole: "Don Mario — taco truck cook, ~58, originally from Jalisco; he loves comparing origins with customers and immediately offers extra salsa to anyone who answers properly.",
    successCriteria: "User answers '¿De dónde eres?' with 'Soy de [place]' (NOT 'Vivo en [place]' which means current home, NOT mixing the two up), distinguishes origin (ser) vs current address (vivir) correctly if asked both, and asks back '¿Y usted?' or '¿y tú?' depending on register. Bonus if they comment on his Jalisco origins or the food.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
