import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l08-bachche',
  module: 5,
  lesson: 8,
  title: 'Bachchā, Beṭā, Beṭī — Children & Affectionate Address',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Children in India belong to the joint family, not just the parents. 'Beṭā' (son) and 'beṭī' (daughter) — the formal words — are also used affectionately by ANY older person to ANY younger person, related or not. An auto-rickshaw driver might call you 'beṭā' and it's warm, not weird.",
    culturalNote: "There's a famous Indian phrase: 'Beṭā mānge mā se nahin, mahallē se' — a child belongs not to the mother but to the neighbourhood. In Hindi-speaking joint families, every aunt is partly raising you, every uncle is partly disciplining you. Children are addressed by everyone with 'beṭā' — and they answer to all of them.",
  },

  chunks: [
    {
      id: 'bachcha',
      target: 'बच्चा (Bachchā)',
      native: 'Child (general)',
      literal: 'Bachchā — generic word for child or young person',
      emoji: '👶',
      phonetic: 'BACH-chaa',
      audioRef: null,
    },
    {
      id: 'beta',
      target: 'बेटा (Beṭā)',
      native: 'Son / dear (used by elders for any younger male, or affectionately for any younger person)',
      literal: 'Beṭā — son OR affectionate "dear"',
      emoji: '👦',
      phonetic: 'BAY-taa',
      audioRef: null,
    },
    {
      id: 'beti',
      target: 'बेटी (Beṭī)',
      native: 'Daughter / dear (used by elders for any younger female)',
      literal: 'Beṭī — daughter OR affectionate "dear" for girls/women',
      emoji: '👧',
      phonetic: 'BAY-tee',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Beṭā/Beṭī as both kin and affection",
    explanation: "'Beṭā' literally means 'son' but elders use it for ANY younger person they feel affection for — including the bāī who cleans the house, the auto driver's small child, you the foreign learner. 'Beṭī' is the same for younger females. The word travels far beyond actual parentage.",
    examples: [
      { target: 'Merā beṭā', native: 'My son' },
      { target: 'Beṭā, idhar āo.', native: 'Dear (kid), come here. (Could be from any older person.)' },
      { target: 'Hamāre teen bachche hain.', native: 'We have three children.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each child-vocabulary term to its meaning',
      pairs: [
        { left: 'Bachchā', right: 'Child (general)' },
        { left: 'Beṭā', right: 'Son / dear (m.)' },
        { left: 'Beṭī', right: 'Daughter / dear (f.)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A grandmother addresses a young girl warmly',
      sentence: '_____, idhar āo, mithāī khāo.',
      options: ['Beṭī', 'Sās', 'Buā'],
      correct: 'Beṭī',
      context: 'Affectionate address to a young female = Beṭī.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Son',
      correct: ['Beṭā', 'Beta', 'beta'],
    },
    {
      type: 'multiple_choice',
      instruction: "An auto driver, ~50, sees you (younger) looking lost in Old Delhi. He calls out kindly. Which word might he use?",
      question: 'Affectionate address from an elder to a younger person:',
      options: [
        { text: 'Beṭā / Beṭī', correct: true },
        { text: 'Sās', correct: false },
        { text: 'Pati', correct: false },
      ],
      explanation: "Beṭā (or Beṭī for women) is the warm, generic 'dear' an elder uses for anyone younger — strangers included. It's not actually claiming you as their child; it's marking warmth and the age gap.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "We have two children"',
      words: ['hain.', 'do', 'Hamāre', 'bachche'],
      correct: ['Hamāre', 'do', 'bachche', 'hain.'],
      translation: 'We have two children.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Daughter',
      correct: ['Beṭī', 'Beti', 'beti'],
    },
  ],

  rwenDialogue: {
    intro: "On the second night of Diwali, an elderly neighbour of Rwen's family approaches you with a plate of mithai.",
    lines: [
      {
        speaker: 'npc',
        target: 'Beṭā, mithāī khāo. Diwālī kī shubhkāmnāyein!',
        native: 'Dear, eat sweets. Happy Diwali blessings!',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Dhanyavād, Dādī-jī. Diwālī kī shubhkāmnāyein!', native: 'Thank you, Grandmother. Happy Diwali blessings!', correct: true, feedback: "She called you 'beṭā' affectionately; you returned with the respectful elder title 'Dādī-jī' even though she's not actually your grandmother. That's exactly the warmth-loop." },
          { target: "I'm not your beṭā.", native: "I'm not your beṭā.", correct: false, feedback: "She didn't mean it literally! 'Beṭā' from an elder is affectionate, not claiming kinship. Receive it warmly and respond respectfully." },
          { target: 'Hi.', native: 'Hi.', correct: false, feedback: "She offered sweets and a Diwali blessing — give a proper response: 'Dhanyavād, Dādī-jī. Diwālī kī shubhkāmnāyein!'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Sahī jawāb. Beṭā shabd se ḍar mat — yahān yeh pyār kā shabd hai.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Son / dear (used affectionately for younger male)', correct: ['Beṭā', 'Beta', 'beta'] },
      { prompt: 'Daughter / dear (used affectionately for younger female)', correct: ['Beṭī', 'Beti', 'beti'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If an Indian elder calls you 'beṭā' or 'beṭī' on the street, in a shop, in a train — receive it. Don't bristle, don't correct them. They're claiming you with warmth. Try mentally answering with 'Dhanyavād, ji' (Thank you, sir/madam respectfully).",
    rwenSignoff: "Beṭā ek shabd nahin — ek galē lagānā hai. Phir milenge.",
  },

  phase8: {
    scenario: "It's Bhāī Dūj morning. You're walking through the gali (lane) outside Rwen's family home in Lucknow when an elderly woman selling diyas calls out 'Beṭā, ek diyā lo!' She wants you to buy a clay lamp from her. You're meant to respond warmly in Hindi — receiving her 'beṭā' and returning the warmth without seeming weird about being called her 'son'.",
    rwenRole: "Diyā-walī Amma — the elderly woman (~70) who sells clay diyās in Rwen's neighbourhood every Diwali week, has been calling Rwen 'beṭā' since he was four; she calls every younger person beṭā/beṭī and gets visibly pleased when foreigners actually engage with the warmth instead of recoiling.",
    successCriteria: "User accepts the 'beṭā' from an elder graciously (NOT literal-mindedly correcting her), responds in Hindi with at least 'Dhanyavād' or 'Namaste, Dādī-jī' or similar respectful elder address, and uses 'beṭā/beṭī' or 'bachche' correctly in their own Hindi if asked about children.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
