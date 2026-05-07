import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m10-l09-storytelling",
  module: 10,
  lesson: 9,
  title: "Conta tudo — Tell me everything",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today, you tell a story. Past + imperfect + connectors + emotion + refrão. The full Brazilian narrative engine.",
    culturalNote: "Brazilians love story-listeners more than storytellers. They lean in, ask aí?, push você jura?. Tell vivid stories — they will reward you with their full attention.",
  },

  chunks: [
    { id: "conta_tudo", target: "Conta tudo!", native: "Tell everything!", literal: "Tell all", emoji: "👂", phonetic: "KOHN-tah TOO-doo", audioRef: null },
    { id: "voce_jura", target: "Você jura?", native: "Are you serious? (wow)", literal: "You swear?", emoji: "😱", phonetic: "voh-SAY ZHOO-rah", audioRef: null },
    { id: "que_loucura", target: "Que loucura!", native: "What madness! / Crazy!", literal: "What madness", emoji: "🤯", phonetic: "kee loh-KOO-rah", audioRef: null },
  ],

  pattern: {
    name: "Story listener phrases",
    explanation: "Aí? (then?), Sério? (really?), Você jura? (you swear?), Que loucura! (crazy!), Não acredito (I don't believe). Drop these as a listener — they signal you are with the story.",
    examples: [
      { target: "Conta tudo, eu quero saber!", native: "Tell everything, I want to know!" },
      { target: "Você jura? Sério?", native: "Are you serious? Really?" },
      { target: "Que loucura, isso!", native: "That's crazy!" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Conta tudo!", right: "Tell everything!" },
      { left: "Você jura?", right: "Are you serious?" },
      { left: "Que loucura!", right: "That's crazy!" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Tell everything!", correct: ["Conta tudo!", "conta tudo!", "Conta tudo", "conta tudo"] },
    { type: "fill_blank", instruction: "What madness!", sentence: "Que ____!", options: ["loucura", "feliz", "calor"], correct: "loucura", context: "Loucura = madness, surprise." },
    { type: "multiple_choice", instruction: "Brazilian listener phrase to keep a story going?", question: "Choose", options: [
      { text: "Aí? Sério?", correct: true },
      { text: "Tchau", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "Aí? sério? = and then? really? — keeps the storyteller going." },
    { type: "build_sentence", instruction: "Build Tell me everything, I want to know", words: ["saber!", "Conta", "quero", "tudo,", "eu"], correct: ["Conta", "tudo,", "eu", "quero", "saber!"], translation: "Tell me everything, I want to know!" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Are you serious?", correct: ["Você jura?", "você jura?", "Você jura", "voce jura?"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend just got back from a wild weekend.",
    lines: [
      { speaker: "npc", target: "Cara, o final de semana foi maluco!", native: "Dude, the weekend was crazy!" },
      { speaker: "user", userChoices: [
        { target: "Sério? Conta tudo!", native: "Really? Tell everything!", correct: true, feedback: "Engaged listener — Brazilian style." },
        { target: "Sim", native: "Yes (cold)", correct: false, feedback: "Push them — Sério? Conta tudo!" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Engage with the story." },
      ]},
      { speaker: "npc", target: "Aí o show começou e de repente apagou a luz!", native: "Then the show started and suddenly the lights went out!" },
      { speaker: "user", userChoices: [
        { target: "Você jura? Que loucura!", native: "Are you serious? Crazy!", correct: true, feedback: "Two listener-phrases in a row. Brazilian friendship-grade." },
        { target: "Sim", native: "Yes", correct: false, feedback: "React vividly — Você jura? Que loucura!" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Stay in the story." },
      ]},
      { speaker: "rwen", rwenLine: "Listener mode in Portuguese — Conta tudo, sério, que loucura. You held the story.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Tell everything! (Portuguese)", correct: ["Conta tudo!", "conta tudo!", "Conta tudo", "conta tudo"] },
      { prompt: "What madness! (Portuguese)", correct: ["Que loucura!", "que loucura!", "Que loucura", "que loucura"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice listening: Conta tudo. Aí? Sério? Que loucura! Three listener pushes. Be the Brazilian friend.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Friday night with Brazilian friends. Each tells a recent story — you listen actively, ask follow-ups, react vividly.",
    rwenRole: "Three Brazilian friends sharing stories.",
    successCriteria: "User uses Conta tudo / Sério? / Você jura? / Que loucura at right moments, asks at least one Aí? mid-story, rewards storyteller with engaged listening.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
