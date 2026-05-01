import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-money-prices',
  module: 6,
  lesson: 8,
  title: 'Money — How much is it?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Mari muChiNgezi — 'How much?', 'It costs $20', 'It's expensive'. Idzi ndidzo dzaunoshandisa pa-craft market kana pa-shopping.",
    culturalNote: "Zimbabwe yashandisa USD kwenguva yakareba — sa-Shona speaker, 'dollar' uye 'cent' wakatozvinzwa. Wakatonzwa ' US dollars', 'rand', 'pula' — fanai ne shamwari yauri kutengetana naye. MuChiShona unoti 'idhura' (it's expensive); muChiNgezi 'It's expensive' kana 'It's pricey' (informal). Pa-bargaining culture: 'Can you do cheaper?' kana 'I'll give you fifteen' — izvi zvinoshanda mu-craft market chaiyo, asi musasambabwa muma supermarket.",
  },

  chunks: [
    {
      id: 'how_much_cost',
      target: 'How much does it cost?',
      native: 'Marii?',
      literal: 'How much does it cost?',
      emoji: '💰',
      phonetic: 'how-MUCH-duz-it-kost',
      audioRef: null,
    },
    {
      id: 'it_costs',
      target: 'It costs twenty dollars',
      native: 'Inopiwa madhora makumi maviri',
      literal: 'It costs twenty dollars',
      emoji: '💵',
      phonetic: 'it-KOSTS-TWEN-tee-DOL-arz',
      audioRef: null,
    },
    {
      id: 'expensive_cheap',
      target: "It's expensive / It's cheap",
      native: 'Idhura / Hairipi mari',
      literal: "It is expensive / It is cheap",
      emoji: '💸',
      phonetic: "its-eks-PEN-siv / its-CHEEP",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Price questions and answers',
    explanation: "Kuti ubvunze mutengo: 'How much?' (pfupi) kana 'How much does it cost?' (long form). Mhinduro: 'It's twenty dollars' kana 'It costs twenty dollars'. Pakutsoropodza: 'It's too expensive' (idhura zvakanyanya), 'It's a fair price' (mutengo wakanaka), 'Can you do cheaper?' (mungandiderere here?). Cherechedza: 'cents' = 'mac-ent' — mwana wedhora.",
    examples: [
      { target: "How much is this?",          native: 'Ichi imarii?' },
      { target: "It's twenty dollars.",        native: 'Imadhora makumi maviri.' },
      { target: "It's too expensive for me.",  native: 'Idhura kwandiri.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko emari',
      pairs: [
        { left: 'How much?',       right: 'Marii?' },
        { left: "It's expensive",   right: 'Idhura' },
        { left: 'Twenty dollars',   right: 'Madhora makumi maviri' },
        { left: 'Cheaper, please',  right: 'Yakaderera, ndapota' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kubvunza mutengo wechinhu',
      prompt: 'Marii?',
      correct: ['How much?', 'How much is it?', 'how much?', 'How much does it cost?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kuderedza mutengo',
      sentence: "Can you do ____?",
      options: ['cheaper', 'cheapest', 'cheap'],
      correct: 'cheaper',
      context: "Pakutengetana — 'cheaper' (more cheap) ndiyo nzira yekukumbira kuderedzwa kwemutengo.",
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka — uri kupa mutengo',
      words: ['costs', 'It', 'fifteen', 'dollars.'],
      correct: ['It', 'costs', 'fifteen', 'dollars.'],
      translation: 'Inopiwa madhora gumi nemashanu.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kunyunyuta mutengo',
      prompt: 'Idhura kwandiri',
      correct: ["It's too expensive for me", "It's too expensive for me.", "Too expensive for me", "It is too expensive for me"],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ichi imadhora makumi mana',
      correct: ['This is forty dollars', 'This is forty dollars.', "It's forty dollars", "It costs forty dollars"],
    },
  ],

  rwenDialogue: {
    intro: 'Uri pa-craft market muHarare. Mu-tourist anotaura ChiNgezi anokumbira mutengo wechigaba chenyu chematombo. Iwe ndiwe mutengesi nhasi.',
    lines: [
      { speaker: 'npc', target: "Hi, how much is this stone sculpture?", native: 'Mhoro, chigaba ichi imarii?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It costs sixty dollars, but I can do fifty for you.",  native: 'Inopiwa madhora makumi matanhatu, asi ndinokwanisa makumi mashanu kwauri.', correct: true,  feedback: "Wakwanisa — wakapa mutengo, wakaratidza kuti une 'flexibility'. Pa-craft market iyi inzira chaiyo." },
          { target: "Sixty.",                                                  native: '60.',                                                                       correct: false, feedback: 'Pfupi zvakanyanya — wedzera "dollars" uye unzwo. Mu-tourist anoda kunzwa nhanho yakareba.' },
          { target: "I don't know the price.",                                 native: 'Handizivi mutengo.',                                                       correct: false, feedback: "Hauratidze unyanzvi hwekutengesa. Cherechedza mutengo wechinhu chiri kutengeswa newe!" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakapa mutengo wekutanga uye wakaratidza nzira yekuderedza — that's how a market works.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'How much does it cost? (in English)', correct: ['How much does it cost?', 'How much does it cost', 'How much?', 'how much does it cost?'] },
      { prompt: "It's expensive (in English)", correct: ["It's expensive", "It's expensive.", "It is expensive", "Expensive"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga chinhu chauri kuda kutenga. Bvunza mutengo nhasi muChiNgezi: 'How much does it cost?' Pindura zviuya wega: 'It costs $___'. Itai kakati kaviri.",
    rwenSignoff: 'Mari nguva imwe chete inotaura — taura nezvayo nezera. Tichaonana mangwana.',
  },

  phase8: {
    scenario: "You're a stall owner at a craft market in Harare. An English-speaking tourist (American) is interested in your handmade wooden bowls. Negotiate the sale — start with a higher price, expect them to push back, and work down to a deal.",
    rwenRole: "Tom, 50, an American tourist who has bargained at markets before. Friendly but firm. Will start by saying 'too expensive' to your first price.",
    successCriteria: "User gives an opening price using 'It costs $X' or 'It's $X', responds to 'too expensive' by offering a discount with 'I can do $X' or 'For you, $X', and closes the sale (or politely declines if Tom's offer is too low).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
