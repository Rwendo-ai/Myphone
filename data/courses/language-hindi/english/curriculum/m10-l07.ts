import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-mubarak',
  module: 10,
  lesson: 7,
  title: 'Mubarak Ho — Congratulations',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Indians celebrate loudly. Births, exams, weddings, promotions, the smallest piece of good news — a thali of mithai appears within minutes. Today: the Hindi words that travel with that mithai. मुबारक हो (mubarak ho — congratulations) and the warmer compounds that turn good news into shared joy.",
    culturalNote: "'Mubarak' is Arabic-origin and arrived through Urdu — it now lives in everyday Hindi alongside the Sanskrit-origin 'badhaai'. 'Mubarak ho' has festival energy (Eid Mubarak, Diwali Mubarak); 'badhaai ho' is what relatives shout when a baby arrives. Use both freely — Hindi happily code-switches across centuries.",
  },

  chunks: [
    {
      id: 'mubarak_ho',
      target: 'मुबारक हो — Mubarak ho',
      native: 'Congratulations / Blessings on you',
      literal: 'Blessed be',
      emoji: '🎉',
      phonetic: 'mu-BAA-rak ho',
      audioRef: null,
    },
    {
      id: 'badhaai_ho',
      target: 'बधाई हो — Badhaai ho',
      native: 'Congratulations (warm, common)',
      literal: 'Increase / blessings be',
      emoji: '🎊',
      phonetic: 'ba-DHAAI ho',
      audioRef: null,
    },
    {
      id: 'aapko_dher_saari_shubhkaamnayein',
      target: 'आपको ढेर सारी शुभकामनाएं — Aapko dher saari shubhkaamnayein',
      native: 'My very best wishes to you',
      literal: 'You-to heap many good-wishes',
      emoji: '💐',
      phonetic: 'AAP-ko dher SAA-ree shubh-kaam-NA-ayn',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Celebration calibration — mubarak / badhaai / shubhkaamnayein',
    explanation: "Three flavours of good wishes. 'Mubarak ho' is festive — for festivals, milestones, anything you'd toast to. 'Badhaai ho' is family-warm — births, weddings, promotions where you hug. 'Shubhkaamnayein' is formal-elegant — for cards, speeches, work emails. Reach for the right shelf.",
    examples: [
      { target: 'Janamdin mubarak ho — जन्मदिन मुबारक हो', native: 'Happy birthday' },
      { target: 'Naya saal mubarak ho — नया साल मुबारक हो', native: 'Happy New Year' },
      { target: 'Nayi naukri ki badhaai ho — नई नौकरी की बधाई हो', native: 'Congratulations on the new job' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the celebration phrase to its meaning',
      pairs: [
        { left: 'Mubarak ho', right: 'Congratulations / Blessings' },
        { left: 'Badhaai ho', right: 'Congratulations (warm)' },
        { left: 'Shubhkaamnayein', right: 'Best wishes (formal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "It's your friend's birthday. Pick the right wish.",
      sentence: 'Janamdin _____ ho!',
      options: ['mubarak', 'pareshaan', 'thaka'],
      correct: 'mubarak',
      context: 'Happy birthday!',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Congratulations (warm, common)',
      correct: ['Badhaai ho', 'badhaai ho'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your colleague has just been promoted at work. You message him on the office Hindi WhatsApp group.",
      question: 'Right register for a colleague promotion:',
      options: [
        { text: 'Badhaai ho! Aapko dher saari shubhkaamnayein.', correct: true },
        { text: 'Mubarak ho yaar', correct: false },
        { text: 'Theek hai', correct: false },
      ],
      explanation: "'Badhaai ho' for the warmth + 'shubhkaamnayein' for the workplace formality covers both registers. 'Mubarak ho yaar' is fine between close friends, too casual for a work group.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Many congratulations on the new job'",
      words: ['Nayi', 'naukri', 'ki', 'bahut', 'badhaai', 'ho.'],
      correct: ['Nayi', 'naukri', 'ki', 'bahut', 'badhaai', 'ho.'],
      translation: 'Many congratulations on the new job',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'My very best wishes to you',
      correct: ['Aapko dher saari shubhkaamnayein', 'aapko dher saari shubhkaamnayein'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen turns the camera around — your cousin Aditi has just had a baby boy in Delhi and Rwen has put you on speakerphone with the family.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hum sab itne khush hain! Aap kya kahenge?',
        native: "We are all so happy! What will you say?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Badhaai ho! Bahut bahut badhaai ho! Aapko aur baccha dono ko dher saari shubhkaamnayein.', native: "Congratulations! Very many congratulations! Lots of best wishes to you and the baby both.", correct: true, feedback: "Warm 'badhaai ho' twice, formal 'shubhkaamnayein' for the wider family listening — perfect register layering. The whole room cheers." },
          { target: 'Theek hai', native: "Okay", correct: false, feedback: "It's a baby — bring the energy: 'Badhaai ho! Aapko dher saari shubhkaamnayein.'" },
          { target: 'Mujhe dukh hua', native: "I felt sad", correct: false, feedback: "Wrong emotion entirely — 'Badhaai ho! Bahut bahut badhaai ho!' Match the moment." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Khushiyaan baant ne se badhti hain — joy multiplies when shared. Aapne ek hi pal mein pura ghar gunjaa diya — you filled the whole house in one moment.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Congratulations (festive)', correct: ['Mubarak ho', 'mubarak ho'] },
      { prompt: 'Best wishes to you (formal)', correct: ['Aapko shubhkaamnayein', 'aapko shubhkaamnayein', 'Aapko dher saari shubhkaamnayein', 'aapko dher saari shubhkaamnayein'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Send someone good news a Hindi message today. 'Badhaai ho! Aapko dher saari shubhkaamnayein.' Make it specific — name the thing they did. Joy lands when it's seen.",
    rwenSignoff: "Khushiyaan baatne se badhti hain — happiness grows when shared. Phir milenge.",
  },

  phase8: {
    scenario: "Saturday morning at your friend Vikram's wedding reception in Jaipur. The receiving line is long, the auntie-network is watching, and Vikram pulls you in for a hug. You have one shot to congratulate him AND his new wife Priya in proper Hindi — warm, public, and culturally attuned.",
    rwenRole: "Vikram & Priya — newlyweds, mid-30s; the wider family is listening and judging your Hindi gently. Vikram will smile if you nail it; the aunties will nod if you choose the right register.",
    successCriteria: "User uses 'badhaai ho' (the warm wedding word, NOT just 'mubarak ho'), addresses BOTH bride and groom ('aap dono ko'), and adds 'dher saari shubhkaamnayein' for the formal-public layer the aunties are listening for. Three components, naturally chained.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
