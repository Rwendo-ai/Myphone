import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m03-l08-bonito-bonita",
  module: 3,
  lesson: 8,
  title: "Bonito / Bonita — Gendered adjectives",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian adjectives change gender. Bonito menino (cute boy), bonita menina (cute girl). Praia bonita, dia bonito. The adjective always agrees.",
    culturalNote: "Get the adjective gender wrong and Brazilians will not correct you out loud — but their ear winces. Match -o to masculine, -a to feminine. The reflex builds with reps.",
  },

  chunks: [
    { id: "bonito", target: "Bonito (m.)", native: "Beautiful / handsome (m.)", literal: "Beautiful (m.)", emoji: "👨", phonetic: "boo-NEE-too", audioRef: null },
    { id: "bonita", target: "Bonita (f.)", native: "Beautiful (f.)", literal: "Beautiful (f.)", emoji: "👩", phonetic: "boo-NEE-tah", audioRef: null },
    { id: "grande", target: "Grande (m./f.)", native: "Big (same for both)", literal: "Big", emoji: "🦣", phonetic: "GRAN-jee", audioRef: null },
  ],

  pattern: {
    name: "Adjective gender agreement",
    explanation: "Most -o/-a adjectives swap by noun gender: bonito menino, bonita menina; cansado homem, cansada mulher. Adjectives ending in -e or -consonant (grande, feliz) stay the same for both.",
    examples: [
      { target: "Praia bonita", native: "Beautiful beach (f.)" },
      { target: "Dia bonito", native: "Beautiful day (m.)" },
      { target: "Casa grande", native: "Big house (no change)" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Bonito", right: "Beautiful (m.)" },
      { left: "Bonita", right: "Beautiful (f.)" },
      { left: "Grande", right: "Big (m./f.)" },
    ]},
    { type: "fill_blank", instruction: "Praia is feminine — match the adjective", sentence: "A praia é ____.", options: ["bonita", "bonito", "bonitos"], correct: "bonita", context: "Praia (f.) — bonita." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Beautiful day", correct: ["Dia bonito", "dia bonito", "Um dia bonito"] },
    { type: "multiple_choice", instruction: "Which is correct?", question: "Choose", options: [
      { text: "A casa é grande.", correct: true },
      { text: "A casa é grando.", correct: false },
      { text: "A casa é grandos.", correct: false },
    ], explanation: "Grande does not change — same for masculine and feminine." },
    { type: "build_sentence", instruction: "Build A beautiful beach", words: ["bonita.", "Uma", "praia"], correct: ["Uma", "praia", "bonita."], translation: "A beautiful beach." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "A big house", correct: ["Uma casa grande", "uma casa grande"] },
  ],

  rwenDialogue: {
    intro: "You are watching the sunset on Copacabana with a friend.",
    lines: [
      { speaker: "npc", target: "Olha o pôr do sol! Que dia lindo!", native: "Look at the sunset! What a beautiful day!" },
      { speaker: "user", userChoices: [
        { target: "Que praia bonita!", native: "What a beautiful beach!", correct: true, feedback: "Praia (f.) gets bonita. Agreement nailed." },
        { target: "Que praia bonito", native: "(wrong gender)", correct: false, feedback: "Praia is feminine — bonita, not bonito." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Comment on the beauty — Que praia bonita!" },
      ]},
      { speaker: "npc", target: "É linda mesmo!", native: "It is really beautiful!" },
      { speaker: "rwen", rwenLine: "Adjective gender is the small rule that separates beginner from beginner-with-feel.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Beautiful beach (Portuguese, praia is feminine)", correct: ["Praia bonita", "praia bonita", "Uma praia bonita"] },
      { prompt: "Big house (Portuguese)", correct: ["Casa grande", "casa grande", "Uma casa grande"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look around. Pick three things and describe them: bonito or bonita? grande or grande? Match the noun gender out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "On Copacabana beach with a Brazilian friend. They point out things and you comment. Get the adjective genders right.",
    rwenRole: "Carioca friend, ~30, casual.",
    successCriteria: "User pairs -o adjectives with masculine nouns and -a with feminine, leaves grande/feliz unchanged, and uses bonito/bonita correctly at least three times.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
