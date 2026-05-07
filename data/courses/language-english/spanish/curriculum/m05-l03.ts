import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-children',
  module: 5,
  lesson: 3,
  title: 'Sons & Daughters — Hijos',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! 'Son' = hijo (varón). 'Daughter' = hija (mujer). 'Children' = hijos (general, mixto). Recuerda: 'children' es el plural irregular del Módulo 4.",
    culturalNote: "En español 'hijos' funciona para mixto y para todos varones — el contexto aclara. En inglés 'children' es siempre genérico y siempre el plural correcto: 'I have two children' nunca asume género. Si quieres ser específico: 'I have a son and a daughter'. Y ojo a la trampa: NO digas 'two childs' (incorrecto) ni 'two childrens' (también incorrecto). 'Children' ya es plural.",
  },

  chunks: [
    {
      id: 'son',
      target: 'Son',
      native: 'Hijo (varón)',
      literal: undefined,
      emoji: '👦',
      phonetic: 'SAN',
      audioRef: null,
    },
    {
      id: 'daughter',
      target: 'Daughter',
      native: 'Hija (mujer)',
      literal: undefined,
      emoji: '👧',
      phonetic: 'DÓ-ter',
      audioRef: null,
    },
    {
      id: 'children',
      target: 'Children',
      native: 'Hijos (general)',
      literal: undefined,
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'CHIL-dren',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'I have + (number) + (children/sons/daughters)',
    explanation: "Patrón clave: 'I have + (número) + (children/sons/daughters)'. 'I have one son.' / 'I have two daughters.' / 'I have three children.'. Plural irregular: 'child' → 'children' (no 'childs'). El error clásico de hispanohablante: 'I have two childs' o 'two childrens' — ambos incorrectos.",
    examples: [
      { target: 'I have one son.',                native: 'Tengo un hijo.' },
      { target: 'I have two daughters.',          native: 'Tengo dos hijas.' },
      { target: 'I have three children.',         native: 'Tengo tres hijos.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Son',      right: 'Hijo' },
        { left: 'Daughter', right: 'Hija' },
        { left: 'Children', right: 'Hijos (general)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tengo dos hijas',
      correct: ['I have two daughters', 'I have two daughters.', '2 daughters'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tengo tres hijos',
      correct: ['I have three children', 'I have three children.', 'I have 3 children'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa el plural correcto',
      sentence: 'I have two ____.',
      options: ['children', 'childs', 'childrens'],
      correct: 'children',
      context: '"Children" ya es el plural — no se le agrega -s.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['I', 'have', 'a', 'son', 'and', 'a', 'daughter'],
      correct: ['I', 'have', 'a', 'son', 'and', 'a', 'daughter'],
      translation: 'Tengo un hijo y una hija',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo dices "Tengo dos hijos" (un niño y una niña)?',
      options: [
        { text: 'I have two children — a son and a daughter.', correct: true },
        { text: 'I have two childs.',                            correct: false },
        { text: 'I have two childrens.',                         correct: false },
      ],
      explanation: 'Trampa de hispanohablante — "childs" y "childrens" no existen. Es "children".',
    },
  ],

  rwenDialogue: {
    intro: 'Estás llenando un formulario de inscripción a la escuela en Miami para tus hijos. La asistente te pregunta detalles.',
    lines: [
      { speaker: 'npc', target: "How many children do you have, and what are their ages?", native: '¿Cuántos hijos tienes, y cuántos años tienen?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two children — a son who is seven and a daughter who is four.", native: 'Tengo dos hijos — un niño de 7 y una niña de 4.', correct: true,  feedback: 'Perfecto — "children" + "a son... and a daughter..." con edades. Forma completa.' },
          { target: "I have two childs. Son seven. Daughter four.",                          native: 'Tengo dos niño. Niño 7. Niña 4.',                  correct: false, feedback: '"Childs" no existe — es "children". Y agrega "who is" para enlazar las edades.' },
          { target: "Two childrens, age seven and four.",                                     native: 'Dos niños, edad 7 y 4.',                            correct: false, feedback: '"Childrens" no existe — "children" ya es plural.' },
        ],
      },
      { speaker: 'npc', target: "Perfect. What grades are they in?", native: 'Perfecto. ¿En qué grado están?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Esquivaste "childs" y "childrens" — y diste detalles claros con sus edades.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'I have two children (en inglés)', correct: ['I have two children', 'I have two children.', '2 children'] },
      { prompt: 'A son and a daughter (en inglés)', correct: ['A son and a daughter', 'a son and a daughter', 'A son and a daughter.'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica decir cuántos hijos tienes (o quisieras tener) en inglés. Usa 'children', NO 'childs' ni 'childrens'.",
    rwenSignoff: 'Hijos para siempre. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're enrolling your kids in a school in Miami. The administrator asks about your children — how many, ages, what grades.",
    rwenRole: "Mrs Davies, 50, the school registrar. Friendly-professional, asks the standard questions. Speaks clear American English.",
    successCriteria: "User uses 'children' (not 'childs'/'childrens'), distinguishes 'son'/'daughter' when needed, includes ages with 'who is X' or similar. Avoids the classic plural errors.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
