import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l02-siblings',
  module: 5,
  lesson: 2,
  title: 'Frères et sœurs — Brothers and Sisters',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're showing your French colleague photos from your sister's wedding. She asks: tu as combien de frères et sœurs? In French, a brother is just a brother — older or younger, French uses the same word. Today we keep it simple.",
    culturalNote: "Some languages (Mandarin, Korean, Arabic) have different words for older vs younger siblings. French does NOT — frère is brother, sœur is sister, age unspecified. If age matters, you add aîné (older) or cadet (younger). Otherwise, just frère and sœur.",
  },

  chunks: [
    {
      id: 'mon_frere',
      target: 'Mon frère',
      native: 'My brother',
      literal: 'My(m) brother',
      emoji: '👦',
      phonetic: 'mohn FREHR',
      audioRef: null,
    },
    {
      id: 'ma_soeur',
      target: 'Ma sœur',
      native: 'My sister',
      literal: 'My(f) sister',
      emoji: '👧',
      phonetic: 'mah SUHR',
      audioRef: null,
    },
    {
      id: 'jai_deux_freres',
      target: 'J\'ai deux frères',
      native: 'I have two brothers',
      literal: 'I-have two brothers',
      emoji: '👬',
      phonetic: 'zhay duh FREHR',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'No older/younger distinction',
    explanation: "French uses 'frère' for any brother and 'sœur' for any sister — age doesn't change the word. To specify age you add 'aîné' (older) or 'cadet'/'plus jeune' (younger): 'mon frère aîné' = my older brother.",
    examples: [
      { target: 'Mon frère', native: 'My brother (any age)' },
      { target: 'Mon frère aîné', native: 'My older brother (when age matters)' },
      { target: 'Ma sœur cadette', native: 'My younger sister (when age matters)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Mon frère', right: 'My brother' },
        { left: 'Ma sœur', right: 'My sister' },
        { left: "J'ai deux frères", right: 'I have two brothers' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right possessive for "sister"',
      sentence: '_____ sœur habite à Marseille.',
      options: ['Mon', 'Ma', 'Mes'],
      correct: 'Ma',
      context: 'Sœur is feminine — so ma. Notice it stays ma even though you, the speaker, might be male.',
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I have two brothers',
      correct: ["J'ai deux frères", "j'ai deux frères", "J'ai deux freres", "j'ai deux freres"],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence: "My sister is older than me"',
      words: ['plus', 'que', 'sœur', 'âgée', 'Ma', 'est', 'moi.'],
      correct: ['Ma', 'sœur', 'est', 'plus', 'âgée', 'que', 'moi.'],
      translation: 'My sister is older than me.',
    },
    {
      type: 'multiple_choice',
      instruction: "Your French friend asks 'Tu as un grand frère?' (Do you have an older brother?)",
      question: "If you want to say 'Yes, I have one older brother', which is best?",
      options: [
        { text: "Oui, j'ai un frère aîné.", correct: true },
        { text: "Oui, j'ai un grand frère gros.", correct: false },
        { text: "Oui, mon frère est vieux.", correct: false },
      ],
      explanation: "'Frère aîné' is the standard way to say older brother. 'Grand frère' is conversational and works too. 'Vieux' (old) sounds harsh.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My sister',
      correct: ['Ma sœur', 'ma sœur', 'Ma soeur', 'ma soeur'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the office coffee machine with Camille. She's flicking through wedding photos and asks about your siblings.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tu as des frères et sœurs?',
        native: 'Do you have brothers and sisters?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "J'ai un frère et une sœur.", native: 'I have one brother and one sister.', correct: true, feedback: 'Clean and clear — exactly the natural answer.' },
          { target: "J'ai un grand frère vieux.", native: 'I have one old big brother.', correct: false, feedback: "'Vieux' (old) is rough. Just 'frère' or 'frère aîné' if age matters." },
          { target: 'Mon frère et ma sœur.', native: 'My brother and my sister.', correct: false, feedback: "She asked if you HAVE any — start with 'J'ai' (I have)." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, sympa. Et ils habitent où?',
        native: 'Ah, nice. And where do they live?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice she didn't ask 'older or younger?' — French speakers often don't, because the language doesn't push them to. Liberating, no?",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'My brother (in French)',
        correct: ['Mon frère', 'mon frère', 'Mon frere', 'mon frere'],
      },
      {
        prompt: 'I have two brothers (in French)',
        correct: ["J'ai deux frères", "j'ai deux frères", "J'ai deux freres", "j'ai deux freres"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell yourself out loud, in French, how many siblings you have. 'J'ai ___ frère(s) et ___ sœur(s).' If you're an only child: 'Je suis enfant unique.'",
    rwenSignoff: "Brothers and sisters — same word, no fuss. À demain.",
  },

  phase8: {
    scenario: "Friday evening apéro at a colleague's apartment in the 11th. You've just met Camille's flatmate Théo, and after a glass of rosé he turns to you and asks about your siblings. He wants to know how many you have, what they're like, and what they do. You need to describe them naturally — without overcomplicating with English-style age distinctions.",
    rwenRole: "Théo Bertrand — Camille's 28-year-old flatmate, relaxed, a bit teasing, asks lots of follow-ups. He has three sisters himself and likes comparing family sizes. He'll gently correct you if you say 'ma frère' or 'mon sœur'.",
    successCriteria: "User says how many siblings they have (e.g. 'J'ai un frère et une sœur'), correctly uses 'mon frère' / 'ma sœur' with right gender, and gives at least one detail about a sibling without forcing an unnecessary older/younger distinction.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
