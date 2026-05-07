import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-siblings',
  module: 5,
  lesson: 2,
  title: 'Brothers & Sisters — 兄弟姉妹',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Brother」「Sister」「Siblings」 — 兄弟姉妹を英語で言えるようにしましょう。",
    culturalNote: "日本語では「兄／弟」「姉／妹」と年齢で区別しますが、英語は単に brother / sister。年齢を強調したければ「older brother」「younger sister」と形容詞で。",
  },

  chunks: [
    { id: 'brother', target: 'Brother', native: '兄／弟 (Ani / Otouto)', literal: 'Brother', emoji: '👦', phonetic: 'BRUH-thuh', audioRef: null },
    { id: 'sister', target: 'Sister', native: '姉／妹 (Ane / Imouto)', literal: 'Sister', emoji: '👧', phonetic: 'SIS-tuh', audioRef: null },
    { id: 'two_siblings', target: 'I have two siblings.', native: '兄弟姉妹が2人います (Kyoudai shimai ga futari imasu)', literal: 'I have two siblings', emoji: '👨‍👩‍👧‍👦', phonetic: 'ay hav too SIB-lings', audioRef: null },
  ],

  pattern: {
    name: 'Older / Younger',
    explanation: "年齢を区別したい時：older brother（兄）、younger brother（弟）、older sister（姉）、younger sister（妹）。「siblings」は兄弟姉妹のまとめ言葉。",
    examples: [
      { target: 'I have an older brother.', native: '兄がいます。' },
      { target: 'My younger sister is a student.', native: '妹は学生です。' },
      { target: 'I have two siblings.', native: '兄弟姉妹が2人います。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Older brother', right: '兄' },
      { left: 'Younger sister', right: '妹' },
      { left: 'Two siblings', right: '兄弟姉妹2人' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '兄', correct: ['Older brother', 'older brother', 'My older brother'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I have two ____.', options: ['siblings', 'sibling', 'siblingses'], correct: 'siblings' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「妹」を英語で？', options: [
      { text: 'Younger sister', correct: true },
      { text: 'Small sister', correct: false },
      { text: 'Imouto-sister', correct: false },
    ], explanation: '英語は age で区別 — younger / older。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['sister', 'a', 'have', 'I', 'younger'], correct: ['I', 'have', 'a', 'younger', 'sister'], translation: '妹がいます' },
    { type: 'translate', instruction: '英語で', prompt: '兄弟姉妹が2人います', correct: ['I have two siblings', 'I have two siblings.'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンの新しい職場のチームミーティング後、家族の話。',
    lines: [
      { speaker: 'npc', target: 'Do you have any siblings?', native: '兄弟姉妹はいる？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes, I have an older brother and a younger sister.', native: 'はい、兄と妹がいます。', correct: true, feedback: '完璧 — older / younger で区別。' },
          { target: 'I have two siblings.', native: '兄弟姉妹2人います。', correct: false, feedback: '正解ですが、もっと具体的に — older brother, younger sister。' },
          { target: 'Ani imouto.', native: '兄妹。', correct: false, feedback: '英語では「I have an older brother and a younger sister」。' },
        ],
      },
      { speaker: 'npc', target: "Nice! I'm an only child.", native: 'いいね！私は一人っ子。' },
      { speaker: 'rwen', rwenLine: '兄弟姉妹の表現マスター！「older / younger」で年齢を表せます。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '兄 (英語で)', correct: ['Older brother', 'older brother', 'My older brother'] },
      { prompt: '兄弟姉妹が2人います (英語で)', correct: ['I have two siblings', 'I have two siblings.'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の兄弟姉妹を英語で：「I have [number] siblings. My [older/younger] [brother/sister] is...」',
    rwenSignoff: "Brothers and sisters of all kinds — see you next.",
  },

  phase8: {
    scenario: 'ロンドンの職場のランチで家族について雑談。',
    rwenRole: 'Mark — 30歳のロンドン人同僚、フレンドリー。',
    successCriteria: "User uses 'older/younger brother/sister' to specify age (not just 'brother/sister'), uses 'siblings' as collective term, uses 'an only child' if applicable.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
