import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-proverbs',
  module: 10,
  lesson: 9,
  title: 'Sharing Shona proverbs in English — Tsumo muChiNgezi',
  estimatedMinutes: 5,
  xpReward: 35,

  hook: {
    rwenLine: "Tsumo dzedu — vamwe vanodzitora sechinhu chemumusha chete. Asi tsumo dzeChiShona dzine simba pakati penyika dzose. Nhasi tinodzidza kupa tsumo nhatu muChiNgezi: zita rechiShona, kuturikira, uye chinangwa. Iyi inhanho yekutamba — kuratidza hutsika hwedu kunyange muChiNgezi.",
    culturalNote: "Pakuturikira tsumo, hauchadi kushandura mashoko chete — unodzidzisa zvinoreva. Pattern yakaringana: (1) Taura tsumo muChiShona, (2) Pa literal translation, (3) Tsanangura chinangwa. Mhuri yenyika dzakasiyana inoda tsumo — Chinese chéngyǔ, French dictons, English idioms. Asi paunopa tsumo yeShona kuvaposhi vanotaura ChiNgezi, unoenderera ne hutsika hwekudzidzisa hwemusha — uye unotungamira hutsika hweZimbabwe pakati pe nyika dzakareba.",
  },

  chunks: [
    {
      id: 'chara_chimwe',
      target: "Chara chimwe hachitswanyi inda — One finger can't crush a louse",
      native: 'Chara chimwe hachitswanyi inda — One finger can\'t crush a louse',
      literal: 'cooperation / unity is needed',
      emoji: '🤝',
      phonetic: 'CHA-ra CHI-mwe ha-chi-TSWA-nyi IN-da',
      audioRef: null,
    },
    {
      id: 'mwana_washe',
      target: "Mwana washe muranda kumwe — A chief's child is a servant elsewhere",
      native: 'Mwana washe muranda kumwe — A chief\'s child is a servant elsewhere',
      literal: 'humility — your status at home is not your status away',
      emoji: '🙇🏾',
      phonetic: 'MWA-na WA-she mu-RAN-da KU-mwe',
      audioRef: null,
    },
    {
      id: 'rume_rimwe',
      target: 'Rume rimwe harikombi churu — One man cannot surround an anthill',
      native: 'Rume rimwe harikombi churu — One man cannot surround an anthill',
      literal: 'we need others — no one succeeds alone',
      emoji: '🐜',
      phonetic: 'RU-me RI-mwe ha-ri-KO-mbi CHU-ru',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Proverb-sharing structure: name + literal + meaning',
    explanation: "Pakuturikira tsumo muChiNgezi, shandisa structure inhatu inoshanda kose: (1) 'In Shona we say ___' (zita rechiShona). (2) 'It literally means ___' (kuturikira mashoko). (3) 'It teaches us / It's used when ___' (chinangwa). Iyi pattern inopa muteereri zvose: ruzha rweShona, picture, uye lesson. Edza kushandisa pasina kunyepedzera — taura nemoyo. 'In Shona we say' inogona kushandurwa kuti 'Where I'm from we say' — yose yakanaka.",
    examples: [
      { target: "In Shona we say 'Chara chimwe hachitswanyi inda'. It literally means 'One finger can't crush a louse'. It teaches us that we need each other — no one wins alone.",      native: 'MuChiShona tinoti "Chara chimwe hachitswanyi inda". Zvinoreva "Chigunwe chimwe hachiurayi inda". Chinodzidzisa kuti tinoda mumwe nemumwe — hapana anokunda ari oga.' },
      { target: "We have a saying: 'Mwana washe muranda kumwe' — a chief's child is a servant elsewhere. It's a reminder to stay humble when you travel.",                                  native: 'Tine tsumo: "Mwana washe muranda kumwe" — mwana washe muranda kunzvimbo dzimwe. Inoyeuchidza kuva pasi paunenge uri kunyika dzimwe.' },
      { target: "There's a Shona proverb: 'Rume rimwe harikombi churu' — one man cannot surround an anthill. It means even strong people need help.",                                       native: 'Pane tsumo yeChiShona: "Rume rimwe harikombi churu" — murume mumwe haakombi churu. Zvinoreva kunyange vane simba vanoda rubatsiro.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana tsumo nechinangwa chayo',
      pairs: [
        { left: 'Chara chimwe hachitswanyi inda',  right: 'cooperation / unity' },
        { left: 'Mwana washe muranda kumwe',         right: 'humility when away from home' },
        { left: 'Rume rimwe harikombi churu',         right: 'we need others — no one wins alone' },
      ],
    },
    {
      type: 'translate',
      instruction: "Nyora muChiNgezi — uri kupa tsumo yeShona ne literal translation",
      prompt: "MuChiShona tinoti 'Chara chimwe hachitswanyi inda'. Zvinoreva 'Chigunwe chimwe hachiurayi inda'.",
      correct: ["In Shona we say 'Chara chimwe hachitswanyi inda'. It literally means 'One finger can't crush a louse'.", "In Shona we say 'Chara chimwe hachitswanyi inda'. It literally means 'One finger cannot crush a louse'.", "In Shona we say 'Chara chimwe hachitswanyi inda' — it literally means 'One finger can't crush a louse'.", "in shona we say 'chara chimwe hachitswanyi inda'. it literally means 'one finger can't crush a louse'."],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — tsanangura tsumo ye humility',
      prompt: 'Inoyeuchidza kuva pasi paunenge uri kunyika dzimwe.',
      correct: ["It's a reminder to stay humble when you travel.", "It's a reminder to stay humble when you're away from home.", 'It reminds us to stay humble when away from home.', "it's a reminder to stay humble when you travel."],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka chirevo: 'It teaches us that we need each other'",
      words: ['need', 'us', 'we', 'It', 'that', 'each', 'other.', 'teaches'],
      correct: ['It', 'teaches', 'us', 'that', 'we', 'need', 'each', 'other.'],
      translation: 'Inotidzidzisa kuti tinodanana',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa pattern yekuturikira',
      sentence: "In Shona we say 'Rume rimwe harikombi churu'. It literally _____ 'One man cannot surround an anthill'.",
      options: ['means', 'is', 'tells'],
      correct: 'means',
      context: "'It literally means ___' = pattern yakajeka yekupa kuturikira. 'Means' inoshanda pano, kwete 'is' kana 'tells'.",
    },
    {
      type: 'translate',
      instruction: "Nyora muChiNgezi — pa multicultural dinner uri kupa tsumo yekutanga",
      prompt: 'Pane tsumo yeChiShona inoti "Rume rimwe harikombi churu" — zvinoreva tose tinoda rubatsiro.',
      correct: ['There\'s a Shona proverb: "Rume rimwe harikombi churu" — it means we all need help.', "There's a Shona saying: 'Rume rimwe harikombi churu' — it means we all need help.", "We have a Shona proverb: 'Rume rimwe harikombi churu' — it means we all need help.", 'there\'s a shona proverb: "rume rimwe harikombi churu" — it means we all need help.'],
    },
  ],

  rwenDialogue: {
    intro: "Uri pa multicultural dinner muLondon ne shamwari dzakawanda dzemarudzi akasiyana. Mumwe ari kupa tsumo yeChinese yakanaka. Pasina kufunga, mumwe akakubvunza: 'Do you have a saying like that in Shona?'",
    lines: [
      { speaker: 'npc', target: "Do you have a saying like that in Shona?", native: 'Une tsumo yakadaro muChiShona here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, we do. In Shona we say 'Rume rimwe harikombi churu'. It literally means 'One man cannot surround an anthill'. It teaches us that even strong people need help — no one wins alone.", native: 'Hongu, tinayo. MuChiShona tinoti "Rume rimwe harikombi churu". Zvinoreva "Murume mumwe haakombi churu". Chinodzidzisa kuti kunyange vane simba vanoda rubatsiro — hapana anokunda ari oga.', correct: true, feedback: "Wakwanisa — pattern yose yatatu: zita ('Rume rimwe harikombi churu'), kuturikira ('one man cannot surround an anthill'), chinangwa ('even strong people need help'). Vateereri vakatambira hutsika hweZimbabwe muChiNgezi." },
          { target: "We say 'Rume rimwe harikombi churu'.", native: 'Tinoti "Rume rimwe harikombi churu".', correct: false, feedback: "Une tsumo asi vateereri havazivi zvinoreva. Wedzera literal translation ne meaning: 'It means one man cannot surround an anthill — we all need help.'" },
          { target: "Yes, we have many.", native: 'Hongu, tine dzakawanda.', correct: false, feedback: "Mhinduro pfupi — sarudza imwe utaure: 'In Shona we say ___. It literally means ___. It teaches us ___.'" },
        ],
      },
      { speaker: 'npc', target: "Beautiful — that's wisdom we all need. Where I'm from we have something similar.", native: 'Yakanaka — uchenjeri hwatinodikana tose. Kwandinobva tine chimwe chakafanana.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakapa Zimbabwe pamutsetse uno. Pattern yakareruka — name, literal, meaning — yakatakura tsumo yedu kunyika yose. Mwana washe muranda kumwe — asi mwana washe ari kunyika dzese!",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: "In Shona we say (in English)",       correct: ['In Shona we say', 'in shona we say'] },
      { prompt: 'It literally means (in English)',     correct: ['It literally means', 'it literally means'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Sarudza tsumo imwe pakati petatu — iyo inotaura nezvehupenyu hwako iye zvino. Nyora muChiNgezi: 'In Shona we say [tsumo]. It literally means [translation]. It teaches us [meaning].' Verenga muromo. Mangwana, govera neumwe asingatauri ChiShona.",
    rwenSignoff: "Mangwana — capstone! Lesson 100. Nyaya yako yose ye English-learning journey, mu ChiNgezi.",
  },

  phase8: {
    scenario: "You're at a multicultural dinner in London. Someone has just shared a proverb from their culture and turns to you: 'Do you have a saying like that in Shona?' Share ONE Shona proverb using the full structure: Shona name, literal translation, meaning. Then connect it to a real situation in your life.",
    rwenRole: "Aisha, 38, the dinner host. Curious, loves wisdom from different cultures. Will ask: 'When have you used that?', 'Did your grandmother say it?'",
    successCriteria: "User says 'In Shona we say ___' OR 'There's a Shona proverb ___'. Gives literal English translation. Explains meaning ('it teaches us ___', 'it's used when ___'). Connects it to a real example. Stays in English (Shona only for the proverb itself).",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
