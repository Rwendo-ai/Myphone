import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-conversation',
  module: 7,
  lesson: 10,
  title: 'Une conversation à table — Meal-time Talk',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Module 7, last lesson. Tonight, the test: a full meal-time conversation. You arrive, you greet, you order, you taste, you react, you toast, you ask for the bill. Everything Module 7 taught you — woven together. No new chunks. Just fluency.",
    culturalNote: "French meals are conversational from start to finish — silence at the table is awkward. The cadence: greeting → settling in → ordering → reacting to food → toasting → light chat → bill. Master the shape and you can hold your own at any French table, from a bistro to a Sunday family lunch.",
  },

  chunks: [
    {
      id: 'bon_appetit',
      target: 'Bon appétit!',
      native: 'Enjoy your meal!',
      literal: 'Good appetite',
      emoji: '🍽️',
      phonetic: 'bohn nah-pay-TEE',
      audioRef: null,
    },
    {
      id: 'a_la_sante',
      target: 'À la santé!',
      native: 'To your health! (toast)',
      literal: 'To the health',
      emoji: '🥂',
      phonetic: 'ah lah sahn-TAY',
      audioRef: null,
    },
    {
      id: 'cetait_parfait',
      target: "C'était parfait, merci",
      native: 'It was perfect, thank you',
      literal: 'It-was perfect, thanks',
      emoji: '🙏',
      phonetic: 'say-tay par-FAY, mair-SEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The arc of a French meal',
    explanation: "Every French meal has rhythm: **Open** (Bonjour, une table pour deux) → **Order** (Je voudrais... sans...) → **Toast** (À la santé!) → **Eat** (Bon appétit, c'est délicieux) → **Close** (C'était parfait, l'addition s'il vous plaît). Module 7 gave you each step. Tonight you string them together.",
    examples: [
      { target: 'Bon appétit!', native: 'Enjoy your meal! (said before everyone starts eating)' },
      { target: "À la santé! (eye contact)", native: 'Cheers! (look the other person in the eye)' },
      { target: "C'était parfait, l'addition s'il vous plaît", native: 'It was perfect, the bill please' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each meal phrase to its meaning',
      pairs: [
        { left: 'Bon appétit!', right: 'Enjoy your meal!' },
        { left: 'À la santé!', right: 'To your health! (toast)' },
        { left: "C'était parfait, merci", right: 'It was perfect, thank you' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You raise your glass with French friends. What do you say — and what do you do with your eyes?",
      question: "Pick the right phrase + behaviour",
      options: [
        { text: "À la santé! — looking them in the eye", correct: true },
        { text: "À la santé! — looking down at the glass", correct: false },
        { text: "Bon appétit! — looking up at the ceiling", correct: false },
      ],
      explanation: "Eye contact on the clink is sacred in France — looking down is said to bring seven years of bad luck. 'Bon appétit' is for starting the meal, not toasting.",
    },
    {
      type: 'fill_blank',
      instruction: "Pick the right phrase before everyone starts eating",
      sentence: 'La nourriture arrive. Tout le monde dit: "_____ !"',
      options: ['Bon appétit', 'À la santé', "L'addition"],
      correct: 'Bon appétit',
      context: "Said the moment food lands and before the first bite.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — closing the meal warmly',
      prompt: 'It was perfect, thank you',
      correct: ["C'était parfait, merci", "c'était parfait, merci"],
    },
    {
      type: 'build_sentence',
      instruction: "Build a full closing — 'It was perfect, the bill please'",
      words: ["parfait,", "C'était", "plaît", "vous", "l'addition", "s'il"],
      correct: ["C'était", "parfait,", "l'addition", "s'il", "vous", "plaît"],
      translation: "It was perfect, the bill please",
    },
    {
      type: 'translate',
      instruction: 'Type in French — the toast',
      prompt: 'To your health! (toast)',
      correct: ['À la santé!', 'À la santé', 'à la santé!', 'à la santé'],
    },
  ],

  rwenDialogue: {
    intro: "It's 8pm. You're at a bistro with two French friends. Food has arrived, glasses are full. You're the one with the words tonight.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: "Bon appétit, tout le monde!", native: "Enjoy, everyone!", correct: true, feedback: "Perfect opener — every French meal starts with these words." },
          { target: "On mange", native: "We eat", correct: false, feedback: "Functional but flat. Say 'Bon appétit!' before the first bite — it's almost ritual." },
          { target: "À la santé", native: "To your health", correct: false, feedback: "Save the toast for the glass-clink — 'Bon appétit' is for the food." },
        ],
      },
      {
        speaker: 'npc',
        target: "Bon appétit! On lève les verres?",
        native: "Enjoy! Shall we raise our glasses?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "À la santé! (regarder dans les yeux)", native: "Cheers! (eye contact)", correct: true, feedback: "Eyes locked, glasses clinked. You're a local at this table." },
          { target: "Tchin (regarder en bas)", native: "Cheers (looking down)", correct: false, feedback: "Tchin is fine — but eye contact is sacred. Look up!" },
          { target: "Bon appétit", native: "Enjoy your meal", correct: false, feedback: "That's the food phrase, not the toast. For glasses up — 'À la santé!'" },
        ],
      },
      {
        speaker: 'npc',
        target: "Au fait, c'était excellent. On demande l'addition?",
        native: "By the way, that was excellent. Shall we ask for the bill?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Oui, c'était parfait. L'addition, s'il vous plaît!", native: "Yes, it was perfect. The bill, please!", correct: true, feedback: "Module 7, mastered. Greeting to bill, you held the whole meal in French." },
          { target: "Oui, je veux partir", native: "Yes, I want to leave", correct: false, feedback: "Too blunt. End the meal warmly: 'C'était parfait, l'addition s'il vous plaît'." },
          { target: "Combien?", native: "How much?", correct: false, feedback: "That's not how French closes a meal. Use 'L'addition, s'il vous plaît'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 7, complete. You arrived hungry, and you leave fluent at the table. Onward.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Enjoy your meal! (said before eating, in French)',
        correct: ['Bon appétit!', 'Bon appétit', 'bon appétit!', 'bon appétit'],
      },
      {
        prompt: 'It was perfect, thank you (in French)',
        correct: ["C'était parfait, merci", "c'était parfait, merci"],
      },
    ],
  },

  mission: {
    title: "Today's Journey — Module 7 Complete",
    task: "Tonight, eat one meal entirely in French in your head. Greet the food, say 'Bon appétit' before the first bite, react out loud — 'C'est délicieux' — and finish with 'C'était parfait'. Even alone. Especially alone.",
    rwenSignoff: "You walked into Module 7 hungry. You leave knowing how to feed yourself, your friends, and a French table. À demain — and onward to Module 8.",
  },

  phase8: {
    scenario: "It's 8pm at a bistro in the 11th arrondissement. You're hosting two French friends — Camille and Hugo — for dinner out. The full arc is yours: greet the serveur, get a table for three, ask for la carte, order three dishes (one with 'sans X'), order wine and a pichet, lead the toast with eye contact, react to the food across the like-dislike staircase, say 'Bon appétit', and at the end ask for l'addition with 'C'était parfait'.",
    rwenRole: "The full table — Marc the serveur (~35, sharp), Camille and Hugo (~32, warm friends); the serveur tracks ordering precision and politeness, the friends track warmth and the toast ritual. Rwen narrates between turns.",
    successCriteria: "User strings together at least 6 Module 7 elements: greeting + table request, la carte (not menu), polite order with sans, pichet d'eau, 'Bon appétit', 'À la santé!' with explicit eye contact, food reaction on the staircase (J'adore / délicieux), and closing with 'C'était parfait, l'addition s'il vous plaît'. Module 7 capstone.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
