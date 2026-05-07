import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m01-l04-tchau",
  module: 1,
  lesson: 4,
  title: "Tchau — Goodbye, Brazilian style",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilians do not just say goodbye — they say it three or four times. Tchau, tchau tchau, até logo, até mais. The conversation winds down like a song fading out.",
    culturalNote: "Tchau (from Italian ciao) is the everyday Brazilian goodbye. Adeus exists but feels heavy — like for-good farewell. For seeing-each-other-soon, it is always tchau.",
  },

  chunks: [
    { id: "tchau", target: "Tchau", native: "Bye", literal: "Bye (from Italian ciao)", emoji: "👋", phonetic: "CHOW", audioRef: null },
    { id: "ate_logo", target: "Até logo", native: "See you soon", literal: "Until soon", emoji: "⏳", phonetic: "ah-TEH LOH-goo", audioRef: null },
    { id: "ate_amanha", target: "Até amanhã", native: "See you tomorrow", literal: "Until tomorrow", emoji: "📅", phonetic: "ah-TEH ah-mah-NYAH", audioRef: null },
  ],

  pattern: {
    name: "Até + (time) — until + when",
    explanation: "Até means until. Stack it with time words to build any farewell: até logo (soon), até amanhã (tomorrow), até mais (later), até segunda (Monday). Endlessly productive.",
    examples: [
      { target: "Até logo", native: "See you soon" },
      { target: "Até amanhã", native: "See you tomorrow" },
      { target: "Até mais", native: "See you later" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match the farewell to its meaning", pairs: [
      { left: "Tchau", right: "Bye" },
      { left: "Até logo", right: "See you soon" },
      { left: "Até amanhã", right: "See you tomorrow" },
    ]},
    { type: "fill_blank", instruction: "Build the right farewell", sentence: "Vou pra casa. ____ amanhã!", options: ["Até", "Boa", "Tudo"], correct: "Até", context: "Until tomorrow = até amanhã." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "See you tomorrow", correct: ["Até amanhã", "até amanhã", "Até amanha", "até amanha"] },
    { type: "multiple_choice", instruction: "Friend leaving the bar — you will see them next week. Best farewell?", question: "Choose", options: [
      { text: "Tchau, até mais!", correct: true },
      { text: "Adeus", correct: false },
      { text: "Bom dia", correct: false },
    ], explanation: "Adeus sounds final. For see-you-soon, it is tchau, até mais." },
    { type: "build_sentence", instruction: "Build a warm goodbye", words: ["amanhã!", "Tchau,", "até"], correct: ["Tchau,", "até", "amanhã!"], translation: "Bye, see you tomorrow!" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Bye", correct: ["Tchau", "tchau"] },
  ],

  rwenDialogue: {
    intro: "End of a workday. You and a colleague are heading out of the office.",
    lines: [
      { speaker: "npc", target: "Bom, vou nessa. Tchau!", native: "Right, I am off. Bye!" },
      { speaker: "user", userChoices: [
        { target: "Tchau, até amanhã!", native: "Bye, see you tomorrow!", correct: true, feedback: "Doce — bye AND a future-meeting promise." },
        { target: "Adeus", native: "Farewell (final)", correct: false, feedback: "Adeus is for-good. You will see them tomorrow — use tchau." },
        { target: "Oi", native: "Hi", correct: false, feedback: "Oi is hello — they are leaving, say tchau." },
      ]},
      { speaker: "npc", target: "Até amanhã!", native: "See you tomorrow!" },
      { speaker: "rwen", rwenLine: "Tchau plus até amanhã — that double-tap is pure Brazilian. The conversation faded out warmly.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type from memory.",
    prompts: [
      { prompt: "Bye (Brazilian everyday)", correct: ["Tchau", "tchau"] },
      { prompt: "See you tomorrow (in Portuguese)", correct: ["Até amanhã", "até amanhã", "Até amanha", "até amanha"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "End one conversation today with tchau, até amanhã. Even a text message counts.",
    rwenSignoff: "Tchau, até amanhã!",
  },

  phase8: {
    scenario: "End of a long workday in Pinheiros, São Paulo. Your Brazilian colleague is packing up and you both walk to the elevator. Goodbye time — and you will see her tomorrow.",
    rwenRole: "Beatriz — colleague, ~28, paulistana, casual and warm. Watches whether your goodbye sounds Brazilian or stiff.",
    successCriteria: "User uses Tchau (NOT adeus, which would sound like a final farewell), adds até amanhã because they will see her tomorrow, and does not just say bye once and walk off.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
