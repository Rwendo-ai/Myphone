import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-gyeolhon',
  module: 3,
  lesson: 8,
  title: 'Gyeolhon Hasyeosseoyo? — Are You Married?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Korea, asking marriage status is normal small talk — even on first meetings, especially from older people. 결혼하셨어요? = are you married? Don't be offended; have an answer ready.",
    culturalNote: "Older Koreans see marital status as basic identity context. They aren't being rude — they're locating you on the social map. A polite 'no' or 'yes' answer suffices; you don't owe details.",
  },

  chunks: [
    { id: 'gyeolhon', target: '결혼하셨어요?', native: 'Are you married? (polite)', literal: 'marriage-did-honorific?', emoji: '💍', phonetic: 'gyeol-hon-ha-syeo-sseo-yo', audioRef: null },
    { id: 'aniyo_ajik', target: '아니요, 아직요', native: 'No, not yet', literal: 'no, still-yo', emoji: '🙋', phonetic: 'a-ni-yo a-ji-gyo', audioRef: null },
    { id: 'gyeolhonhaesseoyo', target: '네, 결혼했어요', native: 'Yes, I am married', literal: 'yes, marriage-did-yo', emoji: '👫', phonetic: 'ne, gyeol-hon-hae-sseo-yo', audioRef: null },
  ],

  pattern: {
    name: 'Marital status — three answers',
    explanation: 'Three standard replies: 네 (yes, married), 아니요 (no, not yet), 미혼이에요 (single — formal). 아직요 = still softens no into not yet — culturally smoother.',
    examples: [
      { target: '네, 결혼했어요', native: 'Yes, I am married' },
      { target: '아니요, 아직요', native: 'No, not yet' },
      { target: '저는 미혼이에요', native: 'I am single (formal)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match answer to meaning', pairs: [
      { left: '결혼했어요', right: 'I am married' },
      { left: '아니요, 아직요', right: 'No, not yet' },
      { left: '미혼이에요', right: 'I am single (formal)' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Are you married? (polite)', correct: ['결혼하셨어요?', 'gyeolhonhasyeosseoyo'] },
    { type: 'fill_blank', instruction: 'Soften the "no"', sentence: '아니요, _____.', options: ['아직요', '비싸요', '주세요'], correct: '아직요', context: '"Still / not yet" — softer than a hard no.' },
    { type: 'build_sentence', instruction: 'Build "Yes, I am married"', words: ['결혼했어요', '네,'], correct: ['네,', '결혼했어요'], translation: 'Yes, I am married.' },
    { type: 'multiple_choice', instruction: 'An ahjumma asks 결혼하셨어요? You\'re single. Best polite reply?', question: 'Pick the soft answer', options: [
      { text: '아니요, 아직요', correct: true },
      { text: '아니', correct: false },
      { text: '비싸요', correct: false },
    ], explanation: '아직요 ("not yet") leaves the door open; bare 아니 is too curt for elders.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am single (formal)', correct: ['저는 미혼이에요', 'jeoneun mihonieyo'] },
  ],

  rwenDialogue: {
    intro: "An ahjumma at a Seoul market chats while wrapping your purchase.",
    lines: [
      { speaker: 'npc', target: '결혼하셨어요?', native: 'Are you married?' },
      { speaker: 'user', userChoices: [
        { target: '아니요, 아직요', native: 'No, not yet', correct: true, feedback: 'Polite, soft, leaves the conversation flowing.' },
        { target: '아니', native: 'No (banmal)', correct: false, feedback: 'Too curt for an ahjumma — banmal in this register is rude.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'npc', target: '아이고, 좋은 사람 만날 거예요!', native: "Aigoo, you'll meet a good person!" },
      { speaker: 'rwen', rwenLine: "Marital small talk in Korea — soften with 아직요 and the conversation stays warm.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Are you married? (polite)', correct: ['결혼하셨어요?', 'gyeolhonhasyeosseoyo'] },
      { prompt: 'No, not yet', correct: ['아니요, 아직요', 'aniyo, ajigyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pre-load your answer to 결혼하셨어요?. 네/아니요 + softener. You'll need it on day one in Korea.",
    rwenSignoff: "Identity small talk in Korea = direct. Be ready.",
  },

  phase8: {
    scenario: "An ahjumma at a Namdaemun stall chats while wrapping your purchase, asks marital status as part of small talk.",
    rwenRole: "Ahjumma — 60s, friendly, traditional.",
    successCriteria: "User answers 결혼하셨어요? with 네/아니요 + softener. Stays polite. Does NOT take offense or use banmal.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
