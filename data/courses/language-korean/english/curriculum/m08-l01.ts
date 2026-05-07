import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-hada',
  module: 8,
  lesson: 1,
  title: 'Hada — The Universal "Do" Verb',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "하다 (to do) is the most common Korean verb. Attach it to almost any noun = a verb. 공부 (study) + 하다 = 공부하다 (to study). 운동 (exercise) + 하다 = 운동하다.",
    culturalNote: "하다 is the bridge between Korean nouns (often Sino-Korean borrowings) and active verbs. Memorize the pattern; vocabulary doubles overnight.",
  },

  chunks: [
    { id: 'hada', target: '하다', native: 'To do', literal: 'do-dictionary', emoji: '🛠️', phonetic: 'ha-da', audioRef: null },
    { id: 'haeyo', target: '해요', native: 'do (polite)', literal: 'do-yo', emoji: '✅', phonetic: 'hae-yo', audioRef: null },
    { id: 'gongbuhada', target: '공부해요', native: 'I study', literal: 'study-do-yo', emoji: '📚', phonetic: 'gong-bu-hae-yo', audioRef: null },
  ],

  pattern: {
    name: 'Noun + 하다',
    explanation: "Stick 하다 onto a noun = verb it. 일 (work) + 하다 = 일하다 (to work). 사랑 (love) + 하다 = 사랑하다 (to love).",
    examples: [
      { target: '공부해요', native: 'I study' },
      { target: '운동해요', native: 'I exercise' },
      { target: '일해요', native: 'I work' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match noun+하다 verb to meaning', pairs: [
      { left: '공부해요', right: 'I study' },
      { left: '운동해요', right: 'I exercise' },
      { left: '일해요', right: 'I work' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I study (polite)', correct: ['공부해요', 'gongbuhaeyo'] },
    { type: 'fill_blank', instruction: 'Make the noun a verb', sentence: '저는 매일 운동_____.', options: ['해요', '예요', '있어요'], correct: '해요', context: '하다 = to do; 해요 polite.' },
    { type: 'build_sentence', instruction: 'Build "I work every day"', words: ['일해요', '매일'], correct: ['매일', '일해요'], translation: 'I work every day.' },
    { type: 'multiple_choice', instruction: 'How do you say "I love"?', question: 'Pick the natural form', options: [
      { text: '사랑해요', correct: true },
      { text: '사랑이에요', correct: false },
      { text: '사랑가요', correct: false },
    ], explanation: '사랑 (love) + 해요 = 사랑해요. K-pop song titles use this form constantly.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I exercise (polite)', correct: ['운동해요', 'undonghaeyo'] },
  ],

  rwenDialogue: {
    intro: "Coffee chat. Coworker asks about your daily routine.",
    lines: [
      { speaker: 'npc', target: '매일 뭐해요?', native: 'What do you do every day?' },
      { speaker: 'user', userChoices: [
        { target: '일해요. 그리고 저녁에 운동해요', native: 'I work. And exercise in the evening', correct: true, feedback: 'Two 하다 verbs in one breath. Daily life unlocked.' },
        { target: '일이에요', native: "I'm work", correct: false, feedback: 'Wrong copula — you ARE NOT work. You DO work.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'rwen', rwenLine: "하다 = the verb factory. Noun + 해요 turns vocabulary into action.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I work (polite)', correct: ['일해요', 'ilhaeyo'] },
      { prompt: 'I study (polite)', correct: ['공부해요', 'gongbuhaeyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three nouns from your day: work, exercise, study. Make each a 하다 verb.",
    rwenSignoff: "하다 = the verb factory. Use it freely.",
  },

  phase8: {
    scenario: "Daily routine chat with a Korean coworker. List your daily actions using 하다 verbs.",
    rwenRole: "Coworker — peer, polite.",
    successCriteria: "User uses at least 3 noun+하다 verbs (일해요/공부해요/운동해요/요리해요/etc.). Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
