import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04',
  module: 3,
  lesson: 4,
  title: 'Days of the week',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Six of the seven isiNdebele day names are number-words in disguise. 'Lwesibili' is literally 'second day'. Once you hear it, you can never unhear it — and you only need to learn two real names: Monday and Sunday.",
    culturalNote: "In Zimbabwe, the week formally starts on Monday (uMsombuluko) but many older speakers in Matabeleland still treat Sunday (iSonto) as the spiritual hinge of the week — the day people travel home, gather, and rest. 'iSonto' also means 'church', so context decides the meaning.",
  },

  chunks: [
    {
      id: 'umsombuluko',
      target: 'uMsombuluko',
      native: 'Monday',
      literal: 'the-unfurling (the week unfolds)',
      emoji: '📅',
      phonetic: 'oom-som-boo-LOO-koh',
      audioRef: null,
    },
    {
      id: 'ulwesibili',
      target: 'uLwesibili',
      native: 'Tuesday',
      literal: 'the-second-day',
      emoji: '2️⃣',
      phonetic: 'ool-weh-see-BEE-lee',
      audioRef: null,
    },
    {
      id: 'ulwesithathu',
      target: 'uLwesithathu',
      native: 'Wednesday',
      literal: 'the-third-day',
      emoji: '3️⃣',
      phonetic: 'ool-weh-see-TAH-too',
      audioRef: null,
    },
    {
      id: 'ulwesine',
      target: 'uLwesine',
      native: 'Thursday',
      literal: 'the-fourth-day',
      emoji: '4️⃣',
      phonetic: 'ool-weh-SEE-neh',
      audioRef: null,
    },
    {
      id: 'ulwesihlanu',
      target: 'uLwesihlanu',
      native: 'Friday',
      literal: 'the-fifth-day',
      emoji: '5️⃣',
      phonetic: 'ool-weh-see-SHLAH-noo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Counting through the week',
    explanation: "Tuesday through Friday are built from the numbers you already know: 'uLwesi-' + bili / thathu / ne / hlanu. The 'lwesi-' fragment means 'day-of-the' and locks the number into ordinal form (second, third, fourth, fifth). Monday (uMsombuluko) and Saturday (uMgqibelo) and Sunday (iSonto) are the three you actually have to memorise. Notice every weekday begins with 'u-' — a noun class marker that we will meet again and again.",
    examples: [
      { target: 'uLwesibili', native: 'Tuesday — second day' },
      { target: 'uLwesine', native: 'Thursday — fourth day' },
      { target: 'uMgqibelo', native: 'Saturday — the closing (note the q-click)' },
      { target: 'iSonto', native: 'Sunday / church' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each day to its English name',
      pairs: [
        { left: 'uMsombuluko', right: 'Monday' },
        { left: 'uLwesibili', right: 'Tuesday' },
        { left: 'uLwesithathu', right: 'Wednesday' },
        { left: 'uMgqibelo', right: 'Saturday' },
        { left: 'iSonto', right: 'Sunday' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the week: Tuesday, Wednesday, _____, Friday',
      sentence: 'uLwesibili, uLwesithathu, _____, uLwesihlanu',
      options: ['uLwesine', 'uMgqibelo', 'iSonto'],
      correct: 'uLwesine',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'Friday',
      correct: ['uLwesihlanu', 'Ulwesihlanu', 'ulwesihlanu'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'Why are Tuesday through Friday so easy to remember?',
      options: [
        { text: "They are built from the number words: 'second-day', 'third-day', 'fourth-day', 'fifth-day'.", correct: true },
        { text: "They were borrowed directly from English.", correct: false },
        { text: "They all begin with the same syllable as the planet they are named for.", correct: false },
      ],
      explanation: "uLwesibili = uLwesi + bili (two). uLwesithathu = uLwesi + thathu (three). The number system you learned in lessons 1 and 2 is doing the work here.",
    },
  ],

  rwenDialogue: {
    intro: "You're arranging a coffee with a colleague in Bulawayo. She's checking her diary.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ungeza nini? UMsombuluko kumbe uLwesibili?',
        native: 'When can you come? Monday or Tuesday?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'NgoLwesibili kulungile', native: 'Tuesday is fine', correct: true, feedback: "'Ngo-' marks 'on/at' a day — natural and exactly what she needs to write down." },
          { target: 'iSonto', native: 'Sunday', correct: false, feedback: "She offered Monday or Tuesday — picking Sunday changes the question entirely." },
          { target: 'kunye', native: 'one', correct: false, feedback: "That is the number, not a day. Tuesday is 'uLwesibili'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Kuhle, sizahlangana ngoLwesibili.',
        native: "Good, we'll meet on Tuesday.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear that 'ngo-' she added? It welds onto the day. We dig into it tomorrow.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Monday', correct: ['uMsombuluko', 'Umsombuluko', 'umsombuluko'] },
      { prompt: 'Wednesday', correct: ['uLwesithathu', 'Ulwesithathu', 'ulwesithathu'] },
      { prompt: 'Sunday', correct: ['iSonto', 'Isonto', 'isonto'] },
    ],
  },

  mission: {
    title: 'Re-label your week',
    task: "Look at your phone calendar for this week. Say each day in isiNdebele as you tap through it: uMsombuluko, uLwesibili, uLwesithathu, uLwesine, uLwesihlanu, uMgqibelo, iSonto.",
    rwenSignoff: "You just learned seven words by learning two — that is the gift of patterns.",
  },

  phase8: {
    scenario: "Rwen plays a Bulawayo neighbour who wants to schedule something with you next week. He proposes two days; you pick one and confirm in isiNdebele, then he asks you to pick a backup day in case it rains.",
    rwenRole: "Baba Ndlovu, ~45, friendly neighbour — speaks slowly with learners but expects real day names not English",
    successCriteria: "User chose a day in isiNdebele (any of the seven) and named at least one backup day correctly when asked.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
