import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07-jeonhwabeonho',
  module: 3,
  lesson: 7,
  title: 'Jeonhwa Beonho — Phone & Messaging',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Made a friend? Time to swap contacts. 전화번호 (phone number), 카톡 (KakaoTalk — the messaging app every Korean uses). Asking 카톡 있어요? is the modern Korean handshake.",
    culturalNote: "KakaoTalk dominates messaging in Korea. Asking for someone's KakaoTalk is far more common than asking for their phone number; people share KakaoTalk IDs at first meeting freely.",
  },

  chunks: [
    { id: 'jeonhwa', target: '전화번호 알려주세요', native: 'Please tell me your phone number', literal: 'phone-number tell-give-please', emoji: '📞', phonetic: 'jeon-hwa beon-ho al-ryeo-ju-se-yo', audioRef: null },
    { id: 'kakao', target: '카톡 있어요?', native: 'Do you have KakaoTalk?', literal: 'KakaoTalk exist-yo?', emoji: '💬', phonetic: 'ka-tok i-sseo-yo', audioRef: null },
    { id: 'aidi', target: '아이디 뭐예요?', native: "What's your ID?", literal: 'ID what-is?', emoji: '🆔', phonetic: 'a-i-di mwo-ye-yo', audioRef: null },
  ],

  pattern: {
    name: 'Contact-swap template',
    explanation: "Three contact swaps: phone, Kakao, ID. Always polite — 알려주세요 (please tell me) softens the request.",
    examples: [
      { target: '전화번호 알려주세요', native: 'Please tell me your phone number' },
      { target: '카톡 있어요?', native: 'Do you have KakaoTalk?' },
      { target: '아이디 뭐예요?', native: "What's your ID?" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '전화번호', right: 'Phone number' },
      { left: '카톡', right: 'KakaoTalk' },
      { left: '아이디', right: 'ID / username' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Do you have KakaoTalk?', correct: ['카톡 있어요?', 'katok isseoyo'] },
    { type: 'fill_blank', instruction: 'Complete the request', sentence: '전화번호 _____.', options: ['알려주세요', '비싸요', '가세요'], correct: '알려주세요', context: 'Polite "please tell me".' },
    { type: 'build_sentence', instruction: "Build \"What's your KakaoTalk ID?\"", words: ['아이디', '카톡', '뭐예요?'], correct: ['카톡', '아이디', '뭐예요?'], translation: "What's your KakaoTalk ID?" },
    { type: 'multiple_choice', instruction: 'You just made a Korean friend. Best contact-swap line?', question: 'Pick the natural ask', options: [
      { text: '카톡 있어요?', correct: true },
      { text: '전화번호 비싸요', correct: false },
      { text: '안녕히 가세요', correct: false },
    ], explanation: 'Most Koreans default to KakaoTalk. Ask 카톡 있어요? first.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Please tell me your phone number', correct: ['전화번호 알려주세요', 'jeonhwabeonho allyeojuseyo'] },
  ],

  rwenDialogue: {
    intro: "End of a fun coffee meetup. You want to stay in touch.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '카톡 있어요?', native: 'Do you have KakaoTalk?', correct: true, feedback: 'Standard Korean contact-swap opener.' },
        { target: '전화번호 비싸요', native: 'Phone number is expensive', correct: false, feedback: 'Nonsense sentence — wrong verb.' },
        { target: '잘 부탁드립니다', native: 'Please take care of me', correct: false, feedback: "Not the contact-swap moment." },
      ]},
      { speaker: 'npc', target: '네, 있어요. 아이디 알려드릴게요!', native: "Yes, I do. I'll tell you my ID!" },
      { speaker: 'rwen', rwenLine: "카톡 있어요? — modern Korean handshake. Use it freely.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Do you have KakaoTalk?', correct: ['카톡 있어요?', 'katok isseoyo'] },
      { prompt: 'Please tell me your phone number', correct: ['전화번호 알려주세요', 'jeonhwabeonho allyeojuseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture exchanging contacts with a Korean. Practice: 카톡 있어요? → 아이디 뭐예요?",
    rwenSignoff: "Now you can keep the connection going.",
  },

  phase8: {
    scenario: "End of a Hongdae meetup with a Korean acquaintance. You want to swap KakaoTalk so you can stay in touch.",
    rwenRole: "Korean acquaintance — peer, polite, willing to share Kakao.",
    successCriteria: "User uses 카톡 있어요? as opener. Asks 아이디 뭐예요? to get the ID. Stays polite throughout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
