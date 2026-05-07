import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-foods',
  module: 7,
  lesson: 2,
  title: 'Common foods — Comidas comunes',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: pan, arroz, carne. Las palabras de cada día. Sin esto no puedes ni hacer mercado en EE.UU.",
    culturalNote: "Una brecha de vocabulario fuerte: en español tenemos chile, jalapeño, chipotle, serrano, habanero, poblano — cada uno una palabra. En inglés casi todo se llama 'pepper' o 'chili pepper' y luego se especifica. 'Carne' en español es solo de res; 'meat' en inglés cubre res, cerdo, pollo, todo lo que no sea pescado. Si pides 'meat' a un anglo, te pregunta '¿de qué animal?'. Específico siempre: 'beef' (res), 'pork' (cerdo), 'chicken' (pollo).",
  },

  chunks: [
    {
      id: 'bread',
      target: 'Bread',
      native: 'Pan',
      literal: undefined,
      emoji: '🍞',
      phonetic: 'BRED',
      audioRef: null,
    },
    {
      id: 'rice',
      target: 'Rice',
      native: 'Arroz',
      literal: undefined,
      emoji: '🍚',
      phonetic: 'RAYS',
      audioRef: null,
    },
    {
      id: 'meat',
      target: 'Meat',
      native: 'Carne (genérico)',
      literal: undefined,
      emoji: '🍖',
      phonetic: 'MEET',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Uncountable food nouns',
    explanation: "Muchas comidas en inglés son incontables: bread, rice, meat, water, milk. No se dice 'a bread' o 'two breads' — se dice 'some bread' o 'a piece of bread' o 'two slices of bread'. Esto es distinto al español donde 'un pan' es normal. Para cantidad, usa 'some' (un poco), 'a piece of' (un trozo de), 'a slice of' (una rebanada de).",
    examples: [
      { target: 'Some bread',           native: 'Pan / un poco de pan' },
      { target: 'A piece of meat',       native: 'Un trozo de carne' },
      { target: 'A bowl of rice',        native: 'Un plato de arroz' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las comidas',
      pairs: [
        { left: 'Bread',   right: 'Pan' },
        { left: 'Rice',    right: 'Arroz' },
        { left: 'Beef',    right: 'Carne de res' },
        { left: 'Chicken', right: 'Pollo' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Pan',
      correct: ['Bread', 'bread'],
    },
    {
      type: 'multiple_choice',
      instruction: 'En el mercado quieres carne de res. ¿Qué pides?',
      question: 'I want some...',
      options: [
        { text: 'Beef',     correct: true },
        { text: 'Meat',     correct: false },
        { text: 'Pork',     correct: false },
      ],
      explanation: '"Meat" es genérico — el carnicero te preguntará de qué animal. "Beef" es res, "pork" cerdo, "chicken" pollo. Sé específico.',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — pides cantidad correcta',
      sentence: 'Could I have ____ bread, please?',
      options: ['a', 'some', 'two'],
      correct: 'some',
      context: '"Bread" es incontable. Se dice "some bread" o "a slice of bread", no "a bread".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Arroz con pollo',
      correct: ['Rice with chicken', 'rice with chicken', 'Chicken with rice'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — pides un poco de pan',
      words: ['some', 'I', 'want', 'bread'],
      correct: ['I', 'want', 'some', 'bread'],
      translation: 'Quiero un poco de pan',
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una carnicería en Houston con tu suegra estadounidense. Quieres comprar res para asado.',
    lines: [
      { speaker: 'npc', target: "Hi, what kind of meat are you looking for?", native: 'Hola, ¿qué tipo de carne busca?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like some beef for grilling, please.",          native: 'Quisiera res para asar, por favor.',  correct: true,  feedback: '¡Perfecto! Específico ("beef") y dijiste el uso ("for grilling"). El carnicero te recomendará el corte.' },
          { target: 'I want meat.',                                        native: 'Quiero carne.',                        correct: false, feedback: '"Meat" es muy general. Te va a preguntar res, cerdo o pollo. Di "beef".' },
          { target: 'A bread, please.',                                    native: 'Un pan, por favor.',                   correct: false, feedback: '¡Estás en la carnicería, no panadería! Y "a bread" no se dice — sería "some bread" o "a loaf of bread".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Cuanto más específico seas con la comida en EE.UU., más rápido te atienden. No es ser exigente, es ser claro.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Pan (en inglés)',   correct: ['Bread', 'bread'] },
      { prompt: 'Arroz (en inglés)', correct: ['Rice', 'rice'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Abre tu refrigerador o despensa. Nombra cinco comidas que ves, en inglés. Si no sabes una, búscala — y agrégala a tu cabeza.',
    rwenSignoff: 'Mañana: el restaurante. Cómo pedir mesa, menú y cuenta.',
  },

  phase8: {
    scenario: "You're at a butcher counter at a Whole Foods in Miami. You need to buy beef, chicken, and ask if they have any pork. Be specific about cuts and quantity.",
    rwenRole: "Carlos, 40, butcher. Bilingual but practicing English with you. Patient.",
    successCriteria: "User uses specific food words (beef, chicken, pork) instead of generic 'meat', uses 'some' or 'a pound of' for quantity, and asks at least one clarifying question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
