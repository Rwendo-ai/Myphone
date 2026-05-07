import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-ser',
  module: 4,
  lesson: 6,
  title: 'Ser — Permanent Identity',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Spanish has TWO verbs for 'to be'. English has one. This is the single most-corrected mistake an English speaker makes when learning Spanish — and we're going to fix it across three lessons. Today: 'ser'. Use it for who you are, what you are, where you're from, what you do for a living. Permanent stuff.",
    culturalNote: "'Ser' carries identity that doesn't change easily — name, nationality, profession, time of day, what something is made of, who owns it. 'Soy María. Soy de Madrid. Soy profesora.' (I am María. I am from Madrid. I am a teacher.) When something feels essential to who you are, ser is your verb.",
  },

  chunks: [
    {
      id: 'soy',
      target: 'soy',
      native: 'I am (ser — identity)',
      literal: 'soy — first-person singular of ser',
      emoji: '🆔',
      phonetic: 'soy',
      audioRef: null,
    },
    {
      id: 'eres',
      target: 'eres',
      native: 'you are (informal — ser)',
      literal: 'eres — second-person singular of ser',
      emoji: '🫵',
      phonetic: 'EH-rehs',
      audioRef: null,
    },
    {
      id: 'es',
      target: 'es',
      native: 'he/she/it is (ser)',
      literal: 'es — third-person singular of ser',
      emoji: '👤',
      phonetic: 'ehs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ser — for identity, origin, profession',
    explanation: "Use 'ser' for things that define WHAT something IS: name, nationality, origin, profession, what something is made of, time of day. Conjugation: yo soy / tú eres / él, ella, usted es / nosotros somos / vosotros sois / ellos son. Common after 'ser': a noun ('soy estudiante') or a permanent quality ('es alto').",
    examples: [
      { target: 'Soy María. Soy de Madrid.', native: 'I am María. I am from Madrid. (identity, origin)' },
      { target: 'Es profesora. Es inteligente.', native: 'She is a teacher. She is intelligent. (profession, defining quality)' },
      { target: 'Son las tres.', native: 'It is three o\'clock. (time — uses ser, always)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the subject to the form of ser',
      pairs: [
        { left: 'yo', right: 'soy' },
        { left: 'tú', right: 'eres' },
        { left: 'ella', right: 'es' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why do we use "ser" for "Soy de México"?',
      question: 'Soy de México (I am from Mexico) — why ser?',
      options: [
        { text: 'Origin/nationality is permanent identity → ser', correct: true },
        { text: 'Because location uses ser', correct: false },
        { text: 'Because it is a temporary feeling', correct: false },
      ],
      explanation: "Where you're FROM (origin) is identity — it doesn't change day to day. That's ser territory. (Where you ARE right now uses estar — coming next lesson.)",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I am a teacher (female)',
      correct: ['Soy profesora', 'soy profesora'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right form of ser',
      sentence: 'Tú _____ mi amigo.',
      options: ['eres', 'soy', 'es'],
      correct: 'eres',
      context: 'You are my friend — second person.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "She is from Madrid"',
      words: ['ella', 'Madrid', 'es', 'de'],
      correct: ['ella', 'es', 'de', 'Madrid'],
      translation: 'She is from Madrid',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I am from Spain',
      correct: ['Soy de España', 'soy de España', 'Soy de Espana', 'soy de Espana'],
    },
  ],

  rwenDialogue: {
    intro: "Lucía wants to know who you are, where you're from, and what you do. All identity questions — all 'ser' territory.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Cómo te llamas? ¿De dónde eres? ¿A qué te dedicas?',
        native: "What's your name? Where are you from? What do you do?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Soy [tu nombre]. Soy de [tu país]. Soy estudiante.', native: 'I am [name]. I am from [country]. I am a student.', correct: true, feedback: "Perfecto. Three sentences, three uses of ser — name, origin, profession. All identity." },
          { target: 'Estoy de Australia. Estoy estudiante.', native: 'Wrong — used estar for identity', correct: false, feedback: "Identity uses ser, not estar. 'Soy de Australia. Soy estudiante.' We'll cover when to use estar in the next lesson." },
          { target: 'Yo Australia, yo estudiante.', native: 'No verb', correct: false, feedback: "You need a verb — and the verb for identity is ser: 'Soy de Australia. Soy estudiante.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Muy bien. Ser is your identity verb. Three answers, three uses, all permanent.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am a teacher (female)', correct: ['Soy profesora', 'soy profesora'] },
      { prompt: 'You are my friend (informal)', correct: ['Eres mi amigo', 'eres mi amigo', 'Eres mi amiga', 'eres mi amiga'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Introduce yourself silently in Spanish using ser three times: 'Soy [your name]. Soy de [your country]. Soy [your profession or 'estudiante']'. Three uses of ser, three pieces of identity.",
    rwenSignoff: "Ser is who you are. Tomorrow: estar — where you are and how you feel. Hasta mañana.",
  },

  phase8: {
    scenario: "You meet Lucía's family for the first time at a Sunday lunch in their flat in Salamanca. Her mother, father, and grandmother are at the table and immediately want to know who you are, where you come from, and what you do. They're warm but they're testing your Spanish — ser is the verb of the moment.",
    rwenRole: "Doña Pilar — Lucía's grandmother, ~70, traditional Spanish, who listens warmly but firmly for whether you use 'soy' for identity ('soy estudiante', 'soy de Inglaterra'), not 'estoy', and answers 'son las dos' when you ask the time.",
    successCriteria: "User produces at least three sentences with ser: identity ('soy [name]'), origin ('soy de [country]'), and profession ('soy estudiante' or similar). Does NOT slip into estar for any of these. Bonus: uses 'es' or 'son' for telling time.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
