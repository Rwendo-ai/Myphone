import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-how-are-you-formal',
  module: 1,
  lesson: 8,
  title: 'Polite "How are you?" forms',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「How do you do?」と「Pleased to meet you」は、英語のとても丁寧な挨拶。フォーマルな場面で使います。",
    culturalNote: "日本語には敬語がありますが、英語には相手によって動詞を変える仕組みはありません。代わりに語彙の選び方で丁寧さを出します：「Hi」→「Hello」→「How do you do?」と段階的に上がります。「Could you...?」「Would you...?」を使うのも丁寧さの工夫。",
  },

  chunks: [
    { id: 'how_do_you_do', target: 'How do you do?', native: 'はじめまして（フォーマル） (Hajimemashite - formal)', literal: 'How do you do?', emoji: '🎩', phonetic: 'how-doo-yoo-DOO', audioRef: null },
    { id: 'pleased_to_meet_you', target: 'Pleased to meet you', native: 'お会いできて光栄です (Oai dekite kouei desu)', literal: '(I-am) pleased to meet you', emoji: '🤝', phonetic: 'PLEEZD-too-MEET-yoo', audioRef: null },
    { id: 'i_hope_youre_well', target: "I hope you're well", native: 'お元気でいらっしゃいますか (Ogenki de irasshaimasu ka)', literal: 'I hope you are well', emoji: '🌟', phonetic: 'aye-HOHP-yor-WELL', audioRef: null },
  ],

  pattern: {
    name: 'Formal greetings',
    explanation: "「How do you do?」は答えも「How do you do?」と返します — 質問ではなく挨拶として。とてもフォーマルで、ビジネスのトップ会談や式典で使います。「Pleased to meet you」は「Nice to meet you」より丁寧。日常会話では「Nice」のほうが自然です。",
    examples: [
      { target: 'How do you do?', native: 'はじめまして（フォーマル）' },
      { target: 'Pleased to meet you, sir.', native: 'お会いできて光栄です。' },
      { target: "I hope you're well.", native: 'お元気でいらっしゃいますか。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせてください', pairs: [
      { left: 'How do you do?', right: 'はじめまして（フォーマル）' },
      { left: 'Pleased to meet you', right: 'お会いできて光栄です' },
      { left: "I hope you're well", right: 'お元気でいらっしゃいますか' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'お会いできて光栄です', correct: ['Pleased to meet you', 'pleased to meet you'] },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「How do you do?」 と挨拶されたら？', options: [
      { text: 'How do you do?', correct: true },
      { text: "I'm fine, thanks.", correct: false },
      { text: 'Goodbye.', correct: false },
    ], explanation: '「How do you do?」は質問ではなく挨拶。同じ言葉を返します。' },
    { type: 'fill_blank', instruction: '空欄を埋めてください', sentence: "Pleased ____ meet you.", options: ['to', 'for', 'at'], correct: 'to' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['well', "you're", 'I', 'hope'], correct: ['I', 'hope', "you're", 'well'], translation: 'お元気でいらっしゃいますか' },
    { type: 'translate', instruction: '英語で', prompt: 'はじめまして（フォーマル）', correct: ['How do you do?', 'How do you do', 'how do you do?'] },
  ],

  rwenDialogue: {
    intro: '東京の高級ホテルでの公式なビジネスミーティング。アメリカの会社の社長と初対面。',
    lines: [
      { speaker: 'npc', target: "Good morning. How do you do? I'm Mr. Anderson.", native: 'おはようございます。はじめまして。アンダーソンと申します。' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'How do you do? Pleased to meet you, Mr. Anderson.', native: 'はじめまして。お会いできて光栄です、アンダーソン様。', correct: true, feedback: '完璧なフォーマル英語！「How do you do?」を返して、「Pleased to meet you」も使えました。' },
          { target: "I'm doing fine, thanks.", native: '元気にやっています。', correct: false, feedback: '「How do you do?」は本当の質問ではなく挨拶。同じ言葉を返しましょう。' },
          { target: 'Hi!', native: 'やあ！', correct: false, feedback: 'カジュアル過ぎ — 社長相手には「How do you do?」が標準です。' },
        ],
      },
      { speaker: 'npc', target: "I hope you're well. Shall we begin?", native: 'お元気でいらっしゃいますか。始めましょうか？' },
      { speaker: 'rwen', rwenLine: 'フォーマル英語マスター！日本語の敬語に近い丁寧さを英語で出せました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'はじめまして（フォーマル） (英語で)', correct: ['How do you do?', 'how do you do?'] },
      { prompt: 'お会いできて光栄です (英語で)', correct: ['Pleased to meet you', 'pleased to meet you'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '次に英語のフォーマルな挨拶が必要な時のために、「How do you do? Pleased to meet you」を3回声に出して練習してください。',
    rwenSignoff: 'I hope you\'re well today.',
  },

  phase8: {
    scenario: '東京の帝国ホテルで日米合同のビジネス式典。CEO同士の初対面の挨拶を演じます。',
    rwenRole: 'Mr. Smith — 60歳のアメリカ人CEO、保守的でフォーマル。',
    successCriteria: "User uses 'How do you do?' (and replies with the same, not 'I'm fine'), uses 'Pleased to meet you' (more formal than 'Nice'), maintains formal register throughout.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
