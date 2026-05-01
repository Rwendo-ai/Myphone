import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-angry',
  module: 10,
  lesson: 2,
  title: 'Shēngqì — Anger',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Anger in Chinese is 'shēngqì' (生气) — literally 'birth-air' or 'rising breath'. Feel that? Anger as the breath rising. Today we name it, and we also learn to ask someone to lower theirs.",
    culturalNote: "Notice 'Wǒ shēngqì le' (我生气了) — that 'le' at the end signals a *change of state*. Not 'I am angry' as a permanent trait, but 'I have become angry' — anger as something that arrived. Le is one of Mandarin's quietest, most useful particles.",
  },

  chunks: [
    {
      id: 'wo_shengqi_le',
      target: 'Wǒ shēngqì le',
      native: "I'm angry (now)",
      literal: '(我生气了) lit: I-rise-air-(change of state)',
      emoji: '😠',
      phonetic: 'WAW shung-CHEE luh',
      audioRef: null,
    },
    {
      id: 'wo_hen_shiwang',
      target: 'Wǒ hěn shīwàng',
      native: "I'm disappointed",
      literal: '(我很失望) lit: I-very-lose-hope',
      emoji: '😞',
      phonetic: 'WAW hun shrr-WAHNG',
      audioRef: null,
    },
    {
      id: 'lengjing_yidian',
      target: 'Lěngjìng yìdiǎn',
      native: 'Calm down',
      literal: '(冷静一点) lit: cold-still a-bit',
      emoji: '🌬️',
      phonetic: 'LUNG-jing ee-DYEN',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Le" (了) for change of state',
    explanation: 'When "le" follows an adjective or feeling verb, it signals "this just became true". Without "le" you describe a state; with "le" you announce it just arrived.',
    examples: [
      { target: 'Wǒ shēngqì', native: "I'm an angry person (state)" },
      { target: 'Wǒ shēngqì le', native: "I just got angry (change)" },
      { target: 'Wǒ è le', native: "I'm hungry now (just got hungry)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to its meaning',
      pairs: [
        { left: 'Wǒ shēngqì le', right: "I'm angry now" },
        { left: 'Wǒ hěn shīwàng', right: "I'm disappointed" },
        { left: 'Lěngjìng yìdiǎn', right: 'Calm down' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I just became angry."',
      sentence: 'Wǒ shēngqì _____.',
      options: ['le', 'hěn', 'ma'],
      correct: 'le',
      context: '"Le" marks the change — the moment anger arrived.',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm disappointed",
      correct: ['Wǒ hěn shīwàng', 'Wo hen shiwang', 'wo hen shiwang', '我很失望'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "Calm down a little."',
      words: ['yìdiǎn', 'Lěngjìng', 'le'],
      correct: ['Lěngjìng', 'yìdiǎn'],
      translation: 'Calm down (a bit)',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: "I'm angry (now)",
      correct: ['Wǒ shēngqì le', 'Wo shengqi le', 'wo shengqi le', '我生气了'],
    },
    {
      type: 'multiple_choice',
      instruction: '"Shīwàng" (失望) literally means...',
      question: 'Why does it mean disappointed?',
      options: [
        { text: '"lose hope" — shī = lose, wàng = hope/look-toward', correct: true },
        { text: '"empty heart"', correct: false },
        { text: '"cold mouth"', correct: false },
      ],
      explanation: 'Shī (失) = lose, wàng (望) = hope/gaze-toward. Disappointment = losing the thing you were looking toward.',
    },
  ],

  rwenDialogue: {
    intro: "Your friend slammed their phone on the table. Their flatmate just bailed on rent again — third time this year.",
    lines: [
      {
        speaker: 'npc',
        target: 'Wǒ shēngqì le!',
        native: "I'm so angry!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Lěngjìng yìdiǎn. Shénme shìr?', native: "Calm down a bit. What's going on?", correct: true, feedback: 'Gentle, not dismissive. You made space for them to talk.' },
          { target: 'Wǒ hěn gāoxìng', native: "I'm happy", correct: false, feedback: 'Very wrong feeling for the moment.' },
          { target: 'Bié shēngqì!', native: "Don't be angry!", correct: false, feedback: '"Stop being angry" rarely helps — try inviting calm instead.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Wǒ hěn shīwàng tā',
        native: "I'm so disappointed in him",
      },
      {
        speaker: 'rwen',
        rwenLine: "You met heat with stillness. That's not weakness — that's strength. Lěngjìng is a real gift to give someone.",
        rwenAnimation: 'thoughtful',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm angry (just got angry)",
        correct: ['Wǒ shēngqì le', 'Wo shengqi le', 'wo shengqi le', '我生气了'],
      },
      {
        prompt: 'Calm down (a bit)',
        correct: ['Lěngjìng yìdiǎn', 'Lengjing yidian', 'lengjing yidian', '冷静一点'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time something irritates you today — a slow queue, a forgotten message — pause and say 'Lěngjìng yìdiǎn' to yourself. The Mandarin slows your breath.",
    rwenSignoff: "Anger is rising air. Lěngjìng is the cool that lets it settle. See you tomorrow.",
  },

  phase8: {
    scenario: "Your Chinese roommate's online order arrived broken for the third time. They're pacing the kitchen, phone in hand, about to leave a furious review. You walk in.",
    rwenRole: "Zhāng Méi (张梅) — Chinese roommate, 25, normally laid-back but at her limit. Will respond to genuine empathy, not scolding.",
    successCriteria: "User uses 'Lěngjìng yìdiǎn' to invite calm without dismissing, asks what happened, and uses 'Wǒ míngbai' or 'shīwàng' to validate the disappointment.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
