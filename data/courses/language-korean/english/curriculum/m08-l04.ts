import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-bwa-deuleo',
  module: 8,
  lesson: 4,
  title: 'Boda / Deutda — See & Listen',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "보다 (to see/watch) and 듣다 (to listen). 영화를 봐요 = I watch a movie. 음악을 들어요 = I listen to music. Watch the irregular: 듣다 → 들어요 (the ㄷ becomes ㄹ before vowel).",
    culturalNote: "K-drama (한국 드라마) and K-pop are the two universal Korean cultural exports. Saying 한국 드라마 봐요 / K-pop 들어요 unlocks instant warmth from any Korean.",
  },

  chunks: [
    { id: 'bwayo', target: '봐요', native: 'I see / watch (polite)', literal: 'see-yo', emoji: '👀', phonetic: 'bwa-yo', audioRef: null },
    { id: 'deureoyo', target: '들어요', native: 'I listen (polite, irregular)', literal: 'listen-yo', emoji: '🎧', phonetic: 'deu-reo-yo', audioRef: null },
    { id: 'kdrama_bwa', target: '드라마를 봐요', native: 'I watch K-dramas', literal: 'drama-OBJ see-yo', emoji: '📺', phonetic: 'deu-ra-ma-reul bwa-yo', audioRef: null },
  ],

  pattern: {
    name: '보다 + 을/를 = watch X. 듣다 → 들어요 (irregular)',
    explanation: "보다 is regular: 봐요. 듣다 is ㄷ-irregular: ㄷ → ㄹ before a vowel ending. 듣 + 어요 → 들어요.",
    examples: [
      { target: '영화를 봐요', native: 'I watch a movie' },
      { target: '음악을 들어요', native: 'I listen to music' },
      { target: 'K-pop 들어요', native: 'I listen to K-pop' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match verb to meaning', pairs: [
      { left: '봐요', right: 'I see / watch' },
      { left: '들어요', right: 'I listen' },
      { left: '영화', right: 'Movie' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I watch K-drama', correct: ['드라마를 봐요', 'K-드라마를 봐요', 'deuramareul bwayo'] },
    { type: 'fill_blank', instruction: 'Listen verb (irregular)', sentence: 'K-pop _____.', options: ['들어요', '듣어요', '듣아요'], correct: '들어요', context: 'ㄷ irregular: 듣 + 어 → 들어.' },
    { type: 'build_sentence', instruction: 'Build "I listen to music"', words: ['들어요', '음악을'], correct: ['음악을', '들어요'], translation: 'I listen to music.' },
    { type: 'multiple_choice', instruction: 'How do you say "I love K-drama"?', question: 'Pick the natural sentence', options: [
      { text: 'K-드라마 정말 좋아해요', correct: true },
      { text: 'K-드라마 들어요', correct: false },
      { text: 'K-드라마 가요', correct: false },
    ], explanation: '좋아하다 = to like. 듣다 = listen (audio only). 가다 = go.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I watch a movie', correct: ['영화를 봐요', '저는 영화를 봐요', 'yeonghwareul bwayo'] },
  ],

  rwenDialogue: {
    intro: "K-drama small talk with a new Korean friend.",
    lines: [
      { speaker: 'npc', target: '한국 드라마 봐요?', native: 'Do you watch K-dramas?' },
      { speaker: 'user', userChoices: [
        { target: '네, 자주 봐요. K-pop도 들어요', native: 'Yes, often. I also listen to K-pop', correct: true, feedback: 'Two verbs in one breath. Korean cultural connect.' },
        { target: '드라마 비싸요', native: 'Drama is expensive (wrong)', correct: false, feedback: 'Wrong sentence shape.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '와! 어떤 드라마 좋아해요?', native: 'Wow! Which dramas?' },
      { speaker: 'rwen', rwenLine: '봐요/들어요 — Korean culture verbs. Use them to bond.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I watch a movie', correct: ['영화를 봐요', '저는 영화를 봐요', 'yeonghwareul bwayo'] },
      { prompt: 'I listen to music', correct: ['음악을 들어요', 'eumageul deureoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick a K-drama or K-pop song. Build the Korean sentence: 저는 [name] 봐요/들어요.",
    rwenSignoff: "보다/듣다 — culture's verbs. Use them to bond.",
  },

  phase8: {
    scenario: "Korean friend asks about your K-drama and K-pop habits.",
    rwenRole: "Korean friend — peer, polite, curious.",
    successCriteria: "User uses 봐요 for visual content, 들어요 for audio. Names at least one drama or artist.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
