import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-sai',
  module: 3,
  lesson: 3,
  title: '〜歳 — How Old Are You?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Japanese has a special word — a counter — for almost everything. Pencils, flat objects, animals, machines — each one gets a different counter glued to the number. For age, it's 〜歳. Stick it on the number, and you have your age.",
    culturalNote: "Asking someone's age in Japan among new acquaintances is more common than in many Western cultures, especially in school or workplace settings — because senpai/kōhai (senior/junior) relationships are calibrated by age, not just rank. Knowing who's older helps everyone speak with the right level of politeness.",
  },

  chunks: [
    {
      id: 'nan_sai',
      target: '何歳ですか？ (Nansai desu ka?)',
      native: 'How old are you?',
      literal: 'what + 歳 (age-counter) + です + か (question)',
      emoji: '🎂',
      phonetic: 'NAN-sai des ka',
      audioRef: null,
    },
    {
      id: 'sanjuu_sai',
      target: '三十歳です (Sanjū-sai desu)',
      native: 'I am 30 years old',
      literal: '30 + 歳 + です',
      emoji: '🔢',
      phonetic: 'san-JŪ-sai des',
      audioRef: null,
    },
    {
      id: 'hatachi',
      target: '二十歳 (Hatachi)',
      native: '20 years old (special reading!)',
      literal: 'irregular reading for 20 — a milestone in Japan',
      emoji: '🎉',
      phonetic: 'ha-TA-chi',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Number] + 歳 (sai) — age counter',
    explanation: "Most ages are simple: number + 歳. 25 = 二十五歳 (nijūgo-sai). 40 = 四十歳 (yonjuu-sai). One important irregular: 20 is read 二十歳 → 「はたち」 (hatachi), not 「にじゅっさい」. 20 is the legal coming-of-age in Japan, big enough to keep its own word.",
    examples: [
      { target: '二十五歳です。', native: 'I am 25. (Nijūgo-sai desu.)' },
      { target: '三十二歳です。', native: 'I am 32. (Sanjūni-sai desu.)' },
      { target: '二十歳です。', native: 'I am 20. (Hatachi desu — irregular!)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: '何歳ですか？', right: 'How old are you?' },
        { left: '三十歳です', right: 'I am 30 years old' },
        { left: '二十歳 (hatachi)', right: '20 years old (special reading)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete "I am 30 years old"',
      sentence: '三十___です。',
      options: ['歳', 'さん', 'です'],
      correct: '歳',
      context: '〜歳 is the counter for years of age.',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'How old are you?',
      correct: ['Nansai desu ka?', 'Nansai desu ka', 'nansai desu ka', 'nansai desu ka?', '何歳ですか？', '何歳ですか'],
    },
    {
      type: 'multiple_choice',
      instruction: "How do you say '20 years old' in Japanese?",
      question: 'Choose the correct reading',
      options: [
        { text: 'Hatachi (はたち) — special reading for 20', correct: true },
        { text: 'Nijussai (にじゅっさい) — regular pattern', correct: false },
        { text: 'Nijū-nen (二十年) — that means "20 years", not age', correct: false },
      ],
      explanation: "20 is irregular — 二十歳 reads 「はたち」 (hatachi). It marks the legal age of adulthood in Japan, so it earned its own word. Every other age uses 〜歳 (sai) as the counter.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am 25 years old."',
      words: ['です', '二十五', 'は', 'わたし', '歳'],
      correct: ['わたし', 'は', '二十五', '歳', 'です'],
      translation: 'I am 25 years old.',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'I am 30 years old.',
      correct: ['Sanjū-sai desu', 'Sanjuu-sai desu', 'sanjū-sai desu', 'sanjuu sai desu', 'Sanjuusai desu', '三十歳です', 'わたしは三十歳です'],
    },
  ],

  rwenDialogue: {
    intro: "A weekly language exchange café in Kyoto. Your conversation partner — same age range as you — is filling in some basics over coffee.",
    lines: [
      {
        speaker: 'npc',
        target: '失礼ですが、何歳ですか？',
        native: "Excuse me — how old are you?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '三十歳です。', native: 'I am 30 years old.', correct: true, feedback: "Clean: number + 歳 + です. They'll mirror it back with their own age — that's the rhythm." },
          { target: '三十です。', native: '30. (no counter)', correct: false, feedback: "You dropped 歳. In Japanese the counter glues to the number — 三十歳です — without it, it sounds half-formed." },
          { target: '三十年です。', native: '30 years.', correct: false, feedback: "年 (nen) is for periods of time (e.g. 30 years of marriage). For age, use 歳 (sai)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'そうですか。私も三十歳です！',
        native: "Oh really? I'm 30 too!",
      },
      {
        speaker: 'rwen',
        rwenLine: "Number + 歳 + です. (Plus 二十 = はたち, the one irregular). Age in Japan opens the senpai/kōhai dance — and now you can place yourself in it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How old are you?', correct: ['Nansai desu ka?', 'Nansai desu ka', 'nansai desu ka', '何歳ですか？', '何歳ですか'] },
      { prompt: 'I am 30 years old.', correct: ['Sanjū-sai desu', 'Sanjuu-sai desu', 'Sanjuusai desu', 'sanjuusai desu', '三十歳です'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your age out loud in Japanese — [your number] 歳です. If you're 20, use はたち. Practice 何歳ですか？ as the question form too.",
    rwenSignoff: "Counters are how Japanese counts the world. You just learned one. また明日.",
  },

  phase8: {
    scenario: "Saturday morning language exchange at a small café in Kyoto's Demachiyanagi neighbourhood. Your conversation partner Aiko has poured matcha and asks the basics — name, job, age — to pace the next 45 minutes.",
    rwenRole: "Aiko — your weekly Kyoto language exchange partner, university researcher, mid-30s, gentle pace, will mirror your sentence pattern back to teach you the rhythm.",
    successCriteria: "User answers with [number] 歳 です (NOT just the number, NOT 年). If 20, uses はたち. Asks Aiko back with 「何歳ですか？」. Recognises why she asked — to calibrate senpai/kōhai politeness, not nosiness.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
