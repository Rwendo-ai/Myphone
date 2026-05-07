import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-conversation',
  module: 3,
  lesson: 10,
  title: 'Full introduction conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "¡Hola! Terminamos el Módulo 3. Hoy ponemos junto todo: nombre, edad, oficio, origen, idiomas, descripción personal — y la cortesía para devolver preguntas. La conversación de presentación profesional completa.",
    culturalNote: "En el ámbito hispano-anglo (Miami, LA, agencias bilingües, llamadas con clientes en EE.UU.) este 'paquete' de presentación abre puertas: 'Hi, I'm María. I'm a designer from Bogotá, but I live in Austin now. I speak Spanish and English. Pleasure to meet you — and yourself, where are you from?'. Esa frase en una entrevista o evento te marca como profesional bilingüe, no como inmigrante de visita.",
  },

  chunks: [
    {
      id: 'pleasure_to_meet_you',
      target: 'Pleasure to meet you',
      native: 'Es un placer conocerle',
      literal: 'Placer de conocerte',
      emoji: '🤝',
      phonetic: 'PLE-ZHUR-tu-MIT-iú',
      audioRef: null,
    },
    {
      id: 'and_yourself',
      target: 'And yourself?',
      native: '¿Y tú?',
      literal: '¿Y ti-mismo?',
      emoji: '🔄',
      phonetic: 'and-iór-SELF',
      audioRef: null,
    },
    {
      id: 'lets_keep_in_touch',
      target: "Let's keep in touch",
      native: 'Mantengámonos en contacto',
      literal: 'Vamos a mantener en toque',
      emoji: '📱',
      phonetic: 'lets-KIP-in-TACH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full intro flow',
    explanation: "El paquete completo en una frase: '(Saludo), I'm (nombre). I'm a (oficio) from (origen). Pleasure to meet you — and yourself?' Esto da nombre, oficio, origen, fórmula cortés, devolución de pregunta. Para cerrar: 'Let's keep in touch'. Manejarlo todo de una sola pasada te hace ver listo y profesional.",
    examples: [
      { target: "Hi, I'm Diego. I'm a teacher from Lima.",  native: 'Hola, soy Diego. Soy maestro de Lima.' },
      { target: 'And yourself?',                                native: '¿Y tú?' },
      { target: "Pleasure to meet you. Let's keep in touch.",   native: 'Mucho gusto. Mantengámonos en contacto.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Pleasure to meet you', right: 'Es un placer conocerle' },
        { left: 'And yourself?',         right: '¿Y tú?' },
        { left: "Let's keep in touch",   right: 'Mantengámonos en contacto' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — la presentación completa',
      prompt: 'Hola Sarah, soy Diego. Soy maestro de Lima. Mucho gusto.',
      correct: [
        "Hi Sarah, I'm Diego. I'm a teacher from Lima. Pleasure to meet you.",
        "Hi Sarah, I'm Diego. I'm a teacher from Lima. Nice to meet you.",
        "Hi Sarah I'm Diego. I'm a teacher from Lima. Pleasure to meet you.",
        "hi sarah, i'm diego. i'm a teacher from lima. pleasure to meet you.",
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: '¿Y tú?',
      correct: ['And yourself?', 'And yourself', 'and yourself?', 'And you?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la fórmula formal',
      sentence: '____ to meet you.',
      options: ['Pleasure', 'Please', 'Pleasing'],
      correct: 'Pleasure',
      context: 'En contextos formales se usa "Pleasure to meet you", una vuelta más cortés que "Nice to meet you".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena el cierre',
      words: ["Let's", 'keep', 'in', 'touch'],
      correct: ["Let's", 'keep', 'in', 'touch'],
      translation: 'Mantengámonos en contacto',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mucho gusto. Mantengámonos en contacto.',
      correct: [
        "Pleasure to meet you. Let's keep in touch.",
        "Nice to meet you. Let's keep in touch.",
        "Pleasure to meet you. Let's keep in touch",
        "pleasure to meet you. let's keep in touch.",
      ],
    },
  ],

  rwenDialogue: {
    intro: 'En un evento de networking de mujeres latinas profesionales en Houston. Una nueva persona te acaba de saludar.',
    lines: [
      { speaker: 'npc', target: "Hi! I don't think we've met. I'm Sarah, I work in healthcare.", native: 'Hola, creo que no nos conocemos. Soy Sarah, trabajo en salud.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi Sarah, I'm Diego. I'm a teacher from Lima. Pleasure to meet you — and yourself, where are you from?", native: 'Hola Sarah, soy Diego. Soy maestro de Lima. Mucho gusto — ¿y tú, de dónde eres?', correct: true,  feedback: 'Perfecto — diste tu paquete completo (nombre, oficio, origen), agregaste cortesía formal, y devolviste la pregunta.' },
          { target: "Diego. Teacher.",                                                                                          native: 'Diego. Maestro.',                                                                                            correct: false, feedback: 'Demasiado corto en networking — quieren oír una frase completa.' },
          { target: "Hi, I'm Diego. Pleasure.",                                                                                  native: 'Hola, soy Diego. Placer.',                                                                                    correct: false, feedback: 'Empezaste bien pero "Pleasure" suelto se queda corto — agrega "to meet you".' },
        ],
      },
      { speaker: 'npc', target: "Oh, I'm originally from Boston. So — what brings you here tonight?", native: 'Ah, soy originalmente de Boston. ¿Qué te trae aquí esta noche?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Cerraste Módulo 3 — ahora tienes el paquete completo de presentación profesional en inglés.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe la presentación completa.',
    prompts: [
      { prompt: "Hi, I'm Diego. I'm a teacher from Lima. (en inglés)", correct: [
        "Hi, I'm Diego. I'm a teacher from Lima.",
        "Hi I'm Diego. I'm a teacher from Lima.",
        "hi, i'm diego. i'm a teacher from lima.",
      ] },
      { prompt: "Pleasure to meet you. Let's keep in touch. (en inglés)", correct: [
        "Pleasure to meet you. Let's keep in touch.",
        "Pleasure to meet you. Let's keep in touch",
        "pleasure to meet you. let's keep in touch.",
      ] },
    ],
  },

  mission: {
    title: 'Tarea de hoy — Presentación Profesional',
    task: "Hoy practica tu presentación profesional completa en inglés: nombre, oficio, origen, cortesía formal, y devolver la pregunta. Cuatro datos, una sola pasada.",
    rwenSignoff: 'Terminaste el Módulo 3 — ya te puedes presentar como profesional bilingüe en inglés. Nos vemos en el Módulo 4.',
  },

  phase8: {
    scenario: "You're at a networking event for Latina/Latino professionals in Houston. Someone you've never met introduces themselves. Run the full intro: name, role, origin, where you live now, polite formula, and turn the question back.",
    rwenRole: "Sarah, 38, an American healthcare professional. Bilingual-curious (taking Spanish lessons herself). Speaks clear American English, asks follow-ups.",
    successCriteria: "User runs the full pack: name + role + origin + 'Pleasure to meet you' + reflect question back. Includes details from M3 lessons (where you grew up, where you live now, languages, etc.) when prompted. Doesn't dominate, doesn't fade.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
