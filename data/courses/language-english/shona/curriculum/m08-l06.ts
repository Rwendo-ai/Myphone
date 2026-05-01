import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-work-school',
  module: 8,
  lesson: 6,
  title: 'Work & school — My day',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Pamberi pevamwe, basa rako rinokuvakira hutsika. MuChiNgezi paunoenda kubasa, unoshandisa 'I go to work', 'I study English', 'I have a meeting'. Mashoko mashoma — asi anoratidza kuti uri kuita basa rakakwana.",
    culturalNote: "MuShona, 'kunoenda kubasa' inotokwana — ChiNgezi inoda 'I go TO work'. Cherechedza kuti pa-'work' iwe haushandise 'a' kana 'the' — 'I go to work' kwete 'I go to the work'. Yakafanana ne 'school' (I go to school) ne 'church' (I go to church). Mashoko aya akabatanidzwa nezvinoitwapo — saka pasina article. Asi 'meeting' yakajairika — 'I have A meeting' kana 'a' yose.",
  },

  chunks: [
    {
      id: 'i_go_to_work',
      target: 'I go to work.',
      native: 'Ndinoenda kubasa.',
      literal: 'I go to work',
      emoji: '💼',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'i_study_english',
      target: 'I study English.',
      native: 'Ndinodzidza ChiNgezi.',
      literal: 'I study English',
      emoji: '📖',
      phonetic: 'ay-STUH-dee-ING-glish',
      audioRef: null,
    },
    {
      id: 'i_have_a_meeting',
      target: 'I have a meeting.',
      native: 'Ndine musangano.',
      literal: 'I have a meeting',
      emoji: '👥',
      phonetic: 'ay-HAV-uh-MEE-ting',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Workday verbs — Go / study / have',
    explanation: "Pakutsanangura zuva rebasa, unoshandisa: GO TO (work, school, the office), STUDY (English, maths), HAVE (a meeting, a call, lunch). Cherechedza: 'go to work' (no article), asi 'go to THE office' (article inoda). 'I have a meeting' inonyatsoreva 'ndine musangano wakatarwa' — kwete chete 'I'm meeting someone'.",
    examples: [
      { target: 'I go to work.',           native: 'Ndinoenda kubasa.' },
      { target: 'I study English.',        native: 'Ndinodzidza ChiNgezi.' },
      { target: 'I have a meeting at 10.', native: 'Ndine musangano na10.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'I go to work',     right: 'Ndinoenda kubasa' },
        { left: 'I study English',  right: 'Ndinodzidza ChiNgezi' },
        { left: 'I have a meeting', right: 'Ndine musangano' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Sarudza preposition kana article',
      sentence: 'I go _____ work every day.',
      options: ['to', 'to the', 'in'],
      correct: 'to',
      context: "'Work' haina article — saka 'go to work', kwete 'go to THE work'.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndine musangano na10.',
      correct: ['I have a meeting at 10.', 'I have a meeting at 10', 'I have a meeting at ten.', 'i have a meeting at 10.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinodzidza ChiNgezi.',
      correct: ['I study English.', 'I study English', "I'm studying English.", "I'm studying English", 'i study english.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "Ndinoenda kubasa mangwanani"',
      words: ['morning.', 'go', 'I', 'work', 'in', 'to', 'the'],
      correct: ['I', 'go', 'to', 'work', 'in', 'the', 'morning.'],
      translation: 'Ndinoenda kubasa mangwanani',
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndeipi inonyatsoshanda?',
      question: 'I _____ a meeting with my manager today.',
      options: [
        { text: 'have', correct: true },
        { text: 'do', correct: false },
        { text: 'make', correct: false },
      ],
      explanation: "Kuva nemusangano = 'to HAVE a meeting'. 'Do a meeting' kana 'make a meeting' hazvishandi — meetings dzinongo'have-iwa'.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-conference yebasa muLondon. Watanga kutaurirana neumwe panguva yebreak.",
    lines: [
      { speaker: 'npc', target: "So what does your typical day look like?", native: 'Ko zuva rako rinotaridzika sei?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I go to work at 8, I have a team meeting at 10, and I study English in the evenings.", native: 'Ndinoenda kubasa na8, ndine musangano nemumwe team na10, uye ndinodzidza ChiNgezi manheru.', correct: true, feedback: "Wakwanisa — wakahwirizana zvitatu zvichishandisa 'go', 'have', 'study' zvose nguva dzakatarwa." },
          { target: "Work 8. Meeting 10. English night.", native: 'Basa 8. Musangano 10. ChiNgezi husiku.', correct: false, feedback: "Mashoko avapo asi haasi muzvirevo. Wedzera 'I' uye verbs: 'I go TO work AT 8...'." },
        ],
      },
      { speaker: 'npc', target: "Impressive — studying English on top of work!", native: 'Zvinokuvadza — kudzidza ChiNgezi pamusoro pebasa!' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Go to work' (no article), 'have a meeting' (article inoda), 'study English' (basic). Mashoko mahofu mashanu chete — asi anokwaniisa zuva rebasa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'I go to work (in English)', correct: ['I go to work', 'I go to work.', 'i go to work.'] },
      { prompt: 'I have a meeting (in English)', correct: ['I have a meeting', 'I have a meeting.', 'i have a meeting.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi pakupera kwezuva, taura zvirevo zvitatu zvinotsanangura zuva rako rebasa: 'I went to work', 'I had a meeting', 'I studied English'. Kana usingashandi — shandisa 'I went to school' kana 'I studied at home'. Yedza pamuromo wako.",
    rwenSignoff: "Mangwana — evening. 'I come home'. Famba zvakanaka.",
  },

  phase8: {
    scenario: "Uri pa-tea break pa-conference yebasa muLondon. Imwe attendee yawira nawe muhurukuro — anokubvunza nezvebasa rako rezuva nezuva.",
    rwenRole: "James, 41, sales manager pa-tech company. Ane interest mukuziva kuti vanhu vanoshanda sei muvhu rakasiyana — anokubvunza zvakawanda nezve schedule yako.",
    successCriteria: "Mudzidzi anotsanangura zuva rake rebasa — anoshandisa 'I go to work' (pasina article), 'I have a meeting' (with article), 'I study ___', uye anosvika pa-coherent picture yebasa.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
