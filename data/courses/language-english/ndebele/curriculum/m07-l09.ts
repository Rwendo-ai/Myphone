import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-im-lost',
  module: 7,
  lesson: 9,
  title: "I'm lost — Ngilahlekile, kepha ngokuhloniphekayo",
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine:
      "Lakho kuyenzeka — i-Tube imelelene, i-phone ifile, indawo iyaxakanisa. Igama: 'I'm lost'. Sebenzisa lo: 'Sorry to bother you, I think I'm a bit lost. Could you help me?'. Akusiyihlazo — yi-line yokukhululeka.",
    culturalNote:
      "Akusi-shame ukuthi ulahlekile. UmBrithwa loma uma-American kabakubuyisi ngokulahleka — kepha bayakubuyisa uma uthi ucela usizo ngokuhloniphekayo. I-formula ifile: 'I think I'm a bit lost' — i-'a bit' i-British understatement engcwele, ikubonisa ungekho lapho udinga uvelelwe. 'I'm completely lost!' inolaka kakhulu — engeza i-'a bit'. Ungayigxeke i-Google Maps yakho — kuyikuthi i-'classic British problem' kuyo. UmBrithwa ucabanga lokho. Imithetho emithathu ekulahlekeni: (1) ungaphakameli — abantu abakukhula bahleli, baphendulа i-question ezolelekileyo, (2) bonisa indawo ofuna ukuya kuyo (igama elinengi), hatshi nje 'somewhere', (3) bonga ngokuphakamileyo, ngitsho noma ungehluleki ngempela.",
  },

  chunks: [
    {
      id: 'im_a_bit_lost',
      target: "I think I'm a bit lost",
      native: 'Ngicabanga ukuthi ngilahlekile kancane',
      literal: 'I think I-am a-bit lost',
      emoji: '🗺️',
      phonetic: 'ay-THINK-aym-uh-bit-LAWST',
      audioRef: null,
    },
    {
      id: 'could_you_help',
      target: 'Could you help me, please?',
      native: 'Ngicela ungisize.',
      literal: 'Could you help me please',
      emoji: '🙏',
      phonetic: 'kud-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'i_was_trying_to',
      target: "I was trying to find ___",
      native: 'Bengizama ukuthola e-___',
      literal: 'I was trying to find ___',
      emoji: '🔍',
      phonetic: 'ay-wuz-TRAY-ing-too-FAYND',
      audioRef: null,
    },
    {
      id: 'phones_died',
      target: "My phone's died",
      native: 'I-phone yami ife (icimile)',
      literal: 'My phone has died',
      emoji: '📱',
      phonetic: 'may-FOHNZ-DAYD',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The lost-and-polite formula',
    explanation:
      "I-formula iphelele ngamalawu amane: (1) Sorry to bother you, (2) I think I'm a bit lost, (3) I was trying to find ___, (4) Could you help me, please? Lokhu kuyaphakamisa umuntu — kuyamenza azimisele ukukusiza. Ungasebenzisi 'I'm completely lost' — kuyabuyisa ngokuxakanisa. 'A bit lost' yi-British understatement enesibani.",
    examples: [
      { target: "Sorry to bother you, I'm a bit lost.",         native: 'Ngiyaxolisa ngokukuhlupha, ngilahlekile kancane.' },
      { target: 'I was trying to find Oxford Street.',          native: 'Bengizama ukuthola eOxford Street.' },
      { target: "My phone's died — could you help?",            native: 'I-phone yami icimile — ungangisiza?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: "Hlanganisa amalawu e-'Lost-and-polite' formula",
      pairs: [
        { left: 'Open',                  right: 'Sorry to bother you' },
        { left: 'State the problem',     right: "I'm a bit lost" },
        { left: 'Give context',          right: 'I was trying to find ___' },
        { left: 'Ask politely',           right: 'Could you help me, please?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — ulahlekile, i-phone icimile',
      prompt: 'I-phone yami icimile, ngilahlekile kancane.',
      correct: [
        "My phone's died, I'm a bit lost.",
        "My phone has died — I'm a bit lost.",
        "My phone's dead and I'm a bit lost.",
        "my phone's died, i'm a bit lost.",
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa — uba 'British-polite'",
      sentence: "I think I'm a ____ lost.",
      options: ['bit', 'lot', 'much'],
      correct: 'bit',
      context: "'A bit' = kancane. UmBrithwa uthandela lokhu kunokuthi 'completely' okushaya kakhulu.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuhloniphana',
      question: "Ulahlekile e-Manchester. Ubuza umuntu osemnyangweni wesitolo. Khetha:",
      options: [
        { text: "Sorry to bother you, I think I'm a bit lost. Could you help?", correct: true },
        { text: 'I AM LOST!',                                                       correct: false },
        { text: 'You — where station?',                                              correct: false },
      ],
      explanation:
        "U-'Sorry to bother you' uvula umnyango. 'A bit lost' kungaphezulu kunokushaya kakhulu. 'Could you help?' kufakeleka.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — bengifuna i-station',
      words: ['was', 'find', 'I', 'the', 'station', 'to', 'trying'],
      correct: ['I', 'was', 'trying', 'to', 'find', 'the', 'station'],
      translation: 'Bengizama ukuthola isiteshi',
    },
  ],

  rwenDialogue: {
    intro:
      "Ulahlekile e-Camden Town, London. Bekungu-22:00, indawo ifulele, i-phone yakho icimile. Ubona owesifazane omdala unogutshi.",
    lines: [
      {
        speaker: 'npc',
        target: "You alright, love?",
        native: 'Ungakahle, mngane?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Sorry to bother you — I think I'm a bit lost. My phone's died. I was trying to find Camden Lock.",
            native: 'Ngiyaxolisa ngokukuhlupha — ngicabanga ukuthi ngilahlekile kancane. I-phone yami icimile. Bengizama ukuthola eCamden Lock.',
            correct: true,
            feedback: 'Mnandi — i-formula ipheleleyo. UmBrithwa wakhululeka, uzakusiza.',
          },
          {
            target: "HELP! I am lost!",
            native: 'NGISIZE! Ngilahlekile!',
            correct: false,
            feedback: 'Inolaka kakhulu — i-Brits bayothuka. Sebenzisa "Sorry to bother you, I think I\'m a bit lost".',
          },
          {
            target: 'Camden Lock?',
            native: 'iCamden Lock?',
            correct: false,
            feedback: 'Bekungaphezulu kwabantu basekuhloniphekayo — engeza i-formula ephelele.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: "Oh dear — easy done. Camden Lock's just two minutes that way, past the Sainsbury's. Are you safe to walk?",
        native: 'Hawu — kuyenzeka kalula. iCamden Lock isemzuzwini emibili kulapho, ngale kweSainsbury\'s. Uyazwakala uhamba?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Yes, thank you so much. You've been very kind.",
            native: 'Yebo, ngiyabonga kakhulu. Uthe nomusa.',
            correct: true,
            feedback: 'Mnandi — i-British "very kind" yi-acknowledgement enhle.',
          },
          {
            target: 'OK bye.',
            native: 'OK sala kuhle.',
            correct: false,
            feedback: 'Engeza i-"thank you" — usebenzile lokhu.',
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine:
          'Yiqiniso! I-Sorry to bother you + I think I\'m a bit lost = umBrithwa uvulekile umnyango. Lokhu kuyikuhloniphana okuthelelа iZimbabwe ne-UK.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuki ngenhla — bhala ngenkumbulo.',
    prompts: [
      {
        prompt: "I think I'm a bit lost. (ngesiNgisi)",
        correct: [
          "I think I'm a bit lost.",
          "I'm a bit lost.",
          'I think I am a bit lost.',
          "i think i'm a bit lost.",
        ],
      },
      {
        prompt: 'Could you help me, please? (ngesiNgisi)',
        correct: [
          'Could you help me, please?',
          'Could you help, please?',
          'Could you help me?',
          'could you help me, please?',
        ],
      },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamuhla',
    task:
      "Cabanga uselahlekile e-London ngo-22:00. Phinda i-formula yokulahleka kathathu ngomlomo: 'Sorry to bother you, I think I\'m a bit lost. My phone\'s died. Could you help me?'. Faka ngokushesha kuze kufike emqondweni wakho.",
    rwenSignoff: 'Kusasa — i-capstone. Konke ndawonye, kuyiqembu lonke lokuhamba.',
  },

  phase8: {
    scenario:
      "It's 10pm in Camden Town, London. Your phone is dead. You were trying to find your hostel near Camden Lock but you've taken a wrong turn and the streets all look the same. You stop a kind-looking woman walking her dog.",
    rwenRole:
      "Mrs Patel, 58, lifelong Londoner walking her terrier. Warm and motherly. Will help generously but appreciates politeness. Says 'love' a lot.",
    successCriteria:
      "User opens with 'Sorry to bother you', uses 'I think I'm a bit lost' (with 'a bit'), gives context ('phone's died' / 'I was trying to find ___'), thanks her warmly. Does NOT panic or shout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
