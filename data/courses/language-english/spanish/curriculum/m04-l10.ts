import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-conversation',
  module: 4,
  lesson: 10,
  title: 'Articles in real talk — Conversation capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "¡Hola! Cerramos el Módulo 4 con la prueba dura: contar tu día completo en inglés, manejando todos los artículos. Esta es la diferencia entre 'inglés roto' e 'inglés natural'.",
    culturalNote: "Para hispanohablantes recién llegados, los artículos son la barrera más visible. Un anglo puede entenderte sin artículos perfectos — pero notará que sigues 'aprendiendo'. Cuando los manejas con flujo, suenas integrado. Es el cambio más rentable: pasar de 'I went to market, market was busy' a 'I went to a market. The market was busy.' Diez años de inmigración condensados en dos artículos.",
  },

  chunks: [
    {
      id: 'morning_flow',
      target: 'I woke up. I had a cup of coffee and an apple.',
      native: 'Me desperté. Tomé una taza de café y una manzana.',
      literal: undefined,
      emoji: '☕',
      phonetic: 'ai-UÓK-AP-ai-jad-a-KAP-of-KO-fi-and-an-A-pel',
      audioRef: null,
    },
    {
      id: 'work_flow',
      target: 'I went to work. The meeting took three hours. I have many emails.',
      native: 'Fui al trabajo. La reunión duró tres horas. Tengo muchos correos.',
      literal: undefined,
      emoji: '💼',
      phonetic: 'ai-UENT-tu-UORK-de-MI-ting-TUK-zri-A-uers',
      audioRef: null,
    },
    {
      id: 'evening_flow',
      target: 'I came home. These children are mine. I love my family.',
      native: 'Volví a casa. Estos niños son míos. Amo a mi familia.',
      literal: undefined,
      emoji: '🏠',
      phonetic: 'ai-KÉIM-JOM-DIS-CHIL-dren-ar-MAIN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Articles in flow',
    explanation: "Cuando cuentes un día entero, los artículos cambian: (1) 'a/an' para presentar — 'a cup of coffee', 'an apple'. (2) 'the' para específicos — 'the meeting' (esa específica). (3) 'some' para algunos — 'some apples'. (4) Sin artículo para general — 'I love my family'. (5) Plurales irregulares — 'children'. El Módulo 4 te dio todas las piezas; ahora las pones juntas.",
    examples: [
      { target: 'I have two children. The children love music.',  native: 'Tengo dos hijos. A los niños les encanta la música.' },
      { target: 'Some days are hard. This day is good.',          native: 'Algunos días son duros. Este día está bueno.' },
      { target: 'How much time do you have? I have many tasks.',  native: '¿Cuánto tiempo tienes? Tengo muchas tareas.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Empareja',
      pairs: [
        { left: 'a cup of coffee',  right: 'una taza de café' },
        { left: 'the meeting',       right: 'la reunión' },
        { left: 'many emails',       right: 'muchos correos' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Tengo dos hijos. A los niños les encanta la música.',
      correct: [
        'I have two children. The children love music.',
        'I have two children. The children love music',
        'i have two children. the children love music.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Algunos días son duros. Este día está bueno.',
      correct: [
        'Some days are hard. This day is good.',
        'Some days are hard. This day is good',
        'some days are hard. this day is good.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Completa con el artículo correcto',
      sentence: 'I have ____ apple every morning.',
      options: ['an', 'a', 'the'],
      correct: 'an',
      context: '"Apple" empieza con vocal — "an apple". Cualquier manzana → indefinido.',
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena',
      words: ['How', 'much', 'time', 'do', 'you', 'have'],
      correct: ['How', 'much', 'time', 'do', 'you', 'have'],
      translation: '¿Cuánto tiempo tienes?',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés (mini-historia con artículos)',
      prompt: 'Compré un teléfono. El teléfono es nuevo. Tengo muchos amigos. La música suena fuerte.',
      correct: [
        'I bought a phone. The phone is new. I have many friends. The music is loud.',
        'I bought a phone. The phone is new. I have many friends. The music is loud',
        'i bought a phone. the phone is new. i have many friends. the music is loud.',
      ],
    },
  ],

  rwenDialogue: {
    intro: 'En una sesión final del Módulo 4 con tu maestra de ESL en LA. Te pide contar un día entero en inglés.',
    lines: [
      { speaker: 'npc', target: "Tell me about your day — from morning to night.", native: 'Cuéntame de tu día — de la mañana a la noche.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6. I have a cup of tea and some bread. I go to work — the office is far. I have many meetings. In the evening I come home. The children are happy to see me. I love my family.", native: 'Día completo con artículos correctos.', correct: true,  feedback: 'Perfecto — manejaste todos los artículos: "a cup", "some bread", "the office", "many meetings", "the children", "my family" (sin artículo). Esto es nivel B1 estable.' },
          { target: "I wake up. I have tea and bread. I go to work. I have meetings. I come home. Children are happy. I love family.",                                                                                  native: 'Sin artículos.',                              correct: false, feedback: 'Suena entendible pero "incompleto" — agrega "a cup of tea", "some bread", "the children", "my family" para sonar natural.' },
          { target: "I wake up at 6. I have the cup of tea and the bread. I go to the work. I have the many meetings.",                                                                                                  native: 'Demasiados "the".',                            correct: false, feedback: '"The" sobra — primera mención usa "a cup", "some bread"; "work" en general no lleva "the".' },
        ],
      },
      { speaker: 'npc', target: "Wonderful — your articles are excellent now. You're ready for Module 5.", native: 'Excelente — tus artículos están perfectos. Estás listo para el Módulo 5.' },
      {
        speaker: 'rwen',
        rwenLine: '¡Lo lograste! Cerraste el Módulo 4 con la prueba más dura del inglés para hispanohablantes — los artículos en flujo. Ahora suenas como hablante nativo en este aspecto.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba. Escribe de memoria.',
    prompts: [
      { prompt: 'I have a cup of coffee (en inglés)',  correct: ['I have a cup of coffee', 'I have a cup of coffee.', 'i have a cup of coffee'] },
      { prompt: 'The children love music (en inglés)', correct: ['The children love music', 'The children love music.', 'the children love music'] },
    ],
  },

  mission: {
    title: 'Tarea Final del Módulo 4',
    task: "Cuenta un día tuyo en inglés — 5 frases mínimo — manejando: a/an, the, some, sin artículo, y plurales irregulares. Sin mirar tus apuntes.",
    rwenSignoff: 'Terminaste el Módulo 4. Los artículos ya no te asustan. Nos vemos en el Módulo 5 — la familia.',
  },

  phase8: {
    scenario: "Final session of Module 4 with your ESL teacher in Los Angeles. She asks you to narrate a full day from morning to night, in English, using articles correctly throughout.",
    rwenRole: "Ms Johnson, 45, your ESL teacher. Will gently flag any article slips. Knows you've worked hard on this and wants to see it click.",
    successCriteria: "Full day narrative using a/an for first mention, the for second mention, no article for general statements, some for plurals positive, irregular plurals correctly. At least 5 sentences with varied article use.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
