import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-be-have',
  module: 8,
  lesson: 1,
  title: '"To be" & "to have"',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "영어의 양대 동사 — be (있다/이다) 와 have (가지다). 'I am happy' (감정·상태) vs 'You have a friend' (소유). 한국어 '저는 행복해요'·'친구가 있어요' 둘 자리.",
    culturalNote: "한국어는 두 동사를 잘 나누지 않아요 — '저 행복해요' (be), '저 가족 있어요' (have). 영어는 매 문장에 분명히 — 상태=be, 소유=have. 이 둘이 매번 정확하면 영어 70%는 통과예요.",
  },

  chunks: [
    { id: 'i_am_happy',   target: 'I am happy.',         native: '저는 행복해요 (jeoneun haengbokhaeyo)',    literal: 'I am happy',         emoji: '😊', phonetic: 'aye-am-HAP-ee',  audioRef: null },
    { id: 'you_have',      target: 'You have a friend.',  native: '친구가 있어요 (chinguga isseoyo)',           literal: 'you have a friend', emoji: '👥', phonetic: 'yoo-HAV-uh-FREND', audioRef: null },
    { id: 'they_are_tired', target: 'They are tired.',     native: '그들은 피곤해요 (geudeuleun pigonhaeyo)',  literal: 'they are tired',    emoji: '😴', phonetic: 'thay-ar-TY-erd',  audioRef: null },
  ],

  pattern: {
    name: 'Be vs Have',
    explanation: "be 동사 (am/is/are) = 상태·정체. have = 소유·관계. I am tired (피곤한 상태) vs I have time (시간 있음). 헷갈리면 '~인가/이다' = be, '~가 있다/가지다' = have.",
    examples: [
      { target: 'I am tired.',   native: '피곤해요.' },
      { target: 'I have time.',   native: '시간 있어요.' },
      { target: 'She is tall.',    native: '키 커요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I am happy',         right: '저는 행복해요' },
      { left: 'You have a friend',   right: '친구가 있어요' },
      { left: 'They are tired',       right: '그들은 피곤해요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저는 시간 있어요', correct: ['I have time', 'i have time'] },
    { type: 'fill_blank', instruction: '빈칸 — be vs have', sentence: 'I ____ tired. I ____ no energy.', options: ['am / have', 'have / am', 'is / has'], correct: 'am / have', context: '상태=be, 소유=have.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"여동생이 있어요" 영어:', options: [
      { text: 'I have a sister.',   correct: true },
      { text: 'I am a sister.',      correct: false },
      { text: 'Sister me.',           correct: false },
    ], explanation: '소유 = have.' },
    { type: 'build_sentence', instruction: '문장', words: ['friend', 'a', 'I', 'have'], correct: ['I', 'have', 'a', 'friend'], translation: '친구 한 명 있어요' },
    { type: 'translate', instruction: '영어로', prompt: '그녀는 키 커요', correct: ['She is tall', 'she is tall'] },
  ],

  rwenDialogue: {
    intro: '미국 친구와 자기 소개 — be/have 동사 자유롭게.',
    lines: [
      { speaker: 'npc', target: "Tell me about yourself in two sentences.", native: '두 문장으로 자기 소개해 주세요.' },
      { speaker: 'user', userChoices: [
        { target: "I'm a software engineer. I have two cats and a great family.", native: '저는 소프트웨어 엔지니어예요. 고양이 둘과 좋은 가족이 있어요.', correct: true, feedback: 'be (직업) + have (소유) — 두 동사 정확히.' },
        { target: 'I have engineer two cats family.',                                native: '저 가짐 엔지니어 둘 고양이 가족.',                              correct: false, feedback: '직업은 be, 소유는 have.' },
        { target: 'No.',                                                              native: '아니요.',                                                       correct: false, feedback: '소개를 풀어 보세요.' },
      ]},
      { speaker: 'npc', target: "Cool. Engineering and cats.", native: '괜찮네요. 엔지니어링과 고양이.' },
      { speaker: 'rwen', rwenLine: 'be / have — 영어 양대 동사 카드.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I am happy (영어로)',  correct: ['I am happy', 'I\'m happy', 'i am happy'] },
      { prompt: 'I have a friend (영어로)', correct: ['I have a friend', 'i have a friend'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "be/have 동사로 자기 표현 5문장 — 상태와 소유 분리.",
    rwenSignoff: 'be vs have — 영어 매 문장의 분기점이에요.',
  },

  phase8: {
    scenario: '미국 친구와 자기 소개 — be/have 두 동사 자유롭게.',
    rwenRole: 'Friend, 30대 미국인.',
    successCriteria: "User uses both 'be' (am/is/are) for states/identity AND 'have' for possession in correct contexts.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
