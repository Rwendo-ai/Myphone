import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-family-status',
  module: 3,
  lesson: 4,
  title: 'May asawa ka ba? — Married?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Video call to your partner's parents in Cebu. Nanay Cecilia waves from the kitchen, then comes the question every Filipino family asks: 'May asawa ka na ba? May anak na?' In a Filipino family, this isn't gossip — it's how they pull you closer. Today you answer with grace.",
    culturalNote: "'May' (mai) means 'have'; 'wala' (wa-LA) means 'don't have'. The pair runs through Tagalog like rails. 'May asawa ka ba?' is asked openly — even by people you just met. The kindest deflection is 'Wala pa' (not yet) — 'pa' adds 'still / yet', leaving the future open and warm.",
  },

  chunks: [
    {
      id: 'may-asawa-ka-ba',
      target: 'May asawa ka ba?',
      native: 'Are you married?',
      literal: 'Have spouse you [question]?',
      emoji: '💍',
      phonetic: 'mai a-SA-wa ka BA',
      audioRef: null,
    },
    {
      id: 'may-dalawang-anak-ako',
      target: 'May dalawang anak ako',
      native: 'I have two kids',
      literal: 'Have two child I',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'mai da-LA-wang a-NAK a-KO',
      audioRef: null,
    },
    {
      id: 'wala-pa',
      target: 'Wala pa',
      native: 'Not yet',
      literal: "Don't-have still",
      emoji: '🙃',
      phonetic: 'wa-LA pa',
      audioRef: null,
    },
  ],

  pattern: {
    name: '`May` / `wala`',
    explanation: "'May' (have) and 'wala' (don't have) handle every possession sentence in Tagalog. 'May asawa ako' = I have a spouse. 'Wala akong asawa' = I don't have a spouse. Add 'pa' (yet) for warmth: 'wala pa' (not yet). Add 'na' (already) for completion: 'may asawa na ako' (I'm married already).",
    examples: [
      { target: 'May anak ako', native: 'I have a child' },
      { target: 'Wala akong anak', native: "I don't have a child" },
      { target: 'May asawa na ako', native: "I'm married already" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'May asawa ka ba?', right: 'Are you married?' },
        { left: 'May dalawang anak ako', right: 'I have two kids' },
        { left: 'Wala pa', right: 'Not yet' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Nanay Cecilia asks if you have kids — you politely say not yet',
      sentence: '___ pa.',
      options: ['Wala', 'May', 'Ano'],
      correct: 'Wala',
      context: "'Wala pa' = 'not yet' — the kindest deflection in Tagalog.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I have two kids',
      correct: ['May dalawang anak ako', 'may dalawang anak ako'],
    },
    {
      type: 'build_sentence',
      instruction: "Ask a new friend if they're married — put the words in order",
      words: ['ka', 'ba?', 'May', 'asawa'],
      correct: ['May', 'asawa', 'ka', 'ba?'],
      translation: 'Are you married?',
    },
    {
      type: 'multiple_choice',
      instruction: "Nanay Cecilia asks 'May asawa ka na ba?'. You're not married. What's the warmest answer?",
      question: 'Choose the gentlest reply',
      options: [
        { text: 'Wala pa po, Nanay.', correct: true },
        { text: 'May dalawang anak ako.', correct: false },
        { text: 'Ano ang trabaho mo?', correct: false },
      ],
      explanation: "'Wala pa po' adds 'po' for respect (she's an elder) and 'pa' to keep the future open.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog — gentle deflection',
      prompt: 'Not yet',
      correct: ['Wala pa', 'wala pa'],
    },
  ],

  rwenDialogue: {
    intro: "Video call. Nanay Cecilia's face fills the screen — she's smiling, holding a cup of coffee. She squints curiously and asks the family question.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anak, may asawa ka na ba?',
        native: 'Child, are you married already?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wala pa po, Nanay. Pero may plano.', native: 'Not yet, Nanay. But there are plans.', correct: true, feedback: 'Perfect — humble, respectful (po), and you left a warm door open.' },
          { target: 'May asawa ka ba?', native: 'Are you married?', correct: false, feedback: 'You bounced the question back at an elder — answer first, then ask.' },
          { target: 'Wala.', native: 'No.', correct: false, feedback: "Too clipped for an elder — add 'pa po' to soften and respect." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Aba, sige! Maghanda ka na.',
        native: "Oh, alright! Get yourself ready then.",
      },
      {
        speaker: 'rwen',
        rwenLine: "She laughed and started planning your wedding in her head. That's a Filipino blessing.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Are you married? (in Tagalog)', correct: ['May asawa ka ba?', 'may asawa ka ba'] },
      { prompt: 'Not yet (in Tagalog)', correct: ['Wala pa', 'wala pa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practise the may/wala swap once today out loud. 'May ___ ako' then 'Wala akong ___'. Same noun, two opposite truths. Feel the rails.",
    rwenSignoff: "I'll ask you tomorrow. Ingat ka — take care.",
  },

  phase8: {
    scenario: "First video call with your partner's mum, Nanay Cecilia, in Cebu. She's just finished cooking adobo and wants to know everything — are you married, do you have kids, when are you visiting. She's gentle but unstoppable.",
    rwenRole: "Nanay Cecilia — early 70s, future mother-in-law, sweet but persistent; she'll keep asking soft 'may ___ ka ba?' questions until she has the full picture.",
    successCriteria: "User uses 'po' for respect, answers her marriage/kids questions with 'may ___ ako' or 'wala pa po' (never a flat 'wala'), and politely asks one 'may ___ kayo?' question back to keep the conversation two-way.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
