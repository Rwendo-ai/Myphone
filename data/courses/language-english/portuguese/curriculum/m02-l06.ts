import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-yes-no',
  module: 2,
  lesson: 6,
  title: 'Yes & No — Sim e Não',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Olá! Duas palavras simples mas importantíssimas: 'Yes' e 'No'. E quando não tem certeza, 'Maybe'.",
    culturalNote: "No Brasil a gente às vezes diz 'sim' por educação mesmo sem querer compromisso — pra não desagradar. Em inglês isso vira armadilha: 'Yes' é compromisso. Se você não tem certeza, melhor falar 'Maybe' ou 'I'm not sure' — assim você não promete o que não pode entregar.",
  },

  chunks: [
    {
      id: 'yes',
      target: 'Yes',
      native: 'Sim',
      literal: undefined,
      emoji: '✅',
      phonetic: 'YES',
      audioRef: null,
    },
    {
      id: 'no',
      target: 'No',
      native: 'Não',
      literal: undefined,
      emoji: '❌',
      phonetic: 'NOH',
      audioRef: null,
    },
    {
      id: 'maybe',
      target: 'Maybe',
      native: 'Talvez',
      literal: 'Maybe / Perhaps',
      emoji: '🤔',
      phonetic: 'MAY-bee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Affirmation / negation',
    explanation: "Muitas perguntas em inglês se respondem com 'Yes', 'No' ou 'Maybe'. Quando não tem certeza, 'Maybe' é melhor que um 'Yes' inseguro. E o inglês prefere a resposta longa: 'Yes, I do' / 'No, I don't' soa mais natural que só 'Yes'/'No'.",
    examples: [
      { target: 'Yes, I do.',    native: 'Sim, eu falo.' },
      { target: "No, I don't.", native: 'Não, não falo.' },
      { target: "Maybe later.",   native: 'Talvez mais tarde.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as palavras',
      pairs: [
        { left: 'Yes',    right: 'Sim' },
        { left: 'No',     right: 'Não' },
        { left: 'Maybe',  right: 'Talvez' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — você não tem certeza',
      prompt: 'Talvez',
      correct: ['Maybe', 'maybe', 'Maybe.', 'Perhaps', 'perhaps'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete: 'Do you speak English?' / '____, I do.'",
      sentence: '____, I do.',
      options: ['Yes', 'No', 'Maybe'],
      correct: 'Yes',
      context: "Resposta longa começa com 'Yes' ou 'No' e segue com 'I do' ou 'I don't'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a recusa educada',
      words: ['No', 'thank', 'you'],
      correct: ['No', 'thank', 'you'],
      translation: 'Não, obrigado',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Sim, eu falo',
      correct: ['Yes, I do', 'Yes, I do.', 'yes, I do', 'Yes I do.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — recuse com educação',
      prompt: 'Não, obrigado',
      correct: ['No, thank you', 'No, thank you.', 'no, thank you', 'No thanks', 'No, thanks'],
    },
  ],

  rwenDialogue: {
    intro: "Um colega bilíngue te ajuda a preencher um formulário em inglês. Ele vai fazer perguntas de sim/não.",
    lines: [
      { speaker: 'npc', target: "Are you over 18?", native: 'Você tem mais de 18 anos?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, I am.',     native: 'Sim, tenho.', correct: true,  feedback: 'Mandou bem — resposta completa, não só "Yes".' },
          { target: 'Maybe.',          native: 'Talvez.',     correct: false, feedback: "'Maybe' não cabe — você sabe sua idade." },
          { target: "I don't know.",  native: 'Não sei.',     correct: false, feedback: 'Fora do contexto — responda com confiança.' },
        ],
      },
      { speaker: 'npc', target: "Great. Do you have a passport?", native: 'Ótimo. Você tem passaporte?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Resposta longa ('Yes, I am') soa mais educada que só 'Yes'.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: 'Yes, I do (em inglês)', correct: ['Yes, I do', 'Yes, I do.', 'yes, I do', 'Yes I do.'] },
      { prompt: 'Maybe (em inglês)',     correct: ['Maybe', 'maybe', 'Maybe.', 'Perhaps', 'perhaps'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Hoje, escute 'Yes', 'No' e 'Maybe' em inglês — em filme, podcast, conversa. Note como entram nas respostas.",
    rwenSignoff: "Duas palavras pra abrir muitas portas. Até logo.",
  },

  phase8: {
    scenario: "A bilingual helper at a federal office is helping you fill out an English-language passport renewal form. They'll ask you a series of yes/no questions about your details. Answer accurately.",
    rwenRole: "Mr. Banda, 50, friendly civil servant. Methodical, asks each form question clearly in English. Will follow up if your answer is unclear.",
    successCriteria: "User answers with full forms ('Yes, I am' / 'No, I'm not' / 'Yes, I do') instead of bare 'yes/no'. Uses 'Maybe' or 'I'm not sure' when genuinely unsure rather than guessing.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
