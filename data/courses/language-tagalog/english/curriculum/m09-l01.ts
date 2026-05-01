import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-saan-ang',
  module: 9,
  lesson: 1,
  title: 'Saan ang...? — Where is...?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're standing in Quiapo, Manila. Three jeepneys roar past, a vendor is grilling isaw, and you have no idea where the LRT station is. One little phrase — 'Saan ang...?' — opens every locked door in this city. Today we learn it.",
    culturalNote: "Filipinos love giving directions and almost everyone will pause to help — but they rarely use street names. Expect answers built from landmarks: 'katabi ng SM' (next to SM mall), 'tapat ng Jollibee' (across from Jollibee). Always start with 'Paumanhin po' (excuse me, respectful) — the 'po' makes you instantly likeable.",
  },

  chunks: [
    {
      id: 'saan_ang_banyo',
      target: 'Saan ang banyo?',
      native: "Where's the bathroom?",
      literal: 'Where the bathroom?',
      emoji: '🚻',
      phonetic: 'sah-AHN ahng BAHN-yoh',
      audioRef: null,
    },
    {
      id: 'paumanhin_po_saan_ang_exit',
      target: 'Paumanhin po, saan ang exit?',
      native: "Excuse me, where's the exit?",
      literal: 'Pardon (respectful), where the exit?',
      emoji: '🚪',
      phonetic: 'pah-oo-MAHN-hin poh, sah-AHN ahng EK-sit',
      audioRef: null,
    },
    {
      id: 'andon',
      target: 'Andon',
      native: 'Over there',
      literal: 'There (far)',
      emoji: '👉',
      phonetic: 'ahn-DOHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Saan ang + noun',
    explanation: "To ask where something is, use 'Saan ang' + the thing. 'Saan' = where, 'ang' = the. Add 'po' anywhere in the sentence to be respectful — never optional with strangers.",
    examples: [
      { target: 'Saan ang banyo?', native: "Where's the bathroom?" },
      { target: 'Saan po ang MRT?', native: "Where's the MRT? (respectful)" },
      { target: 'Saan ang Jollibee?', native: "Where's Jollibee?" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Saan ang banyo?', right: "Where's the bathroom?" },
        { left: 'Paumanhin po', right: 'Excuse me (respectful)' },
        { left: 'Andon', right: 'Over there' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're at the mall and need the toilet — fill the blank politely",
      sentence: 'Paumanhin po, _____ ang banyo?',
      options: ['saan', 'andon', 'po'],
      correct: 'saan',
      context: "'Saan' means where — it's the heart of the question.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "Where's the exit? (respectful — start with 'Paumanhin po')",
      correct: ['Paumanhin po, saan ang exit?', 'paumanhin po, saan ang exit?', 'Paumanhin po saan ang exit'],
    },
    {
      type: 'build_sentence',
      instruction: "Drag the words to ask 'Where's the bathroom?'",
      words: ['banyo?', 'Saan', 'ang'],
      correct: ['Saan', 'ang', 'banyo?'],
      translation: "Where's the bathroom?",
    },
    {
      type: 'multiple_choice',
      instruction: "You ask a stranger where the MRT is. They point and say one word. Which is most likely?",
      question: 'Choose the answer that means "over there"',
      options: [
        { text: 'Andon', correct: true },
        { text: 'Saan', correct: false },
        { text: 'Banyo', correct: false },
      ],
      explanation: "'Andon' = over there (the far version). 'Saan' is the question word, 'banyo' is bathroom.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Over there',
      correct: ['Andon', 'andon'],
    },
  ],

  rwenDialogue: {
    intro: "You're inside SM Megamall and you need a bathroom — urgently. A security guard is standing by the escalator. Ask him.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, saan ang banyo?', native: "Excuse me sir, where's the bathroom?", correct: true, feedback: 'Perfect — polite "po", clear question. He smiles.' },
          { target: 'Banyo!', native: 'Bathroom!', correct: false, feedback: 'Direct, but no greeting and no "po" — feels rude here.' },
          { target: 'Andon ang banyo', native: 'The bathroom is over there', correct: false, feedback: "That's an answer, not a question — you'd be telling him!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Andon po, sa kanan.',
        native: "It's over there, sir/ma'am, on the right.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear that 'po' come back to you? Respect mirrored. You just navigated Manila in three words.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Where's the bathroom? (in Tagalog)", correct: ['Saan ang banyo?', 'saan ang banyo?', 'Saan ang banyo'] },
      { prompt: 'Excuse me (respectful, in Tagalog)', correct: ['Paumanhin po', 'paumanhin po'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find one place around you today — a coffee shop, a bus stop, the toilet at work — and silently ask in Tagalog: 'Saan ang ___?' Let your mouth feel it.",
    rwenSignoff: "Hanggang bukas — until tomorrow. Ingat ka.",
  },

  phase8: {
    scenario: "You're lost in Quiapo, Manila at 4pm. The Quiapo Church is somewhere nearby but the streets are a maze of jeepneys, vendors, and tiangge stalls. You spot a sari-sari store owner peering out from behind sachets of shampoo and bags of chichirya. You need to ask her where the church is — politely.",
    rwenRole: "Aling Beth — sari-sari store owner, ~60, watches the whole barangay from her little window; warm and chatty if you greet her properly with 'po', short and curt if you don't.",
    successCriteria: "User opens with 'Paumanhin po' (NOT just 'Hey' or skipping the greeting), then asks 'Saan ang ___?' for a real place (church, banyo, MRT, etc). The 'po' must appear at least once. Greeting comes BEFORE the question.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
