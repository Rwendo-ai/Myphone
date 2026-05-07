import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-your-story',
  module: 10,
  lesson: 10,
  title: '당신의 영어 이야기 — A2 Complete',
  estimatedMinutes: 10,
  xpReward: 100,

  hook: {
    rwenLine: "마지막 레슨이에요. 100 lessons. 10 modules. 'Hello'에서 시작해서 한국 속담까지, '제 이름은...'에서 시작해서 면접 영어까지. 오늘은 배우지 않아요 — 말합니다. 자기 영어 학습 여정 전체를 영어로. 어떤 사람이 됐는지를 보여 주세요.",
    culturalNote: "한국에서 영어 학습은 점수 (토익·토플)로 측정되지만, Rwendo 여정은 사용으로 측정돼요. 인사·생존·자기소개·문법·가족·시간·음식·일상·여행·감정·이야기까지 — 100개 레슨이 단어가 아니라 인생으로 들어왔어요. 한국어를 잃지 않고 영어를 더한 사람의 모습이에요. 鄭(정)을 영어로 옮기지는 못해도, 영어로 정을 표현할 수는 있게 됐어요. Module 10 마지막 — 자기 모국어를 사랑하면서 영어 시민이 된 자기 이야기를.",
  },

  chunks: [
    { id: 'i_started_learning', target: 'I started learning English', native: '영어 배우기 시작했어요 (yeongeo baeugi sijakhaesseoyo)', literal: 'I-started learning English', emoji: '🌱', phonetic: 'aye-STAR-ted-LER-ning-IN-glish', audioRef: null },
    { id: 'now_i_can',           target: 'Now I can...',                native: '이제 ~ 할 수 있어요 (ije ~ hal su isseoyo)',           literal: 'now I can',                  emoji: '🚀', phonetic: 'now-AY-kan',                       audioRef: null },
    { id: 'journey_continues',   target: 'The journey continues',      native: '여정은 계속돼요 (yeojeongeun gyesokdwaeyo)',            literal: 'the journey continues',       emoji: '🌅', phonetic: 'thuh-JER-nee-kun-TIN-yooz',     audioRef: null },
  ],

  pattern: {
    name: 'Past + Present + Future — your full story',
    explanation: "한 단락에 세 시제: (1) PAST (시작) — 'I started learning English when ___' / 'A few months ago I couldn't ___'. (2) PRESENT (지금 능력) — 'Now I can ___' / 'Today I can ___'. (3) FUTURE (앞으로) — 'I hope to ___' / 'One day I'll ___' / 'The journey continues'. 세 시제로 자기 영어 인생을 풀어요. 이게 A2 storytelling의 모습이에요.",
    examples: [
      { target: "I started learning English a few months ago. I couldn't even introduce myself.", native: '몇 달 전에 영어 배우기 시작했어요. 자기소개조차 못 했어요.' },
      { target: 'Now I can order in restaurants, talk to my doctor, and tell stories.',           native: '이제 식당 주문하고, 의사와 대화하고, 이야기 풀 수 있어요.' },
      { target: 'I hope to keep growing — the journey continues.',                                  native: '계속 성장하길 바라요 — 여정은 계속돼요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '자기 이야기의 세 시제', pairs: [
      { left: 'I started learning English',  right: 'Past — 시작' },
      { left: 'Now I can',                     right: 'Present — 지금 능력' },
      { left: 'The journey continues',         right: 'Future — 앞으로' },
    ]},
    { type: 'translate', instruction: '영어로 — 과거', prompt: '몇 달 전에 영어 배우기 시작했어요.', correct: ['I started learning English a few months ago.', 'I started learning English a few months ago', 'i started learning english a few months ago.'] },
    { type: 'translate', instruction: '영어로 — 현재 + 미래', prompt: '이제 말할 수 있어요. 여정은 계속돼요.', correct: ['Now I can speak. The journey continues.', 'Now I can talk. The journey continues.', 'Now I can speak — the journey continues.', 'now i can speak. the journey continues.'] },
    { type: 'build_sentence', instruction: "문장 만들기: 'Now I can order in restaurants and talk to my doctor'", words: ['talk', 'restaurants', 'in', 'order', 'doctor.', 'and', 'Now', 'my', 'I', 'to', 'can'], correct: ['Now', 'I', 'can', 'order', 'in', 'restaurants', 'and', 'talk', 'to', 'my', 'doctor.'], translation: '이제 식당 주문하고 의사와 대화할 수 있어요' },
    { type: 'fill_blank', instruction: '마지막 문장 채우기', sentence: 'I started with "Hello." Now I can tell my whole story. The journey _____.', options: ['continues', 'ended', 'stops'], correct: 'continues', context: "'The journey continues' = '여정은 계속돼요'. A2를 통과했지만 끝나지 않았어요. 여기서부터 진짜 사용 시작이에요." },
    { type: 'multiple_choice', instruction: '최종 성찰', question: '100 레슨 완료. 자기 A2 순간을 가장 잘 담은 문장은?', options: [
      { text: "I started with 'Hello.' Now I can tell my whole story — in English. The journey continues.", correct: true },
      { text: "I'm not finished yet.",                                                                          correct: false },
      { text: "I learned some words.",                                                                            correct: false },
    ], explanation: "세 시제 한 줄 — 과거 ('started with Hello'), 현재 ('can tell my whole story'), 미래 ('journey continues'). 이게 자기 A2 순간이에요. 영어의 어린아이가 아니라 — 영어 시민이 됐어요." },
  ],

  rwenDialogue: {
    intro: "마지막 레슨. 마지막 대화. Rwen이 한 가지 질문 — 100 레슨 중 가장 중요한. 마음 다해 답하세요 — 영어로.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "We've walked 100 lessons together. From '안녕하세요' to Korean proverbs, from 'I'm fine, thanks' to 'Where do you see yourself in 5 years'. Now — tell me your story. Who are you in English today?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I started learning English a few months ago. I couldn't introduce myself. Now I can order in restaurants, see a doctor, share Korean proverbs at a multicultural dinner, and tell my story. I hope to keep going. The journey continues.", native: '몇 달 전 영어 배우기 시작했어요. 자기소개도 못 했어요. 이제 식당 주문하고, 의사 만나고, 다국적 식사에서 한국 속담 나누고, 제 이야기를 풀 수 있어요. 계속 가길 바라요. 여정은 계속돼요.', correct: true, feedback: "다섯 줄 다 — 과거·현재·미래·문화·계속. 영어 단어를 배운 게 아니라 — 영어 안으로 들어왔어요. Rwen은 더 이상 가르칠 게 없어요. 축하할 일만 있을 뿐." },
          { target: "I learned a lot.", native: '많이 배웠어요.', correct: false, feedback: "너무 짧아요 — 큰 여정을 풀어 보세요: 'I started with Hello. Now I can tell my whole story. The journey continues.'" },
          { target: "영어 해요.", native: '영어 해요.', correct: false, feedback: "한국어 — 마지막 레슨에는 영어로: 'I started learning English. Now I can speak. The journey continues.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The journey continues. You spoke your story — in English. 100 lessons. 10 modules. From '안녕하세요' to proverbs, from greetings to job interviews. You haven't lost Korean — you've added a tongue. 또 만나요 — we'll see each other again.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: '마지막 회상. 모든 게 여기서 시작됐어요.',
    prompts: [
      { prompt: 'Now I can (영어로)',           correct: ['Now I can', 'now i can'] },
      { prompt: 'The journey continues (영어로)', correct: ['The journey continues', 'the journey continues', 'The journey continues.', 'the journey continues.'] },
    ],
  },

  mission: {
    title: '가장 중요한 미션 — A2 Mission',
    task: "오늘 진짜 사람과 영어로 대화하세요. 연습이 아니라 — 진짜로. 영어 쓰는 사람을 찾으세요 — 카페에서, 회사에서, 온라인 언어 교환에서, 외국 친구와 영상 통화에서. 자기 영어를 쓰세요. 언어는 사람 사이에서 살아 있을 때만 살아 있어요. 여정은 계속돼요.",
    rwenSignoff: "수고하셨어요. 여정은 계속돼요. 또 만나요, 영어 시민. 잘 지내세요 — 언제나.",
  },

  phase8: {
    scenario: "Capstone 대화. 캐주얼한 모임 — 방금 만난 사람과 커피, 그가 'How long have you been speaking English?' 물어요. 4분 동안 자기 영어 학습 인생 전체를 풀어요: 어디서 시작했는지, 지금 뭘 할 수 있는지, 어디로 가고 싶은지. Module 1-9의 모든 카드 활용.",
    rwenRole: "Sam, 30세, 방금 만난 영어 화자. 호기심 많고 친절, 후속 질문 — 'What was hardest?', 'Where do you use it most?', 'What's next?'",
    successCriteria: "User uses past tense ('I started', 'I couldn't'), present capability ('Now I can ___'), and future hope ('I hope to ___' or 'One day I'll ___'). Mentions at least 2 specific abilities (e.g., 'order in restaurants', 'see a doctor', 'tell stories', 'share proverbs'). Speaks 5+ sentences. Stays in English throughout. Closes with 'The journey continues' or equivalent.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
