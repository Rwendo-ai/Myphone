import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-eodieseo',
  module: 1,
  lesson: 6,
  title: 'Eodieseo Wasseoyo? — Where Are You From?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After name, Koreans almost always ask where you're from. 어디에서 왔어요? — literally 'where-from did-you-come?' The answer cracks open conversation.",
    culturalNote: "If you say 미국 (USA), 호주 (Australia), 영국 (UK), expect follow-ups. Koreans love K-content reverberating overseas — saying you came because of K-pop or K-drama is a real conversational shortcut.",
  },

  chunks: [
    { id: 'eodieseo_wasseoyo', target: '어디에서 왔어요?', native: 'Where are you from?', literal: 'where-from came-yo?', emoji: '🌍', phonetic: 'eo-di-e-seo wa-sseo-yo', audioRef: null },
    { id: 'eseowasseoyo', target: '___에서 왔어요', native: 'I came from ___', literal: '___-from came-yo', emoji: '✈️', phonetic: '___-e-seo wa-sseo-yo', audioRef: null },
    { id: 'miguk', target: '미국', native: 'USA', literal: 'beautiful-country', emoji: '🇺🇸', phonetic: 'mi-guk', audioRef: null },
  ],

  pattern: {
    name: 'The 에서 from-marker',
    explanation: "에서 attaches to a place to mean 'from'. Country/city + 에서 + 왔어요 = 'I came from ___'.",
    examples: [
      { target: '미국에서 왔어요', native: 'I came from the USA' },
      { target: '호주에서 왔어요', native: 'I came from Australia' },
      { target: '서울에서 왔어요', native: 'I came from Seoul' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match country to Korean', pairs: [
      { left: '미국', right: 'USA' },
      { left: '호주', right: 'Australia' },
      { left: '영국', right: 'UK' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Where are you from?', correct: ['어디에서 왔어요?', 'eodieseo wasseoyo', 'eodieseo wasseoyo?'] },
    { type: 'fill_blank', instruction: 'Complete the sentence', sentence: '저는 호주_____ 왔어요.', options: ['에서', '에', '는'], correct: '에서', context: '에서 marks the origin point.' },
    { type: 'build_sentence', instruction: 'Build "I came from the USA"', words: ['왔어요', '미국에서'], correct: ['미국에서', '왔어요'], translation: 'I came from the USA.' },
    { type: 'multiple_choice', instruction: "They asked where you're from. You're Australian. Best reply?", question: 'Pick the natural answer', options: [
      { text: '호주에서 왔어요', correct: true },
      { text: '호주', correct: false },
      { text: '저는 호주', correct: false },
    ], explanation: 'Full polite sentence is 호주에서 왔어요. Just "호주" is grammatically incomplete.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I came from Seoul', correct: ['서울에서 왔어요', 'seouleseo wasseoyo'] },
  ],

  rwenDialogue: {
    intro: "You're at a Hongdae K-pop concert pre-show meetup. A Korean fan asks where you flew in from.",
    lines: [
      { speaker: 'npc', target: '어디에서 왔어요?', native: 'Where did you come from?' },
      { speaker: 'user', userChoices: [
        { target: '호주에서 왔어요', native: 'I came from Australia', correct: true, feedback: 'Clean, polite, complete sentence.' },
        { target: '호주', native: 'Australia (just word)', correct: false, feedback: "Incomplete — pair it with 에서 왔어요." },
        { target: '저는 호주이에요', native: 'I am Australia', correct: false, feedback: "That says you ARE Australia, not that you came FROM there." },
      ]},
      { speaker: 'npc', target: '와! 저는 BTS 좋아해요!', native: 'Wow! I love BTS!' },
      { speaker: 'rwen', rwenLine: "에서 왔어요 — origin marker locked. Same template works for any city or country.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Where are you from?', correct: ['어디에서 왔어요?', 'eodieseo wasseoyo', 'eodieseo wasseoyo?'] },
      { prompt: 'I came from the USA', correct: ['미국에서 왔어요', 'mikugeseo wasseoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your origin sentence out loud: [your country]에서 왔어요. Then ask the question back: 어디에서 왔어요?",
    rwenSignoff: "Origin is the second handshake of any Korean conversation. You've got it.",
  },

  phase8: {
    scenario: "You're outside a Hongdae K-pop concert venue. A Korean fan strikes up a conversation in the line.",
    rwenRole: "K-pop fan — early 20s, excited, polite register.",
    successCriteria: "User answers with [country]에서 왔어요. Asks back with 어디에서 왔어요? Does NOT just say the country word.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
