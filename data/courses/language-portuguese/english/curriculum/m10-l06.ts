import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m10-l06-imperfeito",
  module: 10,
  lesson: 6,
  title: "Quando eu era criança — Imperfect tense",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "For habits in the past or 'I used to', Portuguese has the imperfect. Quando eu era criança... (when I was a child). Eu morava em Londres. I used to live in London.",
    culturalNote: "Brazilians use the imperfect for nostalgic memory. Eu adorava ir pra praia (I used to love going to the beach) — past habit + emotional weight. Often paired with quando (when).",
  },

  chunks: [
    { id: "era", target: "Eu era", native: "I used to be / was", literal: "Imperfect of ser", emoji: "👶", phonetic: "EH-rah", audioRef: null },
    { id: "morava", target: "Eu morava", native: "I used to live", literal: "Imperfect of morar", emoji: "🏠", phonetic: "moh-RAH-vah", audioRef: null },
    { id: "tinha", target: "Eu tinha", native: "I used to have / had", literal: "Imperfect of ter", emoji: "🤲", phonetic: "CHEE-nyah", audioRef: null },
  ],

  pattern: {
    name: "Imperfect — habitual past",
    explanation: "Regular -ar: -ava (eu morava). -er/-ir: -ia (eu comia, eu vivia). Irregulars: era (was), tinha (had), ia (went). Use for habits, ages, ongoing past.",
    examples: [
      { target: "Quando era criança, morava em Londres.", native: "When I was a kid, I used to live in London." },
      { target: "Eu tinha 10 anos.", native: "I was 10 years old." },
      { target: "Comia muito açaí.", native: "I used to eat a lot of açaí." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Eu era", right: "I used to be" },
      { left: "Eu morava", right: "I used to live" },
      { left: "Eu tinha", right: "I used to have" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I used to live in London", correct: ["Eu morava em Londres", "Morava em Londres", "morava em Londres"] },
    { type: "fill_blank", instruction: "I was 10 years old", sentence: "Eu ____ dez anos.", options: ["tinha", "era", "estava"], correct: "tinha", context: "Age in past = ter (imperfect)." },
    { type: "multiple_choice", instruction: "Which is the right imperfect?", question: "Choose", options: [
      { text: "Quando eu era criança...", correct: true },
      { text: "Quando eu fui criança...", correct: false },
      { text: "Quando eu sou criança...", correct: false },
    ], explanation: "Habitual/state in past = imperfect. Era, not fui." },
    { type: "build_sentence", instruction: "Build I used to eat a lot of feijoada", words: ["feijoada.", "Comia", "muita"], correct: ["Comia", "muita", "feijoada."], translation: "I used to eat a lot of feijoada." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "When I was a child", correct: ["Quando eu era criança", "Quando era criança", "quando eu era criança"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks about your childhood.",
    lines: [
      { speaker: "npc", target: "Como era sua infância?", native: "What was your childhood like?" },
      { speaker: "user", userChoices: [
        { target: "Quando era criança, morava em Londres. Tinha um cachorro e adorava ler.", native: "When I was a kid, I lived in London. I had a dog and loved reading.", correct: true, feedback: "Three imperfects in one breath. Past-habit narration: built." },
        { target: "Sou criança", native: "(wrong tense)", correct: false, feedback: "Childhood is past — quando era." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Tell about your childhood." },
      ]},
      { speaker: "npc", target: "Que fofo!", native: "How sweet!" },
      { speaker: "rwen", rwenLine: "Imperfect — for habits, memory, the texture of past time. Brazilian nostalgia tense.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I used to live in London (Portuguese)", correct: ["Eu morava em Londres", "Morava em Londres", "morava em Londres"] },
      { prompt: "When I was a child (Portuguese)", correct: ["Quando eu era criança", "Quando era criança", "quando eu era criança"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell three childhood memories in imperfect: Quando era criança, eu... Three habits, three sentences.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian elder asks about your childhood — where, with whom, what you used to love and fear. Use imperfect throughout.",
    rwenRole: "Older Brazilian, ~70, kindly curious.",
    successCriteria: "User uses imperfect (era, morava, tinha, comia, adorava) for habits and states, contrasts with one pretérito for one-off events.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
