import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: "m09-l10-travel-cap",
  module: 9,
  lesson: 10,
  title: "Travel Day — Module 9 Capstone",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 9 capstone. Airport to hotel to beach to dinner — one Brazilian travel day. Direction asks, Uber, hotel check-in, beach kit, dinner, return.",
    culturalNote: "A Brazilian travel day is layered: every transition is a micro-Portuguese conversation. Get the openers right and the rest unfolds with warmth.",
  },

  chunks: [
    { id: "review_uber", target: "Boa tarde, tudo bem?", native: "Uber greeting", literal: "Travel arc opener", emoji: "🚗", phonetic: "BOH-ah TAR-jee", audioRef: null },
    { id: "review_hotel", target: "Tenho reserva", native: "Hotel check-in", literal: "Reservation phrase", emoji: "🔑", phonetic: "TEH-nyoo heh-ZER-vah", audioRef: null },
    { id: "review_metro", target: "Pego a linha + cor", native: "Metrô line", literal: "Take + line + colour", emoji: "🚇", phonetic: "PEH-goo ah LEE-nyah", audioRef: null },
  ],

  pattern: {
    name: "Travel arcs across the day",
    explanation: "Each leg has its arc: Uber (greet, confirm, exit), Metrô (line, station, change), hotel (reserva, quarto, café), beach (cadeira, guarda-sol, food). Stack all six in one day.",
    examples: [
      { target: "Boa tarde, tudo bem? Vai pra Vila Madalena?", native: "Uber arc opener" },
      { target: "Tenho reserva no nome de Alex.", native: "Hotel check-in" },
      { target: "Quero uma cadeira e um guarda-sol.", native: "Beach setup" },
    ],
  },

  exercises: [
    { type: "match_pairs", instruction: "Match each leg to its phrase", pairs: [
      { left: "Uber", right: "Tudo bem? / Pode parar aqui" },
      { left: "Hotel", right: "Tenho reserva" },
      { left: "Metrô", right: "Pego a linha azul" },
    ]},
    { type: "multiple_choice", instruction: "Brazilian Uber driver — best on-arrival exit?", question: "Choose", options: [
      { text: "Pode parar aqui. Obrigado/a!", correct: true },
      { text: "Tchau!", correct: false },
      { text: "Sim", correct: false },
    ], explanation: "Pode parar aqui + obrigado/a. Brazilian rideshare warmth." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where is the boarding gate?", correct: ["Onde fica o portão de embarque?", "onde fica o portão de embarque?", "Onde fica o embarque?"] },
    { type: "fill_blank", instruction: "Stop on Metrô", sentence: "Desço em ____.", options: ["Sé", "às", "para"], correct: "Sé", context: "Descer em + station name." },
    { type: "build_sentence", instruction: "Build I have a reservation under Alex", words: ["nome", "Alex.", "reserva", "no", "Tenho", "de"], correct: ["Tenho", "reserva", "no", "nome", "de", "Alex."], translation: "I have a reservation under Alex." },
    { type: "translate", instruction: "Type in Portuguese", prompt: "Where is the bus stop?", correct: ["Onde fica o ponto de ônibus?", "onde fica o ponto de ônibus?", "Onde fica o ponto?"] },
  ],

  rwenDialogue: {
    intro: "Saturday in Rio. Run a full travel day: airport → Uber → hotel → beach → dinner. Lead each transition.",
    lines: [
      { speaker: "rwen", rwenLine: "Você acabou de sair do GIG. Uber chega. O motorista olha." },
      { speaker: "user", userChoices: [
        { target: "Boa tarde, tudo bem? Pra Copacabana, né?", native: "Good afternoon, all good? To Copacabana, right?", correct: true, feedback: "Uber arc opened — greeting + confirm." },
        { target: "Copa", native: "(curt)", correct: false, feedback: "Greet first." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Greet on entry — Boa tarde, tudo bem?" },
      ]},
      { speaker: "rwen", rwenLine: "Hotel. Recepção." },
      { speaker: "user", userChoices: [
        { target: "Boa tarde, tenho reserva no nome de Alex.", native: "Good afternoon, reservation under Alex.", correct: true, feedback: "Hotel check-in: opened correctly." },
        { target: "Reserva!", native: "(too short)", correct: false, feedback: "Frame: Tenho reserva no nome de..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Greet + check-in." },
      ]},
      { speaker: "rwen", rwenLine: "Praia, ao meio-dia. Barraca." },
      { speaker: "user", userChoices: [
        { target: "Quero alugar uma cadeira e um guarda-sol. Aceita PIX?", native: "I want to rent a chair and umbrella. Accept PIX?", correct: true, feedback: "Order + payment all in one breath." },
        { target: "Sim", native: "Yes", correct: false, feedback: "Order specifically — Quero alugar..." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Order at the beach barraca." },
      ]},
      { speaker: "rwen", rwenLine: "Restaurante à noite. A garçonete vem." },
      { speaker: "user", userChoices: [
        { target: "Boa noite! Mesa para dois, por favor. O que você recomenda?", native: "Good evening! Table for two, please. What do you recommend?", correct: true, feedback: "Restaurant arc fired in two sentences." },
        { target: "Mesa", native: "(too short)", correct: false, feedback: "Frame: Mesa para dois, por favor + recommendation." },
        { target: "Tchau", native: "Bye", correct: false, feedback: "Open the restaurant arc." },
      ]},
      { speaker: "rwen", rwenLine: "Uber, hotel, praia, jantar — quatro arcos brasileiros em um dia. Module 9: complete.", rwenAnimation: "celebrate" },
    ],
  },

  activeRecall: {
    instruction: "No looking back.",
    prompts: [
      { prompt: "You can stop here (Portuguese)", correct: ["Pode parar aqui", "pode parar aqui"] },
      { prompt: "I have a reservation (Portuguese)", correct: ["Tenho reserva", "tenho reserva", "Eu tenho reserva"] },
    ],
  },

  mission: {
    title: "Your Module 9 Mission",
    task: "Run a Brazilian travel day in your head out loud — airport, Uber, hotel, Metrô, beach, restaurant. Six arcs, one Saturday.",
    rwenSignoff: "Você se move pelo Brasil agora. Module 10 — emoções e histórias. Tchau!",
  },

  phase8: {
    scenario: "Saturday: arrive GIG, Uber to hotel, check in, Metrô to Copacabana, beach kit, restaurant for dinner. Six arcs, one day.",
    rwenRole: "Six different Brazilians across the day.",
    successCriteria: "User runs every arc with the correct Brazilian etiquette: greetings, gratitude, payment method, polite asks. No mid-day silence.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
