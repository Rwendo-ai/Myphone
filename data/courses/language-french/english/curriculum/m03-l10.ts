import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-conversation',
  module: 3,
  lesson: 10,
  title: 'Full introduction — A two-way intro',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "Today you put Module 3 together — name, age, job, family, hobbies, languages, where you live, who you are. Not as a list, but as a real exchange where you ask back. A complete two-way introduction. This is the moment your French stops being trivia and starts being you.",
    culturalNote: "A complete French intro has rhythm: open with être/avoir, give a couple of facts, then ASK BACK. The 'et vous?' bounce is non-negotiable — French speakers find a one-sided answer cold. The arc: who I am (être) → my age/family (avoir) → what I do (faire) → what I love (aimer/adorer) → bounce back. By the end of this lesson, you can drive that whole exchange in either direction.",
  },

  chunks: [
    {
      id: 'enchante_de_faire_votre_connaissance',
      target: 'Enchanté(e) de faire votre connaissance',
      native: 'Delighted to make your acquaintance',
      literal: 'Enchanted(-feminine) to make your acquaintance',
      emoji: '🤝',
      phonetic: 'ahn-shahn-TAY duh fehr votr ko-neh-SAHNS',
      audioRef: null,
    },
    {
      id: 'et_vous',
      target: 'Et vous?',
      native: 'And you?',
      literal: 'And you?',
      emoji: '↩️',
      phonetic: 'ay VOO',
      audioRef: null,
    },
    {
      id: 'on_a_des_choses_en_commun',
      target: 'On a des choses en commun',
      native: 'We have things in common',
      literal: 'One has some things in common',
      emoji: '🔗',
      phonetic: 'ohn ah day shohz ahn ko-MUHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Two-way intro flow — facts then bounce',
    explanation: "Real French intros are NEVER monologues. After 1–2 facts about yourself, you bounce: 'Et vous?' That word literally hands the conversation back. As they answer, you find a thread ('On a des choses en commun!') and the conversation becomes a relationship. The full Module 3 arc lives inside this rhythm.",
    examples: [
      { target: "Je suis canadienne, j'habite à Lyon depuis trois ans. Et vous?", native: "I'm Canadian, I've lived in Lyon for three years. And you?" },
      { target: "J'ai deux enfants, j'adore le sport. Et vous, des enfants?", native: "I have two children, I love sport. And you, any children?" },
      { target: "Vous aussi? On a des choses en commun!", native: 'You too? We have things in common!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Enchanté(e) de faire votre connaissance', right: 'Delighted to make your acquaintance' },
        { left: 'Et vous?', right: 'And you?' },
        { left: 'On a des choses en commun', right: 'We have things in common' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the bounce-back — French intros need this word.',
      sentence: "Je suis professeur, j'habite à Paris. _____ vous?",
      options: ['Et', 'Que', 'Mais'],
      correct: 'Et',
      context: "'Et vous?' is the indispensable handoff. Without it, your answer feels like a CV reading. With it, it's a conversation.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — formally pleased to meet someone (full version, female speaker)',
      prompt: 'Delighted to make your acquaintance (female speaker)',
      correct: ['Enchantée de faire votre connaissance', 'enchantée de faire votre connaissance'],
    },
    {
      type: 'build_sentence',
      instruction: "Combine the full Module 3 arc into one sentence: I'm Canadian, I've lived in Lyon for 3 years, I'm a teacher, and you?",
      words: ["j'habite", 'à', 'Lyon', 'depuis', 'trois', 'ans,', 'je', 'suis', 'professeur,', 'et', 'vous?', 'Je', 'suis', 'canadien(ne),'],
      correct: ['Je', 'suis', 'canadien(ne),', "j'habite", 'à', 'Lyon', 'depuis', 'trois', 'ans,', 'je', 'suis', 'professeur,', 'et', 'vous?'],
      translation: "I'm Canadian, I've lived in Lyon for three years, I'm a teacher, and you?",
    },
    {
      type: 'translate',
      instruction: 'Type in French — react to discovering shared interests',
      prompt: 'We have things in common!',
      correct: ['On a des choses en commun!', 'On a des choses en commun', 'on a des choses en commun!'],
    },
    {
      type: 'translate',
      instruction: 'Type in French — a male speaker introduces himself fully (Australian, lived in Paris for 5 years, engineer)',
      prompt: "I'm Australian, I've lived in Paris for 5 years, I'm an engineer (male speaker)",
      correct: [
        "Je suis australien, j'habite à Paris depuis 5 ans, je suis ingénieur",
        "je suis australien, j'habite à paris depuis 5 ans, je suis ingénieur",
        "Je suis australien, j'habite à Paris depuis cinq ans, je suis ingénieur",
      ],
    },
  ],

  rwenDialogue: {
    intro: "First day at a new co-working space in Bordeaux. A fellow renter, Léa, sits down across from you with her coffee, leans in, and starts the classic French opener.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour! On ne se connaît pas encore — parlez-moi un peu de vous.',
        native: "Hello! We haven't met yet — tell me a bit about yourself.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Bonjour! Enchanté(e) — je suis canadien(ne), j'habite à Bordeaux depuis six mois, je travaille dans la finance. Et vous?", native: "Hello! Pleased to meet you — I'm Canadian, I've lived in Bordeaux for six months, I work in finance. And you?", correct: true, feedback: 'Greeting + enchanté + nationality + depuis + job + ET VOUS. Every Module 3 beat in one breath.' },
          { target: "Je suis canadien(ne) et finance et Bordeaux", native: "I'm Canadian and finance and Bordeaux (broken)", correct: false, feedback: 'Words but no shape — no verbs, no connectors, no bounce-back. Try the full arc: être, habiter + depuis, travailler dans, et vous.' },
          { target: "J'ai canadien depuis six mois", native: "I have Canadian since six months (wrong verbs)", correct: false, feedback: "Nationality is être, not avoir. 'Je SUIS canadien(ne)'. And depuis works with the present of habiter, not with être for nationality." },
        ],
      },
      {
        speaker: 'npc',
        target: "Ah, la finance! Moi je suis graphiste. Et vous avez des enfants? Des loisirs?",
        native: 'Ah, finance! I\'m a graphic designer. Any children? Hobbies?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Pas d'enfants, mais j'adore le sport et j'aime bien la musique. Et vous?", native: "No children, but I love sport and I quite like music. And you?", correct: true, feedback: 'Family answer + two hobbies with correct articles + bounce. You\'re running the conversation now, not surviving it.' },
          { target: "Non enfants, sport, musique", native: 'No children, sport, music (telegram-style)', correct: false, feedback: 'Words again, no sentences. Connectors and articles are what make French sound like French.' },
          { target: "J'adore sport, j'aime musique", native: "I love sport, I like music (no articles)", correct: false, feedback: 'Articles after aimer/adorer with nouns: "j\'adore LE sport, j\'aime bien LA musique".' },
        ],
      },
      {
        speaker: 'npc',
        target: "Moi aussi j'adore le sport! On a des choses en commun.",
        native: 'I love sport too! We have things in common.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Tu l'as entendu? 'On a des choses en commun.' That sentence is a friendship beginning. You drove a full two-way introduction in French — every Module 3 piece, in correct shape, with the bounce. Module 3 is yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: "No looking back. Type the full intro from memory.",
    prompts: [
      {
        prompt: "I'm Canadian, I've lived in Lyon for 3 years, I'm a teacher. And you? (female speaker, in French — full intro)",
        correct: [
          "Je suis canadienne, j'habite à Lyon depuis trois ans, je suis professeur. Et vous?",
          "Je suis canadienne, j'habite à Lyon depuis 3 ans, je suis professeur. Et vous?",
          "je suis canadienne, j'habite à lyon depuis trois ans, je suis professeur. et vous?",
          "Je suis canadienne, j'habite à Lyon depuis trois ans, je suis professeure. Et vous?",
        ],
      },
      {
        prompt: 'We have things in common! (in French)',
        correct: ['On a des choses en commun!', 'On a des choses en commun', 'on a des choses en commun!'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Have a full French two-way introduction today — out loud, with anyone (a French speaker, a language partner, an AI, your reflection). Open with bonjour, do the four facts (nationality, where you live + depuis, job, one hobby), and ALWAYS bounce with 'Et vous?'. The whole arc, in one breath.",
    rwenSignoff: "Tu as fini Module 3. Tu te présentes en français comme un(e) habitué(e). À très bientôt.",
  },

  phase8: {
    scenario: "Welcome drinks at a new co-working space in Bordeaux. A fellow renter, Léa, sits down with her glass of wine and gives you the full opener: 'Parlez-moi de vous.' The next 4 minutes is your first complete French two-way introduction — name, where you're from, how long, what you do, family, hobbies — and you bounce every fact back to her too.",
    rwenRole: "Léa — a French graphic designer, ~32, friendly and observant, uses vous at first; she asks 'Parlez-moi de vous', 'Vous êtes d'où exactement?', 'Et vous habitez ici depuis longtemps?', 'Vous faites quoi dans la vie?', 'Des enfants? Des loisirs?'. She volunteers her own info too and warms up when you bounce questions back. She uses 'On a des choses en commun!' if you find a real overlap.",
    successCriteria: "User runs the full Module 3 arc end to end: nationality with être (gender-correct), age with avoir + ans, job with 'Je travaille dans...' OR 'Je suis [profession]' (no 'un/une'), where they live with PRESENT + depuis (NOT passé composé, NOT 'pour'), one or two hobbies with correct articles (J'adore LE sport, J'aime bien LA musique), AND asks 'Et vous?' at LEAST TWICE during the conversation. The test is integration — every Module 3 piece, in correct shape, in one connected two-way exchange.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
