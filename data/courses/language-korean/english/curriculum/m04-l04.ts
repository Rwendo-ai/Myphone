import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-sov',
  module: 4,
  lesson: 4,
  title: 'Korean SOV Order — The Verb Goes Last',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Korean is Subject-Object-Verb. English is Subject-Verb-Object. The flip is the single biggest mental shift in your first month — the verb anchors the END of every sentence, not the middle.",
    culturalNote: "Because the verb comes last, Koreans often wait until you finish to know what you're saying. Don't trail off — the most important word is your last word.",
  },

  chunks: [
    { id: 'sov', target: 'S - O - V', native: 'Subject - Object - Verb (Korean order)', literal: 'order', emoji: '➡️', phonetic: 'es oh vee', audioRef: null },
    { id: 'meogeoyo', target: '먹어요', native: 'eat (polite)', literal: 'eat-yo', emoji: '🍴', phonetic: 'meo-geo-yo', audioRef: null },
    { id: 'masyeoyo', target: '마셔요', native: 'drink (polite)', literal: 'drink-yo', emoji: '🥤', phonetic: 'ma-syeo-yo', audioRef: null },
  ],

  pattern: {
    name: 'Verb at the END',
    explanation: "Whatever the sentence, the verb goes last. Add adverbs, time, place — the verb still anchors the end.",
    examples: [
      { target: '저는 커피를 마셔요', native: 'I + coffee-OBJ + drink' },
      { target: '저는 오늘 김치를 먹어요', native: 'I + today + kimchi-OBJ + eat' },
      { target: '내일 영화를 봐요', native: 'Tomorrow + movie-OBJ + watch' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match Korean to English', pairs: [
      { left: '저는 김치를 먹어요', right: 'I eat kimchi' },
      { left: '저는 커피를 마셔요', right: 'I drink coffee' },
      { left: '저는 영화를 봐요', right: 'I watch a movie' },
    ]},
    { type: 'multiple_choice', instruction: '"I drink coffee" in Korean. Which order?', question: 'Pick the SOV', options: [
      { text: '저는 커피를 마셔요', correct: true },
      { text: '저는 마셔요 커피를', correct: false },
      { text: '마셔요 저는 커피를', correct: false },
    ], explanation: 'S-O-V. Verb last, always.' },
    { type: 'build_sentence', instruction: 'Build "I read a book today"', words: ['책을', '오늘', '저는', '읽어요'], correct: ['저는', '오늘', '책을', '읽어요'], translation: 'I read a book today.' },
    { type: 'fill_blank', instruction: 'Complete with the verb', sentence: '저는 김치를 _____.', options: ['먹어요', '먹어요는', '먹어요를'], correct: '먹어요', context: 'Verb takes the polite ending only.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I watch a movie', correct: ['저는 영화를 봐요', '영화를 봐요', 'jeoneun yeonghwareul bwayo'] },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I drink water', correct: ['저는 물을 마셔요', '물을 마셔요', 'jeoneun mureul masyeoyo'] },
  ],

  rwenDialogue: {
    intro: "Rwen tests SOV under time pressure.",
    lines: [
      { speaker: 'rwen', rwenLine: 'Quickfire: "I eat kimchi today." Order it.' },
      { speaker: 'user', userChoices: [
        { target: '저는 오늘 김치를 먹어요', native: 'S-time-O-V', correct: true, feedback: 'Time slips between subject and object — verb still last.' },
        { target: '저는 먹어요 김치를 오늘', native: 'S-V-O-time', correct: false, feedback: 'Verb is NOT in the middle. Always last.' },
        { target: '먹어요 김치를 저는 오늘', native: 'V-O-S-time', correct: false, feedback: 'Verb-first feels English-like — wrong for Korean.' },
      ]},
      { speaker: 'rwen', rwenLine: 'SOV. Time, place, manner all slot before the verb. The verb is the anchor.' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I drink coffee', correct: ['저는 커피를 마셔요', '커피를 마셔요', 'jeoneun keopireul masyeoyo'] },
      { prompt: 'Korean word order', correct: ['SOV', 'sov', 'subject object verb'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Take three English sentences. Flip them to SOV in Korean structure. The verb goes last.",
    rwenSignoff: "Korean's spine: SOV. The verb anchors the end.",
  },

  phase8: {
    scenario: "Rwen drills SOV sentence-building with various subjects, objects, and verbs.",
    rwenRole: "Rwen — grammar coach.",
    successCriteria: "User produces at least 3 SOV sentences with verb correctly at the end.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
