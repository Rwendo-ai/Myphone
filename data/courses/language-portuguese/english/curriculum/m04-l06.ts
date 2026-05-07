import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m04-l06-perguntas",
  module: 4,
  lesson: 6,
  title: "Quem, Que, Onde, Quando, Como, Por que",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The six question words that unlock all conversation: Quem (who), Que (what), Onde (where), Quando (when), Como (how), Por que (why).",
    culturalNote: "Brazilians ask por quê? often — sometimes just to keep talking. The conversation breathes through questions. Without them, you sit silent.",
  },

  chunks: [
    { id: "quem", target: "Quem", native: "Who", literal: "Who", emoji: "👤", phonetic: "kayng", audioRef: null },
    { id: "onde", target: "Onde", native: "Where", literal: "Where", emoji: "📍", phonetic: "OHN-jee", audioRef: null },
    { id: "por_que", target: "Por que?", native: "Why?", literal: "By that?", emoji: "❓", phonetic: "pohr KEH", audioRef: null },
  ],

  pattern: {
    name: "Six question words",
    explanation: "Quem chegou? (who arrived?), O que é isso? (what is this?), Onde fica? (where is it?), Quando vai? (when is it going?), Como está? (how is it?), Por que não? (why not?).",
    examples: [
      { target: "Quem é você?", native: "Who are you?" },
      { target: "Onde mora?", native: "Where do you live?" },
      { target: "Por que você está aqui?", native: "Why are you here?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Quem", right: "Who" },
      { left: "Onde", right: "Where" },
      { left: "Por que", right: "Why" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Who are you?", correct: ["Quem é você?", "quem é você?", "Quem e voce?"] },
    { type: "fill_blank", instruction: "Asking why", sentence: "____ você não veio?", options: ["Por que", "Onde", "Quando"], correct: "Por que", context: "Why = Por que." },
    { type: "multiple_choice", instruction: "Asking how someone is doing — best opener?", question: "Choose", options: [
      { text: "Como você está?", correct: true },
      { text: "Por que você está?", correct: false },
      { text: "Quem você está?", correct: false },
    ], explanation: "How are you? = Como você está?" },
    { type: "build_sentence", instruction: "Build When does the bus arrive?", words: ["chega?", "ônibus", "Quando", "o"], correct: ["Quando", "o", "ônibus", "chega?"], translation: "When does the bus arrive?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where do you live?", correct: ["Onde você mora?", "onde você mora?", "Onde voce mora?"] },
  ],

  rwenDialogue: {
    intro: "Coffee chat. The other person is shy — you carry the conversation with questions.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "De onde você é? E o que faz?", native: "Where are you from? And what do you do?", correct: true, feedback: "Two questions in a row — Brazilian conversation comes alive." },
        { target: "Sim?", native: "Yes?", correct: false, feedback: "Ask real questions — onde, quem, o que." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Open the conversation with questions." },
      ]},
      { speaker: "npc", target: "Sou de Recife. Trabalho com música.", native: "I'm from Recife. I work with music." },
      { speaker: "user", userChoices: [
        { target: "Que legal! Por que veio para São Paulo?", native: "How nice! Why did you come to São Paulo?", correct: true, feedback: "Por que digs deeper — the Brazilian way to keep curiosity alive." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Keep asking — por que / quando." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Dig with por que." },
      ]},
      { speaker: "rwen", rwenLine: "Six question words — six doors. You opened two and the conversation walked through.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Who are you? (Portuguese)", correct: ["Quem é você?", "quem é você?", "Quem e voce?"] },
      { prompt: "Why? (Portuguese)", correct: ["Por que?", "por que?", "Por que", "por que"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build six questions in Portuguese — one with each question word. Out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "First date with a Brazilian. They are shy. You drive the conversation with questions across all six question words.",
    rwenRole: "Date — Brazilian, ~30, friendly but quiet.",
    successCriteria: "User uses at least four of the six question words (quem, que, onde, quando, como, por que) across the conversation, keeping it flowing.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
