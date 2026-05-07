import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m05-l08-casa",
  module: 5,
  lesson: 8,
  title: "A casa — Home and rooms",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The places of family life: a casa (the house), a sala (living room), a cozinha (kitchen), o quarto (bedroom). Where Brazilian Sundays unfold.",
    culturalNote: "Brazilian apartments often have an area de serviço (laundry area) and a varanda (balcony) — the social heart in good weather. The kitchen flows into the living room — open, warm, always with someone sitting.",
  },

  chunks: [
    { id: "casa", target: "A casa", native: "The house / home", literal: "The house (f.)", emoji: "🏠", phonetic: "ah KAH-zah", audioRef: null },
    { id: "cozinha", target: "A cozinha", native: "The kitchen", literal: "The kitchen (f.)", emoji: "🍳", phonetic: "ah ko-ZEE-nyah", audioRef: null },
    { id: "quarto", target: "O quarto", native: "The bedroom", literal: "The bedroom (m.)", emoji: "🛏️", phonetic: "oo KWAR-too", audioRef: null },
  ],

  pattern: {
    name: "Rooms with their articles",
    explanation: "Each room has a fixed gender. A sala, a cozinha, a varanda (f.). O quarto, o banheiro, o jardim (m.). Learn each WITH its article. Use em + article (na sala, no quarto) to say in.",
    examples: [
      { target: "Estou na cozinha.", native: "I'm in the kitchen." },
      { target: "Vai pro quarto.", native: "Go to the bedroom." },
      { target: "A sala é grande.", native: "The living room is big." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "A casa", right: "The house" },
      { left: "A cozinha", right: "The kitchen" },
      { left: "O quarto", right: "The bedroom" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'm in the kitchen", correct: ["Estou na cozinha", "estou na cozinha"] },
    { type: "fill_blank", instruction: "Banheiro is masculine", sentence: "O banheiro fica ____ direita.", options: ["à", "no", "ao"], correct: "à", context: "à direita = on the right." },
    { type: "multiple_choice", instruction: "Where do Brazilians often hang out at home?", question: "Choose the most likely Brazilian space", options: [
      { text: "A varanda", correct: true },
      { text: "O banheiro", correct: false },
      { text: "O sótão", correct: false },
    ], explanation: "Brazilian apartments treat the varanda (balcony) as social space." },
    { type: "build_sentence", instruction: "Build The kitchen is big", words: ["grande.", "A", "é", "cozinha"], correct: ["A", "cozinha", "é", "grande."], translation: "The kitchen is big." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "My house is small", correct: ["Minha casa é pequena", "minha casa é pequena"] },
  ],

  rwenDialogue: {
    intro: "First time at a Brazilian friend's apartment. They give you a tour.",
    lines: [
      { speaker: "npc", target: "Aqui é a sala. Lá é a cozinha. O banheiro fica no final do corredor.", native: "Here is the living room. There is the kitchen. The bathroom is at the end of the hallway." },
      { speaker: "user", userChoices: [
        { target: "Que casa bonita! A sala é tão grande.", native: "What a nice house! The living room is so big.", correct: true, feedback: "Compliment + observation. Brazilian guest etiquette: passed." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Compliment the home — Que casa bonita." },
        { target: "Não", native: "No", correct: false, feedback: "Brazilian home tour calls for a compliment." },
      ]},
      { speaker: "npc", target: "Obrigada! Fica à vontade.", native: "Thanks! Make yourself at home." },
      { speaker: "rwen", rwenLine: "Casa, sala, cozinha, quarto — the Brazilian home map. Each room with its article.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "The kitchen (Portuguese)", correct: ["A cozinha", "a cozinha"] },
      { prompt: "I'm in the bedroom (Portuguese)", correct: ["Estou no quarto", "estou no quarto"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk through your home. Out loud, name each room with the right article: a sala, a cozinha, o quarto, o banheiro.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend gives you a tour of their family home before a churrasco. Use room vocabulary, compliment with right gender adjectives.",
    rwenRole: "Friend's mother — ~55, paulistana, proud of her home.",
    successCriteria: "User pairs articles with rooms (a sala, o quarto), uses na/no for in-room, compliments with correctly gendered adjectives (bonita / grande / aconchegante).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
