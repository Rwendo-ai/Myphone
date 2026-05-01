import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-where-i-live',
  module: 3,
  lesson: 7,
  title: 'Saan ka nakatira? — Where I live',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Manila pantry. Lia tilts her head: 'Saan ka ba talaga nakatira?' Filipinos love this question — your address is your story. How long, what neighbourhood, do you like it. Today you tell them where home is.",
    culturalNote: "'Nakatira' (na-ka-TI-ra) means 'living' or 'residing' — from 'tira' (to stay, to reside). It's the standard verb for 'where do you live'. Length of time matters — 'limang taon na ako rito' (five years here already) signals commitment, which Filipinos warm to immediately. The little word 'na' = already.",
  },

  chunks: [
    {
      id: 'saan-ka-nakatira',
      target: 'Saan ka nakatira?',
      native: 'Where do you live?',
      literal: 'Where you living?',
      emoji: '🏠',
      phonetic: 'sa-AN ka na-ka-TI-ra',
      audioRef: null,
    },
    {
      id: 'nakatira-ako-sa-sydney',
      target: 'Nakatira ako sa Sydney',
      native: 'I live in Sydney',
      literal: 'Living I [marker] Sydney',
      emoji: '🌆',
      phonetic: 'na-ka-TI-ra a-KO sa SID-ni',
      audioRef: null,
    },
    {
      id: 'limang-taon-na-ako-rito',
      target: 'Limang taon na ako rito',
      native: "Five years here already",
      literal: 'Five year already I here',
      emoji: '📍',
      phonetic: 'LEE-mang ta-ON na a-KO ree-TO',
      audioRef: null,
    },
  ],

  pattern: {
    name: '`Nakatira sa` + place',
    explanation: "'Nakatira ako sa ___' = 'I live in ___' — slot any city, neighbourhood, or country. The 'sa' marker means 'in/at/on'. Time-on-the-spot uses '[number] taon na ako rito' (___ years here already). 'Rito' = here, 'doon' = there. 'Na' = already, your warmth-magnet word.",
    examples: [
      { target: 'Nakatira ako sa Maynila', native: 'I live in Manila' },
      { target: 'Tatlong taon na ako rito', native: 'Three years here already' },
      { target: 'Nakatira ako sa isang condo', native: 'I live in a condo' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Saan ka nakatira?', right: 'Where do you live?' },
        { left: 'Nakatira ako sa Sydney', right: 'I live in Sydney' },
        { left: 'Limang taon na ako rito', right: 'Five years here already' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the location frame',
      sentence: 'Nakatira ako ___ Sydney.',
      options: ['sa', 'ang', 'si'],
      correct: 'sa',
      context: "'Sa' is the location marker — used for 'in/at/on'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Where do you live?',
      correct: ['Saan ka nakatira?', 'saan ka nakatira'],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell Lia how long you have been in Manila — put the words in order',
      words: ['ako', 'na', 'rito', 'taon', 'Limang'],
      correct: ['Limang', 'taon', 'na', 'ako', 'rito'],
      translation: 'Five years here already',
    },
    {
      type: 'multiple_choice',
      instruction: "Lia asks where you live. You live in Sydney and have been there 5 years. What's the warmest answer?",
      question: 'Choose the fullest reply',
      options: [
        { text: 'Nakatira ako sa Sydney. Limang taon na ako roon.', correct: true },
        { text: 'Saan ka nakatira?', correct: false },
        { text: 'Ako si Sydney.', correct: false },
      ],
      explanation: "Lead with the place, then add the duration. 'Roon' = there (Sydney is far from where you're standing in Manila).",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I live in Sydney',
      correct: ['Nakatira ako sa Sydney', 'nakatira ako sa sydney'],
    },
  ],

  rwenDialogue: {
    intro: "Lunch break in the Makati office. Lia walks over with her tupperware and sits across from you, curious about your life back home.",
    lines: [
      {
        speaker: 'npc',
        target: 'Saan ka ba talaga nakatira?',
        native: 'Where do you actually live?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nakatira ako sa Sydney. Limang taon na ako roon.', native: 'I live in Sydney. Five years there already.', correct: true, feedback: "Beautiful — place, then time. The 'na' adds that 'already' warmth Filipinos love." },
          { target: 'Sa Sydney.', native: 'In Sydney.', correct: false, feedback: 'Too short — Filipinos expect a fuller answer. Add the duration.' },
          { target: 'Saan ka nakatira?', native: 'Where do you live?', correct: false, feedback: 'You echoed the question instead of answering.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wow, ang tagal na pala!',
        native: "Wow, that's a long time already!",
      },
      {
        speaker: 'rwen',
        rwenLine: "She heard the years and the 'na' — that little word made your sentence feel grounded. You're not just visiting; you have roots.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Where do you live? (in Tagalog)', correct: ['Saan ka nakatira?', 'saan ka nakatira'] },
      { prompt: 'I live in Sydney (in Tagalog)', correct: ['Nakatira ako sa Sydney', 'nakatira ako sa sydney'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe your home in two Tagalog sentences. 'Nakatira ako sa ___. ___ taon na ako rito.' Out loud. The 'na' is the secret ingredient.",
    rwenSignoff: "I'll ask you tomorrow. Ingat — go well.",
  },

  phase8: {
    scenario: "Friday lunch in the Makati office canteen. Lia sits across from you with her sinigang and wants the full picture of your home life — what city, how long, what neighbourhood, do you actually like it there.",
    rwenRole: "Lia — your Manila colleague, late 20s, full of curiosity about life abroad; she'll ask layered follow-ups about your neighbourhood and how it compares to Manila.",
    successCriteria: "User states their city using 'Nakatira ako sa ___', adds duration with '___ taon na ako roon/rito', and answers at least one follow-up about whether they like it or what their neighbourhood is like.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
