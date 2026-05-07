import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l09-family-stories',
  module: 5,
  lesson: 9,
  title: 'Telling family stories — 家族のお話',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「A long time ago」「My grandmother used to...」 — 家族の昔話を英語で語ります。",
    culturalNote: "祖父母の昔話は世界共通の話題。「used to」（昔は〜していた）で過去の習慣を表現できます。",
  },

  chunks: [
    { id: 'long_time_ago', target: 'A long time ago', native: '昔々 (Mukashi mukashi)', literal: 'A long time ago', emoji: '🕰️', phonetic: 'uh-LAWNG-tahym-uh-GOH', audioRef: null },
    { id: 'used_to', target: 'My grandmother used to...', native: '祖母は昔…していました (Sobo wa mukashi ... shite imashita)', literal: 'My grandmother used to ...', emoji: '👵', phonetic: 'mahy GRAND-muh-thuh YOOST-too', audioRef: null },
    { id: 'always_says', target: 'He always says...', native: '彼はいつも…と言う (Kare wa itsumo ... to iu)', literal: 'He always says ...', emoji: '💬', phonetic: 'hee AWL-wayz sez', audioRef: null },
  ],

  pattern: {
    name: 'Used to + present habit',
    explanation: "「used to + 動詞原形」= 昔の習慣（今はもうしていない）。「always + 現在形」= 今の習慣。日本語の「〜していた」「いつも〜と言う」と対応します。",
    examples: [
      { target: 'A long time ago, my grandmother used to sing.', native: '昔々、祖母は歌っていました。' },
      { target: 'My father always says "be patient".', native: '父はいつも「我慢しなさい」と言います。' },
      { target: 'We used to live in Kyoto.', native: '昔は京都に住んでいました。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'A long time ago', right: '昔々' },
      { left: 'Used to...', right: '昔は…していた' },
      { left: 'Always says...', right: 'いつも…と言う' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '昔々', correct: ['A long time ago', 'a long time ago'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'My grandmother ____ to sing.', options: ['used', 'use', 'using'], correct: 'used' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「父は昔教師だった」を英語で？', options: [
      { text: 'My father used to be a teacher.', correct: true },
      { text: 'My father use teacher.', correct: false },
      { text: 'Father always teacher.', correct: false },
    ], explanation: '昔の習慣・状態は「used to + 原形動詞」。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['sing', 'to', 'used', 'grandmother', 'My'], correct: ['My', 'grandmother', 'used', 'to', 'sing'], translation: '祖母は昔歌っていた' },
    { type: 'translate', instruction: '英語で', prompt: '父はいつも「我慢しなさい」と言います', correct: ['My father always says "be patient"', 'My father always says be patient'] },
  ],

  rwenDialogue: {
    intro: '英会話クラスで「思い出」のテーマでスピーチ。',
    lines: [
      { speaker: 'npc', target: "Tell us about your grandmother.", native: 'おばあちゃんについて話して。' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A long time ago, my grandmother used to live in a small village. She always says, 'Be kind.'", native: '昔々、祖母は小さな村に住んでいました。彼女はいつも「優しくしなさい」と言います。', correct: true, feedback: '完璧 — used to と always says を自然に。' },
          { target: 'Grandmother village kind.', native: '祖母 村 優しい。', correct: false, feedback: '完全な文で。' },
          { target: 'My grandmother live village.', native: '私の祖母 村に住む。', correct: false, feedback: '時制：「used to live」が過去の習慣。' },
        ],
      },
      { speaker: 'npc', target: "Beautiful story.", native: '美しい話。' },
      { speaker: 'rwen', rwenLine: '昔話マスター！used to が過去の習慣を表せました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '祖母は昔歌っていた (英語で)', correct: ['My grandmother used to sing', 'My grandmother used to sing.'] },
      { prompt: '昔々 (英語で)', correct: ['A long time ago', 'a long time ago'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '祖父母の思い出を英語で：「My grandmother/grandfather used to __」を1文。',
    rwenSignoff: 'Stories live forever. See you!',
  },

  phase8: {
    scenario: '英会話クラスで思い出のスピーチ。',
    rwenRole: 'Mrs. Brown — 英語講師、聞き上手。',
    successCriteria: "User uses 'used to + base verb' for past habits, 'always + present' for ongoing habits, opens with 'A long time ago' for storytelling tone.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
