import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-siblings',
  module: 5,
  lesson: 2,
  title: 'Brothers & Sisters — Irmãos',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Irmãos: brother (irmão) e sister (irmã). Em inglês, sem distinção de idade no substantivo — pra dizer mais velho ou mais novo, adiciona 'older' ou 'younger'.",
    culturalNote: "Em português 'irmão' já basta — a idade vem com 'mais velho' ou 'mais novo'. Em inglês mesma estrutura: 'older brother', 'younger sister'. Detalhe: 'siblings' é o termo neutro pra irmãos+irmãs juntos. Útil em formulários.",
  },

  chunks: [
    {
      id: 'brother',
      target: 'Brother',
      native: 'Irmão',
      literal: 'brother',
      emoji: '👦🏾',
      phonetic: 'BRUH-thuh',
      audioRef: null,
    },
    {
      id: 'sister',
      target: 'Sister',
      native: 'Irmã',
      literal: undefined,
      emoji: '👧🏾',
      phonetic: 'SIS-tuh',
      audioRef: null,
    },
    {
      id: 'two_siblings',
      target: 'I have two siblings.',
      native: 'Tenho dois irmãos.',
      literal: 'I-have two siblings',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ay hav too SIB-lings',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sibling nuance — older / younger',
    explanation: "Pra precisar idade: 'older brother' (irmão mais velho), 'younger sister' (irmã mais nova). 'Siblings' = irmãos no geral, sem gênero.",
    examples: [
      { target: 'My older brother',     native: 'Meu irmão mais velho' },
      { target: 'My younger sister',    native: 'Minha irmã mais nova' },
      { target: 'I have two siblings.', native: 'Tenho dois irmãos.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Combine os termos',
      pairs: [
        { left: 'Older brother',  right: 'Irmão mais velho' },
        { left: 'Younger sister', right: 'Irmã mais nova' },
        { left: 'Siblings',       right: 'Irmãos (geral)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês — falando do irmão',
      prompt: 'Meu irmão mais velho mora em Salvador.',
      correct: ['My older brother lives in Salvador.', 'My older brother lives in Salvador', 'my older brother lives in Salvador.'],
    },
    {
      type: 'translate',
      instruction: 'Escreva em inglês',
      prompt: 'Tenho três irmãos — dois meninos e uma menina.',
      correct: ['I have three siblings — two brothers and one sister.', 'I have three siblings, two brothers and one sister.', 'I have three siblings: two brothers and one sister.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Monte: "My younger brother is at school"',
      words: ['younger', 'My', 'is', 'at', 'school.', 'brother'],
      correct: ['My', 'younger', 'brother', 'is', 'at', 'school.'],
      translation: 'Meu irmão mais novo está na escola',
    },
    {
      type: 'fill_blank',
      instruction: 'Complete — irmã mais velha',
      sentence: 'My _____ sister is a teacher in Recife.',
      options: ['older', 'big', 'old'],
      correct: 'older',
      context: "'older sister' é o padrão. 'Big sister' rola em gíria.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Resposta natural',
      question: '"Do you have any siblings?" — você tem um irmão mais velho.',
      options: [
        { text: "Yes, I have one older brother.",   correct: true },
        { text: "Yes, I have one big bro.",           correct: false },
        { text: "Yes, brother of me one.",            correct: false },
      ],
      explanation: "'I have one older brother' é a forma padrão.",
    },
  ],

  rwenDialogue: {
    intro: 'Jantar com amigos americanos em SP. Alguém pergunta sobre sua família.',
    lines: [
      { speaker: 'npc', target: "Tell me about your siblings — do you have brothers, sisters?", native: 'Conta dos seus irmãos — tem irmãos, irmãs?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two siblings — an older brother and a younger sister.", native: 'Tenho dois irmãos — um mais velho e uma irmã mais nova.', correct: true,  feedback: "Mandou bem — older/younger e a estrutura completa." },
          { target: "I have brother and sister.",                                    native: 'Tenho irmão e irmã.',                                       correct: false, feedback: "Faltou 'a' / quantidade / 'older/younger'." },
          { target: "Irmão e irmã.",                                                  native: 'Irmão e irmã.',                                              correct: false, feedback: "Em português — eles não vão entender. Use inglês." },
        ],
      },
      { speaker: 'npc', target: "Oh nice — what do they do?", native: 'Que legal — o que eles fazem?' },
      {
        speaker: 'rwen',
        rwenLine: "Mandou bem! Você expressou idade na precisão certa em inglês.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Sem rolar.',
    prompts: [
      { prompt: 'My older brother (em inglês)',  correct: ['My older brother', 'my older brother'] },
      { prompt: 'I have two siblings (em inglês)', correct: ['I have two siblings', 'I have two siblings.', 'i have two siblings'] },
    ],
  },

  mission: {
    title: 'Missão de hoje',
    task: "Pensa nos seus irmãos. Escreve no celular em inglês: 'I have ___ siblings.' E quem é mais velho/mais novo: 'older' ou 'younger'.",
    rwenSignoff: "Amanhã — filhos.",
  },

  phase8: {
    scenario: "English-speaking dinner. When asked, describe your siblings clearly, including older/younger.",
    rwenRole: "Tendai, 28, friendly colleague. Asks 'Are you the oldest?' or 'Where do they live?'.",
    successCriteria: "User says 'I have [number] siblings' or names brothers/sisters. Uses 'older' or 'younger' at least once. Answers a follow-up.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
