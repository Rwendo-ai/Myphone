import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-leer-escribir',
  module: 8,
  lesson: 9,
  title: 'Leer & Escribir — Read and Write',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Two more -er and -ir verbs. Leer — to read — has a sneaky preterite (leí, leíste, leyó — that y appears in 3rd person). Escribir is regular -ir until the past participle: 'escrito' (written) is irregular. You won't hit that today, but it's worth flagging — Spanish saves its irregularities for the moments that matter.",
    culturalNote: "Mexico City and Madrid both have living book cultures — the Feria del Libro de Madrid in Retiro Park each spring, the FIL de Guadalajara each autumn. 'Leo en español' (I read in Spanish) is one of the most powerful sentences a learner can say — the moment you can read a novel in your target language is a different stage of fluency.",
  },

  chunks: [
    {
      id: 'leo',
      target: 'Leo',
      native: 'I read / I am reading',
      literal: '(yo) leo — regular -er',
      emoji: '📖',
      phonetic: 'LEH-oh',
      audioRef: null,
    },
    {
      id: 'escribo',
      target: 'Escribo',
      native: 'I write / I am writing',
      literal: '(yo) escribo — regular -ir',
      emoji: '✍️',
      phonetic: 'es-KREE-boh',
      audioRef: null,
    },
    {
      id: 'lei',
      target: 'Leí',
      native: 'I read (past)',
      literal: 'preterite of leer',
      emoji: '✅',
      phonetic: 'leh-EE',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-er and -ir verbs share the same preterite endings',
    explanation: "Comer (-er) and escribir (-ir) take the SAME preterite endings: -í, -iste, -ió, -imos, -isteis, -ieron. Comí, comiste, comió // escribí, escribiste, escribió. Only present tense splits the families (-emos vs -imos). For the past, -er and -ir are one verb family. That's two letters of difference across the entire preterite — Spanish making your life easier.",
    examples: [
      { target: 'Leo en español cada día', native: 'I read in Spanish every day' },
      { target: 'Te escribí un mensaje', native: 'I wrote you a message' },
      { target: 'Leí el libro en una semana', native: 'I read the book in a week' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its meaning',
      pairs: [
        { left: 'Leo', right: 'I read (present)' },
        { left: 'Escribo', right: 'I write' },
        { left: 'Leí', right: 'I read (preterite)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete with the preterite',
      sentence: 'Anoche _____ tres capítulos.',
      options: ['leí', 'leo', 'leeré'],
      correct: 'leí',
      context: 'Last night I read three chapters.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'm writing an email",
      correct: ['Escribo un correo', 'escribo un correo', 'Escribo un email', 'escribo un email'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Apply the rule: -er and -ir verbs share preterite endings. "I wrote" (1st person preterite of escribir) is:',
      question: 'Preterite of escribir, "I":',
      options: [
        { text: 'Escribí', correct: true },
        { text: 'Escribé', correct: false },
        { text: 'Escribió', correct: false },
      ],
      explanation: "Both -er and -ir verbs use -í for 1st person preterite. Comí, bebí, escribí. -é is for -ar verbs only (hablé). -ió is 3rd person.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I write a message every morning'",
      words: ['Escribo', 'un', 'mensaje', 'cada', 'mañana.'],
      correct: ['Escribo', 'un', 'mensaje', 'cada', 'mañana.'],
      translation: 'I write a message every morning',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I read in Spanish',
      correct: ['Leo en español', 'leo en español', 'leo en espanol'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday 4pm in a bookshop in Lavapiés, Madrid. Your friend Carlos picks up a novel and asks what you've read recently.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Qué leíste últimamente?',
        native: "What have you read recently?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Leí una novela de García Márquez en español. Y ahora escribo notas en mi cuaderno.', native: "I read a García Márquez novel in Spanish. And now I'm writing notes in my notebook.", correct: true, feedback: "Preterite for the completed read, present for what you're doing now. Two verb families, two tenses, one fluent answer." },
          { target: 'Leo García Márquez ayer.', native: 'I read García Márquez yesterday (present tense).', correct: false, feedback: "'Ayer' = past, so use preterite: 'Leí García Márquez ayer.' The accent on -í tells you it's past." },
          { target: 'Leí escribo García Márquez.', native: 'I read I write García Márquez.', correct: false, feedback: "Two verbs jammed together — split them. 'Leí... y ahora escribo...' is the natural rhythm." },
        ],
      },
      {
        speaker: 'npc',
        target: '¡Qué bueno! Yo escribo un blog y leo cada día también.',
        native: 'How great! I write a blog and read every day too.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Leí. Escribí. -er and -ir verbs share the same past. Two verbs, one rule, the whole literary life of a Spanish learner.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I read (present)', correct: ['Leo', 'leo'] },
      { prompt: 'I wrote you a message', correct: ['Te escribí un mensaje', 'te escribí un mensaje', 'te escribi un mensaje'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today read one paragraph in Spanish — a news headline, a recipe, a meme caption — and afterwards say 'Leí algo en español hoy'. Then write one sentence: 'Hoy escribí en español.' Read + write = a real language day.",
    rwenSignoff: "Leo. Escribo. Leí. Escribí. Two verbs, two tenses, four reasons to keep going. ¡Buen camino!",
  },

  phase8: {
    scenario: "Sunday 4:15pm in a bookshop in Lavapiés, Madrid. Your friend Carlos is browsing the Latin American novels and asks what you've read in Spanish lately, what you're currently writing (journal? messages? work email?), and what you plan to read next on your vacation in two weeks.",
    rwenRole: "Carlos — Madrid friend, late 30s, peer register (tú). Bookish, opinionated, loves recommending novels to anyone learning Spanish.",
    successCriteria: "User uses 'leí' (preterite — completed reading), 'escribo' (present — current writing habit), and 'voy a leer' (near future — vacation plan). Three distinct tense forms across two verbs. Drops pronouns. The accent on 'leí' is correct.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
