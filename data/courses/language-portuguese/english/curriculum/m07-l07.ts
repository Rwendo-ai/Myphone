import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m07-l07-restaurante",
  module: 7,
  lesson: 7,
  title: "No restaurante — Restaurant Portuguese",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The full restaurant arc: Mesa para dois? Cardápio. Recomenda algo? Vou querer X. A conta. Six lines unlock the whole experience.",
    culturalNote: "Brazilian restaurants give the menu (cardápio) immediately, water (often charged), and ask if you want a couvert (bread basket — also charged). Tipping (10%) is usually the taxa de serviço on the bill.",
  },

  chunks: [
    { id: "mesa_para", target: "Mesa para ___?", native: "Table for ___?", literal: "Table for ___", emoji: "🪑", phonetic: "MEH-sah PAH-rah", audioRef: null },
    { id: "cardapio", target: "O cardápio", native: "The menu", literal: "Menu (m.)", emoji: "📋", phonetic: "oo kar-DAH-pee-oo", audioRef: null },
    { id: "recomenda", target: "O que recomenda?", native: "What do you recommend?", literal: "What recommends?", emoji: "🤔", phonetic: "oo kee heh-koh-MEN-dah", audioRef: null },
  ],

  pattern: {
    name: "Restaurant arc — six beats",
    explanation: "1. Boa noite, mesa para X. 2. Cardápio, por favor. 3. O que recomenda? 4. Vou querer X. 5. A conta, por favor. 6. Cartão / PIX. The flow.",
    examples: [
      { target: "Mesa para dois, por favor.", native: "Table for two, please." },
      { target: "O cardápio, por favor.", native: "The menu, please." },
      { target: "Vou querer a moqueca.", native: "I'll have the moqueca." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Mesa para dois?", right: "Table for two?" },
      { left: "O cardápio", right: "The menu" },
      { left: "Vou querer", right: "I'll have" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Table for two, please", correct: ["Mesa para dois, por favor", "mesa para dois, por favor"] },
    { type: "fill_blank", instruction: "Asking what they recommend", sentence: "O que ____?", options: ["recomenda", "come", "vai"], correct: "recomenda", context: "What do you recommend? = O que recomenda?" },
    { type: "multiple_choice", instruction: "Brazilian restaurants automatically bring...", question: "Choose", options: [
      { text: "Couvert (bread, often charged)", correct: true },
      { text: "Free dessert", correct: false },
      { text: "Free wine", correct: false },
    ], explanation: "Couvert is bread/snacks — usually charged separately." },
    { type: "build_sentence", instruction: "Build The bill, please", words: ["por", "A", "favor.", "conta,"], correct: ["A", "conta,", "por", "favor."], translation: "The bill, please." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'll have the moqueca", correct: ["Vou querer a moqueca", "vou querer a moqueca"] },
  ],

  rwenDialogue: {
    intro: "Friday night at a Salvador moqueca restaurant. You and a friend.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Boa noite! Mesa para dois?", native: "Good evening! Table for two?", correct: true, feedback: "Greeting + request. Restaurant arc: opened." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Greet first — boa noite!" },
        { target: "Sim", native: "Yes", correct: false, feedback: "Open with greeting + table request." },
      ]},
      { speaker: "npc", target: "Boa noite! Aqui ó. Cardápio.", native: "Good evening! Right here. Menu." },
      { speaker: "user", userChoices: [
        { target: "Obrigado/a. O que recomenda hoje?", native: "Thanks. What do you recommend today?", correct: true, feedback: "Asking for recommendations is the Brazilian-savvy move." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Ask O que recomenda?" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Engage with the menu — what's good?" },
      ]},
      { speaker: "npc", target: "A moqueca de camarão tá ótima!", native: "The shrimp moqueca is great!" },
      { speaker: "user", userChoices: [
        { target: "Vou querer essa, então. Obrigado/a.", native: "I'll have that one then. Thanks.", correct: true, feedback: "Decision + thanks — restaurant arc closing well." },
        { target: "Não", native: "(rude)", correct: false, feedback: "Trust the recommendation — Vou querer essa." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order it — Vou querer essa." },
      ]},
      { speaker: "rwen", rwenLine: "Restaurant arc: greeting, menu, recommendation, order. Four beats, smooth Brazilian flow.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Table for two (Portuguese)", correct: ["Mesa para dois", "mesa para dois"] },
      { prompt: "What do you recommend? (Portuguese)", correct: ["O que recomenda?", "o que recomenda?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine a Brazilian restaurant. Run the full arc out loud: Mesa para dois. Cardápio. Recomenda. Vou querer. A conta. Cartão.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Dinner at a Salvador moqueca restaurant. Run the whole restaurant arc — entry to bill — solo.",
    rwenRole: "Garçom, ~45, baiano, expert at moqueca.",
    successCriteria: "User uses all six restaurant beats: greeting, table request, menu, recommendation question, order, bill + payment.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
