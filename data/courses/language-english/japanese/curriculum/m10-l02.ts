import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-angry-frustrated',
  module: 10,
  lesson: 2,
  title: 'Anger & Frustration — 怒り・イライラ',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「I'm angry」「I'm frustrated」「Calm down」 — 怒りの感情を英語で。",
    culturalNote: "日本では怒りを直接見せるのは大人げないとされますが、英語圏では「I'm frustrated」と冷静に伝えるのが大人の対応。我慢して爆発するより健康的とされます。",
  },

  chunks: [
    { id: 'im_angry', target: "I'm angry", native: '怒っています (Okotteimasu)', literal: 'I am angry', emoji: '😠', phonetic: 'aym-ANG-gree', audioRef: null },
    { id: 'im_frustrated', target: "I'm frustrated", native: 'イライラしています (Ira-ira shiteimasu)', literal: 'I am frustrated', emoji: '😤', phonetic: 'aym-FRUS-tray-ted', audioRef: null },
    { id: 'calm_down', target: 'Calm down', native: '落ち着いて (Ochitsuite)', literal: 'Calm down', emoji: '🌬️', phonetic: 'KAHM-down', audioRef: null },
  ],

  pattern: {
    name: 'Anger words (mild to strong)',
    explanation: "Annoyed（少しイラ）→ frustrated（イライラ）→ angry（怒り）→ furious（激怒）。「I'm frustrated with...」で原因を加えます。",
    examples: [
      { target: "I'm angry about the delay.", native: '遅延で怒っています。' },
      { target: "I'm frustrated with this.", native: 'これにイライラしています。' },
      { target: 'Please calm down.', native: '落ち着いてください。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: "I'm angry", right: '怒っている' },
      { left: "I'm frustrated", right: 'イライラしている' },
      { left: 'Calm down', right: '落ち着いて' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'イライラしています', correct: ["I'm frustrated", 'I am frustrated'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'm ____ about the delay.", options: ['angry', 'happy', 'sad'], correct: 'angry' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '冷静に怒りを伝える英語は？', options: [
      { text: "I'm frustrated. Could we talk?", correct: true },
      { text: 'You are bad!', correct: false },
      { text: 'Bakayarou!', correct: false },
    ], explanation: '英語圏では感情＋対話の提案が大人の対応。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['down', 'Calm'], correct: ['Calm', 'down'], translation: '落ち着いて' },
    { type: 'translate', instruction: '英語で', prompt: '怒っています', correct: ["I'm angry", 'I am angry'] },
  ],

  rwenDialogue: {
    intro: '東京の職場で、海外チームとの問題で苛立っています。',
    lines: [
      { speaker: 'npc', target: 'You seem stressed. What\'s up?', native: 'ストレスありそう。どうした？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm frustrated with this project. Could we talk about it?", native: 'このプロジェクトでイライラしています。話せますか？', correct: true, feedback: '完璧 — 感情＋解決提案。' },
          { target: 'Stop!', native: '止めて！', correct: false, feedback: '冷静に：「I\'m frustrated」。' },
          { target: "I'm fine.", native: '大丈夫。', correct: false, feedback: '本音を：「I\'m frustrated」。' },
        ],
      },
      { speaker: 'npc', target: "Of course. Let's grab a coffee.", native: 'もちろん。コーヒー飲もう。' },
      { speaker: 'rwen', rwenLine: '怒りの英語マスター！対話で解決が鍵。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '怒っています (英語で)', correct: ["I'm angry", 'I am angry'] },
      { prompt: 'イライラしています (英語で)', correct: ["I'm frustrated", 'I am frustrated'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '架空のイライラを冷静に英語で：「I\'m frustrated with __. Could we talk?」',
    rwenSignoff: "Stay calm — see you next!",
  },

  phase8: {
    scenario: '東京のオフィスで海外チームとの認識ずれを冷静に伝える。',
    rwenRole: 'Tom — 同僚、対話的。',
    successCriteria: "User expresses frustration calmly with 'I'm frustrated with...', proposes dialogue ('Could we talk?'), avoids exploding or suppressing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
