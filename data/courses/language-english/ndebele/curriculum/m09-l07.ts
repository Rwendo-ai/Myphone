import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'Asking for help & clarification',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Esikhiweni sesiNgisi sokusebenzeleyo, ukuthi 'angiqondi' akusilo iphutha — kuyibuhlakani. Ungazenzi sengathi uyaqonda nxa ungaqondi — kungahola ekoneni okukhulu. Sebenzisa: 'Could you say that again, please?' / 'I'm not sure I understand.' / 'Could you explain that?'. I-managers e-UK le-US bayathanda umuntu obuza imibuzo elungile.",
    culturalNote: "Eminye yezakhiwo zama-Africa, ukuvuma ukungaqondi kungenziwa njengokungenelisi. Lapha — kakhulukazi e-care work, e-NHS, e-construction — kuhleliwe nge-safety isiqondiso esiqondileyo. Ungazi-pretendi ukwazi indlela ye-machine, kumbe i-medication, kumbe i-procedure — qha buza. I-managers bayohlonipha lokhu. Igama elilodwa elingaqondiseki: 'I'll figure it out' (ngizakubona) — kuyahleliwe ku-tasks ezincane, kodwa kuyiphutha kuye-medical / safety / financial. Lapho, sebenzisa: 'I'd like to make sure I'm doing this right.' I-Rwen ifaka uhlobo lwemibuzo enkulu lapha.",
  },

  chunks: [
    {
      id: 'could_you_repeat',
      target: 'Could you repeat that?',
      native: 'Ungenelisa uphinde lokho?',
      literal: 'could / repeat',
      emoji: '🔁',
      phonetic: 'KUUD-yoo-rih-PEET-that',
      audioRef: null,
    },
    {
      id: 'i_dont_understand',
      target: "I don't understand",
      native: 'Angiqondi',
      literal: "I / don't / understand",
      emoji: '🤔',
      phonetic: 'ay-DOHNT-un-dur-STAND',
      audioRef: null,
    },
    {
      id: 'could_you_explain',
      target: 'Could you explain that?',
      native: 'Ungenelisa uchaze lokho?',
      literal: 'could / explain',
      emoji: '💡',
      phonetic: 'KUUD-yoo-ek-SPLAYN-that',
      audioRef: null,
    },
    {
      id: 'sorry_didnt_catch',
      target: "Sorry, I didn't catch that",
      native: 'Uxolo, angizwanga kahle',
      literal: 'I / did / not / catch',
      emoji: '👂',
      phonetic: 'SOR-ee-ay-DID-nt-KATCH-that',
      audioRef: null,
    },
    {
      id: 'make_sure',
      target: "I want to make sure I've got this right",
      native: 'Ngifuna ukuthi ngiqinisile ukukhalipha',
      literal: 'make / sure / got / right',
      emoji: '✔️',
      phonetic: 'MAYK-shoor-ay-got-this-RYT',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Three levels of asking for clarification",
    explanation: "Izinga 1 — angizwanga: 'Sorry, I didn't catch that.' / 'Could you say that again?' (ufuna ulwakuphinda nje). Izinga 2 — angiqondi: 'I don't understand.' / 'Could you explain that?' (ufuna ngokucazwa). Izinga 3 — ngifuna ukuqinisa: 'I want to make sure I've got this right — you said [okuthe ukuthe], is that correct?' (uphinda ngamagama akho, ucela isivumo). Izinga lesithathu yiyona indlela ye-safety culture e-UK / US — lapho i-mistake ingaba lemiphumela emikhulu.",
    examples: [
      { target: "Sorry, I didn't catch that — could you repeat it?",                          native: 'Uxolo, angizwanga — ungenelisa uphinde?' },
      { target: "I'm not sure I understand. Could you explain it again?",                      native: 'Angiqondi kahle. Ungenelisa uchaze futhi?' },
      { target: "I want to make sure — you said 8am Wednesday, is that right?",                native: 'Ngifuna ukuqinisa — uthe ngo-8 ekuseni ngolwesithathu, kunjalo na?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amazwi',
      pairs: [
        { left: 'Could you repeat that?',     right: 'ungenelisa uphinde lokho?' },
        { left: "I don't understand",         right: 'angiqondi' },
        { left: "Sorry, I didn't catch that", right: 'uxolo, angizwanga' },
        { left: 'Could you explain?',         right: 'ungenelisa uchaze?' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Khetha okukahle e-care home",
      question: "I-manager iyakuxoxela ngamaphilisi (medication) ozakuwanika isigulane. Awusakholwa wonke amagama. Ungenza njani?",
      options: [
        { text: "I want to make sure I've got this right — could you go through it again?", correct: true },
        { text: "Yes, OK, I understand.",                                                     correct: false },
        { text: "Don't worry, I'll figure it out.",                                            correct: false },
      ],
      explanation: "Ku-medication kalakuncane okuhle 'I'll figure it out'. Iphutha lingahlasela isigulane. Sebenzisa 'I want to make sure' — i-managers e-UK / NHS bayohlonipha lokhu kakhulu.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Uxolo, angizwanga — ungenelisa uphinde?',
      correct: ["Sorry, I didn't catch that — could you repeat it?", "Sorry, I didn't catch that — could you repeat that?", "Sorry, I didn't catch that. Could you repeat?", "Sorry I didn't catch that — could you repeat it?"],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa isikhala',
      sentence: "I'm not sure I understand. Could you ______ that?",
      options: ['explain', 'say', 'do'],
      correct: 'explain',
      context: "Ufuna ukucazwa kakhulu — sebenzisa 'explain'. 'Say' kuyikuthi uthi (uphinde okutshilo), 'do' kuyincane.",
    },
  ],

  rwenDialogue: {
    intro: "Yilanga lakho lokuqala e-care home. I-supervisor — uMargaret — uyakucazela indlela yokupha amaphilisi.",
    lines: [
      { speaker: 'npc', target: "Mrs Brown gets her tablets at 8am, with a glass of water — but only after breakfast, not before. The dosage changed last week — it's two pills now, not one. OK?", native: "UMrs Brown uthola amaphilisi akhe ngo-8 ekuseni, lengilazi yamanzi — kodwa kuphela emva kokudla kwasekuseni, hatshi ngaphambi. I-dosage yashintsha kuviki edluleyo — sekwakhiwa amabili, hatshi linye. Kuhle?" },
      {
        speaker: 'user',
        userChoices: [
          { target: "I want to make sure I've got this right — two pills, after breakfast, with water. Is that correct?", native: 'Ngifuna ukuqinisa — amabili, emva kokudla kwasekuseni, lamanzi. Kuyikho?', correct: true,  feedback: "Kuhle kakhulu — uphinde ngamagama akho amathathu ababalulekileyo. Lokhu kuyiyo i-NHS-style safety check. UMargaret uzathokoza." },
          { target: 'Yes, OK.',                                                                                              native: 'Yebo, kuhle.',                                                                  correct: false, feedback: "Kalwazi yini ngempela. Phinda ngamagama akho ukuze i-Margaret azwe ukuthi ulungile. Iphutha encane lapha lingaba kanzima." },
          { target: "Sorry, I didn't catch any of that.",                                                                      native: 'Uxolo, angizwanga lutho.',                                                       correct: false, feedback: "Kuyahamba — kodwa zama ukuphinda ezinye izinto ozizwile. 'I caught the part about 8am — could you repeat the dosage?' kuhle kakhulu." },
        ],
      },
      { speaker: 'npc', target: "Yes, that's exactly right. Good — always check. Better to ask twice than make a mistake.", native: 'Yebo, kuyikho ngokuqondile. Kuhle — buza njalo. Kungcono ukubuza kabili kukhanya kwenza iphutha.' },
      { speaker: 'rwen', rwenLine: "Lokhu yikho i-managers bakuthandayo: ukungazinkanyezi ekungaziyo. Ukubuza kuhle.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'Angiqondi' ngesiNgisi",                          correct: ["I don't understand", "I don't understand.", "I do not understand"] },
      { prompt: "Bhala 'Ungenelisa uphinde lokho?' ngesiNgisi",          correct: ['Could you repeat that?', 'Could you repeat that', 'Could you repeat it?'] },
      { prompt: "Bhala 'Uxolo, angizwanga kahle' ngesiNgisi",            correct: ["Sorry, I didn't catch that", "Sorry, I didn't catch that.", "I didn't catch that"] },
    ],
  },

  mission: {
    title: 'Buza emhlanganweni',
    task: "Lamuhla emsebenzini kumbe ekutholeni umyalezo (instruction), buza okungenani umbuzo munye omfutshane wokucazwa: 'Could you say that again?' kumbe 'I want to make sure I've got this right.' Khangela ukuthi umuntu uphendula njani.",
    rwenSignoff: 'Imibuzo emihle yenza umsebenzi olungile. Hamba ngokubuza.',
  },

  phase8: {
    scenario: "Usemsebenzini, i-supervisor wakho uyakucazela indlela yokwenza into entsha (procedure) — ngokushuthi, ngamagama amanengi. Uzakukhuluma ngokushuthi, kuze kungasiqondisi nzima. Kufanele ubuze yini ukuze ucazwe kahle ngaphandle kokukubonisa njengonganakekeli.",
    rwenRole: "Tom — i-supervisor wakho, useminyakeni eminengi e-construction, ukhulumayo ngokushuthi. Kalalele kakhudlwana, kodwa angaphenduka uma uzwelele uba ufunda kahle.",
    successCriteria: "Umfundi acele ukuphinda kumbe ukucazwa okungenani izikhathi ezimbili. Asebenzise okungenani amabili kwala mabhubhu: 'Could you repeat that?', 'I don't understand', 'Could you explain that?', 'I want to make sure I've got this right'. Aphinde umyalezo ngamagama akhe ukuze aqinise.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
