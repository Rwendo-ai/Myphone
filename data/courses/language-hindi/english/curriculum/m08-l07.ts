import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l07-padhna-likhna',
  module: 8,
  lesson: 7,
  title: 'Padhna / Likhna — To Read, To Write',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "पढ़ना (padhna) is double-duty: 'to read' AND 'to study'. (You met it in lesson 3 as 'study'.) Today we lock in 'read' specifically, and pair it with लिखना (likhna — to write). Two -ना verbs, one literacy. 'Main Hindi padhta hoon' (I read/study Hindi) is a sentence you can already say truthfully right now.",
    culturalNote: "India has a very strong reverence for the written word. 'Padhe-likhe log' (read-and-written people) literally means 'literate people' but carries the weight of 'educated, civilised'. When elders say 'padho beta, padho!' (study/read, child!), it's not a chore reminder — it's the whole hope of the family in three syllables.",
  },

  chunks: [
    {
      id: 'padhna_read',
      target: 'पढ़ना — Padhna',
      native: 'To read / to study',
      literal: 'padh- (read-stem) + -na',
      emoji: '📖',
      phonetic: 'PADH-na',
      audioRef: null,
    },
    {
      id: 'likhna',
      target: 'लिखना — Likhna',
      native: 'To write',
      literal: 'likh- (write-stem) + -na',
      emoji: '✍️',
      phonetic: 'LIKH-na',
      audioRef: null,
    },
    {
      id: 'main_padhta_hindi',
      target: 'मैं हिंदी पढ़ता हूँ — Main Hindi padhta hoon',
      native: 'I read/study Hindi (man speaking)',
      literal: 'I Hindi read-masc am',
      emoji: '🇮🇳',
      phonetic: 'mayn HIN-dee PADH-ta hoon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Present continuous — verb stem + ra-ha/-rahi/-rahe + auxiliary',
    explanation: "For ongoing actions ('I am reading right now'), Hindi uses: stem + rahā/rahī/rahe + auxiliary (hoon/hai/hain). 'Main padh raha hoon' — I am reading (man). 'Vah likh rahi hai' — She is writing. The 'rahā/rahī/rahe' part carries gender + number. Use this for anything happening now.",
    examples: [
      { target: 'मैं अभी पढ़ रहा हूँ — Main abhi padh raha hoon', native: 'I am reading right now (man speaking)' },
      { target: 'वह पत्र लिख रही है — Vah patra likh rahi hai', native: 'She is writing a letter' },
      { target: 'हम Hindi padh rahe hain — Hum Hindi padh rahe hain', native: 'We are studying Hindi' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb form to its meaning',
      pairs: [
        { left: 'Padhna', right: 'To read / to study' },
        { left: 'Likhna', right: 'To write' },
        { left: 'Main padh raha hoon', right: 'I am reading (man, right now)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A woman says "I am writing right now"',
      sentence: 'Main abhi likh _____ hoon.',
      options: ['rahi', 'raha', 'rahe'],
      correct: 'rahi',
      context: 'Female speaker. Continuous takes -i for feminine.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (man speaking)',
      prompt: 'I am reading right now',
      correct: ['Main abhi padh raha hoon', 'main abhi padh raha hoon'],
    },
    {
      type: 'multiple_choice',
      instruction: "Which form expresses 'happening right now' in Hindi?",
      question: 'Present continuous = stem +:',
      options: [
        { text: 'rahā / rahī / rahe + hoon/hai/hain (matched to gender + subject)', correct: true },
        { text: '-ta / -ti / -te + hoon (this is HABITUAL, not continuous)', correct: false },
        { text: 'Just the bare stem with no auxiliary', correct: false },
      ],
      explanation: "Habitual = stem + ta/ti/te (every day, generally). Continuous = stem + raha/rahi/rahe (right now). Two different presents.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'She is writing a letter'",
      words: ['Vah', 'patra', 'likh', 'rahi', 'hai.'],
      correct: ['Vah', 'patra', 'likh', 'rahi', 'hai.'],
      translation: 'She is writing a letter',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (man speaking)',
      prompt: 'I read/study Hindi',
      correct: ['Main Hindi padhta hoon', 'main Hindi padhta hoon', 'main hindi padhta hoon'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday afternoon. Priya finds you at the dining table with your phone open to a Hindi lesson and a notebook beside it.",
    lines: [
      {
        speaker: 'npc',
        target: 'अरे वाह! क्या तुम Hindi padh rahe ho? Aur लिख भी रहे हो?',
        native: 'Wow! Are you reading Hindi? And writing too?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Haan, main Hindi padh raha hoon. Aur main Devanagari likhna seekh raha hoon.', native: "Yes, I am reading Hindi. And I am learning to write Devanagari.", correct: true, feedback: "Two continuous-tense verbs (padh raha hoon, seekh raha hoon), 'likhna' as infinitive after 'seekh' (to learn to-do). Priya beams." },
          { target: 'Main padhta Hindi raha hoon', native: 'Wrong word order', correct: false, feedback: "Object before stem-ra(h)a. 'Main HINDI padh raha hoon.' Object → stem → raha → hoon." },
          { target: 'Haan main padhta hoon', native: 'Yes I read (habitual, not continuous)', correct: false, feedback: "She asked about RIGHT NOW. Use 'padh raha hoon' (continuous), not 'padhta hoon' (habitual). Two different presents." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Padhna and likhna — read and write. With the continuous tense, you can describe anything happening right now. Aap shabaash!",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am reading right now (man speaking)', correct: ['Main abhi padh raha hoon', 'main abhi padh raha hoon'] },
      { prompt: 'She is writing a letter', correct: ['Vah patra likh rahi hai', 'vah patra likh rahi hai', 'Woh patra likh rahi hai', 'woh patra likh rahi hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Right now, narrate to yourself: 'Main yeh Hindi padh raha/rahi hoon.' Then pick up a pen and try writing one word in Devanagari — even if it's just your name. 'Main likh raha/rahi hoon.' Live the verbs.",
    rwenSignoff: "Padhe-likhe log — read-and-written people. You're becoming one. Phir milenge.",
  },

  phase8: {
    scenario: "Saturday morning at home. Priya (peer register, encouraging tone) is checking on your Hindi study. She wants three things in your reply: what you read yesterday (past — 'maine ___ padha/padhi'), what you're reading right now (present continuous — 'main ___ padh raha/rahi hoon'), and what you'll write in your Hindi notebook later today (future — 'main ___ likhungaa/likhungi'). All three tenses in one conversation.",
    rwenRole: "Priya — friend/peer register, supportive of your Hindi practice. 'Tum' is fine. She'll celebrate genuine effort over perfect grammar but will gently note tense slips.",
    successCriteria: "User produces all three tenses cleanly with padhna and likhna: past (maine + object + padha/padhi — note ergative), present continuous (Main + object + padh raha/rahi hoon), future (Main + object + likhungaa/likhungi). Verb-final order throughout. Gender consistent.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
