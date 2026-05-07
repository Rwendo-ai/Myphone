import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-trabajar-estudiar',
  module: 8,
  lesson: 5,
  title: 'Trabajar & Estudiar — Work and Study',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Two -ar verbs in one lesson — because they pair so often in real life. Trabajar (to work) and estudiar (to study) follow the regular -ar template: trabajo, trabajas, trabaja, trabajamos, trabajáis, trabajan. Learn that ending row once and the entire -ar family — the biggest in Spanish — falls into place.",
    culturalNote: "In Mexico City office talk, '¿En qué trabajas?' (what do you work in?) is the standard professional opener — gentler than the English 'what do you do?' In Madrid, students at university say 'estudio Derecho' (I study Law). The verb tells you they're current — past students say 'estudié' to mark the closure.",
  },

  chunks: [
    {
      id: 'trabajo',
      target: 'Trabajo',
      native: 'I work',
      literal: '(yo) trabajo — regular -ar',
      emoji: '💼',
      phonetic: 'trah-BAH-hoh',
      audioRef: null,
    },
    {
      id: 'estudio',
      target: 'Estudio',
      native: 'I study',
      literal: '(yo) estudio — regular -ar',
      emoji: '📚',
      phonetic: 'es-TOO-dyoh',
      audioRef: null,
    },
    {
      id: 'trabaje',
      target: 'Trabajé',
      native: 'I worked',
      literal: 'preterite — completed past',
      emoji: '✅',
      phonetic: 'trah-bah-HEH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Regular -ar endings — present and preterite',
    explanation: "Present: -o, -as, -a, -amos, -áis, -an. Preterite: -é, -aste, -ó, -amos, -asteis, -aron. Notice 'nosotros' is the same in both tenses (trabajamos = we work / we worked) — context tells you which. The 1st person preterite ending -é (with accent) is the giveaway: trabajé means I worked, trabajo means I work.",
    examples: [
      { target: 'Trabajo en Ciudad de México', native: 'I work in Mexico City' },
      { target: 'Estudio español', native: 'I study Spanish' },
      { target: 'Ayer trabajé hasta tarde', native: 'Yesterday I worked late' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its meaning',
      pairs: [
        { left: 'Trabajo', right: 'I work' },
        { left: 'Estudio', right: 'I study' },
        { left: 'Trabajé', right: 'I worked' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete with the right tense',
      sentence: 'Hoy _____ desde casa.',
      options: ['trabajo', 'trabajé', 'trabajaré'],
      correct: 'trabajo',
      context: 'Today I work from home.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I study Spanish',
      correct: ['Estudio español', 'estudio español', 'estudio espanol'],
    },
    {
      type: 'multiple_choice',
      instruction: 'A new colleague in Mexico City asks "¿En qué trabajas?". The most natural answer about your current job is:',
      question: 'Right tense for current employment:',
      options: [
        { text: 'Trabajo en marketing.', correct: true },
        { text: 'Trabajé en marketing.', correct: false },
        { text: 'Voy a trabajar marketing.', correct: false },
      ],
      explanation: "'Trabajo' (present) describes what you do now. 'Trabajé' would mean you used to and you don't anymore. 'Voy a trabajar' is future plans.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Yesterday I worked from home'",
      words: ['Ayer', 'trabajé', 'desde', 'casa.'],
      correct: ['Ayer', 'trabajé', 'desde', 'casa.'],
      translation: 'Yesterday I worked from home',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'We study together',
      correct: ['Estudiamos juntos', 'estudiamos juntos'],
    },
  ],

  rwenDialogue: {
    intro: "Monday 9:45am, Mexico City. Standing in line for coffee at a Polanco café before work, Diego strikes up small talk.",
    lines: [
      {
        speaker: 'npc',
        target: '¿En qué trabajas?',
        native: 'What do you work in?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Trabajo en una empresa de tecnología. ¿Y tú?', native: 'I work at a tech company. And you?', correct: true, feedback: "Present tense for current role + 'y tú' to keep the chat going. Diego smiles." },
          { target: 'Trabajé en una empresa.', native: 'I worked at a company.', correct: false, feedback: "Past tense suggests you don't work there anymore. He asked about now: 'Trabajo en...'" },
          { target: 'Estudio una empresa.', native: 'I study a company.', correct: false, feedback: "Wrong verb — 'trabajo' (work), not 'estudio' (study). 'Trabajo en una empresa de tecnología.'" },
        ],
      },
      {
        speaker: 'npc',
        target: '¡Qué bien! Yo estudio Ingeniería en la UNAM.',
        native: 'Great! I study Engineering at UNAM.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Trabajo. Estudio. Two -ar verbs and the whole 'what I do' question is yours. Watch the accent on -é — that's the past doorway.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I work', correct: ['Trabajo', 'trabajo'] },
      { prompt: 'I studied (preterite)', correct: ['Estudié', 'estudié', 'estudie'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today say out loud what you do: 'Trabajo en [field/place].' 'Estudio [subject/language].' Then say what you did yesterday: 'Ayer trabajé...' / 'Ayer estudié...' Two verbs, two tenses, your whole working life.",
    rwenSignoff: "Trabajo. Estudio. The verbs that build a life. ¡Buen camino!",
  },

  phase8: {
    scenario: "Monday 10am, the queue at a Polanco café in Mexico City. Diego — a UNAM engineering student doing an internship at the company across the road — strikes up small talk. He wants to know what you work in, what you studied at university, and whether you're studying anything new on the side right now.",
    rwenRole: "Diego — Mexico City UNAM intern, early 20s, peer register (tú). Curious, asks follow-up questions, gently flags if you mix tenses.",
    successCriteria: "User uses 'trabajo en...' for current job (present), 'estudié...' (preterite) for completed degree, and 'estudio...' (present) for currently learning Spanish or anything else. Three distinct tense forms across two verb families. Pronouns dropped.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
