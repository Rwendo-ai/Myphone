import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-magandang-umaga',
  module: 1,
  lesson: 1,
  title: 'Magandang Umaga — Good Morning',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Magandang umaga! In the Philippines, a greeting is never just sound — it carries respect. Add the little word 'po' and an elder's whole face softens. Today we open the day the Filipino way: warm, polite, with 'po' on our lips.",
    culturalNote: "'Po' is the Filipino respect particle — it has no English equivalent. You drop it into any sentence to elders, strangers, customers, anyone older or in authority. Skipping it isn't grammatically wrong, but it lands like a teenager calling a grandparent by their first name.",
  },

  chunks: [
    {
      id: 'magandang_umaga',
      target: 'Magandang umaga',
      native: 'Good morning',
      literal: 'Beautiful morning',
      emoji: '🌅',
      phonetic: 'ma-gan-DANG u-MA-ga',
      audioRef: null,
    },
    {
      id: 'magandang_umaga_po',
      target: 'Magandang umaga po',
      native: 'Good morning (respectful)',
      literal: 'Beautiful morning + respect-marker',
      emoji: '🙏',
      phonetic: 'ma-gan-DANG u-MA-ga PO',
      audioRef: null,
    },
    {
      id: 'mabuti_naman',
      target: 'Mabuti naman',
      native: "I'm well / Doing fine",
      literal: 'Good also',
      emoji: '😊',
      phonetic: 'ma-BU-ti na-MAN',
      audioRef: null,
    },
  ],

  pattern: {
    name: "The 'po' respect particle",
    explanation: "Add 'po' near the end of any phrase when speaking to elders, strangers, or anyone deserving respect. It changes nothing in meaning — it changes everything in feeling. Same vibe as French 'vous' but lighter and easier: just one tiny word.",
    examples: [
      { target: 'Magandang umaga', native: 'Good morning (to a friend, sibling)' },
      { target: 'Magandang umaga po', native: 'Good morning (to an elder, stranger, customer)' },
      { target: 'Salamat po', native: 'Thank you (respectful)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Magandang umaga', right: 'Good morning' },
        { left: 'Magandang umaga po', right: 'Good morning (respectful)' },
        { left: 'Mabuti naman', right: "I'm well" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You greet your tita (auntie) at 7am. What do you say?',
      sentence: 'Magandang umaga _____, tita.',
      options: ['po', 'naman', 'mabuti'],
      correct: 'po',
      context: 'Always add po when greeting someone older — even an aunt you know well.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Good morning (respectful, to an elder)',
      correct: ['Magandang umaga po', 'magandang umaga po'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the respectful morning greeting',
      words: ['umaga', 'Magandang', 'po'],
      correct: ['Magandang', 'umaga', 'po'],
      translation: 'Good morning (respectful)',
    },
    {
      type: 'multiple_choice',
      instruction: "You're at a Manila bakery at 6am. The 60-year-old baker greets you. How do you reply?",
      question: 'Pick the right greeting',
      options: [
        { text: 'Magandang umaga po', correct: true },
        { text: 'Magandang umaga', correct: false },
        { text: 'Mabuti naman', correct: false },
      ],
      explanation: "She's older and a stranger — 'po' is the difference between polite and rude. 'Mabuti naman' is a reply to 'how are you', not a greeting.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm well / Doing fine",
      correct: ['Mabuti naman', 'mabuti naman'],
    },
  ],

  rwenDialogue: {
    intro: "It's 6:30am in Quiapo, Manila. You walk into a small panaderia (bakery). The lola (grandmother) behind the counter looks up. She's 70 if she's a day. Greet her.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Magandang umaga po', native: 'Good morning (respectful)', correct: true, feedback: 'Yes — that little po just made her smile. You honoured her age.' },
          { target: 'Magandang umaga', native: 'Good morning', correct: false, feedback: "Warm, but to a lola you always add 'po'. Try again with the respect marker." },
          { target: 'Mabuti naman', native: "I'm well", correct: false, feedback: "That's an answer to 'kumusta' — not a greeting. Lead with magandang umaga." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Magandang umaga din. Ano po ang gusto ninyo?',
        native: 'Good morning to you too. What would you like?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear that 'po' come back at you? She mirrored your respect. That's the music of Tagalog — you give po, you get po.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Good morning (respectful, in Tagalog)',
        correct: ['Magandang umaga po', 'magandang umaga po'],
      },
      {
        prompt: "I'm well / Doing fine (in Tagalog)",
        correct: ['Mabuti naman', 'mabuti naman'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Greet someone today with 'Magandang umaga po' — out loud. A barista, a neighbour, your phone screen, anyone. Feel that 'po' land at the end.",
    rwenSignoff: "I'll ask you tomorrow how it felt. Ingat — take care.",
  },

  phase8: {
    scenario: "It's 6:30am at a small panaderia in Quiapo, Manila. The 70-year-old lola behind the counter is arranging fresh pandesal. You walk in to buy breakfast — and in the Philippines that means greeting an elder properly first, with 'po' on your lips.",
    rwenRole: "Aling Nena — the lola panadera, mid-70s, sharp-eyed and warm; she beams when she hears 'po' from a foreigner and quietly cools if a customer skips it.",
    successCriteria: "User opens with 'Magandang umaga po' (NOT bare 'Magandang umaga' — she's an elder), THEN orders. Greeting comes BEFORE the request. The 'po' must be present.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
