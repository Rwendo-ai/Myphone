import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-mahine',
  module: 6,
  lesson: 5,
  title: 'Baarah Mahine — Months of the Year',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hindi has TWO sets of month names. The traditional Hindu calendar uses Chaitra, Vaishakh, Jyeshtha — beautiful, ancient, tied to harvests and festivals. But for everyday life — train tickets, salary slips, school calendars — Indians use the Gregorian months in their Hindi-pronounced form: Janvari, Farvari, Maarch, Aprail. Today we lock in the everyday set, and meet a few traditional names you'll hear at festival time.",
    culturalNote: "The Hindu calendar drives festivals: Diwali falls in Kartik, Holi in Phaalgun, Pongal in Magh. But banks, offices, and trains all run on Janvari–Disambar. Most Indians switch fluidly between the two — knowing the Western set keeps you operational; recognising the traditional ones earns you cultural points.",
  },

  chunks: [
    {
      id: 'janvari_farvari_maarch',
      target: 'जनवरी / फरवरी / मार्च',
      native: 'January / February / March',
      literal: 'Janvari, Farvari, Maarch — Hindi-pronounced Gregorian',
      emoji: '🌸',
      phonetic: 'JAN-va-ri / FAR-va-ri / MAARCH',
      audioRef: null,
    },
    {
      id: 'june_july_august',
      target: 'जून / जुलाई / अगस्त',
      native: 'June / July / August',
      literal: 'June, Julaai, Agast',
      emoji: '☀️',
      phonetic: 'JOON / ju-LAA-i / A-gast',
      audioRef: null,
    },
    {
      id: 'kartik_phaalgun',
      target: 'कार्तिक / फाल्गुन',
      native: 'Kartik (Diwali month) / Phaalgun (Holi month)',
      literal: 'Traditional Hindu calendar names',
      emoji: '🪔🎨',
      phonetic: 'KAAR-tik / PHAAL-gun',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Use mein for "in [month]"',
    explanation: "To say 'in [month]', add 'mein' after the month: Janvari mein (in January), Disambar mein (in December). For Hindu-calendar months, same rule: Kartik mein Diwali hoti hai (Diwali happens in Kartik). Use the everyday Gregorian names by default; pull out traditional names for festivals.",
    examples: [
      { target: 'Janvari mein thand hoti hai.', native: 'It is cold in January.' },
      { target: 'Mera birthday Maarch mein hai.', native: 'My birthday is in March.' },
      { target: 'Kartik mein Diwali hoti hai.', native: 'Diwali is in Kartik (October–November).' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi month to its English equivalent',
      pairs: [
        { left: 'Janvari', right: 'January' },
        { left: 'Julaai', right: 'July' },
        { left: 'Kartik', right: 'Diwali month (Oct–Nov)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Say 'in March'",
      sentence: 'Maarch _____.',
      options: ['mein', 'ko', 'par'],
      correct: 'mein',
      context: "Use the right preposition for 'in [month]'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'January',
      correct: ['Janvari', 'janvari'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why does Hindi have TWO sets of month names?",
      question: "Which is true?",
      options: [
        { text: 'Hindu calendar months (Kartik, Phaalgun) for festivals + Gregorian months (Janvari, Maarch) for daily life', correct: true },
        { text: 'There is only one set; the others are dialect variants', correct: false },
        { text: 'Modern Hindi has dropped the traditional names entirely', correct: false },
      ],
      explanation: "Both sets are alive. Festivals run on the Hindu calendar; trains, schools and banks run on Janvari–Disambar.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'My birthday is in March'",
      words: ['Mera', 'birthday', 'Maarch', 'mein', 'hai.'],
      correct: ['Mera', 'birthday', 'Maarch', 'mein', 'hai.'],
      translation: 'My birthday is in March',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'July',
      correct: ['Julaai', 'julaai'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks about your birthday and which Indian festival you'd most want to see.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Tumhara birthday kis mahine mein hai? Aur kaunsa Indian festival dekhna chahoge?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mera birthday Maarch mein hai. Main Diwali Kartik mein dekhna chahta hoon.', native: "My birthday is in March. I want to see Diwali in Kartik.", correct: true, feedback: "Birthday + festival, both with the right month names. Rwen smiles." },
          { target: 'Mera birthday March hai', native: 'My birthday is March (no mein, no Hindi pronunciation)', correct: false, feedback: "Add 'mein' and use the Hindi pronunciation: 'Mera birthday Maarch mein hai.'" },
          { target: 'Pata nahin', native: "I don't know my birthday", correct: false, feedback: "You know it — 'Mera birthday [month] mein hai'. Pick your month." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bahut accha! Maarch mein. Kartik mein Diwali. Tumne dono calendars use kiye.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'January', correct: ['Janvari', 'janvari'] },
      { prompt: 'July', correct: ['Julaai', 'julaai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say your birth month in Hindi using 'mein': 'Mera birthday [month] mein hai'. Then name the current month in Hindi. If you can, recall one traditional name (Kartik for Diwali, Phaalgun for Holi).",
    rwenSignoff: "Two calendars, one country. Phir milenge.",
  },

  phase8: {
    scenario: "Chatting with your colleague's mother in Lucknow over WhatsApp. She wants to invite you for a festival visit and asks which months of the year you can travel — she names festival timings using BOTH the Hindi-Gregorian and Hindu calendar names, and you need to volunteer your own birth month and travel windows in Hindi.",
    rwenRole: "Auntie-ji from Lucknow, mid-60s, warm and curious; she'll bridge between Hindi-Gregorian and Hindu calendar names freely, and she expects you to name at least Janvari–Disambar months back without dropping into English.",
    successCriteria: "User uses '[month] mein' to state their birth month and at least one travel window (e.g. 'Maarch mein' or 'Julaai mein'), recognises at least one traditional name like Kartik (Diwali) or Phaalgun (Holi), and avoids the English month names entirely.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
