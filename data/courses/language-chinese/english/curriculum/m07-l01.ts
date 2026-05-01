import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-hungry',
  module: 7,
  lesson: 1,
  title: "Wǒ è le — I'm hungry",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "It's 11:30am in Chengdu. The smell of chili oil and freshly steamed bāozi is hitting you from every doorway. Your stomach growls. In Mandarin you don't say 'I am hungry' — you say 'Wǒ è le.' That little 'le' at the end is the secret: it means you've BECOME hungry. A change of state. The hunger just arrived.",
    culturalNote: "English speakers want to say 'Wǒ shì è' (I am hungry) — but that's wrong. Hunger and thirst in Mandarin are CHANGES — you weren't hungry, now you are. The particle 'le' (了) marks that arrival. Once you feel this, half of Mandarin grammar opens up.",
  },

  chunks: [
    {
      id: 'wo_e_le',
      target: 'Wǒ è le',
      native: "I'm hungry (lit: I have become hungry)",
      literal: '(我饿了) lit: I-hungry-(change-of-state)',
      emoji: '🍜',
      phonetic: 'WAW uh luh',
      audioRef: null,
    },
    {
      id: 'wo_ke_le',
      target: 'Wǒ kě le',
      native: "I'm thirsty (lit: I have become thirsty)",
      literal: '(我渴了) lit: I-thirsty-(change-of-state)',
      emoji: '💧',
      phonetic: 'WAW kuh luh',
      audioRef: null,
    },
    {
      id: 'wo_yao_shui',
      target: 'Wǒ yào shuǐ',
      native: 'I want water',
      literal: '(我要水) lit: I-want-water',
      emoji: '🥤',
      phonetic: 'WAW yow shway',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Le' — the change of state",
    explanation: "'Le' (了) at the end of a short sentence with a feeling word (è hungry, kě thirsty, lèi tired, bǎo full) means 'I have BECOME this'. Don't translate it as past tense — translate it as 'a new state has arrived'. English speakers leave 'le' off; Mandarin speakers without it sounds like you're describing a permanent personality trait, not a feeling.",
    examples: [
      { target: 'Wǒ è le', native: "I've become hungry / I'm hungry now" },
      { target: 'Wǒ kě le', native: "I've become thirsty / I'm thirsty now" },
      { target: 'Wǒ bǎo le', native: "I'm full now (after eating)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Wǒ è le', right: "I'm hungry" },
        { left: 'Wǒ kě le', right: "I'm thirsty" },
        { left: 'Wǒ yào shuǐ', right: 'I want water' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete the sentence — you've just walked 5km in Chengdu summer heat",
      sentence: 'Wǒ kě _____',
      options: ['le', 'ma', 'ne'],
      correct: 'le',
      context: "'Le' marks the change — you weren't thirsty an hour ago, but now you are. Without 'le' the sentence sounds incomplete to a Chinese ear.",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin (tones optional) or characters',
      prompt: "I'm hungry",
      correct: ['Wǒ è le', 'Wo e le', 'wo e le', 'wǒ è le', '我饿了'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "I want water"',
      words: ['shuǐ', 'Wǒ', 'yào'],
      correct: ['Wǒ', 'yào', 'shuǐ'],
      translation: 'I want water',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm thirsty",
      correct: ['Wǒ kě le', 'Wo ke le', 'wo ke le', 'wǒ kě le', '我渴了'],
    },
    {
      type: 'multiple_choice',
      instruction: "A friend asks 'Nǐ è le ma?' (Are you hungry?). What's the most natural reply?",
      question: 'Pick the natural answer',
      options: [
        { text: 'Wǒ è le. Wǒmen chīfàn ba — Yes I am. Let\'s eat.', correct: true },
        { text: 'Wǒ shì è — I am hungry (no le).', correct: false },
        { text: 'Yào — Want.', correct: false },
      ],
      explanation: "'Wǒ shì è' is the English-speaker mistake — Mandarin doesn't put 'shì' (am) before feelings. Just 'Wǒ è le' — the 'le' is doing all the work.",
    },
  ],

  rwenDialogue: {
    intro: "It's almost noon in a Chengdu side street. You and your travel buddy have been walking since 8am. The chili-and-Sichuan-pepper smell from a hotpot place across the road is unbearable. You turn to your friend.",
    lines: [
      {
        speaker: 'npc',
        target: "Wǒmen zǒu le sān ge xiǎoshí. Nǐ zěnmeyàng?",
        native: "We've walked three hours. How are you doing?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ è le, wǒ yě kě le', native: "I'm hungry, and I'm thirsty too", correct: true, feedback: "Perfect — 'le' on both. Two changes of state, side by side. Your friend is already pulling out their phone for the hotpot place." },
          { target: 'Wǒ shì è hé kě', native: 'I am hungry and thirsty (incorrect)', correct: false, feedback: "Drop the 'shì' (am) — Mandarin doesn't use it before feelings. And remember the 'le' that marks the change. Try 'Wǒ è le, wǒ kě le.'" },
          { target: 'Wǒ yào fàn', native: 'I want food', correct: false, feedback: "Not wrong, but it skips the 'I have become hungry' moment. The natural lead-in is 'Wǒ è le' first." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wǒ yě è le! Zǒu, qù chī huǒguō ba.',
        native: "I'm hungry too! Let's go eat hotpot.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how 'le' did the work? Two friends, two new states announced, one trip to lunch decided. That little particle is the engine of conversational Chinese. Welcome to Module 7 — the most delicious one.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm hungry (in pinyin or characters)", correct: ['Wǒ è le', 'Wo e le', 'wo e le', 'wǒ è le', '我饿了'] },
      { prompt: "I'm thirsty", correct: ['Wǒ kě le', 'Wo ke le', 'wo ke le', 'wǒ kě le', '我渴了'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time hunger or thirst hits you today, say it out loud — 'Wǒ è le' or 'Wǒ kě le.' Feel the 'le' on the end. That little syllable is your hunger arriving. Notice how it's NOT 'I am hungry' — it's 'I just became hungry'. The Mandarin mind frames feelings as events.",
    rwenSignoff: "Tomorrow we name the food itself. Bring an appetite. Zàijiàn — see you soon.",
  },

  phase8: {
    scenario: "Late morning in a Chengdu hotel lobby. You and a Mandarin-speaking friend, Lǐ Wěi, are deciding what to do for lunch. He notices you've been quiet and asks how you're doing. This is your moment to use 'le' correctly — to announce that hunger and thirst have arrived.",
    rwenRole: "Lǐ Wěi (李伟) — your Sichuan-born friend, late 20s, speaks slow clear Mandarin for foreigners. He'll quietly correct you if you say 'Wǒ shì è' instead of 'Wǒ è le'. He'll ask if you want hotpot, water, or both.",
    successCriteria: "User says 'Wǒ è le' (NOT 'Wǒ shì è'), uses 'Wǒ kě le' for thirst, and asks for water using 'Wǒ yào shuǐ'. The 'le' particle should appear on every change-of-state sentence — that's the test.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
