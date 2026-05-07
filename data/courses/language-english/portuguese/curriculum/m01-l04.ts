import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-good-afternoon',
  module: 1,
  lesson: 4,
  title: 'Good afternoon — Boa tarde',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Boa tarde! Quando dá meio-dia, a saudação em inglês muda — 'Good morning' vira 'Good afternoon'. Igualzinho ao 'Bom dia' que vira 'Boa tarde'.",
    culturalNote: "No Brasil 'Boa tarde' é automático — entra na padaria às 13h, é 'Boa tarde'. Em inglês 'Good afternoon' funciona igual, mas é menos comum que o 'Good morning' — muita gente já vai direto pro 'Hi'/'Hello' depois do almoço.",
  },

  chunks: [
    {
      id: 'good_afternoon',
      target: 'Good afternoon',
      native: 'Boa tarde',
      literal: undefined,
      emoji: '☀️',
      phonetic: 'good-af-tuh-NOON',
      audioRef: null,
    },
    {
      id: 'hows_your_day',
      target: "How's your day?",
      native: 'Como tá seu dia?',
      literal: 'How is your day?',
      emoji: '🙂',
      phonetic: 'howz-yor-DAY',
      audioRef: null,
    },
    {
      id: 'going_well',
      target: 'Going well',
      native: 'Indo bem',
      literal: 'It-is going well',
      emoji: '👍',
      phonetic: 'GO-ing-WELL',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-of-day shifts',
    explanation: "Em inglês 'Good morning' acaba ao meio-dia. Entre 12h e 17h-18h é 'Good afternoon'. A resposta 'Going well' (estar indo bem) usa a forma contínua — coisa que o português não exige tanto: a gente diz 'Tá indo' sem o verbo de ligação.",
    examples: [
      { target: 'Good afternoon',  native: 'Boa tarde' },
      { target: "How's your day?", native: 'Como tá seu dia?' },
      { target: "It's going well", native: 'Tá indo bem' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine as palavras',
      pairs: [
        { left: 'Good afternoon',  right: 'Boa tarde' },
        { left: "How's your day?", right: 'Como tá seu dia?' },
        { left: 'Going well',      right: 'Indo bem' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Boa tarde',
      correct: ['Good afternoon', 'good afternoon', 'Good afternoon.', 'good afternoon.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Como tá seu dia?',
      correct: ["How's your day?", "how's your day?", "How is your day?", "how is your day?"],
    },
    {
      type: 'fill_blank',
      instruction: 'Escolha a saudação certa pras 14h',
      sentence: 'Good ____, how are you?',
      options: ['morning', 'afternoon', 'evening'],
      correct: 'afternoon',
      context: 'Almoço de negócios em SP às 14h.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a resposta',
      words: ['My', 'day', 'is', 'going', 'well'],
      correct: ['My', 'day', 'is', 'going', 'well'],
      translation: 'Meu dia tá indo bem',
    },
    {
      type: 'multiple_choice',
      instruction: 'Escolha a melhor opção',
      question: "São 13h. Você encontra um cliente. O que diz?",
      options: [
        { text: 'Good afternoon!', correct: true },
        { text: 'Good morning!',   correct: false },
        { text: 'Good night!',     correct: false },
      ],
      explanation: "Entre 12h e 17h é 'Good afternoon'. 'Good night' é só pra dormir.",
    },
  ],

  rwenDialogue: {
    intro: 'Almoço de trabalho num restaurante na Faria Lima. Você encontra um conhecido inglês de uma reunião anterior.',
    lines: [
      { speaker: 'npc', target: "Good afternoon! How's your day?", native: 'Boa tarde! Como tá seu dia?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good afternoon. It's going well, thanks.", native: 'Boa tarde. Tá indo bem, obrigado.', correct: true,  feedback: "Perfeito — saudação certa pro horário e resposta leve." },
          { target: 'Good morning.',                              native: 'Bom dia.',                            correct: false, feedback: "Já passou do meio-dia — usa 'Good afternoon'." },
          { target: 'Bye!',                                       native: 'Tchau!',                              correct: false, feedback: "Vocês acabaram de se encontrar — não despeça ainda." },
        ],
      },
      { speaker: 'npc', target: "Glad to hear that.", native: 'Que bom ouvir isso.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Mudou de 'Good morning' pra 'Good afternoon' — você tá ligado no relógio.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva de memória.',
    prompts: [
      { prompt: "Good afternoon (em inglês)", correct: ['Good afternoon', 'good afternoon', 'Good afternoon.', 'good afternoon.'] },
      { prompt: "Going well (em inglês)",     correct: ['Going well', 'going well', "It's going well", "it's going well"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Hoje, depois das 12h, fala 'Good afternoon' pra alguém — pode ser pro WhatsApp do amigo gringo.",
    rwenSignoff: "Boa tarde — até logo.",
  },

  phase8: {
    scenario: "1pm in a Faria Lima restaurant. You're meeting a British acquaintance from a previous meeting for lunch. Greet them, ask how their day is going.",
    rwenRole: "James, 40, a British consultant who's been working with Brazilian banks for years. Polite, friendly, fluent English with a slight UK accent.",
    successCriteria: "User opens with 'Good afternoon' (not 'Good morning'), uses 'How's your day?' or similar, answers with 'Going well' or 'It's going well'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
