import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l09-shopping-numbers',
  module: 6,
  lesson: 9,
  title: 'Wellness — exercise, sleep, diet',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Lapha sifunda ukukhuluma ngempilo nseukuzonda — hatshi nje uma ugula. Amagama amathathu ayinhloko: 'exercise' (ukusebenzisa umzimba), 'sleep' (ukulala), lo 'diet' (ukudla okugiqayo). EUK lase US, abantu bayakuzwa lokhu nsuku zonke — kungumakelo wokuxoxa nabosingane.",
    culturalNote: "EZimbabwe ukusebenzisa umzimba kungavamile ukuhambelana le-gym — sihamba ngezinyawo emadolobheni, sigijima emasimini. EUK lase US, 'exercise' kuyinto ehleliwe — abantu baya ku-gym, badingisa, baphatha le-yoga ezinkundleni. 'Diet' iyimibango — eUS lo UK, 'diet' kungatsho into oyidlayo nje (your normal food), kumbe uhlelo lwesikhathi esisodwa lokwehlisa isilengi (a weight loss diet). 'Sleep' yindaba enkulu — abantu bachaza i-'sleep hygiene' (umkhuba wokulala), 'I didn't sleep well' kuyizwakala nsuku zonke. Khumbula: ESiNgisini sokuhloliswa, abantu abanye bayazwa kuhle nxa uthi 'I'm trying to eat healthier' — kuwumduli wokuxoxa.",
  },

  chunks: [
    {
      id: 'exercise',
      target: 'I exercise three times a week',
      native: 'Ngisebenzisa umzimba kathathu ngeviki',
      literal: undefined,
      emoji: '🏃',
      phonetic: 'ay-EK-suh-syz',
      audioRef: null,
    },
    {
      id: 'sleep_well',
      target: "I didn't sleep well",
      native: 'Angilalanga kuhle',
      literal: undefined,
      emoji: '😴',
      phonetic: 'ay-DIDN\'T-SLEEP-wel',
      audioRef: null,
    },
    {
      id: 'diet',
      target: "I'm trying to eat healthier",
      native: 'Ngizama ukudla ngendlela ephilileyo',
      literal: undefined,
      emoji: '🥗',
      phonetic: 'aym-TRY-ing-tu-EET-HEL-thee-uh',
      audioRef: null,
    },
    {
      id: 'work_out',
      target: 'I work out at the gym',
      native: 'Ngisebenza emzimbeni e-gym',
      literal: undefined,
      emoji: '🏋️',
      phonetic: 'ay-WURK-owt-at-thuh-JIM',
      audioRef: null,
    },
    {
      id: 'feel_better',
      target: 'I feel better when I sleep enough',
      native: 'Ngizizwa kahle nxa ngilale ngokwanele',
      literal: undefined,
      emoji: '😊',
      phonetic: 'ay-feel-BET-uh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "'I + verb + frequency' — ukuxoxa ngomkhuba",
    explanation: "ESiNgisini, ukukhuluma ngomkhuba kusebenzisa u-'I + verb + frequency': 'I exercise three times a week', 'I sleep eight hours a night', 'I eat fish twice a week'. I-frequency ifaka 'every day', 'twice a week', 'three times a month'. 'Work out' yi-phrasal verb yase US (eyamukelekayo neUK) — kuyahambelana le-'exercise' kodwa kuthethelelana ngokuya kwi-gym. 'Diet' kuvame ukuza uxoxe kakhulu nge-'eating healthier' kunokuthi uthi 'I'm on a diet' (lokho kuthumela ukuthi wehlisa isilengi).",
    examples: [
      { target: 'I exercise three times a week — usually running.',  native: 'Ngisebenzisa umzimba kathathu ngeviki — kakhulu ngokugijima.' },
      { target: 'I try to sleep at least seven hours a night.',       native: 'Ngizama ukulala okungenani amahora ayisikhombisa ebusuku.' },
      { target: "I'm cutting down on sugar.",                          native: 'Ngeqezisa ushukela.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama lencazelo',
      pairs: [
        { left: 'Exercise',     right: 'Ukusebenzisa umzimba' },
        { left: 'Sleep',        right: 'Ukulala' },
        { left: 'Diet',          right: 'Ukudla / uhlelo lokudla' },
        { left: 'Work out',      right: 'Ukusebenzisa umzimba e-gym' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngisebenzisa umzimba kathathu ngeviki.',
      correct: ['I exercise three times a week', 'I exercise three times a week.', 'i exercise three times a week', 'I work out three times a week'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha okuqondileyo',
      question: "Awulalanga ngokwanele ebusuku. Umngane uyakubuza 'How are you today?' Yiphi engcono?",
      options: [
        { text: "Tired — I didn't sleep well last night.", correct: true },
        { text: "I have non-sleep.",                         correct: false },
        { text: 'My sleep is broken.',                       correct: false },
      ],
      explanation: "'I didn't sleep well' yifomula evamile, esebenza eUK lase US. 'I have non-sleep' akusebenzi. 'My sleep is broken' kuyiNdebele lehluliwe.",
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa indawo engelalutho',
      sentence: "I'm trying to eat _______ — more vegetables, less sugar.",
      options: ['healthier', 'healthly', 'healthness'],
      correct: 'healthier',
      context: "'Healthier' yi-comparative ye-'healthy' (ephileyo). 'Healthly' kunjengo akusiwo magama. 'Healthness' yi-noun, hatshi ezeluleko-magama.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama',
      words: ['the', 'I', 'work', 'out', 'gym', 'at'],
      correct: ['I', 'work', 'out', 'at', 'the', 'gym'],
      translation: 'Ngisebenza emzimbeni e-gym',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngizizwa kahle nxa ngilale ngokwanele.',
      correct: ['I feel better when I sleep enough', 'I feel better when I sleep enough.', 'I feel better when I get enough sleep', 'i feel better when i sleep enough'],
    },
  ],

  rwenDialogue: {
    intro: 'Use kufoni lomngane wakho oseLondon, ondabukela impilo. Uyakubuza umkhuba wakho wempilo.',
    lines: [
      { speaker: 'npc', target: "How have you been keeping fit lately? I started running on weekends.", native: 'Ubukumeleleni kuhle manje? Mina ngiqalile ukugijima ngamasonto.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Not bad — I exercise about three times a week, mostly walking. I'm trying to eat healthier too.", native: 'Akukubi — ngisebenzisa umzimba cishe kathathu ngeviki, kakhulu ngokuhamba. Ngizama nokudla ngendlela ephilileyo.', correct: true, feedback: "Kuhle. Wachaza umkhuba wakho ngendlela ezwakalayo, wafaka 'mostly walking' okwenza into incipheke. Yindlela enempilo." },
          { target: 'I run all day every day.', native: 'Ngigijima usuku lonke nsuku zonke.', correct: false, feedback: "Kungase kungalenani — kayikhonjwa nje. Sebenzisa imikhwele eqondileyo: 'three times a week'." },
          { target: 'No exercise.', native: 'Akukho exercise.', correct: false, feedback: "Lokho kushiye umngane wakho engenakuphendula. Tshono into encane: 'I walk to work every day' kumbe 'I'm trying to start exercising'." },
        ],
      },
      { speaker: 'npc', target: "Nice. How's your sleep been? I've been struggling.", native: 'Kuhle. Ulala kanjani manje? Mina ngingena ezinkingeni.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Honestly, I haven't been sleeping well — too much on my mind. I feel better when I get seven or eight hours.", native: 'Ngeqiniso, angilalanga kahle — kuningi engqondweni. Ngizizwa ngcono uma ngithola amahora ayisikhombisa noma ayisificaminwembili.', correct: true, feedback: "Hayi! Wavula isifuba, washo isizathu, watsho into ephumelelisa wena. Kuyinkulumo eqotho." },
          { target: 'Sleep good.', native: 'Ukulala kuhle.', correct: false, feedback: "Useduze kodwa akugcwalisi. Tshono ngegama elipheleleyo: 'I sleep well' kumbe 'My sleep has been good'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hayi! Ukukhuluma ngempilo akuyiyo into yokuhloniphisa nje — kungumduli wokuvuma ukuthi siyasebenza ekuziphileli.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: 'Bhala ngesiNgisi: Ngisebenzisa umzimba kathathu ngeviki.', correct: ['I exercise three times a week', 'I exercise three times a week.', 'I work out three times a week', 'i exercise three times a week'] },
      { prompt: 'Bhala ngesiNgisi: Angilalanga kuhle.', correct: ["I didn't sleep well", "I didn't sleep well.", 'I did not sleep well', "i didn't sleep well"] },
      { prompt: 'Bhala ngesiNgisi: Ngizama ukudla ngendlela ephilileyo.', correct: ["I'm trying to eat healthier", "I'm trying to eat healthier.", "I am trying to eat healthier", "i'm trying to eat healthier"] },
    ],
  },

  mission: {
    title: 'Umsebenzi wamuhla',
    task: "Bhala izinto ezintathu zempilo yakho lamuhla ngesiNgisi: ukulala kwakho (e.g., 'I slept seven hours'), ukudla kwakho (e.g., 'I ate fruit and vegetables'), kanye lo-exercise (e.g., 'I walked to the shops'). Kuyimpumelelo encane usuku ngosuku.",
    rwenSignoff: 'Kusasa — sigcina i-Module 6 ngengxoxo eqotho ku-doctor.',
  },

  phase8: {
    scenario: "You're meeting a personal trainer at a London gym for the first session. They ask about your current fitness, sleep, and diet so they can build a plan. Be honest — they need to know where you're starting from.",
    rwenRole: "Mike, 32, a UK-based personal trainer. Encouraging, never judges. Asks 'how often do you exercise?', 'how's your sleep?', 'what does a typical day of food look like?'",
    successCriteria: "User uses 'I exercise / work out + frequency' (e.g., 'three times a week'). Describes sleep ('I sleep / I don't sleep well'). Mentions diet ('I'm trying to eat healthier' or describes typical food). Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
