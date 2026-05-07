import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m09-l01-onde-fica-2",
  module: 9,
  lesson: 1,
  title: "Onde fica? — Asking directions",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 9: directions and travel. Lost on Avenida Paulista? The opener is always the same: Com licença, onde fica...?",
    culturalNote: "Brazilians give directions with gestures, landmarks, and warmth — sometimes more detail than you needed. They will walk you to the corner if needed. Smile and say obrigado/a.",
  },

  chunks: [
    { id: "onde_fica", target: "Onde fica?", native: "Where is it?", literal: "Where stays?", emoji: "📍", phonetic: "OHN-jee FEE-kah", audioRef: null },
    { id: "como_chegar", target: "Como chego em...?", native: "How do I get to...?", literal: "How arrive in?", emoji: "🚶", phonetic: "KOH-moo SHEH-goo", audioRef: null },
    { id: "perto_dali", target: "Perto / Longe daqui", native: "Near / Far from here", literal: "Near/far from-here", emoji: "📏", phonetic: "PEHR-too / LOHN-zhee", audioRef: null },
  ],

  pattern: {
    name: "Direction-asking openers",
    explanation: "Com licença + question. Onde fica X? How do I get to Y? É perto / longe? Quanto tempo? — How long? Stack with por favor for warmth.",
    examples: [
      { target: "Com licença, onde fica o Metrô?", native: "Excuse me, where is the Metro?" },
      { target: "Como chego em Copacabana?", native: "How do I get to Copacabana?" },
      { target: "É longe daqui?", native: "Is it far from here?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Onde fica?", right: "Where is it?" },
      { left: "Como chego em...?", right: "How do I get to...?" },
      { left: "Perto", right: "Near" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where is the Metro?", correct: ["Onde fica o Metrô?", "onde fica o Metrô?", "Onde fica o metro?"] },
    { type: "fill_blank", instruction: "Open politely", sentence: "____ licença, onde fica?", options: ["Com", "De", "Em"], correct: "Com", context: "Com licença = excuse me." },
    { type: "multiple_choice", instruction: "Best opener for asking a stranger directions?", question: "Choose", options: [
      { text: "Com licença, onde fica...?", correct: true },
      { text: "Onde!", correct: false },
      { text: "Tchau", correct: false },
    ], explanation: "Com licença + question = polite Brazilian opener." },
    { type: "build_sentence", instruction: "Build How do I get to Copacabana?", words: ["Copacabana?", "Como", "em", "chego"], correct: ["Como", "chego", "em", "Copacabana?"], translation: "How do I get to Copacabana?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Is it far from here?", correct: ["É longe daqui?", "é longe daqui?", "E longe daqui?"] },
  ],

  rwenDialogue: {
    intro: "You are lost on Avenida Paulista trying to find a museum.",
    lines: [
      { speaker: "user", userChoices: [
        { target: "Com licença, onde fica o MASP?", native: "Excuse me, where is MASP?", correct: true, feedback: "Polite + clear. Brazilian opener: opened." },
        { target: "MASP!", native: "(rude)", correct: false, feedback: "Soften — Com licença, onde fica MASP?" },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Open with com licença, onde fica?" },
      ]},
      { speaker: "npc", target: "Tá pertinho — dois quarteirões pra frente.", native: "Very close — two blocks ahead." },
      { speaker: "user", userChoices: [
        { target: "Obrigado/a! É longe a estação Trianon?", native: "Thank you! Is Trianon station far?", correct: true, feedback: "Thanks + follow-up — Brazilian conversation: keeps flowing." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Thank them and ask another question." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Thank them — obrigado/a!" },
      ]},
      { speaker: "rwen", rwenLine: "Brazilian directions: opened with com licença, sustained with thanks. The flow holds.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Where is the Metro? (Portuguese)", correct: ["Onde fica o Metrô?", "onde fica o Metrô?", "Onde fica o metro?"] },
      { prompt: "Is it far from here? (Portuguese)", correct: ["É longe daqui?", "é longe daqui?", "E longe daqui?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three direction questions out loud: Onde fica X? Como chego em Y? É longe daqui? Build the asking reflex.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Lost in São Paulo trying to find Vila Madalena. Ask three different paulistanos for help, getting closer each time.",
    rwenRole: "Three paulistano locals across the walk.",
    successCriteria: "User opens with Com licença, asks Onde fica?, follows up with É longe? or Como chego?, thanks each with obrigado/a.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
