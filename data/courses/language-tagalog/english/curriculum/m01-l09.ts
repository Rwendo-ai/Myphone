import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-paalam',
  module: 1,
  lesson: 9,
  title: 'Paalam — Goodbye',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Filipino farewells are gentle — they wish you safety, not just absence. 'Paalam' is the formal goodbye. 'Sige, ingat' is the everyday 'okay, take care'. And 'Hanggang sa muli' — until next time — leaves the door open.",
    culturalNote: "Filipinos rarely just 'leave' — they make sure you're safe in the leaving. 'Ingat' (take care) is said constantly, sometimes three times in a single goodbye. To leave without 'ingat' is like hanging up mid-sentence. The leaving itself is part of the relationship.",
  },

  chunks: [
    {
      id: 'paalam',
      target: 'Paalam',
      native: 'Goodbye',
      literal: 'Farewell',
      emoji: '👋',
      phonetic: 'pa-A-lam',
      audioRef: null,
    },
    {
      id: 'sige_ingat',
      target: 'Sige, ingat',
      native: 'OK, take care',
      literal: 'Go-ahead, careful',
      emoji: '🤗',
      phonetic: 'SI-ge, i-NGAT',
      audioRef: null,
    },
    {
      id: 'hanggang_sa_muli',
      target: 'Hanggang sa muli',
      native: 'Until next time',
      literal: 'Until to again',
      emoji: '🔁',
      phonetic: 'HANG-gang SA mu-LI',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Farewell wishes',
    explanation: "Tagalog goodbyes layer well-wishes. 'Paalam' is formal/poetic (think weddings, songs, formal speech). 'Sige, ingat' is everyday — heard a hundred times a day. 'Hanggang sa muli' is the warm 'see you next time'. To make any of these respectful, drop in 'po': 'Sige po, ingat'.",
    examples: [
      { target: 'Sige, ingat ka', native: "OK, take care (casual)" },
      { target: 'Sige po, ingat kayo', native: 'OK, take care (respectful)' },
      { target: 'Paalam, hanggang sa muli', native: 'Goodbye, until next time' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Paalam', right: 'Goodbye' },
        { left: 'Sige, ingat', right: 'OK, take care' },
        { left: 'Hanggang sa muli', right: 'Until next time' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're leaving your tita's house. You wave from the gate.",
      sentence: 'Sige po, _____ kayo!',
      options: ['ingat', 'paalam', 'mabuti'],
      correct: 'ingat',
      context: "'Ingat' = take care. With elders, pair with kayo + po.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'OK, take care (casual)',
      correct: ['Sige, ingat', 'Sige ingat', 'sige, ingat', 'sige ingat'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: Until next time',
      words: ['muli', 'sa', 'Hanggang'],
      correct: ['Hanggang', 'sa', 'muli'],
      translation: 'Until next time',
    },
    {
      type: 'multiple_choice',
      instruction: "You're ending an OFW phone call with your tita in Dubai. The mood is warm. What do you say last?",
      question: 'Pick the warmest farewell',
      options: [
        { text: 'Sige po, ingat kayo. Hanggang sa muli.', correct: true },
        { text: 'Paalam.', correct: false },
        { text: 'Salamat po.', correct: false },
      ],
      explanation: "'Sige po, ingat kayo. Hanggang sa muli' layers care + 'see you'. Bare 'Paalam' is too formal/final for a phone call. 'Salamat po' isn't a goodbye.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Until next time',
      correct: ['Hanggang sa muli', 'hanggang sa muli'],
    },
  ],

  rwenDialogue: {
    intro: "You've spent two hours in your tita's kitchen in Cavite, eating adobo and getting all the family gossip. Now you're at the gate, your tita is hovering, the dog won't stop barking. Time to leave properly.",
    lines: [
      {
        speaker: 'npc',
        target: 'Sige, anak. Ingat ka sa daan, ha?',
        native: 'OK, child. Be careful on the road, alright?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sige po, tita. Ingat din kayo. Hanggang sa muli.', native: "OK (respectful), auntie. You take care too. Until next time.", correct: true, feedback: "Beautifully layered — 'po' for respect, 'ingat din kayo' bouncing the care back, then the warm 'hanggang sa muli'. She's already planning your next visit." },
          { target: 'Paalam', native: 'Goodbye', correct: false, feedback: 'Too formal for a tita and too final — softens with sige po, ingat kayo.' },
          { target: 'Bye', native: 'Bye', correct: false, feedback: "English bye to your tita after adobo? She'll forgive you, but try the Tagalog farewell." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hanggang sa muli, anak. Mahal kita.',
        native: 'Until next time, child. I love you.',
      },
      {
        speaker: 'rwen',
        rwenLine: "And there's the magic — you didn't just leave, you wished her well, and she wished you back. That's a Filipino goodbye.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'OK, take care (casual, in Tagalog)',
        correct: ['Sige, ingat', 'Sige ingat', 'sige, ingat', 'sige ingat'],
      },
      {
        prompt: 'Until next time (in Tagalog)',
        correct: ['Hanggang sa muli', 'hanggang sa muli'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say 'Sige, ingat' to someone leaving today — even a coworker stepping out for coffee. Layer the warmth into your goodbye.",
    rwenSignoff: "I'll ask tomorrow how it felt. Sige, ingat ka — go on, take care.",
  },

  phase8: {
    scenario: "You've just finished an hour-long phone call with your tita who works as an OFW nurse in Dubai. She fed you all the family gossip via voice messages, and now it's time to wind down the call. The goodbye is warm, layered, and Filipino — not just a click.",
    rwenRole: "Tita Lourdes — OFW nurse in Dubai, 50s, talks to her family every Sunday; goodbyes are sacred to her, layered with 'ingat' and 'hanggang sa muli'. She'll keep saying farewell phrases until you mirror them properly.",
    successCriteria: "User wraps the call with at least two of these elements: 'Sige po', 'Ingat (kayo)', 'Hanggang sa muli'. The 'po' must appear (she's an elder), and the goodbye must NOT be a bare 'paalam' or 'bye'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
