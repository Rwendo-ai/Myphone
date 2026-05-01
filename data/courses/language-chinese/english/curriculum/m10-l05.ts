import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-body',
  module: 10,
  lesson: 5,
  title: 'Shēntǐ — Body Parts',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday you learned 'téng' — to hurt. Today we name everything that can hurt. The body in Chinese is 'shēntǐ' (身体) — body-frame. We'll start with three you'll need most, plus a small map of the rest.",
    culturalNote: "Many body words in Mandarin are two-syllable for euphony — 'dùzi' (肚子) for stomach, 'gēbei' (胳膊) for arm — even though they're single concepts. The 'zi' (子) suffix is a softener, like adding 'little' in English. Think: tummy, not abdomen.",
  },

  chunks: [
    {
      id: 'tou',
      target: 'Tóu',
      native: 'Head',
      literal: '(头) head',
      emoji: '🗣️',
      phonetic: 'TOE',
      audioRef: null,
    },
    {
      id: 'duzi',
      target: 'Dùzi',
      native: 'Stomach / belly',
      literal: '(肚子) lit: belly-(softener)',
      emoji: '🍙',
      phonetic: 'DOO-dzuh',
      audioRef: null,
    },
    {
      id: 'gebei',
      target: 'Gēbei',
      native: 'Arm',
      literal: '(胳膊) arm',
      emoji: '💪',
      phonetic: 'GUH-bay',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Body map (extras)',
    explanation: 'Beyond today\'s three, a quick map of the body in Mandarin. Combine any of these with "téng" from yesterday — instant aches.',
    examples: [
      { target: 'Tuǐ (腿) / Jiǎo (脚)', native: 'Leg / Foot' },
      { target: 'Shǒu (手) / Yǎnjing (眼睛)', native: 'Hand / Eyes' },
      { target: 'Bízi (鼻子) / Zuǐ (嘴)', native: 'Nose / Mouth' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to the body part',
      pairs: [
        { left: 'Tóu', right: 'Head' },
        { left: 'Dùzi', right: 'Stomach' },
        { left: 'Gēbei', right: 'Arm' },
        { left: 'Jiǎo', right: 'Foot' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "My stomach hurts."',
      sentence: 'Wǒ _____ téng.',
      options: ['dùzi', 'gēbei', 'tóu'],
      correct: 'dùzi',
      context: 'Combining today with yesterday — body part + téng.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Head (body part)',
      correct: ['Tóu', 'tou', 'tóu', '头'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "My arm hurts."',
      words: ['téng', 'Wǒ', 'gēbei'],
      correct: ['Wǒ', 'gēbei', 'téng'],
      translation: 'My arm hurts',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Stomach / belly',
      correct: ['Dùzi', 'Duzi', 'duzi', 'dùzi', '肚子'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which Mandarin word means "eyes"?',
      question: 'Pick the right one.',
      options: [
        { text: 'Yǎnjing (眼睛)', correct: true },
        { text: 'Bízi (鼻子)', correct: false },
        { text: 'Zuǐ (嘴)', correct: false },
      ],
      explanation: 'Yǎnjing = eyes. Bízi = nose, zuǐ = mouth. The face has its own little vocabulary.',
    },
  ],

  rwenDialogue: {
    intro: "A small kid runs into a chair in your friend's apartment. They start crying and pointing at their leg. You crouch down.",
    lines: [
      {
        speaker: 'npc',
        target: 'Wūwūwū... téng!',
        native: 'Waaaah... it hurts!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tuǐ téng ma? Gěi wǒ kàn kàn.', native: 'Does your leg hurt? Let me see.', correct: true, feedback: "Specific and gentle — naming the part shows you're really paying attention." },
          { target: 'Bié dānxīn', native: "Don't worry", correct: false, feedback: 'Too dismissive for a crying kid — name what hurts first.' },
          { target: 'Wǒ bù shūfu', native: "I don't feel well", correct: false, feedback: "That's about you — they're hurt." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tuǐ! Tuǐ téng!',
        native: 'Leg! My leg hurts!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Naming the part of the body the child can point at — that's how you cross the language barrier with a kid. You just did it.",
        rwenAnimation: 'gentle',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Head',
        correct: ['Tóu', 'tou', 'tóu', '头'],
      },
      {
        prompt: 'Arm',
        correct: ['Gēbei', 'Gebei', 'gebei', '胳膊'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Stand up. Touch each body part and say the Mandarin out loud: tóu, dùzi, gēbei, tuǐ, jiǎo, shǒu. Five seconds. Your body learns through your body.',
    rwenSignoff: 'Bodies remember what mouths say. See you tomorrow at the doctor.',
  },

  phase8: {
    scenario: "You're at a Chinese pharmacy in Beijing's Wangfujing district. The pharmacist asks where it hurts. You need to point and name three body parts that ache after a long flight.",
    rwenRole: "Pharmacist, 50s, businesslike but patient. Will recommend medicine based on which body parts you name.",
    successCriteria: 'User correctly names at least three body parts in Mandarin (e.g., tóu, dùzi, tuǐ) and pairs at least two with "téng" to describe pain.',
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
