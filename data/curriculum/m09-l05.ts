import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l05-kombi',
  module: 9,
  lesson: 5,
  title: 'Kombi — Taking Public Transport',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "The kombi is Zimbabwe's lifeline — minibus taxis that run every major route in every city and town. No app. No schedule. You shout your destination, the driver shouts if they're going there. You jump in. This is how Zimbabwe moves.",
    culturalNote: "Kombis are chaotic, colourful, and essential to Zimbabwean life. The conductor (mudhara wekombini) shouts destinations and collects fares. Knowing how to interact with kombis in Shona earns you genuine local credibility.",
  },

  chunks: [
    {
      id: 'kombi',
      shona: 'Kombi',
      english: 'Minibus taxi / Kombi',
      literal: 'Kombi (from kombivan)',
      emoji: '🚌',
      phonetic: 'KOM-bi',
      audioRef: null,
    },
    {
      id: 'mira_pano',
      shona: 'Mira pano!',
      english: 'Stop here!',
      literal: 'Stop here!',
      emoji: '🛑',
      phonetic: 'MI-ra PA-no',
      audioRef: null,
    },
    {
      id: 'ndinoda_kuburuka',
      shona: 'Ndinoda kuburuka pano',
      english: 'I want to get off here',
      literal: 'I-want to-alight here',
      emoji: '🚪',
      phonetic: 'ndi-no-da ku-bu-RU-ka PA-no',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mira (stop) — the command you need most',
    explanation: "'Mira' (stop) is one of the most important words you'll shout in a kombi. Mira pano (stop here), Mira pedo nechipitari (stop near the hospital). Loud, clear, and immediate — kombis don't wait.",
    examples: [
      { shona: 'Mira pano!', english: 'Stop here!' },
      { shona: 'Ndinoda kuburuka pano', english: 'I want to get off here' },
      { shona: 'Uri kuenda kuhospitali?', english: 'Are you going to the hospital?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the kombi phrase to its meaning',
      pairs: [
        { left: 'Kombi', right: 'Minibus taxi' },
        { left: 'Mira pano!', right: 'Stop here!' },
        { left: 'Ndinoda kuburuka pano', right: 'I want to get off here' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell the driver to stop',
      sentence: '_____ pano, ndapota!',
      options: ['Mira', 'Enda', 'Tora'],
      correct: 'Mira',
      context: "Stop here, please!",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Stop here!',
      correct: ['Mira pano!', 'mira pano!', 'Mira pano', 'mira pano'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're in a kombi and need to get off at the next stop. What do you say?",
      question: 'I want to get off here:',
      options: [
        { text: 'Ndinoda kuburuka pano!', correct: true },
        { text: 'Ndinoda kuenda', correct: false },
        { text: 'Ndiri kuenda', correct: false },
      ],
      explanation: "'Ndinoda kuburuka pano' — I want to alight here. Kuburuka = to descend/get off.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Please stop here, I am getting off'",
      words: ['Mira', 'pano,', 'ndapota.', 'Ndinoda', 'kuburuka.'],
      correct: ['Mira', 'pano,', 'ndapota.', 'Ndinoda', 'kuburuka.'],
      translation: 'Please stop here. I want to get off.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I want to get off here',
      correct: ['Ndinoda kuburuka pano', 'ndinoda kuburuka pano'],
    },
  ],

  rwenDialogue: {
    intro: "You're in a crowded kombi heading into Harare. Your stop is coming up fast.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Mira pano! Ndinoda kuburuka!', english: 'Stop here! I want to get off!', correct: true, feedback: "Loud and clear. The driver stops. You get off. That's how kombi life works." },
          { shona: 'Ndapota, mira', english: 'Please stop', correct: false, feedback: "In a kombi you need volume — 'Mira pano! Ndinoda kuburuka!' Say it loudly." },
          { shona: 'Handida kuenda mberi', english: "I don't want to go further", correct: false, feedback: "Too wordy for a kombi. Keep it short and loud: 'Mira pano! Ndinoda kuburuka!'" },
        ],
      },
      {
        speaker: 'npc',
        shona: 'Mira! Buruka!',
        english: 'Stopping! Get off!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Waburuka. You navigated a kombi in Shona. That's Harare. That's real.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Stop here!', correct: ['Mira pano!', 'mira pano!', 'Mira pano', 'mira pano'] },
      { prompt: 'I want to get off here', correct: ['Ndinoda kuburuka pano', 'ndinoda kuburuka pano'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you're on any public transport, mentally practice: 'Mira pano! Ndinoda kuburuka.' Feel the confidence of knowing you could navigate a Harare kombi.",
    rwenSignoff: "The kombi is Zimbabwe's heartbeat. Now you can ride it. Famba zvakanaka.",
  },
};

export default lesson;
