import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-grammar-conversation',
  module: 4,
  lesson: 10,
  title: 'Grammar Integration — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 4 cap. 은/는, 이/가, 을/를, SOV, 요-form, honorific 세, banmal, age hierarchy. All in one conversation. No new grammar — just running it live.",
    culturalNote: "A real Korean conversation flips between particles, registers, and address terms naturally. The mind tracks: who am I talking to, who's the subject, who's older, what register? Today's mission is making all that automatic.",
  },

  chunks: [
    { id: 'review_eunneun', target: '저는', native: 'I (topic)', literal: 'I-TOPIC', emoji: '🏷️', phonetic: 'jeo-neun', audioRef: null },
    { id: 'review_eulreul', target: '___을/를', native: '___ (object)', literal: 'OBJ', emoji: '🎯', phonetic: '-eul / -reul', audioRef: null },
    { id: 'review_seyo', target: '___세요', native: 'honorific ending', literal: 'honorific-yo', emoji: '🙇', phonetic: '-se-yo', audioRef: null },
  ],

  pattern: {
    name: 'The Grammar Stack',
    explanation: "Five layers running in every Korean sentence: topic, subject, object, verb-final, register/honorific.",
    examples: [
      { target: '저는 김치를 먹어요', native: 'I (TOPIC) eat kimchi (polite)' },
      { target: '할머니가 김치를 드세요', native: 'Grandma (SUBJ-honorific) eats (honorific) kimchi (OBJ)' },
      { target: '나 김치 먹어', native: 'I eat kimchi (banmal)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match grammar role to particle/marker', pairs: [
      { left: 'Topic', right: '은/는' },
      { left: 'Subject', right: '이/가' },
      { left: 'Object', right: '을/를' },
    ]},
    { type: 'multiple_choice', instruction: 'Talking to a stranger about your day. Best register?', question: 'Pick the safe option', options: [
      { text: '요-form throughout', correct: true },
      { text: 'Banmal — show confidence', correct: false },
      { text: '입니다 — be safe', correct: false },
    ], explanation: '요-form is daily-life polite. 입니다 is overly formal for casual chat; banmal is rude with strangers.' },
    { type: 'translate', instruction: 'Type in Korean (polite, full sentence)', prompt: 'I drink coffee', correct: ['저는 커피를 마셔요', '커피를 마셔요', 'jeoneun keopireul masyeoyo'] },
    { type: 'fill_blank', instruction: 'Honor the elder — fill the verb', sentence: '할아버지가 신문을 _____.', options: ['읽으세요', '읽어', '읽어요'], correct: '읽으세요', context: 'Subject = grandfather → honorific 으세요.' },
    { type: 'build_sentence', instruction: 'Build "I eat kimchi" (banmal)', words: ['김치', '먹어', '나'], correct: ['나', '김치', '먹어'], translation: 'I eat kimchi (banmal).' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'older brother (said by female)', correct: ['오빠', 'oppa'] },
  ],

  rwenDialogue: {
    intro: "Korean dinner with friends — your boss is at the table. You'll need to switch registers between friends and boss in the same conversation.",
    lines: [
      { speaker: 'npc', target: '저녁 드세요!', native: 'Eat dinner! (honorific from boss)' },
      { speaker: 'user', userChoices: [
        { target: '네, 잘 먹겠습니다', native: 'Yes, I will eat well (formal)', correct: true, feedback: 'Boss = formal. 잘 먹겠습니다 is the proper meal-opener.' },
        { target: '응, 먹을게', native: 'Yeah, I\'ll eat (banmal)', correct: false, feedback: 'Banmal with the boss = career damage.' },
        { target: '드세요', native: 'Eat! (you, honorific)', correct: false, feedback: 'Subject is YOU (about to eat) — no need for honorific. Boss\'s line was correct because YOU were the subject from her view.' },
      ]},
      { speaker: 'npc', target: '(close friend, banmal-mode) 야! 너 김치 안 먹어?', native: "Hey! You not eating kimchi?" },
      { speaker: 'user', userChoices: [
        { target: '먹어! 매워서 천천히 먹어', native: "I'm eating! Spicy so I eat slowly (banmal)", correct: true, feedback: 'Friend = banmal. Register switched cleanly mid-meal.' },
        { target: '먹습니다', native: 'I am eating (formal)', correct: false, feedback: 'Formal with a close friend feels weird and distancing.' },
        { target: '드세요', native: 'Eat (honorific)', correct: false, feedback: 'Self-honorific = arrogant.' },
      ]},
      { speaker: 'rwen', rwenLine: "Two registers in one meal — boss (formal) AND friend (banmal). Module 4 closed. The grammar runs in your head now.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I (topic-marked)', correct: ['저는', 'jeoneun'] },
      { prompt: 'Object marker after consonant', correct: ['을', 'eul'] },
    ],
  },

  mission: {
    title: "Your Module 4 Mission",
    task: "Build a sentence about someone older today using full grammar: subject + 이/가 + object + 을/를 + honorific verb. Out loud.",
    rwenSignoff: "Module 4 closed. The grammar engine is running. Module 5 = family.",
  },

  phase8: {
    scenario: "A Korean dinner at home with the boss AND close friends at the same table — you must switch register naturally between them across the meal.",
    rwenRole: "Multiple — boss (formal/honorific), close friend (banmal-mutual).",
    successCriteria: "User uses formal/honorific with boss, banmal with close friend, all in one conversation. Particles correct (은/는, 이/가, 을/를). NO mixing registers per partner.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
