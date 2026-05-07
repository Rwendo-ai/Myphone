import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-himmat-rakho',
  module: 10,
  lesson: 6,
  title: 'Himmat Rakho — Encouragement',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Hindi knows how to lift people. हिम्मत (himmat — courage), होंसला (honsla — spirit/morale), and the brilliant compound 'sab theek ho jayega' (everything will become okay) — these are the words Indian families pass between each other in hard weeks. Today you learn to give that lift in Hindi.",
    culturalNote: "Bollywood gave the world 'himmat rakho' for a reason — it's how a parent steadies a child before an exam, how a sibling holds another after a heartbreak, how a friend ends a long phone call. Said with eye contact and a hand on the shoulder, it does what English 'you got this' can't quite reach.",
  },

  chunks: [
    {
      id: 'himmat_rakho',
      target: 'हिम्मत रखो — Himmat rakho',
      native: 'Have courage / Hold on',
      literal: 'Courage keep (informal)',
      emoji: '💪',
      phonetic: 'HIM-mat RA-kho',
      audioRef: null,
    },
    {
      id: 'sab_theek_ho_jayega',
      target: 'सब ठीक हो जाएगा — Sab theek ho jayega',
      native: 'Everything will be okay',
      literal: 'Everything okay become will',
      emoji: '🌅',
      phonetic: 'SUB THEEK ho ja-YE-ga',
      audioRef: null,
    },
    {
      id: 'aap_kar_sakte_hain',
      target: 'आप कर सकते हैं — Aap kar sakte hain',
      native: 'You can do it (formal)',
      literal: 'You do can are',
      emoji: '🌟',
      phonetic: 'AAP kar SAK-tay hain',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Imperative encouragement — rakho/karo (informal) vs rakhiye/kijiye (formal)',
    explanation: "Hindi imperatives change with respect. To a friend: 'himmat rakho', 'karo!'. To an elder or stranger: 'himmat rakhiye', 'kariye!'. The rhythm changes too — informal commands are quick, formal ones are slower and softer. Match the form to the relationship or the encouragement misfires.",
    examples: [
      { target: 'Himmat rakho — हिम्मत रखो', native: 'Have courage (to a friend)' },
      { target: 'Himmat rakhiye — हिम्मत रखिये', native: 'Have courage (formal — to elder)' },
      { target: 'Sab theek ho jayega — सब ठीक हो जाएगा', native: 'Everything will be okay' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the encouragement phrase to its meaning',
      pairs: [
        { left: 'Himmat rakho', right: 'Have courage / Hold on' },
        { left: 'Sab theek ho jayega', right: 'Everything will be okay' },
        { left: 'Aap kar sakte hain', right: 'You can do it (formal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Encourage a respected elder before a hospital visit',
      sentence: 'Himmat _____, sab theek ho jayega.',
      options: ['rakhiye', 'rakho', 'rakhna'],
      correct: 'rakhiye',
      context: 'Have courage (formal), everything will be okay.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Everything will be okay',
      correct: ['Sab theek ho jayega', 'sab theek ho jayega'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your younger cousin is panicking before her board exam. Best line?",
      question: 'Encourage a nervous young cousin:',
      options: [
        { text: 'Himmat rakho! Tum kar sakti ho. Sab theek ho jayega.', correct: true },
        { text: 'Mujhe gussa aaya', correct: false },
        { text: 'Main udaas hoon', correct: false },
      ],
      explanation: "'Himmat rakho! Tum kar sakti ho. Sab theek ho jayega.' — courage + capability + reassurance, all in informal register because she's younger family. Three short sentences are enough.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Don't worry, you can do it'",
      words: ['Pareshaan', 'mat', 'ho,', 'aap', 'kar', 'sakte', 'hain.'],
      correct: ['Pareshaan', 'mat', 'ho,', 'aap', 'kar', 'sakte', 'hain.'],
      translation: "Don't worry, you can do it (formal)",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Have courage (informal — to friend)',
      correct: ['Himmat rakho', 'himmat rakho'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen confesses something — there was a moment in this curriculum he wasn't sure you'd make it. He wants to know if you ever felt that way.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Sach kahoon, Module 4 mein mujhe laga aap ruk jayenge. Lekin aap nahin ruke. Aapne himmat rakhi.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sach mein, mujhe bhi laga tha. Lekin aapne kaha "himmat rakho" — aur main yahan hoon. Sab theek ho gaya.', native: 'Truly, I felt that too. But you said "have courage" — and here I am. Everything became okay.', correct: true, feedback: "You named the doubt, named the lift, named the arrival. That's the full encouragement arc told back in Hindi." },
          { target: 'Main khush hoon', native: 'I am happy', correct: false, feedback: "Tell the journey — 'Sach mein, mujhe bhi laga tha. Aapne kaha himmat rakho — aur main yahan hoon.'" },
          { target: 'Theek hai', native: "It's fine", correct: false, feedback: "Receive the moment — 'Sach mein, mujhe bhi laga tha. Lekin aapne himmat di. Sab theek ho gaya.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Himmat-e-marda, madad-e-Khuda — courage of the brave, help from the divine. Aapki himmat ne aapko yahaan tak laaya.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Have courage (informal)', correct: ['Himmat rakho', 'himmat rakho'] },
      { prompt: 'Everything will be okay', correct: ['Sab theek ho jayega', 'sab theek ho jayega'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Send someone three Hindi sentences today: 'Himmat rakho. Aap kar sakte hain. Sab theek ho jayega.' Pick someone who's quietly struggling. Watch the message land.",
    rwenSignoff: "Hausla bulund rakho — keep your spirit high. Phir milenge.",
  },

  phase8: {
    scenario: "Tuesday afternoon. Your niece Anika just called crying — her IIT-JEE results are out tomorrow and she's spiralling. She's 17, family-close, and English isn't going to reach her right now. You have ninety seconds in Hindi to put her on her feet.",
    rwenRole: "Anika — your niece, 17, smart and breaking; she doesn't need a lecture about effort, she needs a short, strong injection of himmat from someone she trusts.",
    successCriteria: "User uses informal 'rakho/karo' (NOT formal 'rakhiye' which would feel cold to family), names her capability ('tum kar sakti ho' with feminine agreement), AVOIDS the empty 'sab theek hai' (denial), and ideally chains 'himmat rakho' + 'sab theek ho jayega' so she walks away lifted.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
