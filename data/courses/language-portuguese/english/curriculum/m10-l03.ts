import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m10-l03-amor-paixao",
  module: 10,
  lesson: 3,
  title: "Amo & Adoro — Brazilian love",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilians say I love everything. Adoro futebol. Amo minha mãe. Te amo. The verb amar is for deep love; adorar is for everyday loves.",
    culturalNote: "Te amo is for partners and family — heavy. Adoro is everyday — adoro essa música, adoro açaí. Brazilians say adoro freely; saying te amo too soon to a romantic partner is a moment.",
  },

  chunks: [
    { id: "amar", target: "Amar — Eu amo", native: "Love (deep) — I love", literal: "Love (-ar)", emoji: "❤️", phonetic: "ah-MAR / AH-moo", audioRef: null },
    { id: "adorar", target: "Adorar — Eu adoro", native: "Adore (everyday love) — I adore", literal: "Adore (-ar)", emoji: "💕", phonetic: "ah-do-RAR / ah-DOH-roo", audioRef: null },
    { id: "te_amo", target: "Te amo", native: "I love you", literal: "You love-I", emoji: "💖", phonetic: "chee AH-moo", audioRef: null },
  ],

  pattern: {
    name: "Two loves, two registers",
    explanation: "Te amo (heavy) — for partner, parent, child. Adoro (light) — for hobbies, food, music. Brazilians use both daily, but never confuse them. Adoro essa música; te amo, mãe.",
    examples: [
      { target: "Adoro samba.", native: "I love samba (light)." },
      { target: "Amo minha família.", native: "I love my family (deep)." },
      { target: "Te amo!", native: "I love you!" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Amo", right: "Love (deep)" },
      { left: "Adoro", right: "Adore (light)" },
      { left: "Te amo", right: "I love you" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I love samba (light)", correct: ["Adoro samba", "Eu adoro samba", "adoro samba"] },
    { type: "fill_blank", instruction: "Light love — for music", sentence: "____ essa música.", options: ["Adoro", "Amo", "Sou"], correct: "Adoro", context: "Music = light = adoro." },
    { type: "multiple_choice", instruction: "What you say to your partner on anniversary?", question: "Choose", options: [
      { text: "Te amo!", correct: true },
      { text: "Te adoro!", correct: false },
      { text: "Te tchau!", correct: false },
    ], explanation: "Heavy love = te amo." },
    { type: "build_sentence", instruction: "Build I love (deep) my mother", words: ["mãe.", "minha", "Amo"], correct: ["Amo", "minha", "mãe."], translation: "I love my mother." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I adore Brazilian food", correct: ["Adoro comida brasileira", "Eu adoro comida brasileira", "Adoro a comida brasileira"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks what you love about Brazil.",
    lines: [
      { speaker: "npc", target: "O que você ama no Brasil?", native: "What do you love in Brazil?" },
      { speaker: "user", userChoices: [
        { target: "Adoro a comida e a música. E amo o calor humano.", native: "I love the food and music. And I love the human warmth.", correct: true, feedback: "Adoro for food/music, amo for the deeper truth. Two registers, one breath." },
        { target: "Sou comida", native: "(wrong)", correct: false, feedback: "Use adoro / amo." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Share what you love." },
      ]},
      { speaker: "npc", target: "Calor humano. Que linda essa expressão.", native: "Human warmth. What a beautiful expression." },
      { speaker: "rwen", rwenLine: "Two loves, mastered. Adoro for the everyday. Amo for the heart.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I adore samba (Portuguese)", correct: ["Adoro samba", "Eu adoro samba", "adoro samba"] },
      { prompt: "I love you (Portuguese)", correct: ["Te amo", "te amo"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: three adoros (everyday loves) and one amo (deep love). Feel the weight difference.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend asks about your loves — light and deep. You share several adoros and one amo.",
    rwenRole: "Friend, ~30, curious about you.",
    successCriteria: "User uses adoro for food/music/things and amo for family/partner. Never says te amo to a friend (that would be heavy).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
