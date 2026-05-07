import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-do-you-speak',
  module: 2,
  lesson: 4,
  title: 'Do you speak English? — 英語を話しますか？',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "海外で日本語が通じない時、「Do you speak English?」と「Slowly, please」が命綱になります。",
    culturalNote: "日本人は「英語が苦手」と過剰に謝罪しがちですが、英語圏では普通のこと。「A little」（少しだけ）と素直に言うのが自然です。",
  },

  chunks: [
    { id: 'do_you_speak_english', target: 'Do you speak English?', native: '英語を話しますか？ (Eigo wo hanashimasu ka?)', literal: 'Do you speak English?', emoji: '🗣️', phonetic: 'doo-yoo-SPEEK-ING-glish', audioRef: null },
    { id: 'a_little', target: 'A little', native: '少しだけ (Sukoshi dake)', literal: 'A little', emoji: '🤏', phonetic: 'uh-LIT-uhl', audioRef: null },
    { id: 'slowly_please', target: 'Slowly, please', native: 'ゆっくりお願いします (Yukkuri onegaishimasu)', literal: 'Slowly, please', emoji: '🐢', phonetic: 'SLOH-lee-PLEEZ', audioRef: null },
  ],

  pattern: {
    name: 'Do you...? questions',
    explanation: "英語の質問は「Do」から始まる：Do you speak...? Do you have...? Do you want...? 日本語は「〜ますか？」と最後に付くだけですが、英語は最初に「Do」を置くのが鍵です。",
    examples: [
      { target: 'Do you speak English?', native: '英語を話しますか？' },
      { target: 'Do you speak Japanese?', native: '日本語を話しますか？' },
      { target: 'Slowly, please.', native: 'ゆっくりお願いします。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Do you speak English?', right: '英語を話しますか？' },
      { left: 'A little', right: '少しだけ' },
      { left: 'Slowly, please', right: 'ゆっくりお願いします' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'ゆっくりお願いします', correct: ['Slowly, please', 'Slowly please', 'slowly, please'] },
    { type: 'fill_blank', instruction: '空欄', sentence: '____ you speak English?', options: ['Do', 'Are', 'Is'], correct: 'Do' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '英語が少しだけ話せる時は？', options: [
      { text: 'A little', correct: true },
      { text: 'No', correct: false },
      { text: 'Sorry', correct: false },
    ], explanation: '「A little」は「少しだけ」 — 過剰に謝らずシンプルに。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['English', 'speak', 'Do', 'you'], correct: ['Do', 'you', 'speak', 'English'], translation: '英語を話しますか？' },
    { type: 'translate', instruction: '英語で', prompt: '英語を少しだけ話します', correct: ['I speak a little English', 'I speak English a little', 'A little English'] },
  ],

  rwenDialogue: {
    intro: 'パリの空港で迷子。駅員さんに英語を試します。',
    lines: [
      { speaker: 'npc', target: 'Bonjour! Vous êtes perdu?', native: 'こんにちは！迷っていますか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, do you speak English?", native: 'すみません、英語を話しますか？', correct: true, feedback: '完璧 — 「Sorry」で注意を引いて、英語が話せるか確認しました。' },
          { target: 'Japanese please.', native: '日本語お願い。', correct: false, feedback: 'パリでは厳しい — 英語のほうが通じやすい。' },
          { target: "I'm lost.", native: '迷いました。', correct: false, feedback: 'まず「Do you speak English?」で言語を確認しましょう。' },
        ],
      },
      { speaker: 'npc', target: 'Yes, a little. How can I help?', native: 'はい、少しだけ。何かお困りですか？' },
      { speaker: 'rwen', rwenLine: '言語確認マスター！「Slowly, please」も忘れずに使いましょう。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '英語を話しますか？ (英語で)', correct: ['Do you speak English?', 'do you speak English?'] },
      { prompt: 'ゆっくりお願いします (英語で)', correct: ['Slowly, please', 'slowly please'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '海外で困った時の練習：「Excuse me, do you speak English? Slowly, please」を3回声に出して。',
    rwenSignoff: "I'll speak slowly for you. See you next time.",
  },

  phase8: {
    scenario: 'パリ空港の乗り継ぎで困り、英語が話せる人を探す場面。',
    rwenRole: 'Pierre — 30代のフランス人カウンター係、英語は中級。',
    successCriteria: "User asks 'Do you speak English?' first, requests 'Slowly, please' when needed, uses 'A little' to describe own English level honestly without over-apology.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
