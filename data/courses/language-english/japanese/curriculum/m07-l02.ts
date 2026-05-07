import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-foods',
  module: 7,
  lesson: 2,
  title: 'Common foods — よくある食べ物',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Bread」「Rice」「Meat」 — 基本食材の英語。",
    culturalNote: "日本人が毎日食べる「ご飯」は英語で rice。アジア系のレストランでは普通に通じます。「meat」（肉）は牛・豚・鶏全般 — 種類は beef / pork / chicken に分けます。",
  },

  chunks: [
    { id: 'bread', target: 'Bread', native: 'パン (Pan)', literal: 'Bread', emoji: '🍞', phonetic: 'BRED', audioRef: null },
    { id: 'rice', target: 'Rice', native: 'ご飯／米 (Gohan / Kome)', literal: 'Rice', emoji: '🍚', phonetic: 'RAYS', audioRef: null },
    { id: 'meat', target: 'Meat', native: '肉 (Niku)', literal: 'Meat (general)', emoji: '🍖', phonetic: 'MEET', audioRef: null },
  ],

  pattern: {
    name: 'Food categories',
    explanation: "数えられない食材：bread, rice, meat, water。「a slice of bread」「a bowl of rice」「a piece of meat」と単位を付けると数えられます。",
    examples: [
      { target: 'A slice of bread', native: 'パン一枚' },
      { target: 'A bowl of rice', native: 'ご飯一杯' },
      { target: 'I like meat.', native: '肉が好き。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Bread', right: 'パン' },
      { left: 'Rice', right: 'ご飯' },
      { left: 'Meat', right: '肉' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'ご飯', correct: ['Rice', 'rice'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'A slice of ____.', options: ['bread', 'rice', 'meat'], correct: 'bread' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「ご飯一杯」を英語で？', options: [
      { text: 'A bowl of rice', correct: true },
      { text: 'A rice', correct: false },
      { text: 'One rice', correct: false },
    ], explanation: 'rice は数えられない → bowl で数える。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['rice', 'like', 'I'], correct: ['I', 'like', 'rice'], translation: 'ご飯が好き' },
    { type: 'translate', instruction: '英語で', prompt: 'パン一枚', correct: ['A slice of bread', 'a slice of bread'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのカフェで朝食を注文。',
    lines: [
      { speaker: 'npc', target: 'What would you like for breakfast?', native: '朝食は何に？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'd like a slice of bread and some rice, please.", native: 'パン一枚とご飯を少しお願いします。', correct: true, feedback: '完璧。' },
          { target: 'Bread rice.', native: 'パン ご飯。', correct: false, feedback: '完全な文で：「I\'d like bread and rice」。' },
          { target: 'Pan kudasai.', native: 'パンください。', correct: false, feedback: '英語：「Bread, please」。' },
        ],
      },
      { speaker: 'npc', target: "Coming right up.", native: 'すぐお持ちします。' },
      { speaker: 'rwen', rwenLine: '食材の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'パン (英語で)', correct: ['Bread', 'bread'] },
      { prompt: '肉 (英語で)', correct: ['Meat', 'meat'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '冷蔵庫の食材5つを英語で言ってみる。',
    rwenSignoff: "Bread, rice, words — see you next!",
  },

  phase8: {
    scenario: 'ロンドンのカフェで朝食を注文。',
    rwenRole: 'Sarah — カフェ店員。',
    successCriteria: "User uses food words with appropriate units (a slice of bread, a bowl of rice), uses 'I'd like' for polite ordering.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
