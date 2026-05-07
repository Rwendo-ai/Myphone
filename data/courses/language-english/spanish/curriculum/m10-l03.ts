import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-fear-worry',
  module: 10,
  lesson: 3,
  title: 'Fear & Worry — Miedo y preocupación',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: miedo y preocupación. Cómo expresar inquietud y cómo consolar a alguien.",
    culturalNote: "Trampa de hispanohablantes: en español 'tengo miedo' usa 'tener'. En inglés es 'I'm afraid' o 'I'm scared' — con 'to be'. Otra: 'I'm worried about X' (estoy preocupado por X) usa 'about', no 'for' (que sería para alguien). En EE.UU. 'Don't worry' es muy común — casi automático. Pero entre amigos cercanos a veces molesta — minimiza la preocupación. Una alternativa más empática: 'That's understandable, that sounds hard'.",
  },

  chunks: [
    {
      id: 'im_scared',
      target: "I'm scared",
      native: 'Tengo miedo',
      literal: 'I-am scared',
      emoji: '😨',
      phonetic: 'aym-SKAYRD',
      audioRef: null,
    },
    {
      id: 'worried_about',
      target: "I'm worried about...",
      native: 'Estoy preocupado por...',
      literal: 'I-have worry about',
      emoji: '😟',
      phonetic: 'aym-WUH-reed-uh-BOWT',
      audioRef: null,
    },
    {
      id: 'dont_worry',
      target: "Don't worry",
      native: 'No te preocupes',
      literal: "do-not worry",
      emoji: '🤝',
      phonetic: 'DOHNT-WUH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Worried about / Scared of',
    explanation: "'Worried ABOUT + topic' (preocupado por). 'Scared OF + thing' (con miedo de). 'Afraid OF + thing'. Las preposiciones cambian: about para preocupación abstracta, of para temor concreto. 'Don't worry' es la respuesta más común para tranquilizar.",
    examples: [
      { target: "I'm worried about my mom",          native: 'Estoy preocupado por mi mamá' },
      { target: "I'm scared of flying",                native: 'Tengo miedo de volar' },
      { target: "Don't worry, it'll be fine",          native: 'No te preocupes, todo estará bien' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: "I'm scared",        right: 'Tengo miedo' },
        { left: "I'm worried about", right: 'Estoy preocupado por' },
        { left: "Don't worry",        right: 'No te preocupes' },
        { left: "I'm afraid",         right: 'Tengo miedo' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la preposición',
      sentence: "I'm worried ____ my mom.",
      options: ['for', 'about', 'of'],
      correct: 'about',
      context: '"Worried about" + tema/persona. "About" es la preposición correcta.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Tu amiga te cuenta que su mamá está enferma. ¿Qué dices?',
      question: 'Most empathetic response:',
      options: [
        { text: "That sounds hard. How are you holding up?", correct: true },
        { text: "Don't worry.",                                correct: false },
        { text: 'No fear.',                                     correct: false },
      ],
      explanation: '"Don\'t worry" minimiza. "That sounds hard" valida. En EE.UU. la empatía explícita es valorada en relaciones cercanas.',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tengo miedo',
      correct: ["I'm scared", 'I am scared', "I'm afraid", 'I am afraid'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — preocupado por mi familia',
      words: ['family', 'worried', 'my', "I'm", 'about'],
      correct: ["I'm", 'worried', 'about', 'my', 'family'],
      translation: 'Estoy preocupado por mi familia',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'No te preocupes',
      correct: ["Don't worry", 'Do not worry', "don't worry"],
    },
  ],

  rwenDialogue: {
    intro: 'Tu amiga estadounidense Lisa está nerviosa por una entrevista mañana. La estás escuchando.',
    lines: [
      { speaker: 'npc', target: "I have a big interview tomorrow. I'm so nervous.", native: 'Tengo una entrevista importante mañana. Estoy súper nerviosa.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm worried about you too. But I think you'll do great — you've prepared a lot.", native: 'Estoy preocupado por ti también. Pero creo que te irá genial — te has preparado mucho.', correct: true,  feedback: '¡Perfecto! Empatía + ánimo basado en la realidad. Mejor que solo "don\'t worry".' },
          { target: "Don't worry.",                                                                       native: 'No te preocupes.',                                                                        correct: false, feedback: 'Minimiza su sentir. Es típico, pero un amigo cercano espera más.' },
          { target: "I'm scared too!",                                                                     native: '¡Yo también tengo miedo!',                                                                  correct: false, feedback: 'Convertir su miedo en el tuyo no la ayuda. Mejor reconocer y animar.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Empatía + razón concreta es la combinación que funciona en EE.UU. con personas cercanas.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Tengo miedo (en inglés)',          correct: ["I'm scared", 'I am scared', "I'm afraid", 'I am afraid'] },
      { prompt: 'Estoy preocupado por (en inglés)',  correct: ["I'm worried about", 'I am worried about'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Piensa en algo que te preocupa esta semana. Escríbelo en inglés en tres oraciones: "I\'m worried about X. I\'m scared of Y. I think it will be OK because Z."',
    rwenSignoff: 'Mañana: estar enfermo — síntomas, médico, farmacia.',
  },

  phase8: {
    scenario: "Your close American friend just told you they're worried about a family member's health. Listen, validate their feelings, and offer support.",
    rwenRole: "Lisa, 33, your friend. Genuinely worried.",
    successCriteria: "User uses 'I'm worried about', acknowledges their feeling without minimizing ('That sounds hard', 'I'm worried for you'), and avoids the dismissive 'Don't worry'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
