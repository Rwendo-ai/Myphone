import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-conversation',
  module: 5,
  lesson: 10,
  title: '가족 대화 — Module 5 Capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 5 마무리 — 부모·형제·자녀·조부모·친척·시댁·친구·동사·이야기까지 가족 영어 카드를 한 단락에 다 펼쳐요.",
    culturalNote: "한국 가족 이야기는 정의 깊이로 풀리지만, 영어 가족 이야기는 정보·관계·행동의 흐름이에요. 한 단락에 8-10개 가족 단어가 자연스럽게 들어가야 영어권 첫 만남에서 가족 풀기가 자연스러워져요.",
  },

  chunks: [
    { id: 'big_family',       target: 'I have a big family. My parents and my two siblings live in Seoul.',                                            native: '대가족이에요. 부모님과 형제 둘이 서울 살아요.', literal: 'I have a big family. My parents and my two siblings live in Seoul.', emoji: '👨‍👩‍👧‍👦', phonetic: 'aye-hav-uh-BIG-FAM', audioRef: null },
    { id: 'grandma_aunt',      target: "My grandmother lives in the village, and my aunt — my father's sister — lives in Mutare.", native: '할머니는 시골에 사시고, 고모 — 아버지의 누나 — 는 부산에 살아요.',                              literal: 'my grandma in village, my aunt — dad sister — in Mutare', emoji: '🏘️', phonetic: 'my-GRAND-muh-ther', audioRef: null },
    { id: 'visit_call_miss',   target: "I visit them every month, I call my mother every day, and I miss my brother who lives abroad.", native: '매달 찾아뵙고, 엄마는 매일 전화하고, 외국에 사는 동생 보고 싶어요.',                              literal: 'I visit them every month, I call mother every day, miss brother abroad', emoji: '💌', phonetic: 'aye-VIZ-it-them',  audioRef: null },
  ],

  pattern: {
    name: 'Family arc — info + relations + action',
    explanation: "한 단락 흐름: (1) 가족 크기 + 거주 (정보), (2) 친척 관계 풀기 (관계), (3) 동사로 행위 표현 (visit/call/miss). 한국 정 깊이의 영어 단락 버전이에요.",
    examples: [
      { target: 'My parents live in Seoul.',                       native: '부모님은 서울 살아요.' },
      { target: "My aunt — my mother's sister — lives in Busan.",   native: '이모 — 엄마의 여동생 — 는 부산 살아요.' },
      { target: 'I miss my brother who lives abroad.',                native: '외국 사는 동생 보고 싶어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'My parents live in Seoul', right: '부모님은 서울 살아요' },
      { left: "My father's sister",        right: '아버지의 누나' },
      { left: 'I miss my brother',          right: '동생 보고 싶어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '대가족이에요', correct: ['I have a big family', 'I have a big family.', 'i have a big family'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I ____ my mom every day.", options: ['call', 'callen', 'calling'], correct: 'call', context: '매일 — 현재 습관 동사.' },
    { type: 'multiple_choice', instruction: '대화 흐름', question: '5분짜리 가족 소개의 가장 자연스러운 흐름은?', options: [
      { text: '가족 크기 → 부모님 거주 → 친척 관계 → 동사로 내 행위',  correct: true },
      { text: '동사 → 동사 → 동사',                                          correct: false },
      { text: '단어 나열만',                                                    correct: false },
    ], explanation: '정보 → 관계 → 행위. Module 5의 모든 카드를 한 단락에.' },
    { type: 'build_sentence', instruction: '문장', words: ['miss', 'I', 'brother', 'my'], correct: ['I', 'miss', 'my', 'brother'], translation: '동생 보고 싶어요' },
    { type: 'translate', instruction: '영어로', prompt: '매달 부모님 찾아뵈요', correct: ['I visit my parents every month', 'i visit my parents every month'] },
  ],

  rwenDialogue: {
    intro: 'LA 한인 모임 — 미국에 사는 한국계 친구가 가족 이야기를 풀어 보라고 함.',
    lines: [
      { speaker: 'npc', target: "Tell me about your family — the whole picture.", native: '가족 얘기 좀 — 전체적으로.' },
      { speaker: 'user', userChoices: [
        { target: "I have a big family. My parents and my two younger siblings live in Seoul. My grandmother lives in the village, and my aunt — my father's sister — lives in Busan. I visit them every month, I call my mom every day, and I miss my brother who studies abroad in Boston.", native: '대가족이에요. 부모님과 동생 둘은 서울 살아요. 할머니는 시골에, 고모 — 아버지의 누나 — 는 부산 살아요. 매달 찾아뵙고, 엄마한테 매일 전화하고, 보스턴에서 유학하는 동생 보고 싶어요.', correct: true, feedback: 'Module 5 전체 — 가족 크기·거주·친척·동사·시제까지 한 단락에 자연스럽게.' },
        { target: 'Family big.',                                                                                                                                                                                                                                                          native: '가족 큼.',                                                                                                                                                                              correct: false, feedback: '깊이 부족 — Module 5 카드 다 적용해 보세요.' },
        { target: 'No.',                                                                                                                                                                                                                                                                  native: '아니요.',                                                                                                                                                                              correct: false, feedback: '이야기 시작이에요.' },
      ]},
      { speaker: 'npc', target: "That's a beautiful family picture. Thank you for sharing.", native: '아름다운 가족 그림이네요. 나눠 줘서 고마워요.' },
      { speaker: 'rwen', rwenLine: 'Module 5 완성 — 한국 정의 깊이를 영어 단락으로 풀어냈어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '한 단락 기억',
    prompts: [
      { prompt: 'I have a big family (영어로)', correct: ['I have a big family', 'i have a big family'] },
      { prompt: 'I visit them every month (영어로)', correct: ['I visit them every month', 'i visit them every month'] },
      { prompt: 'I miss my brother (영어로)',         correct: ['I miss my brother', 'i miss my brother'] },
    ],
  },

  mission: {
    title: 'Module 5 미션',
    task: "자기 가족을 영어 한 단락으로 — 정보·관계·동사 흐름. 8-10개 가족 단어 자연스럽게.",
    rwenSignoff: 'Module 5 완성. 다음은 Module 6 — 숫자·시간·돈이에요.',
  },

  phase8: {
    scenario: 'LA 한인 모임 — 가족 전체 그림을 영어 한 단락으로 풀기.',
    rwenRole: 'Korean-American host, 35세, 가족 깊이 좋아함.',
    successCriteria: "User uses at least 6 family-related words from the module (parents, siblings, grandmother, aunt, etc.) AND family verbs (visit/call/miss).",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
