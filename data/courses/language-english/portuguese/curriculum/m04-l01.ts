import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-a-an',
  module: 4,
  lesson: 1,
  title: 'A vs An — A book / An apple',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Em inglês quase todo substantivo singular pede 'a' ou 'an' antes — algo que o português não faz.",
    culturalNote: "Em português a gente diz 'comprei livro' ou 'um livro' — e a primeira opção rola. Em inglês não existe 'I bought book'; precisa de 'a book' ou 'the book'. Esse 'a/an' é quase um prefixo automático que o brasileiro esquece. Regra: 'a' antes de consoante, 'an' antes de som de vogal.",
  },

  chunks: [
    {
      id: 'a_book',
      target: 'A book',
      native: 'Um livro',
      literal: '(one/some) book',
      emoji: '📕',
      phonetic: 'uh-BUK',
      audioRef: null,
    },
    {
      id: 'an_apple',
      target: 'An apple',
      native: 'Uma maçã',
      literal: '(one/some) apple — "an" before vowel sound',
      emoji: '🍎',
      phonetic: 'an-AP-ul',
      audioRef: null,
    },
    {
      id: 'a_house',
      target: 'A house',
      native: 'Uma casa',
      literal: '(one/some) house',
      emoji: '🏠',
      phonetic: 'uh-HOWS',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Indefinite articles: 'a' and 'an'",
    explanation: "'a' antes de palavras que começam com som de consoante. 'an' antes de som de vogal (a, e, i, o, u). Importante: é o som inicial, não a letra. 'An hour' (o 'h' é mudo). 'A university' (o 'u' soa como 'yu').",
    examples: [
      { target: 'A book',     native: 'Um livro' },
      { target: 'An apple',   native: 'Uma maçã' },
      { target: 'An hour',    native: 'Uma hora — "h" é mudo, então "an"' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Escolha 'a' ou 'an'",
      sentence: 'I want _____ apple.',
      options: ['a', 'an', 'the'],
      correct: 'an',
      context: 'Apple começa com vogal — "an".',
    },
    {
      type: 'fill_blank',
      instruction: "Escolha 'a' ou 'an'",
      sentence: 'She has _____ book.',
      options: ['a', 'an', 'no article'],
      correct: 'a',
      context: 'Book começa com consoante — "a".',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Uma maçã',
      correct: ['An apple', 'an apple'],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I have a friend"',
      words: ['friend.', 'have', 'I', 'a'],
      correct: ['I', 'have', 'a', 'friend.'],
      translation: 'Tenho um amigo',
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual está correto?',
      question: 'I saw _____ elephant at the zoo.',
      options: [
        { text: 'an elephant', correct: true },
        { text: 'a elephant', correct: false },
        { text: 'elephant', correct: false },
      ],
      explanation: "'Elephant' começa com vogal — 'an'. E em inglês precisa de 'a/an' antes de substantivo singular.",
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Uma casa',
      correct: ['A house', 'a house'],
    },
  ],

  rwenDialogue: {
    intro: "Café da manhã num hotel-boutique em Trancoso. O garçom é australiano que mora no Brasil. Pede em inglês.",
    lines: [
      {
        speaker: 'npc',
        target: "Good morning! What can I get you?",
        native: 'Bom dia! O que posso trazer?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like a coffee and an apple, please.", native: 'Eu queria um café e uma maçã, por favor.', correct: true, feedback: "Mandou bem — 'a coffee' (consoante), 'an apple' (vogal)." },
          { target: "I'd like a coffee and a apple, please.", native: 'Eu queria um café e uma maçã.', correct: false, feedback: "'apple' começa com vogal — usa 'an apple'." },
          { target: "I'd like coffee and apple, please.", native: 'Eu queria café e maçã.', correct: false, feedback: "Em inglês precisa do artigo — 'a coffee', 'an apple'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! 'a' e 'an' — mesma palavra, escolha pelo som que vem depois.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: 'A book (em inglês)', correct: ['A book', 'a book'] },
      { prompt: 'An apple (em inglês)', correct: ['An apple', 'an apple'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Olha 5 objetos perto de você agora. Diga em inglês com 'a' ou 'an': 'a chair', 'a phone', 'an orange'... Note qual encaixa onde.",
    rwenSignoff: "O começo é estranho — mas você começou. Até amanhã.",
  },

  phase8: {
    scenario: "Ordering breakfast at a hotel in Trancoso. You're using 'a' and 'an' with food items.",
    rwenRole: "Polite English-speaking waiter who encourages clear ordering.",
    successCriteria: "User uses 'a' and 'an' correctly before food items — 'a coffee', 'an apple', 'a sandwich', 'an orange'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
