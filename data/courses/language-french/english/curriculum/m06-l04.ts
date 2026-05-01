import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-time-hours',
  module: 6,
  lesson: 4,
  title: 'Quelle heure est-il? — What Time Is It?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Trains in France leave on the dot. The TGV at 'quinze heures vingt-deux' (15h22) does not wait for confused tourists. Today you learn how the French actually tell time — including the 24-hour clock that confuses every English speaker until it suddenly clicks.",
    culturalNote: "France runs on two clocks at once. The 24-hour clock dominates anything formal: train stations, airports, TV schedules, official meetings. 'Le train part à dix-huit heures' (the train leaves at 18h00). Casual life uses the 12-hour clock: 'On se voit à six heures du soir' (let's meet at 6 in the evening). You'll need both.",
  },

  chunks: [
    {
      id: 'quelle_heure_est_il',
      target: 'Quelle heure est-il?',
      native: 'What time is it?',
      literal: 'What hour is-it?',
      emoji: '🕰️',
      phonetic: 'kell URR eh-TEEL',
      audioRef: null,
    },
    {
      id: 'il_est_sept_heures',
      target: 'Il est sept heures',
      native: 'It\'s seven o\'clock',
      literal: 'It is seven hours',
      emoji: '🕖',
      phonetic: 'eel eh set URR',
      audioRef: null,
    },
    {
      id: 'du_matin_du_soir',
      target: 'du matin / du soir',
      native: 'in the morning / in the evening (a.m. / p.m.)',
      literal: 'of-the morning / of-the evening',
      emoji: '🌅',
      phonetic: 'doo mah-TAN / doo SWAHR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Two clocks: 24-hour formal, 12-hour casual',
    explanation: "Formal/transport: just say the hours 0-23, plus 'heures'. 15h00 = 'quinze heures'. 22h30 = 'vingt-deux heures trente'. Casual conversation: use 1-12, then add 'du matin' (5am-noon), 'de l'après-midi' (noon-6pm), or 'du soir' (6pm-midnight). Never say 'AM' or 'PM' in French — those don't exist.",
    examples: [
      { target: 'Il est quinze heures', native: 'It is 15h00 / 3pm (formal — train station)' },
      { target: 'Il est trois heures de l\'après-midi', native: 'It is 3pm (casual)' },
      { target: 'Il est huit heures du soir', native: 'It is 8pm (casual)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French time to the English equivalent',
      pairs: [
        { left: 'Il est sept heures du matin', right: '7 a.m.' },
        { left: 'Il est sept heures du soir', right: '7 p.m.' },
        { left: 'Il est quinze heures', right: '15h00 / 3 p.m. (formal)' },
        { left: 'Il est minuit', right: 'Midnight' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're listening to a train announcement: '13h00'. How would the SNCF say it?",
      sentence: 'Le train part à _____ heures.',
      options: ['treize', 'trois', 'une'],
      correct: 'treize',
      context: 'SNCF and all transport announcements use the 24-hour clock. 13h = treize heures.',
    },
    {
      type: 'translate',
      instruction: 'Type in French (casual, 12-hour)',
      prompt: 'It\'s 8 in the evening',
      correct: ['Il est huit heures du soir', 'il est huit heures du soir'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask what time it is',
      words: ['est-il', 'Quelle', 'heure'],
      correct: ['Quelle', 'heure', 'est-il'],
      translation: 'What time is it?',
    },
    {
      type: 'multiple_choice',
      instruction: "An SNCF announcement says: 'Le train pour Marseille part à dix-neuf heures.' What time is the train?",
      question: 'Choose the right time',
      options: [
        { text: '7:00 p.m. (19h00)', correct: true },
        { text: '9:00 a.m. (09h00)', correct: false },
        { text: '7:00 a.m. (07h00)', correct: false },
      ],
      explanation: "Dix-neuf = 19. So 19h00 = 7pm. Trains always speak in 24-hour time.",
    },
    {
      type: 'translate',
      instruction: 'Type in French (formal, 24-hour clock)',
      prompt: 'It is 14h00 (use formal 24-hour)',
      correct: ['Il est quatorze heures', 'il est quatorze heures'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Gare du Nord, Paris. You missed an announcement and turn to a stranger to ask the time. It's 5:30pm.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excusez-moi, quelle heure est-il?', native: 'Excuse me, what time is it?', correct: true, feedback: 'Polite, perfect.' },
          { target: 'C\'est quelle temps?', native: '(wrong word)', correct: false, feedback: "'Temps' means weather/time-as-duration. For clock time we use 'heure'." },
          { target: 'Heure?', native: '(too blunt)', correct: false, feedback: "Strangers expect 'Excusez-moi' and a full question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Il est dix-sept heures trente.',
        native: 'It is 17h30.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Did you catch that? 'Dix-sept heures' = 17h00 = 5pm. The 24-hour clock just stopped feeling foreign. Once the link 'dix-sept = 5pm' is in your head, every French train station opens up.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'What time is it? (in French)', correct: ['Quelle heure est-il?', 'Quelle heure est-il'] },
      { prompt: 'It is 15h00 (formal)', correct: ['Il est quinze heures', 'il est quinze heures'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Right now, look at a clock. Say the time out loud — once formally (24-hour: 'il est quatorze heures') and once casually (12-hour: 'il est deux heures de l'après-midi'). Both clocks, one moment.",
    rwenSignoff: "À demain — tomorrow we add the half-hours, quarters, and 'moins le quart'.",
  },

  phase8: {
    scenario: "You're at the Gare de Lyon information counter in Paris. You ask the agent the current time, the time of the next train to Marseille, and the time of a connecting train. You ask 'Quelle heure est-il?' once, and confirm two times back to him in 24-hour format.",
    rwenRole: "Monsieur Garnier — an SNCF info-desk agent, 50s, in uniform. He gives times in 24-hour format only ('vingt heures cinq', 'quinze heures'). He's helpful but not overly slow.",
    successCriteria: "User opens with 'Quelle heure est-il?', then correctly REPEATS BACK at least two 24-hour times he gives them (e.g., 'à quinze heures', 'à dix-neuf heures trente'). User must avoid saying 'AM/PM' — France doesn't use them.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
