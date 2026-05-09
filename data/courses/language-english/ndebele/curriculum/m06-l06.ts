import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06',
  module: 6,
  lesson: 6,
  title: 'NHS basics (UK) / Insurance (US) — vocabulary',
  estimatedMinutes: 8,
  xpReward: 40,

  hook: {
    rwenLine: "Lokhu yisifundo esimqoka kakhulu — i-system ye-healthcare yase UK le US ihlukile ncamashi. EUK i-NHS (National Health Service) ihlawulwa ngentela — udokotela, isibhedlela, kuyamahla emkhathi omkhulu. EUS, kuyadingakala i-health insurance, futhi kuyabiza. Lawa magama uzakuzwa wonke nsuku — kufanele uwazi.",
    culturalNote: "Lokhu kuyimibango eyenza ukuhamba phesheya kube nzima — ungayazi i-system, ungazithola usenkingeni. EZimbabwe kunemiqondo eseduze leNHS (clinics zikahulumeni), kodwa ezweni leUS yonke imisebenzi (yokuya kudokotela, ukulapha nje, ukufaka i-X-ray) ihlawulwa nge-insurance. UMA UNGENA EZWENI LEUS WONKE EBE UNGAYO — landa i-health insurance ngokushesha kakhulu, ngitsho ngosuku lokuqala. Eyodwa nje i-A&E (Accident & Emergency, eUK) ingadla angangezi-$10,000 (ngaphandle kwe-insurance) eUS. EUK uphenduka kwi-NHS, awuhlawuli lutho lapho. EUS, awuhlawuli ku-pre-tax (kahulumeni uyabamba imali emholweni wakho — i-Medicare le-Social Security) — kodwa lokho akukhulu njenge-NHS-style coverage. Kufanele uthenge i-private insurance ngokwakho noma kuwumqashi.",
  },

  chunks: [
    {
      id: 'nhs',
      target: 'NHS — National Health Service (UK)',
      native: 'NHS — usizo lwezempilo lukahulumeni eUK',
      literal: undefined,
      emoji: '🇬🇧',
      phonetic: 'EN-aych-ESS',
      audioRef: null,
    },
    {
      id: 'gp',
      target: 'GP — General Practitioner (UK)',
      native: 'I-doctor wakini wendawo eUK',
      literal: undefined,
      emoji: '👨‍⚕️',
      phonetic: 'JEE-PEE',
      audioRef: null,
    },
    {
      id: 'insurance_us',
      target: 'Health insurance (US)',
      native: 'I-insurance yempilo eUS',
      literal: undefined,
      emoji: '🇺🇸',
      phonetic: 'helth-in-SHOO-runs',
      audioRef: null,
    },
    {
      id: 'copay',
      target: "Copay / deductible (US)",
      native: 'Imali ohlala uyikhokha lapho usebenzisa i-insurance (US)',
      literal: undefined,
      emoji: '💵',
      phonetic: 'KOH-pay',
      audioRef: null,
    },
    {
      id: 'covered',
      target: 'Is this covered?',
      native: 'Lokhu kuhlanganiselwe yi-insurance?',
      literal: undefined,
      emoji: '🛡️',
      phonetic: 'iz-this-KUH-vuhd',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'UK vs US healthcare — amagama amqoka',
    explanation: "EUK: i-NHS yonke into ifaneleka (kuncane kunye u-£9.65 we-prescription, ngokwabantu abasebenzayo). U-'GP' yidokotela wakini wendawo. 'A&E' yi-emergency. EUS: konke kuhamba nge-'health insurance'. U-'copay' yimali oyikhokha lapho ulapha (uvame i-$20-$50 ku-doctor visit). U-'deductible' yimali odinga ukuyikhokha kuqala phambi kokuba i-insurance iqalise. U-'covered' yifomula yokubuza ukuthi yini i-insurance yakho ekhokhayo. Ungasebenzisi 'NHS' eUS — bayazi kanjalo ukuthi yini, kodwa awusakhozeleli ulwazi olutsha. Uma ulapho, sebenzisa 'insurance' kuphela.",
    examples: [
      { target: "I'm registered with a GP near my flat. (UK)",   native: 'Ngibhalisiwe lo-GP eduze lendawo yami yokuhlala.' },
      { target: "Is this procedure covered by my insurance? (US)", native: 'Lokhu kuhlanganiselwe yi-insurance yami?' },
      { target: 'NHS prescriptions cost £9.65 each.',              native: 'Ama-prescriptions e-NHS abiza £9.65 ngakunye.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama lapho asetshenziswa khona',
      pairs: [
        { left: 'NHS',         right: 'UK — usizo lukahulumeni' },
        { left: 'GP',          right: 'UK — udokotela wendawo' },
        { left: 'Health insurance', right: 'US — uhlelo lokukhokhela impilo' },
        { left: 'Copay',       right: 'US — imali oyikhokhayo nxa usebenzisa insurance' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo eUK',
      question: "Useduze nokuthatha umsebenzi eLondon. Ufuna ukuhola udokotela. Ungenzani okokuqala?",
      options: [
        { text: "Register with a GP near where I live.", correct: true },
        { text: "Buy health insurance from a company.",   correct: false },
        { text: 'Pay $200 for a doctor visit.',            correct: false },
      ],
      explanation: "EUK i-NHS iyamahla — kufanele kuphela ukubhalisa lo-GP wendawo. Insurance ne-copay yifomula yase US, hatshi UK.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo eUS',
      question: "UseNew York, ufuna ukuya kudokotela ngomkhuhlane. Yini eyokuqala?",
      options: [
        { text: 'Check that the doctor is covered by my insurance.', correct: true },
        { text: "Walk into an NHS surgery.",                          correct: false },
        { text: 'Phone 999 immediately.',                              correct: false },
      ],
      explanation: "EUS akula NHS. Kufanele uhlole ukuthi udokotela uhlangene yi-insurance yakho — uma engahlanganiswanga ungahlawula konke uqobo.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (US)',
      prompt: 'Lokhu kuhlanganiselwe yi-insurance yami?',
      correct: ['Is this covered by my insurance?', 'Is this covered by my insurance', 'Is this covered?', 'is this covered by my insurance?'],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho (UK context)',
      sentence: "I'm registered with a ___ in Manchester.",
      options: ['GP', 'PCP', 'NHS'],
      correct: 'GP',
      context: "EUK uthi 'I'm registered with a GP'. EUS bathi 'PCP' (Primary Care Physician). U-NHS uyi-system pheleleyo, hatshi udokotela.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — ufaka isifiso eUS',
      words: ['my', 'check', 'covers', "I'd", 'this', 'to', 'insurance', 'if', 'like'],
      correct: ["I'd", 'like', 'to', 'check', 'if', 'my', 'insurance', 'covers', 'this'],
      translation: 'Ngingathanda ukuhlola ukuthi i-insurance yami iyahlanganisa lokhu na',
    },
  ],

  rwenDialogue: {
    intro: 'Usanda kufika eNew York njengonesi (nurse). Ufuna ukuhlola ukuthi i-insurance yakho ihlanganisa eyiphi i-doctor visit. Ushaye i-insurance company.',
    lines: [
      { speaker: 'npc', target: 'Thank you for calling Aetna. How can I help you today?', native: 'Siyabonga ngokufona kwa-Aetna. Ngingakusiza ngani lamuhla?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, I'd like to check if a visit to Dr Patel is covered under my plan.", native: 'Salibonani, ngingathanda ukuhlola ukuthi ukuvakashela uDr Patel kuhlanganiswe yi-plan yami.', correct: true, feedback: "Kuhle. Wakhuluma ngendlela ehloniphekileyo, watsho into oyifunayo. Lokhu yifomula yakho yokuthola izimpendulo." },
          { target: 'I want free doctor.', native: 'Ngifuna udokotela mahala.', correct: false, feedback: "EUS akula 'free doctor' — yonke into ihlawulwa nge-insurance kumbe ngokuqobo. Tshono 'I'd like to check if it's covered.'" },
          { target: 'NHS pay this?', native: 'I-NHS iyahlawula lokhu?', correct: false, feedback: "I-NHS isebenza eUK kuphela. EUS sebenzisa 'insurance' kuphela." },
        ],
      },
      { speaker: 'npc', target: 'Sure — can you give me your member ID? And is Dr Patel in-network?', native: 'Yebo — ungangipha i-member ID yakho? Loba uDr Patel ungaphakathi kwe-network?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My member ID is 472891. I'm not sure if she's in-network — can you check?", native: 'I-member ID yami ngu 472891. Angiqiniseki uma engaphakathi kwe-network — ungahlola?', correct: true, feedback: "Kuhle — wapha i-ID, watshela ukuthi ungaqinisekanga, wabuza ukuthi ungahlola. Iqondile ngenhle." },
          { target: 'I don\'t know.', native: 'Angazi.', correct: false, feedback: "Cela ucelo: 'Could you check if she's in-network?' yindlela ehlonihekayo yokucela usizo." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hayi! 'Member ID', 'in-network', 'covered' — la ngamagama abasebenza lawo nsuku zonke eUS. EUK awuwadingi — i-NHS yonke into iyamahla. Two systems, two different lives.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva — bhala ngenhliziyo.',
    prompts: [
      { prompt: 'Bhala ngesiNgisi (UK): Idokotela wakini wendawo.', correct: ['GP', 'A GP', 'a GP', 'general practitioner', 'General practitioner'] },
      { prompt: 'Bhala ngesiNgisi (US): Lokhu kuhlanganiselwe yi-insurance?', correct: ['Is this covered by my insurance?', 'Is this covered?', 'Is this covered by insurance?', 'is this covered by my insurance?'] },
      { prompt: 'Bhala ngesiNgisi: NHS imelelani?', correct: ['National Health Service', 'national health service', 'National Health Service.', 'NHS — National Health Service'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wamuhla',
    task: "Cabanga ukuthi uya ngaphi: UK noma US? Bhala phansi izinto ezi-3 zempilo ozidingayo (e.g. 'register with GP', 'find pharmacy', 'check insurance card'). Loba phansi imibuzo emi-2 ozayibuza ngesiNgisi.",
    rwenSignoff: "Kusasa siyazi izimo zoku-emergency — 999 eUK lo 911 eUS. Phila kahle.",
  },

  phase8: {
    scenario: "You've just moved to either London (UK) or Boston (US) — you choose which. You need to set up healthcare. Have a conversation with a friend who's lived there for years and ask them how the system works.",
    rwenRole: "Tendai, your Zimbabwean friend who's been in the UK or US for 8 years. They'll explain GP/NHS (if UK) or insurance/PCP/copay (if US) and warn you about pitfalls.",
    successCriteria: "User correctly uses 'NHS' / 'GP' if discussing UK, OR 'insurance' / 'covered' / 'copay' / 'in-network' if discussing US. Doesn't mix up the two systems. Asks at least one practical question about how to register / sign up.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
