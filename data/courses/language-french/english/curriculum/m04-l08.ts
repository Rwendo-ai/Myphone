import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l08-de-du',
  module: 4,
  lesson: 8,
  title: 'De vs Du — Of, From, Some',
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "This is the trickiest article in French. Du, de la, de l', des — they all mean 'some' for things you can't count. 'I want bread' isn't 'je veux pain' — it's 'je veux du pain'. 'I want water' is 'je veux de l'eau'. Today: ordering food the right way.",
    culturalNote: "At a French market, listen for the rhythm: 'du fromage, de la confiture, des œufs, de l'eau'. The vendor expects this pattern. If you say 'je veux pain', it sounds chopped — like a tourist phrasebook. With du and de la, you sound like someone who actually eats here.",
  },

  chunks: [
    {
      id: 'de_paris',
      target: 'De Paris',
      native: 'From Paris / Of Paris',
      literal: 'From/Of Paris',
      emoji: '🗼',
      phonetic: 'duh pah-REE',
      audioRef: null,
    },
    {
      id: 'du_fromage',
      target: 'Du fromage',
      native: 'Some cheese',
      literal: '(Of-the)(masc) cheese',
      emoji: '🧀',
      phonetic: 'doo froh-MAHJ',
      audioRef: null,
    },
    {
      id: 'de_la_musique',
      target: 'De la musique',
      native: 'Some music',
      literal: '(Of-the)(fem) music',
      emoji: '🎵',
      phonetic: 'duh lah moo-ZEEK',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The partitive — du / de la / de l’ / des',
    explanation: "For uncountable things ('some bread', 'some water'), French uses the partitive — literally 'of the'. Du for masculine (du pain, du fromage), de la for feminine (de la confiture, de la musique), de l' before a vowel (de l'eau, de l'huile), des for plurals (des fruits). Plain de means 'of/from' — 'de Paris', 'la maison de Marie'.",
    examples: [
      { target: 'Je veux du pain', native: 'I want some bread (m)' },
      { target: "Je voudrais de l’eau", native: 'I would like some water (vowel → de l’)' },
      { target: 'La maison de Marie', native: "Marie's house (de = of)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'De Paris', right: 'From Paris' },
        { left: 'Du fromage', right: 'Some cheese' },
        { left: 'De la musique', right: 'Some music' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Eau is feminine and starts with a vowel.",
      sentence: 'Je voudrais _____ eau, s’il vous plaît.',
      options: ['du', 'de la', "de l'"],
      correct: "de l'",
      context: "Vowel-starting word — both masculine and feminine collapse to de l'. Same elision logic as l'ami.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — at the bakery',
      prompt: 'I would like some bread',
      correct: ['Je voudrais du pain', 'je voudrais du pain'],
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I am from Paris',
      correct: ['Je suis de Paris', 'je suis de Paris'],
    },
    {
      type: 'multiple_choice',
      instruction: "Confiture (jam) is feminine. Pick the partitive.",
      question: "Which is correct for 'I want some jam'?",
      options: [
        { text: 'Je veux de la confiture', correct: true },
        { text: 'Je veux du confiture', correct: false },
        { text: 'Je veux de confiture', correct: false },
      ],
      explanation: "Feminine + consonant = de la. Du is masculine; plain de would only work after negation ('je ne veux pas de confiture').",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I would like some cheese, some bread, and some water"',
      words: ['Je', 'voudrais', 'du', 'fromage,', 'du', 'pain', 'et', "de l'eau"],
      correct: ['Je', 'voudrais', 'du', 'fromage,', 'du', 'pain', 'et', "de l'eau"],
      translation: 'I would like some cheese, some bread and some water.',
    },
  ],

  rwenDialogue: {
    intro: "You're at a Saturday morning market in Nice. The cheese vendor smiles at you. You want cheese, jam, and water. Order with the right partitive.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour! Qu’est-ce que je vous donne aujourd’hui?',
        native: 'Hello! What can I get you today?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Du fromage, de la confiture, et de l’eau, s’il vous plaît', native: 'Some cheese, some jam, and some water, please', correct: true, feedback: 'Beautiful — three partitives, all correct. You sound like a regular.' },
          { target: 'Le fromage, la confiture, et l’eau, s’il vous plaît', native: 'The cheese, the jam, and the water, please', correct: false, feedback: 'Le and la mean THE — like you want THIS specific cheese. For "some" you need du, de la, de l’.' },
          { target: 'Un fromage, une confiture, et une eau, s’il vous plaît', native: 'A cheese, a jam, and a water, please', correct: false, feedback: 'Un/une are for whole, countable things. For an uncountable amount, French uses du/de la/de l’.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Très bien — du brie, de la confiture de figues et de l’eau pétillante. Voilà!',
        native: 'Very good — some brie, fig jam and sparkling water. There you go!',
      },
      {
        speaker: 'rwen',
        rwenLine: 'You hear that rhythm? Du, de la, de l’ — that’s the music of a French market. You’re in.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Some cheese (in French)', correct: ['Du fromage', 'du fromage'] },
      { prompt: 'I would like some water (in French)', correct: ["Je voudrais de l'eau", "je voudrais de l'eau"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Plan an imaginary French breakfast in your head — say each item with its partitive: du café, du pain, de la confiture, du beurre, de l’eau, des œufs. Six tiny words you’ll use every day.',
    rwenSignoff: "À demain. The partitive is the most-used word you didn't know existed.",
  },

  phase8: {
    scenario: "You're at a bustling outdoor market in Provence on a Saturday morning. You're buying ingredients for a picnic — bread, cheese, jam, fruit, water, wine. Each item demands the right partitive. The vendor is busy and won't slow down for you.",
    rwenRole: "Madame Sylvie — market vendor, mid-50s, friendly but quick. Will repeat your order back, ask 'autre chose?', and re-cast anything you say with the wrong article.",
    successCriteria: "User correctly uses du / de la / de l' / des with at least 5 different items (du pain, du fromage, de la confiture, des fruits, de l'eau or de l'huile, du vin), greets first and thanks at the end.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
