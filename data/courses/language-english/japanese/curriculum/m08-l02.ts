import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-do-make',
  module: 8,
  lesson: 2,
  title: '"To do" & "to make" — I do / I make',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「Do」と「Make」 — 日本語ではどちらも「する」「作る」ですが、英語で使い分けがあります。",
    culturalNote: "「Do my homework（宿題をする）」「Make tea（お茶を作る）」 — do は行動、make は新しく何かを生み出す感覚。日本人の混乱ポイントです。",
  },

  chunks: [
    { id: 'i_do_my_homework', target: 'I do my homework.', native: '宿題をします (Shukudai wo shimasu)', literal: 'I do my homework', emoji: '📚', phonetic: 'ay-DOO-may-HOHM-werk', audioRef: null },
    { id: 'she_makes_tea', target: 'She makes tea.', native: '彼女はお茶を入れます (Kanojo wa ocha wo iremasu)', literal: 'She makes tea', emoji: '🍵', phonetic: 'shee-MAYKS-TEE', audioRef: null },
    { id: 'dont_worry', target: "Don't worry.", native: '心配しないで (Shinpai shinaide)', literal: "Do not worry", emoji: '🙏', phonetic: 'DOHNT-WUH-ree', audioRef: null },
  ],

  pattern: {
    name: 'Do vs Make',
    explanation: "Do = 活動・タスク（do homework, do exercise, do the dishes）。Make = 何かを作る・生み出す（make tea, make a cake, make a decision）。「Don't」は「Do not」の短縮形 — 否定命令で頻出。",
    examples: [
      { target: 'I do my homework every day.', native: '毎日宿題をします。' },
      { target: 'She makes coffee every morning.', native: '彼女は毎朝コーヒーを作ります。' },
      { target: "Don't worry.", native: '心配しないで。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I do my homework', right: '宿題をする' },
      { left: 'She makes tea', right: 'お茶を入れる' },
      { left: "Don't worry", right: '心配しないで' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '心配しないで', correct: ["Don't worry", 'Do not worry', "don't worry"] },
    { type: 'fill_blank', instruction: '空欄 (do / make)', sentence: 'She ____ tea every morning.', options: ['makes', 'does', 'is'], correct: 'makes' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「決断する」を英語で？', options: [
      { text: 'Make a decision', correct: true },
      { text: 'Do a decision', correct: false },
      { text: 'Have decision', correct: false },
    ], explanation: '決断は make。新しく生み出す感覚。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['homework', 'my', 'do', 'I'], correct: ['I', 'do', 'my', 'homework'], translation: '宿題をします' },
    { type: 'translate', instruction: '英語で', prompt: 'お茶を入れます', correct: ['I make tea', 'She makes tea', 'I make tea.'] },
  ],

  rwenDialogue: {
    intro: 'ロンドンのシェアハウスで朝の家事分担。',
    lines: [
      { speaker: 'npc', target: 'Who makes breakfast?', native: '朝食誰が作る？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I make breakfast, and I do the dishes after.", native: '私が朝食を作って、後で食器を洗う。', correct: true, feedback: '完璧 — make と do の使い分け。' },
          { target: "I do breakfast.", native: '朝食する。', correct: false, feedback: '料理は make — 「I make breakfast」。' },
          { target: "I make dishes.", native: '食器を作る。', correct: false, feedback: '皿洗いは「do the dishes」。' },
        ],
      },
      { speaker: 'npc', target: "Perfect division of labor.", native: '完璧な分担。' },
      { speaker: 'rwen', rwenLine: 'do/make マスター！活動は do、創造は make。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '宿題をします (英語で)', correct: ['I do my homework', 'I do my homework.'] },
      { prompt: '心配しないで (英語で)', correct: ["Don't worry", 'Do not worry'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今日の活動を「I do __」3つと「I make __」3つで言う。',
    rwenSignoff: "Don't worry — make progress. See you!",
  },

  phase8: {
    scenario: 'ロンドンのシェアハウスで家事分担の打ち合わせ。',
    rwenRole: 'Tom — フラットメイト、整理好き。',
    successCriteria: "User distinguishes 'do' (activities/tasks) from 'make' (creating something), uses common collocations correctly (do homework, make breakfast, do dishes).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
