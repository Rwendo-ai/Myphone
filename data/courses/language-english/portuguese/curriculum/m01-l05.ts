import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-good-evening',
  module: 1,
  lesson: 5,
  title: 'Good evening — Boa noite',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Boa noite! Cuidado: em inglês 'Good evening' (boa noite ao chegar) e 'Good night' (boa noite ao dormir) são duas coisas diferentes. Português junta tudo num 'Boa noite' só.",
    culturalNote: "No Brasil 'Boa noite' serve pra chegar no jantar E pra ir dormir — o contexto resolve. Em inglês, se você fala 'Good night' chegando num restaurante, vão achar que você já vai embora pra cama. Use 'Good evening' pra cumprimentar; 'Good night' só pra fechar a noite.",
  },

  chunks: [
    {
      id: 'good_evening',
      target: 'Good evening',
      native: 'Boa noite (chegando)',
      literal: undefined,
      emoji: '🌆',
      phonetic: 'good-EEV-ning',
      audioRef: null,
    },
    {
      id: 'how_was_your_day',
      target: 'How was your day?',
      native: 'Como foi seu dia?',
      literal: 'How was your day? (past)',
      emoji: '🤔',
      phonetic: 'how-wuz-yor-DAY',
      audioRef: null,
    },
    {
      id: 'it_was_good',
      target: 'It was good',
      native: 'Foi bom',
      literal: 'It was good (past)',
      emoji: '✨',
      phonetic: 'it-wuz-GOOD',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past tense in greetings',
    explanation: "À noite, a gente fala do dia que já passou — então usamos passado: 'How was your day?' ('Como foi seu dia?'). A resposta 'It was good' (foi bom) também tá no passado. Diferente de 'How's your day?' (lição anterior) que é presente.",
    examples: [
      { target: 'Good evening',     native: 'Boa noite (chegando)' },
      { target: 'How was your day?', native: 'Como foi seu dia?' },
      { target: 'It was good',      native: 'Foi bom' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as palavras',
      pairs: [
        { left: 'Good evening',     right: 'Boa noite (chegando)' },
        { left: 'How was your day?', right: 'Como foi seu dia?' },
        { left: 'It was good',      right: 'Foi bom' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — você chega no jantar',
      prompt: 'Boa noite',
      correct: ['Good evening', 'good evening', 'Good evening.', 'good evening.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — responda sobre seu dia',
      prompt: 'Foi bom',
      correct: ['It was good', 'it was good', 'It was good.', 'it was good.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete com o tempo verbal certo',
      sentence: 'How ____ your day?',
      options: ['was', 'is', 'are'],
      correct: 'was',
      context: '19h — falando do dia que já passou.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a resposta',
      words: ['It', 'was', 'a', 'good', 'day'],
      correct: ['It', 'was', 'a', 'good', 'day'],
      translation: 'Foi um dia bom',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Como foi seu dia?',
      correct: ['How was your day?', 'how was your day?', 'How was your day', 'how was your day'],
    },
  ],

  rwenDialogue: {
    intro: 'São 19h. Videochamada com sua tia que mora em Boston há 30 anos — ela já fala mais inglês que português no jantar.',
    lines: [
      { speaker: 'npc', target: 'Good evening! How was your day?', native: 'Boa noite! Como foi seu dia?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good evening. It was good, thanks.", native: 'Boa noite. Foi bom, obrigado.', correct: true,  feedback: "Perfeito — passado certo, tom carinhoso." },
          { target: 'Good morning.',                       native: 'Bom dia.',                       correct: false, feedback: "É noite — 'Good evening' é o certo." },
          { target: "How's your day?",                     native: 'Como tá seu dia? (presente)',    correct: false, feedback: "À noite, a gente fala do dia no passado: 'How was your day?'." },
        ],
      },
      { speaker: 'npc', target: "I'm glad. Let's eat.", native: 'Que bom. Vamos comer.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você usou o passado certinho — sem misturar com o presente.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Good evening (em inglês)', correct: ['Good evening', 'good evening', 'Good evening.', 'good evening.'] },
      { prompt: 'It was good (em inglês)',  correct: ['It was good', 'it was good', 'It was good.', 'it was good.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Esta noite, mesmo que falando português, fala 'Good evening' pra alguém da família ao chegar pro jantar.",
    rwenSignoff: "Boa noite — até amanhã.",
  },

  phase8: {
    scenario: "7pm video dinner with your aunt who's lived in Boston for 30 years and now mostly speaks English at the table. Greet her and chat about your day.",
    rwenRole: "Tia Vimbai, 55, your aunt who emigrated from Belo Horizonte to Boston decades ago. Warm, curious, asks gentle questions in fluent American English.",
    successCriteria: "User opens with 'Good evening' (not 'Good morning' or 'Good night'), uses past tense 'It was good' / 'How was your day?', stays warm-but-respectful.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
