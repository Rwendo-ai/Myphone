import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-some-any',
  module: 4,
  lesson: 7,
  title: 'Some & Any — countables',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "¡Hola! 'Some' y 'any' significan más o menos 'algo de'/'algunos'. La regla: 'some' va en frases positivas y ofertas. 'Any' va en preguntas y negativas.",
    culturalNote: "Esto no tiene equivalente directo en español — nosotros usamos 'algo' o simplemente nada. 'Tengo pan' = 'I have bread' o 'I have SOME bread'. 'Some' añade matiz: 'algo de pan, no todo'. La regla práctica para hispanohablantes: cuando ofreces o afirmas, usa 'some'. Cuando preguntas o niegas, usa 'any'.",
  },

  chunks: [
    {
      id: 'some_water',
      target: 'Some water',
      native: 'Algo de agua',
      literal: 'Algunos agua',
      emoji: '💧',
      phonetic: 'sam-UÓ-ter',
      audioRef: null,
    },
    {
      id: 'any_questions',
      target: 'Any questions?',
      native: '¿Alguna pregunta?',
      literal: 'Cualquier preguntas?',
      emoji: '❓',
      phonetic: 'E-ni-KUES-chuns',
      audioRef: null,
    },
    {
      id: 'some_friends',
      target: 'Some friends',
      native: 'Algunos amigos',
      literal: 'Algunos amigos',
      emoji: '👥',
      phonetic: 'sam-FRENDS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Some (positive) / Any (question, negative)',
    explanation: "Regla simple: AFIRMACIÓN o OFERTA → 'some'. PREGUNTA o NEGACIÓN → 'any'. 'I have SOME bread' (afirma). 'Do you have ANY sugar?' (pregunta). 'I don't have ANY money' (niega). Excepción: 'Would you like SOME coffee?' (oferta — usa 'some' aunque sea pregunta).",
    examples: [
      { target: 'I have some bread.',         native: 'Tengo pan.' },
      { target: 'Do you have any sugar?',     native: '¿Tienes azúcar?' },
      { target: "I don't have any money.",    native: 'No tengo dinero.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Some water',    right: 'Algo de agua' },
        { left: 'Any questions?', right: '¿Alguna pregunta?' },
        { left: 'Some friends',   right: 'Algunos amigos' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (afirmación)',
      prompt: 'Tengo algo de pan',
      correct: ['I have some bread', 'I have some bread.', 'i have some bread'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (pregunta)',
      prompt: '¿Tienes azúcar?',
      correct: ['Do you have any sugar?', 'do you have any sugar?', 'Do you have any sugar'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con some / any',
      sentence: "I don't have ____ money.",
      options: ['some', 'any', 'much'],
      correct: 'any',
      context: 'En frases negativas se usa "any".',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con some / any',
      sentence: "Would you like ____ coffee?",
      options: ['some', 'any', 'a'],
      correct: 'some',
      context: 'En ofertas se usa "some" aunque sea pregunta — invita a aceptar.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Selecciona la opción correcta',
      question: '¿Cómo dices "No tengo amigos aquí" en inglés?',
      options: [
        { text: "I don't have any friends here.", correct: true },
        { text: "I don't have some friends here.", correct: false },
        { text: "I have any friends here.",         correct: false },
      ],
      explanation: 'En negativa va "any": "I don\'t have ANY friends".',
    },
  ],

  rwenDialogue: {
    intro: 'Llegaste a casa de un compañero gringo en Houston. Te ofrece comida y bebida.',
    lines: [
      { speaker: 'npc', target: 'Welcome! Would you like some water?', native: '¡Bienvenido! ¿Quieres agua?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, please. And do you have any tea?", native: 'Sí, por favor. ¿Tienes té?',           correct: true,  feedback: 'Perfecto — "some water" (oferta), "any tea" (pregunta).' },
          { target: "Yes, please. And do you have some tea?", native: 'Sí, por favor. ¿Tienes té?',          correct: false, feedback: 'En preguntas usa "any": "Do you have ANY tea?".' },
          { target: "No, I don't want some water.",            native: 'No, no quiero agua.',                  correct: false, feedback: 'En negativa va "any": "I don\'t want ANY water".' },
        ],
      },
      { speaker: 'npc', target: "Sure, let me check.", native: 'Claro, déjame ver.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Distinguiste "some" (oferta) y "any" (pregunta) — eso es nivel intermedio.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'I have some bread (en inglés)',  correct: ['I have some bread', 'I have some bread.', 'i have some bread'] },
      { prompt: "Do you have any sugar? (en inglés)", correct: ['Do you have any sugar?', 'do you have any sugar?', 'Do you have any sugar'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica: 'Do you have ANY ...?' (pregunta) y 'I have SOME ...' (afirmación). Cinco frases de cada.",
    rwenSignoff: 'Algunas reglas. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a friend's house in Houston for dinner. They're being a generous host — offering you food, asking what you'd like to drink. Use 'some' and 'any' correctly.",
    rwenRole: "Jake, 30, your American friend hosting dinner. Generous, offers everything, switches between offers and questions naturally.",
    successCriteria: "User uses 'some' for offers/positives ('some bread', 'some water'), 'any' for questions and negatives ('Do you have any tea?', 'I don't want any sugar'). Mix of both demonstrated.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
