import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l08-numbers-money',
  module: 2,
  lesson: 8,
  title: 'Numbers in money — pounds, dollars, rand',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Lamuhla siphendula imali ngesiNgisi: 'three pounds', 'twenty dollars', 'fifty rand'. Kanti, kanjani usitsho '£3.50' ngomlomo? Kukhona indlela.",
    culturalNote: "EsiNdebeleni siyabala imali silinika ibizo: 'amaranda angu-50' (R50). Ngesi-Britain isiNgisi siyaqala ngenombolo: 'fifty rand' (akusi 'rand fifty'). Kuhle ukukhumbula ukuthi i-pound (£) iyangakwa ngakwesokunene kwenombolo: '£3' = 'three pounds'. Kanjalo $20 = 'twenty dollars', R50 = 'fifty rand'. Phambi kwawo amasekhulu (decimal), uthi 'three pounds fifty' (£3.50) — kungasi 'three point fifty pounds'. Le 'p' (pence) yenza umehluko: '50p' = 'fifty pee'. Lokhu kungaba nzima ku-USA — abathi 'a quarter' (25 cents), 'a dime' (10 cents). Lalela mhloba lapho usebenza.",
  },

  chunks: [
    {
      id: 'pounds',
      target: 'Three pounds',
      native: 'Amaphondi amathathu (£3)',
      literal: 'Three pounds (£3)',
      emoji: '💷',
      phonetic: 'three-POWNDZ',
      audioRef: null,
    },
    {
      id: 'pence',
      target: 'Three pounds fifty',
      native: 'Amaphondi amathathu lemali engamatshumi amahlanu (£3.50)',
      literal: 'Three pounds fifty (pence) — £3.50',
      emoji: '💰',
      phonetic: 'three-POWNDZ-fif-tee',
      audioRef: null,
    },
    {
      id: 'dollars',
      target: 'Twenty dollars',
      native: 'Amadola angamatshumi amabili ($20)',
      literal: 'Twenty dollars ($20)',
      emoji: '💵',
      phonetic: 'TWEN-tee-DOL-erz',
      audioRef: null,
    },
    {
      id: 'how_much',
      target: 'How much is it?',
      native: 'Ibiza ngakanani?',
      literal: 'How much is it?',
      emoji: '❓',
      phonetic: 'how-MUCH-iz-it',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Inombolo + uhlobo lwemali",
    explanation: "EsiNgisini imali ihlangana kanjena: [number] + [currency name]. 'Three pounds' (£3), 'twenty dollars' ($20), 'fifty rand' (R50). Akula 's' lapho inombolo ingu '1' nje qha: 'one pound' (akusi 'one pounds'), 'one dollar' (akusi 'one dollars'). Kepha inombolo ezinengi (2 +), uhlobo lwemali lufaka 's': 'two pounds', 'five dollars'. (Yebo, 'rand' ihlukile — ayithanga 's' eziningini: 'one rand', 'fifty rand'.)",
    examples: [
      { target: 'One pound — £1',           native: 'Iphondi (linye)' },
      { target: 'Five dollars — $5',         native: 'Amadola amahlanu' },
      { target: 'Fifty rand — R50',          native: 'Amaranda angamatshumi amahlanu (akula "s" ku rand)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imali yebhalwe ngalokho ekuthethwa ngesiNgisi',
      pairs: [
        { left: 'Three pounds',         right: '£3' },
        { left: 'Twenty dollars',        right: '$20' },
        { left: 'Fifty rand',            right: 'R50' },
        { left: 'Three pounds fifty',     right: '£3.50' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (R200)',
      prompt: 'Amaranda angamakhulu amabili',
      correct: ['Two hundred rand', 'two hundred rand', 'Two hundred rand.', 'two hundred rand.'],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa indawo engelalutho — yikephi imali yelinye?",
      sentence: "It costs one ____.",
      options: ['pound', 'pounds', 'pounding'],
      correct: 'pound',
      context: "Ku '1', sisebenzisa indlela ekhulile (akula 's'): 'one pound', hatshi 'one pounds'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha indlela efaneleyo yokutsho £4.99',
      question: "Iphi indlela efaneleyo yokutsho '£4.99' ngomlomo?",
      options: [
        { text: 'Four pounds ninety-nine',                  correct: true },
        { text: 'Four point ninety-nine pounds',             correct: false },
        { text: 'Pounds four ninety-nine',                    correct: false },
      ],
      explanation: "Indlela esebenzisayo abesilungu yi 'Four pounds ninety-nine' (kumbe 'Four ninety-nine' — kufutshanizwe). 'Four point ninety-nine' kwesinye isikhathi kuvulekile, kodwa akusi indlela yobuhle yokutsho imali.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — ubuza ukuthi yimalini',
      words: ['it?', 'is', 'much', 'How'],
      correct: ['How', 'much', 'is', 'it?'],
      translation: 'Ibiza ngakanani?',
    },
  ],

  rwenDialogue: {
    intro: 'Use kwa-Spar e-Bulawayo, uthenga isinkwa kanye le-magazine. Cashier akhuluma isiNgisi.',
    lines: [
      { speaker: 'npc', target: "That's twenty-five rand, please.", native: 'Lokho kungamaranda angamatshumi amabili lanhlanu, ngiyacela.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Twenty-five rand, here you are.", native: 'Amaranda angamatshumi amabili lanhlanu, nankha.', correct: true,  feedback: "Kuhle! Wakhuluma uphinda wonke umtshova kwakhuluma cashier — kuyaqondisa." },
          { target: "Sorry, how much?",                  native: 'Uxolo, ibiza ngakanani?',                          correct: true,  feedback: "Kuhle ukubuza nxa ungaqondisi — kuyangcono kulokunika imali engalunganga." },
          { target: "Five rand?",                         native: 'Amaranda amahlanu?',                                correct: false, feedback: "Wezwe wonke 'fifty' kumbe 'twenty-five' njenge 'five' nje qha. Buza: 'Sorry, how much?'" },
        ],
      },
      { speaker: 'npc', target: 'Twenty-five rand, exactly. Thanks.', native: 'Amaranda angamatshumi amabili lanhlanu, ngokugcweleyo. Ngiyabonga.' },
      {
        speaker: 'rwen',
        rwenLine: "Ungaphumelele! Imali kuyizinto ezishesha — buza nxa ungaqondisi, futhi phinda ngokugcwele lapho ucabanga uqondisise.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu. Bhala ngokwezikhumbuzo zakho.',
    prompts: [
      { prompt: '£3 (ngesiNgisi)',     correct: ['Three pounds', 'three pounds', '3 pounds'] },
      { prompt: '$20 (ngesiNgisi)',     correct: ['Twenty dollars', 'twenty dollars', '20 dollars'] },
      { prompt: 'How much is it? (ngesiNgisi)', correct: ['How much is it?', 'how much is it?', 'How much is it', 'how much is it'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Bheka izinto ezintathu ezikuyazungezayo lamuhla, futhi cabanga inani lazo. Tsho ngomlomo: 'This costs ____ rand' kumbe '____ pounds'. Khumbula: 'one' alingangakuze 's', '5+' lifaka 's' (ngaphandle 'rand').",
    rwenSignoff: "Imali iyabuya — ngokushesha uzayisebenzisa ngokweqile. Sizabonana kusasa.",
  },

  phase8: {
    scenario: "You're shopping at a UK Tesco store. You buy a sandwich, a drink, and a magazine. The cashier rings them up: £2.50, £1.25, £4.99. Pay with a £20 note and confirm your change.",
    rwenRole: "Liam, 22, a UK supermarket cashier. Friendly but speaks fast, with prices like 'Two-fifty' and 'Four ninety-nine'. He'll tell you the total and the change.",
    successCriteria: "User correctly understands at least two of the three prices, asks 'How much?' or 'Can you repeat?' if needed, and confirms the total or change in pounds. Doesn't pay random amounts.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
