import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-sick',
  module: 10,
  lesson: 4,
  title: 'Masakit ang ulo — Feeling Sick',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You wake up in your Manila condo and something's off. The head is heavy, the stomach is angry. Hindi ako maganda ang pakiramdam — I don't feel well. Today, you learn to ask for help.",
    culturalNote: "Filipinos often won't say 'I'm sick' directly first — they'll start with 'masama ang pakiramdam ko' (my feeling is bad) or 'hindi ako maganda ang pakiramdam' (I don't feel beautiful in my feeling). Saying it gently keeps you from sounding dramatic.",
  },

  chunks: [
    {
      id: 'hindi_maganda_pakiramdam',
      target: 'Hindi ako maganda ang pakiramdam',
      native: "I don't feel well",
      literal: 'Not I beautiful the feeling',
      emoji: '🤒',
      phonetic: 'hin-DI a-KO ma-gan-DA ang pa-ki-ram-DAM',
      audioRef: null,
    },
    {
      id: 'masakit_ang_ulo_ko',
      target: 'Masakit ang ulo ko',
      native: 'My head hurts',
      literal: 'Painful the head my',
      emoji: '🤕',
      phonetic: 'ma-sa-KIT ang U-lo ko',
      audioRef: null,
    },
    {
      id: 'kailangan_ko_doktor',
      target: 'Kailangan ko ng doktor',
      native: 'I need a doctor',
      literal: 'Need my of doctor',
      emoji: '🩺',
      phonetic: 'ka-i-LA-ngan ko nang dok-TOR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Masakit ang [body part]',
    explanation: "Tagalog body-pain has a special shape: **masakit ang [body part]** — literally 'painful the [body part]'. The **ang** marker spotlights the body part as the focus. Add **ko** (my) at the end to make it personal.",
    examples: [
      { target: 'Masakit ang ulo ko', native: 'My head hurts' },
      { target: 'Masakit ang tiyan ko', native: 'My stomach hurts' },
      { target: 'Masakit ang likod ko', native: 'My back hurts' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Hindi ako maganda ang pakiramdam', right: "I don't feel well" },
        { left: 'Masakit ang ulo ko', right: 'My head hurts' },
        { left: 'Kailangan ko ng doktor', right: 'I need a doctor' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You ate questionable street food. Tell your kaibigan.',
      sentence: 'Masakit ang _____ ko.',
      options: ['tiyan', 'masaya', 'doktor'],
      correct: 'tiyan',
      context: "Tiyan = stomach. The body part goes after ang.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I need a doctor',
      correct: ['Kailangan ko ng doktor', 'kailangan ko ng doktor'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag the words to say "My head hurts"',
      words: ['ulo', 'Masakit', 'ko', 'ang'],
      correct: ['Masakit', 'ang', 'ulo', 'ko'],
      translation: 'My head hurts',
    },
    {
      type: 'multiple_choice',
      instruction: 'You walk into a clinic and the nurse asks what brings you in. Pick the gentle opener.',
      question: 'What do you say first?',
      options: [
        { text: 'Hindi ako maganda ang pakiramdam', correct: true },
        { text: 'Masaya ako', correct: false },
        { text: 'Galit ako', correct: false },
      ],
      explanation: "'Hindi ako maganda ang pakiramdam' is the soft, polite opener — then you describe what hurts.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'My head hurts',
      correct: ['Masakit ang ulo ko', 'masakit ang ulo ko'],
    },
  ],

  rwenDialogue: {
    intro: "You're in your condo. Your kaibigan stops by with merienda but you don't look great. She notices.",
    lines: [
      {
        speaker: 'npc',
        target: 'Uy, mukhang pagod ka. Okay ka lang ba?',
        native: 'Hey, you look tired. Are you okay?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hindi ako maganda ang pakiramdam. Masakit ang ulo ko.', native: "I don't feel well. My head hurts.", correct: true, feedback: "Soft opener, specific complaint — perfect order." },
          { target: 'Masaya ako!', native: "I'm happy!", correct: false, feedback: "Your face is saying otherwise — tell her the truth." },
          { target: 'Kailangan ko ng pizza.', native: 'I need pizza.', correct: false, feedback: 'Wrong noun. Doktor, not pizza.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Naku, dalhin kita sa doktor. Tara.',
        native: "Oh no, I'll take you to the doctor. Let's go.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Asking for help in another language is brave. You did it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My head hurts (in Tagalog)', correct: ['Masakit ang ulo ko', 'masakit ang ulo ko'] },
      { prompt: 'I need a doctor (in Tagalog)', correct: ['Kailangan ko ng doktor', 'kailangan ko ng doktor'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pretend you've just woken up sick. Out loud, walk yourself through three lines: hindi ako maganda ang pakiramdam → masakit ang ulo ko → kailangan ko ng doktor.",
    rwenSignoff: "Ingat ka — take care. Mag-pahinga ka. Bukas ulit.",
  },

  phase8: {
    scenario: "You're in a small clinic in Quezon City. The receptionist looks up — it's your turn. You don't feel well: head heavy, slightly feverish. Open the conversation, describe what's wrong, ask for the doctor.",
    rwenRole: "Ate Marites — clinic receptionist, mid-40s, brisk but kind, used to walk-ins.",
    successCriteria: "User opens with the soft 'hindi ako maganda ang pakiramdam' line, describes one specific pain using 'masakit ang ___ ko', and asks for the doctor with 'kailangan ko ng doktor'. Three-step flow.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
