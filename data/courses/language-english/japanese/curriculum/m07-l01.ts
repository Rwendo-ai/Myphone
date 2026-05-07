import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-im-hungry',
  module: 7,
  lesson: 1,
  title: 'Hungry & Thirsty — お腹空いた・喉乾いた',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「I'm hungry」「I'm thirsty」 — 体の感覚を英語で。",
    culturalNote: "日本語では「お腹が空いた」と過去形ですが、英語は「I'm hungry」と現在形 — 今の状態を表します。",
  },

  chunks: [
    { id: 'im_hungry', target: "I'm hungry", native: 'お腹が空いた (Onaka ga suita)', literal: 'I-am hungry', emoji: '🍴', phonetic: 'aym-HUN-gree', audioRef: null },
    { id: 'im_thirsty', target: "I'm thirsty", native: '喉が乾いた (Nodo ga kawaita)', literal: 'I-am thirsty', emoji: '💧', phonetic: 'aym-THUR-stee', audioRef: null },
    { id: 'i_want_water', target: 'I want water', native: '水が欲しい (Mizu ga hoshii)', literal: 'I want water', emoji: '🥤', phonetic: 'ay-WONT-WAW-ter', audioRef: null },
  ],

  pattern: {
    name: "I'm + state / I want + noun",
    explanation: "状態は「I'm + 形容詞」(hungry, thirsty, tired)。欲しいものは「I want + 名詞」または「I'd like + 名詞」（より丁寧）。",
    examples: [
      { target: "I'm hungry.", native: 'お腹空いた。' },
      { target: "I'm thirsty.", native: '喉乾いた。' },
      { target: "I'd like some water, please.", native: '水を少しお願いします。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: "I'm hungry", right: 'お腹空いた' },
      { left: "I'm thirsty", right: '喉乾いた' },
      { left: 'I want water', right: '水が欲しい' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'お腹空いた', correct: ["I'm hungry", "I am hungry"] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'm ____.", options: ['hungry', 'hunger', 'eat'], correct: 'hungry' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'より丁寧な「水欲しい」は？', options: [
      { text: "I'd like some water, please.", correct: true },
      { text: 'Water!', correct: false },
      { text: 'Give water.', correct: false },
    ], explanation: '「I\'d like」+ please が丁寧。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['water', 'want', 'I'], correct: ['I', 'want', 'water'], translation: '水が欲しい' },
    { type: 'translate', instruction: '英語で', prompt: '喉乾いた', correct: ["I'm thirsty", "I am thirsty"] },
  ],

  rwenDialogue: {
    intro: 'シドニーの長距離フライト後、空港のカフェで。',
    lines: [
      { speaker: 'npc', target: "What can I get you?", native: '何にしますか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm thirsty. I'd like some water, please.", native: '喉が乾きました。水をお願いします。', correct: true, feedback: '完璧 — 状態説明＋丁寧な依頼。' },
          { target: 'Water!', native: '水！', correct: false, feedback: 'もっと丁寧に：「I\'d like water, please」。' },
          { target: 'Onaka.', native: 'お腹。', correct: false, feedback: '英語：「I\'m hungry」。' },
        ],
      },
      { speaker: 'npc', target: "Sure, still or sparkling?", native: '炭酸入り？普通？' },
      { speaker: 'rwen', rwenLine: '体感の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'お腹空いた (英語で)', correct: ["I'm hungry", 'I am hungry'] },
      { prompt: '喉乾いた (英語で)', correct: ["I'm thirsty", 'I am thirsty'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今の自分の状態を3つ英語で：hungry / thirsty / tired のどれか。',
    rwenSignoff: "I'm hungry — for more lessons. See you!",
  },

  phase8: {
    scenario: 'シドニー空港のカフェで長距離フライト後の注文。',
    rwenRole: 'Liam — 25歳のバリスタ。',
    successCriteria: "User uses 'I'm hungry/thirsty' (present tense, not past), 'I'd like' for polite requests with 'please'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
