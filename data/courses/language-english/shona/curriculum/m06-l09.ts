import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-shopping-numbers',
  module: 6,
  lesson: 9,
  title: 'Numbers in shopping — Discount, Total',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Pa-shopping unoda mashoko: 'Two for ten dollars', 'discount', 'total'. Idzi dzinokupa simba pakuverenga zvakatengwa nemutengo wakaderera.",
    culturalNote: "MuChiShona, pakushopa unoshandisa: 'kuderedzwa' (discount), 'zvose pamwe chete' (total). MuChiNgezi: 'discount' kana 'sale', 'total' kana 'altogether'. Tsika yedu ye-bargaining inoenderana neyema USA neUK haitsoteri zvachose — muma supermarket havatengetani; muma craft market vanotengetana. Pa-receipt: 'subtotal' (mari pasati pawedzerwa tax), 'tax' (mutero), 'total' (mari yatinopfekedzwa).",
  },

  chunks: [
    {
      id: 'two_for_ten',
      target: 'Two for ten dollars',
      native: 'Zviviri pamadhora gumi',
      literal: 'Two for ten dollars',
      emoji: '🛍️',
      phonetic: 'too-for-TEN-DOL-arz',
      audioRef: null,
    },
    {
      id: 'discount',
      target: 'Discount',
      native: 'Dhisikaunti',
      literal: 'Discount',
      emoji: '🏷️',
      phonetic: 'DIS-kownt',
      audioRef: null,
    },
    {
      id: 'total',
      target: 'Total / altogether',
      native: 'Zvose pamwe chete',
      literal: 'Total / altogether',
      emoji: '🧾',
      phonetic: 'TOH-tul / ahl-too-GEH-thur',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Shopping math phrases',
    explanation: "Kutaura mutengo wezvinhu zvakawanda: 'X for Y dollars' = 'two for ten' (zviviri pa-10). Kukumbira kuderedzwa: 'Is there a discount?' kana 'Can I get a discount?'. Kupedzisira mari: 'What's the total?' kana 'How much altogether?'. Pa-receipt: 'subtotal' + 'tax' = 'total'. Cherechedza — 'sale' inotsanangura zvinhu zviri pa-discount: 'It's on sale.' = 'Iri pamutengo wakaderera.'",
    examples: [
      { target: 'Three for fifteen dollars',     native: 'Zvitatu pamadhora gumi nemashanu' },
      { target: 'Is there a discount?',          native: 'Pane dhisikaunti here?' },
      { target: "What's the total?",             native: 'Zvose pamwe chete imari yakadii?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko ekutenga',
      pairs: [
        { left: 'Discount',          right: 'Dhisikaunti' },
        { left: 'Total',             right: 'Zvose pamwe chete' },
        { left: 'On sale',           right: 'Pamutengo wakaderera' },
        { left: 'Two for ten',       right: 'Zviviri pa-10' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kubvunza receipt',
      prompt: 'Zvose pamwe chete imari yakadii?',
      correct: ["What's the total?", "What is the total?", "How much altogether?", "How much in total?"],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kupa mutengo wezvinhu zviviri',
      sentence: 'Three ____ twenty dollars.',
      options: ['for', 'in', 'at'],
      correct: 'for',
      context: "Pa-bulk pricing: 'X for Y' = X items pa Y dollars. 'Three for twenty' = 3 items at $20 total.",
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka — uri kubvunza nezve dhisikaunti',
      words: ['get', 'a', 'I', 'discount?', 'Can'],
      correct: ['Can', 'I', 'get', 'a', 'discount?'],
      translation: 'Ndinogona kupiwa dhisikaunti here?',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kunyunyutsa nezve mutengo unoita kunge wakwirira pareceipt',
      prompt: 'Sei zvose pamwe chete zvichidaro?',
      correct: ['Why is the total so high?', 'Why is the total so high', "Why's the total so high?", 'Why is the total this high?'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza — uri kubvunza nezve charge yawakaona pareceipt',
      question: "What's the most natural way to ask about an unexpected charge?",
      options: [
        { text: "What is this charge for?",           correct: true },
        { text: "Why this money?",                     correct: false },
        { text: "I don't pay this.",                   correct: false },
      ],
      explanation: "'What is this charge for?' inotaura zvine ruremekedzo uye pamoyo unoda mhinduro. 'I don't pay' inotsamwisa, 'why this money' haina kunyatsosvika.",
    },
  ],

  rwenDialogue: {
    intro: 'Uri pa-supermarket — wapfeka receipt — pane charge yausina kuziva. Unotaurira mushandi wepa-till anotaura ChiNgezi.',
    lines: [
      { speaker: 'npc', target: "Hi, can I help?", native: 'Mhoro, ndingakubatsire here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — what is this five-dollar charge for?",  native: 'Hongu — chii icho icharge yemadhora mashanu?', correct: true,  feedback: "Wakwanisa — pfupi, ine ruremekedzo, uye yakajeka. 'What is this charge for?' ndiyo formula yacho." },
          { target: "Money is wrong.",                                native: 'Mari haina kururama.',                          correct: false, feedback: "Pfupi uye haina kujeka. Tsanangura ne 'this charge' kuti vazive zviri kutaurwa." },
          { target: "Why?",                                            native: 'Sei?',                                           correct: false, feedback: "Pfupi zvakanyanya — mushandi haazivi 'why what?'. Tsanangura nezve receipt." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'What is this charge for?' inoshanda mu-supermarket, mu-bank, kunyange mu-restaurant. Watora simba rezvauri kubhadhara.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Discount (in English)', correct: ['Discount', 'discount'] },
      { prompt: "What's the total? (in English)", correct: ["What's the total?", "What is the total?", "what's the total?", "What's the total"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Tarisa receipt yawakawana nguva pfupi yapfuura. Verenga 'subtotal', 'tax', 'total' muChiNgezi. Funga: kana paine charge yausina kuziva, ungazvitaura sei? Edza mhinduro mumusoro mako.",
    rwenSignoff: "Munhu anonzwisisa receipt yake — haabiwi mari. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You just paid for groceries at a supermarket and notice a $5 charge on your receipt that doesn't match anything you bought. Go back to the till and politely query it with the English-speaking cashier.",
    rwenRole: "Jane, 25, a cashier. Helpful, will check the receipt with you. May explain it as a 'service charge' or 'bag fee' — you have to decide if it's fair.",
    successCriteria: "User asks 'What is this charge for?' or similar, listens to Jane's explanation, and either accepts ('OK, thank you') or asks for it to be removed if they didn't agree to it. Uses 'total' or 'receipt' at least once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
