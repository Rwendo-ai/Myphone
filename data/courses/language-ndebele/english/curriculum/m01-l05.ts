import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05',
  module: 1,
  lesson: 5,
  title: 'Click + Vowel Combinations',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "A click on its own is just a sound. Add a vowel and it becomes a syllable — a building block of every isiNdebele word. ca, ce, ci, co, cu — all five vowels work with all three clicks. Fifteen syllables. You already know how.",
    culturalNote: "Ndebele children learn click syllables the way English children learn 'ba, be, bi, bo, bu'. There is no special drill for clicks — they are taught alongside the other consonants from the very first day of school. The only difference is that the alphabet poster on the wall has tiny pictures next to c, q and x: a tooth, a popping bottle, a horse.",
  },

  chunks: [
    {
      id: 'ca_ce_ci',
      target: 'ca · ce · ci · co · cu',
      native: 'the c-click followed by each of the five vowels',
      emoji: '🦷',
      phonetic: '[c-click]ah · [c-click]eh · [c-click]ee · [c-click]oh · [c-click]oo',
      audioRef: null,
    },
    {
      id: 'qa_qe_qi',
      target: 'qa · qe · qi · qo · qu',
      native: 'the q-click followed by each vowel',
      emoji: '🍾',
      phonetic: '[q-click]ah · [q-click]eh · [q-click]ee · [q-click]oh · [q-click]oo',
      audioRef: null,
    },
    {
      id: 'xa_xe_xi',
      target: 'xa · xe · xi · xo · xu',
      native: 'the x-click followed by each vowel',
      emoji: '🐴',
      phonetic: '[x-click]ah · [x-click]eh · [x-click]ee · [x-click]oh · [x-click]oo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Click + vowel = one syllable',
    explanation: "A click and the vowel after it form one smooth syllable, not two beats. The click is the consonant, the vowel is the vowel — exactly like 'ba' is one syllable, not 'b' + 'a'. Don't pause between them. The vowel must spring out of the click while the air is still moving.",
    examples: [
      { target: 'ca', native: '[c-click] + ah' },
      { target: 'qo', native: '[q-click] + oh' },
      { target: 'xu', native: '[x-click] + oo' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the click syllable to its description',
      pairs: [
        { left: 'ca', right: 'dental click + ah' },
        { left: 'qo', right: 'palatal click + oh' },
        { left: 'xu', right: 'lateral click + oo' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'How many click + vowel syllables exist in isiNdebele (3 clicks × 5 vowels)?',
      options: [
        { text: '15',  correct: true },
        { text: '5',   correct: false },
        { text: '3',   correct: false },
      ],
      explanation: "Three clicks, five vowels (a, e, i, o, u), so 3 × 5 = 15 click syllables. You'll meet all of them in the coming lessons.",
    },
    {
      type: 'translate',
      instruction: 'Which click syllable is "lateral click + ee"?',
      prompt: 'lateral + ee',
      correct: ['xi', 'Xi'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'Should the click and the vowel be said as two separate beats?',
      options: [
        { text: 'No — they are one smooth syllable.',                  correct: true },
        { text: 'Yes — click first, pause, then vowel.',               correct: false },
        { text: 'Only if the vowel is "u".',                            correct: false },
      ],
      explanation: "Click + vowel is a single syllable. The vowel rides out on the air released by the click, with no gap.",
    },
  ],

  rwenDialogue: {
    intro: 'Rwen runs you through a quick syllable drill — three clicks, all five vowels, no real words yet.',
    lines: [
      { speaker: 'rwen', rwenLine: "Repeat after me — slowly. ca, ce, ci, co, cu." },
      { speaker: 'npc',  target: 'ca · ce · ci · co · cu', native: "[c-click] + every vowel" },
      { speaker: 'rwen', rwenLine: "Now the q. Sharper, higher. qa, qe, qi, qo, qu." },
      { speaker: 'npc',  target: 'qa · qe · qi · qo · qu', native: "[q-click] + every vowel" },
      { speaker: 'rwen', rwenLine: "And the x. From the side. xa, xe, xi, xo, xu." },
      { speaker: 'npc',  target: 'xa · xe · xi · xo · xu', native: "[x-click] + every vowel" },
    ],
  },

  activeRecall: {
    instruction: 'Without looking up, recall.',
    prompts: [
      { prompt: 'How many click + vowel syllables are there in total?',     correct: ['15', 'fifteen'] },
      { prompt: 'Is "ca" one syllable or two beats?',                       correct: ['one', 'one syllable', '1', 'one beat'] },
      { prompt: 'Which click is in the syllable "qo" — c, q, or x?',        correct: ['q', 'Q'] },
    ],
  },

  mission: {
    title: 'The fifteen syllables',
    task: "Out loud, read all fifteen click syllables top to bottom: ca ce ci co cu, qa qe qi qo qu, xa xe xi xo xu. Time yourself. Aim under 20 seconds. Tomorrow, aim under 15.",
    rwenSignoff: "Once these fifteen syllables feel automatic, every Ndebele word with a click is just two or three of them stuck together.",
  },

  phase8: {
    scenario: "Rwen calls out vowels one by one and tells you which click to put in front. You produce the syllable.",
    rwenRole: "Patient drill instructor — calls things out fast but never criticises a missed click",
    successCriteria: "User correctly produced at least three click + vowel syllables across two different clicks.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
