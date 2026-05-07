import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m03-l07-eu-gosto",
  module: 3,
  lesson: 7,
  title: "Eu gosto de — I like",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilians ask what you like fast. Você gosta de futebol? Música? Praia? Eu gosto de — I like (something).",
    culturalNote: "Saying eu gosto de [Brazilian thing] — futebol, samba, churrasco, Carnaval, açaí — is the social shortcut to Brazilian hearts. Não gosto without softening can feel cold; soften with mas (but).",
  },

  chunks: [
    { id: "eu_gosto", target: "Eu gosto de", native: "I like", literal: "I like (of)", emoji: "❤️", phonetic: "EH-oo GOHS-too jee", audioRef: null },
    { id: "voce_gosta", target: "Você gosta de?", native: "Do you like?", literal: "You like (of)?", emoji: "❓", phonetic: "voh-SAY GOHS-tah jee", audioRef: null },
    { id: "nao_gosto", target: "Não gosto de", native: "I don't like", literal: "Not I-like", emoji: "👎", phonetic: "nowng GOHS-too jee", audioRef: null },
  ],

  pattern: {
    name: "Gostar de — to like (always with de)",
    explanation: "Gostar always pairs with de. Gosto de música (I like music). Não gosto de café. The de is non-optional. Brazilian ear hears its absence instantly.",
    examples: [
      { target: "Gosto de futebol.", native: "I like football." },
      { target: "Você gosta de samba?", native: "Do you like samba?" },
      { target: "Não gosto de chuva.", native: "I don't like rain." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu gosto de", right: "I like" },
      { left: "Você gosta de?", right: "Do you like?" },
      { left: "Não gosto de", right: "I don't like" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I like football", correct: ["Eu gosto de futebol", "Gosto de futebol", "gosto de futebol"] },
    { type: "fill_blank", instruction: "Don't drop the de", sentence: "Eu gosto ____ café.", options: ["de", "em", "com"], correct: "de", context: "Gostar always takes de." },
    { type: "multiple_choice", instruction: "Which is correct Portuguese?", question: "Choose", options: [
      { text: "Gosto de churrasco.", correct: true },
      { text: "Gosto churrasco.", correct: false },
      { text: "Sou churrasco.", correct: false },
    ], explanation: "Gostar always takes de — Gosto DE churrasco." },
    { type: "build_sentence", instruction: "Build Do you like samba?", words: ["samba?", "Você", "gosta", "de"], correct: ["Você", "gosta", "de", "samba?"], translation: "Do you like samba?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I don't like rain", correct: ["Não gosto de chuva", "não gosto de chuva", "Eu não gosto de chuva"] },
  ],

  rwenDialogue: {
    intro: "Friend invites you to a samba night.",
    lines: [
      { speaker: "npc", target: "Você gosta de samba?", native: "Do you like samba?" },
      { speaker: "user", userChoices: [
        { target: "Gosto sim! E você gosta de futebol?", native: "Yes I like it! And do you like football?", correct: true, feedback: "Liked AND bounced. Pure Brazilian small talk." },
        { target: "Sim", native: "Yes (terse)", correct: false, feedback: "Add gosto sim and bounce back — not just sim." },
        { target: "Eu sou samba", native: "(English-style mistake)", correct: false, feedback: "Liking uses gostar de, not ser." },
      ]},
      { speaker: "npc", target: "Adoro futebol! Sou flamenguista.", native: "I love football! I support Flamengo." },
      { speaker: "rwen", rwenLine: "Likes shared, futebol mentioned. You are now in proper Brazilian small talk territory.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I like football (Portuguese)", correct: ["Eu gosto de futebol", "Gosto de futebol", "gosto de futebol"] },
      { prompt: "Do you like samba? (Portuguese)", correct: ["Você gosta de samba?", "você gosta de samba?", "Voce gosta de samba?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three things you like and one you do not: Eu gosto de... Não gosto de... Always with de.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Casual conversation at a bar in Rio. A new friend asks what you like. You share, ask back, and exchange opinions.",
    rwenRole: "Rafael — friend's friend, ~28, carioca.",
    successCriteria: "User uses Gosto de + thing (NEVER drops the de), bounces with Você gosta de?, and softens any não gosto.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
