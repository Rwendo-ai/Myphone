import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-languages',
  module: 3,
  lesson: 6,
  title: 'Languages I speak — 話せる言語',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「I speak Japanese」「A little English」で話せる言語を伝えます。",
    culturalNote: "日本人は英語力を低く見積もりがちですが、英語圏では「A little」と言うだけで十分。完璧でなくてOKという文化です。",
  },

  chunks: [
    { id: 'i_speak_japanese', target: 'I speak Japanese', native: '日本語を話します (Nihongo wo hanashimasu)', literal: 'I speak Japanese', emoji: '🗣️', phonetic: 'ay-SPEEK-juh-puh-NEEZ', audioRef: null },
    { id: 'a_little_english', target: 'A little English', native: '英語が少しだけ (Eigo ga sukoshi dake)', literal: 'A little English', emoji: '🤏', phonetic: 'uh-LIT-ul-ING-glish', audioRef: null },
    { id: 'and_some_others', target: 'And some others', native: 'あと少し他にも (Ato sukoshi hoka nimo)', literal: 'And some others', emoji: '➕', phonetic: 'and-sum-UH-thurz', audioRef: null },
  ],

  pattern: {
    name: 'I speak + language',
    explanation: "言語名は最初の文字を大文字に：Japanese, English, Chinese, Korean。「I speak a little English」のように「a little」で謙虚に表現できます。",
    examples: [
      { target: 'I speak Japanese.', native: '日本語を話します。' },
      { target: 'I speak a little English.', native: '英語を少しだけ話します。' },
      { target: 'And some Korean.', native: 'あと少し韓国語も。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I speak Japanese', right: '日本語を話します' },
      { left: 'A little English', right: '英語が少しだけ' },
      { left: 'And some others', right: 'あと少し他にも' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '日本語を話します', correct: ['I speak Japanese', 'i speak Japanese'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I speak ____ English.', options: ['a little', 'a small', 'little a'], correct: 'a little' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '言語名の書き方は？', options: [
      { text: 'Japanese (大文字)', correct: true },
      { text: 'japanese (小文字)', correct: false },
      { text: 'JAPANESE (全大文字)', correct: false },
    ], explanation: '英語では言語名・国名は最初の文字を大文字に。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['English', 'little', 'a', 'speak', 'I'], correct: ['I', 'speak', 'a', 'little', 'English'], translation: '英語を少しだけ話します' },
    { type: 'translate', instruction: '英語で', prompt: '英語が少しだけ', correct: ['A little English', 'a little English'] },
  ],

  rwenDialogue: {
    intro: 'シンガポールの空港で、地元の人と会話。',
    lines: [
      { speaker: 'npc', target: 'What languages do you speak?', native: '何語を話しますか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I speak Japanese, and a little English.", native: '日本語を話します、英語が少しだけ。', correct: true, feedback: '完璧 — 「a little」で素直に。' },
          { target: 'English bad.', native: '英語下手。', correct: false, feedback: '謙遜しすぎ。「A little English」が自然。' },
          { target: 'Japanese only.', native: '日本語だけ。', correct: false, feedback: '今英語を話している事実を — 「a little English」で十分。' },
        ],
      },
      { speaker: 'npc', target: "Your English is great!", native: '英語上手だよ！' },
      { speaker: 'rwen', rwenLine: '言語の伝え方マスター！「a little」が自然な英語です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '日本語を話します (英語で)', correct: ['I speak Japanese', 'i speak Japanese'] },
      { prompt: '英語が少しだけ (英語で)', correct: ['A little English', 'a little English'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分が話せる言語を「I speak ___」で全部言ってみてください。',
    rwenSignoff: 'I speak many languages. See you next.',
  },

  phase8: {
    scenario: 'シンガポールで多言語が話される街中で、現地の人と言語の話。',
    rwenRole: 'Wei — 30歳のシンガポール人、英語・中国語・マレー語話者。',
    successCriteria: "User says 'I speak Japanese' (capital J), 'A little English' (not over-deprecating), capitalizes language names correctly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
