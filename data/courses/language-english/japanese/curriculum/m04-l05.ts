import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-plurals-irregular',
  module: 4,
  lesson: 5,
  title: 'Irregular plurals — children, men',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "英語の不規則な複数形。「-s」を付けない例外的な単語があります。",
    culturalNote: "child → children, man → men, woman → women, person → people, foot → feet — 全部丸暗記。日本語の「行く・行った」のような不規則変化と同じく、覚えるしかありません。",
  },

  chunks: [
    { id: 'children', target: 'Child → Children', native: '子供 → 子供たち (Kodomo → Kodomotachi)', literal: 'Child → Children (irregular)', emoji: '👶', phonetic: 'chyld → CHIL-dren', audioRef: null },
    { id: 'men', target: 'Man → Men', native: '男 → 男たち (Otoko → Otokotachi)', literal: 'Man → Men (irregular)', emoji: '👨', phonetic: 'man → men', audioRef: null },
    { id: 'people', target: 'Person → People', native: '人 → 人々 (Hito → Hitobito)', literal: 'Person → People', emoji: '👥', phonetic: 'PUR-son → PEE-pul', audioRef: null },
  ],

  pattern: {
    name: 'Irregular plurals',
    explanation: "丸暗記が必要：child→children, man→men, woman→women, person→people, foot→feet, tooth→teeth, mouse→mice。「persons」と言いたくなるけど不正解 — 「people」が正解です。",
    examples: [
      { target: 'One child → two children', native: '子供一人 → 子供二人' },
      { target: 'One man → two men', native: '男一人 → 男二人' },
      { target: 'One person → many people', native: '人一人 → 人々' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Child → Children', right: '子供たち' },
      { left: 'Man → Men', right: '男たち' },
      { left: 'Person → People', right: '人々' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '子供たち', correct: ['Children', 'children'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'There are many ____ here.', options: ['people', 'persons', 'peoples'], correct: 'people' },
    { type: 'multiple_choice', instruction: '正しい複数形', question: '「foot」の複数形は？', options: [
      { text: 'feet', correct: true },
      { text: 'foots', correct: false },
      { text: 'feets', correct: false },
    ], explanation: 'foot → feet（不規則）。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['children', 'three', 'have', 'I'], correct: ['I', 'have', 'three', 'children'], translation: '子供が三人います' },
    { type: 'translate', instruction: '英語で', prompt: '人々', correct: ['People', 'people'] },
  ],

  rwenDialogue: {
    intro: 'シドニーの公園で、家族について話す機会。',
    lines: [
      { speaker: 'npc', target: 'How many children do you have?', native: '子供は何人？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'I have two children.', native: '子供が二人います。', correct: true, feedback: '完璧 — 「children」は不規則複数形。' },
          { target: 'I have two childs.', native: '子供二人。', correct: false, feedback: 'child の複数形は「children」 — 不規則です。' },
          { target: 'Two child.', native: '二子供。', correct: false, feedback: '冠詞と複数形：「I have two children」。' },
        ],
      },
      { speaker: 'npc', target: "Lovely! How old are they?", native: '素敵！何歳？' },
      { speaker: 'rwen', rwenLine: '不規則複数形マスター！「children」「people」を覚えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '子供たち (英語で)', correct: ['Children', 'children'] },
      { prompt: '人々 (英語で)', correct: ['People', 'people'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '不規則複数形5つを声に出して：children, men, women, people, feet。',
    rwenSignoff: 'See you with your children — see you with your friends!',
  },

  phase8: {
    scenario: '公園で家族や周りの人について話す機会。',
    rwenRole: 'Lisa — 35歳の母親、フレンドリー。',
    successCriteria: "User uses irregular plurals correctly: 'children' (not 'childs'), 'people' (not 'persons'), 'men/women' (not 'mans/womans').",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
