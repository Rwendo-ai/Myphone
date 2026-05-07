import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-muhavare',
  module: 10,
  lesson: 9,
  title: 'Muhavare aur Kahawatein — Idioms & Proverbs',
  estimatedMinutes: 6,
  xpReward: 35,

  hook: {
    rwenLine: "Hindi proverbs are why people fall in love with Hindi. मुहावरे (muhavare — idioms) and कहावतें (kahawatein — proverbs) are how an Indian elder ends a long argument with one short line, and the whole room nods. Today: three proverbs that will make any Hindi speaker turn their head.",
    culturalNote: "Hindi proverbs draw from villages, festivals, the Mahabharata, and Sufi poetry — a deep well. Drop one at the right moment in conversation and you signal you've sat at the feet of someone who taught you the language, not just an app. Used carelessly, though, they sound performative. Choose the moment.",
  },

  chunks: [
    {
      id: 'jaisa_desh_vaisa_bhes',
      target: 'जैसा देश वैसा भेस — Jaisa desh vaisa bhes',
      native: 'As the country, so the dress (when in Rome)',
      literal: 'As-is country so-is attire',
      emoji: '🌏',
      phonetic: 'JAI-sa desh VAI-sa bhesh',
      audioRef: null,
    },
    {
      id: 'honi_ko_koi_nahin_taal_sakta',
      target: 'होनी को कोई नहीं टाल सकता — Honi ko koi nahin taal sakta',
      native: "No one can avoid what's destined",
      literal: 'Destiny to anyone not avert can',
      emoji: '🪔',
      phonetic: 'HO-nee ko KO-ee na-HEEN taal SAK-ta',
      audioRef: null,
    },
    {
      id: 'akele_chana_bhaad_nahin_phorta',
      target: 'अकेला चना भाड़ नहीं फोड़ता — Akela chana bhaad nahin phorta',
      native: "A single chickpea can't break the oven (unity is needed)",
      literal: 'Alone chickpea oven not break',
      emoji: '🤝',
      phonetic: 'a-KE-la CHA-na BHAAD na-HEEN PHOR-ta',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Proverbs as compressed wisdom',
    explanation: "Each Hindi proverb compresses a life lesson into one image. 'Jaisa desh vaisa bhes' (adapt where you are). 'Honi ko koi nahin taal sakta' (accept what's destined). 'Akela chana bhaad nahin phorta' (you need others). Use them when the moment calls — not as performance, but as wisdom offered.",
    examples: [
      { target: 'Jaisa desh vaisa bhes — जैसा देश वैसा भेस', native: 'When in Rome, do as the Romans' },
      { target: 'Honi ko koi nahin taal sakta — होनी को कोई नहीं टाल सकता', native: 'Destiny cannot be averted' },
      { target: 'Akela chana bhaad nahin phorta — अकेला चना भाड़ नहीं फोड़ता', native: 'Unity is needed (one chickpea cannot break the oven)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi proverb to its lesson',
      pairs: [
        { left: 'Jaisa desh vaisa bhes', right: 'Adapt where you are' },
        { left: 'Honi ko koi nahin taal sakta', right: 'Accept what is destined' },
        { left: 'Akela chana bhaad nahin phorta', right: 'Unity is needed' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "A team is trying to deliver a project alone, refusing help. Which proverb fits?",
      question: 'Which proverb fits a team refusing help?',
      options: [
        { text: 'Akela chana bhaad nahin phorta', correct: true },
        { text: 'Jaisa desh vaisa bhes', correct: false },
        { text: 'Honi ko koi nahin taal sakta', correct: false },
      ],
      explanation: "'Akela chana bhaad nahin phorta' — a single chickpea can't break the oven — perfectly captures the need for collective effort.",
    },
    {
      type: 'translate',
      instruction: 'Type the unity proverb in Romanized Hindi',
      prompt: 'A single chickpea cannot break the oven',
      correct: ['Akela chana bhaad nahin phorta', 'akela chana bhaad nahin phorta'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the destiny proverb',
      sentence: 'Honi ko koi nahin _____ sakta.',
      options: ['taal', 'sun', 'dekh'],
      correct: 'taal',
      context: 'Destiny cannot be averted by anyone.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'As the country, so the dress'",
      words: ['Jaisa', 'desh', 'vaisa', 'bhes.'],
      correct: ['Jaisa', 'desh', 'vaisa', 'bhes.'],
      translation: 'As the country, so the dress',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "No one can avert what's destined",
      correct: ['Honi ko koi nahin taal sakta', 'honi ko koi nahin taal sakta'],
    },
  ],

  rwenDialogue: {
    intro: "An elder voice joins Rwen on the call — your friend's grandfather, Dadaji, who has spent 50 years teaching Hindi literature.",
    lines: [
      {
        speaker: 'npc',
        target: 'Beta, jab tum kisi desh ki bhasha seekh lete ho, to uski aatma seekh lete ho.',
        native: "Child, when you learn a country's language, you learn its soul.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bahut sundar baat hai, Dadaji. Sach hai — jaisa desh vaisa bhes. Hindi seekhne se mera dil bhi badla.', native: "Beautiful words, Dadaji. True — as the country, so the dress. Learning Hindi has changed my heart too.", correct: true, feedback: "You received wisdom AND offered a proverb back. Dadaji nods slowly — that's the Hindi exchange of generations." },
          { target: 'Theek hai', native: "Okay", correct: false, feedback: "Receive the wisdom — 'Bahut sundar baat hai, Dadaji. Jaisa desh vaisa bhes — Hindi ne mera dil badal diya.'" },
          { target: 'Main thaka hua hoon', native: 'I am tired', correct: false, feedback: "Match the moment — 'Bahut sundar, Dadaji. Sach hai. Hindi seekhne se mera dil bhi badla.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Aapne ek muhavara use kiya. Dadaji ne suna. Yeh Hindi ka pal hai — this is a Hindi moment.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'As the country, so the dress (Hindi proverb)', correct: ['Jaisa desh vaisa bhes', 'jaisa desh vaisa bhes'] },
      { prompt: 'Unity is needed (chickpea proverb)', correct: ['Akela chana bhaad nahin phorta', 'akela chana bhaad nahin phorta'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick the one proverb that speaks to your week. Say it aloud. Then think where in your life it lands. Then say it to one person, in Hindi. Wisdom alive on a tongue is wisdom passed on.",
    rwenSignoff: "Muhavare zubaan ki rooh hain — idioms are the soul of the tongue. Phir milenge.",
  },

  phase8: {
    scenario: "Evening in your friend Arjun's family living room in Lucknow. Dadaji has just finished telling a long story about a village that fell apart over a land dispute. He looks at you and asks: 'Iss kahani par kaun sa muhavara fit hota hai?' — which idiom fits this story? You must choose ONE and explain in one Hindi sentence why.",
    rwenRole: "Dadaji — Arjun's grandfather, ~80, retired Hindi teacher; he will reward the right proverb with a slow nod and a chuckle for the wrong one. He's testing application, not memory.",
    successCriteria: "User selects 'Akela chana bhaad nahin phorta' (the unity proverb fits the divided village — NOT the destiny or country/dress proverbs) and offers a one-line Hindi reason like 'Gaon vale akele the, isliye haar gaye' (the villagers were alone, so they lost). Right proverb + simple Hindi justification = pass.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
