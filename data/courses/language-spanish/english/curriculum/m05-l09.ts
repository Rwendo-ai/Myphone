import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-mi-familia',
  module: 5,
  lesson: 9,
  title: 'Mi Familia — Talking About Your Family',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You now have the vocabulary. Today we put it into the sentences Spanish speakers actually use to introduce family. Three structures will carry you through almost any first conversation.",
    culturalNote: "Latin Americans love hearing about family from foreigners. It's one of the fastest social warm-ups in the language. Learning how to describe your padres, hermanos, and abuelos in Spanish is more useful in a Sunday almuerzo than any travel phrase.",
  },

  chunks: [
    {
      id: 'tengo',
      target: 'Tengo una familia grande',
      native: 'I have a big family',
      literal: 'I-have a family big',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'TEN-goh OO-nah fah-MEE-lyah GRAHN-deh',
      audioRef: null,
    },
    {
      id: 'somos',
      target: 'Somos cinco en mi familia',
      native: 'There are five of us in my family',
      literal: 'We-are five in my family',
      emoji: '🖐️',
      phonetic: 'SOH-mohs SEEN-koh en mee fah-MEE-lyah',
      audioRef: null,
    },
    {
      id: 'amo',
      target: 'Amo a mi familia',
      native: 'I love my family',
      literal: 'I-love TO my family ("a" personal before people)',
      emoji: '❤️',
      phonetic: 'AH-moh ah mee fah-MEE-lyah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The "personal a" before people',
    explanation: "When the direct object of a verb is a person, Spanish inserts 'a' before it: 'Amo A mi familia' (I love my family). 'Veo A mi padre' (I see my father). With objects you skip it: 'Veo la casa' (I see the house). It's invisible to English ears but Spanish speakers expect it.",
    examples: [
      { target: 'Amo a mi familia', native: 'I love my family (person → "a")' },
      { target: 'Visito a mis abuelos', native: 'I visit my grandparents (person → "a")' },
      { target: 'Veo la casa', native: 'I see the house (object → no "a")' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Spanish sentence to its meaning',
      pairs: [
        { left: 'Tengo una familia grande', right: 'I have a big family' },
        { left: 'Somos cinco en mi familia', right: 'There are five of us' },
        { left: 'Amo a mi familia', right: 'I love my family' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete with the personal "a" if needed',
      sentence: 'Visito _____ mis abuelos cada domingo.',
      options: ['a', 'la', '(nothing)'],
      correct: 'a',
      context: 'The direct object is a person (grandparents) — use the personal "a".',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I love my family',
      correct: ['Amo a mi familia', 'amo a mi familia'],
    },
    {
      type: 'multiple_choice',
      instruction: "Which sentence is grammatically correct?",
      question: 'Pick the right one:',
      options: [
        { text: 'Veo a mi madre', correct: true },
        { text: 'Veo mi madre', correct: false },
        { text: 'Veo la mi madre', correct: false },
      ],
      explanation: "'Madre' is a person, so the direct object needs the personal 'a'. 'Veo la casa' (no 'a') but 'Veo a mi madre' (with 'a').",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "There are six of us in my family"',
      words: ['Somos', 'seis', 'en', 'mi', 'familia.'],
      correct: ['Somos', 'seis', 'en', 'mi', 'familia.'],
      translation: 'There are six of us in my family',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I have a big family',
      correct: ['Tengo una familia grande', 'tengo una familia grande'],
    },
  ],

  rwenDialogue: {
    intro: "After the asado, tío Roberto pours another glass of Malbec and asks the question every Latin American family eventually asks.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Tío te quiere saber — cuéntale de tu familia. ¿Cuántos son? ¿Dónde viven?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Somos cinco en mi familia. Tengo dos hermanos. Amo a mi familia.', native: 'There are five of us. I have two brothers. I love my family.', correct: true, feedback: "Three structures, all clean — count, relationships, feeling. And you nailed the personal 'a' before 'mi familia'." },
          { target: 'Familia grande', native: 'Big family (fragment)', correct: false, feedback: "Use a full sentence — 'Tengo una familia grande. Somos cinco.' Sentences carry, fragments fall flat at a Latin American table." },
          { target: 'Amo mi familia', native: 'I love my family (missing personal "a")', correct: false, feedback: "Add the personal 'a' before people — 'Amo A mi familia.' Without it, the sentence sounds slightly off to a native ear." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hablás como si fueras de acá. Tío está sonriendo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I have a big family', correct: ['Tengo una familia grande', 'tengo una familia grande'] },
      { prompt: 'I love my family', correct: ['Amo a mi familia', 'amo a mi familia'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe your real family in three Spanish sentences: (1) size — 'Somos ___ en mi familia.' (2) people — 'Tengo ___ hermanos / hijos / abuelos.' (3) feeling — 'Amo a mi familia.' Say it out loud. That's your introduction at any Latin American table.",
    rwenSignoff: "La familia es lo primero. Hasta luego.",
  },

  phase8: {
    scenario: "Late at the asado, the embers are dying and tía Lucía settles in next to you with maté and asks for the full story. '¿Y tu familia, contame todo?' (porteña 'contame' = 'tell me'). She wants count, names, where they live, and whether you love them. Three sentences minimum, in Spanish, no rushing.",
    rwenRole: "Tía Lucía — at the asado, ~50, in storytelling mode now; she'll listen for the personal 'a' and notice if you skip it.",
    successCriteria: "User produces all three target structures: 'Tengo una familia [grande/pequeña]' or 'Somos [N] en mi familia' (size), names at least one specific relative, and uses 'Amo A mi familia' WITH the personal 'a' (NOT 'Amo mi familia').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
