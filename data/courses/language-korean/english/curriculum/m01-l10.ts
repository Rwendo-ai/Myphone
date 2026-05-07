import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'The Greeting Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 1 module-cap. Everything from greetings, names, origins, the bow, the closer — in one full conversation. No new words. Just you, me, and the Korean you've built.",
    culturalNote: "A complete first encounter in Korean: bow → 안녕하세요 → name + 저는 ___입니다 → origin → 잘 부탁드립니다 → 안녕히 가세요/계세요. Each step builds trust. Skip one and the encounter feels incomplete.",
  },

  chunks: [
    { id: 'review_annyeong', target: '안녕하세요', native: 'Hello (polite)', literal: 'peace-be-with-you', emoji: '🙇', phonetic: 'an-nyeong-ha-se-yo', audioRef: null },
    { id: 'review_jeoneun', target: '저는 ___입니다', native: 'I am ___ (formal)', literal: 'I-TOPIC ___-am', emoji: '🙋', phonetic: 'jeo-neun ___-im-ni-da', audioRef: null },
    { id: 'review_butak', target: '잘 부탁드립니다', native: 'Please take care of me', literal: 'well request-give', emoji: '🤝', phonetic: 'jal bu-tak-deu-rim-ni-da', audioRef: null },
  ],

  pattern: {
    name: 'The Full First-Encounter Flow',
    explanation: "A complete Korean first meeting has six beats. Each one matters.",
    examples: [
      { target: '(Bow 30°) 안녕하세요', native: '1. Bow + greeting' },
      { target: '저는 ___입니다', native: '2. Name' },
      { target: '___에서 왔어요', native: '3. Origin' },
      { target: '반갑습니다', native: '4. Pleased to meet you' },
      { target: '잘 부탁드립니다', native: '5. Closer' },
      { target: '안녕히 가세요/계세요', native: '6. Farewell (depends on who is leaving)' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match each step to its phrase', pairs: [
      { left: 'Greeting', right: '안녕하세요' },
      { left: 'Name (formal)', right: '저는 ___입니다' },
      { left: 'Closer', right: '잘 부탁드립니다' },
    ]},
    { type: 'multiple_choice', instruction: "First day at a Seoul company. Best opener-to-closer template?", question: 'Pick the complete intro', options: [
      { text: '안녕하세요. 저는 Sam입니다. 호주에서 왔어요. 잘 부탁드립니다.', correct: true },
      { text: '안녕. Sam이야.', correct: false },
      { text: '안녕히 가세요', correct: false },
    ], explanation: 'Greeting + name + origin + closer. The full template lands cleanly.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'I came from Australia', correct: ['호주에서 왔어요', 'hojueseo wasseoyo'] },
    { type: 'fill_blank', instruction: "Complete the farewell — you're leaving the office", sentence: '안녕히 _____!', options: ['계세요', '가세요', '하세요'], correct: '계세요', context: "You leave; they stay." },
    { type: 'build_sentence', instruction: 'Build "I am Sam, please take care of me"', words: ['Sam입니다.', '잘 부탁드립니다.', '저는'], correct: ['저는', 'Sam입니다.', '잘 부탁드립니다.'], translation: 'I am Sam. Please take care of me.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Nice to meet you (formal)', correct: ['반갑습니다', 'bangapseumnida'] },
  ],

  rwenDialogue: {
    intro: "First day. New office in Gangnam. The team lead waves you to introduce yourself. You lead the entire encounter.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: '안녕하세요. 저는 Sam입니다. 잘 부탁드립니다.', native: 'Hello. I am Sam. Please take care of me.', correct: true, feedback: "Full formal template. Bow at 30°. Clean entry." },
        { target: '안녕! 나는 Sam이야', native: 'Hi! I am Sam (banmal)', correct: false, feedback: "Banmal in a work intro = career damage." },
        { target: '안녕히 가세요', native: 'Goodbye', correct: false, feedback: "That's farewell — wrong end of the conversation." },
      ]},
      { speaker: 'npc', target: '반갑습니다. 어디에서 왔어요?', native: 'Nice to meet you. Where are you from?' },
      { speaker: 'user', userChoices: [
        { target: '호주에서 왔어요', native: 'I came from Australia', correct: true, feedback: 'Origin handled. The intro builds.' },
        { target: '호주', native: 'Australia (just word)', correct: false, feedback: 'Incomplete — pair it with 에서 왔어요.' },
        { target: '안녕하세요', native: 'Hello', correct: false, feedback: 'Already past the greeting — keep moving forward.' },
      ]},
      { speaker: 'npc', target: '환영합니다. 저희도 잘 부탁드립니다.', native: 'Welcome. We also ask the same of you.' },
      { speaker: 'user', userChoices: [
        { target: '안녕히 계세요', native: 'Goodbye (you leave, they stay)', correct: true, feedback: "End of day — you leave, they stay. 계세요. Module 1 closed." },
        { target: '안녕히 가세요', native: 'Goodbye (you stay, they leave)', correct: false, feedback: 'Wrong direction — you are the one leaving.' },
        { target: '잘 가', native: 'Bye (casual)', correct: false, feedback: 'Banmal at work farewell — too casual.' },
      ]},
      { speaker: 'rwen', rwenLine: "A complete Korean first encounter — bow to farewell. You did it. Module 1 closed. Welcome to fluency in motion.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am Sam (formal)', correct: ['저는 Sam입니다', 'jeoneun Sam imnida'] },
      { prompt: 'Please take care of me (formal)', correct: ['잘 부탁드립니다', 'jal butakdeurimnida'] },
    ],
  },

  mission: {
    title: "Your Module 1 Mission",
    task: "Run the full first-encounter template out loud today. Bow, greeting, name, origin, closer, farewell. Six beats. All in Korean.",
    rwenSignoff: "Module 1 closed. The door to Korean is open. 안녕히 가세요 — we'll meet again in Module 2.",
  },

  phase8: {
    scenario: "First day at a Seoul tech company. The team lead introduces you to the team — you must run the full Module 1 cycle: bow, greeting, name, origin, closer, and a proper farewell when leaving for the day.",
    rwenRole: "Team lead 박과장님 — 40s, polite-formal, traditional, will read you fast. Whole team listens.",
    successCriteria: "User runs all six beats: (1) bow + 안녕하세요, (2) 저는 ___입니다, (3) ___에서 왔어요, (4) 반갑습니다, (5) 잘 부탁드립니다, (6) 안녕히 계세요 when leaving (NOT 가세요). Stays in formal/polite throughout. NO banmal.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
