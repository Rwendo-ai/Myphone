import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-kaam-padhna',
  module: 8,
  lesson: 3,
  title: 'Kaam Karna / Padhna — To Work, To Study',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "Two power verbs of urban India: काम करना (kaam karna — to work) and पढ़ना (padhna — to study/read). Kaam karna is actually a compound — kaam (work) + karna (to do). 'I do work.' Padhna is a single verb. Both end in -ना. Both let you answer the most-asked question in any chai-stall conversation: 'Aap kya karte hain?' (What do you do?)",
    culturalNote: "In India 'aap kya karte hain?' is asked within minutes of meeting — it's a placement question, not nosy. Software engineers in Bengaluru, students in Delhi University, kirana-shop owners in small towns — work and education are how Indians locate each other socially. Answering with confidence in Hindi (rather than defaulting to English) earns instant goodwill.",
  },

  chunks: [
    {
      id: 'kaam_karna',
      target: 'काम करना — Kaam karna',
      native: 'To work (literally: to do work)',
      literal: 'kaam (work) + karna (to-do)',
      emoji: '💼',
      phonetic: 'KAAM kar-na',
      audioRef: null,
    },
    {
      id: 'padhna',
      target: 'पढ़ना — Padhna',
      native: 'To study / to read',
      literal: 'padh- (read/study-stem) + -na',
      emoji: '📚',
      phonetic: 'PADH-na',
      audioRef: null,
    },
    {
      id: 'kya_karte_hain',
      target: 'आप क्या करते हैं? — Aap kya karte hain?',
      native: 'What do you do? (work/profession)',
      literal: 'You what do-pl/respect are?',
      emoji: '❓',
      phonetic: 'AAP KYA KAR-tay HAIN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Compound verbs with karna — the most productive pattern in Hindi',
    explanation: "Hindi builds verbs by pairing a noun with करना (karna — to do): kaam karna (work-do), pasand karna (like-do), shuru karna (start-do), istemaal karna (use-do). The noun stays put; karna conjugates. Master karna and you've unlocked hundreds of verbs.",
    examples: [
      { target: 'मैं काम करता हूँ — Main kaam karta hoon', native: 'I work (man speaking — literally: I do work)' },
      { target: 'वह पढ़ती है — Vah padhti hai', native: 'She studies / She reads' },
      { target: 'आप क्या करते हैं? — Aap kya karte hain?', native: 'What do you do? (formal)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Kaam karna', right: 'To work (do work)' },
        { left: 'Padhna', right: 'To study / to read' },
        { left: 'Aap kya karte hain?', right: 'What do you do?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A man answers "I work in Bengaluru"',
      sentence: 'Main Bengaluru mein kaam _____ hoon.',
      options: ['karta', 'karti', 'karte'],
      correct: 'karta',
      context: 'Male speaker. Karna takes -ta for masculine.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'What do you do? (formal)',
      correct: ['Aap kya karte hain?', 'aap kya karte hain?', 'Aap kya karte hain', 'aap kya karte hain'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why is karna so important in Hindi?",
      question: 'Karna is special because:',
      options: [
        { text: 'It pairs with nouns to create hundreds of compound verbs (kaam karna, pasand karna, etc.)', correct: true },
        { text: "It's the only verb that doesn't take gender", correct: false },
        { text: 'It only works with food-related nouns', correct: false },
      ],
      explanation: "Karna + noun = verb. This single pattern unlocks an enormous chunk of working Hindi vocabulary.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'She studies in Delhi'",
      words: ['Vah', 'Delhi', 'mein', 'padhti', 'hai.'],
      correct: ['Vah', 'Delhi', 'mein', 'padhti', 'hai.'],
      translation: 'She studies in Delhi',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (woman speaking)',
      prompt: 'I work in an office',
      correct: ['Main daftar mein kaam karti hoon', 'main daftar mein kaam karti hoon'],
    },
  ],

  rwenDialogue: {
    intro: "Monday 9:30am, IT office in Hinjewadi, Pune. Daily standup. Your team lead, Rohit, opens with the standard ice-breaker for a new joiner.",
    lines: [
      {
        speaker: 'npc',
        target: 'अरे, आप क्या करते हैं? Backend या frontend?',
        native: 'Hey, what do you do? Backend or frontend?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main backend developer hoon. Main Python mein kaam karta hoon. Aur thoda Hindi bhi padhta hoon!', native: "I'm a backend developer. I work in Python. And I also study a little Hindi!", correct: true, feedback: "Hindi-English code-mix — exactly how Indian IT offices actually talk. Two verbs (karna + padhna), both at the end, both gendered." },
          { target: 'Main karta kaam hoon Python', native: 'I do work am Python (jumbled order)', correct: false, feedback: "Object first, verb at the end. 'Main Python mein kaam karta hoon.' Place → object → verb." },
          { target: 'I work in Python', native: 'English answer', correct: false, feedback: "Try the Hindi version — even the IT crowd appreciates the effort. 'Main Python mein kaam karta/karti hoon.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Hindi-English mix is the actual language of urban India. Karna verbs at the end, English nouns in the middle. You sound local already.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I work (man speaking)', correct: ['Main kaam karta hoon', 'main kaam karta hoon'] },
      { prompt: 'She studies / reads', correct: ['Vah padhti hai', 'vah padhti hai', 'Woh padhti hai', 'woh padhti hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time someone asks what you do, answer in Hindi: 'Main [field] mein kaam karta/karti hoon.' Even if you have to repeat it in English after — the Hindi version comes first.",
    rwenSignoff: "Karna verbs are the engine of Hindi. Phir milenge — see you again.",
  },

  phase8: {
    scenario: "Tuesday 10am standup at the Hinjewadi office. The Hindi-English code-mix is in full force — half the room speaks Marathi at home, the standup happens in 'Hinglish'. The team lead Rohit asks you in Hindi what you worked on yesterday and what you'll work on today; a junior dev asks if you're studying anything new on the side. Stay in the verb-final habit even with English nouns mixed in.",
    rwenRole: "Rohit (team lead, friendly senior, switches casually between Hindi and English) + Anjali (junior dev, asks the side-projects question). Office-casual register, but verb-at-the-end order matters.",
    successCriteria: "User uses 'kaam karna' in past ('Main kal X par kaam kiya') and present-continuous ('Main aaj Y par kaam kar raha/rahi hoon'). Uses 'padhna' for studying something new ('Main Hindi padh raha/rahi hoon'). English nouns are fine in the middle (Python, AWS, frontend) — but the Hindi verb stays at the end.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
