import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-happy-sad',
  module: 10,
  lesson: 1,
  title: 'Happy & Sad — Feliz y triste',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "El Módulo 10 entra al corazón humano: las emociones. Empezamos con feliz y triste — las dos más universales.",
    culturalNote: "Diferencia cultural fuerte: en muchos países latinos las emociones se expresan con cuerpo, voz, drama. En EE.UU. el estilo dominante es más contenido — 'I'm a bit sad', 'I'm pretty happy'. Decir 'I'm super happy' está bien, pero gritar de alegría puede sentirse exagerado en ambientes profesionales. Otra: 'How are you?' a un anglo casi siempre se responde 'I'm good' — incluso si no estás bien. Es ritual social, no pregunta real. Para una respuesta real, espera a que pregunten 'How are you really?' o conozcan más a fondo.",
  },

  chunks: [
    {
      id: 'im_happy',
      target: "I'm happy",
      native: 'Estoy feliz',
      literal: 'I-am happy',
      emoji: '😊',
      phonetic: 'aym-HAP-ee',
      audioRef: null,
    },
    {
      id: 'im_sad',
      target: "I'm sad",
      native: 'Estoy triste',
      literal: 'I-am sad',
      emoji: '😔',
      phonetic: 'aym-SAD',
      audioRef: null,
    },
    {
      id: 'made_me_feel',
      target: 'It made me feel...',
      native: 'Me hizo sentir...',
      literal: 'it-made that I-feel',
      emoji: '💭',
      phonetic: 'it-MAYD-mee-FEEL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emotions with "to be" + intensifiers',
    explanation: "Las emociones se expresan con 'to be' + adjetivo: 'I'm happy', 'I'm sad', 'I'm excited'. Los intensificadores comunes son: 'a little' (un poco), 'pretty' (bastante), 'very' (muy), 'super' (muy informal). Para causa: 'X made me feel Y' (X me hizo sentir Y).",
    examples: [
      { target: "I'm a little sad today",        native: 'Estoy un poco triste hoy' },
      { target: 'The news made me happy',         native: 'La noticia me hizo feliz' },
      { target: "I'm pretty excited about it",     native: 'Estoy bastante emocionado por eso' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: "I'm happy",       right: 'Estoy feliz' },
        { left: "I'm sad",          right: 'Estoy triste' },
        { left: 'It made me feel',  right: 'Me hizo sentir' },
        { left: "I'm excited",      right: 'Estoy emocionado' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Estoy feliz',
      correct: ["I'm happy", 'I am happy', "i'm happy"],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — un poco triste',
      sentence: "I'm ____ sad today.",
      options: ['a little', 'lot', 'very much'],
      correct: 'a little',
      context: '"A little" = un poco. Suaviza la emoción.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Tu colega te pregunta "How are you?" en el pasillo. ¿Qué dices?',
      question: 'Best response in casual workplace:',
      options: [
        { text: "I'm good, thanks. You?",          correct: true },
        { text: "I'm super sad, my dog died.",      correct: false },
        { text: 'I am very emotional today.',         correct: false },
      ],
      explanation: '"How are you?" en EE.UU. es saludo, no pregunta real. La respuesta esperada es "I\'m good, thanks". Para emociones reales, espera el momento adecuado.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — la noticia me hizo feliz',
      words: ['happy', 'made', 'me', 'news', 'The'],
      correct: ['The', 'news', 'made', 'me', 'happy'],
      translation: 'La noticia me hizo feliz',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Estoy un poco triste',
      correct: ["I'm a little sad", 'I am a little sad', "i'm a little sad"],
    },
  ],

  rwenDialogue: {
    intro: 'Una buena amiga estadounidense te pregunta cómo estás de verdad después de una semana difícil.',
    lines: [
      { speaker: 'npc', target: "Hey, how are you really? You seemed off this week.", native: 'Oye, ¿cómo estás de verdad? Pareciste rara esta semana.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Honestly, I'm a little sad. Work was stressful and I miss my family.", native: 'La verdad, estoy un poco triste. El trabajo fue estresante y extraño a mi familia.', correct: true,  feedback: '¡Perfecto! Honestidad + intensificador suave + razones. Conversación real.' },
          { target: "I'm good.",                                                                native: 'Estoy bien.',                                                                       correct: false, feedback: 'Esa respuesta funciona en el pasillo, pero tu amiga te pregunta de verdad. Sé honesta.' },
          { target: 'I am very angry today!',                                                    native: '¡Estoy muy enojada hoy!',                                                            correct: false, feedback: 'Si la verdad es estar triste, di triste. No exageres ni desvíes.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Aprender a distinguir "How are you?" ritual de "How are you really?" es clave para tener amistades reales en EE.UU.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Estoy feliz (en inglés)',     correct: ["I'm happy", 'I am happy', "i'm happy"] },
      { prompt: 'Me hizo sentir... (en inglés)', correct: ['It made me feel', 'it made me feel'] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Identifica tres emociones que sientes hoy en inglés. Usa "I\'m a little / pretty / very + emotion". Practica la versión suave (a little) y fuerte (very).',
    rwenSignoff: 'Mañana: enojo y frustración — emociones más intensas.',
  },

  phase8: {
    scenario: "You're catching up with a close American friend over coffee. They ask how you're really doing. Share at least three emotions about the past week — both positive and negative.",
    rwenRole: "Erin, 31, your close US friend. Empathetic, asks follow-up questions.",
    successCriteria: "User uses at least three emotion words with 'to be' and intensifiers ('a little', 'pretty', 'very'). Distinguishes ritual 'I'm good' from honest emotional sharing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
