import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02',
  module: 10,
  lesson: 2,
  title: 'Conditionals — if, unless, whenever',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "ESiNdebele, uthi 'uba' kumbe 'nxa' uxoxa ngokungazi. ESiNgisini, kuyalandelana — 'if' (uba), 'unless' (uba kungenjalo), 'whenever' (noma ngabe nini). Lokhu kuvula umnyango wokukhuluma ngekusasa, ngokungenzeki, ngenkambo yempilo.",
    culturalNote: "AbantuabakhulumisesiNgisi ngokuvamileyo basebenzisa 'if' kakhulu — 'If you have time, can you help me?' (politely), 'If it rains, we'll cancel' (planning), 'If I were you, I would wait' (advice). U-'Unless' yi-'kuphela uba' — 'I'll come, unless I'm busy.' kufana lo-'kuphela uba ngingakhathali'. U-'Whenever' = 'noma ngabe nini' — 'Call me whenever you need help.' Lokhu kufundisa abaphathi, abathengisi, lonke umuntu okhulumisana lawe okuthi uzimisele lokucinga.",
  },

  chunks: [
    {
      id: 'if',
      target: 'If',
      native: 'Uba / nxa',
      literal: 'If',
      emoji: '❓',
      phonetic: 'IF',
      audioRef: null,
    },
    {
      id: 'unless',
      target: 'Unless',
      native: 'Ngaphandle uba / kuphela uba kungenjalo',
      literal: 'Unless = if not',
      emoji: '🚫',
      phonetic: 'un-LES',
      audioRef: null,
    },
    {
      id: 'whenever',
      target: 'Whenever',
      native: 'Noma ngabe nini',
      literal: 'Whenever',
      emoji: '🔄',
      phonetic: 'wen-EV-uh',
      audioRef: null,
    },
    {
      id: 'if_i_were',
      target: 'If I were you',
      native: 'Uba bengingaba nguwe',
      literal: 'If I were you (advice)',
      emoji: '💭',
      phonetic: 'if-ay-WUR-yu',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three conditionals — if / unless / whenever',
    explanation: "(1) 'If + present, will + verb': 'If it rains, I will stay home.' (2) 'Unless' = 'if not': 'I'll go, unless it rains' kuyafana lo-'I won't go if it rains.' (3) 'Whenever' = noma ngabe nini, ngentando: 'Call me whenever you're free.' (4) Iziseko: 'If I were you, I would wait.' (advice — ALWAYS 'were', hatshi 'was'). Khangela ihora le-'will' lo-'would' — kungumahluko phakathi kwekusasa lecabango lokuziphendulela.",
    examples: [
      { target: 'If you call me, I will help.',                  native: 'Uba ungitshelele, ngizakusiza.' },
      { target: "I'll be there at 7, unless the train is late.", native: "Ngizabe ngikhona ngo-7, ngaphandle uba isitimela siphuza." },
      { target: 'Whenever you need me, just call.',              native: 'Noma ngabe nini ungidinga, ngitshele.' },
      { target: 'If I were you, I would take the job.',          native: 'Uba bengingaba nguwe, bengizathathwa umsebenzi.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Khetha eyiyo',
      sentence: "I'll come to the meeting, _____ I'm sick.",
      options: ['if', 'unless', 'whenever'],
      correct: 'unless',
      context: "U-'Unless' = 'if not'. Uthi 'ngizakuza, ngaphandle uba ngigula' — i.e. ngizakuza nxa ngingaguli. U-'if I'm sick' bekungaqondi (bekuzakuthi 'ngizakuza nxa ngigula' — okuyibhibhili).",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (advice)',
      prompt: 'Uba bengingaba nguwe, bengizothula.',
      correct: [
        'If I were you, I would stay quiet.',
        'If I were you, I would be quiet.',
        "If I were you, I'd stay quiet.",
        "If I were you, I'd be quiet.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: "Hlela: 'Whenever you have time, please call me'",
      words: ['call', 'time,', 'have', 'me.', 'Whenever', 'you', 'please'],
      correct: ['Whenever', 'you', 'have', 'time,', 'please', 'call', 'me.'],
      translation: 'Noma ngabe nini ulesikhathi, ngicela ungitshelele',
    },
    {
      type: 'multiple_choice',
      instruction: "Khetha eyiyo — i-advice",
      question: "Umngane wakho ufuna i-advice. Yiphi efaneleyo?",
      options: [
        { text: 'If I was you, I will wait.',  correct: false },
        { text: 'If I were you, I would wait.', correct: true },
        { text: 'If I am you, I wait.',         correct: false },
      ],
      explanation: "I-Advice form ifuna 'were' (HATSHI 'was' — yibo bonke abantu, kanjalo) lo-'would' (HATSHI 'will'). Yindlela kuphela uChelsea owayethanda 'If I were a boy' uyibambeneyo!",
    },
  ],

  rwenDialogue: {
    intro: 'Umngane wakho usefuna ukuthi uhambe lawe weekend. Uveza imibonelo yakho lemicabango.',
    lines: [
      { speaker: 'npc', target: "Are you free this Saturday?", native: "Ulesikhathi ngoMgqibelo lo?" },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "If the weather is good, yes! Unless it rains heavily, I'll come. Whenever you want to leave, just call me.",
            native: "Uba isimo sokomkhathi sihle, yebo! Ngaphandle uba kuna izulu kakhulu, ngizakuza. Noma ngabe nini ufuna ukuhamba, ngitshele.",
            correct: true,
            feedback: "Bukela kuhle — usebenzise zonke ezintathu: 'if', 'unless', 'whenever' emizweni emithathu. Lokhu yi-mastery.",
          },
          {
            target: "Yes maybe sometimes if rain or not.",
            native: "Yebo mhlawumbe izinye ngezikhathi uba kuna kumbe kungani.",
            correct: false,
            feedback: "Akukho clear. Sebenzisa 'if' kanye nje: 'If it doesn't rain, yes.' Lokhu kuyaqondakala kakhulu.",
          },
          {
            target: "Whenever if unless I will.",
            native: "Noma ngabe nini uba ngaphandle ngizakwenza.",
            correct: false,
            feedback: "Wabophe wonke amagama awe-conditional kanyekanye! Khetha elilodwa: 'If you call, I'll come.' kuyenele.",
          },
        ],
      },
      { speaker: 'npc', target: "Perfect — I'll text you Saturday morning.", native: "Kuhle — ngizakuthumelela i-message ngeMgqibelo ekuseni." },
      { speaker: 'rwen', rwenLine: "Khangela — 'if' yokuqala iqondene, 'unless' yokuvika, 'whenever' yokuvulela. Wonke umqondo wakho usucacile.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Tshintsha 'I'll come if I'm not busy' usebenzisa 'unless'", correct: ["I'll come unless I'm busy", "I'll come unless I am busy", "I will come unless I'm busy"] },
      { prompt: "Bhala 'If I were you, I would wait' (advice)", correct: ['If I were you, I would wait', "If I were you, I'd wait", 'If I were you I would wait'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Cabanga ngomngane okudinga i-advice. Mtshele 'If I were you, I would ___' — gcwalisa ngomcabango wakho. Bhala phansi noma uphendule ngomlomo.",
    rwenSignoff: "Kusasa — imibuzo etshikamezayo. 'What do you think?'",
  },

  phase8: {
    scenario: "Your friend in the UK is planning a weekend trip and asks for your input. They want to know if you'll join, what conditions you have, and any advice. Use 'if', 'unless', 'whenever' across the conversation.",
    rwenRole: "Priya, 29, a friend who's organising a Saturday hike. Curious, easy-going. Will ask 'What time works?' and 'Any advice on what to bring?'",
    successCriteria: "User uses 'if' AND 'unless' OR 'whenever' (at least two of the three). Gives one piece of advice using 'If I were you, I would...'. Stays in English throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
