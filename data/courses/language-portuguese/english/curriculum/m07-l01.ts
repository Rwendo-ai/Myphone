import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m07-l01-feijao-arroz",
  module: 7,
  lesson: 1,
  title: "Feijão & Arroz — The Brazilian base",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 7: food. Brazil's foundation: feijão e arroz — beans and rice. On nearly every plate, every day, in every region. Today, the holy duo.",
    culturalNote: "Without feijão e arroz, a Brazilian meal feels incomplete. Feijão preto (black beans) in Rio. Feijão carioca (pinto-like) in São Paulo. Always with arroz branco — white rice.",
  },

  chunks: [
    { id: "feijao", target: "Feijão", native: "Beans", literal: "Beans (m.)", emoji: "🫘", phonetic: "fay-ZHOWNG", audioRef: null },
    { id: "arroz", target: "Arroz", native: "Rice", literal: "Rice (m.)", emoji: "🍚", phonetic: "ah-HOSE", audioRef: null },
    { id: "comida_caseira", target: "Comida caseira", native: "Home cooking", literal: "Home-style food", emoji: "🍽️", phonetic: "ko-MEE-dah kah-ZAY-rah", audioRef: null },
  ],

  pattern: {
    name: "The Brazilian plate",
    explanation: "Standard prato feito (PF — set menu): feijão, arroz, carne (or chicken), salada. Cheap, filling, everywhere. Brazilians describe a happy meal as feijão com arroz — meaning the basics, done right.",
    examples: [
      { target: "Quero arroz e feijão.", native: "I want rice and beans." },
      { target: "É só comida caseira.", native: "It's just home cooking." },
      { target: "Hoje tem feijoada!", native: "Today there's feijoada!" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Feijão", right: "Beans" },
      { left: "Arroz", right: "Rice" },
      { left: "Comida caseira", right: "Home cooking" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Rice and beans", correct: ["Arroz e feijão", "arroz e feijão", "Arroz e feijao"] },
    { type: "fill_blank", instruction: "Order the basics", sentence: "Quero ____ e feijão.", options: ["arroz", "água", "carne"], correct: "arroz", context: "Brazilian holy duo." },
    { type: "multiple_choice", instruction: "Where will you find feijão e arroz in Brazil?", question: "Choose", options: [
      { text: "On almost every plate", correct: true },
      { text: "Only at fancy restaurants", correct: false },
      { text: "Only on Sundays", correct: false },
    ], explanation: "Feijão e arroz is on nearly every Brazilian plate." },
    { type: "build_sentence", instruction: "Build I love rice with beans", words: ["com", "Adoro", "feijão.", "arroz"], correct: ["Adoro", "arroz", "com", "feijão."], translation: "I love rice with beans." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I want home cooking", correct: ["Quero comida caseira", "quero comida caseira"] },
  ],

  rwenDialogue: {
    intro: "Lunch at a small Brazilian restaurant. Server gives the day's options.",
    lines: [
      { speaker: "npc", target: "Hoje tem PF de bife ou de frango.", native: "Today there's set menu with steak or chicken." },
      { speaker: "user", userChoices: [
        { target: "Frango, com arroz e feijão, por favor.", native: "Chicken, with rice and beans, please.", correct: true, feedback: "PF order Brazilian-style. Feijão e arroz: implicit but said." },
        { target: "Bife", native: "(no sides)", correct: false, feedback: "Add the holy duo — com arroz e feijão." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order with PF + sides." },
      ]},
      { speaker: "npc", target: "Saindo!", native: "Coming up!" },
      { speaker: "rwen", rwenLine: "Feijão e arroz — the rhythm of a Brazilian day. You ordered like a local.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Beans (Portuguese)", correct: ["Feijão", "feijão", "Feijao", "feijao"] },
      { prompt: "Rice and beans (Portuguese)", correct: ["Arroz e feijão", "arroz e feijão", "Arroz e feijao"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: Quero arroz e feijão. The most-said Brazilian food sentence. Three reps.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Lunchtime at a São Paulo PF restaurant. Order a full plate — protein, rice, beans, salad.",
    rwenRole: "Server, ~40, paulistana, brisk.",
    successCriteria: "User orders feijão, arroz, plus a protein, says por favor, and answers Brazilian preference questions (preto/carioca beans).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
