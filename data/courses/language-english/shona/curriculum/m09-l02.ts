import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-directions',
  module: 9,
  lesson: 2,
  title: 'Left, Right, Straight — Kuruboshwe, Kurudyi, Zvakananga',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Wabvunza nzvimbo — zvino unoda kunzwa mhinduro. 'Turn left', 'Go straight', 'It's on the right' — aya ndiwo mashoko echiNgezi anokupa nzira.",
    culturalNote: "MuZimbabwe, vagari vanopa nzira nekuratidza kuoko: 'Pinda papi, dzoka apa, paona shop yacho.' MuLondon kana muUS, vanhu vanopa nzira nemashoko mashoma chete: 'Turn left at the lights.' Garai uchiterera mashoko aya emakumi mashanu — anodzokorora pose paunobvunza nzira.",
  },

  chunks: [
    {
      id: 'turn_left',
      target: 'Turn left',
      native: 'Tendeukira kuruboshwe',
      literal: 'Turn left',
      emoji: '⬅️',
      phonetic: 'TURN-LEFT',
      audioRef: null,
    },
    {
      id: 'go_straight',
      target: 'Go straight',
      native: 'Enda zvakananga',
      literal: 'Go straight',
      emoji: '⬆️',
      phonetic: 'GOH-STRAYT',
      audioRef: null,
    },
    {
      id: 'its_on_the_right',
      target: "It's on the right",
      native: 'Iri kurudyi',
      literal: 'It-is on the right',
      emoji: '➡️',
      phonetic: 'its-on-thuh-RYT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Direction verbs',
    explanation: "MuChiNgezi, mirairo yenzira inoshandisa verb pakutanga: 'Turn ___', 'Go ___', 'Take ___'. Inonzwika seyakaomarara asi haisi — ndiyo nzira yekutaura zvichipa nzira pasina kushandisa 'please' kana 'you should'. Mhinduro yenzvimbo inotanga ne 'It's on/at ___': 'It's on the right', 'It's at the corner'.",
    examples: [
      { target: 'Turn left',           native: 'Tendeukira kuruboshwe' },
      { target: 'Go straight',         native: 'Enda zvakananga' },
      { target: "It's on the right",   native: 'Iri kurudyi' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mirairo yenzira',
      pairs: [
        { left: 'Turn left',         right: 'Tendeukira kuruboshwe' },
        { left: 'Go straight',       right: 'Enda zvakananga' },
        { left: "It's on the right", right: 'Iri kurudyi' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kupa nzira',
      prompt: 'Tendeukira kuruboshwe',
      correct: [
        'Turn left',
        'Turn left.',
        'turn left',
        'Take a left',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuratidza pekuona shop',
      prompt: 'Iri kurudyi',
      correct: [
        "It's on the right",
        "It's on the right.",
        "Its on the right",
        'On the right',
        "it's on the right",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mirairo — yakananga, pasina kutendeuka',
      words: ['straight', 'Go'],
      correct: ['Go', 'straight'],
      translation: 'Enda zvakananga',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kupa nzira pamadhumba',
      sentence: '____ left at the traffic lights.',
      options: ['Turn', 'Stop', 'Drive'],
      correct: 'Turn',
      context: "'Turn ___' inoreva 'Tendeukira ___'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mhinduro — uri kuratidza kuti chinhu chiri kurudyi',
      words: ['the', 'on', "It's", 'right'],
      correct: ["It's", 'on', 'the', 'right'],
      translation: 'Iri kurudyi',
    },
  ],

  rwenDialogue: {
    intro: "Uri pamusangano weChiNgezi — conference yepaSavoy. Munhu wabvunza pekuwana cafeteria. Mupe nzira muChiNgezi.",
    lines: [
      { speaker: 'npc', target: "Hi, sorry — do you know where the cafeteria is?", native: 'Hesi, ndineurombo — unoziva pekuwana cafeteria here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sure — go straight, then turn left. It's on the right.", native: 'Hongu — enda zvakananga, wozotendeukira kuruboshwe. Iri kurudyi.', correct: true,  feedback: 'Wakwanisa — nzira yakajeka, mashoko mashoma asi anozvinzwisa.' },
          { target: "There.",                                                       native: 'Apo.',                                                          correct: false, feedback: 'Pfupi zvakanyanya — pa-conference vanhu vanoda nzira yakakwana.' },
          { target: "Go and find.",                                                 native: 'Enda undozvitsvaga.',                                            correct: false, feedback: 'Hutsika hwakareruka — pa-conference unotaura nemashoko ekupa nzira.' },
        ],
      },
      { speaker: 'npc', target: "Brilliant, thanks!", native: 'Zvakanaka, ndatenda!' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Go straight, turn left' — chete chete chinokupa nzira pose paunenge wakatorwa pekutaura nemumwe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Turn left (in English)',         correct: ['Turn left', 'Turn left.', 'turn left', 'Take a left'] },
      { prompt: "It's on the right (in English)", correct: ["It's on the right", "It's on the right.", 'On the right', "it's on the right"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira kuti munhu akabvunza nzira yekuwana imba yako. Mupe nzira yose pamuromo muChiNgezi: 'Go straight, turn left at the corner. It's on the right.' Pasina kutarisa kumashure.",
    rwenSignoff: "Anokwanisa kupa nzira anonzi muziviani weguta. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at a tech conference at the Park Plaza Westminster Bridge in London. Another delegate, who seems newer than you, has stopped you in the foyer to ask how to find the cafeteria. Give them clear walking directions in English.",
    rwenRole: "Aisha, 26, a fellow conference attendee from Lagos. Polite, slightly stressed because she's missed the lunch slot opening. Speaks clear English.",
    successCriteria: "User uses at least two of: 'Go straight', 'Turn left/right', 'It's on the left/right', responds to her thank-you appropriately ('You're welcome' / 'No problem'), and stays polite.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
