import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-directions',
  module: 9,
  lesson: 2,
  title: 'Left, Right, Straight — 左・右・真っ直ぐ',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Turn left」「Go straight」「On the right」 — 道案内の基本英語。",
    culturalNote: "日本の道案内は「100メートル先を右」と距離感を入れますが、英語は「Turn right at the second street」のように目印で言うことが多いです。",
  },

  chunks: [
    { id: 'turn_left', target: 'Turn left', native: '左に曲がる (Hidari ni magaru)', literal: 'Turn left', emoji: '⬅️', phonetic: 'TURN-LEFT', audioRef: null },
    { id: 'go_straight', target: 'Go straight', native: '真っ直ぐ行く (Massugu iku)', literal: 'Go straight', emoji: '⬆️', phonetic: 'GOH-STRAYT', audioRef: null },
    { id: 'its_on_the_right', target: "It's on the right", native: '右側にあります (Migi-gawa ni arimasu)', literal: "It is on the right", emoji: '➡️', phonetic: 'its-on-thuh-RYT', audioRef: null },
  ],

  pattern: {
    name: 'Direction commands',
    explanation: "Turn left / right（曲がる）、Go straight（直進）、On the left / right（〜側）。「at the corner」（角で）「at the traffic light」（信号で）と組み合わせます。",
    examples: [
      { target: 'Turn left at the corner.', native: '角で左に曲がる。' },
      { target: 'Go straight for two blocks.', native: '2ブロック真っ直ぐ。' },
      { target: "It's on the right.", native: '右側にあります。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Turn left', right: '左に曲がる' },
      { left: 'Go straight', right: '真っ直ぐ' },
      { left: "It's on the right", right: '右側' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '右に曲がる', correct: ['Turn right', 'turn right'] },
    { type: 'fill_blank', instruction: '空欄', sentence: '____ straight for two blocks.', options: ['Go', 'Turn', 'Walk'], correct: 'Go' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「右側にあります」を英語で？', options: [
      { text: "It's on the right", correct: true },
      { text: 'Right side', correct: false },
      { text: 'Migi here', correct: false },
    ], explanation: '「on the right / left」が正解。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['left', 'Turn'], correct: ['Turn', 'left'], translation: '左に曲がる' },
    { type: 'translate', instruction: '英語で', prompt: '真っ直ぐ行く', correct: ['Go straight', 'go straight'] },
  ],

  rwenDialogue: {
    intro: 'NYのストリートで道を聞かれた側から教える練習。',
    lines: [
      { speaker: 'npc', target: 'Excuse me, where is the museum?', native: 'すみません、美術館は？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Go straight, then turn left at the corner. It's on the right.", native: '真っ直ぐ、角で左、右側にあります。', correct: true, feedback: '完璧 — 3つの方向動詞を連結。' },
          { target: 'Left right.', native: '左右。', correct: false, feedback: '完全な指示で：「Turn left, then it\'s on the right」。' },
          { target: 'Massugu hidari.', native: '真っ直ぐ左。', correct: false, feedback: '英語：「Go straight, turn left」。' },
        ],
      },
      { speaker: 'npc', target: "Thanks!", native: 'ありがとう！' },
      { speaker: 'rwen', rwenLine: '道案内マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '左に曲がる (英語で)', correct: ['Turn left', 'turn left'] },
      { prompt: '右側にあります (英語で)', correct: ["It's on the right", 'On the right'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '架空の道案内：「Go straight → Turn left → On the right」を声に出す。',
    rwenSignoff: 'Go straight to the next lesson!',
  },

  phase8: {
    scenario: 'NYの街中で逆に道を聞かれて教える。',
    rwenRole: 'Tourist — 観光客、迷子。',
    successCriteria: "User uses 'Turn left/right', 'Go straight', 'on the right/left' correctly, connects with 'then' or 'and'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
