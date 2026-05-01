import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l06-in-laws',
  module: 5,
  lesson: 6,
  title: 'Belle-famille — In-laws',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Your French partner's parents are coming to dinner. You'll need to introduce them, talk about them, address them with respect. French calls in-laws 'belle-famille' — literally 'beautiful family'. There's something kind hiding in that name.",
    culturalNote: "French is famously generous to in-laws: belle-mère (mother-in-law, literally 'beautiful mother'), beau-père (father-in-law, 'beautiful father'). 'Beau' / 'belle' here doesn't mean attractive — it's an old form meaning 'by alliance'. Same word also means stepmother/stepfather, depending on context.",
  },

  chunks: [
    {
      id: 'belle_mere',
      target: 'Belle-mère',
      native: 'Mother-in-law (or stepmother)',
      literal: 'Beautiful-mother',
      emoji: '👩‍🦳',
      phonetic: 'bell-MEHR',
      audioRef: null,
    },
    {
      id: 'beau_pere',
      target: 'Beau-père',
      native: 'Father-in-law (or stepfather)',
      literal: 'Beautiful-father',
      emoji: '👨‍🦳',
      phonetic: 'boh-PEHR',
      audioRef: null,
    },
    {
      id: 'mon_mari_ma_femme',
      target: 'Mon mari / Ma femme',
      native: 'My husband / My wife',
      literal: 'My(m) husband / My(f) woman',
      emoji: '💍',
      phonetic: 'mohn mah-REE / mah FAHM',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Belle- / Beau- for alliance',
    explanation: "Add 'belle-' (before feminine) or 'beau-' (before masculine) to a family role to mark in-law or step relationships. Belle-mère, beau-père, belle-sœur, beau-frère. Same prefix covers BOTH 'in-law' and 'step' — context tells you which.",
    examples: [
      { target: 'Ma belle-mère', native: 'My mother-in-law / stepmother' },
      { target: 'Mon beau-frère', native: 'My brother-in-law / stepbrother' },
      { target: 'Ma belle-sœur', native: 'My sister-in-law / stepsister' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Ma belle-mère', right: 'My mother-in-law' },
        { left: 'Mon beau-père', right: 'My father-in-law' },
        { left: 'Ma femme', right: 'My wife' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your wife\'s mother is coming for dinner.',
      sentence: '_____ belle-mère arrive ce soir.',
      options: ['Ma', 'Mon', 'Mes'],
      correct: 'Ma',
      context: "Belle-mère is feminine — 'ma'. The 'belle' part doesn't change the noun's gender; mère does.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My husband',
      correct: ['Mon mari', 'mon mari'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "My father-in-law is very kind"',
      words: ['très', 'beau-père', 'gentil.', 'Mon', 'est'],
      correct: ['Mon', 'beau-père', 'est', 'très', 'gentil.'],
      translation: 'My father-in-law is very kind.',
    },
    {
      type: 'multiple_choice',
      instruction: "You're introducing your wife at a dinner.",
      question: "Which is the correct introduction?",
      options: [
        { text: "Voici ma femme, Sarah.", correct: true },
        { text: "Voici mon femme, Sarah.", correct: false },
        { text: "Voici ma mari, Sarah.", correct: false },
      ],
      explanation: "Femme is feminine — 'ma femme'. 'Mari' (husband) is masculine — would need 'mon mari'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French (mind the hyphen)',
      prompt: 'My mother-in-law',
      correct: ['Ma belle-mère', 'ma belle-mère', 'Ma belle-mere', 'ma belle-mere'],
    },
  ],

  rwenDialogue: {
    intro: "You're meeting your French partner's parents for the first time. They've just arrived at the apartment. You open the door.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonsoir! Vous devez être... le mari de Camille!',
        native: 'Good evening! You must be... Camille\'s husband!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Bonsoir, oui — je suis le mari de Camille. Enchanté.", native: "Good evening, yes — I'm Camille's husband. Pleased to meet you.", correct: true, feedback: "Warm and proper. 'Le mari de Camille' — possession with 'de'. Beautifully done." },
          { target: "Bonsoir, je suis ma femme.", native: "Good evening, I am my wife.", correct: false, feedback: "Self-contradiction. You'd want 'le mari de Camille' or just 'oui c'est moi'." },
          { target: "Salut, beau-père!", native: 'Hi, father-in-law!', correct: false, feedback: "Way too casual for a first meeting — and you don't address someone by their family role to their face." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Enchanté! Et voici ma femme, Hélène — votre belle-mère, donc.',
        native: 'Pleased to meet you! And this is my wife Hélène — your mother-in-law, then.',
      },
      {
        speaker: 'rwen',
        rwenLine: "He used 'ma femme' for his own wife and 'votre belle-mère' for what she is to you. Same person, two relationships, two phrases. French maps the whole web.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'My mother-in-law (in French)',
        correct: ['Ma belle-mère', 'ma belle-mère', 'Ma belle-mere', 'ma belle-mere'],
      },
      {
        prompt: 'My wife (in French)',
        correct: ['Ma femme', 'ma femme'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Picture meeting a French in-law for the first time. Practise once out loud: 'Bonsoir, enchanté(e). Vous êtes la belle-mère / le beau-père de ___?' Open with warmth, then ask gently.",
    rwenSignoff: "In-laws first impressions — French gives you the words. À demain.",
  },

  phase8: {
    scenario: "First-meeting dinner with your French partner's parents at their apartment in Strasbourg. You walk in, meet them at the door, and over apéritifs they ask you about your relationship, your wedding (if any), and your own family. They're sizing you up gently. You need to introduce yourself, refer correctly to your spouse and to them as your in-laws.",
    rwenRole: "Monsieur Pascal Dubois — your future father-in-law, ~62, polite and traditional, slightly formal. Calls you 'vous' on first meeting. Will warm up if you're respectful and use the right family vocabulary. Doesn't tolerate sloppy possessives in this setting.",
    successCriteria: "User correctly uses 'ma femme' or 'mon mari' to refer to their partner, AND refers to either Pascal himself or his wife with the right in-law term ('vous êtes mon beau-père' / 'votre femme — ma belle-mère'). Bonus: maintains 'vous' formality throughout.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
