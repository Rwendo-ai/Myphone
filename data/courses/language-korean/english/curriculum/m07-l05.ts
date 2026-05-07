import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l05-banchan',
  module: 7,
  lesson: 5,
  title: 'Banchan — The Side-Dish Universe',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "반찬 (banchan) = the small side dishes that come free with every Korean meal. Refills are also free. The variety telegraphs the quality of the kitchen — a good ahjumma serves 8+ banchan.",
    culturalNote: "Common banchan: 김치 (kimchi), 콩나물 (bean sprouts), 시금치 (spinach), 무생채 (radish slaw), 멸치볶음 (anchovies). Asking 이거 뭐예요? for unfamiliar ones is welcome.",
  },

  chunks: [
    { id: 'banchan', target: '반찬', native: 'Side dishes', literal: 'half-dish', emoji: '🥢', phonetic: 'ban-chan', audioRef: null },
    { id: 'banchan_deo', target: '반찬 더 주세요', native: 'More side dishes please', literal: 'side-dishes more give-please', emoji: '➕', phonetic: 'ban-chan deo ju-se-yo', audioRef: null },
    { id: 'kongnamul', target: '콩나물', native: 'Bean sprouts', literal: 'bean-sprouts', emoji: '🌱', phonetic: 'kong-na-mul', audioRef: null },
  ],

  pattern: {
    name: 'Free refills culture',
    explanation: "Banchan refills are free. Asking 반찬 더 주세요 is normal — never bashful. Korean restaurants take pride in unlimited banchan.",
    examples: [
      { target: '반찬 더 주세요', native: 'More banchan please' },
      { target: '이거 뭐예요?', native: 'What is this?' },
      { target: '맛있어요', native: 'Delicious' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match banchan to Korean', pairs: [
      { left: '반찬', right: 'Side dishes' },
      { left: '콩나물', right: 'Bean sprouts' },
      { left: '시금치', right: 'Spinach' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'More side dishes please', correct: ['반찬 더 주세요', 'banchan deo juseyo'] },
    { type: 'fill_blank', instruction: 'Ask what an unfamiliar banchan is', sentence: '_____ 뭐예요?', options: ['이게', '저게', '얼마'], correct: '이게', context: 'Right in front of you = 이게.' },
    { type: 'build_sentence', instruction: 'Build "Bean sprouts are delicious"', words: ['맛있어요', '콩나물이'], correct: ['콩나물이', '맛있어요'], translation: 'Bean sprouts are delicious.' },
    { type: 'multiple_choice', instruction: 'Banchan is gone. Best ask?', question: 'Pick the polite refill ask', options: [
      { text: '저기요, 반찬 더 주세요', correct: true },
      { text: '반찬 비싸요', correct: false },
      { text: '안녕히 가세요', correct: false },
    ], explanation: '저기요 + 더 주세요 — refills are free in Korea, no shame in asking.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Side dishes', correct: ['반찬', 'banchan'] },
  ],

  rwenDialogue: {
    intro: "Korean restaurant. Eight banchan arrive at your table.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '이게 뭐예요?', native: 'What is this? (curious)', correct: true, feedback: 'Restaurants love this question. Server explains.' },
        { target: '비싸요?', native: 'Is it expensive?', correct: false, feedback: 'Banchan is free — wrong question.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong moment.' },
      ]},
      { speaker: 'npc', target: '아, 이건 무생채예요. 매워요.', native: "Ah, this is radish slaw. It's spicy." },
      { speaker: 'user', userChoices: [
        { target: '맛있어요! 반찬 더 주세요', native: 'Delicious! More side dishes', correct: true, feedback: 'Praise + refill. Maximally Korean diner energy.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Banchan is free — irrelevant.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Free refills — wrong question.' },
      ]},
      { speaker: 'rwen', rwenLine: "Banchan = the soul of the meal. Eat it, ask about it, refill it.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Side dishes (Korean)', correct: ['반찬', 'banchan'] },
      { prompt: 'More side dishes please', correct: ['반찬 더 주세요', 'banchan deo juseyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Three banchan moves: 이게 뭐예요? / 맛있어요 / 반찬 더 주세요. Run the trio.",
    rwenSignoff: "Banchan = the long table conversation. Now you can keep it going.",
  },

  phase8: {
    scenario: "Korean restaurant dinner. Eight banchan at the table — you ask about unfamiliar ones, request refills.",
    rwenRole: "Server — 30s, polite, used to explaining.",
    successCriteria: "User uses 이게 뭐예요?, 반찬 더 주세요, 맛있어요. Stays in 요-form.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
