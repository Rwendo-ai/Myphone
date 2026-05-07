import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-aigo',
  module: 10,
  lesson: 7,
  title: 'Aigoo / Eomeo — Korean Interjections',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "아이고 (aigoo) — sigh of weariness or sympathy. 어머! (eomeo!) — surprise (often female speaker). 와! (wa!) — wow. 헐! (heol!) — no way (younger speech). The emotional sound effects of Korean.",
    culturalNote: "K-dramas live on these interjections. Ahjummas use 아이고 dozens of times daily. Younger Koreans use 헐 / 대박 (daebak — awesome). Recognizing them = tracking emotional beats in real conversation.",
  },

  chunks: [
    { id: 'aigo', target: '아이고', native: 'Sigh / oh dear', literal: 'aigoo', emoji: '😮‍💨', phonetic: 'a-i-go', audioRef: null },
    { id: 'eomeo', target: '어머!', native: 'Oh! / Oh my! (surprise)', literal: 'eomeo', emoji: '😯', phonetic: 'eo-meo', audioRef: null },
    { id: 'daebak', target: '대박!', native: 'Awesome! / Daebak!', literal: 'big-strike', emoji: '🤯', phonetic: 'dae-bak', audioRef: null },
  ],

  pattern: {
    name: 'Interjection register',
    explanation: "아이고 = older/weary. 어머 = female-leaning surprise. 헐 / 대박 = younger. Use to match the speaker's vibe.",
    examples: [
      { target: '아이고, 힘들어요', native: 'Oh dear, this is exhausting' },
      { target: '어머! 진짜요?', native: 'Oh my! Really?' },
      { target: '대박!', native: 'Awesome!' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match interjection to register', pairs: [
      { left: '아이고', right: 'Older / weary sympathy' },
      { left: '어머!', right: 'Female-leaning surprise' },
      { left: '대박!', right: 'Younger / awesome' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Awesome!', correct: ['대박', 'daebak', '대박!'] },
    { type: 'fill_blank', instruction: "Ahjumma's sympathy reaction", sentence: '_____, 그래요? 힘드시겠어요', options: ['아이고', '대박', '비싸요'], correct: '아이고', context: 'Sympathy sigh.' },
    { type: 'build_sentence', instruction: 'Build "Oh my! Really?"', words: ['진짜요?', '어머!'], correct: ['어머!', '진짜요?'], translation: 'Oh my! Really?' },
    { type: 'multiple_choice', instruction: 'Friend tells you they got into Seoul National University. Best reaction?', question: 'Pick the natural interjection', options: [
      { text: '대박! 축하해요!', correct: true },
      { text: '아이고...', correct: false },
      { text: '비싸요', correct: false },
    ], explanation: '대박 = excited awesome. 아이고 is sympathetic/weary — wrong vibe.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Sigh / oh dear', correct: ['아이고', 'aigo', '아이고...'] },
  ],

  rwenDialogue: {
    intro: "Friend shares a wild story.",
    lines: [
      { speaker: 'npc', target: '저 어제 길에서 BTS 봤어요!', native: "I saw BTS on the street yesterday!" },
      { speaker: 'user', userChoices: [
        { target: '대박! 진짜요?', native: 'Awesome! Really?', correct: true, feedback: 'Surge interjection + confirmation. K-pop fan energy.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'rwen', rwenLine: "Interjections = the emotional sound effects of Korean. Use them.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Awesome!', correct: ['대박', 'daebak', '대박!'] },
      { prompt: 'Sigh / oh dear', correct: ['아이고', 'aigo', '아이고...'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three interjections: 아이고 / 어머 / 대박. Picture a moment for each.",
    rwenSignoff: "Korean's emotional sound effects. Now your reactions are real.",
  },

  phase8: {
    scenario: "Catching up with a Korean friend who shares surprising news. You react with appropriate interjections.",
    rwenRole: "Korean friend — peer, animated.",
    successCriteria: "User uses 대박 for awesome, 어머 for surprise, 아이고 for sympathy. Matches register.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
