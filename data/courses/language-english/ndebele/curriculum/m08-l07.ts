import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-tipping',
  module: 8,
  lesson: 7,
  title: 'Tipping — UK 10%, US 15-20%, AU 0%',
  estimatedMinutes: 6,
  xpReward: 35,

  hook: {
    rwenLine: "Iyoda eqaphiselayo lale module! Ukunika i-tip kuhlukile NGEMPELA emakethe ezahlukene: e-UK 10%, e-US 15-20% (kudingekile), e-Australia 0% (ngaba kungafaneleki).",
    culturalNote: "LOKHU ESIYINKULU NGEMPELA — uma ungafundi i-rule yakhona, uzobonakala kabi noma uzonisa abasebenzi. ZONKE IZINGCEPHEZELO: (1) USA — i-tip YIDINGEKILE (akusiyo i-extra). Abasebenzi bephayidiwe kabi ($2-3/hour) babambelele kuma-tips. Kahle ngu-15-20% ku-restaurant. 18% ku-receipt iyo-i-norm. Uma uthi 'No tip' kungenzeka udelele kakhulu — abanye baqala ukukulandela. Tip ku-Uber, ku-haircut, ku-bartender ($1-2/drink), ku-housekeeping. (2) UK — 10-12.5% ekudleni e-restaurant. Kuvame ukufakwa ngokuzenzakalelayo ku-receipt njenge-'service charge' (sebenzela bona). Uma sekufakiwe — UNGAZE UNIKE i-extra. Uma ungafakanga, faka 10%. AKUKHO i-tip ku-Uber, ku-pubs, ku-coffee shops, ku-haircut. (3) AUSTRALIA — i-tip AYIDINGEKILE. Abasebenzi bephayidiwe kahle (AU$25+/hour). I-tip ku-restaurant ekhulu kakhulu (10%) iyamukeleka kepha akudingekile. Akukho i-tip e-cafe / pub / Uber. (4) Esikoleni se-Zimbabwe — uma sigxile e-restaurant esisetshenziswa abahambi (Victoria Falls), tip 5-10% ihloniphile. Indawo enkulu yokungashayi ekhanda: 'service charge already included' — funda ireceipt ngaphambi kokufaka i-extra! Igama: 'gratuity' = i-tip e-formal.",
  },

  chunks: [
    {
      id: 'tip',
      target: 'A tip',
      native: 'Imali yokuncoma (eyengeziwe entengweni)',
      literal: 'tip',
      emoji: '💸',
      phonetic: 'TIP',
      audioRef: null,
    },
    {
      id: 'service_charge',
      target: 'Service charge',
      native: 'I-charge yenkonzo (vele ifakiwe ku-receipt)',
      literal: 'service / charge',
      emoji: '🧾',
      phonetic: 'SUR-vis-CHARJ',
      audioRef: null,
    },
    {
      id: 'is_service_included',
      target: 'Is service included?',
      native: 'I-service ifakiwe yini?',
      literal: 'is / service / included',
      emoji: '❓',
      phonetic: 'iz-SUR-vis-in-KLOO-ded',
      audioRef: null,
    },
    {
      id: 'keep_the_change',
      target: 'Keep the change.',
      native: 'Yiba lensalela. (uma ungafuni ukusala)',
      literal: 'keep / the / change',
      emoji: '🪙',
      phonetic: 'KEEP-the-CHAYNJ',
      audioRef: null,
    },
    {
      id: 'gratuity',
      target: 'Gratuity (formal)',
      native: 'I-tip ngokugcwele (igama lokugcina)',
      literal: 'gratuity',
      emoji: '💵',
      phonetic: 'gruh-TOO-i-tee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Country-by-country tipping',
    explanation: "(1) USA — TIP IDINGEKILE: 15-20% e-restaurant; $1-2/drink ku-bar; 15-20% ku-haircut & taxi. Ungalibele lokhu. (2) UK — 10-12.5% kuphela e-restaurant esi-sit-down. Bheka i-receipt — uma 'service charge' isifakiwe, awufaki okwengeziwe. Ku-pubs, cafes, taxis, haircuts — AKUKHO i-tip. (3) AUSTRALIA — Akukho dingo. I-restaurant ehluleyo: 10% kuhle kepha akudingekile. (4) ZIMBABWE / SA — 5-10% e-restaurant ehluleyo, uma kufuneka. UMBUZO obalulekile: 'Is service included?' E-US: cha, kufanele ufake. E-UK: kuyenzeka isifakiwe. Khona ungaze ufake i-double tip.",
    examples: [
      { target: "I'll leave a 20% tip — we're in New York.", native: "Ngizoshiya i-tip ye-20% — sise-New York." },
      { target: 'In the UK, 10% is fine if service is good.', native: 'E-UK, 10% kuhle uma inkonzo ihambisene.' },
      { target: 'Australians usually do not tip at all.', native: 'Ama-Australian awafaki i-tip nakancane.' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Use-restaurant e-New York. I-bill ngu-$50. Inkonzo ihle.',
      question: 'How much do you tip?',
      options: [
        { text: '$10 (about 20%)', correct: true },
        { text: '$2 (small thanks)', correct: false },
        { text: 'Nothing — service was the job.', correct: false },
      ],
      explanation: "E-US i-tip 18-20% YIDINGEKILE. $2 ku-$50 ngu-4% — kuyamphoxa umsebenzi. 'Nothing' ku-restaurant e-US ku-rude.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Use-pub e-London. Uthenge umvumelano (£5).',
      question: 'Do you tip?',
      options: [
        { text: 'No — pubs in the UK do not get tipped.', correct: true },
        { text: 'Yes, 20%.', correct: false },
        { text: "Yes, leave £2 on the bar.", correct: false },
      ],
      explanation: "Ku-pubs e-UK awunaki ku-tip. Ungalishaya u-bartender ngokushushuzela 'And one for yourself' (uthenga indebe) uma uthanda — kepha akudingekile.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Use-restaurant e-Sydney (Australia). I-bill ngu-AU$80.',
      question: 'Tipping?',
      options: [
        { text: "Not expected. Pay AU$80 and you're done.", correct: true },
        { text: 'Yes, AU$16 (20%).', correct: false },
        { text: 'AU$8 minimum or you are rude.', correct: false },
      ],
      explanation: "E-Australia i-tip AYIDINGEKILE. Abasebenzi bephayidiwe kahle. Ungafaka 10% uma uthanda kakhulu, kepha akukho impi.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesi-Ngisi (UK)',
      prompt: 'I-service ifakiwe yini?',
      correct: ['Is service included?', 'is service included?', 'Is service included', 'Is the service included?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha — yiba lensalela',
      words: ['change.', 'Keep', 'the'],
      correct: ['Keep', 'the', 'change.'],
      translation: 'Yiba lensalela.',
    },
  ],

  rwenDialogue: {
    intro: "Use-restaurant e-Brooklyn (New York). Ushaya kahle. I-bill ngu-$60.",
    lines: [
      { speaker: 'npc', target: "Here's your check. No rush!", native: 'Nansi i-bill yakho. Akukho ukushesha!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thanks. Is the tip included?", native: 'Ngiyabonga. I-tip ifakiwe?', correct: true, feedback: "Kuhle — buza, ngoba ku-US iningi i-tip aliyifaki ngokuzenzakalelayo." },
          { target: "Sixty dollars exactly?", native: 'Yi-$60 ngempela?', correct: false, feedback: "Awulethelethi i-tip — i-bill yi-pre-tip. Ku-US kufanele ufake okwengeziwe." },
        ],
      },
      { speaker: 'npc', target: "No, gratuity isn't included. It's up to you.", native: 'Cha, i-gratuity ayifakiwe. Kungumthwalo wakho.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Okay, I'll add 20%. So that's $72 total.", native: 'Kulungile, ngifaka 20%. Total ngu-$72.', correct: true, feedback: "Sicaca — i-20% kahle kakhulu e-US. Inkokhelo isikuyongiwe." },
          { target: "Okay, I'll add a dollar.", native: 'Kulungile, ngifaka i-dollar.', correct: false, feedback: "$1 ku-$60 ngu-1.6% — kuyamphoxa kakhulu umuntu osebenzayo. Faka 18-20%." },
          { target: "No tip then.", native: 'Akukho tip.', correct: false, feedback: "Akufanele e-US! Tip yidingekile — abasebenzi bephayidiwe kabi futhi bayidinga." },
        ],
      },
      { speaker: 'npc', target: "Thank you so much, that's very kind!", native: 'Ngiyabonga kakhulu, kunhle!' },
      {
        speaker: 'rwen',
        rwenLine: "Khumbula: US = 18-20% (DINGEKILE). UK = 10-12.5% (uma ingafakiwe). AU = 0% (ngokuvamile). UNGAYIDIDI lezimboza.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngaphandle kokubuka.',
    prompts: [
      { prompt: 'Tip percentage in USA restaurant', correct: ['15-20%', '15 to 20%', '18%', '20%', '15%-20%'] },
      { prompt: 'Tip percentage in Australian restaurant', correct: ['0%', 'zero', 'none', '0', 'not expected', 'no tip'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamuhla',
    task: "Cabanga uthenga ekudleni okudula u-$80 ngamazwe amathathu: e-Manhattan, e-London, e-Sydney. Bhala intengo yokugcina ne-tip ngamunye: NY = $96 (20% tip); London = £80 noma £88 (uma 10% — kunye nokuhlola i-receipt); Sydney = AU$80 (akukho tip).",
    rwenSignoff: "Kusasa: i-bank — i-account, savings, i-credit card.",
  },

  phase8: {
    scenario: "You've just finished dinner in midtown Manhattan with a colleague. Bill is $85. Your colleague is from Sydney and doesn't understand the US tipping system. Explain it as you pay.",
    rwenRole: "Sydney-based colleague, mid-30s, friendly, surprised by US tipping. Asks why you're adding so much.",
    successCriteria: "Student calculates a 18-20% tip, explains why ('servers paid low base wage, tips are expected, not optional'), and contrasts with Australia ('not expected at home') and UK ('around 10%, often included').",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
