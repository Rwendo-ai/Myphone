import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-where-i-live',
  module: 3,
  lesson: 7,
  title: 'Where I live — Dónde vivo',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! 'I live in (ciudad)' / 'I grew up in (ciudad)' / 'For ten years' — frases para contar tu trayectoria geográfica.",
    culturalNote: "Para muchos hispanohablantes en EE.UU., UK o Australia, el 'where I'm from / where I live' tiene capas — naciste en Lima, viviste 10 años en Miami, ahora estás en Sydney. En inglés esto se cuenta naturalmente: 'I'm from Lima, but I've lived in Miami for 10 years, and now I'm in Sydney'. Dominar 'I grew up in...' (donde te criaste) suena más maduro que 'I'm from...' a secas.",
  },

  chunks: [
    {
      id: 'i_live_in_lima',
      target: 'I live in Lima',
      native: 'Vivo en Lima',
      literal: 'Yo vivo en Lima',
      emoji: '🏘️',
      phonetic: 'ai-LIV-in-LI-ma',
      audioRef: null,
    },
    {
      id: 'i_grew_up_in',
      target: 'I grew up in ...',
      native: 'Me crié en...',
      literal: 'Yo crecí arriba en...',
      emoji: '🌱',
      phonetic: 'ai-GRU-AP-in',
      audioRef: null,
    },
    {
      id: 'for_ten_years',
      target: 'For ten years',
      native: 'Hace diez años',
      literal: 'Por diez años',
      emoji: '📅',
      phonetic: 'for-TEN-yirs',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Live in / Grew up in / For X years',
    explanation: "Tres piezas: 'I live in (ciudad)' = ahora. 'I grew up in (ciudad)' = niñez. 'For X years' = duración. Para hispanohablantes la trampa es 'live AT' (incorrecto) en lugar de 'live IN'. Para ciudades grandes y pequeñas siempre 'in': 'I live in New York', 'I live in a small town'.",
    examples: [
      { target: 'I live in Lima',              native: 'Vivo en Lima' },
      { target: 'For ten years',                native: 'Hace diez años' },
      { target: 'I grew up in Mendoza',          native: 'Me crié en Mendoza' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'I live in Lima',     right: 'Vivo en Lima' },
        { left: 'For ten years',       right: 'Hace diez años' },
        { left: 'I grew up in Mendoza', right: 'Me crié en Mendoza' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Vivo en Bogotá',
      correct: ['I live in Bogotá', 'I live in Bogotá.', 'I live in Bogota', 'i live in Bogotá'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Me crié en un pueblo pequeño',
      correct: ['I grew up in a small town', 'I grew up in a small town.', 'i grew up in a small town'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa la preposición',
      sentence: 'I live ____ Mexico City.',
      options: ['in', 'at', 'on'],
      correct: 'in',
      context: 'Para ciudades siempre se usa "in", no "at".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['I', 'live', 'in', 'Madrid', 'for', 'five', 'years'],
      correct: ['I', 'live', 'in', 'Madrid', 'for', 'five', 'years'],
      translation: 'Vivo en Madrid hace cinco años',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés — la trayectoria completa',
      prompt: 'Vivo en Bogotá, pero me crié en Cartagena. Hace diez años aquí.',
      correct: [
        "I live in Bogotá, but I grew up in Cartagena. For ten years now.",
        "I live in Bogota, but I grew up in Cartagena. For ten years now.",
        "i live in Bogotá, but i grew up in Cartagena. for ten years now.",
      ],
    },
  ],

  rwenDialogue: {
    intro: 'En una cena de bienvenida en Sydney. Los compañeros australianos quieren conocer tu historia.',
    lines: [
      { speaker: 'npc', target: "So, are you from here? How long have you lived in Sydney?", native: 'Entonces, ¿eres de aquí? ¿Cuánto llevas en Sydney?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I live in Sydney, but I grew up in Lima. For three years now.", native: 'Vivo en Sydney, pero me crié en Lima. Hace tres años.', correct: true,  feedback: 'Perfecto — contaste tu historia completa: presente, pasado, duración.' },
          { target: "Sydney three years.",                                              native: 'Sydney tres años.',                                       correct: false, feedback: 'Diste la información pero falta estructura — agrega "I live" y "for".' },
          { target: "I live at Sydney.",                                                native: 'Vivo en Sydney.',                                          correct: false, feedback: '"At" no funciona con ciudades — es "I live IN Sydney".' },
        ],
      },
      { speaker: 'npc', target: "Lima is beautiful. Do you go back often?", native: 'Lima es hermosa. ¿Regresas seguido?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Mostraste la trayectoria de inmigrante latino — orgullo del origen, presente claro, duración exacta.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'I live in (ciudad) (en inglés)',  correct: ['I live in', 'I live in.', 'i live in', 'I live IN'] },
      { prompt: 'I grew up in (ciudad) (en inglés)', correct: ['I grew up in', 'I grew up in.', 'i grew up in'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Practica tu trayectoria geográfica en inglés: 'I live in (ahora), but I grew up in (origen). For (X) years.'",
    rwenSignoff: 'De aquí a allá. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're at a welcome dinner in Sydney with new colleagues. They want to know your back-story — where you're from, how long you've been here, where you grew up.",
    rwenRole: "Liam, 32, an Australian colleague who's worked with Latin American immigrants before. Curious, relaxed, asks gentle follow-ups in clear Aussie English.",
    successCriteria: "User uses 'I live in ...' for current city, 'I grew up in ...' for origin, 'for X years' for duration. Avoids 'I live at' (wrong preposition).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
