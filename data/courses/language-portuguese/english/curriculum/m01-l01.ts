import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m01-l01-ola",
  module: 1,
  lesson: 1,
  title: "Olá — Hello in Brazilian Portuguese",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Brazilians greet warmly — often with a cheek-kiss (one in São Paulo, two in Rio). Your first word in Portuguese is small but it carries a big smile.",
    culturalNote: "Brazilian greetings are physical and warm. Even strangers shake hands or hug. Walking past someone at work without saying oi or bom dia feels cold here.",
  },

  chunks: [
    { id: "ola", target: "Olá", native: "Hello", literal: "Hello (slightly formal)", emoji: "👋", phonetic: "oh-LAH", audioRef: null },
    { id: "oi", target: "Oi", native: "Hi (casual, very common)", literal: "Hi", emoji: "🙂", phonetic: "OY", audioRef: null },
    { id: "tudo_bem", target: "Tudo bem?", native: "All good? / How are you?", literal: "All well?", emoji: "👀", phonetic: "TOO-doo BAYNG", audioRef: null },
  ],

  pattern: {
    name: "Three openers, one warmth",
    explanation: "Brazilians use Olá, Oi, and Tudo bem? almost interchangeably. Oi is the everyday default. Tudo bem? doubles as both a hello AND a how-are-you. Stack them: Oi, tudo bem?",
    examples: [
      { target: "Olá!", native: "Hello!" },
      { target: "Oi!", native: "Hi!" },
      { target: "Oi, tudo bem?", native: "Hi, how are you?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match the Portuguese phrase to its meaning", pairs: [
      { left: "Olá", right: "Hello" },
      { left: "Oi", right: "Hi (casual)" },
      { left: "Tudo bem?", right: "All good? / How are you?" },
    ]},
    { type: "fill_blank", instruction: "Greet a friend casually", sentence: "____, tudo bem?", options: ["Oi", "Adeus", "Sim"], correct: "Oi", context: "You bump into a friend on Avenida Paulista." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Hi, how are you?", correct: ["Oi, tudo bem?", "oi, tudo bem?", "Oi tudo bem?", "oi tudo bem?"] },
    { type: "build_sentence", instruction: "Build a casual greeting", words: ["bem?", "Oi,", "tudo"], correct: ["Oi,", "tudo", "bem?"], translation: "Hi, all good?" },
    { type: "multiple_choice", instruction: "A colleague says: Oi, tudo bem? — best reply?", question: "Choose the natural Brazilian reply", options: [
      { text: "Tudo bem, e você?", correct: true },
      { text: "Adeus", correct: false },
      { text: "Não", correct: false },
    ], explanation: "Tudo bem, e você? mirrors the warmth and bounces the question back — Brazilian rhythm." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Hello", correct: ["Olá", "olá", "Ola", "ola"] },
  ],

  rwenDialogue: {
    intro: "You step into a padaria (bakery) on Copacabana. The owner looks up and smiles.",
    lines: [
      { speaker: "npc", target: "Oi! Tudo bem?", native: "Hi! All good?" },
      { speaker: "user", userChoices: [
        { target: "Oi, tudo bem! E você?", native: "Hi, all good! And you?", correct: true, feedback: "Perfeito — warm, mirrored, bounced back like a true carioca." },
        { target: "Adeus", native: "Goodbye", correct: false, feedback: "That is goodbye, not hello — try Oi, tudo bem!" },
        { target: "Sim", native: "Yes", correct: false, feedback: "Tudo bem? is not yes/no — reply with tudo bem to mirror it." },
      ]},
      { speaker: "npc", target: "Tudo ótimo! O que vai querer?", native: "All great! What will you have?" },
      { speaker: "rwen", rwenLine: "First word in Portuguese — feito. Brazilians felt the warmth.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type from memory.",
    prompts: [
      { prompt: "Hi (casual, in Portuguese)", correct: ["Oi", "oi"] },
      { prompt: "All good? / How are you? (in Portuguese)", correct: ["Tudo bem?", "tudo bem?", "Tudo bem", "tudo bem"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say Oi, tudo bem? out loud once today — to a barista, a colleague, a mirror. Let your face soften like a Brazilian when you do.",
    rwenSignoff: "Até amanhã — see you tomorrow.",
  },

  phase8: {
    scenario: "Mid-morning at a small padaria on Copacabana. The owner is wiping the counter and looks up as you walk in. You need to open with a warm Brazilian greeting before ordering anything.",
    rwenRole: "Seu Jorge — padaria owner, ~55, born in Rio, friendly, watches body language. He warms instantly to anyone who greets him properly.",
    successCriteria: "User opens with Oi or Olá (NOT silence, NOT just an order), uses Tudo bem? as the greeting-and-check-in, and bounces the question back with E você? when he asks them.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
