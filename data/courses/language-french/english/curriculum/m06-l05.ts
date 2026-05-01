import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l05-time-minutes',
  module: 6,
  lesson: 5,
  title: 'Demie, Quart, Moins — Half Past, Quarter To',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Whole hours are easy — but real life happens at 'half past', 'a quarter to', and 'twenty past'. Today we learn the three little words that turn a clock face into a French sentence: et demie, et quart, moins.",
    culturalNote: "French time has poetry built in. 'Sept heures et demie' literally means 'seven hours AND a half'. 'Huit heures moins le quart' means 'eight hours MINUS the quarter' — French counts down to the next hour once you pass the half. English speakers say 'quarter to eight' too, but the 'moins' (minus) framing makes it more concrete.",
  },

  chunks: [
    {
      id: 'sept_heures_et_demie',
      target: 'Sept heures et demie',
      native: 'Half past seven (7:30)',
      literal: 'Seven hours and half',
      emoji: '🕢',
      phonetic: 'set URR ay duh-MEE',
      audioRef: null,
    },
    {
      id: 'huit_heures_moins_le_quart',
      target: 'Huit heures moins le quart',
      native: 'Quarter to eight (7:45)',
      literal: 'Eight hours minus the quarter',
      emoji: '🕥',
      phonetic: 'weet URR mwan luh KAR',
      audioRef: null,
    },
    {
      id: 'cinq_heures_et_quart',
      target: 'Cinq heures et quart',
      native: 'Quarter past five (5:15)',
      literal: 'Five hours and quarter',
      emoji: '🕔',
      phonetic: 'sank URR ay KAR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'After or before — et / moins',
    explanation: "Up to the half-hour, you ADD with 'et': 'cinq heures et quart' (quarter past 5), 'cinq heures vingt' (5:20), 'cinq heures et demie' (5:30). After the half-hour, you SUBTRACT from the NEXT hour with 'moins': 'six heures moins vingt' (5:40 = six minus twenty), 'six heures moins le quart' (5:45 = six minus the quarter). Note: 'et' only locks in for quart and demie — for plain minutes (5:20) it's just 'cinq heures vingt'.",
    examples: [
      { target: 'six heures et quart', native: '6:15 (six and a quarter)' },
      { target: 'six heures et demie', native: '6:30 (six and a half)' },
      { target: 'sept heures moins dix', native: '6:50 (seven minus ten)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French time to the digital clock',
      pairs: [
        { left: 'Trois heures et demie', right: '3:30' },
        { left: 'Trois heures et quart', right: '3:15' },
        { left: 'Quatre heures moins le quart', right: '3:45' },
        { left: 'Quatre heures moins dix', right: '3:50' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: it\'s 8:45',
      sentence: 'Il est neuf heures _____ le quart.',
      options: ['moins', 'et', 'plus'],
      correct: 'moins',
      context: '8:45 is 15 minutes BEFORE 9. So in French: 9 minus the quarter.',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'It is half past nine',
      correct: ['Il est neuf heures et demie', 'il est neuf heures et demie'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "It is 7:45" (think: 8 minus a quarter)',
      words: ['Il', 'est', 'huit', 'heures', 'moins', 'le', 'quart'],
      correct: ['Il', 'est', 'huit', 'heures', 'moins', 'le', 'quart'],
      translation: 'It is 7:45 — literally "8 hours minus the quarter".',
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend says 'Rendez-vous à six heures moins vingt'. What time is the meeting?",
      question: 'Choose the right time',
      options: [
        { text: '5:40', correct: true },
        { text: '6:20', correct: false },
        { text: '6:40', correct: false },
      ],
      explanation: "'Six heures moins vingt' = six minus twenty = 5:40. Once you pass the half hour, French counts BACK from the next hour.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'It is a quarter past five',
      correct: ['Il est cinq heures et quart', 'il est cinq heures et quart'],
    },
  ],

  rwenDialogue: {
    intro: "You're meeting a French friend at a café. She texts: 'On se voit à six heures et demie?' (Let's meet at 6:30?) But you can only do 6:45. Reply.",
    lines: [
      {
        speaker: 'npc',
        target: 'On se voit à six heures et demie?',
        native: 'Shall we meet at 6:30?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Plutôt sept heures moins le quart?', native: 'Rather a quarter to seven (6:45)?', correct: true, feedback: 'Perfect — you used "moins le quart" naturally and shifted the meet by 15 min.' },
          { target: 'Plutôt six heures et trois quarts?', native: '(too literal)', correct: false, feedback: "Grammatically possible but no one says it. The native form is 'sept heures moins le quart'." },
          { target: 'Plutôt six heures quarante-cinq?', native: 'Rather six forty-five?', correct: false, feedback: "Understood, but in casual French speech '7 minus the quarter' is what people actually say." },
        ],
      },
      {
        speaker: 'npc',
        target: 'D\'accord, à tout à l\'heure!',
        native: 'OK, see you soon!',
      },
      {
        speaker: 'rwen',
        rwenLine: "Listen to what just happened — you negotiated a meeting time in French. The clock is no longer a wall, it's a conversation.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'It is half past seven (7:30)', correct: ['Il est sept heures et demie', 'il est sept heures et demie'] },
      { prompt: 'It is quarter to eight (7:45)', correct: ['Il est huit heures moins le quart', 'il est huit heures moins le quart'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "At three random points today, glance at a clock and say the time aloud in French — at least once with 'et demie', once with 'et quart', and once with 'moins'. Make your day a French clock.",
    rwenSignoff: "À demain — tomorrow we open the calendar: les jours de la semaine.",
  },

  phase8: {
    scenario: "You're scheduling three appointments with a French colleague over the phone: a coffee, a lunch, and a meeting. The times include a half hour, a quarter past something, and a 'moins' time (like 'six heures moins le quart'). You propose times and she counter-proposes.",
    rwenRole: "Camille — a French colleague at your office, friendly, in her 30s. She uses casual 12-hour time with 'et demie', 'et quart', and 'moins le quart'.",
    successCriteria: "User produces at least one 'et demie', one 'et quart' or 'moins le quart', and one 'moins X' (X = number of minutes) in different sentences. Confirms back times accurately.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
