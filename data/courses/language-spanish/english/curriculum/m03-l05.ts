import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-me-gusta',
  module: 3,
  lesson: 5,
  title: 'Me Gusta — What I Like',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Me gusta' is the strangest sentence English speakers learn in Spanish. It does not mean 'I like' — it literally means 'it is pleasing to me'. The thing you like is the SUBJECT, not the object. So 'I like coffee' becomes 'coffee pleases me' — 'Me gusta el café'. Two coffees? 'Me gustan los cafés'. The verb agrees with the food, not with you. Take a breath. We'll walk through it.",
    culturalNote: "In Latin America, sharing what you like — música, comida, fútbol, baile — is the fastest route from polite stranger to amigo. Latin Americans light up when you mention you like reggaetón or arepas or playing dominó. Hobbies are common ground; they collapse social distance fast.",
  },

  chunks: [
    {
      id: 'me_gusta',
      target: 'Me gusta...',
      native: 'I like... (singular thing) — lit. it pleases me',
      literal: 'To-me it-pleases',
      emoji: '❤️',
      phonetic: 'meh GOOS-tah',
      audioRef: null,
    },
    {
      id: 'me_gustan',
      target: 'Me gustan...',
      native: 'I like... (plural things)',
      literal: 'To-me they-please',
      emoji: '❤️‍🔥',
      phonetic: 'meh GOOS-tan',
      audioRef: null,
    },
    {
      id: 'en_mi_tiempo_libre',
      target: 'En mi tiempo libre...',
      native: 'In my free time...',
      literal: 'In my time free',
      emoji: '⏰',
      phonetic: 'en mee TYEM-po LEE-breh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Gustar — singular vs plural agreement',
    explanation: "'Gustar' agrees with the THING liked, not the person liking it. One thing → 'me gusta'. Multiple things → 'me gustan'. An infinitive verb (kuv-, like 'to dance') counts as singular: 'Me gusta bailar'. The 'me' part stays the same — change it to 'te' for 'you like', 'le' for 'he/she likes'.",
    examples: [
      { target: 'Me gusta la música', native: 'I like music (one thing → gusta)' },
      { target: 'Me gustan los tacos', native: 'I like tacos (plural → gustan)' },
      { target: 'Me gusta bailar', native: 'I like to dance (infinitive counts as singular)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Me gusta...', right: 'I like... (one thing)' },
        { left: 'Me gustan...', right: 'I like... (plural things)' },
        { left: 'En mi tiempo libre...', right: 'In my free time...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick singular or plural — los tacos is plural',
      sentence: 'Me _____ los tacos.',
      options: ['gustan', 'gusta', 'gustar'],
      correct: 'gustan',
      context: 'The verb agrees with the thing liked, not with "me".',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I like music',
      correct: ['Me gusta la música', 'me gusta la música', 'Me gusta la musica', 'me gusta la musica'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to say 'I like to dance'. The infinitive 'bailar' counts as:",
      question: 'Singular or plural?',
      options: [
        { text: 'Singular — "Me gusta bailar"', correct: true },
        { text: 'Plural — "Me gustan bailar"', correct: false },
        { text: 'Neither — "Me gustar bailar"', correct: false },
      ],
      explanation: "Infinitive verbs (the to-form) count as singular, so always 'me gusta bailar / cantar / leer'. 'Me gustan' is only for plural nouns like 'los libros'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "In my free time I like to read"',
      words: ['libre', 'me', 'En', 'leer', 'gusta', 'mi', 'tiempo'],
      correct: ['En', 'mi', 'tiempo', 'libre', 'me', 'gusta', 'leer'],
      translation: 'In my free time I like to read',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I like the songs (plural — "las canciones")',
      correct: ['Me gustan las canciones', 'me gustan las canciones'],
    },
  ],

  rwenDialogue: {
    intro: "Same Latin medicine conference, lunch break. Dr. Javier from yesterday asks what you actually do for fun outside of work.",
    lines: [
      {
        speaker: 'npc',
        target: 'Y en tu tiempo libre, ¿qué te gusta hacer?',
        native: 'And in your free time, what do you like to do?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Me gusta correr y me gustan los libros de historia.', native: 'I like to run and I like history books.', correct: true, feedback: "Singular 'gusta' for 'correr' (infinitive), plural 'gustan' for 'los libros'. Same sentence, both forms — that's mastery." },
          { target: 'Yo gusto correr.', native: 'I like to run (using "I" as subject).', correct: false, feedback: "Classic English-speaker move — but 'gustar' doesn't work like 'like'. Use 'Me gusta correr' (running pleases me)." },
          { target: 'Me gustan correr.', native: 'I like to run (with plural verb).', correct: false, feedback: "Infinitive 'correr' is singular for gustar — 'Me gusta correr', not 'Me gustan correr'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'A mí también me gusta correr. ¡Qué bien!',
        native: 'I like to run too. How great!',
      },
      {
        speaker: 'rwen',
        rwenLine: "He said 'A mí también me gusta' — 'me too' in gustar-grammar. You'll start hearing this everywhere now. Common ground in two sentences flat.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I like music', correct: ['Me gusta la música', 'me gusta la música', 'Me gusta la musica', 'me gusta la musica'] },
      { prompt: 'I like tacos (plural agreement)', correct: ['Me gustan los tacos', 'me gustan los tacos'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one thing you really like and say it in Spanish — 'Me gusta [singular]' or 'Me gustan [plural]'. Then add 'En mi tiempo libre...' and one hobby.",
    rwenSignoff: "The thing you like is the subject, not you. Strange but true. ¡Te toca!",
  },

  phase8: {
    scenario: "Lunch break at the same Barcelona conference. Dr. Javier wants to know what you do outside work — fishing for shared hobbies before the afternoon sessions.",
    rwenRole: "Dr. Javier — Spanish researcher from yesterday, mid-40s, casual in tone now, will share his own hobbies and ask follow-ups about yours.",
    successCriteria: "User correctly switches between 'me gusta' (singular thing or infinitive) and 'me gustan' (plural things) in a single conversation. Doesn't say 'Yo gusto...' (English-speaker error). Names at least one concrete hobby with the right agreement.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
