import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-currencies',
  module: 8,
  lesson: 1,
  title: 'Currencies — pound, dollar, Australian dollar',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Module 8 ngokwemali — 'pound' (£) e-UK, 'dollar' ($) e-US, 'Australian dollar' (AU$) e-Australia. Uma uvela e-Zimbabwe, lezinhloko zonke ezintathu zikhona empilweni yakho.",
    culturalNote: "Owesi-Ndebele ovela e-Zimbabwe usebenzisa amasenti ahlukene — US dollar, ZiG, kanye nezinye. E-UK kungu-'pound sterling' (£), futhi 100 pence ngu-1 pound. E-US ngu-dollar ($), 100 cents = $1. E-Australia ngu-Australian dollar (AU$). UQAPHELE: '$' kuphela kungaba ngu-US dollar, AU dollar, noma Canadian dollar. Uma ungaqiniseki, buza 'Is that US dollars or Aussie dollars?' Ungasho 'pound' uma ukhuluma nge-USD — kuyiphutha. Igama elithi 'quid' = pound (slang ye-UK); 'buck' = dollar (slang ye-US/AU).",
  },

  chunks: [
    {
      id: 'pound',
      target: 'A pound (£)',
      native: 'I-pound (imali ye-UK)',
      literal: 'pound = imali yase-UK',
      emoji: '💷',
      phonetic: 'uh-POWND',
      audioRef: null,
    },
    {
      id: 'dollar',
      target: 'A dollar ($)',
      native: 'I-dollar (imali ye-US/AU)',
      literal: 'dollar = imali ye-US noma ye-AU',
      emoji: '💵',
      phonetic: 'uh-DOL-ur',
      audioRef: null,
    },
    {
      id: 'australian_dollar',
      target: 'Australian dollar (AU$)',
      native: 'I-Australian dollar — imali yase-Australia',
      literal: 'AU dollar — yehlukile ku-US dollar',
      emoji: '🇦🇺',
      phonetic: 'oss-TRAY-lyun-DOL-ur',
      audioRef: null,
    },
    {
      id: 'pence',
      target: 'Pence (p)',
      native: 'I-pence — 100 pence = 1 pound',
      literal: 'amasenti e-UK',
      emoji: '🪙',
      phonetic: 'PENS',
      audioRef: null,
    },
    {
      id: 'cents',
      target: 'Cents (¢)',
      native: 'Amasenti — 100 cents = 1 dollar',
      literal: 'amasenti e-US/AU',
      emoji: '💰',
      phonetic: 'SENTS',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Naming currencies',
    explanation: "Uma usho inani: '£5' = 'five pounds', '$5' = 'five dollars', 'AU$5' = 'five Aussie dollars' noma 'five Australian dollars'. Inani elilodwa: '£1' = 'one pound' (akusiyo 'one pounds'). Amasenti: '£5.50' = 'five pounds fifty' (uvame ukushiya 'pence'). E-US: '$5.50' = 'five dollars fifty' noma 'five fifty'. Uma usho i-currency engesayo, sebenzisa 'GBP' (pound), 'USD' (US dollar), 'AUD' (Aussie dollar) — la igama elenziwa amabhange.",
    examples: [
      { target: 'It costs five pounds.', native: 'Kubiza ama-pound amahlanu (£5).' },
      { target: 'That is twenty US dollars.', native: 'Lokho ngu-$20 (US).' },
      { target: 'In Australia we use Aussie dollars.', native: 'E-Australia sisebenzisa ama-Aussie dollar.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa uphawu nezwe',
      pairs: [
        { left: '£', right: 'UK (pound)' },
        { left: '$ (US)', right: 'United States (dollar)' },
        { left: 'AU$', right: 'Australia (Aussie dollar)' },
        { left: 'p / pence', right: '100p = £1' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa igama elifanele',
      sentence: 'In London, a coffee costs about three _____.',
      options: ['pounds', 'dollars', 'rands'],
      correct: 'pounds',
      context: "E-London (UK) imali ngu-pound, hhayi dollar.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Ukhuluma nomngani wakho ovela e-Sydney. Ubuza imali yakhe.',
      question: 'Choose the most natural question:',
      options: [
        { text: 'How much is it in Aussie dollars?', correct: true },
        { text: 'How much is it in pounds?', correct: false },
        { text: 'How much is it in money?', correct: false },
      ],
      explanation: "E-Australia kusetshenziswa 'Aussie dollars' (noma 'Australian dollars'). 'Pounds' ngeke kuhambelane.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesi-Ngisi',
      prompt: 'Kubiza ama-pound ayishumi (£10).',
      correct: ['It costs ten pounds.', 'It costs ten pounds', 'It costs £10.', 'it costs ten pounds.'],
    },
  ],

  rwenDialogue: {
    intro: "Usesitolo se-airport e-Heathrow (UK). Ufuna ukuthenga isandwich, kodwa awuqiniseki ngemali.",
    lines: [
      { speaker: 'npc', target: "That'll be six pounds fifty, please.", native: 'Kuyoba £6.50, ngiyacela.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, is that six pounds and fifty pence?", native: 'Uxolo, ngabe yi-six pounds ne-fifty pence?', correct: true, feedback: "Kuhle. 'Six pounds fifty' = £6.50. Ukubuza ukucacisa kuyamukeleka." },
          { target: "Sorry, is that six dollars?", native: 'Uxolo, ngabe yi-six dollars?', correct: false, feedback: "E-UK akukho ama-dollar — kungu-pounds. Uphawu ngu-£." },
          { target: "Six rands? Okay.", native: 'Six rands? Kulungile.', correct: false, feedback: "I-Rand iyimali yase-South Africa. E-UK kungu-pound." },
        ],
      },
      { speaker: 'npc', target: "Yes, six pounds fifty. Cash or card?", native: 'Yebo, £6.50. Ukheshi noma ikhadi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Card, please.", native: 'Ngeqhadi, ngiyacela.', correct: true, feedback: "Kuhle, sicaca." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ngiyaqonda. UK = pounds (£). US = dollars ($). AU = Aussie dollars (AU$). Ungaze udidwe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuka phezulu, bhala impendulo.',
    prompts: [
      { prompt: 'Imali yase-UK (ngesi-Ngisi)', correct: ['pound', 'pounds', 'a pound', 'the pound'] },
      { prompt: 'Imali yase-Australia (ngesi-Ngisi)', correct: ['Australian dollar', 'Aussie dollar', 'AUD', 'Australian dollars', 'Aussie dollars'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Cinga ngezinto ezintathu (ikhofi, ibhasi, isandwich). Bhala intengo yazo nge-pounds, nge-US dollars, nange-Aussie dollars. Isb: 'A coffee = £3 in London, $4 in New York, AU$5 in Sydney.'",
    rwenSignoff: "Kusasa: 'How much is it?' — indlela yokubuza intengo.",
  },

  phase8: {
    scenario: "You are at a small souvenir shop at Sydney airport. The cashier tells you the price in Aussie dollars and you want to compare it to UK pounds and US dollars.",
    rwenRole: "Cashier, friendly Australian woman around 30. Tells prices in AU$ and answers comparison questions.",
    successCriteria: "Student correctly names at least two currencies (pound, dollar, Aussie dollar) and asks at least one clarification question like 'Is that Aussie dollars or US dollars?'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
