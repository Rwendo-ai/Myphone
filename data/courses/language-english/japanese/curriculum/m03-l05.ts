import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-hobbies',
  module: 3,
  lesson: 5,
  title: 'Hobbies — 趣味',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "趣味の話題は世界共通の会話の入り口。「I like」「I enjoy」を使えば自分のことを伝えられます。",
    culturalNote: "日本ではアニメ・マンガ・ゲームが趣味の人が多く、海外でも「Anime fan!」と話題になりやすい。「I like anime」と言うだけで会話が広がります。",
  },

  chunks: [
    { id: 'i_like', target: 'I like ...', native: '…が好きです (... ga suki desu)', literal: 'I like ...', emoji: '👍', phonetic: 'ay-LAYK', audioRef: null },
    { id: 'i_enjoy', target: 'I enjoy ...', native: '…を楽しみます (... wo tanoshimimasu)', literal: 'I enjoy ...', emoji: '😊', phonetic: 'ay-en-JOY', audioRef: null },
    { id: 'in_my_free_time', target: 'In my free time', native: '暇な時に (Hima na toki ni)', literal: 'In my free time', emoji: '🕐', phonetic: 'in-may-FREE-taym', audioRef: null },
  ],

  pattern: {
    name: 'I like + noun / verb-ing',
    explanation: "「I like + 名詞」(I like anime) または「I like + 動詞ing」(I like reading)。「enjoy」も同じ使い方。日本語は名詞も動詞も「が好き」で済みますが、英語では動詞には「-ing」を付けるのがコツ。",
    examples: [
      { target: 'I like anime.', native: 'アニメが好きです。' },
      { target: 'I enjoy reading.', native: '読書を楽しみます。' },
      { target: 'In my free time, I play games.', native: '暇な時はゲームをします。' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '組み合わせ', pairs: [
      { left: 'I like', right: '…が好き' },
      { left: 'I enjoy', right: '…を楽しむ' },
      { left: 'In my free time', right: '暇な時に' },
    ]},
    { type: 'translate', instruction: '英語で', prompt: 'アニメが好きです', correct: ['I like anime', 'i like anime'] },
    { type: 'fill_blank', instruction: '空欄', sentence: 'I enjoy ____.', options: ['reading', 'read', 'reads'], correct: 'reading' },
    { type: 'multiple_choice', instruction: '正しい答え', question: '「読書」を英語で趣味として言うと？', options: [
      { text: 'I like reading.', correct: true },
      { text: 'I like read.', correct: false },
      { text: 'I read like.', correct: false },
    ], explanation: '動詞の後は「-ing」形：reading, swimming, cooking。' },
    { type: 'build_sentence', instruction: '並べ替え', words: ['anime', 'like', 'I'], correct: ['I', 'like', 'anime'], translation: 'アニメが好きです' },
    { type: 'translate', instruction: '英語で', prompt: '暇な時に', correct: ['In my free time', 'in my free time'] },
  ],

  rwenDialogue: {
    intro: 'ロサンゼルスのアニメコンベンションで、海外のアニメファンと出会いました。',
    lines: [
      { speaker: 'npc', target: 'Cool cosplay! Are you into anime?', native: 'いいコスプレ！アニメ好き？' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yes! I like anime. I enjoy watching it in my free time.', native: 'はい！アニメが好きです。暇な時に見て楽しんでいます。', correct: true, feedback: '完璧 — 3つのチャンクを自然に使えました。' },
          { target: 'Anime love.', native: 'アニメ愛。', correct: false, feedback: '完全な文で：「I like anime」。' },
          { target: 'I like watch anime.', native: 'アニメを見るのが好き。', correct: false, feedback: '「watching」 — 動詞には -ing が必要。' },
        ],
      },
      { speaker: 'npc', target: "Same! What's your favorite series?", native: '同じ！好きな作品は？' },
      { speaker: 'rwen', rwenLine: '趣味の伝え方マスター！「-ing」の使い方も覚えました。', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '見ないで書いてください。',
    prompts: [
      { prompt: 'アニメが好きです (英語で)', correct: ['I like anime', 'i like anime'] },
      { prompt: '暇な時に (英語で)', correct: ['In my free time', 'in my free time'] },
    ],
  },

  mission: {
    title: '今日のミッション',
    task: '自分の趣味を3つ「I like ___ing」で言ってみてください。',
    rwenSignoff: 'I enjoy teaching you. See you soon.',
  },

  phase8: {
    scenario: 'LAのアニメエキスポで、海外のファンと趣味について話す。',
    rwenRole: 'Jake — 25歳のアメリカ人アニメファン、熱心。',
    successCriteria: "User uses 'I like + noun' or 'I enjoy + verb-ing' correctly, mentions 2-3 hobbies, asks about other person's interests.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
