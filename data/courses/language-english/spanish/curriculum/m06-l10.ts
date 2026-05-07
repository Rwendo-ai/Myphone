import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-conversation',
  module: 6,
  lesson: 10,
  title: 'Money & time conversation — Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Cierre del Módulo 6: combinamos números, hora, días y dinero en una sola conversación. Esto es lo que harás de verdad en EE.UU.: agendar, comprar, confirmar.",
    culturalNote: "En conversaciones reales en EE.UU., los números, el horario y el dinero se mezclan: 'It's $20, the shop closes at 6 PM, see you Friday at 7:30'. La velocidad es alta — los anglos no esperan a que traduzcas. Confirmar repitiendo es totalmente aceptado y valorado: 'So that's $20, closing at 6 PM, Friday at 7:30 — got it'.",
  },

  chunks: [
    {
      id: 'price_time',
      target: "It costs twenty dollars and the shop closes at six P.M.",
      native: 'Cuesta veinte dólares y la tienda cierra a las seis P.M.',
      literal: 'price + closing time',
      emoji: '🛒',
      phonetic: 'it-kosts-TWEN-tee-DOL-arz...',
      audioRef: null,
    },
    {
      id: 'when_meet',
      target: "Let's meet on Friday at half past seven.",
      native: 'Reunámonos el viernes a las siete y media.',
      literal: 'day + time meeting',
      emoji: '🤝',
      phonetic: "lets-MEET-on-FRY-day...",
      audioRef: null,
    },
    {
      id: 'total_with_discount',
      target: "The total is fifty dollars with a ten percent discount.",
      native: 'El total son cincuenta dólares con un diez por ciento de descuento.',
      literal: 'total + percentage discount',
      emoji: '🧾',
      phonetic: 'thuh-TOH-tul-iz-FIF-tee-DOL-arz...',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Combining numbers, time, and money in one sentence',
    explanation: "En conversaciones reales se encadenan datos numéricos. La estructura común es: [precio/cantidad] + [día/hora] + [extra]. Las conjunciones útiles son 'and' (y), 'with' (con), 'at' (a la hora). Practica encadenar — es lo que distingue al hablante básico del funcional.",
    examples: [
      { target: "It's twenty dollars and we close at nine P.M.", native: 'Son veinte dólares y cerramos a las nueve P.M.' },
      { target: "Meet me at three thirty on Wednesday.",          native: 'Veámonos a las tres y media el miércoles.' },
      { target: "Fifty dollars total, with ten percent off.",     native: 'Cincuenta en total, con diez por ciento de descuento.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja las frases combinadas',
      pairs: [
        { left: 'Twenty dollars',     right: 'Veinte dólares' },
        { left: 'Six P.M.',           right: 'Seis de la tarde' },
        { left: 'Half past seven',    right: 'Siete y media' },
        { left: 'Ten percent off',    right: 'Diez por ciento de descuento' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — combina hora y día',
      prompt: 'Reunámonos el viernes a las siete y media',
      correct: ["Let's meet on Friday at half past seven", "Lets meet on Friday at half past seven", "Let's meet on Friday at 7:30"],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la oración combinada',
      sentence: 'It costs twenty dollars ____ the shop closes at six P.M.',
      options: ['and', 'or', 'but'],
      correct: 'and',
      context: "Para encadenar dos datos relacionados, 'and' (y) es la conjunción natural.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — el total con descuento',
      words: ['ten', 'discount.', 'total', 'fifty', 'with', 'a', 'is', 'percent', 'The', 'dollars'],
      correct: ['The', 'total', 'is', 'fifty', 'dollars', 'with', 'a', 'ten', 'percent', 'discount.'],
      translation: 'El total son cincuenta dólares con un diez por ciento de descuento.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Combina lo que aprendiste — elige lo correcto',
      question: 'En el mercado: "Three for ten dollars, today only" — ¿qué significa?',
      options: [
        { text: 'Tres por diez dólares, solo hoy.',     correct: true },
        { text: 'Tres en lugar de diez dólares.',        correct: false },
        { text: 'Tres dólares cada diez minutos.',       correct: false },
      ],
      explanation: '"Three for ten dollars" = tres unidades por diez dólares. "Today only" indica que la oferta es válida hoy.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — confirma una cita',
      prompt: 'Veámonos el sábado a las tres P.M.',
      correct: ["Let's meet on Saturday at three P.M.", "Lets meet on Saturday at three P.M.", "Let's meet on Saturday at 3 P.M."],
    },
  ],

  rwenDialogue: {
    intro: 'Estás organizando la entrega de un mueble que compraste en Facebook Marketplace en Los Ángeles. El vendedor habla solo inglés.',
    lines: [
      { speaker: 'npc', target: "OK, so the chair is sixty dollars. When can you pick it up?", native: 'Bien, la silla son sesenta dólares. ¿Cuándo puedes recogerla?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Friday at half past six?",       native: '¿Viernes a las seis y media?',     correct: true,  feedback: '¡Excelente! Día + hora, claro y compacto.' },
          { target: 'Friday in 6:30.',                 native: 'Viernes en 6:30.',                  correct: false, feedback: '"In" no se usa con horas. Es "at half past six" o "at 6:30".' },
          { target: 'I want chair.',                   native: 'Quiero silla.',                     correct: false, feedback: 'Te preguntó cuándo, no si querías la silla. Responde el día y la hora.' },
        ],
      },
      { speaker: 'npc', target: "Great. Sixty dollars cash, Friday at six thirty PM. Can you Venmo me?", native: 'Genial. Sesenta en efectivo, viernes seis y media P.M. ¿Me puedes pagar por Venmo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, sixty dollars on Venmo, Friday six thirty.",   native: 'Sí, sesenta en Venmo, viernes seis y media.', correct: true,  feedback: 'Perfecto — repetiste todos los datos. Eso es comunicación adulta en EE.UU.' },
          { target: 'Yes.',                                                native: 'Sí.',                                          correct: false, feedback: 'Sí, pero confirmar los detalles ($, hora, app) evita problemas. Repítelos.' },
          { target: 'How much?',                                            native: '¿Cuánto?',                                    correct: false, feedback: 'Ya te dijo el precio dos veces. Confirma, no preguntes de nuevo.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Combinaste precio, día, hora y método de pago en una respuesta. Eso es nivel A2 funcional — felicidades por el módulo.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba — encadena datos.',
    prompts: [
      { prompt: 'Cuesta veinte dólares y la tienda cierra a las seis P.M.', correct: ["It costs twenty dollars and the shop closes at six P.M.", "It costs $20 and the shop closes at 6 P.M.", "It costs twenty dollars and the shop closes at 6 PM"] },
      { prompt: 'Reunámonos el viernes a las siete y media', correct: ["Let's meet on Friday at half past seven", "Lets meet on Friday at half past seven", "Let's meet on Friday at 7:30"] },
    ],
  },

  mission: {
    title: 'Misión del Módulo 6',
    task: 'Hoy escribe (texto, WhatsApp, nota) tres oraciones en inglés que combinen precio + día + hora. Por ejemplo: "It\'s twenty dollars, see you on Wednesday at 3 PM." Compártelo con un amigo.',
    rwenSignoff: '¡Felicidades! Cerraste el Módulo 6. Mañana entramos al Módulo 7: comida — pedir, ordenar, hablar de sabores.',
  },

  phase8: {
    scenario: "You're closing a Facebook Marketplace deal for a used bicycle in LA with an English-speaking seller. You need to confirm price, payment method, day and time of pickup, and any small discount you can negotiate.",
    rwenRole: "Jake, 30, casual seller. Direct, somewhat impatient. Will throw price and time at you fast.",
    successCriteria: "User combines price, day, time and method in at least one full sentence; confirms details by repeating them; asks about a discount or alternative time.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
