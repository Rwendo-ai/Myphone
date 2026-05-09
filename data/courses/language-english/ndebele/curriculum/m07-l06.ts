import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-asking-directions',
  module: 7,
  lesson: 6,
  title: 'Excuse me, where is...? — Ukubuza indlela',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine:
      "I-formula ezakuvula iminyango yonke ezweni: 'Excuse me, where is the ___?'. Ungeke uyilahle. Faka 'Excuse me' phambili — uthi 'mhlawumbe' ngaphezulu komuntu, hatshi nje ucele kuye.",
    culturalNote:
      "ENtshonalanga, ukukhuluma lomuntu omangenisweni kayinukimile njengoba ekhaya — abantu kabazwakalisi izimangalo zezindlela ngokuphakamileyo. Kepha uma uqala ngo-'Excuse me' — i-button enguqulwa. UmBrithwa ozolinda emihlweni — ukuhloniphekileyo. UmAmericaner uzokutshela laye uzowa ngokushesha. Le-Tube wase London uzwele 'Sorry to bother you' lokho 'Excuse me' — engeza loku uyazwakala mfundi. Engxenye ungeke uthole impendulo egcwele — abanye baye mbalwa, abanye babuza nje 'sorry, I don't know'. Ungayixhamazela. Funa omunye, qhubeka.",
  },

  chunks: [
    {
      id: 'excuse_me_where',
      target: 'Excuse me, where is the bus stop?',
      native: 'Uxolo, sikuphi isiteshi sebhasi?',
      literal: 'Excuse-me where is the bus stop',
      emoji: '🚏',
      phonetic: 'ek-SKYOOZ-mee-WAIR-iz',
      audioRef: null,
    },
    {
      id: 'is_it_far',
      target: 'Is it far?',
      native: 'Kukhatshana?',
      literal: 'Is it far',
      emoji: '🚶',
      phonetic: 'iz-it-FAR',
      audioRef: null,
    },
    {
      id: 'how_do_i_get_to',
      target: 'How do I get to ___?',
      native: 'Ngingafika njani e-___?',
      literal: 'How do I get to ___',
      emoji: '🗺️',
      phonetic: 'how-doo-ay-GET-too',
      audioRef: null,
    },
    {
      id: 'sorry_to_bother',
      target: 'Sorry to bother you, but ___?',
      native: 'Ngiyaxolisa ngokukuhlupha, kepha ___?',
      literal: 'Sorry to bother you',
      emoji: '🙏',
      phonetic: 'SAW-ree-too-BOTH-er-yoo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite formula — opener + question',
    explanation:
      "Konke kuqala ngom-opener: 'Excuse me' loma 'Sorry to bother you' (ngokuhloniphekayo kakhulu). Bese ufaka umbuzo: 'where is the ___?' loma 'how do I get to ___?'. UmBrithwa, faka 'please' ekugcineni: 'Excuse me, where is the bus stop, please?'. Lokho yikho okukwenza ungehlulwe yindawo.",
    examples: [
      { target: 'Excuse me, where is the nearest pharmacy?',     native: 'Uxolo, ikuphi imithi yamakhemisi eseduze?' },
      { target: 'Sorry to bother you, how do I get to the station?', native: 'Ngiyaxolisa ngokukuhlupha, ngifika njani esiteshini?' },
      { target: "Is it far?",                                       native: 'Kukhatshana?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amaphathini',
      pairs: [
        { left: 'Polite opener',                  right: 'Excuse me / Sorry to bother you' },
        { left: 'Asking for a place',              right: 'Where is the ___?' },
        { left: 'Asking how to get there',         right: 'How do I get to ___?' },
        { left: 'Distance check',                  right: 'Is it far?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — ucela indlela ku-bus stop',
      prompt: 'Uxolo, sikuphi isiteshi sebhasi?',
      correct: [
        'Excuse me, where is the bus stop?',
        "Excuse me, where's the bus stop?",
        'Excuse me, where is the bus stop, please?',
        'Sorry, where is the bus stop?',
        'excuse me, where is the bus stop?',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — ufuna ukufika',
      sentence: 'How do I ____ to the British Museum?',
      options: ['get', 'go', 'come'],
      correct: 'get',
      context: "'Get to ___' kuyikuthi 'fika e-___'. 'Go to' iyahambisana, kepha 'how do I get to' yi-form yokwemvelo.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuhloniphana kakhulu',
      question: 'Ucela indlela komuntu omdala edolobheni:',
      options: [
        { text: "Sorry to bother you, but how do I get to the station?", correct: true },
        { text: 'Hey, station which way?',                                  correct: false },
        { text: 'Station?',                                                  correct: false },
      ],
      explanation:
        "'Sorry to bother you' kungaphezulu ku-'Excuse me' ngokuhloniphekayo. Komuntu omdala, kuhle.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — uxhumanisa kahle',
      words: ['far', 'Is', 'it'],
      correct: ['Is', 'it', 'far'],
      translation: 'Kukhatshana?',
    },
  ],

  rwenDialogue: {
    intro:
      "USeNYC. Ufuna ukufika eTimes Square kepha uphazamiselе. Ubona uxolo emgwaqweni — owesifazane wendawo.",
    lines: [
      {
        speaker: 'npc',
        target: 'You good?',
        native: 'Ungakahle?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, how do I get to Times Square?",   native: 'Uxolo, ngifika njani eTimes Square?', correct: true,  feedback: 'Mnandi — i-formula ipheleleyo.' },
          { target: 'Times Square go where?',                       native: 'I-Times Square iya kuphi?',           correct: false, feedback: "Phinda — sebenzisa 'Excuse me, how do I get to ___?'." },
          { target: "I'm lost. Help.",                                 native: 'Ngilahlekile. Sizakala.',                    correct: false, feedback: 'Kayipheleli — sebenzisa umbuzo onhle.' },
        ],
      },
      {
        speaker: 'npc',
        target: "Sure — walk three blocks down 7th Avenue, you can't miss it. About five minutes.",
        native: 'Yebo — hamba amablock amathathu phansi kwe-7th Avenue, ungehluleki. Imizuzu engaba ngu-5.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Thank you so much.',  native: 'Ngiyabonga kakhulu.',  correct: true,  feedback: 'Yikho-ke. Mnandi.' },
          { target: 'Bye.',                  native: 'Sala kuhle.',           correct: false, feedback: "Engeza 'thank you' phambi kokuhamba." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine:
          "I-Excuse me + Where is / How do I get to ___ + thank you. Yiyo i-template ye-direction asking. Ifaka ezweni lonke.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuki ngenhla — bhala ngenkumbulo.',
    prompts: [
      {
        prompt: "Excuse me, where is the bus stop? (ngesiNgisi)",
        correct: [
          'Excuse me, where is the bus stop?',
          "Excuse me, where's the bus stop?",
          'Excuse me, where is the bus stop, please?',
          'excuse me, where is the bus stop?',
        ],
      },
      {
        prompt: 'How do I get to the station? (ngesiNgisi)',
        correct: [
          'How do I get to the station?',
          'How do I get to the station',
          'How can I get to the station?',
          'how do i get to the station?',
        ],
      },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamuhla',
    task:
      "Khetha izindawo ezintathu emhlabeni — i-British Museum, i-Statue of Liberty, i-Bondi Beach. Ngomlomo, buza kabili ngalokunye: 'Excuse me, how do I get to ___?'. Engeza 'Is it far?' ekugcineni.",
    rwenSignoff: 'Kusasa — kwesokunxele, kwesokudla, qonda phambili. I-vocab yokuqondisa.',
  },

  phase8: {
    scenario:
      "You've just emerged from Holborn tube station in central London. You need to find the British Museum but you don't know which way to walk. You stop a smartly-dressed older gentleman near the station entrance.",
    rwenRole:
      "Mr Higgins, 67, retired professor. Old-school polite, well-spoken Received Pronunciation. Will give detailed but kind directions. Will gently correct rude phrasings.",
    successCriteria:
      "User opens with 'Excuse me' or 'Sorry to bother you', asks 'how do I get to' or 'where is' the British Museum, follows up with 'Is it far?' or similar, and thanks him.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
