import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10-bazaar',
  module: 6,
  lesson: 10,
  title: 'Bazaar — A Full Hindi Transaction',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Welcome to the bazaar. Numbers, time, money, days, mol-bhaav — every chunk from this module comes alive here. Greet, ask the price, react, negotiate, confirm your money, commit, thank. Seven beats. All in Hindi. This is graduation day for Module 6.",
    culturalNote: "From Chandni Chowk in Old Delhi to Crawford Market in Mumbai to Kolkata's New Market, the Indian bazaar is its own universe. Numbers shouted across stalls, prices that flex with rapport, and a transaction ritual that's older than the cities themselves. Run the seven beats once and you're not a tourist any more — you're a customer.",
  },

  chunks: [
    {
      id: 'le_lunga',
      target: 'मैं ले लूँगा / लूँगी',
      native: "I'll take it (m / f)",
      literal: 'Main le lunga (m), le lungi (f) — I will take',
      emoji: '🛒',
      phonetic: 'MAIN LAY LOON-gaa / LOON-gee',
      audioRef: null,
    },
    {
      id: 'shukriya_bhaiya',
      target: 'शुक्रिया, भैया / दीदी',
      native: 'Thank you, Brother / Sister',
      literal: 'Shukriya (thanks), bhaiya (older brother — male vendor), didi (older sister — female vendor)',
      emoji: '🙏',
      phonetic: 'SHUK-ri-yaa / BHAI-yaa / DEE-dee',
      audioRef: null,
    },
    {
      id: 'achha_sauda',
      target: 'अच्छा सौदा',
      native: 'Good deal',
      literal: 'Achha sauda — good bargain',
      emoji: '✅',
      phonetic: 'ACH-chaa SOW-daa',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The seven-beat bazaar transaction',
    explanation: "(1) Greet: Namaste / Namaskar. (2) Ask price: Kitne ka hai? (3) React: Bahut mahanga hai. (4) Negotiate: Kam karo. [Counter number] theek hai? (5) Agree: Theek hai. (6) Confirm money: Mere paas [number] rupaye hain. (7) Commit + thank: Le lunga. Shukriya, bhaiya. Run all seven and you've completed a real Indian market transaction in Hindi.",
    examples: [
      { target: 'Namaste. Kitne ka hai?', native: 'Hello. How much is it?' },
      { target: 'Mahanga hai. Kam karo. Do sau, theek hai?', native: "It's expensive. Lower it. Two hundred, OK?" },
      { target: 'Theek hai. Le lunga. Shukriya, bhaiya.', native: "OK. I'll take it. Thank you, brother." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the bazaar phrase to its meaning',
      pairs: [
        { left: 'Le lunga', right: "I'll take it (m)" },
        { left: 'Bhaiya', right: 'Brother (term for male vendor)' },
        { left: 'Achha sauda', right: 'Good deal' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "The vendor agrees to your counter price. What's the closing line?",
      question: 'Complete the deal:',
      options: [
        { text: 'Theek hai. Le lunga. Shukriya, bhaiya.', correct: true },
        { text: 'Bahut mahanga hai.', correct: false },
        { text: 'Mere paas paise nahin hain.', correct: false },
      ],
      explanation: "Theek hai (OK) + Le lunga (I'll take it) + Shukriya, bhaiya (Thanks, brother) = transaction closed.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: "I'll take it (male speaker)",
      correct: ['Le lunga', 'le lunga', 'Main le lunga', 'main le lunga'],
    },
    {
      type: 'fill_blank',
      instruction: 'Open the transaction with a greeting + price ask',
      sentence: 'Namaste. _____ ka hai?',
      options: ['Kitne', 'Kya', 'Kahan'],
      correct: 'Kitne',
      context: 'The market opener: greet + ask the price.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I will take three, brother'",
      words: ['Main', 'teen', 'le', 'lunga,', 'bhaiya.'],
      correct: ['Main', 'teen', 'le', 'lunga,', 'bhaiya.'],
      translation: "I'll take three, brother",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Thank you, brother',
      correct: ['Shukriya, bhaiya', 'shukriya, bhaiya', 'Shukriya bhaiya', 'shukriya bhaiya'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Chandni Chowk in Old Delhi. Rwen is watching from a chai stall across the lane. Run the full seven-beat bazaar transaction.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste, bhaiya. Kitne ka hai?', native: 'Hello, brother. How much is it?', correct: true, feedback: "Greeted + asked + 'bhaiya' for warmth. Vendor leans in." },
          { target: 'Mujhe ye chahiye', native: 'I want this', correct: false, feedback: "Greet and ask the price first — 'Namaste, bhaiya. Kitne ka hai?'" },
          { target: 'Mahanga hai?', native: "Is it expensive? (before knowing the price)", correct: false, feedback: "You don't know the price yet. Open with 'Namaste, bhaiya. Kitne ka hai?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'चार सौ रुपये।',
        native: 'Four hundred rupees.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bahut mahanga hai. Kam karo. Do sau, theek hai?', native: "Too expensive. Lower it. Two hundred, OK?", correct: true, feedback: "Reaction + counter. Vendor smiles — you're playing the game right." },
          { target: 'Theek hai, le lunga', native: "OK, I'll take it (no negotiation)", correct: false, feedback: "Try a counter — 'Bahut mahanga hai. Kam karo. Do sau, theek hai?'" },
          { target: 'Mere paas paise nahin hain', native: "I don't have money", correct: false, feedback: "You do — bargain instead: 'Bahut mahanga hai. Kam karo. Do sau, theek hai?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'तीन सौ। फिक्स।',
        native: 'Three hundred. Fixed.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Theek hai. Mere paas teen sau rupaye hain. Le lunga. Shukriya, bhaiya.', native: "OK. I have three hundred rupees. I'll take it. Thank you, brother.", correct: true, feedback: "Agreement → money confirmed → committed → thanked. All seven beats run cleanly. That's a complete Hindi bazaar transaction." },
          { target: 'Shukriya', native: 'Thank you (no commit, no money confirmed)', correct: false, feedback: "Close it properly: 'Theek hai. Mere paas teen sau rupaye hain. Le lunga. Shukriya, bhaiya.'" },
          { target: 'Bahut mahanga hai', native: "Too expensive (after already negotiating)", correct: false, feedback: "You already negotiated — three hundred is the deal. Close: 'Theek hai. Le lunga. Shukriya, bhaiya.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "I watched all seven beats. Greeted, asked, reacted, negotiated, agreed, confirmed, thanked — every step in Hindi. Module 6 complete. India just got smaller for you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'll take it (male speaker)", correct: ['Le lunga', 'le lunga', 'Main le lunga', 'main le lunga'] },
      { prompt: 'How much is it?', correct: ['Kitne ka hai?', 'kitne ka hai?', 'Kitne ka hai', 'kitne ka hai'] },
    ],
  },

  mission: {
    title: "Your Module 6 Mission",
    task: "Next time you buy ANYTHING — coffee, groceries, a metro ticket — run the full seven beats in your head in Hindi: greet → price → react → negotiate → agree → confirm money → commit + thank. Even if you're paying with a card at a Starbucks. Make it Hindi.",
    rwenSignoff: "Module 6 done. You can count, tell time, handle rupaye, navigate the bazaar. Module 7 — food, hospitality, and the dining table — is next. Phir milenge.",
  },

  phase8: {
    scenario: "Saturday morning solo run at Chandni Chowk in Old Delhi. You need to buy a kurta from one stall, mithai from another, and a brass ganesh from a third — running the full seven-beat exchange (greet → ask → react → negotiate → agree → confirm money → thank) at each stall, with no English fallback and no help from Rwen.",
    rwenRole: "Veteran Chandni Chowk kurta vendor, mid-50s, the toughest first stall for a beginner; he watches whether you greet first, negotiates hard, and only addresses you as 'sahib/madam' once you've completed a full Hindi transaction.",
    successCriteria: "User runs all seven beats — opens with 'Namaste, bhaiya. Kitne ka hai?', reacts with 'mahanga' + 'kam karo' + a counter, agrees with 'theek hai', confirms with 'Mere paas [number] rupaye hain', closes with 'Le lunga' + 'Shukriya, bhaiya' — across at least one full stall exchange, never breaking into English.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
