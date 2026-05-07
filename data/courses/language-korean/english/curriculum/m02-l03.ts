import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-jweseonghamnida',
  module: 2,
  lesson: 3,
  title: 'Joesonghamnida — Sorry / Excuse Me',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "죄송합니다 is sorry. 미안해요 is also sorry but warmer/lighter. 저기요 is excuse-me-to-get-attention. Three different functions in English collapsed into 'sorry' — Korean splits them.",
    culturalNote: "Apologies in Korea are layered. A small bow + 죄송합니다 fixes most accidental contact. Calling a waiter? 저기요 (literally 'over there'). Don't use 미안해요 with elders — too casual.",
  },

  chunks: [
    { id: 'jwesong', target: '죄송합니다', native: 'I am sorry (formal)', literal: 'crime-existence-am', emoji: '🙇', phonetic: 'joe-song-ham-ni-da', audioRef: null },
    { id: 'mianhaeyo', target: '미안해요', native: "I'm sorry (polite/warm)", literal: 'sorry-yo', emoji: '😞', phonetic: 'mi-an-hae-yo', audioRef: null },
    { id: 'jeogiyo', target: '저기요', native: 'Excuse me (to get attention)', literal: 'over-there-yo', emoji: '✋', phonetic: 'jeo-gi-yo', audioRef: null },
  ],

  pattern: {
    name: 'Three sorries, three uses',
    explanation: "죄송합니다 = formal apology, fixing a real mistake. 미안해요 = warm/polite sorry between peers. 저기요 = NOT an apology — used to flag down a waiter or stranger.",
    examples: [
      { target: '죄송합니다', native: 'Bumped into an elder' },
      { target: '미안해요', native: "Late to a friend's coffee" },
      { target: '저기요!', native: 'Calling the waiter over' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to use', pairs: [
      { left: '죄송합니다', right: 'Formal apology' },
      { left: '미안해요', right: "Warm peer-level sorry" },
      { left: '저기요', right: 'Get someone\'s attention' },
    ]},
    { type: 'multiple_choice', instruction: "You bump into an older man on the Seoul subway. What do you say?", question: 'Pick the right phrase', options: [
      { text: '죄송합니다', correct: true },
      { text: '저기요', correct: false },
      { text: '안녕', correct: false },
    ], explanation: 'Elder + accidental contact = formal apology. 저기요 is for getting attention, not apologizing.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am sorry (formal)', correct: ['죄송합니다', 'joesonghamnida'] },
    { type: 'fill_blank', instruction: 'Call the waiter over at a restaurant', sentence: '_____! 메뉴 주세요.', options: ['저기요', '죄송합니다', '안녕히 가세요'], correct: '저기요', context: 'Get attention, then order.' },
    { type: 'build_sentence', instruction: 'Build "Excuse me, water please"', words: ['저기요,', '주세요', '물'], correct: ['저기요,', '물', '주세요'], translation: 'Excuse me, water please.' },
    { type: 'translate', instruction: 'Type in Korean — warm/polite sorry', prompt: "I'm sorry (to a friend)", correct: ['미안해요', 'mianhaeyo'] },
  ],

  rwenDialogue: {
    intro: "You're at a Hongdae restaurant. You need to flag the server, then apologize for the noise of dropping chopsticks.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '저기요!', native: 'Excuse me! (attention)', correct: true, feedback: 'Right tool — 저기요 calls them over.' },
        { target: '죄송합니다', native: 'I am sorry', correct: false, feedback: "You haven't done anything yet — 저기요 is for attention." },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '네, 부르셨어요?', native: 'Yes, you called?' },
      { speaker: 'user', userChoices: [
        { target: '죄송합니다, 젓가락 떨어졌어요', native: "Sorry, my chopsticks fell", correct: true, feedback: 'Apology + reason — clear and polite.' },
        { target: '저기요', native: 'Excuse me', correct: false, feedback: "They're already here. Now you apologize." },
        { target: '미안해', native: 'Sorry (banmal)', correct: false, feedback: 'Banmal to a server = rude.' },
      ]},
      { speaker: 'rwen', rwenLine: "Three sorries — and you've now used the right one for each situation.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I am sorry (formal apology)', correct: ['죄송합니다', 'joesonghamnida'] },
      { prompt: 'Excuse me (to get attention)', correct: ['저기요', 'jeogiyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture three apology moments today. Match each to 죄송합니다 / 미안해요 / 저기요. Practice picking the right one.",
    rwenSignoff: "Sorry has three flavors in Korean. Now you taste each one.",
  },

  phase8: {
    scenario: "Busy restaurant in Itaewon. You bump into a waiter, need to call another server, and apologize to a nearby elder you splashed slightly.",
    rwenRole: "Multiple — waiter (polite), server (call over with 저기요), elder (formal apology).",
    successCriteria: "User uses 저기요 to call the server, 죄송합니다 to apologize to the elder. Does NOT confuse 저기요 with an apology.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
