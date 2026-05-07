import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-shopping',
  module: 9,
  lesson: 9,
  title: 'Shopping — Trying On & Asking',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Shopping Korean: 입어봐도 돼요? (can I try it on?), 사이즈 (size), 다른 색깔 (different color). Try-on culture is universal in Korean fashion shops.",
    culturalNote: "Myeongdong, Hongdae, and Dongdaemun are Seoul's main shopping districts. Sizes run small by Western standards — knowing 큰 사이즈 (large size) helps. Most shops accept card.",
  },

  chunks: [
    { id: 'ipeobwado', target: '입어봐도 돼요?', native: 'Can I try it on?', literal: 'wear-try-also ok-yo?', emoji: '👕', phonetic: 'i-beo-bwa-do dwae-yo', audioRef: null },
    { id: 'saijeu', target: '사이즈', native: 'Size', literal: 'size', emoji: '📏', phonetic: 'sa-i-jeu', audioRef: null },
    { id: 'daereun_saekkkal', target: '다른 색깔 있어요?', native: 'Do you have a different color?', literal: 'different color exist-yo?', emoji: '🎨', phonetic: 'da-reun saek-kkal i-sseo-yo', audioRef: null },
  ],

  pattern: {
    name: '-아/어도 돼요? — "Is it ok if I ___?"',
    explanation: "Verb stem + -아/어도 돼요? = polite permission ask. 입어봐도 돼요? = is it ok if I try it on?",
    examples: [
      { target: '입어봐도 돼요?', native: 'Can I try it on?' },
      { target: '큰 사이즈 있어요?', native: 'Do you have a larger size?' },
      { target: '다른 색깔 있어요?', native: 'Different color?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '입어봐도 돼요?', right: 'Can I try it on?' },
      { left: '사이즈', right: 'Size' },
      { left: '다른 색깔', right: 'Different color' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Can I try it on?', correct: ['입어봐도 돼요?', 'ibeobwado dwaeyo'] },
    { type: 'fill_blank', instruction: 'Ask for a different color', sentence: '다른 _____ 있어요?', options: ['색깔', '사이즈', '비싸'], correct: '색깔', context: 'Color.' },
    { type: 'build_sentence', instruction: 'Build "Do you have a larger size?"', words: ['있어요?', '큰', '사이즈'], correct: ['큰', '사이즈', '있어요?'], translation: 'Do you have a larger size?' },
    { type: 'multiple_choice', instruction: 'Polite Korean for "is it ok if I try this on?"', question: 'Pick the natural ask', options: [
      { text: '입어봐도 돼요?', correct: true },
      { text: '입어요?', correct: false },
      { text: '비싸요?', correct: false },
    ], explanation: '-아/어도 돼요? = polite permission. 입어요? alone is just "do you wear it?".' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Do you have a different color?', correct: ['다른 색깔 있어요?', 'dareun saekkkal isseoyo'] },
  ],

  rwenDialogue: {
    intro: "Myeongdong clothing store. You spot a shirt.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '이거 입어봐도 돼요?', native: 'Can I try this on?', correct: true, feedback: 'Permission ask — polite.' },
        { target: '이거 비싸요', native: 'Expensive', correct: false, feedback: 'You haven\'t even tried it on.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '네, 탈의실은 저쪽이에요.', native: "Yes, the fitting room is over there." },
      { speaker: 'rwen', rwenLine: "쇼핑 Korean = permission + size + color. Try on, decide, buy.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Can I try it on?', correct: ['입어봐도 돼요?', 'ibeobwado dwaeyo'] },
      { prompt: 'Different color?', correct: ['다른 색깔 있어요?', 'dareun saekkkal isseoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture three shopping situations. Use 입어봐도 돼요? / 사이즈 / 다른 색깔.",
    rwenSignoff: "Shopping Korean = permission + comparison. Now you can browse.",
  },

  phase8: {
    scenario: "Myeongdong clothing shop. You try on a shirt, ask about sizes and colors.",
    rwenRole: "Shop staff — 30s, polite.",
    successCriteria: "User uses 입어봐도 돼요?, asks for 큰 사이즈 or 다른 색깔. Decides whether to buy. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
