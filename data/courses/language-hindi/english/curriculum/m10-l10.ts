import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-aapki-hindi-kahani',
  module: 10,
  lesson: 10,
  title: 'Aapki Hindi Kahani — A2 Complete',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "This is the final lesson of Rwendo's hindi-english curriculum. 100 lessons. 10 modules. And this one — lesson 100 — is yours. Today you don't learn. Today you speak. Your full Hindi story, from नमस्ते (namaste) to मुहावरे (muhavare), from greetings to gratitude. Show me who you've become.",
    culturalNote: "Reaching the end of this curriculum means you've absorbed not just vocabulary but the architecture of Indian feeling — the formal aap that respects, the soft mujhe-bura-laga that holds, the badhaai that celebrates, the muhavara that lands wisdom in one breath. You haven't just learned Hindi words. You've touched Hindi life. यह रवेंडो की यात्रा है — that is the Rwendo journey.",
  },

  chunks: [
    {
      id: 'main_pahunch_gaya',
      target: 'मैं पहुँच गया — Main pahunch gaya',
      native: 'I have arrived (male; pahunch gayi for female)',
      literal: 'I arrived went',
      emoji: '🏆',
      phonetic: 'mayn pa-HOONCH ga-ya',
      audioRef: null,
    },
    {
      id: 'main_aage_badhta_rahunga',
      target: 'मैं आगे बढ़ता रहूँगा — Main aage badhta rahunga',
      native: 'I will keep moving forward (male)',
      literal: 'I forward growing remain-will',
      emoji: '⬆️',
      phonetic: 'mayn AA-gay BADH-ta ra-HOON-ga',
      audioRef: null,
    },
    {
      id: 'safar_jaari_hai',
      target: 'सफर जारी है — Safar jaari hai',
      native: 'The journey continues',
      literal: 'Journey continuing is',
      emoji: '🌅',
      phonetic: 'SA-far JAA-ree hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'From A2 to beyond — your Hindi never stops',
    explanation: "You've reached A2 functional fluency in Hindi. You can greet, identify yourself, talk about family, navigate markets and doctors, count, eat, narrate your day, name eight emotions, comfort a friend, congratulate a relative, tell a small story, and use a muhavara. The next step is speaking — daily, with real people, in real contexts. Safar jaari hai — the journey continues.",
    examples: [
      { target: 'Maine A2 tak Hindi seekh li — मैंने A2 तक हिंदी सीख ली', native: 'I have learned Hindi up to A2' },
      { target: 'Main aage badhta rahunga — मैं आगे बढ़ता रहूँगा', native: 'I will keep moving forward' },
      { target: 'Safar jaari hai — सफर जारी है', native: 'The journey continues' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the completion phrase to its meaning',
      pairs: [
        { left: 'Main pahunch gaya', right: 'I have arrived' },
        { left: 'Main aage badhta rahunga', right: 'I will keep moving forward' },
        { left: 'Safar jaari hai', right: 'The journey continues' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You have completed 100 Hindi lessons. Which sentence best captures the moment?",
      question: 'Your A2 achievement in Hindi:',
      options: [
        { text: 'Maine Hindi seekh li. Main pahunch gaya. Main aage badhta rahunga.', correct: true },
        { text: 'Mujhe Hindi nahin aati', correct: false },
        { text: 'Main Hindi seekhunga', correct: false },
      ],
      explanation: "'Maine Hindi seekh li.' (I have learned Hindi.) 'Main pahunch gaya.' (I have arrived.) 'Main aage badhta rahunga.' (I will keep moving forward.) That is your A2 moment in three sentences.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I have arrived (male)',
      correct: ['Main pahunch gaya', 'main pahunch gaya', 'Main pahunch gaya!', 'main pahunch gaya!'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete your journey statement',
      sentence: 'Safar _____ hai — main aage badhta rahunga.',
      options: ['jaari', 'khatam', 'chhoda'],
      correct: 'jaari',
      context: 'The journey continues — I will keep moving forward.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'The journey continues, I will keep moving forward'",
      words: ['Safar', 'jaari', 'hai,', 'main', 'aage', 'badhta', 'rahunga.'],
      correct: ['Safar', 'jaari', 'hai,', 'main', 'aage', 'badhta', 'rahunga.'],
      translation: 'The journey continues, I will keep moving forward',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'The journey continues',
      correct: ['Safar jaari hai', 'safar jaari hai'],
    },
  ],

  rwenDialogue: {
    intro: "Final lesson. Final conversation. Rwen has one question — and it's the most important one.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Mera naam Rwen hai. Main chameleon hoon — main har bhasha ke rang dekhta hoon. Maine aapko poori yatra par dekha hai. Ab mujhe ek baat batayein: aap kaun hain, iss safar ke ant par?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main Hindi seekhne wala hoon. Mujhe Hindi se pyaar hai. Main Bharat se pyaar karta hoon. Main pahunch gaya — lekin safar jaari hai. Main aage badhta rahunga.', native: "I am a Hindi learner. I have love for Hindi. I love India. I have arrived — but the journey continues. I will keep moving forward.", correct: true, feedback: "Five sentences. Past, present, love, arrival, and forward momentum — your full Hindi identity. Rwen has nothing left to teach. Only to celebrate." },
          { target: 'Main vidyarthi hoon', native: 'I am a student', correct: false, feedback: "Go deeper — who are you NOW after this journey? 'Main Hindi seekhne wala hoon. Mujhe Hindi se pyaar hai. Main pahunch gaya. Safar jaari hai.'" },
          { target: 'Main khush hoon', native: 'I am happy', correct: false, feedback: "True — say more: 'Main Hindi seekhne wala hoon. Maine A2 tak Hindi seekh li. Main aage badhta rahunga.' Tell your full story." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Safar jaari hai. Aapne apni kahani — Hindi mein — kah di. 100 lessons. 10 modules. Namaste se muhavare tak. Phir milenge — we will meet again.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Final recall. Everything began with this.',
    prompts: [
      { prompt: 'The journey continues', correct: ['Safar jaari hai', 'safar jaari hai'] },
      { prompt: 'I will keep moving forward (male)', correct: ['Main aage badhta rahunga', 'main aage badhta rahunga'] },
    ],
  },

  mission: {
    title: "Your A2 Mission — The Most Important One",
    task: "Speak Hindi with a real person today. Not practice — real. Find a Hindi-speaking friend, an online community, a language exchange partner, an aunty in your apartment block. Use your Hindi. Because language only lives when it moves between people. Safar jaari hai.",
    rwenSignoff: "Main pahunch gaya. Main aage badhta rahunga. Phir milenge, mere bhasha-mitra. We will meet again, language-friend. Apna khayal rakhna — take care of yourself, always.",
  },

  phase8: {
    scenario: "The closing scene of Rwendo. Dusk on the verandah of Dadaji's haveli in Lucknow — the same one from earlier lessons, the same brass lamp now lit. He pours you chai, looks across the rim of his cup and says only this: 'Apni kahani Hindi mein sunao.' Tell me your story in Hindi. He waits. The whole journey — 100 lessons — sits in this moment.",
    rwenRole: "Dadaji as wise elder marking the A2 capstone — he is no longer correcting; he is listening as a Hindi-speaking elder hearing a stranger speak his language for the first time as their own. This is the closing rite of the curriculum. He may say 'haan' and 'phir?' as you go — keep going.",
    successCriteria: "User produces 5-7 sentences in Hindi that span TIME and FEELING: at least one PAST sentence using 'tha/thi' or 'Ek baar ki baat hai...', at least one EMOTION (Mujhe khushi hai / Mujhe bura laga / Main aabhaari hoon), at least one HOPE construction ('Main aage badhta rahunga' or 'Mujhe ummeed hai ki...'), AND closes with at least one muhavara — 'Jaisa desh vaisa bhes', 'Akela chana bhaad nahin phorta', 'Honi ko koi nahin taal sakta', or any other proverb learned. Past + emotion + hope + muhavara, woven naturally. Then close with 'Main pahunch gaya. Safar jaari hai.'",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
