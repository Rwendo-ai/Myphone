import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-asking-them',
  module: 3,
  lesson: 9,
  title: 'Asking about them — Perguntando sobre eles',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Conversa boa precisa de troca — não só você falando. Hoje aprendemos a devolver perguntas: 'Tell me about yourself', 'What's your story?', 'Where did you grow up?'. Mostra que você tá interessado.",
    culturalNote: "Brasileiro tem facilidade em puxar papo — 'Cê é daqui mesmo?'. Em inglês as perguntas são mais formais ('Tell me about yourself' funciona em ambiente profissional). 'What's your story?' fica casual, entre amigos. Saber escolher o registro mostra repertório.",
  },

  chunks: [
    {
      id: 'tell_me_about_yourself',
      target: 'Tell me about yourself',
      native: 'Me conta sobre você',
      literal: 'Tell me about yourself',
      emoji: '👂',
      phonetic: 'tel-mee-uh-BOWT-yor-self',
      audioRef: null,
    },
    {
      id: 'whats_your_story',
      target: "What's your story?",
      native: 'Qual é a sua?',
      literal: 'What is your story?',
      emoji: '📖',
      phonetic: 'wuts-yor-STOR-ee',
      audioRef: null,
    },
    {
      id: 'where_did_you_grow_up',
      target: 'Where did you grow up?',
      native: 'Onde você cresceu?',
      literal: 'Where did you grow up?',
      emoji: '🏡',
      phonetic: 'wair-did-yoo-GROH-up',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Open questions',
    explanation: "Perguntas abertas começam com 'What', 'Where', 'How', 'Tell me ...'. Trazem respostas longas — não 'sim/não'. 'Where did you grow up?' tem 'did' (passado) antes do 'you'. 'Tell me about yourself' é convite aberto — sem pergunta direta.",
    examples: [
      { target: 'Tell me about yourself',     native: 'Me conta sobre você' },
      { target: "What's your story?",          native: 'Qual é a sua?' },
      { target: 'Where did you grow up?',      native: 'Onde você cresceu?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as perguntas',
      pairs: [
        { left: 'Tell me about yourself', right: 'Me conta sobre você' },
        { left: "What's your story?",      right: 'Qual é a sua?' },
        { left: 'Where did you grow up?',  right: 'Onde você cresceu?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Me conta sobre você',
      correct: ['Tell me about yourself', 'tell me about yourself', 'Tell me about yourself.', 'tell me about yourself.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Onde você cresceu?',
      correct: ['Where did you grow up?', 'where did you grow up?', 'Where did you grow up'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete a pergunta no passado",
      sentence: "Where ____ you grow up?",
      options: ['did', 'do', 'are'],
      correct: 'did',
      context: "Pergunta no passado em inglês usa 'did'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a pergunta',
      words: ['Tell', 'me', 'about', 'yourself'],
      correct: ['Tell', 'me', 'about', 'yourself'],
      translation: 'Me conta sobre você',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a pergunta de história',
      words: ["What's", 'your', 'story'],
      correct: ["What's", 'your', 'story'],
      translation: 'Qual é a sua?',
    },
  ],

  rwenDialogue: {
    intro: "Você acabou de ouvir a história de um expat americano em SP. É a sua vez de devolver — mas você quer puxar mais dele.",
    lines: [
      { speaker: 'npc', target: "So that's me. And you?", native: 'Então essa é a minha. E você?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Tell me a bit more about yourself first — where did you grow up?", native: 'Me conta um pouco mais sobre você primeiro — onde você cresceu?', correct: true,  feedback: "Mandou bem — devolveu a vez e fez pergunta aberta." },
          { target: "Me too.",                                                            native: 'Eu também.',                                                          correct: false, feedback: "Curto demais — sem pergunta a conversa morre." },
          { target: "Where you grow up?",                                                 native: 'Onde você cresceu?',                                                  correct: false, feedback: "Faltou o 'did' — é 'Where did you grow up?'." },
        ],
      },
      { speaker: 'npc', target: "Oh — I grew up in Boston, actually.", native: 'Ah — cresci em Boston, na verdade.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Conversa de mão dupla — você falou, devolveu a pergunta. Educação universal.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'Me conta sobre você (em inglês)',         correct: ['Tell me about yourself', 'tell me about yourself', 'Tell me about yourself.', 'tell me about yourself.'] },
      { prompt: 'Onde você cresceu? (em inglês)',         correct: ['Where did you grow up?', 'where did you grow up?', 'Where did you grow up'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Na próxima conversa, tente fazer duas perguntas abertas em inglês — 'Tell me about yourself' ou 'Where did you grow up?'. Confira se você usou o 'did' nas perguntas no passado.",
    rwenSignoff: "Boa. Até amanhã.",
  },

  phase8: {
    scenario: "You've just exchanged hellos with someone new at a community event in São Paulo. They've already shared a bit about themselves — now it's time to turn the small talk back to them.",
    rwenRole: "Sipho, 30, a friend-of-a-friend from Cape Town who's just told you about their job. Open, willing to share more if asked.",
    successCriteria: "User asks at least two open questions ('Tell me about ...', 'Where did you ...?', 'What's your ...?'), uses 'did' correctly in past-tense questions, and reacts to one of Sipho's answers before asking the next.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
