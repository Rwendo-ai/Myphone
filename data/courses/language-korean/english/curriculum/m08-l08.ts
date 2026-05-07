import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-negation',
  module: 8,
  lesson: 8,
  title: 'Negation — 안 / 못',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two negations in Korean: 안 (don't / not — choice) and 못 (can't — incapable). 안 가요 = I'm not going (choice). 못 가요 = I can't go (impossibility).",
    culturalNote: "Refusing politely in Korea often uses 못 — softer than 안. 못 가요 (I can't go) sounds less personal than 안 가요 (I'm not going).",
  },

  chunks: [
    { id: 'an', target: '안', native: "Negation (not / don't — choice)", literal: 'not', emoji: '🙅', phonetic: 'an', audioRef: null },
    { id: 'mot', target: '못', native: "Negation (can't — incapable)", literal: 'cannot', emoji: '🚫', phonetic: 'mot', audioRef: null },
    { id: 'an_gayo', target: '안 가요 / 못 가요', native: "I don't go / I can't go", literal: 'not go / cannot go', emoji: '↔️', phonetic: 'an ga-yo / mot ga-yo', audioRef: null },
  ],

  pattern: {
    name: 'Place 안/못 BEFORE the verb',
    explanation: "안 안 안 vs 못. 안 = chose not. 못 = couldn't. Goes right before the verb.",
    examples: [
      { target: '안 먹어요', native: "I don't eat (choice)" },
      { target: '못 먹어요', native: "I can't eat (allergy/full)" },
      { target: '안 갔어요', native: "I didn't go (chose not to)" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match negation to meaning', pairs: [
      { left: '안 가요', right: "I'm not going (choice)" },
      { left: '못 가요', right: "I can't go (unable)" },
      { left: '안 먹어요', right: "I don't eat" },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "I can't eat (allergy)", correct: ['못 먹어요', 'mot meogeoyo'] },
    { type: 'fill_blank', instruction: 'Politely decline a meetup', sentence: '내일 _____ 가요. 일이 있어요.', options: ['못', '안', '에'], correct: '못', context: '못 = softer "can\'t" because of obligation.' },
    { type: 'build_sentence', instruction: "Build \"I don't drink alcohol\"", words: ['안', '술을', '마셔요'], correct: ['술을', '안', '마셔요'], translation: "I don't drink alcohol." },
    { type: 'multiple_choice', instruction: 'Best polite refusal for a dinner invite (busy)?', question: 'Pick the softer negation', options: [
      { text: '못 가요', correct: true },
      { text: '안 가요', correct: false },
      { text: '비싸요', correct: false },
    ], explanation: '못 (can\'t) reads as obligation-based, less personal. 안 (won\'t) feels chosen against them.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "I don't go", correct: ['안 가요', 'an gayo'] },
  ],

  rwenDialogue: {
    intro: "Friend invites you to dinner but you have plans.",
    lines: [
      { speaker: 'npc', target: '오늘 저녁 같이 먹을래요?', native: 'Want to eat dinner together?' },
      { speaker: 'user', userChoices: [
        { target: '죄송해요, 못 가요. 일이 있어요', native: "Sorry, can't go. I have work", correct: true, feedback: '못 + reason — softer refusal.' },
        { target: '안 가요', native: "I don't go (sounds personal)", correct: false, feedback: '안 reads as a personal choice against them. Use 못 with reason.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '아, 다음에 봐요!', native: "Ah, see you next time!" },
      { speaker: 'rwen', rwenLine: "안 vs 못 — choice vs capability. Pick by social weight.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: "I can't go", correct: ['못 가요', 'mot gayo'] },
      { prompt: "I don't eat (it)", correct: ['안 먹어요', 'an meogeoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Two refusals: choose-not and can't. Pair each with a Korean verb.",
    rwenSignoff: "Two negations. Pick by social weight.",
  },

  phase8: {
    scenario: "Multiple invitations — you accept some, refuse others. Use 안 vs 못 by context.",
    rwenRole: "Multiple Korean friends/coworkers.",
    successCriteria: "User uses 못 + reason for soft refusal, 안 for personal choice. Adds 죄송해요 when refusing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
