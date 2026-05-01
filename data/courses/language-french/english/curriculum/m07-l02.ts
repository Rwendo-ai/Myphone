import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-foods',
  module: 7,
  lesson: 2,
  title: 'Aliments courants — Everyday Foods',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Walk into any French kitchen at lunchtime and you'll smell three things: bread, cheese, and something simmering. Today we name the staples — and we sneak in a partitive trick from Module 4. Bread isn't just 'bread' here. It's 'some bread' — du pain.",
    culturalNote: "French rarely treats food as a counted, abstract thing. You don't eat 'bread' — you eat 'some bread' (du pain). 'Some meat' (de la viande). 'Some eggs' (des œufs). The partitive (du / de la / des) signals 'a portion of'. It's everywhere at the table — once you hear it, you can't unhear it.",
  },

  chunks: [
    {
      id: 'du_pain',
      target: 'du pain',
      native: '(some) bread',
      literal: 'of-the bread',
      emoji: '🥖',
      phonetic: 'doo PAHN',
      audioRef: null,
    },
    {
      id: 'du_fromage',
      target: 'du fromage',
      native: '(some) cheese',
      literal: 'of-the cheese',
      emoji: '🧀',
      phonetic: 'doo froh-MAHZH',
      audioRef: null,
    },
    {
      id: 'de_la_viande',
      target: 'de la viande',
      native: '(some) meat',
      literal: 'of-the meat',
      emoji: '🥩',
      phonetic: 'duh lah vee-AHND',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Partitives at the table',
    explanation: "Food on the plate uses the partitive: **du** before masculine (du pain, du fromage), **de la** before feminine (de la viande, de la salade), **des** before plurals (des œufs, des pommes). It says: 'an unspecified amount of'. English just says 'bread' — French insists on 'some bread'.",
    examples: [
      { target: 'du riz', native: '(some) rice — masculine' },
      { target: 'de la salade', native: '(some) salad — feminine' },
      { target: 'des œufs', native: '(some) eggs — plural' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the food to its meaning',
      pairs: [
        { left: 'du pain', right: '(some) bread' },
        { left: 'du fromage', right: '(some) cheese' },
        { left: 'de la viande', right: '(some) meat' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're filling a plate. Pick the right partitive.",
      sentence: 'Je voudrais _____ pain, s\'il vous plaît.',
      options: ['du', 'de la', 'des'],
      correct: 'du',
      context: "Pain is masculine — du pain.",
    },
    {
      type: 'fill_blank',
      instruction: 'And this one?',
      sentence: 'On a aussi _____ viande pour ce soir.',
      options: ['du', 'de la', 'des'],
      correct: 'de la',
      context: "Viande is feminine — de la viande.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: '(some) cheese',
      correct: ['du fromage'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the sentence — 'I'd like some bread and some cheese'",
      words: ["du", "et", "Je", "fromage", "voudrais", "pain", "du"],
      correct: ["Je", "voudrais", "du", "pain", "et", "du", "fromage"],
      translation: "I'd like some bread and some cheese",
    },
    {
      type: 'translate',
      instruction: 'Type in French — at the dinner table',
      prompt: '(some) meat',
      correct: ['de la viande'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a French friend's house. Hugo is laying out lunch — bread, cheese, charcuterie. He turns and asks what you'd like.",
    lines: [
      {
        speaker: 'npc',
        target: "Tu veux quoi pour commencer?",
        native: "What do you want to start with?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Du pain et du fromage, s'il te plaît", native: "Some bread and some cheese, please", correct: true, feedback: "Beautiful — partitives flowing naturally. Hugo will pile your plate." },
          { target: "Pain et fromage", native: "Bread and cheese", correct: false, feedback: "Not quite — French insists on the partitive. 'Du pain et du fromage'." },
          { target: "Le pain et le fromage", native: "The bread and the cheese", correct: false, feedback: "That's the *general* idea of bread — you want SOME of it. Use 'du'." },
        ],
      },
      {
        speaker: 'npc',
        target: "Et de la viande aussi?",
        native: "And some meat too?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear that — 'de la viande'. Feminine partitive, exactly as you'd expect. You're tuned in.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: '(some) bread (in French)',
        correct: ['du pain'],
      },
      {
        prompt: '(some) meat (in French)',
        correct: ['de la viande'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Open your fridge. Name 5 things you see using French partitives — du lait, du fromage, de la salade, des œufs, du beurre. Out loud.",
    rwenSignoff: "Your fridge just became a French textbook. À demain.",
  },

  phase8: {
    scenario: "It's Saturday morning at the marché in Aligre, Paris. You're at a small stall with cheese, charcuterie, and warm bread piled in baskets. The vendeur, apron flecked with flour, gives you a quick 'Bonjour, qu'est-ce qu'il vous faut?' You want bread, cheese, and a little meat — and you want to ask using clean partitives, not point.",
    rwenRole: "Monsieur Patrick — marché vendor, ~50, gruff-warm; he respects customers who actually order in French ('du pain', 'de la viande') rather than fumble or point, and gives a small extra slice if you nail the partitives.",
    successCriteria: "User correctly uses du / de la / des with three foods — du pain (m), du fromage (m) or de la viande (f), and one plural des — when ordering. No bare nouns, no English crutches.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
