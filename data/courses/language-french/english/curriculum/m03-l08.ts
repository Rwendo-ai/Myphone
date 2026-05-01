import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-personality',
  module: 3,
  lesson: 8,
  title: 'Décrivez-vous — Personality',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Three little adjectives can paint a vivid picture of who you are. Today: nice, shy, curious — three of the most-used personality words in French, and the ones where gender agreement REALLY shows up.",
    culturalNote: "Adjective gender today is unavoidable. (1) 'sympa' (nice) — invariable, unisex, a slang shortening of 'sympathique'. (2) 'timide' (shy) — already ends in -e, no change. (3) 'curieux' (m) / 'curieuse' (f) — full transformation, -eux to -euse. This -eux/-euse pattern repeats across many adjectives (heureux/heureuse, sérieux/sérieuse, paresseux/paresseuse).",
  },

  chunks: [
    {
      id: 'je_suis_sympa',
      target: 'Je suis sympa',
      native: "I'm nice",
      literal: 'I am nice (slang)',
      emoji: '😊',
      phonetic: 'zhuh swee SAHM-pah',
      audioRef: null,
    },
    {
      id: 'un_peu_timide',
      target: 'Un peu timide',
      native: 'A bit shy',
      literal: 'A little shy',
      emoji: '🙈',
      phonetic: 'uhn puh tee-MEED',
      audioRef: null,
    },
    {
      id: 'curieux_de_nature',
      target: 'Curieux/curieuse de nature',
      native: 'Naturally curious',
      literal: 'Curious of nature',
      emoji: '🔍',
      phonetic: 'kew-ree-UH / kew-ree-UHZ duh na-TEWR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Adjective gender agreement — three patterns',
    explanation: "Three patterns in three chunks. (1) Already ends in -e (timide, calme, sympathique) → no change. (2) -eux → -euse (curieux/curieuse, heureux/heureuse). (3) Invariable slang (sympa, cool, super) → no change ever. Most other adjectives just add -e for feminine (grand/grande, petit/petite).",
    examples: [
      { target: 'Je suis sérieux (m) / sérieuse (f)', native: "I'm serious — same -eux/-euse swap" },
      { target: 'Je suis calme', native: "I'm calm — already ends in -e, unisex" },
      { target: "Il est sympa, elle est sympa", native: 'Sympa never changes' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Je suis sympa', right: "I'm nice" },
        { left: 'Un peu timide', right: 'A bit shy' },
        { left: 'Curieux/curieuse de nature', right: 'Naturally curious' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "A woman describes herself as naturally curious. Pick the correct form.",
      sentence: 'Je suis _____ de nature.',
      options: ['curieuse', 'curieux', 'curieus'],
      correct: 'curieuse',
      context: "Female speaker → -euse. Male speaker would say 'curieux'. The -eux/-euse swap is one of the most common gender pairs in French.",
    },
    {
      type: 'translate',
      instruction: "Type in French — a male speaker says he's naturally curious",
      prompt: "I'm naturally curious (male speaker)",
      correct: ['Je suis curieux de nature', 'je suis curieux de nature'],
    },
    {
      type: 'build_sentence',
      instruction: "Tell someone you're nice but a bit shy.",
      words: ['un', 'mais', 'sympa', 'peu', 'Je', 'suis', 'timide'],
      correct: ['Je', 'suis', 'sympa', 'mais', 'un', 'peu', 'timide'],
      translation: "I'm nice but a bit shy",
    },
    {
      type: 'multiple_choice',
      instruction: "Which is correct for a female speaker saying 'I'm happy'?",
      question: 'Pick the correct feminine form',
      options: [
        { text: 'Je suis heureuse', correct: true },
        { text: 'Je suis heureux', correct: false },
        { text: 'Je suis heureusee', correct: false },
      ],
      explanation: "Same -eux/-euse pattern as curieux/curieuse. Heureux (m) → heureuse (f). Useful pattern — locks in once you see it.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — say you are a bit shy',
      prompt: "I'm a bit shy",
      correct: ['Je suis un peu timide', 'je suis un peu timide'],
    },
  ],

  rwenDialogue: {
    intro: "Speed-friending event in Paris (yes, those exist). The next person at your table, Léa, has 90 seconds to learn who you are. She starts.",
    lines: [
      {
        speaker: 'npc',
        target: 'Allez, trois mots pour te décrire — vas-y!',
        native: 'OK, three words to describe yourself — go!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sympa, un peu timide, et curieux/curieuse de nature', native: 'Nice, a bit shy, and naturally curious', correct: true, feedback: 'Three textures, three correct gender forms. Léa just got a real picture of you.' },
          { target: 'Sympa, timide, curieux (female speaker)', native: "Nice, shy, curious (with masculine -eux as a woman)", correct: false, feedback: "If you're female, 'curieuse'. The -eux/-euse swap is THE most common French gender slip — keep an ear on it." },
          { target: 'Je nice, je shy, je curious', native: 'I nice, I shy, I curious (English mash-up)', correct: false, feedback: 'You need être for personality. "Je suis sympa, un peu timide, et curieux/curieuse."' },
        ],
      },
      {
        speaker: 'npc',
        target: "Curieuse de nature — j'aime ça. Moi aussi.",
        native: 'Naturally curious — I like that. Me too.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Three adjectives, and Léa already feels she knows you. Notice how she echoed 'curieuse' — gender agreement matters because the listener uses YOUR form to talk back to you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm nice (in French)",
        correct: ['Je suis sympa', 'je suis sympa'],
      },
      {
        prompt: "I'm naturally curious (female speaker, in French)",
        correct: ['Je suis curieuse de nature', 'je suis curieuse de nature'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three French adjectives that describe you and say them aloud once today: 'Je suis ___, ___, et ___.' Use the right gender ending — your future self will thank you.",
    rwenSignoff: "Trois mots et on commence à te connaître. À demain.",
  },

  phase8: {
    scenario: "First night at a Paris speed-friending event. Each round is 90 seconds. The next person, Léa, gives you the classic prompt: three words to describe yourself.",
    rwenRole: "Léa — the event host, ~30, friendly and a bit theatrical, uses tu (it's a casual event); she gives the 'trois mots' prompt, then asks 'Pourquoi ce mot?' for one of them. She gently mirrors your gender forms back, encouraging accuracy.",
    successCriteria: "User produces three personality adjectives using 'Je suis ___'. Female speakers use feminine forms (curieuse, sérieuse, heureuse), male speakers use masculine (curieux, sérieux, heureux). Adjectives ending in -e (timide, calme, sympathique) and 'sympa' stay the same. User does NOT mismatch gender (e.g., a woman saying 'Je suis curieux').",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
