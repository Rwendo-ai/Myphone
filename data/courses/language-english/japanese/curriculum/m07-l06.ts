import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l06-cooking',
  module: 7,
  lesson: 6,
  title: 'Cooking verbs — 料理の動詞',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Cook」「Chop」「Boil」 — 料理の基本動詞。",
    culturalNote: "日本料理の「炊く」「煮る」「焼く」は英語では cook / boil / grill / fry に分けます。レシピを英語で読むなら必須です。",
  },

  chunks: [
    { id: 'cook', target: 'Cook', native: '料理する (Ryouri suru)', literal: 'Cook', emoji: '👨‍🍳', phonetic: 'KOOK', audioRef: null },
    { id: 'chop', target: 'Chop', native: '切る／刻む (Kiru / Kizamu)', literal: 'Chop', emoji: '🔪', phonetic: 'CHOP', audioRef: null },
    { id: 'boil', target: 'Boil', native: '茹でる／沸かす (Yuderu / Wakasu)', literal: 'Boil', emoji: '♨️', phonetic: 'BOYL', audioRef: null },
  ],

  pattern: {
    name: 'Cooking verbs',
    explanation: "Cook（料理する）、Chop（刻む）、Boil（茹でる）、Fry（揚げる・炒める）、Grill（焼く）、Bake（オーブンで焼く）。動詞の後に食材：「I cook rice」「I chop onions」。",
    examples: [
      { target: 'I cook dinner every day.', native: '毎日夕食を作ります。' },
      { target: 'Chop the onions.', native: 'たまねぎを刻む。' },
      { target: 'Boil the water.', native: 'お湯を沸かす。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Cook', right: '料理する' },
      { left: 'Chop', right: '刻む' },
      { left: 'Boil', right: '茹でる' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '茹でる', correct: ['Boil', 'boil'] },
    { type: 'fill_blank', instruction: '空欄', sentence: '____ the water for tea.', options: ['Boil', 'Cook', 'Chop'], correct: 'Boil' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「たまねぎを刻む」を英語で？', options: [
      { text: 'Chop the onions', correct: true },
      { text: 'Cut tama', correct: false },
      { text: 'Onion small', correct: false },
    ], explanation: '料理で刻む = chop。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['dinner', 'cook', 'I'], correct: ['I', 'cook', 'dinner'], translation: '夕食を作る' },
    { type: 'translate', instruction: '英語で', prompt: '料理する', correct: ['Cook', 'cook'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのフラットメイトと一緒に料理。',
    lines: [
      { speaker: 'npc', target: "Can you help in the kitchen?", native: 'キッチン手伝える？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sure! I'll chop the onions and boil the water.", native: 'もちろん！たまねぎを刻んでお湯を沸かすね。', correct: true, feedback: '完璧 — 動詞2つを使えました。' },
          { target: 'Cut yes.', native: '切る はい。', correct: false, feedback: '完全な文で。' },
          { target: 'Tamanegi kizamu.', native: 'たまねぎ刻む。', correct: false, feedback: '英語：「Chop the onions」。' },
        ],
      },
      { speaker: 'npc', target: "Thanks, you're a lifesaver!", native: 'ありがとう、助かる！' },
      { speaker: 'rwen', rwenLine: '料理動詞マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '刻む (英語で)', correct: ['Chop', 'chop'] },
      { prompt: '料理する (英語で)', correct: ['Cook', 'cook'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '料理を3つ英語で説明：「I cook __」「I chop __」「I boil __」',
    rwenSignoff: 'Cook up some good English. See you!',
  },

  phase8: {
    scenario: 'ロンドンのフラットでルームメイトと一緒に料理。',
    rwenRole: 'Sarah — ルームメイト、料理初心者。',
    successCriteria: "User uses cooking verbs (cook/chop/boil/fry) with appropriate ingredients, gives instructions or describes actions in present tense.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
