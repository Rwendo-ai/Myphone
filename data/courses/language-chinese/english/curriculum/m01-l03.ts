import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-xiexie',
  module: 1,
  lesson: 3,
  title: 'Xièxie — Thank you',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Xièxie' is the most useful word you'll learn this week. But here's the trap: the response 'bù kèqi' is just as important. In Chinese, thanks come back — leaving them hanging feels cold.",
    culturalNote: "In China, 'xièxie' is for genuine help — not the reflexive way English speakers thank baristas, drivers, and shop assistants. Overusing it with close friends or family can feel distant, like you're treating them as strangers. Save it for when it counts.",
  },

  chunks: [
    {
      id: 'xiexie',
      target: 'Xièxie',
      native: 'Thank you',
      literal: '(谢谢) lit: thanks-thanks (reduplicated)',
      emoji: '🙏',
      phonetic: 'SHYEH-shyeh ("xi" = "shee", but softer)',
      audioRef: null,
    },
    {
      id: 'bu_keqi',
      target: 'Bù kèqi',
      native: "You're welcome",
      literal: "(不客气) lit: not-polite (i.e. don't be polite about it)",
      emoji: '😊',
      phonetic: 'BOO kuh-chee ("q" = "ch")',
      audioRef: null,
    },
    {
      id: 'duoxie',
      target: 'Duōxiè',
      native: 'Many thanks',
      literal: '(多谢) lit: much-thanks',
      emoji: '💝',
      phonetic: 'DWAW-shyeh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Politeness chain',
    explanation: "Thanks in Chinese works as a pair: someone says 'xièxie', the other replies 'bù kèqi'. Always close the loop. 'Duōxiè' is a warmer, fuller version of thanks — used for bigger favours.",
    examples: [
      { target: 'A: Xièxie. B: Bù kèqi.', native: 'A: Thanks. B: You\'re welcome.' },
      { target: 'A: Duōxiè! B: Bù kèqi.', native: 'A: Many thanks! B: You\'re welcome.' },
      { target: 'A: Xièxie nǐ.', native: 'A: Thank YOU. (adds "you" for emphasis)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Xièxie', right: 'Thank you' },
        { left: 'Bù kèqi', right: "You're welcome" },
        { left: 'Duōxiè', right: 'Many thanks' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Thank you',
      correct: ['Xièxie', 'Xiexie', 'xiexie', 'xièxie', '谢谢'],
    },
    {
      type: 'fill_blank',
      instruction: 'Someone just said "Xièxie" — reply naturally',
      sentence: 'Bù _____',
      options: ['kèqi', 'xièxie', 'hǎo'],
      correct: 'kèqi',
      context: '"Bù kèqi" literally means "not polite" — i.e. "no need for politeness".',
    },
    {
      type: 'build_sentence',
      instruction: 'Thank someone warmly for a big favour',
      words: ['nǐ', 'Duōxiè,', 'xièxie'],
      correct: ['Duōxiè,', 'xièxie', 'nǐ'],
      translation: 'Many thanks, thank you',
    },
    {
      type: 'translate',
      instruction: 'Reply to "xièxie" — type in pinyin or characters',
      prompt: "You're welcome",
      correct: ['Bù kèqi', 'Bu keqi', 'bu keqi', 'bù kèqi', '不客气'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Many thanks (warmer than xièxie)',
      correct: ['Duōxiè', 'Duoxie', 'duoxie', 'duōxiè', '多谢'],
    },
  ],

  rwenDialogue: {
    intro: "You're at your Chinese host's apartment. They've just handed you a small wrapped gift — a tea set from their hometown — with two hands.",
    lines: [
      {
        speaker: 'npc',
        target: 'Zhège sòng gěi nǐ',
        native: "This is for you (a small gift)",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Duōxiè!', native: 'Many thanks!', correct: true, feedback: "Perfect — a real gift deserves the warmer 'duōxiè'." },
          { target: 'Bù kèqi', native: "You're welcome", correct: false, feedback: "That's the reply to thanks, not the thanks itself. They gave you something — you say thank you." },
          { target: 'Zàijiàn', native: 'Goodbye', correct: false, feedback: "That's a farewell — not what this moment calls for." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bù kèqi, bù kèqi',
        native: "You're welcome, you're welcome (repeated for warmth)",
      },
      {
        speaker: 'rwen',
        rwenLine: "You felt the weight of the gift and answered with the right size of thanks. 'Duōxiè' for the big stuff, 'xièxie' for the small. You're learning the shape of warmth.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Thank you (everyday)',
        correct: ['Xièxie', 'Xiexie', 'xiexie', 'xièxie', '谢谢'],
      },
      {
        prompt: "You're welcome (reply to thanks)",
        correct: ['Bù kèqi', 'Bu keqi', 'bu keqi', 'bù kèqi', '不客气'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'xièxie' once today, out loud. Bonus: when someone thanks you, reply 'bù kèqi' under your breath. Build the loop.",
    rwenSignoff: "Thanks given is thanks received. Bù kèqi.",
  },

  phase8: {
    scenario: "You're at your Chinese host's apartment in Hangzhou for tea. They disappear into the kitchen and return holding something wrapped in red paper — a small tea set from their hometown of Yixing, given with both hands. This is a gift moment, not a passing courtesy.",
    rwenRole: "Zhāng āyí (张阿姨) — your host's mother, ~60, generous and slightly insistent that you accept. She'll wave off any thanks and pour you tea. Speaks slowly and clearly to a foreigner.",
    successCriteria: "User receives the gift with both hands (mention the action), thanks her with 'Duōxiè' (NOT just 'xièxie' — the size of the gift warrants the warmer version), and accepts her 'bù kèqi' without over-protesting. Bonus if they say 'xièxie nǐ' adding 'nǐ' for personal warmth.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
