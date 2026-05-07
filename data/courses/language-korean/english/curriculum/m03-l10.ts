import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-self-introduction',
  module: 3,
  lesson: 10,
  title: 'Self-Introduction Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 3 cap. Name, nationality, job, age, where you live, hobbies, contact swap, marital status — every identity beat. Today: a complete first-meeting conversation.",
    culturalNote: "A full Korean self-intro flows: greeting → name + 입니다/이에요 → nationality → job → age → hobby → 잘 부탁드립니다 → contact swap → warm close. Memorize the order; the words will come.",
  },

  chunks: [
    { id: 'review_jeoneun', target: '저는 ___입니다', native: 'I am ___', literal: 'I-TOPIC ___-am', emoji: '🙋', phonetic: 'jeo-neun ___-im-ni-da', audioRef: null },
    { id: 'review_chwimi', target: '취미가 뭐예요?', native: "What's your hobby?", literal: 'hobby-SUBJ what-is?', emoji: '🎯', phonetic: 'chwi-mi-ga mwo-ye-yo', audioRef: null },
    { id: 'review_kakao', target: '카톡 있어요?', native: 'Do you have KakaoTalk?', literal: 'KakaoTalk exist-yo?', emoji: '💬', phonetic: 'ka-tok i-sseo-yo', audioRef: null },
  ],

  pattern: {
    name: 'The Full Identity Flow',
    explanation: "Eight beats of a complete Korean self-introduction.",
    examples: [
      { target: '안녕하세요', native: '1. Greeting' },
      { target: '저는 ___이에요/입니다', native: '2. Name' },
      { target: '___ 사람이에요', native: '3. Nationality' },
      { target: '회사원이에요', native: '4. Job' },
      { target: '___살이에요', native: '5. Age' },
      { target: '취미는 ___', native: '6. Hobby' },
      { target: '잘 부탁드립니다', native: '7. Closer' },
      { target: '카톡 있어요?', native: '8. Contact swap' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match each beat to its phrase', pairs: [
      { left: 'Name', right: '저는 ___이에요' },
      { left: 'Nationality', right: '___ 사람이에요' },
      { left: 'Hobby', right: '취미는 ___' },
    ]},
    { type: 'multiple_choice', instruction: "First Seoul meetup. Best opening 3-line intro?", question: 'Pick the natural sequence', options: [
      { text: '안녕하세요. 저는 Sam이에요. 호주에서 왔어요.', correct: true },
      { text: '얼마예요?', correct: false },
      { text: '안녕히 가세요', correct: false },
    ], explanation: 'Greeting + name + origin — the standard opening trio.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I am 30 years old', correct: ['저는 30살이에요', 'jeoneun 30sarieyo'] },
    { type: 'fill_blank', instruction: "End your formal intro", sentence: '저는 Sam입니다. _____.', options: ['잘 부탁드립니다', '비싸요', '잘 가'], correct: '잘 부탁드립니다', context: 'Formal closer.' },
    { type: 'build_sentence', instruction: 'Build "I live near Hongdae"', words: ['살아요', '근처에', '홍대'], correct: ['홍대', '근처에', '살아요'], translation: 'I live near Hongdae.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Do you have KakaoTalk?', correct: ['카톡 있어요?', 'katok isseoyo'] },
  ],

  rwenDialogue: {
    intro: "Korean cultural exchange evening in Itaewon. You're paired with a Korean stranger and asked to introduce yourselves fully.",
    lines: [
      { speaker: 'npc', target: '안녕하세요! 자기소개 해주세요.', native: 'Hello! Please introduce yourself.' },
      { speaker: 'user', userChoices: [
        { target: '안녕하세요. 저는 Sam이에요. 호주 사람이에요. 회사원이에요.', native: 'Hello. I am Sam. I am Australian. I am an office worker.', correct: true, feedback: 'Three identity beats — clean delivery.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Wrong moment.' },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Wrong direction.' },
      ]},
      { speaker: 'npc', target: '몇 살이세요?', native: 'How old are you?' },
      { speaker: 'user', userChoices: [
        { target: '저는 30살이에요. 몇 살이세요?', native: "I'm 30. How old are you?", correct: true, feedback: 'Answer + bounce. Building rapport.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong topic.' },
        { target: '잘 부탁드립니다', native: 'Please take care of me', correct: false, feedback: 'Save the closer for the end.' },
      ]},
      { speaker: 'npc', target: '저도 30살이에요! 동갑이에요!', native: "I'm 30 too! Same age!" },
      { speaker: 'user', userChoices: [
        { target: '카톡 있어요? 또 봐요!', native: 'Do you have KakaoTalk? See you again!', correct: true, feedback: "Same age + KakaoTalk swap + warm close. Module 3 done." },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: 'Skipping the contact swap leaves the connection cold.' },
        { target: '얼마예요?', native: 'How much?', correct: false, feedback: 'Wrong topic.' },
      ]},
      { speaker: 'rwen', rwenLine: "A complete Korean self-introduction — eight beats, two-way. Module 3 closed. Identity locked.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'I am [your nationality]', correct: ['저는 호주 사람이에요', '저는 미국 사람이에요', 'jeoneun hoju saramieyo', 'jeoneun miguk saramieyo'] },
      { prompt: "What's your hobby?", correct: ['취미가 뭐예요?', 'chwimiga mwoeyo'] },
    ],
  },

  mission: {
    title: "Your Module 3 Mission",
    task: "Run your full identity intro out loud today. Eight beats: greeting, name, nationality, job, age, hobby, closer, contact swap.",
    rwenSignoff: "Module 3 closed. You can now introduce yourself fully in Korean. Module 4 = grammar.",
  },

  phase8: {
    scenario: "Korean cultural exchange evening. A full first-meeting conversation with a Korean peer — name, origin, job, age, hobby, contact swap, warm close.",
    rwenRole: "Korean peer at the meetup — same age, polite, warm.",
    successCriteria: "User runs at least six of the eight identity beats. Asks at least two questions back. Closes with KakaoTalk swap or warm 또 봐요. NO banmal.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
