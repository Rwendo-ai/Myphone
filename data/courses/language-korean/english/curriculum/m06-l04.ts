import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-native-1-10',
  module: 6,
  lesson: 4,
  title: 'Native Korean 1-10',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟, 아홉, 열. Native Korean 1-10. Used for hours, ages, counting items. Some forms shrink before counter words: 하나 → 한, 둘 → 두, 셋 → 세, 넷 → 네.",
    culturalNote: "Korean drinking culture: pour for the older person, count out shots in Native. 한 잔 더! (one more shot!) — uses Native 한, not Sino 일.",
  },

  chunks: [
    { id: 'native_1_5', target: '하나 / 둘 / 셋 / 넷 / 다섯', native: '1-5 (Native)', literal: 'Native 1-5', emoji: '✋', phonetic: 'ha-na / dul / set / net / da-seot', audioRef: null },
    { id: 'native_6_10', target: '여섯 / 일곱 / 여덟 / 아홉 / 열', native: '6-10 (Native)', literal: 'Native 6-10', emoji: '🔟', phonetic: 'yeo-seot / il-gop / yeo-deol / a-hop / yeol', audioRef: null },
    { id: 'shrink', target: '한 / 두 / 세 / 네', native: '1/2/3/4 shrink before counters', literal: 'shrunk before counter', emoji: '🤏', phonetic: 'han / du / se / ne', audioRef: null },
  ],

  pattern: {
    name: 'Shrinking before counter words',
    explanation: "Native 1-4 SHRINK before counter words: 한 잔 (one cup), 두 명 (two people), 세 시 (three o'clock), 네 살 (four years old). 5+ stays unchanged: 다섯 잔, 여섯 명.",
    examples: [
      { target: '한 잔', native: 'One cup/shot' },
      { target: '두 명', native: 'Two people' },
      { target: '세 시', native: "Three o'clock" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match Native to digit', pairs: [
      { left: '하나', right: '1' },
      { left: '다섯', right: '5' },
      { left: '열', right: '10' },
    ]},
    { type: 'translate', instruction: 'Type Native Korean', prompt: '5 (Native)', correct: ['다섯', 'daseot'] },
    { type: 'fill_blank', instruction: 'Order one shot', sentence: '_____ 잔 더 주세요', options: ['한', '하나', '일'], correct: '한', context: 'Native 1 shrinks to 한 before 잔.' },
    { type: 'build_sentence', instruction: 'Build "Three people"', words: ['명', '세'], correct: ['세', '명'], translation: 'Three people.' },
    { type: 'multiple_choice', instruction: '"4 o\'clock" — pick the right form', question: 'Pick the shrunk Native', options: [
      { text: '네 시', correct: true },
      { text: '넷 시', correct: false },
      { text: '사 시', correct: false },
    ], explanation: 'Native 4 shrinks to 네 before 시. Sino 사 doesn\'t do hours.' },
    { type: 'translate', instruction: 'Type Native Korean', prompt: '10 (Native)', correct: ['열', 'yeol'] },
  ],

  rwenDialogue: {
    intro: "Korean BBQ table. You're ordering shots of soju.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '소주 한 병 주세요', native: 'One bottle of soju please', correct: true, feedback: '한 (shrunk Native) + 병 (counter for bottles).' },
        { target: '소주 하나 병 주세요', native: 'One-not-shrunk bottle (wrong)', correct: false, feedback: '하나 must shrink to 한 before counter words.' },
        { target: '소주 일 병 주세요', native: 'Sino 1 (wrong system)', correct: false, feedback: 'Counting items uses Native, not Sino.' },
      ]},
      { speaker: 'npc', target: '네! 한 병 나갑니다!', native: 'Yes! One bottle coming up!' },
      { speaker: 'rwen', rwenLine: '하나/둘/셋/넷 shrink to 한/두/세/네 before counters. Memorize the four shrinkers.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: '5 (Native)', correct: ['다섯', 'daseot'] },
      { prompt: '1 (Native, before a counter word)', correct: ['한', 'han'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Count 1-10 in Native, twice. Then count 1-4 with a counter (한 잔, 두 잔, 세 잔, 네 잔).",
    rwenSignoff: "Native 1-10 + the four shrinkers. Counting unlocks.",
  },

  phase8: {
    scenario: "Korean BBQ — you order soju and meat in counter words. Native shrinking required.",
    rwenRole: "Server — polite, fast.",
    successCriteria: "User uses Native + correct counter (병 for bottles, 인분 for portions). 1-4 shrink properly. Avoids Sino for counted items.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
