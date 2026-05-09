import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l03',
  module: 6,
  lesson: 3,
  title: 'At the doctor — booking an appointment',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Ukubeka i-appointment kudokotela kuyabaluleka eUK lase US — awunakuthi nje ungene esibhedlela uthi 'ngifuna ukubona udokotela'. Kufanele ushaye foni, kumbe ufake i-online form, ucele 'an appointment'. Lapha sifundisa amazwi amqoka angaphandle: 'I'd like to book an appointment, please.'",
    culturalNote: "EUK i-NHS isebenza nge-GP (General Practitioner — udokotela wakini wendawo). Awumkhethi — ukhethelwa ngokwendawo ohlala kuyo, futhi ulinde ngezikhathi ezinengi izinsuku ezimbili kuya kweziyisikhombisa kuze kufike i-appointment yakho. EUS ungaphone i-clinic noma i-doctor's office uqobo, kodwa kuzofuneka i-insurance card yakho. NgoMgqibelo umane ungafonelwe — kuvalwe noma kungasebenzi. Yikho 'urgent' i-appointment ehlukile — uma idingakala manje, eUK uya kwa-NHS 111 (telefoni) kumbe i-walk-in centre; eUS uya ku-urgent care clinic. Lokhu kungasilo i-emergency — yiqeqele lapho.",
  },

  chunks: [
    {
      id: 'book_appointment',
      target: "I'd like to book an appointment, please",
      native: 'Ngingathanda ukubeka i-appointment, ngiyacela',
      literal: undefined,
      emoji: '📅',
      phonetic: 'ayd-LYK-tu-buk-an-uh-POYNT-ment',
      audioRef: null,
    },
    {
      id: 'see_doctor',
      target: 'I need to see a doctor',
      native: 'Ngidinga ukubona udokotela',
      literal: undefined,
      emoji: '👨‍⚕️',
      phonetic: 'ay-need-tu-SEE-uh-DOK-tuh',
      audioRef: null,
    },
    {
      id: 'available',
      target: 'When is the next available appointment?',
      native: 'Yenini i-appointment elandelayo etholakalayo?',
      literal: undefined,
      emoji: '🗓️',
      phonetic: 'wen-iz-thuh-NEKST-uh-VAY-luh-bul',
      audioRef: null,
    },
    {
      id: 'urgent',
      target: "It's urgent",
      native: 'Kuyaphuthuma',
      literal: undefined,
      emoji: '⚡',
      phonetic: 'its-UR-jent',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'I'd like to ___' — yindlela yokuhlonipha yokucela",
    explanation: "EUK kakhulukazi, 'I'd like to' ('I would like to' yokuqina) yiyo eyamukelwayo lapho ucela usizo. Kungcono kakhulu kuna 'I want' (okuzwakala kuyiqondiso). Sebenzisa lokhu kuwo wonke umakelo: 'I'd like to book...', 'I'd like to see...', 'I'd like to ask...'. Esitolo, esibhedlela, kwabezimoto — yonke indawo. Kuhloniphekile, kucacile, kuyamukeleka.",
    examples: [
      { target: "I'd like to book an appointment for tomorrow.",  native: 'Ngingathanda ukubeka i-appointment yakusasa.' },
      { target: "I'd like to see Dr Patel, if possible.",          native: 'Ngingathanda ukubona uDr Patel, nxa kungenzeka.' },
      { target: "I'd like to register as a new patient.",          native: 'Ngingathanda ukuzibhalisa njengesiguli esitsha.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama esiNgisi lencazelo zaso',
      pairs: [
        { left: "I'd like to book...",        right: 'Ngingathanda ukubeka...' },
        { left: 'I need to see a doctor',     right: 'Ngidinga ukubona udokotela' },
        { left: 'Available appointment',      right: 'I-appointment etholakalayo' },
        { left: "It's urgent",                right: 'Kuyaphuthuma' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — ufona kudokotela',
      prompt: 'Ngingathanda ukubeka i-appointment, ngiyacela.',
      correct: ["I'd like to book an appointment, please", "I'd like to book an appointment, please.", "I would like to book an appointment, please", "i'd like to book an appointment, please"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuhloniphekayo emsebenzini we-receptionist',
      question: "Ufonele i-NHS GP surgery. Yiphi engcono?",
      options: [
        { text: "Hello, I'd like to book an appointment, please. I have a bad cough.", correct: true },
        { text: 'Give me doctor today.', correct: false },
        { text: 'I want doctor now!',     correct: false },
      ],
      explanation: "'I'd like to book' yindlela ehloniphekileyo, eyamukelwayo eUK. 'I want' lo 'Give me' kuyizwakala kuyincintiswano — ungafumana imali yokuhlangana ngendlela engaphephileyo.",
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho',
      sentence: 'When is the ____ available appointment?',
      options: ['next', 'after', 'come'],
      correct: 'next',
      context: "'Next available' yifomula etholakala phansi kwemikhondo yonke yokubeka i-appointment — kutsho 'eseduze etholakalayo'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela igama lihlangane lihloniphekile',
      words: ['like', "I'd", 'see', 'doctor', 'a', 'to'],
      correct: ["I'd", 'like', 'to', 'see', 'a', 'doctor'],
      translation: 'Ngingathanda ukubona udokotela',
    },
  ],

  rwenDialogue: {
    intro: "Usanda kufika eBirmingham. Awuphilanga emaphuzwini amabili — ucela ukushaya i-NHS GP surgery yendawo. I-receptionist iphendula ifoni.",
    lines: [
      { speaker: 'npc', target: 'Good morning, Springfield Surgery, how can I help?', native: 'Salibonani, kwa-Springfield Surgery, ngingakusiza ngani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good morning. I'd like to book an appointment, please. I've had a bad cough for a week.", native: 'Salibonani. Ngingathanda ukubeka i-appointment, ngiyacela. Ngiphethwe ngokukhwehlela isonto lonke.', correct: true, feedback: "Kuhle. Ungene ngo 'Good morning', wasebenzisa 'I'd like to book', wachaza isizathu kafutshane. Lokhu yikho i-receptionist efunayo." },
          { target: 'Give doctor today!', native: 'Nginika udokotela lamuhla!', correct: false, feedback: "Akusebenzi eUK. Kuyazwakala kungahloniphi. Sebenzisa 'I'd like to book an appointment, please.'" },
          { target: 'I am sick come now.', native: 'Ngiyagula uza manje.', correct: false, feedback: "Akusebenzi. Ungeza ndawonye amagama amancane esiNdebeleni. Tshono nge-fomula epheleleyo: 'I'd like to book an appointment, please.'" },
        ],
      },
      { speaker: 'npc', target: 'Of course. The next available appointment is Thursday at 2pm. Does that work?', native: 'Yebo. I-appointment elandelayo etholakalayo ngolwesine ngo-2pm. Iyalingana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, Thursday at 2pm works. Thank you.", native: 'Yebo, ngolwesine ngo-2pm kuyalingana. Ngiyabonga.', correct: true, feedback: "Kuhle — kucacile, kufutshane, kuhloniphekile." },
          { target: 'Tomorrow.', native: 'Kusasa.', correct: false, feedback: "Awuphendulanga umbuzo. Wakuthi yebo kumbe hatshi ku-Thursday 2pm." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hayi! Ubeka i-appointment ngendlela ehloniphekileyo. 'I'd like to' yikho okumqoka — ungayikhohlwa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva — bhala ngenhliziyo.',
    prompts: [
      { prompt: "Bhala ngesiNgisi: Ngingathanda ukubeka i-appointment.", correct: ["I'd like to book an appointment", "I'd like to book an appointment.", "I would like to book an appointment", "i'd like to book an appointment"] },
      { prompt: 'Bhala ngesiNgisi: Kuyaphuthuma.', correct: ["It's urgent", "It is urgent", "It's urgent.", "it's urgent"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wamuhla',
    task: "Phinda kabili ngokuvula umlomo wakho: 'Hello, I'd like to book an appointment, please.' Khangela ulimi lwakho lapho usitsho 'appointment' — kuyizwi elixakileyo (uh-POYNT-ment), futhi yi-stress yiqondene ku-POYNT.",
    rwenSignoff: 'Kusasa siyacacisa ubuhlungu — dull, sharp, throbbing.',
  },

  phase8: {
    scenario: "You're a recent arrival in Manchester. You've had a persistent cough for 8 days and want to book a GP appointment. Phone the surgery and book one. The receptionist will ask your name, date of birth, and what the issue is.",
    rwenRole: "Margaret, 55, a kind but efficient NHS GP receptionist. She speaks clearly and won't rush you, but she has many other calls — keep it concise.",
    successCriteria: "User opens with 'Hello / Good morning' + 'I'd like to book an appointment, please.' Provides name and brief reason ('I've had a cough for over a week'). Confirms the offered time. Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
