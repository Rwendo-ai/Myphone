import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-soju',
  module: 7,
  lesson: 4,
  title: 'Soju & Drinking Culture',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "소주 (soju) — Korea's national clear distilled spirit. Drinking culture comes with rules: pour for elders with two hands, accept with two hands, turn your head to the side when drinking in front of an elder. 건배! = cheers!",
    culturalNote: "Drinking is bonding in Korea — refusing entirely can read as rejecting a relationship. If you don't drink, say 술 못 마셔요 (I can't drink) early; Koreans accept this with grace. Two-hands etiquette is non-negotiable.",
  },

  chunks: [
    { id: 'soju', target: '소주', native: 'Soju (clear spirit)', literal: 'soju', emoji: '🍶', phonetic: 'so-ju', audioRef: null },
    { id: 'geonbae', target: '건배!', native: 'Cheers!', literal: 'dry-cup!', emoji: '🥂', phonetic: 'geon-bae', audioRef: null },
    { id: 'sul_motmasyeo', target: '술 못 마셔요', native: "I can't drink", literal: 'alcohol cannot drink', emoji: '🚫', phonetic: 'sul mot ma-syeo-yo', audioRef: null },
  ],

  pattern: {
    name: 'Two-handed pour + 건배',
    explanation: "Younger pours for older with both hands on the bottle. Older accepts with both hands on the cup. Younger turns head away when drinking in front of older.",
    examples: [
      { target: '한 잔 더!', native: 'One more shot!' },
      { target: '건배!', native: 'Cheers!' },
      { target: '술 못 마셔요', native: "I can't drink" },
    ],
  },

  exercises: [
    { type: 'match_pairs', instruction: 'Match phrase to meaning', pairs: [
      { left: '소주', right: 'Soju' },
      { left: '건배!', right: 'Cheers!' },
      { left: '한 잔 더', right: 'One more shot' },
    ]},
    { type: 'translate', instruction: 'Type in Korean', prompt: "I can't drink", correct: ['술 못 마셔요', 'sul mot masyeoyo'] },
    { type: 'fill_blank', instruction: 'Toast at a Korean dinner', sentence: '_____!', options: ['건배', '비싸요', '안녕히'], correct: '건배', context: 'Cheers at the toast.' },
    { type: 'build_sentence', instruction: 'Build "One more bottle of soju please"', words: ['소주', '한 병', '더 주세요'], correct: ['소주', '한 병', '더 주세요'], translation: 'One more bottle of soju please.' },
    { type: 'multiple_choice', instruction: 'Pouring soju for an older Korean. Etiquette?', question: 'Pick the right move', options: [
      { text: 'Two hands on the bottle', correct: true },
      { text: 'One hand, casual', correct: false },
      { text: 'Pour from a distance', correct: false },
    ], explanation: 'Both hands = respect. One hand to an elder = rude. Distance pouring is fine but not the etiquette point.' },
    { type: 'translate', instruction: 'Type in Korean', prompt: 'Soju', correct: ['소주', 'soju'] },
  ],

  rwenDialogue: {
    intro: "First soju round at a Korean BBQ with your boss across the table.",
    lines: [
      { speaker: 'npc', target: '한 잔 받으세요', native: 'Receive a glass (he is pouring for you)' },
      { speaker: 'user', userChoices: [
        { target: '(holds cup with both hands) 감사합니다', native: 'Both hands + thank you', correct: true, feedback: 'Two hands on cup + 감사합니다 — perfect etiquette with elder/boss.' },
        { target: '(one hand) 감사합니다', native: 'One hand', correct: false, feedback: 'One-handed receipt from your boss = bad read.' },
        { target: '(refuses) 안 마셔요', native: 'I don\'t drink', correct: false, feedback: 'Sudden refusal mid-pour = awkward. If you don\'t drink, say so BEFORE the pour.' },
      ]},
      { speaker: 'npc', target: '건배!', native: 'Cheers!' },
      { speaker: 'user', userChoices: [
        { target: '건배! (turns head sideways to drink)', native: 'Cheers + head turn', correct: true, feedback: 'Head turn = respect when drinking in front of elder. Module fluency move.' },
        { target: '건배! (drinks facing him)', native: 'No turn', correct: false, feedback: 'Facing your elder while drinking is read as cocky.' },
        { target: '비싸요', native: 'Expensive', correct: false, feedback: 'Wrong line entirely.' },
      ]},
      { speaker: 'rwen', rwenLine: "Two hands. Head turn. 건배. Korean drinking culture in three moves.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'Cheers!', correct: ['건배', 'geonbae', '건배!'] },
      { prompt: "I can't drink", correct: ['술 못 마셔요', 'sul mot masyeoyo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Mentally rehearse the two-hands pour and head-turn drink. Picture an elder across the table.",
    rwenSignoff: "Drinking etiquette = relationship. Master the moves.",
  },

  phase8: {
    scenario: "Korean dinner with the boss. First soju round — you must pour and receive correctly.",
    rwenRole: "Boss — 50s, traditional, watches etiquette closely.",
    successCriteria: "User uses two-hands pour/receive. Toasts with 건배. Turns head when drinking in front of boss. Says 술 못 마셔요 IF refusing — but says it before pour, not during.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
