import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l08-cocina-casera',
  module: 7,
  lesson: 8,
  title: 'En la Cocina — Cooking at Home',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Home cooking in Spanish-speaking countries is alive. Abuelas guard recipes, kids chop onions, the radio is on. Today we learn the verbs — cocinar (to cook), picar (to chop), preparar (to prepare) — that turn you from a guest at the table to a participant in the kitchen.",
    culturalNote: "Cooking together is a form of love language across most Latin American households. Being invited into the kitchen ('vení a la cocina', 'pásate a la cocina') is a sign of trust — not a request for help. Saying 'yo te ayudo' (let me help you) is graceful regardless.",
  },

  chunks: [
    {
      id: 'cocinar',
      target: 'cocinar',
      native: 'to cook',
      literal: 'cocinar — to cook',
      emoji: '👨‍🍳',
      phonetic: 'koh-see-NAR',
      audioRef: null,
    },
    {
      id: 'picar',
      target: 'picar',
      native: 'to chop / dice (also: to be spicy)',
      literal: 'picar — to chop / to bite (peppers pican)',
      emoji: '🔪',
      phonetic: 'pee-KAR',
      audioRef: null,
    },
    {
      id: 'la_receta',
      target: 'la receta',
      native: 'the recipe',
      literal: 'la receta — recipe (also "prescription")',
      emoji: '📜',
      phonetic: 'lah reh-SEH-tah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Estoy + -ando/-iendo — present continuous',
    explanation: "To say what you're doing right now, use estoy + the gerund: estoy cocinando (I'm cooking), estoy picando cebolla (I'm chopping onion), estoy preparando la cena (I'm preparing dinner). -ar verbs → -ando, -er/-ir verbs → -iendo.",
    examples: [
      { target: 'Estoy cocinando', native: "I'm cooking" },
      { target: 'Estoy picando cebolla', native: "I'm chopping onion" },
      { target: 'Está preparando la cena', native: "He/she is preparing dinner" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the kitchen verb to its meaning',
      pairs: [
        { left: 'cocinar', right: 'to cook' },
        { left: 'picar', right: 'to chop / dice' },
        { left: 'la receta', right: 'the recipe' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Say 'I'm cooking right now'",
      sentence: 'Estoy cocin_____ ahora.',
      options: ['ando', 'iendo', 'ado'],
      correct: 'ando',
      context: "I'm cooking right now. (cocinar is -ar → -ando)",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'm chopping onion",
      correct: ['Estoy picando cebolla', 'estoy picando cebolla', 'Estoy picando una cebolla'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone tells you the chili 'pica mucho'. What does that mean?",
      question: '"Pica mucho" =',
      options: [
        { text: "It's very spicy", correct: true },
        { text: "It chops a lot", correct: false },
        { text: "It costs a lot", correct: false },
      ],
      explanation: "'Picar' has two meanings: to chop, AND to be spicy/sting. Chiles pican = chilies sting. The verb does double duty — context tells you which.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am preparing the recipe'",
      words: ['Estoy', 'preparando', 'la', 'receta.'],
      correct: ['Estoy', 'preparando', 'la', 'receta.'],
      translation: 'I am preparing the recipe',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'the recipe',
      correct: ['la receta', 'receta', 'La receta'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a friend's house in Bogotá. Her grandmother is making sancocho. You wander into the kitchen.",
    lines: [
      {
        speaker: 'npc',
        target: 'Pásate, mija. Estoy cocinando sancocho. ¿Quieres ayudar?',
        native: 'Come in, my dear. I\'m cooking sancocho. Want to help?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sí, con mucho gusto. ¿Qué pico — la cebolla o el cilantro?', native: "Yes, gladly. What should I chop — the onion or the coriander?", correct: true, feedback: "You stepped in, asked the right question, used 'picar' correctly. The grandmother hands you a knife and the kitchen is yours." },
          { target: 'Estoy picando', native: "I'm chopping (with no context)", correct: false, feedback: "She asked if you want to help — say yes and ask what to chop: 'Sí, ¿qué pico?'" },
          { target: 'No sé cocinar', native: "I don't know how to cook", correct: false, feedback: "Even if true — accept the invitation: 'Sí, con mucho gusto. ¿Qué pico?' Cooking together is the relationship." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Pica la cebolla bien finita. Y después el cilantro. La receta es de mi mamá.',
        native: 'Chop the onion really fine. Then the coriander. The recipe is my mother\'s.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Estoy cocinando — three syllables, and the kitchen door opens. Now you're family.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'to cook', correct: ['cocinar', 'Cocinar'] },
      { prompt: "I'm cooking", correct: ['Estoy cocinando', 'estoy cocinando'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Cook anything today — even instant noodles. While you do, narrate three actions in Spanish: 'Estoy preparando...', 'Estoy picando...', 'Estoy cocinando...' The kitchen becomes a Spanish lesson.",
    rwenSignoff: "Hasta mañana — la sobremesa, donde de verdad pasa todo.",
  },

  phase8: {
    scenario: "You've been invited for dinner at a friend's family home in Bogotá. The abuela is in the kitchen, deep in a pot of sancocho. She invites you in with 'pásate, mija'. The right move now is to step into the kitchen and join the cooking — the meal is built between people, not just between ingredients.",
    rwenRole: "Abuela María — the family matriarch, late 60s, has been cooking sancocho for 50 years; loves company at the stove and tells stories with every chop of onion.",
    successCriteria: "User accepts the kitchen invitation (NOT 'no sé cocinar' as a rejection), uses 'estoy + gerund' to describe what they're doing ('estoy picando', 'estoy cocinando'), uses 'picar' correctly for chopping, and asks for direction with '¿qué pico?' / '¿qué hago?' rather than waiting silently.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
