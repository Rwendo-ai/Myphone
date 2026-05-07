import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-i-am',
  module: 3,
  lesson: 1,
  title: 'I am... — 저는...',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'I am ___' — 자기소개의 만능 패턴이에요. 영어는 동사(am/is/are) 없이는 문장이 안 돼요. 한국어 '저는 학생이에요'에 해당하는 모든 문장에 'I am'을 끼워 넣어야 합니다.",
    culturalNote: "한국어는 '저는 학생' (동사 생략 가능)도 자연스럽지만, 영어는 'I student'라고 하면 어색해요 — 반드시 'I am a student'. 'be 동사' 누락이 한국 화자의 가장 흔한 실수예요.",
  },

  chunks: [
    { id: 'i_am',           target: 'I am',                native: '저는 ~이에요 (jeoneun ~ieyo)',          literal: 'I-am',                  emoji: '👤', phonetic: 'AYE-am',          audioRef: null },
    { id: 'im_a_student',   target: "I'm a student",       native: '저는 학생이에요 (jeoneun haksaengieyo)', literal: 'I-am a student',        emoji: '🎓', phonetic: 'aym-uh-STOO-dent', audioRef: null },
    { id: 'im_from_korea',  target: "I'm from Korea",      native: '한국에서 왔어요 (hangugeseo wasseoyo)',   literal: 'I-am from Korea',       emoji: '🇰🇷', phonetic: 'aym-FRUM-koh-REE-uh', audioRef: null },
  ],

  pattern: {
    name: 'be-verb is mandatory',
    explanation: "영어 자기소개 = 'I am ___' 또는 줄임 'I'm ___'. 명사·형용사·국적 모든 자기 정보에 동사가 필요해요. 한국어 '저는 ___'에 보이지 않는 '입니다'를 영어는 'am'으로 명시합니다.",
    examples: [
      { target: 'I am Jiwon.',     native: '저는 지원이에요.' },
      { target: "I'm a student.",   native: '저는 학생이에요.' },
      { target: "I'm Korean.",      native: '저는 한국인이에요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I am',              right: '저는 ~이에요' },
      { left: "I'm a student",     right: '저는 학생이에요' },
      { left: "I'm from Korea",    right: '한국에서 왔어요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저는 학생이에요', correct: ["I'm a student", "I am a student", "im a student"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I ____ a student.', options: ['am', 'is', 'are'], correct: 'am', context: 'I 다음에 오는 be 동사.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '자기소개 — 학생이고 한국인일 때:', options: [
      { text: "I'm a student. I'm from Korea.", correct: true },
      { text: 'I student. I Korea.',              correct: false },
      { text: 'Student me Korean.',                correct: false },
    ], explanation: 'be 동사 (am/is/are) 빠지면 영어가 안 돼요.' },
    { type: 'build_sentence', instruction: '문장', words: ['student', 'a', "I'm"], correct: ["I'm", 'a', 'student'], translation: '저는 학생이에요' },
    { type: 'translate', instruction: '영어로', prompt: '저는 한국인이에요', correct: ["I'm Korean", "I am Korean"] },
  ],

  rwenDialogue: {
    intro: '뉴욕 어학원 첫 수업 — 자기소개 시간.',
    lines: [
      { speaker: 'npc', target: "Tell me about yourself.", native: '자기소개 해 보세요.' },
      { speaker: 'user', userChoices: [
        { target: "I'm Jiwon. I'm a student. I'm from Korea.", native: '저는 지원이에요. 학생이에요. 한국에서 왔어요.', correct: true, feedback: '완벽 — 세 문장 모두 be 동사 정확히 썼어요.' },
        { target: 'Jiwon student Korea.',                        native: '지원 학생 한국.',                                correct: false, feedback: "be 동사가 빠졌어요. I am / I'm을 꼭 넣으세요." },
        { target: 'Bye.',                                         native: '잘 가.',                                          correct: false, feedback: '자기소개 시간이에요.' },
      ]},
      { speaker: 'npc', target: "Welcome, Jiwon!", native: '환영해요, 지원!' },
      { speaker: 'rwen', rwenLine: 'I am — 영어 자기소개의 핵심 동사예요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I'm a student (영어로)", correct: ["I'm a student", "I am a student"] },
      { prompt: "I'm from Korea (영어로)", correct: ["I'm from Korea", "I am from Korea"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 자기 자신에 대해 'I am ___' 문장 5개 영어로 만들어 보세요.",
    rwenSignoff: 'I am — 모든 자기소개의 시작이에요.',
  },

  phase8: {
    scenario: '뉴욕 어학원 첫 수업 자기소개. 이름·직업·출신을 be 동사로 정확히 표현.',
    rwenRole: 'Teacher Linda, 40대 미국인, 친근.',
    successCriteria: "User uses 'I am' or 'I'm' in at least 3 sentences (name, job, origin), no missing be-verbs.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
