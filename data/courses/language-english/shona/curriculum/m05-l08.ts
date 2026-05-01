import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-family-actions',
  module: 5,
  lesson: 8,
  title: 'Family verbs — Visit, call, miss',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhuri inoda zviito — shanya, fonera, suwa. MuChiNgezi: 'visit', 'call', 'miss'. Aya mashoko maviri ekutanga akareruka. 'Miss' yakaoma zvishoma — inoshanda zvakasiyana ne ChiShona.",
    culturalNote: "MuChiShona, 'kushanya' kuhama kunoita kuti munhu apindwe nemwoyo — chinhu chinodikanwa, kwete chinhu chemupengo. MuChiNgezi, 'visit' yakareruka — 'I visited my grandmother' inoshanda. 'Call' inoshanda zvakareruka. 'Miss' inopa pfungwa yakasiyana — 'I miss my mother' (ndinosuwa amai vangu) inoita kuti iwe ndiwe wakanyura, kwete amai. ChiShona ndizvo chimwe chete — 'ndakasuwa' munhu mukati maguta.",
  },

  chunks: [
    {
      id: 'visit',
      target: 'Visit',
      native: 'Shanya',
      literal: undefined,
      emoji: '🏃🏾',
      phonetic: 'VIH-zit',
      audioRef: null,
    },
    {
      id: 'call',
      target: 'Call',
      native: 'Fonera',
      literal: 'phone',
      emoji: '📞',
      phonetic: 'KAWL',
      audioRef: null,
    },
    {
      id: 'miss',
      target: 'Miss (someone)',
      native: 'Suwa',
      literal: 'long-for someone',
      emoji: '🥺',
      phonetic: 'MIS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Family verbs — visit, call, miss',
    explanation: "MuChiNgezi, zviito izvi zvinoshanda zvakareruka: 'I visit my mother' (ndinoshanya amai vangu), 'I call my father' (ndinofonera baba vangu), 'I miss my sister' (ndinosuwa hanzvadzi yangu). Cherechedza: 'miss' haina kushandurwa — pasina 'I miss for my sister'. Past tense: visited / called / missed.",
    examples: [
      { target: 'I visit my grandmother every Sunday.', native: 'Ndinoshanya mbuya vangu Svondo rega rega.' },
      { target: 'I call my mother every day.',          native: 'Ndinofonera amai vangu zuva rega rega.' },
      { target: 'I miss my brother.',                    native: 'Ndinosuwa mukoma wangu.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Visit',  right: 'Shanya' },
        { left: 'Call',   right: 'Fonera' },
        { left: 'Miss',   right: 'Suwa' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinofonera amai vangu mangwanani ese.',
      correct: ['I call my mother every morning.', 'I call my mother every morning', 'i call my mother every morning.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuita zano resvondo',
      prompt: 'Tichashanya sekuru vedu vhiki rinouya.',
      correct: ['We will visit our grandfather next week.', "We're visiting our grandfather next week.", 'We will visit our grandfather next week', "We will visit grandfather next week."],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "I miss my children very much"',
      words: ['miss', 'I', 'much.', 'children', 'my', 'very'],
      correct: ['I', 'miss', 'my', 'children', 'very', 'much.'],
      translation: 'Ndinosuwa vana vangu zvikuru',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — past tense ya call',
      sentence: 'I _____ my brother yesterday — he was happy.',
      options: ['call', 'called', 'calls'],
      correct: 'called',
      context: "Yesterday = nguva yakapfuura. Past tense ye 'call' iri 'called' (regular -ed). 'Calls' ye chizvino, 'call' yakanganisa pano.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chirevo chinotaura "I really long for my mother"',
      question: 'Which sentence best expresses "Ndinosuwa amai vangu zvikuru"?',
      options: [
        { text: "I miss my mother very much.",        correct: true },
        { text: "I'm missing for my mother much.",     correct: false },
        { text: "My mother is missing me much.",        correct: false },
      ],
      explanation: "'I miss [person]' ndiyo nzira yeChiNgezi — pasina 'for'. 'My mother is missing me' inopindura mufambo — zvinoreva amai ndivo vanosuwa, kwete iwe.",
    },
  ],

  rwenDialogue: {
    intro: 'Uri kuronga svondo. Wave kufungira kushanya, kufonera, kana kuita zvimwe ne mhuri yako.',
    lines: [
      { speaker: 'npc', target: "What are you doing this weekend?", native: 'Uri kuita chii svondo rino?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm going to visit my grandmother on Saturday, and I'll call my brother on Sunday — I miss him.", native: 'Ndichashanya mbuya vangu Mugovera, uye ndichafonera mukoma wangu Svondo — ndinomusuwa.', correct: true, feedback: "Wakwanisa — visit, call, miss zvose mu chirevo chimwe! 'I'll' inoratidza zano rauchaita." },
          { target: "Visit. Call. Miss.",                                                                                native: 'Shanya. Fonera. Suwa.',                                                                            correct: false, feedback: "Mashoko ega — wedzera 'I'll' kana 'I'm going to' kuti zvinzwike sevazano." },
          { target: "I miss my brother for visit.",                                                                       native: 'Ndinosuwa mukoma wangu kuti ashanye.',                                                              correct: false, feedback: "Pfungwa yakanyongana — 'miss... for visit' hayina basa. Tora chimwe nechimwe: 'I'm visiting my grandmother. I'll call my brother. I miss him.'" },
        ],
      },
      { speaker: 'npc', target: "Sounds like a lovely weekend with family.", native: 'Zvinonzwika sehesvondo rakanaka nemhuri.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakatakura zviito zvitatu mu chirevo chinotaura mufambo — visit, call, miss zvose pamwe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'I miss my mother (in English)',     correct: ['I miss my mother', 'I miss my mother.', 'i miss my mother'] },
      { prompt: 'I called my brother (past tense)',   correct: ['I called my brother', 'I called my brother.', 'i called my brother'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Sarudza munhu mumwe wepamhuri ubvunze: ndinoda kuvashanya, kuvafonera, kana kuvasuwa here? Edzana kunyora chirevo cheChiNgezi: 'I will call/visit my [person] this week. I miss them.' Verenga muromo. Wozopinda mubasa: tora foni, fonera.",
    rwenSignoff: "Mangwana — kutaura nyaya yepamhuri kuChiNgezi.",
  },

  phase8: {
    scenario: "You're making weekend plans with an English-speaking friend. Tell them what family-related things you'll do this weekend — who you'll visit, who you'll call, and who you've been missing lately.",
    rwenRole: "Sam, a colleague who likes hearing about people's weekends. Asks 'How is your grandmother?' and 'When did you last see your brother?'",
    successCriteria: "User uses at least two of: 'visit', 'call', 'miss' (in any tense). Names at least one family member. Uses 'I'll' or 'I'm going to' for at least one future plan. Doesn't drop into Shona.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
