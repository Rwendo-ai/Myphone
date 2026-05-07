import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-buying-ticket',
  module: 9,
  lesson: 5,
  title: 'Buying a ticket — チケットを買う',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「One ticket to...」「A return, please」 — 切符を買う英語。",
    culturalNote: "イギリス英語：return（往復）、single（片道）。アメリカ英語：round trip、one way。同じ意味でも国で言葉が変わります。",
  },

  chunks: [
    { id: 'one_ticket_to', target: 'One ticket to London, please.', native: 'ロンドンまで1枚お願いします (Rondon made ichi-mai onegaishimasu)', literal: 'One ticket to London please', emoji: '🎫', phonetic: 'wun-TIK-it-too-LON-don', audioRef: null },
    { id: 'round_trip', target: 'A return, please.', native: '往復でお願いします (Oufuku de onegaishimasu)', literal: 'A return please (round trip)', emoji: '🔁', phonetic: 'uh-ree-TURN-PLEEZ', audioRef: null },
    { id: 'how_much', target: 'How much is it?', native: 'いくらですか？ (Ikura desu ka?)', literal: 'How much is it?', emoji: '💷', phonetic: 'how-MUTCH-iz-it', audioRef: null },
  ],

  pattern: {
    name: 'Ticket purchase phrases',
    explanation: "「[数] ticket(s) to [行き先], please」が基本。往復：a return（UK）/ round trip（US）。片道：a single（UK）/ one way（US）。",
    examples: [
      { target: 'One ticket to Paris, please.', native: 'パリまで1枚お願いします。' },
      { target: 'A return ticket, please.', native: '往復でお願いします。' },
      { target: 'How much is it?', native: 'いくらですか？' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'One ticket to London', right: 'ロンドンまで1枚' },
      { left: 'A return', right: '往復' },
      { left: 'How much?', right: 'いくら？' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '往復でお願いします', correct: ['A return, please', 'A round trip, please', 'A return please'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'One ticket ____ Paris, please.', options: ['to', 'for', 'at'], correct: 'to' },
    { type: 'multiple_choice', instruction: '正しい答え', question: 'アメリカで「往復」を言うと？', options: [
      { text: 'Round trip', correct: true },
      { text: 'Return', correct: false },
      { text: 'Both ways', correct: false },
    ], explanation: 'アメリカ：round trip、イギリス：return。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['please', 'London', 'to', 'ticket', 'One'], correct: ['One', 'ticket', 'to', 'London', 'please'], translation: 'ロンドンまで1枚お願いします' },
    { type: 'translate', instruction: '英語で', prompt: 'いくらですか？', correct: ['How much is it?', 'How much?'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンの駅でパリ行きの切符を買います。',
    lines: [
      { speaker: 'npc', target: 'Next, please.', native: '次の方どうぞ。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "One return ticket to Paris, please. How much is it?", native: 'パリまで往復1枚お願いします。いくらですか？', correct: true, feedback: '完璧 — 行き先、種類、価格を一気に。' },
          { target: 'Paris.', native: 'パリ。', correct: false, feedback: '完全な文で：「One ticket to Paris, please」。' },
          { target: 'Oufuku.', native: '往復。', correct: false, feedback: '英語：「A return, please」。' },
        ],
      },
      { speaker: 'npc', target: "That'll be 80 pounds.", native: '80ポンドです。' },
      { speaker: 'rwen', rwenLine: 'チケット購入マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'ロンドンまで1枚お願いします (英語で)', correct: ['One ticket to London, please', 'One ticket to London please'] },
      { prompt: '往復でお願いします (英語で)', correct: ['A return, please', 'A round trip, please'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '架空の切符購入：「One ticket to __, please. A return / single?」を3パターン。',
    rwenSignoff: 'Bon voyage! See you next.',
  },

  phase8: {
    scenario: 'ロンドンの駅で実際にパリ行きユーロスター切符を購入。',
    rwenRole: 'Clerk — 駅員、効率重視。',
    successCriteria: "User asks 'One ticket to [destination], please', specifies 'return' or 'single', asks 'How much?', uses 'please'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
