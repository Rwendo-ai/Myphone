import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'Hotel & Accommodation — ホテル',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「I have a reservation」「My room key」「I'd like to check out」 — ホテルチェックインから出発までの英語。",
    culturalNote: "海外ホテルでは英語が必須。「reservation」（予約）と「booking」（予約）はほぼ同義。チェックアウトは普通11時 — 「Late check-out」を頼むこともできます。",
  },

  chunks: [
    { id: 'reservation', target: 'I have a reservation.', native: '予約があります (Yoyaku ga arimasu)', literal: 'I have a reservation', emoji: '📋', phonetic: 'ay-HAV-uh-rez-er-VAY-shun', audioRef: null },
    { id: 'room_key', target: 'My room key', native: '部屋の鍵 (Heya no kagi)', literal: 'My room key', emoji: '🔑', phonetic: 'my-ROOM-KEE', audioRef: null },
    { id: 'check_out', target: "I'd like to check out.", native: 'チェックアウトします (Chekku-auto shimasu)', literal: "I would like to check out", emoji: '🧳', phonetic: 'ayd-LAYK-too-CHEK-owt', audioRef: null },
  ],

  pattern: {
    name: 'Hotel phrases',
    explanation: "「I have a reservation under [名前]」（〜の予約があります）。「My room key」（部屋の鍵）。「Check in」（到着）/ 「check out」（出発）。",
    examples: [
      { target: 'I have a reservation under Tanaka.', native: '田中で予約があります。' },
      { target: "Could I have my room key?", native: '部屋の鍵をいただけますか？' },
      { target: "I'd like to check out, please.", native: 'チェックアウトをお願いします。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I have a reservation', right: '予約があります' },
      { left: 'My room key', right: '部屋の鍵' },
      { left: "I'd like to check out", right: 'チェックアウト' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '予約があります', correct: ['I have a reservation', 'I have a booking', 'I have a reservation.'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'd like to ____ out.", options: ['check', 'go', 'do'], correct: 'check' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'チェックインの時の最初の一言は？', options: [
      { text: 'I have a reservation under [name].', correct: true },
      { text: 'Hello room.', correct: false },
      { text: 'Yoyaku.', correct: false },
    ], explanation: '名前を伝えて予約確認。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['reservation', 'a', 'have', 'I'], correct: ['I', 'have', 'a', 'reservation'], translation: '予約があります' },
    { type: 'translate', instruction: '英語で', prompt: 'チェックアウトします', correct: ["I'd like to check out", 'I want to check out', "I'd like to check out, please"] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのホテルでチェックイン。',
    lines: [
      { speaker: 'npc', target: 'Welcome! How can I help?', native: 'いらっしゃいませ。何かお手伝いを？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Hi, I have a reservation under Tanaka. Could I have my room key?", native: 'こんにちは、田中で予約があります。部屋の鍵をいただけますか？', correct: true, feedback: '完璧 — 名前と要望を一緒に。' },
          { target: 'Reservation.', native: '予約。', correct: false, feedback: '完全な文で：「I have a reservation under [名前]」。' },
          { target: 'Heya kagi.', native: '部屋鍵。', correct: false, feedback: '英語：「Could I have my room key?」。' },
        ],
      },
      { speaker: 'npc', target: "Found it. Here's your key — room 305.", native: '見つかりました。鍵です — 305号室。' },
      { speaker: 'rwen', rwenLine: 'ホテル英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '予約があります (英語で)', correct: ['I have a reservation', 'I have a booking'] },
      { prompt: 'チェックアウトします (英語で)', correct: ["I'd like to check out", 'I want to check out'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: 'ホテルの3シーン英語：チェックイン → 鍵確認 → チェックアウト。',
    rwenSignoff: 'Check in to the next lesson!',
  },

  phase8: {
    scenario: 'ロンドンのホテルでチェックインからチェックアウトまでフルシミュレーション。',
    rwenRole: 'Receptionist — ホテルスタッフ、丁寧。',
    successCriteria: "User says 'I have a reservation under [name]', requests 'Could I have my room key?', uses 'I'd like to check out, please' at end.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
