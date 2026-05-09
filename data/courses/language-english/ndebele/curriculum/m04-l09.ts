import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-past-tense-ed-irregulars',
  module: 4,
  lesson: 9,
  title: 'Past tense — -ed and irregulars',
  estimatedMinutes: 7,
  xpReward: 40,

  hook: {
    rwenLine: "Lapha esiNgisini, ukukhuluma ngezolo kumbe nge-last week kufuna i-past tense. I-rule yelula: faka -ed: 'walk' → 'walked', 'work' → 'worked'. Kodwa kulokhu okuphithizelisayo — ama-irregular verbs anjenge 'go' → 'went', hatshi 'goed'.",
    culturalNote: "I-past tense iyenza umehluko omkhulu ku-CV yakho lo ku-job interview. 'I worked at NHS for two years' (workED — past) kuyazwakala kahle kakhulu kunokuthi 'I work at NHS' (kuthi useyaqhubeka manje, kungabi yiqiniso). Lapha kungoye ungabhede phamlile — ama-irregulars amancinyane uyikhumbulayo wonke: go-went, eat-ate, drink-drank, sleep-slept, see-saw, have-had, do-did, make-made. Le ma-pairs angabuyezelwa ekukhanjaneni — ungazifundisi nje ngomthi.",
  },

  chunks: [
    {
      id: 'walked',
      target: 'I walked',
      native: 'Ngahamba (yesterday)',
      literal: 'regular: walk + ed = walked',
      emoji: '🚶⏪',
      phonetic: 'AHY WAWKT',
      audioRef: null,
    },
    {
      id: 'went',
      target: 'I went',
      native: 'Ngaya (yesterday)',
      literal: 'irregular: go → went, NOT "goed"',
      emoji: '🚶➡️⏪',
      phonetic: 'AHY WENT',
      audioRef: null,
    },
    {
      id: 'ate',
      target: 'I ate',
      native: 'Ngadla (yesterday)',
      literal: 'irregular: eat → ate, NOT "eated"',
      emoji: '🍽️⏪',
      phonetic: 'AHY AYT',
      audioRef: null,
    },
    {
      id: 'had',
      target: 'I had',
      native: 'Ngangilakho (past)',
      literal: 'irregular: have → had, NOT "haved"',
      emoji: '🤲⏪',
      phonetic: 'AHY HAD',
      audioRef: null,
    },
    {
      id: 'saw',
      target: 'I saw',
      native: 'Ngabona (yesterday)',
      literal: 'irregular: see → saw, NOT "seed"',
      emoji: '👁️⏪',
      phonetic: 'AHY SAW',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Regular (-ed) vs Irregular past",
    explanation: "AMA-REGULAR: faka -ed kuphela: walk → walked, work → worked, listen → listened, talk → talked, want → wanted, need → needed. AMA-IRREGULAR (kufanele uyikhumbule): go-went, come-came, eat-ate, drink-drank, sleep-slept, speak-spoke, read-read (same spelling but say 'red'!), write-wrote, do-did, make-made, have-had, see-saw, take-took. Akusekho i-rule entanga ku-irregulars — yi-memorise.",
    examples: [
      { target: 'Yesterday I walked to work',     native: 'Izolo ngahamba ngenyawo emsebenzini' },
      { target: 'Last week I went to London',    native: 'Iliviki eledluleyo ngaya eLondon' },
      { target: 'I ate breakfast at 7am',         native: 'Ngadla i-breakfast nge-7 ekuseni' },
      { target: 'She had a cold last week',       native: 'Ubeke umkhuhlane viki eledluleyo' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Faka i-past tense (regular: -ed)",
      sentence: 'Yesterday I _____ (work) at the warehouse.',
      options: ['worked', 'work', 'working'],
      correct: 'worked',
      context: '"Work" yi-regular verb — faka -ed: "worked". Kuyikuthi i-past.',
    },
    {
      type: 'fill_blank',
      instruction: "Faka i-past tense (irregular!)",
      sentence: 'Last weekend I _____ (go) to Manchester.',
      options: ['went', 'goed', 'gone'],
      correct: 'went',
      context: '"Go" yi-irregular — i-past tense yi-"went" (hatshi "goed"). Lokhu kuyiphutha elikhulu uma uthi "I goed".',
    },
    {
      type: 'fill_blank',
      instruction: "Faka i-past tense",
      sentence: 'For lunch yesterday I _____ (eat) chicken and rice.',
      options: ['ate', 'eated', 'eat'],
      correct: 'ate',
      context: '"Eat" yi-irregular — i-past yi-"ate" (i-rhyme le-"late"). Akukho "eated" esiNgisini.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (past tense!)',
      prompt: 'Izolo ngabona udokotela',
      correct: ['Yesterday I saw the doctor', 'Yesterday I saw a doctor', 'I saw the doctor yesterday', 'I saw a doctor yesterday'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Iyiphi i-past tense form eqondileyo?',
      question: 'Last night I _____ (sleep) for eight hours.',
      options: [
        { text: 'slept', correct: true },
        { text: 'sleeped', correct: false },
        { text: 'sleep', correct: false },
      ],
      explanation: '"Sleep" yi-irregular — i-past yi-"slept" (hatshi "sleeped"). Khumbula: keep-kept, sleep-slept, feel-felt, leave-left — la-pattern yi-vowel sound shortening.',
    },
    {
      type: 'build_sentence',
      instruction: "Akhipha umugqa: 'I had a meeting yesterday'",
      words: ['yesterday.', 'a', 'meeting', 'had', 'I'],
      correct: ['I', 'had', 'a', 'meeting', 'yesterday.'],
      translation: 'Izolo ngangile-meeting',
    },
  ],

  rwenDialogue: {
    intro: "Ususe-job interview eBristol. Inkampani ifuna ukukwazi kabanzi ngomsebenzi wakho odlulileyo.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your last job. What did you do there?",
        native: 'Ngitshele ngomsebenzi wakho wokucina. Ubusenzani lapho?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I worked at Mpilo Hospital for two years. I cared for elderly patients.", native: 'Ngasebenza eMpilo Hospital iminyaka emibili. Ngagcina abagulayo abadala.', correct: true, feedback: "Kuhle kakhulu — 'worked' (regular -ed) lo 'cared' (regular -ed). I-past tense yenza i-CV ifanele." },
          { target: "I work at Mpilo Hospital for two years.", native: 'Ngisebenza eMpilo Hospital iminyaka emibili.', correct: false, feedback: "'Work' kungasho usaqhubeka. Sebenzisa 'worked' (-ed) ngenxa yokuthi yi-job edlulileyo. Yi-detail encinyane kodwa ibalulekile ku-interview." },
        ],
      },
      {
        speaker: 'npc',
        target: "Did you go to college as well?",
        native: 'Wahamba e-college lapho na?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I went to NUST in Bulawayo. I studied nursing.", native: 'Yebo, ngaya e-NUST eBulawayo. Ngafunda ubunesi.', correct: true, feedback: "Kuhle. 'Went' (irregular ka 'go'), 'studied' (regular). Kahle kakhulu." },
          { target: "Yes, I goed to NUST.", native: '...', correct: false, feedback: "Akukho 'goed' esiNgisini! Yi-'went'. Lokhu yi-irregular eyokuqala uphathiseza ekhanda." },
        ],
      },
      {
        speaker: 'npc',
        target: "And did you have any difficult cases?",
        native: 'Wabe lemibandela enzima?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I had several difficult cases. I learned a lot.", native: 'Yebo, ngangilemibandela enzima. Ngafunda okunengi.', correct: true, feedback: "Yebo! 'Had' (irregular ka 'have'), 'learned' (regular). Wenze konke kahle." },
          { target: "Yes, I haved difficult cases.", native: 'Yebo, ngangile-cases enzima.', correct: false, feedback: "'Haved' akukho. I-past yi-'had' (irregular). Yikho enye yokuqakathekileyo emasitshebweni." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenze okuhle. I-past tense iyaqakatheka kakhulu emasitshebweni — yenza i-CV yakho ize ngokwesibili. Walked, went, ate, had — phinde phinde lokho ekuseni nyanga.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala i-past tense eqondileyo. Khumbula: ama-irregulars akwazi -ed.',
    prompts: [
      { prompt: 'Past tense ka "go"',     correct: ['Went', 'went'] },
      { prompt: 'Past tense ka "eat"',    correct: ['Ate', 'ate'] },
      { prompt: 'Past tense ka "work"',   correct: ['Worked', 'worked'] },
      { prompt: 'Past tense ka "have"',   correct: ['Had', 'had'] },
      { prompt: 'Past tense ka "see"',    correct: ['Saw', 'saw'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhlanje',
    task: "Cabanga izinto ezi-5 ozenzile izolo. Bhala ngesiNgisi nge-past tense: 'Yesterday I walked to the shop. I ate dinner at 6. I went to bed at 10. I saw my friend. I had a cup of tea.' Phinde uyibhale phansi.",
    rwenSignoff: "Past tense yi-half ye-English fluency. Khumbula ama-irregulars 8: go-went, eat-ate, drink-drank, sleep-slept, see-saw, have-had, do-did, make-made. Sobonana kusasa ku-l10 — i-final lesson ka-Module 4.",
  },

  phase8: {
    scenario: "Job interview eBristol — care home position. I-interviewer ifuna i-history yomsebenzi wakho odlulileyo, lapho ofunde khona, lemibandela enzima oyenzile. Kufanele usebenzise i-past tense — kokubili i-regular (-ed) lo ama-irregulars (went, ate, had, saw).",
    rwenRole: "Rebecca, 45, care home manager interviewing for a senior carer role. Listens carefully — wrong tense suggests you're confused or didn't really do the work.",
    successCriteria: "User uses past tense correctly. At least three regular -ed verbs ('worked', 'cared', 'studied', 'helped') and three irregular verbs ('went', 'had', 'saw', 'ate', 'made', 'did') without forming non-existent forms like 'goed', 'haved', 'eated'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
