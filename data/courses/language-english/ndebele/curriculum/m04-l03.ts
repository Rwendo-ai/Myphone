import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-torso-chest-stomach-back',
  module: 4,
  lesson: 3,
  title: 'Torso — chest, stomach, back',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "EsiNgisini sicebisa amaphathi amabili: 'chest' (isifuba), 'stomach' (isisu), lo 'back' (umhlana). Lapha eUK uzayetheka njalo ku-doctor lapho uthi 'I have a stomach ache' kumbe 'My chest feels tight'. Le-vocabulary iqakathekile.",
    culturalNote: "Ku-NHS, nxa uthi 'chest pain' (ubuhlungu esifubeni) — udokotela uzakuphendula masinya, ngoba lokhu kungaba yi-heart attack. Akumelanga uthi 'chest pain' nxa kuyisifuba esikhotsa kumbe i-cold kuphela. Sebenzisa 'tight chest' (isifuba esiqumayo) ku-cold, lo 'chest pain' yindlela enjongiwe ye-emergency. Lakanye 'stomach' lapha kuyibanga lonke phakathi — hatshi izinso kuphela.",
  },

  chunks: [
    {
      id: 'chest',
      target: 'Chest',
      native: 'Isifuba',
      literal: 'front of upper torso — where heart and lungs are',
      emoji: '🫁',
      phonetic: 'CHEST',
      audioRef: null,
    },
    {
      id: 'stomach',
      target: 'Stomach',
      native: 'Isisu',
      literal: 'belly area — what we eat with',
      emoji: '🫃',
      phonetic: 'STUM-uk',
      audioRef: null,
    },
    {
      id: 'back',
      target: 'Back',
      native: 'Umhlana',
      literal: 'back of torso — opposite of chest',
      emoji: '🔙',
      phonetic: 'BAK',
      audioRef: null,
    },
    {
      id: 'shoulder',
      target: 'Shoulder',
      native: 'Ihlombe',
      literal: 'top of arm joint',
      emoji: '🤷',
      phonetic: 'SHOHL-duh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Pain phrases: 'I have a ____ ache'",
    explanation: "Esiqondisweni se-medical, kulamabinzana amabili amakhulu: (1) 'I have a [body part] ache' — eg 'I have a stomach ache', 'I have a backache'. (2) 'My [body part] hurts' — eg 'My chest hurts'. Khumbula: 'headache', 'stomach ache', 'backache' kungebizo elilodwa, kodwa 'chest pain' lo 'shoulder pain' kuthi 'pain'. Lokhu yi-irregular vocabulary — uyikhumbule kanye.",
    examples: [
      { target: 'I have a stomach ache',     native: 'Ngiyezwa isisu' },
      { target: 'My back hurts',             native: 'Umhlana wami uyangiphatha' },
      { target: 'I have chest pain',         native: 'Ngilobuhlungu esifubeni' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Chest',     right: 'Isifuba' },
        { left: 'Stomach',   right: 'Isisu' },
        { left: 'Back',      right: 'Umhlana' },
        { left: 'Shoulder',  right: 'Ihlombe' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa ngegama eliqondileyo',
      sentence: 'I ate too much. My _____ hurts.',
      options: ['stomach', 'chest', 'back'],
      correct: 'stomach',
      context: 'Lapho udle kakhulu, yisisu esibuhlungu (hatshi isifuba). "My stomach hurts" kumbe "I have a stomach ache".',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Umhlana wami uyangiphatha kakhulu',
      correct: ['My back hurts a lot', 'My back hurts very much', 'my back hurts a lot'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Iyiphi okufanele uthi ku-NHS lapho udokotela ekubuza?',
      question: "Uyezwa isifuba sakho sicindezela. Uthini?",
      options: [
        { text: "I have chest pain.", correct: true },
        { text: "Chest is paining me.", correct: false },
        { text: "My chest is pain.", correct: false },
      ],
      explanation: "'I have chest pain' yindlela elungileyo. Le-phrase ku-NHS iyenza udokotela akusukumele masinya — ngenxa yokuthi 'chest pain' kungaba yi-heart attack. Khumbula: 'pain' yi-noun, awusebenzisi 'is pain'.",
    },
  ],

  rwenDialogue: {
    intro: "Usuvumba e-Glasgow ngezikhathi zase-busika. Imisebenzi yakho iyenza umhlana lo isisu zikuphe inkinga. Uya kwa-GP.",
    lines: [
      {
        speaker: 'npc',
        target: "Hello, what brings you in today?",
        native: 'Sawubona, ukulethelwe yini lamhla?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have a stomach ache and my back hurts.", native: 'Ngiyezwa isisu lomhlana wami uyangiphatha.', correct: true, feedback: "Kuhle. 'Stomach ache' lo 'my back hurts' — kuyaqondakala kuhle ku-doctor." },
          { target: "Stomach is paining and back is sore.", native: 'Isisu siyezwa ubuhlungu lomhlana uqaqamba.', correct: false, feedback: "Faka 'my' njalo. 'My stomach hurts' kumbe 'I have a stomach ache'. Akusebenzi ukutsho 'stomach is paining' kuphela." },
          { target: "I have chest pain and back pain.", native: 'Ngilobuhlungu esifubeni lasemhlane.', correct: false, feedback: "Qaphela: 'chest pain' kuyenza udokotela acabange yi-heart attack. Nxa kuyisisu (stomach) hatshi isifuba (chest), tsho lokho." },
        ],
      },
      {
        speaker: 'npc',
        target: "How long has the back pain been going on?",
        native: 'Sekudlulwe isikhathi esinganani umhlana ungiphatha?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "About one week. It's worse in the morning.", native: 'Sokungaba lisonto. Kubi kakhulu ekuseni.', correct: true, feedback: "Yebo. Le-detail (when, how bad) ku-helpful kakhulu ku-GP." },
          { target: "Long time.", native: 'Isikhathi eside.', correct: false, feedback: "Tsho lokho ngokucacileyo — 'one week', 'three days'. Udokotela ufuna i-number." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenza ngendlela. Isifuba, isisu, umhlana — sengathi uyazi okutsho ku-NHS. Lokhu kungalondoloza isikhathi se-appointment yakho.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu.',
    prompts: [
      { prompt: 'Isifuba (ngesiNgisi)',  correct: ['Chest', 'chest'] },
      { prompt: 'Isisu (ngesiNgisi)',    correct: ['Stomach', 'stomach'] },
      { prompt: 'Umhlana (ngesiNgisi)',  correct: ['Back', 'back'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhlanje',
    task: "Yithi izitho ezintathu zomzimba phakathi: 'my chest', 'my stomach', 'my back'. Phinde phinde uthi: 'I have a stomach ache', 'My back hurts'. Yikho okuzosebenzisa ku-doctor.",
    rwenSignoff: "Khumbula: 'chest pain' = emergency, 'stomach ache' = ngokuvamile. Sobonana kusasa.",
  },

  phase8: {
    scenario: "GP appointment eGlasgow. User uyezwa isisu kanye lo umhlana — kufanele ukuchaze ngokucacileyo. Udokotela uzobuza imibuzo yokuhlola: kunini kwaqala, kuyaqina kunini, kuhamba kanjani umhlana lapho uvuka.",
    rwenRole: "Dr Macleod, NHS GP, careful and methodical, distinguishes between 'chest pain' (urgent) and 'stomach ache' / 'back pain' (routine).",
    successCriteria: "User correctly names torso body parts with 'my' or with 'a [bodypart] ache' format. Uses 'stomach ache', 'back pain', 'chest tight' / 'chest pain' appropriately for each symptom.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
