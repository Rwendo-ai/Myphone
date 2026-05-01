import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-happy-sad',
  module: 10,
  lesson: 1,
  title: 'Gāoxìng & Nánguò — Happy and Sad',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Welcome to the final module. We've been climbing the mountain — now we learn to feel in Mandarin. Today's word for sad is beautiful: 'nánguò' (难过) literally means 'hard to pass' — like a difficult moment you have to walk through.",
    culturalNote: "Chinese adjectives describing feelings almost always need 'hěn' (很 — very) to feel grammatical. 'Wǒ gāoxìng' sounds incomplete; 'Wǒ hěn gāoxìng' is natural. The 'hěn' here is so habitual it barely means 'very' anymore — it's just structural glue.",
  },

  chunks: [
    {
      id: 'wo_hen_gaoxing',
      target: 'Wǒ hěn gāoxìng',
      native: "I'm happy",
      literal: '(我很高兴) lit: I-very-high-spirit',
      emoji: '😊',
      phonetic: 'WAW hun GAO-shing',
      audioRef: null,
    },
    {
      id: 'wo_hen_nanguo',
      target: 'Wǒ hěn nánguò',
      native: "I'm sad",
      literal: '(我很难过) lit: I-very-hard-pass',
      emoji: '😢',
      phonetic: 'WAW hun NAN-gwaw',
      audioRef: null,
    },
    {
      id: 'ta_rang_wo_hen_gaoxing',
      target: 'Tā ràng wǒ hěn gāoxìng',
      native: 'It made me happy',
      literal: '(它让我很高兴) lit: it-let/cause-me-very-happy',
      emoji: '✨',
      phonetic: 'tah RAHNG waw hun GAO-shing',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Ràng" (让) — the causative',
    explanation: '"Ràng" means "let" or "cause" — and it lets you say what made you feel something. The pattern is: [thing] ràng [person] [feeling]. Subject of the feeling sits between ràng and the adjective.',
    examples: [
      { target: 'Tā ràng wǒ hěn gāoxìng', native: 'It made me happy' },
      { target: 'Nǐ ràng wǒ hěn nánguò', native: 'You made me sad' },
      { target: 'Zhè ge gùshi ràng wǒ xiào', native: 'This story made me laugh' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Wǒ hěn gāoxìng', right: "I'm happy" },
        { left: 'Wǒ hěn nánguò', right: "I'm sad" },
        { left: 'Tā ràng wǒ hěn gāoxìng', right: 'It made me happy' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I\'m happy."',
      sentence: 'Wǒ _____ gāoxìng.',
      options: ['hěn', 'ràng', 'le'],
      correct: 'hěn',
      context: 'Mandarin adjectives almost always need "hěn" — even when you don\'t mean "very".',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm sad",
      correct: ['Wǒ hěn nánguò', 'Wo hen nanguo', 'wo hen nanguo', 'wǒ hěn nánguò', '我很难过'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "It made me happy."',
      words: ['gāoxìng', 'Tā', 'ràng', 'hěn', 'wǒ'],
      correct: ['Tā', 'ràng', 'wǒ', 'hěn', 'gāoxìng'],
      translation: 'It made me happy',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm happy",
      correct: ['Wǒ hěn gāoxìng', 'Wo hen gaoxing', 'wo hen gaoxing', 'wǒ hěn gāoxìng', '我很高兴'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why does "nánguò" (难过) mean sad?',
      question: 'The two characters literally mean...',
      options: [
        { text: '"hard to pass" — sadness as a moment hard to walk through', correct: true },
        { text: '"black sky" — gloom imagery', correct: false },
        { text: '"lost heart" — heart imagery', correct: false },
      ],
      explanation: 'Nán (难) = hard, guò (过) = pass/cross. A sadness you have to walk through.',
    },
  ],

  rwenDialogue: {
    intro: "A friend texts you: their grandmother just passed away. You meet them at a quiet teahouse. They look up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Wǒ hěn nánguò',
        native: "I'm so sad",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wǒ zhīdào. Tā ràng nǐ hěn nánguò.', native: 'I know. She made you very [she meant much to you].', correct: true, feedback: 'Gentle and present. You named the feeling without rushing past it.' },
          { target: 'Wǒ hěn gāoxìng', native: "I'm happy", correct: false, feedback: "Wrong moment for happy — read the room." },
          { target: 'Méi guānxi', native: "It's nothing", correct: false, feedback: "This dismisses their grief. Stay with them." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Xièxie nǐ',
        native: 'Thank you',
      },
      {
        speaker: 'rwen',
        rwenLine: "Sitting with someone's sadness without trying to fix it — that's a gift in any language. Beautifully done.",
        rwenAnimation: 'gentle',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm happy (in Mandarin)",
        correct: ['Wǒ hěn gāoxìng', 'Wo hen gaoxing', 'wo hen gaoxing', '我很高兴'],
      },
      {
        prompt: "I'm sad (in Mandarin)",
        correct: ['Wǒ hěn nánguò', 'Wo hen nanguo', 'wo hen nanguo', '我很难过'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Once today, name your actual feeling out loud in Mandarin — 'Wǒ hěn gāoxìng' or 'Wǒ hěn nánguò'. Don't perform it. Just notice and name.",
    rwenSignoff: "Naming a feeling makes it smaller. We start the last climb here.",
  },

  phase8: {
    scenario: "A Chinese friend in Shanghai messages you that they failed an important exam. You meet at a small teahouse near People's Square. The waiter brings tea. Your friend looks tired.",
    rwenRole: "Lǐ Wěi (李伟) — university friend, 22, just failed their grad school entrance exam. Heartbroken but trying to hide it. Will open up if you create space.",
    successCriteria: "User uses 'Wǒ hěn nánguò' to mirror their friend's feeling, asks what happened, and at some point uses the 'ràng' causative pattern (e.g., 'Zhè ge ràng nǐ hěn nánguò').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
