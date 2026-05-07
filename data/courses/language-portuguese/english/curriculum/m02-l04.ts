import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m02-l04-nao-entendi",
  module: 2,
  lesson: 4,
  title: "Não entendi — I didn't understand",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilians speak fast. You will not understand half of it. The most useful sentence you will say in Brazil: Não entendi — I did not understand.",
    culturalNote: "Brazilians repeat happily and slow down without judgment. Saying não entendi or pode repetir? earns smiles, not eyerolls. Owning your beginner status is itself jeitinho.",
  },

  chunks: [
    { id: "nao_entendi", target: "Não entendi", native: "I didn't understand", literal: "Not I-understood", emoji: "😅", phonetic: "nowng en-CHEN-jee", audioRef: null },
    { id: "pode_repetir", target: "Pode repetir?", native: "Can you repeat?", literal: "Can repeat?", emoji: "🔁", phonetic: "POH-jee hep-eh-CHEER", audioRef: null },
    { id: "mais_devagar", target: "Mais devagar, por favor", native: "Slower, please", literal: "More slowly, please", emoji: "🐢", phonetic: "mais jee-vah-GAR", audioRef: null },
  ],

  pattern: {
    name: "Three rescue lines",
    explanation: "When lost, deploy: Não entendi (I did not understand) → Pode repetir? (can you repeat?) → Mais devagar, por favor (slower, please). Layer them.",
    examples: [
      { target: "Não entendi.", native: "I didn't understand." },
      { target: "Pode repetir?", native: "Can you repeat?" },
      { target: "Mais devagar, por favor.", native: "Slower, please." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Não entendi", right: "I didn't understand" },
      { left: "Pode repetir?", right: "Can you repeat?" },
      { left: "Mais devagar", right: "Slower" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I didn't understand", correct: ["Não entendi", "não entendi", "Nao entendi", "nao entendi"] },
    { type: "fill_blank", instruction: "Ask them to slow down", sentence: "Mais ____, por favor.", options: ["devagar", "rápido", "alto"], correct: "devagar", context: "Slowly = devagar." },
    { type: "multiple_choice", instruction: "Brazilian friend speaks fast — you missed it. Best?", question: "Choose", options: [
      { text: "Pode repetir?", correct: true },
      { text: "Tchau", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "Pode repetir? is the politest reset button." },
    { type: "build_sentence", instruction: "Ask politely to slow down", words: ["favor.", "Mais", "por", "devagar,"], correct: ["Mais", "devagar,", "por", "favor."], translation: "Slower, please." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Can you repeat?", correct: ["Pode repetir?", "pode repetir?", "Pode repetir", "pode repetir"] },
  ],

  rwenDialogue: {
    intro: "An Uber driver in Rio is telling you a fast story about traffic.",
    lines: [
      { speaker: "npc", target: "Aí o trânsito tava parado, sabe? E o cara cortou na frente...", native: "Then traffic was stopped, you know? And the guy cut in front..." },
      { speaker: "user", userChoices: [
        { target: "Desculpa, não entendi. Pode repetir mais devagar?", native: "Sorry, I didn't understand. Can you repeat slower?", correct: true, feedback: "Polite, layered, perfectly Brazilian." },
        { target: "Sim", native: "Yes", correct: false, feedback: "If you missed it, say não entendi — never bluff." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Stop the conversation politely — não entendi." },
      ]},
      { speaker: "npc", target: "Claro! Sem pressa.", native: "Of course! No rush." },
      { speaker: "rwen", rwenLine: "Brazilians love that you tried — and they slow down willingly. The exchange got warmer, not colder.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I didn't understand (Portuguese)", correct: ["Não entendi", "não entendi", "Nao entendi", "nao entendi"] },
      { prompt: "Slower, please (Portuguese)", correct: ["Mais devagar, por favor", "mais devagar, por favor", "Mais devagar por favor"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Promise yourself: when you do not understand a Brazilian, you will NOT bluff. You will say não entendi. Practice the line out loud.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "An Uber driver in Rio launches into a full story. He talks fast, accent thick. You catch maybe 30 percent. Use rescue lines without faking comprehension.",
    rwenRole: "Marcos — Uber driver, ~45, carioca, friendly, will slow down if asked.",
    successCriteria: "User uses Não entendi (NOT bluffs with sim), asks Pode repetir mais devagar?, and stays in the conversation rather than going silent.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
