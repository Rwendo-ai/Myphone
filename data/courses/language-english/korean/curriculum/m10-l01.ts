import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-happy-sad',
  module: 10,
  lesson: 1,
  title: '기쁨과 슬픔 — Happy & Sad',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "감정 영어 — 'I'm happy' (기뻐요), 'I'm sad' (슬퍼요), 'It made me feel...' (~한 기분 들어요). be 동사 + 형용사 + 문맥.",
    culturalNote: "한국 정 문화는 감정을 행동으로, 영어권은 감정을 직접 말로. 'I'm happy for you' (기뻐요 — 너 때문에) / 'I'm so sad' (정말 슬퍼) — 영어권 친구 사이엔 자주 직접 표현해요.",
  },

  chunks: [
    { id: 'im_happy',          target: "I'm happy",         native: '기뻐요 (gippeoyo)',                       literal: 'I-am happy',          emoji: '😊', phonetic: 'aym-HAP-ee',          audioRef: null },
    { id: 'im_sad',             target: "I'm sad",            native: '슬퍼요 (seulpeoyo)',                       literal: 'I-am sad',             emoji: '😢', phonetic: 'aym-SAD',              audioRef: null },
    { id: 'made_me_feel',      target: 'It made me feel...', native: '~한 기분이 들었어요 (~han gibuni deureosseoyo)', literal: 'it made me feel',       emoji: '💭', phonetic: 'it-mayd-mee-FEEL', audioRef: null },
  ],

  pattern: {
    name: 'Emotional vocabulary',
    explanation: "감정 사다리: ecstatic > thrilled > happy > content > okay > sad > heartbroken. 'I'm so happy' (강조), 'I'm a bit sad' (약함). 'It made me feel + 형용사' = ~기분 들었어요.",
    examples: [
      { target: "I'm so happy.",                  native: '정말 기뻐요.' },
      { target: "I'm a bit sad.",                  native: '좀 슬퍼요.' },
      { target: 'It made me feel grateful.',       native: '감사한 기분이 들었어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "I'm happy",         right: '기뻐요' },
      { left: "I'm sad",            right: '슬퍼요' },
      { left: 'It made me feel...', right: '~한 기분이 들었어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '슬퍼요', correct: ["I'm sad", "I am sad"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'It made ____ feel happy.', options: ['me', 'I', 'my'], correct: 'me', context: '목적격 me.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"정말 기뻐요" 영어:', options: [
      { text: "I'm so happy.",  correct: true },
      { text: 'Happy me.',        correct: false },
      { text: 'I happy.',          correct: false },
    ], explanation: 'be 동사 + so + 형용사.' },
    { type: 'build_sentence', instruction: '문장', words: ['feel', 'me', 'happy', 'It', 'made'], correct: ['It', 'made', 'me', 'feel', 'happy'], translation: '기쁜 기분 들었어요' },
    { type: 'translate', instruction: '영어로', prompt: '좀 슬퍼요', correct: ["I'm a bit sad", "I am a bit sad"] },
  ],

  rwenDialogue: {
    intro: 'LA 친구가 한국 부모님 떠난 후 어떤 기분 묻기.',
    lines: [
      { speaker: 'npc', target: "How are you holding up?", native: '잘 지내고 있어요?' },
      { speaker: 'user', userChoices: [
        { target: "I'm a bit sad — I miss them. But I'm grateful for the time we had.", native: '좀 슬퍼요 — 보고 싶어요. 근데 함께한 시간이 감사해요.', correct: true, feedback: '복합 감정 — sad + grateful 두 면을.' },
        { target: 'Sad happy.',                                                              native: '슬프고 기쁨.',                                              correct: false, feedback: '구조 + 동사 추가.' },
        { target: 'No.',                                                                     native: '아니요.',                                                  correct: false, feedback: '감정 풀어요.' },
      ]},
      { speaker: 'npc', target: "Sending love.", native: '응원해요.' },
      { speaker: 'rwen', rwenLine: '감정 영어 — 직접 말로 표현하는 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'm happy (영어로)",  correct: ["I'm happy", "I am happy"] },
      { prompt: "I'm sad (영어로)",    correct: ["I'm sad", "I am sad"] },
      { prompt: 'It made me feel (영어로)', correct: ['It made me feel', 'it made me feel'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 자기 감정 5가지 영어로 — happy/sad/grateful/excited/proud.",
    rwenSignoff: '감정 영어 — 직접 말이 시작이에요.',
  },

  phase8: {
    scenario: 'LA 친구와 부모님 떠난 후 복합 감정 영어로 풀기.',
    rwenRole: 'Friend, 30세 미국인, 공감 잘함.',
    successCriteria: "User uses 'I'm + emotion' for at least 2 emotional states, may use 'It made me feel ___'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
