import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-family-status',
  module: 3,
  lesson: 4,
  title: 'Jiéhūn? Háizi? — Married? Kids?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Nǐ jiéhūn le ma?' — Are you married? The little particle 'le' (了) at the end is doing real work. It's not a tense; it's a *change-of-state* marker. The question literally is 'Have you become married?' — implying a status change has (or hasn't) happened. This 'le' shows up everywhere in Mandarin once you start listening.",
    culturalNote: "Marriage and kids are common questions in Chinese small talk, especially from older relatives or new acquaintances. It's not intrusive — it's how people slot you into the family map. Counting kids needs the measure word 'gè' (个): not 'liǎng háizi' but 'liǎng gè háizi' — two (gè) kids. Numbers and people are always mediated by a measure word.",
  },

  chunks: [
    {
      id: 'ni_jiehun_le_ma',
      target: 'Nǐ jiéhūn le ma?',
      native: 'Are you married?',
      literal: '(你结婚了吗?) lit: you-marry-(state-change)-(question)',
      emoji: '💍',
      phonetic: 'nee jyeh-HOON luh ma',
      audioRef: null,
    },
    {
      id: 'wo_you_liang_ge_haizi',
      target: 'Wǒ yǒu liǎng gè háizi',
      native: 'I have two kids',
      literal: '(我有两个孩子) lit: I-have-two-(measure)-child',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'WAW yo lyahng guh HIGH-dzuh',
      audioRef: null,
    },
    {
      id: 'wo_danshen',
      target: 'Wǒ dānshēn',
      native: "I'm single",
      literal: '(我单身) lit: I-single-body',
      emoji: '🙋',
      phonetic: 'WAW dahn-SHUN',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Le" — change of state, and "gè" — the universal measure word',
    explanation: "Two patterns today. (1) 'Le' (了) on a verb signals 'a state has changed': 'jiéhūn le' = 'have become married'. So 'Nǐ jiéhūn le ma?' is closer to 'Have you got married?' than the static 'Are you married?' (2) When counting people or general items, you can't say 'two kids' — you must insert 'gè' (个): 'liǎng gè háizi' (two-gè-kids). 'Gè' is the default measure word; you'll meet specific ones later.",
    examples: [
      { target: 'Nǐ jiéhūn le ma? (你结婚了吗?)', native: 'Have you got married? — "le" = state changed' },
      { target: 'Liǎng gè háizi (两个孩子)', native: 'Two kids — "gè" required between number and noun' },
      { target: 'Sān gè péngyou (三个朋友)', native: 'Three friends — same pattern: number + gè + noun' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pinyin to its meaning',
      pairs: [
        { left: 'Nǐ jiéhūn le ma?', right: 'Are you married?' },
        { left: 'Wǒ yǒu liǎng gè háizi', right: 'I have two kids' },
        { left: 'Wǒ dānshēn', right: "I'm single" },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'I have two kids',
      correct: ['Wǒ yǒu liǎng gè háizi', 'Wo you liang ge haizi', 'wo you liang ge haizi', 'wǒ yǒu liǎng gè háizi', '我有两个孩子'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete — you're saying you have three kids",
      sentence: 'Wǒ yǒu sān _____ háizi',
      options: ['gè', 'shì', 'le'],
      correct: 'gè',
      context: 'Numbers attach to nouns through a measure word. "Gè" is the default — works for kids, friends, people, things in general.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the natural question',
      question: 'You want to ask if your colleague is married. Which is right?',
      options: [
        { text: 'Nǐ jiéhūn le ma?', correct: true },
        { text: 'Nǐ shì jiéhūn?', correct: false },
        { text: 'Nǐ jiéhūn?', correct: false },
      ],
      explanation: 'The "le ma" pair is what makes it a natural Mandarin question — "le" marks the state-change, "ma" marks the question.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm single",
      correct: ['Wǒ dānshēn', 'Wo danshen', 'wo danshen', 'wǒ dānshēn', '我单身'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Have you got married?"',
      words: ['ma?', 'Nǐ', 'le', 'jiéhūn'],
      correct: ['Nǐ', 'jiéhūn', 'le', 'ma?'],
      translation: 'Have you got married?',
    },
  ],

  rwenDialogue: {
    intro: "Language exchange café in Chengdu, 7pm. You've matched with a local for a one-hour swap — half English, half Mandarin. Tea steaming between you. They've covered work and age; now the family questions land.",
    lines: [
      {
        speaker: 'npc',
        target: 'Nǐ jiéhūn le ma? Yǒu háizi ma?',
        native: 'Are you married? Got kids?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Jiéhūn le, wǒ yǒu liǎng gè háizi', native: 'Yes, married — I have two kids', correct: true, feedback: '"Jiéhūn le" answers the state-change question, then "liǎng gè háizi" with the proper measure word. Two clean answers.' },
          { target: 'Wǒ yǒu liǎng háizi', native: 'I have two kids', correct: false, feedback: 'You skipped the measure word. Number + noun ALWAYS needs a measure word in Mandarin — here, "gè": "liǎng gè háizi".' },
          { target: 'Wǒ shì dānshēn', native: 'I am single', correct: false, feedback: '"Dānshēn" works on its own — drop "shì": "Wǒ dānshēn". Also, this answers a different question than what they asked.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'A, hěn hǎo! Wǒ yě yǒu yí gè háizi',
        native: 'Ah, lovely! I have one kid too',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice 'yí gè háizi' — even for ONE kid, the measure word stays. 'Gè' is the rail; numbers and nouns ride on it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Are you married?',
        correct: ['Nǐ jiéhūn le ma?', 'Ni jiehun le ma?', 'ni jiehun le ma', 'Nǐ jiéhūn le ma', 'nǐ jiéhūn le ma', '你结婚了吗?', '你结婚了吗'],
      },
      {
        prompt: 'I have two kids',
        correct: ['Wǒ yǒu liǎng gè háizi', 'Wo you liang ge haizi', 'wo you liang ge haizi', 'wǒ yǒu liǎng gè háizi', '我有两个孩子'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick whichever describes you — 'Wǒ jiéhūn le' / 'Wǒ dānshēn' / 'Wǒ yǒu ___ gè háizi' — and say it out loud once. Twice if you can manage it without flinching at 'gè'.",
    rwenSignoff: "Family in three sentences. Tomorrow: what you LIKE. Zàijiàn.",
  },

  phase8: {
    scenario: "Language exchange café in Chengdu, 7:15pm. Warm yellow light, two cups of jasmine tea between you, your exchange partner across the small wooden table. The first 15 minutes were in English (their request — they wanted to practise). Now the deal flips: 30 minutes of Mandarin. They've already asked your name, age and job. Now they want to know about your family — and they're patient enough to wait for full sentences.",
    rwenRole: "Liú Yáng (刘洋) — your language partner, late 20s, English teacher, just engaged. She's a generous listener who'll wait through your pauses and gently add the measure word if you forget. She'll share her own family status in return.",
    successCriteria: "User correctly uses 'le' in 'jiéhūn le' (or 'jiéhūn le ma' if asking back), AND uses the measure word 'gè' between any number and 'háizi' (e.g. 'liǎng gè háizi', 'yí gè háizi'). If single, they say 'Wǒ dānshēn' without 'shì'. Bonus: they ask back with 'Nǐ ne?'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
