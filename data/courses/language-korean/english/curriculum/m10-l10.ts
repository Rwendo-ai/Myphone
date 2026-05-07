import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-course-cap',
  module: 10,
  lesson: 10,
  title: 'Course Cap — A Full Korean Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "The course cap. 100 lessons in. Today you run a full Korean conversation: greeting, identity, food, family, emotions, story, proverb, farewell. Everything you've built — live.",
    culturalNote: "By Module 10 you're not memorizing — you're running Korean. The grammar engine, the register slide, the cultural cues all click together. This is A2 — solid travel/social Korean. From here, fluency is a question of hours, not lessons.",
  },

  chunks: [
    { id: 'review_anyeong', target: '안녕하세요', native: 'Hello (polite)', literal: 'peace-be-with-you', emoji: '🙇', phonetic: 'an-nyeong-ha-se-yo', audioRef: null },
    { id: 'review_jeong', target: '정', native: 'Jeong (relational warmth)', literal: 'feeling-bond', emoji: '💞', phonetic: 'jeong', audioRef: null },
    { id: 'review_sokdam', target: '천 리 길도 한 걸음부터', native: 'A 1000-li road starts with one step', literal: 'proverb', emoji: '📜', phonetic: 'cheon ri gildo han geo-reum-bu-teo', audioRef: null },
  ],

  pattern: {
    name: 'The Korean Stack — Everything Together',
    explanation: "Greet → identify → narrate → emote → reflect → close. All registers. All systems. Korean as lived, not memorized.",
    examples: [
      { target: '안녕하세요. 저는 Sam이에요', native: 'Identity (M1+M3)' },
      { target: '주말에 BBQ 갔어요. 정말 맛있었어요', native: 'Past narrative + food (M6+M7+M8)' },
      { target: '기분이 좋아요. 정말 행복해요', native: 'Emotion (M10)' },
      { target: '천 리 길도 한 걸음부터요', native: 'Proverb (M10)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match module to a key phrase', pairs: [
      { left: 'M1 Greeting', right: '안녕하세요' },
      { left: 'M5 Family', right: '우리 가족' },
      { left: 'M10 Proverb', right: '천 리 길도 한 걸음부터' },
    ]},
    { type: 'multiple_choice', instruction: 'Best self-summary for 100-lesson cap?', question: 'Pick the natural close', options: [
      { text: '한국어 조금 할 수 있어요. 천 리 길도 한 걸음부터요!', correct: true },
      { text: '비싸요', correct: false },
      { text: '안녕히 가세요', correct: false },
    ], explanation: 'Humble self-state + proverb — the Module 10 cap energy.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'How are you feeling?', correct: ['기분이 어때요?', 'gibuni eottaeyo'] },
    { type: 'fill_blank', instruction: 'Story connector', sentence: '홍대 갔어요. _____ 친구를 만났어요.', options: ['그리고', '비싸요', '안녕히'], correct: '그리고', context: 'And then.' },
    { type: 'build_sentence', instruction: 'Build "Jeong has settled" (course-warm)', words: ['들었어요', '정이'], correct: ['정이', '들었어요'], translation: 'Jeong has settled.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Awesome!', correct: ['대박', 'daebak', '대박!'] },
  ],

  rwenDialogue: {
    intro: "Final cap. 100 lessons in. A Korean coworker who has watched you grow asks for the full story of your Korean journey.",
    lines: [
      { speaker: 'npc', target: '한국어 진짜 많이 늘었어요. 어떻게 공부했어요?', native: "Your Korean has really grown. How did you study?" },
      { speaker: 'user', userChoices: [
        { target: '글쎄요... 매일 조금씩 했어요. 그런데 천 리 길도 한 걸음부터요', native: "Well... a little every day. But a 1000-li road starts with one step", correct: true, feedback: 'Hedge + past narrative + sokdam. Module 10 fluency.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '대박! 그리고 한국 속담까지!', native: 'Daebak! And even Korean proverbs!' },
      { speaker: 'user', userChoices: [
        { target: '한국어 배우면서 정도 들었어요. 정말 감사합니다', native: "Learning Korean, jeong settled too. Really thank you", correct: true, feedback: '정 + 감사 — the Korean course closer.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
        { target: '안녕', native: 'Hi (banmal)', correct: false, feedback: 'Wrong moment.' },
      ]},
      { speaker: 'npc', target: '저도 정이 들었어요. 앞으로도 잘 부탁드려요', native: "Jeong settled with me too. Please continue going forward" },
      { speaker: 'user', userChoices: [
        { target: '저도 잘 부탁드려요. 또 봐요!', native: "Same here. See you again!", correct: true, feedback: 'Mutual closer + warm see-you. Course 100 closed.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Too cold for the moment.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'rwen', rwenLine: "100 lessons. From 안녕하세요 to sokdam. From 일이삼사오 to 한 (han) and 정 (jeong). You came in not knowing what 안녕 means; you leave with cultural fluency. Course closed. Korean is yours.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. The course cap recall.',
    prompts: [
      { prompt: 'Hello (polite)', correct: ['안녕하세요', 'annyeonghaseyo'] },
      { prompt: 'Jeong has settled', correct: ['정이 들었어요', 'jeongi deureosseoyo'] },
    ],
  },

  mission: {
    title: "Your Course Cap Mission",
    task: "Run a full Korean conversation in your head — greeting, identity, story, emotion, proverb, farewell. 100 lessons live, all at once.",
    rwenSignoff: "100 lessons. The door is open. 천 리 길도 한 걸음부터 — the road continues with one more step. 또 봐요.",
  },

  phase8: {
    scenario: "Final Korean conversation — you reflect on your 100-lesson journey with a Korean coworker who has watched you grow. Use everything: greeting, identity, past narrative, emotion words, sokdam, jeong, warm closer.",
    rwenRole: "Coworker / mentor — 40s, has seen the whole arc, warm.",
    successCriteria: "User chains 6+ modules of Korean: greeting (M1), identity (M3), past narrative (M6/M8), emotion (M10), proverb (M10), 정이 들었어요 (M5/M10), warm farewell. Mixes registers correctly. NO English fallback.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
