import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-good-evening',
  module: 1,
  lesson: 5,
  title: 'Good evening — 좋은 저녁',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "해가 진 후 인사는 'Good evening'. 'How was your day?' — 한국어 '오늘 하루 어땠어?'와 같은 자리예요.",
    culturalNote: "한국어 저녁 모임에서는 '오늘 어땠어?'가 진짜 대화의 시작이지만, 영어 저녁 인사는 더 가벼워요. 'It was good'이면 충분합니다 — 깊은 이야기는 그 다음에 따로 와요.",
  },

  chunks: [
    { id: 'good_evening',     target: 'Good evening',     native: '좋은 저녁 (joeun jeonyeok)',         literal: undefined,           emoji: '🌆', phonetic: 'good-EEV-ning',  audioRef: null },
    { id: 'how_was_your_day', target: 'How was your day?', native: '오늘 하루 어땠어요? (oneul haru eottaesseoyo?)', literal: 'how was your day?', emoji: '🌙', phonetic: 'how-wuz-yor-DAY', audioRef: null },
    { id: 'it_was_good',      target: 'It was good',      native: '좋았어요 (joasseoyo)',                literal: 'it was good',       emoji: '👍', phonetic: 'it-wuz-GOOD',    audioRef: null },
  ],

  pattern: {
    name: 'Past tense for evening recap',
    explanation: "저녁 인사에서는 과거형을 씁니다 — 'How was your day?' (was = 과거). 답도 과거형 'It was good'. 한국어에서 '어땠어?'가 과거형인 것과 똑같아요.",
    examples: [
      { target: 'Good evening',     native: '좋은 저녁' },
      { target: 'How was your day?', native: '오늘 하루 어땠어요?' },
      { target: 'It was good',      native: '좋았어요' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Good evening',     right: '좋은 저녁' },
      { left: 'How was your day?', right: '오늘 하루 어땠어요?' },
      { left: 'It was good',      right: '좋았어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '좋은 저녁', correct: ['Good evening', 'good evening'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Good evening. How ____ your day?', options: ['was', 'is', 'are'], correct: 'was', context: '저녁 7시 회식 자리에서.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "저녁 회식 자리, 동료가 'How was your day?'라고 묻습니다.", options: [
      { text: 'It was good, thanks.', correct: true },
      { text: 'Good morning.',         correct: false },
      { text: "How's your day? (현재형)", correct: false },
    ], explanation: "저녁엔 과거형이 자연스러워요." },
    { type: 'build_sentence', instruction: '문장', words: ['was', 'It', 'good'], correct: ['It', 'was', 'good'], translation: '좋았어요' },
    { type: 'translate', instruction: '영어로', prompt: '좋았어요, 감사합니다', correct: ['It was good, thanks', 'It was good thanks'] },
  ],

  rwenDialogue: {
    intro: '강남 회식 자리 — 미국 본사에서 출장 온 디렉터와 첫 저녁 식사.',
    lines: [
      { speaker: 'npc', target: 'Good evening! How was your day?', native: '좋은 저녁! 오늘 하루 어땠어요?' },
      { speaker: 'user', userChoices: [
        { target: "Good evening. It was good, thanks.", native: '좋은 저녁. 좋았어요, 감사합니다.', correct: true, feedback: '저녁 톤에 딱 맞아요.' },
        { target: 'Good morning.',                       native: '좋은 아침.',                       correct: false, feedback: '저녁이에요 — Good evening.' },
        { target: "How's your day? (현재형)",            native: '오늘 어때요?',                     correct: false, feedback: '응답해야 해요 — 답하고 되묻기를 해 보세요.' },
      ]},
      { speaker: 'npc', target: "I'm glad. Let's eat.", native: '다행이에요. 식사해요.' },
      { speaker: 'rwen', rwenLine: '저녁 인사 — 과거형 was를 자연스럽게 썼어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Good evening (영어로)',      correct: ['Good evening', 'good evening'] },
      { prompt: 'It was good (영어로)',       correct: ['It was good', 'it was good'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 저녁 가족 식사 자리에서 'How was your day?'를 영어로 시도해 보세요.",
    rwenSignoff: '좋은 저녁 보내세요.',
  },

  phase8: {
    scenario: '저녁 7시 강남 회식. 미국 디렉터와 첫 디너 자리.',
    rwenRole: 'Jennifer, 50세 미국 디렉터, 한국 출장 마지막 밤. 친근하고 호기심 많음.',
    successCriteria: "User uses 'Good evening', past tense 'It was good', avoids morning/afternoon greetings.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
