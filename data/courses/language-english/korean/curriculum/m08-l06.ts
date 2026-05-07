import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-work-school',
  module: 8,
  lesson: 6,
  title: '회사·학교 — Work & School',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "직장·학교 동사 — go to work (회사 가다), study English (영어 공부하다), have a meeting (회의하다). 한국어 '~하러 가다'를 'go to + 명사'로.",
    culturalNote: "한국어 '회사 가요'는 'I go to work', '학교 가요'는 'I go to school'. 영어는 article 거의 없이 — 'go to work', 'go to school', 'go home' (home 앞에는 to도 없음). 이 세 자리 외워 두세요.",
  },

  chunks: [
    { id: 'go_to_work',     target: 'I go to work.',     native: '회사 가요 (hoesa gayo)',                    literal: 'I go to work',     emoji: '🏢', phonetic: 'aye-GOH-too-WERK',     audioRef: null },
    { id: 'study_english',   target: 'I study English.',  native: '영어 공부해요 (yeongeo gongbuhaeyo)',       literal: 'I study English',  emoji: '📚', phonetic: 'aye-STUD-ee-IN-glish', audioRef: null },
    { id: 'have_meeting',    target: 'I have a meeting.',  native: '회의 있어요 (hoeui isseoyo)',                literal: 'I have a meeting', emoji: '👥', phonetic: 'aye-HAV-uh-MEE-ting', audioRef: null },
  ],

  pattern: {
    name: 'Go to + place (no article for institutions)',
    explanation: "기관·장소 (work/school/home/church): 'go to work / school / church', 'go home' (home은 to 빼기). 다만 the 추가: 'go to the office' (사무실 — 구체적 장소).",
    examples: [
      { target: 'I go to work at 9.',         native: '9시에 회사 가요.' },
      { target: 'I study English every day.',  native: '매일 영어 공부해요.' },
      { target: 'I have a meeting at 2.',       native: '2시에 회의 있어요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I go to work',     right: '회사 가요' },
      { left: 'I study English',   right: '영어 공부해요' },
      { left: 'I have a meeting',   right: '회의 있어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '영어 공부해요', correct: ['I study English', 'i study English'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I go ____ work at 9.', options: ['to', 'on', 'at'], correct: 'to', context: '장소로 — to.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"집에 가요" 영어:', options: [
      { text: 'I go home.',         correct: true },
      { text: 'I go to home.',       correct: false },
      { text: 'I go on home.',        correct: false },
    ], explanation: 'home 앞에는 to 안 붙여요.' },
    { type: 'build_sentence', instruction: '문장', words: ['English', 'study', 'I'], correct: ['I', 'study', 'English'], translation: '영어 공부해요' },
    { type: 'translate', instruction: '영어로', prompt: '회의 있어요', correct: ['I have a meeting', 'i have a meeting'] },
  ],

  rwenDialogue: {
    intro: '미국 동료에게 자기 평일 일정 풀기.',
    lines: [
      { speaker: 'npc', target: "What's your weekday like?", native: '평일 어떻게 보내요?' },
      { speaker: 'user', userChoices: [
        { target: 'I go to work at 9, have meetings till 6, then go home and study English at night.', native: '9시 출근, 6시까지 회의, 그리고 집 가서 밤에 영어 공부해요.', correct: true, feedback: '직장·학습 동사 다 — 한 흐름으로.' },
        { target: 'Work meeting English.',                                                                native: '회사 회의 영어.',                                                correct: false, feedback: '동사·시간·구조 빠짐.' },
        { target: 'No.',                                                                                   native: '아니요.',                                                         correct: false, feedback: '일정 풀어 보세요.' },
      ]},
      { speaker: 'npc', target: "Busy. Hope you sleep well!", native: '바쁘네요. 잠 잘 주무세요!' },
      { speaker: 'rwen', rwenLine: '평일 영어 — go to / have / study 세 카드 흐름.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I go to work (영어로)',  correct: ['I go to work', 'i go to work'] },
      { prompt: 'I study English (영어로)', correct: ['I study English', 'i study English'] },
      { prompt: 'I have a meeting (영어로)', correct: ['I have a meeting', 'i have a meeting'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 평일 일정을 영어 한 단락으로 — 5단계 일상 동사.",
    rwenSignoff: '평일 영어 — 매주 흐름의 카드.',
  },

  phase8: {
    scenario: '미국 동료와 자기 평일 일정 영어로 풀기.',
    rwenRole: 'Colleague, 30대 미국인.',
    successCriteria: "User uses 'go to work/school', 'study', 'have a meeting' with appropriate times.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
