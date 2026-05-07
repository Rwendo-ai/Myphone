import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-siblings',
  module: 5,
  lesson: 2,
  title: 'Brothers & Sisters — Hermanos',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "¡Hola! Hermanos en inglés: 'brother' (hermano), 'sister' (hermana), 'siblings' (hermanos en general — sin importar el género).",
    culturalNote: "En español decimos 'tengo dos hermanos' y puede significar dos varones o un varón y una mujer (mixto). En inglés tienes la palabra elegante: 'siblings' = hermanos en general. Si solo dices 'I have two siblings' no especificas género — útil para no comprometerte ni asumir. En registros más casuales (sobre todo en EE.UU.): 'I have two brothers' o 'I have a brother and a sister'.",
  },

  chunks: [
    {
      id: 'brother',
      target: 'Brother',
      native: 'Hermano',
      literal: 'Hermano (mayor o menor)',
      emoji: '👦',
      phonetic: 'BRA-der',
      audioRef: null,
    },
    {
      id: 'sister',
      target: 'Sister',
      native: 'Hermana',
      literal: 'Hermana (mayor o menor)',
      emoji: '👧',
      phonetic: 'SIS-ter',
      audioRef: null,
    },
    {
      id: 'two_siblings',
      target: 'I have two siblings.',
      native: 'Tengo dos hermanos.',
      literal: 'Yo tengo dos hermanos',
      emoji: '👨‍👩‍👧',
      phonetic: 'ai-JAV-tu-SI-blings',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Older / Younger',
    explanation: "Para distinguir mayor o menor: 'older brother' (hermano mayor), 'younger sister' (hermana menor). En español decimos 'hermano mayor' después; en inglés el adjetivo va antes — 'OLDER brother'. Si quieres ser ambiguo: 'I have a brother' (sin especificar). Para hablar de todos: 'I have two siblings' (no asume género).",
    examples: [
      { target: 'My older brother',     native: 'Mi hermano mayor' },
      { target: 'My younger sister',    native: 'Mi hermana menor' },
      { target: 'I have two siblings.', native: 'Tengo dos hermanos.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'Brother',           right: 'Hermano' },
        { left: 'Sister',             right: 'Hermana' },
        { left: 'I have two siblings', right: 'Tengo dos hermanos' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi hermano mayor',
      correct: ['My older brother', 'my older brother', 'My older brother.'],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Mi hermana menor',
      correct: ['My younger sister', 'my younger sister', 'My younger sister.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con la posición del adjetivo',
      sentence: 'My ____ brother lives in Mexico.',
      options: ['older', 'old', 'older years'],
      correct: 'older',
      context: 'En inglés "older" va antes del sustantivo: "older brother".',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['I', 'have', 'one', 'brother', 'and', 'one', 'sister'],
      correct: ['I', 'have', 'one', 'brother', 'and', 'one', 'sister'],
      translation: 'Tengo un hermano y una hermana',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tengo dos hermanos (general)',
      correct: ['I have two siblings', 'I have two siblings.', 'i have two siblings'],
    },
  ],

  rwenDialogue: {
    intro: 'En una entrevista de visa para EE.UU. Te preguntan por tu familia.',
    lines: [
      { speaker: 'npc', target: "Tell me about your siblings — do you have brothers, sisters?", native: 'Cuéntame de tus hermanos — ¿tienes hermanos, hermanas?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have an older brother and a younger sister.", native: 'Tengo un hermano mayor y una hermana menor.', correct: true,  feedback: 'Perfecto — distinguiste género (brother/sister) y edad (older/younger).' },
          { target: "I have brother and sister.",                      native: 'Tengo hermano y hermana.',                    correct: false, feedback: 'Falta "a" — en inglés es "a brother", "a sister".' },
          { target: "I have two siblings.",                             native: 'Tengo dos hermanos (general).',               correct: false, feedback: 'Funciona pero menos detalle — la respuesta detallada es mejor en entrevistas.' },
        ],
      },
      { speaker: 'npc', target: "Oh nice — what do they do?", native: 'Qué bien — ¿en qué trabajan?' },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien hecho! Distinguiste hermano vs. hermana, mayor vs. menor — eso es nivel intermedio.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'My older brother (en inglés)', correct: ['My older brother', 'my older brother', 'My older brother.'] },
      { prompt: 'I have two siblings (en inglés)', correct: ['I have two siblings', 'I have two siblings.', 'i have two siblings'] },
    ],
  },

  mission: {
    title: 'Tarea de hoy',
    task: "Cuéntale a alguien sobre tus hermanos en inglés. Usa 'older' o 'younger' antes de 'brother/sister'.",
    rwenSignoff: 'Hermanos para siempre. Nos vemos mañana.',
  },

  phase8: {
    scenario: "You're in a US visa interview. The officer asks about your immediate family — siblings, what they do, where they live.",
    rwenRole: "Officer Williams, 45, the consular officer. Polite, brisk, asks specific questions. Speaks clear American English.",
    successCriteria: "User describes siblings with 'older'/'younger' + 'brother'/'sister', uses correct articles ('a brother'), can use 'siblings' if needed for general answer.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
