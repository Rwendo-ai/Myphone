import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10',
  module: 8,
  lesson: 10,
  title: 'Shopping Conversation — Full Dialogue',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Module 8 capstone. One stall, one vendor, one item — but the full conversation top to bottom: greeting, browsing, asking price, bargaining, currency choice, payment, change, goodbye. Twelve exchanges, ninety seconds. You've learned every piece. Today you string them together.",
    culturalNote: "The Zimbabwean shopping conversation is a small social ritual, not a transaction. Locals chat about the weather (kuyashisa! — it's hot!), ask where you're from (uvelaphi?), make a small joke. A 90-second exchange that's only about money feels cold; one with a 15-second human moment in the middle feels warm. Carrying a few personal phrases — 'I'm from Australia', 'Bulawayo is beautiful', 'this is my first visit' — turns a vendor into a person who'll wave at you when you walk past tomorrow.",
  },

  chunks: [
    {
      id: 'uvelaphi',
      target: 'Uvelaphi?',
      native: 'Where are you from?',
      literal: 'u- (you) + vela (come from) + -phi (where?) — common small-talk opener',
      emoji: '🌍',
      phonetic: 'oo-veh-LAH-pee',
      audioRef: null,
    },
    {
      id: 'ngivela',
      target: 'Ngivela e-Australia',
      native: "I'm from Australia",
      literal: 'ngi- (I) + vela (come from) + e- (in/from) + place name',
      emoji: '✈️',
      phonetic: 'ngee-VEH-lah eh-aw-STRAY-lee-ah',
      audioRef: null,
    },
    {
      id: 'kuyashisa',
      target: 'Kuyashisa namhlanje',
      native: "It's hot today",
      literal: 'ku- (it) + ya- (present) + shisa (be hot) + namhlanje (today)',
      emoji: '☀️',
      phonetic: 'koo-yah-SHEE-sah nahm-SHLAHN-jeh',
      audioRef: null,
    },
    {
      id: 'lokhu_okuhle',
      target: 'Lokhu kuhle kakhulu',
      native: 'This is very nice',
      literal: 'lokhu (this) + ku-hle (it-is-nice) + kakhulu (very) — admire the goods',
      emoji: '😍',
      phonetic: 'LOH-khoo KOO-shleh kah-KHOO-loo',
      audioRef: null,
    },
    {
      id: 'ngizobuya',
      target: 'Ngizobuya futhi',
      native: "I'll come back again",
      literal: 'ngi- (I) + zo- (will) + buya (return) + futhi (again)',
      emoji: '🔁',
      phonetic: 'ngee-zoh-BOO-yah FOO-tee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The 12-beat full shopping script',
    explanation: "Module 8 in one structure: 1) Sawubona — greet. 2) Lokhu kuhle — admire. 3) Uvelaphi? — small talk. 4) Ngivela e-X — answer. 5) Kuyashisa — weather quip. 6) Imalini? — price. 7) Iyibiza kakhulu — push back. 8) Ngingakhokha X — counter. 9) Kulungile — agree. 10) Ngingakhokha ngama-USD/ZiG — currency. 11) Nansi imali, siyabonga — pay. 12) Hamba kahle / Ngizobuya futhi — leave well. Not all twelve every time — but having all twelve in your toolkit means you can flow through any market scene.",
    examples: [
      { target: 'Uvelaphi?', native: 'Where are you from? (small talk)' },
      { target: 'Lokhu kuhle kakhulu', native: 'This is very nice (warm-up)' },
      { target: 'Ngizobuya futhi', native: "I'll come back — keeps the door open" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the small-talk phrase',
      pairs: [
        { left: 'Uvelaphi?', right: 'Where are you from?' },
        { left: 'Ngivela e-Australia', right: "I'm from Australia" },
        { left: 'Kuyashisa namhlanje', right: "It's hot today" },
        { left: 'Ngizobuya futhi', right: "I'll come back again" },
      ],
    },
    {
      type: 'build_sentence',
      instruction: "Build 'This (item) is very nice'",
      words: ['Lokhu', 'kuhle', 'kakhulu.'],
      correct: ['Lokhu', 'kuhle', 'kakhulu.'],
      translation: 'This is very nice.',
    },
    {
      type: 'fill_blank',
      instruction: "You're leaving — keep the door open",
      sentence: 'Ngizobuya ____.',
      options: ['futhi', 'kahle', 'kakhulu'],
      correct: 'futhi',
      context: 'Ngizobuya futhi — I\'ll come back again.',
    },
    {
      type: 'multiple_choice',
      instruction: "You arrive at a stall, point at an item, and immediately ask 'Imalini?' — no greeting, no chat. What's the cost?",
      question: 'Cultural cost:',
      options: [
        { text: "Vendor will quote you a higher 'tourist' price — skipping the human warm-up signals you're a transaction, not a relationship.", correct: true },
        { text: 'Nothing — pure transactions are the norm.', correct: false },
        { text: 'Vendor will refuse to sell.', correct: false },
      ],
      explanation: "30 seconds of greeting, weather, and small talk routinely cuts the asking price by 10-30%. The vendor is sizing you up — distant tourist (gouge) or warm visitor (fair price). Sawubona + a smile + 'kuyashisa namhlanje' = a different transaction.",
    },
  ],

  rwenDialogue: {
    intro: "Saturday afternoon, eDamu craft market. A wooden carving of a sable antelope catches your eye. The vendor is Mr Ndebele — late 50s, reading a newspaper.",
    lines: [
      { speaker: 'user', target: 'Sawubona, baba.', native: 'Hello, sir.' },
      { speaker: 'npc', target: 'Yebo, sawubona. Ngiyakubona. Ufunani namhlanje?', native: 'Yes, hello. I see you. What do you want today?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Lokhu kuhle kakhulu, baba. Imalini?', native: 'This is very nice, sir. How much?', correct: true, feedback: "He smiles — admiration first, then price. 'US$30. But the wood is mukwa — the best.' He's talking up the value. Good — engagement is on." },
          { target: 'Imalini?', native: 'How much?', correct: false, feedback: "Functional but cold. Try opening with 'Lokhu kuhle' — admire the work first. Vendors quote you better when they feel respected." },
        ],
      },
      { speaker: 'npc', target: 'US$30. Mukwa wood — kuhle kakhulu.', native: 'Thirty. Mukwa wood — very nice.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Iyibiza kakhulu. Ngingakhokha kwamatshumi amabili.', native: 'Too expensive. I can pay twenty.', correct: true, feedback: "He waves a hand: 'Hayi-bo! Kwamatshumi amabili lanhlanu — twenty-five. Last price.' The dance is on." },
          { target: 'Kulungile. US$30.', native: 'OK. Thirty.', correct: false, feedback: "First-price acceptance at a curio market = paying double. Counter at two-thirds: 'Iyibiza kakhulu. Ngingakhokha kwamatshumi amabili.'" },
        ],
      },
      { speaker: 'npc', target: 'Hayi-bo! Kwamatshumi amabili lanhlanu. Yintengo yokugcina.', native: 'Ah no! Twenty-five. Final price.' },
      { speaker: 'user', target: 'Kulungile, baba. Kwamatshumi amabili lanhlanu.', native: 'OK, sir. Twenty-five.' },
      { speaker: 'npc', target: 'Uvelaphi?', native: 'Where are you from?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngivela e-Australia. Lokhu lulwami uhambo lwami lokuqala eZimbabwe.', native: "I'm from Australia. This is my first trip to Zimbabwe.", correct: true, feedback: "He grins, hands you the carving wrapped carefully. 'Welcome, my friend. Hamba kahle — and come back tomorrow, I have a bigger one.'" },
          { target: 'Ngiyikhokha.', native: "I'll pay it.", correct: false, feedback: "He asked where you're FROM, not for payment. Answer the small talk — it's the warmth that closes the deal." },
        ],
      },
      { speaker: 'user', target: 'Nansi US$25. Siyabonga, baba. Ngizobuya futhi.', native: "Here's $25. Thanks, sir. I'll come back again." },
      { speaker: 'npc', target: 'Hamba kahle, mfowethu. Ufike kahle.', native: 'Go well, my brother. You arrived well.' },
      { speaker: 'rwen', rwenLine: "Twelve exchanges. Twelve seconds of warmth, seventy of business, eight of farewell. That's a Zimbabwean shopping conversation. You can do this in any market in the country now.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory — these are the small-talk gems.',
    prompts: [
      { prompt: 'Where are you from?', correct: ['Uvelaphi?', 'uvelaphi', 'Uvelaphi'] },
      { prompt: "I'm from Australia", correct: ['Ngivela e-Australia', 'ngivela e-australia', 'Ngivela e-australia'] },
      { prompt: "It's hot today", correct: ['Kuyashisa namhlanje', 'kuyashisa namhlanje'] },
      { prompt: 'This is very nice', correct: ['Lokhu kuhle kakhulu', 'lokhu kuhle kakhulu'] },
      { prompt: "I'll come back again", correct: ['Ngizobuya futhi', 'ngizobuya futhi'] },
    ],
  },

  mission: {
    title: 'Run the full 12-beat in one breath',
    task: "Stand in front of a mirror. Imagine the eDamu stall. Run the full sequence: Sawubona, baba → Lokhu kuhle kakhulu → Imalini? → Iyibiza kakhulu → Ngingakhokha [X] → Kulungile → Uvelaphi? → Ngivela e-[home] → Kuyashisa namhlanje → Nansi imali → Siyabonga → Hamba kahle, ngizobuya futhi. Time it. Aim for under two minutes. When you can do it cold, you're ready for any Zim market.",
    rwenSignoff: "Module 8 complete. You can shop, bargain, pay, and walk away with the vendor smiling. Halala — well done.",
  },

  phase8: {
    scenario: "Saturday afternoon at eDamu craft market, Bulawayo. You spot a wooden sable antelope carving. The vendor opens at US$30, you're aiming for around $22-25. Run the FULL 12-beat shopping conversation: greet, admire the work, bargain, do small talk while wrapping, pay, leave well with 'ngizobuya futhi' so the door stays open for tomorrow.",
    rwenRole: "Mr Ndebele (Baba Ndebele) — sable carver, late 50s, grew up in Lupane, moved to Bulawayo in 1995. Loves talking about wood. Will quote $30, drop to $25 with bargaining, and ask where you're from once the deal is set.",
    successCriteria: "User completes greeting + admiration ('Lokhu kuhle') + bargain (counter at 2/3) + small talk ('Uvelaphi?' / 'Ngivela e-...') + payment + closing ('Ngizobuya futhi'). Lands a price in the $22-26 range. Whole exchange feels human, not transactional.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
