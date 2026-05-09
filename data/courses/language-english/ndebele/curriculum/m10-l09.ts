import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09',
  module: 10,
  lesson: 9,
  title: 'Reading the room — when to be quiet, when to speak up',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Esikhungweni sesiNgisi, ukufunda ikamelo (i-room) yikho okukhulumayo lokho okumzala. Awufuni ukuthula isikhathi sokuthi 'speak up'. Awufuni ukukhuluma isikhathi sokuthi 'lalela'. Le yi-skill engaphezu kwamagama. Yifaniselo lemizwa, lokuhleba kwemiqhubo, kanye lokuzwela.",
    culturalNote: "ESiNdebele esokuhlonipha kuyaqondakala — ungaphazamiseni umuntu omdala, lalela kuqala. ESiNgisini, kungafanani kuyo yonke indawo. EUK, ukuthula isikhathi eside ku-meeting kuyenza umphathi acabange ukuthi awunamicabango. EUS, kuyalindeleka ukuthi ufake okwakho ('I just want to add...'). Kodwa kunye okuyilo: lapho umuntu ekhathazekile, akudingi mabela — kudinga ukulalela. Lapho umuntu ehleka, ungaqalisi ngezindaba ezimnyama. Le yi-skill yokufunda ikamelo: bona izinhliziyo zabantu, bese ukhetha amagama afaneleyo. AbamaNdebele eU.S. babika lokho: 'amaUS angangiqonda ukuthi ngithulile, kanti ngiyalalela.' Sebenzisa amaphrase amancane: 'Just to add...', 'Can I jump in?', 'I'll just listen for now.'",
  },

  chunks: [
    {
      id: 'read_the_room',
      target: 'Read the room',
      native: 'Funda ikamelo (umoya wesimo)',
      literal: 'Read the room (sense the mood)',
      emoji: '👁️',
      phonetic: 'REED-thuh-ROOM',
      audioRef: null,
    },
    {
      id: 'speak_up',
      target: 'Speak up',
      native: 'Khuluma ngokugcwele',
      literal: 'Speak up (share your view)',
      emoji: '🗣️',
      phonetic: 'SPEEK-up',
      audioRef: null,
    },
    {
      id: 'jump_in',
      target: 'Can I jump in?',
      native: 'Ngingafaka okwami yini?',
      literal: 'Jump in (politely interrupt)',
      emoji: '🦘',
      phonetic: 'kan-ay-JUMP-in',
      audioRef: null,
    },
    {
      id: 'listen_for_now',
      target: "I'll just listen for now",
      native: 'Ngizolalela kuphela okwamanje',
      literal: "I'll listen for now (step back)",
      emoji: '👂',
      phonetic: 'AYL-just-LIS-en-fur-NOW',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'When to speak, when to listen',
    explanation: "I-rules: (1) Lapho umphathi ebuza umbono — KHULUMA. Sebenzisa 'I think...' okuncane. (2) Lapho umuntu ekhathazekile — LALELA. Sebenzisa 'I'm sorry, that sounds hard.' (3) Lapho ufuna ukuxoxa kodwa abantu bayakhuluma — sebenzisa 'Can I jump in?' (kuhlonipha). (4) Lapho ungazimiselanga — 'I'll just listen for now' (yiqhinga elihle). Le yi-balance phakathi kokuhlonipha lokuzimela.",
    examples: [
      { target: "Sorry — can I jump in for a second?",                native: 'Uxolo — ngingafaka okwami umzuzwana yini?' },
      { target: "I'll just listen for now and learn.",                 native: 'Ngizolalela kuphela okwamanje futhi ngifunde.' },
      { target: 'You should speak up in meetings — your ideas matter.', native: 'Kufanele ukhulume emihlanganweni — imibono yakho iqakathekile.' },
      { target: 'Read the room — now is not the time for jokes.',      native: 'Funda ikamelo — manje akusiso isikhathi sezihlekhi.' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: "Khetha indlela efaneleyo yokufunda i-room",
      question: "Umngane wakho usanda kulahlekelwa ngumsebenzi. Uqala ekhalini. Yiphi efaneleyo?",
      options: [
        { text: "On the bright side, this is a piece of cake to fix!", correct: false },
        { text: "I'm so sorry. That sounds really hard.",               correct: true },
        { text: "Did you ask for a pay rise?",                           correct: false },
      ],
      explanation: "Eyokuqala — kuyahlukunya ngezikhathi zobuhlungu. Eyesithathu — ibuza umbuzo othile, ayingenani. Eyesibili — ifunda i-room: imuntu ekhathazekile ifuna ukulalelwa, hatshi ukucetshiswa.",
    },
    {
      type: 'fill_blank',
      instruction: 'Gcwalisa — ufuna ukufaka okwakho ngenhlonipho',
      sentence: "Sorry — can I _____ in for a second?",
      options: ['jump', 'speak', 'put'],
      correct: 'jump',
      context: "I-collocation eqondileyo yi 'jump in' = ukufaka okwakho engxoxweni ngenhlonipho. 'Speak in' lo 'put in' kayisi-idiom.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (ungazimiselanga, ufuna ukulalela)',
      prompt: 'Ngizolalela kuphela okwamanje.',
      correct: [
        "I'll just listen for now.",
        'I will just listen for now.',
        "I'll just listen for now",
      ],
    },
    {
      type: 'build_sentence',
      instruction: "Hlela: 'Now is not the time for jokes'",
      words: ['for', 'is', 'jokes.', 'time', 'the', 'Now', 'not'],
      correct: ['Now', 'is', 'not', 'the', 'time', 'for', 'jokes.'],
      translation: 'Manje akusiso isikhathi sezihlekhi',
    },
  ],

  rwenDialogue: {
    intro: 'Usemhlanganweni womsebenzi. I-team ikhuluma ngomsebenzi onzima. Umngane wakho usanda kuthola izindaba ezimbi mayelana lomama wakhe ogulayo.',
    lines: [
      { speaker: 'npc', target: "I just got a call — my mum's cancer is back. I don't know what to do.", native: "Ngiqeda ukufakelwa ucingo — i-cancer kamama ibuyile. Angazi ukuthi ngenze njani." },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "I'm so sorry. That sounds really hard. I'm here if you need to talk — and I'll just listen for now.",
            native: "Ngiyaxolisa kakhulu. Kuzwakala kunzima ngempela. Ngilapha uba udinga ukukhuluma — futhi ngizolalela kuphela okwamanje.",
            correct: true,
            feedback: "Mastery yokufunda ikamelo. Awucabushi ukucebisa, kunalokho uvumele isizungu, awunikeze ukuhlonipha. Lokhu yi-deep skill.",
          },
          {
            target: "On the bright side, cancer treatment has improved a lot! Have you tried looking up new doctors?",
            native: "Ngokwenele kahle, ukwelashwa kwe-cancer kunconywa kakhulu! Wake wacinga abadokotela abasha?",
            correct: false,
            feedback: "Awufundanga i-room. Imuntu odabukile akadingi izeluleko ngokushesha — kudinga ukulalelwa kuqala. Sebenzisa: 'I'm sorry. That sounds hard.'",
          },
          {
            target: "Anyway, did you finish the report?",
            native: "Pho, uwuqedile umbiko?",
            correct: false,
            feedback: "Lokhu ukubeka ngokungahloniphi. Yamukela ubuhlungu kuqala — i-meeting ingalinda.",
          },
        ],
      },
      { speaker: 'npc', target: "Thank you. I just needed someone to hear me.", native: "Ngiyabonga. Bengidinga umuntu wokungilalela." },
      { speaker: 'rwen', rwenLine: "Bona — ukufunda ikamelo akukho phezu kwamagama. Yikho lokhu okwenza ube ngumngane oqotho ngezilimi zombili.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'Can I jump in?' ngesiNgisi", correct: ['Can I jump in?', 'Can I jump in', 'May I jump in?'] },
      { prompt: "Bhala 'I'll just listen for now' ngesiNgisi", correct: ["I'll just listen for now", 'I will just listen for now', "I'll just listen for now."] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Lamuhla, esikhathini esisodwa, qaphela i-room — ukukhuluma noma ukuthula. Khangela: ubani ukhuluma kakhulu? Ubani uthule? Yini i-mood? Khetha umzuzu wokufaka okwakho ngenhlonipho ('Can I jump in?') noma owokulalela ('I'll just listen for now').",
    rwenSignoff: "Kusasa — i-graduation lesson! Ingxoxo eyiqiniso, esikhathini eside.",
  },

  phase8: {
    scenario: "You're at a UK office lunch with three colleagues. The conversation shifts: one is excited about a promotion, another is quietly upset about something at home, the third dominates the talk. Practice reading the room — when to celebrate, when to listen, when to politely jump in.",
    rwenRole: "Three personalities in one room (Rwen will play all three): Jenny (just promoted, excited), Mark (quietly grieving), and Steve (loud, dominates). Switches between them.",
    successCriteria: "User adapts tone to each colleague: celebrates with Jenny, listens with Mark ('I'm sorry'), politely interrupts Steve ('Can I jump in?'). Uses 'I'll just listen for now' once OR steps back appropriately. Doesn't give advice to Mark unprompted.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
