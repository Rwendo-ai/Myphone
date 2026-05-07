import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m08-l08-passado-simples",
  module: 8,
  lesson: 8,
  title: "Past tense — Eu fui, eu fiz",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Time to talk about yesterday. Eu fui ao Rio (I went to Rio). Eu fiz feijoada (I made feijoada). Past tense — pretérito perfeito.",
    culturalNote: "Brazilians use past tense constantly — even for very recent events. Almocei? — Did you (already) eat lunch? Past tense is alive in everyday speech.",
  },

  chunks: [
    { id: "fui", target: "Fui (ser/ir)", native: "I was / I went", literal: "Was/went", emoji: "🚶", phonetic: "FOO-ee", audioRef: null },
    { id: "fiz", target: "Fiz (fazer)", native: "I did / I made", literal: "Did/made", emoji: "🛠️", phonetic: "feez", audioRef: null },
    { id: "comi_bebi", target: "Comi / Bebi", native: "I ate / I drank", literal: "Ate / drank", emoji: "🍴", phonetic: "ko-MEE / beh-BEE", audioRef: null },
  ],

  pattern: {
    name: "Pretérito perfeito (regular pattern)",
    explanation: "-ar verbs: -ei (eu falei). -er verbs: -i (eu comi). -ir verbs: -i (eu parti). Irregulars: fui (was/went), fiz (did/made), tive (had).",
    examples: [
      { target: "Eu falei com ele.", native: "I spoke with him." },
      { target: "Comi feijoada ontem.", native: "I ate feijoada yesterday." },
      { target: "Fui ao Rio em janeiro.", native: "I went to Rio in January." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Fui", right: "I was/went" },
      { left: "Fiz", right: "I did/made" },
      { left: "Comi", right: "I ate" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I went to Rio", correct: ["Fui ao Rio", "Eu fui ao Rio", "fui ao Rio"] },
    { type: "fill_blank", instruction: "Past of falar (eu form)", sentence: "Ontem ____ com ele.", options: ["falei", "falo", "falar"], correct: "falei", context: "-ar past first-person = -ei." },
    { type: "multiple_choice", instruction: "Yesterday I ate feijoada — best Portuguese?", question: "Choose", options: [
      { text: "Ontem comi feijoada.", correct: true },
      { text: "Ontem como feijoada.", correct: false },
      { text: "Ontem sou comi.", correct: false },
    ], explanation: "Past of comer (eu) = comi." },
    { type: "build_sentence", instruction: "Build I made feijoada last Sunday", words: ["passado.", "Fiz", "no", "feijoada", "domingo"], correct: ["Fiz", "feijoada", "no", "domingo", "passado."], translation: "I made feijoada last Sunday." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I drank a beer", correct: ["Bebi uma cerveja", "Eu bebi uma cerveja", "Tomei uma cerveja"] },
  ],

  rwenDialogue: {
    intro: "Monday morning. Brazilian friend asks about your weekend.",
    lines: [
      { speaker: "npc", target: "Como foi o final de semana?", native: "How was the weekend?" },
      { speaker: "user", userChoices: [
        { target: "Foi ótimo. Fui pra praia e comi muito açaí.", native: "Was great. I went to the beach and ate a lot of açaí.", correct: true, feedback: "Three past-tense verbs in one breath. Pretérito flowing." },
        { target: "É ótimo", native: "(wrong tense)", correct: false, feedback: "Past — Foi ótimo." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer in past tense." },
      ]},
      { speaker: "npc", target: "Que demais!", native: "How awesome!" },
      { speaker: "rwen", rwenLine: "Past tense — fui, fiz, comi, bebi. Brazilians yesterday-talk: unlocked.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I went to Rio (Portuguese)", correct: ["Fui ao Rio", "Eu fui ao Rio", "fui ao Rio"] },
      { prompt: "I ate (Portuguese)", correct: ["Comi", "Eu comi", "comi"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three past-tense sentences from yesterday: Eu fui [place]. Eu comi [food]. Eu fiz [thing].",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend asks about your weekend — where you went, what you ate, what you did. Use past tense across three verbs.",
    rwenRole: "Friend, ~30, asking on Monday morning.",
    successCriteria: "User uses fui (went), comi (ate), fiz (did), and conjugates regular verbs in -ei / -i for first person past.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
