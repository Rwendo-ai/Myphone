import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-time-minutes',
  module: 6,
  lesson: 5,
  title: 'Pharmacy / Chemist — UK chemist vs US drugstore',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "EUK uthi 'chemist' kumbe 'pharmacy'. EUS bathi 'pharmacy' kumbe 'drugstore'. Ngaphandle nje yelizwe lawolike, eUK kuvama u-'chemist' (njenge-'I'm going to the chemist'), kanti eUS bayithi 'drugstore' kumbe 'pharmacy'. UPharmacist (eUK lase US) — yisifundo somuntu okwaziyo amaphilisi.",
    culturalNote: "Lokhu kungumduli omkhulu — eZimbabwe sithi 'pharmacy' bonke. Kodwa nxa uya eLondon, abantu bathi 'I popped to the chemist' kuhle. EUS uma uthi 'chemist' bahlukane lokho lokho — bavame ukucabanga ngomuntu osebenza nge-chemistry esikoleni. EUK i-'chemist' yindlovu ezimbili: yi-pharmacy le-shop yepleymakhethi (cosmetics, izinto zomzimba, etc.) — njengeBoots noma Superdrug. EUS yi-Walgreens noma CVS — kunemikhondo eminengi. Ipharmacist (i-pharmacist same eUK lase US) angakupha 'over-the-counter' (i-OTC, ezingadingi i-prescription kadokotela), kumbe 'prescription' (eyahanjiswa nge-script kadokotela). 'Prescription' eUK ihlawulwa nge-NHS imali encane (£9.65 ngo 2025); eUS ihlawulwa ngokugcwele kungaba khona i-insurance.",
  },

  chunks: [
    {
      id: 'chemist',
      target: "I'm going to the chemist (UK)",
      native: 'Ngiya kuPharmacy (UK)',
      literal: undefined,
      emoji: '💊',
      phonetic: 'aym-GO-ing-tu-thuh-KEM-ist',
      audioRef: null,
    },
    {
      id: 'pharmacy_us',
      target: "I'm going to the pharmacy / drugstore (US)",
      native: 'Ngiya ku-pharmacy / drugstore (US)',
      literal: undefined,
      emoji: '🏪',
      phonetic: 'aym-GO-ing-tu-thuh-FAR-muh-see',
      audioRef: null,
    },
    {
      id: 'painkiller',
      target: 'Do you have any painkillers?',
      native: 'Ulazo ezokulapha ubuhlungu?',
      literal: undefined,
      emoji: '💊',
      phonetic: 'doo-yu-hav-en-ee-PAYN-kih-luhz',
      audioRef: null,
    },
    {
      id: 'prescription',
      target: "I have a prescription",
      native: "Ngile-prescription (incwadi kadokotela)",
      literal: undefined,
      emoji: '📝',
      phonetic: 'ay-hav-uh-pruh-SKRIP-shun',
      audioRef: null,
    },
    {
      id: 'over_counter',
      target: 'Something over the counter',
      native: 'Into engadingi i-prescription',
      literal: undefined,
      emoji: '🛒',
      phonetic: 'sum-thing-OH-vuh-thuh-KOWN-tuh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Chemist (UK) vs drugstore (US) — yiphi enye?",
    explanation: "EUK 'chemist' yiyo eyamukelwayo nsuku zonke — 'I'll pop to the chemist' yindlela ekhulunywayo. 'Pharmacy' iyaqondiseka eUK kodwa kuvama kakhulu emaphepheni nasezigabeni eziphakemeyo. EUS 'pharmacy' lo 'drugstore' yikho okuvamileyo. Ungasebenzisa 'pharmacist' eUK lase US — kunye nje. Khumbula: u-'chemist' eUS uzwakala kuyimfundo ye-chemistry — hatshi i-shop yamapilisi.",
    examples: [
      { target: "I'll pop to the chemist on the way home. (UK)", native: 'Ngizodlulisa kupharmacy endleleni eya ekhaya.' },
      { target: "I picked it up at the drugstore. (US)",          native: 'Ngazithathela kupharmacy.' },
      { target: 'Ask the pharmacist for advice.',                  native: 'Buza upharmacist usizo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama lapho asetshenziswa khona',
      pairs: [
        { left: 'Chemist',     right: 'UK — i-shop yamapilisi' },
        { left: 'Drugstore',   right: 'US — i-shop yamapilisi' },
        { left: 'Pharmacist',  right: 'Umuntu osebenza eshop yamapilisi' },
        { left: 'Prescription', right: 'Incwadi yedokotela' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo — uphazima eLondon',
      question: "Umngane wakho oseLondon ukufonele. Ufuna into yokulapha ikhanda. Ungatsho:",
      options: [
        { text: "I'll grab some paracetamol from the chemist.", correct: true },
        { text: "I'll get something from the drugstore.",         correct: false },
        { text: "I will purchase pharmaceutical agents.",          correct: false },
      ],
      explanation: "EUK 'chemist' yifomula yansuku zonke. 'Drugstore' yi-American — kuzwakala kungaqondananga endaweni. 'Pharmaceutical agents' kuyiqonso le-formal — uzwakala kungumlangabi.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (UK)',
      prompt: 'Ngiyacela usizo ekulapheni ubuhlungu.',
      correct: ['Do you have any painkillers, please?', 'Do you have any painkillers please?', 'I need painkillers, please', 'do you have any painkillers, please?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho',
      sentence: "I have a ____ from my doctor — for antibiotics.",
      options: ['prescription', 'permission', 'preposition'],
      correct: 'prescription',
      context: "'Prescription' = incwadi yedokotela ekhomba i-medication. 'Permission' = imvume. 'Preposition' = igatsha lobungoma — akuhambelani.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — ucela usizo kupharmacist',
      words: ['recommend', 'you', 'something', 'Could', '?'],
      correct: ['Could', 'you', 'recommend', 'something', '?'],
      translation: 'Ungazwa ungiphakamisela?',
    },
  ],

  rwenDialogue: {
    intro: "Use eBoots Pharmacy eLondon. Awulali kuhle, ulomphimbo obuhlungu. Useduze ku-pharmacist.",
    lines: [
      { speaker: 'npc', target: 'Hi there. How can I help?', native: 'Salibonani. Ngingakusiza ngani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi — I have a sore throat and a bit of a cough. Could you recommend something over the counter?", native: 'Salibonani — ngilomphimbo obuhlungu lokukhwehlela kancane. Ungaphakamisa into engadingi i-prescription?', correct: true, feedback: "Kuhle. Wachaza isifo, wabuza nge-'over the counter' — yikho i-pharmacist efunayo. Ekhetha izinto ezilungele wena." },
          { target: 'I want strong drugs.', native: 'Ngifuna amapilisi anamandla.', correct: false, feedback: "Akusebenzi. 'Drugs' eUK ngayo izwakala kuhambisana lezinjwakileyo (illegal). Sebenzisa 'painkillers' kumbe 'something for a sore throat'." },
          { target: 'My throat dies.', native: 'Umphimbo wami uyafa.', correct: false, feedback: "Sebenzisa 'I have a sore throat' — yifomula ejwayelekileyo." },
        ],
      },
      { speaker: 'npc', target: 'Have you tried paracetamol? Lozenges with a numbing agent might help too. How long has it been going on?', native: 'Sewazama i-paracetamol? Ama-lozenges ane-numbing nawo angasiza. Sekuyisikhathi singakanani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "About three days. If it's not better by Monday, should I see a GP?", native: 'Sekuzinsuku ezintathu. Uma kungasoneliseki ngoMsombuluko, kufanele ngibone i-GP?', correct: true, feedback: "Kuhle — wakhuluma isikhathi, wabuza ukuthi yini elandelayo. Yindlela uphapharrasi acabanga ngayo." },
          { target: '3 days.', native: 'Insuku ezintathu.', correct: false, feedback: "Useduze — kodwa fakela 'About three days' ngoba kuyahloniphekayo." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hayi! Ulokhu uhamba ngendlela elungileyo. 'Could you recommend something over the counter?' yiphethelo elimqoka — bonga uphapharrasi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: 'Bhala ngesiNgisi (UK): Ngiya kupharmacy.', correct: ["I'm going to the chemist", "I'm going to the chemist.", "I am going to the chemist", "i'm going to the chemist"] },
      { prompt: 'Bhala ngesiNgisi: Ngile-prescription.', correct: ['I have a prescription', 'I have a prescription.', 'i have a prescription'] },
      { prompt: 'Bhala ngesiNgisi: Into engadingi i-prescription.', correct: ['Something over the counter', 'over the counter', 'something over the counter'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wamuhla',
    task: "Bhala iziphakamiso ezimbili: 'Could you recommend something for ___?' (gcwalisa: a headache, a cold, sore throat). Phinda ngomlomo kabili.",
    rwenSignoff: "Kusasa siyahlola i-NHS leUS health insurance — kuhlukile, kuyamangalisa.",
  },

  phase8: {
    scenario: "You're at a Boots Pharmacy in central London. You need something for hay fever (sneezing, itchy eyes). You don't have a prescription — you want over-the-counter advice.",
    rwenRole: "Priya, 30, a Boots pharmacist. Friendly, asks if you've tried anything before, recommends antihistamines, warns about drowsy vs non-drowsy options.",
    successCriteria: "User uses 'chemist' or 'pharmacy' (NOT only 'drugstore'). Asks for 'something over the counter' or 'something for hay fever'. Says 'thank you' at the end. No Ndebele.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
