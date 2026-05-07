import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-mi-familia',
  module: 3,
  lesson: 7,
  title: 'Mi Familia — Family Snapshot',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Family in Spanish has a quiet feature English doesn't. When you have a mixed group — one brother and three sisters — Spanish defaults to the masculine plural. 'Tengo cuatro hermanos' can mean four brothers, OR three sisters and one brother. The masculine wins by default. Latinos don't find this confusing; they listen for context. You'll learn the trick.",
    culturalNote: "Latin American families are often larger and more closely intertwined than Anglo families — primos (cousins), tíos (aunts/uncles), abuelos (grandparents) are part of daily life, not holiday-only relations. When you say 'tengo una familia grande', that's a positive — you're describing wealth of relationships, not a logistics problem.",
  },

  chunks: [
    {
      id: 'mi_familia',
      target: 'Mi familia',
      native: 'My family',
      literal: 'My family',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'mee fah-MEE-lyah',
      audioRef: null,
    },
    {
      id: 'tengo_hermanos',
      target: 'Tengo ___ hermanos',
      native: 'I have ___ siblings (or ___ brothers)',
      literal: 'I-have ___ siblings/brothers',
      emoji: '👫',
      phonetic: 'TEN-go ___ er-MAH-nos',
      audioRef: null,
    },
    {
      id: 'soy_hijo_unico',
      target: 'Soy hijo único / hija única',
      native: 'I am an only child (m / f)',
      literal: 'I-am child only',
      emoji: '🧍',
      phonetic: 'soy EE-ho OO-nee-ko',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Masculine plural as default ("hermanos" = mixed group)',
    explanation: "When a noun has a male/female pair, Spanish uses the masculine plural to cover both. 'Hermanos' = brothers OR siblings (mixed). 'Hijos' = sons OR children (mixed). 'Padres' = fathers OR parents. To specify all-female, use the feminine plural: 'hermanas', 'hijas'. Some younger Latin Americans use 'hermanes' as a gender-neutral form, but in standard speech the masculine default still rules.",
    examples: [
      { target: 'Tengo dos hermanos', native: 'I have two siblings (or two brothers — context tells)' },
      { target: 'Tengo dos hermanas', native: 'I have two sisters (specifically female)' },
      { target: 'Mis padres viven en México', native: 'My parents (or fathers) live in Mexico' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Mi familia', right: 'My family' },
        { left: 'Tengo ___ hermanos', right: 'I have ___ siblings' },
        { left: 'Soy hijo único', right: 'I am an only child (male)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Use tener — family is something you HAVE',
      sentence: '_____ tres hermanas.',
      options: ['Tengo', 'Soy', 'Estoy'],
      correct: 'Tengo',
      context: '"I have three sisters" — possession, not identity.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I have a big family',
      correct: ['Tengo una familia grande', 'tengo una familia grande'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone says 'Tengo tres hermanos' but you saw photos of two sisters and one brother. The sentence is:",
      question: 'Was it wrong?',
      options: [
        { text: 'Correct — masculine plural covers mixed groups', correct: true },
        { text: 'Wrong — should have been "hermanas"', correct: false },
        { text: 'Wrong — should have been "hermano y hermanas"', correct: false },
      ],
      explanation: "'Hermanos' is the catch-all for siblings (any gender mix). It only means 'all brothers' if context forces it. To specify all-female you'd say 'hermanas'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am an only child" (female form)',
      words: ['única', 'Soy', 'hija'],
      correct: ['Soy', 'hija', 'única'],
      translation: 'I am an only child (female)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'My family is in Mexico (use estar — temporary location)',
      correct: ['Mi familia está en México', 'mi familia está en México', 'Mi familia esta en México', 'mi familia esta en mexico', 'Mi familia está en Mexico'],
    },
  ],

  rwenDialogue: {
    intro: "Quinceañera prep party from Lesson 2 — Doña Lupe is still curious. She wants to know about your family back home.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Y tu familia? ¿Tienes hermanos?',
        native: 'And your family? Do you have siblings?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tengo dos hermanos — un hermano y una hermana. Mis padres viven en Florida.', native: 'I have two siblings — one brother and one sister. My parents live in Florida.', correct: true, feedback: "You used 'hermanos' for the mixed group THEN clarified the split. That's exactly how Spanish handles ambiguity." },
          { target: 'Soy dos hermanos.', native: 'I am two brothers.', correct: false, feedback: "Family is something you HAVE, not something you ARE — use 'Tengo dos hermanos'." },
          { target: 'Tengo dos hermano.', native: 'I have two brother (singular).', correct: false, feedback: "Two of anything needs the plural — 'dos hermanos', not 'dos hermano'. Spanish is strict about plural agreement." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Qué bonito. Yo tengo cinco hijos y catorce nietos.',
        native: 'How lovely. I have five children and fourteen grandchildren.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Cinco hijos. Catorce nietos. Latin family scale, normal scale. And she's at fourteen and counting. You handled the masculine-plural trick like a pro.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I have two siblings (mixed group)', correct: ['Tengo dos hermanos', 'tengo dos hermanos'] },
      { prompt: 'I am an only child (male form)', correct: ['Soy hijo único', 'soy hijo único', 'Soy hijo unico', 'soy hijo unico'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe your real family in Spanish in two sentences. 'Tengo [number] hermanos/hermanas. Mis padres viven en [place].' If you're an only child, 'Soy hijo único / hija única'.",
    rwenSignoff: "Family is the whole world in Latin culture — and now you can sketch yours in Spanish. ¡Hasta mañana!",
  },

  phase8: {
    scenario: "Quinceañera prep party from Lesson 2 — Doña Lupe pulls you aside on the patio and wants to know about your family back home: parents, siblings, kids if any.",
    rwenRole: "Doña Lupe — same grandmother from Lesson 2, ~78, curious and persistent, will keep digging until she has a complete picture of your familia.",
    successCriteria: "User uses 'Tengo [number] hermanos/hermanas' (NOT 'Soy [number] hermanos'), correctly applies masculine plural for mixed-gender groups (or specifies feminine for all-female), uses 'mis padres' for parents, and 'Soy hijo único / hija única' if applicable. Distinguishes ser/estar/tener for family talk.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
