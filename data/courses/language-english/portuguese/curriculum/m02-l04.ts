import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-do-you-speak',
  module: 2,
  lesson: 4,
  title: 'Do you speak English? — Você fala inglês?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Antes de iniciar uma conversa com um estranho, vale checar: 'Do you speak English?'. Essa pergunta começa com 'Do' — uma das particularidades do inglês.",
    culturalNote: "Em português a gente faz pergunta só com a entonação — 'Você fala inglês?' tem o mesmo formato da afirmação 'Você fala inglês'. Em inglês, perguntas com verbos comuns precisam do 'Do' na frente: 'Do you speak English?'. Sem 'Do' soa estranho.",
  },

  chunks: [
    {
      id: 'do_you_speak_english',
      target: 'Do you speak English?',
      native: 'Você fala inglês?',
      literal: 'Do you speak English?',
      emoji: '🗣️',
      phonetic: 'doo-yoo-SPEEK-ING-glish',
      audioRef: null,
    },
    {
      id: 'a_little',
      target: 'A little',
      native: 'Um pouco',
      literal: 'A little',
      emoji: '🤏',
      phonetic: 'uh-LIT-uhl',
      audioRef: null,
    },
    {
      id: 'slowly_please',
      target: 'Slowly, please',
      native: 'Devagar, por favor',
      literal: 'Slowly, please',
      emoji: '🐢',
      phonetic: 'SLOH-lee-PLEEZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Question word "do"',
    explanation: "Pergunta com verbo de ação em inglês precisa de 'Do' (ou 'Does' pra he/she/it). Estrutura: 'Do + you + verb + ...?'. Sem 'Do', a frase vira afirmativa.",
    examples: [
      { target: 'Do you speak English?', native: 'Você fala inglês?' },
      { target: 'Do you understand?',     native: 'Você entende?' },
      { target: 'Do you have time?',      native: 'Você tem tempo?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as frases',
      pairs: [
        { left: 'Do you speak English?', right: 'Você fala inglês?' },
        { left: 'A little',               right: 'Um pouco' },
        { left: 'Slowly, please',         right: 'Devagar, por favor' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Você fala inglês?',
      correct: ['Do you speak English?', 'do you speak English?', 'Do you speak English', 'do you speak english?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a pergunta',
      sentence: '____ you speak English?',
      options: ['Do', 'Are', 'Is'],
      correct: 'Do',
      context: "Perguntas com verbo de ação começam com 'Do' em inglês.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase — pedindo pra falar devagar',
      words: ['please', 'slowly', 'Speak'],
      correct: ['Speak', 'slowly', 'please'],
      translation: 'Fale devagar, por favor',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — você fala só um pouco',
      prompt: 'Um pouco',
      correct: ['A little', 'a little', 'A little.', 'A little bit', 'a little bit'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Devagar, por favor',
      correct: ['Slowly, please', 'Slowly please', 'slowly, please', 'Slowly, please.'],
    },
  ],

  rwenDialogue: {
    intro: "Você tá em Foz do Iguaçu. Um turista parece confuso, olhando o mapa. Pode estar precisando de algo — pergunta se ele fala inglês.",
    lines: [
      { speaker: 'npc', target: "Hello! Excuse me...", native: 'Olá! Com licença...' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hi! Do you speak English?',  native: 'Oi! Você fala inglês?',     correct: true,  feedback: 'Mandou bem — saudou e abriu o canal de comunicação.' },
          { target: 'English?',                    native: 'Inglês?',                     correct: false, feedback: 'Curto demais — fala a pergunta completa.' },
          { target: 'I speak English.',            native: 'Eu falo inglês.',             correct: false, feedback: 'Você respondeu sem perguntar — pergunte primeiro.' },
        ],
      },
      { speaker: 'npc', target: "A little. Slowly, please?", native: 'Um pouco. Devagar, por favor?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você ainda aprendeu uma lição: com quem fala pouco inglês, fale devagar.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Do you speak English? (em inglês)', correct: ['Do you speak English?', 'Do you speak English', 'do you speak English?', 'do you speak english?'] },
      { prompt: 'Slowly, please (em inglês)',          correct: ['Slowly, please', 'Slowly please', 'slowly, please', 'Slowly, please.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pergunta hoje — em voz alta, mesmo que seja pro espelho — 'Do you speak English?'. Sente a entonação subindo no fim.",
    rwenSignoff: "Essa pergunta abre muitas portas. Até logo.",
  },

  phase8: {
    scenario: "You're standing near the bridge at Foz do Iguaçu. A backpacker approaches you with a confused look — they want to ask something but you're not sure what language they speak. Open the conversation by checking if they speak English.",
    rwenRole: "Hannah, 22, a German backpacker on her gap year. Speaks decent English but slowly and with hesitations. Friendly, curious about Brazil.",
    successCriteria: "User opens with 'Do you speak English?', responds to her 'A little', and adapts by saying 'Slowly, please' or repeating things simply. Doesn't switch to fast English when she struggles.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
