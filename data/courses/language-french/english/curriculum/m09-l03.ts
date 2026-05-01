import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-distance',
  module: 9,
  lesson: 3,
  title: "C'est loin? — Near, Far",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two streets in Paris look identical. One is a 4-minute walk, one is a 25-minute walk. The difference is whether you bother. Today we learn how to ASK how far — and how to read the answer fast: 'à cinq minutes à pied' is fine. 'À une demi-heure' is a coffee, not a stroll.",
    culturalNote: "French distances are time-based, not metric. Nobody says '600 metres' to a stranger — they say 'cinq minutes à pied' (five minutes on foot). The mode of transport changes everything: 'à pied' (on foot), 'en voiture' (by car), 'en métro' (by métro). And 'juste à côté' — 'just next door' — is the magic phrase that means 'you're already there'.",
  },

  chunks: [
    {
      id: 'cest_loin',
      target: "C'est loin?",
      native: 'Is it far?',
      literal: 'It-is far?',
      emoji: '🤔',
      phonetic: 'say LWAHN',
      audioRef: null,
    },
    {
      id: 'a_cinq_minutes_a_pied',
      target: 'À cinq minutes à pied',
      native: 'Five minutes on foot',
      literal: 'At five minutes on foot',
      emoji: '🚶',
      phonetic: 'ah sank mee-NOOT ah pee-AY',
      audioRef: null,
    },
    {
      id: 'juste_a_cote',
      target: 'Juste à côté',
      native: 'Just next to it / right nearby',
      literal: 'Just at side',
      emoji: '📍',
      phonetic: 'zhoost ah koh-TAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'À + time + à pied / en voiture / en métro',
    explanation: "French distance is built like this: 'à' + duration + mode. 'À cinq minutes à pied' = 5 minutes on foot. 'À dix minutes en voiture' = 10 by car. 'À une heure en train' = an hour by train. Notice: 'à pied' (on foot) uses 'à', but every vehicle uses 'en' — en voiture, en métro, en bus, en train, en avion. One exception: 'à vélo' (by bike), often said 'en vélo' too.",
    examples: [
      { target: "C'est à cinq minutes à pied.", native: "It's a five-minute walk." },
      { target: 'À vingt minutes en métro.', native: 'Twenty minutes by métro.' },
      { target: 'Juste à côté de la pharmacie.', native: 'Right next to the pharmacy.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: "C'est loin?", right: 'Is it far?' },
        { left: 'À cinq minutes à pied', right: 'Five minutes on foot' },
        { left: 'Juste à côté', right: 'Just next to it' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You want to say it takes 10 minutes by métro.',
      sentence: 'À dix minutes _____ métro.',
      options: ['à', 'en', 'au'],
      correct: 'en',
      context: "All vehicles use 'en' — en métro, en bus, en voiture, en train. Only 'à pied' (on foot) uses 'à'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Is it far?',
      correct: ["C'est loin?", "C'est loin", "c'est loin?", "c'est loin", "Cest loin?", "cest loin?"],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell someone the bakery is a 5-minute walk.',
      words: ['boulangerie', 'à', 'cinq', 'minutes', 'pied.', 'La', 'à', 'est'],
      correct: ['La', 'boulangerie', 'est', 'à', 'cinq', 'minutes', 'à', 'pied.'],
      translation: "The bakery is five minutes on foot.",
    },
    {
      type: 'multiple_choice',
      instruction: "Someone tells you a place is 'juste à côté'. Are you there yet, or far?",
      question: "What does 'juste à côté' mean?",
      options: [
        { text: 'Right nearby — basically already there', correct: true },
        { text: 'A serious walk away', correct: false },
        { text: 'On the other side of the city', correct: false },
      ],
      explanation: "'Juste à côté' literally means 'just at the side' — it means right next door, often within 50 metres. If you hear it, stop walking and look around.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Five minutes on foot',
      correct: ['À cinq minutes à pied', 'à cinq minutes à pied', 'A cinq minutes a pied', 'a cinq minutes a pied'],
    },
  ],

  rwenDialogue: {
    intro: "You ask a Parisian: where's the closest pharmacy? Listen for the time, then check the mode.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: "Excusez-moi, la pharmacie c'est loin?", native: "Excuse me, is the pharmacy far?", correct: true, feedback: "Nice — 'c'est loin?' is the everyday version of 'is it far'. Direct, friendly." },
          { target: "Excusez-moi, où sont la pharmacie?", native: "(wrong agreement)", correct: false, feedback: "One pharmacy → singular 'est'. And you didn't ask if it's far yet." },
          { target: "Pharmacie?", native: 'Pharmacy?', correct: false, feedback: 'Polite first — Excusez-moi, then your question.' },
        ],
      },
      {
        speaker: 'npc',
        target: "Non, juste à côté — à deux minutes à pied.",
        native: 'No, right nearby — two minutes on foot.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Ah, parfait. Merci beaucoup!", native: 'Ah, perfect. Thanks a lot!', correct: true, feedback: "You heard 'juste à côté' and 'à pied' — full comprehension. Closing with 'merci beaucoup' is exactly right." },
          { target: "C'est loin alors?", native: "(you ignored the answer)", correct: false, feedback: "She just said it's NOT far — two minutes on foot. Echo 'parfait, merci' instead." },
          { target: "En voiture?", native: 'By car?', correct: false, feedback: "She literally said 'à pied' — on foot. Two minutes on foot, no need for a car." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Distance in France is felt in minutes, not metres. Two minutes à pied = around the corner. Trust it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Is it far? (in French, casual)',
        correct: ["C'est loin?", "C'est loin", "c'est loin?", "c'est loin"],
      },
      {
        prompt: 'Five minutes on foot (in French)',
        correct: ['À cinq minutes à pied', 'à cinq minutes à pied', 'A cinq minutes a pied', 'a cinq minutes a pied'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick three places near you — café, pharmacy, station. Out loud, in French, say how far each one is using 'à ___ minutes à pied' or 'en métro'. Three sentences. Build the muscle memory before you ever need it in Paris.",
    rwenSignoff: "Tomorrow we name the métro, the bus, and the train — the tools of distance. À demain.",
  },

  phase8: {
    scenario: "You've just exited Bastille métro and want to find a particular wine bar — Le Baron Rouge. You ask three different locals (a barista, a pedestrian, a kiosk owner) the same question — 'C'est loin?' — and you have to PARSE three different time-and-mode answers. One says 'à pied', one says 'en métro', one says 'juste à côté'. Tell Rwen at the end which one was closest.",
    rwenRole: "Three short personas in sequence: (1) Léa, barista, says '10 minutes à pied'; (2) Karim, kiosk owner, says 'à 5 minutes en métro'; (3) Sophie, pedestrian, says 'juste à côté, à deux minutes'. Each answer in French. User confirms they understood by repeating the time and mode.",
    successCriteria: "User asks 'C'est loin?' (or 'c'est à combien de minutes') at least twice. Correctly identifies which of the three answers is the closest (Sophie's 'juste à côté'). Bonus: user uses 'à pied' or 'en métro' correctly themselves at least once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
