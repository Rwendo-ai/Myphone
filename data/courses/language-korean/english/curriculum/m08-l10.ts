import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l10-verbs-conversation',
  module: 8,
  lesson: 10,
  title: 'Daily Verbs Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 8 cap. 하다 verbs, go/come, eat/drink, see/listen, sleep, past tense, future intent, negation, register sliding. A full day's worth of Korean verb work.",
    culturalNote: "By Module 8 you can describe yesterday, today, and tomorrow in Korean. The verb engine is yours — chain it together for real conversations.",
  },

  chunks: [
    { id: 'review_haeyo', target: '해요 / 했어요 / 할게요', native: 'do — present / past / future-commit', literal: 'do-tense triplet', emoji: '⏱️', phonetic: 'hae / hae-sseo / hal-ge', audioRef: null },
    { id: 'review_gayo', target: '가요 / 갔어요 / 갈게요', native: 'go — present / past / future-commit', literal: 'go-tense triplet', emoji: '🚶', phonetic: 'ga / ga-sseo / gal-ge', audioRef: null },
    { id: 'review_meogeoyo', target: '먹어요 / 먹었어요 / 먹을게요', native: 'eat — present / past / future-commit', literal: 'eat-tense triplet', emoji: '🍴', phonetic: 'meo-geo / meo-geo-sseo / meo-geul-ge', audioRef: null },
  ],

  pattern: {
    name: 'The Verb Stack',
    explanation: "Tense + register + negation + (sometimes) honorific = full Korean verb. Daily life uses ~20 verbs covering 80% of conversation.",
    examples: [
      { target: '갔어요', native: 'I went (past polite)' },
      { target: '갈게요', native: "I'll go (future commit)" },
      { target: '못 가요', native: "I can't go" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match form to function', pairs: [
      { left: '먹었어요', right: 'I ate' },
      { left: '먹을게요', right: "I'll eat (commit)" },
      { left: '못 먹어요', right: "I can't eat" },
    ]},
    { type: 'multiple_choice', instruction: 'Yesterday: went to Hongdae, met friend, ate kimchi. Best Korean?', question: 'Pick the natural sequence', options: [
      { text: '어제 홍대에 갔어요. 친구를 만났어요. 김치를 먹었어요', correct: true },
      { text: '어제 홍대에 가요...', correct: false },
      { text: '비싸요', correct: false },
    ], explanation: 'All past polite — yesterday demands -았/었어요.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: "I'll come (commit)", correct: ['올게요', 'olgeyo'] },
    { type: 'fill_blank', instruction: 'Soft refusal', sentence: '죄송해요, _____ 가요.', options: ['못', '안', '에'], correct: '못', context: 'Softer refusal.' },
    { type: 'build_sentence', instruction: "Build \"I don't drink alcohol\"", words: ['술을', '안', '마셔요'], correct: ['술을', '안', '마셔요'], translation: "I don't drink alcohol." },
    { type: 'translate', instruction: 'Type in Korean (past)', prompt: 'I exercised (past)', correct: ['운동했어요', 'undonghaesseoyo'] },
  ],

  rwenDialogue: {
    intro: "Friend asks about your day, your weekend, your plans. Run the full verb engine.",
    lines: [
      { speaker: 'npc', target: '오늘 뭐 했어요?', native: 'What did you do today?' },
      { speaker: 'user', userChoices: [
        { target: '아침에 운동했어요. 점심에 비빔밥 먹었어요', native: 'Exercised in the morning, ate bibimbap at lunch', correct: true, feedback: 'Two past tense. Day described.' },
        { target: '운동해요', native: 'Exercise (present, wrong tense)', correct: false, feedback: '오늘 already happened — past tense.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '내일은 뭐 할 거예요?', native: 'What will you do tomorrow?' },
      { speaker: 'user', userChoices: [
        { target: '내일 친구랑 영화 볼 거예요', native: "Tomorrow I'll watch a movie with a friend", correct: true, feedback: 'Future neutral — describing plan.' },
        { target: '내일 영화 봤어요', native: 'Past (wrong tense)', correct: false, feedback: '내일 = tomorrow → future.' },
        { target: '잘 부탁드립니다', native: 'Please take care of me', correct: false, feedback: 'Wrong moment.' },
      ]},
      { speaker: 'npc', target: '같이 갈래요?', native: 'Want to go together?' },
      { speaker: 'user', userChoices: [
        { target: '네! 갈게요!', native: "Yes! I'll come (commit)", correct: true, feedback: '-ㄹ게요 = commitment to listener. Module 8 closed.' },
        { target: '안 가요', native: "I'm not going", correct: false, feedback: 'You said yes — go with -ㄹ게요.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'rwen', rwenLine: "Past, present, future, commit, refuse — all verb forms running. Module 8 closed.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I went (past)', correct: ['갔어요', 'gasseoyo'] },
      { prompt: "I'll come (commit)", correct: ['올게요', 'olgeyo'] },
    ],
  },

  mission: {
    title: "Your Module 8 Mission",
    task: "Tell yesterday, today, tomorrow in Korean. Three time frames, three verb forms.",
    rwenSignoff: "Module 8 closed. Korean verbs run. Module 9 = travel.",
  },

  phase8: {
    scenario: "Coffee with a Korean friend covering yesterday/today/tomorrow — past, present, future verbs all flowing.",
    rwenRole: "Korean friend — peer, polite.",
    successCriteria: "User uses past for yesterday, present for today, future for tomorrow. Mixes 하다 verbs, 먹다, 가다, 보다 across time frames.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
