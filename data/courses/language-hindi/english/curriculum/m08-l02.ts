import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-khaana-peena',
  module: 8,
  lesson: 2,
  title: 'Khaana / Peena — To Eat, To Drink',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "Khaana (खाना) means 'to eat' — and also 'food'. Peena (पीना) means 'to drink'. Both end in -ना like every Hindi infinitive. But here's the trick: when an Indian asks 'khaana khaaya?' (Did you eat food?) at 1pm, they're not just being polite. Refusing food in an Indian home is almost rude — saying 'haan, main thoda khaaungaa' (yes, I'll eat a little) keeps the relationship intact.",
    culturalNote: "In a joint family, meals are the day's social anchor. 'Khaana khaa lo' (eat the food) from a mother-figure isn't a question — it's an instruction wrapped in love. Even if you've already eaten, you say 'thoda saa' (just a little) and accept. Peena (drinking) is usually paani (water) or chai — and refusing chai in someone's home is a small social wound.",
  },

  chunks: [
    {
      id: 'khaana',
      target: 'खाना — Khaana',
      native: 'To eat (infinitive) / food (noun)',
      literal: 'khaa- (eat-stem) + -na (infinitive)',
      emoji: '🍛',
      phonetic: 'KHAA-na',
      audioRef: null,
    },
    {
      id: 'peena',
      target: 'पीना — Peena',
      native: 'To drink (infinitive)',
      literal: 'pee- (drink-stem) + -na (infinitive)',
      emoji: '🥛',
      phonetic: 'PEE-na',
      audioRef: null,
    },
    {
      id: 'main_khaata',
      target: 'मैं खाता हूँ / मैं पीती हूँ — Main khaata hoon / Main peeti hoon',
      native: 'I eat (man) / I drink (woman)',
      literal: 'I eat-masc am / drink-fem am',
      emoji: '🍽️',
      phonetic: 'mayn KHAA-ta hoon / mayn PEE-tee hoon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Habitual present — same template for every -ना verb',
    explanation: "Strip the -ना. Take the stem. Add -ta (man) / -ti (woman) / -te (plural-respect). End with हूँ / है / हैं depending on subject. khaana → khaa- → khaata hoon. peena → pee- → peeti hoon. The template is universal.",
    examples: [
      { target: 'मैं रोज़ खाना खाता हूँ — Main roz khaana khaata hoon', native: 'I eat food every day (man speaking)' },
      { target: 'वह चाय पीती है — Vah chai peeti hai', native: 'She drinks tea' },
      { target: 'हम पानी पीते हैं — Hum paani peete hain', native: 'We drink water' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its meaning',
      pairs: [
        { left: 'Khaana', right: 'To eat / food' },
        { left: 'Peena', right: 'To drink' },
        { left: 'Main paani peeta hoon', right: 'I drink water (man)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A woman says "I drink chai" — choose the right form',
      sentence: 'Main chai _____ hoon.',
      options: ['peeti', 'peeta', 'peete'],
      correct: 'peeti',
      context: 'Female speaker. -ti for feminine.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (man speaking)',
      prompt: 'I eat food every day',
      correct: ['Main roz khaana khaata hoon', 'main roz khaana khaata hoon'],
    },
    {
      type: 'multiple_choice',
      instruction: "Priya's mother says 'Khaana khaa lo!' What does this really mean?",
      question: 'Cultural meaning:',
      options: [
        { text: 'Eat the food — an instruction wrapped in care; refusing fully is awkward', correct: true },
        { text: 'Just a casual question about hunger', correct: false },
        { text: 'A literal command — you must eat right now', correct: false },
      ],
      explanation: "Indian hospitality. Saying 'thoda saa' (just a little) and accepting is the gracious move.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'We drink water' (we are several)",
      words: ['Hum', 'paani', 'peete', 'hain.'],
      correct: ['Hum', 'paani', 'peete', 'hain.'],
      translation: 'We drink water',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'She drinks tea',
      correct: ['Vah chai peeti hai', 'vah chai peeti hai', 'Woh chai peeti hai', 'woh chai peeti hai'],
    },
  ],

  rwenDialogue: {
    intro: "1:15pm. Priya's mother (Aunty-ji) sees you at the dining table without a plate.",
    lines: [
      {
        speaker: 'npc',
        target: 'बेटा, खाना खा लो! क्या पियोगे — पानी या चाय?',
        native: 'Beta, eat the food! What will you drink — water or chai?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Haan Aunty-ji, main thoda khaana khaaungaa. Aur chai peeyungaa, dhanyavaad.', native: 'Yes Aunty-ji, I will eat a little food. And I will drink chai, thank you.', correct: true, feedback: "Accepted with 'thoda' (a little), used future of both verbs, called her Aunty-ji. Perfect joint-family etiquette." },
          { target: 'Nahin, main bhookha nahin hoon', native: "No, I'm not hungry", correct: false, feedback: "Refusing food outright in an Indian home stings. Say 'thoda saa' (just a little) and accept." },
          { target: 'Main khaata khaana hoon', native: 'I eat food am (wrong order)', correct: false, feedback: "Verb at the END. 'Main khaana khaata hoon' — main → object (khaana) → verb (khaata) → aux (hoon)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Aunty-ji's whole face changes when you accept food. That's the rule. Khaana khaa lo means 'be in our family for a moment.'",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I eat food (man speaking)', correct: ['Main khaana khaata hoon', 'main khaana khaata hoon'] },
      { prompt: 'She drinks tea', correct: ['Vah chai peeti hai', 'vah chai peeti hai', 'Woh chai peeti hai', 'woh chai peeti hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "At your next meal, narrate to yourself: 'Main [food] khaata/khaati hoon. Main [drink] peeta/peeti hoon.' Object before verb, gender on the verb. Make every meal a Hindi sentence.",
    rwenSignoff: "Khaana ke baad chai — food, then chai. The Indian rhythm. Phir milenge.",
  },

  phase8: {
    scenario: "Saturday 1pm at Priya's family lunch. Dadi-ji has cooked aloo gobi, dal, roti, and there's a thermos of chai on the table. Three relatives ask in turn: what do you usually eat for lunch back home, what are you eating right now, and what will you drink after the meal? You need habitual + present-continuous + future, all with verb-final order and correct gender.",
    rwenRole: "Dadi-ji + two aunties — joint-family table conversation. Respectful aap throughout. Watching for verb-final order and gender consistency.",
    successCriteria: "User produces three distinct tense forms cleanly: habitual ('Main roz...khaata/khaati hoon'), present continuous ('Main abhi...khaa raha/rahi hoon'), future ('Main chai peeyungaa/peeyungi'). Verb at the end every time. Gender ending (-ta/-ti) consistent throughout the conversation.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
