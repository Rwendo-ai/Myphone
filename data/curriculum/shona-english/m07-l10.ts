import { LessonData } from '../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-rwen-dinner',
  module: 7,
  lesson: 10,
  title: "Rwen's Family Dinner — Full Conversation",
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Tonight is special. Rwen's family has prepared a full dinner for you. You're the honoured guest. From arrival to farewell — navigate the whole meal in Shona. This is everything Module 7 built toward.",
    culturalNote: "A formal family dinner in Zimbabwe can last hours. Food is served in stages, conversation weaves through greeting, storytelling, plans, and memories. The guest who stays and talks is the most honoured. Don't rush to leave.",
  },

  chunks: [
    {
      id: 'vakagadzirira',
      target: 'Vakagadzirira zvose',
      native: 'They prepared everything',
      literal: 'They-prepared all',
      emoji: '🍽️',
      phonetic: 'va-ka-ga-DZI-ri-ra zvo-se',
      audioRef: null,
    },
    {
      id: 'ndinoonga',
      target: 'Ndinoonga',
      native: 'I am grateful',
      literal: 'I-am-grateful',
      emoji: '🙏',
      phonetic: 'ndi-no-ON-ga',
      audioRef: null,
    },
    {
      id: 'usiku_wakanaka',
      target: 'Usiku wakanaka',
      native: 'Good night',
      literal: 'Night good',
      emoji: '🌙',
      phonetic: 'u-SI-ku wa-ka-NA-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ndinoonga — deep gratitude',
    explanation: "'Ndinoonga' expresses deep, ongoing gratitude — more than ndatenda (thank you). 'Ndinoonga zvikuru nemi' (I am deeply grateful to you) is used for significant acts of kindness. It stays with the person longer.",
    examples: [
      { target: 'Ndinoonga', native: 'I am grateful' },
      { target: 'Ndinoonga zvikuru nemi', native: 'I am deeply grateful to you' },
      { target: 'Usiku wakanaka', native: 'Good night' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the dinner phrase to its meaning',
      pairs: [
        { left: 'Vakagadzirira zvose', right: 'They prepared everything' },
        { left: 'Ndinoonga', right: 'I am grateful' },
        { left: 'Usiku wakanaka', right: 'Good night' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "The dinner is over. You want to express deep gratitude. What do you say?",
      question: 'Express deep gratitude:',
      options: [
        { text: 'Ndinoonga zvikuru nemi vose. Vakagadzirira zvakanaka.', correct: true },
        { text: 'Ndaguta', correct: false },
        { text: 'Sara zvakanaka', correct: false },
      ],
      explanation: "'Ndinoonga zvikuru nemi vose' (I am deeply grateful to all of you) + acknowledge the effort = complete, heartfelt close.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am grateful',
      correct: ['Ndinoonga', 'ndinoonga'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the farewell',
      sentence: 'Usiku _____, mhuri yose.',
      options: ['wakanaka', 'wakaipa', 'wangu'],
      correct: 'wakanaka',
      context: 'Good night, whole family.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Good night, thank you for everything'",
      words: ['Usiku', 'wakanaka.', 'Ndinoonga', 'zvose.'],
      correct: ['Usiku', 'wakanaka.', 'Ndinoonga', 'zvose.'],
      translation: 'Good night. I am grateful for everything.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Good night',
      correct: ['Usiku wakanaka', 'usiku wakanaka'],
    },
  ],

  rwenDialogue: {
    intro: "The dinner is done. The family gathers. You must say farewell — in Shona.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tauya tose unoenda. Wakafarira here kudya kwedu?',
        native: 'We all come as you leave. Did you enjoy our food?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Zvakanakisisa zvikuru! Ndinoonga mhuri yose. Vakagadzirira zvakanaka.', native: "It was excellent! I am deeply grateful to the whole family. They prepared it so well.", correct: true, feedback: "Specific, warm, addressed everyone. That farewell will be remembered for years." },
          { target: 'Ndatenda, Sara zvakanaka', native: 'Thank you, stay well', correct: false, feedback: "Good — but go deeper: 'Zvakanakisisa. Ndinoonga mhuri yose.' Give credit to the family specifically." },
          { target: 'Ndadya, ndaguta', native: "I ate, I'm full", correct: false, feedback: "Say more — express gratitude and compliment the food: 'Zvakanakisisa! Ndinoonga mhuri yose.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sara zvakanaka, mwanangu.',
        native: 'Stay well, my child.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Famba zvakanaka, mhuri yose. Ndinoonga. Usiku wakanaka.', native: 'Go well, whole family. I am grateful. Good night.', correct: true, feedback: "Farewell + gratitude + good night. The family smiles as you leave. Module 7 complete." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Complete the farewell: 'Famba zvakanaka, mhuri yose. Ndinoonga. Usiku wakanaka.'" },
          { target: 'Sara zvakanaka', native: 'Stay well', correct: false, feedback: "You're leaving — so it's 'Sara zvakanaka' for them (stay well) and add 'Ndinoonga. Usiku wakanaka.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You ate with my family. You spoke their language. You said goodbye with your heart. Module 7 — done. Food, culture, connection — all yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am grateful', correct: ['Ndinoonga', 'ndinoonga'] },
      { prompt: 'Good night', correct: ['Usiku wakanaka', 'usiku wakanaka'] },
    ],
  },

  mission: {
    title: "Your Module 7 Mission",
    task: "Host a meal this week — even just tea and biscuits. Use the Shona sequence: Mauya zvakanaka → Tauya, Garai → offer food or drink → Taudzai pamwe → Zvakanakisisa → Ndinoonga at the end. Run the whole sequence.",
    rwenSignoff: "Ukama igasva hunozadziswa nekudya. Relationship completed by sharing food. Module 8 — action and daily life — begins next. Tichaonana.",
  },
};

export default lesson;
