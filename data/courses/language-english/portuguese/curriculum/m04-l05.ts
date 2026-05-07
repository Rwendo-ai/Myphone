import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-plurals-irregular',
  module: 4,
  lesson: 5,
  title: 'Irregular plurals — children, men',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Algumas palavras não seguem a regra do '-s'. Mudam de cara: child → children. Man → men. Foot → feet. Tem que decorar.",
    culturalNote: "Em português também tem plural maluco — pão/pães, anjo/anjos, ovo/ovos. Em inglês os irregulares são poucos mas frequentes: child, man, woman, person, foot, tooth. Não tem regra — só decorar. O brasileiro às vezes inventa 'childs', 'mans' — e estraga a frase.",
  },

  chunks: [
    {
      id: 'children',
      target: 'Child → Children',
      native: 'Criança → Crianças',
      literal: 'irregular — fully changes',
      emoji: '👶',
      phonetic: 'chyld → CHIL-dren',
      audioRef: null,
    },
    {
      id: 'men',
      target: 'Man → Men',
      native: 'Homem → Homens',
      literal: 'irregular — vowel change',
      emoji: '👨',
      phonetic: 'man → men',
      audioRef: null,
    },
    {
      id: 'people',
      target: 'Person → People',
      native: 'Pessoa → Pessoas',
      literal: 'irregular — completely different word',
      emoji: '👥',
      phonetic: 'PUR-son → PEE-pul',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Irregular plurals — pra decorar",
    explanation: "Tipos: troca de vogal (man→men, foot→feet, tooth→teeth), terminação em -en (child→children, ox→oxen), ou palavra totalmente diferente (person→people, mouse→mice).",
    examples: [
      { target: 'Man → Men',     native: 'Homem → Homens' },
      { target: 'Woman → Women', native: 'Mulher → Mulheres' },
      { target: 'Foot → Feet',   native: 'Pé → Pés' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Coloque no plural — irregular',
      sentence: 'I have two _____ (child).',
      options: ['children', 'childs', 'childen'],
      correct: 'children',
      context: 'Child → Children. Sem -s.',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Três pessoas',
      correct: ['Three people', 'three people'],
    },
    {
      type: 'fill_blank',
      instruction: 'Coloque no plural — atenção',
      sentence: 'My _____ (foot) hurt after walking all day.',
      options: ['feet', 'foots', 'feets'],
      correct: 'feet',
      context: 'Foot → Feet (troca de vogal).',
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Dois homens',
      correct: ['Two men', 'two men'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Qual está certo?',
      question: 'How many _____ are in your family?',
      options: [
        { text: 'women', correct: true },
        { text: 'womans', correct: false },
        { text: 'womens', correct: false },
      ],
      explanation: 'Woman → Women (vogal o→e). Sem -s.',
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "I have three children"',
      words: ['children.', 'three', 'I', 'have'],
      correct: ['I', 'have', 'three', 'children.'],
      translation: 'Tenho três filhos',
    },
  ],

  rwenDialogue: {
    intro: "Conversa de elevador com uma vizinha americana sobre família.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your family.",
        native: 'Conta da sua família.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two children. I also have three women in my family — my mother, my sister, and my aunt.", native: 'Tenho dois filhos. Também tenho três mulheres na família — minha mãe, minha irmã, minha tia.', correct: true, feedback: "Mandou bem — 'children', 'women' nos plurais irregulares certos." },
          { target: "I have two childs. I also have three womans.", native: 'Tenho dois filhos. Tenho três mulheres.', correct: false, feedback: "'childs' e 'womans' não existem. É 'children' e 'women'." },
          { target: "I have two child. I also have three woman.", native: 'Tenho duas criança. Três mulher.', correct: false, feedback: "Falta plural — é 'two children' e 'three women'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Boa. Plurais irregulares pegam o brasileiro de surpresa — children, men, women, feet são pra memorizar.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar. Coloque no plural.',
    prompts: [
      { prompt: 'Plural de "child"', correct: ['Children', 'children'] },
      { prompt: 'Plural de "person"', correct: ['People', 'people'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Memorize cinco irregulares: child→children, man→men, woman→women, person→people, foot→feet. Faça três frases usando.",
    rwenSignoff: "Esses cinco cobrem 80% dos irregulares que você vai usar.",
  },

  phase8: {
    scenario: "Describing your family to a new friend — using big plurals: children, men, women, people.",
    rwenRole: "Friendly listener who lets you talk about family using plural irregulars.",
    successCriteria: "User uses three or more irregular plurals correctly ('children', 'women', 'men', 'people') in family description.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
