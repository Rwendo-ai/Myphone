import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-languages',
  module: 3,
  lesson: 6,
  title: 'Les langues que je parle — Languages',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Multilingual France adores asking what languages you speak — and what you're trying to learn. You already speak French (a little — that counts!). Today: how to say it without false modesty or false confidence.",
    culturalNote: "Two French quirks here. (1) Languages are masculine and lowercase: 'le français', 'l'anglais', 'l'espagnol' — and you DON'T capitalise them like English does. (2) With 'parler', you DROP the article: 'Je parle français' (NOT 'le français'). With 'aimer/apprendre', you KEEP it: 'J'apprends le français'. Tiny rule, big difference.",
  },

  chunks: [
    {
      id: 'je_parle_anglais',
      target: 'Je parle anglais',
      native: 'I speak English',
      literal: 'I speak English',
      emoji: '🇬🇧',
      phonetic: 'zhuh PARL ahn-GLEH',
      audioRef: null,
    },
    {
      id: 'un_peu_de_francais',
      target: 'Un peu de français',
      native: 'A little French',
      literal: 'A bit of French',
      emoji: '🥖',
      phonetic: 'uhn puh duh frahn-SEH',
      audioRef: null,
    },
    {
      id: 'je_veux_apprendre',
      target: 'Je veux apprendre',
      native: 'I want to learn',
      literal: 'I want to-learn',
      emoji: '📖',
      phonetic: 'zhuh vuh ah-PRAHN-druh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Parler + language (no article) vs apprendre + language (article)',
    explanation: "After 'parler' (to speak), drop the article: 'Je parle anglais.' After most other verbs (apprendre, étudier, aimer), keep it: 'J'apprends LE français.' And to soften your level, French uses 'un peu DE' (a bit of) — note the 'de', not 'du'. 'Je parle un peu DE français.'",
    examples: [
      { target: 'Je parle anglais et un peu de français', native: 'I speak English and a little French' },
      { target: "J'apprends le français depuis six mois", native: "I've been learning French for six months" },
      { target: 'Je veux apprendre l\'espagnol', native: 'I want to learn Spanish' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Je parle anglais', right: 'I speak English' },
        { left: 'Un peu de français', right: 'A little French' },
        { left: 'Je veux apprendre', right: 'I want to learn' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the modest answer about your French.',
      sentence: 'Je parle un peu _____ français.',
      options: ['de', 'du', 'le'],
      correct: 'de',
      context: "'Un peu DE' — always 'de', no 'le'. 'Un peu du français' is wrong, even though 'du' looks right.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — say you speak English',
      prompt: 'I speak English',
      correct: ['Je parle anglais', 'je parle anglais'],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell a French speaker you want to learn Spanish.',
      words: ["l'espagnol", 'apprendre', 'veux', 'Je'],
      correct: ['Je', 'veux', 'apprendre', "l'espagnol"],
      translation: 'I want to learn Spanish',
    },
    {
      type: 'multiple_choice',
      instruction: "Which is the natural answer to 'Vous parlez français?'",
      question: 'Pick the most natural reply',
      options: [
        { text: 'Un peu de français, oui', correct: true },
        { text: 'Un peu du français', correct: false },
        { text: 'Petit français', correct: false },
      ],
      explanation: "'Un peu DE' is fixed — never 'du', even though that's the usual partitive. 'Petit français' isn't an expression — it sounds like 'small French (person)'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — say you want to learn',
      prompt: 'I want to learn',
      correct: ['Je veux apprendre', 'je veux apprendre'],
    },
  ],

  rwenDialogue: {
    intro: "Bus station in Lyon. The woman next to you, Madame Petit, hears your phone ring in English and turns with a smile.",
    lines: [
      {
        speaker: 'npc',
        target: 'Vous parlez français? Vous parlez bien?',
        native: 'Do you speak French? Do you speak it well?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Je parle anglais et un peu de français', native: 'I speak English and a little French', correct: true, feedback: 'Honest, structured, uses both rules — no article after parler, "un peu DE" with the language.' },
          { target: 'Je parle un peu du français', native: 'I speak a little of-the French (wrong partitive)', correct: false, feedback: '"Un peu DE", never "du" with languages. Tiny word, common slip.' },
          { target: 'Je parle le français', native: "I speak French (with article — sounds odd)", correct: false, feedback: 'Drop the article after parler. "Je parle français", not "je parle le français".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Très bien! Et vous voulez apprendre?',
        native: 'Very good! And you want to learn?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice she immediately switched into encouragement mode the moment you said 'un peu de français'. That phrase opens hearts in France.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I speak English (in French)',
        correct: ['Je parle anglais', 'je parle anglais'],
      },
      {
        prompt: 'A little French (the modest phrase)',
        correct: ['Un peu de français', 'un peu de français'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say the languages line out loud once today: 'Je parle ___ et un peu de français.' Even if you're alone. Get used to that 'de'.",
    rwenSignoff: "Plus tu parles, plus tu deviens. À demain.",
  },

  phase8: {
    scenario: "Late afternoon, you're sitting at a Paris bookshop café. The owner, Madame Petit, brings your espresso and notices the English novel on your table — she asks what languages you read in.",
    rwenRole: "Madame Petit — bookshop café owner, ~50, lifelong Parisian, vous-by-default but warms quickly. She asks 'Vous parlez français?', 'Vous lisez en quelle langue?', 'Et vous voulez apprendre quoi?'. She praises real effort.",
    successCriteria: "User says 'Je parle [language]' WITHOUT an article (NOT 'Je parle le français'), uses 'un peu DE [language]' to hedge (NOT 'un peu du'), and uses 'Je veux apprendre [language]' WITH an article ('le français', 'l'espagnol'). User keeps language names lowercase if writing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
