import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-tones',
  module: 4,
  lesson: 1,
  title: 'The 4 Tones — mā, má, mǎ, mà',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Today we meet the heart of Mandarin: the tones. The same syllable — 'ma' — said four different ways gives you four different words. Mother, hemp, horse, scold. Mandarin singing comes from this; every word is half-melody.",
    culturalNote: "There are 4 tones plus a 'neutral' tone (no mark) used on light particles. The mark sits on the vowel and is a tiny picture of your pitch: ¯ stays high, ´ rises like a question, ˇ dips down then up, ` falls sharp like an order. English speakers move pitch for emotion — Mandarin moves it for meaning.",
  },

  chunks: [
    {
      id: 'ma_first',
      target: 'mā (妈)',
      native: 'mother',
      literal: '(妈) high & flat — tone 1',
      emoji: '👩',
      phonetic: 'maaa → (held high & flat, like a sung note)',
      audioRef: null,
    },
    {
      id: 'ma_second',
      target: 'má (麻)',
      native: 'hemp / numb',
      literal: '(麻) rising — tone 2',
      emoji: '🌿',
      phonetic: 'ma-↗ (rises like asking "huh?")',
      audioRef: null,
    },
    {
      id: 'ma_third',
      target: 'mǎ (马)',
      native: 'horse',
      literal: '(马) dipping — tone 3',
      emoji: '🐴',
      phonetic: 'ma-↘↗ (dips down then up — like "uh-oh")',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The 4 tones (plus neutral)',
    explanation: 'One syllable, four meanings — the tone mark above the vowel tells you which. Tone 4 (mà 骂 = scold) falls sharp like a barked order. The neutral tone has no mark — used on light particles like the question word "ma" (吗).',
    examples: [
      { target: 'mā (妈) — tone 1', native: 'mother — high & flat' },
      { target: 'mà (骂) — tone 4', native: 'to scold — falling sharp' },
      { target: 'ma (吗) — neutral', native: 'question particle — light, no pitch' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the tone-marked syllable to its meaning',
      pairs: [
        { left: 'mā', right: 'mother (high & flat)' },
        { left: 'má', right: 'hemp (rising)' },
        { left: 'mǎ', right: 'horse (dipping)' },
        { left: 'mà', right: 'to scold (falling)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which tone is used for "horse"?',
      question: 'Pick the right mark for mǎ (马)',
      options: [
        { text: 'ˇ — dipping (tone 3)', correct: true },
        { text: '¯ — flat (tone 1)', correct: false },
        { text: '` — falling (tone 4)', correct: false },
      ],
      explanation: 'The little "v" mark = your voice dips down then comes back up. Horse = mǎ.',
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the syllable that means "mother"',
      sentence: 'I love my _____.',
      options: ['mā', 'mà', 'mǎ'],
      correct: 'mā',
      context: 'Mother is high and flat — tone 1. Get the wrong tone and you might be saying you love your horse.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin (with tone marks if you can — without is also OK)',
      prompt: 'horse (the animal)',
      correct: ['mǎ', 'ma', 'mǎ (马)', '马'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or character',
      prompt: 'mother',
      correct: ['mā', 'ma', 'mā (妈)', '妈'],
    },
    {
      type: 'build_sentence',
      instruction: 'Order the four tones from 1 to 4',
      words: ['mǎ', 'mā', 'mà', 'má'],
      correct: ['mā', 'má', 'mǎ', 'mà'],
      translation: 'Tone 1 → 2 → 3 → 4: flat, rising, dipping, falling.',
    },
  ],

  rwenDialogue: {
    intro: "A Mandarin teacher is drilling tones with you in slow motion. She wants to hear you separate the four 'ma' words clearly — get one wrong and the whole sentence flips meaning.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tīng — mā, má, mǎ, mà. Nǐ shì shénme?',
        native: 'Listen — mā, má, mǎ, mà. Which one are you saying?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mǎ — horse', native: 'Horse — dipping tone', correct: true, feedback: 'Yes — that "v" shape on the vowel is the dip. Down then up.' },
          { target: 'Mā — horse', native: 'High & flat... horse?', correct: false, feedback: 'Mā (high & flat) is mother. Horse dips — mǎ.' },
          { target: 'Mà — horse', native: 'Falling... horse?', correct: false, feedback: 'Mà (falling) means to scold. Horse dips — mǎ.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hěn hǎo. Měi tiān liànxí.',
        native: 'Very good. Practise every day.',
      },
      {
        speaker: 'rwen',
        rwenLine: "You heard the difference. That's day one. Tones don't come from memorising — they come from listening, then singing them back. We'll keep going.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'mother (pinyin with tone)',
        correct: ['mā', 'ma', '妈'],
      },
      {
        prompt: 'horse (pinyin with tone)',
        correct: ['mǎ', 'ma', '马'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say all four tones out loud once today: mā, má, mǎ, mà. Exaggerate them — like singing. The bigger the pitch swing now, the easier real speech becomes.",
    rwenSignoff: "Sing the tones. Don't whisper them. Zàijiàn — see you tomorrow.",
  },

  phase8: {
    scenario: "A patient Mandarin teacher is doing tone drills with you in a quiet classroom. She'll say a 'ma' syllable; you tell her which tone it was, then say it back. She'll catch and correct you gently if your dipping tone is too flat or your falling tone too soft.",
    rwenRole: "Lǎoshī Lǐ (李老师) — a tones specialist who has taught hundreds of foreigners. Calm, slightly amused at how hard tones feel. Will demonstrate by exaggerating before asking you to copy.",
    successCriteria: "User correctly identifies at least 3 of the 4 'ma' tones by meaning, and produces 'mā' (mother) with a held flat pitch and 'mǎ' (horse) with an audible dip.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
