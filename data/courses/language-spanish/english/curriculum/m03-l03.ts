import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-trabajo',
  module: 3,
  lesson: 3,
  title: 'Trabajo — What I Do for a Living',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two ways to talk about your job in Spanish, and they sound almost identical to English. 'Soy ingeniero' (I'm an engineer — what I am) or 'Trabajo en una escuela' (I work at a school — where I work). Notice what's missing: there's no 'a' or 'an' before professions. Spanish drops it. 'Soy un profesor' sounds wrong to a native ear — like saying 'I am a one teacher'.",
    culturalNote: "In Latin America, asking '¿en qué trabajas?' or '¿a qué te dedicas?' is normal small talk — not capitalist box-ticking like it can feel in the US. People are genuinely curious about how you spend your days. Stay-at-home parents proudly say 'soy ama de casa' or 'me dedico a mis hijos' — work outside the home isn't the only valid answer.",
  },

  chunks: [
    {
      id: 'soy_profesion',
      target: 'Soy [profesión]',
      native: 'I am a [profession] — no "a/an" needed',
      literal: 'I-am [profession]',
      emoji: '💼',
      phonetic: 'soy [pro-feh-SYON]',
      audioRef: null,
    },
    {
      id: 'trabajo_en',
      target: 'Trabajo en...',
      native: 'I work at / in...',
      literal: 'I-work in/at...',
      emoji: '🏢',
      phonetic: 'trah-BAH-ho en',
      audioRef: null,
    },
    {
      id: 'a_que_te_dedicas',
      target: '¿A qué te dedicas?',
      native: 'What do you do (for work)?',
      literal: 'To-what you-dedicate-yourself?',
      emoji: '❓',
      phonetic: 'ah keh teh deh-DEE-kas',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Soy + profession (NO un/una)',
    explanation: "Spanish drops the indefinite article ('a/an') before unmodified professions. 'Soy ingeniero' (I'm an engineer), not 'Soy un ingeniero'. The article comes back if you add an adjective: 'Soy un buen ingeniero' (I'm a good engineer). Same rule for nationality and religion.",
    examples: [
      { target: 'Soy ingeniero', native: 'I am an engineer (no "un")' },
      { target: 'Soy estudiante', native: 'I am a student' },
      { target: 'Trabajo en un hospital', native: 'I work at a hospital (here "un" is correct — it\'s the workplace, not the profession)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Soy [profesión]', right: 'I am a [profession]' },
        { left: 'Trabajo en...', right: 'I work in/at...' },
        { left: '¿A qué te dedicas?', right: 'What do you do (for work)?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Drop the unnecessary article',
      sentence: 'Soy _____ profesora.',
      options: ['(nothing)', 'una', 'la'],
      correct: '(nothing)',
      context: 'Spanish drops "a/an" before bare professions.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I work at a hospital',
      correct: ['Trabajo en un hospital', 'trabajo en un hospital'],
    },
    {
      type: 'multiple_choice',
      instruction: "A new colleague asks '¿A qué te dedicas?' — you're a software engineer. Best answer:",
      question: 'Choose the natural reply',
      options: [
        { text: 'Soy ingeniero de software.', correct: true },
        { text: 'Soy un ingeniero de software.', correct: false },
        { text: 'Tengo ingeniero.', correct: false },
      ],
      explanation: "Drop the 'un' before bare professions — 'Soy ingeniero' is right. 'Tengo ingeniero' would mean 'I have an engineer' (like owning one).",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I work in an office"',
      words: ['oficina', 'Trabajo', 'una', 'en'],
      correct: ['Trabajo', 'en', 'una', 'oficina'],
      translation: 'I work in an office (article OK here — it\'s a place, not a profession)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'What do you do (for work)? — informal',
      correct: ['¿A qué te dedicas?', 'A qué te dedicas?', 'a qué te dedicas?', '¿A qué te dedicas', 'a que te dedicas?'],
    },
  ],

  rwenDialogue: {
    intro: "Day two at a Latin American medicine conference in Barcelona. The Madrid researcher next to you is killing time before the keynote and asks what you actually do.",
    lines: [
      {
        speaker: 'npc',
        target: 'Y tú, ¿a qué te dedicas?',
        native: 'And you, what do you do?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Soy enfermera. Trabajo en un hospital en Boston.', native: 'I am a nurse. I work at a hospital in Boston.', correct: true, feedback: "No 'un' before 'enfermera', and 'un' kept before 'hospital' because it's a workplace. Two rules nailed in one sentence." },
          { target: 'Soy una enfermera.', native: 'I am a nurse (with "una").', correct: false, feedback: "Drop the 'una' — Spanish doesn't put articles before unmodified professions. 'Soy enfermera' is right." },
          { target: 'Tengo enfermera.', native: 'I have a nurse.', correct: false, feedback: "That means you employ a nurse. For 'I AM a nurse' use ser: 'Soy enfermera'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, qué interesante. Yo soy investigador en oncología.',
        native: 'Oh, how interesting. I\'m a researcher in oncology.',
      },
      {
        speaker: 'rwen',
        rwenLine: "He said 'Soy investigador' too — no 'un'. That's the Spanish way. Profession is identity, no article required.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am a teacher (Spanish drops "a")', correct: ['Soy profesor', 'soy profesor', 'Soy profesora', 'soy profesora'] },
      { prompt: 'I work at... (start of phrase)', correct: ['Trabajo en', 'trabajo en'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your real job in Spanish: 'Soy [profession]. Trabajo en [place].' Two sentences. No 'un/una' before the profession.",
    rwenSignoff: "Your work has a name in Spanish now — and the article you don't say is just as important as the words you do. ¡A la próxima!",
  },

  phase8: {
    scenario: "You're at a Latin American medicine conference in Barcelona, lining up for coffee. A Madrid-based oncology researcher strikes up small talk and asks what you do.",
    rwenRole: "Dr. Javier Ruiz — Spanish researcher, mid-40s, professional but easygoing; speaking castellano (peninsular Spanish) but understands Latin American forms; will ask follow-ups about your workplace.",
    successCriteria: "User answers with 'Soy [profession]' WITHOUT 'un/una' before the profession, then optionally adds 'Trabajo en [workplace]' WITH the article when naming a place. Doesn't say 'Tengo [profession]' (have-instead-of-be confusion). Recognises '¿a qué te dedicas?' as the work question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
