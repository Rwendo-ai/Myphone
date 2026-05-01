import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-hunger',
  module: 7,
  lesson: 4,
  title: 'Ndine Nzara — Hunger & Appetite',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Knowing how to say you're hungry or full is more than comfort — in Shona culture it's about connection. When someone asks 'Wambodya here?' (Have you eaten?), they're really asking 'Are you okay? Am I caring for you?'",
    culturalNote: "'Wambodya here?' (Have you eaten?) is one of the most common caring questions in Zimbabwe. It's not just about food — it's checking on your wellbeing. Saying 'Handina' (I haven't) will immediately trigger an offer of food.",
  },

  chunks: [
    {
      id: 'ndine_nzara',
      target: 'Ndine nzara',
      native: 'I am hungry',
      literal: 'I-have hunger',
      emoji: '😋',
      phonetic: 'ndi-ne NZA-ra',
      audioRef: null,
    },
    {
      id: 'ndaguta',
      target: 'Ndaguta',
      native: 'I am full / I have eaten enough',
      literal: 'I-am-satisfied',
      emoji: '😌',
      phonetic: 'nda-GU-ta',
      audioRef: null,
    },
    {
      id: 'wambodya',
      target: 'Wambodya here?',
      native: 'Have you eaten? (caring question)',
      literal: 'You-already-ate here?',
      emoji: '🍽️',
      phonetic: 'wam-bo-DYA HE-re',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndine nzara / Ndaguta — hunger vs fullness',
    explanation: "Ndine nzara (I have hunger = I am hungry) vs Ndaguta (I am satisfied/full). 'Ndaguta' uses the past tense of -guta (to be satisfied) — I have become satisfied. It's a statement of current state through past action.",
    examples: [
      { target: 'Ndine nzara', native: 'I am hungry (I have hunger)' },
      { target: 'Ndaguta', native: 'I am full (I have become satisfied)' },
      { target: 'Wambodya here?', native: 'Have you already eaten?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ndine nzara', right: 'I am hungry' },
        { left: 'Ndaguta', right: 'I am full' },
        { left: 'Wambodya here?', right: 'Have you eaten?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you have eaten enough',
      sentence: 'Nda_____, ndatenda.',
      options: ['guta', 'enda', 'taura'],
      correct: 'guta',
      context: "I'm full, thank you.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am hungry',
      correct: ['Ndine nzara', 'ndine nzara'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'Wambodya here?' — what are they really asking?",
      question: "Wambodya here? really means:",
      options: [
        { text: 'Are you okay? Have I cared for you?', correct: true },
        { text: 'What did you eat?', correct: false },
        { text: 'Are you hungry now?', correct: false },
      ],
      explanation: "It's a care question, not just about food. It means: have I fulfilled my hosting duty and are you well-fed?",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am hungry, I want sadza'",
      words: ['Ndine', 'nzara,', 'ndinoda', 'sadza.'],
      correct: ['Ndine', 'nzara,', 'ndinoda', 'sadza.'],
      translation: 'I am hungry, I want sadza',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am full / I have eaten enough',
      correct: ['Ndaguta', 'ndaguta'],
    },
  ],

  rwenDialogue: {
    intro: "You arrive at Rwen's home. His mother asks the most caring question.",
    lines: [
      {
        speaker: 'npc',
        target: 'Wambodya here, mwanangu?',
        native: 'Have you eaten, my child?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Handina, Amai. Ndine nzara zvishoma.', native: "I haven't, Mother. I am a little hungry.", correct: true, feedback: "Honest and gentle. The mother immediately goes to prepare food. That's how it works." },
          { target: 'Ndaguta, ndatenda', native: "I'm full, thank you", correct: false, feedback: "If you haven't eaten, be honest — 'Handina, Amai.' Refusing food you need is not polite in this context." },
          { target: 'Zvakanaka', native: "I'm fine", correct: false, feedback: "Answer directly — 'Handina, Amai. Ndine nzara.' — I haven't, Mother. I'm hungry." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Amai vanoenda kugadzira sadza ipapo ipapo. That answer released hospitality.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am hungry', correct: ['Ndine nzara', 'ndine nzara'] },
      { prompt: 'I am full', correct: ['Ndaguta', 'ndaguta'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, before every meal, say 'Ndine nzara' (I am hungry). After, say 'Ndaguta' (I am full). Connect these words to the actual feeling.",
    rwenSignoff: "Hunger and fullness — the rhythm of daily life. Famba zvakanaka.",
  },

  phase8: {
    scenario: "It's mid-morning at a kombi stop near Mbare Musika and you've been travelling since dawn. A relative meeting you off the kombi notices you look tired, and immediately asks the universal Zimbabwean wellness check — 'Wambodya here?' — before they'll even let you climb into the car.",
    rwenRole: "Tete (auntie) Tendai — middle-aged, no-nonsense, the kind of relative who treats hunger as something to be solved within ten minutes; she'll detour straight to a tuckshop if the answer is wrong.",
    successCriteria: "User answers honestly with 'Handina, ndine nzara' if hungry (NOT a polite Western 'I'm fine'), or 'Ndaguta, ndatenda' if genuinely full — and understands that Tete is asking about wellbeing, not making small talk.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
