import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-likes-food',
  module: 7,
  lesson: 5,
  title: "I like / I don't like food — Lo que me gusta y lo que no",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoy: expresar gustos sobre la comida. 'I love it', 'I don't like it', 'It's delicious'. Útil para conversar en cenas.",
    culturalNote: "Trampa gramatical para hispanohablantes: en español decimos 'me gusta el café' (literal: el café me gusta a mí). En inglés es al revés: 'I like coffee' (yo gusto el café). El verbo 'like' funciona como cualquier otro — sujeto + verbo + objeto. No hay 'me' como objeto indirecto. Si dices 'me likes coffee' un anglo se pierde. Otra: 'I love it' es muy común y no es romántico — sirve para comida, ropa, lugares, lo que sea.",
  },

  chunks: [
    {
      id: 'i_love_it',
      target: 'I love it',
      native: 'Me encanta',
      literal: 'I love it',
      emoji: '❤️',
      phonetic: 'ay-LUV-it',
      audioRef: null,
    },
    {
      id: 'i_dont_like',
      target: "I don't like it",
      native: 'No me gusta',
      literal: "I don't like it",
      emoji: '👎',
      phonetic: 'ay-DOHNT-LAYK-it',
      audioRef: null,
    },
    {
      id: 'its_delicious',
      target: "It's delicious",
      native: 'Está delicioso / Está rico',
      literal: "It is delicious",
      emoji: '😋',
      phonetic: 'its-de-LISH-us',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Subject + like/love + object',
    explanation: "En inglés: yo (sujeto) + verbo (like/love) + cosa (objeto). 'I like rice', 'She loves chocolate', 'They don't like onions'. No es como en español ('me gusta el arroz' donde el arroz es el sujeto). En inglés tú eres el sujeto siempre.",
    examples: [
      { target: 'I like coffee',          native: 'Me gusta el café' },
      { target: "She doesn't like fish",   native: 'A ella no le gusta el pescado' },
      { target: 'We love pizza',           native: 'Nos encanta la pizza' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'Me encanta',
      correct: ['I love it', 'i love it', 'I love it.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Elige la traducción correcta de "Me gusta el café"',
      question: '¿Cómo se dice "Me gusta el café" en inglés?',
      options: [
        { text: 'I like coffee.',      correct: true },
        { text: 'Me likes coffee.',     correct: false },
        { text: 'To me likes coffee.',  correct: false },
      ],
      explanation: 'En inglés, tú eres el sujeto: "I like X". No traduzcas literalmente "me gusta" — usa "I like".',
    },
    {
      type: 'fill_blank',
      instruction: 'Completa — no te gusta la cebolla',
      sentence: "I ____ like onions.",
      options: ["don't", "doesn't", "no"],
      correct: "don't",
      context: 'Para negar con "I" (yo) en presente, se usa "don\'t".',
    },
    {
      type: 'match_pairs',
      instruction: 'Empareja las expresiones de gusto',
      pairs: [
        { left: 'I love it',         right: 'Me encanta' },
        { left: "I don't like it",   right: 'No me gusta' },
        { left: "It's delicious",    right: 'Está delicioso' },
        { left: 'I like it',         right: 'Me gusta' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ordena — la cena estuvo deliciosa',
      words: ['was', 'dinner', 'delicious', 'The'],
      correct: ['The', 'dinner', 'was', 'delicious'],
      translation: 'La cena estuvo deliciosa',
    },
    {
      type: 'translate',
      instruction: 'Escribe en inglés',
      prompt: 'No me gusta el pescado',
      correct: ["I don't like fish", "I dont like fish", "i don't like fish"],
    },
  ],

  rwenDialogue: {
    intro: 'Tu suegra estadounidense te invitó a cenar. Hizo lasaña y te pregunta qué te parece.',
    lines: [
      { speaker: 'npc', target: "How do you like the lasagna?", native: '¿Qué te parece la lasaña?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I love it. It's delicious — thank you.",   native: 'Me encanta. Está deliciosa — gracias.', correct: true,  feedback: '¡Perfecto! "I love it" + "delicious" + "thank you" = anfitriona feliz.' },
          { target: 'Me likes lasagna.',                          native: 'A mí gusta lasaña.',                     correct: false, feedback: 'Traducción literal del español. En inglés: "I like the lasagna" o "I love it".' },
          { target: "It's OK.",                                    native: 'Está OK.',                               correct: false, feedback: 'En EE.UU. "OK" suena tibio — casi a queja. Si te gusta, di "it\'s great" o "I love it".' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: '¡Bien! Y ojo: en EE.UU. los cumplidos a la cocinera son muy esperados — más explícitos que en algunas culturas latinas.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sin mirar arriba.',
    prompts: [
      { prompt: 'Me gusta el café (en inglés)',  correct: ['I like coffee', 'i like coffee', 'I like coffee.'] },
      { prompt: 'Está delicioso (en inglés)',     correct: ["It's delicious", 'Its delicious', "it's delicious", "It's delicious."] },
    ],
  },

  mission: {
    title: 'Misión de hoy',
    task: 'Hoy come algo y di en voz alta tu opinión en inglés: "I love it / I like it / It\'s OK / I don\'t like it." Practica usar "I" como sujeto, no "me".',
    rwenSignoff: 'Mañana: los verbos de cocinar — cook, chop, boil.',
  },

  phase8: {
    scenario: "You're at a US friend's potluck dinner where everyone brought a dish. You taste three different foods and need to comment on each — say which you love, which you like, and politely handle one you don't enjoy.",
    rwenRole: "Erica, 35, the host. Wants to know your honest opinion but appreciates politeness.",
    successCriteria: "User uses 'I love it', 'I like it', and a polite version of 'I don't like it' (e.g., 'It's not for me') with the correct subject-verb-object structure.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
