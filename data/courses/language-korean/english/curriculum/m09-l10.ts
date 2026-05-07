import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-travel-conversation',
  module: 9,
  lesson: 10,
  title: 'Travel Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 9 cap. Subway, taxi, KTX, directions, time, airport, hotel, emergency, shopping. A whole travel day from arrival to bedtime.",
    culturalNote: "Korean travel rewards politeness and clear short sentences. Most service workers will switch to slow, helpful Korean if you start polite. Naver Map and KakaoMap are your friends — combine with Korean phrases for full coverage.",
  },

  chunks: [
    { id: 'review_kkaji', target: '___까지 가주세요', native: 'Please go to ___', literal: 'until go-give-please', emoji: '➡️', phonetic: '___-kka-ji ga-ju-se-yo', audioRef: null },
    { id: 'review_eolmana', target: '얼마나 걸려요?', native: 'How long?', literal: 'how-long take-yo?', emoji: '⏳', phonetic: 'eol-ma-na geol-ryeo-yo', audioRef: null },
    { id: 'review_dowa', target: '도와주세요', native: 'Please help me', literal: 'help-give-please', emoji: '🆘', phonetic: 'do-wa-ju-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'The Travel Stack',
    explanation: "Nine tools cover most Korean travel. Chain them as the day demands.",
    examples: [
      { target: '___까지 가주세요', native: 'Taxi' },
      { target: '___ 어디예요?', native: 'Direction' },
      { target: '얼마나 걸려요?', native: 'Time' },
      { target: '예약했어요', native: 'Hotel' },
      { target: '도와주세요', native: 'Emergency' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match tool to function', pairs: [
      { left: '___까지 가주세요', right: 'Taxi' },
      { left: '___ 어디예요?', right: 'Direction' },
      { left: '예약했어요', right: 'Hotel' },
    ]},
    { type: 'multiple_choice', instruction: "Best Korean for 'How long does it take to Hongdae?'", question: 'Pick the natural ask', options: [
      { text: '홍대까지 얼마나 걸려요?', correct: true },
      { text: '홍대 비싸요?', correct: false },
      { text: '홍대 안녕', correct: false },
    ], explanation: 'Place + 까지 + 얼마나 걸려요? — natural travel time question.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Please go to Incheon Airport', correct: ['인천공항까지 가주세요', 'incheongonghang kkaji gajuseyo'] },
    { type: 'fill_blank', instruction: 'Hotel check-in', sentence: '_____. 제 이름은 Sam이에요.', options: ['예약했어요', '비싸요', '안녕히'], correct: '예약했어요', context: 'Confirm reservation.' },
    { type: 'build_sentence', instruction: 'Build "Stop here please"', words: ['세워주세요', '여기서'], correct: ['여기서', '세워주세요'], translation: 'Stop here please.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Please help me', correct: ['도와주세요', 'dowajuseyo'] },
  ],

  rwenDialogue: {
    intro: "Full travel day: arrive at Incheon, taxi to hotel, evening at Hongdae, return by subway.",
    lines: [
      { speaker: 'rwen', rwenLine: "Just landed at Incheon. Taxi to your Hongdae hotel. Open the conversation." },
      { speaker: 'user', userChoices: [
        { target: '아저씨, 홍대까지 가주세요', native: 'Sir, please go to Hongdae', correct: true, feedback: 'Address + 까지 + 가주세요. Travel-Korean fluent.' },
        { target: '홍대 비싸요?', native: 'Is Hongdae expensive?', correct: false, feedback: 'Wrong shape.' },
        { target: '안녕', native: 'Hi (banmal)', correct: false, feedback: 'Banmal with stranger taxi driver = wrong.' },
      ]},
      { speaker: 'npc', target: '얼마나 걸려요?', native: 'How long does it take?' },
      { speaker: 'user', userChoices: [
        { target: '한 시간 정도예요', native: 'About an hour', correct: true, feedback: 'Native hour + 정도/쯤. Travel time.' },
        { target: '한 시 정도예요', native: '1 o\'clock-ish (wrong word)', correct: false, feedback: '시간 = duration. 시 = clock-hour.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'rwen', rwenLine: 'Arrived at hotel — check in.' },
      { speaker: 'user', userChoices: [
        { target: '안녕하세요. 예약했어요. 제 이름은 Sam이에요', native: 'Hello. I have a reservation. My name is Sam', correct: true, feedback: 'Hotel template — clean.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong.' },
        { target: '안녕', native: 'Hi (banmal)', correct: false, feedback: 'Banmal at hotel desk = bad.' },
      ]},
      { speaker: 'rwen', rwenLine: "Full travel day in Korean — taxi, time, hotel. Module 9 closed. You can travel solo.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Please go to Hongdae', correct: ['홍대까지 가주세요', 'hongdae kkaji gajuseyo'] },
      { prompt: 'I have a reservation', correct: ['예약했어요', 'yeyakhaesseoyo'] },
    ],
  },

  mission: {
    title: "Your Module 9 Mission",
    task: "Sketch a Korea trip. For each leg (taxi, train, hotel, ER if needed), write the Korean line.",
    rwenSignoff: "Module 9 closed. Korea is now navigable. Module 10 = the soul.",
  },

  phase8: {
    scenario: "Full Korea travel day from Incheon arrival to Hongdae hotel check-in to evening shopping.",
    rwenRole: "Multiple — taxi driver, hotel desk, shop staff.",
    successCriteria: "User chains taxi (까지 가주세요), hotel (예약했어요), shopping (입어봐도 돼요?). Stays polite throughout. Uses correct addresses (아저씨/사장님).",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
