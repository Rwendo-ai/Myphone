import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m01-l05-prazer",
  module: 1,
  lesson: 5,
  title: "Prazer — Nice to meet you",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "First meetings in Brazil are physical — handshake at minimum, often a cheek-kiss for women. The word that lands the moment? Prazer. Pleasure.",
    culturalNote: "In Rio, women cheek-kiss on both sides; in São Paulo, often just one. Men shake hands and sometimes hug. Saying Prazer while doing it is the social glue.",
  },

  chunks: [
    { id: "prazer", target: "Prazer", native: "Nice to meet you (lit. pleasure)", literal: "Pleasure", emoji: "🤝", phonetic: "prah-ZEHR", audioRef: null },
    { id: "muito_prazer", target: "Muito prazer", native: "Very nice to meet you", literal: "Much pleasure", emoji: "🌟", phonetic: "MWEEN-too prah-ZEHR", audioRef: null },
    { id: "igualmente", target: "Igualmente", native: "Likewise", literal: "Equally", emoji: "🔁", phonetic: "ee-gwahl-MEN-chee", audioRef: null },
  ],

  pattern: {
    name: "The first-meeting micro-script",
    explanation: "Brazilian first meetings follow a tiny pattern: introduce → say prazer → other person says igualmente. Three beats, every time.",
    examples: [
      { target: "Sou João. Prazer.", native: "I am João. Pleasure." },
      { target: "Prazer, Maria.", native: "Pleasure, Maria." },
      { target: "Igualmente.", native: "Likewise." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Prazer", right: "Nice to meet you" },
      { left: "Muito prazer", right: "Very nice to meet you" },
      { left: "Igualmente", right: "Likewise" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Nice to meet you", correct: ["Prazer", "prazer", "Muito prazer", "muito prazer"] },
    { type: "fill_blank", instruction: "Reply when someone says Muito prazer", sentence: "____", options: ["Igualmente", "Adeus", "Oi"], correct: "Igualmente", context: "The mirror reply is igualmente." },
    { type: "multiple_choice", instruction: "First time meeting your Brazilian friend's mother. Best line?", question: "Choose", options: [
      { text: "Muito prazer", correct: true },
      { text: "Tchau", correct: false },
      { text: "Tudo bem", correct: false },
    ], explanation: "Muito prazer is the slightly-warmer first-meeting line — perfect for an elder." },
    { type: "build_sentence", instruction: "Introduce yourself in Brazilian style", words: ["Prazer.", "Sou", "Maria."], correct: ["Sou", "Maria.", "Prazer."], translation: "I am Maria. Pleasure." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Likewise", correct: ["Igualmente", "igualmente"] },
  ],

  rwenDialogue: {
    intro: "A friend introduces you to her sister at a Saturday churrasco.",
    lines: [
      { speaker: "npc", target: "Esta é a minha irmã, Camila.", native: "This is my sister, Camila." },
      { speaker: "user", userChoices: [
        { target: "Muito prazer, Camila!", native: "Very nice to meet you, Camila!", correct: true, feedback: "Warm, formal-enough, perfectly Brazilian." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "You just met her — say prazer, not tchau." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Reply with prazer or muito prazer to mark the introduction." },
      ]},
      { speaker: "npc", target: "Igualmente!", native: "Likewise!" },
      { speaker: "rwen", rwenLine: "Brazilian first-meeting micro-script: complete. You said prazer, she said igualmente.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type from memory.",
    prompts: [
      { prompt: "Nice to meet you (in Portuguese)", correct: ["Prazer", "prazer", "Muito prazer", "muito prazer"] },
      { prompt: "Likewise (in Portuguese)", correct: ["Igualmente", "igualmente"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Imagine meeting someone new at a Brazilian gathering. Out loud, run the script: Sou [your name]. Prazer. — then reply Igualmente. Twice through.",
    rwenSignoff: "Até logo!",
  },

  phase8: {
    scenario: "Saturday afternoon at a churrasco in your friend's backyard in São Paulo. Their mother walks over and your friend introduces you to her for the first time.",
    rwenRole: "Dona Lúcia — your friend's mother, ~58, warm but observant Brazilian matriarch. She forms her first impression in this exact ten seconds.",
    successCriteria: "User uses Muito prazer (warmer for an elder, NOT just oi or tudo bem), and replies Igualmente when she returns the prazer back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
