import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-des',
  module: 4,
  lesson: 4,
  title: 'Des — Some / Any (plural)',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "English drops the article all the time — 'I have friends', 'we ate apples'. French won't let you. Some always shows up: 'J'ai des amis', 'On a mangé des pommes'. Today: des — the plural cousin of un/une.",
    culturalNote: "This is one of the most common silent mistakes English speakers make. We say 'Do you have friends?' — French ears want 'Avez-vous des amis?' Without des, the sentence sounds chopped, almost wrong. Des is the glue you didn't know you needed.",
  },

  chunks: [
    {
      id: 'des_pommes',
      target: 'Des pommes',
      native: 'Some apples',
      literal: '(Some)(plural) apples',
      emoji: '🍎',
      phonetic: 'day POMM',
      audioRef: null,
    },
    {
      id: 'des_questions',
      target: 'Des questions',
      native: 'Some questions',
      literal: '(Some)(plural) questions',
      emoji: '❓',
      phonetic: 'day kess-tee-OHN',
      audioRef: null,
    },
    {
      id: 'avez_vous_des_amis',
      target: 'Avez-vous des amis?',
      native: 'Do you have any friends?',
      literal: 'Have-you (some) friends?',
      emoji: '👥',
      phonetic: 'ah-vay-VOO day-zah-MEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Des — plural indefinite article',
    explanation: "Des is the plural of un/une. Use it for 'some' or 'any' — and even where English uses no article at all. 'Friends' = des amis. 'Apples' = des pommes. If a plural noun is unspecified, des shows up.",
    examples: [
      { target: 'Un livre → Des livres', native: 'A book → Some books' },
      { target: 'Une question → Des questions', native: 'A question → Some questions' },
      { target: 'J’ai des idées', native: 'I have (some) ideas' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Des pommes', right: 'Some apples' },
        { left: 'Des questions', right: 'Some questions' },
        { left: 'Avez-vous des amis?', right: 'Do you have any friends?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Choose the right article',
      sentence: "J’ai _____ amis à Paris.",
      options: ['les', 'des', 'un'],
      correct: 'des',
      context: "'Some friends' — unspecified plural. English drops the word; French doesn't.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Some apples',
      correct: ['Des pommes', 'des pommes'],
    },
    {
      type: 'translate',
      instruction: 'Type in French — formal',
      prompt: 'Do you have any friends?',
      correct: ['Avez-vous des amis?', 'Avez-vous des amis', 'avez-vous des amis?', 'avez-vous des amis'],
    },
    {
      type: 'multiple_choice',
      instruction: "Compare the meanings.",
      question: "What's the difference between 'les pommes' and 'des pommes'?",
      options: [
        { text: 'Les pommes = THE apples (specific). Des pommes = SOME apples (any).', correct: true },
        { text: "There's no difference; both mean 'apples'.", correct: false },
        { text: 'Les pommes is plural, des pommes is singular.', correct: false },
      ],
      explanation: "Les is definite — particular apples we know about. Des is indefinite — apples in general or some apples.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I have some questions for you"',
      words: ["J'ai", 'des', 'questions', 'pour', 'toi'],
      correct: ["J'ai", 'des', 'questions', 'pour', 'toi'],
      translation: 'I have some questions for you.',
    },
  ],

  rwenDialogue: {
    intro: "You're meeting a French colleague's kids for the first time. They peer up at you with curiosity. The mum asks if you've got questions ready.",
    lines: [
      {
        speaker: 'npc',
        target: 'Vous avez des questions pour eux?',
        native: 'Do you have any questions for them?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Oui, j’ai des questions!', native: 'Yes, I have some questions!', correct: true, feedback: 'Perfect — des slots in exactly where English would skip the word.' },
          { target: 'Oui, j’ai questions!', native: 'Yes, I have questions!', correct: false, feedback: "French won't let you drop the article. You need des before plural unspecified nouns." },
          { target: 'Oui, j’ai les questions!', native: 'Yes, I have the questions!', correct: false, feedback: 'Les would mean specific, known questions — like a test you brought. Use des for general ones.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Super! Allez-y.',
        native: 'Great! Go ahead.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Beautiful. Notice the rhythm: avez-vous des... j'ai des... that little 'des' is now in your toolkit.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Some apples (in French)', correct: ['Des pommes', 'des pommes'] },
      { prompt: 'I have some friends (in French)', correct: ["J'ai des amis", "j'ai des amis"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice three sentences today where English drops the word 'some' — 'I have ideas', 'we need questions', 'they made mistakes'. In your head, rebuild each one in French with des. Train your ear to expect it.",
    rwenSignoff: 'À demain. Des is small but it changes everything.',
  },

  phase8: {
    scenario: "You're at a French Sunday market in Aix-en-Provence. The vendor asks what you want. You're hosting a dinner — you need apples, tomatoes, herbs, eggs. Order using des correctly with each plural item.",
    rwenRole: "Monsieur Bertrand — the cheerful market vendor, late 60s, will offer 'autre chose?' (anything else?) and notice if you forget des.",
    successCriteria: "User uses 'des' before each plural unspecified noun (des pommes, des tomates, des herbes, des œufs), greets with bonjour, and politely closes with merci.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
