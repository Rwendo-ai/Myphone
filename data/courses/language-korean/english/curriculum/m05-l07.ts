import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-namjachingu',
  module: 5,
  lesson: 7,
  title: 'Namjachingu / Yeojachingu — Boyfriend & Girlfriend',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "남자친구 (boyfriend) and 여자친구 (girlfriend) — literally 'man friend / woman friend'. Often shortened to 남친 / 여친. Add 있어요? to ask if someone has one.",
    culturalNote: "Korean dating culture is open small talk — Koreans often ask 남친/여친 있어요? early. Same softening rule: 아니요, 아직요 if you don\'t want to elaborate.",
  },

  chunks: [
    { id: 'namjachingu', target: '남자친구', native: 'Boyfriend', literal: 'man-friend', emoji: '💑', phonetic: 'nam-ja-chin-gu', audioRef: null },
    { id: 'yeojachingu', target: '여자친구', native: 'Girlfriend', literal: 'woman-friend', emoji: '💑', phonetic: 'yeo-ja-chin-gu', audioRef: null },
    { id: 'isseoyo_q', target: '남친 있어요?', native: 'Do you have a boyfriend?', literal: 'boyfriend-short exist-yo?', emoji: '❓', phonetic: 'nam-chin i-sseo-yo', audioRef: null },
  ],

  pattern: {
    name: 'X 있어요/없어요',
    explanation: '있어요 = to exist / to have. 없어요 = to not exist / not have. Used for relationships, possessions, KakaoTalk — anything binary.',
    examples: [
      { target: '남친 있어요?', native: 'Do you have a boyfriend?' },
      { target: '여친 없어요', native: "I don't have a girlfriend" },
      { target: '카톡 있어요?', native: 'Do you have KakaoTalk?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '남자친구', right: 'Boyfriend' },
      { left: '여자친구', right: 'Girlfriend' },
      { left: '있어요?', right: 'Do you have? / Is there?' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Do you have a boyfriend?', correct: ['남자친구 있어요?', '남친 있어요?', 'namjachingu isseoyo'] },
    { type: 'fill_blank', instruction: "Soft answer if you don't have one", sentence: '아니요, _____.', options: ['아직요', '비싸요', '주세요'], correct: '아직요', context: '"Not yet" — same softener as marriage question.' },
    { type: 'build_sentence', instruction: "Build \"I don't have a girlfriend\"", words: ['없어요', '여친'], correct: ['여친', '없어요'], translation: "I don't have a girlfriend." },
    { type: 'multiple_choice', instruction: 'A new Korean friend asks 남친 있어요? You don\'t want to discuss. Best polite line?', question: 'Pick the deflection', options: [
      { text: '아니요, 아직요', correct: true },
      { text: '몰라요', correct: false },
      { text: '비싸요', correct: false },
    ], explanation: '아직요 deflects warmly. 몰라요 ("I don\'t know") is awkward — you know your own status.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I have a girlfriend', correct: ['여자친구 있어요', '여친 있어요', 'yeojachingu isseoyo'] },
  ],

  rwenDialogue: {
    intro: "New Korean friend, second meet, opens dating talk.",
    lines: [
      { speaker: 'npc', target: '남친 있어요?', native: 'Do you have a boyfriend?' },
      { speaker: 'user', userChoices: [
        { target: '아니요, 아직요', native: "No, not yet", correct: true, feedback: 'Polite soft deflection. Conversation flows on.' },
        { target: '아니', native: 'No (banmal)', correct: false, feedback: 'Banmal with new friend — wrong register.' },
        { target: '주세요', native: 'Please give', correct: false, feedback: "Not a question of giving anything." },
      ]},
      { speaker: 'npc', target: '아, 좋은 사람 만날 거예요!', native: "Ah, you'll meet a good person!" },
      { speaker: 'rwen', rwenLine: "남친/여친 + 있어요/없어요. The dating-status survival pair.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Boyfriend', correct: ['남자친구', '남친', 'namjachingu', 'namchin'] },
      { prompt: 'Do you have a girlfriend?', correct: ['여자친구 있어요?', '여친 있어요?', 'yeojachingu isseoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pre-load your answer to 남친/여친 있어요? — soft 있어요 / 없어요 / 아직요. Korean small talk goes there fast.",
    rwenSignoff: "있어요/없어요 — Korean's binary verb. Powers more questions than you think.",
  },

  phase8: {
    scenario: "A new Korean friend asks dating-status questions during a casual coffee chat.",
    rwenRole: "New friend — peer, polite, curious.",
    successCriteria: "User answers 남친/여친 있어요? politely. Uses 있어요/없어요 + 아직요 if soft deflecting. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
