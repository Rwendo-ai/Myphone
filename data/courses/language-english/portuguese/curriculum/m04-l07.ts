import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-some-any',
  module: 4,
  lesson: 7,
  title: 'Some & Any — countables',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "'Some' em afirmações e ofertas. 'Any' em perguntas e negações. Detalhe pequeno, regra clara.",
    culturalNote: "Em português a gente diz 'um pouco' ou 'algum' meio na intuição. Em inglês a regra é mais rígida: 'some' em afirmação positiva e oferta, 'any' em pergunta e negação. Misturar soa estranho — 'I don't have some money' não rola; é 'any money'.",
  },

  chunks: [
    {
      id: 'some_water',
      target: 'Some water',
      native: 'Um pouco de água',
      literal: 'positive statement / offer',
      emoji: '💧',
      phonetic: 'sum-WAW-ter',
      audioRef: null,
    },
    {
      id: 'any_questions',
      target: 'Any questions?',
      native: 'Alguma pergunta?',
      literal: 'used in question',
      emoji: '❓',
      phonetic: 'EN-ee KWES-chuns',
      audioRef: null,
    },
    {
      id: 'some_friends',
      target: 'Some friends',
      native: 'Alguns amigos',
      literal: 'positive plural',
      emoji: '👥',
      phonetic: 'sum-FRENDS',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Some vs Any",
    explanation: "(1) Some — afirmação: 'I have some bread'. (2) Some — oferta/pedido: 'Would you like some tea?'. (3) Any — pergunta neutra: 'Do you have any sugar?'. (4) Any — negação: 'I don't have any money'.",
    examples: [
      { target: 'I have some bread.',         native: 'Tenho pão.' },
      { target: 'Do you have any sugar?',     native: 'Tem açúcar?' },
      { target: "I don't have any money.",    native: 'Não tenho dinheiro.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Escolha 'some' ou 'any'",
      sentence: 'Would you like _____ tea?',
      options: ['some', 'any', 'a'],
      correct: 'some',
      context: 'Pergunta de oferta — usa "some".',
    },
    {
      type: 'fill_blank',
      instruction: "Escolha 'some' ou 'any'",
      sentence: "I don't have _____ money.",
      options: ['any', 'some', 'no'],
      correct: 'any',
      context: 'Negação — "any".',
    },
    {
      type: 'fill_blank',
      instruction: "Escolha 'some' ou 'any'",
      sentence: 'Do you have _____ questions?',
      options: ['any', 'some', 'a'],
      correct: 'any',
      context: 'Pergunta neutra — "any".',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Um pouco de água, por favor',
      correct: ['Some water, please', 'Some water please', 'some water, please', 'some water please'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual está certo?',
      question: 'There are _____ students in the classroom.',
      options: [
        { text: 'some', correct: true },
        { text: 'any', correct: false },
        { text: 'a', correct: false },
      ],
      explanation: 'Afirmação positiva — "some".',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "Do you have any sugar?"',
      words: ['sugar?', 'have', 'any', 'Do', 'you'],
      correct: ['Do', 'you', 'have', 'any', 'sugar?'],
      translation: 'Tem açúcar?',
    },
  ],

  rwenDialogue: {
    intro: "Casa de uma amiga americana em SP. Ela te recebe com gentileza inglesa.",
    lines: [
      {
        speaker: 'npc',
        target: "Welcome! Would you like some water?",
        native: 'Bem-vindo! Quer uma água?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, please. And do you have any tea?", native: 'Sim, por favor. E você tem chá?', correct: true, feedback: "Mandou bem — 'some water' (oferta), 'any tea' (pergunta)." },
          { target: "Yes, please. And do you have some tea?", native: '...', correct: false, feedback: "Pergunta neutra precisa de 'any tea?'." },
          { target: "No, I don't want some water.", native: 'Não, não quero água.', correct: false, feedback: "Em negação, use 'any': 'I don't want any water'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem. Some — positivo/oferta. Any — pergunta/negação.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Some water (em inglês)', correct: ['Some water', 'some water'] },
      { prompt: 'Any questions? (em inglês)', correct: ['Any questions?', 'any questions?', 'Any questions', 'any questions'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pergunta com 'Do you have any...?' e oferece com 'Would you like some...?'. Duas frases.",
    rwenSignoff: "Some — afirmação. Any — pergunta/negação. Regra simples.",
  },

  phase8: {
    scenario: "Visiting a friend's home in SP, exchanging offers and questions about food and drink.",
    rwenRole: "Warm host who offers and asks plenty.",
    successCriteria: "User uses 'some' for offers/positive ('I have some...'), 'any' for questions/negative ('do you have any...?', 'I don't have any...').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
