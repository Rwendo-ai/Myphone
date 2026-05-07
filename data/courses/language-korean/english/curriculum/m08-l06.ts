import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-past-tense',
  module: 8,
  lesson: 6,
  title: 'Past Tense — -었/았어요',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Past tense polite = -었어요/았어요. Pick by the vowel of the stem. 먹다 → 먹었어요. 가다 → 갔어요. 하다 → 했어요. The ㅏ/ㅗ stems take 았; everything else 었.",
    culturalNote: "Past tense is mandatory in Korean — you can't drop it like English casual speech. 어제 (yesterday) automatically calls for past tense form.",
  },

  chunks: [
    { id: 'eosseoyo', target: '___었어요 / 았어요', native: 'past polite ending', literal: 'past-yo', emoji: '⏪', phonetic: '-eo-sseo-yo / -a-sseo-yo', audioRef: null },
    { id: 'gasseoyo', target: '갔어요', native: 'I went', literal: 'went-yo', emoji: '🚶', phonetic: 'ga-sseo-yo', audioRef: null },
    { id: 'haesseoyo', target: '했어요', native: 'I did', literal: 'did-yo', emoji: '✅', phonetic: 'hae-sseo-yo', audioRef: null },
  ],

  pattern: {
    name: 'Stem vowel determines 았 vs 었',
    explanation: "ㅏ or ㅗ stem → 았어요. Other → 었어요. 하다 contracts to 했어요. Memorize the three biggies: 갔어요, 먹었어요, 했어요.",
    examples: [
      { target: '갔어요', native: 'went (가다)' },
      { target: '먹었어요', native: 'ate (먹다)' },
      { target: '했어요', native: 'did (하다)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match present to past', pairs: [
      { left: '가요', right: '갔어요' },
      { left: '먹어요', right: '먹었어요' },
      { left: '해요', right: '했어요' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I ate (polite past)', correct: ['먹었어요', 'meogeosseoyo'] },
    { type: 'fill_blank', instruction: 'Yesterday I went to school', sentence: '어제 학교에 _____.', options: ['갔어요', '가요', '갈게요'], correct: '갔어요', context: '어제 = yesterday → past tense.' },
    { type: 'build_sentence', instruction: 'Build "I drank coffee" (past)', words: ['커피를', '마셨어요', '저는'], correct: ['저는', '커피를', '마셨어요'], translation: 'I drank coffee.' },
    { type: 'multiple_choice', instruction: 'Past tense of 운동해요?', question: 'Pick the right past form', options: [
      { text: '운동했어요', correct: true },
      { text: '운동해어요', correct: false },
      { text: '운동가요', correct: false },
    ], explanation: '하다 contracts to 했어요. 운동했어요 = "exercised".' },
    { type: 'translate', instruction: 'Type in Korean (past)', prompt: 'I went', correct: ['갔어요', 'gasseoyo'] },
  ],

  rwenDialogue: {
    intro: "Friend asks what you did over the weekend.",
    lines: [
      { speaker: 'npc', target: '주말에 뭐 했어요?', native: 'What did you do this weekend?' },
      { speaker: 'user', userChoices: [
        { target: '홍대에 갔어요. 친구 만났어요', native: 'I went to Hongdae. Met a friend', correct: true, feedback: 'Two past tense verbs in sequence. Story-telling unlocked.' },
        { target: '홍대에 가요', native: 'Present tense (wrong)', correct: false, feedback: '주말 already happened — needs past.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '재미있었어요?', native: 'Was it fun?' },
      { speaker: 'rwen', rwenLine: "Past tense + adverbs of time = your Korean storytelling kit.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I ate (past)', correct: ['먹었어요', 'meogeosseoyo'] },
      { prompt: 'I went (past)', correct: ['갔어요', 'gasseoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell three things you did yesterday in Korean. Past tense. Out loud.",
    rwenSignoff: "Past unlocked. Now you can tell stories.",
  },

  phase8: {
    scenario: "Korean friend asks about your weekend or yesterday — you describe several past actions.",
    rwenRole: "Korean friend — peer, polite.",
    successCriteria: "User uses past tense -았/었어요 correctly for 3+ verbs. Time markers (어제/주말에) trigger past form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
