import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m04-l10-grammar-cap",
  module: 4,
  lesson: 10,
  title: "Grammar in Action — Module 4 Capstone",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 4 capstone. Today the bones come alive. Articles, contractions, demonstratives, negation, conjugation — all in one Brazilian conversation.",
    culturalNote: "Brazilian grammar is a system of agreements: gender, number, distance, time. Each piece small. Together they make speech sound native.",
  },

  chunks: [
    { id: "review_articles", target: "O / A / Os / As", native: "The (singular and plural)", literal: "Articles", emoji: "🔤", phonetic: "oo / ah", audioRef: null },
    { id: "review_contraction", target: "No / Na / Do / Da", native: "In/at/of the", literal: "Contractions", emoji: "🔁", phonetic: "noo / nah / doo / dah", audioRef: null },
    { id: "review_neg", target: "Não... nada / nunca", native: "Double negative", literal: "Negation chain", emoji: "❌", phonetic: "nowng NAH-dah", audioRef: null },
  ],

  pattern: {
    name: "Five grammar levers",
    explanation: "1. Articles match noun gender. 2. Em/De contract with articles. 3. Demonstratives mark distance. 4. Negation chains double. 5. -ar/-er/-ir verbs conjugate by family.",
    examples: [
      { target: "A casa do João.", native: "João's house. (de + a, de + o)" },
      { target: "Não como nada.", native: "I eat nothing. (double negative)" },
      { target: "Aquele carro é meu.", native: "That car (far) is mine." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match the rule to its example", pairs: [
      { left: "Article + noun", right: "A casa" },
      { left: "Em + article", right: "Na praia" },
      { left: "Double negative", right: "Não tenho nada" },
    ]},
    { type: "multiple_choice", instruction: "Which sentence has ALL correct grammar?", question: "Choose", options: [
      { text: "Eu moro no Rio e gosto da praia.", correct: true },
      { text: "Eu moro em o Rio e gosto de a praia.", correct: false },
      { text: "Eu moro em Rio e gosto praia.", correct: false },
    ], explanation: "Two contractions: no Rio, da praia. Mandatory." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I have nothing", correct: ["Não tenho nada", "não tenho nada"] },
    { type: "fill_blank", instruction: "Pick the right contraction", sentence: "A casa ____ João é grande.", options: ["do", "da", "no"], correct: "do", context: "de + o João = do João." },
    { type: "build_sentence", instruction: "Build We never go to that beach", words: ["Aquela", "vamos", "Nunca", "praia.", "para"], correct: ["Nunca", "vamos", "para", "Aquela", "praia."], translation: "We never go to that beach (far)." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I work in Brazil and I like the food", correct: ["Trabalho no Brasil e gosto da comida", "Eu trabalho no Brasil e gosto da comida", "trabalho no Brasil e gosto da comida"] },
  ],

  rwenDialogue: {
    intro: "Speed-round Brazilian conversation. Every sentence tests one grammar lever. Lead.",
    lines: [
      { speaker: "npc", target: "Onde você mora?", native: "Where do you live?" },
      { speaker: "user", userChoices: [
        { target: "Moro no Rio, na zona sul.", native: "I live in Rio, in the south zone.", correct: true, feedback: "Two contractions in one breath. No, na — perfect." },
        { target: "Moro em o Rio em a zona sul", native: "(uncontracted)", correct: false, feedback: "Em + o = no, em + a = na." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with no/na." },
      ]},
      { speaker: "npc", target: "Você gosta daqui?", native: "Do you like it here?" },
      { speaker: "user", userChoices: [
        { target: "Gosto muito! Mas não conheço nada do interior ainda.", native: "I like it a lot! But I don't know anything of the countryside yet.", correct: true, feedback: "Não + nada double negative AND do interior contraction. Two levers." },
        { target: "Sim", native: "Yes (terse)", correct: false, feedback: "Use gosto + double negative for nuance." },
        { target: "Não", native: "No (curt)", correct: false, feedback: "Soften with gosto muito + nuance." },
      ]},
      { speaker: "npc", target: "E aquele lugar — você foi?", native: "And that place over there — have you been?" },
      { speaker: "user", userChoices: [
        { target: "Aquele? Nunca fui. Mas quero ir.", native: "That one (far)? I've never been. But I want to.", correct: true, feedback: "Demonstrative aquele + double negative nunca. Both levers used." },
        { target: "Este?", native: "(wrong distance)", correct: false, feedback: "Aquele = far, far from both of you." },
        { target: "Sim", native: "Yes (lying)", correct: false, feedback: "Be honest — Nunca fui." },
      ]},
      { speaker: "rwen", rwenLine: "Articles, contractions, demonstratives, negation, conjugation — five grammar levers in one short conversation. Module 4: complete.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I live in Rio (Portuguese, contracted)", correct: ["Moro no Rio", "moro no Rio", "Eu moro no Rio"] },
      { prompt: "I never go there (Portuguese, double neg)", correct: ["Nunca vou lá", "nunca vou lá", "Eu nunca vou lá"] },
    ],
  },

  mission: {
    title: "Your Module 4 Mission",
    task: "Build five sentences, each testing one grammar lever (article, contraction, demonstrative, negation, conjugation). Out loud.",
    rwenSignoff: "Você tem os ossos da gramática. Module 5 — family. Tchau!",
  },

  phase8: {
    scenario: "Quick-fire Brazilian conversation testing all five grammar levers in one exchange — no warm-up.",
    rwenRole: "Brazilian friend testing your grammar in real time.",
    successCriteria: "User uses correct articles (o/a/os/as), contracts em+article and de+article, picks right demonstrative for distance, chains double negatives, conjugates -ar/-er/-ir verbs correctly.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
