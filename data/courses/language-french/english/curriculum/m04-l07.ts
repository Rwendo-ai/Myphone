import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l07-ton-ta',
  module: 4,
  lesson: 7,
  title: 'Ton, Ta, Tes / Votre, Vos — Your',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "There are two ways to say 'your' in French — and choosing wrong can sound rude or weirdly cold. Ton/ta/tes for friends and family (tu). Votre/vos for strangers, elders, formal settings (vous). Same idea as 'tu' vs 'vous'.",
    culturalNote: "When you switch from votre to ton with someone, it's a moment. A French friend will sometimes literally say 'on peut se tutoyer?' — 'can we use tu with each other?' — to mark the shift. It's a small intimacy. Until then, votre is safer with anyone older or in a professional context.",
  },

  chunks: [
    {
      id: 'ton_frere',
      target: 'Ton frère',
      native: 'Your brother (informal)',
      literal: 'Your(tu)(masc) brother',
      emoji: '👨',
      phonetic: 'tohn FREHR',
      audioRef: null,
    },
    {
      id: 'votre_maison',
      target: 'Votre maison',
      native: 'Your house (formal)',
      literal: 'Your(vous) house',
      emoji: '🏠',
      phonetic: 'VOH-truh meh-ZOHN',
      audioRef: null,
    },
    {
      id: 'tes_amis',
      target: 'Tes amis',
      native: 'Your friends (informal)',
      literal: 'Your(tu)(plural) friends',
      emoji: '👫',
      phonetic: 'tay-zah-MEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ton/Ta/Tes vs Votre/Vos — two registers of "your"',
    explanation: "Tu-version: ton (m), ta (f), tes (plural). Vous-version: votre (singular, any gender), vos (plural). Vous form is simpler — only two shapes. And like with mon, ta becomes ton before a feminine vowel: ton amie.",
    examples: [
      { target: 'Ton frère / Votre frère', native: 'Your brother (informal / formal)' },
      { target: 'Ta sœur / Votre sœur', native: 'Your sister (informal / formal)' },
      { target: 'Tes amis / Vos amis', native: 'Your friends (informal / formal)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Ton frère', right: 'Your brother (informal)' },
        { left: 'Votre maison', right: 'Your house (formal)' },
        { left: 'Tes amis', right: 'Your friends (informal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're talking to your boss. Use the formal 'your'.",
      sentence: 'Comment va _____ famille?',
      options: ['ta', 'votre', 'tes'],
      correct: 'votre',
      context: "Boss = vous. Singular noun (famille). So votre — never ta.",
    },
    {
      type: 'translate',
      instruction: 'Type in French (informal — friend)',
      prompt: 'Your brother',
      correct: ['Ton frère', 'ton frère'],
    },
    {
      type: 'translate',
      instruction: 'Type in French (formal — stranger)',
      prompt: 'Your friends',
      correct: ['Vos amis', 'vos amis'],
    },
    {
      type: 'multiple_choice',
      instruction: "You ask a French shopkeeper about their kids.",
      question: "Which is the right 'your'?",
      options: [
        { text: 'Comment vont vos enfants?', correct: true },
        { text: 'Comment vont tes enfants?', correct: false },
        { text: 'Comment vont ton enfants?', correct: false },
      ],
      explanation: "Stranger + plural noun = vos. Tes would feel oddly familiar with someone you don't know.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Your sister and your friends are nice" (informal)',
      words: ['Ta', 'sœur', 'et', 'tes', 'amis', 'sont', 'sympas'],
      correct: ['Ta', 'sœur', 'et', 'tes', 'amis', 'sont', 'sympas'],
      translation: 'Your sister and your friends are nice. (informal)',
    },
  ],

  rwenDialogue: {
    intro: 'You’re at a dinner party. First, you talk to a friend’s mum (formal). Then to your friend (informal). Switch registers naturally.',
    lines: [
      {
        speaker: 'npc',
        target: 'Bonsoir! Et votre voyage, c’était comment?',
        native: 'Good evening! And your trip, how was it?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Très bien, merci. Et votre famille va bien?', native: 'Very good, thank you. And your family is well?', correct: true, feedback: 'Perfect — votre matches her vous to you. Symmetrical, polite.' },
          { target: 'Très bien, merci. Et ta famille va bien?', native: 'Very good, thank you. And your family is well?', correct: false, feedback: 'Too familiar — she used vous, you should mirror with votre.' },
          { target: 'Très bien, merci. Et tes famille va bien?', native: 'Very good, thank you. And your family is well?', correct: false, feedback: 'Famille is singular. Tes is for plural. Even with friends it’d be ta famille.' },
        ],
      },
      {
        speaker: 'npc',
        target: '(your friend, casually) Et tes amis sont là?',
        native: 'And your friends — are they here?',
      },
      {
        speaker: 'rwen',
        rwenLine: 'Beautiful — you flipped registers without missing a beat. Votre with the mum, tes with your friend. That’s how French actually works.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Your house (formal — to a stranger)', correct: ['Votre maison', 'votre maison'] },
      { prompt: 'Your friends (informal — to a friend)', correct: ['Tes amis', 'tes amis'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Picture two people you know — a close friend and your boss. Mentally ask each one about their family in French. Friend: "ta famille va bien?" Boss: "votre famille va bien?" Feel the register shift.',
    rwenSignoff: "À demain. Tu and vous shape every French sentence — your possessives now follow.",
  },

  phase8: {
    scenario: "You're at a networking event in Lyon. You meet a senior executive (formal — vous) and chat for two minutes about their work and family. Then you bump into an old university friend (informal — tu) and chat about their life. You must switch registers smoothly mid-conversation.",
    rwenRole: "First Madame Lemoine — executive in her 60s, polite. Then Marc — your old friend from uni, casual. Rwen plays both, marking the switch.",
    successCriteria: "User uses votre/vos with the executive and ton/ta/tes with the friend, never mixes the registers within one conversation, and handles ton-before-vowel correctly at least once.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
