import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-buying-ticket',
  module: 9,
  lesson: 5,
  title: 'Email and meetings — "Could you..."',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Esikhiweni sesiNgisi sokusebenzeleyo, ungabuzi 'send me the file' kumphathi wakho — kuyaqakelekayo. Sebenzisa 'Could you...?' kumbe 'Would you mind...?' Lendlela elingabhalwa lokulindela ku-UK kakulu — ungasebenzisi 'please' yodwa, kufaneleka ku-grammar yokucela.",
    culturalNote: "I-UK le-US email culture iyi-formality elahlukile. Ku-UK kuyacaca: 'Could you send me the report?' yi-baseline, 'Would you mind sending...?' yi-extra-polite. I-direct command njenge 'Send me the report' iyaqakelekayo — kungaba kunjenge command yowomngane wesondvo (military). Kunye lokho — i-Zimbabwean professional kungaba ukubonakala lula nje, kodwa lapha kuyabonisa ukuhlonipha kwakho. I-greeting yokuqala: 'Hi [name]' (US, casual UK) kumbe 'Dear [name]' (formal UK). Igama lokuvala: 'Best regards', 'Kind regards', 'Thanks' (lapho kulo-relationship eseyahlonipha). Ungavali nge-'Yours' yodwa — kuyaphelelwa.",
  },

  chunks: [
    {
      id: 'could_you',
      target: 'Could you...?',
      native: 'Ungenelisa uku-...?',
      literal: 'could / you',
      emoji: '🙏',
      phonetic: 'KUUD-yoo',
      audioRef: null,
    },
    {
      id: 'send_me',
      target: 'Send me the file',
      native: 'Ngithumelele i-file',
      literal: 'send / me / the file',
      emoji: '📤',
      phonetic: 'SEND-mee-thuh-FYL',
      audioRef: null,
    },
    {
      id: 'meeting',
      target: 'Meeting',
      native: 'Umhlangano (we-work)',
      literal: 'meeting',
      emoji: '🗓️',
      phonetic: 'MEET-ing',
      audioRef: null,
    },
    {
      id: 'agenda',
      target: 'Agenda',
      native: 'Uhlu lwemibuzo (yomhlangano)',
      literal: 'agenda',
      emoji: '📋',
      phonetic: 'uh-JEN-duh',
      audioRef: null,
    },
    {
      id: 'kind_regards',
      target: 'Kind regards',
      native: 'Ngokuhlonipha (igama lokuvala i-email)',
      literal: 'kind / regards',
      emoji: '✍️',
      phonetic: 'KYND-rih-GARDS',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'Could you...' = ukucela ngokuhlonipha",
    explanation: "I-formula yi-lula: 'Could you' + base verb (send / call / book / share) + okucelayo + 'please' (kuvumelekile, kungaqondisi). Ungacindezeli i-question mark: 'Could you send me the file?' yi-question — kuhle uphendule. Ungasebenzisi 'Send me the file.' kumphathi wakho — yi-command. Ungasebenzisi 'Can you send me the file?' — kuyahamba kuyilungile, kodwa 'Could' kuhleliwe kakhudlwana. I-rule yokuvala i-email: 'Kind regards,' (UK formal), 'Best,' (US casual), 'Thanks,' (kulingana lo-relationship). Igama lakho lilandela ngezansi.",
    examples: [
      { target: 'Could you send me the report by Friday, please?', native: 'Ungenelisa ungithumelele umbiko ngolwesihlanu, sicela?' },
      { target: 'Could we book a meeting for tomorrow?',           native: 'Singenelisa sibhukha umhlangano wakusasa?' },
      { target: 'Kind regards, Sipho',                              native: 'Ngokuhlonipha, Sipho.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Could you...?',   right: 'ungenelisa uku-...?' },
        { left: 'Meeting',         right: 'umhlangano' },
        { left: 'Agenda',          right: 'uhlu lwemibuzo' },
        { left: 'Kind regards',    right: 'igama lokuvala i-email' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okufanele kakulu',
      question: "Ufuna i-file kumphathi wakho. Yiyiphi indlela ehleliwe?",
      options: [
        { text: "Could you send me the file, please?",           correct: true },
        { text: "Send me the file.",                              correct: false },
        { text: "I want the file now.",                           correct: false },
      ],
      explanation: "'Send me the file' yi-command — kungaba ukungahloniphi kumphathi wakho. 'I want the file now' kufana. 'Could you...?' yindlela elingabhalwa.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (i-formal email)',
      prompt: 'Ungenelisa usithumelele umbiko ngolwesihlanu?',
      correct: ['Could you send us the report by Friday?', 'Could you send us the report on Friday?', 'Could you send us the report by Friday, please?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa isikhala — i-formal email yokuvala',
      sentence: 'Thank you for your help.\n\n____________,\nSipho',
      options: ['Kind regards', 'Hey', 'OK bye'],
      correct: 'Kind regards',
      context: "I-email yokusebenzeleyo ivala nge-'Kind regards', 'Best regards', kumbe 'Thanks' (kulingana lokuthi sondela kanjani lomuntu). 'Hey' / 'OK bye' awufanele i-email yokusebenzeleyo.",
    },
  ],

  rwenDialogue: {
    intro: "Ufuna ukubhala i-email kumphathi wakho ucela ukuhamba ngolwesithathu kuze uvakatshele udokotela. Ngalokho ungaqali kanjani?",
    lines: [
      { speaker: 'npc', target: "Hi — I'm just running through emails. Did you need something?", native: 'Salibonani — ngiseza-emails. Ufuna utho?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi Sarah — could I take Wednesday afternoon off for a doctor's appointment, please?", native: 'Salibonani Sarah — ngingenelisa ukuhamba ntambama yangolwesithathu ngiye kudokotela, sicela?', correct: true,  feedback: "Kuhle — uqalisa nge-'Hi', usebenzisa 'could I' (akusi-could-you, ngokuthi yiwena ozakuyenza), wabingelela ngo-'please'. I-Sarah izaqonda khathesi." },
          { target: "I want Wednesday off.",                                                                  native: 'Ngifuna ukugcina ngolwesithathu.',                                                            correct: false, feedback: "'I want' kuyalula kakhulu — kuyazwakala njenge-command. Sebenzisa 'Could I...' kumbe 'Would it be possible to...'." },
          { target: "Send me Wednesday off.",                                                                 native: 'Ngithumelele usuku lokuphumula olwesithathu.',                                                correct: false, feedback: "'Send' kalisetshenziswa lapha — ungafuni ukuthumelelwa usuku. Sebenzisa 'Could I take Wednesday off?'." },
        ],
      },
      { speaker: 'npc', target: "Of course — book it in the calendar. Hope it's nothing serious.", native: 'Yiqondiso — kufakwe esiqalweni. Ngithemba akukho okukhulu.' },
      { speaker: 'rwen', rwenLine: "U-'Could I' kanye no-'Could you' yiyo i-magic words ku-UK email. Uma uyiqonda — i-email yakho ihlonipheka.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'Ungenelisa ungithumelele i-file?' ngesiNgisi", correct: ['Could you send me the file?', 'Could you send me the file?', 'Could you send me the file, please?'] },
      { prompt: "Bhala 'umhlangano' ngesiNgisi",                       correct: ['Meeting', 'meeting', 'A meeting'] },
      { prompt: "Bhala igama lokuvala i-email (formal)",                correct: ['Kind regards', 'kind regards', 'Best regards', 'best regards'] },
    ],
  },

  mission: {
    title: 'Bhala i-email yokuqala',
    task: "Lamuhla, bhala i-email emfutshane (3-5 imisho) kumphathi kumbe ku-colleague. Ungasebenzisi 'I want' — sebenzisa 'Could you...?' kabili. Vala nge-'Kind regards'. Khangela kasibili — bese uthumela.",
    rwenSignoff: 'I-email yokuqala iyahlonipha. Hamba ngokuhlonipha.',
  },

  phase8: {
    scenario: "Usebhala i-email kumphathi wakho ucela: (1) ukushintsha isikhathi se-meeting yakho yangolwesibili, (2) ukucela i-file ye-team yakho. I-Rwen izaba ngumphathi — izaphendula, izabuyisa imibuzo. Sebenzisa 'Could you', 'Would it be possible', 'Kind regards'.",
    rwenRole: "Sarah — umphathi we-care home, oneminyaka 50, opholile ku-email, kodwa olindele ukuhloniphwa ngendlela yokubhala.",
    successCriteria: "Umfundi asebenzise 'Could you' kumbe 'Would it be possible' okungenani kabili. Avale i-email nge-'Kind regards' kumbe 'Best regards'. Angasebenzisi 'I want' kumbe i-direct command. Asebenzise igama 'meeting' / 'agenda'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
