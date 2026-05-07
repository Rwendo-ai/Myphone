import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-proverbs',
  module: 10,
  lesson: 9,
  title: '한국 속담 영어로 — Korean proverbs',
  estimatedMinutes: 5,
  xpReward: 35,

  hook: {
    rwenLine: "한국 속담 영어로 풀기 — '가는 말이 고와야 오는 말이 곱다' / '천 리 길도 한 걸음부터'. 한국어 그대로 + 영어 풀이로 영어권 친구를 감동시켜요.",
    culturalNote: "한국 속담 영어 번역은 영어권 친구에게 가장 인상 깊은 카드 중 하나예요. 직역 대신 짧은 영어 풀이 — 'A journey of a thousand miles begins with a single step' (천 리 길도 한 걸음부터).",
  },

  chunks: [
    { id: 'thousand_miles',  target: "A journey of a thousand miles begins with a single step — 천 리 길도 한 걸음부터", native: '천 리 길도 한 걸음부터 (cheon-ri gildo han georeum-buteo)',                                literal: 'a journey of 1,000 miles begins with a single step', emoji: '🚶', phonetic: 'uh-JER-nee', audioRef: null },
    { id: 'kind_words',      target: "Kind words bring kind words — 가는 말이 고와야 오는 말이 곱다",                       native: '가는 말이 고와야 오는 말이 곱다 (ganeun mari gowaya oneun mari gopda)',                      literal: 'kind words bring kind words',                       emoji: '💬', phonetic: 'KYND-WERDS', audioRef: null },
    { id: 'every_drop',      target: 'Every drop adds up — 가랑비에 옷 젖는 줄 모른다',                                     native: '가랑비에 옷 젖는 줄 모른다 (garangbie ot jeotneun jul moreunda)',                            literal: 'every drop adds up — light rain soaks clothes',     emoji: '💧', phonetic: 'EV-ree-DROP', audioRef: null },
  ],

  pattern: {
    name: 'Korean proverb in English',
    explanation: "구조: 영어 속담 풀이 — 한국어 원문. 직역 대신 의미 전달이 핵심. 한국어 가치관 (인내·말의 무게·작은 일의 누적)이 영어권에서도 통해요.",
    examples: [
      { target: "A journey of a thousand miles begins with a single step.",  native: '천 리 길도 한 걸음부터.' },
      { target: 'Kind words bring kind words.',                                native: '가는 말이 고와야 오는 말이 곱다.' },
      { target: 'Every drop adds up.',                                          native: '가랑비에 옷 젖는 줄 모른다.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "A journey of a thousand miles", right: '천 리 길도 한 걸음부터' },
      { left: 'Kind words bring kind words',     right: '가는 말이 고와야 오는 말이 곱다' },
      { left: 'Every drop adds up',                right: '가랑비에 옷 젖는 줄 모른다' },
    ]},
    { type: 'translate', instruction: '영어 풀이', prompt: '천 리 길도 한 걸음부터', correct: ['A journey of a thousand miles begins with a single step', 'A journey of a thousand miles begins with a single step.'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Kind words bring ____ words.', options: ['kind', 'big', 'soft'], correct: 'kind', context: '가는 말 = 오는 말.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '인내 — 작게 시작하라:', options: [
      { text: 'A journey of a thousand miles begins with a single step.',  correct: true },
      { text: 'Big start big finish.',                                       correct: false },
      { text: 'No begin no end.',                                              correct: false },
    ], explanation: '한 걸음부터 — 영어권에도 통하는 가치관.' },
    { type: 'build_sentence', instruction: '문장', words: ['drop', 'Every', 'up', 'adds'], correct: ['Every', 'drop', 'adds', 'up'], translation: '가랑비에 옷 젖는다' },
    { type: 'translate', instruction: '영어 풀이', prompt: '가는 말이 고와야 오는 말이 곱다', correct: ['Kind words bring kind words', 'Kind words bring kind words.'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 다국적 식사 자리 — 미국·영국 친구에게 한국 속담 자랑.',
    lines: [
      { speaker: 'npc', target: "Share a Korean proverb!", native: '한국 속담 하나 알려줘요!' },
      { speaker: 'user', userChoices: [
        { target: "We say '천 리 길도 한 걸음부터' — A journey of a thousand miles begins with a single step. It means start small, stay patient.", native: "'천 리 길도 한 걸음부터' — 천 리 여행도 한 걸음에서 시작. 작게 시작하라, 인내하라는 뜻이에요.", correct: true, feedback: '한국어 + 영어 풀이 + 의미 — 자랑할 만한 풀이.' },
        { target: 'Korean wisdom.',                                                                                                                      native: '한국 지혜.',                                                                                                                  correct: false, feedback: '구체적 속담 풀어요.' },
        { target: 'No.',                                                                                                                                  native: '아니요.',                                                                                                                          correct: false, feedback: '나눠 보세요.' },
      ]},
      { speaker: 'npc', target: "I love that — same in our culture too.", native: '좋아요 — 우리 문화에도 비슷한 게 있어요.' },
      { speaker: 'rwen', rwenLine: '한국 속담 영어 — 문화의 다리 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'A journey of a thousand miles (영어로)', correct: ['A journey of a thousand miles', 'a journey of a thousand miles'] },
      { prompt: 'Kind words bring kind words (영어로)',     correct: ['Kind words bring kind words', 'kind words bring kind words'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기가 좋아하는 한국 속담 한 개 영어로 풀이해 보세요. 영어권 친구에게 보내도 좋아요.",
    rwenSignoff: '한국 속담 — 영어로 한국 가치관을 나누는 카드.',
  },

  phase8: {
    scenario: '뉴욕 다국적 식사 자리에서 한국 속담을 영어로 자랑.',
    rwenRole: 'Multicultural friends, 다양한 국적.',
    successCriteria: "User shares a Korean proverb in Korean + English explanation, may add personal meaning.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
