import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07',
  module: 4,
  lesson: 7,
  title: 'The Bill, Please',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Ibhili siyacela. 'May we have the bill.' One sentence to close every restaurant meal in isiNdebele. Today you also learn to ask the cost, and how to thank the waiter on the way out.",
    culturalNote: "In Zimbabwe, restaurant prices are usually in US dollars and you ask for the bill (ibhili) the same way as anywhere else. A 10% tip is appreciated but not obligatory. 'Likudla bekumnandi' — 'the food was tasty' — said to the waiter or owner on the way out, is the highest compliment you can leave behind.",
  },

  chunks: [
    {
      id: 'ibhili',
      target: 'ibhili',
      native: 'the bill / the check',
      emoji: '🧾',
      phonetic: 'ee-BEE-lee',
      audioRef: null,
    },
    {
      id: 'siyacela',
      target: 'Ibhili siyacela',
      native: 'May we have the bill, please',
      literal: 'The-bill we-request',
      emoji: '🙏',
      phonetic: 'ee-BEE-lee see-yah-CHEH-lah',
      audioRef: null,
    },
    {
      id: 'kuyimalini',
      target: 'Kuyimalini?',
      native: 'How much is it?',
      emoji: '💰',
      phonetic: 'koo-yee-mah-LEE-nee',
      audioRef: null,
    },
    {
      id: 'imali',
      target: 'imali',
      native: 'money',
      emoji: '💵',
      phonetic: 'ee-MAH-lee',
      audioRef: null,
    },
    {
      id: 'bekumnandi',
      target: 'Likudla bekumnandi',
      native: 'The food was tasty',
      emoji: '😋',
      phonetic: 'lee-KOO-dlah beh-koom-nahn-dee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Siyacela vs Ngicela — we vs I',
    explanation: "You learned 'Ngicela' (I request). Today: 'Siyacela' (we request). The 'si-' prefix means 'we'. When you are eating with friends and asking for the bill, it's natural to say 'siyacela' — we are all asking together. The same applies to 'sicela amanzi' (we'd like water). Match the pronoun to who is at the table.",
    examples: [
      { target: 'Ngicela ibhili', native: 'May I have the bill (I alone)' },
      { target: 'Ibhili siyacela', native: 'May we have the bill (we together)' },
      { target: 'Sicela amanzi', native: 'We would like water' },
    ],
  },

  exercises: [
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: 'May we have the bill, please',
      correct: ['Ibhili siyacela', 'ibhili siyacela', 'Siyacela ibhili', 'siyacela ibhili'],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask the price politely',
      sentence: '____',
      options: ['Kuyimalini?', 'Ngiyabonga', 'Uxolo'],
      correct: 'Kuyimalini?',
      context: 'You want to know how much something costs.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Choose the right phrase',
      question: 'You are eating with three friends. The meal is over. What\'s the best way to ask for the bill?',
      options: [
        { text: 'Ibhili siyacela.', correct: true },
        { text: 'Ngifuna ibhili.', correct: false },
        { text: 'Imali!', correct: false },
      ],
      explanation: "With friends, 'siyacela' (we request) is more natural than 'ngifuna' (I want). 'Imali!' (money!) on its own would sound abrupt and demanding.",
    },
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Kuyimalini?',          right: 'How much is it?' },
        { left: 'imali',                right: 'money' },
        { left: 'Ibhili siyacela',      right: 'May we have the bill' },
        { left: 'Likudla bekumnandi',   right: 'The food was tasty' },
      ],
    },
  ],

  rwenDialogue: {
    intro: 'You and a friend have just finished lunch in a Bulawayo restaurant. You are ready to leave.',
    lines: [
      { speaker: 'rwen', rwenLine: "Catch the waiter's eye, raise a hand, then ask. With two of you at the table, use siyacela." },
      { speaker: 'user', userChoices: [
        { target: 'Uxolo, sisi! Ibhili siyacela.', native: 'Excuse me, sister! May we have the bill.', correct: true, feedback: 'Polite plural — perfect.' },
        { target: 'Ngifuna imali.', native: 'I want money.', correct: false, feedback: "That literally says 'I want money' — sounds like you're asking the waiter to pay you. Use ibhili siyacela." },
      ] },
      { speaker: 'npc',  target: 'Yebo. Nayi ibhili — kuyi-15 USD.', native: 'Yes. Here is the bill — it is 15 USD.' },
      { speaker: 'user', userChoices: [
        { target: 'Kulungile. Ngiyabonga.', native: 'OK. Thank you.', correct: true, feedback: 'Clean and friendly.' },
      ] },
      { speaker: 'rwen', rwenLine: "On the way out, leave a compliment behind. It costs nothing and the cook will hear about it." },
      { speaker: 'user', userChoices: [
        { target: 'Likudla bekumnandi. Ngiyabonga!', native: 'The food was tasty. Thank you!', correct: true, feedback: "The highest compliment you can leave behind." },
      ] },
    ],
  },

  activeRecall: {
    instruction: 'Type your answer.',
    prompts: [
      { prompt: "How do you say 'May we have the bill'?",       correct: ['Ibhili siyacela', 'ibhili siyacela', 'Siyacela ibhili', 'siyacela ibhili'] },
      { prompt: "How do you ask 'How much is it?'",             correct: ['Kuyimalini?', 'Kuyimalini', 'kuyimalini', 'kuyimalini?'] },
      { prompt: "How do you say 'The food was tasty'?",         correct: ['Likudla bekumnandi', 'likudla bekumnandi'] },
    ],
  },

  mission: {
    title: "Pay one bill in your head in isiNdebele",
    task: "Next time you ask for the bill anywhere, run the isiNdebele line through your head first: 'Ibhili siyacela.' Then say 'Kuyimalini?' silently as you read the total. Tie the words to the moment.",
    rwenSignoff: "Money phrases are some of the highest-frequency phrases in any language. Learn them once and they pay back forever.",
  },

  phase8: {
    scenario: "You and a friend just finished a meal in Bulawayo. You ask for the bill, react to the price, pay, and compliment the food on your way out.",
    rwenRole: "Sisi Nomvula — the waitress at a busy Bulawayo lunch spot, used to tourists trying out their isiNdebele.",
    successCriteria: "User asked for the bill with 'siyacela', asked or acknowledged the price, complimented the food with 'bekumnandi' or similar, and thanked the waitress with 'ngiyabonga'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
