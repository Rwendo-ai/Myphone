import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm11-l08',
  module: 11,
  lesson: 8,
  title: 'Register — Formal vs Casual',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Same language, two volumes. Today you learn to dial up and down — formal at the chief's homestead, casual with your peers, never the wrong one in the wrong place. Register is the difference between sounding fluent and sounding like you fit.",
    culturalNote: "Ndebele register shifts on three things at once — age, role, and setting. Plural respect (li- forms) is the formal default; singular peer-form (wu- / -kho) is casual. Honorifics — Baba, Gogo, Mkhulu, Ma — are not optional in formal speech. Strip them and you sound rude even with perfect grammar. Casual register among peers without honorifics is warm, not lazy.",
  },

  chunks: [
    {
      id: 'unjani',
      target: 'Unjani?',
      native: 'How are you? (singular, casual peer)',
      emoji: '👋',
      phonetic: 'oon-JAH-nee',
      audioRef: null,
    },
    {
      id: 'linjani',
      target: 'Linjani?',
      native: 'How are you all? / How are you, sir/ma\'am? (formal)',
      emoji: '🙇',
      phonetic: 'leen-JAH-nee',
      audioRef: null,
    },
    {
      id: 'baba',
      target: 'Baba',
      native: 'Father / Sir (respect for older man)',
      emoji: '👨',
      phonetic: 'BAH-bah',
      audioRef: null,
    },
    {
      id: 'mngane',
      target: 'mngane',
      native: 'friend (casual, peer)',
      emoji: '🫂',
      phonetic: 'mn-GAH-neh',
      audioRef: null,
    },
    {
      id: 'ngicela',
      target: 'Ngicela...',
      native: 'I request / Please... (formal politeness)',
      literal: 'I-request',
      emoji: '🙏',
      phonetic: 'ngee-CHEH-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three dials: number, honorific, softener',
    explanation: "Formal register turns three dials up: (1) number — use plural 'li-' / 'ni-' even for one elder; (2) honorific — open with Baba, Gogo, Mkhulu, Ma; (3) softener — open requests with 'Ngicela' (please / I request). Casual register turns all three down — singular 'u-' forms, no honorifics, plain 'cela' or skip. Mismatching the dial is the giveaway.",
    examples: [
      { target: 'Linjani, Baba? Ngicela usizo.', native: 'How are you, Father? I request your help. (FORMAL)' },
      { target: 'Unjani, mngane? Ngicela ungisize.', native: 'How are you, friend? Please help me. (CASUAL)' },
      { target: 'Salibonani, Gogo. Ngicela ukungena.', native: 'Hello, Grandmother. I request to come in. (FORMAL)' },
      { target: 'Sawubona. Ngingena.', native: 'Hi. I am coming in. (CASUAL — peer only)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form to its register',
      pairs: [
        { left: 'Linjani, Baba?', right: 'formal — to an elder' },
        { left: 'Unjani, mngane?', right: 'casual — to a friend' },
        { left: 'Ngicela', right: 'formal request opener' },
        { left: 'Sawubona', right: 'casual peer greeting' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right register',
      sentence: '____, Gogo. Ngicela ukungena.',
      options: ['Salibonani', 'Sawubona', 'Mngane'],
      correct: 'Salibonani',
      context: 'Speaking to a grandmother at her home — formal greeting, plural-respectful.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right register for the situation',
      question: 'You are at a chief\'s homestead asking permission to take a photograph of the cattle kraal. Which is appropriate?',
      options: [
        { text: 'Salibonani Mkhulu. Ngicela ukuthatha isithombe sezinkomo.', correct: true },
        { text: 'Sawubona. Ngifuna ukuthatha isithombe.', correct: false },
        { text: 'Hi, can I take a photo?', correct: false },
      ],
      explanation: "At a chief's homestead all three formal dials are required: 'Salibonani' (plural-respect), 'Mkhulu' (honorific for elder/chief), 'Ngicela' (please). The casual version would be a near-offence; the English version closes the door entirely.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Spot the register mismatch',
      question: 'Which line sounds WRONG to a Ndebele ear?',
      options: [
        { text: 'Sawubona Baba, ngifuna into. (Hi Father, I want a thing.)', correct: true },
        { text: 'Salibonani Baba, ngicela into. (Hello Father, I request a thing.)', correct: false },
        { text: 'Sawubona mngane, ngifuna into. (Hi friend, I want a thing.)', correct: false },
      ],
      explanation: "The first line mixes registers: casual 'Sawubona' + formal 'Baba' is a clash. If 'Baba' is in, 'Salibonani' must be too. The second is fully formal; the third is fully casual. Mixing the dials is the most common learner mistake.",
    },
  ],

  rwenDialogue: {
    intro: "Your morning has two stops. First, a peer at the kombi rank. Second, your friend's grandfather at his home.",
    lines: [
      { speaker: 'rwen', rwenLine: 'Stop one — the kombi rank. The conductor is your age, smiling, casual.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sawubona mngane, ngiya eCBD.', native: 'Hi friend, I am going to CBD.', correct: true, feedback: 'Right register. He is your age, the setting is informal — casual lands warm, not rude.' },
          { target: 'Salibonani Baba, ngicela ukuya eCBD.', native: 'Hello Father, I request to go to CBD.', correct: false, feedback: 'Over-formal. He is your age — the formality reads stiff, almost mocking. Match the dial to the person.' },
        ],
      },
      { speaker: 'npc', target: 'Yebo, ngena.', native: 'Yes, get in.' },
      { speaker: 'rwen', rwenLine: 'Stop two — Mkhulu Sibanda is on his veranda. He is 76, dignified, watching. Reset every dial.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salibonani Mkhulu. Linjani namhlanje? Ngicela ukungena.', native: 'Hello Grandfather. How are you today? I request to come in.', correct: true, feedback: 'All three dials up. Plural greeting, honorific, request-softener. He will tilt his head — you knew the shape.' },
          { target: 'Unjani Mkhulu? Ngifuna ukungena.', native: 'How are you Grandfather? I want to come in.', correct: false, feedback: 'Mismatched dials. "Mkhulu" is formal but "Unjani" is singular-casual and "Ngifuna" is bare. Pick a register and stay in it.' },
          { target: 'Sawubona. Ngifuna ukungena.', native: 'Hi. I want to come in.', correct: false, feedback: 'All dials down at an elder\'s home. This will not get you across the threshold. Reset.' },
        ],
      },
      { speaker: 'npc', target: 'Salibonani mzukulu. Ngena uhlale phansi.', native: 'Hello grandchild. Come in and sit down.' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'How do you greet an elder formally (sing.) — "Hello, sir/ma\'am"?', correct: ['Salibonani', 'salibonani'] },
      { prompt: 'How do you say "How are you?" formally (to an elder)?', correct: ['Linjani', 'Linjani?', 'linjani'] },
      { prompt: 'How do you open a request politely — "I request / please..."?', correct: ['Ngicela', 'ngicela'] },
      { prompt: 'How do you say "friend" (casual)?', correct: ['mngane', 'Mngane'] },
    ],
  },

  mission: {
    title: 'Read the dial',
    task: "Today, before three different conversations, pause and ask yourself: formal or casual? Even in your own language. Notice how often you have been on autopilot. The pause is the skill. In isiNdebele, that pause is the difference between welcome and quiet offence.",
    rwenSignoff: "Register is not what you say. It is whether you saw who you were saying it to.",
  },

  phase8: {
    scenario: "Your day has three conversations back-to-back: a peer at a coffee shop, an elder at a homestead, and a child of about eight at a relative's house. You match the register to each one.",
    rwenRole: "Three voices in one session — Sipho (peer, late 20s, casual), Mkhulu Sibanda (elder, 70s, formal), Sibu (child, 8, simple casual).",
    successCriteria: "User used casual register with peer (Sawubona / mngane / no over-honorifics), full formal register with elder (Salibonani + Mkhulu + Ngicela), and simple casual with the child (no over-formality). No register mismatches.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
