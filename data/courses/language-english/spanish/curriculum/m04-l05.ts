import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-plurals-irregular',
  module: 4,
  lesson: 5,
  title: 'Irregular plurals — children, men',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "¡Hola! Hoy los plurales irregulares — los que NO siguen la regla del -s. 'Child' → 'children'. 'Man' → 'men'. 'Woman' → 'women'. Hay como 20 palabras así, pero estas son las críticas.",
    culturalNote: "El error más común de hispanohablante: 'two childs' o 'two persons'. NO existen — son 'two children' y 'two people'. En español los plurales irregulares también existen ('lápiz' → 'lápices'), pero los del inglés cambian la palabra entera. Memoriza estas: child→children, man→men, woman→women, person→people, foot→feet, tooth→teeth. Son las que más se usan.",
  },

  chunks: [
    {
      id: 'children',
      target: 'Child → Children',
      native: 'Niño → Niños',
      literal: undefined,
      emoji: '👶',
      phonetic: 'CHÁILD-CHIL-dren',
      audioRef: null,
    },
    {
      id: 'men',
      target: 'Man → Men',
      native: 'Hombre → Hombres',
      literal: undefined,
      emoji: '👨',
      phonetic: 'MAN-MEN',
      audioRef: null,
    },
    {
      id: 'people',
      target: 'Person → People',
      native: 'Persona → Personas',
      literal: undefined,
      emoji: '👥',
      phonetic: 'PER-son-PI-pol',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Irregular plurals',
    explanation: "Los irregulares más comunes: child→children, man→men, woman→women, person→people, foot→feet, tooth→teeth. NUNCA digas 'childs', 'mans', 'womans', 'persons'. La trampa de hispanohablante: traducir 'dos personas' como 'two persons' — error clásico. Es 'two people'. Memorízalas como pareja.",
    examples: [
      { target: 'Man → Men',     native: 'Hombre → Hombres' },
      { target: 'Woman → Women', native: 'Mujer → Mujeres' },
      { target: 'Foot → Feet',   native: 'Pie → Pies' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Children', right: 'Niños' },
        { left: 'Men',      right: 'Hombres' },
        { left: 'People',   right: 'Personas' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (plural irregular)',
      prompt: 'Dos niños',
      correct: ['Two children', 'two children', '2 children'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (plural irregular)',
      prompt: 'Tres hombres',
      correct: ['Three men', 'three men', '3 men'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el plural irregular',
      sentence: 'I have two ____.',
      options: ['children', 'childs', 'childrens'],
      correct: 'children',
      context: '"Children" ya es plural — no se le agrega -s.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['Three', 'women', 'work', 'here'],
      correct: ['Three', 'women', 'work', 'here'],
      translation: 'Tres mujeres trabajan aquí',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo dices "dos personas" en inglés?',
      options: [
        { text: 'Two people',   correct: true },
        { text: 'Two persons',  correct: false },
        { text: 'Two persones', correct: false },
      ],
      explanation: 'Para hispanohablantes: el plural de "person" es "people", NO "persons".',
    },
  ],

  rwenDialogue: {
    intro: 'En una entrevista en Madrid para un puesto de soporte a clientes anglo. Te preguntan por tu familia.',
    lines: [
      { speaker: 'npc', target: "Tell me about your family.", native: 'Cuéntame de tu familia.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two children. I also have three women in my family — my mother, my sister, and my aunt.", native: 'Tengo dos hijos. También tengo tres mujeres en la familia — mi madre, mi hermana y mi tía.', correct: true,  feedback: 'Perfecto — "children" y "women" — plurales irregulares manejados.' },
          { target: "I have two childs. I also have three womans.",                                                     native: 'Tengo dos niño. Tres mujeres.',                                                          correct: false, feedback: '"Childs" no existe — es "children". "Womans" tampoco — es "women".' },
          { target: "I have two child. I also have three woman.",                                                       native: 'Tengo dos niño. Tres mujer.',                                                              correct: false, feedback: 'Sin plural — necesitas "children" y "women".' },
        ],
      },
      { speaker: 'npc', target: "How wonderful — you must be busy!", native: '¡Qué lindo — debes estar ocupada!' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Esquivaste las trampas clásicas: "childs" y "womans" no existen — son "children" y "women".',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'Children (plural de child)', correct: ['Children', 'children', 'Children.'] },
      { prompt: 'People (plural de person)',  correct: ['People', 'people', 'People.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Memoriza estos seis plurales irregulares: child/children, man/men, woman/women, person/people, foot/feet, tooth/teeth. Son los que más vas a usar.",
    rwenSignoff: 'Sin trampas. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're in a job interview in Madrid for a customer support role with English-speaking clients. The interviewer asks personal questions about family and your everyday life.",
    rwenRole: "Mr Davies, 50, the British interviewer. Polite, professional, notices grammatical slips. Speaks clear British English.",
    successCriteria: "User uses irregular plurals correctly: 'children' (not 'childs'), 'people' (not 'persons'), 'women' (not 'womans'). At least two irregular plurals used in the conversation.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
