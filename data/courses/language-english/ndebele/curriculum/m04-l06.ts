import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-speak-listen-read-write',
  module: 4,
  lesson: 6,
  title: 'To speak / listen / read / write',
  estimatedMinutes: 6,
  xpReward: 35,

  hook: {
    rwenLine: "La ma-verbs amane: speak (khuluma), listen (lalela), read (bala), write (bhala). Yiwo asetshenziswa kakhulu emsebenzini, esikolweni, ku-paperwork. EUK ungeke uphunyuke kungakaze kakhulu.",
    culturalNote: "Esakhiweni se-CV / job application yakho, le-verbs zaqakathekileyo: 'I can speak English and Ndebele', 'I read and write English fluently'. Iqakathekile yi-difference phakathi kuka 'speak' lo 'talk'. 'Speak' = formal, 'talk' = casual. Ku-job interview uthi 'I speak English' (hatshi 'I talk English' — kuyazwakala kungezwa kakhulu). EsiNdebeleni igama elilodwa ('khuluma') liyenza kokubili — esiNgisini kufuneka ukhethe.",
  },

  chunks: [
    {
      id: 'speak',
      target: 'I speak',
      native: 'Ngiyakhuluma',
      literal: 'present, first person — formal',
      emoji: '🗣️',
      phonetic: 'AHY SPEEK',
      audioRef: null,
    },
    {
      id: 'listen',
      target: 'I listen',
      native: 'Ngiyalalela',
      literal: 'pay attention to sound',
      emoji: '👂',
      phonetic: 'AHY LIS-en',
      audioRef: null,
    },
    {
      id: 'read',
      target: 'I read',
      native: 'Ngiyabala',
      literal: 'present — same spelling as past tense, different sound',
      emoji: '📖',
      phonetic: 'AHY REED (present) / RED (past!)',
      audioRef: null,
    },
    {
      id: 'write',
      target: 'I write',
      native: 'Ngiyabhala',
      literal: 'silent w! sounds like "rite"',
      emoji: '✍️',
      phonetic: 'AHY RAYT — silent w',
      audioRef: null,
    },
  ],

  pattern: {
    name: "speak / listen / read / write — language uses",
    explanation: "Lapho ukhuluma ngolimi: 'I speak English', 'I read Ndebele', 'I write reports', 'I listen to the news'. Khumbula: 'speak [language]' (akukho preposition), kodwa 'listen TO [something]' (njalo lefani 'to'). Kanjalo 'write IN [language]' nxa kuqakathekile ('I write in English'). I-difference encinyane phakathi kwala-prepositions iqakathekile ku-CV yakho.",
    examples: [
      { target: 'I speak English and Ndebele',    native: 'Ngiyakhuluma isiNgisi lesiNdebele' },
      { target: 'I listen to the radio',          native: 'Ngilalela i-redio' },
      { target: 'She reads books every night',    native: 'Ubala izincwadi ebusuku ngabunye' },
      { target: 'I write emails in English',      native: 'Ngibhala ama-email ngesiNgisi' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Khetha i-verb eqondileyo",
      sentence: 'Please _____ to me. I have something to say.',
      options: ['listen', 'speak', 'read'],
      correct: 'listen',
      context: '"Listen to me" = lalela kimi. Lapha umuntu uzakhuluma — omunye kufanele alalele.',
    },
    {
      type: 'fill_blank',
      instruction: "Faka i-preposition eqondileyo",
      sentence: 'I listen _____ the news every morning.',
      options: ['to', 'at', 'in'],
      correct: 'to',
      context: '"Listen to" yi-fixed expression — njalo nge-"to". Akekho "listen the news" — kufuneka i-"to".',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (CV-style)',
      prompt: 'Ngikhuluma isiNgisi lesiNdebele',
      correct: ['I speak English and Ndebele', 'i speak English and Ndebele'],
    },
    {
      type: 'build_sentence',
      instruction: "Akhipha umugqa: 'I write emails every day'",
      words: ['day.', 'every', 'emails', 'write', 'I'],
      correct: ['I', 'write', 'emails', 'every', 'day.'],
      translation: 'Ngibhala ama-email nsuku zonke',
    },
    {
      type: 'multiple_choice',
      instruction: 'Iyiphi i-CV-friendly version?',
      question: "Wedlulisa ku-Manager: 'Ngingakhuluma kuhle isiNgisi.' Bhala ngesiNgisi.",
      options: [
        { text: "I can speak English fluently.", correct: true },
        { text: "I can talk English good.", correct: false },
        { text: "I am speaking English.", correct: false },
      ],
      explanation: "'Speak' yi-formal, 'talk' yi-casual. Ku-CV, kuhle uthi 'I speak English fluently'. 'I am speaking' yindlela ye-present continuous (manje le-second), hatshi i-skill.",
    },
  ],

  rwenDialogue: {
    intro: "Usuku lokuqala kwakho ku-job — ku-care home eLeicester. Ku-induction, i-trainer ufuna ukukwazi i-language skills zakho.",
    lines: [
      {
        speaker: 'npc',
        target: "What languages do you speak?",
        native: 'Yiziphi izilimi okhuluma?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I speak English, Ndebele, and a little Shona.", native: 'Ngikhuluma isiNgisi, isiNdebele, lesiShona kancane.', correct: true, feedback: "Kahle. 'I speak [language]' (akukho preposition phambi kolimi)." },
          { target: "I am speaking English and Ndebele.", native: 'Ngiyakhuluma isiNgisi lesiNdebele.', correct: false, feedback: "'I am speaking' kuyazwakala usakhuluma manje. Ku-skill, sebenzisa 'I speak'." },
        ],
      },
      {
        speaker: 'npc',
        target: "Great. Can you read and write English well?",
        native: 'Kuhle. Ungabala ubhala isiNgisi kahle?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I read and write English every day at work.", native: 'Yebo, ngiyabala ngibhale isiNgisi nsuku zonke emsebenzini.', correct: true, feedback: "Kuhle kakhulu — la-verbs zilungile, kanjalo i-context (work) iyenza i-credible." },
          { target: "Yes, I can read English and English I write.", native: '...', correct: false, feedback: "Ungayilukuthi — sebenzisa i-pattern eqondileyo: 'I read and write English'." },
        ],
      },
      {
        speaker: 'npc',
        target: "Perfect. One last thing — do you listen well to instructions?",
        native: 'Kuhle. Okokucina — uyalalela kuhle kwi-imibambeko?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I always listen carefully to instructions.", native: 'Yebo, ngilalela ngokuthula kuze kufike imibambeko.', correct: true, feedback: "Wenzile kahle. 'Listen to' yi-fixed expression. 'Carefully' yi-bonus word elenza umsebenzi wakho ubonakale ngolulutho." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakhuluma njengomuntu okhuluma kahle. 'Speak, listen, read, write' — sengathi uzizwa ekhayeni.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngekhanda. Khumbula i-prepositions.',
    prompts: [
      { prompt: '"I speak English" (ngesiNgisi)',     correct: ['I speak English', 'i speak English'] },
      { prompt: '"Listen to me" (ngesiNgisi)',        correct: ['Listen to me', 'listen to me'] },
      { prompt: '"I write reports"',                  correct: ['I write reports', 'i write reports'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhlanje',
    task: "Bhala ihlokomelo eli-encinyane: 'I speak English. I read books. I write emails. I listen to music.' Phinde phinde ngelizwi eliphezulu. Le ma-sentence yiwo ozawasebenzisa kakhulu eUK.",
    rwenSignoff: "Le ma-verbs ayasebenza nge-CV, ku-job interview, lasekuxoxeni nje. Wenzile kahle. Sobonana kusasa.",
  },

  phase8: {
    scenario: "Care home induction eLeicester. I-trainer ufuna ukubuza ngezilimi zakho, ngokufunda lokubhala isiNgisi, lokuthi uyalalela kanjani imibambeko ye-care plan. Kufanele uphendule i-confident lo-clear.",
    rwenRole: "Janet, 55, care home training officer. Asks about language skills, reading/writing competence, and listening — needed for safety records and care notes.",
    successCriteria: "User uses 'I speak [language]', 'I listen to [thing]' (with 'to'), 'I read', 'I write' correctly. At least four sentences using the four verbs without dropping prepositions where required.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
