import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-good-afternoon',
  module: 1,
  lesson: 4,
  title: 'Good afternoon — こんにちは (午後)',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "「Good afternoon」は午後の挨拶。日本語の「こんにちは」と同じ役割ですが、英語では時間帯で言葉が変わります。",
    culturalNote: "日本語の「こんにちは」は朝以外ほぼ全部使えますが、英語は厳密 — 正午を過ぎたら「Good afternoon」、夕方からは「Good evening」。フォーマル過ぎず、ビジネスメールでも使える便利な挨拶です。",
  },

  chunks: [
    { id: 'good_afternoon', target: 'Good afternoon', native: 'こんにちは (午後) (Konnichiwa - gogo)', literal: 'Good afternoon', emoji: '☀️', phonetic: 'good-af-tuh-NOON', audioRef: null },
    { id: 'hows_your_day', target: "How's your day?", native: '今日はどうですか？ (Kyou wa dou desu ka?)', literal: 'How is your day?', emoji: '🙂', phonetic: 'howz-yor-DAY', audioRef: null },
    { id: 'going_well', target: 'Going well', native: '順調です (Junchou desu)', literal: '(It-is) going well', emoji: '👍', phonetic: 'GO-ing-WELL', audioRef: null },
  ],

  pattern: {
    name: 'Afternoon greetings + small talk',
    explanation: "英語では「How's your day?」（今日はどう？）が午後の定番スモールトーク。「How's」は「How is」の短縮形 — 英語は短縮形が多く、自然な会話では必ず使われます。日本語の助詞「は」は英語にはなく、語順だけで意味が決まります。",
    examples: [
      { target: 'Good afternoon!', native: 'こんにちは！' },
      { target: "How's your day going?", native: '今日はどうですか？' },
      { target: "It's going well, thanks.", native: '順調です、ありがとう。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせてください', pairs: [
      { left: 'Good afternoon', right: 'こんにちは（午後）' },
      { left: "How's your day?", right: '今日はどうですか？' },
      { left: 'Going well', right: '順調です' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'こんにちは（午後）', correct: ['Good afternoon', 'good afternoon'] },
    { type: 'fill_blank', instruction: '空欄を埋めてください', sentence: "Good ____! How's your day?", options: ['afternoon', 'morning', 'night'], correct: 'afternoon', context: '午後2時、同僚に会いました。' },
    { type: 'multiple_choice', instruction: '正しい答え', question: "「How's your day?」 と聞かれたら？", options: [
      { text: "Going well, thanks.", correct: true },
      { text: 'My name is Yuki.', correct: false },
      { text: 'Yes, please.', correct: false },
    ], explanation: '「How\'s your day?」は調子を聞く質問。「Going well」が短く自然な答えです。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['day', 'your', "How's"], correct: ["How's", 'your', 'day'], translation: '今日はどうですか？' },
    { type: 'translate', instruction: '英語で', prompt: '順調です、ありがとう。', correct: ['Going well, thanks', 'going well, thanks', "It's going well, thanks"] },
  ],

  rwenDialogue: {
    intro: '東京のオフィス、午後3時。海外支社からのアメリカ人同僚があなたのデスクに来ます。',
    lines: [
      { speaker: 'npc', target: "Good afternoon! How's your day?", native: 'こんにちは！今日はどうですか？' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Good afternoon! Going well, thanks. And yours?", native: 'こんにちは！順調です、ありがとう。あなたは？', correct: true, feedback: '完璧 — 挨拶を返し、質問もしました。' },
          { target: 'Good morning.', native: 'おはようございます。', correct: false, feedback: '午後は「Good afternoon」を使いましょう。' },
          { target: 'I am very busy and tired today.', native: '今日はとても忙しくて疲れています。', correct: false, feedback: '日本人の正直さですが、英語のスモールトークでは長すぎます。「Going well」で十分。' },
        ],
      },
      { speaker: 'npc', target: "Pretty good, thanks. Big project?", native: 'まあまあです、ありがとう。大きなプロジェクト？' },
      { speaker: 'rwen', rwenLine: '午後の挨拶クリア！スモールトークの本音より「Going well」が英語の標準です。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'こんにちは（午後）(英語で)', correct: ['Good afternoon', 'good afternoon'] },
      { prompt: '順調です (英語で)', correct: ['Going well', 'going well', "It's going well"] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '今日の午後、誰かに「Good afternoon, how\'s your day?」と言ってみてください。',
    rwenSignoff: 'See you tomorrow afternoon!',
  },

  phase8: {
    scenario: '東京の本社、午後の会議室前で、出張中のロンドンの同僚と廊下で出会います。',
    rwenRole: 'Tom — 40歳のロンドン人マネージャー、ビジネスライク。',
    successCriteria: "User uses 'Good afternoon' (not 'Good morning'), answers 'How's your day?' briefly with 'Going well' (not a long detailed answer), and returns the question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
