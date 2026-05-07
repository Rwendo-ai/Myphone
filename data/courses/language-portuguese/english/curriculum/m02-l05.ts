import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m02-l05-fala-ingles",
  module: 2,
  lesson: 5,
  title: "Você fala inglês? — Do you speak English?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "When Portuguese fails, the rescue line is: Você fala inglês? But ask it in Portuguese first — Brazilians appreciate the effort.",
    culturalNote: "English fluency in Brazil is patchy — common in Rio and São Paulo tourist zones, less elsewhere. Asking the question in Portuguese alone earns goodwill.",
  },

  chunks: [
    { id: "fala_ingles", target: "Você fala inglês?", native: "Do you speak English?", literal: "You speak English?", emoji: "🌐", phonetic: "voh-SAY FAH-lah een-GLEHS", audioRef: null },
    { id: "falo_pouco", target: "Eu falo pouco", native: "I speak a little", literal: "I speak little", emoji: "🤏", phonetic: "EH-oo FAH-loo POH-koo", audioRef: null },
    { id: "estou_aprendendo", target: "Estou aprendendo", native: "I'm learning", literal: "I-am learning", emoji: "📚", phonetic: "es-TOH ah-pren-DEN-doo", audioRef: null },
  ],

  pattern: {
    name: "Asking and admitting",
    explanation: "Você fala inglês? to ask. Eu falo pouco português = I speak little Portuguese. Estou aprendendo = I am learning — earns instant smiles.",
    examples: [
      { target: "Você fala inglês?", native: "Do you speak English?" },
      { target: "Eu falo pouco português.", native: "I speak a little Portuguese." },
      { target: "Estou aprendendo!", native: "I am learning!" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Você fala inglês?", right: "Do you speak English?" },
      { left: "Eu falo pouco", right: "I speak a little" },
      { left: "Estou aprendendo", right: "I am learning" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Do you speak English?", correct: ["Você fala inglês?", "você fala inglês?", "Voce fala ingles?", "voce fala ingles?"] },
    { type: "fill_blank", instruction: "Admit your level humbly", sentence: "Eu ____ pouco português.", options: ["falo", "como", "vou"], correct: "falo", context: "I speak = eu falo." },
    { type: "multiple_choice", instruction: "Best line to win Brazilian goodwill?", question: "Choose", options: [
      { text: "Estou aprendendo português!", correct: true },
      { text: "Tchau", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "Estou aprendendo português earns instant warmth from Brazilians." },
    { type: "build_sentence", instruction: "Build I speak a little Portuguese", words: ["pouco", "português.", "Eu", "falo"], correct: ["Eu", "falo", "pouco", "português."], translation: "I speak a little Portuguese." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am learning", correct: ["Estou aprendendo", "estou aprendendo"] },
  ],

  rwenDialogue: {
    intro: "You are stuck describing a problem at a pharmacy in São Paulo.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Desculpa, eu falo pouco português. Você fala inglês?", native: "Sorry, I speak little Portuguese. Do you speak English?", correct: true, feedback: "Humble, polite, Brazilians love it." },
        { target: "English?", native: "English?", correct: false, feedback: "Frame it in Portuguese first — você fala inglês?" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Try the Portuguese rescue line first." },
      ]},
      { speaker: "npc", target: "Falo um pouco. Pode falar devagar?", native: "I speak a little. Can you speak slowly?" },
      { speaker: "rwen", rwenLine: "You owned your level and met them halfway. That is the Brazilian-bilingual handshake.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Do you speak English? (Portuguese)", correct: ["Você fala inglês?", "você fala inglês?", "Voce fala ingles?"] },
      { prompt: "I speak a little (Portuguese)", correct: ["Eu falo pouco", "eu falo pouco", "Falo pouco", "falo pouco"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice the rescue script: Desculpa, eu falo pouco português. Estou aprendendo. Você fala inglês? Out loud, twice.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "São Paulo pharmacy. You need a specific medicine and your Portuguese is not enough. The pharmacist looks busy.",
    rwenRole: "Farmacêutica — pharmacist, ~38, paulistana, helpful but pressed for time.",
    successCriteria: "User opens with Desculpa, eu falo pouco português, asks Você fala inglês?, AND adds Estou aprendendo to soften — does not skip the Portuguese rescue layer.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
