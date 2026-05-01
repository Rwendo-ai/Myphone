import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-family-status',
  module: 3,
  lesson: 4,
  title: 'Marié? Enfants? — Family status',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In France, after a few minutes of getting-to-know-you, the family question often arrives — gently. Marié? Des enfants? Today we cover the three answers everyone gives, in either gender.",
    culturalNote: "Two cultural notes. (1) French speakers often say 'en couple' or 'en concubinage' (officially partnered without marriage) — a status English handles with 'partner'. (2) Asking 'Vous êtes marié(e)?' early is normal in France between adults; it's not as personal as it can feel in some English-speaking cultures. Adjective agreement is everywhere — marié (m) / mariée (f), célibataire (no change, it ends in -e already).",
  },

  chunks: [
    {
      id: 'vous_etes_marie',
      target: 'Vous êtes marié(e)?',
      native: 'Are you married?',
      literal: 'You are married(-feminine)?',
      emoji: '💍',
      phonetic: 'voo zet ma-ree-AY',
      audioRef: null,
    },
    {
      id: 'jai_deux_enfants',
      target: "J'ai deux enfants",
      native: 'I have two children',
      literal: 'I-have two children',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'zhay duh zahn-FAHN',
      audioRef: null,
    },
    {
      id: 'je_suis_celibataire',
      target: 'Je suis célibataire',
      native: "I'm single",
      literal: 'I am single',
      emoji: '🙋',
      phonetic: 'zhuh swee say-lee-ba-TEHR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'État civil — three verbs in three answers',
    explanation: "Three different verb patterns in one topic. Marriage uses être + adjective (marié/mariée). Children use avoir (J'ai...). Single uses être again, but célibataire is unisex (no extra -e). Notice the liaison: 'deux enfants' = 'duh-z-ahn-FAHN'.",
    examples: [
      { target: 'Je suis marié (m) / mariée (f)', native: "I'm married" },
      { target: "J'ai un enfant", native: 'I have one child' },
      { target: 'Je suis en couple', native: "I'm in a relationship (unmarried partner)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Vous êtes marié(e)?', right: 'Are you married?' },
        { left: "J'ai deux enfants", right: 'I have two children' },
        { left: 'Je suis célibataire', right: "I'm single" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the answer about kids — pick the right verb.',
      sentence: '_____ deux enfants.',
      options: ["J'ai", 'Je suis', 'Je vais'],
      correct: "J'ai",
      context: "Children use avoir (have), like age. 'Je suis deux enfants' is wrong — you HAVE children, you don't ARE children.",
    },
    {
      type: 'translate',
      instruction: "Type in French — a female speaker says she's married",
      prompt: "I'm married (female speaker)",
      correct: ['Je suis mariée', 'je suis mariée'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask a new colleague (formal) if they are married.',
      words: ['marié(e)?', 'êtes', 'Vous'],
      correct: ['Vous', 'êtes', 'marié(e)?'],
      translation: 'Are you married?',
    },
    {
      type: 'multiple_choice',
      instruction: "A French acquaintance asks 'Vous avez des enfants?' You have one child.",
      question: 'Which is the correct reply?',
      options: [
        { text: "Oui, j'ai un enfant", correct: true },
        { text: 'Oui, je suis un enfant', correct: false },
        { text: 'Oui, un enfant je suis', correct: false },
      ],
      explanation: "Avoir for possessing kids. 'Je suis un enfant' would mean 'I am a child' — not what you meant.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — say you are single',
      prompt: "I'm single",
      correct: ['Je suis célibataire', 'je suis célibataire'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday lunch with the family of a French friend. The grandmother, gentle and curious, has been waiting for the right moment. Here it comes.",
    lines: [
      {
        speaker: 'npc',
        target: 'Dites-moi — vous êtes marié(e)? Des enfants?',
        native: 'Tell me — are you married? Any children?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Non, je suis célibataire, et je n'ai pas d'enfants", native: "No, I'm single, and I don't have children", correct: true, feedback: 'Three correct verbs in one calm sentence — être for status, avoir for kids. Clean.' },
          { target: "Non, je suis pas d'enfants", native: 'No, I am not children (broken)', correct: false, feedback: 'Mixing the two verbs. Kids belong to avoir: "Je n\'ai pas d\'enfants".' },
          { target: 'Je suis marié des enfants', native: "I am married some children (broken)", correct: false, feedback: 'Two answers smashed together with no connector. Pick one or use a comma between them.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah bon! Eh bien, profitez de la liberté!',
        native: "Oh I see! Well, enjoy the freedom!",
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice she just rolled with your answer — no awkwardness. État civil is everyday small talk in France. You handled it like a regular.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I have two children (in French)',
        correct: ["J'ai deux enfants", "j'ai deux enfants"],
      },
      {
        prompt: "I'm single (in French)",
        correct: ['Je suis célibataire', 'je suis célibataire'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Describe your état civil in French today, out loud. One sentence: 'Je suis marié(e)' / 'Je suis célibataire' / 'Je suis en couple' — and 'J'ai ___ enfants' if it applies.",
    rwenSignoff: "Famille, c'est aussi de l'identité. À demain.",
  },

  phase8: {
    scenario: "Sunday lunch at your French friend Camille's grandmother's apartment in Lyon. After dessert, Mamie Roussel turns the conversation gently to you — she wants to know who's at home, who you live with, the basics.",
    rwenRole: "Mamie Roussel — Camille's 78-year-old grandmother, warm and old-school, vous throughout, asks 'Vous êtes marié(e)?' and 'Vous avez des enfants?' as natural lunch-table small talk. She'll follow up with light reactions ('Ah, c'est joli!' or 'Profitez bien!').",
    successCriteria: "User answers marriage status with être + correct gender form (marié/mariée OR célibataire OR en couple). User answers children question with avoir ('J'ai ___ enfants' OR 'Je n'ai pas d'enfants'). User does NOT use 'je suis' for children. Female speakers use mariée; male speakers use marié.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
