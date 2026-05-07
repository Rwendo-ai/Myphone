import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-jokyongseong',
  module: 10,
  lesson: 6,
  title: 'Telling Stories — Past Narrative',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Stories run in past tense + connectors. 그리고 (and then), 그래서 (so), 그런데 (but). Sequencing in Korean is its own dance.",
    culturalNote: "Korean storytelling tends to build slowly: setup → small details → the turn → payoff. Western storytellers often jump to the punch; Korean storytellers savor the build.",
  },

  chunks: [
    { id: 'geurigo', target: '그리고', native: 'And then', literal: 'and-then', emoji: '➡️', phonetic: 'geu-ri-go', audioRef: null },
    { id: 'geuraeseo', target: '그래서', native: 'So / therefore', literal: 'so', emoji: '🔗', phonetic: 'geu-rae-seo', audioRef: null },
    { id: 'geureonde', target: '그런데', native: 'But / however', literal: 'but-then', emoji: '↩️', phonetic: 'geu-reon-de', audioRef: null },
  ],

  pattern: {
    name: 'Story connectors at sentence start',
    explanation: "Past tense + connectors at the start of each follow-on sentence. 그리고 (and), 그래서 (so), 그런데 (but).",
    examples: [
      { target: '어제 학교에 갔어요. 그리고 친구를 만났어요', native: 'Yesterday I went to school. And then met a friend' },
      { target: '비가 왔어요. 그래서 집에 있었어요', native: 'It rained. So I stayed home' },
      { target: '갔어요. 그런데 닫혀 있었어요', native: 'I went. But it was closed' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match connector to meaning', pairs: [
      { left: '그리고', right: 'And then' },
      { left: '그래서', right: 'So / therefore' },
      { left: '그런데', right: 'But / however' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'And then', correct: ['그리고', 'geurigo'] },
    { type: 'fill_blank', instruction: 'Cause-effect connector', sentence: '비가 왔어요. _____ 집에 있었어요.', options: ['그래서', '그런데', '안녕히'], correct: '그래서', context: 'Cause → effect.' },
    { type: 'build_sentence', instruction: 'Build "I went. But it was closed"', words: ['닫혀 있었어요', '갔어요.', '그런데'], correct: ['갔어요.', '그런데', '닫혀 있었어요'], translation: 'I went. But it was closed.' },
    { type: 'multiple_choice', instruction: 'Which connector for "I was tired, so I slept"?', question: 'Pick the connector', options: [
      { text: '그래서', correct: true },
      { text: '그런데', correct: false },
      { text: '그리고', correct: false },
    ], explanation: 'Cause → effect = 그래서.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'But / however', correct: ['그런데', 'geureonde'] },
  ],

  rwenDialogue: {
    intro: "Friend asks about your weekend story.",
    lines: [
      { speaker: 'npc', target: '주말에 뭐 했어요?', native: 'What did you do this weekend?' },
      { speaker: 'user', userChoices: [
        { target: '홍대에 갔어요. 그리고 친구를 만났어요. 그런데 비가 왔어요', native: 'Went to Hongdae. Then met friend. But it rained', correct: true, feedback: 'Three connectors, full mini-story. Module 10 storytelling.' },
        { target: '홍대 비싸요', native: 'Hongdae expensive', correct: false, feedback: 'Wrong shape.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '아, 비 와서 짜증났겠어요', native: "Ah, the rain must have been annoying" },
      { speaker: 'rwen', rwenLine: "Connectors = your story spine. Past tense + 그리고/그래서/그런데.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'And then', correct: ['그리고', 'geurigo'] },
      { prompt: 'So / therefore', correct: ['그래서', 'geuraeseo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell yesterday in three sentences with three connectors. 그리고 / 그래서 / 그런데.",
    rwenSignoff: "Connectors = story spine. Korean narratives unlock.",
  },

  phase8: {
    scenario: "Coffee with a Korean friend — you tell a multi-part story about your weekend using past tense and connectors.",
    rwenRole: "Korean friend — peer, polite, listening.",
    successCriteria: "User chains 3+ past tense sentences with 그리고/그래서/그런데. Story has setup-middle-end.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
