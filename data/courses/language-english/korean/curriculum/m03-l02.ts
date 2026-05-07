import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02-age',
  module: 3,
  lesson: 2,
  title: 'How old are you? — 몇 살이세요?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국에서 첫 만남 첫 질문이 '몇 살이세요?'지만, 영어권에서는 거의 안 묻습니다. 무례하게 들릴 수 있어요. 묻는다면 친해진 후예요.",
    culturalNote: "한국어 나이는 사회적 위계의 핵심 — 형/누나/오빠/언니 호칭이 거기서 정해지죠. 영어는 그 위계가 없어서 나이가 덜 중요해요. 30살이든 50살이든 다 'you'.",
  },

  chunks: [
    { id: 'how_old_are_you', target: 'How old are you?',     native: '몇 살이에요? (myeot sarieyo?)',          literal: 'how old are you?',         emoji: '🎂', phonetic: 'how-OLD-ar-yoo', audioRef: null },
    { id: 'years_old',       target: "I'm 25 years old",     native: '저는 25살이에요 (jeoneun seumul-daseot-sarieyo)', literal: 'I-am 25 years old', emoji: '🎈', phonetic: 'aym-twen-tee-FYV', audioRef: null },
    { id: 'twenty_five',     target: 'Twenty-five',           native: '스물다섯 (seumul-daseot)',                  literal: 'twenty-five',              emoji: '5️⃣', phonetic: 'twen-tee-FYV',    audioRef: null },
  ],

  pattern: {
    name: 'Age expression',
    explanation: "공식: 'I'm ___ years old'. 'years old'를 빼고 'I'm 25'만 써도 자연스러워요. 한국 나이/만 나이 차이는 영어권에서는 신경 안 써요 — 만 나이로 답하세요.",
    examples: [
      { target: 'How old are you?',   native: '몇 살이에요?' },
      { target: "I'm 25 years old.",   native: '저는 25살이에요.' },
      { target: "I'm 30.",              native: '저는 30살이에요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'How old are you?',   right: '몇 살이에요?' },
      { left: "I'm 25 years old",   right: '저는 25살이에요' },
      { left: 'Twenty-five',         right: '스물다섯' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저는 25살이에요', correct: ["I'm 25 years old", "I am 25 years old", "I'm 25", "I am 25"] },
    { type: 'fill_blank', instruction: '빈칸', sentence: "I'm twenty-____ years old.", options: ['five', 'fifth', 'fives'], correct: 'five', context: '나이 답할 때.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '친구가 영어로 나이를 물었어요:', options: [
      { text: "I'm 25 years old.",  correct: true },
      { text: '25 years.',           correct: false },
      { text: 'Old 25.',             correct: false },
    ], explanation: "표준은 'I'm ___ years old'." },
    { type: 'build_sentence', instruction: '문장', words: ['old', 'years', "I'm", '25'], correct: ["I'm", '25', 'years', 'old'], translation: '저는 25살이에요' },
    { type: 'translate', instruction: '영어로', prompt: '몇 살이에요?', correct: ['How old are you?', 'how old are you?'] },
  ],

  rwenDialogue: {
    intro: 'LA 친구 모임 — 친해진 후 나이를 묻는 자연스러운 자리.',
    lines: [
      { speaker: 'npc', target: "By the way, how old are you?", native: '근데 몇 살이에요?' },
      { speaker: 'user', userChoices: [
        { target: "I'm 25. How about you?", native: '저는 25살이에요. 그쪽은요?', correct: true, feedback: '나이 + 되묻기 — 자연스러워요.' },
        { target: '25.',                      native: '25.',                          correct: false, feedback: "너무 짧아요. I'm 25를 쓰세요." },
        { target: "Don't ask.",                native: '묻지 마요.',                    correct: false, feedback: '친한 친구 사이엔 답해 주는 게 자연스러워요.' },
      ]},
      { speaker: 'npc', target: "I'm 28. Cool!", native: '저는 28살이에요. 괜찮네요!' },
      { speaker: 'rwen', rwenLine: '나이 답변 — 영어권은 위계 없이 평등한 톤이에요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'How old are you? (영어로)', correct: ['How old are you?', 'how old are you?'] },
      { prompt: "I'm 25 years old (영어로)", correct: ["I'm 25 years old", "I am 25 years old", "I'm 25"] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "거울 앞에서 자기 나이를 영어로 5번 말해 보세요. 'I'm ___ years old.'",
    rwenSignoff: '나이는 영어권에서 그저 숫자예요.',
  },

  phase8: {
    scenario: 'LA 친구 모임에서 나이 교환 — 평등 톤 유지.',
    rwenRole: 'New friend, 28세 미국인.',
    successCriteria: "User states age with 'I'm ___ years old' or 'I'm ___', returns the question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
