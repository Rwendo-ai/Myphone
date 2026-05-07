import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-your-story',
  module: 10,
  lesson: 10,
  title: 'Your English Story — A2 Complete',
  estimatedMinutes: 10,
  xpReward: 100,

  hook: {
    rwenLine: "Última lección. La número 100. Hoy no aprendemos algo nuevo — hoy te paras y cuentas tu propia historia: cómo empezaste con el inglés, dónde estás ahora, hacia dónde vas.",
    culturalNote: "Has llegado al final del Módulo 10 — y al final de los 100. Eso no es poca cosa. Empezaste con 'hello' en el Módulo 1; hoy puedes contar tu historia con pasado, presente, futuro, emociones, refranes. Nivel A2 funcional. En EE.UU. el storytelling personal es una habilidad social fuerte: en entrevistas de trabajo, en cenas, en networking. La fórmula clásica: 'I started learning English [when]. Now I can [present skill]. The journey continues.' Es corta, honesta, poderosa. Cuéntala con orgullo — son cien lecciones de trabajo real.",
  },

  chunks: [
    {
      id: 'i_started_learning',
      target: 'I started learning English',
      native: 'Empecé a aprender inglés',
      literal: 'I-started learning English',
      emoji: '🌱',
      phonetic: 'ay-STAR-ted-LER-ning-IN-glish',
      audioRef: null,
    },
    {
      id: 'now_i_can',
      target: 'Now I can...',
      native: 'Ahora puedo...',
      literal: 'now I can',
      emoji: '🚀',
      phonetic: 'now-AY-kan',
      audioRef: null,
    },
    {
      id: 'journey_continues',
      target: 'The journey continues',
      native: 'El camino sigue',
      literal: 'the journey continues',
      emoji: '🌅',
      phonetic: 'thuh-JER-nee-kun-TIN-yooz',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Your story arc — past, present, future',
    explanation: "La historia de tu aprendizaje en inglés: pasado (cómo empezaste), presente (qué puedes hoy), futuro (a dónde vas). 'I started [time]. Now I can [skill]. The journey continues / One day I'll [goal].' Es la estructura del 'before and after' aplicada a ti. Cubre los tres tiempos verbales que dominaste en el Módulo 8.",
    examples: [
      { target: "I started learning English a year ago",     native: 'Empecé a aprender inglés hace un año' },
      { target: 'Now I can have a conversation',              native: 'Ahora puedo tener una conversación' },
      { target: "One day I'll work in the US",                 native: 'Algún día trabajaré en EE.UU.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja la fase y la frase',
      pairs: [
        { left: 'Pasado',          right: 'I started learning English' },
        { left: 'Presente',         right: 'Now I can have a conversation' },
        { left: 'Futuro',           right: "One day I'll be fluent" },
        { left: 'Continuidad',      right: 'The journey continues' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Empecé a aprender inglés',
      correct: ['I started learning English', 'i started learning English', 'I started to learn English'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la frase de cierre',
      sentence: 'The journey ____.',
      options: ['continues', 'ends', 'starts'],
      correct: 'continues',
      context: 'El aprendizaje es continuo — incluso después de 100 lecciones, hay más por delante.',
    },
    {
      type: 'multiple_choice',
      instruction: 'En tu primera entrevista en inglés, te preguntan tu camino con el idioma',
      question: 'Best summary of your journey:',
      options: [
        { text: "I started learning English a year ago. Now I can have full conversations. One day I'll be fluent.", correct: true },
        { text: "I no English before. Now English. Future English.",                                                  correct: false },
        { text: "English hard.",                                                                                       correct: false },
      ],
      explanation: 'Tres oraciones, tres tiempos. Pasado → presente → futuro. Es la fórmula clásica del before-and-after, y suena profesional.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — ahora puedo tener una conversación',
      words: ['have', 'can', 'a', 'I', 'conversation', 'Now'],
      correct: ['Now', 'I', 'can', 'have', 'a', 'conversation'],
      translation: 'Ahora puedo tener una conversación',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'El camino sigue',
      correct: ['The journey continues', 'the journey continues', 'The journey continues.'],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en una entrevista informal de trabajo en una cafetería en San Francisco. La gerente te pregunta cómo aprendiste inglés. Es tu momento.',
    lines: [
      { speaker: 'npc', target: "Your English is great. How did you learn?", native: 'Tu inglés es genial. ¿Cómo aprendiste?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. I started learning English a year ago. Now I can have conversations like this one. The journey continues — I want to keep improving.", native: 'Gracias. Empecé a aprender inglés hace un año. Ahora puedo tener conversaciones como esta. El camino sigue — quiero seguir mejorando.', correct: true,  feedback: '¡Perfecto! Pasado, presente, futuro. Honesto, profesional, con humildad y ambición. Respuesta de A2.' },
          { target: 'Yes English.',                                                                                                                                       native: 'Sí inglés.',                                                                                                                                  correct: false, feedback: 'Una pregunta abierta merece una respuesta completa. Cuenta tu historia.' },
          { target: 'I am very good.',                                                                                                                                      native: 'Yo soy muy bueno.',                                                                                                                            correct: false, feedback: 'Suena presuntuoso. Mejor honestidad: dónde empezaste, dónde estás, hacia dónde vas.' },
        ],
      },
      { speaker: 'npc', target: "That's wonderful. What's your goal with English?", native: 'Genial. ¿Cuál es tu meta con el inglés?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I hope to work in a bilingual role. I dream of helping other Spanish speakers learn — like Rwen helped me.", native: 'Espero trabajar en un puesto bilingüe. Sueño con ayudar a otros hispanohablantes — como Rwen me ayudó.', correct: true,  feedback: '¡Excelente! Meta concreta + sueño grande + reconocimiento al camino. Has cerrado el ciclo.' },
          { target: 'I want money.',                                                                                                  native: 'Quiero dinero.',                                                                                          correct: false, feedback: 'Honesto pero falta visión. Las metas con propósito conectan más en EE.UU.' },
          { target: "I don't know.",                                                                                                    native: 'No sé.',                                                                                                  correct: false, feedback: 'Después de 100 lecciones, sí sabes. Conecta con un sueño concreto — aunque sea pequeño.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '[Pausa]',
        rwenAnimation: 'idle',
      },
      {
        speaker: 'rwen',
        rwenLine: 'Llegaste a la lección 100. De "hello" a tu propia historia. De "tengo hambre" mal traducido a "I started learning English a year ago". 100 lecciones reales. Esto no se borra — está en ti ahora.',
        rwenAnimation: 'celebrate',
      },
      {
        speaker: 'rwen',
        rwenLine: 'Tu inglés no es perfecto. El mío en español tampoco. Lo importante: ya puedes ir, pedir, contar, conectar. El camino sigue — pero ahora caminas. Felicidades.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba — tu historia en tres tiempos.',
    prompts: [
      { prompt: 'Empecé a aprender inglés (en inglés)',  correct: ['I started learning English', 'i started learning English', 'I started to learn English'] },
      { prompt: 'Ahora puedo tener una conversación (en inglés)', correct: ['Now I can have a conversation', 'now I can have a conversation', 'Now I can have a conversation.'] },
      { prompt: 'El camino sigue (en inglés)', correct: ['The journey continues', 'the journey continues', 'The journey continues.'] },
    ],
  },

  mission: {
    title: 'Misión Final del Curso',
    task: 'Escribe tu historia en inglés en cinco oraciones: cuándo empezaste, qué te costó, qué puedes hoy, hacia dónde vas, qué te llevas. Compártela — con un amigo, en un post, con tu familia. Es tu testimonio.',
    rwenSignoff: '¡Felicidades! 100 lecciones, 10 módulos, miles de palabras. Cerraste Learn English — Spanish edition. El camino sigue siempre, pero ya tienes mapa, brújula y voz. Hasta que volvamos a vernos. — Rwen.',
  },

  phase8: {
    scenario: "You're in an informal job interview in San Francisco for a bilingual role. The manager asks about your English learning journey, your current ability, and your future goals. Tell your full story with confidence.",
    rwenRole: "Patricia, 42, hiring manager at a startup. Warm, encouraging, asks open questions about your journey.",
    successCriteria: "User uses past simple ('I started'), present ability ('Now I can'), and future hopes ('I hope to / One day I'll'). Tells a coherent 4-6 sentence story. Closes with confidence — not minimizing, not exaggerating.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
