import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-where-i-live',
  module: 3,
  lesson: 7,
  title: 'Where I live — Onde eu moro',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hoje contamos onde você mora e onde cresceu. 'I live in São Paulo' agora; 'I grew up in Recife' antes. E 'for ten years' pra duração.",
    culturalNote: "Em português a gente diz 'moro em São Paulo' — 'em' funciona pra cidade. Em inglês é 'in' (não 'at'): 'I live in São Paulo'. E o 'grew up' é passado de 'grow' — irregular. Cresci em Recife = 'I grew up in Recife'.",
  },

  chunks: [
    {
      id: 'i_live_in_harare',
      target: 'I live in São Paulo',
      native: 'Moro em São Paulo',
      literal: 'I live in São Paulo',
      emoji: '🏘️',
      phonetic: 'ay-LIV-in-sow-POW-lo',
      audioRef: null,
    },
    {
      id: 'i_grew_up_in',
      target: 'I grew up in ...',
      native: 'Cresci em...',
      literal: 'I grew up in ...',
      emoji: '🌱',
      phonetic: 'ay-GROO-up-in',
      audioRef: null,
    },
    {
      id: 'for_ten_years',
      target: 'For ten years',
      native: 'Há dez anos',
      literal: 'For ten years',
      emoji: '📅',
      phonetic: 'for-TEN-yeerz',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"For" + duration',
    explanation: "Pra duração, use 'for' + número + tempo: 'for ten years' (há dez anos), 'for two months' (há dois meses). Frase completa: 'I've lived in São Paulo for ten years'. No início, simplifica: 'I live in São Paulo. For ten years now.'",
    examples: [
      { target: 'I live in São Paulo',           native: 'Moro em São Paulo' },
      { target: 'For ten years',                  native: 'Há dez anos' },
      { target: 'I grew up in Recife',            native: 'Cresci em Recife' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as frases de moradia',
      pairs: [
        { left: 'I live in São Paulo',  right: 'Moro em São Paulo' },
        { left: 'I grew up in Recife',  right: 'Cresci em Recife' },
        { left: 'For ten years',        right: 'Há dez anos' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Moro em São Paulo',
      correct: ['I live in São Paulo', 'i live in São Paulo', 'I live in Sao Paulo'] ,
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Há dez anos',
      correct: ['For ten years', 'for ten years', 'For 10 years', 'for 10 years'],
    },
    {
      type: 'fill_blank',
      instruction: 'Escolha a preposição certa',
      sentence: "I live ____ São Paulo.",
      options: ['in', 'at', 'on'],
      correct: 'in',
      context: "Em inglês, cidades e países usam 'in' (não 'at').",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase de localização',
      words: ['I', 'live', 'in', 'São Paulo'],
      correct: ['I', 'live', 'in', 'São Paulo'],
      translation: 'Moro em São Paulo',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase de duração',
      words: ['For', 'ten', 'years'],
      correct: ['For', 'ten', 'years'],
      translation: 'Há dez anos',
    },
  ],

  rwenDialogue: {
    intro: "Mochileiro europeu te aborda no Parque Ibirapuera querendo saber sobre a cidade.",
    lines: [
      { speaker: 'npc', target: "So, are you from here? How long have you lived in São Paulo?", native: 'Então, você é daqui? Há quanto tempo mora em SP?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I live in São Paulo, but I grew up in Recife. For ten years now.", native: 'Moro em São Paulo, mas cresci em Recife. Há dez anos agora.', correct: true,  feedback: "Mandou bem — passado, presente e duração numa resposta só." },
          { target: "São Paulo ten years.",                                               native: 'São Paulo dez anos.',                                            correct: false, feedback: "Faltou o 'I live' e o 'for' — adicione." },
          { target: "I live at São Paulo.",                                              native: 'Moro em São Paulo.',                                              correct: false, feedback: "Em inglês: 'in São Paulo' — não 'at'." },
        ],
      },
      { speaker: 'npc', target: "Recife is beautiful. Do you go back often?", native: 'Recife é linda. Você volta pra lá com frequência?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! 'in' pra cidade e 'for' pra duração — duas regrinhas que tropeçam o BR e você passou.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'Moro em São Paulo (em inglês)',          correct: ['I live in São Paulo', 'i live in São Paulo', 'I live in Sao Paulo'] },
      { prompt: 'Cresci em Recife (em inglês)',        correct: ['I grew up in Recife', 'i grew up in Recife', 'I grew up in recife'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Escreva três frases em inglês: 'I live in ___', 'I grew up in ___', 'For ___ years'. Cuidado pra usar 'in', não 'at'.",
    rwenSignoff: "Boa. Até amanhã.",
  },

  phase8: {
    scenario: "A curious tourist at the entrance to a São Paulo museum strikes up a chat in English. They want to know if you're a local and what life in your city is like.",
    rwenRole: "Hannah, 32, a backpacker from Australia on day three of a Brazil trip. Friendly, asks where you live, where you grew up, how long, what's changed.",
    successCriteria: "User says 'I live in [city]' (with 'in', not 'at'), mentions where they grew up using past tense ('I grew up in ...'), and uses 'for' + duration at least once.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
