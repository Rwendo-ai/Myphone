import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-taxi-uber-lyft',
  module: 7,
  lesson: 4,
  title: 'Taxi, Uber & Lyft — Imikhumbi yedolobha',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine:
      "Ezweni leli, kungaba i-taxi (uyimisa emgwaqweni), i-Uber, kumbe i-Lyft (uyibhuka ku-app). Imibuzo emikhulu emithathu: 'Can you take me to ___?', 'How much will it cost?', kanye 'Can you stop here, please?'.",
    culturalNote:
      "I-Black cab eLondon — yithwele nje umlilo, ukhuluma kahle nayo: 'King's Cross, please' loma 'Could you take me to King's Cross?'. Akukhulekwa ukuwingisana ngentengo — i-meter izithwele yodwa. ENYC, i-yellow cab itho leli — sebenzisa i-Uber kumbe i-Lyft yokuhle ukuhle, kayinambeza nemali. Imithetho emithathu yokugibela kuhle: (1) hlola inombolo yemoto le-driver ku-app phambi kokungena, (2) hlala ngemuva, hatshi eduze le-driver — kuyikuhloniphana ezweni leli, (3) i-tip ye-Uber/Lyft akusiyifaneleyo (i-app iyakhokha okuyokuyo), kodwa ukukhokha 15-20% kwi-NYC yellow cab kuyimbeko.",
  },

  chunks: [
    {
      id: 'take_me_to',
      target: 'Could you take me to ___, please?',
      native: 'Ngingakhupukela na e-___?',
      literal: 'Can you take me to ___ please',
      emoji: '🚖',
      phonetic: 'kud-yoo-TAYK-mee-too',
      audioRef: null,
    },
    {
      id: 'how_much',
      target: 'How much will it cost?',
      native: 'Yimalini?',
      literal: 'How-much will-it cost',
      emoji: '💷',
      phonetic: 'how-MUTCH-wil-it-KAWST',
      audioRef: null,
    },
    {
      id: 'stop_here',
      target: 'Could you stop here, please?',
      native: 'Ngicela ume lapha.',
      literal: 'Can you stop here please',
      emoji: '🛑',
      phonetic: 'kud-yoo-STOP-heer',
      audioRef: null,
    },
    {
      id: 'keep_the_change',
      target: 'Keep the change.',
      native: 'Gcina indawo eyenelisayo.',
      literal: 'Keep the change',
      emoji: '💵',
      phonetic: 'KEEP-thuh-CHAYNJ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite request — Could you ___, please?',
    explanation:
      "Etekisini, sisebenzisa u-'Could you ___, please?' — kayisiyikuthi 'Take me to' kuphela. Lokhu kungaphezulu kwesikhathi siyakhomba ukuhloniphana le-driver. Ngomzuzu wokuyifika, sebenzisa u-'Could you stop here, please?'. 'Excuse me' awusiwo — i-driver ukuzwele.",
    examples: [
      { target: 'Could you take me to King\'s Cross, please?', native: 'Ngicela ungithathele eKing\'s Cross.' },
      { target: 'Could you stop here, please?',                  native: 'Ngicela ume lapha.' },
      { target: 'Could you go a bit faster, please?',            native: 'Ngicela uphangise kancane.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imisebenzi nezisho zaso',
      pairs: [
        { left: 'Get in',           right: 'Could you take me to ___, please?' },
        { left: 'During the ride',  right: 'How much will it cost?' },
        { left: "When you arrive",  right: 'Could you stop here, please?' },
        { left: 'Pay the cab',      right: 'Keep the change.' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — usengena emotweni eHeathrow',
      prompt: 'Ngicela ungithathele eHotela yamaPremier Inn, eKing\'s Cross.',
      correct: [
        "Could you take me to the Premier Inn at King's Cross, please?",
        "Could you take me to Premier Inn, King's Cross, please?",
        "Take me to the Premier Inn at King's Cross, please.",
        "Premier Inn, King's Cross, please.",
        "could you take me to the premier inn at king's cross, please?",
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — ufuna ukwehluleka',
      sentence: 'Could you ____ here, please?',
      options: ['stop', 'go', 'wait'],
      correct: 'stop',
      context: "'Stop here' kusho 'mema lapha'. Yikho lokhu okutshelayo i-driver.",
    },
    {
      type: 'multiple_choice',
      instruction: 'I-Uber yakho ifikile, intengo ku-app yikuhle. Uthini kufike?',
      question: 'Khetha okuncono:',
      options: [
        { text: "Hi, are you Tom? Going to Stansted Airport?", correct: true },
        { text: "You Tom?",                                      correct: false },
        { text: "Get in?",                                       correct: false },
      ],
      explanation:
        "Hlola igama nendawo phambi kokungena emotweni — kayikho ehlazweni. Kuyikuhloniphana lokuvikela.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — uyabuza intengo',
      words: ['will', 'cost', 'How', 'it', 'much'],
      correct: ['How', 'much', 'will', 'it', 'cost'],
      translation: 'Yimalini?',
    },
  ],

  rwenDialogue: {
    intro:
      "USeHeathrow Terminal 5. I-Uber yakho seyifikile. I-driver yi-Tom, kunzima ukubona ngenxa yamafu. Uvulа i-app, uyahlangabezana naye.",
    lines: [
      {
        speaker: 'npc',
        target: "Hi mate, you Mthabisi? Going to Camden?",
        native: 'Sawubona, unguMthabisi? Uya eCamden?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, that's me. Camden Lock, please.",         native: 'Yebo, yimi. Camden Lock, please.', correct: true,  feedback: 'Mnandi — uqinisekisile, ufakile indawo eqondileyo.' },
          { target: "Yes go now.",                                    native: 'Yebo hamba khathesi.',              correct: false, feedback: "Inolaka — engeza 'please'." },
          { target: 'Maybe.',                                          native: 'Mhlawumbe.',                       correct: false, feedback: "I-driver ukufunela ngokuqinisekileyo. Phendula 'yes' loba 'no'." },
        ],
      },
      {
        speaker: 'npc',
        target: "Right-o, hop in. Should be about 40 minutes with this traffic.",
        native: 'Kulungile, ngena. Mhlawumbe imizuzu engu-40 ngalokhu kuminyana.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Could you stop just here, please? Right by the bridge.', native: 'Ngicela ume lapha — ngasebrijini.', correct: true,  feedback: 'Mnandi — i-Uber ifika kungekho i-meter, kepha "could you stop here" iyakhuluma yodwa.' },
          { target: 'Stop! Stop!',                                                native: 'Mema! Mema!',                       correct: false, feedback: 'Yenza ihlazo. "Could you stop here, please?" yakho enhlonipha.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Right you are. Have a good one.',
        native: 'Kulungile. Hlala kuhle.',
      },
      {
        speaker: 'rwen',
        rwenLine:
          "Bekungenani! 'Could you ___, please?' yi-template engcono kakhulu yakho ku-Uber loma i-taxi. Ungayeki ku-please.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuki ngenhla — bhala ngenkumbulo.',
    prompts: [
      {
        prompt: "Could you take me to King's Cross, please? (ngesiNgisi)",
        correct: [
          "Could you take me to King's Cross, please?",
          "Take me to King's Cross, please.",
          "King's Cross, please.",
          "could you take me to king's cross, please?",
        ],
      },
      {
        prompt: 'Could you stop here, please? (ngesiNgisi)',
        correct: [
          'Could you stop here, please?',
          'Stop here, please.',
          'Could you stop here please?',
          'could you stop here, please?',
        ],
      },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamuhla',
    task:
      "Cabanga ukuthi useLondon. Bhuka i-Uber engqondweni yakho. Khulumela phezulu, kathathu: 'Could you take me to ___, please?', 'How much will it cost?', 'Could you stop here, please?'. Faka indawo yangempela othanda ukuya kuyo.",
    rwenSignoff: 'Kusasa — i-hotel check-in. Ungafiki ngokwehlulwa.',
  },

  phase8: {
    scenario:
      "You've just landed at JFK Airport, New York. You've ordered an Uber to your friend's apartment in Brooklyn. The driver pulls up and confirms your name. The ride is about 45 minutes; near the end you need him to stop on a specific corner because the building is just past it.",
    rwenRole:
      "Marcus, 38, NYC Uber driver. Friendly Brooklyn accent. Will chat lightly during the ride. Needs precise pull-over instructions because of NYC traffic.",
    successCriteria:
      "User confirms identity at pickup, gives destination politely with 'please', and uses 'Could you stop here, please?' (or 'just past the corner') near arrival. Says 'thank you' on exit.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
