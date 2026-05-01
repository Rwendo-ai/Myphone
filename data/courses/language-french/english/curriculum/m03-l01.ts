import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01-je-suis',
  module: 3,
  lesson: 1,
  title: 'Je suis... — I am',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Je suis. Two of the most useful syllables in French — they open the door to your job, your nationality, your mood, your whole self. Today we wire them in, including the small extra letter that changes when you're a woman speaking.",
    culturalNote: "French adjectives agree with the speaker's gender. A man says 'Je suis fatigué', a woman says 'Je suis fatiguée' — same pronunciation, different spelling. Same with nationalities (canadien / canadienne) and jobs (étudiant / étudiante). The (e) in dictionaries is the feminine form.",
  },

  chunks: [
    {
      id: 'je_suis_etudiant',
      target: 'Je suis étudiant(e)',
      native: "I'm a student",
      literal: 'I am student(-feminine)',
      emoji: '🎓',
      phonetic: 'zhuh swee ay-too-dee-AHN(T)',
      audioRef: null,
    },
    {
      id: 'je_suis_canadien',
      target: 'Je suis canadien(ne)',
      native: "I'm Canadian",
      literal: 'I am Canadian(-feminine)',
      emoji: '🍁',
      phonetic: 'zhuh swee ka-na-dee-EHN / ka-na-dee-EN',
      audioRef: null,
    },
    {
      id: 'je_suis_fatigue',
      target: 'Je suis fatigué(e)',
      native: "I'm tired",
      literal: 'I am tired(-feminine)',
      emoji: '😴',
      phonetic: 'zhuh swee fa-tee-GAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb être (to be) + adjective agreement',
    explanation: "'Je suis' = I am. The word that follows it (job, nationality, state) agrees with your gender. Add an -e for feminine — sometimes silent (fatigué/fatiguée), sometimes audible (étudiant/étudiante, canadien/canadienne).",
    examples: [
      { target: 'Je suis américain (m) / américaine (f)', native: "I'm American" },
      { target: 'Je suis professeur', native: "I'm a teacher (this one doesn't change)" },
      { target: 'Je suis content (m) / contente (f)', native: "I'm happy" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French phrase to its meaning',
      pairs: [
        { left: 'Je suis étudiant(e)', right: "I'm a student" },
        { left: 'Je suis canadien(ne)', right: "I'm Canadian" },
        { left: 'Je suis fatigué(e)', right: "I'm tired" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "A French colleague asks where you're from. Complete your reply.",
      sentence: 'Je _____ canadienne.',
      options: ['suis', 'es', 'ai'],
      correct: 'suis',
      context: "'Je suis' = I am. 'J'ai' = I have (used for age, hunger). Don't mix them.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — you are a male student',
      prompt: "I'm a student (male speaker)",
      correct: ['Je suis étudiant', 'je suis étudiant'],
    },
    {
      type: 'build_sentence',
      instruction: "It's late at the Lyon market. Tell the stall owner you're tired (female speaker).",
      words: ['fatiguée', 'Je', 'suis'],
      correct: ['Je', 'suis', 'fatiguée'],
      translation: "I'm tired (female speaker)",
    },
    {
      type: 'multiple_choice',
      instruction: 'A woman from Toronto is introducing herself. Which form does she use?',
      question: 'Pick the correct nationality form',
      options: [
        { text: 'Je suis canadienne', correct: true },
        { text: 'Je suis canadien', correct: false },
        { text: "J'ai canadienne", correct: false },
      ],
      explanation: "Female speaker = canadienne (extra -ne). Male speaker would say canadien. And it's 'je suis', never 'j'ai', for nationality.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — a male speaker says he is tired',
      prompt: "I'm tired (male speaker)",
      correct: ['Je suis fatigué', 'je suis fatigué'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a small dinner in Montréal. A new acquaintance, Léa, leans over and asks who you are and what you do. Three sentences will do it.",
    lines: [
      {
        speaker: 'npc',
        target: 'Alors, vous êtes d\'où? Et vous faites quoi?',
        native: 'So, where are you from? And what do you do?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Je suis canadien, je suis étudiant', native: "I'm Canadian, I'm a student", correct: true, feedback: 'Two clean facts in two clean sentences. Perfect use of être.' },
          { target: "J'ai canadien et étudiant", native: 'I have Canadian and student (wrong verb)', correct: false, feedback: "'Je suis', not 'j'ai'. Avoir is for age and possession — not for who you are." },
          { target: 'Canadien. Étudiant.', native: 'Canadian. Student.', correct: false, feedback: 'The words are right but you need the verb — French rarely drops "je suis".' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, étudiant à Montréal? Vous avez l\'air un peu fatigué!',
        native: "Oh, a student in Montréal? You look a bit tired!",
      },
      {
        speaker: 'rwen',
        rwenLine: "And there it is — three je suis sentences and Léa already knows half your story. Notice she replied with 'fatigué' too — she heard you and built on it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "I'm a student (male speaker, in French)",
        correct: ['Je suis étudiant', 'je suis étudiant'],
      },
      {
        prompt: "I'm Canadian (female speaker, in French)",
        correct: ['Je suis canadienne', 'je suis canadienne'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'Je suis ___' three times today — out loud or in writing. 'Je suis fatigué(e).' 'Je suis curieux(se).' 'Je suis prêt(e).' Pick what's true right now and say it in French.",
    rwenSignoff: "Tu te présentes déjà. À demain — see you tomorrow.",
  },

  phase8: {
    scenario: "First night at a co-working space in Lyon. Another desk-renter, Léa, drops by your table with a coffee and asks the classic newcomer trio: where you're from, what you do, and how you're holding up after the flight.",
    rwenRole: "Léa — a freelance graphic designer, ~28, friendly and curious; she'll lob short open questions ('Et toi?', 'Vous êtes d'où?', 'Et vous faites quoi?') and gently react to each answer. She lets the user practise three 'Je suis...' answers in a row.",
    successCriteria: "User produces at least three distinct 'Je suis ___' answers covering nationality, occupation/student status, and a current state (fatigué, content, curieux, etc.). Female speakers use the feminine forms (canadienne, étudiante, fatiguée); male speakers use masculine. User does NOT substitute 'j'ai' for 'je suis' on identity. Bonus if they use both 'je suis' and the verb correctly without prompting from Rwen.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
