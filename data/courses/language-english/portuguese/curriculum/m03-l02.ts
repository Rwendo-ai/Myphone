import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-age',
  module: 3,
  lesson: 2,
  title: 'How old are you? — Quantos anos você tem?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Em português a gente 'tem' anos — 'Eu tenho 25 anos'. Em inglês a gente 'é' anos — 'I'm 25'. Cuidado: 'I have 25 years' não existe.",
    culturalNote: "Esse é um dos erros clássicos do brasileiro em inglês: o 'tenho' vira 'have' direto. Mas idade em inglês usa 'be' (sou): 'I am 25'. E 'years old' é opcional — 'I'm 25' já basta. Pra disfarçar idade, americanos dizem 'I'm in my forties' (na casa dos 40) — uma saída educada quando não quer ser específico.",
  },

  chunks: [
    {
      id: 'how_old_are_you',
      target: 'How old are you?',
      native: 'Quantos anos você tem?',
      literal: 'How old are you?',
      emoji: '🎂',
      phonetic: 'how-OHLD-ar-yoo',
      audioRef: null,
    },
    {
      id: 'im_x_years_old',
      target: "I'm X years old",
      native: 'Eu tenho X anos',
      literal: 'I-am X years old',
      emoji: '🔢',
      phonetic: 'aym-EKS-yeerz-ohld',
      audioRef: null,
    },
    {
      id: 'twenty_five',
      target: 'Twenty-five',
      native: 'Vinte e cinco',
      literal: 'Twenty-five',
      emoji: '2️⃣5️⃣',
      phonetic: 'TWEN-tee-fyv',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Numbers in age',
    explanation: "Resposta de idade começa com 'I'm' + número. 'Years old' é opcional. Números: twenty (20), twenty-one (21), twenty-five (25), thirty (30), forty (40). Atenção máxima: NÃO use 'I have' pra idade — é 'I am'.",
    examples: [
      { target: "I'm 25",              native: 'Eu tenho 25 anos' },
      { target: "I'm 30 years old",     native: 'Eu tenho 30 anos' },
      { target: "I'm twenty-one",       native: 'Eu tenho vinte e um anos' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os números',
      pairs: [
        { left: 'Twenty',         right: '20' },
        { left: 'Twenty-five',    right: '25' },
        { left: 'Thirty',          right: '30' },
        { left: 'Forty',           right: '40' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Quantos anos você tem?',
      correct: ['How old are you?', 'how old are you?', 'How old are you'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês (pode usar números)',
      prompt: 'Eu tenho 25 anos',
      correct: ["I'm 25", "I am 25", "I'm twenty-five", "I am twenty-five", "I'm 25 years old", "I am 25 years old"],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete a resposta',
      sentence: "I'm thirty years ____.",
      options: ['old', 'olds', 'older'],
      correct: 'old',
      context: 'Respondendo idade em inglês.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a resposta de idade',
      words: ["I'm", '25', 'years', 'old'],
      correct: ["I'm", '25', 'years', 'old'],
      translation: 'Eu tenho 25 anos',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte a pergunta',
      words: ['How', 'old', 'are', 'you'],
      correct: ['How', 'old', 'are', 'you'],
      translation: 'Quantos anos você tem?',
    },
  ],

  rwenDialogue: {
    intro: "Você tá preenchendo um formulário num banco em SP. A atendente pergunta em inglês porque o sistema é em inglês.",
    lines: [
      { speaker: 'npc', target: "And how old are you?", native: 'E quantos anos você tem?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm 28 years old.",     native: 'Tenho 28 anos.', correct: true,  feedback: "Mandou bem — frase completa, idade clara." },
          { target: "28.",                     native: '28.',           correct: false, feedback: "Em inglês formal, fala a frase: 'I'm 28' ou 'I'm 28 years old'." },
          { target: "I have 28 years.",        native: 'Eu tenho 28 anos.', correct: false, feedback: "Erro clássico do BR — em inglês idade usa 'I am', não 'I have'." },
        ],
      },
      { speaker: 'npc', target: "Thank you. That's all we need.", native: 'Obrigada. É só isso que precisamos.' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você não caiu na armadilha do 'I have' — esse é o detalhe que separa o BR do inglês fluente.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Escreva em inglês.',
    prompts: [
      { prompt: "Quantos anos você tem? (em inglês)",            correct: ['How old are you?', 'how old are you?', 'How old are you'] },
      { prompt: "Eu tenho 30 anos (em inglês)",     correct: ["I'm 30", "I am 30", "I'm thirty", "I am thirty", "I'm 30 years old", "I am 30 years old", "I'm thirty years old"] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Em voz alta hoje, fala 'I'm ___ years old' — colocando a sua idade. Repete três vezes pra fixar a estrutura 'I am' em vez de 'I have'.",
    rwenSignoff: "Acertou. Até amanhã.",
  },

  phase8: {
    scenario: "You're at the front desk of an English-language clinic filling in a patient form. The receptionist asks the form questions out loud and types your answers in English.",
    rwenRole: "Mrs. Banda, 50, a no-nonsense but kind receptionist. Asks short, direct questions and confirms each answer.",
    successCriteria: "User answers the age question with a full 'I'm X years old' sentence (or 'I'm X'), uses the verb 'am' (not 'have'), and pronounces the number clearly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
