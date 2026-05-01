import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-fear',
  module: 10,
  lesson: 3,
  title: 'Peur & Inquiétude — Fear & Worry',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Here's a quirk that English speakers always trip on — in French, you don't BE afraid, you HAVE fear. 'J'ai peur.' Same as 'J'ai faim' (I'm hungry) or 'J'ai soif' (I'm thirsty). Fear is something you have, then you put it down.",
    culturalNote: "Most French emotions use 'être' (to be) — je suis content, je suis triste. But a small group uses 'avoir' (to have) — j'ai peur, j'ai honte (I'm ashamed), j'ai faim. They feel like things that come and go, not who you are. Worth noticing — it changes how a culture talks about feelings.",
  },

  chunks: [
    {
      id: 'jai_peur_de',
      target: "J'ai peur de",
      native: "I'm scared of",
      literal: 'I-have fear of',
      emoji: '😨',
      phonetic: 'zhay PUHR duh',
      audioRef: null,
    },
    {
      id: 'je_suis_inquiet',
      target: 'Je suis inquiet/inquiète',
      native: "I'm worried",
      literal: 'I am worried',
      emoji: '😟',
      phonetic: 'zhuh swee zahn-KYAY / zahn-KYET',
      audioRef: null,
    },
    {
      id: 'ne_tinquiete_pas',
      target: "Ne t'inquiète pas",
      native: "Don't worry",
      literal: 'Not yourself-worry not',
      emoji: '🤍',
      phonetic: 'nuh tahn-KYET pah',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Avoir peur — fear uses 'have', not 'be'",
    explanation: "Fear in French goes with 'avoir' (have), exactly like hunger and thirst. 'J'ai peur' = literally 'I have fear'. Add 'de' + the thing: 'J'ai peur des araignées' (I'm scared OF spiders). 'Inquiet' (worried) is different — it uses être, like content/triste, and changes for feminine: inquiète.",
    examples: [
      { target: 'J\'ai peur du noir', native: "I'm scared of the dark (peur + de + le → du)" },
      { target: 'Elle est inquiète', native: "She's worried" },
      { target: "Ne t'inquiète pas, ça va aller", native: "Don't worry, it'll be fine" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: "J'ai peur de", right: "I'm scared of" },
        { left: 'Je suis inquiet/inquiète', right: "I'm worried" },
        { left: "Ne t'inquiète pas", right: "Don't worry" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Fear in French uses which verb?",
      sentence: "J'_____ peur des chiens.",
      options: ['ai', 'suis', 'est'],
      correct: 'ai',
      context: "Fear is a 'have' word in French — 'j'ai peur', not 'je suis peur'. Same family as 'j'ai faim' (I'm hungry).",
    },
    {
      type: 'translate',
      instruction: "Type in French — admit a fear honestly",
      prompt: "I'm scared of the dark",
      correct: ["J'ai peur du noir", "j'ai peur du noir"],
    },
    {
      type: 'build_sentence',
      instruction: 'A friend is anxious about tomorrow. Reassure them — put the words in order.',
      words: ["t'", 'pas,', 'inquiète', 'Ne', 'ça', 'aller', 'va'],
      correct: ['Ne', "t'", 'inquiète', 'pas,', 'ça', 'va', 'aller'],
      translation: "Don't worry, it'll be fine",
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend says she has a job interview tomorrow. She looks tense. What's the most natural reassurance?",
      question: 'Pick the warm, correct line',
      options: [
        { text: "Ne t'inquiète pas, tu es prête.", correct: true },
        { text: "Je suis peur.", correct: false },
        { text: "Calme-toi!", correct: false },
      ],
      explanation: "'Ne t'inquiète pas' is the kind, friend-register reassurance. 'Je suis peur' is wrong — fear uses 'avoir'. 'Calme-toi' aims at her like she's overreacting.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — admit a worry to a close friend',
      prompt: "I'm worried",
      correct: ['Je suis inquiet', 'Je suis inquiète', 'je suis inquiet', 'je suis inquiète'],
    },
  ],

  rwenDialogue: {
    intro: "It's 11pm. You and your friend Léa are about to walk home through a quieter street in Paris. She notices you've gone quiet.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tu vas bien? Tu es silencieux/silencieuse.',
        native: "You okay? You're quiet.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'J\'ai un peu peur de marcher seul(e). Mais ça va avec toi.', native: "I'm a little scared to walk alone. But I'm fine with you.", correct: true, feedback: 'Honest, specific, and you used "avoir peur" correctly. That trust matters.' },
          { target: 'Je suis peur.', native: "I am fear. (wrong verb)", correct: false, feedback: "Fear uses avoir, not être — 'j'ai peur', never 'je suis peur'. This is the rule that always trips English speakers." },
          { target: "Ne t'inquiète pas.", native: "Don't worry.", correct: false, feedback: "She asked about you. Telling her not to worry deflects — name what you actually feel." },
        ],
      },
      {
        speaker: 'npc',
        target: "Ne t'inquiète pas. On rentre ensemble.",
        native: "Don't worry. We're going home together.",
      },
      {
        speaker: 'rwen',
        rwenLine: 'You named a fear in French AND used the right verb. That second part — j\'AI peur, not je SUIS peur — is the one English speakers chase for years.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — and remember, fear uses AVOIR.',
    prompts: [
      {
        prompt: "I'm scared (in French — beginning of the phrase)",
        correct: ["J'ai peur", "j'ai peur"],
      },
      {
        prompt: "Don't worry (to a friend)",
        correct: ["Ne t'inquiète pas", "ne t'inquiète pas", "Ne t'inquiete pas"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Catch yourself the next time you say 'I'm afraid of...' in English. Translate it in your head: 'J'ai peur de...' Notice the verb shift — you HAVE the fear, you're not the fear.",
    rwenSignoff: "Tu n'es pas seul(e). À demain.",
  },

  phase8: {
    scenario: "It's the evening before your first solo trip to a small French village to visit your partner's grandmother — alone, in French. You're calling your French friend Marc to admit you're nervous. He's at home, has time, and wants to listen.",
    rwenRole: "Marc — your French friend, late 30s, calm and reassuring; he uses 'tu' throughout, will gently correct 'je suis peur' to 'j'ai peur', and offers reassurance with 'ne t'inquiète pas'.",
    successCriteria: "User uses 'J'ai peur de' + the specific worry (NOT 'je suis peur'), names a separate worry with 'Je suis inquiet/inquiète' using the correct gendered form, and accepts Marc's 'ne t'inquiète pas' with a thank-you. Verb-choice (avoir vs être) is the technical test.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
