import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m06-l01-numeros-1-10",
  module: 6,
  lesson: 1,
  title: "Um a Dez — Numbers 1 to 10",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 6: numbers, time, money. Today, one through ten. Surprise: 1 and 2 have gender. Um carro (m.), uma casa (f.). Dois homens, duas mulheres.",
    culturalNote: "Brazilians count on their fingers from the index — 1 is index, 2 adds middle, 5 is full hand. The thumb is 5, NOT 1 (that confuses Brazilians visiting English-speaking countries).",
  },

  chunks: [
    { id: "um_dois", target: "Um / Uma — Dois / Duas", native: "1 (m./f.) — 2 (m./f.)", literal: "1 and 2 are gendered", emoji: "1️⃣2️⃣", phonetic: "oong / OO-mah / dois / DOO-as", audioRef: null },
    { id: "tres_cinco", target: "Três, quatro, cinco", native: "3, 4, 5", literal: "3, 4, 5", emoji: "3️⃣4️⃣5️⃣", phonetic: "trayss, KWAH-troo, SEEN-koo", audioRef: null },
    { id: "seis_dez", target: "Seis, sete, oito, nove, dez", native: "6, 7, 8, 9, 10", literal: "6 through 10", emoji: "🔟", phonetic: "says, SEH-chee, OY-too, NOH-vee, dess", audioRef: null },
  ],

  pattern: {
    name: "Gendered numbers",
    explanation: "Only um/uma and dois/duas have gender. From three onwards, the number stays the same: três carros, três casas. Quatro, cinco — same for all.",
    examples: [
      { target: "Um café, uma cerveja.", native: "One coffee, one beer." },
      { target: "Dois homens, duas mulheres.", native: "Two men, two women." },
      { target: "Três irmãos, três irmãs.", native: "Three brothers, three sisters." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Um", right: "1 (m.)" },
      { left: "Duas", right: "2 (f.)" },
      { left: "Cinco", right: "5" },
    ]},
    { type: "fill_blank", instruction: "Two coffees", sentence: "____ cafés.", options: ["Dois", "Duas", "Um"], correct: "Dois", context: "Café (m.) — dois cafés." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Three", correct: ["Três", "três", "Tres", "tres"] },
    { type: "multiple_choice", instruction: "Which is right?", question: "Choose", options: [
      { text: "Duas casas", correct: true },
      { text: "Dois casas", correct: false },
      { text: "Um casas", correct: false },
    ], explanation: "Casa (f.) — duas casas." },
    { type: "build_sentence", instruction: "Build I have two daughters", words: ["filhas.", "Tenho", "duas"], correct: ["Tenho", "duas", "filhas."], translation: "I have two daughters." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Ten", correct: ["Dez", "dez"] },
  ],

  rwenDialogue: {
    intro: "Ordering at a Brazilian padaria.",
    lines: [
      { speaker: "npc", target: "Quantos cafés?", native: "How many coffees?" },
      { speaker: "user", userChoices: [
        { target: "Dois cafés e uma água, por favor.", native: "Two coffees and one water, please.", correct: true, feedback: "Dois cafés (m.), uma água (f.). Gendered counting: nailed." },
        { target: "Duas cafés", native: "(wrong gender)", correct: false, feedback: "Café (m.) — dois cafés." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order with numbers and right genders." },
      ]},
      { speaker: "npc", target: "Saindo!", native: "Coming up!" },
      { speaker: "rwen", rwenLine: "Numbers 1-10 with gender on the first two. Brazilian counting: open.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Two coffees (Portuguese)", correct: ["Dois cafés", "dois cafés"] },
      { prompt: "Five (Portuguese)", correct: ["Cinco", "cinco"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count to ten out loud in Portuguese. Then count six things in your room — match the gender on 1 and 2.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Ordering for a group at a São Paulo padaria — multiple coffees, waters, breads. Get the numbers and genders right.",
    rwenRole: "Padaria server, ~40, paulistana, busy.",
    successCriteria: "User uses um/uma and dois/duas matched to noun gender, counts up to ten when needed, and orders politely with por favor.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
