import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l06-mon-ma',
  module: 4,
  lesson: 6,
  title: 'Mon, Ma, Mes — My',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "In English, 'my' is just 'my' — my brother, my sister, my parents. French splits 'my' three ways: mon (m), ma (f), mes (plural). The form depends on the thing you own, not on you. Mon ami, ma sœur, mes parents.",
    culturalNote: "Here's the kicker: when a feminine word starts with a vowel, French drops ma in favour of mon — just for sound. So it's mon amie (not 'ma amie'), mon école (not 'ma école'). Same trick as cet replacing ce. French hates two vowel sounds touching.",
  },

  chunks: [
    {
      id: 'mon_ami',
      target: 'Mon ami',
      native: 'My (male) friend',
      literal: 'My(masc) friend',
      emoji: '👨‍🤝‍👨',
      phonetic: 'mohn-nah-MEE',
      audioRef: null,
    },
    {
      id: 'ma_soeur',
      target: 'Ma sœur',
      native: 'My sister',
      literal: 'My(fem) sister',
      emoji: '👭',
      phonetic: 'mah SUHR',
      audioRef: null,
    },
    {
      id: 'mes_parents',
      target: 'Mes parents',
      native: 'My parents',
      literal: 'My(plural) parents',
      emoji: '👨‍👩‍👧',
      phonetic: 'may pah-RAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Mon / Ma / Mes — possessives for "my"',
    explanation: "Mon before masculine singular. Ma before feminine singular consonants. Mes in any plural. And the twist: ma becomes mon before a feminine word starting with a vowel — mon amie, mon école — for sound flow.",
    examples: [
      { target: 'Mon frère', native: 'My brother (m)' },
      { target: 'Ma maison', native: 'My house (f)' },
      { target: "Mon amie", native: 'My (female) friend (f + vowel → mon)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Mon ami', right: 'My (male) friend' },
        { left: 'Ma sœur', right: 'My sister' },
        { left: 'Mes parents', right: 'My parents' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Amie is feminine but starts with a vowel.",
      sentence: '_____ amie s’appelle Sophie.',
      options: ['Mon', 'Ma', 'Mes'],
      correct: 'Mon',
      context: "Feminine + vowel = mon (not ma). It's a sound thing, not a gender thing.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My sister',
      correct: ['Ma sœur', 'ma sœur', 'Ma soeur', 'ma soeur'],
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My parents',
      correct: ['Mes parents', 'mes parents'],
    },
    {
      type: 'multiple_choice',
      instruction: "Maison is feminine, starts with m. Pick the possessive.",
      question: "How do you say 'my house'?",
      options: [
        { text: 'Ma maison', correct: true },
        { text: 'Mon maison', correct: false },
        { text: 'Mes maison', correct: false },
      ],
      explanation: 'Maison is feminine and starts with a consonant — pure ma. Mon would be wrong since there’s no vowel-clash to fix.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My brother and my parents are at home"',
      words: ['Mon', 'frère', 'et', 'mes', 'parents', 'sont', 'à', 'la', 'maison'],
      correct: ['Mon', 'frère', 'et', 'mes', 'parents', 'sont', 'à', 'la', 'maison'],
      translation: 'My brother and my parents are at home.',
    },
  ],

  rwenDialogue: {
    intro: "Rwen wants to meet your family. He's asking who's around. Pick the right form of 'my' each time.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Tell me about your closest people. Who comes first?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ma sœur, mon frère, mes parents', native: 'My sister, my brother, my parents', correct: true, feedback: 'Beautiful. Each gender and plural slotted in correctly.' },
          { target: 'Mon sœur, ma frère, mes parents', native: 'My sister, my brother, my parents', correct: false, feedback: 'Sœur is feminine (ma), frère is masculine (mon). You swapped them.' },
          { target: 'Ma sœur, ma frère, ma parents', native: 'My sister, my brother, my parents', correct: false, feedback: 'Plural always needs mes. And frère is masculine — mon, not ma.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Et mon amie Sophie? Tu la connais?',
        native: 'And my friend Sophie? Do you know her?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear that? Mon amie — even though amie is feminine. Vowel kicks in, ma flips to mon. Smooth.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'My sister (in French)', correct: ['Ma sœur', 'ma sœur', 'Ma soeur', 'ma soeur'] },
      { prompt: 'My parents (in French)', correct: ['Mes parents', 'mes parents'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "List three of your closest people in French in your head: 'mon frère', 'ma mère', 'mes amis'. Notice how the possessive changes shape, but you never have to think about you — only about them.",
    rwenSignoff: "À demain. Possessives are about the noun, never about you.",
  },

  phase8: {
    scenario: "You're meeting your French partner's family for the first time at a Sunday lunch. They ask you about your own family — siblings, parents, friends, work. Describe them all using mon / ma / mes correctly.",
    rwenRole: "Madame Dupont — your partner's mother, late 60s, kind but observant. She'll ask follow-up questions: 'et votre sœur, elle habite où?' and notice if mon/ma slips.",
    successCriteria: "User correctly uses mon, ma, mes with at least 4 family members or close people; handles the mon-before-vowel rule at least once (mon amie, mon école).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
