import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-baba-mama',
  module: 5,
  lesson: 1,
  title: 'Bàba & Māma — Mum & Dad',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Sunday dim sum. Steam rising off the bamboo baskets, your in-laws across the table — and they want to know about your parents. In Chinese, 'Bàba' and 'Māma' are the words you use your whole life. A 60-year-old still calls his mother 'Māma'. The doubled syllable isn't childish — it's tender.",
    culturalNote: "Reduplication (saying a syllable twice) is a hallmark of Chinese family terms — bàba, māma, gēge, mèimei, yéye, nǎinai. It softens the word and signals affection. Even formal documents will write 父亲 (fùqīn — father, formal), but at home, around the table, it's always Bàba.",
  },

  chunks: [
    {
      id: 'baba',
      target: 'Bàba',
      native: 'Dad / Father',
      literal: '(爸爸) lit: dad-dad (reduplicated)',
      emoji: '👨',
      phonetic: 'BA-ba (first syllable falling, second light)',
      audioRef: null,
    },
    {
      id: 'mama',
      target: 'Māma',
      native: 'Mum / Mother',
      literal: '(妈妈) lit: mum-mum (reduplicated)',
      emoji: '👩',
      phonetic: 'MA-ma (first syllable high & flat, second light)',
      audioRef: null,
    },
    {
      id: 'wo_de_baba_mama',
      target: 'Wǒ de bàba māma',
      native: 'My parents',
      literal: '(我的爸爸妈妈) lit: I-(possessive)-dad-mum',
      emoji: '👨‍👩‍👧',
      phonetic: 'WAW duh BA-ba MA-ma',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Reduplication — the warmth of a doubled syllable',
    explanation: "Chinese family words love to double up. 'Bà' alone means father, but in everyday speech you almost always say 'Bàba'. The second syllable goes light — neutral tone, almost a whisper. It's not baby talk; it's how warmth sounds in Mandarin.",
    examples: [
      { target: 'Bàba (爸爸)', native: 'Dad — falling tone, then light' },
      { target: 'Māma (妈妈)', native: 'Mum — high & flat, then light' },
      { target: 'Gēge (哥哥)', native: 'Older brother — same pattern' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Bàba', right: 'Dad' },
        { left: 'Māma', right: 'Mum' },
        { left: 'Wǒ de bàba māma', right: 'My parents' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin (tone marks optional) or characters',
      prompt: 'Mum (in Mandarin)',
      correct: ['Māma', 'Mama', 'mama', 'māma', '妈妈'],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'My parents',
      correct: ['Wǒ de bàba māma', 'Wo de baba mama', 'wo de baba mama', 'wǒ de bàba māma', '我的爸爸妈妈'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "my parents"',
      words: ['bàba', 'Wǒ', 'māma', 'de'],
      correct: ['Wǒ', 'de', 'bàba', 'māma'],
      translation: 'My parents',
    },
    {
      type: 'fill_blank',
      instruction: 'Fill in the gap — your auntie is asking about your father',
      sentence: 'Nǐ de _____ hěn gāo!',
      options: ['bàba', 'māma', 'háizi'],
      correct: 'bàba',
      context: '"Your dad is very tall!" — bàba = dad. (Háizi means child.)',
    },
    {
      type: 'multiple_choice',
      instruction: 'Why do Chinese family words double up?',
      question: 'Pick the best reason',
      options: [
        { text: 'It signals warmth and closeness — even adults use it.', correct: true },
        { text: "It's only for small children to use.", correct: false },
        { text: "It's grammatically required — single syllables aren't allowed.", correct: false },
      ],
      explanation: "Reduplication is affectionate, not childish. A 50-year-old executive still calls his mother 'Māma'. The formal terms (母亲 mǔqīn, 父亲 fùqīn) appear in writing or speeches, but at the dinner table, it's always Bàba and Māma.",
    },
  ],

  rwenDialogue: {
    intro: "Dim sum at a Cantonese-style restaurant in Shanghai. Your fiancé's auntie pours you tea, then leans forward — she wants to know who you come from.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ de bàba māma zài nǎlǐ?',
        native: 'Where are your parents?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ de bàba māma zài Yīngguó', native: 'My parents are in England', correct: true, feedback: 'Perfect — natural and warm. She nods, satisfied.' },
          { target: 'Wǒ bàba māma', native: 'I dad mum', correct: false, feedback: "Close — but you need 'de' (的) between 'wǒ' and 'bàba māma' to mean 'my'." },
          { target: 'Bàba zài Yīngguó', native: 'Dad is in England', correct: false, feedback: "She asked about both parents — answer for both. Use 'bàba māma' together." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tāmen shēntǐ hǎo ma?',
        native: 'Are they in good health?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice she didn't just ask where — she asked about their health. In Chinese, asking about parents always loops back to caring for them. You handled it beautifully.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Dad (in Mandarin)', correct: ['Bàba', 'Baba', 'baba', 'bàba', '爸爸'] },
      { prompt: 'My parents', correct: ['Wǒ de bàba māma', 'Wo de baba mama', 'wo de baba mama', 'wǒ de bàba māma', '我的爸爸妈妈'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of one specific thing your bàba or māma taught you. Whisper it to yourself in Chinese: 'Wǒ de bàba/māma...' — even if you only know that much. Naming them in a new language is its own act of love.",
    rwenSignoff: "Family is the first room you ever lived in. We're going to walk through every door of it. Míngtiān jiàn — see you tomorrow.",
  },

  phase8: {
    scenario: "Sunday dim sum at a bustling Shanghai restaurant. Trolleys of bamboo steamers rolling past, your partner's family circling the lazy Susan. The auntie sitting across from you pours tea into your cup — a gesture that means it's your turn to talk. She wants to know about your bàba and māma.",
    rwenRole: "Lǐ Āyí (李阿姨) — your partner's auntie, mid-50s, warm but observant. She'll ask about your parents' health, where they live, and what they do. She uses 'bàba māma' (not 父母 fùmǔ) because this is family talk, not paperwork.",
    successCriteria: "User uses 'wǒ de bàba māma' (with the 'de'), refers to their parents as 'bàba' and 'māma' rather than English 'mum/dad', and answers her follow-up about their health using a simple positive phrase.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
