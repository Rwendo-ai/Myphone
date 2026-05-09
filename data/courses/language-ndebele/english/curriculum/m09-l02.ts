import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02',
  module: 9,
  lesson: 2,
  title: 'uMthwakazi — the Ndebele nation',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "If you ask a Ndebele person where they are from and they say 'kwaMthwakazi', they are not naming a town. They are naming a nation. The land between the Limpopo and the Zambezi, with Bulawayo at its heart. Knowing this word changes how you hear isiNdebele forever.",
    culturalNote: "uMthwakazi is the Ndebele kingdom-name — the polity founded by uMzilikazi kaMatshobana in the 1830s after his people crossed the Limpopo from Zululand. It refers both to the territory (roughly Matabeleland today) and to the people-as-a-nation. The name traces to one of uMzilikazi's elder advisors / mothers and means 'great gathering'. When a Ndebele speaker says 'siyiMthwakazi' — we are uMthwakazi — they are claiming a nationhood older than Zimbabwe itself. This matters. Use the word with care.",
  },

  chunks: [
    {
      id: 'umthwakazi',
      target: 'uMthwakazi',
      native: 'the Ndebele nation / kingdom / homeland',
      literal: 'u- (proper noun prefix) + Mthwakazi (name of the nation)',
      emoji: '🏛️',
      phonetic: 'oom-twah-KAH-zee',
      audioRef: null,
    },
    {
      id: 'kwa_mthwakazi',
      target: 'kwaMthwakazi',
      native: 'in / at uMthwakazi (the place)',
      literal: 'kwa- (locative: at the place of) + Mthwakazi',
      emoji: '🗺️',
      phonetic: 'kwa-m-twah-KAH-zee',
      audioRef: null,
    },
    {
      id: 'amandebele',
      target: 'amaNdebele',
      native: 'the Ndebele people',
      literal: 'ama- (plural class 6) + Ndebele',
      emoji: '🛡️',
      phonetic: 'ah-mahn-deh-BEH-leh',
      audioRef: null,
    },
    {
      id: 'isindebele',
      target: 'isiNdebele',
      native: 'the Ndebele language',
      literal: 'isi- (language prefix) + Ndebele',
      emoji: '🗣️',
      phonetic: 'ee-seen-deh-BEH-leh',
      audioRef: null,
    },
    {
      id: 'siyimthwakazi',
      target: 'SiyiMthwakazi',
      native: 'We are uMthwakazi (we are the Ndebele nation)',
      literal: 'si- (we) + yi- (are) + Mthwakazi',
      emoji: '🤝',
      phonetic: 'see-yee-m-twah-KAH-zee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The four prefixes — one root, four meanings',
    explanation: "The same root 'Ndebele' takes four different prefixes for four different meanings. 'um-' / 'umu-' for one Ndebele person, 'ama-' for the people collectively, 'isi-' for the language and the cultural way, 'kwa-' for the place. This isn't unique to Ndebele — it's how all Nguni-language ethnonyms work (umZulu / amaZulu / isiZulu / kwaZulu). Once you see the pattern, dozens of words unlock at once.",
    examples: [
      { target: 'umNdebele', native: 'one Ndebele person' },
      { target: 'amaNdebele', native: 'the Ndebele people' },
      { target: 'isiNdebele', native: 'the Ndebele language' },
      { target: 'kwaNdebele / kwaMthwakazi', native: 'in Ndebele country' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match prefix-form to meaning',
      pairs: [
        { left: 'umNdebele', right: 'one Ndebele person' },
        { left: 'amaNdebele', right: 'the Ndebele people' },
        { left: 'isiNdebele', right: 'the Ndebele language' },
        { left: 'kwaMthwakazi', right: 'in / at the Ndebele homeland' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Cultural accuracy',
      question: 'When was uMthwakazi founded as a polity?',
      options: [
        { text: 'In the 1830s, when uMzilikazi led his people north across the Limpopo.', correct: true },
        { text: 'After Zimbabwean independence in 1980.', correct: false },
        { text: 'During the colonial period by the British South Africa Company.', correct: false },
        { text: 'It was never a real kingdom.', correct: false },
      ],
      explanation: "uMthwakazi is older than Zimbabwe. uMzilikazi kaMatshobana, breaking from Shaka's Zulu kingdom, led his Khumalo-led following north through the Transvaal and across the Limpopo in the early 1830s, settling and consolidating amaNdebele as a nation around what is now Bulawayo by the late 1830s.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'We are uMthwakazi (we are the Ndebele nation)',
      correct: ['SiyiMthwakazi', 'siyiMthwakazi', 'Siyimthwakazi'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right one',
      question: "You meet a Ndebele person at a wedding. They ask 'Ukhuluma isiNdebele?' What did they ask?",
      options: [
        { text: 'Do you speak isiNdebele?', correct: true },
        { text: 'Are you a Ndebele person?', correct: false },
        { text: 'Are you from Bulawayo?', correct: false },
      ],
      explanation: "'isi-' marks the language. 'isiNdebele' = the language. To ask about being a Ndebele person you'd hear 'UngumNdebele?'.",
    },
  ],

  rwenDialogue: {
    intro: "At a family gathering in Cowdray Park, an aunt — Aunt Sibongile — asks where you are from. The answer matters. The follow-up matters more.",
    lines: [
      { speaker: 'npc', target: 'Uvela ngaphi?', native: 'Where do you come from?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngivela [your country / city]. Ngifunda isiNdebele.', native: "I'm from [your home]. I'm learning isiNdebele.", correct: true, feedback: "Aunt Sibongile beams. 'Wamukelekile kwaMthwakazi' — you are welcome in uMthwakazi." },
          { target: 'Ngingumthwakazi.', native: 'I am uMthwakazi.', correct: false, feedback: "Said with a smile, but: that is a claim of nationhood. People will love that you tried, but it is not a thing you say about yourself unless it's true. Stay with where you come from." },
          { target: 'Ngiyazi.', native: 'I know.', correct: false, feedback: "She asked you a question. Answer it. Ndebele small-talk is built on real exchange, not deflection." },
        ],
      },
      { speaker: 'npc', target: 'Wamukelekile kwaMthwakazi.', native: 'You are welcome in uMthwakazi.' },
      { speaker: 'rwen', rwenLine: "Notice she didn't say 'welcome to Zimbabwe'. She said 'welcome to uMthwakazi'. That distinction is everything." },
    ],
  },

  activeRecall: {
    instruction: 'Recall from memory.',
    prompts: [
      { prompt: 'The Ndebele nation / homeland', correct: ['uMthwakazi', 'umthwakazi', 'Umthwakazi', 'Mthwakazi'] },
      { prompt: 'In / at the Ndebele homeland', correct: ['kwaMthwakazi', 'kwamthwakazi'] },
      { prompt: 'The Ndebele people (plural)', correct: ['amaNdebele', 'amandebele', 'Amandebele'] },
      { prompt: 'The Ndebele language', correct: ['isiNdebele', 'isindebele', 'Isindebele'] },
    ],
  },

  mission: {
    title: "Find one map of uMthwakazi",
    task: "Search for a map of Matabeleland (Matabeleland North + South provinces of Zimbabwe). That is the modern footprint of uMthwakazi, with Bulawayo as its heart. Look at the rivers — the Limpopo to the south (the crossing-place), the Zambezi to the north. Hold that geography in your head while you keep learning the language.",
    rwenSignoff: "A language is not just sounds. It is a place, and a people who have walked their feet into it. Sala kuhle, mfowethu.",
  },

  phase8: {
    scenario: "You're at a small kombi rank in Bulawayo waiting for a ride to Hillside. A man your age — Sipho — strikes up a conversation when he hears you trying isiNdebele. He's curious where you're from and how you ended up learning his language. He'll be friendly but real.",
    rwenRole: "Sipho — late 20s, born in Tsholotsho, lives in Bulawayo, works at a hardware store. Proud of being Ndebele, not aggressive about it. Will gently correct you if you confuse Zimbabwe and uMthwakazi.",
    successCriteria: "User uses at least three of the four prefixed forms (umNdebele / amaNdebele / isiNdebele / kwaMthwakazi) in context. Bonus if they correctly say 'Ngifunda isiNdebele' (I'm learning isiNdebele) without claiming to BE Ndebele themselves.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
