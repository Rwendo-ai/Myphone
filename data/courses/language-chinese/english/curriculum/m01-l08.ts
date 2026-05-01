import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-yes-no',
  module: 1,
  lesson: 8,
  title: 'Shì & Bú shì — Yes & No',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Plot twist: Mandarin doesn't really have a single word for 'yes' or 'no'. To answer, you echo the verb of the question — positive or negative. 'Are you American?' → 'Am' (shì) or 'Not am' (bú shì). Today, the verb-echo method.",
    culturalNote: "'Duì' (correct) is closer to a true 'yes' for confirming facts. 'Shì' is for identity ('Am I a teacher? — shì'). Mixing them up is fine — Chinese ears parse what you mean. Don't freeze trying to pick.",
  },

  chunks: [
    {
      id: 'shi',
      target: 'Shì',
      native: 'Yes (am/is/are)',
      literal: '(是) lit: am / is / are',
      emoji: '✅',
      phonetic: 'SHR (almost no vowel — like the start of "shred")',
      audioRef: null,
    },
    {
      id: 'bu_shi',
      target: 'Bú shì',
      native: 'No (am/is/are NOT)',
      literal: '(不是) lit: not-am',
      emoji: '❌',
      phonetic: 'BOO shr ("bù" changes to "bú" before fourth tone — tone sandhi!)',
      audioRef: null,
    },
    {
      id: 'dui',
      target: 'Duì',
      native: 'Correct / right',
      literal: '(对) lit: correct',
      emoji: '👍',
      phonetic: 'DWAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Shì" yes/no — verb echo',
    explanation: "Mandarin answers yes/no questions by echoing the verb. To say 'yes' to 'are you...?' use 'shì' (am). To say 'no', negate the verb with 'bù' → 'bú shì'. 'Duì' is a separate confirmer — used when checking a fact, not stating identity.",
    examples: [
      { target: 'Q: Nǐ shì lǎoshī ma? A: Shì.', native: 'Q: Are you a teacher? A: Yes (am).' },
      { target: 'Q: Nǐ shì Měiguó rén ma? A: Bú shì.', native: 'Q: Are you American? A: No (not am).' },
      { target: 'Q: Wǒ shuō de duì ma? A: Duì!', native: 'Q: Did I get it right? A: Correct!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the word to its meaning',
      pairs: [
        { left: 'Shì', right: 'Yes (am/is)' },
        { left: 'Bú shì', right: 'No (am NOT)' },
        { left: 'Duì', right: 'Correct / right' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Someone asks "Nǐ shì Yīngguó rén ma?" but you\'re NOT British. Reply.',
      sentence: '_____ shì, wǒ shì Àozhōu rén',
      options: ['Bú', 'Hěn', 'Duì'],
      correct: 'Bú',
      context: 'Negate the verb "shì" with "bù" — and "bù" becomes "bú" before a fourth tone (tone sandhi).',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'Yes (am/is — confirming identity)',
      correct: ['Shì', 'shi', 'shì', '是'],
    },
    {
      type: 'build_sentence',
      instruction: 'You\'re asked if a fact is correct, and confirm it warmly',
      words: ['Duì,', 'shuō', 'nǐ', 'duì'],
      correct: ['Duì,', 'nǐ', 'shuō', 'duì'],
      translation: "Right — you said it correctly",
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters — the negative answer',
      prompt: 'No (I am NOT)',
      correct: ['Bú shì', 'Bu shi', 'bu shi', 'bú shì', '不是'],
    },
    {
      type: 'multiple_choice',
      instruction: "The waiter asks 'Là ma?' (Spicy?). You want to say 'yes, that's right'.",
      question: 'Pick the natural reply',
      options: [
        { text: "Duì (correct) — confirming a fact about the food", correct: true },
        { text: 'Shì (am) — wrong verb; "shì" is for identity', correct: false },
        { text: 'Huānyíng (welcome) — completely off-topic', correct: false },
      ],
      explanation: "When confirming a fact (not an identity), 'duì' is more natural than 'shì'. 'Shì' would sound like you're saying 'I AM spicy', not 'yes, the food is spicy'.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a Chengdu hotpot restaurant. The bubbling red broth in front of you smells like chilli oil and Sichuan peppercorns. The waiter wants to confirm your order before it goes to the kitchen.",
    lines: [
      {
        speaker: 'npc',
        target: 'Là de, duì ma?',
        native: 'The spicy one, right?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Duì, là de', native: 'Right, the spicy one', correct: true, feedback: '"Duì" is exactly right for confirming a fact. Bowl incoming.' },
          { target: 'Shì là de', native: 'Am the spicy one', correct: false, feedback: '"Shì" is for identity — using it here sounds like YOU are spicy. The waiter will smile but be confused.' },
          { target: 'Bú shì', native: 'No (not am)', correct: false, feedback: 'Wrong direction — that means no. You wanted yes.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo de, mǎshàng lái',
        native: 'Got it, coming right up',
      },
      {
        speaker: 'rwen',
        rwenLine: "'Duì' for facts, 'shì' for identity. You picked the right one and your hotpot is already on the way. Hěn hǎo.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'No (I am NOT)',
        correct: ['Bú shì', 'Bu shi', 'bu shi', 'bú shì', '不是'],
      },
      {
        prompt: 'Correct / right (confirming a fact)',
        correct: ['Duì', 'Dui', 'dui', 'duì', '对'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Listen for yes/no questions in your day. In your head, answer them in Mandarin: 'Shì' for identity questions ('Are you X?'), 'Duì' for fact-checks ('Is this right?'), 'Bú shì' for negation. Build the reflex.",
    rwenSignoff: "The yes that fits the question is more useful than a yes that doesn't. Duì.",
  },

  phase8: {
    scenario: "Friday night, a busy Chengdu hotpot place. Steam everywhere, oil-fragrant air, the half-spicy / half-mild divider pot bubbling in front of you. The waiter has come back with a clipboard to confirm a few details before sending the order — he wants quick yes/no answers in Mandarin.",
    rwenRole: "Hotpot restaurant waiter — early 20s, fast-paced, friendly. Will fire off three or four confirmation questions ('spicy, right?', 'two people?', 'beef?'). Won't slow down much — this is a real-time test of yes/no reflexes.",
    successCriteria: "User uses 'duì' to confirm facts (spice level, headcount), 'shì' only if asked about identity (e.g. 'Nǐ shì wàiguó rén ma?'), and 'bú shì' or 'bù' to negate. They should NOT freeze and default to English 'yes/no'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
