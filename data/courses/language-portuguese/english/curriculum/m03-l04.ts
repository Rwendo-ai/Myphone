import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m03-l04-tenho-anos",
  module: 3,
  lesson: 4,
  title: "Tenho ___ anos — I am ___ years old",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Watch this trap: in Portuguese you do not 'be' a number of years old — you HAVE them. Tenho 30 anos. I have 30 years.",
    culturalNote: "Brazilians ask age more freely than in some cultures, especially among new friends. Quantos anos você tem? — How old are you? It is rarely rude.",
  },

  chunks: [
    { id: "tenho_anos", target: "Tenho ___ anos", native: "I am ___ years old", literal: "I-have ___ years", emoji: "🎂", phonetic: "TEH-nyoo AH-noos", audioRef: null },
    { id: "quantos_anos", target: "Quantos anos você tem?", native: "How old are you?", literal: "How-many years you have?", emoji: "❓", phonetic: "KWAN-toos AH-noos voh-SAY TAYNG", audioRef: null },
    { id: "ter", target: "Eu tenho", native: "I have", literal: "I have", emoji: "🤲", phonetic: "EH-oo TEH-nyoo", audioRef: null },
  ],

  pattern: {
    name: "The verb ter (to have)",
    explanation: "Ter = to have. Eu tenho, você tem, ele/ela tem. Brazilians use ter for age, possession, and even hunger/thirst (tenho fome = I am hungry, lit. I have hunger).",
    examples: [
      { target: "Tenho 30 anos.", native: "I am 30 years old." },
      { target: "Você tem irmãos?", native: "Do you have siblings?" },
      { target: "Tenho fome.", native: "I am hungry." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu tenho", right: "I have" },
      { left: "Tenho 30 anos", right: "I am 30 years old" },
      { left: "Quantos anos você tem?", right: "How old are you?" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am 25 years old", correct: ["Tenho 25 anos", "tenho 25 anos", "Eu tenho 25 anos"] },
    { type: "fill_blank", instruction: "Brazilian way to say I am hungry", sentence: "____ fome.", options: ["Tenho", "Sou", "Estou"], correct: "Tenho", context: "Hunger = ter (have), not ser/estar." },
    { type: "multiple_choice", instruction: "Which is correct Portuguese?", question: "Choose", options: [
      { text: "Tenho 30 anos.", correct: true },
      { text: "Sou 30 anos.", correct: false },
      { text: "Estou 30 anos.", correct: false },
    ], explanation: "Age uses ter — Tenho 30 anos." },
    { type: "build_sentence", instruction: "Ask their age", words: ["você", "tem?", "anos", "Quantos"], correct: ["Quantos", "anos", "você", "tem?"], translation: "How old are you?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Do you have siblings?", correct: ["Você tem irmãos?", "você tem irmãos?", "Voce tem irmaos?"] },
  ],

  rwenDialogue: {
    intro: "A new friend asks the basics over coffee.",
    lines: [
      { speaker: "npc", target: "Quantos anos você tem?", native: "How old are you?" },
      { speaker: "user", userChoices: [
        { target: "Tenho 30 anos. E você?", native: "I am 30 years old. And you?", correct: true, feedback: "Ter for age, bounced back. Brazilian." },
        { target: "Eu sou 30 anos", native: "(English-style mistake)", correct: false, feedback: "Brazilians HAVE age — tenho 30 anos, not sou." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with tenho + number + anos." },
      ]},
      { speaker: "npc", target: "Tenho 28!", native: "I am 28!" },
      { speaker: "rwen", rwenLine: "Age uses ter. Brazilians do not BE old, they HAVE years.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I am 30 years old (Portuguese)", correct: ["Tenho 30 anos", "tenho 30 anos", "Eu tenho 30 anos"] },
      { prompt: "How old are you? (Portuguese)", correct: ["Quantos anos você tem?", "quantos anos você tem?", "Quantos anos voce tem?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud: Tenho [your age] anos. Then ask the air: Quantos anos você tem? Build the ter reflex.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "First conversation with a Brazilian language partner. They ask your age, you ask theirs back. Build a small profile.",
    rwenRole: "Bea — language partner, ~32, Salvador.",
    successCriteria: "User uses Tenho + age + anos (NOT Sou + age), bounces with E você?, and uses tenho for one possession too (irmão / casa / etc).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
