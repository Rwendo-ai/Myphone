import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m07-l03-frutas",
  module: 7,
  lesson: 3,
  title: "Frutas — Brazilian fruits",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazil is a fruit empire. Manga, abacaxi (pineapple), maracujá (passion fruit), goiaba (guava), açaí. Sucos are everywhere — fresh, cheap, perfect.",
    culturalNote: "A juice bar (lanchonete) menu has 20+ fresh juices. Brazilians often blend with leite, water, or hot fruits. Açaí is eaten as a frozen bowl with banana and granola — a meal, not a drink.",
  },

  chunks: [
    { id: "manga", target: "Manga", native: "Mango", literal: "Mango (f.)", emoji: "🥭", phonetic: "MAHN-gah", audioRef: null },
    { id: "abacaxi", target: "Abacaxi", native: "Pineapple", literal: "Pineapple (m.)", emoji: "🍍", phonetic: "ah-bah-kah-SHEE", audioRef: null },
    { id: "maracuja", target: "Maracujá", native: "Passion fruit", literal: "Passion fruit (m.)", emoji: "🍈", phonetic: "mah-rah-koo-ZHAH", audioRef: null },
  ],

  pattern: {
    name: "Suco de + fruit",
    explanation: "Suco de laranja, suco de manga, suco de maracujá. The de does NOT contract with fruit names (no de a manga). Pair de + fruit name as a frozen unit.",
    examples: [
      { target: "Suco de laranja", native: "Orange juice" },
      { target: "Suco de maracujá", native: "Passion fruit juice" },
      { target: "Tigela de açaí", native: "Açaí bowl" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Manga", right: "Mango" },
      { left: "Abacaxi", right: "Pineapple" },
      { left: "Maracujá", right: "Passion fruit" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Pineapple juice", correct: ["Suco de abacaxi", "suco de abacaxi"] },
    { type: "fill_blank", instruction: "Order a passion fruit juice", sentence: "Suco ____ maracujá.", options: ["de", "com", "para"], correct: "de", context: "Suco DE + fruit." },
    { type: "multiple_choice", instruction: "Açaí is usually eaten as...", question: "Choose", options: [
      { text: "A frozen bowl with toppings", correct: true },
      { text: "A hot drink", correct: false },
      { text: "A salty side dish", correct: false },
    ], explanation: "Brazilian açaí is a frozen bowl, with banana, granola, mel." },
    { type: "build_sentence", instruction: "Build I want a mango juice", words: ["manga.", "Quero", "suco", "de", "um"], correct: ["Quero", "um", "suco", "de", "manga."], translation: "I want a mango juice." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Passion fruit juice", correct: ["Suco de maracujá", "suco de maracujá", "Suco de maracuja"] },
  ],

  rwenDialogue: {
    intro: "At a Rio juice bar. Menu has 30 options.",
    lines: [
      { speaker: "npc", target: "O que vai querer?", native: "What do you want?" },
      { speaker: "user", userChoices: [
        { target: "Um suco de maracujá com leite, por favor.", native: "A passion fruit juice with milk, please.", correct: true, feedback: "Brazilian juice fluency — fruit + milk option." },
        { target: "Maracujá", native: "(no frame)", correct: false, feedback: "Frame — Um suco de maracujá." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order first — Um suco de + fruit." },
      ]},
      { speaker: "npc", target: "Saindo um maracujá com leite!", native: "Coming up — passion fruit with milk!" },
      { speaker: "rwen", rwenLine: "Brazilian fruit empire, navigated. Suco de + fruit is the master pattern.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Mango juice (Portuguese)", correct: ["Suco de manga", "suco de manga"] },
      { prompt: "Passion fruit (Portuguese)", correct: ["Maracujá", "maracujá", "Maracuja", "maracuja"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: order three Brazilian juices. Suco de manga. Suco de maracujá. Suco de abacaxi.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian juice bar in Rio. Order a juice, ask about fruit options, get a recommendation.",
    rwenRole: "Juice bar attendant, ~25, carioca, knows all 30 fruits.",
    successCriteria: "User asks Quais sucos vocês têm?, orders Um suco de + fruit, picks com leite or sem, says obrigado/a.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
