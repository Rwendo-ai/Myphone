import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m09-l02-direita-esquerda",
  module: 9,
  lesson: 2,
  title: "Direita & Esquerda — Right and left",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Direita (right), esquerda (left), reto (straight), virar (turn). The four words for following Brazilian directions.",
    culturalNote: "Brazilians often add ó and aí — Vira ali, ó! (Turn right there, see?). The ó is a verbal pointing finger.",
  },

  chunks: [
    { id: "direita", target: "À direita", native: "To the right", literal: "To-the right", emoji: "➡️", phonetic: "ah jee-RAY-tah", audioRef: null },
    { id: "esquerda", target: "À esquerda", native: "To the left", literal: "To-the left", emoji: "⬅️", phonetic: "ah es-KEHR-dah", audioRef: null },
    { id: "reto", target: "Reto / Em frente", native: "Straight", literal: "Straight", emoji: "⬆️", phonetic: "HEH-too / ayng FREN-chee", audioRef: null },
  ],

  pattern: {
    name: "Direction commands",
    explanation: "Vira à direita, vira à esquerda, segue reto. Vai em frente. Pega a próxima rua. Brazilian directions are mostly verbs in command form: vira, segue, pega.",
    examples: [
      { target: "Vira à direita.", native: "Turn right." },
      { target: "Segue reto.", native: "Keep going straight." },
      { target: "Pega a próxima.", native: "Take the next one." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "À direita", right: "Right" },
      { left: "À esquerda", right: "Left" },
      { left: "Reto", right: "Straight" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Turn left", correct: ["Vira à esquerda", "vira à esquerda", "Vira a esquerda"] },
    { type: "fill_blank", instruction: "Going straight", sentence: "Segue ____.", options: ["reto", "direita", "esquerda"], correct: "reto", context: "Reto = straight." },
    { type: "multiple_choice", instruction: "Brazilian guide says Vira à direita ali, ó! What do you do?", question: "Choose", options: [
      { text: "Turn right there", correct: true },
      { text: "Turn left", correct: false },
      { text: "Keep going straight", correct: false },
    ], explanation: "À direita = to the right." },
    { type: "build_sentence", instruction: "Build Take the next street on the left", words: ["esquerda.", "Pega", "rua", "à", "próxima", "a"], correct: ["Pega", "a", "próxima", "rua", "à", "esquerda."], translation: "Take the next street on the left." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Keep going straight", correct: ["Segue reto", "segue reto", "Continue reto"] },
  ],

  rwenDialogue: {
    intro: "You ask for directions. The Brazilian local talks fast.",
    lines: [
      { speaker: "npc", target: "Vai reto até o sinal, vira à direita, e tá lá!", native: "Go straight to the signal, turn right, and it's there!" },
      { speaker: "user", userChoices: [
        { target: "Reto, depois à direita. Entendi! Obrigado/a.", native: "Straight, then right. Got it! Thanks.", correct: true, feedback: "You parsed and confirmed — Brazilian directions absorbed." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Confirm understanding before leaving." },
        { target: "Não", native: "No", correct: false, feedback: "If you got it, repeat back to confirm." },
      ]},
      { speaker: "npc", target: "Aí mesmo!", native: "That's right!" },
      { speaker: "rwen", rwenLine: "Direita, esquerda, reto. Three words, every direction in Brazil.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Turn right (Portuguese)", correct: ["Vira à direita", "vira à direita", "Vira a direita"] },
      { prompt: "Straight (Portuguese)", correct: ["Reto", "reto", "Em frente", "em frente"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, give yourself three directions: Vira à direita. Vira à esquerda. Segue reto. Build the spatial-language reflex.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Following Brazilian Uber driver's directions in Rio. Confirm each turn before they execute.",
    rwenRole: "Uber driver — carioca, ~50, expects engagement.",
    successCriteria: "User confirms turns with the right words (à direita, à esquerda, reto), uses Aqui mesmo when arriving, says obrigado/a at end.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
