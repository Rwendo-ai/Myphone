import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-uri-vs-jeohui',
  module: 5,
  lesson: 9,
  title: 'Uri vs Jeohui — In-group vs Humble We',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "우리 (we/our) and 저희 (we/our, humble) — the in-group/out-group split. 저희 lowers your group when speaking to a respected outsider. 우리 is daily-life default.",
    culturalNote: "Saying 저희 회사 (our humble company) when talking to a client or boss = polite. Saying 우리 회사 with the same audience = slightly less deferential. The choice is small but registers culturally.",
  },

  chunks: [
    { id: 'uri', target: '우리', native: 'We / our (default)', literal: 'we', emoji: '👥', phonetic: 'u-ri', audioRef: null },
    { id: 'jeohui', target: '저희', native: 'We / our (humble)', literal: 'we-humble', emoji: '🙇', phonetic: 'jeo-hui', audioRef: null },
    { id: 'uri_jip', target: '우리 집', native: 'My/our home', literal: 'we house', emoji: '🏠', phonetic: 'u-ri jip', audioRef: null },
  ],

  pattern: {
    name: 'Default 우리, formal 저희',
    explanation: "Default to 우리. Switch to 저희 when speaking TO an outsider/superior ABOUT your group (your company, your team, your family).",
    examples: [
      { target: '우리 가족', native: 'My family (default)' },
      { target: '저희 회사', native: 'Our company (humble, to client)' },
      { target: '저희 팀', native: 'Our team (humble, to boss)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match pronoun to context', pairs: [
      { left: '우리', right: 'Default we/our' },
      { left: '저희', right: 'Humble we/our (to outsider)' },
      { left: '우리 집', right: 'My home (default)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean (humble)', prompt: 'Our company (to a client)', correct: ['저희 회사', 'jeohui hoesa'] },
    { type: 'fill_blank', instruction: "Speaking to a boss about your team", sentence: '_____ 팀이 잘 했어요.', options: ['저희', '우리', '저는'], correct: '저희', context: 'Humble for your team to your boss.' },
    { type: 'build_sentence', instruction: 'Build "My family is here"', words: ['있어요', '우리 가족이'], correct: ['우리 가족이', '있어요'], translation: 'My family is here.' },
    { type: 'multiple_choice', instruction: 'Talking to an English-speaking client about your Korean team. Which to use?', question: 'Pick the humble pronoun', options: [
      { text: '저희 팀', correct: true },
      { text: '우리 팀', correct: false },
      { text: '내 팀', correct: false },
    ], explanation: '저희 humbles your group to the outsider. 내 팀 is banmal — never with clients.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'My family (default)', correct: ['우리 가족', 'uri gajok'] },
  ],

  rwenDialogue: {
    intro: "Talking to a Korean client about your project team.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '저희 팀이 일정을 맞췄어요', native: "Our team met the deadline (humble)", correct: true, feedback: '저희 to a client = humble + respectful.' },
        { target: '우리 팀이 일정을 맞췄어요', native: "Our team met the deadline (default)", correct: false, feedback: 'Default 우리 with a client is slightly less polite. 저희 is the safer business choice.' },
        { target: '내 팀이 일정을 맞췄어요', native: "My team met the deadline (banmal)", correct: false, feedback: 'Banmal with a client = unprofessional.' },
      ]},
      { speaker: 'npc', target: '저희도 만족합니다. 잘 부탁드립니다', native: "We're satisfied too. Please continue." },
      { speaker: 'rwen', rwenLine: "우리 default, 저희 to outsiders. The humble switch is small but read.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'We / our (humble)', correct: ['저희', 'jeohui'] },
      { prompt: 'We / our (default)', correct: ['우리', 'uri'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture talking to your boss about your team. Use 저희. Picture chatting with a friend about your family. Use 우리.",
    rwenSignoff: "Pronouns track power. Korean has two we's; pick by audience.",
  },

  phase8: {
    scenario: "Two scenarios — telling a client about your team (저희) and telling a close friend about your family (우리).",
    rwenRole: "Multiple — client (formal), close friend (informal).",
    successCriteria: "User uses 저희 for the client context, 우리 for the friend context. Does NOT mix.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
