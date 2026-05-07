import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m06-l03-mil-milhao",
  module: 6,
  lesson: 3,
  title: "Mil & Milhão — Big numbers and the comma",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Brazilian numbers swap the comma and the period. R$ 1.500,50 = one thousand five hundred and fifty cents. The comma is the decimal point.",
    culturalNote: "When you see R$ 1.000,00 in Brazil, that is one thousand reais flat — not one US dollar. The thousands separator is a period, the decimal is a comma. Opposite of the US.",
  },

  chunks: [
    { id: "duzentos", target: "Duzentos / Duzentas", native: "200 (m./f.)", literal: "200", emoji: "2️⃣0️⃣0️⃣", phonetic: "doo-ZEN-toos", audioRef: null },
    { id: "mil", target: "Mil", native: "1,000 (one thousand)", literal: "Thousand (no plural to 999)", emoji: "1️⃣K", phonetic: "meel", audioRef: null },
    { id: "milhao", target: "Um milhão", native: "1,000,000 (one million)", literal: "A million", emoji: "💰", phonetic: "oong meel-YOWNG", audioRef: null },
  ],

  pattern: {
    name: "Brazilian decimal comma",
    explanation: "1.000 = mil (one thousand). 1.000,50 = mil e cinquenta centavos. The comma separates reais from centavos. The period separates thousands. Hundreds in plural also gender: duzentos reais (m.), duzentas pessoas (f.).",
    examples: [
      { target: "R$ 1.500,00", native: "1500 reais" },
      { target: "R$ 25,50", native: "25 reais and 50 cents" },
      { target: "Duzentas pessoas", native: "200 people (f.)" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Mil", right: "1,000" },
      { left: "Milhão", right: "1,000,000" },
      { left: "Duzentos", right: "200 (m.)" },
    ]},
    { type: "translate", instruction: "Type in Portuguese", prompt: "One thousand", correct: ["Mil", "mil"] },
    { type: "fill_blank", instruction: "200 people (people = pessoas, f.)", sentence: "____ pessoas.", options: ["Duzentas", "Duzentos", "Duzenta"], correct: "Duzentas", context: "Pessoas (f.) — duzentas." },
    { type: "multiple_choice", instruction: "What does R$ 1.250,75 mean?", question: "Choose", options: [
      { text: "1,250 reais and 75 centavos", correct: true },
      { text: "1.25 reais", correct: false },
      { text: "125075 reais", correct: false },
    ], explanation: "Period = thousands separator. Comma = decimal." },
    { type: "build_sentence", instruction: "Build It costs 1500 reais", words: ["e", "Custa", "reais.", "quinhentos", "mil"], correct: ["Custa", "mil", "e", "quinhentos", "reais."], translation: "It costs 1,500 reais." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "One million", correct: ["Um milhão", "um milhão", "Um milhao", "um milhao"] },
  ],

  rwenDialogue: {
    intro: "Looking at apartment listings in São Paulo with a Brazilian friend.",
    lines: [
      { speaker: "npc", target: "Esse apê tá R$ 2.800,00 por mês.", native: "This apartment is R$ 2,800 per month." },
      { speaker: "user", userChoices: [
        { target: "Dois mil e oitocentos reais? Caro!", native: "Two thousand eight hundred reais? Pricey!", correct: true, feedback: "Read the period as thousands separator. Brazilian numbers: parsed." },
        { target: "Dois reais?", native: "(misread)", correct: false, feedback: "The period is thousands — R$ 2.800 = 2800 reais." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Comment on the price, in Portuguese." },
      ]},
      { speaker: "npc", target: "É a média de São Paulo, infelizmente.", native: "It's São Paulo average, unfortunately." },
      { speaker: "rwen", rwenLine: "Comma vs period — Brazil flips the US system. You parsed it correctly.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "One thousand reais (Portuguese)", correct: ["Mil reais", "mil reais"] },
      { prompt: "Two hundred women (Portuguese)", correct: ["Duzentas mulheres", "duzentas mulheres"] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Read three Brazilian price tags out loud: R$ 1.500,00 / R$ 35,90 / R$ 12.000,00. Convert the punctuation in your head.",
    rwenSignoff: "Tchau!",
  },

  phase8: {
    scenario: "Apartment hunting in São Paulo. Discuss prices, monthly rents, fees — all Brazilian-style numbers.",
    rwenRole: "Imobiliária — real estate agent, ~40, paulistana.",
    successCriteria: "User reads R$ X.XXX,XX correctly (period thousands, comma decimal), spells numbers with mil + e + hundreds, agrees gender on duzentos/duzentas etc.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
