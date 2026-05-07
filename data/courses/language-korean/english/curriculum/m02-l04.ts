import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-ne-aniyo',
  module: 2,
  lesson: 4,
  title: 'Ne / Aniyo — Yes and No',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "네 (yes) and 아니요 (no) — but Korean yes/no isn't quite English yes/no. 네 also means 'I heard you / go on'. Watch K-dramas — characters say 네 dozens of times in a row. It's an active-listening sound.",
    culturalNote: "네 doesn't always commit you to agreement — it can just mean 'I'm tracking'. To really say 'yes, that's correct', you might use 맞아요. Hard 'no' is rare in Korean — softening with 아니요, ___ is the norm.",
  },

  chunks: [
    { id: 'ne', target: '네', native: 'Yes / I hear you', literal: 'yes', emoji: '👍', phonetic: 'ne', audioRef: null },
    { id: 'aniyo', target: '아니요', native: 'No', literal: 'not-yo', emoji: '🙅', phonetic: 'a-ni-yo', audioRef: null },
    { id: 'majayo', target: '맞아요', native: "That's right / Correct", literal: 'correct-yo', emoji: '✅', phonetic: 'ma-ja-yo', audioRef: null },
  ],

  pattern: {
    name: '네 as listening, 맞아요 as confirming',
    explanation: "네 = yes / acknowledging. 맞아요 = explicitly correct. 아니요 = no, but usually softened with a follow-up.",
    examples: [
      { target: '네, 네', native: 'Mm-hmm, go on' },
      { target: '맞아요', native: "That's right" },
      { target: '아니요, 괜찮아요', native: "No, I'm fine" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '네', right: 'Yes / I hear you' },
      { left: '아니요', right: 'No' },
      { left: '맞아요', right: "That's right" },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Yes', correct: ['네', 'ne'] },
    { type: 'fill_blank', instruction: 'Confirm a statement strongly', sentence: '_____, 그래요.', options: ['맞아요', '아니요', '저기요'], correct: '맞아요', context: 'Strong confirmation.' },
    { type: 'build_sentence', instruction: 'Build "No, I\'m fine"', words: ['괜찮아요', '아니요,'], correct: ['아니요,', '괜찮아요'], translation: "No, I'm fine." },
    { type: 'multiple_choice', instruction: 'Someone offers you food. You\'re full. Polite refusal?', question: 'Pick the natural softener', options: [
      { text: '아니요, 괜찮아요', correct: true },
      { text: '아니', correct: false },
      { text: '네', correct: false },
    ], explanation: '아니요 + softener (괜찮아요 = "I\'m fine") is the standard polite refusal.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'No', correct: ['아니요', 'aniyo'] },
  ],

  rwenDialogue: {
    intro: "An ahjumma at a market stall offers you a sample.",
    lines: [
      { speaker: 'npc', target: '드셔보세요!', native: 'Try it!' },
      { speaker: 'user', userChoices: [
        { target: '아니요, 괜찮아요. 감사합니다', native: "No, I'm fine. Thank you", correct: true, feedback: 'Soft refusal + thanks. Polite and warm.' },
        { target: '아니', native: 'No (banmal)', correct: false, feedback: 'Bare 아니 to an elder = rude.' },
        { target: '네', native: 'Yes', correct: false, feedback: "You meant to refuse — 네 commits you to taking the sample." },
      ]},
      { speaker: 'npc', target: '네, 네. 알겠어요.', native: 'Okay, okay. Understood.' },
      { speaker: 'rwen', rwenLine: "네/아니요 — but always with cushioning. Korean refuses softly.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Yes (Korean)', correct: ['네', 'ne'] },
      { prompt: 'No, I\'m fine', correct: ['아니요, 괜찮아요', 'aniyo gwaenchanayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice how often K-drama characters say 네 even when they aren't agreeing. It's listening, not committing. Try it once today in your head.",
    rwenSignoff: "네/아니요 — small words, big calibrations.",
  },

  phase8: {
    scenario: "An ahjumma at a Namdaemun market keeps offering you samples. You need to politely refuse without being rude.",
    rwenRole: "Market ahjumma — 60s, friendly, persistent.",
    successCriteria: "User uses 아니요 + 괜찮아요 + 감사합니다 to refuse. Does NOT use bare 아니 or commit accidentally with 네.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
