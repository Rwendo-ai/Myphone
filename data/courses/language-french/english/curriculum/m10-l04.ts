import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-sick',
  module: 10,
  lesson: 4,
  title: 'Être malade — Being sick',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "When you're not well in another country, the first sentence matters most. 'Je ne me sens pas bien.' Memorise it. It works at a pharmacy, with your host, with a stranger. And learn the idiom French uses for every ache — 'avoir mal à'. You don't HAVE a headache. You have pain AT the head.",
    culturalNote: "French pharmacies (pharmacie — green cross out front) are real first-line care. Pharmacists give advice, recommend medication, often speak some English. 'J'ai mal à la tête' will get you what you need — they'll ask follow-ups in plain language.",
  },

  chunks: [
    {
      id: 'je_ne_me_sens_pas_bien',
      target: 'Je ne me sens pas bien',
      native: "I don't feel well",
      literal: 'I not myself feel not well',
      emoji: '🤒',
      phonetic: 'zhuh nuh muh sahn pah BYAN',
      audioRef: null,
    },
    {
      id: 'jai_mal_a_la_tete',
      target: "J'ai mal à la tête",
      native: 'I have a headache',
      literal: 'I-have pain at the head',
      emoji: '🤕',
      phonetic: 'zhay mahl ah lah TET',
      audioRef: null,
    },
    {
      id: 'je_dois_voir_un_medecin',
      target: 'Je dois voir un médecin',
      native: 'I need to see a doctor',
      literal: 'I must see a doctor',
      emoji: '🩺',
      phonetic: 'zhuh dwah vwahr uhn med-SAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Avoir mal à — the universal pain idiom",
    explanation: "French doesn't say 'my head hurts'. It says 'I have pain at the head'. The structure: avoir mal à + le/la/les + body part. 'À + le' contracts to 'au', 'à + les' contracts to 'aux'. Memorise the structure once and every body-pain phrase falls out of it.",
    examples: [
      { target: "J'ai mal à la tête", native: 'I have a headache (la tête = head)' },
      { target: "J'ai mal au ventre", native: "I have a stomach ache (au = à + le)" },
      { target: "J'ai mal aux pieds", native: 'My feet hurt (aux = à + les, plural)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Je ne me sens pas bien', right: "I don't feel well" },
        { left: "J'ai mal à la tête", right: 'I have a headache' },
        { left: 'Je dois voir un médecin', right: 'I need to see a doctor' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Pick the correct preposition for 'I have a stomach ache'.",
      sentence: "J'ai mal _____ ventre.",
      options: ['au', 'à la', 'aux'],
      correct: 'au',
      context: "'Ventre' is masculine (le ventre). 'À + le' contracts to 'au'. So: J'ai mal AU ventre.",
    },
    {
      type: 'translate',
      instruction: "Type in French — the universal opening line at a pharmacy",
      prompt: "I don't feel well",
      correct: ['Je ne me sens pas bien', 'je ne me sens pas bien'],
    },
    {
      type: 'build_sentence',
      instruction: 'You wake up with a pounding headache. Tell your host. Put the words in order.',
      words: ['mal', 'la', 'tête', "J'ai", 'à'],
      correct: ["J'ai", 'mal', 'à', 'la', 'tête'],
      translation: 'I have a headache',
    },
    {
      type: 'multiple_choice',
      instruction: "It's day three of a fever. You're in a small French town. What do you say to your host?",
      question: 'Pick the most direct, useful line',
      options: [
        { text: 'Je dois voir un médecin.', correct: true },
        { text: 'Je suis content.', correct: false },
        { text: "Calme-toi.", correct: false },
      ],
      explanation: "'Je dois voir un médecin' is the clear ask. The other two miss what's happening entirely.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — your head is pounding',
      prompt: "I have a headache",
      correct: ["J'ai mal à la tête", "j'ai mal à la tête"],
    },
  ],

  rwenDialogue: {
    intro: "It's 8am. You're staying with your host family in Bordeaux. Your host, Madame Lefèvre, sees you come down for breakfast looking pale.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour. Tu as bien dormi?',
        native: 'Good morning. Did you sleep well?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pas vraiment, je ne me sens pas bien. J\'ai mal à la tête.', native: "Not really, I don't feel well. I have a headache.", correct: true, feedback: 'Clear, specific, the exact information she needs to help you.' },
          { target: "J'ai mal le tête.", native: "I have pain THE head. (wrong preposition)", correct: false, feedback: "Need 'à la tête' — the idiom is 'avoir mal À + the body part'. Without the 'à', the structure breaks." },
          { target: 'Je suis content!', native: "I'm happy!", correct: false, feedback: "She can see you're not. Honesty gets you tea and an aspirin; this gets you confused looks." },
        ],
      },
      {
        speaker: 'npc',
        target: "Oh là là. Reste là, je te fais un thé. Tu dois voir un médecin?",
        native: "Oh dear. Stay there, I'll make you tea. Do you need to see a doctor?",
      },
      {
        speaker: 'rwen',
        rwenLine: "Beautifully done — and the 'avoir mal à' idiom is now yours forever. Every body part follows the same pattern.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — these are travel survival lines.',
    prompts: [
      {
        prompt: "I don't feel well (in French)",
        correct: ['Je ne me sens pas bien', 'je ne me sens pas bien'],
      },
      {
        prompt: "I have a headache (in French)",
        correct: ["J'ai mal à la tête", "j'ai mal à la tête"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find the next small ache in your body — sore shoulder, tired feet, stiff neck — and say it in French in your head: 'J'ai mal à...' You'll learn the body parts tomorrow, but the structure is already yours.",
    rwenSignoff: "Prends soin de toi. Take care of yourself. À demain.",
  },

  phase8: {
    scenario: "Day two of a fever. You walked into a small pharmacy in Aix-en-Provence. The pharmacist looks up — kind, professional, ready to help. You need to explain how you feel and ask for advice in French.",
    rwenRole: "Madame Garnier — pharmacist, ~45, professional and warm; she uses 'vous' throughout, will ask 'depuis quand?' (since when?) and recommend a medication. She listens carefully to symptoms.",
    successCriteria: "User opens with 'Bonjour, madame', states 'Je ne me sens pas bien', uses 'J'ai mal à' + at least one body part with the correct preposition (à la / au / aux), and asks 'Je dois voir un médecin?' OR accepts pharmacist's recommendation. Stays in vous register.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
