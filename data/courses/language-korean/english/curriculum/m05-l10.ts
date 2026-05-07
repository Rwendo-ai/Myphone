import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-family-conversation',
  module: 5,
  lesson: 10,
  title: 'Family Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 5 cap. Parents, grandparents, siblings (with age-gender), kids, address terms for strangers, friend hierarchies, 우리/저희 split. All in one extended-family conversation.",
    culturalNote: "Korean family conversations are linguistic gymnastics: every relationship comes with its own term, register, and pronoun. Once it clicks, it feels intuitive. Until then, slow down and pick deliberately.",
  },

  chunks: [
    { id: 'review_uri', target: '우리 가족', native: 'My family', literal: 'we family', emoji: '🏠', phonetic: 'u-ri ga-jok', audioRef: null },
    { id: 'review_eomma', target: '엄마 / 어머니', native: 'Mom / Mother', literal: 'mom / mother', emoji: '👩', phonetic: 'eom-ma / eo-meo-ni', audioRef: null },
    { id: 'review_dongsaeng', target: '동생', native: 'Younger sibling', literal: 'same-life', emoji: '🧒', phonetic: 'dong-saeng', audioRef: null },
  ],

  pattern: {
    name: 'The Family Stack',
    explanation: "Three things to track: WHO you're talking ABOUT, WHO you're talking TO, and WHAT register fits.",
    examples: [
      { target: '우리 엄마', native: 'About own mom (warm, friend)' },
      { target: '저희 어머니', native: 'About own mother (humble, to elder)' },
      { target: 'Sam의 어머님', native: "About friend's mother (honorific)" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match family member to term', pairs: [
      { left: 'Mom (warm)', right: '엄마' },
      { left: 'Older brother (female speaker)', right: '오빠' },
      { left: 'Younger sibling', right: '동생' },
    ]},
    { type: 'multiple_choice', instruction: "Telling your boss about your mom. Best phrasing?", question: 'Pick humble + formal', options: [
      { text: '저희 어머니', correct: true },
      { text: '우리 엄마', correct: false },
      { text: '내 엄마', correct: false },
    ], explanation: '저희 + 어머니 = humble formal. Use with boss/elder/client.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Older sister (said by male)', correct: ['누나', 'nuna'] },
    { type: 'fill_blank', instruction: "Female speaker addresses her older brother", sentence: '_____, 어디 가요?', options: ['오빠', '형', '누나'], correct: '오빠', context: 'Female speaker → older male = 오빠.' },
    { type: 'build_sentence', instruction: 'Build "My family is 4 people"', words: ['4명이에요', '우리 가족은'], correct: ['우리 가족은', '4명이에요'], translation: 'My family is 4 people.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Grandma', correct: ['할머니', 'halmeoni'] },
  ],

  rwenDialogue: {
    intro: "Korean coworker invites you home for dinner. You meet the parents, grandparents, siblings — and need to introduce yourself to each tier.",
    lines: [
      { speaker: 'npc', target: '저희 어머니예요', native: 'This is my mother (humble formal).' },
      { speaker: 'user', userChoices: [
        { target: '안녕하세요, 어머님! 만나서 반갑습니다', native: 'Hello, mother! Pleased to meet you. (honorific to friend\'s mom)', correct: true, feedback: '어머님 — honorific for friend\'s mother. Bow at 30°.' },
        { target: '안녕, 엄마', native: 'Hi, mom (banmal + own term)', correct: false, feedback: 'Banmal AND wrong-side terminology — disrespectful.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Wrong moment.' },
      ]},
      { speaker: 'npc', target: '저희 할머니이세요. 인사 드리세요.', native: 'This is grandmother. Please greet her.' },
      { speaker: 'user', userChoices: [
        { target: '(45° bow) 안녕하세요. 처음 뵙겠습니다', native: 'Deep bow + first-time formal', correct: true, feedback: 'Grandparent + first meeting = 45° bow + 처음 뵙겠습니다.' },
        { target: '안녕하세요', native: 'Hello (no bow)', correct: false, feedback: 'Skipping the deep bow with grandma is read as careless.' },
        { target: '잘 가', native: 'Bye (banmal)', correct: false, feedback: 'Wrong direction AND wrong register.' },
      ]},
      { speaker: 'npc', target: '저희 동생이에요. 같은 학교 다녀요.', native: 'This is my younger sibling, same school.' },
      { speaker: 'user', userChoices: [
        { target: '안녕하세요. 만나서 반가워요', native: 'Hello. Nice to meet you (polite warm)', correct: true, feedback: 'Younger but new = polite (요-form). Not banmal yet — wait for invitation.' },
        { target: '야! 안녕!', native: 'Hey! Hi (banmal)', correct: false, feedback: 'Banmal with someone you just met = rude even if younger.' },
        { target: '처음 뵙겠습니다', native: 'First-time formal', correct: false, feedback: 'Too stiff for a peer-younger introduction.' },
      ]},
      { speaker: 'rwen', rwenLine: "Three tiers, three registers, in one introduction round. Module 5 closed. Family fluent.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'My family (default)', correct: ['우리 가족', 'uri gajok'] },
      { prompt: "Friend's mother (honorific)", correct: ['어머님', 'eomeonim'] },
    ],
  },

  mission: {
    title: "Your Module 5 Mission",
    task: "Sketch a family tree of someone you know — in Korean. Pick the right term for each branch by gender, age, side.",
    rwenSignoff: "Module 5 closed. Korean family is precise. You can now name everyone.",
  },

  phase8: {
    scenario: "Dinner at your Korean coworker's family home — meeting grandmother, parents, and younger sibling in one round.",
    rwenRole: "Multiple — grandmother (deep bow + formal), parents (formal/honorific), younger sibling (polite, not banmal).",
    successCriteria: "User uses 어머님/할머님 (honorific) for friend's family, 처음 뵙겠습니다 + deep bow with grandmother, polite 요-form with younger sibling. NO banmal anywhere — first meetings.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
