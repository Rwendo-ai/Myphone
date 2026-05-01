import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-articles-mixed',
  module: 4,
  lesson: 9,
  title: 'All Articles Together',
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "We've covered every kind of article: le/la/les, un/une/des, ce/cette/ces, mon/ma/mes, du/de la/des. Today we mix them all. Real French sentences pull from this whole toolkit at once. Let's get fluent at choosing fast.",
    culturalNote: "French speakers don't think 'is this masculine or feminine?' before each noun — the right article just flies out. By the end of this lesson, your brain should be doing the same thing: feeling the article instead of calculating it. Speed is the goal, not perfection.",
  },

  chunks: [
    {
      id: 'le_pain_du_boulanger',
      target: 'Le pain du boulanger',
      native: "The baker's bread",
      literal: 'The bread of-the baker',
      emoji: '🥖',
      phonetic: 'luh PAHN doo boo-lahn-ZHAY',
      audioRef: null,
    },
    {
      id: 'cette_idee_est_bonne',
      target: 'Cette idée est bonne',
      native: 'This idea is good',
      literal: 'This(fem) idea is good(fem)',
      emoji: '💡',
      phonetic: 'set ee-DAY ay BUN',
      audioRef: null,
    },
    {
      id: 'mes_amis_aiment_le_cafe',
      target: 'Mes amis aiment le café',
      native: 'My friends love coffee',
      literal: 'My friends love the coffee',
      emoji: '☕',
      phonetic: 'may-zah-MEE em luh kah-FAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stacking articles in real sentences',
    explanation: "Two patterns native speakers use constantly: 1) Possession with de — 'le X de Y' = 'Y’s X' (le livre de Marie). 2) Generalisations use the definite article — 'I love coffee' becomes 'j’aime LE café' (the in French, nothing in English). Same with 'I hate Mondays' → 'je déteste LE lundi'.",
    examples: [
      { target: 'La voiture de mon père', native: "My father's car (the car of my father)" },
      { target: "J'aime le chocolat", native: 'I love chocolate (literally: the chocolate)' },
      { target: 'Cette ville a du charme', native: 'This city has (some) charm' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each French phrase to its meaning',
      pairs: [
        { left: 'Le pain du boulanger', right: "The baker's bread" },
        { left: 'Cette idée est bonne', right: 'This idea is good' },
        { left: 'Mes amis aiment le café', right: 'My friends love coffee' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Generalisation — 'I love' a whole category.",
      sentence: "J'adore _____ musique française.",
      options: ['la', 'de la', 'une'],
      correct: 'la',
      context: "When you love a whole concept, French uses the definite article. 'I love music' → j'aime LA musique. English drops the article; French keeps it.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "My father's car",
      correct: ['La voiture de mon père', 'la voiture de mon père'],
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I love coffee',
      correct: ["J'aime le café", "j'aime le café", "J'adore le café", "j'adore le café"],
    },
    {
      type: 'multiple_choice',
      instruction: "Choose the right article (or no article).",
      question: "How do you say 'My friends drink some wine'?",
      options: [
        { text: 'Mes amis boivent du vin', correct: true },
        { text: 'Mes amis boivent le vin', correct: false },
        { text: 'Mes amis boivent vin', correct: false },
      ],
      explanation: "'Some wine' = partitive (du). 'Le vin' would mean THE wine (specific) or wine in general after a verb of liking. After boire (drink), you partition: du vin.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'My sister loves this city and the people here'",
      words: ['Ma', 'sœur', 'adore', 'cette', 'ville', 'et', 'les', 'gens', 'ici'],
      correct: ['Ma', 'sœur', 'adore', 'cette', 'ville', 'et', 'les', 'gens', 'ici'],
      translation: 'My sister loves this city and the people here.',
    },
  ],

  rwenDialogue: {
    intro: 'Rwen tests your full toolkit. He throws sentences at you that mix every article type — definite, indefinite, partitive, demonstrative, possessive. Don’t calculate. Just feel.',
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Tell me, in one sentence: your friends love the coffee from this café. Use everything you know.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mes amis aiment le café de ce café', native: 'My friends love the coffee from this café', correct: true, feedback: "Yes — mes (possessive plural), le (general love), de ce (origin + demonstrative). All four working together." },
          { target: "Mon amis aiment un café de ce café", native: 'My friends love a coffee from this café', correct: false, feedback: 'Two issues — mon should be mes (plural), and "love coffee" in general is le café, not un café.' },
          { target: 'Mes amis aiment du café de cette café', native: 'My friends love the coffee from this café', correct: false, feedback: "Du café = some coffee (partitive). After 'aimer' for a general love, French uses le. And café is masculine — ce café, not cette." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Et la patronne — c’est une amie de mes parents.',
        native: "And the owner — she's a friend of my parents.",
      },
      {
        speaker: 'rwen',
        rwenLine: 'Hear that? Five articles in one breath: la, une, de, mes — and not a single conscious thought. That’s where you’re heading.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "My father's car (in French)", correct: ['La voiture de mon père', 'la voiture de mon père'] },
      { prompt: 'I love coffee (in French)', correct: ["J'aime le café", "j'aime le café"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Pick five sentences you’ve said today in English, and rebuild each in French in your head with the right article. "I love music." "My sister’s house." "This idea." "Some bread." "The friends here." Five mini-puzzles.',
    rwenSignoff: "À demain. Tomorrow we put the whole module to work in real conversation.",
  },

  phase8: {
    scenario: "You're having coffee with a French friend in a Parisian café. They ask wide-ranging questions — about your family, your favourite foods, your hometown, this neighbourhood. Every answer pulls a different article type. Speak naturally; switch fluidly.",
    rwenRole: "Julien — your French friend, easy-going, curious, late 30s. Asks open questions and notices when you nail or fumble an article.",
    successCriteria: "User uses at least 4 different article types in one short conversation: a definite (le/la/les), an indefinite (un/une/des), a partitive (du/de la), a possessive (mon/ma/mes), and/or a demonstrative (ce/cette/ces). Self-corrects at least once.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
