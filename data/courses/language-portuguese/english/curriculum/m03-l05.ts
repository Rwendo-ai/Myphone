import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m03-l05-trabalho-com",
  module: 3,
  lesson: 5,
  title: "Trabalho com — I work with / as",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After name and age comes work. Sou + profession (I am a teacher), or Trabalho com + field (I work in tech).",
    culturalNote: "Brazilians ask O que você faz? — what do you do? — early in conversations. Saying Sou aposentado/a (I am retired) or Sou estudante (I am a student) is normal at any age.",
  },

  chunks: [
    { id: "o_que_faz", target: "O que você faz?", native: "What do you do?", literal: "What you do?", emoji: "💼", phonetic: "oo kee voh-SAY FAHS", audioRef: null },
    { id: "trabalho_com", target: "Trabalho com", native: "I work in / with", literal: "I-work with", emoji: "🛠️", phonetic: "trah-BAH-lyoo kohng", audioRef: null },
    { id: "sou_professor", target: "Sou professor / professora", native: "I'm a teacher (m./f.)", literal: "I-am teacher", emoji: "📚", phonetic: "soh pro-fes-SOR", audioRef: null },
  ],

  pattern: {
    name: "Two ways to talk work",
    explanation: "Sou + profession noun: Sou professor, sou médica, sou advogado. Trabalho com + field: Trabalho com tecnologia, trabalho com design. Brazilians use both.",
    examples: [
      { target: "Sou professora.", native: "I am a teacher. (f.)" },
      { target: "Trabalho com tecnologia.", native: "I work in tech." },
      { target: "Sou estudante.", native: "I am a student." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "O que você faz?", right: "What do you do?" },
      { left: "Trabalho com", right: "I work in/with" },
      { left: "Sou professora", right: "I am a teacher (f.)" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I work in tech", correct: ["Trabalho com tecnologia", "trabalho com tecnologia", "Eu trabalho com tecnologia"] },
    { type: "fill_blank", instruction: "Pick the right gender", sentence: "Sou ____ (woman saying I'm a teacher).", options: ["professora", "professor", "professores"], correct: "professora", context: "Speaker is woman — professora." },
    { type: "multiple_choice", instruction: "Brazilian asks O que você faz? — best reply?", question: "Choose", options: [
      { text: "Sou engenheiro/a. Trabalho com software.", correct: true },
      { text: "Tchau", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "Identity (sou engenheiro) + field (trabalho com software) — full Brazilian work answer." },
    { type: "build_sentence", instruction: "Build I work in tech", words: ["tecnologia.", "Trabalho", "com"], correct: ["Trabalho", "com", "tecnologia."], translation: "I work in tech." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "What do you do?", correct: ["O que você faz?", "o que você faz?", "O que voce faz?"] },
  ],

  rwenDialogue: {
    intro: "Coffee chat with a new Brazilian colleague.",
    lines: [
      { speaker: "npc", target: "E você, o que faz?", native: "And you, what do you do?" },
      { speaker: "user", userChoices: [
        { target: "Sou designer. Trabalho com produto digital.", native: "I am a designer. I work in digital product.", correct: true, feedback: "Identity + field. Brazilian work intro: complete." },
        { target: "Eu fazer designer", native: "(broken Portuguese)", correct: false, feedback: "Try Sou designer / Trabalho com..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with sou + profession or trabalho com + field." },
      ]},
      { speaker: "npc", target: "Que legal! Eu sou desenvolvedora.", native: "How cool! I am a developer." },
      { speaker: "rwen", rwenLine: "Brazilian work-talk: unlocked. You named what you are AND what you do.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I work in tech (Portuguese)", correct: ["Trabalho com tecnologia", "trabalho com tecnologia", "Eu trabalho com tecnologia"] },
      { prompt: "What do you do? (Portuguese)", correct: ["O que você faz?", "o que você faz?", "O que voce faz?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build your Brazilian work intro: Sou [profession]. Trabalho com [field]. Out loud, twice.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Networking event in São Paulo. A Brazilian asks O que você faz? You give your work intro and bounce the question back.",
    rwenRole: "Networking contact — paulistano, ~35, in tech.",
    successCriteria: "User uses Sou + gendered profession AND/OR Trabalho com + field, bounces back with E você?, and uses ser (not estar) because profession is identity.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
