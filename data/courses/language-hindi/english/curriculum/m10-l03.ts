import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-thaka-aur-gussa',
  module: 10,
  lesson: 3,
  title: 'Thaka & Gussa — Tired & Angry',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Two emotions you'll absolutely need on a long day in India — थका (thaka, tired) and गुस्सा (gussa, anger). The trick isn't to suppress them. The trick is to name them gently, in Hindi, with the right softeners — and watch the room re-arrange itself around your honesty.",
    culturalNote: "Indian families don't expect you to perform 'fine'. Saying 'main thaka hua hoon' (I'm tired) at a long family lunch isn't rude — it's an invitation for chai and a quieter corner. But anger is different: open गुस्सा is rare in mixed company. Most Hindi speakers prefer 'mujhe bura laga' (I felt bad) — softer, more accountable, less explosive.",
  },

  chunks: [
    {
      id: 'main_thaka_hua_hoon',
      target: 'मैं थका हुआ हूँ — Main thaka hua hoon',
      native: "I am tired (male speaker; thaki for female)",
      literal: 'I tired-having-become am',
      emoji: '😴',
      phonetic: 'mayn THA-ka hu-aa hoon',
      audioRef: null,
    },
    {
      id: 'mujhe_gussa_aaya',
      target: 'मुझे गुस्सा आया — Mujhe gussa aaya',
      native: 'I got angry / Anger came to me',
      literal: 'To-me anger came',
      emoji: '😠',
      phonetic: 'mu-JHAY GUS-sa aa-ya',
      audioRef: null,
    },
    {
      id: 'mujhe_bura_laga',
      target: 'मुझे बुरा लगा — Mujhe bura laga',
      native: 'I felt bad / I was hurt by that',
      literal: 'To-me bad felt',
      emoji: '😟',
      phonetic: 'mu-JHAY BU-ra la-ga',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mujhe + emotion + aaya/laga — emotion ARRIVED at me',
    explanation: "Hindi often treats emotions as visitors, not residents. Mujhe gussa AAYA (anger came to me) — not 'I am angry'. Mujhe bura LAGA (bad felt to me). Mujhe dar LAGA (fear felt to me). This grammar quietly distances the speaker from the emotion — perfect for sensitive conversations where you want to be honest without sounding accusatory.",
    examples: [
      { target: 'Mujhe thoda gussa aaya — मुझे थोड़ा गुस्सा आया', native: 'I got a little angry' },
      { target: 'Mujhe bura laga — मुझे बुरा लगा', native: 'I felt bad / I was hurt' },
      { target: 'Mujhe dar laga — मुझे डर लगा', native: 'I felt afraid' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the emotion phrase to its meaning',
      pairs: [
        { left: 'Main thaka hua hoon', right: 'I am tired' },
        { left: 'Mujhe gussa aaya', right: 'I got angry' },
        { left: 'Mujhe bura laga', right: 'I felt bad / hurt' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Soften an angry statement',
      sentence: 'Mujhe _____ gussa aaya, lekin main theek hoon.',
      options: ['thoda', 'bahut', 'nahin'],
      correct: 'thoda',
      context: 'I got a little angry, but I am okay.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I am tired (male speaker)',
      correct: ['Main thaka hua hoon', 'main thaka hua hoon'],
    },
    {
      type: 'multiple_choice',
      instruction: "A close friend cancels plans last minute. You're hurt but want to stay calm. What do you say?",
      question: 'Express hurt without exploding:',
      options: [
        { text: 'Mujhe thoda bura laga, lekin samajh sakta hoon', correct: true },
        { text: 'Mujhe bahut gussa aaya, jao!', correct: false },
        { text: 'Theek hai, koi baat nahin', correct: false },
      ],
      explanation: "'Mujhe thoda bura laga, lekin samajh sakta hoon' (I felt a little bad, but I can understand) is honest AND graceful — the cultural sweet spot. The angry version explodes; the dismissive version lies.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am very tired today'",
      words: ['Main', 'aaj', 'bahut', 'thaka', 'hua', 'hoon.'],
      correct: ['Main', 'aaj', 'bahut', 'thaka', 'hua', 'hoon.'],
      translation: 'I am very tired today',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I felt bad / I was hurt',
      correct: ['Mujhe bura laga', 'mujhe bura laga'],
    },
  ],

  rwenDialogue: {
    intro: "It's late. Rwen notices something is off and asks gently.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Aap aaj kuch alag lag rahe hain. Sab theek hai?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sach kahoon? Main bahut thaka hua hoon. Aaj mujhe thoda bura bhi laga. Lekin main theek ho jaaunga.', native: 'Honestly? I am very tired. I also felt a little bad today. But I will be okay.', correct: true, feedback: "Honest about tiredness, soft about the hurt ('thoda bura laga'), and forward-looking. That's emotionally fluent Hindi." },
          { target: 'Theek hoon', native: "I'm fine", correct: false, feedback: "Don't perform — Hindi has space for the truth: 'Sach kahoon? Main thaka hua hoon. Mujhe thoda bura laga.'" },
          { target: 'Mujhe bahut gussa aaya!', native: 'I got very angry!', correct: false, feedback: "Soften it — 'Mujhe thoda bura laga' lands better than 'bahut gussa' in Hindi unless someone really crossed a line." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shukriya sach bolne ke liye. Hindi mein sach bolne ki jagah hamesha hoti hai — there's always space in Hindi for the truth.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am tired (male)', correct: ['Main thaka hua hoon', 'main thaka hua hoon'] },
      { prompt: 'I felt bad / hurt', correct: ['Mujhe bura laga', 'mujhe bura laga'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time someone snaps at you, try 'Mujhe thoda bura laga' instead of escalating. Notice how the room softens. Hindi wisdom is in the choice of verb.",
    rwenSignoff: "Gussa pal bhar ka, rishta umr bhar ka — anger lasts a moment, the relationship lasts a lifetime.",
  },

  phase8: {
    scenario: "Sunday afternoon, your in-laws' joint family lunch in Lucknow. Three hours in, you're running on fumes and a distant cousin keeps making small jabs about your Hindi. Your spouse glances over — they want to know if you're okay. You have to be honest in Hindi without blowing up the lunch.",
    rwenRole: "Your spouse — knows you well, will read the difference between a real 'thaka hua' and a martyred one; they're hoping you can name the hurt softly so the afternoon doesn't break.",
    successCriteria: "User uses 'thaka hua hoon' (correct gender form) for the tiredness, lands 'mujhe thoda bura laga' (NOT 'mujhe gussa aaya' which would escalate) about the cousin, and adds a softener like 'lekin main theek ho jaaunga' so the answer is honest but contained.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
