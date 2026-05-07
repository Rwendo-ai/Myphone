import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m06-l07-data",
  module: 6,
  lesson: 7,
  title: "Que dia é hoje? — Today's date",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian dates: dia + number + de + month. Hoje é dia cinco de maio. Day before month, joined with de.",
    culturalNote: "Brazilians write dates as DD/MM/YYYY (like Europe, unlike US). 05/05/2026 = 5th of May. Saying datas in conversation always uses dia [number] de [month].",
  },

  chunks: [
    { id: "que_dia", target: "Que dia é hoje?", native: "What day is today?", literal: "What day is today?", emoji: "📅", phonetic: "kee JEE-ah eh OH-zhee", audioRef: null },
    { id: "hoje_e", target: "Hoje é", native: "Today is", literal: "Today is", emoji: "🗓️", phonetic: "OH-zhee EH", audioRef: null },
    { id: "dia_de", target: "Dia ___ de ___", native: "[number] of [month]", literal: "Day X of Y", emoji: "🗒️", phonetic: "JEE-ah jee", audioRef: null },
  ],

  pattern: {
    name: "Day-of-month construction",
    explanation: "Hoje é dia [number] de [month]. Hoje é dia cinco de maio. The day uses primeiro for 1st (only ordinal). Otherwise, plain numbers: dia dois, dia três, dia trinta e um.",
    examples: [
      { target: "Hoje é dia primeiro de maio.", native: "Today is May 1st." },
      { target: "Vou no dia 15 de junho.", native: "I'm going June 15th." },
      { target: "Aniversário no dia 22 de outubro.", native: "Birthday on October 22nd." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Que dia é hoje?", right: "What day is today?" },
      { left: "Hoje é dia 5", right: "Today is the 5th" },
      { left: "Dia primeiro", right: "1st of the month" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "Today is the 10th of May", correct: ["Hoje é dia dez de maio", "hoje é dia dez de maio", "Hoje e dia dez de maio"] },
    { type: "fill_blank", instruction: "1st of June — special form", sentence: "Dia ____ de junho.", options: ["primeiro", "um", "dois"], correct: "primeiro", context: "1st = primeiro (only ordinal in dates)." },
    { type: "multiple_choice", instruction: "Date is 22 December. Best Portuguese?", question: "Choose", options: [
      { text: "Dia 22 de dezembro", correct: true },
      { text: "Dezembro 22", correct: false },
      { text: "Dia vinte e dois e dezembro", correct: false },
    ], explanation: "Day + de + month. No comma." },
    { type: "build_sentence", instruction: "Build My birthday is on December 5th", words: ["dezembro.", "Meu", "no", "5", "é", "aniversário", "dia", "de"], correct: ["Meu", "aniversário", "é", "no", "dia", "5", "de", "dezembro."], translation: "My birthday is on December 5th." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "What day is today?", correct: ["Que dia é hoje?", "que dia é hoje?", "Que dia e hoje?"] },
  ],

  rwenDialogue: {
    intro: "Brazilian friend asks today's date.",
    lines: [
      { speaker: "npc", target: "Que dia é hoje?", native: "What's today?" },
      { speaker: "user", userChoices: [
        { target: "Hoje é dia seis de maio.", native: "Today is May 6th.", correct: true, feedback: "Day + de + month. Date construction: locked." },
        { target: "Hoje é maio seis", native: "(English-style)", correct: false, feedback: "In Portuguese: dia + number + de + month." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Answer with the date — dia X de month." },
      ]},
      { speaker: "npc", target: "Já?! Cinco de Maio é Carnaval mexicano, né?", native: "Already?! Cinco de Mayo is Mexican Carnival, right?" },
      { speaker: "rwen", rwenLine: "Brazilian dates: day-month-year, lowercase month, joined with de. Pure Portuguese.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "Today is May 5th (Portuguese)", correct: ["Hoje é dia 5 de maio", "Hoje é dia cinco de maio", "hoje é dia cinco de maio"] },
      { prompt: "What day is today? (Portuguese)", correct: ["Que dia é hoje?", "que dia é hoje?", "Que dia e hoje?"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Out loud, say today's date in Portuguese: Hoje é dia X de Y. Then your birthday: Meu aniversário é dia X de Y.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Brazilian friend asks for several dates — today, your birthday, when you arrive in Brazil. Use date construction across different days and months.",
    rwenRole: "Brazilian friend organising calendar.",
    successCriteria: "User uses dia [number] de [month] format, primeiro for 1st, lowercase months, and pairs with em / no dia.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
