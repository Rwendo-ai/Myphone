import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-eolmaeyo',
  module: 2,
  lesson: 6,
  title: 'Eolmaeyo? — How Much Is It?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Markets, taxis, cafés — at some point you'll need 얼마예요? — how much is it? Korean numbers come in lesson m06; for now, let the seller speak the number, you confirm with 네 or push back with 비싸요 (it's expensive).",
    culturalNote: "Mild bargaining is acceptable at traditional markets (Namdaemun, Dongdaemun) but never at cafés, restaurants, or chain stores. Saying 비싸요 with a smile signals 'too expensive' politely.",
  },

  chunks: [
    { id: 'eolmaeyo', target: '얼마예요?', native: 'How much is it?', literal: 'how-much-is?', emoji: '💵', phonetic: 'eol-ma-ye-yo', audioRef: null },
    { id: 'bissayo', target: '비싸요', native: "It's expensive", literal: 'expensive-yo', emoji: '😬', phonetic: 'bi-ssa-yo', audioRef: null },
    { id: 'ssayo', target: '싸요', native: "It's cheap", literal: 'cheap-yo', emoji: '🤑', phonetic: 'ssa-yo', audioRef: null },
  ],

  pattern: {
    name: 'Price ask + reaction',
    explanation: "얼마예요? to ask. 비싸요 / 싸요 to react. Add 너무 (too) for emphasis: 너무 비싸요 = 'way too expensive'.",
    examples: [
      { target: '얼마예요?', native: 'How much?' },
      { target: '너무 비싸요', native: "It's too expensive" },
      { target: '싸요!', native: "It's cheap!" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '얼마예요?', right: 'How much?' },
      { left: '비싸요', right: 'Expensive' },
      { left: '싸요', right: 'Cheap' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'How much is it?', correct: ['얼마예요?', 'eolmaeyo', 'eolmaeyo?'] },
    { type: 'fill_blank', instruction: "Push back gently at a market", sentence: '너무 _____.', options: ['비싸요', '싸요', '주세요'], correct: '비싸요', context: 'You think the price is too high.' },
    { type: 'build_sentence', instruction: 'Build "It\'s too expensive"', words: ['비싸요', '너무'], correct: ['너무', '비싸요'], translation: "It's too expensive." },
    { type: 'multiple_choice', instruction: "You spot a t-shirt at Namdaemun. Polite first move?", question: 'Pick the natural opener', options: [
      { text: '이거 얼마예요?', correct: true },
      { text: '안녕히 가세요', correct: false },
      { text: '너무 비싸요', correct: false },
    ], explanation: 'Ask the price first. 비싸요 only after they tell you a number.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "It's cheap", correct: ['싸요', 'ssayo'] },
  ],

  rwenDialogue: {
    intro: "Namdaemun market. You point at a hanbok jacket on a stall.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '이거 얼마예요?', native: 'How much is this?', correct: true, feedback: 'Standard price ask — clean.' },
        { target: '주세요', native: 'Please give me', correct: false, feedback: "You haven't heard the price yet — don't commit." },
        { target: '비싸요', native: "It's expensive", correct: false, feedback: "You don't know the price yet — wait." },
      ]},
      { speaker: 'npc', target: '50,000원이에요.', native: "It's 50,000 won." },
      { speaker: 'user', userChoices: [
        { target: '너무 비싸요', native: "It's too expensive", correct: true, feedback: 'Polite pushback. Smile when you say it.' },
        { target: '싸요', native: "It's cheap", correct: false, feedback: "Don't tell them it's cheap — that ends the bargaining." },
        { target: '안녕', native: 'Hi (banmal)', correct: false, feedback: 'Wrong moment + wrong register.' },
      ]},
      { speaker: 'rwen', rwenLine: "얼마예요? + 너무 비싸요 = the bargaining starter pack. Add a smile and the seller often drops 5,000원.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'How much is it?', correct: ['얼마예요?', 'eolmaeyo', 'eolmaeyo?'] },
      { prompt: "It's too expensive", correct: ['너무 비싸요', 'neomu bissayo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice the price loop: 이거 얼마예요? → (number) → 너무 비싸요. Run it three times in your head.",
    rwenSignoff: "Markets are a language game. Now you have the moves.",
  },

  phase8: {
    scenario: "Namdaemun market. You're shopping for a souvenir scarf and want to bargain politely.",
    rwenRole: "Market vendor — 50s, friendly, used to bargaining.",
    successCriteria: "User uses 이거 얼마예요? to ask price, 너무 비싸요 to push back. Does NOT use English numbers — says 비싸요 with a smile.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
