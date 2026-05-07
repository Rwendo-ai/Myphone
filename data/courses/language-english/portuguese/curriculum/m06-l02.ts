import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numbers-20-100',
  module: 6,
  lesson: 2,
  title: 'Numbers 11-100 — Eleven to One Hundred',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Subindo — 11 a 100. O padrão é fácil: dezenas (twenty, thirty...) e os números entre vão com hífen: 'twenty-five'.",
    culturalNote: "Em português 'vinte e cinco' liga com 'e'. Em inglês: 'twenty-five' com hífen, sem 'and'. Cuidado: 'thirteen' (13) e 'thirty' (30) confundem — escuta a diferença.",
  },

  chunks: [
    {
      id: 'eleven_nineteen',
      target: 'Eleven, twelve, thirteen, fourteen, fifteen',
      native: 'Onze, doze, treze, catorze, quinze',
      literal: '11-15',
      emoji: '1️⃣2️⃣',
      phonetic: 'ee-LEH-vn, twelv, THUR-teen, FOR-teen, FIF-teen',
      audioRef: null,
    },
    {
      id: 'tens',
      target: 'Twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety',
      native: '20, 30, 40, 50, 60, 70, 80, 90',
      literal: 'Tens',
      emoji: '🔢',
      phonetic: 'TWEN-tee, THUR-tee, FOR-tee, FIF-tee...',
      audioRef: null,
    },
    {
      id: 'one_hundred',
      target: 'One hundred',
      native: 'Cem',
      literal: 'One hundred',
      emoji: '💯',
      phonetic: 'wun-HUN-dred',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tens + units',
    explanation: "Pra montar: dezena + hífen + unidade. '21' = 'twenty-one', '47' = 'forty-seven', '99' = 'ninety-nine'. Sem 'and'. Cuidado: thirteen (13) ≠ thirty (30).",
    examples: [
      { target: 'Twenty-five',   native: 'Vinte e cinco' },
      { target: 'Forty-seven',   native: 'Quarenta e sete' },
      { target: 'Ninety-nine',   native: 'Noventa e nove' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os números',
      pairs: [
        { left: 'Twenty',     right: '20' },
        { left: 'Thirty-five', right: '35' },
        { left: 'Fifty',       right: '50' },
        { left: 'Eighty-eight', right: '88' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Vinte e cinco',
      correct: ['Twenty-five', 'twenty-five'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete',
      sentence: "I'm ____ years old.",
      options: ['thirty-two', 'thirty two', 'thirty and two'],
      correct: 'thirty-two',
      context: 'Hífen une dezena e unidade.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "There are forty-seven students"',
      words: ['students.', 'There', 'forty-seven', 'are'],
      correct: ['There', 'are', 'forty-seven', 'students.'],
      translation: 'Há quarenta e sete alunos',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Cem',
      correct: ['One hundred', 'A hundred', 'one hundred', 'a hundred'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual está certo?',
      question: '13 (thirteen) é DIFERENTE de 30 (thirty). Qual frase tá certa pra "tenho 30"?',
      options: [
        { text: "I'm thirty.",   correct: true },
        { text: "I'm thirteen.",  correct: false },
        { text: "I'm three-ten.",  correct: false },
      ],
      explanation: "30 = thirty. 13 = thirteen. Som diferente, escrita diferente.",
    },
  ],

  rwenDialogue: {
    intro: 'Atendente americano de hotel em SP confirma sua idade no check-in.',
    lines: [
      { speaker: 'npc', target: "And how old are you, sir?", native: 'E quantos anos o senhor tem?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm thirty-two.", native: 'Tenho 32 anos.', correct: true, feedback: 'Mandou bem — hífen no número.' },
          { target: "I'm thirty two.",  native: '...',           correct: false, feedback: 'Esqueceu o hífen.' },
          { target: "I'm thirty and two.", native: '...',         correct: false, feedback: "Sem 'and' em inglês." },
        ],
      },
      { speaker: 'rwen', rwenLine: "Mandou bem! 'Twenty-five', 'thirty-two' — hífen é o segredo.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'Twenty-five (em inglês)', correct: ['Twenty-five', 'twenty-five'] },
      { prompt: 'One hundred (em inglês)', correct: ['One hundred', 'a hundred', 'one hundred'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Diz sua idade, seu telefone, e três números aleatórios em inglês — em voz alta.",
    rwenSignoff: "Até amanhã — números bem maiores.",
  },

  phase8: {
    scenario: "Hotel check-in in SP — confirming age, room number, phone number with US-trained reception.",
    rwenRole: "Polite American-trained receptionist confirming your details.",
    successCriteria: "User says at least three numbers between 11 and 100, with hyphens for compounds.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
