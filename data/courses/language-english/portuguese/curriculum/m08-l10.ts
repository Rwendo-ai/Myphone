import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-conversation',
  module: 8,
  lesson: 10,
  title: 'A day-in-life conversation — My day in English',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Capstone do Módulo 8 — verbos juntos: be, have, do, make, go, come, want, need, passado e futuro. Um dia inteiro em inglês.",
    culturalNote: "Esses verbos são 80% do que você fala todo dia. Quem domina os irregulares (was, went, saw, had, made, came, did) e o futuro (will, going to) já passou de A1 sólido — agora abre conversa em qualquer ambiente.",
  },

  chunks: [
    {
      id: 'review_morning_routine',
      target: 'I wake up at 6, take a shower, and have breakfast.',
      native: 'Acordo às 6, tomo banho e tomo café.',
      literal: 'I wake up at 6, take a shower, and have breakfast',
      emoji: '🌅',
      phonetic: 'ay-WAYK-UP-at-SIX',
      audioRef: null,
    },
    {
      id: 'review_workday',
      target: 'I go to work, have meetings, and make plans.',
      native: 'Vou pro trabalho, tenho reuniões e faço planos.',
      literal: 'I go to work, have meetings, and make plans',
      emoji: '💼',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'review_past_future',
      target: 'Yesterday I went home early; tomorrow I will work late.',
      native: 'Ontem voltei cedo; amanhã trabalho até tarde.',
      literal: 'Yesterday I went home early; tomorrow I will work late',
      emoji: '🔄',
      phonetic: 'YES-ter-day-ay-WENT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb fluency',
    explanation: "Um dia em inglês precisa: (1) Presente — 'I wake up', 'I go'. (2) Want/need — 'I'd like', 'I need'. (3) Passado — 'Yesterday I went/saw/had'. (4) Futuro — 'Tomorrow I will' / 'I'm going to'.",
    examples: [
      { target: 'I wake up at 6 and go to work at 8.',                 native: 'Acordo às 6, vou pro trabalho às 8.' },
      { target: 'Yesterday I had a long meeting.',                     native: 'Ontem tive uma reunião longa.' },
      { target: "Tomorrow I'm going to call my brother.",              native: 'Amanhã vou ligar pro meu irmão.' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Acordo às 6, tomo banho e tomo café.',
      correct: ['I wake up at 6, take a shower, and have breakfast.', 'I wake up at 6, take a shower and have breakfast.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Tempos misturados',
      sentence: 'Yesterday I _____ home early. Tomorrow I _____ work late.',
      options: ['went / will', 'go / will', 'went / would'],
      correct: 'went / will',
      context: 'Yesterday → went (passado). Tomorrow → will (futuro).',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Ontem tive uma reunião longa.',
      correct: ['Yesterday I had a long meeting.', 'I had a long meeting yesterday.'],
    },
    {
      type: 'build_sentence',
      instruction: "Monte: \"I'm going to call my brother\"",
      words: ['brother.', 'going', 'call', 'my', "I'm", 'to'],
      correct: ["I'm", 'going', 'to', 'call', 'my', 'brother.'],
      translation: 'Vou ligar pro meu irmão',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — passado e futuro',
      prompt: 'Ontem fui à praia; amanhã vou trabalhar.',
      correct: ['Yesterday I went to the beach; tomorrow I will work.', "Yesterday I went to the beach; tomorrow I'm going to work."],
    },
    {
      type: 'multiple_choice',
      instruction: 'A2-level fluência',
      question: 'Qual frase é mais natural?',
      options: [
        { text: "I had a busy day yesterday — three meetings and lots of emails.", correct: true },
        { text: "Yesterday I have busy day three meeting many email.", correct: false },
        { text: "Ontem tive dia cheio.", correct: false },
      ],
      explanation: 'Passado fluido com had + detail.',
    },
  ],

  rwenDialogue: {
    intro: 'Capstone — você descreve seu dia inteiro em inglês.',
    lines: [
      {
        speaker: 'npc',
        target: "Walk me through your typical day.",
        native: 'Me conta como é seu dia típico.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "I wake up at 6 and have coffee. I go to work at 8 and usually have two or three meetings. Yesterday I came home late, but tomorrow I'm going to leave early — I need a break.",
            native: '...',
            correct: true,
            feedback: 'Mandou muito bem — presente, passado, futuro, want/need. Capstone fechado.',
          },
          {
            target: "I wake. I work. I home.",
            native: '...',
            correct: false,
            feedback: 'Sem fluência — adicione tempos verbais.',
          },
          {
            target: "Acordo, vou pro trabalho.",
            native: '...',
            correct: false,
            feedback: 'Em português — traduza.',
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Você fechou o Módulo 8 — verbos cobertos. Próximo: viagens.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Yesterday I went (em inglês)', correct: ['Yesterday I went', 'I went yesterday'] },
      { prompt: "Tomorrow I will (em inglês)", correct: ['Tomorrow I will', "Tomorrow I'll"] },
    ],
  },

  mission: {
    title: 'Missão final do Módulo 8',
    task: "Descreva seu dia ideal em inglês — manhã, tarde, noite — em 5 frases. Inclua passado (ontem) e futuro (amanhã).",
    rwenSignoff: "Você fechou o Módulo 8. Próximo: viagens e direções.",
  },

  phase8: {
    scenario: "Capstone: describing your typical day in English with past, present, and future across morning, work, and evening.",
    rwenRole: "Engaged English-speaking listener.",
    successCriteria: "User uses simple present, past (regular and irregular), and future (will or going to) in one flowing exchange.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
