import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-annyeonghaseyo',
  module: 1,
  lesson: 1,
  title: 'Annyeonghaseyo — Hello (Polite)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Welcome. In Korean, you don't get to say 'hi' as a default — you choose a politeness level before the first syllable. Today we start with 안녕하세요 (annyeonghaseyo): the polite-formal greeting that works for 90% of people you'll meet.",
    culturalNote: "Hangul is a logical writing system invented in 1443 — you can learn the alphabet in a day. But Korean greetings always carry a politeness level baked in. Pick the wrong level and you've already insulted someone, even if your pronunciation is perfect.",
  },

  chunks: [
    {
      id: 'annyeonghaseyo',
      target: '안녕하세요',
      native: 'Hello (polite)',
      literal: 'annyeonghaseyo — peace-be-with-you',
      emoji: '🙇',
      phonetic: 'an-nyeong-ha-se-yo',
      audioRef: null,
    },
    {
      id: 'annyeong',
      target: '안녕',
      native: 'Hi (casual, to friends/younger)',
      literal: 'annyeong — peace',
      emoji: '👋',
      phonetic: 'an-nyeong',
      audioRef: null,
    },
    {
      id: 'annyeonghashimnikka',
      target: '안녕하십니까',
      native: 'Hello (very formal — TV news, the boss)',
      literal: 'annyeonghashimnikka',
      emoji: '🎙️',
      phonetic: 'an-nyeong-ha-shim-ni-kka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three politeness levels for hello',
    explanation: "Korean has three formality registers for the same greeting. The ending tells the listener exactly where they sit relative to you. Wrong level = wrong message.",
    examples: [
      { target: '안녕', native: '(banmal) — to a close friend or someone clearly younger' },
      { target: '안녕하세요', native: '(jondaetmal) — to almost everyone in daily life' },
      { target: '안녕하십니까', native: '(formal) — broadcasts, military, work superiors' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Korean to its meaning',
      pairs: [
        { left: '안녕하세요', right: 'Hello (polite)' },
        { left: '안녕', right: 'Hi (casual)' },
        { left: '안녕하십니까', right: 'Hello (very formal)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You walk into a Seoul café. The barista is older than you. What do you say?",
      question: 'Choose the right politeness level',
      options: [
        { text: '안녕하세요', correct: true },
        { text: '안녕', correct: false },
        { text: '안녕하십니까', correct: false },
      ],
      explanation: "안녕하세요 is the safe daily-life polite form. 안녕 is too casual for a stranger; 안녕하십니까 is overly stiff for a café.",
    },
    {
      type: 'translate',
      instruction: 'Type in Korean (Hangul or romanized)',
      prompt: 'Hello (polite)',
      correct: ['안녕하세요', 'annyeonghaseyo', 'Annyeonghaseyo'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right register',
      sentence: 'You greet your best friend: "____!"',
      options: ['안녕', '안녕하세요', '안녕하십니까'],
      correct: '안녕',
      context: 'Friends use banmal — informal speech.',
    },
    {
      type: 'build_sentence',
      instruction: 'Just one word — but pick the polite form',
      words: ['안녕', '하세요'],
      correct: ['안녕', '하세요'],
      translation: 'Hello (polite)',
    },
    {
      type: 'translate',
      instruction: 'Type in Korean — formal version',
      prompt: 'Hello (very formal — to a CEO)',
      correct: ['안녕하십니까', 'annyeonghashimnikka'],
    },
  ],

  rwenDialogue: {
    intro: "You walk into a small café in Hongdae, Seoul. The owner — a woman in her 50s — looks up from the espresso machine.",
    lines: [
      {
        speaker: 'npc',
        target: '안녕하세요!',
        native: 'Hello! (polite)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '안녕하세요', native: 'Hello (polite)', correct: true, feedback: "Perfect — mirrored her register. She smiles." },
          { target: '안녕', native: 'Hi (casual)', correct: false, feedback: "Too casual — you've just told a stranger she's your peer or younger. Awkward." },
          { target: '안녕하십니까', native: 'Hello (formal)', correct: false, feedback: "Too stiff for a café — you sound like a news anchor." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "First rule: match her register. She gave you 하세요 — you give it back. Politeness in Korean is mirrored.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Hello (polite — to a stranger)', correct: ['안녕하세요', 'annyeonghaseyo', 'Annyeonghaseyo'] },
      { prompt: 'Hi (casual — to a friend)', correct: ['안녕', 'annyeong', 'Annyeong'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say '안녕하세요' out loud three times today. Even just to yourself in the mirror — feel the rhythm: an-nyeong-ha-se-yo.",
    rwenSignoff: "안녕히 가세요 — go in peace. We'll meet again tomorrow.",
  },

  phase8: {
    scenario: "You've just landed at Incheon Airport. You're walking up to the immigration officer's window for the first time. You need to greet them at the right level before handing over your passport.",
    rwenRole: "Immigration officer — late 30s, professional, expects polite-formal register from foreigners.",
    successCriteria: "User opens with 안녕하세요 (NOT 안녕). If officer escalates to 안녕하십니까, user holds 안녕하세요 — that's still appropriate. User does not use banmal at any point.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
