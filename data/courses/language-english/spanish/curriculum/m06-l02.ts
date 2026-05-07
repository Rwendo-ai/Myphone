import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numbers-20-100',
  module: 6,
  lesson: 2,
  title: 'Numbers 11-100 — Once a Cien',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: 11 hasta 100. En español es bastante regular: veinte, treinta, cuarenta. En inglés hay un patrón parecido pero con dos trampas — 'eleven' y 'twelve' son irregulares, y la diferencia entre 'thirteen' (13) y 'thirty' (30) es solo el acento.",
    culturalNote: "El error más común para hispanohablantes: confundir 'fifteen' (15) con 'fifty' (50). En inglés el acento decide: FIF-teen (suena al final) vs FIF-tee (suena al principio). Si dices el precio mal en una caja de Walmart, te pueden cobrar de más. Practica el acento, no solo la palabra.",
  },

  chunks: [
    {
      id: 'eleven_nineteen',
      target: 'Eleven, twelve, thirteen, fourteen, fifteen',
      native: 'Once, doce, trece, catorce, quince',
      literal: '11, 12, 13, 14, 15',
      emoji: '1️⃣2️⃣',
      phonetic: 'ee-LEH-vn, twelv, THUR-teen, FOR-teen, FIF-teen',
      audioRef: null,
    },
    {
      id: 'tens',
      target: 'Twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety',
      native: 'Veinte, treinta, cuarenta, cincuenta, sesenta, setenta, ochenta, noventa',
      literal: '20, 30, 40, 50, 60, 70, 80, 90',
      emoji: '🔢',
      phonetic: 'TWEN-tee, THUR-tee, FOR-tee, FIF-tee...',
      audioRef: null,
    },
    {
      id: 'one_hundred',
      target: 'One hundred',
      native: 'Cien',
      literal: 'One hundred',
      emoji: '💯',
      phonetic: 'wun-HUN-dred',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tens + ones',
    explanation: "En inglés, los números compuestos se forman con guión: 'twenty-one' (21), 'thirty-five' (35). En español decimos 'veintiuno' o 'treinta y cinco'. La estructura inglesa es siempre [decena]-[unidad], muy regular después del 20.",
    examples: [
      { target: 'Twenty-one',    native: 'Veintiuno' },
      { target: 'Thirty-five',   native: 'Treinta y cinco' },
      { target: 'Ninety-nine',   native: 'Noventa y nueve' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja los números',
      pairs: [
        { left: 'Twelve',     right: 'Doce' },
        { left: 'Thirty',     right: 'Treinta' },
        { left: 'Fifty',      right: 'Cincuenta' },
        { left: 'One hundred', right: 'Cien' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Cuarenta',
      correct: ['Forty', 'forty'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Elige la palabra correcta — el cajero te dice el precio',
      question: "El cajero dice tu total: el monto en el recibo es $15. ¿Qué dijo?",
      options: [
        { text: 'Fifteen dollars.', correct: true },
        { text: 'Fifty dollars.',   correct: false },
        { text: 'Five dollars.',    correct: false },
      ],
      explanation: "'Fifteen' (15) tiene el acento al final: fif-TEEN. 'Fifty' (50) tiene el acento al principio: FIF-tee. Es la trampa clásica.",
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el número',
      sentence: 'Twenty, thirty, ____, fifty.',
      options: ['fourteen', 'forty', 'four'],
      correct: 'forty',
      context: 'La secuencia es de decenas: 20, 30, 40, 50.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena las palabras',
      words: ['five', 'thirty', 'years', 'old'],
      correct: ['thirty', 'five', 'years', 'old'],
      translation: 'Treinta y cinco años de edad',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Cien',
      correct: ['One hundred', 'a hundred', 'one hundred', 'A hundred'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una tienda de ropa en Miami. Buscas una talla y la dependienta te pregunta cuántos años tiene tu hijo.',
    lines: [
      { speaker: 'npc', target: 'How old is he?', native: '¿Cuántos años tiene él?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Thirteen.',  native: 'Trece.',     correct: true,  feedback: 'Perfecto — pronuncia THUR-TEEN con acento al final para que no piense que dijiste "thirty" (30).' },
          { target: 'Thirty.',    native: 'Treinta.',   correct: false, feedback: 'Eso es 30 años — un adulto. Cuidado con teen vs ty: el acento cambia todo.' },
          { target: 'Three.',     native: 'Tres.',      correct: false, feedback: 'Tres años es un bebé. Querías decir thirteen (13).' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! "Thirteen" vs "thirty" es el clásico tropiezo. El acento al final = teen. Acento al principio = ty.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Forty (en inglés)', correct: ['Forty', 'forty'] },
      { prompt: 'Eighty (en inglés)', correct: ['Eighty', 'eighty'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Di tu edad, la edad de un familiar y el año en que naciste — todo en inglés. Practica el acento de "teen" vs "ty".',
    rwenSignoff: 'Mañana entramos a los miles y millones — para hablar de precios reales en EE.UU.',
  },

  phase8: {
    scenario: "You're calling a customer service line at a US bank to update your account. The agent asks for your age and your home address number. You need to give numbers from 11 to 100 clearly.",
    rwenRole: "Diana, 32, customer service rep at Bank of America. Friendly but efficient. She'll repeat numbers back to confirm.",
    successCriteria: "User says at least three numbers between 11-100 clearly, distinguishes 'teen' vs 'ty' words correctly, and confirms when the agent repeats them back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
