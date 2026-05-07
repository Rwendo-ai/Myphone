import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l09-emergency',
  module: 2,
  lesson: 9,
  title: 'Emergency phrases — 緊急時の英語',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "緊急時の英語フレーズは知っておくだけで命を守ります。「Help!」「Call the police!」「I need a doctor!」",
    culturalNote: "日本では110番（警察）と119番（救急車）ですが、アメリカは911、イギリスは999、オーストラリアは000。緊急番号を旅行前に必ず確認しましょう。",
  },

  chunks: [
    { id: 'help', target: 'Help!', native: '助けて！ (Tasukete!)', literal: 'Help!', emoji: '🚨', phonetic: 'HELP', audioRef: null },
    { id: 'call_the_police', target: 'Call the police', native: '警察を呼んで (Keisatsu wo yonde)', literal: 'Call the police', emoji: '🚓', phonetic: 'KAWL-thuh-poh-LEES', audioRef: null },
    { id: 'i_need_a_doctor', target: 'I need a doctor', native: '医者が必要です (Isha ga hitsuyou desu)', literal: 'I need a doctor', emoji: '🚑', phonetic: 'AY-need-uh-DOK-ter', audioRef: null },
  ],

  pattern: {
    name: 'Imperative + I need',
    explanation: "緊急時は短くはっきりと。「Call + 目的語」（呼んで）と「I need + a + 名詞」（必要です）が基本パターン。冠詞「a」を忘れずに：「a doctor」「an ambulance」。",
    examples: [
      { target: 'Help!', native: '助けて！' },
      { target: 'Call the police!', native: '警察を呼んで！' },
      { target: 'I need an ambulance.', native: '救急車が必要です。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Help!', right: '助けて！' },
      { left: 'Call the police', right: '警察を呼んで' },
      { left: 'I need a doctor', right: '医者が必要です' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '助けて！', correct: ['Help!', 'Help', 'help!'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I need ____ doctor.', options: ['a', 'the', 'one'], correct: 'a' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'アメリカで緊急電話の番号は？', options: [
      { text: '911', correct: true },
      { text: '119', correct: false },
      { text: '110', correct: false },
    ], explanation: 'アメリカ: 911、イギリス: 999、オーストラリア: 000、日本: 119/110。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['police', 'the', 'Call'], correct: ['Call', 'the', 'police'], translation: '警察を呼んで' },
    { type: 'translate', instruction: '英語で', prompt: '医者が必要です', correct: ['I need a doctor', 'i need a doctor'] },
  ],

  rwenDialogue: {
    intro: 'ロサンゼルスの空港でかばんを盗まれました。すぐ近くの警備員に助けを求めます。',
    lines: [
      { speaker: 'npc', target: 'Are you okay? What happened?', native: '大丈夫ですか？何があった？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Help! Someone stole my bag. Call the police, please!', native: '助けて！誰かがかばんを盗みました。警察を呼んでください！', correct: true, feedback: '完璧 — 緊急時にはっきり伝えました。' },
          { target: 'Bag... gone...', native: 'かばん…消えた…', correct: false, feedback: '完全な文で：「Someone stole my bag」と。' },
          { target: 'Sorry to bother you...', native: 'お手数をおかけしますが…', correct: false, feedback: '緊急時に長い前置きは不要 — 「Help!」から入りましょう。' },
        ],
      },
      { speaker: 'npc', target: "Stay calm. I'm calling the police now.", native: '落ち着いて。今警察を呼びます。' },
      { speaker: 'rwen', rwenLine: '緊急英語マスター！短く、はっきり、速く — これが命を守ります。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '助けて！ (英語で)', correct: ['Help!', 'Help'] },
      { prompt: '警察を呼んで (英語で)', correct: ['Call the police', 'call the police'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '緊急番号を確認：行く予定の国の警察・救急番号を覚えましょう。「I need a doctor」を3回声に出して。',
    rwenSignoff: "Stay safe. I'll see you in the next lesson.",
  },

  phase8: {
    scenario: 'ロサンゼルスで友人が突然倒れた。あなたが代わりに助けを呼ぶシミュレーション。',
    rwenRole: 'Officer Brown — 40歳のLA警察官、冷静で迅速。',
    successCriteria: "User says 'Help!' first to get attention, requests 'Call an ambulance' / 'I need a doctor' clearly, doesn't over-apologize before the emergency request.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
