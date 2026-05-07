import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m06-l10-numbers-cap",
  module: 6,
  lesson: 10,
  title: "Numbers in Action — Module 6 Capstone",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 6 capstone. Numbers, time, money, dates — all in one Brazilian afternoon. You will book a haircut, settle a price, name a date, count change. The whole module in one ride.",
    culturalNote: "Numbers in Brazil are constant — Quantos anos? Quanto custa? Que horas? Que dia? Without them, you cannot live a day. With them, you live.",
  },

  chunks: [
    { id: "review_horas", target: "São ___ horas", native: "It is ___ o'clock", literal: "Time", emoji: "🕐", phonetic: "sowng OH-rahs", audioRef: null },
    { id: "review_dia", target: "Dia ___ de ___", native: "Date construction", literal: "Day X of Y", emoji: "📅", phonetic: "JEE-ah jee", audioRef: null },
    { id: "review_haggle", target: "Tem desconto? / Faz por X?", native: "Soft haggle pair", literal: "Negotiation", emoji: "🤝", phonetic: "TAYNG des-KON-too", audioRef: null },
  ],

  pattern: {
    name: "Number toolkit",
    explanation: "Hours: É uma / São X horas. Dates: dia X de [month]. Prices: X reais e Y centavos. Comparisons: mais X do que. PIX/cartão for payment. The whole bridge between you and Brazilian numbers.",
    examples: [
      { target: "São quinze horas, dia 5 de maio.", native: "It's 3pm, May 5th." },
      { target: "R$ 35,50, no PIX.", native: "R$ 35.50, by PIX." },
      { target: "Vinte e cinco anos, mais novo do que ela.", native: "25 years old, younger than her." },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match", pairs: [
      { left: "Time", right: "São oito horas" },
      { left: "Date", right: "Dia 5 de maio" },
      { left: "Price", right: "Trinta reais" },
    ]},
    { type: "multiple_choice", instruction: "Brazilian-style price reading?", question: "What is R$ 1.250,75 read aloud?", options: [
      { text: "Mil, duzentos e cinquenta reais e setenta e cinco centavos", correct: true },
      { text: "Um, dois, cinco, zero", correct: false },
      { text: "Mil reais", correct: false },
    ], explanation: "Period = thousands, comma = decimal. Speak each block." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Today is May 5th, 3pm", correct: ["Hoje é dia 5 de maio, três horas", "Hoje é dia cinco de maio, três horas", "hoje é dia cinco de maio, três horas"] },
    { type: "fill_blank", instruction: "Pick the verb for time", sentence: "____ duas horas.", options: ["São", "É", "Tem"], correct: "São", context: "2+ hours = São." },
    { type: "build_sentence", instruction: "Build Pay 50 reais by PIX", words: ["no", "Pagar", "PIX.", "cinquenta", "reais"], correct: ["Pagar", "cinquenta", "reais", "no", "PIX."], translation: "Pay 50 reais by PIX." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Any discount? (using PIX)", correct: ["Tem desconto no PIX?", "tem desconto no PIX?", "Tem desconto se for no PIX?"] },
  ],

  rwenDialogue: {
    intro: "Saturday afternoon in São Paulo. You book a haircut, agree the price, set the date, pay by PIX. Lead.",
    lines: [
      { speaker: "npc", target: "Quanto vai querer? Corte simples sai por R$ 80,00.", native: "What do you want? Simple cut is R$ 80." },
      { speaker: "user", userChoices: [
        { target: "Tem desconto se eu pagar no PIX?", native: "Discount if I pay by PIX?", correct: true, feedback: "PIX-anchored haggle move." },
        { target: "Não", native: "(curt)", correct: false, feedback: "Open with Tem desconto." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Negotiate first." },
      ]},
      { speaker: "npc", target: "No PIX, setenta.", native: "By PIX, seventy." },
      { speaker: "user", userChoices: [
        { target: "Fechado. Que dia tem horário?", native: "Deal. What day do you have an opening?", correct: true, feedback: "Close + transition. Brazilian flow." },
        { target: "Sim", native: "(terse)", correct: false, feedback: "Close with Fechado and ask the date." },
        { target: "Não", native: "No", correct: false, feedback: "Close at 70 — Fechado." },
      ]},
      { speaker: "npc", target: "Sexta, dia 9, às 15h?", native: "Friday, the 9th, at 3pm?" },
      { speaker: "user", userChoices: [
        { target: "Pode ser! Sexta-feira, três horas, no PIX. Combinado.", native: "Works! Friday, 3pm, by PIX. Agreed.", correct: true, feedback: "You confirmed day + time + payment in one Brazilian sentence. Module 6: complete." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Confirm everything — day, time, payment." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Confirm the deal first — Pode ser! Combinado." },
      ]},
      { speaker: "rwen", rwenLine: "Time, money, date, payment — all in three lines. Brazilian numbers: in your bones. Module 6: complete.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "It is 3 o'clock (Portuguese)", correct: ["São três horas", "são três horas"] },
      { prompt: "Pay by PIX (Portuguese)", correct: ["Pagar no PIX", "pagar no PIX"] },
    ],
  },

  mission: {
    title: "Your Module 6 Mission",
    task: "Run a numbers day: Que horas são? Quanto custa? Que dia? Posso pagar no PIX? Out loud, all four, today.",
    rwenSignoff: "Os números brasileiros agora são teus. Module 7 — food. Tchau!",
  },

  phase8: {
    scenario: "Booking a service in São Paulo — pick day and time, agree price, settle payment method. Use numbers, dates, money, comparison, all in one go.",
    rwenRole: "Service provider — paulistana, ~35.",
    successCriteria: "User uses correct number forms (mil/cem, primeiro for 1st), reads R$ X,XX correctly, picks day with na/no contraction, asks Tem desconto, settles with PIX or cartão.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
