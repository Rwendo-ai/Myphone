import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m09-l07-hotel",
  module: 9,
  lesson: 7,
  title: "No hotel — Checking in",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian hotels: tenho reserva (I have a reservation), o quarto (the room), café da manhã incluso (breakfast included). The check-in arc.",
    culturalNote: "Brazilian hotel breakfasts are famously big — fruit, eggs, breads, cold cuts, juices. Pousadas (smaller B&Bs) on the coast are the local favourite over chain hotels.",
  },

  chunks: [
    { id: "reserva", target: "Tenho reserva", native: "I have a reservation", literal: "I have reservation", emoji: "📅", phonetic: "TEH-nyoo heh-ZER-vah", audioRef: null },
    { id: "check_in", target: "Fazer check-in", native: "Check in", literal: "Make check-in (BR uses English)", emoji: "🔑", phonetic: "fah-ZAYR check-in", audioRef: null },
    { id: "quarto", target: "O quarto", native: "The room", literal: "Room (m.)", emoji: "🛏️", phonetic: "oo KWAR-too", audioRef: null },
  ],

  pattern: {
    name: "Hotel arc",
    explanation: "1. Boa noite, tenho reserva. 2. No nome [your name]. 3. Café da manhã está incluso? 4. Pode trazer toalhas? — can you bring towels?",
    examples: [
      { target: "Tenho reserva no nome de Alex.", native: "I have a reservation under Alex." },
      { target: "Café da manhã está incluso?", native: "Is breakfast included?" },
      { target: "O quarto tem ar-condicionado?", native: "Does the room have AC?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Tenho reserva", right: "I have a reservation" },
      { left: "Quarto", right: "Room" },
      { left: "Café incluso", right: "Breakfast included" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I have a reservation under Alex", correct: ["Tenho reserva no nome de Alex", "Tenho uma reserva no nome de Alex"] },
    { type: "fill_blank", instruction: "Breakfast included?", sentence: "Café da manhã está ____?", options: ["incluso", "perto", "longe"], correct: "incluso", context: "Incluso = included." },
    { type: "multiple_choice", instruction: "Asking for towels", question: "Choose", options: [
      { text: "Pode trazer toalhas?", correct: true },
      { text: "Sou toalhas.", correct: false },
      { text: "Estou toalhas.", correct: false },
    ], explanation: "Pode + verb = polite request." },
    { type: "build_sentence", instruction: "Build Does the room have wifi?", words: ["quarto", "tem", "wifi?", "O"], correct: ["O", "quarto", "tem", "wifi?"], translation: "Does the room have wifi?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Is breakfast included?", correct: ["O café da manhã está incluso?", "Café da manhã está incluso?", "Café da manhã esta incluso?"] },
  ],

  rwenDialogue: {
    intro: "Hotel front desk in Salvador. You arrive late.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Boa noite. Tenho reserva no nome de Alex.", native: "Good evening. I have a reservation under Alex.", correct: true, feedback: "Boa noite + reservation under name. Brazilian hotel arc." },
        { target: "Reserva", native: "(unclear)", correct: false, feedback: "Frame: Tenho reserva no nome de..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "You just arrived — open with greeting." },
      ]},
      { speaker: "npc", target: "Boa noite, Alex! Aqui sua chave.", native: "Good evening, Alex! Here's your key." },
      { speaker: "user", userChoices: [
        { target: "Obrigado/a! Café da manhã está incluso?", native: "Thanks! Is breakfast included?", correct: true, feedback: "Thanks + practical question. Hotel ahead." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Ask the practical question." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Engage with the desk before leaving." },
      ]},
      { speaker: "rwen", rwenLine: "Hotel arc complete: greet, reserve, key, breakfast. Brazilian-style.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I have a reservation (Portuguese)", correct: ["Tenho reserva", "tenho reserva", "Eu tenho reserva"] },
      { prompt: "Is breakfast included? (Portuguese)", correct: ["O café da manhã está incluso?", "Café da manhã está incluso?", "Café da manhã esta incluso?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Run a Brazilian hotel check-in: Boa noite. Tenho reserva. Café incluso? Pode trazer toalhas?",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Pousada in Salvador. Check in, ask about breakfast and beach proximity, request extra towels.",
    rwenRole: "Pousada owner — baiana, ~50, warm.",
    successCriteria: "User uses Tenho reserva, asks about breakfast inclusion and praia distance, requests with Pode + verb.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
