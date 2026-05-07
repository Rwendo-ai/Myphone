import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-eottoke-jinaeyo',
  module: 1,
  lesson: 9,
  title: 'Eotteohke Jinaeyo? — How Have You Been?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "어떻게 지내요? — 'how have you been?'. Slightly different from 잘 지냈어요? — that's past tense ('have you been well?'); this one is open-ended present. Both common; both polite.",
    culturalNote: "Korean small-talk leans on a few stable check-ins: 잘 지내요?, 어떻게 지내요?, 별일 없어요? Each one is a little different; together they're the rotation that keeps a relationship warm.",
  },

  chunks: [
    { id: 'eottoke_jinaeyo', target: '어떻게 지내요?', native: 'How have you been?', literal: 'how get-along-yo?', emoji: '☕', phonetic: 'eo-tteo-ke ji-nae-yo', audioRef: null },
    { id: 'jal_jinaeyo', target: '잘 지내요', native: "I've been well / I'm doing well", literal: 'well get-along-yo', emoji: '😊', phonetic: 'jal ji-nae-yo', audioRef: null },
    { id: 'byeolil', target: '별일 없어요?', native: 'Anything new? / Everything ok?', literal: 'special-thing nothing-yo?', emoji: '🤷', phonetic: 'byeol-il eop-seo-yo', audioRef: null },
  ],

  pattern: {
    name: 'The check-in rotation',
    explanation: "Three interchangeable check-ins: 잘 지냈어요? (past), 어떻게 지내요? (present), 별일 없어요? (any news). Reply 잘 지내요 or 별일 없어요.",
    examples: [
      { target: '잘 지냈어요?', native: 'Have you been well? (past)' },
      { target: '어떻게 지내요?', native: 'How have you been?' },
      { target: '별일 없어요?', native: 'Anything new?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match check-in to literal feel', pairs: [
      { left: '어떻게 지내요?', right: 'How have you been?' },
      { left: '별일 없어요?', right: 'Anything new?' },
      { left: '잘 지내요', right: "I'm doing well" },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'How have you been?', correct: ['어떻게 지내요?', 'eotteoke jinaeyo', 'eotteoke jinaeyo?'] },
    { type: 'fill_blank', instruction: 'Reply naturally', sentence: '어떻게 지내요? — _____.', options: ['잘 지내요', '안녕', '미국에서 왔어요'], correct: '잘 지내요', context: 'They asked how you are.' },
    { type: 'build_sentence', instruction: 'Build "Anything new?"', words: ['별일', '없어요?'], correct: ['별일', '없어요?'], translation: 'Anything new? / Everything ok?' },
    { type: 'multiple_choice', instruction: 'A friend asks 어떻게 지내요? You\'re fine. Best reply?', question: 'Pick the natural answer', options: [
      { text: '잘 지내요. 어떻게 지내요?', correct: true },
      { text: '안녕히 가세요', correct: false },
      { text: '잘 부탁드립니다', correct: false },
    ], explanation: 'Answer + bounce the question back is the natural rhythm.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "I've been well", correct: ['잘 지내요', 'jal jinaeyo'] },
  ],

  rwenDialogue: {
    intro: "Coffee shop in Seongsu. A coworker sits down across from you.",
    lines: [
      { speaker: 'npc', target: '어떻게 지내요?', native: 'How have you been?' },
      { speaker: 'user', userChoices: [
        { target: '잘 지내요. 어떻게 지내요?', native: "I'm well. How about you?", correct: true, feedback: "Answer-and-bounce — the conversation breathes." },
        { target: '잘 지내요', native: "I'm well", correct: false, feedback: "Not wrong, but bouncing the question back is warmer." },
        { target: '안녕', native: 'Hi (casual)', correct: false, feedback: "Wrong direction — they asked you a check-in question." },
      ]},
      { speaker: 'npc', target: '저도 잘 지내요. 별일 없어요?', native: "I've been well too. Anything new?" },
      { speaker: 'rwen', rwenLine: "Three check-ins now in your toolkit. You can keep small talk going indefinitely.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'How have you been?', correct: ['어떻게 지내요?', 'eotteoke jinaeyo', 'eotteoke jinaeyo?'] },
      { prompt: 'Anything new?', correct: ['별일 없어요?', 'byeolil eopseoyo', 'byeolil eopseoyo?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one check-in and run a full back-and-forth in your head. Question, answer, bounce-back. Out loud if you can.",
    rwenSignoff: "Small talk in Korean is rotation, not repetition. Keep moving.",
  },

  phase8: {
    scenario: "You're meeting a Korean friend for coffee in Seongsu after a few weeks. Casual catch-up.",
    rwenRole: "Korean friend — close peer, polite register (요-form, not banmal yet).",
    successCriteria: "User uses 어떻게 지내요? or 별일 없어요? to check in. Replies appropriately and bounces the question back. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
