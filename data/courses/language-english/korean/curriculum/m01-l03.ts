import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-good-morning',
  module: 1,
  lesson: 3,
  title: 'Good morning — 좋은 아침',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Good morning'은 한국어 '안녕히 주무셨어요?'와 비슷한 자리에 옵니다 — 아침 첫 인사로요. 단, 영어는 잠을 잘 잤는지 안 묻고 시간만 표시해요.",
    culturalNote: "한국어 아침 인사는 '안녕히 주무셨어요?' — 잠을 화제로 삼아요. 영어 'Good morning'은 그냥 시간대 표시. 'Did you sleep well?'은 가족이나 정말 가까운 사이에서나 묻습니다.",
  },

  chunks: [
    { id: 'good_morning',     target: 'Good morning',     native: '좋은 아침 (joeun achim)',                  literal: 'good morning',         emoji: '☀️', phonetic: 'good-MOR-ning',     audioRef: null },
    { id: 'did_you_sleep',    target: 'Did you sleep well?', native: '잘 주무셨어요? (jal jumusyeosseoyo?)', literal: 'Did-you sleep well?',  emoji: '😴', phonetic: 'did-yoo-SLEEP-wel', audioRef: null },
    { id: 'i_slept_well',     target: 'I slept well',     native: '잘 잤어요 (jal jasseoyo)',                  literal: 'I-slept well',         emoji: '🛌', phonetic: 'aye-SLEPT-wel',     audioRef: null },
  ],

  pattern: {
    name: 'Time-based greetings',
    explanation: "영어 인사는 시간으로 나뉩니다 — Good morning (아침), Good afternoon (점심~저녁), Good evening (저녁). 한국어처럼 '안녕하세요' 하나로 다 안 됩니다.",
    examples: [
      { target: 'Good morning',          native: '좋은 아침' },
      { target: 'Did you sleep well?',   native: '잘 주무셨어요?' },
      { target: 'I slept well, thanks',  native: '잘 잤어요, 감사합니다' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Good morning',         right: '좋은 아침' },
      { left: 'Did you sleep well?',  right: '잘 주무셨어요?' },
      { left: 'I slept well',         right: '잘 잤어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '좋은 아침', correct: ['Good morning', 'good morning'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'Good ____! Did you sleep well?', options: ['morning', 'evening', 'night'], correct: 'morning', context: '아침 8시 회사 도착.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: "직장 상사가 'Good morning! Did you sleep well?'이라고 묻습니다.", options: [
      { text: "Good morning. I slept well, thanks.", correct: true },
      { text: "Hi.",                                  correct: false },
      { text: "Bye!",                                 correct: false },
    ], explanation: "공식적인 자리에서는 'Good morning' + 답이 안전해요." },
    { type: 'build_sentence', instruction: '문장 만들기', words: ['well', 'I', 'slept'], correct: ['I', 'slept', 'well'], translation: '잘 잤어요' },
    { type: 'translate', instruction: '영어로', prompt: '잘 잤어요, 감사합니다', correct: ['I slept well, thanks', 'i slept well, thanks', 'I slept well thanks'] },
  ],

  rwenDialogue: {
    intro: '서울 본사 사무실 — 미국 출장에서 막 도착한 미국 동료와 첫 아침 인사.',
    lines: [
      { speaker: 'npc', target: 'Good morning! Did you sleep well?', native: '좋은 아침! 잘 주무셨어요?' },
      { speaker: 'user', userChoices: [
        { target: 'Good morning. I slept well, thanks.', native: '좋은 아침. 잘 잤어요, 감사합니다.', correct: true, feedback: '아주 자연스러워요 — 인사받고, 답하고, 감사 표현까지.' },
        { target: 'Hi.',                                   native: '안녕.',                            correct: false, feedback: '직장 첫 인사로는 너무 짧아요. Good morning을 쓰세요.' },
        { target: 'Bye!',                                  native: '잘 가!',                            correct: false, feedback: "이건 헤어질 때 인사예요." },
      ]},
      { speaker: 'npc', target: "Glad to hear it.", native: '다행이네요.' },
      { speaker: 'rwen', rwenLine: '직장에서의 첫 아침 인사 — 깔끔하게 했어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Good morning (영어로)', correct: ['Good morning', 'good morning'] },
      { prompt: 'I slept well (영어로)', correct: ['I slept well', 'i slept well'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "내일 아침 가족이나 동료에게 'Good morning'이라고 말해 보세요.",
    rwenSignoff: '내일 아침 또 만나요.',
  },

  phase8: {
    scenario: '서울 IT 회사 아침 9시. 미국 출장에서 돌아온 매니저와 복도에서 마주침.',
    rwenRole: 'Sarah, 35세, 미국 출신 엔지니어링 매니저. 시차로 약간 피곤.',
    successCriteria: "User says 'Good morning', asks 'Did you sleep well?', responds appropriately.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
