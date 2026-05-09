import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-how-much',
  module: 8,
  lesson: 2,
  title: 'How much is it? — pricing language',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Umbuzo omkhulu wokuthenga: 'How much is it?' — kubiza malini? Funda nomusho othi 'How much are these?' (uma kuningi) kanye nezimpendulo ezijwayelekile.",
    culturalNote: "E-UK / US / AU akusiyo i-norm yokubukela ngamehlo izinto isikhathi eside ungabuzi. Uma uthanda into, buza ngokuqondile: 'How much is it?' Ngeke abathengisi balindele ukuthi ubuze — bayohleka uma uthi 'I want to know the price please' (kushona). Sebenzisa 'How much is it?' (into eyodwa) noma 'How much are these?' (izinto eziningi). UQAPHELE: 'How many?' = mangaki (umubalo), 'How much?' = malini (imali). 'How much chairs?' = ngeyiphutha. Kufanele kube 'How many chairs?' — chairs ziyabalwa.",
  },

  chunks: [
    {
      id: 'how_much_is_it',
      target: 'How much is it?',
      native: 'Kubiza malini? (into eyodwa)',
      literal: 'how much / is / it',
      emoji: '💷',
      phonetic: 'how-MUCH-iz-it',
      audioRef: null,
    },
    {
      id: 'how_much_are_these',
      target: 'How much are these?',
      native: 'Lezi zibiza malini? (izinto eziningi)',
      literal: 'how much / are / these',
      emoji: '🛍️',
      phonetic: 'how-MUCH-ar-THEEZ',
      audioRef: null,
    },
    {
      id: 'how_much_does_it_cost',
      target: 'How much does it cost?',
      native: 'Kubiza malini? (formal)',
      literal: 'how much / does / it / cost',
      emoji: '🧾',
      phonetic: 'how-MUCH-duz-it-KOST',
      audioRef: null,
    },
    {
      id: 'its_too_expensive',
      target: "It's too expensive.",
      native: 'Kubiza kakhulu / kuyadula.',
      literal: "it is / too / expensive",
      emoji: '😬',
      phonetic: 'itz-too-ek-SPEN-siv',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'How much vs How many',
    explanation: "(1) HOW MUCH — uma kungabalwa: imali, amanzi, isikhathi. 'How much is the bread?' / 'How much money?' (2) HOW MANY — uma kubalwa: izitulo, ama-apula, abantu. 'How many people?' / 'How many apples?' (3) Inkulumo yengqayizivele: 'How much is it?' = into eyodwa; 'How much are these?' = izinto eziningi. NB: 'How much does it cost?' yi-formal — natural emasitolo amakhulu noma kuma-website.",
    examples: [
      { target: 'How much is this shirt?', native: 'Le shirt ibiza malini?' },
      { target: 'How many bananas would you like?', native: 'Ufuna ama-banana amangaki?' },
      { target: "It's £15 — too expensive!", native: 'Kungu-£15 — kuyadula kakhulu!' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Khetha 'much' noma 'many'",
      sentence: 'How _____ is this jacket?',
      options: ['much', 'many', 'cost'],
      correct: 'much',
      context: "Imali ayibalwa — 'much' isebenza.",
    },
    {
      type: 'fill_blank',
      instruction: "Khetha 'much' noma 'many'",
      sentence: 'How _____ apples do you want?',
      options: ['many', 'much', 'is'],
      correct: 'many',
      context: "Ama-apula ayabalwa — 'many'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Ubuke izicathulo ezimbili. Ubuza intengo.',
      question: 'Choose the natural question:',
      options: [
        { text: 'How much are these shoes?', correct: true },
        { text: 'How much is these shoes?', correct: false },
        { text: 'How many is the shoes?', correct: false },
      ],
      explanation: "'These shoes' = plural, kufanele 'How much ARE these?'. 'Shoes' ziyabalwa kodwa kepha sibuza intengo, ngakho 'how much'.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesi-Ngisi',
      prompt: 'Le yibiza malini?',
      correct: ['How much is it?', 'How much is this?', 'how much is it?', 'how much is this?', 'How much does it cost?'],
    },
    {
      type: 'build_sentence',
      instruction: "Yakha umusho",
      words: ['too', "It's", 'expensive.'],
      correct: ["It's", 'too', 'expensive.'],
      translation: 'Kuyadula kakhulu.',
    },
  ],

  rwenDialogue: {
    intro: "Use-Camden Market e-London. Ubona ihembe oyithandayo, kodwa awuyazi intengo.",
    lines: [
      { speaker: 'npc', target: "Hi there! Like the look of that one?", native: 'Sawubona! Uyalithanda lelo?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, how much is it?", native: 'Yebo, libiza malini?', correct: true, feedback: "Sukuma. Kuyiphendula esiqondile, esinokuhlonipha." },
          { target: "I want know price.", native: 'Ngifuna ukwazi intengo.', correct: false, feedback: "Kushona kabi. Sebenzisa 'How much is it?' — kuyi-natural English." },
          { target: "How many is it?", native: 'Mangaki?', correct: false, feedback: "'How many' kubalwa (apples, people). Imali ayibalwa — 'How much'." },
        ],
      },
      { speaker: 'npc', target: "That one's twenty-five quid.", native: 'Lelo ngu-£25.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hmm, it's a bit too expensive. How much are these blue ones?", native: 'Hhayi, kuyadula kancane. Lezi eziblue zibiza malini?', correct: true, feedback: "Kuhle — 'a bit too expensive' kuyi-soft, futhi 'how much ARE these' (plural)." },
          { target: "Hmm, how much is these?", native: '', correct: false, feedback: "'These' yi-plural — 'how much ARE these'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "'Quid' = pound (slang). Ungesabi — buza 'how much' njalo. Akukho elinye iphutha kunokuthi ungabuzi nakancane.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuka, bhala impendulo.',
    prompts: [
      { prompt: 'Kubiza malini? (ngesi-Ngisi)', correct: ['How much is it?', 'How much is it', 'how much is it?', 'How much does it cost?'] },
      { prompt: 'Kuyadula kakhulu (ngesi-Ngisi)', correct: ["It's too expensive.", "It's too expensive", "it's too expensive."] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Khetha izinto ezintathu ezisendlini yakho — ifoni, isiphukushwa, igilasi. Buza ngokukhulu phezulu: 'How much is this phone?' / 'How much are these glasses?'. Sebenzisa amasayithi e-online ukubona izintengo emaponi.",
    rwenSignoff: "Kusasa: 'Cash, card, contactless' — izindlela zokukhokha.",
  },

  phase8: {
    scenario: "You are at a market stall in London (Camden or Borough). Ask prices for at least 3 items (a t-shirt, a bag, some fruit) and react if something is too expensive.",
    rwenRole: "Friendly market trader, mid-40s, gives prices in pounds and chats casually.",
    successCriteria: "Student uses 'How much is/are...?' correctly for at least 2 items, distinguishes much vs many, and uses 'too expensive' once naturally.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
