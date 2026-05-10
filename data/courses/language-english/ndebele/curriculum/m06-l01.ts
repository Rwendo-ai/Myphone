import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l01-numbers-1-10',
  module: 6,
  lesson: 1,
  title: "I'm sick / unwell / not feeling great",
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "EsiNdebeleni sithi 'angiphilanga', 'ngiyagula', 'ngingaphilanga kuhle'. EsiNgisini kunemikhondo emithathu eyamukelekayo: 'I'm sick' (US-friendly, kanjalo neUK), 'I'm unwell' (eyamukelekayo, eyokucina ngakithi), lo 'I'm not feeling great' (esoftileyo, ifaka inhliziyo). Khetha eyodwa — abantu bayazwisisa.",
    culturalNote: "EUS, 'sick' kuyajwayeleka — uphathisi obese: 'I'm calling in sick today.' EUK, 'sick' iqondene futhi nokuhlanza — 'I feel sick' kungatsho 'sengizahlanza'. Yikho amaBritish bavame ukuthi 'I'm unwell' kumbe 'I'm poorly' (esicilengangeni). EZimbabwe sijwayele ukucabanga ukuthi ukutshela umphathi ukuthi awuphilanga kuyiziqumo — kodwa eUK/US, kuyalindeleka ukuba uthi 'I'm not feeling well today' usemsebenzini wakho ngaphandle kokuzwa amahloni. Akudingakali ukulanda yonke into oyizwayo — 'I'm unwell' kwedwa kwanele.",
  },

  chunks: [
    {
      id: 'im_sick',
      target: "I'm sick",
      native: 'Angiphilanga / Ngiyagula',
      literal: undefined,
      emoji: '🤒',
      phonetic: 'aym-SIK',
      audioRef: null,
    },
    {
      id: 'im_unwell',
      target: "I'm unwell",
      native: 'Angiphilanga (yokuhlonipha — UK)',
      literal: undefined,
      emoji: '😷',
      phonetic: 'aym-un-WEL',
      audioRef: null,
    },
    {
      id: 'not_feeling_great',
      target: "I'm not feeling great",
      native: 'Angizizwa kuhle',
      literal: undefined,
      emoji: '😟',
      phonetic: 'aym-not-FEE-ling-GRAYT',
      audioRef: null,
    },
    {
      id: 'i_feel_terrible',
      target: 'I feel terrible',
      native: 'Ngizwa kubi kakhulu',
      literal: undefined,
      emoji: '🥴',
      phonetic: 'ay-feel-TEH-ruh-bul',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'I'm + state' — kungezelelwa register",
    explanation: "ESiNgisini, ukubika ukugula kusebenzisa u-'I'm + adjective': 'I'm sick', 'I'm unwell', 'I'm tired'. Uma ungafuni ukuzwakala uphongoza, fakela 'a bit' kumbe 'a little': 'I'm a bit unwell.' Lokho kusoftisha kakhulu. Ungasebenzisi 'I have sickness' — kuyiNdebeleni leyo. Ngesi-Ngisi yi-'I am' + isimo.",
    examples: [
      { target: "I'm sick today.",                  native: 'Lamuhla angiphilanga.' },
      { target: "I'm a bit unwell — sorry.",         native: 'Ngingaphilanga kuhle kancane — uxolo.' },
      { target: "I'm not feeling great this morning.", native: 'Angizizwa kuhle namhlanje ekuseni.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama esiNgisi lencazelo zawo zesiNdebele',
      pairs: [
        { left: "I'm sick",              right: 'Angiphilanga / Ngiyagula' },
        { left: "I'm unwell",            right: 'Angiphilanga (yokuhlonipha)' },
        { left: "I'm not feeling great", right: 'Angizizwa kuhle' },
        { left: 'I feel terrible',       right: 'Ngizwa kubi kakhulu' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo',
      question: "Usemsebenzini wakho eLondon, awuphilanga. Ushaya umphathi i-text. Yiphi engcono?",
      options: [
        { text: "Hi, I'm not feeling well today — I won't be in. Will update you tomorrow.", correct: true },
        { text: 'I have big sickness today.', correct: false },
        { text: 'I am vomit and dying.',       correct: false },
      ],
      explanation: "'I'm not feeling well' yifomula ephephileyo emsebenzini eUK/US. 'I have sickness' kuyiNdebele lehluliwe. Ungazichazi kakhulu — abaqashi bafuna fakhisheke nje.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — utshela umphathi',
      prompt: 'Lamuhla angiphilanga.',
      correct: ["I'm sick today.", "I am sick today.", "I'm not well today.", "i'm sick today."],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho',
      sentence: "I'm a bit _______ today — I'll work from home if that's okay.",
      options: ['unwell', 'unwellness', 'unwelling'],
      correct: 'unwell',
      context: "Ngemva kuka 'a bit' (kancane) kulandelana adjective — 'unwell'. 'Unwellness' lo 'unwelling' akusiwo magama esiNgisini.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama ngendlela eqondileyo',
      words: ['great', "I'm", 'feeling', 'not'],
      correct: ["I'm", 'not', 'feeling', 'great'],
      translation: 'Angizizwa kuhle',
    },
  ],

  rwenDialogue: {
    intro: 'Usemsebenzini wakho omtsha eUK. Ekuseni awuphilanga — uphathwa likhanda futhi awusalele kahle. Ushaya umphathi wakho i-WhatsApp.',
    lines: [
      { speaker: 'npc', target: 'Hey, are you on your way? The shift starts at 8.', native: 'Salibonani, usendleleni? I-shift iqala ngo 8.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi Sarah — I'm sorry, I'm not feeling well today. I won't be able to come in.", native: "Salibonani Sarah — uxolo, angiphilanga lamuhla. Angeke ngikwazi ukufika.", correct: true, feedback: "Kuhle — uvule ngokuhloniphayo, watsho ukuthi awuphilanga, watsho ukuthi awufiki. Yilokho akufunayo." },
          { target: 'I am sickness today, no come work.', native: 'Mina sickness lamuhla, kungeze kuya msebenzi.', correct: false, feedback: "ESiNgisini akusebenzi njalo. Sebenzisa 'I'm not feeling well today.' Kuyaphephileyo, kuyacaceleyo." },
          { target: "I'm dying.", native: 'Sengiyafa.', correct: false, feedback: "Lokhu kuwumdlalo eUK/US — ungasebenzisa kumphathi! Tshono iqiniso: 'I'm unwell' kumbe 'I'm not feeling well.'" },
        ],
      },
      { speaker: 'npc', target: "Sorry to hear that — get well soon. Take care.", native: "Lusizi ukukuzwa — phila masinyane. Khangela impilo." },
      {
        speaker: 'rwen',
        rwenLine: "Yes! Awumchazelanga umphathi wonke umkhuhlane wakho — kunye nje. 'I'm not feeling well' kuyamela isigaba sokuqala soku-Module 6.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva — bhala ngenhliziyo.',
    prompts: [
      { prompt: "Bhala 'Angiphilanga' ngesiNgisi (eyokuhlonipha emsebenzini)", correct: ["I'm unwell", "I am unwell", "i'm unwell", "I'm unwell."] },
      { prompt: "Bhala 'Angizizwa kuhle' ngesiNgisi", correct: ["I'm not feeling well", "I am not feeling well", "I'm not feeling great", "i'm not feeling well"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Khumbula isikhathi obewungaphilanga ngaso. Bhala kabili ngesiNgisi: 'I was sick last ___' lo 'I'm not feeling great today.' Phinda khulukhulu — ungashukunyiswa.",
    rwenSignoff: 'Kusasa siphendula nge-headache, stomachache, lo sore throat. Phila kahle.',
  },

  phase8: {
    scenario: "You're a care worker in Birmingham. You wake up with a fever and sore body — you can't go to work. Phone your supervisor and explain you're unwell. Don't over-explain symptoms; just say you're not well and you'll be back when better.",
    rwenRole: "Sarah, 50, your care home supervisor. Kind but professional. She'll thank you for letting her know early and may ask 'when do you think you'll be back?'",
    successCriteria: "User uses 'I'm not feeling well' or 'I'm unwell' (NOT 'I have sickness' or Ndebele). Apologises for the inconvenience. Doesn't over-share symptoms. Stays in English throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
