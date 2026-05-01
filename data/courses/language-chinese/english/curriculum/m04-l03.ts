import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-measure-ge',
  module: 4,
  lesson: 3,
  title: 'Gè 个 — the all-purpose measure word',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "In Mandarin you cannot just say 'one person' or 'three apples.' Between the number and the noun, you need a measure word — a tiny grammar bridge. Today we meet 'gè' (个), the one you'll use most. When in doubt, gè.",
    culturalNote: "Mandarin measure words are like English 'a sheet of paper' or 'two cups of tea' — except every counted noun in Chinese needs one. There are dozens, but 'gè' covers people, generic objects, and most situations. Also: when you say 'two of something,' Chinese swaps 'èr' for 'liǎng' — èr is for counting (one, two, three), liǎng is for 'two of a thing.'",
  },

  chunks: [
    {
      id: 'yi_ge_ren',
      target: 'Yí gè rén',
      native: 'one person',
      literal: '(一个人) lit: one-[measure]-person',
      emoji: '🧍',
      phonetic: 'yee-↗ guh-↘ run-↗ (yī shifts to yí before falling tone)',
      audioRef: null,
    },
    {
      id: 'liang_ge_haizi',
      target: 'Liǎng gè háizi',
      native: 'two kids',
      literal: '(两个孩子) lit: two-[measure]-child',
      emoji: '👧',
      phonetic: 'lyang-↘↗ guh-↘ hi-↗-dzuh (use liǎng, not èr, for "two of")',
      audioRef: null,
    },
    {
      id: 'san_ge_wenti',
      target: 'Sān gè wèntí',
      native: 'three questions',
      literal: '(三个问题) lit: three-[measure]-question',
      emoji: '❓',
      phonetic: 'sahn-→ guh-↘ wun-↘ tee-↗',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Number + measure + noun (and èr → liǎng)',
    explanation: 'The pattern is: NUMBER + MEASURE-WORD + NOUN. For "two of" anything, use liǎng (两), NOT èr (二). Èr is for counting and phone numbers; liǎng is for "two of a thing."',
    examples: [
      { target: 'Yí gè péngyou', native: 'one friend' },
      { target: 'Liǎng gè wèntí (NOT èr gè)', native: 'two questions' },
      { target: 'Sān gè xuéshēng', native: 'three students' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Yí gè rén', right: 'one person' },
        { left: 'Liǎng gè háizi', right: 'two kids' },
        { left: 'Sān gè wèntí', right: 'three questions' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "two friends"',
      sentence: '_____ gè péngyou',
      options: ['Liǎng', 'Èr', 'Yī'],
      correct: 'Liǎng',
      context: 'For "two of" something — friends, books, problems — Mandarin uses liǎng, not èr. Èr is for counting only.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'one person',
      correct: ['Yí gè rén', 'yi ge ren', 'yí gè rén', '一个人'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'two kids',
      correct: ['Liǎng gè háizi', 'liang ge haizi', 'liǎng gè háizi', '两个孩子'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I have three questions."',
      words: ['gè', 'sān', 'Wǒ', 'yǒu', 'wèntí'],
      correct: ['Wǒ', 'yǒu', 'sān', 'gè', 'wèntí'],
      translation: 'I have three questions. (yǒu = have)',
    },
    {
      type: 'multiple_choice',
      instruction: 'You want to say "two students". Which is right?',
      question: 'Pick the correct phrase',
      options: [
        { text: 'Liǎng gè xuéshēng', correct: true },
        { text: 'Èr gè xuéshēng', correct: false },
        { text: 'Liǎng xuéshēng', correct: false },
      ],
      explanation: 'Èr is only for counting (yī, èr, sān). For "two of a thing" use liǎng, and you still need the measure word gè.',
    },
  ],

  rwenDialogue: {
    intro: "You arrive at a small guesthouse. The owner asks how many of you are checking in — you also have two kids with you.",
    lines: [
      {
        speaker: 'npc',
        target: 'Jǐ gè rén?',
        native: 'How many people?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sān gè rén — yí gè dàrén, liǎng gè háizi.', native: 'Three people — one adult, two kids.', correct: true, feedback: 'Beautiful — measure word + correct liǎng for "two of." She nods and writes it down.' },
          { target: 'Sān rén — yī dàrén, èr háizi.', native: 'Three person — one adult, two kid.', correct: false, feedback: 'You skipped the measure word AND used èr instead of liǎng. Both are red flags to her ear.' },
          { target: 'Sān gè rén — èr gè háizi.', native: 'Three people — two kids (using èr).', correct: false, feedback: 'Èr gè sounds wrong here — for "two of a thing" always use liǎng gè.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, yí gè fángjiān gòu ma?',
        native: 'OK, is one room enough?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You handled the gè AND the liǎng — that's the bridge most learners trip over. Hold on to that pattern: number + gè + noun. When you don't know the right measure word, gè is almost always safe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'one person (pinyin or characters)',
        correct: ['Yí gè rén', 'yi ge ren', 'yí gè rén', '一个人'],
      },
      {
        prompt: 'two kids (remember: liǎng, not èr)',
        correct: ['Liǎng gè háizi', 'liang ge haizi', 'liǎng gè háizi', '两个孩子'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count three things around you using gè: 'yí gè ___, liǎng gè ___, sān gè ___.' Your phone, your cup, your shoes — anything. Get used to the bridge word.",
    rwenSignoff: "Number, then bridge, then thing. Zàijiàn.",
  },

  phase8: {
    scenario: "Checking into a small guesthouse with a family group. The owner needs to know how many people, how many kids, how many rooms. You'll need to count people using gè and remember to use liǎng (not èr) for 'two of.'",
    rwenRole: "Guesthouse owner Wáng (王老板) — 50s, runs a tidy place, asks practical questions and writes things in a paper register. Patient, but precise — he'll repeat your number back to confirm.",
    successCriteria: "User correctly uses 'gè' between numbers and people-nouns (rén, háizi, dàrén) at least three times, AND uses 'liǎng' rather than 'èr' for 'two of' something.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
