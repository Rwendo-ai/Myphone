import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-please',
  module: 2,
  lesson: 1,
  title: 'Please — Por favor',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Módulo 2 começa com as 'survival phrases' — palavras que te salvam quando você se perde ou não entende. Primeiras três: 'Please', 'Excuse me' e 'Sorry'.",
    culturalNote: "No Brasil, 'por favor' às vezes é dispensado — você pede 'um café' e o tom de voz já carrega a educação. Em inglês 'please' é quase obrigatório em pedidos: sem ele, soa como ordem ('coffee' = 'me dá um café'). Pequena palavra, faz uma diferença enorme no clima.",
  },

  chunks: [
    {
      id: 'please',
      target: 'Please',
      native: 'Por favor',
      literal: undefined,
      emoji: '🙏',
      phonetic: 'PLEEZ',
      audioRef: null,
    },
    {
      id: 'excuse_me',
      target: 'Excuse me',
      native: 'Com licença',
      literal: 'Excuse-me / Pardon-me',
      emoji: '✋',
      phonetic: 'eks-KYOOZ-mee',
      audioRef: null,
    },
    {
      id: 'sorry',
      target: 'Sorry',
      native: 'Desculpa',
      literal: 'I-am-sorry',
      emoji: '😔',
      phonetic: 'SOH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Politeness markers',
    explanation: "Três palavras, três funções: 'Please' suaviza um pedido, 'Excuse me' chama atenção ou pede passagem, e 'Sorry' pede desculpa por algo que você fez. Não use junto — escolhe uma de cada vez, dependendo da situação.",
    examples: [
      { target: 'A coffee, please.',           native: 'Um café, por favor.' },
      { target: 'Excuse me, where is the door?', native: 'Com licença, onde fica a porta?' },
      { target: "Sorry, I'm late.",             native: 'Desculpa, me atrasei.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as palavras',
      pairs: [
        { left: 'Please',     right: 'Por favor' },
        { left: 'Excuse me',  right: 'Com licença' },
        { left: 'Sorry',      right: 'Desculpa' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — pedindo café num cafe em São Paulo',
      prompt: 'Um café, por favor.',
      correct: ['A coffee, please.', 'A coffee please.', 'Coffee, please.', 'Coffee please.', 'a coffee, please.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — você quer passar entre pessoas',
      sentence: '____, can I pass?',
      options: ['Please', 'Excuse me', 'Sorry'],
      correct: 'Excuse me',
      context: "Pra pedir passagem em inglês usa 'Excuse me', não 'Sorry'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Coloque em ordem — pedindo desculpa por se atrasar',
      words: ['Sorry', 'I', 'am', 'late'],
      correct: ['Sorry', 'I', 'am', 'late'],
      translation: 'Desculpa, me atrasei',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Com licença',
      correct: ['Excuse me', 'excuse me', 'Excuse me.', 'excuse me.'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Escolha a resposta certa',
      question: "Você entrou no escritório do seu chefe, mas ele tá no telefone. O que diz pra chamar atenção?",
      options: [
        { text: 'Excuse me.', correct: true },
        { text: 'Sorry.',     correct: false },
        { text: 'Please.',    correct: false },
      ],
      explanation: "'Excuse me' é pra interromper ou chamar atenção. 'Sorry' é só quando você fez algo errado.",
    },
  ],

  rwenDialogue: {
    intro: 'Você tá num cafe na Vila Madalena. O barista é australiano, só fala inglês. Pede um café.',
    lines: [
      { speaker: 'npc', target: 'Hi, what can I get you?', native: 'Oi, o que você quer?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'A coffee, please.',          native: 'Um café, por favor.',           correct: true,  feedback: "Mandou bem — 'please' deixou o pedido educado." },
          { target: 'Coffee.',                     native: 'Café.',                          correct: false, feedback: "Soou um pouco rude — adicione 'please' pra parecer pedido, não ordem." },
          { target: 'Sorry, a coffee.',            native: 'Desculpa, um café.',             correct: false, feedback: "Você não fez nada errado — não precisa de 'Sorry'. Use 'please'." },
        ],
      },
      { speaker: 'npc', target: 'Coming right up.', native: 'Já trago.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! 'Please' é mais leve que 'por favor' — mas é obrigatório em inglês.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Please (em inglês)',    correct: ['Please', 'please', 'Please.', 'please.'] },
      { prompt: 'Excuse me (em inglês)', correct: ['Excuse me', 'excuse me', 'Excuse me.', 'excuse me.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Use 'please' uma vez hoje em inglês — mesmo pedindo água pra um amigo. Sente como sai da sua boca.",
    rwenSignoff: "Até amanhã — vamos aprender thank you.",
  },

  phase8: {
    scenario: "You walk into a busy cafe in Vila Madalena, São Paulo. The barista is an Australian expat — fast, friendly, English-only. Order a coffee politely, using 'please' and 'excuse me' or 'sorry' if needed.",
    rwenRole: "Mike, 24, the barista. Friendly but efficient — a queue is forming behind you. Speaks fast, casual English.",
    successCriteria: "User uses 'please' when ordering, uses 'excuse me' to get attention OR 'sorry' if they need to apologise (e.g. for changing their order). Doesn't bark a one-word order.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
