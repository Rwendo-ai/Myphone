import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-body',
  module: 10,
  lesson: 5,
  title: 'Body Parts — Partes del cuerpo',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: las partes del cuerpo. Para describir dolor, lesiones, o solo señalar dónde te duele al médico.",
    culturalNote: "En español 'el brazo' / 'la pierna' usan artículos. En inglés decimos 'my arm' / 'my leg' — usamos posesivo, no artículo. 'I broke the arm' suena raro; 'I broke MY arm' es lo correcto. Para señalar al médico: 'It hurts here' funciona universalmente. Y un detalle cultural: 'stomach' en EE.UU. cubre desde la barriga hasta el área digestiva en general — si te duele el estómago, no necesitas más detalle, el médico va por ahí.",
  },

  chunks: [
    {
      id: 'head',
      target: 'Head',
      native: 'Cabeza',
      literal: 'head',
      emoji: '🗣️',
      phonetic: 'HED',
      audioRef: null,
    },
    {
      id: 'stomach',
      target: 'Stomach',
      native: 'Estómago',
      literal: 'stomach',
      emoji: '🫃',
      phonetic: 'STUH-muk',
      audioRef: null,
    },
    {
      id: 'arm',
      target: 'Arm',
      native: 'Brazo',
      literal: 'arm',
      emoji: '💪',
      phonetic: 'AHRM',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Possessive + body part',
    explanation: "En inglés las partes del cuerpo casi siempre llevan posesivo (my/your/his/her), no artículo. 'My head hurts', 'I broke my arm', 'She has a pain in her stomach'. La frase clave para el médico: 'My X hurts' (me duele mi X).",
    examples: [
      { target: 'My head hurts',          native: 'Me duele la cabeza' },
      { target: 'My arm is broken',        native: 'Tengo el brazo roto' },
      { target: 'It hurts in my stomach',  native: 'Me duele en el estómago' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja partes del cuerpo',
      pairs: [
        { left: 'Head',     right: 'Cabeza' },
        { left: 'Stomach',  right: 'Estómago' },
        { left: 'Arm',      right: 'Brazo' },
        { left: 'Leg',      right: 'Pierna' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Cabeza',
      correct: ['Head', 'head'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con el posesivo',
      sentence: '____ head hurts.',
      options: ['The', 'My', 'A'],
      correct: 'My',
      context: 'Partes del cuerpo en inglés llevan posesivo, no artículo.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Te lastimaste el brazo derecho. ¿Qué dices al médico?',
      question: 'Best phrase:',
      options: [
        { text: 'I hurt my right arm.', correct: true },
        { text: 'I hurt the arm.',       correct: false },
        { text: 'Arm hurt.',              correct: false },
      ],
      explanation: '"My arm" + lado (right/left) + "I hurt" da toda la información. "The arm" suena traducido del español.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — me duele el estómago',
      words: ['stomach', 'My', 'hurts'],
      correct: ['My', 'stomach', 'hurts'],
      translation: 'Me duele el estómago',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Me duele el brazo',
      correct: ['My arm hurts', 'my arm hurts', 'My arm hurts.'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en la sala de emergencias de un hospital en Houston. Te caíste y te duele el brazo.',
    lines: [
      { speaker: 'npc', target: "What happened? Where does it hurt?", native: '¿Qué pasó? ¿Dónde te duele?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I fell, and now my arm hurts. It hurts here, near my elbow.", native: 'Me caí, y ahora me duele el brazo. Me duele aquí, cerca del codo.', correct: true,  feedback: '¡Perfecto! Causa + parte específica + ubicación. La doctora puede actuar.' },
          { target: 'The arm.',                                                       native: 'El brazo.',                                                          correct: false, feedback: 'En inglés es "my arm" — con posesivo. Y necesitas más contexto.' },
          { target: 'Hurt.',                                                           native: 'Dolor.',                                                              correct: false, feedback: 'Demasiado vago — la doctora no sabe qué te duele.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! "It hurts here" + señalar es la fórmula universal en cualquier hospital de EE.UU.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Cabeza (en inglés)',     correct: ['Head', 'head'] },
      { prompt: 'Me duele el brazo (en inglés)', correct: ['My arm hurts', 'my arm hurts', 'My arm hurts.'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Toca cada parte de tu cuerpo y dila en inglés: head, stomach, arm, leg, back, neck. Después di "My X hurts" para cada una.',
    rwenSignoff: 'Mañana: la consulta médica completa.',
  },

  phase8: {
    scenario: "You're at an urgent care clinic in Houston after a minor fall. The intake nurse asks where you got hurt and what symptoms you have.",
    rwenRole: "Karen, 35, intake nurse. Patient, takes notes.",
    successCriteria: "User names at least three body parts with possessives (my arm/my back/my head), uses 'It hurts here' or 'My X hurts', and explains how it happened.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
