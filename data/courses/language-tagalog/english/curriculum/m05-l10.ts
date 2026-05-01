import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-conversation',
  module: 5,
  lesson: 10,
  title: 'Family Conversation — Talking Pamilya',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "You've earned this lesson. Nanay, Tatay, Kuya, Ate, Lolo, Lola, Tito, Tita, biyenan, tropa, namimiss kita — the whole pamilya is now in your mouth. Today we put it all together. One full Filipino family conversation, top to bottom.",
    culturalNote: "When Filipinos meet, they don't ask 'what do you do?' — they ask 'kumusta ang pamilya?' (how is the family?). Family is the first conversation, every time. Pass this lesson and you can hold that conversation.",
  },

  chunks: [
    {
      id: 'kumusta_ang_pamilya',
      target: 'Kumusta ang pamilya?',
      native: 'How is the family?',
      literal: 'How (the) family?',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'ku-MUS-ta ang pa-MIL-ya',
      audioRef: null,
    },
    {
      id: 'masaya_ang_pamilya_ko',
      target: 'Masaya ang pamilya ko',
      native: 'My family is happy',
      literal: 'Happy (the) family my',
      emoji: '😊',
      phonetic: 'ma-SA-ya ang pa-MIL-ya ko',
      audioRef: null,
    },
    {
      id: 'mahal_ko_ang_pamilya_ko',
      target: 'Mahal ko ang pamilya ko',
      native: 'I love my family',
      literal: 'Loved by-me (the) family my',
      emoji: '💖',
      phonetic: 'ma-HAL ko ang pa-MIL-ya ko',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Putting it all together — full family talk',
    explanation: "A full Filipino family conversation flows: greeting → 'kumusta ang pamilya?' → naming family members with the right titles → sharing how they are → ending with feeling ('mahal ko sila' / 'namimiss ko sila'). You now have every piece.",
    examples: [
      { target: 'Kumusta ang pamilya mo?', native: 'How is your family?' },
      { target: 'Masaya ang pamilya ko — may dalawang anak ako, isang Kuya, isang Bunso.', native: 'My family is happy — I have two kids, an older brother and a youngest.' },
      { target: 'Namimiss ko ang Lola ko, pero mahal ko sila lahat.', native: 'I miss my Lola, but I love them all.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each Tagalog word from this module to its meaning',
      pairs: [
        { left: 'Nanay', right: 'Mum' },
        { left: 'Lola', right: 'Grandmother' },
        { left: 'Tito', right: 'Uncle / older man' },
        { left: 'Tropa', right: 'Squad / close friends' },
        { left: 'Namimiss kita', right: 'I miss you' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You meet a new Filipino friend. After "kumusta ka?" they ask the next classic question.',
      sentence: 'Kumusta ang _____ mo?',
      options: ['pamilya', 'tropa', 'apo'],
      correct: 'pamilya',
      context: "'Kumusta ang pamilya mo?' = 'How is your family?' — the second question in every Filipino conversation.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I love my family.',
      correct: ['Mahal ko ang pamilya ko.', 'mahal ko ang pamilya ko', 'Mahal ko ang pamilya ko'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words: "My family is happy"',
      words: ['ang', 'ko', 'pamilya', 'Masaya'],
      correct: ['Masaya', 'ang', 'pamilya', 'ko'],
      translation: 'My family is happy.',
    },
    {
      type: 'multiple_choice',
      instruction: 'A Filipino colleague greets you on Monday and asks about your weekend. After "kumusta ka?", what\'s likely the next question?',
      question: 'Pick the most natural follow-up',
      options: [
        { text: 'Kumusta ang pamilya mo?', correct: true },
        { text: 'Magkano ang sapatos mo?', correct: false },
        { text: 'Saan ang biyenan mo?', correct: false },
      ],
      explanation: "'Kumusta ang pamilya mo?' is the universal Filipino follow-up. Family is always the second question.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog — full sentence from memory',
      prompt: "I miss my grandmother.",
      correct: ['Namimiss ko ang Lola ko.', 'namimiss ko ang lola ko', 'Namimiss ko ang lola ko.'],
    },
  ],

  rwenDialogue: {
    intro: "It's a sunny Saturday at a Manila fiesta. Tita Marissa hands you a plate of pancit and sits down. 'So,' she says, 'kumusta ang pamilya mo?' Tell her about your whole pamilya.",
    lines: [
      {
        speaker: 'npc',
        target: 'Kumusta ang pamilya mo?',
        native: 'How is your family?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Masaya po ang pamilya ko. May Nanay ako, Tatay, isang Kuya, at isang Bunso. Namimiss ko ang Lola ko sa probinsya, pero mahal ko sila lahat.', native: 'My family is happy. I have a mum, dad, an older brother, and a youngest. I miss my Lola in the province, but I love them all.', correct: true, feedback: 'Outstanding. You held a full Filipino family conversation. This is fluency starting.' },
          { target: 'Mabuti ako.', native: "I'm fine.", correct: false, feedback: "She asked about your family, not you. Use the family vocab you've built.", },
          { target: 'Tropa ang Nanay ko.', native: 'My mum is my squad.', correct: false, feedback: "Mixed signals — Nanay is your mum, tropa is your friends. Keep them separate." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Naku, ang sweet mo. Pati ako, namimiss ko ang Lola ko.',
        native: "Oh, how sweet. Me too — I miss my Lola.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Tulad ng pamilya na po kayo sa akin, Tita.', native: "You're like family to me already, Tita.", correct: true, feedback: "She's tearing up. You just made yourself her family." },
          { target: 'Salamat, biyenan.', native: 'Thanks, in-law.', correct: false, feedback: "She's not your in-law — she's your Tita. Try again." },
          { target: 'Hindi ko alam.', native: "I don't know.", correct: false, feedback: 'Lean into the warmth — that\'s what Filipino family conversation is for.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ten lessons. One module. A whole family in Tagalog. You can now sit at any Filipino dinner table and hold your own. Salamat sa pagsabay sa akin — thank you for walking with me.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — the keystones of this whole module.',
    prompts: [
      { prompt: 'How is your family? (in Tagalog)', correct: ['Kumusta ang pamilya mo?', 'kumusta ang pamilya mo', 'Kumusta ang pamilya mo'] },
      { prompt: 'I love my family. (in Tagalog)', correct: ['Mahal ko ang pamilya ko.', 'mahal ko ang pamilya ko', 'Mahal ko ang pamilya ko'] },
    ],
  },

  mission: {
    title: "Today's Journey — Module 5 Finale",
    task: "Hold a tiny family conversation today — with anyone, in your head, even with Rwen. Ask 'Kumusta ang pamilya?' Answer 'Masaya ang pamilya ko.' Add one Kuya, one Lola, one namimiss. Use the whole module in 60 seconds.",
    rwenSignoff: "You did it. Module 5 — pamilya — complete. Ingat ka palagi — take care always.",
  },

  phase8: {
    scenario: "It's a Manila fiesta. Tita Marissa hands you pancit and asks 'kumusta ang pamilya mo?' This is the full conversation — family members, feelings, a memory, a sign-off. Everything you've learned in Module 5.",
    rwenRole: "Tita Marissa — warm Filipina in her late 50s, asks about every family member by category (Nanay, Tatay, kapatid, Lola), expects you to use Kuya/Ate/Tito/Tita correctly, and will end the chat by asking when you'll bumisita again.",
    successCriteria: "User answers 'kumusta ang pamilya?', names at least 4 family members using correct titles (Nanay/Tatay/Kuya/Ate/Lolo/Lola/Bunso/Pinsan), uses 'namimiss ko' or 'mahal ko' to express feeling, and addresses Marissa as 'Tita' with 'po' throughout. Bonus: uses 'noong bata pa ako' or 'tulad ng pamilya'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
