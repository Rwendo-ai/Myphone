import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-bow',
  module: 1,
  lesson: 7,
  title: 'The Bow — Greeting With Your Body',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Korea, the words are half the greeting. The bow is the other half. A 안녕하세요 with no bow lands flat — sometimes rude. Today the body learns the language too.",
    culturalNote: "Three bow depths: 15° (peers, casual hi), 30° (most adults, work), 45° (elders, deep respect, apology). Hands at sides for men; right hand over left at the front for women in formal settings.",
  },

  chunks: [
    { id: 'mokrye', target: '목례', native: '15° head-nod (peers)', literal: 'neck-bow', emoji: '🙂', phonetic: 'mok-rye', audioRef: null },
    { id: 'botong', target: '보통례', native: '30° normal bow (most situations)', literal: 'normal-bow', emoji: '🙇', phonetic: 'bo-tong-rye', audioRef: null },
    { id: 'jeongjung', target: '정중례', native: '45° deep bow (elders, apology)', literal: 'sincere-bow', emoji: '🙇‍♂️', phonetic: 'jeong-jung-rye', audioRef: null },
  ],

  pattern: {
    name: 'Bow depth = respect dose',
    explanation: "Pick the bow before the words. The depth tells your hierarchy read of the room.",
    examples: [
      { target: '15° 목례', native: 'Friends, peers, quick hi' },
      { target: '30° 보통례', native: 'Coworkers, daily polite' },
      { target: '45° 정중례', native: 'Elders, in-laws, apologies' },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match bow type to situation', pairs: [
      { left: '15° 목례', right: 'Peer / casual hi' },
      { left: '30° 보통례', right: 'Daily polite / work' },
      { left: '45° 정중례', right: 'Elder / apology' },
    ]},
    { type: 'multiple_choice', instruction: "You're meeting your Korean partner's grandmother. What bow?", question: 'Pick the depth', options: [
      { text: '45° 정중례', correct: true },
      { text: '15° 목례', correct: false },
      { text: '0° (no bow)', correct: false },
    ], explanation: 'Grandmother + first meeting = 45° deep bow. No bow = disrespectful.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Deep 45° bow (sincere)', correct: ['정중례', 'jeongjungrye'] },
    { type: 'fill_blank', instruction: 'Pick bow for the situation', sentence: 'Bumping into a friend at the station: _____.', options: ['목례', '정중례', '큰절'], correct: '목례', context: 'Friend = peer = quick head-nod.' },
    { type: 'build_sentence', instruction: 'Order: bow first, then words', words: ['안녕하세요', '(30°)'], correct: ['(30°)', '안녕하세요'], translation: 'Bow first, then say hello.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Normal bow (30°)', correct: ['보통례', 'botongrye'] },
  ],

  rwenDialogue: {
    intro: "You're meeting your Korean coworker's father at his apartment. He opens the door.",
    lines: [
      { speaker: 'rwen', rwenLine: 'Before words — what bow?' },
      { speaker: 'user', userChoices: [
        { target: '45° 정중례 + 안녕하세요', native: 'Deep bow + hello', correct: true, feedback: "Right — elder + first meeting = 45°. Words follow the body." },
        { target: '15° 목례 + 안녕', native: 'Head-nod + casual hi', correct: false, feedback: "Both wrong tier — too casual for a friend's father." },
        { target: 'No bow + 안녕하세요', native: 'Just words', correct: false, feedback: "Skipping the bow with elders is read as careless." },
      ]},
      { speaker: 'npc', target: '어서 와요. 반갑습니다.', native: 'Come in. Nice to meet you.' },
      { speaker: 'rwen', rwenLine: "Body first, words second. The bow primes the room.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: '45° deep bow (sincere)', correct: ['정중례', 'jeongjungrye'] },
      { prompt: '15° head-nod (peers)', correct: ['목례', 'mokrye'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice three bow depths in front of a mirror today. 15°, 30°, 45°. Say 안녕하세요 with each. Feel the difference.",
    rwenSignoff: "The body speaks Korean too. Train it.",
  },

  phase8: {
    scenario: "You're meeting your Korean friend's parents for the first time at their Seoul apartment.",
    rwenRole: "Friend's father — 60s, traditional, expects deep bow + formal greeting.",
    successCriteria: "User describes/uses 45° bow plus 안녕하세요/처음 뵙겠습니다. Does NOT skip the bow or use casual register.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
