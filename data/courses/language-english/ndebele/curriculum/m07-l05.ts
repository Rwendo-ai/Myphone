import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-hotel-check-in',
  module: 7,
  lesson: 5,
  title: 'Hotel check-in — Ukungena ehhotela',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine:
      "Ufike ehhotela. Imibuzo yakho mihlanu: 'I have a reservation under ___', 'Just one night' / 'Three nights', 'Is breakfast included?', 'What time is check-out?', 'Is there Wi-Fi?'. Lapha sifunde uxhumano ngakanye.",
    culturalNote:
      "Amahhotela ase-UK le-US ahlukile. e-UK, i-'breakfast included' yikuthi i-'full English' (amaqanda, i-bacon, i-tomato, i-toast, i-tiye) — kuyathathekisa kubekitsheni. eUS, kuyikuthi i-'continental breakfast' kuphela — i-coffee le-bagel kanye le-cereal. Akusiyikuthi useyimangala kufike. Ngaphandle kwalokho, i-check-in iqala ngehora 15:00 njengoba ihhotela. Uma ufika kuqala — beka isikhwama, hamba uyibukisise. I-check-out ngehora 11:00. I-Wi-Fi sezikulokho — kepha cela i-password yi-front desk. EUS lonke, kufanele ukhokhe i-tip ye-housekeeping ($1-2 ngosuku, ufaka ku-pillow phambi kokuhamba).",
  },

  chunks: [
    {
      id: 'have_a_reservation',
      target: 'I have a reservation under Mthabisi.',
      native: 'Ngile-reservation ku-Mthabisi.',
      literal: 'I-have a reservation under Mthabisi',
      emoji: '🏨',
      phonetic: 'ay-hav-uh-rez-er-VAY-shun',
      audioRef: null,
    },
    {
      id: 'three_nights',
      target: 'Three nights, please.',
      native: 'Ubusuku obuthathu, please.',
      literal: 'Three nights please',
      emoji: '🌙',
      phonetic: 'THREE-nayts-PLEEZ',
      audioRef: null,
    },
    {
      id: 'breakfast_included',
      target: 'Is breakfast included?',
      native: 'Kufakwe ekudleni kwasekuseni?',
      literal: 'Is breakfast included',
      emoji: '🍳',
      phonetic: 'iz-BREK-fust-in-KLOO-did',
      audioRef: null,
    },
    {
      id: 'wifi_password',
      target: "What's the Wi-Fi password?",
      native: 'Yini i-Wi-Fi password?',
      literal: 'What is the Wi-Fi password',
      emoji: '📶',
      phonetic: 'wuts-thuh-WAY-fay-PASS-werd',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Reception script — yonke i-check-in ngamalawu amahlanu',
    explanation:
      "I-check-in iyenzeka ngamalawu amahlanu, ngokulandelana okwemvelo: (1) 'I have a reservation under ___' (igama lakho), (2) 'For ___ nights' (ubusuku obungaki), (3) 'Is breakfast included?' (ukudla kwasekuseni kufakwe?), (4) 'What time is check-out?' (i-check-out ngehora liphi?), (5) 'What's the Wi-Fi password?' (i-Wi-Fi). Phenduka kalula uma ungalandeli lokhu — i-receptionist ihambisana lawe.",
    examples: [
      { target: 'I have a reservation under Smith.',     native: 'Ngile-reservation ku-Smith.' },
      { target: 'For two nights.',                         native: 'Ubusuku obubili.' },
      { target: 'What time is check-out?',                 native: 'I-check-out ngehora liphi?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imibuzo lezimpendulo',
      pairs: [
        { left: 'How can I help?',           right: 'I have a reservation under Mthabisi.' },
        { left: 'How many nights?',          right: 'Three nights, please.' },
        { left: 'Anything else?',             right: "What's the Wi-Fi password?" },
        { left: 'Check-out time?',           right: 'Eleven a.m.' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — usekiqaleni le-check-in',
      prompt: 'Ngile-reservation ku-Ndlovu, ubusuku obubili.',
      correct: [
        'I have a reservation under Ndlovu, two nights.',
        'I have a reservation under Ndlovu — two nights.',
        "I've got a reservation under Ndlovu, two nights.",
        'i have a reservation under ndlovu, two nights.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — ufuna ukukhuluma le-Wi-Fi',
      sentence: "What's the Wi-Fi ____?",
      options: ['password', 'name', 'card'],
      correct: 'password',
      context: "'Password' kusho 'igama lokungena'. Ku-Wi-Fi, isho indlela yokungena ku-internet.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha umbuzo onhle ngokwemvelo',
      question: "Ufuna ukwazi ukuthi ukudla kwasekuseni kufakwe entengweni. Uthini?",
      options: [
        { text: 'Is breakfast included?',           correct: true },
        { text: 'Free food morning?',                correct: false },
        { text: "What's about food?",                 correct: false },
      ],
      explanation:
        "'Is breakfast included?' yikho ezahlangabezeka kuhle ku-receptionist. 'Included' kusho 'kufakwe entengweni'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — ubuza nge-check-out',
      words: ['What', 'check-out', 'time', 'is'],
      correct: ['What', 'time', 'is', 'check-out'],
      translation: 'I-check-out ngehora liphi?',
    },
  ],

  rwenDialogue: {
    intro:
      "Wena uyangena e-Premier Inn, eKing's Cross London. Uvele ngebhasi le-Heathrow Express. Khona-ke i-receptionist.",
    lines: [
      {
        speaker: 'npc',
        target: "Good evening, welcome to Premier Inn. How can I help?",
        native: 'Lihlasele, wamukelekile e-Premier Inn. Ngingakusiza ngani?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Hi, I have a reservation under Mthabisi Ndlovu, three nights.",
            native: 'Sawubona, ngile-reservation ku-Mthabisi Ndlovu, ubusuku obuthathu.',
            correct: true,
            feedback: 'Mnandi — igama lakho, ubusuku, kuhle.',
          },
          {
            target: 'Room please.',
            native: 'Igumbi please.',
            correct: false,
            feedback: 'Kayipheleli — fanele ufake i-reservation ne-name yakho.',
          },
          {
            target: 'I want sleep here.',
            native: 'Ngifuna ukulala lapha.',
            correct: false,
            feedback: "Sebenzisa 'I have a reservation under ___' kuqala.",
          },
        ],
      },
      {
        speaker: 'npc',
        target: "Lovely, found it. Three nights in a double room. Is breakfast going to be added?",
        native: 'Mnandi, ngiyitholile. Ubusuku obuthathu egumbini elikhulu. Ukudla kwasekuseni kuzofakwa?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Is breakfast included already? And what time is check-out?",
            native: 'Kufakwe vele kakade ukudla kwasekuseni? Lo-check-out ngehora liphi?',
            correct: true,
            feedback: 'Mnandi — uthole imibuzo emibili eqondileyo.',
          },
          {
            target: 'Yes food yes time.',
            native: 'Yebo ukudla yebo isikhathi.',
            correct: false,
            feedback: "Engeza imibuzo egcwele: 'Is breakfast included?' lo 'What time is check-out?'.",
          },
        ],
      },
      {
        speaker: 'npc',
        target: "Breakfast is £9.95 — would you like to add it? Check-out's at 11.",
        native: 'Ukudla kwasekuseni yi-£9.95 — ufuna ukukufaka? I-check-out ngo-11.',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "No thanks, just the Wi-Fi password, please.",
            native: 'Cha, ngiyabonga — ngicela i-Wi-Fi password kuphela.',
            correct: true,
            feedback: 'Mnandi — uphendule kafutshane futhi ucele i-Wi-Fi.',
          },
          {
            target: "Yes everything!",
            native: 'Yebo konke!',
            correct: false,
            feedback: 'Hlela — uphendule isemibuzo emibili kuphela.',
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine:
          'Yini ke! I-check-in iyenzeka ngo-3 minutes uma usebenzisa ama-template aphele. Sufundile.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuki ngenhla — bhala ngenkumbulo.',
    prompts: [
      {
        prompt: "I have a reservation under Mthabisi. (ngesiNgisi)",
        correct: [
          'I have a reservation under Mthabisi.',
          "I've got a reservation under Mthabisi.",
          'I have a reservation under Mthabisi',
          'i have a reservation under mthabisi.',
        ],
      },
      {
        prompt: 'Is breakfast included? (ngesiNgisi)',
        correct: ['Is breakfast included?', 'Is breakfast included', 'Does it include breakfast?', 'is breakfast included?'],
      },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamuhla',
    task:
      "Cabanga ufike ehhotela. Khulumela phezulu indawana yonke i-check-in ngomlomo wakho — qala ngo-'I have a reservation under [igama lakho]', uphethe ngo 'What's the Wi-Fi password?'. Sebenzisa zonke izinhlanu ezisesilineni.",
    rwenSignoff: 'Kusasa — ukubuza indlela. Kayipheleli ngokungena ehhotela.',
  },

  phase8: {
    scenario:
      "You've just walked into a Premier Inn near King's Cross station, London. You have a reservation for three nights under your name. You've never stayed at this hotel before — you need to check in, find out about breakfast, ask check-out time, and get the Wi-Fi password.",
    rwenRole:
      "Becky, 28, evening-shift receptionist. Polite, efficient, helpful. Mild Northern English accent.",
    successCriteria:
      "User opens with 'I have a reservation under ___', states number of nights, asks at least 2 of: breakfast included, check-out time, Wi-Fi password. Uses 'please' and 'thank you' naturally.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
