import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-hobbies',
  module: 3,
  lesson: 5,
  title: 'Loisirs — Hobbies',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hobbies are where French conversation actually starts to breathe — once you can say what you love doing, suddenly people lean in. Today: three intensities of liking, from mild to obsessed.",
    culturalNote: "French has a clear ladder for liking. 'J'aime bien' = I quite like (mild, friendly). 'J'aime' = I like / I love (medium-strong; with a person, this can mean 'I love'). 'J'adore' = I love / adore (passionate, no romantic implication). Use 'aimer' for activities (verbs in the infinitive: J'aime LIRE, not J'aime LECTURE) and for nouns with the article (J'adore LE sport).",
  },

  chunks: [
    {
      id: 'jaime_lire',
      target: "J'aime lire",
      native: 'I like reading',
      literal: 'I like to-read',
      emoji: '📚',
      phonetic: 'zhem LEER',
      audioRef: null,
    },
    {
      id: 'jadore_le_sport',
      target: "J'adore le sport",
      native: 'I love sport',
      literal: 'I-adore the sport',
      emoji: '⚽',
      phonetic: 'zha-DOR luh SPOR',
      audioRef: null,
    },
    {
      id: 'jaime_bien_la_musique',
      target: "J'aime bien la musique",
      native: 'I quite like music',
      literal: 'I like well the music',
      emoji: '🎵',
      phonetic: 'zhem BYAHN la mew-ZEEK',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Aimer + infinitive (or + le/la + noun)',
    explanation: "Two patterns. With a verb, just keep it in the infinitive: 'J'aime lire' (I like to-read) — never conjugate the second verb. With a noun, you MUST add the article: 'J'adore LE sport', 'J'aime bien LA musique'. English drops articles ('I love sport'); French keeps them.",
    examples: [
      { target: "J'aime cuisiner", native: 'I like cooking' },
      { target: "J'adore le cinéma", native: 'I love cinema (le is required)' },
      { target: "J'aime bien la randonnée", native: 'I quite like hiking' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: "J'aime lire", right: 'I like reading' },
        { left: "J'adore le sport", right: 'I love sport' },
        { left: "J'aime bien la musique", right: 'I quite like music' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete the sentence — French requires the article before the noun.",
      sentence: "J'adore _____ cinéma.",
      options: ['le', 'la', '—'],
      correct: 'le',
      context: "With aimer/adorer + noun, French needs the article. 'Cinéma' is masculine — le. English drops the article ('I love cinema'); French does not.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — passion-level liking for sport',
      prompt: 'I love sport',
      correct: ["J'adore le sport", "j'adore le sport"],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell a new French friend that you like reading.',
      words: ['lire', 'aime', "J'"],
      correct: ["J'", 'aime', 'lire'],
      translation: 'I like reading',
    },
    {
      type: 'multiple_choice',
      instruction: "Which is correct French for 'I like cooking'?",
      question: 'Pick the right form',
      options: [
        { text: "J'aime cuisiner", correct: true },
        { text: "J'aime cuisine", correct: false },
        { text: "J'aime la cuisiner", correct: false },
      ],
      explanation: "'Cuisiner' is the verb 'to cook' — keep it in the infinitive after aimer. 'La cuisine' is the NOUN (cuisine/kitchen). 'J'aime la cuisine' is grammatical but means 'I like cooking-as-a-thing', not 'I like to cook'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — mild, friendly liking for music',
      prompt: 'I quite like music',
      correct: ["J'aime bien la musique", "j'aime bien la musique"],
    },
  ],

  rwenDialogue: {
    intro: "Apéro at a friend's apartment in Bordeaux. Conversation has hit a small lull. A guest, Léa, turns to you with the most French of icebreakers.",
    lines: [
      {
        speaker: 'npc',
        target: 'Et toi, qu\'est-ce que tu aimes faire le week-end?',
        native: 'And you, what do you like to do on weekends?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "J'adore le sport, et j'aime bien la musique", native: 'I love sport, and I quite like music', correct: true, feedback: 'Two intensities, two articles — clean French liking. Léa\'s already curious.' },
          { target: "J'adore sport, j'aime musique", native: 'I love sport, I like music (no articles)', correct: false, feedback: "French requires 'le sport', 'la musique' — never naked nouns after aimer/adorer." },
          { target: 'Je sport, je musique', native: "I sport, I music (broken)", correct: false, feedback: "You need the verb aimer/adorer. 'J'aime le sport' — not 'je sport'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, du sport et de la musique! On a un point commun alors.',
        native: 'Ah, sport and music! We have something in common then.',
      },
      {
        speaker: 'rwen',
        rwenLine: "There's the magic — hobbies are where strangers become friends. Notice she echoed your articles back: 'du sport et de la musique'. You spoke French and got French back.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I love sport (in French)',
        correct: ["J'adore le sport", "j'adore le sport"],
      },
      {
        prompt: 'I like reading (in French)',
        correct: ["J'aime lire", "j'aime lire"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one hobby and say it in French today, out loud. 'J'aime ___' or 'J'adore le/la ___'. Notice whether you used a verb (no article) or a noun (article required).",
    rwenSignoff: "Ce qu'on aime, on le partage. À demain.",
  },

  phase8: {
    scenario: "First evening at a French language meet-up at a Paris café. Another participant, Léa, sits down with her glass of wine and starts the conversation with the universal hobby question.",
    rwenRole: "Léa — a friendly local, ~30, bilingual but determined to keep the conversation in French; she asks 'Qu'est-ce que tu aimes faire?' and follows up with 'Tu lis quoi en ce moment?' or 'Tu fais quel sport?'. She uses tu (it's a casual meet-up).",
    successCriteria: "User answers with at least two of the three intensities (j'aime, j'aime bien, j'adore). User correctly drops articles before INFINITIVES (J'aime lire, NOT J'aime la lire) AND keeps articles before NOUNS (J'adore LE sport, NOT J'adore sport). User does not say 'Je sport' or other naked-noun errors.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
