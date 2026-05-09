import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05',
  module: 2,
  lesson: 5,
  title: 'Uphuma ngaphi? — Where are you from?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After your name, the next question is almost always about origin. 'Uphuma ngaphi?' — Where do you come from? In Zimbabwe this isn't small talk; it's how people place you. The reply needs the verb 'ngiphuma' (I come from) followed by the place.",
    culturalNote: "In Bulawayo and Matabeleland, 'where are you from' often means three things stacked: where do you live now, what's your home village/area, and what's your clan. New acquaintances are usually asking the first one. If you're a foreigner, naming your country is fine — but bonus points for adding which suburb of Bulawayo (or city) you're staying in. People love hearing that you've actually settled somewhere specific.",
  },

  chunks: [
    {
      id: 'uphuma_ngaphi',
      target: 'Uphuma ngaphi?',
      native: 'Where are you from? (singular)',
      literal: 'You-come-from where?',
      emoji: '🌍',
      phonetic: 'oo-POO-mah ngah-PEE',
      audioRef: null,
    },
    {
      id: 'ngiphuma',
      target: 'Ngiphuma e...',
      native: 'I come from...',
      literal: 'I-come-from at-(place)',
      emoji: '🛬',
      phonetic: 'ng-ee-POO-mah eh',
      audioRef: null,
    },
    {
      id: 'eBulawayo',
      target: 'eBulawayo',
      native: 'in/from Bulawayo',
      literal: 'e- prefix = at/in (locative)',
      emoji: '🏙️',
      phonetic: 'eh-boo-lah-WAH-yoh',
      audioRef: null,
    },
    {
      id: 'eUK',
      target: 'eUK / eAmerica',
      native: 'in/from the UK / America',
      literal: 'e- + country name',
      emoji: '✈️',
      phonetic: 'eh-yoo-kay / eh-ah-MEH-ree-kah',
      audioRef: null,
    },
    {
      id: 'kodwa_manje',
      target: 'kodwa manje ngihlala e-',
      native: 'but now I live in...',
      literal: 'but now I-stay in-',
      emoji: '🏠',
      phonetic: 'KOH-dwah MAH-njeh ng-ee-HLAH-lah eh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The "e-" locative prefix',
    explanation: "Place names in Ndebele almost always take an 'e-' prefix when used after location verbs. 'Bulawayo' becomes 'eBulawayo' (in/at/from Bulawayo). 'America' becomes 'eAmerica'. The prefix carries the location meaning, so you don't need a separate word for 'in' or 'at' or 'from' — context and the verb do the rest.",
    examples: [
      { target: 'Ngiphuma eBulawayo.', native: 'I come from Bulawayo.' },
      { target: 'Ngiphuma eUK, kodwa manje ngihlala eHarare.', native: "I come from the UK, but now I live in Harare." },
      { target: 'Uphuma ngaphi?', native: 'Where are you from?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match phrase to meaning',
      pairs: [
        { left: 'Uphuma ngaphi?', right: 'Where are you from?' },
        { left: 'Ngiphuma e-', right: 'I come from...' },
        { left: 'eBulawayo', right: 'in / from Bulawayo' },
        { left: 'kodwa manje ngihlala', right: 'but now I live (in)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Add the locative prefix',
      sentence: 'Ngiphuma ____ Bulawayo.',
      options: ['e', 'ngu', 'wena'],
      correct: 'e',
      context: "You're telling someone where you're from.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I come from the UK but now I live in Bulawayo"',
      words: ['eUK,', 'eBulawayo.', 'kodwa manje ngihlala', 'Ngiphuma'],
      correct: ['Ngiphuma', 'eUK,', 'kodwa manje ngihlala', 'eBulawayo.'],
      translation: 'I come from the UK, but now I live in Bulawayo.',
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'Where are you from?',
      correct: ['Uphuma ngaphi', 'uphuma ngaphi', 'Uphuma ngaphi?', 'uphuma ngaphi?'],
    },
  ],

  rwenDialogue: {
    intro: "You've just finished introducing yourself to a vendor at a craft market in Bulawayo. She's curious — your accent is unfamiliar.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bowen — kuhle. Uphuma ngaphi?',
        native: 'Bowen — nice. Where are you from?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiphuma eUK, kodwa manje ngihlala eBulawayo.', native: 'I come from the UK, but now I live in Bulawayo.', correct: true, feedback: "She nods, smiles. Naming the suburb you're in tells her you've actually settled — that lands warm." },
          { target: 'eUK.', native: 'UK.', correct: false, feedback: "Brief — but you skipped the verb. 'Ngiphuma eUK' is the full phrase she's expecting." },
          { target: 'Igama lami nguBowen.', native: 'My name is Bowen.', correct: false, feedback: "You already gave your name. She's asking origin now, not introduction." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Aaa, kuhle. Uyathanda iBulawayo?',
        native: 'Ah, good. Do you like Bulawayo?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yebo, ngiyabonga.', native: 'Yes, thank you.', correct: true, feedback: "Soft and warm. The conversation can keep flowing from here." },
          { target: 'Hatshi.', native: 'No.', correct: false, feedback: "Bare 'no' to 'do you like our city' is a hard stop. Even if you don't, soften it later." },
          { target: 'Uphuma ngaphi?', native: 'Where are you from?', correct: false, feedback: "Too soon to flip the question — answer hers first, then bounce later." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice the prefix — eUK, eBulawayo. The 'e' does all the work that English uses 'in' and 'from' for. One letter, two jobs.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Where are you from?', correct: ['Uphuma ngaphi', 'uphuma ngaphi', 'Uphuma ngaphi?', 'uphuma ngaphi?'] },
      { prompt: 'I come from Bulawayo', correct: ['Ngiphuma eBulawayo', 'ngiphuma eBulawayo', 'Ngiphuma eBulawayo.', 'ngiphuma eBulawayo.'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell one person today — in Ndebele — where you live. 'Ngihlala e-[suburb/city].' Even one sentence. Pay attention to how their face shifts when they hear a place they know.",
    rwenSignoff: "Place is identity here. Name yours and you're suddenly easier to know. Sala kuhle.",
  },

  phase8: {
    scenario: "You're sitting next to a stranger on a long-distance kombi from Bulawayo to Harare. After basic greetings he asks where you're from. Tell him — including where you originally come from AND where you're currently staying.",
    rwenRole: "Mthulisi — 40s, accountant, chatty traveller; will follow up by asking which suburb you live in and what brought you to Zimbabwe; mildly impressed if you give specifics rather than just 'America' or 'Europe'.",
    successCriteria: "User uses 'Ngiphuma e-[country]' format, then adds 'kodwa manje ngihlala e-[city/suburb]' for current home, and asks 'Wena?' back to find out where he's from.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
