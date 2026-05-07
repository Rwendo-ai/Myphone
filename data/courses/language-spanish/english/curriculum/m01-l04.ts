import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-buenas-noches',
  module: 1,
  lesson: 4,
  title: 'Buenas Noches — Good Evening / Goodnight',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The sun goes down. The grill comes out. In Argentina they call it the asado, in Mexico the carne asada, in Colombia just la cena. Whatever you call it, the greeting that opens it is the same: 'Buenas noches'.",
    culturalNote: "'Buenas noches' covers BOTH 'good evening' (when you arrive) and 'goodnight' (when you leave). In Argentina especially, evening events start late — a 9pm 'Buenas noches' is normal. In Mexico, 'Buenas noches' kicks in around 7-8pm.",
  },

  chunks: [
    {
      id: 'buenas_noches',
      target: 'Buenas noches',
      native: 'Good evening / Goodnight',
      literal: 'Good nights (idiomatic plural)',
      emoji: '🌙',
      phonetic: 'BWEH-nahs NOH-chehs',
      audioRef: null,
    },
    {
      id: 'bienvenido',
      target: 'Bienvenido / Bienvenida',
      native: 'Welcome (masc. / fem.)',
      literal: 'Well-arrived',
      emoji: '🚪',
      phonetic: 'bee-en-veh-NEE-doh',
      audioRef: null,
    },
    {
      id: 'que_rico',
      target: '¡Qué rico!',
      native: "How delicious! / How nice! (universal warm exclamation)",
      literal: 'How rich/tasty!',
      emoji: '🥩',
      phonetic: 'keh REE-koh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Bienvenido / Bienvenida — gender agreement',
    explanation: "Welcoming someone? Match the ending to their gender. A man hears 'Bienvenido', a woman hears 'Bienvenida'. Welcoming a mixed group? Default to masculine plural: 'Bienvenidos'. This pattern repeats across hundreds of Spanish adjectives.",
    examples: [
      { target: 'Bienvenido', native: 'Welcome (to a man)' },
      { target: 'Bienvenida', native: 'Welcome (to a woman)' },
      { target: 'Bienvenidos', native: 'Welcome (to a group, any mix)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Buenas noches', right: 'Good evening / Goodnight' },
        { left: 'Bienvenido', right: 'Welcome (to a man)' },
        { left: '¡Qué rico!', right: 'How delicious!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Welcome a female friend arriving at the asado',
      sentence: '¡_____, María!',
      options: ['Bienvenida', 'Bienvenido', 'Bienvenidos'],
      correct: 'Bienvenida',
      context: 'María is one woman. Match the ending.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Good evening / Goodnight',
      correct: ['Buenas noches', 'buenas noches'],
    },
    {
      type: 'multiple_choice',
      instruction: "You arrive at a friend's asado at 9pm in Buenos Aires. The host is at the grill. What do you say?",
      question: 'Choose the best opening',
      options: [
        { text: 'Buenas noches, ¡qué rico!', correct: true },
        { text: 'Buenos días', correct: false },
        { text: 'Buenas tardes', correct: false },
      ],
      explanation: "It's 9pm — 'Buenas noches' is the right window. Adding '¡Qué rico!' as the smell of beef hits is a natural Argentine move.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build the warm evening welcome',
      words: ['noches,', 'Buenas', 'bienvenido'],
      correct: ['Buenas', 'noches,', 'bienvenido'],
      translation: 'Good evening, welcome',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Welcome (to a group)',
      correct: ['Bienvenidos', 'bienvenidos', '¡Bienvenidos!'],
    },
  ],

  rwenDialogue: {
    intro: "It's 9pm in Palermo, Buenos Aires. You arrive at your friend Lucía's asado — meat is sizzling, the table is set, a dozen people are already there. Lucía's father, Don Hugo, is at the grill with tongs in hand. He looks up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Buenas noches, ¡bienvenido!',
        native: 'Good evening, welcome!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas noches, ¡qué rico huele!', native: 'Good evening — it smells delicious!', correct: true, feedback: "Perfect — you matched his greeting AND complimented the asado. That's how you become family at an Argentine grill." },
          { target: 'Buenos días', native: 'Good morning', correct: false, feedback: "It's 9pm — 'Buenas noches', not 'Buenos días'." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "You just walked in — opening with 'Adiós' makes it look like you're leaving. Try 'Buenas noches'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Pasá, pasá. La carne ya está casi.',
        native: "Come in, come in. The meat's almost ready.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You opened the evening like an Argentine. Greeting plus a compliment on the asado — that's the move.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Good evening / Goodnight (in Spanish)', correct: ['Buenas noches', 'buenas noches'] },
      { prompt: 'Welcome (to a woman)', correct: ['Bienvenida', 'bienvenida'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Buenas noches' to one person tonight — when arriving somewhere, OR when leaving. Both work.",
    rwenSignoff: "Buenas noches. Hasta mañana.",
  },

  phase8: {
    scenario: "It's 9:30pm in Palermo, Buenos Aires. You've been invited to your friend Lucía's family asado for the first time. Her dad is at the grill turning ribs and chorizo, her mum is bringing salads out, several aunts and uncles are already seated with glasses of Malbec. You step through the door and the whole patio looks up at once.",
    rwenRole: "Don Hugo — Lucía's dad and the asador (grill master), ~62, proud Porteño; he judges every guest by how they greet the room and whether they appreciate the meat.",
    successCriteria: "User opens with 'Buenas noches' (NOT 'Buenas tardes' since it's after dark, NOT bare 'Hola' which underplays the moment), uses 'Bienvenido/Bienvenida/Bienvenidos' correctly if welcoming back, and ideally throws in '¡Qué rico!' or comments on the asado rather than just standing silent.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
