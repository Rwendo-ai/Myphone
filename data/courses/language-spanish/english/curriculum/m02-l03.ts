import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l03-perdon',
  module: 2,
  lesson: 3,
  title: 'Perdón / Lo siento — Sorry',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Spanish has two everyday apology words and they aren't interchangeable. 'Perdón' is for small bumps — excuse me, my fault. 'Lo siento' is heavier — I'm sorry, I feel it. Use the wrong one and the apology either inflates or shrinks past the moment.",
    culturalNote: "In Latin America, a sincere apology is direct and unhurried. 'Perdón' covers the small stuff: brushing past someone, mishearing, interrupting. 'Lo siento' is for real regret — bad news, condolences, a mistake that cost something. Mumbling 'lo siento' for stepping on a foot sounds dramatic; saying 'perdón' at a funeral sounds cold.",
  },

  chunks: [
    {
      id: 'perdon',
      target: 'Perdón',
      native: 'Sorry / Excuse me',
      literal: 'Pardon',
      emoji: '🤚',
      phonetic: 'pehr-DOHN',
      audioRef: null,
    },
    {
      id: 'lo_siento',
      target: 'Lo siento',
      native: "I'm sorry (I feel it)",
      literal: 'It I-feel',
      emoji: '🕊️',
      phonetic: 'lo SYEN-toh',
      audioRef: null,
    },
    {
      id: 'no_se_preocupe',
      target: 'No se preocupe',
      native: "Don't worry about it (formal)",
      literal: 'Not yourself worry',
      emoji: '👌',
      phonetic: 'no seh preh-oh-KOO-peh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Perdón vs lo siento — weight matters',
    explanation: "'Perdón' is light and frequent — bumping someone, asking them to repeat, interrupting. 'Lo siento' is heavy — real regret, bad news, condolences. Match the word to the weight of the moment. The reply you'll hear most: 'No se preocupe' (formal) or 'no te preocupes' (informal) — don't worry about it.",
    examples: [
      { target: 'Perdón', native: 'Sorry / excuse me (light bump)' },
      { target: 'Lo siento mucho', native: "I'm so sorry (heavy regret)" },
      { target: 'No se preocupe', native: "Don't worry (formal reply)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Perdón', right: 'Sorry / excuse me' },
        { left: 'Lo siento', right: "I'm sorry (real regret)" },
        { left: 'No se preocupe', right: "Don't worry about it" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You step on someone's foot in a packed bus. What's the right word?",
      question: 'Choose the appropriate apology',
      options: [
        { text: 'Perdón', correct: true },
        { text: 'Lo siento mucho', correct: false },
        { text: 'No se preocupe', correct: false },
      ],
      explanation: "'Perdón' fits a small bump. 'Lo siento mucho' would be melodramatic for stepping on a foot. 'No se preocupe' is what THEY say back to you.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Sorry / Excuse me (light)',
      correct: ['Perdón', 'perdón', 'Perdon', 'perdon'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right weight',
      sentence: '_____ por su pérdida.',
      options: ['Lo siento', 'Perdón', 'De nada'],
      correct: 'Lo siento',
      context: 'A friend has just told you their grandmother passed away.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I\'m really sorry"',
      words: ['mucho', 'Lo', 'siento'],
      correct: ['Lo', 'siento', 'mucho'],
      translation: "I'm really sorry",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "Don't worry about it (formal)",
      correct: ['No se preocupe', 'no se preocupe'],
    },
  ],

  rwenDialogue: {
    intro: "You arrived 25 minutes late to meet a Colombian colleague at a café in La Candelaria, Bogotá. He's been waiting with his coffee gone cold.",
    lines: [
      {
        speaker: 'npc',
        target: '¿Dónde estaba? Lo estuve esperando un buen rato.',
        native: 'Where were you? I waited a long time.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Lo siento mucho. Me retrasé.', native: "I'm so sorry. I got held up.", correct: true, feedback: "Direct, sincere, and matches the weight. He nods — apology accepted." },
          { target: 'Perdón', native: 'Sorry', correct: false, feedback: "Too light — 'perdón' is for bumping into someone. He waited 25 minutes. 'Lo siento mucho' is the right register here." },
          { target: 'No se preocupe', native: "Don't worry", correct: false, feedback: "That's what HE'D say to forgive you — not what you say while apologising." },
        ],
      },
      {
        speaker: 'npc',
        target: 'No se preocupe. Empezamos ahora.',
        native: "Don't worry. Let's start now.",
      },
      {
        speaker: 'rwen',
        rwenLine: "An apology weighted to match the moment restores trust fast. Light for light, heavy for heavy — that's the whole rule.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm sorry (real regret)", correct: ['Lo siento', 'lo siento'] },
      { prompt: "Don't worry about it (formal)", correct: ['No se preocupe', 'no se preocupe'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice every 'sorry' you say in English today and silently translate it. Was it a 'perdón' moment or a 'lo siento' moment? Most are perdón.",
    rwenSignoff: "Forgiveness is strength. ¡Buen camino!",
  },

  phase8: {
    scenario: "You're rushing through a packed pasillo on the Mexico City Metro at Tacubaya station when your shoulder bag clips an older man hard enough to spin his bag of pan dulce. He stops dead and turns. You've got three seconds to apologise properly before this turns into something.",
    rwenRole: "Don Eduardo — ~68, retired, brown jacket, holding a bolsa from La Esperanza panadería; he has zero patience for a backpacker who knocks into him and mumbles 'sorry'.",
    successCriteria: "User uses 'Lo siento mucho' (NOT a quick 'perdón' — physical contact with an elder is heavier than a brush-past) and waits for him to release with 'No se preocupe' before walking off, rather than mumbling and fleeing into the crowd.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
