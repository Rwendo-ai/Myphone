import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-deep-questions',
  module: 10,
  lesson: 8,
  title: 'Deeper Questions — What Do You Think?',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "어떻게 생각해요? — what do you think? 왜요? — why? 어떻게요? — how? Real opinions, real depth. Move past small talk.",
    culturalNote: "Asking opinions is welcome but Koreans often hedge with 글쎄요 (well...) before answering. Cultural respect for not committing too fast. Don't push — let the thought land.",
  },

  chunks: [
    { id: 'eotteoke_saenggak', target: '어떻게 생각해요?', native: 'What do you think?', literal: 'how think-yo?', emoji: '🤔', phonetic: 'eo-tteo-ke saeng-ga-kae-yo', audioRef: null },
    { id: 'wae', target: '왜요?', native: 'Why?', literal: 'why-yo?', emoji: '❓', phonetic: 'wae-yo', audioRef: null },
    { id: 'geulsseyo', target: '글쎄요...', native: 'Well... (hedging before answering)', literal: 'well', emoji: '🤷', phonetic: 'geul-sse-yo', audioRef: null },
  ],

  pattern: {
    name: 'Question + hedge response',
    explanation: "어떻게 생각해요? = what do you think? Common reply: 글쎄요... (well...) before the actual answer. Hedging is polite, not evasive.",
    examples: [
      { target: '어떻게 생각해요?', native: 'What do you think?' },
      { target: '왜요?', native: 'Why?' },
      { target: '글쎄요... 어려운 질문이네요', native: "Well... that's a hard question" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '어떻게 생각해요?', right: 'What do you think?' },
      { left: '왜요?', right: 'Why?' },
      { left: '글쎄요...', right: 'Well... (hedge)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'What do you think?', correct: ['어떻게 생각해요?', 'eotteoke saenggakhaeyo'] },
    { type: 'fill_blank', instruction: 'Hedge before answering', sentence: '_____, 좀 어려운 질문이에요.', options: ['글쎄요', '비싸요', '안녕히'], correct: '글쎄요', context: 'Polite hedge.' },
    { type: 'build_sentence', instruction: 'Build "Why? What happened?"', words: ['뭐가 있었어요?', '왜요?'], correct: ['왜요?', '뭐가 있었어요?'], translation: 'Why? What happened?' },
    { type: 'multiple_choice', instruction: "Asked a hard question, you need a moment. Best opener?", question: 'Pick the polite hedge', options: [
      { text: '글쎄요...', correct: true },
      { text: '비싸요', correct: false },
      { text: '얼마예요?', correct: false },
    ], explanation: '글쎄요 = "well..." — polite thinking-pause. Universal Korean.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Why?', correct: ['왜요?', 'waeyo'] },
  ],

  rwenDialogue: {
    intro: "Deep coffee chat. Friend asks about your career.",
    lines: [
      { speaker: 'npc', target: '한국에서 일할 거예요? 어떻게 생각해요?', native: 'Will you work in Korea? What do you think?' },
      { speaker: 'user', userChoices: [
        { target: '글쎄요... 잘 모르겠어요. 그런데 좋아할 것 같아요', native: "Well... I don't know. But I think I would like it", correct: true, feedback: 'Hedge + thoughtful answer + future intent.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '저도 그래요. 한국 좋죠?', native: "I think so too. Korea is great, right?" },
      { speaker: 'rwen', rwenLine: "Deeper questions = hedge first, then answer. Korean rewards thoughtfulness.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'What do you think?', correct: ['어떻게 생각해요?', 'eotteoke saenggakhaeyo'] },
      { prompt: 'Well... (hedge)', correct: ['글쎄요', 'geulsseyo', '글쎄요...'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice the hedge: 글쎄요... before answering anything hard. Buy yourself a thoughtful moment.",
    rwenSignoff: "Korean depth questions = hedge first, answer second.",
  },

  phase8: {
    scenario: "Deeper coffee chat about your future plans, opinions on Korea, life choices.",
    rwenRole: "Thoughtful Korean friend — peer, polite, willing to go deep.",
    successCriteria: "User uses 어떻게 생각해요? to ask, 글쎄요... to hedge before own answers. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
