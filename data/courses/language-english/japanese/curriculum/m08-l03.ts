import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-go-come',
  module: 8,
  lesson: 3,
  title: '"To go" & "to come" — I go / I come',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「Go」（行く）と「Come」（来る） — 動きの基本動詞。",
    culturalNote: "日本語では話し相手のところに「行く」も「来る」もどちらも使えますが、英語は明確：相手のところへは「come」、別の場所へは「go」。「I'm coming!」（今行く！）が正解。",
  },

  chunks: [
    { id: 'i_go_to_work', target: 'I go to work.', native: '仕事に行きます (Shigoto ni ikimasu)', literal: 'I go to work', emoji: '🚶', phonetic: 'ay-GOH-too-WERK', audioRef: null },
    { id: 'come_here', target: 'Come here.', native: 'こっちに来て (Kotchi ni kite)', literal: 'Come here', emoji: '👋', phonetic: 'KUM-HEER', audioRef: null },
    { id: 'were_coming', target: "We're coming.", native: '今行きます (Ima ikimasu)', literal: "We are coming", emoji: '🏃', phonetic: 'WEER-KUM-ing', audioRef: null },
  ],

  pattern: {
    name: 'Go vs Come',
    explanation: "Go = 別の場所へ移動。Come = 相手のいる場所へ移動。「Are you coming?」（来る？）には「Yes, I'm coming!」（今行く！） — go ではなく come。日本人の典型的混乱。",
    examples: [
      { target: 'I go to work at 8 A.M.', native: '朝8時に仕事に行きます。' },
      { target: 'Come here, please.', native: 'こっちに来てください。' },
      { target: "I'm coming!", native: '今行きます！' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I go to work', right: '仕事に行く' },
      { left: 'Come here', right: 'こっちに来て' },
      { left: "We're coming", right: '今行きます' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'こっちに来て', correct: ['Come here', 'come here'] },
    { type: 'fill_blank', instruction: '空欄', sentence: "I'm ____ — wait!", options: ['coming', 'going', 'come'], correct: 'coming' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '友達が「Are you coming?」と呼んだ時の答えは？', options: [
      { text: "Yes, I'm coming!", correct: true },
      { text: "Yes, I'm going!", correct: false },
      { text: 'Yes go!', correct: false },
    ], explanation: '相手のいる場所へは come。「I\'m going」だと別の場所に行く意味になる。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['work', 'to', 'go', 'I'], correct: ['I', 'go', 'to', 'work'], translation: '仕事に行く' },
    { type: 'translate', instruction: '英語で', prompt: '今行きます！', correct: ["I'm coming", "I'm coming!", 'I am coming'] },
  ],

  rwenDialogue: {
    intro: 'シドニーの家で、家族が呼んでいます。',
    lines: [
      { speaker: 'npc', target: "Yuki! Dinner's ready! Are you coming?", native: 'ユキ！夕食できた！来る？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'm coming!", native: '今行きます！', correct: true, feedback: '完璧 — 相手のところへ行く時は come。' },
          { target: "Yes, I'm going!", native: '今行きます！(間違い)', correct: false, feedback: 'Going だと別の場所に行く意味。Coming が正解。' },
          { target: 'Wait!', native: '待って！', correct: false, feedback: '「I\'m coming」のほうが英語的に自然。' },
        ],
      },
      { speaker: 'npc', target: "Hurry up before it gets cold!", native: '冷める前に急いで！' },
      { speaker: 'rwen', rwenLine: 'go/come マスター！相手の方向へは come です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '仕事に行く (英語で)', correct: ['I go to work', 'I go to work.'] },
      { prompt: '今行きます！ (英語で)', correct: ["I'm coming", "I'm coming!"] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '誰かに呼ばれた想定で「I\'m coming!」を3回言う。',
    rwenSignoff: "I'm coming back next lesson!",
  },

  phase8: {
    scenario: 'シドニーの家で、ホストファミリーが夕食に呼ぶ。',
    rwenRole: 'Helen — ホストマザー。',
    successCriteria: "User says 'I'm coming!' (not 'going') when called, uses 'go to + place' for destinations, uses 'come here' for inviting toward speaker.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
