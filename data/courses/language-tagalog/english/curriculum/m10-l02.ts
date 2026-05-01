import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02-angry',
  module: 10,
  lesson: 2,
  title: 'Galit ako — Angry',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Sometimes the polite word isn't enough. Galit ako — I'm angry. Naiinis ako — I'm annoyed. Today you learn to name the harder feelings without exploding.",
    culturalNote: "Filipinos often soften anger in public — pakikisama (getting along) values not making a scene. Saying 'naiinis ako' to a friend privately is normal; shouting 'galit ako' across a room is not. The vocabulary is the same — the volume is the cultural skill.",
  },

  chunks: [
    {
      id: 'galit_ako',
      target: 'Galit ako',
      native: "I'm angry",
      literal: 'Angry I',
      emoji: '😠',
      phonetic: 'ga-LIT a-KO',
      audioRef: null,
    },
    {
      id: 'naiinis_ako',
      target: 'Naiinis ako',
      native: "I'm annoyed",
      literal: 'Being-annoyed I',
      emoji: '😤',
      phonetic: 'na-i-I-nis a-KO',
      audioRef: null,
    },
    {
      id: 'kumalma_ka',
      target: 'Kumalma ka',
      native: 'Calm down',
      literal: 'Calm-down you',
      emoji: '🌬️',
      phonetic: 'ku-MAL-ma ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Strong feelings + softening',
    explanation: "**Galit** is the loud one — full anger. **Naiinis** is the smaller, everyday irritation (like a slow taxi). Soften both with **medyo** (a little): *medyo naiinis ako* lands softer than *galit ako*. **Kumalma ka** is the gentle command form: 'calm down'.",
    examples: [
      { target: 'Galit ako', native: "I'm angry" },
      { target: 'Medyo naiinis ako', native: "I'm a little annoyed" },
      { target: 'Kumalma ka muna', native: 'Calm down first' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Galit ako', right: "I'm angry" },
        { left: 'Naiinis ako', right: "I'm annoyed" },
        { left: 'Kumalma ka', right: 'Calm down' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your jeepney has been stuck in traffic for an hour. Tell your friend.',
      sentence: 'Medyo _____ ako sa traffic.',
      options: ['naiinis', 'masaya', 'galit'],
      correct: 'naiinis',
      context: "Stuck in traffic = annoyance, not full anger. Galit would be too strong.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Calm down',
      correct: ['Kumalma ka', 'kumalma ka'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "I\'m a little angry"',
      words: ['ako', 'Medyo', 'galit'],
      correct: ['Medyo', 'galit', 'ako'],
      translation: "I'm a little angry",
    },
    {
      type: 'multiple_choice',
      instruction: 'Your kaibigan is shouting at the WiFi router. You want to gently de-escalate. What do you say?',
      question: 'Pick the kindest line',
      options: [
        { text: 'Kumalma ka muna', correct: true },
        { text: 'Galit ako', correct: false },
        { text: 'Masaya ako', correct: false },
      ],
      explanation: "Kumalma ka muna = 'calm down first'. Muna softens it to a suggestion, not an order.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "I'm annoyed",
      correct: ['Naiinis ako', 'naiinis ako'],
    },
  ],

  rwenDialogue: {
    intro: "Your housemate forgot to pay the electric bill — again. The lights cut out mid-meeting. He walks in and sees your face.",
    lines: [
      {
        speaker: 'npc',
        target: 'Sorry, sorry — kumusta?',
        native: 'Sorry, sorry — how are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Medyo naiinis ako, pare.', native: "I'm a little annoyed, friend.", correct: true, feedback: "Honest, soft, and uses medyo to keep the peace. Pakikisama protected." },
          { target: 'Galit na galit ako!', native: "I'm super angry!", correct: false, feedback: "True maybe, but escalates fast — saving full galit for bigger things keeps friendships intact." },
          { target: 'Masaya ako.', native: "I'm happy.", correct: false, feedback: "Sarcasm doesn't translate well in Tagalog — say what you mean." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Pasensya na — bukas, magbabayad ako.',
        native: "Sorry — tomorrow, I'll pay.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You expressed a real frustration without burning the room down. That's a real Tagalog skill.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm angry (in Tagalog)", correct: ['Galit ako', 'galit ako'] },
      { prompt: 'Calm down (in Tagalog)', correct: ['Kumalma ka', 'kumalma ka'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time something small irritates you today — bad WiFi, slow line, anything — say to yourself in Tagalog: 'Medyo naiinis ako.' Just naming it softens it.",
    rwenSignoff: "Huminga ka muna — breathe first. Bukas ulit — see you tomorrow.",
  },

  phase8: {
    scenario: "You're at a sari-sari store. The tindera gave you wrong change — short by ₱50. You want to say something without making a scene; pakikisama matters but so does the ₱50.",
    rwenRole: "Aling Bing — the tindera, mid-50s, a bit defensive but reasonable. She's been having a long day too.",
    successCriteria: "User politely flags the issue using a softened irritation (e.g. 'Medyo naiinis ako, kulang yata ang sukli') instead of full galit. Stays calm, doesn't shout. Bonus: ends warmly.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
