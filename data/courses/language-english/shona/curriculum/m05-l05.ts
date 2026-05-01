import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-aunts-uncles',
  module: 5,
  lesson: 5,
  title: 'Aunts & Uncles — Tete na Sekuru',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Pano ndipo paunoona musiyano mukuru pakati peChiShona neChiNgezi. ChiShona chinopa zita rakasiyana kune wose wose — tete (vehanzvadzi yababa), maiguru/mainini (vehanzvadzi yamai), babamukuru/babamunini (vehanzvadzi yababa), sekuru (vehanzvadzi yamai). ChiNgezi chinozvitumira zvose mu shoko rimwe: 'aunt' kana 'uncle'.",
    culturalNote: "Zvako zvechiShona zvinopfuma kupfuura ChiNgezi pano. Pakubatanidza tete (paternal aunt — anokupa zita kana pamuchato) ne mainini (junior maternal aunt — kunge mai vako veshure), iwe wakatozvinzwa kuti vane chinzvimbo chakasiyana muupenyu hwako. Zvino kana muchitaurirana ne munhu weChiNgezi, hauna mukana wekuratidza musiyano uyo nemashoko ega — unotofanira kutsanangura: 'my aunt — actually my father's sister' kana 'my mother's younger sister'. ChiNgezi chinokupa nzvimbo yekutsanangura, kwete shoko remhinduro.",
  },

  chunks: [
    {
      id: 'aunt',
      target: 'Aunt',
      native: 'Tete (kana mainini/maiguru)',
      literal: 'paternal aunt OR maternal aunt — collapsed',
      emoji: '👩🏾‍🦱',
      phonetic: 'AHNT (kana ANT)',
      audioRef: null,
    },
    {
      id: 'uncle',
      target: 'Uncle',
      native: 'Sekuru (kana babamukuru/babamunini)',
      literal: 'maternal uncle OR paternal uncle — collapsed',
      emoji: '👨🏾‍🦱',
      phonetic: 'UN-kuhl',
      audioRef: null,
    },
    {
      id: 'cousin',
      target: 'Cousin',
      native: 'Hama (mwana watete kana wesekuru)',
      literal: 'cousin — gender-neutral, no age distinction',
      emoji: '🧑🏾',
      phonetic: 'KUH-zin',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kinship complexity — clarifying with English',
    explanation: "MuChiNgezi, 'aunt' inoreva tete, mainini, kana maiguru — zvose. 'Uncle' inoreva sekuru, babamukuru, kana babamunini. Kana uchida kutsanangura nani-nani, unowedzera tsamba: 'my aunt on my father's side' (= tete) kana 'my mother's younger sister' (= mainini). 'Cousin' haina gender — hapana 'male cousin / female cousin' inoshandiswa zvakareruka.",
    examples: [
      { target: 'My aunt (my father\'s sister)',         native: 'Tete vangu' },
      { target: 'My uncle (my mother\'s brother)',       native: 'Sekuru vangu' },
      { target: 'My cousin (my aunt\'s child)',          native: 'Hama yangu, mwana watete' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Aunt',                    right: 'Tete' },
        { left: 'Uncle',                   right: 'Sekuru' },
        { left: 'Cousin',                  right: 'Hama (mwana watete)' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — woedza kuratidza ku shamwari kuti tete ndiani',
      prompt: 'Tete vangu vanogara muMutare.',
      correct: ['My aunt lives in Mutare.', "My aunt — my father's sister — lives in Mutare.", 'My aunt lives in Mutare', 'my aunt lives in Mutare.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Sekuru vangu, vehama yamai vangu, vandidzidzisa kufambisa motokari.',
      correct: ["My uncle — my mother's brother — taught me to drive.", "My uncle, my mother's brother, taught me to drive.", "My maternal uncle taught me to drive."],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "My cousin is my aunt\'s son"',
      words: ['son.', 'My', 'is', "aunt's", 'cousin', 'my'],
      correct: ['My', 'cousin', 'is', 'my', "aunt's", 'son.'],
      translation: 'Hama yangu mwana watete vangu',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kutsanangura sekuru',
      sentence: 'This is my uncle, on my _____ side.',
      options: ['mother', "mother's", 'mothers'],
      correct: "mother's",
      context: "'My mother's side' — apostrophe-s inoratidza kuti munhu uyu ndewedu kubva kudivi ramai. Yakaoma asi yakakosha pa English.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chirevo chinotamba zvakanaka pakati pe ChiNgezi neChiShona',
      question: "You're at a family wedding, introducing your tete (paternal aunt) to a foreign guest. What do you say?",
      options: [
        { text: "This is my aunt — my father's sister.",   correct: true },
        { text: "This is my tete.",                          correct: false },
        { text: "This my father sister woman.",              correct: false },
      ],
      explanation: "'This is my aunt — my father's sister' inoshanda zvakanaka: 'aunt' inopa form yeChiNgezi, 'my father's sister' inoratidza nuance ye tete inotsanangurirwa. Watarisa zvose ChiShona neChiNgezi.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pamuchato wehama. Mueni weChiNgezi anokumbira kuziviswa kuhama dzauri kushanda nadzo. Tarisa nyaya yetete vako naBabamukuru.",
    lines: [
      { speaker: 'npc', target: "Who is everyone? Help me understand!", native: 'Vose ava ndivanani? Ndibatsire kunzwisisa!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "This is my aunt — my father's sister, we call her 'tete'. And this is my uncle on my father's side, my babamukuru.", native: 'Ava ndi tete vangu — hanzvadzi yababa, tinovadaidza tete. Uye ava ndibabamukuru — mukoma wababa.', correct: true, feedback: "Wakwanisa — wakaratidza ChiNgezi (aunt/uncle) ne ChiShona (tete/babamukuru) zvose. Mueni anonzwisisa udzamu hwemhuri yako." },
          { target: "This my aunt. This my uncle. Different.",                                                                                native: 'Iyi tete vangu. Uyu sekuru vangu. Zvakasiyana.',                                                                       correct: false, feedback: "Pfupi — wedzera 'my father's sister' kana 'my mother's brother' kuti utsanangure musiyano. ChiNgezi chinoda kutsanangura, kwete kushora." },
          { target: "Tete na babamukuru.",                                                                                                   native: 'Tete na babamukuru.',                                                                                                  correct: false, feedback: "ChiShona chete — mueni weChiNgezi anenge asingazvinzwisisi. Yedza kushandisa ChiNgezi pakuziviswa." },
        ],
      },
      { speaker: 'npc', target: "Wow — Shona has so many names for family. I love that.", native: 'Hoo — ChiShona chine mazita mazhinji emhuri. Ndinozvifarira.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Watakura kupfuma kweChiShona kuChiNgezi — pasina kurasikirwa, asi neku tsanangura. Mueni anozvinzwisisa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: "My aunt — my father's sister (in English)", correct: ["My aunt — my father's sister", "My aunt - my father's sister", "My aunt, my father's sister"] },
      { prompt: 'My cousin (in English)',                     correct: ['My cousin', 'my cousin'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Sarudza tete kana sekuru wepedyo. Nyora pa phone muChiNgezi: 'My aunt — my [father's/mother's] sister — lives in [place].' kana 'My uncle on my [father's/mother's] side works as [job].' Cherechedza kuti unotsanangura sei nuance ye Shona muChiNgezi.",
    rwenSignoff: "Mangwana — vamwene navatezvara (in-laws). Pano paine tsika yakaoma.",
  },

  phase8: {
    scenario: "You're at a family wedding in Harare. A foreign guest is curious about who everyone is. Introduce at least one aunt and one uncle, and explain — using English — the Shona kinship distinction (paternal vs maternal side).",
    rwenRole: "James, 40, a guest from the UK who is fascinated by Zimbabwean family structure. Asks 'Wait — is that another aunt? How are they different?' and listens with genuine curiosity.",
    successCriteria: "User uses 'my aunt' or 'my uncle' AND clarifies the side (e.g. 'on my father's side' or 'my mother's brother'). Captures at least one Shona nuance in English. Doesn't simply translate 'tete' as 'aunt' without context.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
