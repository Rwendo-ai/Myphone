import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m10-l10-your-story",
  module: 10,
  lesson: 10,
  title: "Sua História — A2 Complete",
  estimatedMinutes: 10,
  xpReward: 100,

  hook: {
    rwenLine: "This is the final lesson. 100 lessons. 10 modules. Today you do not learn — today you speak. Your full Brazilian story, from olá to saudade. Show me who you have become.",
    culturalNote: "Completing this curriculum means you have absorbed not just words but jeitinho brasileiro — warmth, ser/estar, gendered grammar, churrasco, saudade, and the rhythm of a Brazilian day. You have not just learned Portuguese. You have touched Brazilian life.",
  },

  chunks: [
    { id: "cheguei", target: "Cheguei", native: "I have arrived", literal: "Past of chegar", emoji: "🏆", phonetic: "sheh-GAY", audioRef: null },
    { id: "sigo_em_frente", target: "Sigo em frente", native: "I keep going forward", literal: "I follow ahead", emoji: "⬆️", phonetic: "SEE-goo ayng FREN-chee", audioRef: null },
    { id: "a_jornada_continua", target: "A jornada continua", native: "The journey continues", literal: "The journey continues", emoji: "🌅", phonetic: "ah zhor-NAH-dah kon-CHEE-noo-ah", audioRef: null },
  ],

  pattern: {
    name: "From A2 to beyond — the journey continues",
    explanation: "You have reached A2 functional fluency. You can greet, survive, identify yourself, discuss family, count, navigate Brazil, talk about food, describe your day, express emotions, tell stories. The next step is speaking — daily, with real Brazilians.",
    examples: [
      { target: "Cheguei no A2.", native: "I have reached A2." },
      { target: "Sigo em frente.", native: "I keep going forward." },
      { target: "A jornada continua.", native: "The journey continues." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match the completion phrase to its meaning", pairs: [
      { left: "Cheguei", right: "I have arrived" },
      { left: "Sigo em frente", right: "I keep going forward" },
      { left: "A jornada continua", right: "The journey continues" },
    ]},
    { type: "multiple_choice", instruction: "You completed 100 lessons. Which sentence captures your achievement?", question: "Your achievement in Portuguese:", options: [
      { text: "Aprendi português. Cheguei. Sigo em frente.", correct: true },
      { text: "Não aprendi nada", correct: false },
      { text: "Vou aprender português", correct: false },
    ], explanation: "Aprendi (I learned). Cheguei (I arrived). Sigo em frente (I keep going). That is your A2 moment." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I have arrived", correct: ["Cheguei", "Eu cheguei", "cheguei"] },
    { type: "fill_blank", instruction: "Complete the journey statement", sentence: "A jornada ____ — sigo em frente.", options: ["continua", "acabou", "começou"], correct: "continua", context: "The journey continues — I keep going." },
    { type: "build_sentence", instruction: "Build The journey continues", words: ["jornada", "continua.", "A"], correct: ["A", "jornada", "continua."], translation: "The journey continues." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I keep going forward", correct: ["Sigo em frente", "Eu sigo em frente", "sigo em frente"] },
  ],

  rwenDialogue: {
    intro: "Final lesson. Final conversation. Rwen has one question — and it is the most important one.",
    lines: [
      { speaker: "rwen", rwenLine: "Eu sou o Rwen — sou camaleão, vejo todas as cores das línguas. Te acompanhei em toda essa jornada. Agora — me conta uma coisa importante: quem você é agora, no fim do rwendo?" },
      { speaker: "user", userChoices: [
        { target: "Sou aprendiz de português. Falo um pouco. Adoro o Brasil. Cheguei no A2 — mas a jornada continua. Sigo em frente.", native: "I am a Portuguese learner. I speak a little. I adore Brazil. I have reached A2 — but the journey continues. I keep going forward.", correct: true, feedback: "Five sentences. Identity, language, love, arrival, forward momentum. That is your complete Brazilian-Portuguese story. Rwen has nothing left to teach — and everything left to celebrate." },
        { target: "Sou estudante", native: "(too short)", correct: false, feedback: "Go deeper — Sou aprendiz, falo, adoro, cheguei, sigo em frente." },
        { target: "Estou feliz", native: "(true but small)", correct: false, feedback: "Tell more — Sou aprendiz de português. Adoro o Brasil. Cheguei. Sigo em frente." },
      ]},
      { speaker: "rwen", rwenLine: "A jornada continua. Você falou sua história — em português. 100 lições. 10 módulos. Do olá ao saudade, de tudo bem ao tomara que dê certo. A jornada continua. A gente se vê na próxima — vai dar tudo certo.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "Final recall. Everything ended with this.",
    prompts: [
      { prompt: "The journey continues (Portuguese)", correct: ["A jornada continua", "a jornada continua"] },
      { prompt: "I keep going forward (Portuguese)", correct: ["Sigo em frente", "Eu sigo em frente", "sigo em frente"] },
    ],
  },

  mission: {
    title: "Your A2 Mission — The Most Important One",
    task: "Speak Portuguese with a real Brazilian today. Not practice — real. Find a Brazilian friend, language partner, online community. Use your Portuguese. Because language only lives when it moves between people. A jornada continua.",
    rwenSignoff: "Cheguei. Sigo em frente. A gente se vê, aprendiz de português. We will see each other again, language warrior. Tchau, com saudade já antecipada — go well, always.",
  },

  phase8: {
    scenario: "The final scene of Rwendo. Late afternoon at a Salvador beach kiosk — the sun setting over the Atlantic. A Brazilian elder pours you a coffee, looks across the sand, and says only this: Me conta sua história em português. Tell me your story in Portuguese. He waits. The whole journey — 100 lessons — sits in this moment.",
    rwenRole: "Seu Manoel — wise Brazilian elder marking the A2 capstone — he is no longer correcting; he is listening as a Brazilian man hearing a stranger speak his language for the first time as their own. This is the closing rite of the curriculum.",
    successCriteria: "User produces 4-6 sentences in Portuguese that span TIME and FEELING: at least one PAST sentence (era / morava / fui), at least one EMOTION (estou feliz / com saudade), at least one HOPE (espero / sonho com), AND closes with at least one refrão (Vai dar tudo certo / É só alegria / A jornada continua). Past + emotion + hope + refrão, all woven together. Then Cheguei.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
