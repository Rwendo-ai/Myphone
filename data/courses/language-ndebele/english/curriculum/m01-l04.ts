import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04',
  module: 1,
  lesson: 4,
  title: 'The X-click — lateral',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The third click. The horse-clop. It comes from the side of the mouth — not the front like c, not the top like q. The same sound horse riders use to urge a horse forward.",
    culturalNote: "Ixoxo — the frog — sits in puddles after the November rains in Bulawayo, and children chase them around the yard shouting the word with both x-clicks bouncing. If you ever hear a Ndebele child reciting an animal song, you'll hear ixoxo and ixhama (kudu) — both lateral clicks, and both unmistakable to anyone who's grown up here.",
  },

  chunks: [
    {
      id: 'ixoxo',
      target: 'ixoxo',
      native: 'frog',
      literal: 'i- + xoxo',
      emoji: '🐸',
      phonetic: 'ee-[x-click]OH-[x-click]oh',
      audioRef: null,
    },
    {
      id: 'ukuxoxa',
      target: 'ukuxoxa',
      native: 'to chat, to converse',
      literal: 'uku- (infinitive) + xoxa (chat)',
      emoji: '💬',
      phonetic: 'oo-koo-[x-click]OH-[x-click]ah',
      audioRef: null,
    },
    {
      id: 'ixhama',
      target: 'ixhama',
      native: 'kudu (large antelope)',
      literal: 'i- + xhama',
      emoji: '🦌',
      phonetic: 'ee-[x-click]HAH-mah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The X-click — lateral horse clop',
    explanation: "Make the x-click on the side of your mouth. Press the side of your tongue against the upper molars on one side, then pull it away — air rushes in from the side, making a hollow clop. It's the sound English speakers use to imitate a horse's hooves on a wooden floor. When you see 'xh' the click is followed by a soft breathy 'h' — a small puff after the clop.",
    examples: [
      { target: 'ixoxo',   native: 'frog' },
      { target: 'ukuxoxa', native: 'to chat' },
      { target: 'ixhama',  native: 'kudu' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Translate to English',
      prompt: 'ixoxo',
      correct: ['frog', 'a frog', 'the frog'],
    },
    {
      type: 'match_pairs',
      instruction: 'Match each x-click word to its meaning',
      pairs: [
        { left: 'ixoxo',   right: 'frog' },
        { left: 'ukuxoxa', right: 'to chat' },
        { left: 'ixhama',  right: 'kudu' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'How is the x-click made?',
      options: [
        { text: 'On the side of the mouth — tongue against the upper molars, pulled away.', correct: true },
        { text: 'At the front, against the teeth.',                                          correct: false },
        { text: 'At the top, against the hard palate.',                                      correct: false },
      ],
      explanation: "The x-click is lateral — it comes from the side, like the click riders use to urge horses on. It is the most unfamiliar of the three to most English speakers.",
    },
    {
      type: 'fill_blank',
      instruction: 'Fill in the click letter',
      sentence: "Frog: i___o___o.",
      options: ['c', 'q', 'x'],
      correct: 'x',
      context: "The horse-clop click — both syllables of ixoxo use it.",
    },
  ],

  rwenDialogue: {
    intro: 'A child in a Bulawayo backyard sees a frog after the rain.',
    lines: [
      { speaker: 'npc',  target: 'Ixoxo! Ixoxo!', native: "A frog! A frog!" },
      { speaker: 'rwen', rwenLine: "Two x-clicks in one word — both from the side of the mouth. ee-[x-click]OH-[x-click]oh." },
      { speaker: 'npc',  target: 'Singahlala sixoxe?', native: "Can we sit and chat?" },
      { speaker: 'rwen', rwenLine: "Ukuxoxa — to chat. Same x-click, but inside a verb this time. The clicks don't only live in animal names." },
      { speaker: 'npc',  target: 'Ngabona ixhama eGwaai.', native: "I saw a kudu in Gwaai." },
      { speaker: 'rwen', rwenLine: "Ixhama — kudu. The 'xh' is the click plus a small puff of breath. Don't drop the puff." },
    ],
  },

  activeRecall: {
    instruction: 'Without looking up, recall.',
    prompts: [
      { prompt: 'How do you say "frog" in isiNdebele?',          correct: ['ixoxo', 'Ixoxo'] },
      { prompt: 'What does "ukuxoxa" mean?',                      correct: ['to chat', 'to converse', 'chat', 'converse'] },
      { prompt: 'Which click is in ixoxo (c, q, or x)?',          correct: ['x', 'X'] },
    ],
  },

  mission: {
    title: 'The horse-clop',
    task: "Find a quiet room. Make the horse-clop click ten times — just the click, no word. Then say 'ixoxo' five times. Both clicks must clop, not click. If only one side of your mouth clops, that's correct.",
    rwenSignoff: "X is the click most English speakers find hardest. Don't worry — it's also the one that comes back most reliably with practice.",
  },

  phase8: {
    scenario: "Rwen plays a child showing you frogs in the yard after the rain. Every time he names an animal, you repeat it with the click.",
    rwenRole: "Bulawayo child, ~7yo, excited about the rain and the frogs, will laugh kindly if you mix clicks up",
    successCriteria: "User produced a lateral (x) click in at least one word — ixoxo, ukuxoxa, or ixhama.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
