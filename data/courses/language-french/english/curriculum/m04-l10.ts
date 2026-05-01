import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-conversation',
  module: 4,
  lesson: 10,
  title: 'A Gender-Aware Conversation',
  estimatedMinutes: 8,
  xpReward: 50,

  hook: {
    rwenLine: "You've made it. Module 4 is the steepest grammar climb in French — and you climbed it. Today is the test, but a kind one: a real conversation where every article matters. Dinner table, French friends, an evening of food and small questions. Let's go.",
    culturalNote: "A French dinner is the deep end of the language — articles, registers, partitives, possessives all flying around at once. The locals don't notice they're using them. By the end of this lesson, neither will you. That's fluency: not perfection, just flow.",
  },

  chunks: [
    {
      id: 'passe_moi_le_sel',
      target: 'Passe-moi le sel',
      native: 'Pass me the salt',
      literal: 'Pass-me the(masc) salt',
      emoji: '🧂',
      phonetic: 'pahs-MWAH luh SEL',
      audioRef: null,
    },
    {
      id: 'tu_veux_du_vin',
      target: 'Tu veux du vin?',
      native: 'Want some wine?',
      literal: 'You want (some)(masc) wine?',
      emoji: '🍷',
      phonetic: 'too vuh doo VAHN',
      audioRef: null,
    },
    {
      id: 'cette_soupe_est_delicieuse',
      target: 'Cette soupe est délicieuse',
      native: 'This soup is delicious',
      literal: 'This(fem) soup is delicious(fem)',
      emoji: '🍲',
      phonetic: 'set SOUP ay day-lee-SYUHZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Putting articles to work — table-talk fluency',
    explanation: "Real French conversation pulls from your full article toolkit in seconds. Definite (le sel — pass THE salt). Partitive (du vin — some wine). Demonstrative (cette soupe — this soup). Possessive (ma fourchette — my fork). One sentence can mix three of them. Stop translating. Start tasting.",
    examples: [
      { target: 'Passe-moi le sel, s’il te plaît', native: 'Pass me the salt, please' },
      { target: 'Tu veux du vin ou de l’eau?', native: 'Do you want some wine or some water?' },
      { target: 'Ma mère adore cette recette', native: 'My mother loves this recipe' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each French phrase to its meaning',
      pairs: [
        { left: 'Passe-moi le sel', right: 'Pass me the salt' },
        { left: 'Tu veux du vin?', right: 'Want some wine?' },
        { left: 'Cette soupe est délicieuse', right: 'This soup is delicious' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Across the dinner table, you ask politely.',
      sentence: 'Tu peux me passer _____ pain?',
      options: ['le', 'du', 'un'],
      correct: 'le',
      context: "When you ask for THE specific bread on the table, it's le pain. Du pain would be like asking 'do you have any bread?' — wrong moment.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — informal',
      prompt: 'Want some wine?',
      correct: ['Tu veux du vin?', 'tu veux du vin?', 'Tu veux du vin', 'tu veux du vin'],
    },
    {
      type: 'translate',
      instruction: 'Type in French — compliment the cook',
      prompt: 'This soup is delicious',
      correct: ['Cette soupe est délicieuse', 'cette soupe est délicieuse'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at the table. Articles must be perfect.",
      question: "Which sentence is correct?",
      options: [
        { text: 'Ma mère adore cette recette de ta grand-mère', correct: true },
        { text: 'Mon mère adore ce recette de ton grand-mère', correct: false },
        { text: 'Ma mère adore une recette de tes grand-mère', correct: false },
      ],
      explanation: "Mère is feminine (ma). Recette is feminine (cette). Grand-mère is feminine and singular, addressed to one person — ta. Each article inherits the noun's gender and number.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'My friends love this wine and the cheese from this region'",
      words: ['Mes', 'amis', 'adorent', 'ce', 'vin', 'et', 'le', 'fromage', 'de', 'cette', 'région'],
      correct: ['Mes', 'amis', 'adorent', 'ce', 'vin', 'et', 'le', 'fromage', 'de', 'cette', 'région'],
      translation: 'My friends love this wine and the cheese from this region.',
    },
  ],

  rwenDialogue: {
    intro: "It's Saturday night at a French friend's apartment. Six people around the table, plates of food, wine flowing. Your friend's mum offers you something. Your turn to engage — naturally, fluidly, with all your articles.",
    lines: [
      {
        speaker: 'npc',
        target: 'Tu veux du vin? On a un rouge de Bordeaux qui est super.',
        native: "Want some wine? We've got a great Bordeaux red.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Avec plaisir, oui — du rouge, merci. Et cette soupe est délicieuse, au fait!', native: "With pleasure, yes — some red, thanks. And this soup is delicious, by the way!", correct: true, feedback: 'Magnificent. Du rouge (partitive), cette soupe (demonstrative + feminine agreement on délicieuse). Whole module in two sentences.' },
          { target: 'Oui — le vin rouge. Et la soupe est délicieux.', native: 'Yes — the wine red. And the soup is delicious.', correct: false, feedback: 'Two slips: for "some" wine you want du, not le. And soupe is feminine — délicieuse, not délicieux.' },
          { target: 'Oui, un vin. Et ce soupe est bonne.', native: 'Yes, a wine. And this soup is good.', correct: false, feedback: "Un vin = a (whole) wine — odd. You want du vin (some). And soupe is feminine: cette soupe, not ce soupe." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tu peux me passer le sel, s’il te plaît?',
        native: 'Can you pass me the salt, please?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bien sûr, voilà. Tu veux aussi de l’eau?', native: "Of course, here you go. Do you also want some water?", correct: true, feedback: "Perfect — le sel (definite, the salt on the table), de l’eau (partitive + elision before vowel). You're moving like a native." },
          { target: "Bien sûr. Tu veux aussi l'eau?", native: 'Of course. Do you also want the water?', correct: false, feedback: "L'eau means THE water (a specific water). For 'some water' it's de l'eau — partitive with elision." },
          { target: 'Bien sûr. Tu veux aussi du eau?', native: 'Of course. Do you also want some water?', correct: false, feedback: "Eau starts with a vowel — du collapses to de l'. So: de l'eau, never du eau." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'You did it. Module 4 — the gender mountain — done. Du, de la, le, ce, mon, vos — they’re yours now. À table tu es français.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Want some wine? (informal, in French)', correct: ['Tu veux du vin?', 'tu veux du vin?', 'Tu veux du vin', 'tu veux du vin'] },
      { prompt: 'This soup is delicious (in French)', correct: ['Cette soupe est délicieuse', 'cette soupe est délicieuse'] },
    ],
  },

  mission: {
    title: 'Module 4 Complete — Today’s Journey',
    task: "Imagine yourself at a French dinner table tonight. Run a one-minute monologue in your head — describe the food, ask for things, compliment the cook, talk about your family. Use at least one of each: le/la, un/une, des, du/de la, ce/cette, mon/ma. The whole module in 60 seconds.",
    rwenSignoff: "Bravo, vraiment. Module 4 was the hardest. From here, French opens up. À demain on entre dans la famille — Module 5.",
  },

  phase8: {
    scenario: "You're at a Saturday-night dinner at a French friend's apartment in Marseille. Six people, three courses. Over the meal you compliment the food, ask for things on the table, accept or decline wine, and chat about your own family. Every sentence pulls from your full article toolkit. The host's mother is at the table — switch registers smoothly when speaking to her vs your friend.",
    rwenRole: "Hosts the whole table. Plays Léa (your friend, tu) and her mother Madame Bernard (vous). Pours wine, passes plates, asks questions. Notices article slips and gracefully recasts them.",
    successCriteria: "User uses at least 5 different article types correctly in one conversation (definite, indefinite, partitive, demonstrative, possessive); switches between tu (with Léa) and vous (with her mother) without mixing; asks for at least one item on the table with le/la and accepts/declines wine with du or de la.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
