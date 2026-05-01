import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-10',
  module: 6,
  lesson: 1,
  title: 'Yī to Shí — One to Ten',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Numbers in Mandarin are gloriously regular — once you know one to ten, you can build almost any number. But there's a tonal quirk: 'yī' (one) shifts its tone depending on what comes after. Don't panic — even native speakers don't think about it consciously.",
    culturalNote: "Chinese counts on one hand differently — there are finger gestures for 6, 7, 8, 9 and 10 that are commonly used at noisy markets in Beijing or Chengdu. The tone of 'yī' (一) changes in compounds: 'yìbǎi' (one hundred — falling), 'yíge' (one of — rising). This is called tone sandhi. Listen, mimic, and trust your ear.",
  },

  chunks: [
    {
      id: 'yi_er_san',
      target: 'Yī, èr, sān',
      native: 'One, two, three',
      literal: '(一二三) — the foundation of every Chinese number',
      emoji: '1️⃣',
      phonetic: 'EE, AR, SAN (yī flat-high, èr falling, sān flat-high)',
      audioRef: null,
    },
    {
      id: 'si_wu_liu',
      target: 'Sì, wǔ, liù',
      native: 'Four, five, six',
      literal: '(四五六) — note: sì (four) sounds like sǐ (death). Many buildings skip floor 4',
      emoji: '4️⃣',
      phonetic: 'SUH, WOO, LYOH (sì falling, wǔ dipping, liù falling)',
      audioRef: null,
    },
    {
      id: 'qi_ba_jiu_shi',
      target: 'Qī, bā, jiǔ, shí',
      native: 'Seven, eight, nine, ten',
      literal: '(七八九十) — bā (eight) is lucky, sounds like fā (prosper)',
      emoji: '🔟',
      phonetic: 'CHEE, BA, JYOH, SHRR (qī flat, bā flat, jiǔ dipping, shí rising)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tone sandhi on yī (one)',
    explanation: "When counting alone, it's 'yī' (flat tone). But before a falling tone, it becomes 'yí' (rising). Before any other tone, it becomes 'yì' (falling). You'll hear it shift naturally — don't memorise the rule, mimic the sound.",
    examples: [
      { target: 'yī (一)', native: 'one — counting alone, flat tone' },
      { target: 'yí ge (一个)', native: 'one of — before falling tone, rises' },
      { target: 'yìbǎi (一百)', native: 'one hundred — before dipping tone, falls' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin number to its meaning',
      pairs: [
        { left: 'yī', right: 'one' },
        { left: 'wǔ', right: 'five' },
        { left: 'shí', right: 'ten' },
        { left: 'bā', right: 'eight' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin (tone marks optional) or characters',
      prompt: 'Three (in Mandarin)',
      correct: ['sān', 'san', 'Sān', '三'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the count: yī, èr, sān, sì, _____',
      sentence: 'yī, èr, sān, sì, _____',
      options: ['wǔ', 'liù', 'qī'],
      correct: 'wǔ',
      context: "After four (sì) comes five (wǔ) — dipping tone, sounds like English 'woo' going down then up.",
    },
    {
      type: 'build_sentence',
      instruction: 'Arrange the numbers from six to nine',
      words: ['jiǔ', 'liù', 'bā', 'qī'],
      correct: ['liù', 'qī', 'bā', 'jiǔ'],
      translation: 'Six, seven, eight, nine',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Ten',
      correct: ['shí', 'shi', 'Shí', '十'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why do some Chinese hotels skip floor 4?",
      question: "Pick the cultural reason",
      options: [
        { text: "'Sì' (four) sounds like 'sǐ' (death) — superstitious avoidance", correct: true },
        { text: "Four-sided rooms are bad feng shui", correct: false },
        { text: "It's a building code requirement", correct: false },
      ],
      explanation: "Tonal near-misses matter in Chinese culture. Conversely, 'bā' (eight) sounds like 'fā' (prosper) — a phone number with lots of 8s sells for thousands.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a tiny dumpling shop in Beijing. The owner holds up dumplings and asks how many you want — she's already counting on her fingers.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ yào jǐ ge?',
        native: 'How many do you want?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yào shí ge', native: 'I want ten', correct: true, feedback: 'Perfect — clear and confident. She nods.' },
          { target: 'Wǒ yào shì ge', native: '(wrong tone)', correct: false, feedback: "Watch the tone — 'shí' (ten) is rising, not falling. 'Shì' falling means 'is' or 'matter'." },
          { target: 'Shí', native: 'Ten (alone)', correct: false, feedback: "Understandable, but full sentences feel warmer. 'Wǒ yào shí ge' (I want ten of them)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, shí ge — mǎshàng',
        native: 'Got it, ten — coming right up',
      },
      {
        speaker: 'rwen',
        rwenLine: "You ordered ten dumplings in Mandarin. That's not nothing — that's a meal you bought yourself in another language.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Five (in Mandarin pinyin)',
        correct: ['wǔ', 'wu', 'Wǔ', '五'],
      },
      {
        prompt: 'Eight',
        correct: ['bā', 'ba', 'Bā', '八'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count from yī to shí out loud, three times today. Once in the morning, once at lunch, once before bed. Your tongue learns numbers through repetition — not pages.",
    rwenSignoff: "Yī, èr, sān — and we're off. Míngtiān jiàn — see you tomorrow.",
  },

  phase8: {
    scenario: "It's 7am at a Beijing breakfast stall. Steam rises from a bamboo basket of jiǎozi (dumplings). The auntie running the stall is patient with foreigners but moves fast — there's a queue forming. She asks how many you want.",
    rwenRole: "Auntie Lǐ (李阿姨) — breakfast stall owner, ~55, cheerful but efficient. Will hold up fingers and say the number aloud to confirm. Speaks clearly for foreigners.",
    successCriteria: "User picks a number 1–10 in Mandarin (e.g., 'Wǒ yào liù ge' or just 'liù'), pronounces the tone correctly enough to be understood, and confirms when she repeats the number back. Bonus if they use 'xièxie' at the end.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
