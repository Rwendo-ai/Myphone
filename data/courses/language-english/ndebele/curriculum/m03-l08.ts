import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-bill-check',
  module: 3,
  lesson: 8,
  title: 'The bill / Check please — Ukukhokha',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Selidlile, ufuna ukukhokha futhi ufuna ukuhamba. EUK utsho 'the bill', eUSA utsho 'the check' — yigama elilodwa kodwa libili eziwelokufanele.",
    culturalNote: "INTO YINHLE: 'bill' (eUK) = 'check' (eUSA). Bobabili ngokuthi 'incwadi yokukhokha' eserestaurant. EsiNgisini saseUK ungatsho 'Could I have the bill, please?' — esiNgisini seUSA wakhe 'Could I get the check, please?'. Bobabili bayazwana ngamazwe omabili ngempela, kodwa ungumvabi (foreigner) uma ungatsho 'check' eUK kumbe 'bill' eUSA. Indlela enye yokufuna incwadi yokukhokha: tshikilizela isandla esinjengomuntu obhalayo ku-paper — kuyaqondaka emhlabeni wonke. EUK, awusosi ukunika i-tip kabili — i-tip yi-optional kakhulu (sifunda lokho kusasa).",
  },

  chunks: [
    {
      id: 'the_bill',
      target: 'the bill (UK)',
      native: 'incwadi yokukhokha (eUK)',
      literal: 'the bill (UK)',
      emoji: '🧾',
      phonetic: 'thuh-BIL',
      audioRef: null,
    },
    {
      id: 'the_check',
      target: 'the check (US)',
      native: 'incwadi yokukhokha (eUSA)',
      literal: 'the check (US)',
      emoji: '🧾',
      phonetic: 'thuh-CHEK',
      audioRef: null,
    },
    {
      id: 'could_i_have_bill',
      target: 'Could I have the bill, please?',
      native: 'Ngingathola incwadi yokukhokha, ngiyacela? (UK)',
      literal: 'Could I have the bill please',
      emoji: '🇬🇧',
      phonetic: 'kud-ai-hav-thuh-BIL',
      audioRef: null,
    },
    {
      id: 'can_i_get_check',
      target: 'Can I get the check, please?',
      native: 'Ngingathola incwadi yokukhokha, ngiyacela? (USA)',
      literal: 'Can I get the check please',
      emoji: '🇺🇸',
      phonetic: 'kan-ai-get-thuh-CHEK',
      audioRef: null,
    },
    {
      id: 'pay_by_card',
      target: 'pay by card',
      native: 'ukukhokha nge-card',
      literal: 'pay by card',
      emoji: '💳',
      phonetic: 'pay-bai-CARD',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Asking for the bill (UK) / check (US)',
    explanation: "EUK: 'Could I have the bill, please?'. EUSA: 'Can I get the check, please?'. EUK abantu bakhuluma ngo-'have', eUSA basebenzisa 'get'. Bobabili kuyimisho yenhlonipho. Engeza 'please' njalo. Uma ungazi ukuthi ungaphi, sebenzisa 'Could I have the bill/check, please?' — kuzazwana.",
    examples: [
      { target: "Could I have the bill, please? (UK)",     native: 'Ngingathola incwadi, ngiyacela? (eUK)' },
      { target: "Can I get the check, please? (US)",        native: 'Ngingathola incwadi, ngiyacela? (eUSA)' },
      { target: "Can I pay by card?",                       native: 'Ngingakhokha nge-card?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama eUK leUSA',
      pairs: [
        { left: 'the bill (UK)',    right: 'incwadi yokukhokha (eUK)' },
        { left: 'the check (US)',   right: 'incwadi yokukhokha (eUSA)' },
        { left: 'pay by card',       right: 'ukukhokha nge-card' },
        { left: 'cash',              right: 'imali yenhlamba (notes/coins)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okulungileyo eUK',
      question: "USeLondon, ufuna ukucela incwadi yokukhokha. Yiphi enhle?",
      options: [
        { text: "Could I have the bill, please?",  correct: true },
        { text: "Can I get the check, please?",     correct: false },
        { text: "Bring me money paper.",            correct: false },
      ],
      explanation: "EUK kusetshenziswa 'bill' kuphela. 'Check' yindlela yeUSA — bayazwana kodwa kuyatshengisa ukuthi awungowaseUK.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (UK)',
      prompt: 'Ngingathola incwadi yokukhokha, ngiyacela?',
      correct: ["Could I have the bill please?", "Could I have the bill, please?", "Can I have the bill please?"],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa eUSA',
      sentence: "Can I get the ___, please?",
      options: ['check', 'bill', 'paper'],
      correct: 'check',
      context: "USeNew York, ufuna ukukhokha.",
    },
  ],

  rwenDialogue: {
    intro: "Selidlile kahle eserestaurant eLondon. Ufuna ukucela incwadi yokukhokha.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me — could we have the bill, please?", native: 'Uxolo — singathola incwadi, ngiyacela?', correct: true,  feedback: "Kuhle kakhulu — eUK 'bill' yiyo elungileyo, futhi 'Could we have' kuhloniphe." },
          { target: "Excuse me — can I get the check?",            native: 'Uxolo — ngingathola i-check?',           correct: false, feedback: "Kungazwakala kodwa eUK kuthiwa 'bill'. EUSA 'check' yiyo." },
          { target: "Money please.",                                 native: 'Imali ngiyacela.',                        correct: false, feedback: "Kalahloniphi futhi kalachachi. Sebenzisa 'Could we have the bill, please?'." },
        ],
      },
      { speaker: 'npc', target: "Of course — I'll bring it right over.", native: 'Yebo — ngizayiletha khona manje.' },
      { speaker: 'npc', target: "Here you go. Cash or card?", native: 'Nansi. Imali yenhlamba kumbe i-card?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Card, please.",                  native: 'I-card, ngiyacela.',          correct: true,  feedback: "Kuhle — kufushane futhi kuhloniphe." },
          { target: "Can I pay by card, please?",     native: 'Ngingakhokha nge-card, ngiyacela?', correct: true,  feedback: "Lokhu kuhle njalo — kungenakulungiseka." },
          { target: "I have no money.",                native: 'Angilamali.',                  correct: false, feedback: "Kungaba inkinga enkulu! Khetha 'Card, please.'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bambelele lo: eUK 'bill', eUSA 'check'. Igama elilodwa, kodwa lichaza into elinye. EsiNgisini siyimemeza ngezindlela ezimbili.",
        rwenAnimation: 'thumbs_up',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngesiNgisi.',
    prompts: [
      { prompt: 'Ngingathola incwadi yokukhokha, ngiyacela? (UK English)',  correct: ["Could I have the bill please?", "Could I have the bill, please?", "Can I have the bill please?"] },
      { prompt: 'Ngingathola incwadi yokukhokha, ngiyacela? (US English)',  correct: ["Can I get the check please?", "Can I get the check, please?", "Could I get the check please?"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamhla',
    task: "Cabanga uma uphi: eUK kumbe eUSA. Ngeke kungumusho omfishane: 'the bill' (UK) loba 'the check' (USA). Bopha igama eligamayo lapho ukhona.",
    rwenSignoff: "Kuhle. Kusasa sifunda nge-tipping — kuyahlukana kakhulu eUK leUSA.",
  },

  phase8: {
    scenario: "You've finished a lovely meal at a restaurant. You need to ask for the bill, then pay by card. The location is given in the system prompt — practice using either UK ('bill') or US ('check') English depending on which feels right.",
    rwenRole: "Tom, the waiter, mid-30s. Will respond naturally either way — but if the user uses the 'wrong' word (check in UK, bill in US), Tom will gently note 'we call it the bill here' or 'we call it the check'.",
    successCriteria: "User asks for the bill or check politely (with 'please'), confirms they'll pay by card, and says thank you at the end.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
