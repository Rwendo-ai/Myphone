import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-work-school',
  module: 8,
  lesson: 6,
  title: 'Work & school — My day',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "「I go to work」「I study English」「I have a meeting」 — 仕事と勉強を英語で。",
    culturalNote: "日本では「会社に行く」と言いますが、英語は「go to work」または「go to the office」。「the company」とは言いません — それは組織を指します。",
  },

  chunks: [
    { id: 'i_go_to_work', target: 'I go to work.', native: '仕事に行きます (Shigoto ni ikimasu)', literal: 'I go to work', emoji: '💼', phonetic: 'ay-GOH-too-WERK', audioRef: null },
    { id: 'i_study_english', target: 'I study English.', native: '英語を勉強します (Eigo wo benkyou shimasu)', literal: 'I study English', emoji: '📖', phonetic: 'ay-STUH-dee-ING-glish', audioRef: null },
    { id: 'i_have_a_meeting', target: 'I have a meeting.', native: '会議があります (Kaigi ga arimasu)', literal: 'I have a meeting', emoji: '👥', phonetic: 'ay-HAV-uh-MEE-ting', audioRef: null },
  ],

  pattern: {
    name: 'Work & study verbs',
    explanation: "Go to work / school（行く）、Study + 科目（勉強する）、Have a meeting / class（予定がある）。会議の動詞は「have」 — 「I have a meeting at 3」。",
    examples: [
      { target: 'I go to work at 9 A.M.', native: '朝9時に仕事に行く。' },
      { target: 'I study English every day.', native: '毎日英語を勉強する。' },
      { target: 'I have a meeting at 3 P.M.', native: '午後3時に会議。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I go to work', right: '仕事に行く' },
      { left: 'I study English', right: '英語を勉強する' },
      { left: 'I have a meeting', right: '会議がある' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: '英語を勉強する', correct: ['I study English', 'i study English'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I ____ a meeting at 3.', options: ['have', 'do', 'go'], correct: 'have' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「会議がある」を英語で？', options: [
      { text: 'I have a meeting', correct: true },
      { text: 'I do meeting', correct: false },
      { text: 'I am meeting', correct: false },
    ], explanation: '予定は have を使う。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['English', 'study', 'I'], correct: ['I', 'study', 'English'], translation: '英語を勉強する' },
    { type: 'translate', instruction: '英語で', prompt: '仕事に行きます', correct: ['I go to work', 'I go to work.'] },
  ],

  rwenDialogue: {
    intro: '東京の英語教室で、日中の活動を話します。',
    lines: [
      { speaker: 'npc', target: 'What does your day look like?', native: '一日の流れは？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I go to work at 9. I have meetings, and I study English at lunch.", native: '9時に仕事へ。会議があって、昼休みに英語を勉強。', correct: true, feedback: '完璧 — 3つの動詞を自然に。' },
          { target: 'Work meeting English.', native: '仕事 会議 英語。', correct: false, feedback: '完全な文で。' },
          { target: 'I am work.', native: '私は仕事である。', correct: false, feedback: '「I go to work」が正解。' },
        ],
      },
      { speaker: 'npc', target: "Busy days!", native: '忙しいですね！' },
      { speaker: 'rwen', rwenLine: '仕事と勉強の英語マスター！', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: '英語を勉強する (英語で)', correct: ['I study English', 'I study English.'] },
      { prompt: '会議があります (英語で)', correct: ['I have a meeting', 'I have a meeting.'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '仕事と勉強の3文を英語で：「I go to __」「I study __」「I have __」。',
    rwenSignoff: 'Have a great day at work — and study!',
  },

  phase8: {
    scenario: '東京の英語教室で日中の活動を説明。',
    rwenRole: 'Mrs. Brown — 講師。',
    successCriteria: "User uses 'go to work', 'study + subject', 'have a meeting' correctly, doesn't say 'go to company' or 'do meeting'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
