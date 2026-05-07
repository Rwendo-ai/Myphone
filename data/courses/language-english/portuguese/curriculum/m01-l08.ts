import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-how-are-you-formal',
  module: 1,
  lesson: 8,
  title: 'Polite "How are you?" forms',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Em inglês existe um registro formal pra reuniões e entrevistas. Em vez de 'How are you?', você usa 'How do you do?'. E em vez de 'Nice to meet you', usa 'Pleased to meet you'. Soa um pouco British, mas funciona.",
    culturalNote: "No Brasil a gente costuma misturar formalidade com afeto — 'Como vai o senhor?' soa formal mas ainda quente. Em inglês formal é mais frio na superfície: 'How do you do?' não pede resposta de verdade, é praticamente um cumprimento ritual. Não é distância — é etiqueta.",
  },

  chunks: [
    {
      id: 'how_do_you_do',
      target: 'How do you do?',
      native: 'Como vai o senhor / a senhora?',
      literal: 'How do you do?',
      emoji: '🎩',
      phonetic: 'how-doo-yoo-DOO',
      audioRef: null,
    },
    {
      id: 'pleased_to_meet_you',
      target: 'Pleased to meet you',
      native: 'É um prazer conhecê-lo(a)',
      literal: 'Pleased to meet you',
      emoji: '🤝',
      phonetic: 'PLEEZD-too-MEET-yoo',
      audioRef: null,
    },
    {
      id: 'i_hope_youre_well',
      target: "I hope you're well",
      native: 'Espero que esteja bem',
      literal: 'I hope you are well',
      emoji: '🌟',
      phonetic: 'aye-HOHP-yor-WELL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Formal vs casual',
    explanation: "Casual = 'How are you?' / 'Hi' / 'Nice to meet you'. Formal = 'How do you do?' / 'Pleased to meet you' / 'I hope you're well'. Use formal em entrevista, primeira reunião com cliente importante, ou e-mail profissional. Em e-mails, 'I hope you're well' é quase obrigatório no parágrafo de abertura.",
    examples: [
      { target: 'How do you do?',           native: 'Como vai o senhor?' },
      { target: 'Pleased to meet you',      native: 'É um prazer conhecê-lo' },
      { target: "I hope you're well",       native: 'Espero que esteja bem' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as expressões formais',
      pairs: [
        { left: 'How do you do?',         right: 'Como vai o senhor?' },
        { left: 'Pleased to meet you',    right: 'É um prazer conhecê-lo' },
        { left: "I hope you're well",     right: 'Espero que esteja bem' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês (formal)',
      prompt: 'Como vai o senhor?',
      correct: ['How do you do?', 'how do you do?', 'How do you do', 'how do you do'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — você acabou de conhecer um cliente importante',
      prompt: 'É um prazer conhecê-lo',
      correct: ['Pleased to meet you', 'pleased to meet you', 'Pleased to meet you.', 'pleased to meet you.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a abertura de e-mail formal',
      sentence: "I ____ you're well.",
      options: ['hope', 'know', 'see'],
      correct: 'hope',
      context: 'Linha de abertura de e-mail profissional.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a resposta formal',
      words: ['Pleased', 'to', 'meet', 'you'],
      correct: ['Pleased', 'to', 'meet', 'you'],
      translation: 'É um prazer conhecê-lo',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês (formal)',
      prompt: 'Espero que esteja bem',
      correct: ["I hope you're well", "i hope you're well", "I hope you are well", "i hope you are well"],
    },
  ],

  rwenDialogue: {
    intro: "Entrevista pro cargo de gerente numa multinacional na Faria Lima. O diretor da matriz em Londres entra na sala.",
    lines: [
      { speaker: 'npc', target: "Good morning. How do you do?", native: 'Bom dia. Como vai o senhor?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "How do you do? Pleased to meet you.", native: 'Como vai? É um prazer conhecê-lo.', correct: true,  feedback: "Mandou bem — registro formal mantido, devolveu a pergunta com elegância." },
          { target: "Hi! What's up?",                        native: 'Oi! E aí?',                          correct: false, feedback: "Casual demais pra entrevista — usa o registro formal." },
          { target: "How are you?",                          native: 'Como você está?',                    correct: false, feedback: "Não tá errado, mas em entrevista de alto nível 'How do you do?' soa mais polido." },
        ],
      },
      { speaker: 'npc', target: "Pleased to meet you too. Please have a seat.", native: 'Igualmente. Por favor, sente-se.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você acertou o registro — o entrevistador percebeu que você tem repertório.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: "How do you do? (em inglês, formal)", correct: ['How do you do?', 'how do you do?', 'How do you do', 'how do you do'] },
      { prompt: "Pleased to meet you (em inglês)",     correct: ['Pleased to meet you', 'pleased to meet you', 'Pleased to meet you.', 'pleased to meet you.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Use 'I hope you're well' num próximo e-mail em inglês — abrindo uma mensagem profissional. É a fórmula mais comum no mundo corporativo.",
    rwenSignoff: "Até amanhã — boa sorte.",
  },

  phase8: {
    scenario: "You're being interviewed for a senior role at a multinational in São Paulo. The hiring director from the London HQ has just walked in and shaken your hand.",
    rwenRole: "Mr Adebayo, 50, the regional director from London. Professional, polite-formal, well-mannered. Has interviewed many candidates and notices register.",
    successCriteria: "User uses formal phrasing: opens with 'How do you do?' or similar, says 'Pleased to meet you' (not 'Nice to meet you'), and avoids casual phrases like 'Hi' or 'What's up'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
