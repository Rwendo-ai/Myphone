import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l06-rupaye',
  module: 6,
  lesson: 6,
  title: 'Rupaye — Talking About Money',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Money in India is rupaye (₹). The word 'paisa' technically means 1/100 of a rupee, but conversationally 'paisa' often just means 'money' — like 'cash'. 'Mere paas paise hain' = 'I have money'. The grammar to remember is the possession structure: things don't belong to you — they live NEAR you. 'Mere paas X hai' = 'X is near me' = 'I have X'.",
    culturalNote: "UPI (Google Pay, PhonePe, Paytm) has rewired Indian transactions — even chai stalls have QR codes. But the LANGUAGE of money — paise, rupaye, sasta, mahanga — is unchanged. Knowing 'mere paas itne paise hain' (I have this much money) keeps you in control of every shop, auto, and stall.",
  },

  chunks: [
    {
      id: 'paise',
      target: 'पैसे / रुपये',
      native: 'Money / Rupees',
      literal: 'Paise (money/cash colloquially), Rupaye (rupees — the currency unit)',
      emoji: '💰',
      phonetic: 'PAI-say / RU-pa-yay',
      audioRef: null,
    },
    {
      id: 'mere_paas',
      target: 'मेरे पास पैसे हैं',
      native: 'I have money',
      literal: 'My near money are = I have money',
      emoji: '💵',
      phonetic: 'ME-ray PAAS PAI-say HAIN',
      audioRef: null,
    },
    {
      id: 'paas_nahin',
      target: 'मेरे पास पैसे नहीं हैं',
      native: "I don't have money",
      literal: 'My near money not are',
      emoji: '💸',
      phonetic: 'ME-ray PAAS PAI-say na-HEEN HAIN',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Mere paas X hai" — the Hindi possession structure',
    explanation: "Hindi doesn't really use a verb 'to have'. Instead: 'Mere paas X hai' literally means 'X is near me' — and that means 'I have X'. To negate: add 'nahin' before 'hai/hain'. The number of the thing decides hai (singular) vs hain (plural).",
    examples: [
      { target: 'Mere paas das rupaye hain.', native: 'I have ten rupees.' },
      { target: 'Mere paas paise nahin hain.', native: "I don't have money." },
      { target: 'Mere paas bees rupaye hain.', native: 'I have twenty rupees.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the money phrase to its meaning',
      pairs: [
        { left: 'Paise', right: 'Money' },
        { left: 'Mere paas paise hain', right: 'I have money' },
        { left: 'Mere paas paise nahin hain', right: "I don't have money" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Say 'I don't have money'",
      sentence: 'Mere paas paise _____ hain.',
      options: ['nahin', 'kya', 'kab'],
      correct: 'nahin',
      context: 'You cannot pay right now.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Money / cash (the everyday word)',
      correct: ['Paise', 'paise'],
    },
    {
      type: 'multiple_choice',
      instruction: "How does Hindi say 'I have ten rupees'?",
      question: 'I have ten rupees:',
      options: [
        { text: 'Mere paas das rupaye hain', correct: true },
        { text: 'Main das rupaye rakhta hoon', correct: false },
        { text: 'Das rupaye mera hai', correct: false },
      ],
      explanation: "Hindi possession is 'mere paas X hain' — literally 'near me X are'. There is no straightforward 'I have' verb.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I don't have money today'",
      words: ['Mere', 'paas', 'aaj', 'paise', 'nahin', 'hain.'],
      correct: ['Mere', 'paas', 'aaj', 'paise', 'nahin', 'hain.'],
      translation: "I don't have money today",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "I have ten rupees",
      correct: ['Mere paas das rupaye hain', 'mere paas das rupaye hain'],
    },
  ],

  rwenDialogue: {
    intro: "At a Delhi street stall. The vendor names a price. Confirm whether you can pay.",
    lines: [
      {
        speaker: 'npc',
        target: 'पाँच रुपये।',
        native: 'Five rupees.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mere paas paanch rupaye hain. Le lijiye.', native: "I have five rupees. Take them.", correct: true, feedback: "Confirmed money + handed over. Smooth, complete transaction in Hindi." },
          { target: 'Mere paas paise nahin hain', native: "I don't have money", correct: false, feedback: "But you do — say 'Mere paas paanch rupaye hain' and pay." },
          { target: 'Five rupees', native: 'Five rupees (in English)', correct: false, feedback: "Stay in Hindi: 'Mere paas paanch rupaye hain'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Mere paas paanch rupaye hain. You confirmed your money in Hindi. Vendor's already next-customer.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Money (the everyday word)', correct: ['Paise', 'paise'] },
      { prompt: "I don't have money", correct: ['Mere paas paise nahin hain', 'mere paas paise nahin hain'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Right now, count the cash in your wallet (any currency). Say it in Hindi: 'Mere paas [number] [currency] hain.' Even if it's not rupaye, the structure is what you're locking in.",
    rwenSignoff: "Paise. Rupaye. Mere paas. The grammar of money lives here. Phir milenge.",
  },

  phase8: {
    scenario: "Outside a Mumbai bus stop, you're trying to buy a packet of biscuits from a small kirana stall. The shopkeeper quotes a number in rupaye and you need to check whether you have enough — using only Hindi possession grammar — and either complete the purchase or politely say you'll come back tomorrow.",
    rwenRole: "Kirana shopkeeper in his late 50s, no English; he'll wait while you count out coins, but he won't help you with the math, and he'll only release the biscuits once you say 'mere paas [enough] rupaye hain' clearly.",
    successCriteria: "User uses 'Mere paas [number] rupaye hain' or 'Mere paas paise nahin hain' construction at least once, gets singular/plural agreement (hai vs hain) right with the number, and never substitutes English 'I have' or English digits.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
