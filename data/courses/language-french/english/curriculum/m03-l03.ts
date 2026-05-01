import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-job',
  module: 3,
  lesson: 3,
  title: 'Que faites-vous? — What do you do?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In France, the job question doesn't quite mirror English. Nobody says 'Quel est votre travail?' (literally 'what's your job') — it sounds clinical, almost like a form. The natural question is 'Que faites-vous?' — 'What do you do?'",
    culturalNote: "Two things differ from English. First, French uses faire (to do/make) for occupations: 'Que faites-vous (dans la vie)?' literally 'what do you do (in life)?'. Second, French drops the article before professions with être — 'Je suis professeur' (NOT 'je suis UN professeur'). Adding 'un/une' is grammatical but sounds odd, like a slogan.",
  },

  chunks: [
    {
      id: 'que_faites_vous',
      target: 'Que faites-vous?',
      native: 'What do you do? (formal)',
      literal: 'What do-you?',
      emoji: '💼',
      phonetic: 'kuh fet VOO',
      audioRef: null,
    },
    {
      id: 'je_travaille_dans',
      target: 'Je travaille dans la finance',
      native: 'I work in finance',
      literal: 'I work in the finance',
      emoji: '🏢',
      phonetic: 'zhuh tra-VYE dahn la fee-NAHNS',
      audioRef: null,
    },
    {
      id: 'je_suis_professeur',
      target: 'Je suis professeur',
      native: "I'm a teacher",
      literal: 'I am teacher',
      emoji: '👩‍🏫',
      phonetic: 'zhuh swee pro-feh-SUHR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Faire (do/make) and être (be) for jobs',
    explanation: "Two ways to talk about work. (1) 'Que faites-vous?' / 'Je travaille dans...' — describes the field (finance, l'éducation, le marketing). (2) 'Je suis [job]' — names the role itself, with NO article. Note: most job nouns also have feminine forms (un professeur is changing — 'une professeure' is now widely used).",
    examples: [
      { target: 'Je travaille dans le marketing', native: 'I work in marketing' },
      { target: 'Je suis ingénieur(e)', native: "I'm an engineer (no 'un/une')" },
      { target: 'Que faites-vous dans la vie?', native: 'What do you do (for a living)?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Que faites-vous?', right: 'What do you do?' },
        { left: 'Je travaille dans la finance', right: 'I work in finance' },
        { left: 'Je suis professeur', right: "I'm a teacher" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the way a French speaker really asks about work.',
      sentence: 'Que _____ -vous dans la vie?',
      options: ['faites', 'êtes', 'avez'],
      correct: 'faites',
      context: "Faire (to do) is the natural verb for the job question. 'Que faites-vous?' is what you'll actually hear.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — name your profession',
      prompt: "I'm a teacher",
      correct: ['Je suis professeur', 'je suis professeur', 'Je suis professeure'],
    },
    {
      type: 'build_sentence',
      instruction: "A new acquaintance just asked what you do. Say you work in marketing.",
      words: ['marketing', 'travaille', 'le', 'Je', 'dans'],
      correct: ['Je', 'travaille', 'dans', 'le', 'marketing'],
      translation: 'I work in marketing',
    },
    {
      type: 'multiple_choice',
      instruction: "Which sentence sounds NATURAL in French to introduce yourself as an engineer?",
      question: 'Pick the most natural form',
      options: [
        { text: 'Je suis ingénieur', correct: true },
        { text: 'Je suis un ingénieur', correct: false },
        { text: "J'ai un ingénieur", correct: false },
      ],
      explanation: "French drops the article (un/une) with être + profession. 'Je suis un ingénieur' is grammatical but sounds like an advert. Just 'Je suis ingénieur'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — ask a stranger politely what they do for a living',
      prompt: 'What do you do (for a living)?',
      correct: ['Que faites-vous dans la vie?', 'Que faites-vous dans la vie', 'Que faites-vous?'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a networking apéro in the Marais. A guest, Marc, has just shaken your hand and is making real conversation, not small talk.",
    lines: [
      {
        speaker: 'npc',
        target: 'Et vous, que faites-vous dans la vie?',
        native: 'And you, what do you do (for a living)?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Je travaille dans la finance, et vous?', native: 'I work in finance, and you?', correct: true, feedback: 'Field, then bounce it back — perfect French networking.' },
          { target: 'Quel est mon travail? La finance.', native: "What's my job? Finance. (literal-translation feel)", correct: false, feedback: 'Grammatical but stilted. French speakers don\'t answer with that structure — try "Je travaille dans la finance".' },
          { target: 'Je suis un finance', native: 'I am a finance (broken)', correct: false, feedback: '"Finance" is a field, not a profession. "Je travaille dans la finance" or "Je suis financier(e)".' },
        ],
      },
      {
        speaker: 'npc',
        target: "Ah, intéressant — moi, je suis professeur d'histoire à Sciences Po.",
        native: 'Ah, interesting — I\'m a history teacher at Sciences Po.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice he said 'je suis professeur' — no 'un'. That's the cleanest way. The French job conversation just opened up.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'What do you do? (formal, in French)',
        correct: ['Que faites-vous?', 'Que faites-vous', 'que faites-vous?'],
      },
      {
        prompt: "I'm a teacher (in French — natural form)",
        correct: ['Je suis professeur', 'je suis professeur', 'Je suis professeure'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe your job in French today, out loud. Pick the form that fits — 'Je travaille dans ___' for the field, or 'Je suis ___' for the title (with no 'un/une').",
    rwenSignoff: "Le travail, c'est ce qu'on fait, pas seulement ce qu'on est. À demain.",
  },

  phase8: {
    scenario: "First Monday at a French co-working space in the 11th arrondissement. A neighbour at the next desk, Marc, swivels his chair around at lunch and asks the classic 'Que faites-vous?' to learn what brings you here.",
    rwenRole: "Marc — a UX designer, ~35, easy-going and curious; he asks 'Que faites-vous dans la vie?' first, then follows up with 'Vous travaillez ici à Paris ou à distance?' and 'Et ça vous plaît?'. He keeps the energy professional but warm.",
    successCriteria: "User answers using EITHER 'Je travaille dans [le marketing / la finance / l'éducation / etc.]' OR 'Je suis [profession]' WITHOUT 'un/une' before the profession. User does NOT translate 'I am a teacher' as 'Je suis un professeur'. Bonus if user bounces the question back ('Et vous?').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
