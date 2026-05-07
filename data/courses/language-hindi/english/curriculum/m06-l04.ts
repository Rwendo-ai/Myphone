import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-din',
  module: 6,
  lesson: 4,
  title: 'Saat Din — Days of the Week',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Hindi day names come from Sanskrit and the planets. Somvaar = Moon-day = Monday. Mangalvaar = Mars-day = Tuesday. Shukravaar = Venus-day = Friday. Same logic English used (Saturday = Saturn's day) — but in Hindi the celestial connection is still right there in the name.",
    culturalNote: "Indian week structures vary by community: govt offices close Saturday-Sunday, but many shops close Monday or Tuesday. Religious days matter too — many Hindus fast on Mondays for Shiva, Tuesdays for Hanuman, Thursdays for Sai Baba. Knowing days helps you read the city.",
  },

  chunks: [
    {
      id: 'somvaar_mangalvaar',
      target: 'सोमवार / मंगलवार',
      native: 'Monday / Tuesday',
      literal: 'Som-vaar (Moon-day), Mangal-vaar (Mars-day)',
      emoji: '📅',
      phonetic: 'SOM-vaar / MAN-gal-vaar',
      audioRef: null,
    },
    {
      id: 'budhvaar_guruvaar',
      target: 'बुधवार / गुरुवार',
      native: 'Wednesday / Thursday',
      literal: 'Budh-vaar (Mercury-day), Guru-vaar (Jupiter-day)',
      emoji: '📆',
      phonetic: 'BUDH-vaar / GU-ru-vaar',
      audioRef: null,
    },
    {
      id: 'shukravaar_shanivaar_ravivaar',
      target: 'शुक्रवार / शनिवार / रविवार',
      native: 'Friday / Saturday / Sunday',
      literal: 'Shukra-vaar (Venus), Shani-vaar (Saturn), Ravi-vaar (Sun)',
      emoji: '🎉',
      phonetic: 'SHUK-ra-vaar / SHA-ni-vaar / RA-vi-vaar',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Planet/celestial name + vaar = day',
    explanation: "Every day name ends in '-vaar' (day). The first part is a planet or celestial body. Som (moon), Mangal (Mars), Budh (Mercury), Guru (Jupiter), Shukra (Venus), Shani (Saturn), Ravi (Sun). The pattern is exact and clean — once you know the planet, you know the day.",
    examples: [
      { target: 'Aaj somvaar hai.', native: "Today is Monday." },
      { target: 'Shukravaar ko milte hain.', native: "Let's meet on Friday." },
      { target: 'Ravivaar chhutti hai.', native: "Sunday is a holiday." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi day to its English equivalent',
      pairs: [
        { left: 'Somvaar', right: 'Monday' },
        { left: 'Shukravaar', right: 'Friday' },
        { left: 'Ravivaar', right: 'Sunday' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sequence Mon/Tue/Wed',
      sentence: 'Somvaar, mangalvaar, _____.',
      options: ['budhvaar', 'guruvaar', 'shanivaar'],
      correct: 'budhvaar',
      context: 'Monday, Tuesday, Wednesday.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Friday',
      correct: ['Shukravaar', 'shukravaar'],
    },
    {
      type: 'multiple_choice',
      instruction: "Which day's name comes from the planet Mars?",
      question: 'Mars-day in Hindi is:',
      options: [
        { text: 'Mangalvaar (Tuesday)', correct: true },
        { text: 'Shanivaar (Saturday)', correct: false },
        { text: 'Guruvaar (Thursday)', correct: false },
      ],
      explanation: "Mangal = Mars. Shani = Saturn. Guru = Jupiter. The Hindi week is a planetary tour.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Sunday is a holiday'",
      words: ['Ravivaar', 'chhutti', 'hai.'],
      correct: ['Ravivaar', 'chhutti', 'hai.'],
      translation: 'Sunday is a holiday',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Monday',
      correct: ['Somvaar', 'somvaar'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen wants to schedule a call with you — pick a day in Hindi.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Hum kab milenge? Koi din chuno.",
        native: 'When shall we meet? Pick a day.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Shukravaar ko milte hain.', native: "Let's meet on Friday.", correct: true, feedback: "Day name + 'ko' (on) — clean, scheduling-ready Hindi. Friday locked." },
          { target: 'Friday', native: 'Friday (in English)', correct: false, feedback: "In Hindi: 'Shukravaar ko milte hain' — let's meet on Friday." },
          { target: 'Pata nahin', native: "I don't know", correct: false, feedback: "Pick one — 'Shukravaar ko milte hain' (let's meet Friday) or any other day." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Theek hai, shukravaar. Phir milenge — see you Friday.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Friday', correct: ['Shukravaar', 'shukravaar'] },
      { prompt: 'Sunday', correct: ['Ravivaar', 'ravivaar'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say today's day in Hindi: 'Aaj [day]vaar hai.' Then say tomorrow's. Plan one thing for a specific day this week using 'ko' — 'shukravaar ko gym jaaunga' (I'll go to the gym on Friday).",
    rwenSignoff: "Saat din. Seven days, seven planets. Phir milenge.",
  },

  phase8: {
    scenario: "Texting your cousin in Jaipur to plan a weekend visit. He wants to know which specific day you'll arrive — somvaar through ravivaar — and he'll keep prodding in Hindi until you commit to a day, not a vague 'next week'.",
    rwenRole: "Your cousin in Jaipur, mid-30s, married with kids and weekends fully booked; he'll only confirm if you give him a Hindi day name with 'ko', and he'll tease you if you say 'Friday' in English.",
    successCriteria: "User commits to a specific day using '[Day]vaar ko' construction (e.g. 'Shukravaar ko aaunga'), names at least two other Hindi days correctly when discussing alternatives, and never substitutes the English day name.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
