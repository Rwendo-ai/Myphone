import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-time-hours',
  module: 6,
  lesson: 4,
  title: 'What time? — Que horas são?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Pergunta clássica: 'What time is it?'. Resposta: 'It's seven o'clock'. Hoje só horas redondas.",
    culturalNote: "No Brasil a gente usa muito o sistema de 24h ('às 19h'). Em países anglófonos predomina o 12h com A.M./P.M. — 'seven A.M.' (7 da manhã), 'seven P.M.' (7 da noite). E o 'o'clock' só aparece quando os minutos são zero.",
  },

  chunks: [
    {
      id: 'what_time',
      target: 'What time is it?',
      native: 'Que horas são?',
      literal: 'What time is it?',
      emoji: '⏰',
      phonetic: 'wat-tym-iz-it',
      audioRef: null,
    },
    {
      id: 'seven_oclock',
      target: "It's seven o'clock",
      native: 'São sete horas',
      literal: "It-is seven o'clock",
      emoji: '🕖',
      phonetic: 'its-SEH-vn-oh-klok',
      audioRef: null,
    },
    {
      id: 'am_pm',
      target: 'A.M. / P.M.',
      native: 'Da manhã / Da tarde ou noite',
      literal: 'Ante meridiem / Post meridiem',
      emoji: '🌅',
      phonetic: 'ay-em / pee-em',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Telling time — hours',
    explanation: "Estrutura: 'It's' + número + \"o'clock\". A.M. (madrugada-meio-dia), P.M. (meio-dia-meia-noite). Use 'o'clock' só quando os minutos são zero.",
    examples: [
      { target: "It's three o'clock",        native: 'São três horas' },
      { target: "It's nine A.M.",            native: 'Nove da manhã' },
      { target: "It's eight o'clock P.M.",   native: 'Oito da noite' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as horas',
      pairs: [
        { left: "Seven o'clock",  right: '7:00' },
        { left: "Three P.M.",     right: '15:00' },
        { left: "Ten A.M.",       right: '10:00' },
        { left: "Midnight",       right: '0:00' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Que horas são?',
      correct: ['What time is it?', 'what time is it?', 'What time is it'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a hora',
      sentence: "It's seven _____.",
      options: ["o'clock", 'oclock', 'of clock'],
      correct: "o'clock",
      context: "'O'clock' usa apóstrofo: 7:00 = 'seven o'clock'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "It is nine A.M."',
      words: ['A.M.', 'is', 'It', 'nine'],
      correct: ['It', 'is', 'nine', 'A.M.'],
      translation: 'São nove da manhã',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — 20:00',
      prompt: 'São oito da noite',
      correct: ["It's eight P.M.", 'It is eight P.M.', "It's 8 P.M.", "It's eight pm"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual está certo pra 14:00?',
      question: 'Choose the natural English:',
      options: [
        { text: "It's two P.M.", correct: true },
        { text: "It's fourteen o'clock.", correct: false },
        { text: "It's two o'clock A.M.", correct: false },
      ],
      explanation: 'Em inglês prefere-se 12h. 14:00 = two P.M.',
    },
  ],

  rwenDialogue: {
    intro: 'Você combina ligação com escritório de Nova York. Conferindo o horário pelo Slack.',
    lines: [
      { speaker: 'npc', target: "What time is the call?", native: 'A que horas é a call?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's at three P.M. São Paulo time.", native: 'Às três da tarde, horário de SP.', correct: true, feedback: 'Mandou bem.' },
          { target: "It's at fifteen o'clock.",            native: 'Às quinze horas.',                  correct: false, feedback: "Em inglês usa 12h: 'three P.M.'." },
          { target: "It's at three night.",                  native: 'Às três da noite.',                  correct: false, feedback: "Use 'P.M.' não 'night'." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Mandou bem! P.M. resolveu o ajuste de fuso.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'What time is it? (em inglês)', correct: ['What time is it?', 'what time is it?', 'What time is it'] },
      { prompt: "It's seven o'clock (em inglês)", correct: ["It's seven o'clock", "It is seven o'clock", "it's seven o'clock"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diz três horários do seu dia em inglês — quando você acorda, almoça, dorme. Use A.M./P.M.",
    rwenSignoff: "Amanhã — minutos.",
  },

  phase8: {
    scenario: "Slack chat with NY office about call timing — confirming hour and A.M./P.M.",
    rwenRole: "American colleague checking call times across timezones.",
    successCriteria: "User says at least two times with 'A.M.' or 'P.M.' (12h format), uses 'o'clock' for round hours.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
