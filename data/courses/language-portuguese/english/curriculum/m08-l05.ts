import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m08-l05-fazer",
  module: 8,
  lesson: 5,
  title: "Fazer — To do / make",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Fazer covers do AND make. Eu faço, você faz, nós fazemos. O que você faz? — what do you do? Most-used Brazilian conversation opener.",
    culturalNote: "Fazer is also for weather: Faz calor (it's hot), Faz frio (it's cold), Faz sol (it's sunny). And duration: Faz dois anos que moro aqui (I've lived here for 2 years).",
  },

  chunks: [
    { id: "fazer", target: "Fazer", native: "To do / to make", literal: "Do/make (irregular)", emoji: "🛠️", phonetic: "fah-ZAYR", audioRef: null },
    { id: "eu_faco", target: "Eu faço", native: "I do / I make", literal: "I do", emoji: "🤲", phonetic: "EH-oo FAH-soo", audioRef: null },
    { id: "faz_calor", target: "Faz calor", native: "It's hot", literal: "Makes heat", emoji: "🔥", phonetic: "fahs kah-LOR", audioRef: null },
  ],

  pattern: {
    name: "Fazer — do, make, weather, duration",
    explanation: "Eu faço, você faz, nós fazemos. Use for: O que você faz? (do), Faço bolo (make), Faz frio (weather), Faz dois anos (duration).",
    examples: [
      { target: "Faço comida brasileira.", native: "I make Brazilian food." },
      { target: "Faz muito calor hoje.", native: "It's very hot today." },
      { target: "Faz três anos que moro aqui.", native: "I've lived here for 3 years." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Fazer", right: "To do/make" },
      { left: "Eu faço", right: "I do" },
      { left: "Faz calor", right: "It's hot" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "What do you do?", correct: ["O que você faz?", "o que você faz?", "O que voce faz?"] },
    { type: "fill_blank", instruction: "Weather — it's hot", sentence: "____ calor hoje.", options: ["Faz", "É", "Está"], correct: "Faz", context: "Weather verb in BR = fazer." },
    { type: "multiple_choice", instruction: "Brazilian way to say 'I've lived here for 3 years'?", question: "Choose", options: [
      { text: "Faz três anos que moro aqui.", correct: true },
      { text: "Sou três anos aqui.", correct: false },
      { text: "Tenho três anos aqui.", correct: false },
    ], explanation: "Duration uses faz + time + que + clause." },
    { type: "build_sentence", instruction: "Build I make Brazilian food", words: ["brasileira.", "Faço", "comida"], correct: ["Faço", "comida", "brasileira."], translation: "I make Brazilian food." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "It's cold today", correct: ["Faz frio hoje", "faz frio hoje"] },
  ],

  rwenDialogue: {
    intro: "Brazilian asks general life questions.",
    lines: [
      { speaker: "npc", target: "Faz quanto tempo que você mora no Rio?", native: "How long have you lived in Rio?" },
      { speaker: "user", userChoices: [
        { target: "Faz dois anos que moro aqui.", native: "I've lived here for 2 years.", correct: true, feedback: "Faz + time + que + verb. Brazilian duration: built." },
        { target: "Sou dois anos", native: "(wrong)", correct: false, feedback: "Use Faz X anos que moro." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with faz + time." },
      ]},
      { speaker: "npc", target: "Show!", native: "Cool!" },
      { speaker: "rwen", rwenLine: "Fazer is do, make, weather, duration. One verb, four jobs.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "What do you do? (Portuguese)", correct: ["O que você faz?", "o que você faz?", "O que voce faz?"] },
      { prompt: "It's hot today (Portuguese)", correct: ["Faz calor hoje", "faz calor hoje"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three fazer sentences: O que faço, weather, duration. Eu faço design. Faz calor hoje. Faz X anos que moro [place].",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend asks about your work, the weather, and how long you've been in Brazil. All three uses of fazer.",
    rwenRole: "Friend, ~30, curious.",
    successCriteria: "User uses fazer for: profession (faço design), weather (faz calor / frio), duration (faz X anos que moro).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
