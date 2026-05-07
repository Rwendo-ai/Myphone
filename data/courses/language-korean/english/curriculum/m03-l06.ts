import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-eonjebuteo',
  module: 3,
  lesson: 6,
  title: 'Eonje-buteo? — Since When?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "When you tell a Korean you're learning their language, they ALWAYS ask: 언제부터 한국어 배웠어요? — since when have you been learning Korean? Have your answer ready.",
    culturalNote: "Saying you're learning Korean unlocks instant warmth. Add a reason — K-pop, K-drama, work, partner — and they'll switch to teaching mode and slow down for you.",
  },

  chunks: [
    { id: 'eonjebuteo', target: '언제부터?', native: 'Since when?', literal: 'when-from?', emoji: '⏳', phonetic: 'eon-je-bu-teo', audioRef: null },
    { id: 'baeweoyo', target: '한국어 배워요', native: 'I am learning Korean', literal: 'Korean learn-yo', emoji: '📚', phonetic: 'han-gu-geo bae-wo-yo', audioRef: null },
    { id: 'jogeumman', target: '조금만 알아요', native: 'I only know a little', literal: 'a-little-only know-yo', emoji: '🤏', phonetic: 'jo-geum-man a-ra-yo', audioRef: null },
  ],

  pattern: {
    name: 'Time + 부터 + verb',
    explanation: '부터 = from/since attached to a time. 작년부터 = since last year. 6개월 전부터 = since 6 months ago. Pair with the verb you are doing.',
    examples: [
      { target: '작년부터 배웠어요', native: 'I have been learning since last year' },
      { target: '6개월 전부터 배웠어요', native: 'Since 6 months ago' },
      { target: '한국어 조금만 알아요', native: 'I only know a little Korean' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '언제부터?', right: 'Since when?' },
      { left: '한국어 배워요', right: 'I am learning Korean' },
      { left: '조금만 알아요', right: 'I only know a little' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am learning Korean', correct: ['한국어 배워요', 'hangugeo baewoyo'] },
    { type: 'fill_blank', instruction: 'Complete the time phrase', sentence: '작년_____ 배웠어요.', options: ['부터', '에서', '에'], correct: '부터', context: '"From last year" = 작년부터.' },
    { type: 'build_sentence', instruction: 'Build "I only know a little Korean"', words: ['조금만', '한국어', '알아요'], correct: ['한국어', '조금만', '알아요'], translation: 'I only know a little Korean.' },
    { type: 'multiple_choice', instruction: 'Best polite hedge if your Korean is shaky?', question: 'Pick the humble line', options: [
      { text: '한국어 조금만 알아요', correct: true },
      { text: '한국어 잘해요', correct: false },
      { text: '한국어 비싸요', correct: false },
    ], explanation: '조금만 알아요 = humble + accurate. 잘해요 means "I\'m good at it" — overclaim.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Since when?', correct: ['언제부터?', 'eonjebuteo'] },
  ],

  rwenDialogue: {
    intro: "Korean stranger compliments your Korean at a Seoul subway entrance.",
    lines: [
      { speaker: 'npc', target: '한국어 잘하시네요!', native: "You speak Korean well!" },
      { speaker: 'user', userChoices: [
        { target: '아니요, 조금만 알아요', native: "No, I only know a little", correct: true, feedback: 'Humble deflection — Koreans appreciate it deeply.' },
        { target: '네, 잘해요', native: "Yes, I'm good at it", correct: false, feedback: 'Even if true, claiming "I\'m good" comes off arrogant. Deflect.' },
        { target: '비싸요', native: "It's expensive", correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '언제부터 배웠어요?', native: 'Since when did you start learning?' },
      { speaker: 'user', userChoices: [
        { target: '6개월 전부터 배웠어요', native: 'Since 6 months ago', correct: true, feedback: 'Number + 부터 — clean time answer.' },
        { target: '몰라요', native: "I don't know", correct: false, feedback: "You know — give a rough answer." },
        { target: '안녕', native: 'Hi', correct: false, feedback: 'Wrong moment.' },
      ]},
      { speaker: 'rwen', rwenLine: "Deflecting compliments + answering 'since when' — that's social Korean.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I only know a little (Korean)', correct: ['조금만 알아요', 'jogeumman arayo'] },
      { prompt: 'Since when?', correct: ['언제부터?', 'eonjebuteo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Build your humble Korean-learner answer: 작년부터/[N]개월 전부터 배웠어요. Pair with 조금만 알아요.",
    rwenSignoff: "Humility opens doors. Korea rewards it.",
  },

  phase8: {
    scenario: "A Korean compliments your Korean at the subway. You need to deflect humbly and answer 'since when?'.",
    rwenRole: "Subway helper — 40s, kind, polite.",
    successCriteria: "User uses 조금만 알아요 to deflect. Answers 언제부터 with [time]+부터+배웠어요. Does NOT overclaim with 잘해요.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
