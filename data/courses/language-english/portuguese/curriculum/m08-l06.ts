import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-work-school',
  module: 8,
  lesson: 6,
  title: 'Work & school — My day',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Trabalho e estudo: 'I go to work', 'I study English', 'I have a meeting'. Cuidado com os artigos.",
    culturalNote: "Em inglês 'go to work' / 'go to school' / 'go to church' não usam artigo — são instituições. Mas 'go to THE office' precisa de 'the'. E 'I have a meeting' precisa de 'a'.",
  },

  chunks: [
    {
      id: 'i_go_to_work',
      target: 'I go to work.',
      native: 'Vou pro trabalho.',
      literal: 'I go to work',
      emoji: '💼',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'i_study_english',
      target: 'I study English.',
      native: 'Eu estudo inglês.',
      literal: 'I study English',
      emoji: '📖',
      phonetic: 'ay-STUH-dee-ING-glish',
      audioRef: null,
    },
    {
      id: 'i_have_a_meeting',
      target: 'I have a meeting.',
      native: 'Tenho uma reunião.',
      literal: 'I have a meeting',
      emoji: '👥',
      phonetic: 'ay-HAV-uh-MEE-ting',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Workday verbs',
    explanation: "Go to + work/school (sem artigo). Study + matéria (English, maths). Have + a meeting / a call / lunch.",
    examples: [
      { target: 'I go to work at 8.',           native: 'Vou pro trabalho às 8.' },
      { target: 'I study English at night.',    native: 'Estudo inglês à noite.' },
      { target: 'I have a meeting at 3 P.M.',   native: 'Tenho reunião às 3.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine verbos de trabalho',
      pairs: [
        { left: 'Go to work', right: 'Ir pro trabalho' },
        { left: 'Study English', right: 'Estudar inglês' },
        { left: 'Have a meeting', right: 'Ter reunião' },
        { left: 'Have lunch', right: 'Almoçar' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estudo inglês todo dia.',
      correct: ['I study English every day.', 'I study English every day'],
    },
    {
      type: 'fill_blank',
      instruction: 'Sem artigo',
      sentence: 'I go to _____ at 8 A.M.',
      options: ['work', 'a work', 'the work'],
      correct: 'work',
      context: '"Go to work" sem artigo.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I have a meeting at 3"',
      words: ['3.', 'meeting', 'have', 'a', 'I', 'at'],
      correct: ['I', 'have', 'a', 'meeting', 'at', '3.'],
      translation: 'Tenho reunião às 3',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Vou pro escritório de manhã.',
      correct: ['I go to the office in the morning.', 'I go to the office in the morning'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Artigos certos',
      question: 'Choose the natural one:',
      options: [
        { text: "I go to work, then I have a meeting at the office.", correct: true },
        { text: "I go to the work, then I have meeting at office.", correct: false },
        { text: "I go work, then I have a meeting at a office.", correct: false },
      ],
      explanation: 'work (sem artigo), a meeting (com a), the office (com the).',
    },
  ],

  rwenDialogue: {
    intro: 'Pequena conversa com colega sobre o dia de trabalho.',
    lines: [
      { speaker: 'npc', target: "Busy day?", native: 'Dia corrido?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — I have three meetings and lunch with a client.", native: 'Sim — tenho três reuniões e almoço com um cliente.', correct: true, feedback: 'Mandou bem.' },
          { target: "Yes meeting three.", native: '...', correct: false, feedback: 'Falta estrutura.' },
          { target: "Sim, três reuniões.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'I go to work (em inglês)', correct: ['I go to work', 'I go to work.'] },
      { prompt: 'I have a meeting (em inglês)', correct: ['I have a meeting', 'I have a meeting.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Descreva seu dia de trabalho/estudo em inglês — três frases.",
    rwenSignoff: "Amanhã — fim do dia.",
  },

  phase8: {
    scenario: "Quick daily exchange about today's work day with English-speaking coworker.",
    rwenRole: "Friendly coworker.",
    successCriteria: "User uses 'go to work', 'have a meeting', and one other workday verb.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
