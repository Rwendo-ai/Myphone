import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-saneun',
  module: 3,
  lesson: 4,
  title: 'Eodi-e Sa-seyo? — Where Do You Live?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After name, job, age — Koreans often ask where you LIVE (not just where you're from). 어디 사세요? slots you geographically. 저는 서울에 살아요 — I live in Seoul.",
    culturalNote: "Where in Seoul matters: 강남 (Gangnam — affluent south), 홍대 (Hongdae — university/art), 이태원 (Itaewon — international), 종로 (Jongno — old-Seoul-historic). The neighborhood telegraphs lifestyle.",
  },

  chunks: [
    { id: 'eodi_saseyo', target: '어디 사세요?', native: 'Where do you live?', literal: 'where live-polite?', emoji: '🏠', phonetic: 'eo-di sa-se-yo', audioRef: null },
    { id: 'salayo', target: '___에 살아요', native: 'I live in ___', literal: '___-LOC live-yo', emoji: '🏘️', phonetic: '___-e sa-ra-yo', audioRef: null },
    { id: 'eseo_geunjeo', target: '___ 근처에 살아요', native: 'I live near ___', literal: '___ nearby-LOC live', emoji: '📍', phonetic: '___ geun-cheo-e sa-ra-yo', audioRef: null },
  ],

  pattern: {
    name: '에 살아요 — location marker for living',
    explanation: "에 marks location. 살아요 = live (polite). Place + 에 + 살아요 = 'I live in [place]'.",
    examples: [
      { target: '서울에 살아요', native: 'I live in Seoul' },
      { target: '강남에 살아요', native: 'I live in Gangnam' },
      { target: '홍대 근처에 살아요', native: 'I live near Hongdae' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match neighborhood to vibe', pairs: [
      { left: '강남', right: 'Affluent south' },
      { left: '홍대', right: 'University / art' },
      { left: '이태원', right: 'International' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Where do you live?', correct: ['어디 사세요?', 'eodi saseyo'] },
    { type: 'fill_blank', instruction: 'Complete the location', sentence: '저는 서울_____ 살아요.', options: ['에', '에서', '의'], correct: '에', context: '에 marks location for "live in".' },
    { type: 'build_sentence', instruction: 'Build "I live in Hongdae"', words: ['살아요', '홍대에'], correct: ['홍대에', '살아요'], translation: 'I live in Hongdae.' },
    { type: 'multiple_choice', instruction: "You live near Hongdae but not in it. Best phrasing?", question: 'Pick the precise version', options: [
      { text: '홍대 근처에 살아요', correct: true },
      { text: '홍대에 살아요', correct: false },
      { text: '홍대에서 왔어요', correct: false },
    ], explanation: '근처에 = "near". 에서 왔어요 means "came from" (origin), not "live near".' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I live in Seoul', correct: ['서울에 살아요', 'seoure sarayo'] },
  ],

  rwenDialogue: {
    intro: "Coffee with a new Korean coworker at a Hongdae café.",
    lines: [
      { speaker: 'npc', target: '어디 사세요?', native: 'Where do you live?' },
      { speaker: 'user', userChoices: [
        { target: '홍대 근처에 살아요', native: 'I live near Hongdae', correct: true, feedback: 'Precise + polite. The café is near you.' },
        { target: '홍대에서 왔어요', native: 'I came from Hongdae', correct: false, feedback: 'Origin verb — different question.' },
        { target: '홍대', native: 'Hongdae (just word)', correct: false, feedback: 'Add 에 + 살아요 for full sentence.' },
      ]},
      { speaker: 'npc', target: '아, 가깝네요!', native: 'Ah, that\'s close!' },
      { speaker: 'rwen', rwenLine: "에 살아요 — location verb. Different from 에서 왔어요 (origin). Two different questions, two different markers.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Where do you live?', correct: ['어디 사세요?', 'eodi saseyo'] },
      { prompt: 'I live in Seoul', correct: ['서울에 살아요', 'seoure sarayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Where do you live? Answer in Korean: 저는 [place]에 살아요. Or 근처에 살아요 if it's nearby.",
    rwenSignoff: "From 'where from' to 'where now' — your location story upgrades.",
  },

  phase8: {
    scenario: "Coffee with a new coworker. They ask the standard small-talk circuit, including where you live.",
    rwenRole: "Coworker — 30s, friendly, polite.",
    successCriteria: "User answers 어디 사세요? with [place]에 살아요. Distinguishes from 에서 왔어요. Bounces back politely.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
