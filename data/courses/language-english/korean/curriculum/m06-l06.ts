import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-days-week',
  module: 6,
  lesson: 6,
  title: '요일 — Days of the week',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어 요일 (월·화·수·목·금·토·일) → 영어 (Monday-Sunday). 영어 요일 첫 글자 항상 대문자. 'Today/Tomorrow/Yesterday' 도 같이 익혀요.",
    culturalNote: "한국은 일주일을 월요일 시작, 영어권 (특히 미국)은 일요일 시작 달력이 많아요. '주말'은 weekend (토·일). 다만 'on Monday' (전치사 on 필수).",
  },

  chunks: [
    { id: 'mon_to_fri', target: 'Monday, Tuesday, Wednesday, Thursday, Friday', native: '월·화·수·목·금', literal: 'Mon, Tue, Wed, Thu, Fri', emoji: '📅', phonetic: 'MUN-day-TOOZ-day', audioRef: null },
    { id: 'sat_sun',     target: 'Saturday, Sunday',                              native: '토·일',         literal: 'Sat, Sun',                emoji: '🎉', phonetic: 'SAT-er-day-SUN-day', audioRef: null },
    { id: 'today_tomorrow', target: 'Today, tomorrow, yesterday',                   native: '오늘, 내일, 어제', literal: 'today, tomorrow, yesterday', emoji: '📆', phonetic: 'too-DAY',                audioRef: null },
  ],

  pattern: {
    name: 'On + day',
    explanation: "공식: 'on Monday' (특정 요일), 'next Friday' (다음 금요일), 'last Tuesday' (지난 화요일). 한국어 '~요일에'와 같지만 영어는 on 필수.",
    examples: [
      { target: "I'll see you on Monday.",  native: '월요일에 봐요.' },
      { target: 'Today is Friday.',           native: '오늘은 금요일이에요.' },
      { target: 'Yesterday was Thursday.',     native: '어제는 목요일이었어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'Monday',    right: '월요일' },
      { left: 'Friday',    right: '금요일' },
      { left: 'Sunday',    right: '일요일' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '오늘은 금요일', correct: ['Today is Friday', 'today is Friday'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'll see you ____ Monday.", options: ['on', 'in', 'at'], correct: 'on', context: '요일 앞 전치사.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"내일은 토요일이에요" 영어:', options: [
      { text: 'Tomorrow is Saturday.', correct: true },
      { text: 'Tomorrow Saturday.',     correct: false },
      { text: 'On tomorrow Saturday.',  correct: false },
    ], explanation: 'be 동사 필요. 일반 명제는 on 안 붙여요.' },
    { type: 'build_sentence', instruction: '문장', words: ['Monday', 'on', 'see', 'you', "I'll"], correct: ["I'll", 'see', 'you', 'on', 'Monday'], translation: '월요일에 봐요' },
    { type: 'translate', instruction: '영어로', prompt: '어제는 목요일이었어요', correct: ['Yesterday was Thursday', 'yesterday was Thursday'] },
  ],

  rwenDialogue: {
    intro: '서울 사무실 — 미국 동료가 다음 미팅 일정 정하기.',
    lines: [
      { speaker: 'npc', target: "When can we meet next?", native: '다음에 언제 만날까요?' },
      { speaker: 'user', userChoices: [
        { target: 'How about next Tuesday at 2 P.M.?', native: '다음 화요일 오후 2시 어때요?', correct: true, feedback: 'next + 요일 + at 시간 — 약속 표현 마스터.' },
        { target: 'Tuesday.',                            native: '화요일.',                       correct: false, feedback: '구체화 — next, at time 추가.' },
        { target: 'Yes.',                                  native: '네.',                            correct: false, feedback: '제안 필요해요.' },
      ]},
      { speaker: 'npc', target: 'Sounds good. See you Tuesday.', native: '좋아요. 화요일에 봐요.' },
      { speaker: 'rwen', rwenLine: '요일 + on/next/last — 영어 일정 표현의 핵심.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'Monday (영어로)',   correct: ['Monday', 'monday'] },
      { prompt: 'Today (영어로)',     correct: ['Today', 'today'] },
      { prompt: 'Tomorrow (영어로)',  correct: ['Tomorrow', 'tomorrow'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "이번 주 일정을 영어 요일 + on으로 5문장 만들어 보세요.",
    rwenSignoff: '요일 영어 — 일주일 일정 표현의 골격이에요.',
  },

  phase8: {
    scenario: '서울 사무실에서 미국 동료와 미팅 일정 — 요일·시간·next 사용.',
    rwenRole: 'PM, 35세 미국인.',
    successCriteria: "User uses day names with 'on', 'next', or 'last', plus a time.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
