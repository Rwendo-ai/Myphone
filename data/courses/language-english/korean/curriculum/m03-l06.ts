import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06-languages',
  module: 3,
  lesson: 6,
  title: '내가 하는 언어들 — Languages I speak',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "한국어 + 영어 조금 + 학교에서 배운 일본어/중국어 — 영어권에서는 이런 다언어 능력이 큰 자산이에요. 'I speak Korean and a little English'면 충분합니다.",
    culturalNote: "한국에선 영어 능력을 점수(토익 800점)로 표현하는 경우가 많지만, 영어권은 'I speak ___'로 답해요. 점수가 아니라 사용 능력으로요. 'A little'을 붙이면 겸손과 사실 모두 전달돼요.",
  },

  chunks: [
    { id: 'i_speak_korean', target: 'I speak Korean',     native: '저는 한국어를 해요 (jeoneun hangugeoreul haeyo)', literal: 'I speak Korean', emoji: '🇰🇷', phonetic: 'aye-SPEEK-koh-REE-an', audioRef: null },
    { id: 'a_little_english', target: 'A little English',  native: '영어 조금 (yeongeo jogeum)',                       literal: 'a little English', emoji: '🤏', phonetic: 'uh-LIT-ul-IN-glish', audioRef: null },
    { id: 'and_some_others', target: 'And some others',     native: '다른 것도 조금 (dareun geotdo jogeum)',             literal: 'and some others',  emoji: '🌐', phonetic: 'and-sum-UH-thers',   audioRef: null },
  ],

  pattern: {
    name: 'Language fluency',
    explanation: "'I speak ___ fluently' (능숙) > 'I speak ___' (할 줄 앎) > 'I speak a little ___' (조금) > 'I understand a little ___' (이해만). 자기 수준에 맞는 카드를 골라 쓰세요.",
    examples: [
      { target: 'I speak Korean fluently.',  native: '한국어를 능숙하게 해요.' },
      { target: 'I speak a little English.',  native: '영어 조금 해요.' },
      { target: 'I understand Japanese.',     native: '일본어 이해해요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'I speak Korean',     right: '저는 한국어를 해요' },
      { left: 'A little English',   right: '영어 조금' },
      { left: 'And some others',    right: '다른 것도 조금' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '저는 한국어를 해요', correct: ['I speak Korean', 'i speak Korean'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I speak ____ little English.', options: ['a', 'the', 'an'], correct: 'a', context: '자기 영어 능력을 겸손하게.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '자기 언어 능력 표현 — 한국어 + 영어 조금 + 일본어 약간:', options: [
      { text: 'I speak Korean, a little English, and some Japanese.', correct: true },
      { text: 'Korean English Japanese me.',                            correct: false },
      { text: 'Speak many.',                                              correct: false },
    ], explanation: '쉼표 + and로 자연스럽게 연결.' },
    { type: 'build_sentence', instruction: '문장', words: ['English', 'a', 'I', 'little', 'speak'], correct: ['I', 'speak', 'a', 'little', 'English'], translation: '영어 조금 해요' },
    { type: 'translate', instruction: '영어로', prompt: '한국어와 영어 조금 해요', correct: ['I speak Korean and a little English', 'I speak Korean and a little English.'] },
  ],

  rwenDialogue: {
    intro: '서울 IT 컨퍼런스 — 다국적 동료들과 언어 이야기.',
    lines: [
      { speaker: 'npc', target: "How many languages do you speak?", native: '몇 개 언어 하세요?' },
      { speaker: 'user', userChoices: [
        { target: 'I speak Korean fluently, a little English, and some Japanese.', native: '한국어는 능숙하게, 영어는 조금, 일본어는 약간 해요.', correct: true, feedback: '자연스러운 다언어 표현 — 영어권에서 큰 자산으로 보입니다.' },
        { target: 'Korean.',                                                          native: '한국어.',                                              correct: false, feedback: '너무 짧아요. 더 풀어 보세요.' },
        { target: "I don't speak.",                                                   native: '말 못 해요.',                                            correct: false, feedback: '지금 영어로 말하고 있잖아요. A little을 쓰세요.' },
      ]},
      { speaker: 'npc', target: "Wow, three languages! That's amazing.", native: '와, 세 개! 대단해요.' },
      { speaker: 'rwen', rwenLine: '다언어 표현 — 한국 화자의 큰 자산을 영어로 자연스럽게 풀었어요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I speak Korean (영어로)',     correct: ['I speak Korean', 'i speak Korean'] },
      { prompt: 'A little English (영어로)',   correct: ['A little English', 'a little English'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "자기 언어 능력을 영어로 풀어 보세요 — 한국어 + 영어 + 학교에서 배운 언어들.",
    rwenSignoff: '다언어는 자랑할 만한 카드예요.',
  },

  phase8: {
    scenario: '서울 IT 컨퍼런스 — 다국적 동료에게 자기 언어 능력 소개.',
    rwenRole: 'Diverse colleague, 30대, 다언어자.',
    successCriteria: "User lists at least 2 languages, uses 'a little' or 'fluently' to indicate level.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
