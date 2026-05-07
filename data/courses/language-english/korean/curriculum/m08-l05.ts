import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-wake-up',
  module: 8,
  lesson: 5,
  title: '아침 루틴 — Daily routine: Morning',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "아침 루틴 영어 — wake up (일어나다), take a shower (샤워하다), eat breakfast (아침 먹다). 'I wake up at 6'은 한국어 '6시에 일어나요'와 같은 자리.",
    culturalNote: "한국어 '샤워하다' = take a shower (영어). '하다'가 영어로 'take' 또는 'have'로 분기. take a shower / have breakfast / get dressed — 영어 일상 표현.",
  },

  chunks: [
    { id: 'wake_up_6',     target: 'I wake up at 6.',     native: '6시에 일어나요 (yeoseot-si-e ireonayo)',     literal: 'I wake up at 6',    emoji: '⏰', phonetic: 'aye-wayk-up-at-SIX',  audioRef: null },
    { id: 'take_shower',   target: 'I take a shower.',     native: '샤워해요 (syawo-haeyo)',                          literal: 'I take a shower',    emoji: '🚿', phonetic: 'aye-tayk-uh-SHOW-er', audioRef: null },
    { id: 'eat_breakfast', target: 'I eat breakfast.',      native: '아침 먹어요 (achim meogeoyo)',                    literal: 'I eat breakfast',     emoji: '🥐', phonetic: 'aye-eet-BREK-fust',   audioRef: null },
  ],

  pattern: {
    name: 'Daily verbs — present simple',
    explanation: "현재 습관 = 현재 단순형 (I wake up, She wakes up — 3인칭 단수 -s). 'at 6' (시간), 'every day' (빈도). 시간 + 빈도가 일상 표현 핵심.",
    examples: [
      { target: 'I wake up at 6 every day.',     native: '매일 6시에 일어나요.' },
      { target: 'She takes a shower at 7.',       native: '그녀는 7시에 샤워해요.' },
      { target: 'I have breakfast at 7:30.',       native: '7시 반에 아침 먹어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I wake up at 6',     right: '6시에 일어나요' },
      { left: 'I take a shower',     right: '샤워해요' },
      { left: 'I eat breakfast',      right: '아침 먹어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '샤워해요', correct: ['I take a shower', 'i take a shower'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I wake ____ at 6.', options: ['up', 'on', 'out'], correct: 'up', context: 'wake up — 동사 결합.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"매일 7시에 아침 먹어요" 영어:', options: [
      { text: 'I have breakfast at 7 every day.',  correct: true },
      { text: 'Breakfast 7 me.',                      correct: false },
      { text: 'I eat 7 morning.',                      correct: false },
    ], explanation: 'have/eat breakfast + at + 시간 + every day.' },
    { type: 'build_sentence', instruction: '문장', words: ['breakfast', 'eat', 'I'], correct: ['I', 'eat', 'breakfast'], translation: '아침 먹어요' },
    { type: 'translate', instruction: '영어로', prompt: '6시에 일어나요', correct: ['I wake up at 6', 'I wake up at six'] },
  ],

  rwenDialogue: {
    intro: '미국 친구가 한국 직장인 아침 루틴 궁금해함.',
    lines: [
      { speaker: 'npc', target: "What's your morning like?", native: '아침 루틴이 어때요?' },
      { speaker: 'user', userChoices: [
        { target: 'I wake up at 6, take a shower, and have breakfast at 7. Then I head to work.', native: '6시 일어나서, 샤워하고, 7시에 아침 먹어요. 그리고 회사 가요.', correct: true, feedback: '일상 동사 자연스러운 흐름.' },
        { target: 'Wake shower breakfast.',                                                          native: '일어남 샤워 아침.',                                                  correct: false, feedback: '동사·시제·구조 빠짐.' },
        { target: 'No.',                                                                              native: '아니요.',                                                            correct: false, feedback: '루틴 풀어요.' },
      ]},
      { speaker: 'npc', target: "Pretty similar to mine.", native: '저랑 비슷하네요.' },
      { speaker: 'rwen', rwenLine: '아침 루틴 — 일상 동사를 한 흐름으로.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I wake up at 6 (영어로)',     correct: ['I wake up at 6', 'I wake up at six'] },
      { prompt: 'I take a shower (영어로)',     correct: ['I take a shower', 'i take a shower'] },
      { prompt: 'I eat breakfast (영어로)',     correct: ['I eat breakfast', 'I have breakfast'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 아침 루틴을 영어 5문장으로 — 시간·동사 흐름.",
    rwenSignoff: '아침 영어 — 매일 시작하는 카드.',
  },

  phase8: {
    scenario: '미국 친구와 자기 아침 루틴 영어로 풀기.',
    rwenRole: 'Friend, 28세 미국인.',
    successCriteria: "User describes 3+ morning activities with 'wake up', 'take a shower', 'have/eat breakfast' + times.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
