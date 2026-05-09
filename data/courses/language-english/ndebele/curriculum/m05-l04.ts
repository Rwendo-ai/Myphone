import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Grandparents — Grandma & Grandpa',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "EsiNdebeleni uGogo = grandmother, uKhulu (loba uMkhulu) = grandfather. Akubalulekanga ukuthi nguKhulu sezikabani — uGogo nguGogo, uKhulu nguKhulu. EsiNgisini sinamagama ahlukeneyo: 'grandmother' / 'grandma' / 'granny' (formal → fudumele) lo-'grandfather' / 'grandpa' / 'gramps'.",
    culturalNote: "uGogo loKhulu emasikweni esiNdebele bayingxenye yokwakheka komntwana — bagcina amabali, basondeza umlilo, bafundisa izimpawu zomndeni. EsiNgisini abakhulile bavame ukubalula uGogo nguKhulu njengabantu abazenzakaleyo, kodwa imuli encane (nuclear family) yake yangenisa umoya wokuphakama lokwedlula. Wena, ungalandeli leyo nto. UMose wabhala: 'Iziphephelo zama-aged ngumkhulu wabantwana babo' (IzAga 17:6). Ukuhlonipha uGogo loKhulu kufanele kucwebezele esiNgisini sakho — emagameni o-'Grandma' lo-'Grandpa' faka uthando lokuthembeka, hatshi ukubukeka kwezelapho.",
  },

  chunks: [
    {
      id: 'grandmother',
      target: 'Grandmother',
      native: 'uGogo (igama elipheleleyo)',
      literal: 'Grandmother — formal',
      emoji: '👵🏾',
      phonetic: 'GRAND-muh-thuh',
      audioRef: null,
    },
    {
      id: 'grandma',
      target: 'Grandma / Granny',
      native: 'Gogo (njengomemezo / fudumele)',
      literal: 'Grandma (US/UK), Granny (UK), Gran (UK)',
      emoji: '🤱🏾',
      phonetic: 'GRAND-mah / GRAN-nee',
      audioRef: null,
    },
    {
      id: 'grandfather',
      target: 'Grandfather',
      native: 'uMkhulu (igama elipheleleyo)',
      literal: 'Grandfather — formal',
      emoji: '👴🏾',
      phonetic: 'GRAND-fah-thuh',
      audioRef: null,
    },
    {
      id: 'grandpa',
      target: 'Grandpa',
      native: 'Khulu (njengomemezo / fudumele)',
      literal: 'Grandpa (US/UK), Grandad (UK), Pops (US)',
      emoji: '🧓🏾',
      phonetic: 'GRAND-pah',
      audioRef: null,
    },
    {
      id: 'grandparents',
      target: 'Grandparents',
      native: 'oGogo loMkhulu (bonke ndawonye)',
      literal: 'Grandparents — gender-neutral plural',
      emoji: '👴🏾👵🏾',
      phonetic: 'GRAND-pair-ents',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Formal vs warm — Grandmother / Grandma',
    explanation: "EsiNgisini sinamagama amabili: 'grandmother' / 'grandfather' (formal — bona kuhanjwa kwizincwadi, ezindlebeni ngamabhange) lo-'grandma' / 'grandpa' (fudumele — basetshenziswa ekhaya, lapho ukhuluma naye uqobo). 'Granny' / 'Grandad' yi-British style. 'Pops' / 'Gramps' yi-American slang. Kungumkhuba — kungeke kungalungile — kodwa kufanele wazi yiphi efaneleyo. Ekhaya: 'Grandma'. Encwadini ye-formal: 'My grandmother'.",
    examples: [
      { target: 'My grandmother prays every day.', native: 'uGogo wami uyathandaza nsuku zonke.' },
      { target: "Grandma, can you tell me a story?", native: '"Gogo, ungangixoxela indaba?"' },
      { target: 'My grandfather lives in the village.', native: 'uMkhulu wami uhlala edolobhaneni.' },
      { target: "Grandpa is teaching me to fish.",     native: '"Khulu uyangifundisa ukubamba inhlanzi."' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Grandmother',   right: 'uGogo (formal)' },
        { left: 'Grandma',       right: 'Gogo (warm)' },
        { left: 'Grandfather',   right: 'uMkhulu (formal)' },
        { left: 'Grandparents',  right: 'oGogo loMkhulu' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — uxoxa ngomama wakhulu',
      prompt: 'uGogo wami wangifundisa ukuthandaza.',
      correct: ['My grandmother taught me to pray.', 'My grandmother taught me how to pray.', 'my grandmother taught me to pray.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Faka igama elifaneleyo — ukhuluma ngokuphefumulayo lo-Khulu wakho omthandayo',
      sentence: '_____, can you tell me a story?',
      options: ['Grandfather', 'Grandpa', 'Mr. Khulu'],
      correct: 'Grandpa',
      context: "'Grandfather' kungezwakala kungenazwakala uma ukhuluma naye qobo lwakhe — kungumagama eli-formal. 'Grandpa' yifeleyo emakhaya, fudumele. 'Mr. Khulu' kungaba njenge-business meeting!",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ogogo bami bahlala edolobheni eMatabeleland.',
      correct: ['My grandparents live in a village in Matabeleland.', 'My grandparents live in a town in Matabeleland.', 'My grandparents live in Matabeleland.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umutsho — uGogo wami uxoxa amabali asebusuku',
      words: ['stories.', 'My', 'tells', 'grandmother', 'bedtime'],
      correct: ['My', 'grandmother', 'tells', 'bedtime', 'stories.'],
      translation: 'uGogo wami uxoxa amabali asebusuku.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Yiyo iphi ekhuluma kahle ngogogo wakho?',
      question: 'Umngane uthi: "Tell me about your grandmother." Yini engagcizelelayo uthando?',
      options: [
        { text: "My grandmother — we call her Gogo — taught me to pray. She's the heart of our family.", correct: true },
        { text: "My grandmother is old.",                                                                  correct: false },
        { text: "Grandma yes, exists.",                                                                    correct: false },
      ],
      explanation: "Impendulo yokuqala ifaka uthando — 'taught me to pray' (umsebenzi wakhe) lo-'the heart of our family' (isikhundla sakhe). Ifaka kanti igama lasekhaya 'Gogo' — yakha imbazu ngokwesiNdebele.",
    },
  ],

  rwenDialogue: {
    intro: "uGogo wakho usanda kushona. Uxoxa lomeluleki we-grief oyiNgisi mayelana naye.",
    lines: [
      { speaker: 'npc', target: "Tell me about your grandmother.", native: 'Ngitshele ngogogo wakho.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My grandmother — we called her Gogo — was the kindest woman I knew. She taught me to pray, and she made the best sadza.", native: 'uGogo wami — sasimbiza nguGogo — wayengowona muntu omuhle engake ngamazi. Wangifundisa ukuthandaza, futhi wayepheka isadza esimnandi kakhulu.', correct: true,  feedback: "Kuhle kakhulu. Usebenzise igama lasekhaya 'Gogo', waphinda wachaza isikhundla sakhe ('the kindest woman'), wabuya wabalula imisebenzi yakhe ('taught me to pray', 'made the best sadza'). Lokho kuyibuka esiNgisini esinothandweni." },
          { target: "Grandmother dead now.",                                                                                                                    native: 'uGogo usefile.',                                                                                                                                  correct: false, feedback: "Kufitshane kakhulu, futhi 'dead' kuphumelele. Sebenzisa: 'My grandmother passed away recently.' Lokho kuhloniphisa." },
          { target: "Gogo bye.",                                                                                                                                native: 'Gogo bye.',                                                                                                                                       correct: false, feedback: "Akubikwa-ngokwesiNgisi. Faka isenzo lokuhlonipha: 'My grandmother passed away — I miss her every day.'" },
        ],
      },
      { speaker: 'npc', target: "She sounds wonderful. May her memory be a blessing.", native: 'Ubonakala emangalisa. Sengathi ukukhumbulwa kwakhe kuzoba yisibusiso.' },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle. Wakuvule kahle uGogo esiNgisini — wamuhloniphisa, wamenza waba lula komunye olahlekelweyo. iJesu wathi: 'Ngiyabakhululekisa abakhalayo' (Mat 5:4).",
        rwenAnimation: 'gentle',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: 'Grandmother (ngesiNgisi)',     correct: ['Grandmother', 'grandmother'] },
      { prompt: 'Grandpa (ngesiNgisi)',         correct: ['Grandpa', 'grandpa'] },
      { prompt: 'My grandparents (ngesiNgisi)', correct: ['My grandparents', 'my grandparents'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhla',
    task: "Cabanga ngomama omkhulu noma ubaba omkhulu — abahleli noma abahambileyo. Bhala umutsho wokuhlonipha esiNgisini: 'My grandmother taught me ___' loba 'My grandfather used to ___'. Khuluma ngomlomo. Vula umnyango wokuthi ukuhlonipha kwesiNdebele kuxhumane lokuhlonipha kwesiNgisi.",
    rwenSignoff: "Kusasa — abafowabo bakaMama loBaba (uncles, aunts, cousins).",
  },

  crisisHandoff: true,

  phase8: {
    scenario: "You're chatting with an English-speaking friend at church about your grandparents. Share a memory — funny, warm, or tender. They might ask if your grandparents are still living. Be honest, but warm.",
    rwenRole: "Pastor Mark, 50, an English-speaking pastor at your church. Listens with care, asks gentle questions like 'What did your grandmother teach you?' or 'Where did your grandfather grow up?'",
    successCriteria: "User uses 'grandmother' or 'grandfather' (or 'grandma' / 'grandpa') correctly. Shares one specific memory or attribute. If a grandparent has passed, uses 'passed away' rather than 'died'. Speaks in full sentences.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
