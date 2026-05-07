import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-kdrama-register',
  module: 10,
  lesson: 5,
  title: 'K-Drama Register — Slow, Heightened',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "K-drama Korean is its own register: slower, more emotional, with fixed phrases that real people rarely say. 사랑해요 (I love you), 미안해 (I'm sorry, banmal), 보고 싶어요 (I miss you).",
    culturalNote: "Real Korean couples don't say 사랑해요 daily — that's drama. But 보고 싶어요 (I miss you) is heard often, especially in long-distance and family. Recognizing the K-drama register helps you not over-deploy it.",
  },

  chunks: [
    { id: 'saranghae', target: '사랑해요', native: 'I love you', literal: 'love-do-yo', emoji: '❤️', phonetic: 'sa-rang-hae-yo', audioRef: null },
    { id: 'bogosipeoyo', target: '보고 싶어요', native: 'I miss you', literal: 'see-want-yo', emoji: '🌙', phonetic: 'bo-go si-peo-yo', audioRef: null },
    { id: 'yeppeoyo', target: '예뻐요 / 멋있어요', native: 'Pretty (f) / Cool (m)', literal: 'pretty / cool', emoji: '✨', phonetic: 'ye-ppeo-yo / meo-si-sseo-yo', audioRef: null },
  ],

  pattern: {
    name: 'Heightened K-drama phrases',
    explanation: "These are real but used sparingly in daily life. Heightened in dramas. 사랑해요 said first time = relationship beat. 보고 싶어요 = absence-marker.",
    examples: [
      { target: '사랑해요', native: 'I love you' },
      { target: '보고 싶었어요', native: 'I missed you (past)' },
      { target: '예뻐요', native: 'Pretty' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '사랑해요', right: 'I love you' },
      { left: '보고 싶어요', right: 'I miss you' },
      { left: '예뻐요', right: 'Pretty' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I miss you', correct: ['보고 싶어요', 'bogo sipeoyo'] },
    { type: 'fill_blank', instruction: 'Compliment', sentence: '오늘 정말 _____!', options: ['예뻐요', '비싸요', '슬퍼요'], correct: '예뻐요', context: 'Pretty/beautiful.' },
    { type: 'build_sentence', instruction: 'Build "I missed you (past)"', words: ['보고', '싶었어요'], correct: ['보고', '싶었어요'], translation: 'I missed you.' },
    { type: 'multiple_choice', instruction: 'When is 사랑해요 said in real life?', question: 'Pick the cultural read', options: [
      { text: 'Sparingly — relationship-defining moments', correct: true },
      { text: 'Daily, every conversation', correct: false },
      { text: 'Never', correct: false },
    ], explanation: 'Real Korean couples save it. Dramas use it for impact.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Cool / handsome', correct: ['멋있어요', 'meosisseoyo'] },
  ],

  rwenDialogue: {
    intro: "K-drama scene. The character finally confesses.",
    lines: [
      { speaker: 'rwen', rwenLine: '"I love you" — the moment. Translate.' },
      { speaker: 'user', userChoices: [
        { target: '사랑해요', native: 'I love you (polite)', correct: true, feedback: '사랑해요 — the relationship beat.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong moment.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'rwen', rwenLine: "K-drama register — heightened, sparing, deliberate. Save the big phrases.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I love you', correct: ['사랑해요', 'saranghaeyo'] },
      { prompt: 'I miss you', correct: ['보고 싶어요', 'bogo sipeoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Watch one K-drama scene. Spot one heightened phrase. Notice when it's said.",
    rwenSignoff: "K-drama Korean = its own register. Use sparingly.",
  },

  phase8: {
    scenario: "K-drama discussion — friend asks which K-drama lines you've learned. You demonstrate awareness of the heightened register.",
    rwenRole: "Korean K-drama fan friend — peer, polite.",
    successCriteria: "User uses 사랑해요/보고 싶어요/예뻐요 in K-drama discussion. Recognizes they're not daily speech.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
