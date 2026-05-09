import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09',
  module: 6,
  lesson: 9,
  title: 'Ukuphila Kahle — Wellness',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "'Ukuphila kahle' = to live well. Wellness in isiNdebele isn't only about the body — it's a wider word that includes rest, food, family, and being right with the people around you. The Ndebele approach to staying healthy is layered: clinic care, traditional remedies, food discipline, community.",
    culturalNote: "In many Ndebele households, 'amasi' (sour milk) is treated as both food and medicine — daily, not just when ill. So is 'morogo' (greens), and 'mahewu' (fermented maize drink). When a Ndebele auntie tells you 'phuza amanzi, dlana kahle, phumula' (drink water, eat well, rest), she's giving you the same wellness triad public health campaigns push — except hers comes with the authority of generations.",
  },

  chunks: [
    {
      id: 'ukuphila_kahle',
      target: 'ukuphila kahle',
      native: 'to live well / be in good health',
      literal: 'uku-phila (to live) + kahle (well)',
      emoji: '🌱',
      phonetic: 'oo-koo-PEE-lah KAH-hleh',
      audioRef: null,
    },
    {
      id: 'phumula',
      target: 'Phumula.',
      native: 'Rest.',
      literal: 'imperative of "ukuphumula" (to rest)',
      emoji: '😴',
      phonetic: 'poo-MOO-lah',
      audioRef: null,
    },
    {
      id: 'phuza_amanzi',
      target: 'Phuza amanzi.',
      native: 'Drink water.',
      literal: 'phuza (drink) + amanzi (water, plural)',
      emoji: '💧',
      phonetic: 'POO-zah ah-MAHN-zee',
      audioRef: null,
    },
    {
      id: 'dlana_kahle',
      target: 'Dlana kahle.',
      native: 'Eat well.',
      literal: 'dlana (eat) + kahle (well)',
      emoji: '🥗',
      phonetic: 'DLAH-nah KAH-hleh',
      audioRef: null,
    },
    {
      id: 'inyanga',
      target: 'inyanga',
      native: 'traditional healer / herbalist',
      literal: 'in- (class 9) + yanga — same word as "moon" and "month"',
      emoji: '🌿',
      phonetic: 'in-YAN-gah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Wellness imperatives — short and kind',
    explanation: "isiNdebele expresses wellness advice with imperatives that sound caring rather than bossy. 'Phumula' (rest), 'phuza amanzi' (drink water), 'dlana kahle' (eat well). Add 'kancane' (a little) to soften further. Stack them with 'lo-' (and): 'phumula uphuze amanzi' (rest and drink water).",
    examples: [
      { target: 'Phumula kancane.', native: 'Rest a little.' },
      { target: 'Phuza amanzi futhi udle kahle.', native: 'Drink water and eat well.' },
      { target: 'Ngifuna ukuphila kahle.', native: 'I want to live well / be healthy.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the wellness phrase to its meaning',
      pairs: [
        { left: 'Phumula.', right: 'Rest.' },
        { left: 'Phuza amanzi.', right: 'Drink water.' },
        { left: 'Dlana kahle.', right: 'Eat well.' },
        { left: 'inyanga', right: 'traditional healer' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Drink water.',
      correct: ['Phuza amanzi', 'Phuza amanzi.', 'phuza amanzi'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the most culturally accurate framing',
      question: 'A Ndebele friend says her diabetic father sees both the clinic doctor AND an inyanga. What is your best response?',
      options: [
        { text: 'Kulungile — bobabili bayasiza ngezindlela ezehlukeneyo. (Both help in different ways.)', correct: true },
        { text: 'Inyanga ayisebenzi — kufanele ahambe edokotela kuphela. (Inyangas don\'t work — he should only see a doctor.)', correct: false },
        { text: 'Akahambeli idokotela — i-inyanga yodwa. (He shouldn\'t go to a doctor — only the inyanga.)', correct: false },
      ],
      explanation: "Many Ndebele families consult both healing traditions. Dismissing either side reads as either Western arrogance or anti-modern stubbornness. The respectful, grounded answer holds both.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "Rest and drink water"',
      sentence: 'Phumula ____ amanzi.',
      options: ['uphuze', 'phuza', 'amaphilisi'],
      correct: 'uphuze',
      context: '"uphuze" links the imperatives — "rest, [you should] drink water". The chained imperative form.',
    },
  ],

  rwenDialogue: {
    intro: "You're sitting with a Ndebele auntie in her garden in Pumula. She's pruning her medicinal plants — it's the perfect moment to ask about wellness.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mama, ngingaphila kanjani kahle?', native: 'Mama, how can I live well / stay healthy?', correct: true, feedback: "Respectful 'mama', open question. She'll give you a small lecture you'll remember for years." },
          { target: 'Health tips please.', native: '(English)', correct: false, feedback: "Try the Ndebele — 'Mama, ngingaphila kanjani kahle?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Phumula. Phuza amanzi. Dlana kahle — amasi, morogo, indlubu. Hambela idokotela nxa ugula — kodwa lami nginekhambi lami.',
        native: 'Rest. Drink water. Eat well — sour milk, greens, ground-nuts. Go to the doctor when you are sick — but I also have my remedies.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga makhulu — ngizothatha konke.', native: "Thank you very much — I'll take all of that.", correct: true, feedback: "You honoured both her food wisdom AND her ikhambi without shading either. That's the whole pattern." },
          { target: 'Hayi, ngithanda nje amaphilisi.', native: "No, I just like tablets.", correct: false, feedback: "Dismissive — and you'd be telling a Ndebele elder her wisdom doesn't count. Not the move." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wellness in isiNdebele is a layered cloth: rest, food, water, clinic, ikhambi, family. Take all the threads.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Rest.', correct: ['Phumula', 'Phumula.', 'phumula'] },
      { prompt: 'Drink water.', correct: ['Phuza amanzi', 'Phuza amanzi.', 'phuza amanzi'] },
      { prompt: 'Eat well.', correct: ['Dlana kahle', 'Dlana kahle.', 'dlana kahle'] },
      { prompt: 'traditional healer', correct: ['inyanga', 'Inyanga'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick ONE thing today: extra glass of water, a 20-minute walk, or 30 minutes earlier to bed. Tell yourself the reason in isiNdebele: 'Ngifuna ukuphila kahle.' Small acts, named in the language, build the muscle.",
    rwenSignoff: "Living well is its own daily practice. Sala kuhle.",
  },

  phase8: {
    scenario: "You're at a Sunday lunch with your host family in Bulawayo. Your host gogo (grandmother) starts telling you what foods and habits keep her strong at 78. She wants you to say back, in isiNdebele, what you'll do this week to live better.",
    rwenRole: "Gogo, 78, sharp-eyed, sees right through performative nodding. She'll keep asking 'kanti uzakwenzani?' (so what will YOU do?) until you commit to specifics.",
    successCriteria: "User commits to at least two concrete wellness actions in isiNdebele using the imperatives 'phumula', 'phuza amanzi', 'dlana kahle' (in 1st-person 'ngizo-' future form), and respectfully acknowledges her ikhambi without dismissing it.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
