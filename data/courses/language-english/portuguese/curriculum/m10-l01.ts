import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-happy-sad',
  module: 10,
  lesson: 1,
  title: 'Happy & Sad — Feliz e triste',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Emoções em inglês são diretas: 'I'm happy', 'I'm sad'. E 'It made me feel ___' pra contar como algo te afetou.",
    culturalNote: "Brasileiro fala de emoção facilmente, mas pode parecer dramático em inglês: 'I died of happiness' não rola ao pé da letra. Em inglês ficam mais contidos: 'I was really happy' / 'It made me feel sad'. Ainda dá pra carregar afeto no tom de voz.",
  },
  crisisHandoff: true,

  chunks: [
    {
      id: 'im_happy',
      target: "I'm happy",
      native: 'Estou feliz',
      literal: 'I-am happy',
      emoji: '😊',
      phonetic: 'aym-HAP-ee',
      audioRef: null,
    },
    {
      id: 'im_sad',
      target: "I'm sad",
      native: 'Estou triste',
      literal: 'I-am sad',
      emoji: '😔',
      phonetic: 'aym-SAD',
      audioRef: null,
    },
    {
      id: 'made_me_feel',
      target: 'It made me feel...',
      native: 'Me fez sentir...',
      literal: 'it-made me feel',
      emoji: '💭',
      phonetic: 'it-MAYD-mee-FEEL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Emotions — direct adjectives',
    explanation: "'I'm + adjetivo': happy, sad, tired, excited, nervous, calm. 'It made me feel ___' pra contar causa-efeito.",
    examples: [
      { target: "I'm really happy today.",         native: 'Estou muito feliz hoje.' },
      { target: "I'm sad about the news.",          native: 'Estou triste com a notícia.' },
      { target: 'It made me feel calm.',             native: 'Me fez sentir calmo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine emoções',
      pairs: [
        { left: 'Happy', right: 'Feliz' },
        { left: 'Sad', right: 'Triste' },
        { left: 'Excited', right: 'Animado' },
        { left: 'Tired', right: 'Cansado' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Estou triste hoje.',
      correct: ["I'm sad today.", 'I am sad today.', "i'm sad today."],
    },
    {
      type: 'fill_blank',
      instruction: 'Causa-efeito',
      sentence: 'It _____ me feel happy.',
      options: ['made', 'do', 'is'],
      correct: 'made',
      context: '"It made me feel ___" usa make no passado.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I\'m really happy today"',
      words: ['today.', 'happy', 'really', "I'm"],
      correct: ["I'm", 'really', 'happy', 'today.'],
      translation: 'Estou muito feliz hoje',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Me fez sentir calmo.',
      correct: ['It made me feel calm.', 'It made me feel calm'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Saudade',
      question: 'Saudade não tem tradução exata. Como expressar?',
      options: [
        { text: "I miss you — there's a Portuguese word, 'saudade', that captures it.", correct: true },
        { text: "I have saudade.", correct: false },
        { text: "Saudade is feel.", correct: false },
      ],
      explanation: 'Use "miss" e explique a palavra original.',
    },
  ],

  rwenDialogue: {
    intro: 'Conversa íntima com amiga inglesa sobre como você tem se sentido.',
    lines: [
      { speaker: 'npc', target: "How have you been, really?", native: 'Como você tem estado, de verdade?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Mostly happy, but a bit tired. Work has been stressful — it made me feel anxious last week.", native: 'Mais feliz, mas um pouco cansada. O trabalho tava estressante — me deixou ansiosa semana passada.', correct: true, feedback: 'Mandou bem — emoções com nuance.' },
          { target: "Happy. Tired.", native: '...', correct: false, feedback: 'Adicione contexto.' },
          { target: "Tô bem.", native: '...', correct: false, feedback: 'Em português.' },
        ],
      },
      { speaker: 'rwen', rwenLine: 'Mandou bem!', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: "I'm happy (em inglês)", correct: ["I'm happy", 'I am happy', "i'm happy"] },
      { prompt: 'It made me feel sad (em inglês)', correct: ['It made me feel sad', 'It made me feel sad.'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Escreva em inglês 3 emoções que você sentiu essa semana e o que causou cada uma.",
    rwenSignoff: "Amanhã — raiva e frustração.",
  },

  phase8: {
    scenario: "Honest conversation with a close English-speaking friend about how you've been feeling lately.",
    rwenRole: "Caring friend who listens without judgement.",
    successCriteria: "User uses 'I'm + emotion' twice and 'It made me feel ___' once with context.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
