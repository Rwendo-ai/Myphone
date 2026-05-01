import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-ang-marker',
  module: 4,
  lesson: 1,
  title: 'Ang — The "Spotlight" Marker',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "English uses word order — 'The dog bites the man' vs 'The man bites the dog'. Tagalog doesn't care about word order. Instead, it shines a spotlight on one noun with the tiny word 'ang'. Learn this one word and half the language clicks.",
    culturalNote: "Tagalog is a 'topic-marking' language. The marker 'ang' tells the listener 'THIS is the noun in focus right now'. There's no real English equivalent — the closest feeling is the word 'the', but 'ang' is doing more work than that. Listen for it everywhere — it's the single most common word in spoken Tagalog.",
  },

  chunks: [
    {
      id: 'ang_aso',
      target: 'Ang aso',
      native: 'The dog (in focus)',
      literal: 'FOCUS dog',
      emoji: '🐕',
      phonetic: 'ang AH-so',
      audioRef: null,
    },
    {
      id: 'ang_bahay',
      target: 'Ang bahay',
      native: 'The house (in focus)',
      literal: 'FOCUS house',
      emoji: '🏠',
      phonetic: 'ang BA-hai',
      audioRef: null,
    },
    {
      id: 'ang_maganda',
      target: 'Ang maganda',
      native: 'The pretty one',
      literal: 'FOCUS pretty',
      emoji: '🌸',
      phonetic: 'ang ma-gan-DA',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ang = the spotlight',
    explanation: "Put 'ang' in front of the noun you want to highlight. It's the topic of the sentence — what the rest of the sentence is about. Unlike English 'the', it doesn't mean 'specific vs general' — it means 'THIS one is the focus'.",
    examples: [
      { target: 'Ang aso ay maganda', native: 'The dog is pretty' },
      { target: 'Ang bata ay matalino', native: 'The child is smart' },
      { target: 'Ang guro ay mabait', native: 'The teacher is kind' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Ang aso', right: 'The dog' },
        { left: 'Ang bahay', right: 'The house' },
        { left: 'Ang maganda', right: 'The pretty one' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Put the spotlight on the dog",
      sentence: '_____ aso ay tumatakbo.',
      options: ['Ang', 'Ng', 'Sa'],
      correct: 'Ang',
      context: "We need the focus marker — 'ang' — because the dog is the one we're talking about.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'The house (in focus)',
      correct: ['Ang bahay', 'ang bahay'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the phrase: "the pretty house"',
      words: ['bahay', 'Ang', 'maganda'],
      correct: ['Ang', 'maganda', 'bahay'],
      translation: 'The pretty house',
    },
    {
      type: 'multiple_choice',
      instruction: "Which word marks the focus of a Tagalog sentence?",
      question: "You want to say 'THE dog is barking'. What goes before 'aso'?",
      options: [
        { text: 'Ang', correct: true },
        { text: 'Ng', correct: false },
        { text: 'Sa', correct: false },
      ],
      explanation: "'Ang' is the focus marker. 'Ng' shows possession; 'sa' shows location.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'The dog (with focus marker)',
      correct: ['Ang aso', 'ang aso'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a friend's house. Their dog walks in. You want to say something about the dog.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tingnan mo!',
        native: 'Look!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ang aso ay maganda', native: 'The dog is pretty', correct: true, feedback: "Perfect — 'ang' puts the spotlight on the dog." },
          { target: 'Aso maganda', native: 'Dog pretty', correct: false, feedback: "Missing 'ang'. Tagalog needs the focus marker." },
          { target: 'Sa aso maganda', native: 'At dog pretty', correct: false, feedback: "'Sa' means 'at/in' — wrong marker for the focus." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Oo, ang aso ko ay maganda talaga.',
        native: 'Yes, my dog is really pretty.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Listen for 'ang' in their reply. It's the spotlight following the dog around the conversation. Once you hear it, you can't unhear it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'The dog (with focus marker, in Tagalog)',
        correct: ['Ang aso', 'ang aso'],
      },
      {
        prompt: 'The house (with focus marker, in Tagalog)',
        correct: ['Ang bahay', 'ang bahay'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Spot 'ang' five times today. Watch a Filipino video, scroll Tagalog TikTok, listen to your titos — count them off. Once you start hearing it, you've cracked the code.",
    rwenSignoff: "Bukas ulit — see you tomorrow. We're stacking the markers one at a time.",
  },

  phase8: {
    scenario: "You're at a Quiapo street market in Manila. A vendor has fruits, fabrics, and a sleeping cat on the table. You want to talk about what catches your eye — using 'ang' to spotlight each item you mention.",
    rwenRole: "Aling Rosa — the market vendor, ~60, talkative, will gently correct you if you skip 'ang' and ask follow-up questions about each item you mention.",
    successCriteria: "User uses 'ang' before at least 3 different nouns to spotlight what they're talking about (e.g., 'ang mangga', 'ang pusa', 'ang tela'). They DON'T need full sentences — just the noun with its focus marker counts.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
