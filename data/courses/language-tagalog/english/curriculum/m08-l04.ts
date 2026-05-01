import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-want-need',
  module: 8,
  lesson: 4,
  title: 'Gusto, Kailangan, Pwede — Want, Need, Can',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three little words that buy you whole conversations: **gusto** (want), **kailangan** (need), and **pwede** (may/can). Filipinos use these to soften almost every request — going straight to demands feels rough.",
    culturalNote: "Filipino culture leans on softeners. Instead of 'Give me coffee', you say 'Gusto ko ng kape' (I want coffee) or 'Pwede ba akong umorder?' (May I order?). Politeness is built into the verb scaffolding.",
  },

  chunks: [
    {
      id: 'gusto_ko_kape',
      target: 'Gusto ko ng kape',
      native: 'I want coffee',
      literal: 'Want by-me of-coffee',
      emoji: '☕',
      phonetic: 'gus-TO ko nang KA-pe',
      audioRef: null,
    },
    {
      id: 'kailangan_ko_pahinga',
      target: 'Kailangan ko ng pahinga',
      native: 'I need rest',
      literal: 'Need by-me of-rest',
      emoji: '😴',
      phonetic: 'ka-i-LA-ngan ko nang pa-HING-a',
      audioRef: null,
    },
    {
      id: 'pwede_ba',
      target: 'Pwede ba?',
      native: 'May I? / Can I? / Is it okay?',
      literal: 'Possible question?',
      emoji: '🙏',
      phonetic: 'PWE-de ba',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Gusto / Kailangan / Pwede',
    explanation: "Gusto and kailangan take ko (by me) + ng (object marker) + thing. Pwede + ba = soft 'may I?'. Notice: there's no separate 'I' acting — Tagalog says 'Want by-me of-coffee'. It's a different shape, but easy once it clicks.",
    examples: [
      { target: 'Gusto ko ng tubig', native: 'I want water' },
      { target: 'Kailangan mo ng tulong?', native: 'Do you need help?' },
      { target: 'Pwede ba akong umupo dito?', native: 'May I sit here?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Gusto ko ng kape', right: 'I want coffee' },
        { left: 'Kailangan ko ng pahinga', right: 'I need rest' },
        { left: 'Pwede ba?', right: 'May I? / Can I?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're exhausted after a long day.",
      sentence: '_____ ko ng pahinga.',
      options: ['Kailangan', 'Gusto', 'Pwede'],
      correct: 'Kailangan',
      context: "Kailangan = need (deeper than gusto = want).",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I want coffee',
      correct: ['Gusto ko ng kape', 'gusto ko ng kape'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to politely ask "May I?"',
      words: ['ba', 'Pwede'],
      correct: ['Pwede', 'ba'],
      translation: 'May I? / Can I?',
    },
    {
      type: 'multiple_choice',
      instruction: "You want to ask the waiter if you can sit at a window seat.",
      question: 'Which is the most polite opener?',
      options: [
        { text: 'Pwede ba akong umupo dito?', correct: true },
        { text: 'Gusto ko', correct: false },
        { text: 'Kailangan ko', correct: false },
      ],
      explanation: "Pwede ba = the universal Filipino soft request. Gusto/kailangan would feel too direct here.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I need rest',
      correct: ['Kailangan ko ng pahinga', 'kailangan ko ng pahinga'],
    },
  ],

  rwenDialogue: {
    intro: "You walk up to the counter at a Manila café. The barista smiles at you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hi po, ano po order ninyo?',
        native: 'Hi, what would you like to order?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Gusto ko ng kape, salamat', native: 'I want coffee, thanks', correct: true, feedback: 'Polite, clear, exactly the rhythm.' },
          { target: 'Kape!', native: 'Coffee!', correct: false, feedback: 'A bit blunt — soften with gusto.' },
          { target: 'Pwede ba?', native: 'May I?', correct: false, feedback: "Too vague — may you what? Pair it with what you want." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige po, sandali lang.',
        native: 'Sure, just a moment.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Three softeners. They turn requests into conversations. You'll lean on these forever.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I want coffee (in Tagalog)', correct: ['Gusto ko ng kape', 'gusto ko ng kape'] },
      { prompt: 'May I? / Can I? (in Tagalog)', correct: ['Pwede ba?', 'pwede ba', 'Pwede ba'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Order one thing today — coffee, water, anything — using gusto ko ng. Or ask one favour with pwede ba. One real ask, in Tagalog.',
    rwenSignoff: 'Pwede ba — keep practicing.',
  },

  phase8: {
    scenario: "It's late afternoon at a small kapehan in Cubao. You're tired, you want something to drink, and you'd like a window seat. The friendly barista is waiting for your order. You'll combine gusto, kailangan, and pwede ba in a real ordering exchange.",
    rwenRole: "Ate Lyn — barista at a neighborhood kapehan, ~30, patient and chatty; loves it when foreigners try Tagalog and rewards effort with the warmest smile.",
    successCriteria: "User combines at least two of the three softeners — gusto ko ng (for the order), pwede ba (for a request like sitting at a window seat), kailangan ko ng (e.g. tubig because tired). All ko + ng linkers used correctly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
