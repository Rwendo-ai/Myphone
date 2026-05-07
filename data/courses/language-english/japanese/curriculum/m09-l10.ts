import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-conversation',
  module: 9,
  lesson: 10,
  title: 'A travel conversation — 旅の会話',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 9 完成！到着から目的地まで、旅の英語会話を一連で組み立てます。",
    culturalNote: "ロンドン到着 → 地下鉄 → ホテル — このフルフロー英語ができれば、世界中どこへでも行けます。",
  },

  chunks: [
    { id: 'review_arrived_directions', target: "Excuse me, I just arrived. Where is the Underground?", native: 'すみません、到着したばかりです。地下鉄はどこ？', literal: 'Just arrived + where', emoji: '🛬', phonetic: 'ek-SKYOOZ-mee-ay-just-uh-RYVD', audioRef: null },
    { id: 'review_ticket_distance', target: "One ticket to King's Cross, please. How far is it?", native: 'キングスクロスまで1枚お願いします。どのくらい？', literal: 'Ticket + distance', emoji: '🎫', phonetic: 'wun-TIK-it-too-KINGZ-KROS-PLEEZ', audioRef: null },
    { id: 'review_hotel_help', target: "I have a reservation. Could you write down the WiFi password?", native: '予約があります。WiFiパスワードを書いてもらえますか？', literal: 'Hotel + write down', emoji: '📶', phonetic: 'ay-HAV-uh-rez-er-VAY-shun', audioRef: null },
  ],

  pattern: {
    name: 'Full travel flow',
    explanation: "完全な旅の流れ：到着→道を聞く→チケット購入→距離確認→ホテル→確認。各ステップで Module 9 のチャンクが活きます。",
    examples: [
      { target: "Excuse me, where is the Underground?", native: '地下鉄はどこ？' },
      { target: "One ticket to King's Cross, please.", native: 'キングスクロスまで1枚。' },
      { target: 'I have a reservation under Tanaka.', native: '田中で予約があります。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I just arrived', right: '到着したばかり' },
      { left: 'How far is it?', right: 'どのくらい？' },
      { left: 'I have a reservation', right: '予約があります' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'すみません、到着したばかりです。地下鉄はどこ？', correct: [
      "Excuse me, I just arrived. Where is the Underground?",
      "Excuse me, I just arrived. Where is the subway?",
    ]},
    { type: 'translate', instruction: '英語で', prompt: '予約があります。WiFiパスワードを書いてもらえますか？', correct: [
      'I have a reservation. Could you write down the WiFi password?',
      'I have a reservation. Could you write down the wifi password?',
    ]},
    { type: 'build_sentence', instruction: '並べ替え', words: ['please', 'Cross', "King's", 'to', 'ticket', 'One'], correct: ['One', 'ticket', 'to', "King's", 'Cross', 'please'], translation: 'キングスクロスまで1枚お願いします' },
    { type: 'fill_blank', instruction: '空欄', sentence: 'How ____ is it?', options: ['far', 'long', 'high'], correct: 'far' },
    { type: 'multiple_choice', instruction: '正しい流れ', question: '空港到着後の最初の英語は？', options: [
      { text: "Excuse me, I just arrived. Where is the Underground/subway?", correct: true },
      { text: 'I am Tokyo.', correct: false },
      { text: 'Hai!', correct: false },
    ], explanation: '到着→道を聞くのが最初のステップ。' },
  ],

  rwenDialogue: {
    intro: 'ロンドン・ヒースロー空港到着。地下鉄でホテルまでの旅を全部英語で。',
    lines: [
      { speaker: 'npc', target: "Welcome to London. Need help?", native: 'ロンドンへようこそ。お手伝いを？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I just arrived. Where is the Underground? I need to get to King's Cross.", native: 'はい、到着したばかりです。地下鉄は？キングスクロスに行きたい。', correct: true, feedback: '完璧な始まり！' },
          { target: 'Tube?', native: '地下鉄？', correct: false, feedback: '完全な質問で。' },
        ],
      },
      { speaker: 'npc', target: "Take the Piccadilly line, around 50 minutes.", native: 'ピカデリー線で約50分。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Could you write that down? I don't know this area.", native: '書いてもらえますか？この辺りに詳しくないので。', correct: true, feedback: '書いてもらう一手 — 完璧！' },
        ],
      },
      { speaker: 'npc', target: "Sure, here. Have a great trip!", native: 'もちろん。良い旅を！' },
      { speaker: 'rwen', rwenLine: 'Module 9 完了！海外旅行を英語で乗り切れる力がつきました。Module 10 で感情とストーリーを学びましょう。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください — 旅の完全フロー。',
    prompts: [
      { prompt: 'すみません、到着したばかりです。地下鉄はどこ？ (英語で)', correct: [
        "Excuse me, I just arrived. Where is the Underground?",
        "Excuse me, I just arrived. Where is the subway?",
      ]},
      { prompt: '予約があります (英語で)', correct: ['I have a reservation', 'I have a reservation.', 'I have a booking'] },
    ],
  },

  mission: {
    title: 'Module 9 ミッション — 旅のフルフロー',
    task: '架空旅行を英語で：到着→道を聞く→切符→ホテル→確認 全部の流れ。',
    rwenSignoff: 'Module 9 完了！世界へどうぞ。',
  },

  phase8: {
    scenario: 'ロンドン・ヒースロー到着から、地下鉄で King\'s Cross まで、ホテルチェックインまでフル英語旅。',
    rwenRole: 'Various — 空港案内、駅員、ホテルスタッフ。',
    successCriteria: "User runs full travel flow: arrival → directions → ticket → distance → hotel check-in → 'Could you write it down?'. Uses Module 9 chunks naturally without panic.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
