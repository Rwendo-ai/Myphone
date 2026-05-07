import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l05-i-dont-understand',
  module: 2,
  lesson: 5,
  title: "I don't understand — 이해 못 했어요",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "안 들리거나 이해 못 했을 때 솔직하게 말하기 — 'I don't understand'. 한국어 '이해 못 했어요'와 같지만, 영어권에선 더 자주, 더 부담 없이 써요.",
    culturalNote: "한국에서는 못 알아들으면 그냥 미소로 넘기는 일이 많지만, 영어권에서는 'I don't understand'를 분명히 말하는 게 매너예요. 솔직히 말하면 상대가 더 쉽게 다시 설명해 줍니다.",
  },

  chunks: [
    { id: 'i_dont_understand', target: "I don't understand", native: '이해 못 했어요 (ihae mot haesseoyo)', literal: 'I do-not understand', emoji: '🤔', phonetic: 'aye-DONT-un-der-STAND', audioRef: null },
    { id: 'repeat_please',     target: 'Repeat, please',     native: '다시 말해 주세요 (dasi malhae juseyo)', literal: 'repeat please',       emoji: '🔁', phonetic: 'ri-PEET-pleez',          audioRef: null },
    { id: 'what_did_you_say',  target: 'What did you say?',  native: '뭐라고 하셨어요? (mworago hasyeosseoyo?)', literal: 'what did you say?',  emoji: '❓', phonetic: 'wut-did-yoo-SAY',         audioRef: null },
  ],

  pattern: {
    name: 'Recovery phrases',
    explanation: "안 들리거나 모를 때 회복 카드: 'Sorry?' (가볍게 되묻기) → 'I don't understand' (솔직히 모름) → 'Could you repeat that?' (정중한 부탁). 단계별로 강해져요.",
    examples: [
      { target: "I don't understand", native: '이해 못 했어요' },
      { target: 'Repeat, please',    native: '다시 말해 주세요' },
      { target: 'What did you say?', native: '뭐라고 하셨어요?' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: "I don't understand", right: '이해 못 했어요' },
      { left: 'Repeat, please',    right: '다시 말해 주세요' },
      { left: 'What did you say?', right: '뭐라고 하셨어요?' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '이해 못 했어요', correct: ["I don't understand", "I do not understand", "i don't understand"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I ____ understand.", options: ["don't", "doesn't", "didn't"], correct: "don't", context: '회사 회의 중 영어가 너무 빠를 때.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '회의에서 빠른 영어를 못 알아들었을 때:', options: [
      { text: "Sorry, I don't understand. Could you repeat that?", correct: true },
      { text: 'Bye.',                                                correct: false },
      { text: 'Yes.',                                                 correct: false },
    ], explanation: "솔직하게 모른다 + 다시 부탁 = 깔끔한 회복." },
    { type: 'build_sentence', instruction: '문장', words: ['please', 'Repeat'], correct: ['Repeat', 'please'], translation: '다시 말해 주세요' },
    { type: 'translate', instruction: '영어로', prompt: '죄송해요, 이해 못 했어요. 다시 말해 주세요.', correct: ["Sorry, I don't understand. Repeat, please.", "Sorry, I don't understand. Could you repeat that?"] },
  ],

  rwenDialogue: {
    intro: '서울 사무실 화상 회의 — 미국 PM이 빠른 슬랭으로 농담.',
    lines: [
      { speaker: 'npc', target: "So basically that's a no-go because of the procurement bandwidth, right?", native: '구매팀 캐파시티 때문에 안 된다는 거죠?' },
      { speaker: 'user', userChoices: [
        { target: "Sorry, I don't understand. Could you repeat that more slowly?", native: '죄송해요, 이해 못 했어요. 좀 더 천천히 말해 주실 수 있어요?', correct: true, feedback: '솔직하고 정중함 — PM이 톤을 조정해 줄 거예요.' },
        { target: 'Yes.',                                                              native: '네.',                                                          correct: false, feedback: '모르면서 yes 하면 나중에 더 큰 문제가 생겨요.' },
        { target: 'Bye.',                                                              native: '잘 가.',                                                       correct: false, feedback: '회의 중간이에요.' },
      ]},
      { speaker: 'npc', target: "Of course. Let me say it again — slowly.", native: '물론이죠. 다시 천천히 설명할게요.' },
      { speaker: 'rwen', rwenLine: '솔직히 모른다 — 이게 영어 회의에서의 진짜 자산이에요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: "I don't understand (영어로)", correct: ["I don't understand", "I do not understand"] },
      { prompt: 'Repeat, please (영어로)',     correct: ['Repeat, please', 'repeat please', 'Repeat please'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 회의나 영상에서 한 번이라도 'I don't understand'를 입에 익혀 두세요.",
    rwenSignoff: '모름은 약함이 아니에요. 솔직함은 강함입니다.',
  },

  phase8: {
    scenario: '서울 본사 화상 회의 — 미국 PM의 슬랭이 너무 빨라서 회복 요청.',
    rwenRole: 'Tom, 38세 미국 PM, 빠른 말투지만 친절.',
    successCriteria: "User says 'I don't understand' clearly, requests 'Could you repeat that?' or 'Slowly, please'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
