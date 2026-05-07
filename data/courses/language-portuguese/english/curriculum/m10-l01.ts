import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m10-l01-feliz-triste",
  module: 10,
  lesson: 1,
  title: "Feliz, Triste, Cansado — Emotions",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 10: emotions and stories. The final stretch. Today, the basic feeling words. Estou feliz. Estou triste. Estou cansado.",
    culturalNote: "Brazilians share emotions easily — Brazilian friendship runs through openness about feelings. Saying tô triste hoje to a friend opens doors, not closes them.",
  },

  chunks: [
    { id: "feliz", target: "Feliz", native: "Happy", literal: "Happy (m./f. same)", emoji: "😊", phonetic: "feh-LEES", audioRef: null },
    { id: "triste", target: "Triste", native: "Sad", literal: "Sad (m./f. same)", emoji: "😢", phonetic: "TREES-chee", audioRef: null },
    { id: "cansado", target: "Cansado / Cansada", native: "Tired (m./f.)", literal: "Tired", emoji: "😴", phonetic: "kan-SAH-doo", audioRef: null },
  ],

  pattern: {
    name: "Estado emocional with estar",
    explanation: "All emotions use estar (temporary). Estou feliz, estou triste, estou cansado/a. -o/-a adjectives gender with the speaker; -e adjectives (feliz, triste) stay the same.",
    examples: [
      { target: "Estou feliz hoje.", native: "I'm happy today." },
      { target: "Estou triste, mas vou ficar bem.", native: "I'm sad, but I'll be OK." },
      { target: "Estou cansada.", native: "I'm tired (woman)." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Feliz", right: "Happy" },
      { left: "Triste", right: "Sad" },
      { left: "Cansado", right: "Tired (m.)" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "I am happy", correct: ["Estou feliz", "Eu estou feliz", "estou feliz"] },
    { type: "fill_blank", instruction: "Pick the right verb (state)", sentence: "Eu ____ triste hoje.", options: ["estou", "sou", "tenho"], correct: "estou", context: "Emotion = estar." },
    { type: "multiple_choice", instruction: "Which is correct?", question: "Choose", options: [
      { text: "Estou cansada (woman)", correct: true },
      { text: "Sou cansada (woman)", correct: false },
      { text: "Tenho cansada", correct: false },
    ], explanation: "Estar — temporary state." },
    { type: "build_sentence", instruction: "Build I am happy today", words: ["hoje.", "feliz", "Estou"], correct: ["Estou", "feliz", "hoje."], translation: "I am happy today." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "I'm tired (man speaking)", correct: ["Estou cansado", "Eu estou cansado", "estou cansado"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks how you really are.",
    lines: [
      { speaker: "npc", target: "Como você tá, de verdade?", native: "How are you, really?" },
      { speaker: "user", userChoices: [
        { target: "Tô meio cansado/a, mas feliz. E você?", native: "A bit tired, but happy. And you?", correct: true, feedback: "Two emotions, gendered, bounced. Brazilian-honest." },
        { target: "Sou feliz", native: "(wrong verb)", correct: false, feedback: "Emotion = estar — Estou / tô feliz." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Share an emotion." },
      ]},
      { speaker: "npc", target: "Tô bem, valeu por perguntar.", native: "I'm good, thanks for asking." },
      { speaker: "rwen", rwenLine: "Estou + emotion. Brazilian friendship needs honest feeling-talk.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "I am happy (Portuguese)", correct: ["Estou feliz", "Eu estou feliz", "Tô feliz", "estou feliz"] },
      { prompt: "I am tired (use form for YOUR gender)", correct: ["Estou cansado", "Estou cansada", "estou cansado", "estou cansada"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, three emotions: Estou feliz. Estou triste. Estou cansado/a. Build the estar + emotion reflex.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Catching up with a Brazilian friend over coffee — discuss your week, your moods, your tiredness, your highlights.",
    rwenRole: "Friend, ~30, asks honest questions.",
    successCriteria: "User uses estar + emotion (NOT ser), gendered cansado/a correctly, mixes feelings with mas (but) for nuance.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
