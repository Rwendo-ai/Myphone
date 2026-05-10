import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07-months-seasons',
  module: 6,
  lesson: 7,
  title: 'Emergency — 999 (UK), 911 (US), A&E',
  estimatedMinutes: 7,
  xpReward: 40,

  hook: {
    rwenLine: "Lapha kuyizifundo ezingabe zihlenga impilo. EUK shaya 999. EUS shaya 911. EUK uya kwa-A&E (Accident & Emergency) — kunye kuphela esibhedlela. EUS uya ku-ER (Emergency Room) — kuyiqondene. Lawa magama uwadinga awathandi, kodwa uma kufika usuku awafune, kufanele wona awulindile.",
    culturalNote: "EZimbabwe sivame ukuyabantu uma kunesigameko — sicela usizo kubahlali, kumbe sigijima esibhedlela. EUK lase US, akusebenzi njalo. Kufanele ushaye inombolo (999 / 911) kuqala — i-operator izabuza imibuzo, ithumele i-ambulance. Ukuxhamazela esibhedlela ungaphethi 'eseduze' kungakulahlekisela isikhathi. NgomaQiniso: i-A&E (UK) izolinda — ungalindi ihora elilodwa kuya kwamane uma isimo sakho asisibi kakhulu. EUS i-ER iqala ngokuhlola ubunzima besimo (i-triage) — uma awulimalanga kakhulu uyalindela. Kungumahluko ophenduliweyo. Kodwa nxa kuyimpilo, ungalindi nse — yiya manje. INHLOKO YESIFUNDO: kawulindi, ushaya inombolo, ukhuluma ngokucacileyo.",
  },

  chunks: [
    {
      id: 'emergency_uk',
      target: 'Call 999 (UK)',
      native: 'Shaya u 999 (UK)',
      literal: undefined,
      emoji: '🚨',
      phonetic: 'KAWL-NYN-NYN-NYN',
      audioRef: null,
    },
    {
      id: 'emergency_us',
      target: 'Call 911 (US)',
      native: 'Shaya u 911 (US)',
      literal: undefined,
      emoji: '🚨',
      phonetic: 'KAWL-NYN-WUN-WUN',
      audioRef: null,
    },
    {
      id: 'ae_er',
      target: "A&E (UK) / ER (US)",
      native: "Indawo yezisilo zezigameko esibhedlela",
      literal: undefined,
      emoji: '🏥',
      phonetic: 'AY-and-EE / EE-AR',
      audioRef: null,
    },
    {
      id: 'ambulance',
      target: 'I need an ambulance',
      native: 'Ngidinga i-ambulance',
      literal: undefined,
      emoji: '🚑',
      phonetic: 'ay-need-an-AM-byoo-luns',
      audioRef: null,
    },
    {
      id: 'address',
      target: 'My address is...',
      native: 'Indawo yami yikhona...',
      literal: undefined,
      emoji: '📍',
      phonetic: 'mai-uh-DRES-iz',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Engcupheni — yenza ezimqoka kuphela, futhi ngokucacileyo',
    explanation: "Lapho ushaya 999 (UK) kumbe 911 (US), i-operator izakubuza imibuzo emithathu emqoka: (1) 'What's the emergency?' (Yini engqugela?), (2) 'Where are you?' (Useduze ngaphi?), (3) 'Are you safe?' (Uphephile?). Phendula ngamagama amancane, ucacile. Ungaphetshi ngokuthi 'I think', 'maybe' — phendula ngokuqondileyo. Khumbula i-address yakho — yibhale phansi efoni yakho noma kwiwallet yakho ukuze ungayikhohlwa engqondweni eyethukileyo.",
    examples: [
      { target: "I need an ambulance — my friend has collapsed.",  native: 'Ngidinga i-ambulance — umngane wami uwile.' },
      { target: 'My address is 14 Park Lane, London E1 6AN.',       native: 'Indawo yami yi 14 Park Lane, London E1 6AN.' },
      { target: 'He is breathing but not responding.',              native: 'Uphefumula kodwa akaphenduli.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama lokuthi avela kuphi',
      pairs: [
        { left: '999',     right: 'UK — emergency number' },
        { left: '911',     right: 'US — emergency number' },
        { left: 'A&E',     right: 'UK — emergency hospital' },
        { left: 'ER',      right: 'US — emergency hospital' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo eUK',
      question: "Umngane wakho uwile esitezeni, akakhulumi. Ungenzani okokuqala?",
      options: [
        { text: "Call 999 immediately and ask for an ambulance.", correct: true },
        { text: 'Drive him to A&E yourself.',                       correct: false },
        { text: 'Call your GP.',                                    correct: false },
      ],
      explanation: "Ekungcupheni eUK, shaya u-999. I-GP ayikwazi ukukusiza usuku ngosuku ngezigameko ezimbi. Ukuhambisa wena ungalimaza umuntu kakhulu — i-paramedic uzazi.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo eUS',
      question: "Umuntu osedolobheni eChicago udumele esicilili. Ushaya:",
      options: [
        { text: '911', correct: true },
        { text: '999', correct: false },
        { text: '112', correct: false },
      ],
      explanation: "EUS yi-911. I-999 yiUK. I-112 yi-EU. Khumbula owaselizweni okulo.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — ushaya 999',
      prompt: 'Ngidinga i-ambulance — umngane wami uwile.',
      correct: ['I need an ambulance — my friend has collapsed.', 'I need an ambulance, my friend has collapsed.', 'I need an ambulance my friend has collapsed', 'i need an ambulance — my friend has collapsed.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho — usemkhondisweni le-911',
      sentence: 'Operator: "What\'s the emergency?" You: "I need an ambulance — my mother is having ___ chest pains."',
      options: ['severe', 'much', 'big'],
      correct: 'severe',
      context: "'Severe' yifomula esobenza eyenelisa udokotela kakhulu. 'Big pains' kumbe 'much pains' akusebenzi esiNgisini sokwelapha.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — ushaya 999',
      words: ['ambulance', 'I', 'an', 'need'],
      correct: ['I', 'need', 'an', 'ambulance'],
      translation: 'Ngidinga i-ambulance',
    },
  ],

  rwenDialogue: {
    intro: "USebenzela e-care home eUK. UMrs Thompson omdala (resident) uwile, akakhulumi. Ushaya u 999.",
    lines: [
      { speaker: 'npc', target: "Emergency — which service do you need? Police, fire, or ambulance?", native: 'Engcupheni — yiyiphi i-service oyidingayo? Amapholisa, abomlilo, kumbe i-ambulance?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ambulance, please. A resident has collapsed and is unresponsive.', native: 'I-ambulance, ngiyacela. Owesimomtsha owomiselweyo lapha uwile, akaphenduli.', correct: true, feedback: "Kuhle. Wakhetha i-service, wachaza ngokushesha kwenzakala. I-operator usengakuthumela ngokushesha." },
          { target: "Help help help!", native: 'Usizo usizo usizo!', correct: false, feedback: "Akusiqondileyo. I-operator ifuna izimpendulo zokuqala — yiyiphi i-service, kwenzakala kwakuni." },
          { target: "Sengizathwala lo umuntu.", native: 'Sengizathwala lo umuntu.', correct: false, feedback: "Khuluma ngesiNgisi kuphela. I-operator ayisazwa isiNdebele." },
        ],
      },
      { speaker: 'npc', target: "What is the address?", native: 'Iyini i-address?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Springfield Care Home, 14 Park Lane, Manchester M1 4AB.", native: 'I-Springfield Care Home, 14 Park Lane, Manchester M1 4AB.', correct: true, feedback: "Hayi! Wapha igama lendawo, inombolo, isigaba, le-postcode. Yikho i-paramedic afunayo." },
          { target: 'Care home.', native: 'I-care home.', correct: false, feedback: "Akwanele. I-paramedic akakwazi ukuthola le-care home eyiphi. Sebenzisa i-address epheleleyo." },
        ],
      },
      { speaker: 'npc', target: "Stay on the line. Help is on the way. Is the patient breathing?", native: 'Hlala kufoni. Usizo luyeza. Iyaphefumula i-patient?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, she's breathing but unconscious. I'm with her now.", native: 'Yebo, uyaphefumula kodwa akakhulumi. Nginguye lapha manje.', correct: true, feedback: "Hayi! Uphendule ngokuqondileyo, watsho ukuthi unguye." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wahle wenelisa — ngaphandle nje ngokwesabela. La amagama akhokhwele bagcina umuntu ephila. Ungayilibali: 999 (UK), 911 (US).",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngokukhumbula.',
    prompts: [
      { prompt: 'Bhala ngesiNgisi: Ngidinga i-ambulance.', correct: ['I need an ambulance', 'I need an ambulance.', 'i need an ambulance'] },
      { prompt: 'Inombolo yokwesabela eUK?', correct: ['999', 'nine nine nine', 'Nine nine nine'] },
      { prompt: 'Inombolo yokwesabela eUS?', correct: ['911', 'nine one one', 'Nine one one'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wamuhla',
    task: "Bhala phansi i-address yakho ngesiNgisi (lapho uhlala): inombolo, igama lomgwaqo, idolobha, kanye le-postcode (UK) noma i-zip code (US). Phinda ngomlomo kabili. Lo magama ungase uwadinge ngomzuzu omkhulu.",
    rwenSignoff: 'Kusasa sikhuluma ngempilo yengqondo — anxious, depressed, stressed.',
  },

  phase8: {
    scenario: "You're at home in London. Your housemate has fallen down the stairs and isn't moving. You don't know if they're conscious. Phone 999 and request an ambulance. Give your address calmly.",
    rwenRole: "999 emergency operator. Calm, professional, asks 'which service?', 'address?', 'is the person breathing?', 'are they conscious?', 'what happened?' She'll keep you on the line until help arrives.",
    successCriteria: "User says 'Ambulance, please' (or names the service). Provides address (street + postcode). Answers questions briefly and clearly. Doesn't panic into Ndebele. Stays on the line as instructed.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
  crisisHandoff: true,
};

export default lesson;
