import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-work-school',
  module: 8,
  lesson: 6,
  title: 'Le travail — Your work day in French',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "If you live or work in France, this lesson will pay rent within a week. Where you go, when you start, when you finish, the meeting you have. Three chunks, all conjugated, all yours.",
    culturalNote: "France runs on the 24-hour clock for anything official — work hours, train times, TV schedules, opening hours. 'De 9h à 17h' means 9am to 5pm. You'll see it written 9h-17h on doors and emails. The 'h' replaces the colon: 14h30 = 2:30pm. Casual conversation can drop to 12-hour, but written and professional French stays on 24.",
  },

  chunks: [
    {
      id: 'je_vais_au_bureau',
      target: 'Je vais au bureau',
      native: 'I go to the office',
      literal: 'I go to-the office',
      emoji: '🏢',
      phonetic: 'zhuh veh oh boo-ROH',
      audioRef: null,
    },
    {
      id: 'je_travaille_de_9h',
      target: 'Je travaille de 9h à 17h',
      native: 'I work from 9 to 5',
      literal: 'I work from 9h to 17h',
      emoji: '💼',
      phonetic: 'zhuh trah-VAI duh nuh-VUHR ah dee-set-UHR',
      audioRef: null,
    },
    {
      id: 'jai_une_reunion',
      target: "J'ai une réunion",
      native: 'I have a meeting',
      literal: 'I-have a meeting',
      emoji: '👥',
      phonetic: 'zhay oon ray-oo-NYOHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'De ... à ... — work hours on the 24-hour clock',
    explanation: "French expresses time ranges with 'de [start] à [end]'. Hours use the 24-hour format with 'h' instead of a colon: 9h, 12h30, 17h, 20h45. So 'de 9h à 17h' = from 9am to 5pm. Beyond hours, 'de ... à ...' covers many ranges: de janvier à mars (January to March), de Paris à Lyon (Paris to Lyon).",
    examples: [
      { target: 'Le restaurant est ouvert de 12h à 14h30.', native: 'The restaurant is open from noon to 2:30pm.' },
      { target: 'Je travaille de 8h30 à 17h, du lundi au vendredi.', native: 'I work 8:30 to 5pm, Monday to Friday.' },
      { target: "J'ai une réunion à 14h.", native: 'I have a meeting at 2pm.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the work phrase to its meaning',
      pairs: [
        { left: 'Je vais au bureau', right: 'I go to the office' },
        { left: 'Je travaille de 9h à 17h', right: 'I work 9 to 5' },
        { left: "J'ai une réunion", right: 'I have a meeting' },
        { left: 'Je télétravaille', right: 'I work from home' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sentence about your hours',
      sentence: 'Je travaille _____ 9h à 17h.',
      options: ['de', 'à', 'en'],
      correct: 'de',
      context: "Time ranges always start with 'de': de [début] à [fin].",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I have a meeting at 3pm',
      correct: ["J'ai une réunion à 15h", "j'ai une réunion à 15h", "J'ai une réunion à 15 heures"],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag — "I work from Monday to Friday"',
      words: ['au', 'travaille', 'lundi', 'vendredi', 'Je', 'du'],
      correct: ['Je', 'travaille', 'du', 'lundi', 'au', 'vendredi'],
      translation: 'I work from Monday to Friday.',
    },
    {
      type: 'multiple_choice',
      instruction: "A French colleague asks when you finish work. You finish at 6pm.",
      question: 'Pick the correct French',
      options: [
        { text: 'Je finis à 18h.', correct: true },
        { text: 'Je finis à 6h du soir.', correct: false },
        { text: 'Je finis à 6 PM.', correct: false },
      ],
      explanation: "Professional French uses the 24-hour clock — 18h, never 'PM'. '6h du soir' is technically understandable but no one says it; it's tourist-French.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I go to the office at 9am',
      correct: ['Je vais au bureau à 9h', 'je vais au bureau à 9h', 'Je vais au bureau à 9 heures', 'Je vais au bureau à neuf heures'],
    },
  ],

  rwenDialogue: {
    intro: "First day at a co-working space in Bordeaux. Another member, Sébastien, sits down at the next desk and strikes up a chat about your schedule.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tu travailles ici tous les jours?',
        native: 'Do you work here every day?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Oui, je travaille de 9h à 17h, du lundi au vendredi.', native: "Yes, I work from 9 to 5, Monday to Friday.", correct: true, feedback: "Two 'de...à...' constructions back-to-back — for hours and for days. Native rhythm." },
          { target: 'Oui, je travaille de 9 AM à 5 PM, Monday to Friday.', native: 'Yes, I work 9 AM to 5 PM, Monday to Friday.', correct: false, feedback: "Switch to 24-hour and French day names: de 9h à 17h, du lundi au vendredi." },
          { target: 'Oui, je travaille à 9h et 17h.', native: 'Yes, I work at 9 and 17.', correct: false, feedback: "For a range you need 'de ... à ...', not 'à ... et ...'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Cool, et tu fais quoi comme boulot?',
        native: 'Cool, and what do you do for work?',
      },
      {
        speaker: 'rwen',
        rwenLine: "He just casually said 'tu fais quoi comme boulot?' — that's exactly the everyday way to ask. Faire shows up everywhere.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'I work from 9 to 5',
        correct: ['Je travaille de 9h à 17h', 'je travaille de 9h à 17h', 'Je travaille de neuf heures à dix-sept heures'],
      },
      {
        prompt: 'I have a meeting',
        correct: ["J'ai une réunion", "j'ai une réunion"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Write your weekly schedule in French. Three lines: when you start, when you finish, what days. 'Je travaille de 9h à 17h, du lundi au vendredi.' Even if it's never true — practice the structure.",
    rwenSignoff: "Bon courage — good luck. À demain.",
  },

  phase8: {
    scenario: "Late Friday afternoon at a Parisian co-working space. Sébastien at the next desk catches your eye and asks how your week's been — your hours, your meetings, whether you're going to the office Monday or working from home. He'll also share his own schedule for next week, so be ready to compare.",
    rwenRole: "Sébastien — French freelancer in his 30s, casual and chatty; asks 'Tu travailles à quelle heure le matin?', 'Tu as eu beaucoup de réunions cette semaine?', shares his own hours and offers to grab coffee on a shared break.",
    successCriteria: "User describes work schedule using 24-hour times (9h, 17h, etc. — NOT 9am/5pm), uses 'de ... à ...' for the time range, mentions at least one of 'je vais au bureau' / 'je télétravaille' / 'j'ai une réunion'. Days use 'du lundi au vendredi' format if mentioned.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
