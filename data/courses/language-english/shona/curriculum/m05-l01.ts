import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l01-mother-father',
  module: 5,
  lesson: 1,
  title: 'Mother & Father — Amai naBaba',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Module 5 inotaura nezvemhuri. Tinotanga nevabereki — 'Mother' naAmai, 'Father' naBaba. Kushanda neChiNgezi pamhuri kunoda kuti uchengete pfungwa imwe: ChiNgezi chakapfava pamashoko emhuri kupfuura ChiShona.",
    culturalNote: "MuChiShona, 'Amai' naBaba' vane uremu — vanowanzo daidzwa muvhumbamiri (vamai vangu) kuratidza tsika. MuChiNgezi, hapana mutongo wakadaro — 'My mother' naMy father' inozvinzwika. Asi rangarira: kuti unzwike une tsika, woisa tone ye respect mukutaura, kwete mumashoko ega.",
  },

  chunks: [
    {
      id: 'mother',
      target: 'Mother',
      native: 'Amai',
      literal: undefined,
      emoji: '👩🏾',
      phonetic: 'MUH-thuh',
      audioRef: null,
    },
    {
      id: 'father',
      target: 'Father',
      native: 'Baba',
      literal: undefined,
      emoji: '👨🏾',
      phonetic: 'FAH-thuh',
      audioRef: null,
    },
    {
      id: 'my_parents',
      target: 'My parents',
      native: 'Vabereki vangu',
      literal: 'parents my',
      emoji: '👨‍👩‍👧',
      phonetic: 'mahy PAIR-ents',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family possessives — my / our',
    explanation: "MuChiNgezi, kuti uratidze kuti munhu ndewedu kana ndewangu, unoisa 'my' kana 'our' PAMBERI peshoko. ChiShona inoisa 'vangu/vedu' KUMASHURE ('amai vangu'). Yeuka: 'my' = imwe (mine), 'our' = ese (mine + others).",
    examples: [
      { target: 'My mother',  native: 'Amai vangu' },
      { target: 'My father',  native: 'Baba vangu' },
      { target: 'Our parents', native: 'Vabereki vedu' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Mother',      right: 'Amai' },
        { left: 'Father',      right: 'Baba' },
        { left: 'My parents',  right: 'Vabereki vangu' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Amai vangu',
      correct: ['My mother', 'my mother', 'My mother.', 'my mother.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutsanangura mhuri yako',
      prompt: 'Vabereki vangu vanogara muHarare.',
      correct: ['My parents live in Harare.', 'My parents live in Harare', 'my parents live in Harare.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo — uri kuratidza mufananidzo wababa vako',
      words: ['This', 'is', 'my', 'father.'],
      correct: ['This', 'is', 'my', 'father.'],
      translation: 'Ava ndibaba vangu',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kutaura nezvevabereki venyu mose',
      sentence: '_____ parents are coming to dinner.',
      options: ['My', 'Our', 'I'],
      correct: 'Our',
      context: "Kana usingatauri wega — uchitaura iwe ne hama yako pamwe — 'Our' inoshanda. 'My' chete ndeyemumwe.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chirevo chinotaura zvine tsika',
      question: 'You are introducing your father to a new colleague. What sounds most natural in English?',
      options: [
        { text: "This is my father, James.",     correct: true },
        { text: "Look, my father.",              correct: false },
        { text: "Father is mine, look.",         correct: false },
      ],
      explanation: "'This is my father, [name]' inoshanda muChiNgezi semhindo yekuziviswa. Hutsika hwacho huri muvoice tone, kwete mumashoko emhindo.",
    },
  ],

  rwenDialogue: {
    intro: 'Mueni weChiNgezi auya kumba kwako. Vabereki vako vari mukamuri. Vanga.',
    lines: [
      { speaker: 'npc', target: "Hi! It's nice to meet your family.", native: 'Mhoro! Zvakanaka kusangana nemhuri yako.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'This is my mother, and this is my father.', native: 'Ava ndiamai vangu, uye ava ndibaba vangu.', correct: true,  feedback: "Wakwanisa — 'This is my mother...' ndiyo nzira yakanaka yekuziviswa muChiNgezi." },
          { target: 'My mother. My father.',                      native: 'Amai vangu. Baba vangu.',                  correct: false, feedback: "Pfupi zvakanyanya — wedzera 'This is...' kuti zvinzwike sekutanga zvine tsika." },
          { target: 'Mother and father here.',                     native: 'Amai nababa pano.',                        correct: false, feedback: "Hapana 'my' — chinhu chakakosha muChiNgezi pakubatanidza vanhu nemhuri yako." },
        ],
      },
      { speaker: 'npc', target: "Lovely to meet you both.", native: 'Zvakanaka kusangana nemwese.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wadzidzisa mueni mhuri yako neChiNgezi chinonzwika.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Mother (in English)',          correct: ['Mother', 'mother'] },
      { prompt: 'My parents (in English)',      correct: ['My parents', 'my parents', 'My parents.', 'my parents.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Sarudza picha yevabereki vako — fungidzira kuti uri kuvazivisa kushamwari yeChiNgezi. Taura wega: 'This is my mother. This is my father.' Nzwa kuti zvinoreruka here pamuromo.",
    rwenSignoff: "Tichaonana mangwana — tinodzidza nezvevana vehama (siblings).",
  },

  phase8: {
    scenario: "An English-speaking visitor has come to your home for the first time. Your mother and father are in the living room. Introduce them warmly and naturally — and answer a simple question or two about your parents.",
    rwenRole: "Sarah, 32, your friend visiting from London. Warm, curious, asks small follow-ups like 'What does your father do?' or 'How long have your parents lived here?'",
    successCriteria: "User uses 'This is my mother / father' or 'My parents are...' clearly. Uses possessive 'my' before mother/father at least twice. Answers at least one follow-up question with a complete sentence.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
