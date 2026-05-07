import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-children',
  module: 5,
  lesson: 3,
  title: 'Sons & Daughters — Filhos e Filhas',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Filhos em inglês: 'son' (menino), 'daughter' (menina), 'children' (geral). Lembrete do Módulo 4: 'children' é plural irregular — não é 'childs'.",
    culturalNote: "Em português 'filho/filha' já distingue gênero, e 'filhos' funciona pra mistos. Em inglês 'son' e 'daughter' são distintos; 'children' é neutro. Não tente colar gênero — 'son' já é menino, 'daughter' já é menina.",
  },

  chunks: [
    {
      id: 'son',
      target: 'Son',
      native: 'Filho',
      literal: 'male child',
      emoji: '👦🏾',
      phonetic: 'SUN',
      audioRef: null,
    },
    {
      id: 'daughter',
      target: 'Daughter',
      native: 'Filha',
      literal: 'female child',
      emoji: '👧🏾',
      phonetic: 'DAW-tuh',
      audioRef: null,
    },
    {
      id: 'children',
      target: 'Children',
      native: 'Filhos / Crianças',
      literal: 'irregular plural of "child"',
      emoji: '🧒🏾',
      phonetic: 'CHIL-druhn',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Naming kids — son / daughter / children',
    explanation: "'Son' = filho. 'Daughter' = filha. 'Child' = criança/filho neutro. Plural 'children' (irregular). Pra falar quantos filhos: 'I have [number] children'.",
    examples: [
      { target: 'I have one son.',                native: 'Tenho um filho.' },
      { target: 'I have two daughters.',          native: 'Tenho duas filhas.' },
      { target: 'I have three children.',         native: 'Tenho três filhos.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as palavras',
      pairs: [
        { left: 'Son',       right: 'Filho' },
        { left: 'Daughter',  right: 'Filha' },
        { left: 'Children',  right: 'Filhos' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — preenchendo formulário escolar',
      prompt: 'Tenho dois filhos — um filho e uma filha.',
      correct: ['I have two children — one son and one daughter.', 'I have two children, one son and one daughter.', 'I have two children: one son and one daughter.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Meu filho tem cinco anos.',
      correct: ['My son is five years old.', 'My son is 5 years old.', 'My son is five.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "My daughter goes to school in São Paulo"',
      words: ['goes', 'My', 'school', 'daughter', 'in', 'to', 'São Paulo.'],
      correct: ['My', 'daughter', 'goes', 'to', 'school', 'in', 'São Paulo.'],
      translation: 'Minha filha estuda em São Paulo',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — plural irregular',
      sentence: 'I have three _____ — two boys and one girl.',
      options: ['childs', 'children', 'childrens'],
      correct: 'children',
      context: "'Children' já é plural — 'childs'/'childrens' não existem.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Formulário escolar',
      question: 'Tenho um filho e uma filha. Qual resposta certa?',
      options: [
        { text: "Two — one son and one daughter.",   correct: true },
        { text: "Two childs.",                          correct: false },
        { text: "Dois filhos.",                          correct: false },
      ],
      explanation: "'Two — one son and one daughter' é claro e correto.",
    },
  ],

  rwenDialogue: {
    intro: 'Você preenche matrícula da sua filha numa escola internacional em SP. A secretária só fala inglês.',
    lines: [
      { speaker: 'npc', target: "How many children do you have, and what are their ages?", native: 'Quantos filhos você tem, e quais as idades?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two children — a son who is seven and a daughter who is four.", native: 'Tenho dois filhos — um menino de sete e uma menina de quatro.', correct: true, feedback: "Mandou bem — 'two children', detalhe completo." },
          { target: "I have two childs. Son seven. Daughter four.",                          native: 'Tenho dois filhos. Filho sete. Filha quatro.',                  correct: false, feedback: "'Childs' não existe — é 'children'. E adicione 'who is'." },
          { target: "Two childrens, age seven and four.",                                     native: 'Dois filhos, idade sete e quatro.',                              correct: false, feedback: "'Childrens' também não existe — só 'children'." },
        ],
      },
      { speaker: 'npc', target: "Perfect. What grades are they in?", native: 'Perfeito. Em que séries estão?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Plural irregular passou em formulário oficial.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I have two children (em inglês)', correct: ['I have two children', 'I have two children.', 'i have two children'] },
      { prompt: 'My daughter (em inglês)',          correct: ['My daughter', 'my daughter'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Se tem filhos, escreva em inglês: 'I have [number] children.' Se não, fala dos da família: 'My sister has two children — a son and a daughter.'",
    rwenSignoff: "Amanhã — avós.",
  },

  phase8: {
    scenario: "Filling a school form for your child. The English-speaking administrator asks about family.",
    rwenRole: "Mrs. Banda, friendly registrar. Asks 'How many children?', 'What are their ages?'.",
    successCriteria: "User says 'I have [number] children' (using 'children'), names at least one as 'son' or 'daughter', gives age.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
