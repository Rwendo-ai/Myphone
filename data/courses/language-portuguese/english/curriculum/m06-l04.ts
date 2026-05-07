import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m06-l04-que-horas",
  module: 6,
  lesson: 4,
  title: "Que horas são? — What time is it?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilians use the 24-hour clock for schedules but the 12-hour clock for casual talk. Que horas são? — What time is it? São três horas — It is three.",
    culturalNote: "Brazilian schedules run later than US/UK. Lunch 12-2, dinner 8-10pm, parties start at 11pm. If a Brazilian says 8pm, they mean closer to 8:30. Time is friendly, not strict.",
  },

  chunks: [
    { id: "que_horas", target: "Que horas são?", native: "What time is it?", literal: "What hours are?", emoji: "🕐", phonetic: "kee OH-rahs sowng", audioRef: null },
    { id: "sao_horas", target: "São ___ horas", native: "It is ___ o'clock", literal: "Are ___ hours", emoji: "🕒", phonetic: "sowng OH-rahs", audioRef: null },
    { id: "uma_hora", target: "É uma hora", native: "It is one o'clock", literal: "Is one hour", emoji: "🕐", phonetic: "eh OO-mah OH-rah", audioRef: null },
  ],

  pattern: {
    name: "1 vs many — singular trick",
    explanation: "1 o'clock = É uma hora (singular, feminine). All other hours = São X horas (plural). Half past = e meia. Quarter past = e quinze.",
    examples: [
      { target: "É uma hora.", native: "It's 1." },
      { target: "São três horas.", native: "It's 3." },
      { target: "São oito e meia.", native: "It's 8:30." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Que horas são?", right: "What time is it?" },
      { left: "É uma hora", right: "It's 1 o'clock" },
      { left: "São oito e meia", right: "It's 8:30" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "It's 3 o'clock", correct: ["São três horas", "são três horas"] },
    { type: "fill_blank", instruction: "1 o'clock uses singular", sentence: "____ uma hora.", options: ["É", "São", "Está"], correct: "É", context: "Only 1 hour — singular É." },
    { type: "multiple_choice", instruction: "It is 7:30. Best Portuguese?", question: "Choose", options: [
      { text: "São sete e meia", correct: true },
      { text: "É sete e meia", correct: false },
      { text: "Tem sete meia", correct: false },
    ], explanation: "All hours except 1 use São." },
    { type: "build_sentence", instruction: "Build It is 6:15", words: ["e", "São", "quinze.", "seis"], correct: ["São", "seis", "e", "quinze."], translation: "It's 6:15." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "What time is it?", correct: ["Que horas são?", "que horas são?", "Que horas sao?"] },
  ],

  rwenDialogue: {
    intro: "You are at a São Paulo office. A colleague asks the time.",
    lines: [
      { speaker: "npc", target: "Que horas são?", native: "What time is it?" },
      { speaker: "user", userChoices: [
        { target: "São quinze para as duas.", native: "It's a quarter to two.", correct: true, feedback: "Quarter-to construction with para — Brazilian time fluency." },
        { target: "É duas horas", native: "(wrong number)", correct: false, feedback: "Plural is São for 2+: São duas." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with São + time." },
      ]},
      { speaker: "npc", target: "Já? Bora almoçar!", native: "Already? Let's go for lunch!" },
      { speaker: "rwen", rwenLine: "É uma vs São X — the singular/plural time switch. Locked in.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "What time is it? (Portuguese)", correct: ["Que horas são?", "que horas são?", "Que horas sao?"] },
      { prompt: "It is 8:30 (Portuguese)", correct: ["São oito e meia", "são oito e meia"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three times today, ask the air: Que horas são? Then answer in Portuguese with the right É or São.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "On the phone with a Brazilian friend trying to set meeting times. Use clock vocabulary across the day.",
    rwenRole: "Friend — paulistana, ~30, casual.",
    successCriteria: "User uses É uma for 1 o'clock and São for all others, adds e meia for half-hour, and uses 24-hour clock when discussing official events.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
