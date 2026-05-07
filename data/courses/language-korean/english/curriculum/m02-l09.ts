import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-mwoeyo',
  module: 2,
  lesson: 9,
  title: 'Mwoeyo? — What Is It?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "뭐예요? — what is it? Add 이게 / 그게 / 저게 (this is / that is) and you can ask about anything you point at. Combined with last lesson's 이거/그거/저거, you have a full inquiry kit.",
    culturalNote: "Asking 'what is this?' is welcome at Korean restaurants — sellers love explaining banchan (side dishes), unfamiliar fish, market specials.",
  },

  chunks: [
    { id: 'mwoeyo', target: '뭐예요?', native: 'What is it?', literal: 'what-is?', emoji: '❓', phonetic: 'mwo-ye-yo', audioRef: null },
    { id: 'igeneun', target: '이게 뭐예요?', native: 'What is this?', literal: 'this-SUBJ what-is?', emoji: '🤔', phonetic: 'i-ge mwo-ye-yo', audioRef: null },
    { id: 'jeogeneun', target: '저게 뭐예요?', native: 'What is that (over there)?', literal: 'that-far-SUBJ what-is?', emoji: '👀', phonetic: 'jeo-ge mwo-ye-yo', audioRef: null },
  ],

  pattern: {
    name: 'Identifier + 뭐예요?',
    explanation: "이게 / 그게 / 저게 + 뭐예요?. (이게 = 이것이, 'this-thing-SUBJ', contracted.) Same three-distance system, plus the subject marker 이.",
    examples: [
      { target: '이게 뭐예요?', native: 'What is this?' },
      { target: '저게 뭐예요?', native: 'What is that (far)?' },
      { target: '이건 김치예요', native: 'This is kimchi' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '이게 뭐예요?', right: 'What is this?' },
      { left: '저게 뭐예요?', right: 'What is that (far)?' },
      { left: '뭐예요?', right: 'What is it?' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'What is this?', correct: ['이게 뭐예요?', 'ige mwoeyo', 'ige mwoeyo?'] },
    { type: 'fill_blank', instruction: 'Pointing far at a dish across the room', sentence: '_____ 뭐예요?', options: ['저게', '이게', '그게'], correct: '저게', context: 'Far from both of you.' },
    { type: 'build_sentence', instruction: 'Build "What is that (over there)?"', words: ['저게', '뭐예요?'], correct: ['저게', '뭐예요?'], translation: 'What is that (over there)?' },
    { type: 'multiple_choice', instruction: 'A waiter brings a small side dish. You don\'t recognize it. What do you say?', question: 'Pick the natural ask', options: [
      { text: '이게 뭐예요?', correct: true },
      { text: '저게 뭐예요?', correct: false },
      { text: '얼마예요?', correct: false },
    ], explanation: "The dish is right in front of you = 이게. 얼마 asks price, not identity." },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'What is that (far)?', correct: ['저게 뭐예요?', 'jeoge mwoeyo'] },
  ],

  rwenDialogue: {
    intro: "Korean BBQ restaurant. The server places a small dish of fermented vegetable in front of you.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '이게 뭐예요?', native: 'What is this?', correct: true, feedback: 'Right distance, right marker. The server explains.' },
        { target: '저게 뭐예요?', native: 'What is that (far)?', correct: false, feedback: "It's right in front of you — use 이게." },
        { target: '주세요', native: 'Please give me', correct: false, feedback: "It's already there — you want to know what it IS." },
      ]},
      { speaker: 'npc', target: '아, 이건 김치예요. 매워요!', native: 'Ah, this is kimchi. Spicy!' },
      { speaker: 'rwen', rwenLine: "이게/저게 + 뭐예요? — your curiosity unlock. Restaurants love this question.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'What is this?', correct: ['이게 뭐예요?', 'ige mwoeyo', 'ige mwoeyo?'] },
      { prompt: 'What is that (over there)?', correct: ['저게 뭐예요?', 'jeoge mwoeyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three things you don't know the name of. Ask each one in Korean: 이게 뭐예요? Out loud.",
    rwenSignoff: "Curiosity is the engine. Korean rewards it.",
  },

  phase8: {
    scenario: "Korean BBQ restaurant. Server brings unfamiliar banchan. You want to know what each one is.",
    rwenRole: "Server — 30s, polite, used to explaining banchan to foreigners.",
    successCriteria: "User uses 이게 뭐예요? for at least two banchan. Distance markers correct. Stays polite.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
