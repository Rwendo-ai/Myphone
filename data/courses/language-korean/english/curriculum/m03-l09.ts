import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l09-mannase',
  module: 3,
  lesson: 9,
  title: 'Mannaseo Bangapseumnida — Pleased to Have Met',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Closing a first encounter: 만나서 반갑습니다 — 'pleased to have met you'. The 만나서 (having met) makes it past-shaped — fitting at goodbye, not at hello.",
    culturalNote: "반갑습니다 alone works at meeting AND parting. Adding 만나서 makes it lean toward 'pleased we met'. With a slight bow, it's the warm closing you want after a real conversation.",
  },

  chunks: [
    { id: 'mannaseo', target: '만나서 반갑습니다', native: 'Pleased to have met you', literal: 'meeting-since pleased', emoji: '🤝', phonetic: 'man-na-seo ban-gap-seum-ni-da', audioRef: null },
    { id: 'tto_boja', target: '또 봐요', native: 'See you again', literal: 'again see-yo', emoji: '👋', phonetic: 'tto bwa-yo', audioRef: null },
    { id: 'jal_jinaeyo_close', target: '잘 지내세요', native: 'Take care / Stay well', literal: 'well stay-honorific-yo', emoji: '🌟', phonetic: 'jal ji-nae-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'Closing chain',
    explanation: "End a real conversation with: 만나서 반갑습니다 → 또 봐요 / 다음에 또 봐요 → 잘 지내세요 → 안녕히 가세요/계세요. Each beat warmer.",
    examples: [
      { target: '만나서 반갑습니다', native: 'Pleased to have met you' },
      { target: '또 봐요!', native: 'See you again!' },
      { target: '잘 지내세요', native: 'Take care' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '만나서 반갑습니다', right: 'Pleased to have met' },
      { left: '또 봐요', right: 'See you again' },
      { left: '잘 지내세요', right: 'Take care' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'See you again', correct: ['또 봐요', 'tto bwayo'] },
    { type: 'fill_blank', instruction: 'Closing a friendly conversation', sentence: '오늘 만나서 _____.', options: ['반갑습니다', '비싸요', '주세요'], correct: '반갑습니다', context: '"Pleased to have met you today".' },
    { type: 'build_sentence', instruction: 'Build "See you next time"', words: ['봐요', '다음에', '또'], correct: ['다음에', '또', '봐요'], translation: 'See you next time.' },
    { type: 'multiple_choice', instruction: 'After a great first conversation, best warm close?', question: 'Pick the closer', options: [
      { text: '만나서 반갑습니다. 또 봐요!', correct: true },
      { text: '얼마예요?', correct: false },
      { text: '안녕', correct: false },
    ], explanation: 'Pleased + see-you-again = warm close. The other two are wrong moments.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Take care / stay well', correct: ['잘 지내세요', 'jal jinaeseyo'] },
  ],

  rwenDialogue: {
    intro: "End of a long, warm coffee. Time to part.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '만나서 반갑습니다. 또 봐요!', native: 'Pleased to have met. See you again!', correct: true, feedback: 'Warm two-beat close. Eyes meet, slight bow.' },
        { target: '안녕', native: 'Hi (banmal)', correct: false, feedback: 'Wrong direction AND wrong register.' },
        { target: '비싸요', native: "It's expensive", correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '저도 만나서 반가웠어요. 잘 지내세요!', native: 'I was glad to meet you too. Take care!' },
      { speaker: 'rwen', rwenLine: "Closing chain locked in. Module 3 has identity AND warmth.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Pleased to have met you', correct: ['만나서 반갑습니다', 'mannaseo bangapseumnida'] },
      { prompt: 'See you again', correct: ['또 봐요', 'tto bwayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice your warm goodbye chain: 만나서 반갑습니다 → 또 봐요 → 잘 지내세요. Three beats.",
    rwenSignoff: "Goodbyes in Korean linger. Make them warm.",
  },

  phase8: {
    scenario: "End of a long, warm conversation with a new Korean friend at a Hongdae café — you're parting for the day.",
    rwenRole: "New friend — warm, polite peer.",
    successCriteria: "User chains 만나서 반갑습니다 + 또 봐요 + 잘 지내세요. Uses 안녕히 계세요 if leaving.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
