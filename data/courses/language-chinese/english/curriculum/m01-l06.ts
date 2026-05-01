import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-where-from',
  module: 1,
  lesson: 6,
  title: 'Nǐ shì nǎ guó rén? — Where are you from?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Shì' is the Mandarin 'am/is/are' — but only for identity, not feelings. 'I'm a teacher' uses shì. 'I'm tired' doesn't. Today, you're learning to say which country you're from — using 'shì'.",
    culturalNote: "Chinese builds nationality compactly: country + 'rén' (person). Měiguó-rén = American, Yīngguó-rén = British, Àozhōu-rén = Australian. Strangers asking where you're from is friendly, not nosy — it's small talk.",
  },

  chunks: [
    {
      id: 'na_guo_ren',
      target: 'Nǐ shì nǎ guó rén?',
      native: "What's your nationality?",
      literal: '(你是哪国人?) lit: you-are-which-country-person?',
      emoji: '🌏',
      phonetic: 'nee shr NAH gwaw run',
      audioRef: null,
    },
    {
      id: 'wo_shi_ren',
      target: 'Wǒ shì... rén',
      native: "I'm [nationality]",
      literal: '(我是...人) lit: I-am-...-person',
      emoji: '🪪',
      phonetic: 'WAW shr ... run',
      audioRef: null,
    },
    {
      id: 'wo_cong_lai',
      target: 'Wǒ cóng... lái',
      native: 'I come from...',
      literal: '(我从...来) lit: I-from-...-come',
      emoji: '✈️',
      phonetic: 'WAW tsong ... lye',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Shì" (am/is) for identity',
    explanation: "'Shì' links subject to noun: I-am-X, you-are-Y. For nationality, the X is [country]+rén. 'Cóng...lái' is the alternate pattern: 'from-X-come' — note the verb 'lái' (come) lands at the end.",
    examples: [
      { target: 'Wǒ shì Měiguó rén', native: "I'm American (US person)" },
      { target: 'Wǒ shì Yīngguó rén', native: "I'm British (UK person)" },
      { target: 'Wǒ cóng Lúndūn lái', native: 'I come from London' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Nǐ shì nǎ guó rén?', right: "What's your nationality?" },
        { left: 'Wǒ shì... rén', right: "I'm [nationality]" },
        { left: 'Wǒ cóng... lái', right: 'I come from...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tell someone you're British",
      sentence: 'Wǒ _____ Yīngguó rén',
      options: ['shì', 'jiào', 'hǎo'],
      correct: 'shì',
      context: '"Shì" for identity — "I am [identity]". "Jiào" was for names only.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "What's your nationality? (literally: which country person)",
      correct: ['Nǐ shì nǎ guó rén?', 'Ni shi na guo ren?', 'ni shi na guo ren', 'nǐ shì nǎ guó rén', '你是哪国人?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell someone you come from London',
      words: ['lái', 'Wǒ', 'Lúndūn', 'cóng'],
      correct: ['Wǒ', 'cóng', 'Lúndūn', 'lái'],
      translation: 'I come from London',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — "I am American"',
      prompt: "I'm American",
      correct: ['Wǒ shì Měiguó rén', 'Wo shi Meiguo ren', 'wo shi meiguo ren', 'wǒ shì měiguó rén', '我是美国人'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why does "Wǒ cóng Lúndūn lái" put "lái" (come) at the end?',
      question: 'Pick the explanation',
      options: [
        { text: "Mandarin pattern: prepositional phrases come before the verb. So 'from London' (cóng Lúndūn) comes BEFORE 'come' (lái).", correct: true },
        { text: "It's a typo — 'lái' should be at the start", correct: false },
        { text: "'Lái' is just a sound — it has no meaning", correct: false },
      ],
      explanation: "Mandarin verb word-order: prepositional phrases (from-where, with-whom, at-when) come BEFORE the main verb. English does the opposite. This is one of Mandarin's biggest grammar shifts.",
    },
  ],

  rwenDialogue: {
    intro: "You're on the Shanghai metro — packed Tuesday morning. The friendly older woman next to you notices your accent on a phone call and waits politely for you to hang up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bù hǎoyìsi, nǐ shì nǎ guó rén?',
        native: "Sorry to ask — what's your nationality?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ shì Àozhōu rén, cóng Sydney lái', native: "I'm Australian, I come from Sydney", correct: true, feedback: 'Two-part answer — nationality and city. She\'ll love that.' },
          { target: 'Wǒ jiào Àozhōu', native: "I'm called Australia", correct: false, feedback: '"Jiào" is for names — you used the wrong verb. Use "shì" for "am [country]-person".' },
          { target: 'Nǐ hǎo', native: 'Hello', correct: false, feedback: "She just asked you a real question. Don't deflect — answer her." },
        ],
      },
      {
        speaker: 'npc',
        target: "Ó, Sydney! Wǒ qù guo, hěn měi",
        native: "Oh, Sydney! I've been there — very beautiful",
      },
      {
        speaker: 'rwen',
        rwenLine: "Look at that — a metro stranger turned into a tiny travel chat. 'Wǒ shì ... rén' opens this conversation a thousand times. You're ready for it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "What's your nationality? (Mandarin)",
        correct: ['Nǐ shì nǎ guó rén?', 'Ni shi na guo ren?', 'ni shi na guo ren', 'nǐ shì nǎ guó rén', '你是哪国人?'],
      },
      {
        prompt: "I come from London",
        correct: ['Wǒ cóng Lúndūn lái', 'Wo cong Lundun lai', 'wo cong lundun lai', 'wǒ cóng lúndūn lái', '我从伦敦来'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your nationality in Mandarin out loud once today. If you're American: 'Wǒ shì Měiguó rén'. British: 'Wǒ shì Yīngguó rén'. Aussie: 'Wǒ shì Àozhōu rén'. Get the rhythm.",
    rwenSignoff: "Where you're from is half the conversation. Now you can answer in Mandarin.",
  },

  phase8: {
    scenario: "Tuesday morning rush hour on Shanghai's Line 2. You're crammed into the carriage between commuters, holding the rail. The friendly woman beside you overheard you on the phone in English a moment ago. The train slows for the next station. She turns and starts a small chat in Mandarin.",
    rwenRole: "Liú āyí (刘阿姨) — Shanghai local, late 50s, retired teacher, curious and warm. She'll ask where you're from and whether you've visited X, Y, Z places. Will speak slightly slower for you and smile if your tones are off.",
    successCriteria: "User answers 'Wǒ shì [country] rén' with the correct verb 'shì' (NOT 'jiào'), bonus for adding 'Wǒ cóng [city] lái' to give a city. Asks her back using 'Nǐ ne?' or 'Nǐ shì nǎ guó rén?'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
