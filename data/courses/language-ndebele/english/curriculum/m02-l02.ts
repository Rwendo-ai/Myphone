import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l02',
  module: 2,
  lesson: 2,
  title: 'Yebo, Hatshi, Ngiyabonga — Yes, No, Thanks',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three little words run more Ndebele conversations than any others. 'Yebo' (yes), 'Hatshi' (no), and 'Ngiyabonga' (thank you). Lock them in today and you can survive ninety percent of small interactions even if the rest of your sentence falls apart.",
    culturalNote: "'Ngiyabonga' isn't optional politeness — it's the receipt that closes a transaction. People notice when foreigners say it well. The 'ng-' at the front is a real consonant, not silent. Lean on it: ng-ee-yah-BON-gah. The double thanks 'ngiyabonga kakhulu' (thank you very much) is what you give to someone who's gone out of their way.",
  },

  chunks: [
    {
      id: 'yebo',
      target: 'Yebo',
      native: 'Yes',
      literal: 'Yes — also doubles as a soft "hello back"',
      emoji: '✅',
      phonetic: 'YEH-boh',
      audioRef: null,
    },
    {
      id: 'hatshi',
      target: 'Hatshi',
      native: 'No',
      literal: 'Hatshi — straightforward "no"',
      emoji: '🚫',
      phonetic: 'HAH-tshee',
      audioRef: null,
    },
    {
      id: 'ngiyabonga',
      target: 'Ngiyabonga',
      native: 'Thank you',
      literal: 'I am thanking (you)',
      emoji: '🙏',
      phonetic: 'ng-ee-yah-BON-gah',
      audioRef: null,
    },
    {
      id: 'ngiyabonga_kakhulu',
      target: 'Ngiyabonga kakhulu',
      native: 'Thank you very much',
      literal: 'I am thanking (you) a lot',
      emoji: '🌟',
      phonetic: 'ng-ee-yah-BON-gah kah-KHOO-loo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Survival trio: Yebo / Hatshi / Ngiyabonga',
    explanation: "These three close almost any small interaction. 'Yebo' confirms or accepts. 'Hatshi' declines softly. 'Ngiyabonga' closes the loop after you receive anything — directions, change, a smile. Add 'kakhulu' (a lot) to upgrade thanks when someone really helped you.",
    examples: [
      { target: 'Yebo, ngiyabonga.', native: 'Yes, thank you.' },
      { target: 'Hatshi, ngiyabonga.', native: 'No, thank you. (declining politely)' },
      { target: 'Ngiyabonga kakhulu.', native: 'Thank you very much.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the word to its meaning',
      pairs: [
        { left: 'Yebo', right: 'Yes' },
        { left: 'Hatshi', right: 'No' },
        { left: 'Ngiyabonga', right: 'Thank you' },
        { left: 'Kakhulu', right: 'Very much / a lot' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'A vendor at the market hands you change you weren\'t expecting. What do you say?',
      question: 'Pick the strongest fit',
      options: [
        { text: 'Ngiyabonga kakhulu', correct: true },
        { text: 'Hatshi', correct: false },
        { text: 'Yebo', correct: false },
      ],
      explanation: "'Ngiyabonga kakhulu' (thank you very much) marks that you noticed and appreciated the extra effort. 'Ngiyabonga' alone would also work — but kakhulu is the warm upgrade.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "No, thank you" (politely declining)',
      words: ['ngiyabonga', 'Hatshi', 'kakhulu'],
      correct: ['Hatshi', 'ngiyabonga'],
      translation: 'No, thank you',
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'Thank you very much',
      correct: ['Ngiyabonga kakhulu', 'ngiyabonga kakhulu'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a fruit stall. The vendor — a woman in her 40s — has just bagged your tomatoes and is asking if you want bananas too. You don't. End the interaction warmly.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ufuna lamabhanana?',
        native: 'Do you want bananas too?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hatshi, ngiyabonga.', native: 'No, thank you.', correct: true, feedback: "Clean decline. 'Hatshi' alone would be blunt — pairing it with 'ngiyabonga' softens it perfectly." },
          { target: 'Hatshi.', native: 'No.', correct: false, feedback: "Bare 'hatshi' is technically fine but reads cold. Always pair a no with a thanks if someone offered you something." },
          { target: 'Yebo.', native: 'Yes.', correct: false, feedback: "You don't actually want bananas — and now she's bagging them. Confirm with care." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Kulungile. Nansi imali yakho.',
        native: 'Alright. Here is your change.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga kakhulu.', native: 'Thank you very much.', correct: true, feedback: "Warm closer. The kakhulu makes her smile — small thing, big signal." },
          { target: 'Yebo.', native: 'Yes.', correct: false, feedback: "Yebo isn't wrong-wrong, but receiving change calls for a thanks, not a confirmation." },
          { target: 'Hatshi.', native: 'No.', correct: false, feedback: "She's handing you change. 'No' to that is confusing." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Three words. You just declined politely AND closed warmly. That's a full Ndebele transaction.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Yes', correct: ['Yebo', 'yebo'] },
      { prompt: 'No', correct: ['Hatshi', 'hatshi'] },
      { prompt: 'Thank you very much', correct: ['Ngiyabonga kakhulu', 'ngiyabonga kakhulu'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'Ngiyabonga' three times today — even mixed into English sentences. Once with the person who hands you anything (coffee, change, a parcel). Notice the small shift in how they look at you.",
    rwenSignoff: "Yebo, hatshi, ngiyabonga. Three keys. Sala kuhle.",
  },

  phase8: {
    scenario: "You're at a vegetable stand at Bulawayo's Renkini terminus on a Saturday morning. The vendor offers you tomatoes (you want them), then bananas (you don't), then asks if you also need spinach (you don't). Practice navigating yes / no / thanks naturally without going silent.",
    rwenRole: "Mama Ncube — early 40s vegetable vendor, friendly, a bit chatty, will keep offering things until you decline clearly; warms up the moment you say 'ngiyabonga' with feeling.",
    successCriteria: "User uses 'Yebo' to confirm tomatoes, 'Hatshi, ngiyabonga' (NOT bare 'hatshi') for the things they decline, and closes with 'Ngiyabonga kakhulu' when receiving change.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
