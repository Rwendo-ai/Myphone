import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-transport',
  module: 9,
  lesson: 4,
  title: 'Bus, Taxi, Train — Bus, taxi, tren',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: transporte público. Bus, taxi, tren. En EE.UU. estos varían mucho por ciudad — NYC es metro, LA es Uber, Chicago es bus + L train.",
    culturalNote: "En español 'taxi' funciona en casi cualquier país. En EE.UU. el taxi tradicional casi desapareció — todo es Uber/Lyft (rideshare apps). 'Train' en EE.UU. usualmente es de larga distancia (Amtrak); el metro es 'subway' (NYC) o el nombre local: 'BART' (San Francisco), 'L' (Chicago), 'Metro' (DC y LA). Y 'bus' es el mismo en todo el país. Cuidado con 'coach' — en EE.UU. es bus interurbano (entre ciudades), no urbano.",
  },

  chunks: [
    {
      id: 'the_bus',
      target: 'The bus',
      native: 'El bus',
      literal: 'The bus',
      emoji: '🚌',
      phonetic: 'thuh-BUS',
      audioRef: null,
    },
    {
      id: 'taxi',
      target: 'A taxi',
      native: 'Un taxi',
      literal: 'A taxi',
      emoji: '🚕',
      phonetic: 'uh-TAK-see',
      audioRef: null,
    },
    {
      id: 'the_train',
      target: 'The train',
      native: 'El tren',
      literal: 'The train',
      emoji: '🚆',
      phonetic: 'thuh-TRAYN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'By + transport (no article)',
    explanation: "Para decir cómo viajas se usa 'by' + medio de transporte SIN artículo: 'by bus', 'by car', 'by train', 'by plane', 'by foot' (a pie). NO se dice 'by the bus'. Excepción: 'on foot' también es válido para a pie.",
    examples: [
      { target: 'I go to work by bus',         native: 'Voy al trabajo en bus' },
      { target: 'They came by train',           native: 'Vinieron en tren' },
      { target: 'I prefer to travel by plane',  native: 'Prefiero viajar en avión' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja los transportes',
      pairs: [
        { left: 'The bus',   right: 'El bus' },
        { left: 'A taxi',     right: 'Un taxi' },
        { left: 'The train',  right: 'El tren' },
        { left: 'By car',     right: 'En carro' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — viajas en bus',
      sentence: 'I go to school ____ bus.',
      options: ['by', 'in', 'on'],
      correct: 'by',
      context: '"By + medio de transporte" sin artículo. "By bus", "by car", "by train".',
    },
    {
      type: 'multiple_choice',
      instruction: 'Estás en NYC. Necesitas el sistema de metro. ¿Cómo lo llamas?',
      question: 'In NYC, the underground rail system is called:',
      options: [
        { text: 'The subway', correct: true },
        { text: 'The metro',   correct: false },
        { text: 'The train',    correct: false },
      ],
      explanation: 'En NYC se dice "the subway". En DC y LA es "the metro". En Chicago "the L". Cada ciudad tiene su nombre.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Un taxi',
      correct: ['A taxi', 'a taxi', 'A taxi.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — voy en bus',
      words: ['bus', 'go', 'by', 'I'],
      correct: ['I', 'go', 'by', 'bus'],
      translation: 'Voy en bus',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tomo el tren a las 8',
      correct: ['I take the train at 8', 'I take the train at eight', 'i take the train at 8'],
    },
  ],

  rwenDialogue: {
    intro: 'Llegas al aeropuerto LaGuardia en NYC. Quieres llegar a Manhattan y le preguntas a un agente de información.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "Excuse me, how do I get to Manhattan? Bus, train, or taxi?", native: 'Disculpe, ¿cómo llego a Manhattan? ¿Bus, tren o taxi?', correct: true,  feedback: '¡Perfecto! Pregunta clara con tres opciones — el agente te dará la mejor.' },
          { target: 'Manhattan?',                                                    native: '¿Manhattan?',                                            correct: false, feedback: 'Demasiado cortado. Una pregunta completa te ahorra tiempo.' },
          { target: 'I want subway.',                                                  native: 'Yo quiero subway.',                                       correct: false, feedback: 'Suena directo. Mejor preguntar primero las opciones, luego decidir.' },
        ],
      },
      { speaker: 'npc', target: "The cheapest is the bus, but the subway is faster. There's also Uber.", native: 'Lo más barato es el bus, pero el subway es más rápido. También está Uber.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'll take the subway, then. Where is the station?", native: 'Tomaré el subway, entonces. ¿Dónde está la estación?', correct: true,  feedback: '¡Excelente! Decidiste y preguntaste por la estación. Eficiente.' },
          { target: 'Bus and subway and Uber?',                            native: '¿Bus y subway y Uber?',                                  correct: false, feedback: 'Confuso — parece que no entendiste. Decide uno y avanza.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! En NYC el subway es la opción más confiable — más rápido que tráfico de carros.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'El bus (en inglés)', correct: ['The bus', 'the bus'] },
      { prompt: 'Un taxi (en inglés)', correct: ['A taxi', 'a taxi'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Describe en inglés tres maneras de llegar de tu casa a un punto importante (trabajo, escuela, aeropuerto). Usa "by bus", "by car", "by train".',
    rwenSignoff: 'Mañana: cómo comprar tu boleto.',
  },

  phase8: {
    scenario: "You arrive at LAX in Los Angeles and need to figure out the best way to get to your hotel downtown — bus, train, taxi, or rideshare. Ask an info desk and decide.",
    rwenRole: "Steve, 50, info desk attendant. Patient, gives options with prices.",
    successCriteria: "User asks about transport options, uses 'by + transport' without an article, and decides on one option clearly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
