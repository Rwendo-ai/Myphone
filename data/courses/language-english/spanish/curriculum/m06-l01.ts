import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-10',
  module: 6,
  lesson: 1,
  title: 'Numbers 1-10 — Uno a Diez',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! El Módulo 6 empieza con los números — algo que se usa cada día. Empezamos con 1-10 en inglés: One, Two, Three... hasta Ten.",
    culturalNote: "En español los números cambian de género: 'una manzana', 'un dólar', 'una hora'. En inglés esto desaparece — 'three apples', 'three dollars', 'three hours' es siempre 'three'. No hay 'tres / tres / tres' que concordar. Lo que sí cuesta al hispanohablante: 'three' suena como 'tri' aspirado — la 'th' inglesa no existe en español latinoamericano. Saca la lengua un poquito entre los dientes.",
  },

  chunks: [
    {
      id: 'one_five',
      target: 'One, two, three, four, five',
      native: 'Uno, dos, tres, cuatro, cinco',
      literal: '1, 2, 3, 4, 5',
      emoji: '🖐️',
      phonetic: 'wun, too, three, for, fyv',
      audioRef: null,
    },
    {
      id: 'six_ten',
      target: 'Six, seven, eight, nine, ten',
      native: 'Seis, siete, ocho, nueve, diez',
      literal: '6, 7, 8, 9, 10',
      emoji: '🔟',
      phonetic: 'siks, SEH-vn, ayt, nyn, ten',
      audioRef: null,
    },
    {
      id: 'how_many',
      target: 'How many?',
      native: '¿Cuántos? / ¿Cuántas?',
      literal: 'How many?',
      emoji: '❓',
      phonetic: 'how-MEH-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Cardinal counting',
    explanation: "En inglés los números no cambian con el sustantivo. 'Three apples', 'three children', 'three dollars' — siempre 'three'. No hay masculino/femenino que concordar como en 'tres manzanas / tres dólares / tres horas' (donde el número no cambia, pero sí los artículos). Una sola forma para cada número.",
    examples: [
      { target: 'Three children',  native: 'Tres niños' },
      { target: 'Three apples',    native: 'Tres manzanas' },
      { target: 'Three dollars',   native: 'Tres dólares' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja los números en inglés con su traducción al español',
      pairs: [
        { left: 'One',   right: 'Uno' },
        { left: 'Five',  right: 'Cinco' },
        { left: 'Ten',   right: 'Diez' },
        { left: 'Seven', right: 'Siete' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tres',
      correct: ['Three', 'three'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con el número que sigue',
      sentence: 'One, two, three, ____, five.',
      options: ['four', 'five', 'six'],
      correct: 'four',
      context: 'La secuencia es 1-2-3-4-5.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena las palabras — estás preguntando cuántos hay',
      words: ['many', 'are', 'How', 'they?'],
      correct: ['How', 'many', 'are', 'they?'],
      translation: '¿Cuántos hay?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — estás contando manzanas',
      prompt: 'Ocho manzanas',
      correct: ['Eight apples', 'eight apples'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Dos',
      correct: ['Two', 'two'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un mercado mexicano en Los Ángeles. La vendedora habla inglés con clientes turistas y te pregunta cuántos mangos quieres.',
    lines: [
      { speaker: 'npc', target: "How many mangoes do you want?", native: '¿Cuántos mangos quieres?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Five, please.',          native: 'Cinco, por favor.',  correct: true,  feedback: 'Perfecto — corto y claro. "Five" + "please" funciona muy bien.' },
          { target: 'Many.',                  native: 'Muchos.',             correct: false, feedback: 'No es claro — la vendedora no sabe cuántos. En el mercado, di un número exacto.' },
          { target: 'I want mango.',          native: 'Quiero mango.',       correct: false, feedback: 'Respondiste otra pregunta — te preguntaron cuántos, no si querías.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Buen trabajo! Los números 1-10 son la base. Toda compra empieza con estas palabras.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Seven (en inglés)', correct: ['Seven', 'seven'] },
      { prompt: 'How many? (en inglés)', correct: ['How many?', 'How many', 'how many?', 'how many'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Cuenta cinco objetos a tu alrededor ahora mismo en inglés: "one chair, two cups, three pens..." Hazlo tres veces hoy.',
    rwenSignoff: 'Los números son la base de todo — dinero, tiempo, gente. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a Latin produce market in East LA. The stall owner is bilingual but is practicing English with you today. Buy a few items by counting them aloud — mangoes, tomatoes, oranges. Use numbers 1-10.",
    rwenRole: "Doña Marta, 50, a friendly stall owner who's lived in LA for 20 years. She'll ask 'how many?' for each item and count back to you in English.",
    successCriteria: "User uses at least three different numbers between 1 and 10 to specify quantities, says 'How many?' or responds to it correctly, and completes the purchase politely (with 'please' or 'thank you').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
