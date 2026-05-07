import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-gibun',
  module: 10,
  lesson: 1,
  title: 'Gibun — Mood & Feeling',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Module 10 = the soul. 기분 (gibun) is your mood/feeling state — central to Korean emotional vocabulary. 기분이 좋아요 (I'm in a good mood). 기분이 나빠요 (bad mood).",
    culturalNote: "Korean has a rich emotional vocabulary that often resists English one-to-one. 기분 carries shades English splits: mood, vibe, feeling state, sense of dignity. K-drama protagonists' arcs run on 기분 swings.",
  },

  chunks: [
    { id: 'gibun', target: '기분', native: 'Mood / feeling', literal: 'spirit-portion', emoji: '🌤️', phonetic: 'gi-bun', audioRef: null },
    { id: 'gibun_joa', target: '기분이 좋아요', native: "I'm in a good mood", literal: 'mood-SUBJ good-yo', emoji: '😊', phonetic: 'gi-bun-i jo-a-yo', audioRef: null },
    { id: 'gibun_napa', target: '기분이 나빠요', native: "I'm in a bad mood", literal: 'mood-SUBJ bad-yo', emoji: '😠', phonetic: 'gi-bun-i na-ppa-yo', audioRef: null },
  ],

  pattern: {
    name: '기분이 + adjective',
    explanation: "기분 + 이 (subject marker) + adjective. 좋아요 (good), 나빠요 (bad), 이상해요 (strange).",
    examples: [
      { target: '기분이 좋아요', native: "I'm in a good mood" },
      { target: '기분이 나빠요', native: "Bad mood" },
      { target: '기분이 어때요?', native: 'How are you feeling?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to feeling', pairs: [
      { left: '기분이 좋아요', right: 'Good mood' },
      { left: '기분이 나빠요', right: 'Bad mood' },
      { left: '기분이 어때요?', right: 'How are you feeling?' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "I'm in a good mood", correct: ['기분이 좋아요', 'gibuni joayo'] },
    { type: 'fill_blank', instruction: 'Ask about mood', sentence: '기분이 _____?', options: ['어때요', '얼마예요', '비싸요'], correct: '어때요', context: 'How / what about.' },
    { type: 'build_sentence', instruction: 'Build "Bad mood today"', words: ['기분이', '오늘은', '나빠요'], correct: ['오늘은', '기분이', '나빠요'], translation: 'Bad mood today.' },
    { type: 'multiple_choice', instruction: 'Friend looks down. Best soft check-in?', question: 'Pick the warm ask', options: [
      { text: '기분이 어때요?', correct: true },
      { text: '비싸요?', correct: false },
      { text: '얼마예요?', correct: false },
    ], explanation: 'Mood-check ask. Warm and culturally normal.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Mood / feeling', correct: ['기분', 'gibun'] },
  ],

  rwenDialogue: {
    intro: "Korean friend looks pensive. You check in.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '기분이 어때요?', native: 'How are you feeling?', correct: true, feedback: 'Soft mood check.' },
        { target: '비싸요?', native: 'Is it expensive?', correct: false, feedback: 'Wrong question.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '음... 기분이 좀 이상해요.', native: "Mm... I feel a bit strange." },
      { speaker: 'rwen', rwenLine: "기분 = the Korean emotional barometer. Use it to check in.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'How are you feeling?', correct: ['기분이 어때요?', 'gibuni eottaeyo'] },
      { prompt: "I'm in a good mood", correct: ['기분이 좋아요', 'gibuni joayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three mood states. Build each: 기분이 ___. Notice the shades.",
    rwenSignoff: "기분 = your inner weather. Korean tracks it carefully.",
  },

  phase8: {
    scenario: "Friend seems off. You check in on their mood and listen.",
    rwenRole: "Korean friend — peer, polite, opening up.",
    successCriteria: "User asks 기분이 어때요?, listens, responds with empathy. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
