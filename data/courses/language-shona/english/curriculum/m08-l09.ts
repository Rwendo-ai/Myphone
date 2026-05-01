import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-kudzidza',
  module: 8,
  lesson: 9,
  title: 'Kudzidza — To Learn',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You've been doing it this whole time — kudzidza (to learn). And ndinodzidzа ChiShona (I learn Shona) is one of the sentences you can say with complete truth. Let's use this verb fully and celebrate what it means.",
    culturalNote: "Education is deeply valued in Zimbabwe — the country has one of Africa's highest literacy rates. 'Kudzidza' carries enormous positive weight in Shona culture. Saying you are learning something earns immediate respect.",
  },

  chunks: [
    {
      id: 'ndinodzidzа',
      target: 'Ndinodzidzа',
      native: 'I learn (habitually)',
      literal: 'I-learn (habitual)',
      emoji: '📚',
      phonetic: 'ndi-no-DZI-dza',
      audioRef: null,
    },
    {
      id: 'ndirikudzidza',
      target: 'Ndirikudzidzа',
      native: 'I am learning (right now)',
      literal: 'I-am-learning (continuous)',
      emoji: '🔄',
      phonetic: 'ndi-ri-ku-DZI-dza',
      audioRef: null,
    },
    {
      id: 'ndadzidzа',
      target: 'Ndadzidzа',
      native: 'I learned / I have learned',
      literal: 'I-learned (completed)',
      emoji: '🎓',
      phonetic: 'nda-DZI-dza',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kudzidza — the verb that describes your journey',
    explanation: "'Ndinodzidzа' (I learn, habitually). 'Ndirikudzidzа' (I am learning right now). 'Ndadzidzа' (I have learned). 'Ndichadzidzа' (I will learn). These four forms describe your entire relationship with Rwendo — past, present, and future.",
    examples: [
      { target: 'Ndinodzidzа ChiShona', native: 'I learn Shona (regularly)' },
      { target: 'Ndirikudzidzа zvishoma', native: 'I am learning little by little' },
      { target: 'Ndadzidzа mazita emhuri', native: 'I learned family names' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its tense',
      pairs: [
        { left: 'Ndinodzidzа', right: 'I learn (habitual)' },
        { left: 'Ndirikudzidzа', right: 'I am learning now' },
        { left: 'Ndadzidzа', right: 'I have learned' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say you are learning right now',
      sentence: 'Ndiri kudzidzа _____ nhasi.',
      options: ['ChiShona', 'ChiRungu', 'Mutengesi'],
      correct: 'ChiShona',
      context: 'I am learning Shona today.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I am learning (right now)',
      correct: ['Ndirikudzidzа', 'ndirikudzidza'],
    },
    {
      type: 'multiple_choice',
      instruction: "You completed 5 modules. How do you express what you've done?",
      question: 'I have learned...:',
      options: [
        { text: 'Ndadzidzа ChiShona zvishoma', correct: true },
        { text: 'Ndichadzidzа ChiShona', correct: false },
        { text: 'Ndinodzidzа ChiShona', correct: false },
      ],
      explanation: "'Ndadzidzа' = I have learned (completed past). It marks achievement — what you have accomplished.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I have learned Shona little by little'",
      words: ['Ndadzidzа', 'ChiShona', 'zvishoma', 'nezvishoma.'],
      correct: ['Ndadzidzа', 'ChiShona', 'zvishoma', 'nezvishoma.'],
      translation: 'I have learned Shona little by little',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I learn Shona',
      correct: ['Ndinodzidzа ChiShona', 'ndinodzidzа chishona', 'ndinodzidza chishona'],
    },
  ],

  rwenDialogue: {
    intro: "You've almost completed Module 8. Rwen reflects on your journey together.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Ndaona kukura kwako. Kubva 'Mhoro' kusvika pano — wakafamba nzira refu.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndirikudzidzа zvishoma nezvishoma. Ndadzidzа zvakawanda. Ndichadzidzа zvakawanda zvakare.', native: 'I am learning little by little. I have learned a lot. I will learn a lot more.', correct: true, feedback: "Three tenses in one answer — present, past, future. Your whole learning journey in one sentence." },
          { target: 'Ndinodzidzа', native: 'I learn', correct: false, feedback: "Go further — 'Ndirikudzidzа. Ndadzidzа zvakawanda. Ndichadzidzа zvakare.' Past, present, future." },
          { target: 'Ndatenda', native: 'Thank you', correct: false, feedback: "Show what you've done — 'Ndadzidzа zvakawanda. Ndirikudzidzа zvakare. Ndichadzidzа zvakawanda.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvishoma nezvishoma — little by little — that's how fluency is built. One step. Then another. Always.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am learning (now)', correct: ['Ndirikudzidzа', 'ndirikudzidza'] },
      { prompt: 'I have learned (past)', correct: ['Ndadzidzа', 'ndadzidza'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Write or say the three sentences: 'Ndadzidzа [something].' 'Ndirikudzidzа [something].' 'Ndichadzidzа [something].' Your past, present, and future of learning — in Shona.",
    rwenSignoff: "Kudzidza — to learn — is a lifelong verb. Famba zvakanaka.",
  },

  phase8: {
    scenario: "Friday 6:15pm at the Copacabana kombi rank in town. You're waiting for the kombi to fill up to head home, and Tendai is on WhatsApp from Joburg, killing time too. He's surprised you're texting him in Shona now and asks: 'Wadzidza chii kubvira pakapedzisira ndakakuona?' He wants past, present, and future of your Shona learning journey.",
    rwenRole: "Tendai — friend in Joburg, peer register, impressed and a little jealous you're learning the language he barely uses anymore.",
    successCriteria: "User produces all three tenses in one reply: 'Ndadzidza...' (past — what's been learned), 'Ndirikudzidza...' (present continuous — what's currently being learned), and 'Ndichadzidza...' (future — what's next). Three distinct tense forms tied to real curriculum content.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
