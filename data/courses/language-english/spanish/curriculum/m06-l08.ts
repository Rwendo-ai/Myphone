import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-money-prices',
  module: 6,
  lesson: 8,
  title: 'Money — How much is it?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: dinero. La habilidad más práctica para vivir, comprar, viajar en un país angloparlante.",
    culturalNote: "Algo cultural fuerte en EE.UU.: hay impuesto sobre la venta que NO está en el precio etiquetado. Si la etiqueta dice $10, en California pagas $10.95. En Latinoamérica el precio en góndola es lo que pagas. Otra: la propina (tip) en restaurantes no es opcional — se espera 15-20%. 'Cheap' en inglés es neutro (= barato), no peyorativo como en español 'tacaño'.",
  },

  chunks: [
    {
      id: 'how_much_cost',
      target: 'How much does it cost?',
      native: '¿Cuánto cuesta?',
      literal: 'How much does it cost?',
      emoji: '💰',
      phonetic: 'how-MUCH-duz-it-kost',
      audioRef: null,
    },
    {
      id: 'it_costs',
      target: 'It costs twenty dollars',
      native: 'Cuesta veinte dólares',
      literal: 'It costs twenty dollars',
      emoji: '💵',
      phonetic: 'it-KOSTS-TWEN-tee-DOL-arz',
      audioRef: null,
    },
    {
      id: 'expensive_cheap',
      target: "It's expensive / It's cheap",
      native: 'Es caro / Es barato',
      literal: "It is expensive / It is cheap",
      emoji: '💸',
      phonetic: "its-eks-PEN-siv / its-CHEEP",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'How much vs How many',
    explanation: "'How much' se usa para incontables (dinero, agua, tiempo). 'How many' para contables (manzanas, dólares como unidades, personas). 'How much does it cost?' = ¿cuánto cuesta? 'How many dollars?' = ¿cuántos dólares? Es la misma diferencia que en español entre 'cuánto' y 'cuántos'.",
    examples: [
      { target: 'How much is the rent?',     native: '¿Cuánto es el alquiler?' },
      { target: 'How many dollars do you have?', native: '¿Cuántos dólares tienes?' },
      { target: 'How much water?',            native: '¿Cuánta agua?' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Cuánto cuesta?',
      correct: ['How much does it cost?', 'how much does it cost?', 'How much is it?', 'how much is it?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — preguntas el precio',
      sentence: '____ much does it cost?',
      options: ['How', 'What', 'When'],
      correct: 'How',
      context: "'How much' es la fórmula para preguntar precio.",
    },
    {
      type: 'multiple_choice',
      instruction: 'En la caja, la etiqueta decía $10. La cajera dice "$10.95". ¿Por qué?',
      question: 'Why is the price higher at checkout?',
      options: [
        { text: 'Sales tax was added.', correct: true },
        { text: 'It was a mistake.',     correct: false },
        { text: 'The price changed.',    correct: false },
      ],
      explanation: 'En EE.UU. el impuesto sobre la venta (sales tax, 6-10%) se añade en la caja, no aparece en la etiqueta. Calcula 8-10% extra mentalmente para no sorprenderte.',
    },
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: "It's expensive",       right: 'Es caro' },
        { left: "It's cheap",            right: 'Es barato' },
        { left: 'How much does it cost?', right: '¿Cuánto cuesta?' },
        { left: 'Twenty dollars',         right: 'Veinte dólares' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — cuesta cincuenta dólares',
      words: ['fifty', 'It', 'dollars', 'costs'],
      correct: ['It', 'costs', 'fifty', 'dollars'],
      translation: 'Cuesta cincuenta dólares',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Es muy caro',
      correct: ["It's very expensive", "Its very expensive", "It's very expensive.", "it's very expensive"],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una tienda de ropa en Nueva York. Te gusta una chamarra y preguntas el precio.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "Excuse me, how much does this cost?", native: 'Disculpa, ¿cuánto cuesta esto?', correct: true,  feedback: 'Perfecto. "Excuse me" + "how much" es el formato natural en EE.UU.' },
          { target: 'How much it cost?',                    native: '¿Cuánto costar?',                correct: false, feedback: 'Falta "does" — la fórmula es "how much DOES it cost".' },
          { target: 'What price?',                           native: '¿Qué precio?',                  correct: false, feedback: 'Suena cortado. Mejor "How much is it?" o "How much does it cost?".' },
        ],
      },
      { speaker: 'npc', target: "It's eighty-five dollars, plus tax.", native: 'Son ochenta y cinco dólares, más impuesto.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Y ojo con "plus tax" — eso significa que el total será cerca de $92, no $85. En EE.UU. siempre suma 8-10% mental.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: '¿Cuánto cuesta? (en inglés)', correct: ['How much does it cost?', 'how much does it cost?', 'How much is it?', 'how much is it?'] },
      { prompt: 'Es caro (en inglés)',          correct: ["It's expensive", 'Its expensive', "it's expensive", "It's expensive."] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Mira el precio de tres cosas a tu alrededor (cualquier cosa). Pregunta y responde en voz alta en inglés: "How much does it cost? — It costs X dollars."',
    rwenSignoff: 'Mañana: descuentos y totales — el español del mercado.',
  },

  phase8: {
    scenario: "You're shopping at a US department store. You ask about prices on three items, comment whether each is expensive or cheap, and ask if there's tax included.",
    rwenRole: "Tasha, 26, sales associate. Friendly, helps you understand US pricing.",
    successCriteria: "User asks 'How much does it cost?' clearly, understands a price answer, comments on expensive/cheap, and asks about tax.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
