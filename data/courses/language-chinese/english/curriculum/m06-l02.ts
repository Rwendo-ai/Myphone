import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numbers-20-100',
  module: 6,
  lesson: 2,
  title: 'Èr-shí to Yì-bǎi — Tens and Hundreds',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Here's where Mandarin embarrasses English. Twenty isn't 'twenty' — it's 'two-ten' (èr-shí). Thirty is 'three-ten' (sānshí). Fifty? 'Five-ten' (wǔshí). The system is so logical you'll wonder why English is the way it is.",
    culturalNote: "Mandarin numbers above ten are pure arithmetic. 25 = 'two-ten-five' (èrshí wǔ). 99 = 'nine-ten-nine' (jiǔshí jiǔ). 100 = 'one-hundred' (yìbǎi — note the tone shift on yī). Compare to English's irregular 'twenty, thirty, fifty' or French's 'quatre-vingt-dix' for ninety. Mandarin won this round.",
  },

  chunks: [
    {
      id: 'er_shi',
      target: 'Èr-shí',
      native: 'Twenty (literally: two-ten)',
      literal: '(二十) — 2 × 10. 21 is just èrshí yī, 25 is èrshí wǔ',
      emoji: '2️⃣0️⃣',
      phonetic: 'AR-SHRR (èr falling, shí rising)',
      audioRef: null,
    },
    {
      id: 'wu_shi',
      target: 'Wǔshí',
      native: 'Fifty (literally: five-ten)',
      literal: '(五十) — 5 × 10. Same builder pattern: just stick the digit before shí',
      emoji: '5️⃣0️⃣',
      phonetic: 'WOO-SHRR (wǔ dipping, shí rising)',
      audioRef: null,
    },
    {
      id: 'yi_bai',
      target: 'Yìbǎi',
      native: 'One hundred',
      literal: '(一百) — note: yī becomes yì (falling) before bǎi (dipping). Tone sandhi',
      emoji: '💯',
      phonetic: 'EE-BYE (yì falling, bǎi dipping)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The 10×N system',
    explanation: "Every multiple of ten = digit + shí. Every number between = (digit + shí) + remaining digit. So 47 = sìshí qī (4-10-7). No 'forty-seven' irregularities. No 'soixante-dix' madness. Just: digit, ten, digit.",
    examples: [
      { target: 'sānshí (三十)', native: '30 = three-ten' },
      { target: 'sānshí qī (三十七)', native: '37 = three-ten-seven' },
      { target: 'jiǔshí jiǔ (九十九)', native: '99 = nine-ten-nine' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Mandarin to the number',
      pairs: [
        { left: 'èr-shí', right: '20' },
        { left: 'wǔshí', right: '50' },
        { left: 'yìbǎi', right: '100' },
        { left: 'qīshí', right: '70' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type the Mandarin (pinyin or characters). Tones optional.',
      prompt: 'Thirty (in Mandarin)',
      correct: ['sānshí', 'sanshi', 'sān shí', 'san shi', 'Sānshí', '三十'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the number: 45 in Mandarin',
      sentence: '_____ wǔ',
      options: ['sìshí', 'wǔshí', 'sānshí'],
      correct: 'sìshí',
      context: '45 = four-ten-five = sìshí wǔ. The tens digit comes first, then the ones digit.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build the number 67 in Mandarin',
      words: ['shí', 'qī', 'liù'],
      correct: ['liù', 'shí', 'qī'],
      translation: '67 — six-ten-seven (liùshí qī)',
    },
    {
      type: 'translate',
      instruction: 'Type in pinyin or characters',
      prompt: 'One hundred',
      correct: ['yìbǎi', 'yibai', 'yì bǎi', 'yi bai', 'Yìbǎi', '一百'],
    },
    {
      type: 'multiple_choice',
      instruction: 'How would you say 88 in Mandarin?',
      question: 'Pick the correct number',
      options: [
        { text: 'bāshí bā (八十八)', correct: true },
        { text: 'bā bā shí (八八十)', correct: false },
        { text: 'shí bā bā (十八八)', correct: false },
      ],
      explanation: "88 = eight-ten-eight = bāshí bā. Tens digit first, then ones. 88 is also extremely lucky in China — double the prosperity.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a Beijing taxi rank during rush hour. The driver wants to know which floor of your hotel you're heading to — addresses often go by floor number in apartment blocks.",
    lines: [
      {
        speaker: 'npc',
        target: 'Jǐ lóu?',
        native: 'Which floor?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Èrshí wǔ lóu', native: 'Floor 25', correct: true, feedback: 'Crisp — èrshí wǔ. He punches it into the GPS.' },
          { target: 'Èr-wǔ lóu', native: '(wrong — missing shí)', correct: false, feedback: "Don't drop 'shí'. 'Èr-wǔ' isn't 25, it's just 'two-five' — meaningless as a number." },
          { target: 'Wǔ-èr lóu', native: 'Floor 52', correct: false, feedback: "You flipped the digits. Tens-first in Mandarin — 25 is èrshí wǔ, not wǔshí èr (which is 52)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Hǎo, èrshí wǔ — zǒu',
        native: 'Got it, 25 — let\'s go',
      },
      {
        speaker: 'rwen',
        rwenLine: "You communicated a floor number to a Beijing taxi driver. That's real-world Mandarin — not flashcards. Notice how clean the number was? 'Èrshí wǔ' just is 25.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Sixty (in Mandarin pinyin)',
        correct: ['liùshí', 'liushi', 'liù shí', 'liu shi', '六十'],
      },
      {
        prompt: 'One hundred',
        correct: ['yìbǎi', 'yibai', 'yì bǎi', 'yi bai', '一百'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three numbers from your real life — your age, your house number, your apartment floor — and say them out loud in Mandarin. Use the 10×N pattern. If they're under 100, you've got everything you need.",
    rwenSignoff: "The system is yours now. Counting up to 99 in three minutes flat. Wǎn'ān — goodnight.",
  },

  phase8: {
    scenario: "Friday evening, 6pm. You're at a Beijing taxi rank in Sanlitun — the line is long, drivers honking. Finally a cab pulls up. Driver asks which hotel and which floor. He's tired and wants efficiency, not chit-chat.",
    rwenRole: "Driver Wáng (王师傅) — Beijing taxi driver, 50s, gruff but fair. Speaks fast Mandarin with a Beijing accent (lots of 'r' endings). Will repeat numbers back to confirm.",
    successCriteria: "User states a hotel name (any) plus a floor number between 20 and 99 using the 10×N pattern (e.g., 'sìshí bā lóu' = floor 48). Driver may test with a follow-up: 'Duōshao lóu? Zài shuō yī cì' (which floor? say again).",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
