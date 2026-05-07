import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-conversation',
  module: 3,
  lesson: 10,
  title: 'Full introduction conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Hoje juntamos tudo do Módulo 3. Apresentação completa em inglês — nome, profissão, família, hobby, idiomas, onde mora, e devolver perguntas. Hora de costurar tudo numa só conversa.",
    culturalNote: "Em inglês, a primeira conversa típica dura uns 2-3 minutos — nem curta demais, nem longa. O segredo é a troca: você fala, devolve, escuta. O calor brasileiro pode aparecer no sorriso e no tom; a estrutura, em inglês, é mais cadenciada.",
  },

  chunks: [
    {
      id: 'pleasure_to_meet_you',
      target: 'Pleasure to meet you',
      native: 'Prazer em conhecer',
      literal: 'Pleasure to meet you',
      emoji: '🤝',
      phonetic: 'PLEH-zhur-too-MEET-yoo',
      audioRef: null,
    },
    {
      id: 'and_yourself',
      target: 'And yourself?',
      native: 'E você?',
      literal: 'And yourself?',
      emoji: '↩️',
      phonetic: 'and-yor-SELF',
      audioRef: null,
    },
    {
      id: 'lets_keep_in_touch',
      target: "Let's keep in touch",
      native: 'Vamos manter contato',
      literal: "Let us keep in touch",
      emoji: '📱',
      phonetic: 'lets-keep-in-TUTCH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Two-way introduction (review + glue)',
    explanation: "Fluxo recomendado: (1) saudação + nome — 'Hi, I'm ___.' (2) profissão ou origem — 'I'm a ___ from ___.' (3) devolver — 'And yourself?' (4) cordialidade — 'Pleasure to meet you'. (5) se vão se ver de novo — 'Let's keep in touch'.",
    examples: [
      { target: "Hi, I'm Maria. I'm a teacher from Recife.",  native: 'Oi, sou Maria. Sou professora de Recife.' },
      { target: 'And yourself?',                                  native: 'E você?' },
      { target: "Pleasure to meet you. Let's keep in touch.",    native: 'Prazer em conhecer. Vamos manter contato.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os blocos da conversa',
      pairs: [
        { left: "I'm a teacher",         right: 'Sou professora' },
        { left: 'And yourself?',         right: 'E você?' },
        { left: 'Pleasure to meet you',  right: 'Prazer em conhecer' },
        { left: "Let's keep in touch",    right: 'Vamos manter contato' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Prazer em conhecer',
      correct: ['Pleasure to meet you', 'pleasure to meet you', 'Nice to meet you', 'nice to meet you'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'E você?',
      correct: ['And yourself?', 'and yourself?', 'And you?', 'and you?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a devolução',
      sentence: "I'm a teacher. And ____?",
      options: ['yourself', 'you', 'your'],
      correct: 'yourself',
      context: "'And yourself?' soa mais educado que 'And you?' em inglês formal.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a apresentação',
      words: ["I'm", 'Maria', 'from', 'Recife'],
      correct: ["I'm", 'Maria', 'from', 'Recife'],
      translation: 'Sou Maria de Recife',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte o fechamento',
      words: ["Let's", 'keep', 'in', 'touch'],
      correct: ["Let's", 'keep', 'in', 'touch'],
      translation: 'Vamos manter contato',
    },
  ],

  rwenDialogue: {
    intro: "Networking de sexta à noite num hotel em São Paulo. Alguém novo se aproxima — fala inglês. Conversa completa de primeira apresentação.",
    lines: [
      { speaker: 'npc', target: "Hi! I don't think we've met. I'm Sarah, I work in healthcare.", native: 'Oi! Acho que não nos conhecemos. Sou a Sarah, trabalho com saúde.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi Sarah, I'm Maria. I'm a teacher from Recife. Pleasure to meet you — and yourself, where are you from?", native: 'Oi Sarah, sou a Maria. Sou professora de Recife. Prazer em conhecer — e você, de onde é?', correct: true,  feedback: "Mandou bem — nome, profissão, origem, cordialidade, e devolveu pergunta. Conversa completa." },
          { target: "Maria. Teacher.",                                                                                          native: 'Maria. Professora.',                                                                       correct: false, feedback: "Curto demais — em networking, frase completa." },
          { target: "Hi, I'm Maria. Pleasure.",                                                                                  native: 'Oi, sou a Maria. Prazer.',                                                                  correct: false, feedback: "Bom começo, mas 'Pleasure' sozinho é truncado — adicione 'to meet you'." },
        ],
      },
      { speaker: 'npc', target: "Oh, I'm originally from Sydney. So — what brings you here tonight?", native: 'Ah, sou de Sydney na verdade. Então — o que te trouxe aqui hoje?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você fechou o Módulo 3 — conversa de mão dupla. Apresentação completa em inglês, com calor brasileiro embutido.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'Prazer em conhecer (em inglês)',                  correct: ['Pleasure to meet you', 'pleasure to meet you', 'Nice to meet you', 'nice to meet you'] },
      { prompt: 'E você? (em inglês)',                              correct: ['And yourself?', 'and yourself?', 'And you?', 'and you?'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pratique uma conversa completa em inglês: nome, profissão, origem, cordialidade, e pergunta de volta. Mesmo no espelho, faz em 60 segundos.",
    rwenSignoff: "Você fechou o Módulo 3. Tá começando a soar como falante de inglês. Te vejo no Módulo 4.",
  },

  phase8: {
    scenario: "It's the integration capstone. You're at a Friday-evening networking mixer at a São Paulo hotel. You walk up to someone you've never met and the goal is to have a full first-meeting introduction in English — name, work, origin, a bit of personality, and a question back.",
    rwenRole: "Daniel, 38, a regional sales lead visiting from Buenos Aires for the week. Confident, asks two follow-ups, and tries to find common ground.",
    successCriteria: "User opens with name + role/origin in one fluent sentence, exchanges 'Pleasure to meet you' or equivalent, asks at least one open question back ('And yourself?' / 'Where are you from?'), and sustains the exchange for at least 4 turns without dropping the verb 'am' or the article 'a'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
