import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-conversation',
  module: 8,
  lesson: 10,
  title: 'A day-in-life conversation — My day in English',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Wakwanisa! Wapedza Module 8. Nhasi tinoisa zvose pamwe chete: 'I am', 'I have', 'I do', 'I make', 'I go', 'I come', 'I want', 'I need', past tense ('went, saw, had'), future ('will, going to'). Zuva rimwe — kubva kumangwanani kusvika manheru — muChiNgezi.",
    culturalNote: "Mhuri yose yeverbs idzi ichakushanda chero kupi muvhu reChiNgezi — London, New York, Cape Town, Lagos, Sydney. ChiShona inopa cohesion ne-prefix dzakareruka; ChiNgezi inopa flexibility ne-mashoko mazhinji. Zvose zvinoshanda — kungoita kuti uzvirovedze. Uchitaura day-in-life muChiNgezi nhasi unenge wakwanisa kutaura nezvechero zuva rauchazadza kumberi.",
  },

  chunks: [
    {
      id: 'review_morning_routine',
      target: 'I wake up at 6, take a shower, and have breakfast.',
      native: 'Ndinomuka na6, ndinogeza, ndichidya kudya kwemangwanani.',
      literal: 'I wake up at 6, take a shower, and have breakfast',
      emoji: '🌅',
      phonetic: 'ay-WAYK-UP-at-SIX',
      audioRef: null,
    },
    {
      id: 'review_workday',
      target: 'I go to work, have meetings, and make plans.',
      native: 'Ndinoenda kubasa, ndine misangano, uye ndinogadzira mahurongwa.',
      literal: 'I go to work, have meetings, and make plans',
      emoji: '💼',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'review_past_future',
      target: 'Yesterday I went home early; tomorrow I will work late.',
      native: 'Nezuro ndakadzoka kumba kare; mangwana ndichashanda kusvika manheru.',
      literal: 'Yesterday I went home early; tomorrow I will work late',
      emoji: '🔄',
      phonetic: 'YES-ter-day-ay-WENT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb fluency — Full day flow',
    explanation: "Zuva rakanyatsovakwa rinoda: (1) PRESENT routine — 'I wake up', 'I go to work', 'I cook dinner'. (2) WANT/NEED — 'I'd like coffee', 'I need a break'. (3) PAST — 'Yesterday I went/saw/had/was'. (4) FUTURE — 'Tomorrow I will/'m going to'. Mufungiriri unobatanidza zvose izvi muhurukuro imwe — verbs idzi ndidzo backbone reChiNgezi rose.",
    examples: [
      { target: 'I wake up at 6 and go to work at 8.',                 native: 'Ndinomuka na6 ndichienda kubasa na8.' },
      { target: 'Yesterday I had a meeting; it was long.',             native: 'Nezuro ndakanga ndine musangano; wakanga wakareba.' },
      { target: "Tomorrow I'll see my friend, then I'll come home.",   native: 'Mangwana ndichaona shamwari yangu, ndozonditsva ndichadzoka kumba.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana zvikamu zvezuva rese',
      pairs: [
        { left: 'I wake up at 6',          right: 'Mangwanani' },
        { left: 'I have a meeting at 10',  right: 'Pakati pezuva' },
        { left: 'I cook dinner at 7',      right: 'Manheru' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — morning + work',
      prompt: 'Ndinomuka na6, ndinoenda kubasa na8.',
      correct: [
        'I wake up at 6, I go to work at 8.',
        'I wake up at 6 and go to work at 8.',
        'I wake up at 6 and I go to work at 8.',
        'i wake up at 6, i go to work at 8.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — past tense yenezuro',
      prompt: 'Nezuro ndakaona shamwari, zvanga zvakanaka.',
      correct: [
        'Yesterday I saw a friend, it was great.',
        'Yesterday I saw a friend, it was good.',
        'I saw a friend yesterday, it was great.',
        'Yesterday I saw my friend, it was great.',
        'yesterday i saw a friend, it was great.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — future plan',
      prompt: 'Mangwana ndichaenda kubasa, ndobika kudya manheru.',
      correct: [
        "Tomorrow I will go to work, then I'll cook dinner in the evening.",
        "Tomorrow I will go to work and cook dinner in the evening.",
        "Tomorrow I'll go to work, then I'll cook dinner in the evening.",
        "Tomorrow I'm going to go to work, then I'll cook dinner.",
        'tomorrow i will go to work, then i will cook dinner.',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka day flow: morning → work → evening',
      words: ['work,', 'I', 'wake', 'I', 'and', 'come', 'home.', 'go', 'I', 'up,', 'to'],
      correct: ['I', 'wake', 'up,', 'I', 'go', 'to', 'work,', 'and', 'I', 'come', 'home.'],
      translation: 'Ndinomuka, ndinoenda kubasa, uye ndinodzoka kumba.',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa nepast tense yakakodzera',
      sentence: 'Yesterday I _____ a long meeting and it _____ tiring.',
      options: ['had / was', 'have / is', 'has / were'],
      correct: 'had / was',
      context: "Past: 'have' → 'had'; 'is' → 'was' (paunaye '-it' kana 'meeting' — singular, saka 'was', kwete 'were').",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-dinner neshamwari yeChiNgezi muLondon. Anokukumbira kuti utsanangure zuva rako rese — kubvira mangwanani kusvika manheru, ne-yesterday ne-tomorrow zvose.",
    lines: [
      { speaker: 'npc', target: "So, walk me through your day. Morning to night.", native: 'Iwe ndiratidze zuva rako. Kubvira mangwanani kusvika manheru.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6, take a shower, and have breakfast around 6:30. Then I go to work at 8 — I had a big meeting yesterday, it was tough. Tomorrow I'll work from home, then I'll cook dinner.", native: 'Ndinomuka na6, ndinogeza, ndichidya kudya kwemangwanani panenge 6:30. Wozonditsva ndinoenda kubasa na8 — ndakanga ndine musangano mukuru nezuro, wakanga wakaoma. Mangwana ndichashanda kubva kumba, ndozonditsva ndichabika kudya.', correct: true, feedback: "Wakwanisa! Wakabatanidza zvose: morning routine (present), past (yesterday — 'had', 'was'), future (tomorrow — 'will work', 'will cook'). Day-in-life yakanyatsovakwa." },
          { target: "Wake 6. Shower. Eat. Go work. Yesterday meeting tough. Tomorrow home cook.", native: 'Muka 6. Geza. Dya. Enda basa. Nezuro musangano wakaoma. Mangwana kumba kubika.', correct: false, feedback: "Mashoko avapo asi pasina structure. Wedzera 'I' pose, uye verbs (is/was, will): 'I wake up... I go... yesterday I HAD... tomorrow I WILL...'." },
        ],
      },
      { speaker: 'npc', target: "Wow, you're busy! What do you usually do to relax?", native: 'Maiwe, una mabasa akawanda! Unowanzo zorora sei?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "In the evenings I watch TV or read. I'd like to see more friends, but I need more time!", native: 'Manheru ndinotarisa TV kana ndinoverenga. Ndingade kuona shamwari dzakawanda, asi ndinoda nguva yakawanda!', correct: true, feedback: "Wakwanisa — 'I watch TV', \"I'd like\", 'I need' — verbs nhatu dzeModule 8 muchirevo chimwe chete." },
          { target: "I see TV. I want friends. No time.", native: 'Ndinoona TV. Ndinoda shamwari. Hapana nguva.', correct: false, feedback: "Edza zvakare: 'I WATCH TV' (kwete 'see'), \"I'D LIKE to see friends\" (yakanaka kupinda 'I want'), 'I NEED time'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wapedza Module 8 — verb backbone reChiNgezi. Be/have/do/make/go/come/want/need/wake/cook/watch — uye past (went/saw/had/was) ne future (will/going to). Zuva rakakwana muChiNgezi. Pamuviri pacho — uri kutaura ChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Yesterday I went home early (in English)', correct: ['Yesterday I went home early', 'Yesterday I went home early.', 'I went home early yesterday.', 'yesterday i went home early.'] },
      { prompt: 'Tomorrow I will work from home (in English)', correct: ['Tomorrow I will work from home', 'Tomorrow I will work from home.', "Tomorrow I'll work from home.", "I'll work from home tomorrow.", "I'm going to work from home tomorrow.", 'tomorrow i will work from home.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi — Day in life',
    task: "Nhasi pakupera kwezuva, taura zvirevo zvishanu pamuromo wako muChiNgezi: (1) 'I woke up at __' (past), (2) 'I went to __' (past), (3) 'It was __' (past), (4) 'Tomorrow I will __' (future), (5) 'I'm going to __' (future). Zuva rimwe chete rinopindurudzwa muChiNgezi rose.",
    rwenSignoff: "Wapedza Module 8 — verbs ndidzo backbone yose. Wese unotaura ChiNgezi anoshandisa idzi 11. Tichaonana muModule 9.",
  },

  phase8: {
    scenario: "Capstone. Uri pa-dinner neshamwari yeChiNgezi yawakaona kekutanga muweek rino. Anokukumbira kuti uratidze zuva rako rese — kubva mangwanani, kupfuura nepa-work, kuita past tense ku-yesterday, future ku-tomorrow, ne-evening routine. Hurukuro inenge yakakwana 4 minutes.",
    rwenRole: "Olivia, 35, journalist muLondon. Ane chido pakuziva kuti vanhu vanorarama sei muvhu rakasiyana — anokubvunza follow-up questions akawanda, asi nehutsika.",
    successCriteria: "Mudzidzi anosanganisa zvose zvitatu: PRESENT (I wake up, I go to work, I cook dinner), PAST (Yesterday I went/saw/had/was), FUTURE (Tomorrow I will/going to). Anoshandisa 'I'd like' kana 'I need', uye anopedza nehutsika.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
