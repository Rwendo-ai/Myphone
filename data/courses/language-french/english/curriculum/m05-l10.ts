import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10-conversation',
  module: 5,
  lesson: 10,
  title: 'Une conversation familiale — A full family conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Ten lessons of family vocabulary, possessives, in-laws, the manquer inversion, the imparfait of memory. Today you weave them together. A French wedding, a long table, a stranger asking about YOUR family. You answer in French — like one of them.",
    culturalNote: "French weddings have an unmistakable rhythm: aperitif, ceremony, vin d'honneur, dinner that lasts six hours, dancing past midnight. People sit you next to strangers on purpose so the family talk can begin. 'Et ta famille?' is the universal opener. By the time you walk out, you'll have told ten relatives' stories.",
  },

  chunks: [
    {
      id: 'je_te_presente_ma_famille',
      target: 'Je te présente ma famille',
      native: 'Let me introduce my family to you',
      literal: 'I to-you present my(f) family',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'zhuh tuh pray-zahnt mah fah-MEE',
      audioRef: null,
    },
    {
      id: 'on_est_proches',
      target: 'On est très proches',
      native: 'We\'re very close',
      literal: 'One is very close',
      emoji: '🤝',
      phonetic: 'ohn ay treh PROHSH',
      audioRef: null,
    },
    {
      id: 'ils_me_manquent',
      target: 'Ils me manquent',
      native: 'I miss them',
      literal: 'They(subj) to-me are-missing',
      emoji: '💭',
      phonetic: 'eel muh MAHNK',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The full family toolkit',
    explanation: "Today combines everything: possessives (ma/mon/mes/notre/nos), kinship (mère, père, frère, sœur, oncle, tante, cousin/cousine, grand-mère, beau-père), the manquer inversion (tu me manques / ils me manquent), and imparfait (faisait, disait). You're not learning new chunks today — you're learning to STITCH.",
    examples: [
      { target: 'Je te présente ma sœur, Léa.', native: 'Let me introduce my sister, Léa.' },
      { target: 'On est très proches — comme des jumelles.', native: "We're very close — like twins." },
      { target: 'Mes parents me manquent quand je voyage.', native: 'I miss my parents when I travel.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Je te présente ma famille', right: 'Let me introduce my family' },
        { left: 'On est très proches', right: 'We\'re very close' },
        { left: 'Ils me manquent', right: 'I miss them' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're at the wedding, introducing your sister to a stranger.",
      sentence: 'Je _____ présente ma sœur, Léa.',
      options: ['te', 'me', 'la'],
      correct: 'te',
      context: "You're presenting your sister TO the other person — 'te' means 'to you'. 'Me' would mean 'to me' (nonsense here).",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'I miss them (e.g. my parents back home)',
      correct: ['Ils me manquent', 'ils me manquent'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "Long ago, my grandmother used to make tarts and we were very close."',
      words: ['et', 'ma', 'longtemps,', 'des', 'on', 'tartes', 'grand-mère', 'a', 'Il', 'y', 'faisait', 'très', 'était', 'proches.'],
      correct: ['Il', 'y', 'a', 'longtemps,', 'ma', 'grand-mère', 'faisait', 'des', 'tartes', 'et', 'on', 'était', 'très', 'proches.'],
      translation: 'Long ago, my grandmother used to make tarts and we were very close.',
    },
    {
      type: 'multiple_choice',
      instruction: "Someone at the wedding asks: 'Ta famille te manque?' (Does your family miss you?). She means: do YOU miss your family? Pick the right reply.",
      question: 'Which is correct?',
      options: [
        { text: 'Oui, ils me manquent beaucoup.', correct: true },
        { text: 'Oui, je leur manque beaucoup.', correct: false },
        { text: 'Oui, je manque ma famille.', correct: false },
      ],
      explanation: "'Je leur manque' means 'they miss ME'. 'Je manque ma famille' is direct English-to-French and wrong. The correct inversion: 'ils me manquent' = I miss them.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: "Let me introduce my brother to you (informal).",
      correct: ['Je te présente mon frère.', 'je te présente mon frère.', 'Je te presente mon frère.', 'je te presente mon frère.', 'Je te présente mon frere.', 'je te présente mon frere.'],
    },
  ],

  rwenDialogue: {
    intro: "It's the vin d'honneur at a French wedding. You're seated next to Madame Garnier — an older relative of the bride, who you've never met. She turns to you with curiosity.",
    lines: [
      {
        speaker: 'npc',
        target: 'Alors, parlez-moi de votre famille. Vous avez des frères et sœurs?',
        native: 'So, tell me about your family. Do you have brothers and sisters?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "J'ai un frère et une sœur. On est très proches — comme des amis.", native: 'I have a brother and a sister. We\'re very close — like friends.', correct: true, feedback: "Full sentence with 'on est très proches' and a 'comme' comparison. You sound completely at home." },
          { target: "Je ai un frère et un sœur.", native: '(broken)', correct: false, feedback: "Two issues: 'j'ai' (with apostrophe), and sœur is feminine — 'une sœur'." },
          { target: "Mes frères et sœurs sont absents.", native: 'My brothers and sisters are absent.', correct: false, feedback: "She asked if you HAVE any. Answer with 'j'ai' first, then describe." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Et ils vivent près de vous?',
        native: 'And do they live near you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Non, ils vivent loin. Ils me manquent souvent.', native: 'No, they live far away. I often miss them.', correct: true, feedback: "'Ils me manquent' — the inversion deployed perfectly in real conversation. That's Module 5 mastered." },
          { target: 'Non, ils vivent loin. Je leur manque souvent.', native: 'No, they live far away. They often miss me.', correct: false, feedback: "Wrong direction — 'je leur manque' means THEY miss YOU. You want 'ils me manquent'." },
          { target: 'Non, ils vivent loin. Je manque eux souvent.', native: '(broken)', correct: false, feedback: "English word order in French. Always invert: 'ils me manquent'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, c\'est dur, ça. Mais il y a Skype, hein?',
        native: 'Ah, that\'s hard. But there\'s Skype, right?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You just had a real family conversation — possessives, plurals, inversion, all of it. You walked into a French wedding and held your own. Module 5 is yours.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. The full toolkit — type from memory.',
    prompts: [
      {
        prompt: 'I miss them (in French)',
        correct: ['Ils me manquent', 'ils me manquent'],
      },
      {
        prompt: "We're very close (in French)",
        correct: ['On est très proches', 'on est très proches', 'On est tres proches', 'on est tres proches'],
      },
    ],
  },

  mission: {
    title: "Your Module 5 Journey",
    task: "Picture introducing YOUR family — out loud, in French — to a stranger at a wedding. Three sentences: who they are (possessives), how close you are ('on est très proches'), one you miss ('___ me manque'). Three minutes. You can do it now.",
    rwenSignoff: "Module 5 complete. You can talk family in French. À demain — on va manger.",
  },

  phase8: {
    scenario: "You're seated next to a stranger at a French wedding — Madame Garnier, an aunt of the bride. The vin d'honneur is in full swing, the cake is hours away, and she wants to know everything about your family. Brothers, sisters, parents, grandparents, who's where, who you miss. This is a 4-minute open-ended family conversation. Use everything from the module — possessives, kinship, the manquer inversion, imparfait if you talk about a grandparent's habits.",
    rwenRole: "Madame Marie-Hélène Garnier — ~70, sharp, curious, an aunt of the bride. Asks rapid follow-ups: 'et votre mère?', 'et vos grands-parents?', 'ils vous manquent?'. Will gently re-pose any question you fudge. Loves a good family story and will offer one of her own if you ask.",
    successCriteria: "User correctly uses (1) at least three different family-member nouns with right possessive (e.g. ma mère, mon père, mes grands-parents), (2) the manquer inversion correctly at least once ('ils me manquent' / 'X me manque'), and (3) either a 'comme ma famille' / 'on est proches' phrase OR one imparfait verb about a relative. Bonus: keeps 'vous' formality with Madame Garnier throughout.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
