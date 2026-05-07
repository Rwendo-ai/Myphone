import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l04-shaakahari',
  module: 7,
  lesson: 4,
  title: 'Shaakahari — Vegetarian or Not',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Roughly 35-40% of Indians are lifelong vegetarians — among the highest rates in the world. Asking 'shaakahari ya maansaahari?' isn't strange in India. It's the second question after your name. Get the words right and you can navigate any menu, any home, any temple kitchen.",
    culturalNote: "'Shaakahari' (शाकाहारी) literally means 'plant-eater'. 'Maansaahari' (मांसाहारी) means 'meat-eater'. Many Hindu, Jain, and some Sikh families are strictly vegetarian — and 'pure veg' on a menu often means no onion or garlic either. Ask before assuming.",
  },

  chunks: [
    {
      id: 'shaakahari',
      target: 'शाकाहारी',
      native: 'Vegetarian',
      literal: 'Shaakahari — plant-eater (shaak = plant + ahari = eater)',
      emoji: '🥦',
      phonetic: 'shaa-kaa-HAA-ree',
      audioRef: null,
    },
    {
      id: 'maansaahari',
      target: 'मांसाहारी',
      native: 'Non-vegetarian / meat-eater',
      literal: 'Maansaahari — meat-eater',
      emoji: '🍖',
      phonetic: 'maan-saa-HAA-ree',
      audioRef: null,
    },
    {
      id: 'main_shaakahari_hoon',
      target: 'मैं शाकाहारी हूँ',
      native: 'I am vegetarian',
      literal: 'Main shaakahari hoon — I vegetarian am',
      emoji: '🌱',
      phonetic: 'MAIN shaa-kaa-HAA-ree HOON',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Main X hoon — "I am X"',
    explanation: "'Main' (मैं) = I. 'Hoon' (हूँ) = am. The simplest declarative shape in Hindi: Main + descriptor + hoon. 'Main shaakahari hoon' (I am vegetarian). 'Main bharatiya hoon' (I am Indian). The word order: subject → descriptor → verb (Hindi puts the verb at the end).",
    examples: [
      { target: 'Main shaakahari hoon', native: 'I am vegetarian' },
      { target: 'Main maansaahari hoon', native: 'I am non-vegetarian' },
      { target: 'Main bharatiya nahi hoon', native: 'I am not Indian' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the diet word to its meaning',
      pairs: [
        { left: 'Shaakahari', right: 'Vegetarian' },
        { left: 'Maansaahari', right: 'Non-vegetarian' },
        { left: 'Main shaakahari hoon', right: 'I am vegetarian' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'State that you\'re vegetarian',
      sentence: 'Main _____ hoon.',
      options: ['shaakahari', 'maansaahari', 'bharatiya'],
      correct: 'shaakahari',
      context: 'You\'re vegetarian and need to say so before ordering.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I am vegetarian',
      correct: ['Main shaakahari hoon', 'main shaakahari hoon'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You\'re a meat-eater explaining your diet to a Western chef who keeps insisting you\'re vegetarian because "all Indians are". Best line:',
      question: 'Setting the record straight:',
      options: [
        { text: 'Nahi, main maansaahari hoon — chicken theek hai', correct: true },
        { text: 'Sometimes shaakahari, sometimes not', correct: false },
        { text: 'Just give me vegetables', correct: false },
      ],
      explanation: "'Nahi, main maansaahari hoon' — clear and culturally literate. About 60-65% of Indians DO eat meat (chicken, fish, mutton). The 'all Indians vegetarian' assumption is a common Western stereotype.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am not vegetarian"',
      words: ['hoon', 'shaakahari', 'Main', 'nahi'],
      correct: ['Main', 'shaakahari', 'nahi', 'hoon'],
      translation: 'I am not vegetarian',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Non-vegetarian / meat-eater',
      correct: ['Maansaahari', 'maansaahari'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Mumbai restaurant with a colleague. The waiter is taking your order and assumes you'll have what your friend is having — chicken biryani.",
    lines: [
      {
        speaker: 'npc',
        target: 'दो चिकन बिरयानी?',
        native: 'Two chicken biryanis?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Nahi bhaiya, main shaakahari hoon. Mere liye veg biryani milegi?', native: 'No brother, I\'m vegetarian. Can I get veg biryani?', correct: true, feedback: 'Stated diet clearly with "shaakahari hoon", then politely asked for the veg version with "milegi". Perfect.' },
          { target: 'No chicken', native: 'No chicken', correct: false, feedback: 'Works, but the Hindi version travels further: "Main shaakahari hoon. Veg biryani milegi?"' },
          { target: 'Mujhe sirf sabzi do', native: 'Just give me vegetables', correct: false, feedback: 'Direct but vague. Better: "Main shaakahari hoon" sets the frame, then ask for a specific veg dish.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'जी, एक चिकन और एक वेज।',
        native: 'Yes, one chicken and one veg.',
      },
      {
        speaker: 'rwen',
        rwenLine: "One word — shaakahari — saved a whole confusing conversation. India has a vocabulary for this for a reason.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am vegetarian', correct: ['Main shaakahari hoon', 'main shaakahari hoon'] },
      { prompt: 'Non-vegetarian / meat-eater', correct: ['Maansaahari', 'maansaahari'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Whatever you actually eat, say it out loud once today: 'Main shaakahari hoon' or 'Main maansaahari hoon'. Notice how you describe yourself in Hindi by what you eat — that's how India introduces itself too.",
    rwenSignoff: "Plant-eater or meat-eater — both belong at the table. Phir milenge.",
  },

  phase8: {
    scenario: "You\'re at a small bistro in Bandra explaining your dietary needs to a French chef who's spent two days in India and keeps insisting you must be vegetarian because 'isn't everyone here?'. He's about to bring out a paneer dish you didn't order.",
    rwenRole: "The chef — early 40s, well-meaning but operating on stereotypes; he\'ll listen if you correct him calmly and in clear Hindi terms he can verify with his Indian sous-chef.",
    successCriteria: "User uses 'main shaakahari hoon' or 'main maansaahari hoon' to state their actual diet (NOT a wishy-washy 'sometimes I eat...'), pushes back politely on the chef\'s stereotype that all Indians are vegetarian by citing the maansaahari category, and either confirms a specific dish using veg/non-veg framing — clarity over politeness here.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
