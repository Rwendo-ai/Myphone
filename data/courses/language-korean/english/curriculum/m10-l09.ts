import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09-proverbs',
  module: 10,
  lesson: 9,
  title: 'Korean Proverbs — Wisdom in a Phrase',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Korean has rich proverbs (속담 sokdam). 가는 말이 고와야 오는 말이 곱다 — speech going out beautiful, speech coming back is beautiful (treat others well, you'll be treated well). Knowing one or two earns immediate respect.",
    culturalNote: "Older Koreans love when foreigners drop a Korean proverb. It signals you're not just memorizing phrases — you're listening to the culture. One well-placed sokdam = months of jeong fast-tracked.",
  },

  chunks: [
    { id: 'sokdam', target: '속담', native: 'Proverb', literal: 'inside-talk', emoji: '📜', phonetic: 'sok-dam', audioRef: null },
    { id: 'ganeun_mal', target: '가는 말이 고와야 오는 말이 곱다', native: 'Going-words beautiful, coming-words beautiful', literal: 'going-word-SUBJ beautiful-must coming-word-SUBJ beautiful', emoji: '💬', phonetic: 'ga-neun mar-i go-wa-ya o-neun mar-i gop-da', audioRef: null },
    { id: 'sigan_jaesan', target: '시간은 금이다', native: 'Time is gold (time is money)', literal: 'time-TOPIC gold-is', emoji: '⏰', phonetic: 'si-gan-eun geu-mi-da', audioRef: null },
  ],

  pattern: {
    name: 'Proverb structure',
    explanation: "Most Korean sokdam are paired clauses with parallel structure. They condense a moral observation. Drop them sparingly — once per conversation max.",
    examples: [
      { target: '시간은 금이다', native: 'Time is gold' },
      { target: '가는 말이 고와야 오는 말이 곱다', native: 'Speech-out beautiful, speech-back beautiful' },
      { target: '천 리 길도 한 걸음부터', native: 'A 1000-li road starts with one step' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match proverb to meaning', pairs: [
      { left: '시간은 금이다', right: 'Time is gold' },
      { left: '가는 말이 고와야', right: 'Treat others well, be treated well' },
      { left: '천 리 길도 한 걸음부터', right: 'Long journey starts with one step' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Proverb', correct: ['속담', 'sokdam'] },
    { type: 'fill_blank', instruction: 'Time-is-money proverb', sentence: '시간은 _____.', options: ['금이다', '비싸다', '맛있다'], correct: '금이다', context: 'Time is gold.' },
    { type: 'build_sentence', instruction: "Build 'A 1000-li road starts with one step'", words: ['한 걸음부터', '천 리 길도'], correct: ['천 리 길도', '한 걸음부터'], translation: 'A 1000-li road starts with one step.' },
    { type: 'multiple_choice', instruction: 'Why drop a proverb in conversation?', question: 'Pick the cultural read', options: [
      { text: 'Signals cultural listening; earns respect from elders', correct: true },
      { text: "It's required grammar", correct: false },
      { text: "Replaces 안녕하세요", correct: false },
    ], explanation: 'Proverbs are bridges into Korean cultural memory.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Time is gold', correct: ['시간은 금이다', 'siganeun geumida'] },
  ],

  rwenDialogue: {
    intro: "Older coworker reflects on patience.",
    lines: [
      { speaker: 'npc', target: '한국어 배우는 거 어때요?', native: 'How is learning Korean?' },
      { speaker: 'user', userChoices: [
        { target: '천 리 길도 한 걸음부터요!', native: "A 1000-li road starts with one step!", correct: true, feedback: 'Sokdam dropped — coworker visibly impressed.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '와! 한국 속담까지! 정말 잘하시네요!', native: 'Wow! Even Korean proverbs! You\'re really good!' },
      { speaker: 'rwen', rwenLine: "Sokdam — earned respect in one phrase. Use sparingly, deploy well.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Proverb', correct: ['속담', 'sokdam'] },
      { prompt: 'Time is gold', correct: ['시간은 금이다', 'siganeun geumida'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one Korean proverb. Memorize it. Save it for the right moment.",
    rwenSignoff: "Korean wisdom = compressed in proverbs. Carry one with you.",
  },

  phase8: {
    scenario: "Reflective coffee chat with an older Korean coworker. You drop a sokdam at the right beat.",
    rwenRole: "Older coworker — 50s, traditional, reflective.",
    successCriteria: "User uses one Korean proverb appropriately. Connects it to the conversation context.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
