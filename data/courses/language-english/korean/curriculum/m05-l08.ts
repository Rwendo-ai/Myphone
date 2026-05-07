import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-family-actions',
  module: 5,
  lesson: 8,
  title: '가족 동사 — Visit, Call, Miss',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "가족과의 행위 — 방문 (visit), 전화 (call), 그리움 (miss). 'I miss you, Mom'은 한국어 '엄마, 보고 싶어요'와 정확히 같은 자리예요.",
    culturalNote: "한국 정 문화에서 'I miss you'를 직접 말하는 일은 적어요 (행동으로 표현). 영어권에서는 가족·친구에게 'I miss you'를 매주 말해요. 처음엔 어색해도, 한 번 입에 익으면 따뜻한 카드예요.",
  },

  chunks: [
    { id: 'visit', target: 'Visit',         native: '방문하다 (bangmunhada)',  literal: 'to visit', emoji: '🏡', phonetic: 'VIZ-it', audioRef: null },
    { id: 'call',  target: 'Call',          native: '전화하다 (jeonhwahada)',   literal: 'to call',  emoji: '📞', phonetic: 'KAWL',  audioRef: null },
    { id: 'miss',  target: 'Miss (someone)', native: '보고 싶다 (bogosipda)',     literal: 'to miss',   emoji: '💌', phonetic: 'MIS',   audioRef: null },
  ],

  pattern: {
    name: 'Family verbs',
    explanation: "공식: 'I + 동사 + 사람'. 'I visit my parents every month' / 'I call my mom every day' / 'I miss my brother who lives abroad'. 한국어 '~을 ~하다' 자리에 직접 사람 들어가요.",
    examples: [
      { target: 'I visit my parents every month.',  native: '매달 부모님 찾아뵈요.' },
      { target: 'I call my mom every day.',          native: '매일 엄마한테 전화해요.' },
      { target: 'I miss my brother.',                  native: '오빠/형 보고 싶어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Visit',         right: '방문하다' },
      { left: 'Call',          right: '전화하다' },
      { left: 'Miss (someone)', right: '보고 싶다' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '엄마 보고 싶어요', correct: ['I miss my mom', 'i miss my mom', 'I miss Mom', 'I miss my mother'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I ____ my mom every day.', options: ['call', 'visit', 'miss'], correct: 'call', context: '매일 — 자주 하는 행위.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"매달 부모님 찾아뵙어요" 영어:', options: [
      { text: 'I visit my parents every month.',  correct: true },
      { text: 'I parents month visit.',              correct: false },
      { text: 'Visit me parents.',                    correct: false },
    ], explanation: 'SVO + 시간 — 한국어 SOV에서 영어 SVO로 어순 바꿈.' },
    { type: 'build_sentence', instruction: '문장', words: ['mom', 'I', 'my', 'miss'], correct: ['I', 'miss', 'my', 'mom'], translation: '엄마 보고 싶어요' },
    { type: 'translate', instruction: '영어로', prompt: '오빠/형 보고 싶어요', correct: ['I miss my brother', 'i miss my brother'] },
  ],

  rwenDialogue: {
    intro: '뉴욕 유학 중 한국 친구와 부모님 이야기.',
    lines: [
      { speaker: 'npc', target: "Do you talk to your family often?", native: '가족이랑 자주 통화해요?' },
      { speaker: 'user', userChoices: [
        { target: 'Yes, I call my mom every day. I really miss them.', native: '네, 엄마한테 매일 전화해요. 정말 보고 싶어요.', correct: true, feedback: 'call + miss 두 동사 자연스럽게 — 한국 정을 영어 단어로 풀었어요.' },
        { target: 'Mom call miss.',                                       native: '엄마 전화 그리움.',                            correct: false, feedback: '문장 구조가 빠졌어요. SVO로.' },
        { target: 'Bye.',                                                  native: '잘 가.',                                        correct: false, feedback: '깊은 대화 중이에요.' },
      ]},
      { speaker: 'npc', target: "I get it. Family means a lot.", native: '이해해요. 가족은 정말 큰 거죠.' },
      { speaker: 'rwen', rwenLine: '가족 동사 — 정(情)을 영어로 직접 표현하는 카드예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I miss my mom (영어로)',         correct: ['I miss my mom', 'I miss my mother'] },
      { prompt: 'I call my parents (영어로)',     correct: ['I call my parents', 'i call my parents'] },
      { prompt: 'I visit my family (영어로)',     correct: ['I visit my family', 'i visit my family'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 가족에게 영어로 한 마디 — 'I miss you' 또는 'I love you'. 한국어 정의 영어 표현이에요.",
    rwenSignoff: 'visit/call/miss — 가족 영어의 세 동사 카드예요.',
  },

  phase8: {
    scenario: '뉴욕 유학 중 한국 친구와 부모님 그리움 영어로 풀기.',
    rwenRole: 'Korean friend, 24세, 비슷한 유학생.',
    successCriteria: "User uses at least 2 of: 'visit', 'call', 'miss' with family members.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
