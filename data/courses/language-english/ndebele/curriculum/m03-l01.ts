import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-hungry-thirsty',
  module: 3,
  lesson: 1,
  title: "I'm hungry / I'm thirsty — Ngilambile / Ngomile",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Salibonani! Lamuhla sifunda ukutsho ukuthi ulambile kumbe womile ngesiNgisi. Lokhu yikho okuqala emhlabeni — uzakukudinga edolobheni, ehotela, lasendizeni.",
    culturalNote: "EsiNdebeleni sithi 'ngilambile' kumbe 'ngomile' — kuphelele ngegama elilodwa. EsiNgisini kuyadingeka 'I'm' phambi kwegama: 'I'm hungry' kumbe 'I'm thirsty'. Ungatshiyi 'I'm' — 'Hungry' kuphela kuzwakala kungaqedanga, njengomntwana okhulumayo. Njalo, esiNgisini abantu kabatsho 'I'm dying of hunger' kuze kube nzima — kuyathuthumeza. Vele utsho 'I'm a bit hungry' uma ungafuni ukukhonkotha.",
  },

  chunks: [
    {
      id: 'im_hungry',
      target: "I'm hungry",
      native: 'Ngilambile',
      literal: 'I-am hungry',
      emoji: '🍽️',
      phonetic: 'aym-HUNG-ree',
      audioRef: null,
    },
    {
      id: 'im_thirsty',
      target: "I'm thirsty",
      native: 'Ngomile',
      literal: 'I-am thirsty',
      emoji: '💧',
      phonetic: 'aym-THUR-stee',
      audioRef: null,
    },
    {
      id: 'im_starving',
      target: "I'm starving",
      native: 'Ngilambe kakhulu',
      literal: 'I-am starving',
      emoji: '😩',
      phonetic: 'aym-STAR-ving',
      audioRef: null,
    },
    {
      id: 'a_bit_hungry',
      target: "I'm a bit hungry",
      native: 'Ngilambile kancane',
      literal: 'I-am a-bit hungry',
      emoji: '🙂',
      phonetic: 'aym-uh-bit-HUNG-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: "I'm + adjective (state of body)",
    explanation: "EsiNgisini, ukutsho indlela umzimba ozizwa ngayo, sebenzisa 'I'm' + isiphawulo (adjective): hungry, thirsty, tired, cold, hot. Akumelanga utsho 'I have hunger' njengabaseFulansi — esiNgisini sithi 'I'm hungry'. 'I'm' yiyo eqala konke.",
    examples: [
      { target: "I'm hungry",       native: 'Ngilambile' },
      { target: "I'm thirsty",      native: 'Ngomile' },
      { target: "I'm a bit hungry", native: 'Ngilambile kancane' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa isiNgisi lesiNdebele',
      pairs: [
        { left: "I'm hungry",       right: 'Ngilambile' },
        { left: "I'm thirsty",      right: 'Ngomile' },
        { left: "I'm starving",     right: 'Ngilambe kakhulu' },
        { left: "I'm a bit hungry", right: 'Ngilambile kancane' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngomile',
      correct: ["I'm thirsty", "I am thirsty", "i'm thirsty", "i am thirsty"],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa ngo-'I'm'",
      sentence: "____ hungry. Can we eat?",
      options: ["I'm", 'I have', 'Me'],
      correct: "I'm",
      context: 'Ukhuluma lomngane wakho ngesikhathi sokudla.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okulungileyo',
      question: "Ufuna ukutsho 'Ngomile' ngesiNgisi. Yiphi elungileyo?",
      options: [
        { text: "I'm thirsty.",   correct: true },
        { text: "I have thirst.", correct: false },
        { text: "Thirsty me.",    correct: false },
      ],
      explanation: "EsiNgisini akusetshenziswa 'I have thirst' — kungesinye isiKristu/isiFulansi lokho. Esi-Ngisini sithi 'I'm thirsty'.",
    },
  ],

  rwenDialogue: {
    intro: "Usanda kufika eLondon emva kohambo olude. Ungene erestaurant, umphathi uyakubuza.",
    lines: [
      { speaker: 'npc', target: "Hi there! Can I help you?", native: 'Salibonani! Ngingakuncedisa?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes please, I'm hungry and thirsty.", native: 'Yebo ngiyabonga, ngilambile njalo ngomile.', correct: true,  feedback: "Kuhle — 'I'm' kuvela kabili, kuyaqondakala ngokupheleleyo." },
          { target: "Hungry. Thirsty.",                    native: 'Ngilambile. Ngomile.',                       correct: false, feedback: "Ulwazi lukhona kodwa kuzwakala kunqamulwe — engeza 'I'm' phambi kwesiphawulo." },
          { target: "I have hunger.",                      native: 'Ngilendlala.',                               correct: false, feedback: "Lokhu yindlela yesiFulansi/yesiSpanish. EsiNgisini sithi 'I'm hungry'." },
        ],
      },
      { speaker: 'npc', target: "Of course — please take a seat.", native: 'Yebo ngeqiniso — hlala phansi.' },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle. 'I'm hungry' lo 'I'm thirsty' yizinto zokuqala ozakuzitsho ehambeni — bambeleli kakhulu kulamhla.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva — bhala ngesiNgisi.',
    prompts: [
      { prompt: 'Ngilambile (ngesiNgisi)', correct: ["I'm hungry", "I am hungry", "i'm hungry", "i am hungry"] },
      { prompt: 'Ngomile (ngesiNgisi)',    correct: ["I'm thirsty", "I am thirsty", "i'm thirsty", "i am thirsty"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho lamhla',
    task: "Lamuhla, mathathu izikhathi uma ulamba kumbe womile, tsho phakathi kwakho ngesiNgisi: 'I'm hungry.' loba 'I'm thirsty.' — kungenani uba uyedwa.",
    rwenSignoff: "Wenze kuhle. Sizabonana kusasa.",
  },

  phase8: {
    scenario: "You've just landed at Heathrow Airport in London after a long flight. You walk into a small cafe in the arrivals hall. The cashier greets you and you need to explain you're hungry and thirsty before ordering anything specific.",
    rwenRole: "Maya, 28, the cafe cashier. Friendly Londoner, used to tired travellers, will gently prompt the user to say more if they only give one-word answers.",
    successCriteria: "User produces 'I'm hungry' and 'I'm thirsty' (or 'I'm a bit hungry') in full sentences with the verb 'am' included, and responds when Maya offers something to drink or eat.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
