import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-asking-help',
  module: 9,
  lesson: 9,
  title: 'Asking for help while travelling — 旅先で助けを求める',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Could you help me?」「Could you write it down?」 — 旅先で確実に伝える英語。",
    culturalNote: "聞き取りに自信がない時は「書いてもらえますか？」と頼むのが日本人にはありがたい技。住所や駅名をスマホに書いてもらえば確実です。",
  },

  chunks: [
    { id: 'could_you_help_me', target: 'Could you help me?', native: '助けていただけますか？ (Tasukete itadakemasu ka?)', literal: 'Could you help me?', emoji: '🙏', phonetic: 'KOOD-yoo-HELP-mee', audioRef: null },
    { id: 'i_dont_know_area', target: "I don't know this area.", native: 'この辺りに詳しくありません (Kono atari ni kuwashiku arimasen)', literal: "I do not know this area", emoji: '🗺️', phonetic: 'ay-DOHNT-NOH-this-AIR-ee-uh', audioRef: null },
    { id: 'could_you_write_it_down', target: 'Could you write it down?', native: '書いてもらえますか？ (Kaite moraemasu ka?)', literal: 'Could you write it down?', emoji: '📝', phonetic: 'KOOD-yoo-RYT-it-DOWN', audioRef: null },
  ],

  pattern: {
    name: 'Could you...?',
    explanation: "「Could you + 動詞?」で丁寧な依頼。Can より丁寧。「Could you write it down?」（書いてもらえますか？）は日本人旅行者の救世主。",
    examples: [
      { target: 'Could you help me?', native: '助けていただけますか？' },
      { target: 'Could you speak slowly?', native: 'ゆっくり話してもらえますか？' },
      { target: 'Could you write it down?', native: '書いてもらえますか？' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'Could you help me?', right: '助けていただけますか？' },
      { left: "I don't know this area", right: 'この辺りに詳しくない' },
      { left: 'Could you write it down?', right: '書いてもらえますか？' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '書いてもらえますか？', correct: ['Could you write it down?', 'Could you write it down', 'Can you write it down?'] },
    { type: 'fill_blank', instruction: '空欄', sentence: '____ you help me?', options: ['Could', 'Did', 'Was'], correct: 'Could' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '一番丁寧な依頼は？', options: [
      { text: 'Could you help me, please?', correct: true },
      { text: 'Help.', correct: false },
      { text: 'You help.', correct: false },
    ], explanation: '「Could you」+「please」が最丁寧。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['down', 'it', 'write', 'you', 'Could'], correct: ['Could', 'you', 'write', 'it', 'down'], translation: '書いてもらえますか？' },
    { type: 'translate', instruction: '英語で', prompt: 'この辺りに詳しくありません', correct: ["I don't know this area", 'I do not know this area'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのストリートで、駅名のスペルが聞き取れなくて困っています。',
    lines: [
      { speaker: 'npc', target: "It's near Leicester Square — pronounced 'LES-ter'.", native: 'レスタースクエアの近く — 「レスター」と発音。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry, could you write it down? I don't know this area.", native: 'すみません、書いてもらえますか？この辺りに詳しくないので。', correct: true, feedback: '完璧 — 書いてもらう一手は最強。' },
          { target: 'Where?', native: 'どこ？', correct: false, feedback: '具体的に：「Could you write it down?」。' },
          { target: 'Sumimasen.', native: 'すみません。', correct: false, feedback: '英語：「Could you...?」で頼んで。' },
        ],
      },
      { speaker: 'npc', target: "Sure, here you go.", native: 'もちろん、はい。' },
      { speaker: 'rwen', rwenLine: '「Could you write it down?」マスター！日本人の旅の最強武器。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '助けていただけますか？ (英語で)', correct: ['Could you help me?', 'Can you help me?'] },
      { prompt: '書いてもらえますか？ (英語で)', correct: ['Could you write it down?', 'Can you write it down?'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '「Could you __?」を3パターン：help me / speak slowly / write it down。',
    rwenSignoff: "Could you remember me? See you!",
  },

  phase8: {
    scenario: 'ロンドンで駅名・住所が聞き取れなくて、書いてもらう交渉。',
    rwenRole: 'Local — 親切な通行人。',
    successCriteria: "User uses 'Could you...?' for polite requests, asks 'Could you write it down?' when unsure, explains 'I don't know this area'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
