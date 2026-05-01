import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-yes-no',
  module: 2,
  lesson: 4,
  title: 'Oui & Non — Yes & No',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The two smallest words in French — and the two most loaded. 'Oui' isn't just yes; said differently it can mean 'yeah, sure' or 'absolutely' or 'as if'. 'Non' is rarely just no. Today we get the basics right, and one secret weapon: 'Peut-être'.",
    culturalNote: "English speakers often soften 'no' with apology — 'Oh, sorry, no thanks!' In France, a clean 'Non, merci' is completely fine, even warm. No need to over-soften. And 'Peut-être' (maybe) is a real answer here, not a cop-out — it genuinely means 'I'm thinking about it', and is respected as such.",
  },

  chunks: [
    {
      id: 'oui',
      target: 'Oui',
      native: 'Yes',
      literal: 'Yes',
      emoji: '✅',
      phonetic: 'WEE',
      audioRef: null,
    },
    {
      id: 'non',
      target: 'Non',
      native: 'No',
      literal: 'No',
      emoji: '❌',
      phonetic: 'NOHN',
      audioRef: null,
    },
    {
      id: 'peut_etre',
      target: 'Peut-être',
      native: 'Maybe',
      literal: 'Can-be',
      emoji: '🤷',
      phonetic: 'puh-TET-ruh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Affirmation, denial, and the middle ground',
    explanation: "Pair these with 'merci' to make them polite: 'Oui, merci' / 'Non, merci'. 'Peut-être' stands alone, often followed by 'plus tard' (later). One French quirk worth knowing: if someone asks a negative question ('You don't want coffee?'), French uses 'Si!' (yes I do!) instead of Oui. We'll meet 'si' later.",
    examples: [
      { target: 'Oui, merci', native: 'Yes, thank you' },
      { target: 'Non, merci', native: 'No, thank you' },
      { target: 'Peut-être plus tard', native: 'Maybe later' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each word to its meaning',
      pairs: [
        { left: 'Oui', right: 'Yes' },
        { left: 'Non', right: 'No' },
        { left: 'Peut-être', right: 'Maybe' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A waiter in Avignon offers more wine. You don’t want any.',
      sentence: '_____, merci.',
      options: ['Non', 'Oui', 'Peut-être'],
      correct: 'Non',
      context: "Politely declining — Non, merci is clean and friendly, no apology needed.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — a friend asks if you’ll join for coffee tomorrow; you’re not sure',
      prompt: 'Maybe',
      correct: ['Peut-être', 'peut-être', 'Peut être', 'peut être'],
    },
    {
      type: 'build_sentence',
      instruction: 'Politely accept an offer',
      words: ['merci', 'Oui,'],
      correct: ['Oui,', 'merci'],
      translation: 'Yes, thank you',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the most natural reply',
      question: 'A vendor at Marché des Capucins in Bordeaux offers you a free oyster. You’d love one.',
      options: [
        { text: 'Oui, merci!', correct: true },
        { text: 'Peut-être', correct: false },
        { text: 'Non!', correct: false },
      ],
      explanation: "Clean 'Oui, merci!' — accepting with thanks. 'Peut-être' would confuse him; you actually want it.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — say "no thank you" to a second helping',
      prompt: 'No thank you',
      correct: ['Non merci', 'non merci', 'Non, merci', 'non, merci'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Sunday lunch at a friend's apartment in Lyon. The host is offering things. Navigate three tiny exchanges.",
    lines: [
      {
        speaker: 'npc',
        target: 'Du vin?',
        native: 'Some wine?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Oui, merci', native: 'Yes, thank you', correct: true, feedback: 'Clean and warm. He pours.' },
          { target: 'Oui oui oui', native: 'Yes yes yes', correct: false, feedback: 'Triple yes is a meme — sounds like you’re imitating a stereotype.' },
          { target: 'OK!', native: 'OK!', correct: false, feedback: "Understandable but flatter than 'Oui, merci'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Encore du fromage?',
        native: 'More cheese?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Non, merci', native: 'No, thank you', correct: true, feedback: "Polite and confident — no over-apologising needed." },
          { target: 'Peut-être', native: 'Maybe', correct: false, feedback: "He's standing with a knife above the brie. He needs a yes or no, not a maybe." },
          { target: 'Non non non non', native: 'No no no no', correct: false, feedback: "One clear non is enough. Four sounds panicked." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "See how clean a French 'non, merci' is? No apology, no story. Just polite, decided, kind.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'No thank you (in French)',
        correct: ['Non merci', 'non merci', 'Non, merci', 'non, merci'],
      },
      {
        prompt: 'Maybe (in French)',
        correct: ['Peut-être', 'peut-être', 'Peut être', 'peut être'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice one moment today where you'd say 'maybe' in English. Replace it in your head with 'Peut-être'. Feel the texture of the word — it's softer than English maybe.",
    rwenSignoff: "Even tiny words carry weight. À tout à l’heure.",
  },

  phase8: {
    scenario: "You've been invited to a French apéro at a friend's apartment in Marseille. The host is enthusiastic and wants you to try everything — pastis, olives, tapenade, saucisson, more pastis. You like some, not others, and you're driving home so the booze needs a clear stop. Navigate the offers with grace.",
    rwenRole: "Sébastien — your host, ~35, generous Marseillais who keeps offering more, more, more. Genuinely takes 'Non, merci' without offence; respects 'Peut-être' as a real answer.",
    successCriteria: "User uses 'Oui, merci' to accept what they want, 'Non, merci' (cleanly, no over-apologising) to refuse what they don't, and 'Peut-être' for at least one undecided moment. No fake-yes-then-leave-it-on-the-plate.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
