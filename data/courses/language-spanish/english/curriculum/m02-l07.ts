import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l07-si-no-quizas',
  module: 2,
  lesson: 7,
  title: 'Sí / No / Quizás — Yes, No, Maybe',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three of the first words anyone learns. But Spanish 'yes' and 'no' carry the conversation differently than English. And 'quizás' — maybe — has its own rhythm. Get these tight.",
    culturalNote: "In Latin America, a flat 'no' can feel abrupt — many speakers soften it ('no, gracias' or 'la verdad, no...'). 'Sí' is often warmed with 'claro' (of course) or 'sí, sí, sí' for enthusiasm. And 'quizás' / 'tal vez' (maybe) is an honest middle ground — not the wishy-washy hedge it sometimes is in English. In Mexican Spanish 'ahorita' can also stand in for a vague maybe-yes — 'ahorita lo hago' might mean now, in an hour, or never.",
  },

  chunks: [
    {
      id: 'si',
      target: 'Sí',
      native: 'Yes',
      literal: 'Yes',
      emoji: '✅',
      phonetic: 'see',
      audioRef: null,
    },
    {
      id: 'no',
      target: 'No',
      native: 'No',
      literal: 'No',
      emoji: '🚫',
      phonetic: 'noh',
      audioRef: null,
    },
    {
      id: 'quizas',
      target: 'Quizás / Tal vez',
      native: 'Maybe / Perhaps',
      literal: 'Maybe / Such time',
      emoji: '🤷',
      phonetic: 'kee-SAS / tal vehs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Softening sí and no',
    explanation: "Bare 'sí' and 'no' work, but pairing them with one extra word reads warmer. 'Sí, claro' (yes, of course). 'No, gracias' (no, thanks). 'Quizás' and 'tal vez' are interchangeable — pick whichever rolls off the tongue. Both are honest, neither is dismissive.",
    examples: [
      { target: 'Sí, claro', native: 'Yes, of course' },
      { target: 'No, gracias', native: 'No, thanks' },
      { target: 'Tal vez mañana', native: 'Maybe tomorrow' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Sí, claro', right: 'Yes, of course' },
        { left: 'No, gracias', right: 'No, thanks' },
        { left: 'Tal vez', right: 'Maybe / Perhaps' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Soften the no',
      sentence: 'No, _____.',
      options: ['gracias', 'por favor', 'sí'],
      correct: 'gracias',
      context: 'A street vendor offers you something you don\'t want.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Maybe / Perhaps (one word)',
      correct: ['Quizás', 'quizás', 'Quizas', 'quizas', 'Tal vez', 'tal vez'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone invites you to a party next weekend. You're not sure yet. What's the honest reply?",
      question: 'Choose the cleanest answer',
      options: [
        { text: 'Tal vez. Te aviso.', correct: true },
        { text: 'Sí, claro', correct: false },
        { text: 'No, gracias', correct: false },
      ],
      explanation: "'Tal vez. Te aviso.' (maybe — I'll let you know) is honest and leaves the door open. 'Sí' commits you; 'no' shuts it down.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Yes, of course"',
      words: ['claro', 'Sí,'],
      correct: ['Sí,', 'claro'],
      translation: 'Yes, of course',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'No, thanks',
      correct: ['No, gracias', 'no, gracias'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a café in Buenos Aires. The waiter has just brought your medialuna. He's offering more.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Le traigo otro café? ¿O tal vez una factura más?',
        native: "Can I bring you another coffee? Or maybe one more pastry?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'No, gracias. Estoy bien.', native: "No, thanks. I'm good.", correct: true, feedback: "Soft and clear — declines without shutting him down. Perfect register." },
          { target: 'No', native: 'No', correct: false, feedback: "Bare 'no' lands cold here. 'No, gracias' is the standard polite refusal." },
          { target: 'Sí, claro', native: 'Yes, of course', correct: false, feedback: "That commits you to another coffee AND another pastry. If you only want one, be specific." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Perfecto. ¿La cuenta entonces?',
        native: 'Perfect. The bill, then?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sí, por favor.', native: 'Yes, please.', correct: true, feedback: "Direct, polite, done. He nods and walks off." },
          { target: 'Tal vez', native: 'Maybe', correct: false, feedback: "Don't 'maybe' the bill — you've finished. 'Sí, por favor' is the right call." },
          { target: 'No, gracias', native: 'No, thanks', correct: false, feedback: "That declines the bill — meaning you're staying longer. If you're leaving, say 'sí, por favor'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Three words, three different decisions, three different replies. You navigated all of them. That's real conversation.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'No, thanks', correct: ['No, gracias', 'no, gracias'] },
      { prompt: 'Maybe / Perhaps', correct: ['Quizás', 'quizás', 'Quizas', 'quizas', 'Tal vez', 'tal vez'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice every yes-no-maybe decision you make today. Translate it silently. Was it 'sí, claro' or just 'sí'? 'No, gracias' or just 'no'? Match the warmth to the moment.",
    rwenSignoff: "Honest answers — soft delivery. ¡Buen camino!",
  },

  phase8: {
    scenario: "You're at a porteño café in Palermo, Buenos Aires. You've finished your café cortado and a single medialuna and the waiter is now upselling — more coffee, another pastry, the dessert cart, a digestif. You need to decline some, accept the bill, leave a tip. Run the full sí/no/quizás chain.",
    rwenRole: "Mauricio — ~30, café waiter in Palermo, friendly and chatty in the porteño style; he'll keep offering until you give him a clear no, but won't take a bare 'no' as anything but rude.",
    successCriteria: "User softens refusals with 'No, gracias' (NOT bare 'no'), uses 'Tal vez' or 'Quizás' to defer the dessert offer ('next time'), and accepts the bill clearly with 'Sí, por favor' — three different registers used in one conversation.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
