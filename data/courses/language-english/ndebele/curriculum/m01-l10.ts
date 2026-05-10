import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'First conversation — putting it together',
  estimatedMinutes: 8,
  xpReward: 40,

  hook: {
    rwenLine: "Manje konke esikufundile sokuhlangana — greeting, igama, indawo, ukuvalelisa. Lokhu yikho okuzakwenzeka emva kweenyanga ezimbalwa: ungene endaweni emtsha, ukhulume umutsho-mtsho ngomtsho ngendlela ehlukileyo.",
    culturalNote: "ESiNdebele, lapho uhlangana lomuntu okokuqala, abadala bathi 'isandla siyageza esinye' — nguwe lo, futhi yilo. Esikhiweni sesiNgisi se-UK / AU, lokhu kushintsha ku-'small talk' — abantu bathenga ihambo ngezilima ezihambisanayo. Ungalindeli ihambo enzima yokuqala: udinga kuphela ukuhlangabeza ngomoya. Ihambo izozakha. Lokhu kuyabuyela kubantu abasanda kufika phesheya — bayazi ukuthi i-shorter, i-friendlier, i-better.",
  },

  chunks: [
    {
      id: 'how_long',
      target: "How long have you been here?",
      native: 'Sekulesikhathi esingakanani uphakathi lapha?',
      literal: 'How long have you been here?',
      emoji: '⏳',
      phonetic: 'how-long-hav-yu-ben-HEER',
      audioRef: null,
    },
    {
      id: 'just_arrived',
      target: 'I just arrived',
      native: 'Ngisanda kufika',
      literal: 'I just arrived',
      emoji: '🛬',
      phonetic: 'ay-just-uh-RYVD',
      audioRef: null,
    },
    {
      id: 'few_months',
      target: 'A few months ago',
      native: 'Ezinyangeni ezinengi ezedluleyo',
      literal: 'A few months ago',
      emoji: '📅',
      phonetic: 'uh-FYU-munths-uh-GO',
      audioRef: null,
    },
    {
      id: 'lovely',
      target: "Lovely to meet you",
      native: 'Kuhle ukukubona',
      literal: 'Lovely to meet you',
      emoji: '✨',
      phonetic: 'LUV-lee-tu-meet-yu',
      audioRef: null,
    },
    {
      id: 'better_be_off',
      target: "I'd better be off",
      native: 'Sengibhekise endlela yami',
      literal: "I had better be off (UK polite goodbye)",
      emoji: '🚪',
      phonetic: 'ayd-bet-er-bee-OFF',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full first-meeting flow',
    explanation: "I-pattern eyiyo: greeting (Hello / Morning) → igama (I'm... / What's your name?) → small talk (Where are you from? / How long have you been here?) → goodbye softener (Lovely to meet you / I'd better be off) → goodbye (Take care / Bye). Ungekho i-rush — phinda umbuzo. Lapho ungaqondi, ungaphenduki: 'Sorry, can you say that again?' kuyiyo.",
    examples: [
      { target: "Hi! I'm Sipho. What's your name?",                  native: 'Salibonani! Ngingu Sipho. Ungubani igama lakho?' },
      { target: "I'm originally from Zimbabwe. How about you?",       native: 'Ngiphuma eZimbabwe. Wena-ke?' },
      { target: "I'd better be off — lovely to meet you!",            native: 'Sengibhekise endlela yami — kuhle ukukubona!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa indawo le-phrase yokuyifaka',
      pairs: [
        { left: 'Lapho ufika',           right: 'Hello / Morning' },
        { left: 'Ufuna ukwazi igama',     right: "What's your name?" },
        { left: 'I-small talk',           right: 'Where are you from?' },
        { left: 'Ufuna ukuhamba',         right: "I'd better be off" },
        { left: 'Ekuphela',               right: 'Take care / Bye' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa',
      sentence: "Sorry, ____ you say that again?",
      options: ['can', 'do', 'are'],
      correct: 'can',
      context: 'Lapho awungezwa kahle umuntu — vele ucele ngokulungile.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngisanda kufika ezinyangeni ezimbili.',
      correct: ['I just arrived two months ago', 'I arrived two months ago', 'I just got here two months ago', "I've been here two months"],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha — ufuna ukuhamba ngokulungile, hatshi ngokuludludla',
      question: "Ihambo isiqhubeke isikhathi eside, ufuna ukuhamba. Yini ozayisho?",
      options: [
        { text: "Anyway, I'd better be off — lovely chatting with you.",  correct: true },
        { text: "I'm leaving now.",                                         correct: false },
        { text: 'Bye.',                                                     correct: false },
      ],
      explanation: 'I-UK polite goodbye ifaka i-softener: "I\'d better be off" lo-"lovely chatting with you". "I\'m leaving now" kuludludla, "Bye" kalula kakhulu.',
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela i-flow yokuhlangana',
      words: ['Hello', 'name', "What's", 'your'],
      correct: ['Hello', "What's", 'your', 'name'],
      translation: 'Salibonani — Ungubani igama lakho?',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha — i-trap question. Umuntu uthi: "Sorry, what was your name again?" Yini ofanele uyitsho?',
      question: 'Khetha:',
      options: [
        { text: "It's Sipho — S-I-P-H-O.",     correct: true },
        { text: 'I told you already.',           correct: false },
        { text: 'Sipho.',                          correct: false },
      ],
      explanation: 'Lapho umuntu engezwakanga igama lakho, lipele ngoluthi-"S-I-P-H-O" — kuyathokoziswa, kayisi ihlazo. "I told you already" kuludludla.',
    },
  ],

  rwenDialogue: {
    intro: "Ku-community centre eLondon. Yilanga lakho lokuqala — uzile kwi-volunteer event. Umuntu omdala ekuhlangabeza nge-cup ye-tea.",
    lines: [
      { speaker: 'npc', target: "Hello there! I don't think we've met. I'm Margaret.", native: 'Salibonani! Sicabanga ukuthi asikahlangani. NginguMargaret.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hello Margaret, I'm Thandi. Lovely to meet you.", native: 'Salibonani Margaret, ngingu Thandi. Kuhle ukukubona.', correct: true,  feedback: 'Yikho! Ufakela igama lakho, ufakela "lovely to meet you" — natural-flow.' },
          { target: 'Hi.',                                              native: 'Salibonani.',                                              correct: false, feedback: 'Kufutshane — engeza igama lakho lo-"Nice to meet you".' },
          { target: 'Yes madam.',                                       native: 'Yebo Nkosikazi.',                                          correct: false, feedback: '"Madam" kuludludla — uMargaret usuyaza igama lakhe. Sebenzisa lokho.' },
        ],
      },
      { speaker: 'npc', target: 'Lovely name. So, how long have you been in London?', native: 'Igama elihle. Sekulesikhathi esingakanani useLondon?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Just three months. Originally from Zimbabwe — Bulawayo.', native: 'Izinyanga ezintathu kuphela. Ngiphuma eZimbabwe — eBulawayo.', correct: true,  feedback: 'Yikho — ufakela isikhathi + indawo. UMargaret usuke wayazi okufaneleyo ukuze aqhubeke nehambo.' },
          { target: 'Long time.',                                                native: 'Isikhathi eside.',                                                correct: false, feedback: 'Engeza i-detail — "long time" alibambi.' },
          { target: "It's not your business.",                                    native: "Ayisindaba yakho.",                                                correct: false, feedback: 'Yi-friendly question — kayisi ihlazo. Phendula ngokulungile.' },
        ],
      },
      { speaker: 'npc', target: "Oh, Bulawayo — I had a friend from there. Beautiful country. Are you settling in alright?", native: 'Bulawayo — bengilomngane ophuma lapho. Lizwe elihle. Uhlala kahle?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, slowly. The cold takes some getting used to!", native: "Yebo, kancane-kancane. Amakhaza adinga ukufundwa!",      correct: true,  feedback: 'Yikho! Ufakela ukuhleka okufutshi nge-cold — UK small talk classic. Margaret uzayoyithanda.' },
          { target: 'Yes.',                                                native: 'Yebo.',                                                  correct: false, feedback: 'Vala intuthuko — uMargaret uvule ihambo, kufanele ungeze okuthile.' },
          { target: "I'm fine, thanks.",                                    native: 'Ngiyaphila, ngiyabonga.',                                correct: false, feedback: 'Lokho yi-greeting answer — kayisi yokuphendula imbuzo "are you settling in?".' },
        ],
      },
      { speaker: 'npc', target: "Ha, yes! British weather. Well, I'd better get on. Lovely to meet you, Thandi.", native: 'Ha, yebo! Ihlobo le-Britain. Yebo, sengihamba. Kuhle ukukuthola, Thandi.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'You too, Margaret. Take care!', native: 'Lawe futhi, Margaret. Hamba kahle!',  correct: true,  feedback: 'Yikho! "You too" + igama + "take care" — UK closing eyiyo.' },
          { target: 'Goodbye.',                       native: 'Salani kahle.',                       correct: false, feedback: '"Goodbye" iphakeme — sebenzisa "Bye" kumbe "Take care" lapha.' },
          { target: 'Bye madam.',                     native: 'Salani Nkosikazi.',                   correct: false, feedback: 'Asikho "Madam" — usuke wazi igama lakhe. Sebenzisa lokho.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Khethelani! I-conversation yokuqala epheleleyo: greeting → igama → small talk → goodbye. Wenze ngenkulu inkululeko. Sokuyo i-foundation yakho yonke yeengxoxo zesiNgisi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ngenhliziyo, hlanganisa.',
    prompts: [
      { prompt: "Vula i-conversation: greeting + igama lakho",  correct: ["Hello, I'm Thandi", "Hi, I'm Thandi", "Hello, my name is Thandi", "Hi, my name is Thandi"] },
      { prompt: "Phendula 'Where are you from?' ngokwakho (Bulawayo, Zimbabwe)",  correct: ["I'm from Bulawayo, Zimbabwe", "I'm from Bulawayo, in Zimbabwe", "I'm originally from Bulawayo, Zimbabwe"] },
      { prompt: "Vala i-conversation ngokulungile (UK style)",  correct: ["Lovely to meet you, take care", "Lovely to meet you. Take care", "Take care, bye", "Bye, take care"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wokuqala wokwakhokho',
    task: "Lamuhla kumbe kusasa, hlangabeza umuntu omtsha — i-shop, ku-bus, ku-WhatsApp video — ungene ngokulungile: greeting → igama → small talk → goodbye. Awukho i-perfect, kodwa qala. Ngomso uzobenzela ngokulungile.",
    rwenSignoff: 'Wenze kahle — usuwacedele lo-Module 1. Take care, sizobonana ku-Module 2.',
  },

  phase8: {
    scenario: "EManchester, e-launderette. Useyalini eGreatBritain njengo-care worker, sokulingana isikhathi. Umuntu omdala (ungumakhi wakho ohlala edolobheni elifananayo) ekuhlangabeza ngomtsho-mtsho. Lokhu yi-conversation eyokuqala — kufanele uhlanganisa konke okufundile ku-Module 1: greeting, igama, indawo, time-of-day, goodbye softener, goodbye eqondileyo.",
    rwenRole: "Margaret — UK retiree, eminyakeni engaba ngu-68, owelizweni leNorth West. Umakhelwane wakho. Olomusa, ovula i-small talk ngezilima.",
    successCriteria: "Umfundi acedele i-full first-conversation flow: (1) usebenzise i-greeting eqondileyo nge-time-of-day, (2) afakele igama lakhe athole igama lika-Margaret, (3) aphendule '\\'Where are you from?\\'' ngokucanela + buyisa umbuzo, (4) avale ngo-softener ('I'd better be off' / 'Lovely to meet you') + i-goodbye, (5) HATSHI sebenzisa 'Sir/Madam' / 'Goodbye' iphakeme. Lapho engaqondi, asebenzise 'Sorry, can you say that again?' ngaphandle kokuthula.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
