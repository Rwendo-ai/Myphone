import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-hope-future',
  module: 10,
  lesson: 8,
  title: "L'espoir — Hope & the future",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You've told stories about the past. Now point forward. 'J'espère' — I hope. 'Je rêve de' — I dream of. These are the phrases people use over wine at dinner, late, when the conversation gets honest. Soft enough not to feel like commitment, real enough to mean something.",
    culturalNote: "French has a useful split: 'J'espère' + infinitive when the subject doesn't change ('J'espère partir' = I hope to leave — same person). 'J'espère que' + new subject ('J'espère que tu vas bien' = I hope you're doing well — different person). One small word ('que') signals 'a new subject is coming'.",
  },

  chunks: [
    {
      id: 'jespere',
      target: "J'espère...",
      native: 'I hope...',
      literal: 'I hope',
      emoji: '🌟',
      phonetic: 'zhay-SPEHR',
      audioRef: null,
    },
    {
      id: 'un_jour_je',
      target: 'Un jour, je...',
      native: "One day, I'll...",
      literal: 'One day, I',
      emoji: '🌅',
      phonetic: 'uhn ZHOOR zhuh',
      audioRef: null,
    },
    {
      id: 'je_reve_de',
      target: 'Je rêve de...',
      native: 'I dream of...',
      literal: 'I dream of',
      emoji: '💭',
      phonetic: 'zhuh REV duh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Espérer — same subject vs different subject",
    explanation: "Two patterns. Same speaker doing the hoping AND the action: 'J'espère' + infinitive. Different subject doing the action: 'J'espère que' + full sentence. 'Je rêve de' always takes an infinitive ('to do something') — never the 'que' construction in casual use.",
    examples: [
      { target: "J'espère partir en France", native: 'I hope to leave for France (I hope, I leave — same person)' },
      { target: "J'espère que tu vas bien", native: "I hope you're doing well (I hope, YOU are doing well)" },
      { target: 'Je rêve de voyager au Japon', native: 'I dream of travelling to Japan' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: "J'espère...", right: 'I hope...' },
        { left: 'Un jour, je...', right: "One day, I'll..." },
        { left: 'Je rêve de...', right: 'I dream of...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Same subject (you hope, you go). Pick what comes after 'J'espère'.",
      sentence: "J'espère _____ en France l'année prochaine.",
      options: ['aller', 'que je vais', 'allé'],
      correct: 'aller',
      context: "Same subject (I hope, I go) → infinitive directly. 'J'espère aller'. The 'que' construction is for when someone ELSE does the action.",
    },
    {
      type: 'translate',
      instruction: "Type in French — name a real dream of yours, just the opener",
      prompt: "I dream of...",
      correct: ['Je rêve de', 'je rêve de'],
    },
    {
      type: 'build_sentence',
      instruction: 'Wish your friend well at the end of a call. Put the words in order.',
      words: ["bien", "tu", "que", "vas", "J'espère"],
      correct: ["J'espère", 'que', 'tu', 'vas', 'bien'],
      translation: "I hope you're doing well",
    },
    {
      type: 'multiple_choice',
      instruction: "You want to say: 'I hope to live in Paris one day.' One subject, one verb. Which structure?",
      question: 'Pick the right pattern',
      options: [
        { text: "J'espère vivre à Paris un jour.", correct: true },
        { text: "J'espère que je vis à Paris un jour.", correct: false },
        { text: "Je rêve que vivre à Paris.", correct: false },
      ],
      explanation: "Same subject = J'espère + infinitive (vivre). The 'que' version is grammatically clunky here — there's no second subject. The third option mixes 'rêve' with 'que' incorrectly.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — share a real hope, soft but honest',
      prompt: "One day, I'll travel to Japan",
      correct: [
        'Un jour, je voyagerai au Japon',
        "Un jour je voyagerai au Japon",
        'un jour, je voyagerai au japon',
      ],
    },
  ],

  rwenDialogue: {
    intro: "It's late. You and your friend Marc are walking back from a dinner along the Seine. He asks the question that always comes out at this hour.",
    lines: [
      {
        speaker: 'npc',
        target: "Et toi — tu rêves de quoi, vraiment?",
        native: "And you — what do you really dream of?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Je rêve de vivre en France un jour. Et j'espère que tu seras encore mon ami.", native: "I dream of living in France one day. And I hope you'll still be my friend.", correct: true, feedback: "Both patterns, used naturally. 'Je rêve de + infinitive', 'J'espère que + new subject'. That second part is honest, soft, French." },
          { target: "Je rêve que vivre en France.", native: "I dream that to live in France. (mixed structures)", correct: false, feedback: "'Rêver de' takes an infinitive directly: 'je rêve de vivre'. Don't add 'que'." },
          { target: "Je suis France.", native: "I am France.", correct: false, feedback: "He asked about dreams. You need 'je rêve de...' or 'j'espère...' to point at a future." },
        ],
      },
      {
        speaker: 'npc',
        target: "Toujours. À la santé des rêves.",
        native: "Always. To dreams.",
      },
      {
        speaker: 'rwen',
        rwenLine: "That was a real conversation — past, present, hope, and a friend. You're walking through life in French now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I hope you're doing well (in French)",
        correct: ["J'espère que tu vas bien", "j'espère que tu vas bien"],
      },
      {
        prompt: "I dream of... (opener, in French)",
        correct: ['Je rêve de', 'je rêve de'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tonight, before sleep, finish two sentences in French — out loud or in your head. 'Un jour, je...' and 'Je rêve de...' Whatever's true today.",
    rwenSignoff: "Rêve grand ce soir. À demain.",
  },

  phase8: {
    scenario: "It's late at a small bar in Montmartre. You and your French friend Camille are on the second glass of wine. The conversation has just gotten honest — she asked you what you really hope for. You have three minutes to answer in French.",
    rwenRole: "Camille — your French friend, late 20s, listens deeply at this hour; she uses 'tu', will ask 'et pourquoi?' after each hope, and share one of her own dreams back.",
    successCriteria: "User uses BOTH patterns: 'J'espère' + infinitive (same-subject hope) at least once, AND 'J'espère que' + new subject (e.g., 'que tu seras content', 'que tout ira bien'). Plus 'Je rêve de' + infinitive for one specific dream. The structural test is correct distinction between same-subject and new-subject.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
