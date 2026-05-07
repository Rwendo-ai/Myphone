import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m03-l03-ser-estar",
  module: 3,
  lesson: 3,
  title: "Ser vs Estar — Choosing the right 'to be'",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The trickiest moment in beginner Portuguese: ser or estar? Today we drill the choice. Permanent = ser. Temporary = estar. The wrong one sounds wrong.",
    culturalNote: "A Brazilian saying: Sou de São Paulo (I am FROM São Paulo — permanent), Estou em São Paulo (I am IN São Paulo right now — temporary). Identity vs state. Same word in English, two in Portuguese.",
  },

  chunks: [
    { id: "ser_for_identity", target: "Sou + identity", native: "Use ser for permanent self", literal: "Permanent state", emoji: "🪨", phonetic: "soh", audioRef: null },
    { id: "estar_for_now", target: "Estou + now", native: "Use estar for current state", literal: "Temporary state", emoji: "🌊", phonetic: "es-TOH", audioRef: null },
    { id: "ser_estar_test", target: "Sou de / Estou em", native: "Am from / Am in", literal: "Origin vs location", emoji: "🧭", phonetic: "soh jee / es-TOH ayng", audioRef: null },
  ],

  pattern: {
    name: "The ser/estar test",
    explanation: "Ask: will this still be true next year? Yes → ser. No → estar. Sou brasileiro (yes, still next year). Estou cansado (probably not next year).",
    examples: [
      { target: "Sou inglês. (always)", native: "I am English." },
      { target: "Estou cansado. (now)", native: "I am tired." },
      { target: "Sou de Londres. Estou no Rio.", native: "I'm from London. I'm in Rio." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match the verb to the use", pairs: [
      { left: "Ser", right: "Permanent identity" },
      { left: "Estar", right: "Current state" },
      { left: "Sou de / Estou em", right: "Origin vs location" },
    ]},
    { type: "fill_blank", instruction: "I am tired right now", sentence: "Eu ____ cansado.", options: ["estou", "sou", "é"], correct: "estou", context: "Tired = temporary = estar." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am Brazilian", correct: ["Eu sou brasileiro", "eu sou brasileiro", "Sou brasileiro", "sou brasileiro", "Eu sou brasileira", "Sou brasileira"] },
    { type: "multiple_choice", instruction: "Pick the sentence that uses ser correctly", question: "Choose", options: [
      { text: "Sou professor.", correct: true },
      { text: "Sou cansado agora.", correct: false },
      { text: "Sou no Rio.", correct: false },
    ], explanation: "Profession = permanent = ser. Tired or location = estar." },
    { type: "build_sentence", instruction: "Build I am from London but in Rio", words: ["mas", "no", "Sou", "Londres,", "estou", "Rio.", "de"], correct: ["Sou", "de", "Londres,", "mas", "estou", "no", "Rio."], translation: "I am from London, but in Rio." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "She is in São Paulo", correct: ["Ela está em São Paulo", "ela está em São Paulo", "Ela esta em Sao Paulo"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks where you are from and where you are now.",
    lines: [
      { speaker: "npc", target: "De onde você é? E onde está agora?", native: "Where are you from? And where are you now?" },
      { speaker: "user", userChoices: [
        { target: "Sou de Londres, mas estou no Rio.", native: "I am from London, but I am in Rio.", correct: true, feedback: "Ser for origin (sou de), estar for location (estou no). The split is locked in." },
        { target: "Estou de Londres, sou no Rio", native: "(swapped wrong)", correct: false, feedback: "Origin = ser. Location = estar. Try sou de / estou no." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer the question — sou de / estou em." },
      ]},
      { speaker: "npc", target: "Que legal!", native: "How nice!" },
      { speaker: "rwen", rwenLine: "Ser vs estar — the most Portuguese choice you can make. You picked right twice in one sentence.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I am from London (Portuguese)", correct: ["Sou de Londres", "sou de Londres", "Eu sou de Londres"] },
      { prompt: "I am in Rio (Portuguese)", correct: ["Estou no Rio", "estou no Rio", "Eu estou no Rio"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Run the test: pick three things about you. For each, decide ser or estar. Say them out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend's mother asks about you over coffee. She wants to know who you are AND how you are doing today. Both verbs in one conversation.",
    rwenRole: "Dona Lúcia — ~58, paulistana matriarch, observant.",
    successCriteria: "User uses Sou + nationality/profession AND Estou + current feelings/location, never confuses the two — origin vs location, identity vs state.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
