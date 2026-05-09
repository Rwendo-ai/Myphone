import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-travel-conversation',
  module: 7,
  lesson: 10,
  title: 'Full travel conversation — Capstone',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine:
      "Module 7 iphethile! Lamuhla, sifaka konke ndawonye: i-airport, i-immigration, i-Tube, i-taxi, i-hotel, ukubuza indlela, i-queue, ukulahleka. Indlela yakho ipheleleyo isuka eHarare iya esibhakabhakeni laseLondon.",
    culturalNote:
      "Le-Module yikho okukwenza ungaphinde uzwele 'foreigner who can't speak'. Sebenzisa konke okufundileyo: 'Excuse me' phambili, 'please' ekugcineni, 'thank you' lokho 'thanks so much' ekuphelekeni. Ungasethemba isebenzele kuphela amaBhritish Airways — kepha izinkulumo zifika kuwe wamukela. UmBrithwa lokho ama-Aussie loma ama-American — bonke baphendula kuhle uma uhloniphana. Kuyikuthi: indlela yakho yokuthuthuka iyaqhubeka uma usufike — ngamabhulokho, ngamasonto, kuze kuphele unyaka, English yakho izoba into yakho — hatshi nje 'i-task'. Lo Module ungumlando — wachekisa eZimbabwe, wahlangabezana ne-Heathrow, useseseseduze le-life encanyana.",
  },

  chunks: [
    {
      id: 'review_at_airport',
      target: "Excuse me, where's my gate?",
      native: 'Uxolo, ungaphi umnyango wami wendiza?',
      literal: 'At airport opening',
      emoji: '🛫',
      phonetic: 'ek-SKYOOZ-mee-WAIRZ-may-GAYT',
      audioRef: null,
    },
    {
      id: 'review_taxi',
      target: 'Could you take me to the hotel, please?',
      native: 'Ngingathathwa eHotela?',
      literal: 'Taxi request',
      emoji: '🚖',
      phonetic: 'kud-yoo-TAYK-mee',
      audioRef: null,
    },
    {
      id: 'review_directions',
      target: 'Turn left, then straight on — about 100 metres.',
      native: 'Jika kwesokunxele, bese ngiqonda phambili — amamitha angu-100.',
      literal: 'Direction summary',
      emoji: '🗺️',
      phonetic: 'turn-LEFT-then-STRAYT-on',
      audioRef: null,
    },
    {
      id: 'review_lost',
      target: "Sorry to bother you, I think I'm a bit lost.",
      native: 'Ngiyaxolisa, ngicabanga ukuthi ngilahlekile kancane.',
      literal: 'Lost-and-polite',
      emoji: '🙏',
      phonetic: 'SAW-ree-too-BOTH-er',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full travel flow',
    explanation:
      "Indlela yakho yikuhamba inezigatshana eziyisihlanu, ngokulandelana: (1) AIRPORT — 'where's my gate?', 'where is baggage claim?', (2) IMMIGRATION — 'I'm from ___, visiting family, two weeks', (3) TRANSPORT — 'Could you take me to ___, please?' kumbe 'Which line goes to ___?', (4) HOTEL — 'I have a reservation under ___', (5) NAVIGATING — 'Excuse me, where is ___?' lokho 'I think I'm a bit lost'. Khona-ke konke kufaka 'please' lo 'thank you'.",
    examples: [
      { target: "Excuse me, where's my gate?",                        native: 'Uxolo, ungaphi umnyango wami wendiza?' },
      { target: 'Could you take me to the Premier Inn, please?',       native: 'Ngingathathwa eHotela yamaPremier Inn?' },
      { target: "I have a reservation under Ndlovu, three nights.",   native: 'Ngile-reservation ku-Ndlovu, ubusuku obuthathu.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Imisebenzi yokuhamba lezisho zayo',
      pairs: [
        { left: 'Airport',         right: "Where's my gate?" },
        { left: 'Immigration',     right: "I'm from Zimbabwe, visiting family." },
        { left: 'Taxi',            right: 'Could you take me to ___, please?' },
        { left: 'Hotel',           right: 'I have a reservation under ___.' },
        { left: 'Lost',            right: "Sorry to bother you, I'm a bit lost." },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — i-immigration ekubuza',
      prompt: 'Ngivela eZimbabwe. Ngivakatshela umuli, amaviki amabili.',
      correct: [
        "I'm from Zimbabwe. I'm visiting family, two weeks.",
        "I'm from Zimbabwe. Visiting family, two weeks.",
        "I'm from Zimbabwe — visiting family, two weeks.",
        "i'm from zimbabwe. i'm visiting family, two weeks.",
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — i-Uber driver eHeathrow',
      prompt: 'Ngingathathwa eHotela yamaPremier Inn, eKing\'s Cross?',
      correct: [
        "Could you take me to the Premier Inn at King's Cross, please?",
        "Could you take me to Premier Inn, King's Cross, please?",
        "Take me to the Premier Inn at King's Cross, please.",
        "Premier Inn, King's Cross, please.",
        "could you take me to the premier inn at king's cross, please?",
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — uphazamise wagena phambili kumkhosi',
      prompt: 'Ngiyaxolisa, bengingakuboni umkhosi.',
      correct: [
        "Sorry, I didn't see the queue.",
        "Sorry, I didn't see the line.",
        "I'm sorry, I didn't see the queue.",
        "sorry, i didn't see the queue.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela — ulahlekile ngendlela ehloniphana',
      words: ['lost', "I'm", 'a', 'bit', 'I', 'think'],
      correct: ['I', 'think', "I'm", 'a', 'bit', 'lost'],
      translation: 'Ngicabanga ukuthi ngilahlekile kancane',
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — ufaka indlela ye-Tube',
      sentence: 'Which ____ goes to King\'s Cross?',
      options: ['line', 'route', 'street'],
      correct: 'line',
      context: "I-Tube line yi-'line'. Kayisi-'route' kumbe 'street'.",
    },
  ],

  rwenDialogue: {
    intro:
      "Lwiya — uvele eHarare ngendiza, ufike eHeathrow. Uphendula i-immigration, ufaka i-Uber, ulahleka, uthuthukisa, ufika ehhotela. Yi-pongo ye-Module 7 yonke ndawonye.",
    lines: [
      {
        speaker: 'npc',
        target: 'Welcome to London. Where are you from? Purpose of visit?',
        native: 'Wamukelekile eLondon. Uvelaphi? Uzeleni?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "I'm from Zimbabwe. Visiting family — two weeks.",
            native: 'Ngivela eZimbabwe. Ngivakatshela umuli — amaviki amabili.',
            correct: true,
            feedback: 'Mnandi — kafutshane, ngokuqondileyo, kuphelele.',
          },
          {
            target: 'Africa, holiday, maybe long.',
            native: 'I-Africa, iholidi, mhlawumbe isikhathi eside.',
            correct: false,
            feedback: 'I-immigration ifuna izimpendulo eziqondileyo. Cabanga futhi.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: 'Welcome. Enjoy your stay.',
        native: 'Wamukelekile. Yithokozele ukuhlala.',
      },
      {
        speaker: 'npc',
        target: "[Uber driver:] Hi mate, you Mthabisi? Going to the Premier Inn?",
        native: '[I-Uber driver:] Sawubona mngane, unguMthabisi? Uya ePremier Inn?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Yes, that's me. Premier Inn at King's Cross, please.",
            native: 'Yebo, yimi. iPremier Inn eKing\'s Cross, please.',
            correct: true,
            feedback: 'Mnandi — uqinisekisa igama lakho lendawo.',
          },
          {
            target: 'Yes go.',
            native: 'Yebo hamba.',
            correct: false,
            feedback: 'Engeza igama lendawo le-please.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: '[At hotel reception:] Welcome to Premier Inn. How can I help?',
        native: '[Ku-receptionist:] Wamukelekile ePremier Inn. Ngingakusiza ngani?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Hi — I have a reservation under Mthabisi Ndlovu, three nights. Is breakfast included? And what's the Wi-Fi password?",
            native: 'Sawubona — ngile-reservation ku-Mthabisi Ndlovu, ubusuku obuthathu. Kufakwe ekudleni kwasekuseni? Lo-Wi-Fi password yini?',
            correct: true,
            feedback: 'Bekungumzuzu kuphela. Ufakile yonke into ku-check-in script.',
          },
          {
            target: 'Room.',
            native: 'Igumbi.',
            correct: false,
            feedback: 'Yenza umzamo — sebenzisa i-template ye-check-in epheleleyo.',
          },
        ],
      },
      {
        speaker: 'npc',
        target: '[Later, lost:] Sorry, you alright?',
        native: '[Kamuva, ulahlekile:] Ungakahle?',
      },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Sorry to bother you — I think I'm a bit lost. My phone's died. I was trying to find Camden Lock.",
            native: 'Ngiyaxolisa ngokukuhlupha — ngicabanga ukuthi ngilahlekile kancane. I-phone yami icimile. Bengizama ukuthola eCamden Lock.',
            correct: true,
            feedback: 'Yikho — i-formula yokulahleka iphelele ngamalawu amane.',
          },
          {
            target: 'I am lost!',
            native: 'Ngilahlekile!',
            correct: false,
            feedback: "Faka 'Sorry to bother you' lo 'a bit' — kuyabhuna kahle.",
          },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine:
          "Module 7 iphethile! Suvele eHarare wafika eLondon, wahamba ngomgwaqo, wahlala ehhotela, walahleka — konke ngesiNgisi. Lokhu yikholo lakho lokuthi awucabangi 'I am foreigner', kepha 'I am traveller'.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuki ngenhla — i-Capstone recall ye-Module 7.',
    prompts: [
      {
        prompt: "I'm from Zimbabwe, visiting family, two weeks. (ngesiNgisi)",
        correct: [
          "I'm from Zimbabwe, visiting family, two weeks.",
          "I'm from Zimbabwe. Visiting family, two weeks.",
          "I'm from Zimbabwe — visiting family — two weeks.",
          "i'm from zimbabwe, visiting family, two weeks.",
        ],
      },
      {
        prompt: 'Could you take me to the hotel, please? (ngesiNgisi)',
        correct: [
          'Could you take me to the hotel, please?',
          'Take me to the hotel, please.',
          'Could you take me to the hotel please?',
          'could you take me to the hotel, please?',
        ],
      },
      {
        prompt: "I have a reservation under Mthabisi, three nights. (ngesiNgisi)",
        correct: [
          'I have a reservation under Mthabisi, three nights.',
          "I've got a reservation under Mthabisi, three nights.",
          'I have a reservation under Mthabisi — three nights.',
          'i have a reservation under mthabisi, three nights.',
        ],
      },
    ],
  },

  mission: {
    title: 'Umsebenzi wokucina we-Module 7',
    task:
      "Khulumela phezulu indlela yokuhamba kwakho yonke — ngomlomo wakho — ngaphandle kokubuka. Qala ngo-'Excuse me, where's my gate?', uphethe ngo-'What's the Wi-Fi password?'. Faka i-immigration, i-Uber, i-hotel check-in. Imizuzu engaba ngu-3. Bekungumzuzu kuphela kuhle ukuthi ungafundi nje — ufaka emhlabeni.",
    rwenSignoff: 'Module 7 iphethile. Indlela yakho ye-traveller iqala lapha — yiyo i-passport yakho yangempela.',
  },

  phase8: {
    scenario:
      "Capstone. You've just landed at London Heathrow on a flight from Harare. Run the full traveller's gauntlet: clear immigration, find your Uber, check into your Premier Inn near King's Cross, then later that evening get lost trying to find Camden Lock and ask for help. Each scene is short — 30-60 seconds — but you must use the right script for each.",
    rwenRole:
      "A composite NPC: Border Force officer at Heathrow, then your Uber driver Tom, then Becky the receptionist, then Mrs Patel walking her dog. Each will react differently to your tone — formal at immigration, casual with Tom, friendly with Becky, warm with Mrs Patel.",
    successCriteria:
      "User uses ALL FIVE travel scripts: (1) short answers at immigration, (2) 'Could you take me to ___, please?' for the Uber, (3) 'I have a reservation under ___' at check-in, (4) asks at least one of breakfast/check-out/Wi-Fi, (5) 'Sorry to bother you, I think I'm a bit lost' when lost. Combines chunks from M07-L01 through M07-L09.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
