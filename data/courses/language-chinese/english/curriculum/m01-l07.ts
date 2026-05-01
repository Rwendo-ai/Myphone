import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-pleased',
  module: 1,
  lesson: 7,
  title: 'Hěn gāoxìng — Pleased / Glad',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Hěn' literally means 'very' — but it sneaks in front of every adjective whether you mean 'very' or not. 'Wǒ hěn hǎo' just means 'I'm well'. The 'hěn' is a grammar habit, not really an intensifier. Don't translate it word-for-word.",
    culturalNote: "'Huānyíng' (welcome) is everywhere in China — printed on shop doors, said by waiters, broadcast at airports. Saying it back to someone who welcomes you isn't expected, but a smile and 'xièxie' is. 'Wǒ yě shì' (me too) keeps small talk flowing.",
  },

  chunks: [
    {
      id: 'hen_gaoxing',
      target: 'Hěn gāoxìng',
      native: 'Very glad / pleased',
      literal: '(很高兴) lit: very-high-spirit',
      emoji: '😊',
      phonetic: 'hun GOW-shing ("x" = "sh")',
      audioRef: null,
    },
    {
      id: 'wo_ye_shi',
      target: 'Wǒ yě shì',
      native: 'Me too',
      literal: '(我也是) lit: I-also-am',
      emoji: '🙋',
      phonetic: 'WAW yeh shr',
      audioRef: null,
    },
    {
      id: 'huanying',
      target: 'Huānyíng',
      native: 'Welcome',
      literal: '(欢迎) lit: joyfully-greet',
      emoji: '🎉',
      phonetic: 'hwahn-YING',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Hěn" amplifier (often invisible)',
    explanation: "Mandarin almost always pairs adjectives with 'hěn' — even when you mean plain 'good', not 'very good'. Without 'hěn', the sentence sounds incomplete or comparative ('I'm GOODER than them'). Just learn the habit: hěn + adjective.",
    examples: [
      { target: 'Hěn hǎo', native: 'Good (lit: very good)' },
      { target: 'Hěn gāoxìng', native: 'Glad / pleased' },
      { target: 'Hěn lèi', native: 'Tired' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Hěn gāoxìng', right: 'Pleased / glad' },
        { left: 'Wǒ yě shì', right: 'Me too' },
        { left: 'Huānyíng', right: 'Welcome' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Welcome (greeting a guest)',
      correct: ['Huānyíng', 'Huanying', 'huanying', 'huānyíng', '欢迎'],
    },
    {
      type: 'fill_blank',
      instruction: 'Someone says "Hěn gāoxìng rènshi nǐ" — reply',
      sentence: 'Wǒ _____ shì',
      options: ['yě', 'hěn', 'jiào'],
      correct: 'yě',
      context: '"Yě" = also/too. "Wǒ yě shì" = "me too" — a perfect mirror reply.',
    },
    {
      type: 'build_sentence',
      instruction: 'Welcome a guest warmly to your office',
      words: ['huānyíng', 'rènshi nǐ', 'gāoxìng', 'hěn'],
      correct: ['huānyíng', 'hěn', 'gāoxìng', 'rènshi nǐ'],
      translation: 'Welcome — pleased to meet you',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — agreement to "pleased to meet you"',
      prompt: 'Me too',
      correct: ['Wǒ yě shì', 'Wo ye shi', 'wo ye shi', 'wǒ yě shì', '我也是'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why does "Wǒ hěn hǎo" use "hěn" (very) — even if you don\'t mean "very"?',
      question: 'Pick the best explanation',
      options: [
        { text: "Mandarin grammar pairs adjectives with 'hěn' — without it, the sentence sounds incomplete or comparative", correct: true },
        { text: "It's a regional Beijing thing — the south skips 'hěn'", correct: false },
        { text: "'Hěn' actually means 'I' in this context", correct: false },
      ],
      explanation: "It's a grammatical filler, not an intensifier. 'Wǒ hǎo' alone sounds like 'I'm gooder' (i.e. comparative) — like an unfinished thought. So Mandarin defaults to 'hěn + adjective' for any plain statement.",
    },
  ],

  rwenDialogue: {
    intro: "You've arrived at a Hong Kong office for a business meeting. Your contact, who you've only emailed before, comes out of the lift to greet you in the lobby — smiling, hand outstretched.",
    lines: [
      {
        speaker: 'npc',
        target: 'Huānyíng! Hěn gāoxìng rènshi nǐ',
        native: 'Welcome! Pleased to meet you',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ yě shì, xièxie', native: 'Me too, thank you', correct: true, feedback: 'Mirror plus thanks — exactly the warmth this moment wants.' },
          { target: 'Bù kèqi', native: "You're welcome", correct: false, feedback: 'They welcomed YOU — they\'re not thanking you. Don\'t reply with "you\'re welcome".' },
          { target: 'Zàijiàn', native: 'Goodbye', correct: false, feedback: "You just arrived. Don't say goodbye." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Qǐng gēn wǒ lái',
        native: 'Please come with me',
      },
      {
        speaker: 'rwen',
        rwenLine: "Three words and you're already across the threshold. 'Wǒ yě shì' is small but it does so much work — it returns the warmth without showing off vocabulary you don't have yet.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Welcome',
        correct: ['Huānyíng', 'Huanying', 'huanying', 'huānyíng', '欢迎'],
      },
      {
        prompt: 'Me too (reply)',
        correct: ['Wǒ yě shì', 'Wo ye shi', 'wo ye shi', 'wǒ yě shì', '我也是'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Welcome someone today — even your housemate coming home — with 'Huānyíng!'. Bonus: when someone agrees with you, reply 'Wǒ yě shì'.",
    rwenSignoff: "Warmth is a verb in Mandarin. Practise it. Huānyíng huí lái — welcome back.",
  },

  phase8: {
    scenario: "10am, lobby of a Central Hong Kong office tower. You've taken the lift up 38 floors and the receptionist has paged your contact. He emerges from the glass meeting-room corridor — the man you've only seen in email signatures — and walks across the lobby toward you with a friendly wave and a 'Huānyíng!'.",
    rwenRole: "Chén xiānsheng (陈先生) — your business contact, late 30s, Hong Kong native, fluent Cantonese-Mandarin-English. He'll greet you in Mandarin out of courtesy and because you mentioned you're learning. Will switch to English for actual business.",
    successCriteria: "User receives the welcome with 'Wǒ yě shì' or 'Hěn gāoxìng rènshi nǐ' (NOT 'Bù kèqi'), uses 'xièxie' for the welcome, and ideally adds a 'Huānyíng' callback later if appropriate. They should sound warm, not transactional.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
