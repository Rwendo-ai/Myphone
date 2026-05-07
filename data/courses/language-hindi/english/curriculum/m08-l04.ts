import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l04-sona-uthna',
  module: 8,
  lesson: 4,
  title: 'Sona / Uthna — To Sleep, To Wake Up',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "सोना (sona) means 'to sleep'. उठना (uthna) means 'to get up / wake up'. Both end in -ना. But here's something English doesn't do: in Hindi, 'I sleep' and 'I will sleep' both have a verb at the END, with the form changing dramatically — main soti hoon (I sleep) vs main soyi (I slept) vs main soyungi (I will sleep). The verb is doing serious work down there.",
    culturalNote: "In Indian joint families, sleep schedules are everyone's business. 'Aap kitne baje sote hain?' (What time do you sleep?) is an actual conversation an aunty will have with you. Waking up early earns moral points — 'subah jaldi uthna chaahiye' (one should wake up early) is a half-blessing, half-instruction you'll hear from elders. 'Subah uthe?' (Did you wake up?) is an opening like 'good morning' but with more weight.",
  },

  chunks: [
    {
      id: 'sona',
      target: 'सोना — Sona',
      native: 'To sleep (infinitive)',
      literal: 'so- (sleep-stem) + -na',
      emoji: '😴',
      phonetic: 'SO-na',
      audioRef: null,
    },
    {
      id: 'uthna',
      target: 'उठना — Uthna',
      native: 'To wake up / to get up',
      literal: 'uth- (rise-stem) + -na',
      emoji: '🌅',
      phonetic: 'UTH-na',
      audioRef: null,
    },
    {
      id: 'main_soti',
      target: 'मैं सोती हूँ / मैं उठता हूँ — Main soti hoon / Main uthta hoon',
      native: 'I sleep (woman) / I wake up (man)',
      literal: 'I sleep-fem am / wake-masc am',
      emoji: '🛏️',
      phonetic: 'mayn SO-tee hoon / mayn UTH-ta hoon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time + verb-at-the-end — saying when you sleep/wake',
    explanation: "Time expressions go BEFORE the verb. 'I wake at 6' becomes 'Main 6 baje uthta hoon' — literally 'I 6 at-time wake-am'. 'Baje' means 'o'clock' and follows the number. The verb still anchors the end.",
    examples: [
      { target: 'मैं रात 10 बजे सोता हूँ — Main raat 10 baje sota hoon', native: 'I sleep at 10pm (man speaking)' },
      { target: 'मैं सुबह 6 बजे उठती हूँ — Main subah 6 baje uthti hoon', native: 'I wake at 6am (woman speaking)' },
      { target: 'आप कितने बजे उठते हैं? — Aap kitne baje uthte hain?', native: 'What time do you wake up? (formal)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its meaning',
      pairs: [
        { left: 'Sona', right: 'To sleep (infinitive)' },
        { left: 'Uthna', right: 'To wake up / get up' },
        { left: 'Main 6 baje uthta hoon', right: 'I wake at 6 (man speaking)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A woman says "I sleep at 10pm"',
      sentence: 'Main raat 10 baje _____ hoon.',
      options: ['soti', 'sota', 'sote'],
      correct: 'soti',
      context: 'Female speaker. Sleep verb feminine = soti.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'What time do you wake up? (formal)',
      correct: ['Aap kitne baje uthte hain?', 'aap kitne baje uthte hain?', 'Aap kitne baje uthte hain', 'aap kitne baje uthte hain'],
    },
    {
      type: 'multiple_choice',
      instruction: "Where does the time expression go in Hindi?",
      question: 'In "I wake at 6am" — Main subah 6 baje uthta hoon — the time goes:',
      options: [
        { text: 'Between the subject and the verb (verb still last)', correct: true },
        { text: 'After the verb (at the end)', correct: false },
        { text: 'At the very start, before the subject', correct: false },
      ],
      explanation: "Subject → time → verb (last). The verb anchor never moves. Everything else slots in before it.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I sleep at 11pm' (man speaking)",
      words: ['Main', 'raat', '11', 'baje', 'sota', 'hoon.'],
      correct: ['Main', 'raat', '11', 'baje', 'sota', 'hoon.'],
      translation: 'I sleep at 11pm (man speaking)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (woman speaking)',
      prompt: 'I wake at 6am',
      correct: ['Main subah 6 baje uthti hoon', 'main subah 6 baje uthti hoon'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday 7:15am at Priya's flat. Dadi-ji, who has been up since 5am doing puja, sees you stumbling out of the guest room.",
    lines: [
      {
        speaker: 'npc',
        target: 'बेटा, आप कितने बजे उठते हैं? रात को कितने बजे सोते हैं?',
        native: 'Beta, what time do you wake up? What time do you sleep at night?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Dadi-ji, main subah 7 baje uthta hoon. Aur raat 11 baje sota hoon.', native: 'Dadi-ji, I wake at 7am. And I sleep at 11pm.', correct: true, feedback: "Time expressions in the middle, both verbs at the end, gender consistent. Dadi-ji approves of the early-morning honesty (or near-honesty)." },
          { target: 'Main uthta 7 baje', native: 'I wake 7 at-time (incomplete)', correct: false, feedback: "Need the auxiliary हूँ at the very end. 'Main subah 7 baje uthta hoon.'" },
          { target: 'Subah 7 baje main uthta hoon', native: 'In the morning at 7 I wake (time-first is clunky)', correct: false, feedback: "Subject usually comes first. Standard order: 'Main subah 7 baje uthta hoon.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Verb at the end, time in the middle, subject up front. Three slots, fill them in order.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I wake at 6am (woman speaking)', correct: ['Main subah 6 baje uthti hoon', 'main subah 6 baje uthti hoon'] },
      { prompt: 'I sleep at 10pm (man speaking)', correct: ['Main raat 10 baje sota hoon', 'main raat 10 baje sota hoon'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tonight before bed, say out loud: 'Main raat [time] baje sota/soti hoon.' Tomorrow morning when you wake: 'Main subah [time] baje utha/uthi.' Make your sleep schedule a Hindi sentence.",
    rwenSignoff: "Subah jaldi uthna — wake up early. The auntie wisdom of all India. Phir milenge.",
  },

  phase8: {
    scenario: "Sunday morning, 6:45am. Dadi-ji has just finished her morning puja and finds you finally awake at the kitchen table. She wants the FULL sleep audit: what time you slept, what time you woke up, and what your habit is across the work week — three different tense forms, all verb-final, all properly gendered. The whole joint family will hear about your answers by lunch.",
    rwenRole: "Dadi-ji — observant elder, treats sleep schedule as a moral indicator. Respectful aap throughout. She is fine with longer answers and will quietly correct if you fumble gender.",
    successCriteria: "User produces past ('Main raat 11 baje soyaa/soyi') for last night, present-continuous in answer to 'how are you feeling now' ('Main abhi uth raha/rahi hoon'), AND habitual ('Main hafte mein 6 baje uthta/uthti hoon') for the work-week pattern. Verb at the end every time. Gender ending consistent across all three.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
