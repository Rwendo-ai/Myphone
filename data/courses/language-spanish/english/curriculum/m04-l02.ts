import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-gender-exceptions',
  module: 4,
  lesson: 2,
  title: 'Gender Exceptions — When -A Is Masculine',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Yesterday: -o is masculine, -a is feminine. Easy. Today: every Spanish learner's first betrayal. 'El día' (the day) ends in -a but is masculine. 'La mano' (the hand) ends in -o but is feminine. 'El problema' is masculine. The rule has cracks — and the cracks show up in the words you'll use every day.",
    culturalNote: "Most -a-ending words ARE feminine and most -o-ending words ARE masculine. But a small group of common Greek-origin words (problema, programa, sistema, tema) ended up masculine despite the -a, and a few feminine words (mano, foto, moto) end in -o. You'll meet them constantly — learn the article with each one.",
  },

  chunks: [
    {
      id: 'el_dia',
      target: 'el día',
      native: 'the day (masculine, despite -a)',
      literal: 'el (masc.) + día — exception, ends -a but masculine',
      emoji: '☀️',
      phonetic: 'el DEE-ah',
      audioRef: null,
    },
    {
      id: 'la_mano',
      target: 'la mano',
      native: 'the hand (feminine, despite -o)',
      literal: 'la (fem.) + mano — exception, ends -o but feminine',
      emoji: '✋',
      phonetic: 'lah MAH-noh',
      audioRef: null,
    },
    {
      id: 'el_problema',
      target: 'el problema',
      native: 'the problem (masculine, despite -a)',
      literal: 'el + problema — Greek-origin -ma words are masculine',
      emoji: '⚠️',
      phonetic: 'el proh-BLEH-mah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Common gender exceptions',
    explanation: "Most -o words are masculine and most -a words are feminine — but learn these exceptions because they appear in everyday speech: 'el día' (day), 'el problema' (problem), 'el programa' (programme), 'el sistema' (system), 'el tema' (topic) are all masculine. 'La mano' (hand), 'la foto' (photo, short for fotografía), 'la moto' (motorbike, short for motocicleta) are feminine. When in doubt, learn the article WITH the noun.",
    examples: [
      { target: 'el día', native: 'the day — masculine, ends in -a (exception)' },
      { target: 'la mano', native: 'the hand — feminine, ends in -o (exception)' },
      { target: 'el problema', native: 'the problem — masc., -ma words from Greek' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each noun to its correct article',
      pairs: [
        { left: 'día', right: 'el' },
        { left: 'mano', right: 'la' },
        { left: 'problema', right: 'el' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which article goes with "foto"?',
      question: '___ foto',
      options: [
        { text: 'la (feminine — exception, short for "fotografía")', correct: true },
        { text: 'el (masculine — ends in -o)', correct: false },
        { text: 'lo (neutral)', correct: false },
      ],
      explanation: "'Foto' is short for 'fotografía' (which ends in -a, feminine). The full word's gender wins — 'la foto'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'the day',
      correct: ['el día', 'El día', 'el dia', 'El dia'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right article',
      sentence: '_____ mano está fría.',
      options: ['La', 'El', 'Lo'],
      correct: 'La',
      context: "'Mano' is feminine despite ending in -o.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "the problem is the day" (a strange sentence — but tests the exceptions)',
      words: ['el', 'problema', 'es', 'el', 'día'],
      correct: ['el', 'problema', 'es', 'el', 'día'],
      translation: 'the problem is the day',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'the hand',
      correct: ['la mano', 'La mano'],
    },
  ],

  rwenDialogue: {
    intro: "Back in Spanish class. The teacher writes three words on the board — día, mano, problema — and asks you to put the correct article in front of each. The exceptions trip up half the students every year.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Qué artículos van con día, mano y problema?',
        native: 'Which articles go with day, hand, and problem?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'El día, la mano, el problema.', native: 'The day, the hand, the problem.', correct: true, feedback: "¡Excelente! All three exceptions correct — día and problema are masculine despite -a, mano is feminine despite -o." },
          { target: 'La día, el mano, la problema.', native: 'Wrong — applied the simple -a/-o rule', correct: false, feedback: "You followed the basic rule, but these are exceptions. 'Día' is masculine ('el día'), 'mano' is feminine ('la mano'), 'problema' is masculine ('el problema')." },
          { target: 'El día, el mano, la problema.', native: 'Two wrong', correct: false, feedback: "Close on 'el día'. 'Mano' is feminine ('la mano') and 'problema' is masculine ('el problema')." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Muy bien. The exceptions trip up everyone at first — but you only have to learn them once.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'the day', correct: ['el día', 'El día', 'el dia', 'El dia'] },
      { prompt: 'the hand', correct: ['la mano', 'La mano'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say out loud (or silently): 'el día, la mano, el problema, el programa, la foto'. Repeat three times. These are the exceptions you'll meet most often — burn them in now.",
    rwenSignoff: "The exceptions are few. Learn them once, never trip on them again. Hasta mañana.",
  },

  phase8: {
    scenario: "It's morning at the Instituto Cervantes and Profesora Carmen is doing a quick warm-up drill. She holds up a phone showing a photo, points to her hand, then says the word 'problema' aloud — and walks down the row of students asking each one to name the article. The exceptions are her favourite catch.",
    rwenRole: "Profesora Carmen — your Spanish teacher, who specifically tests whether students remember 'el día', 'la mano', 'el problema', 'la foto' and gently corrects anyone who reverts to the simple -a/-o rule.",
    successCriteria: "User says 'la mano' (feminine, NOT 'el mano'), 'el día' (masculine, NOT 'la día'), 'el problema' (masculine, NOT 'la problema'), and 'la foto' (feminine, NOT 'el foto') — three exceptions correct, no slips back to the surface -a/-o rule.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
