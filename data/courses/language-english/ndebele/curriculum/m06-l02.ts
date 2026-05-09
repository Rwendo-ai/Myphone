import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02',
  module: 6,
  lesson: 2,
  title: 'Headache, stomachache, sore throat',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Lamuhla sifunda izinhlobo ezintathu zezinhlungu ezijwayelekileyo: 'headache' (ubuhlungu bekhanda), 'stomachache' (ubuhlungu besisu), lo 'sore throat' (umphimbo obuhlungu). EsiNdebeleni sithi nje 'ngiphethwe likhanda' kumbe 'isisu siyaluma' — kodwa esiNgisini kufanele uthi 'I HAVE a headache' njengento ophethweyo.",
    culturalNote: "Lokhu kuyizifundo ezimqoka — eBritain noma eUS, dokotela noma i-pharmacist uzakubuza 'where does it hurt?' — futhi ufuna igama elilodwa eliqondileyo. Akufunakali ukuchaza lonke i-storyboard. EZimbabwe sivama ukubophela izisu nokuhlamba indawo ohlala kuyo nge-Vicks — eUK kuthiwa 'Vicks vapor rub' kanjalo, kodwa ku-pharmacy bazokupha 'paracetamol' (UK) kumbe 'Tylenol' (US) ukutsho into yinye nje. 'Painkiller' yigama elidumileyo eliphathela konke.",
  },

  chunks: [
    {
      id: 'headache',
      target: 'I have a headache',
      native: 'Ngiphethwe likhanda',
      literal: 'Ngile-ache yekhanda',
      emoji: '🤕',
      phonetic: 'ay-hav-uh-HED-ayk',
      audioRef: null,
    },
    {
      id: 'stomachache',
      target: 'I have a stomachache',
      native: 'Isisu siyaluma',
      literal: 'Ngile-ache yesisu',
      emoji: '🤢',
      phonetic: 'ay-hav-uh-STUM-uk-ayk',
      audioRef: null,
    },
    {
      id: 'sore_throat',
      target: 'I have a sore throat',
      native: 'Ngiphethwe ngumphimbo',
      literal: 'Ngilomphimbo obuhlungu',
      emoji: '😣',
      phonetic: 'ay-hav-uh-sor-THROHT',
      audioRef: null,
    },
    {
      id: 'fever',
      target: 'I have a fever',
      native: 'Ngile-fever / Ngiyatshisa',
      literal: undefined,
      emoji: '🌡️',
      phonetic: 'ay-hav-uh-FEE-vuh',
      audioRef: null,
    },
    {
      id: 'cough',
      target: 'I have a cough',
      native: 'Ngiyakhwehlela',
      literal: undefined,
      emoji: '😷',
      phonetic: 'ay-hav-uh-KOF',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'I have a + isifo' — kuyizinto ozithengisileyo",
    explanation: "ESiNgisini, izifo ezijwayelekileyo zibhalwa ngokuthi yi-'I have a ___'. Khumbula u-'a' — eUK/US uvame ukuwukhohlwa, kodwa kufanele ubekhona: 'I have A headache', hatshi 'I have headache'. Iziphethwe ezikhulu, njenge-asthma kumbe diabetes, azidingi 'a': 'I have asthma'. Kodwa zonke ezinengi nje (ache, fever, cough, cold) zifuna 'a' phambi kwazo.",
    examples: [
      { target: 'I have a bad headache.',     native: 'Ngiphethwe likhanda kakubi.' },
      { target: 'I have a sore throat and a cough.', native: 'Ngilomphimbo obuhlungu lokukhwehlela.' },
      { target: 'I have a slight fever.',     native: 'Ngile-fever kancane.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama esiNgisi lencazelo',
      pairs: [
        { left: 'Headache',     right: 'Ubuhlungu bekhanda' },
        { left: 'Stomachache',  right: 'Ukuluma kwesisu' },
        { left: 'Sore throat',  right: 'Umphimbo obuhlungu' },
        { left: 'Fever',        right: 'Ukutshisa komzimba' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngiphethwe likhanda.',
      correct: ['I have a headache', 'I have a headache.', 'i have a headache', 'I have headache'],
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho',
      sentence: 'I have ___ sore throat and a bad cough.',
      options: ['a', 'the', 'one'],
      correct: 'a',
      context: "ESiNgisini izifo ezijwayelekileyo (ache, cough, cold, fever, sore throat) zithatha u-'a' ngaphambi kwazo. Akusi 'the' ngoba kunye phakathi kwezinengi.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama',
      words: ['a', 'have', 'I', 'stomachache'],
      correct: ['I', 'have', 'a', 'stomachache'],
      translation: 'Isisu siyaluma',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo — udokotela ekubuza',
      question: "Udokotela uthi 'Where does it hurt?' Ngumphimbo wakho. Yiphi engcono?",
      options: [
        { text: 'I have a sore throat — it hurts when I swallow.', correct: true },
        { text: 'My throat is fighting me.', correct: false },
        { text: "I'm sick in throat place.", correct: false },
      ],
      explanation: "'Sore throat' yigama elilodwa elijwayelekileyo. Ungasiboshi ulimi — udokotela uyazi kahle ukuthi 'sore throat' kuyini.",
    },
  ],

  rwenDialogue: {
    intro: 'Usebenzela e-care home eManchester. Ekuseni awuphilanga. Umphathi ukubuza ngenhle ukuthi kwenzakalani.',
    lines: [
      { speaker: 'npc', target: "You don't look well. What's going on?", native: 'Awuzwakali kuhle. Kwenzakalani?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have a bad headache and a sore throat. I think it's a cold.", native: 'Ngiphethwe likhanda kakubi futhi ngilomphimbo obuhlungu. Ngicabanga ukuthi yi-cold.', correct: true, feedback: "Kuhle — washo izifo ezimbili ngendlela eqondileyo, wahlosa lokuthi kungaba yini. Iqondile." },
          { target: 'My head is fighting and my neck inside hurts.', native: 'Ikhanda lami liyalwa lo phakathi kwentamo kuyaluma.', correct: false, feedback: "Sebenzisa amagama ajwayelekileyo: 'a headache' lo 'a sore throat'. Akudingakali ukuhumusha esiNdebeleni." },
          { target: 'I have headache.', native: 'Ngile-headache.', correct: false, feedback: "Useduze — kodwa khumbula u-'a': 'I have A headache'. Lokhu kuyabaluleka esiNgisini." },
        ],
      },
      { speaker: 'npc', target: 'Oh dear — go home and rest. Take some paracetamol if you can.', native: 'Ngiyazwa — phindela ekhaya, uphumule. Thatha i-paracetamol nxa ungenelisa.' },
      {
        speaker: 'rwen',
        rwenLine: "Hayi! Wahlanganisa izifo ngendlela eqondileyo. 'Paracetamol' yi-painkiller eUK — eUS bayithi 'Tylenol'. Sizafunda lokho kungane.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo, ungabuyeli phezulu.',
    prompts: [
      { prompt: 'Bhala ngesiNgisi: Ngiphethwe likhanda.',      correct: ['I have a headache', 'I have a headache.', 'i have a headache'] },
      { prompt: 'Bhala ngesiNgisi: Ngilomphimbo obuhlungu.', correct: ['I have a sore throat', 'I have a sore throat.', 'i have a sore throat'] },
      { prompt: 'Bhala ngesiNgisi: Ngiyakhwehlela.',          correct: ['I have a cough', 'I have a cough.', 'i have a cough'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wamuhla',
    task: "Bhala kuthadi yakho ngesiNgisi: 'Today I have a ___' (khetha into engadingi nokwenziwa noma incane). Tshono ngomlomo kabili ngokuthi 'I have a' singathi 'have-a' njengegama elilodwa.",
    rwenSignoff: 'Kusasa siyahamba kudokotela — sifunda ukubeka i-appointment.',
  },

  phase8: {
    scenario: "You're at a UK pharmacy on a Saturday morning. You've had a sore throat, headache, and slight fever for two days. Tell the pharmacist what's wrong so they can suggest something. Don't over-explain — name the symptoms cleanly.",
    rwenRole: "James, 35, a friendly UK pharmacist. He'll ask 'how long has it been going on?' and 'any other symptoms?' Suggests paracetamol or lozenges and tells you to see GP if it doesn't improve in 3 days.",
    successCriteria: "User uses 'I have a + symptom' format for at least 2 symptoms (e.g., 'I have a sore throat and a headache'). Includes the article 'a'. States duration. Doesn't slip into Ndebele.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
