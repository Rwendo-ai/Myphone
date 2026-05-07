import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-articles-mixed',
  module: 4,
  lesson: 9,
  title: '관사 흐름 — Mixed practice',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "관사를 한 문장씩 떼어 보면 쉬워도, 흐름 안에 넣으면 헷갈려요. 'I read a book. The book was good.' — 처음엔 a (아무거나), 두 번째엔 the (그 책).",
    culturalNote: "영어 article 흐름은 '소개 → 추적'. 처음 등장하면 a/an, 그 후엔 the. 한국어 화자가 매번 first mention을 the로 잡거나 the를 빠뜨리는 게 가장 흔한 실수예요.",
  },

  chunks: [
    { id: 'i_read_a_book',     target: 'I read a book. The book was good.',                              native: '책을 읽었어요. 그 책 좋았어요.',                                  literal: 'I read a book. The book was good.', emoji: '📕', phonetic: 'aye-RED-uh-BUK',          audioRef: null },
    { id: 'children_music',    target: 'Children love music. The children at this school sing.',         native: '아이들은 음악을 좋아해요. 이 학교 아이들은 노래해요.',                literal: 'children love music. the children at this school sing', emoji: '🎵', phonetic: 'CHIL-dren-LUV-MYOO-zik', audioRef: null },
    { id: 'a_dog',              target: 'I have a dog. The dog likes water.',                              native: '강아지가 있어요. 그 강아지는 물 좋아해요.',                          literal: 'I have a dog. The dog likes water.', emoji: '🐕', phonetic: 'aye-HAV-uh-DOG',          audioRef: null },
  ],

  pattern: {
    name: 'a/an → the flow',
    explanation: "흐름: (1) 처음 등장 = a/an (모든 책 중 한 권). (2) 같은 것 다시 = the (위에서 말한 그 책). (3) 일반·복수·추상 = 관사 없음 (Children love music). 이 세 자리만 익히면 영어 article 70%는 끝.",
    examples: [
      { target: 'I read a book. The book was good.',  native: '책 읽었어요. 그 책 좋았어요.' },
      { target: 'I have a dog. The dog likes water.',   native: '개 있어요. 그 개 물 좋아해요.' },
      { target: 'Children love music.',                  native: '아이들은 음악 좋아해요.' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: '짝짓기', pairs: [
      { left: 'a book → the book',     right: '처음엔 a, 다시 언급은 the' },
      { left: 'Children love music',    right: '일반·복수 = 관사 없음' },
      { left: 'a dog → the dog',        right: '처음엔 a, 두 번째는 the' },
    ]},
    { type: 'translate', instruction: '영어로', prompt: '책 읽었어요. 그 책 좋았어요.', correct: ['I read a book. The book was good.', 'I read a book. The book was good'] },
    { type: 'fill_blank', instruction: '빈칸', sentence: 'I have ____ cat. ____ cat is black.', options: ['a / The', 'The / A', 'A / A'], correct: 'a / The', context: '처음 등장 → 두 번째 등장.' },
    { type: 'multiple_choice', instruction: '맞는 답', question: '"개를 한 마리 봤어요. 그 개가 짖었어요." 영어:', options: [
      { text: 'I saw a dog. The dog barked.',  correct: true },
      { text: 'I saw the dog. A dog barked.',    correct: false },
      { text: 'I saw dog. Dog barked.',          correct: false },
    ], explanation: '처음=a, 다시=the.' },
    { type: 'build_sentence', instruction: '문장', words: ['was', 'good', 'book', 'The'], correct: ['The', 'book', 'was', 'good'], translation: '그 책 좋았어요' },
    { type: 'translate', instruction: '영어로', prompt: '아이들은 음악을 좋아해요', correct: ['Children love music', 'children love music'] },
  ],

  rwenDialogue: {
    intro: '미국 친구에게 어제 본 영화 이야기.',
    lines: [
      { speaker: 'npc', target: "What did you do last night?", native: '어제 밤 뭐 했어요?' },
      { speaker: 'user', userChoices: [
        { target: 'I watched a movie. The movie was about love and family.', native: '영화 봤어요. 그 영화는 사랑과 가족에 관한 거였어요.', correct: true, feedback: 'a movie (처음) → the movie (다시). 추상 love/family는 관사 없음.' },
        { target: 'The movie. A movie love family.',                            native: '그 영화. 한 영화 사랑 가족.',                              correct: false, feedback: '관사 흐름이 뒤죽박죽이에요.' },
        { target: 'Movie.',                                                      native: '영화.',                                                      correct: false, feedback: 'a/the가 빠졌어요.' },
      ]},
      { speaker: 'npc', target: "Sounds emotional!", native: '감성적이네요!' },
      { speaker: 'rwen', rwenLine: '관사 흐름 — a 처음, the 두 번째, 추상은 관사 없음. 세 자리만 기억해요.', rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: '기억으로',
    prompts: [
      { prompt: 'I read a book. The book was good. (영어로)', correct: ['I read a book. The book was good.', 'I read a book. The book was good'] },
      { prompt: 'Children love music (영어로)',                correct: ['Children love music', 'children love music'] },
    ],
  },

  mission: {
    title: '오늘의 미션',
    task: "오늘 무슨 일 했는지 영어로 두 문장 — 첫 등장 a/an, 다시 등장 the.",
    rwenSignoff: '관사 흐름 — 영어 매 단락의 골격이에요.',
  },

  phase8: {
    scenario: '미국 친구와 어제 본 영화·먹은 음식 이야기. 첫 등장 a/an, 다시 등장 the 자연스럽게.',
    rwenRole: 'Friend, 27세 미국인.',
    successCriteria: "User uses 'a/an' for first mention, 'the' for second mention of same noun, no article for general/abstract.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
