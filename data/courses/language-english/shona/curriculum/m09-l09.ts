import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-asking-help',
  module: 9,
  lesson: 9,
  title: 'Asking for help while travelling — Kukumbira rubatsiro',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Wakasvika muguta idzva. Unoda chii chekutarisa, kuwana, kuita pakati pemaawa mashoma. Mashoko ari nyore: 'Could you help me?', 'I don't know this area', 'Could you write it down?'. Iwo ndiwo zvinokupa kibhokisi rekuwana zviripo.",
    culturalNote: "MuChiNgezi, mubvunzo wakanaka unotanga ne 'Could' kana 'Would' — havasi 'Can you' (yakareruka) kana 'Help me!' (yakaomarara). 'Could you help me?' = 'Mungandibatsire here?' — yakanyanya hutsika. Pakukumbira mumwe kunyora pasi (pakuti wadzokere kunzvimbo), 'Could you write it down?' inoshanda chete chete pa-concierge, pa-tour guide, pa-cabbie.",
  },

  chunks: [
    {
      id: 'could_you_help_me',
      target: 'Could you help me?',
      native: 'Mungandibatsire here?',
      literal: 'Could you help me?',
      emoji: '🙏',
      phonetic: 'KOOD-yoo-HELP-mee',
      audioRef: null,
    },
    {
      id: 'i_dont_know_area',
      target: "I don't know this area.",
      native: 'Handizivi nzvimbo iyi.',
      literal: 'I do-not know this area.',
      emoji: '🗺️',
      phonetic: 'ay-DOHNT-NOH-this-AIR-ee-uh',
      audioRef: null,
    },
    {
      id: 'could_you_write_it_down',
      target: 'Could you write it down?',
      native: 'Mungandinyorere here?',
      literal: 'Could you write it down?',
      emoji: '📝',
      phonetic: 'KOOD-yoo-RYT-it-DOWN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite request — Could you',
    explanation: "'Could you ___?' chiratidzo chemubvunzo wakanyanya kunaka pakukumbira chinhu kubva kumumwe. Ndizvo zvinotaurwa pa-concierge, pa-restaurant, pa-station. Cherechedza: 'Could you' inonzwika sehutsika kupinda 'Can you' — kunyange tisingapindurwa. Kuwedzera 'please' panopera kunoita kuti zvinzwike sezvinopa rukudzo: 'Could you help me, please?'.",
    examples: [
      { target: 'Could you help me?',         native: 'Mungandibatsire here?' },
      { target: "I don't know this area.",     native: 'Handizivi nzvimbo iyi.' },
      { target: 'Could you write it down?',    native: 'Mungandinyorere here?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mibvunzo yakanaka',
      pairs: [
        { left: 'Could you help me?',         right: 'Mungandibatsire here?' },
        { left: "I don't know this area",     right: 'Handizivi nzvimbo iyi' },
        { left: 'Could you write it down?',    right: 'Mungandinyorere here?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kukumbira rubatsiro nehutsika',
      prompt: 'Mungandibatsire here?',
      correct: [
        'Could you help me?',
        'Could you help me, please?',
        'Can you help me?',
        'could you help me?',
        'Would you help me?',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuratidza kuti haunzwisise nzvimbo iyi',
      prompt: 'Handizivi nzvimbo iyi.',
      correct: [
        "I don't know this area.",
        "I don't know this area",
        "I'm not familiar with this area.",
        "i don't know this area.",
        "I don't know the area.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga — uri kukumbira munhu kunyora address yacho',
      words: ['it', 'write', 'Could', 'down', 'you'],
      correct: ['Could', 'you', 'write', 'it', 'down'],
      translation: 'Mungandinyorere here?',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri pa-concierge',
      sentence: '____ you recommend a good restaurant nearby?',
      options: ['Could', 'Why', 'How'],
      correct: 'Could',
      context: "'Could you recommend ___?' = mubvunzo wehutsika wekukumbira chiziviso.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kukumbira tour pamapostara',
      prompt: 'Mungandinongedzere zvekutarisa muLondon mumazuva maviri here?',
      correct: [
        'Could you recommend things to see in London in two days?',
        'Could you recommend things to do in London in two days?',
        'Could you suggest things to see in London in two days?',
        'Could you recommend what to see in London in two days?',
        'could you recommend things to see in London in two days?',
      ],
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-concierge desk paLondon Marriott. Une mazuva maviri chete muUK. Kumbira plan kubva kuvasinatsi.",
    lines: [
      { speaker: 'npc', target: "Hi there — how can I help?", native: 'Hesi — ndingakubatsira sei?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Could you help me? I don't know this area, and I only have two days in London. Could you recommend things to see?", native: 'Mungandibatsire here? Handizivi nzvimbo iyi, ndine mazuva maviri chete muLondon. Mungandinongedzere zvekutarisa here?', correct: true,  feedback: 'Wakwanisa — wakapindukura dambudziko nemubvunzo nehutsika hwakareruka.' },
          { target: "Show me London.",                                                                                                              native: 'Ndiratidze London.',                                                                                              correct: false, feedback: 'Yakaomarara — wedzera "Could you" uye tsanangura situation yako.' },
          { target: "Tour.",                                                                                                                        native: 'Tour.',                                                                                                              correct: false, feedback: "Pfupi zvakanyanya — taura mubvunzo wakakwana." },
        ],
      },
      { speaker: 'npc', target: "Of course! For two days, I'd say the British Museum, Tower of London, and a Thames walk. Shall I write it down for you?", native: 'Saka! Pamazuva maviri, ndingati British Museum, Tower of London, neThames walk. Ndokunyorera here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, please — could you write it down? Thank you so much.", native: 'Hongu, ndapota — mungandinyorere here? Ndatenda chaizvo.', correct: true,  feedback: 'Wakwanisa — wakapfava nehutsika hwakakwana.' },
          { target: "Write.",                                                              native: 'Nyora.',                                                  correct: false, feedback: "Yakaomarara — wedzera 'Could you' uye 'please'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'Could you ___?' inokupa zvose paunenge wakananga pa-concierge — yakanyanyokosha kupinda app yega yega.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Could you help me? (in English)',     correct: ['Could you help me?', 'Could you help me, please?', 'Can you help me?', 'could you help me?'] },
      { prompt: 'Could you write it down? (in English)', correct: ['Could you write it down?', 'Could you write it down, please?', 'Can you write it down?', 'could you write it down?'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira kuti uri pa-hotera muUK kana muUS. Itira pamuromo: 'Could you help me? I don't know this area. Could you recommend a good restaurant?' uchitevera ne 'Could you write it down?'. Pasina kutarisa kumashure.",
    rwenSignoff: "Anokwanisa kukumbira nehutsika, anowana zvose. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at the concierge desk of your hotel in central London. You have just two days in the city, never visited before, and want a sensible tourist plan. Ask the concierge for recommendations and ask them to write it down for you.",
    rwenRole: "Marcus, 38, hotel concierge. Knowledgeable, enthusiastic, will recommend 3-4 sights and offer to write them down. Polished British English.",
    successCriteria: "User asks 'Could you help me?', explains 'I don't know this area' or 'I only have two days', accepts the recommendation, asks 'Could you write it down?', and thanks him warmly.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
