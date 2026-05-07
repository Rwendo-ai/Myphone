import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-shopping-numbers',
  module: 6,
  lesson: 9,
  title: 'Numbers in shopping — Discount, Total',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: las palabras de las ofertas — discount, total, two for ten. Para entender promociones en Target, Walmart, Costco.",
    culturalNote: "En EE.UU. el truco más común es '2 for $10' — significa que dos cuestan diez (cinco cada uno), pero solo si compras dos. Si solo compras uno, paga el precio normal (a veces $6 o $7). En México decimos '2x1' (dos por el precio de uno) — ¡es DIFERENTE! '2 for $10' no es 2x1. La otra trampa: 'percent off' — '20% off' significa descuento, no que pagas el 20%.",
  },

  chunks: [
    {
      id: 'two_for_ten',
      target: 'Two for ten dollars',
      native: 'Dos por diez dólares',
      literal: 'Two for ten dollars',
      emoji: '🛍️',
      phonetic: 'too-for-TEN-DOL-arz',
      audioRef: null,
    },
    {
      id: 'discount',
      target: 'Discount',
      native: 'Descuento',
      literal: 'Discount',
      emoji: '🏷️',
      phonetic: 'DIS-kownt',
      audioRef: null,
    },
    {
      id: 'total',
      target: 'Total / altogether',
      native: 'Total / en total',
      literal: 'Total / altogether',
      emoji: '🧾',
      phonetic: 'TOH-tul / ahl-too-GEH-thur',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Percent off',
    explanation: "'X percent off' significa descuento del X%. '20% off' = pagas el 80%. 'Half off' = mitad de precio. 'Buy one get one free' (BOGO) = compra uno, llévate dos. La preposición 'off' es clave — significa 'menos del precio'.",
    examples: [
      { target: 'Twenty percent off',         native: 'Veinte por ciento de descuento' },
      { target: 'Half off',                    native: 'Mitad de precio' },
      { target: 'Buy one, get one free',       native: 'Compra uno, llévate dos gratis' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las frases de compras',
      pairs: [
        { left: 'Discount',          right: 'Descuento' },
        { left: 'Total',              right: 'Total' },
        { left: 'Two for ten',        right: 'Dos por diez' },
        { left: 'Half off',           right: 'Mitad de precio' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Una etiqueta dice "30% off". El precio original era $50. ¿Cuánto pagas?',
      question: 'How much do you pay?',
      options: [
        { text: '$35', correct: true },
        { text: '$30', correct: false },
        { text: '$15', correct: false },
      ],
      explanation: '30% off = descuento del 30%. Pagas el 70% de $50 = $35. No pagas el 30%, te ahorras el 30%.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Total',
      correct: ['Total', 'total'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — la cajera te dice el total',
      sentence: 'Your ____ is forty-five dollars.',
      options: ['discount', 'total', 'percent'],
      correct: 'total',
      context: "'Total' es la suma final que pagas.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — preguntas por descuentos',
      words: ['a', 'Is', 'discount?', 'there'],
      correct: ['Is', 'there', 'a', 'discount?'],
      translation: '¿Hay descuento?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Dos por diez dólares',
      correct: ['Two for ten dollars', 'two for ten dollars'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en Walmart. Una etiqueta dice "2 for $10". Quieres confirmar que entendiste bien.',
    lines: [
      { speaker: 'user',
        userChoices: [
          { target: "Excuse me, is this two for ten dollars?", native: 'Disculpa, ¿es dos por diez dólares?', correct: true,  feedback: '¡Bien! Confirmar antes de comprar evita sorpresas en la caja.' },
          { target: 'This is free?',                            native: '¿Esto es gratis?',                    correct: false, feedback: 'No — "2 for $10" significa que dos cuestan diez. No es gratis.' },
          { target: 'Two? One dollar?',                          native: '¿Dos? ¿Un dólar?',                   correct: false, feedback: 'Confundiste el precio — la etiqueta dice $10 por dos, no $1.' },
        ],
      },
      { speaker: 'npc', target: "Yes, but only if you buy two. Otherwise it's six dollars each.", native: 'Sí, pero solo si compras dos. De lo contrario son seis cada uno.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Excelente! Esa es la trampa: si solo compras uno, no aplica el descuento. Confirmar siempre vale la pena.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Descuento (en inglés)',  correct: ['Discount', 'discount'] },
      { prompt: 'Total (en inglés)',       correct: ['Total', 'total'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Busca tres anuncios o etiquetas en inglés (físicas o online). Lee la oferta en voz alta y calcula cuánto te ahorras.',
    rwenSignoff: 'Mañana cerramos el módulo con una conversación completa de mercado.',
  },

  phase8: {
    scenario: "You're at a US grocery store with multiple promotional offers — '2 for $5', '20% off', 'Buy one get one'. Ask the cashier to confirm a price, ask about discounts, and request the total.",
    rwenRole: "Aaron, 22, cashier at a Trader Joe's in Miami. Patient and friendly, used to bilingual customers.",
    successCriteria: "User correctly asks about a 'two for X' deal, asks 'Is there a discount?', and requests the total. Distinguishes percent off from percent paid.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
