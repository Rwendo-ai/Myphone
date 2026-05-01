import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-likes-food',
  module: 7,
  lesson: 5,
  title: "J'aime / Je n'aime pas — Likes & Dislikes",
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Camille pushes a plate of escargots towards you across the table. 'Tu aimes?' Now you have to react — and there's a whole staircase of intensity in French, from 'I worship this' to 'this is going on the floor'. Today, we climb every step.",
    culturalNote: "French has a precise gradient for food opinions — and at the table, getting the level right matters. **J'adore** (I love it) > **J'aime bien** (I really like) > **J'aime** (I like) > **Je n'aime pas** (I don't like) > **Je déteste** (I hate). Using 'J'aime' alone can feel mild; the French often soften with 'J'aime bien' or amplify with 'J'adore'.",
  },

  chunks: [
    {
      id: 'jadore',
      target: "J'adore",
      native: 'I love it',
      literal: 'I-adore',
      emoji: '😍',
      phonetic: 'zhah-DOR',
      audioRef: null,
    },
    {
      id: 'je_naime_pas',
      target: "Je n'aime pas...",
      native: "I don't like...",
      literal: 'I not-like not',
      emoji: '🙅',
      phonetic: 'zhuh NEM PAH',
      audioRef: null,
    },
    {
      id: 'cest_delicieux',
      target: "C'est délicieux",
      native: "It's delicious",
      literal: 'It-is delicious',
      emoji: '🤤',
      phonetic: 'say day-lee-SYUH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The like-dislike staircase',
    explanation: "Five rungs from love to hate: **J'adore** (I love) → **J'aime bien** (I really like) → **J'aime** (I like) → **Je n'aime pas** (I don't like) → **Je déteste** (I hate). Negation in French wraps the verb: ne...pas. 'J'aime' becomes 'Je n'aime pas'.",
    examples: [
      { target: "J'adore le fromage", native: "I love cheese" },
      { target: "Je n'aime pas les escargots", native: "I don't like snails" },
      { target: "Je déteste les oignons crus", native: "I hate raw onions" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: "J'adore", right: 'I love it' },
        { left: "Je n'aime pas...", right: "I don't like..." },
        { left: "C'est délicieux", right: "It's delicious" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Camille just served you her grandma's tarte tatin. You take a bite — it's incredible. Strongest reaction?",
      question: "Choose the strongest positive reaction",
      options: [
        { text: "J'adore! C'est délicieux", correct: true },
        { text: "J'aime", correct: false },
        { text: "Ça va", correct: false },
      ],
      explanation: "'J'aime' alone is mild — almost lukewarm. For grandma's tarte you go straight to 'J'adore' and pair with 'C'est délicieux'.",
    },
    {
      type: 'fill_blank',
      instruction: "Build a polite negation",
      sentence: 'Je _____ aime _____ les oignons crus.',
      options: ["n' / pas", "ne / pas", "n' / point"],
      correct: "n' / pas",
      context: "Negation wraps the verb: ne (n' before vowel) ... pas.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "It's delicious",
      correct: ["C'est délicieux", "c'est délicieux"],
    },
    {
      type: 'build_sentence',
      instruction: "Build the sentence — 'I don't like onions'",
      words: ["aime", "Je", "les", "oignons", "n'", "pas"],
      correct: ["Je", "n'", "aime", "pas", "les", "oignons"],
      translation: "I don't like onions",
    },
    {
      type: 'translate',
      instruction: 'Type in French — strong love',
      prompt: 'I love cheese',
      correct: ["J'adore le fromage", "j'adore le fromage"],
    },
  ],

  rwenDialogue: {
    intro: "Camille has just put a steaming dish of coq au vin in front of you. She watches as you take the first bite. Time to react.",
    lines: [
      {
        speaker: 'npc',
        target: "Alors, qu'est-ce que tu en penses?",
        native: "So, what do you think?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "J'adore! C'est délicieux!", native: "I love it! It's delicious!", correct: true, feedback: "Perfect — full warmth, both phrases. Camille beams." },
          { target: "J'aime", native: "I like it", correct: false, feedback: "Too mild — sounds like polite indifference. After tasting something great, French speakers go to 'J'adore' or 'C'est délicieux'." },
          { target: "Je n'aime pas", native: "I don't like it", correct: false, feedback: "Ouch — that's the dislike step. If you actually love it, climb the staircase." },
        ],
      },
      {
        speaker: 'npc',
        target: "Ah, ça me fait plaisir! Encore un peu?",
        native: "That makes me happy! A little more?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Watch how the warmth in your reply earned a second helping. Words that match the food — that's table magic.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I love it (strong positive, in French)',
        correct: ["J'adore", "j'adore"],
      },
      {
        prompt: "I don't like onions (in French)",
        correct: ["Je n'aime pas les oignons", "je n'aime pas les oignons"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "At your next meal — solo or with anyone — react out loud in French to something on your plate: 'J'adore!' or 'Je n'aime pas...' or 'C'est délicieux!' Match the strength to the food.",
    rwenSignoff: "Taste in French. The food remembers. À demain.",
  },

  phase8: {
    scenario: "You're at Camille's apartment for dinner. She's served three courses — a goat cheese salad, coq au vin, and a homemade tarte aux pommes. She watches your reactions across the meal. You loved the salad, are blown away by the coq au vin, and the tarte is fine but a touch too sweet. You need to react honestly across the like-dislike staircase without offending.",
    rwenRole: "Camille — host friend, ~32, warm and curious; she loves real reactions, not flattery, and reads the difference between 'J'aime' (mild) and 'J'adore' (strong) — she's quietly testing whether you can calibrate.",
    successCriteria: "User uses at least three different rungs of the staircase across the meal — e.g. J'aime bien, J'adore, C'est délicieux — and correctly negates with 'Je n'aime pas trop' or similar for any dish they're cooler on. No flat 'C'est bon' for everything.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
