import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-children',
  module: 5,
  lesson: 3,
  title: 'Sons & Daughters — Vana',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Vana — chinhu chakakosha mumhuri. MuChiNgezi: 'son' (mukomana), 'daughter' (musikana), 'children' (vana). Yeuka kubva muModule 4: 'children' ndiyo irregular plural — kwete 'childs'.",
    culturalNote: "MuChiShona, 'mwana' inonyanya kushanda — 'mwana mukomana' (boy child) kana 'mwana musikana' (girl child). MuChiNgezi, 'son' na 'daughter' anomira ega — hapana kuda 'boy son'. Asiwo, kana usinga zive gender, 'child' / 'children' inoshanda — yakareruka uye haina ungochenu.",
  },

  chunks: [
    {
      id: 'son',
      target: 'Son',
      native: 'Mwana mukomana',
      literal: 'child boy',
      emoji: '👦🏾',
      phonetic: 'SUN',
      audioRef: null,
    },
    {
      id: 'daughter',
      target: 'Daughter',
      native: 'Mwana musikana',
      literal: 'child girl',
      emoji: '👧🏾',
      phonetic: 'DAW-tuh',
      audioRef: null,
    },
    {
      id: 'children',
      target: 'Children',
      native: 'Vana',
      literal: 'irregular plural of "child"',
      emoji: '🧒🏾',
      phonetic: 'CHIL-druhn',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Naming kids — son / daughter / children',
    explanation: "MuChiNgezi, 'son' na 'daughter' anoenderana ne gender. 'Child' (mwana) inoshanda kana usingade kupesana ne gender. Plural ya 'child' ndi 'children' — irregular, hapana 's' kumagumo. Kuti utaure kuwana, unoti 'I have [number] children' kana 'I have a son and a daughter'.",
    examples: [
      { target: 'I have one son.',                native: 'Ndine mwana mukomana mumwe.' },
      { target: 'I have two daughters.',          native: 'Ndine vana vasikana vaviri.' },
      { target: 'I have three children.',         native: 'Ndine vana vatatu.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Son',       right: 'Mwana mukomana' },
        { left: 'Daughter',  right: 'Mwana musikana' },
        { left: 'Children',  right: 'Vana' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wakuzadza form yechikoro',
      prompt: 'Ndine vana vaviri — mwana mukomana mumwe nemwana musikana mumwe.',
      correct: ['I have two children — one son and one daughter.', 'I have two children, one son and one daughter.', 'I have two children: one son and one daughter.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mwana wangu mukomana ane makore mashanu.',
      correct: ['My son is five years old.', 'My son is 5 years old.', 'My son is five.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "My daughter goes to school in Harare"',
      words: ['goes', 'My', 'school', 'daughter', 'in', 'to', 'Harare.'],
      correct: ['My', 'daughter', 'goes', 'to', 'school', 'in', 'Harare.'],
      translation: 'Mwana wangu musikana anoenda kuchikoro muHarare',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — irregular plural',
      sentence: 'I have three _____ — two boys and one girl.',
      options: ['childs', 'children', 'childrens'],
      correct: 'children',
      context: "'Children' ndiyo irregular plural ya 'child'. 'Childs' uye 'childrens' hadzipo muChiNgezi — kuvaratidza ndiko kuziviswa kuti haunyatso kuziva.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakakwana',
      question: 'On a school registration form, the field "Number of children" needs your answer. You have a son and a daughter. What do you write or say?',
      options: [
        { text: "Two — one son and one daughter.",   correct: true },
        { text: "Two childs.",                          correct: false },
        { text: "Vana vaviri.",                          correct: false },
      ],
      explanation: "'Two — one son and one daughter' inopa form yose: nhamba ne detail. 'Two childs' yakakanganisa (irregular plural). 'Vana vaviri' iChiShona — form inoda ChiNgezi.",
    },
  ],

  rwenDialogue: {
    intro: 'Wakuzadza form yechikoro yemwana wako. Mubatsiri ari kuChiNgezi achida ruzivo.',
    lines: [
      { speaker: 'npc', target: "How many children do you have, and what are their ages?", native: 'Une vana vangani, vane makore akadini?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two children — a son who is seven and a daughter who is four.", native: 'Ndine vana vaviri — mwana mukomana ane makore manomwe nemwana musikana ane makore mana.', correct: true, feedback: "Yakwana — 'two children' (irregular plural), 'a son... and a daughter...', ages clear. Form yapinda zvakanaka." },
          { target: "I have two childs. Son seven. Daughter four.",                          native: 'Ndine vana vaviri. Mwana mukomana manomwe. Mwana musikana mana.',                  correct: false, feedback: "'Childs' hapana — ndi 'children'. Uye chirevo chakacheneswa zvakanyanya — wedzera 'who is' kana 'and' kuti zvinzwike." },
          { target: "Two childrens, age seven and four.",                                     native: 'Vana vaviri, makore manomwe nemana.',                                              correct: false, feedback: "'Childrens' hapana — 'children' yakatova plural. Uye 'age' inoda 'aged' kana 'who are aged'." },
        ],
      },
      { speaker: 'npc', target: "Perfect. What grades are they in?", native: 'Yakwana. Vari mu grade ipi?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakatakura form yeChiNgezi — irregular plural ne all.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'I have two children (in English)', correct: ['I have two children', 'I have two children.', 'i have two children'] },
      { prompt: 'My daughter (in English)',          correct: ['My daughter', 'my daughter'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Kana une vana, edzana kunyora chirevo cheChiNgezi: 'I have [number] children.' Kana usina, edzana kunyora che hama yako: 'My sister has two children — a son and a daughter.' Verenga zvawanyora muromo.",
    rwenSignoff: "Mangwana — vakuru vepamhuri (grandparents).",
  },

  phase8: {
    scenario: "You are filling out a school registration form for your child. The school administrator is English-speaking and asks you a few questions about your family — number of children, ages, what they do.",
    rwenRole: "Mrs. Banda, the school registrar — friendly but efficient. Asks straightforward questions like 'How many children do you have?' and 'What are their ages?'",
    successCriteria: "User says 'I have [number] children' using 'children' (not 'childs'), names at least one as 'son' or 'daughter', and gives an age. Avoids slipping into Shona.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
