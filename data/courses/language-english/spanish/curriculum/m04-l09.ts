import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-articles-mixed',
  module: 4,
  lesson: 9,
  title: 'Mixed practice — articles in flow',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "¡Hola! Hoy mezclamos todos los artículos del Módulo 4: a/an (primera mención), the (ya conocido), o ningún artículo (general). El truco es saber cuándo cambiar.",
    culturalNote: "El patrón clásico en inglés es 'a → the': introducir algo con 'a' la primera vez, después usar 'the' en las menciones siguientes. 'I went to a market. The market was busy.' Para hispanohablantes este flujo es algo nuevo — en español a veces decimos 'fui al mercado' desde el principio (ya específico). En inglés se introduce primero, después se especifica. Domina este flujo y tu inglés escrito gana años de naturalidad.",
  },

  chunks: [
    {
      id: 'a_the_combo',
      target: 'I read a book. The book was good.',
      native: 'Leí un libro. El libro estuvo bueno.',
      literal: undefined,
      emoji: '📖',
      phonetic: 'ai-RED-a-BUK-de-BUK-uos-GUD',
      audioRef: null,
    },
    {
      id: 'no_the_combo',
      target: 'Children love music. The children at this school sing.',
      native: 'Los niños aman la música. Los niños de esta escuela cantan.',
      literal: undefined,
      emoji: '🎵',
      phonetic: 'CHIL-dren-LAV-MIÚ-zik',
      audioRef: null,
    },
    {
      id: 'mixed_flow',
      target: 'I have a dog. The dog likes water.',
      native: 'Tengo un perro. Al perro le gusta el agua.',
      literal: undefined,
      emoji: '🐕',
      phonetic: 'ai-JAV-a-DOG-de-DOG-LÁIKS-UÓ-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'a → the / no article for general',
    explanation: "Patrón clásico: primera mención 'a/an'; segunda mención 'the'. 'I bought A phone. THE phone is great.'. Para conceptos generales, sin artículo: 'Music is universal. THE music at this party is loud.' (música en general → sin artículo; música específica → 'the'). Practicar este flujo es lo que distingue al hispanohablante recién llegado del residente integrado.",
    examples: [
      { target: 'I bought a phone yesterday. The phone is excellent.', native: 'Compré un teléfono ayer. El teléfono está excelente.' },
      { target: 'Music is universal. The music at this party is loud.', native: 'La música es universal. La música de esta fiesta está fuerte.' },
      { target: 'I have many friends. Some friends live in Lima.',     native: 'Tengo muchos amigos. Algunos viven en Lima.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I read a book. The book was good.',           right: 'Leí un libro. El libro estuvo bueno.' },
        { left: 'I have a dog. The dog likes water.',           right: 'Tengo un perro. Al perro le gusta el agua.' },
        { left: 'Children love music.',                          right: 'Los niños aman la música. (general)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (cuidado con artículos)',
      prompt: 'Compré un teléfono. El teléfono es genial.',
      correct: [
        'I bought a phone. The phone is great.',
        'I bought a phone. The phone is excellent.',
        'i bought a phone. the phone is great.',
        'I bought a phone. The phone is great',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el segundo artículo',
      sentence: 'I have a car. ____ car is red.',
      options: ['The', 'A', '—'],
      correct: 'The',
      context: 'Segunda mención del carro — usa "the".',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — concepto general',
      sentence: '____ is universal.',
      options: ['Music', 'The music', 'A music'],
      correct: 'Music',
      context: 'En general (toda la música del mundo) → sin artículo.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['I', 'have', 'a', 'dog', 'The', 'dog', 'is', 'big'],
      correct: ['I', 'have', 'a', 'dog', 'The', 'dog', 'is', 'big'],
      translation: 'Tengo un perro. El perro es grande.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (un párrafo entero)',
      prompt: 'Fui a un mercado. El mercado estaba lleno. Compré algunas manzanas y un pollo.',
      correct: [
        'I went to a market. The market was busy. I bought some apples and a chicken.',
        'I went to a market. The market was busy. I bought some apples and a chicken',
        'i went to a market. the market was busy. i bought some apples and a chicken.',
      ],
    },
  ],

  rwenDialogue: {
    intro: 'En una clase de ESL en LA. La maestra te pide contar lo que pasó hoy — usando artículos correctamente.',
    lines: [
      { speaker: 'npc', target: 'Tell me what happened today.', native: 'Cuéntame qué pasó hoy.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I went to a market. The market was busy. I bought some apples and a chicken.", native: 'Fui a un mercado. El mercado estaba lleno. Compré algunas manzanas y un pollo.', correct: true,  feedback: 'Perfecto — "a market" → "the market" (introducir → repetir), "some apples" (positivo, plural), "a chicken" (uno, primera mención).' },
          { target: "I went to market. Market was busy. I bought apples and chicken.",                native: 'Sin artículos.',                                                                       correct: false, feedback: 'En inglés necesitas los artículos — "a market", "the market", "a chicken".' },
          { target: "I went to the market. A market was busy. I bought the apples.",                  native: 'Confundido a/the.',                                                                     correct: false, feedback: 'Invertido — primera mención "a market", segunda mención "the market".' },
        ],
      },
      { speaker: 'npc', target: "Wonderful — your articles are getting great.", native: 'Excelente — tus artículos están mejorando mucho.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Manejaste el flujo a → the en una sola pasada. Eso es nivel intermedio-alto.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'I have a dog. The dog is big. (en inglés)',  correct: ['I have a dog. The dog is big.', 'i have a dog. the dog is big.'] },
      { prompt: 'Music is universal (en inglés)',               correct: ['Music is universal', 'Music is universal.', 'music is universal'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Cuenta una pequeña historia en inglés (3-4 frases) usando 'a' para introducir y 'the' para repetir. 'I bought a coffee. The coffee was hot.'",
    rwenSignoff: 'A → The. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're in your ESL class in Los Angeles. The teacher asks each student to narrate something that happened to them today. Use a → the flow naturally.",
    rwenRole: "Ms Johnson, 45, your ESL teacher. Encouraging, interrupts only to correct article use. Asks follow-up questions.",
    successCriteria: "User introduces with 'a' / 'an' on first mention, switches to 'the' for second mention of same thing. Drops articles for general statements ('music', 'family'). Tells a coherent mini-story.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
