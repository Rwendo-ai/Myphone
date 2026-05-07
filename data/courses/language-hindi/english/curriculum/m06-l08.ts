import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l08-sau-hazaar',
  module: 6,
  lesson: 8,
  title: 'Sau, Hazaar, Lakh — Big Numbers',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "Now the big jumps. Sau = 100. Hazaar = 1,000. And then Indian numbering branches off from English — instead of 'million', Indians use 'lakh' (1,00,000 = 100,000) and 'crore' (1,00,00,000 = 10,000,000). And yes — those commas are right. Indian numbering groups TWO digits after the first three. '5,00,000' = paanch lakh. Train ticket prices are in hundreds and thousands; salaries are in lakhs; real estate, weddings, and cars are in crores.",
    culturalNote: "If an Indian says 'I earn 12 lakh', they mean 1,200,000 (12,00,000) per year. Property listed at '2 crore' is 20,000,000. The lakh-crore system isn't a quirk — it's the only way most Indians actually count big numbers, even when speaking English. Get this, and you can read any newspaper headline.",
  },

  chunks: [
    {
      id: 'sau_hazaar',
      target: 'सौ / हज़ार',
      native: 'Hundred / Thousand',
      literal: 'Sau (100), Hazaar (1,000)',
      emoji: '💯',
      phonetic: 'SOW / ha-ZAAR',
      audioRef: null,
    },
    {
      id: 'lakh',
      target: 'लाख',
      native: 'Lakh = 100,000 (1,00,000)',
      literal: 'Indian numbering: 2-digit grouping after thousand',
      emoji: '🔢',
      phonetic: 'LAAKH',
      audioRef: null,
    },
    {
      id: 'crore',
      target: 'करोड़',
      native: 'Crore = 10,000,000 (1,00,00,000)',
      literal: '100 lakh = 1 crore',
      emoji: '💎',
      phonetic: 'ka-ROR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Number + sau / hazaar / lakh / crore',
    explanation: "Same pattern as English: just put the number BEFORE the unit. Paanch sau = 500. Do hazaar = 2,000. Paanch lakh = 5,00,000 (500,000). Do crore = 2,00,00,000 (20,000,000). Note the Indian comma grouping: 1,00,000 not 100,000. After the first three digits from the right, you group in twos.",
    examples: [
      { target: 'Paanch sau rupaye', native: '500 rupees' },
      { target: 'Do hazaar rupaye', native: '2,000 rupees' },
      { target: 'Paanch lakh rupaye', native: '5,00,000 rupees (500,000)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi number-unit to its value',
      pairs: [
        { left: 'Sau', right: '100' },
        { left: 'Hazaar', right: '1,000' },
        { left: 'Lakh', right: '1,00,000 (100,000)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the unit',
      sentence: 'Ek crore = sau _____.',
      options: ['lakh', 'hazaar', 'sau'],
      correct: 'lakh',
      context: '1 crore = 100 lakh = 10,000,000.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'One thousand',
      correct: ['Ek hazaar', 'ek hazaar', 'Hazaar', 'hazaar'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend says her salary is 'baarah lakh per year'. How much is that in standard digits?",
      question: '12 lakh =',
      options: [
        { text: '12,00,000 (1,200,000)', correct: true },
        { text: '12,000', correct: false },
        { text: '1,20,000 (120,000)', correct: false },
      ],
      explanation: "1 lakh = 1,00,000. So 12 lakh = 12 × 1,00,000 = 12,00,000 = 1.2 million.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'The price is two thousand rupees'",
      words: ['Daam', 'do', 'hazaar', 'rupaye', 'hai.'],
      correct: ['Daam', 'do', 'hazaar', 'rupaye', 'hai.'],
      translation: 'The price is two thousand rupees',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'One hundred',
      correct: ['Ek sau', 'ek sau', 'Sau', 'sau'],
    },
  ],

  rwenDialogue: {
    intro: "At a Mumbai train ticket counter. The clerk quotes a price for a sleeper class ticket to Goa.",
    lines: [
      {
        speaker: 'npc',
        target: 'पाँच सौ पचास रुपये।',
        native: 'Five hundred fifty rupees.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paanch sau pachaas? Theek hai. Le lijiye.', native: 'Five hundred fifty? OK. Take them.', correct: true, feedback: "Repeated the price back in Hindi to confirm — clean, train-counter Hindi. Ticket printing." },
          { target: 'Five fifty', native: '550 (in English)', correct: false, feedback: "Stay in Hindi: 'Paanch sau pachaas? Theek hai.'" },
          { target: 'Mahanga hai, kam karo', native: "It's expensive, lower it (at a fixed-price counter)", correct: false, feedback: "Train fares are fixed — you can't bargain at the counter. Just confirm: 'Paanch sau pachaas? Theek hai.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Paanch sau pachaas. You bought a train ticket in Hindi. Goa awaits.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Thousand', correct: ['Hazaar', 'hazaar'] },
      { prompt: 'Lakh (= 100,000)', correct: ['Lakh', 'lakh'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three numbers from your real life — your monthly rent, a recent online order, your savings. Convert each to lakh/hazaar/sau in your head and say them out loud in Hindi. Build the lakh-instinct.",
    rwenSignoff: "Sau, hazaar, lakh, crore. The Indian number ladder. Phir milenge.",
  },

  phase8: {
    scenario: "At an IRCTC train ticket counter at Mumbai Central station. You're buying two sleeper-class tickets to Goa, and there are extra charges (tatkal, reservation fee) that the clerk lists in hundreds and thousands — you need to repeat each line item back in Hindi and confirm the total in 'do hazaar [number] sau' form without slipping into English digits.",
    rwenRole: "IRCTC ticket clerk, no patience for foreigners who don't know their numbers; he'll rattle off the breakdown fast in Hindi and only release tickets once you confirm the total back in correct sau/hazaar form.",
    successCriteria: "User confirms the full ticket price using sau and hazaar correctly (e.g. 'do hazaar paanch sau' for 2,500), repeats at least one line-item back without translating to English, and recognises 'lakh' if used (no Indian train ticket actually costs a lakh, but the clerk may test you).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
