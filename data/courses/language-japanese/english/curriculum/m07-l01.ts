import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l01-itadakimasu',
  module: 7,
  lesson: 1,
  title: 'いただきます — Receiving the Meal',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Before any Japanese meal — kaiseki dinner, conbini onigiri, even instant ramen at your desk — there's one phrase that opens the door. いただきます. Two seconds, hands together, then you eat. Skip it and the table feels off; say it and you've slipped into the rhythm of the country.",
    culturalNote: "いただきます literally means 'I humbly receive' — a small bow of the language toward whoever cooked, whoever farmed, whoever the food came from. It is not religious; it's gratitude as default. Even alone with a microwaved bento, many Japanese still say it under their breath. The bookend at the end of the meal is ごちそうさまでした — 'it was a feast'.",
  },

  chunks: [
    {
      id: 'itadakimasu',
      target: 'いただきます',
      native: 'I humbly receive (said before eating)',
      literal: 'itadakimasu — humbly-receive',
      emoji: '🙏',
      phonetic: 'i-ta-da-ki-MAS',
      audioRef: null,
    },
    {
      id: 'gochisousama',
      target: 'ごちそうさまでした',
      native: 'Thank you for the meal (said after eating)',
      literal: 'go-chisou-sama-deshita — honourable-feast-was',
      emoji: '🍱',
      phonetic: 'go-chi-soh-SA-ma desh-ta',
      audioRef: null,
    },
    {
      id: 'oishii',
      target: 'おいしい！',
      native: 'Delicious!',
      literal: 'oishii — tasty',
      emoji: '😋',
      phonetic: 'oh-i-SHII',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The bookend rule — start and end every meal',
    explanation: "Japanese meals have an opening and a closing phrase. いただきます at the start, ごちそうさまでした at the end. In between, おいしい! when something tastes good. These three phrases, used reflexively, mark you as someone who knows how to eat in Japan.",
    examples: [
      { target: 'いただきます', native: 'Before eating — I humbly receive' },
      { target: 'おいしい！', native: 'Mid-meal — delicious!' },
      { target: 'ごちそうさまでした', native: 'After eating — thank you for the feast' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Japanese phrase to its meaning',
      pairs: [
        { left: 'いただきます', right: 'I humbly receive (before eating)' },
        { left: 'ごちそうさまでした', right: 'Thank you for the meal (after)' },
        { left: 'おいしい', right: 'Delicious' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You are about to eat. Complete the phrase.',
      sentence: 'いただき_____。',
      options: ['ます', 'です', 'ません'],
      correct: 'ます',
      context: 'Hands together at the table — opening phrase before the first bite.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — said after finishing a meal',
      prompt: 'Thank you for the meal',
      correct: ['gochisousama deshita', 'gochisousamadeshita', 'Gochisousama deshita', 'gochisōsama deshita'],
    },
    {
      type: 'build_sentence',
      instruction: 'Compliment the cook mid-meal',
      words: ['おいしい', 'これ', '！'],
      correct: ['これ', 'おいしい', '！'],
      translation: 'This is delicious!',
    },
    {
      type: 'multiple_choice',
      instruction: "You sit down to dinner at a Japanese friend's home and the food is in front of you. What's the first thing you say?",
      question: 'Choose the correct opening',
      options: [
        { text: 'いただきます (Itadakimasu)', correct: true },
        { text: 'ごちそうさまでした (Gochisousama deshita)', correct: false },
        { text: 'こんばんは (Konbanwa)', correct: false },
      ],
      explanation: 'いただきます is the opener — said as you pick up the chopsticks. ごちそうさま is the closer; you save that for after the last bite.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji — said before eating',
      prompt: 'I humbly receive (before eating)',
      correct: ['itadakimasu', 'Itadakimasu'],
    },
  ],

  rwenDialogue: {
    intro: "It's a Wednesday evening at a friend's apartment in Nakameguro. She's just plated up homemade gyoza and miso soup. You sit down. The chopsticks are in front of you.",
    lines: [
      {
        speaker: 'npc',
        target: 'どうぞ、温かいうちに食べてね',
        native: "Please — eat while it's still warm.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'いただきます！', native: 'I humbly receive!', correct: true, feedback: "Hands together, head dipped, then you eat. Exactly the right beat — she smiles." },
          { target: 'ごちそうさまでした', native: 'Thank you for the meal (after)', correct: false, feedback: "That's the closing phrase — you'd say it after finishing. Open with いただきます." },
          { target: 'ありがとう', native: 'Thanks', correct: false, feedback: "Polite, but the meal-specific opener is いただきます. ありがとう floats; いただきます lands." },
        ],
      },
      {
        speaker: 'user',
        target: 'おいしい！',
        native: 'Delicious!',
      },
      {
        speaker: 'npc',
        target: 'ほんとう？よかった！',
        native: 'Really? I am so glad!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Two phrases and you've already done what most tourists never do — bracketed the meal in Japanese. The food tastes the same but the table feels different.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I humbly receive (before eating)', correct: ['itadakimasu', 'Itadakimasu', 'いただきます'] },
      { prompt: 'Thank you for the meal (after eating)', correct: ['gochisousama deshita', 'gochisousamadeshita', 'Gochisousama deshita', 'gochisōsama deshita', 'ごちそうさまでした'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tonight, before whatever you eat — even toast at the kitchen counter — say いただきます out loud. After you finish, ごちそうさまでした. Two phrases, two seconds each. Feel how the meal frames itself differently.",
    rwenSignoff: "また明日 — see you tomorrow.",
  },

  phase8: {
    scenario: "It's 7pm at a colleague's small apartment in Setagaya. She's spent the afternoon cooking a homemade dinner — nikujaga, rice, miso soup, pickles — to thank you for help on a project. The plates are on the low table; she's just sat down opposite you.",
    rwenRole: "Aiko — your colleague, mid-30s, cares about the meal landing well; she'll feel the absence of いただきます instantly even if she doesn't comment on it.",
    successCriteria: "User opens with 'いただきます' BEFORE the first bite (NOT after, that's gochisousama's job), drops in 'おいしい' once the food is in their mouth, and closes the meal with 'ごちそうさまでした' as they put the chopsticks down — the three-phrase arc that marks a meal as properly Japanese.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
