import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m01-l03-como-vai",
  module: 1,
  lesson: 3,
  title: "Como vai? — How's it going?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Beyond Tudo bem?, Brazilians have layers — Como vai?, Como está?, Beleza?. Each carries a different vibe. Today you pick up the second-most-common one.",
    culturalNote: "Como vai? is warmer than Tudo bem? — slightly older, used by adults, very common in workplaces and on the phone. Brazilian equivalent of How is it going?",
  },

  chunks: [
    { id: "como_vai", target: "Como vai?", native: "How's it going?", literal: "How (it) goes?", emoji: "🚶", phonetic: "KOH-moo VYE", audioRef: null },
    { id: "vai_bem", target: "Vai bem", native: "It is going well", literal: "(It) goes well", emoji: "✅", phonetic: "VYE BAYNG", audioRef: null },
    { id: "e_voce", target: "E você?", native: "And you?", literal: "And you?", emoji: "🔁", phonetic: "ee voh-SAY", audioRef: null },
  ],

  pattern: {
    name: "Bounce-back greetings",
    explanation: "Brazilians never let a how-are-you sit alone — you reply AND bounce back. Vai bem, e você? is the universal safe reply, used by anyone with anyone.",
    examples: [
      { target: "Como vai?", native: "How's it going?" },
      { target: "Vai bem.", native: "It is going well." },
      { target: "Vai bem, e você?", native: "Going well, and you?" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Como vai?", right: "How's it going?" },
      { left: "Vai bem", right: "It is going well" },
      { left: "E você?", right: "And you?" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "How's it going?", correct: ["Como vai?", "como vai?", "Como vai", "como vai"] },
    { type: "fill_blank", instruction: "Complete the bounce-back", sentence: "Vai bem, ____ você?", options: ["e", "ou", "mas"], correct: "e", context: "And you? = E você?" },
    { type: "multiple_choice", instruction: "Friend asks Como vai? — best Brazilian reply:", question: "Choose", options: [
      { text: "Vai bem, e você?", correct: true },
      { text: "Sim", correct: false },
      { text: "Adeus", correct: false },
    ], explanation: "Always reply AND bounce back. Vai bem, e você? is the universal safe answer." },
    { type: "build_sentence", instruction: "Build the bounce-back", words: ["você?", "Vai", "bem,", "e"], correct: ["Vai", "bem,", "e", "você?"], translation: "Going well, and you?" },
    { type: "translate", instruction: "Type in Portuguese", prompt: "And you?", correct: ["E você?", "e você?", "E voce?", "e voce?"] },
  ],

  rwenDialogue: {
    intro: "You bump into a Brazilian co-worker in the office kitchen.",
    lines: [
      { speaker: "npc", target: "Oi! Como vai?", native: "Hi! How's it going?" },
      { speaker: "user", userChoices: [
        { target: "Vai bem, e você?", native: "Going well, and you?", correct: true, feedback: "Perfeito — replied and bounced. Brazilian rhythm." },
        { target: "Vai bem", native: "Going well", correct: false, feedback: "Not wrong — but Brazilians always bounce back. Add e você?" },
        { target: "Sim", native: "Yes", correct: false, feedback: "Como vai? is not yes/no — reply with vai bem." },
      ]},
      { speaker: "npc", target: "Tudo ótimo!", native: "All great!" },
      { speaker: "rwen", rwenLine: "You replied AND bounced. That is Brazilian conversational rhythm.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type from memory.",
    prompts: [
      { prompt: "How's it going? (in Portuguese)", correct: ["Como vai?", "como vai?", "Como vai", "como vai"] },
      { prompt: "Going well, and you? (in Portuguese)", correct: ["Vai bem, e você?", "vai bem, e você?", "Vai bem e você?", "vai bem e voce?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice the bounce-back rhythm. Say out loud: Como vai? then immediately Vai bem, e você? — three times. Internalise the always-bounce-back instinct.",
    rwenSignoff: "Tchau! See you next lesson.",
  },

  phase8: {
    scenario: "You walk into a small office in Vila Madalena, São Paulo, where a Brazilian colleague is making coffee. They look up and ask Como vai?.",
    rwenRole: "Camila — your colleague, ~30, paulistana, expects normal Brazilian conversational rhythm.",
    successCriteria: "User replies Vai bem (NOT just sim), bounces the question back with E você?, and does not stop the exchange dead.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
