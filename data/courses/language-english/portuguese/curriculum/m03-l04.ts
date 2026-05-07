import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-family-status',
  module: 3,
  lesson: 4,
  title: 'Married? Children? — Casado? Filhos?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "No Brasil, perguntar se a pessoa é casada ou tem filhos é normal — vovó faz isso na primeira meia hora. Em inglês perguntam menos, mas você precisa saber responder em formulário, em entrevista, com gente mais velha.",
    culturalNote: "'Married' em inglês não tem gênero — serve pra marido e esposa. E olha o erro armadilha: 'I am married' (estou casado) — NÃO 'I have married'. 'Have married' não existe. Pra filhos, 'I have two children' — aí sim usa 'have', porque você possui filhos. 'Single' é solteiro — sem peso negativo.",
  },

  chunks: [
    {
      id: 'are_you_married',
      target: 'Are you married?',
      native: 'Você é casado(a)?',
      literal: 'Are you married?',
      emoji: '💍',
      phonetic: 'ar-yoo-MA-reed',
      audioRef: null,
    },
    {
      id: 'i_have_two_children',
      target: 'I have two children',
      native: 'Tenho dois filhos',
      literal: 'I have two children',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ay-HAV-too-CHIL-dren',
      audioRef: null,
    },
    {
      id: 'im_single',
      target: "I'm single",
      native: 'Sou solteiro(a)',
      literal: 'I-am single',
      emoji: '🧍',
      phonetic: 'aym-SING-gul',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family status questions',
    explanation: "Perguntas de família usam 'Are you ...?' ou 'Do you have ...?'. Respostas: 'Yes, I am' / 'No, I'm not' (pra ser/estado), 'Yes, I do' / 'No, I don't' (pra ter). Cuidado: casado é estado, então 'I AM married'. Filhos é posse, então 'I HAVE children'.",
    examples: [
      { target: 'Are you married?',         native: 'Você é casado?' },
      { target: 'Do you have children?',     native: 'Você tem filhos?' },
      { target: "I'm single",                 native: 'Sou solteiro(a)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine pergunta e resposta',
      pairs: [
        { left: 'Are you married?',     right: 'Você é casado?' },
        { left: 'I have two children',  right: 'Tenho dois filhos' },
        { left: "I'm single",            right: 'Sou solteiro' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Tenho dois filhos',
      correct: ['I have two children', 'i have two children', 'I have 2 children'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Sou solteiro',
      correct: ["I'm single", "I am single", "i'm single", "i am single"],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a pergunta',
      sentence: "____ you married?",
      options: ['Are', 'Is', 'Do'],
      correct: 'Are',
      context: 'Você está perguntando sobre estado civil.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a frase de família',
      words: ['I', 'have', 'two', 'children'],
      correct: ['I', 'have', 'two', 'children'],
      translation: 'Tenho dois filhos',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a pergunta',
      words: ['Are', 'you', 'married'],
      correct: ['Are', 'you', 'married'],
      translation: 'Você é casado?',
    },
  ],

  rwenDialogue: {
    intro: "Vizinha americana mais velha que mudou pro seu prédio em SP — quer puxar conversa, faz perguntas sobre família.",
    lines: [
      { speaker: 'npc', target: "So, are you married? Any children?", native: 'Então, você é casada? Tem filhos?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm married, and I have two children.", native: 'Sou casada e tenho dois filhos.', correct: true,  feedback: "Mandou bem — duas perguntas, duas respostas, tudo redondo." },
          { target: "Yes, two.",                              native: 'Sim, dois.',                       correct: false, feedback: "Curto demais — adicione frase completa." },
          { target: "I have married.",                        native: 'Eu casei.',                         correct: false, feedback: "Em inglês: 'I'm married' (sou casada). 'I have married' não existe." },
        ],
      },
      { speaker: 'npc', target: "How lovely. How old are they?", native: 'Que lindo. Quantos anos eles têm?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você não caiu no 'I have married' — esse é o erro clássico do BR. Mantém o 'I am' pra estado.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'Você é casado? (em inglês)',     correct: ['Are you married?', 'are you married?', 'Are you married'] },
      { prompt: 'Tenho dois filhos (em inglês)',   correct: ['I have two children', 'i have two children', 'I have 2 children'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Hoje, escreva duas frases em inglês sobre sua família: estado civil ('I'm single' / 'I'm married') e filhos ('I have ___ children' / 'I don't have children yet').",
    rwenSignoff: "Bom trabalho. Até amanhã.",
  },

  phase8: {
    scenario: "You're chatting at the building elevator with an elderly English-speaking neighbour who just moved in. They're warm, curious, and start asking polite family questions.",
    rwenRole: "Mrs. Davies, 70, a retired teacher originally from Sydney. Polite, asks gently about family, follows up with one detail.",
    successCriteria: "User answers truthfully (or with a chosen safe answer) about marital status using 'I'm married/single' (not 'I have married'), and gives at least one detail about children or family.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
