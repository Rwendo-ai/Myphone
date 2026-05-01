import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-comment-allez',
  module: 1,
  lesson: 3,
  title: 'Comment allez-vous? — Polite',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Now we put on the dress shoes. 'Comment allez-vous?' — formal, respectful, the version you use with elders, strangers, your boss, anyone you'd address as 'sir' or 'ma'am'. Get this wrong and the whole encounter feels off.",
    culturalNote: "English has no real equivalent of 'vous'. Using 'tu' with a stranger feels overly familiar — like calling someone 'mate' before you've shaken hands. Using 'vous' with your best friend feels cold. The wrong choice doesn't break communication, but it always registers.",
  },

  chunks: [
    {
      id: 'comment_allez_vous',
      target: 'Comment allez-vous?',
      native: 'How are you? (formal)',
      literal: 'How go-you? (vous form)',
      emoji: '🎩',
      phonetic: 'koh-mahn tah-lay VOO',
      audioRef: null,
    },
    {
      id: 'tres_bien_merci',
      target: 'Très bien, merci',
      native: 'Very well, thank you',
      literal: 'Very well, thanks',
      emoji: '🙏',
      phonetic: 'treh bee-EHN, mehr-SEE',
      audioRef: null,
    },
    {
      id: 'et_vous',
      target: 'Et vous?',
      native: 'And you? (formal)',
      literal: 'And you (vous)?',
      emoji: '↩️',
      phonetic: 'ay VOO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Vous formality',
    explanation: 'When you "vous" someone, every part of the exchange follows. The verb conjugates with -ez, and the bounce-back is "et vous?", never "et toi?". Mixing them mid-sentence is the giveaway of a learner.',
    examples: [
      { target: 'Comment allez-vous?', native: 'How are you? (vous)' },
      { target: 'Et vous?', native: 'And you? (vous)' },
      { target: 'Vous allez bien?', native: 'Are you well? (vous)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the formal phrase to its meaning',
      pairs: [
        { left: 'Comment allez-vous?', right: 'How are you? (formal)' },
        { left: 'Très bien, merci', right: 'Very well, thank you' },
        { left: 'Et vous?', right: 'And you? (formal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're being introduced to a colleague's mother. Complete the polite reply.",
      sentence: 'Très bien, merci. Et _____?',
      options: ['vous', 'toi', 'tu'],
      correct: 'vous',
      context: 'Stranger + older + formal setting = vous, every time.',
    },
    {
      type: 'translate',
      instruction: 'Type in French — formal version',
      prompt: 'How are you? (to your boss)',
      correct: ['Comment allez-vous?', 'Comment allez-vous', 'comment allez-vous?', 'comment allez-vous'],
    },
    {
      type: 'build_sentence',
      instruction: 'Reply politely — put the words in order',
      words: ['merci.', 'bien,', 'Très', 'vous?', 'Et'],
      correct: ['Très', 'bien,', 'merci.', 'Et', 'vous?'],
      translation: 'Very well, thank you. And you?',
    },
    {
      type: 'multiple_choice',
      instruction: "You're meeting your friend's grandfather for the first time. He says 'Bonjour'. What do you ask?",
      question: 'Choose the appropriate question',
      options: [
        { text: 'Comment allez-vous?', correct: true },
        { text: 'Ça va?', correct: false },
        { text: 'Salut, ça va?', correct: false },
      ],
      explanation: 'Older + just-met = vous form. Ça va is too familiar here.',
    },
    {
      type: 'translate',
      instruction: 'Type in French — formal',
      prompt: 'Very well, thank you',
      correct: ['Très bien, merci', 'Tres bien, merci', 'très bien, merci', 'Très bien merci'],
    },
  ],

  rwenDialogue: {
    intro: "Your French colleague has invited you to dinner and is introducing you to her father, Monsieur Lefèvre. He extends his hand.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour. Comment allez-vous?',
        native: 'Hello. How are you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Très bien, merci. Et vous?', native: 'Very well, thank you. And you?', correct: true, feedback: 'Exactly right — formal, warm, mirrored.' },
          { target: 'Ça va, et toi?', native: "Going well, and you? (informal)", correct: false, feedback: "Way too casual — 'tu/toi' with someone's father at first meeting is rude." },
          { target: 'Très bien, et toi?', native: "Very well, and you? (mixed)", correct: false, feedback: 'You started formal then dropped to "toi" — the slip is the giveaway. Stay with "vous".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Très bien, merci. Asseyez-vous, je vous en prie.',
        native: 'Very well, thank you. Please, have a seat.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice he warmed up at 'Et vous?'. Respect, mirrored. He'll remember you for it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'How are you? (formal — to a stranger or elder)',
        correct: ['Comment allez-vous?', 'Comment allez-vous', 'comment allez-vous?'],
      },
      {
        prompt: 'Very well, thank you. And you? (formal)',
        correct: ['Très bien, merci. Et vous?', 'Très bien, merci, et vous?', 'Tres bien, merci. Et vous?'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice one moment today where, in French, you'd use 'vous' instead of 'tu'. The barista you don't know? The Uber driver? Just notice it.",
    rwenSignoff: "Demain on travaille la gratitude. À demain — see you tomorrow.",
  },

  phase8: {
    scenario: "Dinner at your French colleague's home in Bordeaux. She introduces you to her father, Monsieur Lefèvre — a retired professor in his early 70s. You shake hands in the hallway. The whole exchange must stay in formal register.",
    rwenRole: "Monsieur Lefèvre — early 70s, retired, courteous and slightly old-school; he absolutely expects 'vous' from a stranger and notices instantly if it slips.",
    successCriteria: "User uses 'Comment allez-vous?' (NOT 'Ça va?'), replies with 'Très bien, merci' style formality, and bounces back with 'Et vous?' (NOT 'et toi?'). Register stays formal across the entire exchange — no mixing.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
