import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03-big-numbers',
  module: 6,
  lesson: 3,
  title: 'Hundreds, Thousands, Millions',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: cientos, miles, millones. Los necesitas para hablar de salarios, precios de casas, población — temas comunes en EE.UU.",
    culturalNote: "Trampa para hispanohablantes: en inglés se usa la coma (1,000) donde nosotros usamos el punto (1.000). Y al revés con los decimales: 'three point five' (3.5) donde nosotros decimos 'tres coma cinco' (3,5). En tu recibo de Walmart verás 1,234.56 — confúndete una sola vez y pagas mil veces más.",
  },

  chunks: [
    {
      id: 'one_thousand',
      target: 'One thousand',
      native: 'Mil',
      literal: 'One thousand',
      emoji: '🔢',
      phonetic: 'wun-THOW-zand',
      audioRef: null,
    },
    {
      id: 'ten_thousand',
      target: 'Ten thousand',
      native: 'Diez mil',
      literal: 'Ten thousand',
      emoji: '💵',
      phonetic: 'ten-THOW-zand',
      audioRef: null,
    },
    {
      id: 'one_million',
      target: 'One million',
      native: 'Un millón',
      literal: 'One million',
      emoji: '💰',
      phonetic: 'wun-MIL-yon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Big number structure',
    explanation: "El inglés combina números grandes con 'and' opcional: 'two hundred and fifty' o 'two hundred fifty' (250). En EE.UU. casi siempre se omite el 'and'. La estructura es: [millones] million [miles] thousand [centena] hundred [decena-unidad].",
    examples: [
      { target: 'Two hundred fifty',          native: 'Doscientos cincuenta' },
      { target: 'Five thousand dollars',      native: 'Cinco mil dólares' },
      { target: 'Three million people',       native: 'Tres millones de personas' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja los números grandes',
      pairs: [
        { left: 'One thousand',  right: 'Mil' },
        { left: 'Ten thousand',  right: 'Diez mil' },
        { left: 'One million',   right: 'Un millón' },
        { left: 'Five hundred',  right: 'Quinientos' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Dos mil',
      correct: ['Two thousand', 'two thousand'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — alquiler mensual en LA',
      sentence: 'My rent is two ____ dollars a month.',
      options: ['hundred', 'thousand', 'million'],
      correct: 'thousand',
      context: 'En LA, $2,000 al mes es realista para un apartamento; $2 millones sería absurdo.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Lee el precio en voz alta',
      question: "El precio de un carro usado dice $15,500. ¿Cómo lo dirías?",
      options: [
        { text: 'Fifteen thousand five hundred dollars.', correct: true },
        { text: 'Fifteen hundred thousand dollars.',       correct: false },
        { text: 'Fifteen million five hundred dollars.',   correct: false },
      ],
      explanation: 'En inglés se lee de izquierda a derecha: 15 (mil) + 500. La coma separa miles, no decimales.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Diez mil',
      correct: ['Ten thousand', 'ten thousand'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — describes la población de tu ciudad',
      words: ['has', 'million', 'two', 'people', 'It'],
      correct: ['It', 'has', 'two', 'million', 'people'],
      translation: 'Tiene dos millones de personas',
    },
  ],

  rwenDialogue: {
    intro: 'Estás en un concesionario de carros en Houston. El vendedor te da el precio de un Toyota usado.',
    lines: [
      { speaker: 'npc', target: "This one is twelve thousand five hundred dollars.", native: 'Este cuesta doce mil quinientos dólares.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Twelve thousand five hundred? OK.', native: '¿Doce mil quinientos? OK.', correct: true,  feedback: '¡Correcto! Repetir el número confirma que entendiste — buena estrategia.' },
          { target: 'One million dollars? Too much!',     native: '¿Un millón? ¡Mucho!',        correct: false, feedback: 'Twelve thousand (12,000) no es un millón. La coma en inglés separa miles.' },
          { target: 'Twelve dollars.',                     native: 'Doce dólares.',              correct: false, feedback: 'No, dijo "twelve thousand" (12 mil), no "twelve" (12).' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Bien. Cuando hables de precios grandes, repítelos para confirmar — vale la pena, sobre todo en compras importantes.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'One thousand (en inglés)', correct: ['One thousand', 'one thousand', 'A thousand', 'a thousand'] },
      { prompt: 'One million (en inglés)',  correct: ['One million', 'one million', 'A million', 'a million'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Lee tres precios en inglés hoy — el de tu última compra, tu alquiler, y la población de tu ciudad. Acostúmbrate a leer comas como "thousand".',
    rwenSignoff: 'Los números grandes son la diferencia entre entender un salario o un precio de casa. Mañana: la hora.',
  },

  phase8: {
    scenario: "You're talking with a real estate agent in Miami about apartment prices. They show you listings ranging from $1,200/month rent to $450,000 for purchase. You need to ask about prices and respond clearly.",
    rwenRole: "Marcus, 38, real estate agent. Speaks fast English with Miami flair. Will say prices and expect you to confirm.",
    successCriteria: "User correctly says or repeats at least three big numbers (hundreds, thousands), asks 'how much?' or 'what's the price?', and shows they understood the figures.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
