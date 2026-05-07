import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-go-come',
  module: 8,
  lesson: 3,
  title: '"To go" & "to come" — Voy / Vengo',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hoy: 'go' (ir) y 'come' (venir). En español usamos 'voy' y 'vengo' parecido al inglés — pero hay un detalle de perspectiva.",
    culturalNote: "En español a veces decimos 'ya voy' cuando alguien te llama desde otra habitación — aunque te estás moviendo HACIA él. En inglés ese caso usa 'come': 'I'm coming!'. La regla: 'come' es movimiento HACIA quien habla o escucha; 'go' es movimiento desde donde están a otro lugar. Si tu mamá te llama desde la cocina, dices 'I'm coming' (no 'I'm going'), aunque en español dirías 'ya voy'.",
  },

  chunks: [
    {
      id: 'i_go_to_work',
      target: 'I go to work.',
      native: 'Voy al trabajo.',
      literal: 'I go to work',
      emoji: '🚶',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'come_here',
      target: 'Come here.',
      native: 'Ven aquí.',
      literal: 'Come here',
      emoji: '👋',
      phonetic: 'KUM-HEER',
      audioRef: null,
    },
    {
      id: 'were_coming',
      target: "We're coming.",
      native: 'Ya vamos.',
      literal: 'We are coming',
      emoji: '🏃',
      phonetic: 'WEER-KUM-ing',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Go vs come (perspective)',
    explanation: "'Go' = movimiento desde aquí hacia allá (lejos). 'Come' = movimiento hacia aquí, hacia el que habla o escucha. 'I'm going to the store' (voy a la tienda — alejándome). 'Are you coming to my party?' (¿vienes? — hacia el que pregunta). En llamadas cuando alguien te dice 'come here', se responde 'I'm coming', no 'I'm going'.",
    examples: [
      { target: 'Are you coming with us?',     native: '¿Vienes con nosotros?' },
      { target: 'I go to the gym at 7',         native: 'Voy al gimnasio a las 7' },
      { target: "I'm coming!",                   native: '¡Ya voy!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I go',         right: 'Voy' },
        { left: 'Come here',     right: 'Ven aquí' },
        { left: "We're coming",  right: 'Ya vamos' },
        { left: 'She goes',      right: 'Ella va' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Tu mamá te grita desde la cocina: "Come for dinner!" ¿Cómo respondes?',
      question: 'Best response:',
      options: [
        { text: "I'm coming!", correct: true },
        { text: "I'm going!",  correct: false },
        { text: 'I come.',      correct: false },
      ],
      explanation: 'En inglés, cuando te diriges hacia quien habla, se usa "come". Aunque en español digas "ya voy", en inglés es "I\'m coming".',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — vas al trabajo cada día',
      sentence: 'I ____ to work every day.',
      options: ['go', 'come', 'goes'],
      correct: 'go',
      context: 'Vas desde tu casa hacia el trabajo (alejándote del lugar donde estás) → "go". Con "I" es "go".',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Ven aquí',
      correct: ['Come here', 'come here', 'Come here.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — ¿vienes con nosotros?',
      words: ['us?', 'coming', 'you', 'with', 'Are'],
      correct: ['Are', 'you', 'coming', 'with', 'us?'],
      translation: '¿Vienes con nosotros?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Ya vamos',
      correct: ["We're coming", 'We are coming', "we're coming"],
    },
  ],

  rwenDialogue: {
    intro: 'Estás en casa de tu novia gringa. Su mamá los llama desde el comedor para cenar.',
    lines: [
      { speaker: 'npc', target: "Dinner's ready! Come on down!", native: '¡La cena está lista! ¡Bajen!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "We're coming!",        native: '¡Ya bajamos!',                correct: true,  feedback: '¡Perfecto! Hacia ella → "coming". Aunque en español dirías "ya vamos", en inglés es "coming".' },
          { target: "We're going!",          native: '¡Nos vamos!',                 correct: false, feedback: '"We\'re going" suena como que se van de la casa, no que bajan a cenar. Usa "coming".' },
          { target: 'We come!',               native: '¡Venimos!',                   correct: false, feedback: 'Falta el progresivo. Es "We\'re coming" (estamos viniendo, ahora mismo).' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! La regla: hacia quien habla = come. Lejos = go. Tu intuición de español ("ya voy") aquí cambia.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Voy al trabajo (en inglés)', correct: ['I go to work', 'i go to work', 'I go to work.'] },
      { prompt: 'Ya vamos (en inglés)',         correct: ["We're coming", 'We are coming', "we're coming"] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'La próxima vez que alguien te llame desde otra habitación, di "I\'m coming!" en lugar de "I\'m going!". Pequeña corrección, gran diferencia.',
    rwenSignoff: 'Mañana: want y need — querer y necesitar.',
  },

  phase8: {
    scenario: "You're at a US friend's house party. People are coming and going. Talk about who's coming, where you're going next, and respond when someone calls you to another room.",
    rwenRole: "Anna, 28, the host. Calls you over multiple times during the conversation.",
    successCriteria: "User uses 'come' for movement toward the speaker (responding when called) and 'go' for movement away. Avoids the literal Spanish 'ya voy' = 'I'm going' trap.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
