import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l03-job',
  module: 3,
  lesson: 3,
  title: 'What do you do? — 무슨 일 하세요?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "영어 'What do you do?'는 직업을 묻는 표준 표현이에요. 한국어 '무슨 일 하세요?'와 같지만, 영어에선 회사 이름보다 직군(엔지니어/디자이너/마케터)을 답해요.",
    culturalNote: "한국에선 '삼성에 다녀요' 식으로 회사를 답하지만, 영어권에선 'I'm an engineer' 식으로 직업을 답해요. 회사명은 부차적. 정체성이 직군에 있어요.",
  },

  chunks: [
    { id: 'what_do_you_do', target: 'What do you do?',  native: '무슨 일 하세요? (museun il haseyo?)', literal: 'what do you do?', emoji: '💼', phonetic: 'wut-doo-yoo-DOO', audioRef: null },
    { id: 'im_a_teacher',  target: "I'm a teacher",     native: '저는 선생님이에요 (jeoneun seonsaengnimieyo)', literal: 'I-am a teacher', emoji: '👨‍🏫', phonetic: 'aym-uh-TEE-cher', audioRef: null },
    { id: 'work_in_it',    target: 'I work in IT',      native: 'IT 분야에서 일해요 (IT bunyaeseo ilhaeyo)', literal: 'I work in IT', emoji: '💻', phonetic: 'aye-WERK-in-eye-TEE', audioRef: null },
  ],

  pattern: {
    name: 'Job introduction',
    explanation: "두 패턴: (1) 'I'm a/an + 직업' (I'm a teacher, I'm an engineer), (2) 'I work in/at + 분야/회사' (I work in IT, I work at Samsung). 모음 시작 직업 앞에는 'an' 사용 (engineer, accountant).",
    examples: [
      { target: "I'm a teacher.",     native: '저는 선생님이에요.' },
      { target: "I'm an engineer.",   native: '저는 엔지니어예요.' },
      { target: 'I work in IT.',       native: 'IT 분야에서 일해요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'What do you do?', right: '무슨 일 하세요?' },
      { left: "I'm a teacher",   right: '저는 선생님이에요' },
      { left: 'I work in IT',    right: 'IT 분야에서 일해요' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저는 선생님이에요', correct: ["I'm a teacher", "I am a teacher"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'm ____ engineer.", options: ['an', 'a', 'the'], correct: 'an', context: '모음 e로 시작하는 명사 앞.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '미국 동료가 직업을 물었어요. 마케터일 때:', options: [
      { text: "I'm a marketer. I work in tech.", correct: true },
      { text: 'Marketer Samsung.',                 correct: false },
      { text: "I'm marketer.",                     correct: false },
    ], explanation: "I'm a/an + 직업 + (선택) I work in/at." },
    { type: 'build_sentence', instruction: '문장', words: ['IT', 'work', 'in', 'I'], correct: ['I', 'work', 'in', 'IT'], translation: 'IT 분야에서 일해요' },
    { type: 'translate', instruction: '영어로', prompt: '저는 엔지니어예요', correct: ["I'm an engineer", "I am an engineer"] },
  ],

  rwenDialogue: {
    intro: '판교 IT 회사 — 미국 출장 온 PM과의 점심.',
    lines: [
      { speaker: 'npc', target: "So, what do you do?", native: '그럼, 무슨 일 하세요?' },
      { speaker: 'user', userChoices: [
        { target: "I'm a software engineer. I work in fintech.", native: '저는 소프트웨어 엔지니어예요. 핀테크 분야에서 일해요.', correct: true, feedback: '직군 + 분야 — 영어권 기본 구조 그대로예요.' },
        { target: 'Samsung.',                                       native: '삼성.',                                                  correct: false, feedback: '회사만 답하면 어색해요. 직군부터.' },
        { target: 'Engineer me.',                                    native: '엔지니어 나.',                                            correct: false, feedback: 'be 동사 + a/an 빠졌어요.' },
      ]},
      { speaker: 'npc', target: "Cool. I'm a PM at a US company.", native: '괜찮네요. 저는 미국 회사 PM이에요.' },
      { speaker: 'rwen', rwenLine: '직업 답변 — 직군이 정체성이에요. 회사는 부차적.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'What do you do? (영어로)', correct: ['What do you do?', 'what do you do?'] },
      { prompt: "I'm an engineer (영어로)", correct: ["I'm an engineer", "I am an engineer"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "거울 앞에서 자기 직업을 영어로 두 가지 방식으로 말해 보세요: 'I'm a/an ___' + 'I work in ___'.",
    rwenSignoff: '직업 영어 — 정체성을 한 문장으로 표현하는 카드예요.',
  },

  phase8: {
    scenario: '판교 점심 — 미국 PM과 직업 교환.',
    rwenRole: 'Mike, 35세 미국 PM, 첫 한국 출장.',
    successCriteria: "User uses 'I'm a/an + job' AND 'I work in ___' or 'I work at ___'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
