import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-jigeop',
  module: 3,
  lesson: 2,
  title: 'Jigeop — Job & Role',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Korea takes job titles seriously — they often replace your first name in conversation. 학생 (student), 회사원 (office worker), 선생님 (teacher), 의사 (doctor). Knowing your role unlocks identity.",
    culturalNote: "Older Koreans almost always ask 무슨 일 하세요? — 'what work do you do?' early. The answer slots you into the social map. Hesitation is fine; not having an answer reads as evasive.",
  },

  chunks: [
    { id: 'haksaeng', target: '학생', native: 'Student', literal: 'study-person', emoji: '🎓', phonetic: 'hak-saeng', audioRef: null },
    { id: 'hoesawon', target: '회사원', native: 'Office worker', literal: 'company-member', emoji: '💼', phonetic: 'hoe-sa-won', audioRef: null },
    { id: 'museun_il', target: '무슨 일 하세요?', native: 'What work do you do?', literal: 'what work do?', emoji: '🤔', phonetic: 'mu-seun il ha-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'Job + 이에요/예요',
    explanation: "Job nouns work like name nouns: 저는 [job]이에요/예요. Watch endings — 학생 ends in consonant → 학생이에요; 의사 (doctor) ends in vowel → 의사예요.",
    examples: [
      { target: '저는 학생이에요', native: 'I am a student' },
      { target: '저는 회사원이에요', native: 'I am an office worker' },
      { target: '저는 의사예요', native: 'I am a doctor' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match job to Korean', pairs: [
      { left: '학생', right: 'Student' },
      { left: '회사원', right: 'Office worker' },
      { left: '선생님', right: 'Teacher' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am a student', correct: ['저는 학생이에요', 'jeoneun haksaengieyo'] },
    { type: 'fill_blank', instruction: 'Complete the question', sentence: '_____ 일 하세요?', options: ['무슨', '얼마', '어디'], correct: '무슨', context: '"What kind of" work.' },
    { type: 'build_sentence', instruction: 'Build "I am an office worker"', words: ['저는', '회사원이에요'], correct: ['저는', '회사원이에요'], translation: 'I am an office worker.' },
    { type: 'multiple_choice', instruction: 'A Korean asks 무슨 일 하세요? You\'re a teacher. Best reply?', question: 'Pick the natural answer', options: [
      { text: '저는 선생님이에요', correct: true },
      { text: '선생님', correct: false },
      { text: '얼마예요?', correct: false },
    ], explanation: 'Full sentence with copula. 선생님 alone is grammatically incomplete.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'What work do you do?', correct: ['무슨 일 하세요?', 'museun il haseyo'] },
  ],

  rwenDialogue: {
    intro: "An ahjussi at a Seoul taxi stand strikes up small talk.",
    lines: [
      { speaker: 'npc', target: '무슨 일 하세요?', native: 'What work do you do?' },
      { speaker: 'user', userChoices: [
        { target: '저는 회사원이에요', native: 'I am an office worker', correct: true, feedback: 'Clean answer — slots you into his social map.' },
        { target: '회사원', native: 'Office worker (just word)', correct: false, feedback: 'Add 저는 + 이에요/예요.' },
        { target: '잘 모르겠어요', native: "I don't know", correct: false, feedback: 'You know your job — answer it.' },
      ]},
      { speaker: 'npc', target: '아, 회사원이에요? 멋있네요!', native: 'Ah, office worker? Nice!' },
      { speaker: 'rwen', rwenLine: "Job + 이에요/예요 — that's identity beat 2.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I am a student', correct: ['저는 학생이에요', 'jeoneun haksaengieyo'] },
      { prompt: 'What work do you do?', correct: ['무슨 일 하세요?', 'museun il haseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick your job in Korean. 학생, 회사원, 선생님, or another. Build the line: 저는 ___이에요. Say it out loud.",
    rwenSignoff: "Job is the second handle Koreans grab. Make sure yours is ready.",
  },

  phase8: {
    scenario: "Sitting next to a friendly ahjussi at a Seoul food court. He asks the standard small-talk questions.",
    rwenRole: "Ahjussi — 60s, curious, polite.",
    successCriteria: "User answers 무슨 일 하세요? with 저는 ___이에요/예요. Bounces a question back. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
