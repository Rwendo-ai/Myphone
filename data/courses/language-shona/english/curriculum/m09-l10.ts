import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-harare',
  module: 9,
  lesson: 10,
  title: 'Navigating Harare — Full Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Harare. The capital. Population 2 million. Every direction, every transport, every landmark — all in Shona. Today you navigate from the airport to the city centre, by kombi, using everything from Module 9. Welcome to Harare.",
    culturalNote: "Harare (formerly Salisbury) is a city of contrasts — colonial architecture alongside modern developments, formal business districts beside bustling informal markets. To navigate it confidently in Shona is to see the city as it actually is.",
  },

  chunks: [
    {
      id: 'ndirikusvika_harare',
      target: 'Ndirikusvika Harare',
      native: 'I am arriving in Harare',
      literal: 'I-am-arriving Harare',
      emoji: '🏙️',
      phonetic: 'ndi-ri-ku-SVI-ka ha-RA-re',
      audioRef: null,
    },
    {
      id: 'chiteshi_chekombi',
      target: 'Chiteshi chekombi',
      native: 'Kombi station / Bus stop',
      literal: 'Station of-kombi',
      emoji: '🚌',
      phonetic: 'chi-TE-shi che-KOM-bi',
      audioRef: null,
    },
    {
      id: 'wasvika',
      target: 'Wasvika!',
      native: 'You have arrived!',
      literal: 'You-have-arrived!',
      emoji: '🎉',
      phonetic: 'wa-SVI-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kusvika — to arrive (the journey\'s end verb)',
    explanation: "'Kusvika' means to arrive, to reach, to get to. Ndirikusvika (I am arriving), Ndasvika (I have arrived), Wasvika! (You have arrived!). It's also used metaphorically — Wasvika! can mean 'You got it!' when someone understands something.",
    examples: [
      { target: 'Ndasvika', native: 'I have arrived' },
      { target: 'Wasvika!', native: 'You have arrived! / You got it!' },
      { target: 'Tinosvika rinhi?', native: 'When do we arrive?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the travel phrase to its meaning',
      pairs: [
        { left: 'Ndirikusvika Harare', right: 'I am arriving in Harare' },
        { left: 'Chiteshi chekombi', right: 'Kombi station' },
        { left: 'Wasvika!', right: 'You have arrived!' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You've arrived at your destination. What do you say?",
      question: 'I have arrived:',
      options: [
        { text: 'Ndasvika!', correct: true },
        { text: 'Ndirikusvika', correct: false },
        { text: 'Ndichasvika', correct: false },
      ],
      explanation: "'Ndasvika!' — I have arrived (completed past). Use it when you've reached your destination.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I have arrived',
      correct: ['Ndasvika', 'ndasvika', 'Ndasvika!', 'ndasvika!'],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask when you arrive',
      sentence: 'Tino_____ rinhi kuHarare?',
      options: ['svika', 'enda', 'taura'],
      correct: 'svika',
      context: 'When do we arrive in Harare?',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Where is the kombi station?'",
      words: ['Chiteshi', 'chekombi', 'chiri', 'kupi?'],
      correct: ['Chiteshi', 'chekombi', 'chiri', 'kupi?'],
      translation: 'Where is the kombi station?',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Kombi station',
      correct: ['Chiteshi chekombi', 'chiteshi chekombi'],
    },
  ],

  rwenDialogue: {
    intro: "The full Harare navigation: airport → kombi station → city centre. You're doing this.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndibatsire, ndapota. Chiteshi chekombi chiri kupi? Ndinoda kuenda kutown.', native: 'Please help me. Where is the kombi station? I want to go to town.', correct: true, feedback: "Polite, specific need, clear destination. You're navigating Harare." },
          { target: 'Ndeapi nzira yetown?', native: 'Which is the way to town?', correct: false, feedback: "Good — but ask about the kombi station first: 'Chiteshi chekombi chiri kupi?' Then you can take a kombi to town." },
          { target: 'Ndinoda kombi', native: 'I want a kombi', correct: false, feedback: "Ask where to find it first: 'Chiteshi chekombi chiri kupi? Ndinoda kuenda kutown.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Enda mberi, dzokorora kurudyi — chiteshi iri pedyo nenhino.',
        native: 'Go forward, turn right — the station is very nearby.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndatenda zvikuru. Mberi, kurudyi — ndanzwisisa.', native: 'Thank you very much. Forward, right — I understand.', correct: true, feedback: "Confirmed the directions back. Now you walk with confidence." },
          { target: 'Zvakanaka', native: "That's fine", correct: false, feedback: "Confirm the directions: 'Mberi, kurudyi — ndanzwisisa. Ndatenda zvikuru.'" },
          { target: 'Ndanzwisisa', native: 'I understand', correct: false, feedback: "Repeat the key directions back: 'Mberi, kurudyi — ndanzwisisa. Ndatenda zvikuru.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You found the kombi station. You rode to town. You navigated Harare in Shona. Module 9 complete. Zimbabwe is no longer foreign.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I have arrived', correct: ['Ndasvika', 'ndasvika'] },
      { prompt: 'Kombi station', correct: ['Chiteshi chekombi', 'chiteshi chekombi'] },
    ],
  },

  mission: {
    title: "Your Module 9 Mission",
    task: "Plan a Shona journey today — real or imaginary. From where you are to somewhere specific. Use: Ndeapi nzira ye[place]? → Enda mberi → Dzokorora kurudyi/kuruboshwe → Ndasvika! Make the whole journey in Shona.",
    rwenSignoff: "Wasvika! You navigated Module 9. Every road in Zimbabwe now has a Shona name for you. Module 10 — the heart — begins next. Tichaonana.",
  },

  phase8: {
    scenario: "Capstone run: from the airport you must reach the city centre via the Mbare kombi rank using everything from Module 9 — find chiteshi chekombi, board the right kombi, ask the conductor to drop you near a landmark, and confirm 'Ndasvika' on arrival. Multiple Shona speakers, one journey, no English fallback.",
    rwenRole: "Brian — kombi conductor on the Mbare-Avondale route (the recurring conductor from l03 and l05), he's now your final examiner; he runs the kombi, calls the route, and only stops where you tell him to using the full direction stack you've learned.",
    successCriteria: "User asks 'Chiteshi chekombi chiri kupi?' to find the rank, states destination with 'Ndinoda kuenda kutown', confirms directions back ('Mberi, kurudyi — ndanzwisisa'), shouts 'Mira pano!' at the right landmark, and closes the journey with 'Ndasvika!' — chaining at least four Module 9 patterns into one continuous Shona journey without dropping into English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
