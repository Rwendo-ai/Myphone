import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01',
  module: 6,
  lesson: 1,
  title: 'Ikhanda Lobuso — Head and Face',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Body parts in isiNdebele come with a noun-class prefix attached — 'i-khanda' (head), 'u-buso' (face), 'i-so' (eye). Don't strip those vowels off; they're part of the word, not articles.",
    culturalNote: "In Ndebele households, pointing at your own face or head while speaking is normal. Pointing AT someone else's head or face — especially an elder's — reads as confrontational. When describing someone, say 'ikhanda lakhe' (his/her head) and gesture broadly, not at them.",
  },

  chunks: [
    {
      id: 'ikhanda',
      target: 'ikhanda',
      native: 'head',
      literal: 'i- (class 5) + khanda (head)',
      emoji: '🗣️',
      phonetic: 'ee-KHAN-dah',
      audioRef: null,
    },
    {
      id: 'ubuso',
      target: 'ubuso',
      native: 'face',
      literal: 'u- (class 14) + buso (face)',
      emoji: '😊',
      phonetic: 'oo-BOO-soh',
      audioRef: null,
    },
    {
      id: 'iso_amehlo',
      target: 'iso / amehlo',
      native: 'eye / eyes',
      literal: 'i-so (singular) → ame-hlo (plural, irregular)',
      emoji: '👁️',
      phonetic: 'EE-soh / ah-MEH-hloh',
      audioRef: null,
    },
    {
      id: 'indlebe',
      target: 'indlebe',
      native: 'ear',
      literal: 'in- (class 9) + dlebe',
      emoji: '👂',
      phonetic: 'in-DLEH-beh',
      audioRef: null,
    },
    {
      id: 'ikhala',
      target: 'ikhala',
      native: 'nose',
      literal: 'i- (class 5) + khala',
      emoji: '👃',
      phonetic: 'ee-KHAH-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Body parts carry their noun-class prefix',
    explanation: "Every isiNdebele body part starts with a small vowel-prefix that signals its noun class: i- (ikhanda, iso, ikhala), u- (ubuso), in- (indlebe). Don't drop the prefix when speaking — 'khanda' alone sounds like baby-talk. The plural changes the prefix: iso → amehlo, indlebe → izindlebe.",
    examples: [
      { target: 'Ikhanda lami', native: 'My head' },
      { target: 'Ubuso bakho', native: 'Your face' },
      { target: 'Amehlo akhe', native: 'His/her eyes' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the body part to its meaning',
      pairs: [
        { left: 'ikhanda', right: 'head' },
        { left: 'ubuso', right: 'face' },
        { left: 'indlebe', right: 'ear' },
        { left: 'ikhala', right: 'nose' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type the isiNdebele word',
      prompt: 'eye (singular)',
      correct: ['iso', 'Iso'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct plural',
      question: 'What is the plural of "iso" (eye)?',
      options: [
        { text: 'amehlo', correct: true },
        { text: 'izinso', correct: false },
        { text: 'amaiso', correct: false },
      ],
      explanation: "iso → amehlo is one of the irregular plural pairs in isiNdebele. Worth memorising as a unit — the singular and plural don't share the same root visibly.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "My head"',
      sentence: '____ lami.',
      options: ['Ikhanda', 'Indlebe', 'Ikhala'],
      correct: 'Ikhanda',
      context: '"lami" = my (for class 5 nouns like ikhanda).',
    },
  ],

  rwenDialogue: {
    intro: "An auntie in Bulawayo is teaching her grandchild body parts. She invites you to follow along.",
    lines: [
      {
        speaker: 'npc',
        target: 'Khomba ikhanda lakho.',
        native: 'Point to your head.',
      },
      {
        speaker: 'rwen',
        rwenLine: "She's pointing at her own head — copy her. Now follow.",
      },
      {
        speaker: 'npc',
        target: 'Ubuso. Iso. Indlebe. Ikhala.',
        native: 'Face. Eye. Ear. Nose.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ikhanda, ubuso, iso, indlebe, ikhala.', native: 'Head, face, eye, ear, nose.', correct: true, feedback: "Clean. You kept every prefix in place — that's the move." },
          { target: 'Khanda, buso, so, dlebe, khala.', native: '(prefixes dropped)', correct: false, feedback: "Stripped prefixes sound infant-like. Always say the full 'ikhanda', 'ubuso', etc." },
          { target: 'Head, face, eye, ear, nose.', native: '(English)', correct: false, feedback: "She wants you in isiNdebele — try the full chunked list." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Five face-words locked. Tomorrow we leave the head and find the limbs.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'head', correct: ['ikhanda', 'Ikhanda'] },
      { prompt: 'face', correct: ['ubuso', 'Ubuso'] },
      { prompt: 'ear', correct: ['indlebe', 'Indlebe'] },
      { prompt: 'nose', correct: ['ikhala', 'Ikhala'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Stand at a mirror. Touch each part as you say it: ikhanda, ubuso, iso, indlebe, ikhala. Do it three times — out loud, with the prefixes intact.",
    rwenSignoff: "Body words always carry their prefix. Sala kuhle.",
  },

  phase8: {
    scenario: "You're babysitting your friend's two-year-old in Bulawayo. The toddler's gogo (grandmother) wants you to teach the child face-parts in isiNdebele while you play 'point to your...' games.",
    rwenRole: "The toddler's gogo, late 60s, kind but watching closely — she'll gently correct you if you drop a prefix or mix up a word.",
    successCriteria: "User correctly produces ikhanda, ubuso, iso, indlebe, ikhala with prefixes intact, and uses at least one possessive form like 'ikhanda lami' (my head).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
