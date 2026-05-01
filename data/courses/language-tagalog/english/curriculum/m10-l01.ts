import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-happy-sad',
  module: 10,
  lesson: 1,
  title: 'Masaya & malungkot — Happy & Sad',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Kumusta ang puso mo today? In Tagalog, feelings live right at the front of the sentence — masaya ako, malungkot ako. Today we name what's inside.",
    culturalNote: "Filipinos talk about feelings openly with close friends and family — kumusta ang loob mo? (how is your inside?) is a real question, not small talk. Naming an emotion plainly in Tagalog is a quiet sign of trust.",
  },

  chunks: [
    {
      id: 'masaya_ako',
      target: 'Masaya ako',
      native: "I'm happy",
      literal: 'Happy I',
      emoji: '😊',
      phonetic: 'ma-SA-ya a-KO',
      audioRef: null,
    },
    {
      id: 'malungkot_ako',
      target: 'Malungkot ako',
      native: "I'm sad",
      literal: 'Sad I',
      emoji: '😢',
      phonetic: 'ma-LUNG-kot a-KO',
      audioRef: null,
    },
    {
      id: 'naluluha_ako',
      target: 'Naluluha ako',
      native: "I'm tearing up",
      literal: 'Tearing-up I',
      emoji: '🥲',
      phonetic: 'na-lu-LU-ha a-KO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emotion + ako',
    explanation: "Most Tagalog emotions are adjectives starting with **ma-** (masaya, malungkot, malumbay). Just say the feeling, then **ako** (I). No 'am' verb needed — masaya ako literally means 'happy I'.",
    examples: [
      { target: 'Masaya ako', native: "I'm happy" },
      { target: 'Malungkot ako', native: "I'm sad" },
      { target: 'Masaya siya', native: "She's happy" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog feeling to its meaning',
      pairs: [
        { left: 'Masaya ako', right: "I'm happy" },
        { left: 'Malungkot ako', right: "I'm sad" },
        { left: 'Naluluha ako', right: "I'm tearing up" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your friend just got a new job. Tell them you're happy for them.",
      sentence: '_____ ako para sa iyo.',
      options: ['Masaya', 'Malungkot', 'Naluluha'],
      correct: 'Masaya',
      context: "Para sa iyo = 'for you'. The shape of the feeling word stays the same.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm sad",
      correct: ['Malungkot ako', 'malungkot ako'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "I\'m tearing up"',
      words: ['ako', 'Naluluha'],
      correct: ['Naluluha', 'ako'],
      translation: "I'm tearing up",
    },
    {
      type: 'multiple_choice',
      instruction: 'Your titá is crying watching a teleserye. She says she feels this. Pick the right word.',
      question: 'Which feeling fits?',
      options: [
        { text: 'Naluluha ako', correct: true },
        { text: 'Masaya ako', correct: false },
        { text: 'Gutom ako', correct: false },
      ],
      explanation: "Naluluha = tearing up. Gutom = hungry — wrong feeling family entirely.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm happy",
      correct: ['Masaya ako', 'masaya ako'],
    },
  ],

  rwenDialogue: {
    intro: "You're on a video call with your kaibigan in Quezon City. She asks how you are today.",
    lines: [
      {
        speaker: 'npc',
        target: 'Kumusta ka? Kumusta ang puso mo?',
        native: 'How are you? How is your heart?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Masaya ako today, salamat.', native: "I'm happy today, thanks.", correct: true, feedback: "Warm and honest — exactly the register she's asking for." },
          { target: 'Gutom ako.', native: "I'm hungry.", correct: false, feedback: "True, maybe — but she asked about your puso, not your tiyan." },
          { target: 'Masaya ka.', native: "You're happy.", correct: false, feedback: "Close — but you put the feeling on her instead of you. Use ako." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Mabuti naman. Masaya rin ako.',
        native: "That's good. I'm happy too.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You named today's feeling out loud. That's harder than it sounds — and you did it in Tagalog.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm happy (in Tagalog)", correct: ['Masaya ako', 'masaya ako'] },
      { prompt: "I'm sad (in Tagalog)", correct: ['Malungkot ako', 'malungkot ako'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Once today — text or say out loud — name your feeling in Tagalog. Masaya ako. Malungkot ako. Whatever's true.",
    rwenSignoff: "Ingat ka — take care. I'll see you tomorrow.",
  },

  phase8: {
    scenario: "It's late evening. Your close kaibigan messages you on Messenger: 'Uy, kumusta ka talaga today?' (Hey, how are you really today?). She's been your friend for years and wants the honest answer — not 'okay lang'.",
    rwenRole: "Tin — your kaibigan, late 20s, warm, the kind of friend who waits in the silence for the real answer.",
    successCriteria: "User replies with a clear emotion using the masaya/malungkot/naluluha pattern + ako (e.g. 'Masaya ako today' or 'Medyo malungkot ako'). Bonus: gives one short reason why.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
