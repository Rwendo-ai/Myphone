import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02-thank-you',
  module: 2,
  lesson: 2,
  title: 'Thank you — Obrigado(a)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Hoje aprendemos a agradecer. 'Thank you' parece simples, mas tem um detalhe: em inglês não tem gênero. Em português você diz 'obrigado' ou 'obrigada' dependendo de quem fala. Em inglês, 'Thank you' serve pra todo mundo.",
    culturalNote: "Esse 'obrigado/obrigada' que muda em português é uma das primeiras coisas que cai no inglês — uma palavra só pra qualquer pessoa, qualquer gênero. E depois de 'Thank you' o americano espera 'You're welcome' ou 'No problem' como resposta — quase um eco automático.",
  },

  chunks: [
    {
      id: 'thank_you',
      target: 'Thank you',
      native: 'Obrigado(a)',
      literal: 'I-thank you',
      emoji: '🙏',
      phonetic: 'THANK-yoo',
      audioRef: null,
    },
    {
      id: 'youre_welcome',
      target: "You're welcome",
      native: 'De nada',
      literal: 'You-are welcome',
      emoji: '🤗',
      phonetic: 'yor-WEL-kuhm',
      audioRef: null,
    },
    {
      id: 'thanks_a_lot',
      target: 'Thanks a lot',
      native: 'Muito obrigado(a)',
      literal: 'Thanks a lot',
      emoji: '🌟',
      phonetic: 'THANKS-uh-LOT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Acknowledgement chain',
    explanation: "Em inglês, agradecer tem um par: alguém diz 'Thank you', o outro responde 'You're welcome'. Se não responder, parece falta de educação. Pra ajuda maior, use 'Thanks a lot' ou 'Thank you so much'.",
    examples: [
      { target: 'Thank you.',                 native: 'Obrigado.' },
      { target: "You're welcome.",            native: 'De nada.' },
      { target: 'Thanks a lot for your help.', native: 'Muito obrigada pela sua ajuda.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as expressões',
      pairs: [
        { left: 'Thank you',      right: 'Obrigado(a)' },
        { left: "You're welcome", right: 'De nada' },
        { left: 'Thanks a lot',   right: 'Muito obrigado(a)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Muito obrigado',
      correct: ['Thanks a lot', 'thanks a lot', 'Thanks a lot.', 'thanks a lot.', 'Thank you so much'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete — alguém te disse 'Thank you'. Responda.",
      sentence: '____ welcome.',
      options: ["You're", 'I am', 'We are'],
      correct: "You're",
      context: "A resposta padrão pra 'Thank you' é 'You're welcome'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Coloque em ordem — agradecendo um favor grande',
      words: ['Thank', 'you', 'so', 'much'],
      correct: ['Thank', 'you', 'so', 'much'],
      translation: 'Muito obrigado',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'De nada',
      correct: ["You're welcome", "you're welcome", "You're welcome.", "You are welcome", "you are welcome"],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — agradecendo um colega que te ajudou',
      prompt: 'Obrigado pela ajuda',
      correct: ['Thank you for your help', 'Thank you for your help.', 'Thanks for your help', 'Thanks for your help.', 'thank you for your help'],
    },
  ],

  rwenDialogue: {
    intro: "Sua colega revisou um documento em inglês antes de você mandar pro cliente americano. Agradeça apropriadamente.",
    lines: [
      { speaker: 'npc', target: "There you go — that should fix it.", native: 'Pronto — agora deve estar certo.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Thank you so much for your help.', native: 'Muito obrigado pela sua ajuda.', correct: true,  feedback: 'Mandou bem — agradecimento completo, especificou pelo quê.' },
          { target: 'OK.',                                native: 'OK.',                              correct: false, feedback: "Ela te ajudou — adicione 'thank you', não deixa só no 'OK'." },
          { target: 'Sorry.',                             native: 'Desculpa.',                        correct: false, feedback: "Você não fez nada errado — use 'thank you', não 'sorry'." },
        ],
      },
      { speaker: 'npc', target: "You're welcome — anytime.", native: 'De nada — quando precisar.' },
      {
        speaker: 'rwen',
        rwenLine: "Boa! O par 'thank you' / 'you're welcome' fechou direitinho. Sem 'obrigado/obrigada' confuso aqui.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Thank you (em inglês)',     correct: ['Thank you', 'thank you', 'Thank you.', 'thank you.', 'Thanks', 'thanks'] },
      { prompt: "You're welcome (em inglês)", correct: ["You're welcome", "you're welcome", "You're welcome.", "You are welcome", "you are welcome"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Agradeça alguém em inglês hoje — pode ser pequeno ('Thank you' pro garçom). Note se a pessoa responde com 'You're welcome' ou 'No problem'.",
    rwenSignoff: "Thank you por estudar comigo. Até amanhã.",
  },

  phase8: {
    scenario: "A colleague at your office in São Paulo just spent 10 minutes helping you fix a typo-filled English document before you email it to a client in New York. Thank them properly.",
    rwenRole: "Sarah, 32, your colleague who's helpful but busy. Direct, kind, slightly British — she'll downplay the help.",
    successCriteria: "User uses 'thank you' (preferably 'thank you so much' or 'thanks a lot' since the help was substantial), names what they're thanking for ('for your help' / 'for fixing this'), and responds gracefully to her 'You're welcome' / 'No problem'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
