import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-siblings',
  module: 5,
  lesson: 2,
  title: 'Brothers & Sisters — Mukoma naHanzvadzi',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Iye zvino, hama dzepamhuri — vana vamai. MuChiShona, tinosiyanisa: mukoma (mukuru), munin'ina (mudiki). Hanzvadzi inoreva munhu wezvimwe zvechinhambwe — asi muChiNgezi, kunongova 'brother' na 'sister' chete, pasina kupesana kweukuru.",
    culturalNote: "ChiShona chine udzamu pano — mukoma (older brother to a man / older sister to a woman) na munin'ina (younger of same gender). Hanzvadzi inoreva munhu wechirume kana usiri wechirume. MuChiNgezi, mashoko ese aya anodzikira kuva 'brother' kana 'sister' chete. Kana uchida kuratidza ukuru, unoshandisa 'older brother' kana 'younger sister'. Une pfungwa yakapfuma — yatsanangura nemashoko awarwa.",
  },

  chunks: [
    {
      id: 'brother',
      target: 'Brother',
      native: 'Mukoma / Munin\'ina',
      literal: 'older / younger brother — collapsed',
      emoji: '👦🏾',
      phonetic: 'BRUH-thuh',
      audioRef: null,
    },
    {
      id: 'sister',
      target: 'Sister',
      native: 'Hanzvadzi (kana hanzvadzikomana)',
      literal: undefined,
      emoji: '👧🏾',
      phonetic: 'SIS-tuh',
      audioRef: null,
    },
    {
      id: 'two_siblings',
      target: 'I have two siblings.',
      native: 'Ndine vana vamai vaviri.',
      literal: 'I-have children of-mother two',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ay hav too SIB-lings',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sibling nuance — older / younger',
    explanation: "MuChiNgezi, 'brother' na 'sister' hadzina ukuru muri madziri. Kuti utaure ukuru, unoisa 'older' kana 'younger' PAMBERI: 'older brother', 'younger sister'. 'Siblings' inoreva vana vamai vose pamwe chete (gender-neutral).",
    examples: [
      { target: 'My older brother',     native: 'Mukoma wangu' },
      { target: 'My younger sister',    native: 'Munin\'ina wangu wechisikana' },
      { target: 'I have two siblings.', native: 'Ndine vana vamai vaviri.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Older brother',  right: 'Mukoma' },
        { left: 'Younger sister', right: 'Munin\'ina wechisikana' },
        { left: 'Siblings',       right: 'Vana vamai' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — taura nezvemukoma wako',
      prompt: 'Mukoma wangu anogara muBulawayo.',
      correct: ['My older brother lives in Bulawayo.', 'My older brother lives in Bulawayo', 'my older brother lives in Bulawayo.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndine vana vamai vatatu — vakomana vaviri nemusikana mumwe.',
      correct: ['I have three siblings — two brothers and one sister.', 'I have three siblings, two brothers and one sister.', 'I have three siblings: two brothers and one sister.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "My younger brother is at school"',
      words: ['younger', 'My', 'is', 'at', 'school.', 'brother'],
      correct: ['My', 'younger', 'brother', 'is', 'at', 'school.'],
      translation: "Munin'ina wangu ari kuchikoro",
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kutaura nezvehanzvadzi yako mukuru',
      sentence: 'My _____ sister is a teacher in Mutare.',
      options: ['older', 'big', 'old'],
      correct: 'older',
      context: "MuChiNgezi, 'older' ndiyo inoshanda pa hama, kwete 'big' kana 'old'. 'Big sister' inoshanda muSlang asi 'older sister' yakareruka uye yakanaka.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: 'A friend asks "Do you have any siblings?" — you have one older brother. What\'s the most natural answer?',
      options: [
        { text: "Yes, I have one older brother.",   correct: true },
        { text: "Yes, I have one mukoma.",           correct: false },
        { text: "Yes, brother of me one.",            correct: false },
      ],
      explanation: "Pa English chete, 'older brother' ndiyo nzira yakanaka. Kushandisa 'mukoma' kunokanganisa kushamwari isingazive ChiShona — usapotsa kuti uchengetedze udzamu hweChiShona, asi pano English chete inoda.",
    },
  ],

  rwenDialogue: {
    intro: 'Uri padinner ne shamwari dzeChiNgezi. Mumwe akabvunza nezvemhuri yako.',
    lines: [
      { speaker: 'npc', target: "Tell me about your siblings — do you have brothers, sisters?", native: 'Ndiudze nezvevana vamai — une vakomana, vasikana here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have two siblings — an older brother and a younger sister.", native: "Ndine vana vamai vaviri — mukoma wangu nemunin'ina wechisikana.", correct: true,  feedback: "Wakwanisa — 'older brother' na 'younger sister' zvakatsanangura zvakanaka. Nuance yawakaita yakanaka." },
          { target: "I have brother and sister.",                                    native: 'Ndine mukoma nemunin\'ina.',                                       correct: false, feedback: "Hauna 'a' / 'two' / 'older/younger' — chirevo chinonzwika sechakanyura. Wedzera detail." },
          { target: "Mukoma na hanzvadzi.",                                         native: "Mukoma na hanzvadzi.",                                              correct: false, feedback: "ChiShona chete — shamwari haichanzwisise. Shandura zvose kuita ChiNgezi." },
        ],
      },
      { speaker: 'npc', target: "Oh nice — what do they do?", native: 'Aaa, zvakanaka — vanoita basa rei?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakaratidza nuance yemukoma/munin'ina muChiNgezi — chinhu chakaoma asi wakwanisa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure.',
    prompts: [
      { prompt: 'My older brother (in English)',  correct: ['My older brother', 'my older brother'] },
      { prompt: 'I have two siblings (in English)', correct: ['I have two siblings', 'I have two siblings.', 'i have two siblings'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga nezvevana vamai vako vose. Nyora pa diary kana pa phone notes paChiNgezi: 'I have ___ siblings.' Wozotaura kuti vakuru kana vadiki — 'older' kana 'younger'. Verenga zvawanyora muromo.",
    rwenSignoff: "Mangwana — vana (children).",
  },

  phase8: {
    scenario: "You're at an English-speaking dinner — friends are sharing about their families. When asked, describe your siblings clearly, including whether they're older or younger than you.",
    rwenRole: "Tendai, 28, a colleague who studied abroad and is curious about your family. Asks short follow-ups like 'Are you the oldest?' or 'Where do they live?'",
    successCriteria: "User says 'I have [number] siblings' or names brothers/sisters. Uses 'older' or 'younger' at least once to capture the Shona age nuance. Answers a follow-up question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
