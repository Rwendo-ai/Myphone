import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-un-une',
  module: 4,
  lesson: 2,
  title: 'Un & Une — A',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "When you walk into a café and order, you almost never say 'le café' — you say 'un café'. Un and une are 'a/an', and they take the same gender as the noun. Today we order like a regular.",
    culturalNote: "There's a real difference: 'le café' is THE coffee (a specific one, or coffee in general). 'Un café' is A coffee — the one you're about to drink. At a counter, the barista expects 'un café, s'il vous plaît' — short, indefinite, lived-in.",
  },

  chunks: [
    {
      id: 'un_homme',
      target: 'Un homme',
      native: 'A man',
      literal: 'A(masc) man',
      emoji: '👨',
      phonetic: 'uhn-NOMM',
      audioRef: null,
    },
    {
      id: 'une_femme',
      target: 'Une femme',
      native: 'A woman',
      literal: 'A(fem) woman',
      emoji: '👩',
      phonetic: 'oon FAHM',
      audioRef: null,
    },
    {
      id: 'un_cafe',
      target: 'Un café',
      native: 'A coffee',
      literal: 'A(masc) coffee',
      emoji: '☕',
      phonetic: 'uhn kah-FAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Un / Une — the indefinite article',
    explanation: "Un before masculine, une before feminine. They never elide before vowels — un ami (with a 'liaison' n-sound), une amie. Use them when the thing is unspecified or new in the conversation.",
    examples: [
      { target: 'Un croissant', native: 'A croissant (m)' },
      { target: 'Une baguette', native: 'A baguette (f)' },
      { target: 'Une question', native: 'A question (f — most -tion endings)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each French phrase to its meaning',
      pairs: [
        { left: 'Un homme', right: 'A man' },
        { left: 'Une femme', right: 'A woman' },
        { left: 'Un café', right: 'A coffee' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You walk into a café — order a coffee.",
      sentence: '_____ café, s’il vous plaît.',
      options: ['Un', 'Une', 'Le'],
      correct: 'Un',
      context: "Café is masculine. And at the counter you want 'a coffee', not 'the coffee' — so un, not le.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'A woman',
      correct: ['Une femme', 'une femme'],
    },
    {
      type: 'translate',
      instruction: 'Type in French — at the boulangerie',
      prompt: 'A baguette, please',
      correct: ['Une baguette, s’il vous plaît', 'une baguette, s’il vous plaît', 'Une baguette s’il vous plaît', 'une baguette s’il vous plaît'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Question is feminine. Pick the right article.',
      question: "How do you say 'a question'?",
      options: [
        { text: 'Une question', correct: true },
        { text: 'Un question', correct: false },
        { text: "L'question", correct: false },
      ],
      explanation: "Most words ending in -tion are feminine — la question, une question, la nation, une situation.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I would like a coffee and a croissant"',
      words: ['Je', 'voudrais', 'un', 'café', 'et', 'un', 'croissant'],
      correct: ['Je', 'voudrais', 'un', 'café', 'et', 'un', 'croissant'],
      translation: 'I would like a coffee and a croissant.',
    },
  ],

  rwenDialogue: {
    intro: "It's 8am. You're at the counter of a small café in Lyon. The barista has just said bonjour. Order.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour! Qu’est-ce que je vous sers?',
        native: 'Hello! What can I get you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Un café, s’il vous plaît', native: 'A coffee, please', correct: true, feedback: 'Perfect — short, polite, exactly how locals order.' },
          { target: 'Le café, s’il vous plaît', native: 'The coffee, please', correct: false, feedback: "Sounds odd — like asking for THE specific coffee. Use un for a fresh one." },
          { target: 'Une café, s’il vous plaît', native: 'A coffee, please', correct: false, feedback: 'Café is masculine — un café, never une café.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Très bien. Et avec ça?',
        native: 'Very good. And with that?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You sound like a regular already. Notice un and une slot in without thinking — that's the goal.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'A coffee (in French)', correct: ['Un café', 'un café'] },
      { prompt: 'A woman (in French)', correct: ['Une femme', 'une femme'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Order something — anything — in French in your head: 'un café', 'une eau', 'un croissant', 'une bière'. Whisper it under your breath three times until it slides off your tongue.",
    rwenSignoff: 'À demain. Soon you’ll order out loud.',
  },

  phase8: {
    scenario: "You're at the counter of a Parisian café at 7:30am. You want a coffee, a croissant, and an orange juice. The barista is friendly but quick — order naturally using un / une.",
    rwenRole: "Thierry — the barista, late 40s, warm but in a hurry. Will repeat your order back and ask 'sur place ou à emporter?' (here or to go).",
    successCriteria: "User correctly says 'un café', 'un croissant', 'un jus d'orange' OR 'une orange pressée' (each with right gender), greets first with bonjour, and ends with merci.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
