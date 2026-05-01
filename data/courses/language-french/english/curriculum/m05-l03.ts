import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-children',
  module: 5,
  lesson: 3,
  title: 'Fils et filles — Sons and Daughters',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're at a school gate in Bordeaux, picking up your kid. Another parent waves, walks over, and asks 'C'est ton fils?' To talk about your children in French, you need three words — and one of them, 'fils', is sneaky: it ends in 's' but it's singular.",
    culturalNote: "'Fils' (son) is one of those quirky French words: the 's' is part of the word — there's no extra 's' for the plural. 'Mon fils' = my son, 'mes fils' = my sons. 'Fille' (daughter) is regular: 'ma fille' / 'mes filles'.",
  },

  chunks: [
    {
      id: 'mon_fils',
      target: 'Mon fils',
      native: 'My son',
      literal: 'My(m) son',
      emoji: '👦',
      phonetic: 'mohn FEESS',
      audioRef: null,
    },
    {
      id: 'ma_fille',
      target: 'Ma fille',
      native: 'My daughter',
      literal: 'My(f) daughter',
      emoji: '👧',
      phonetic: 'mah FEEY',
      audioRef: null,
    },
    {
      id: 'nos_enfants',
      target: 'Nos enfants',
      native: 'Our children',
      literal: 'Our(pl) children',
      emoji: '👨‍👩‍👧‍👦',
      phonetic: 'noh-zahn-FAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Possessive — notre/nos for "our"',
    explanation: "Just as 'my' has ma/mon/mes, 'our' has notre (singular, any gender) and nos (plural). 'Notre fille' = our daughter; 'nos enfants' = our children. Note the LIAISON in 'nos enfants' — sounds like 'no-zah-fahn'.",
    examples: [
      { target: 'Notre fils', native: 'Our son' },
      { target: 'Notre fille', native: 'Our daughter' },
      { target: 'Nos enfants', native: 'Our children' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Mon fils', right: 'My son' },
        { left: 'Ma fille', right: 'My daughter' },
        { left: 'Nos enfants', right: 'Our children' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "Our daughter is six years old."',
      sentence: '_____ fille a six ans.',
      options: ['Notre', 'Nos', 'Mes'],
      correct: 'Notre',
      context: "Daughter is singular, so 'notre'. Use 'nos' only when the noun is plural.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Our children',
      correct: ['Nos enfants', 'nos enfants'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence: "My son is at school"',
      words: ["l'école.", 'fils', 'à', 'est', 'Mon'],
      correct: ['Mon', 'fils', 'est', 'à', "l'école."],
      translation: 'My son is at school.',
    },
    {
      type: 'multiple_choice',
      instruction: "You have two daughters. Pick the correct way to say it.",
      question: "How do you say 'I have two daughters'?",
      options: [
        { text: "J'ai deux filles.", correct: true },
        { text: "J'ai deux fille.", correct: false },
        { text: "J'ai deux filles enfants.", correct: false },
      ],
      explanation: "'Filles' takes a regular plural -s. The third option doubles up — 'enfants' is unnecessary.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My daughter',
      correct: ['Ma fille', 'ma fille'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the school gate in Bordeaux. Another parent — Mme Rolland — recognises you and comes over.",
    lines: [
      {
        speaker: 'npc',
        target: 'Bonjour! C\'est ton fils, là-bas?',
        native: 'Hi! Is that your son over there?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Oui, c'est mon fils. Il s'appelle Léo.", native: "Yes, that's my son. His name is Léo.", correct: true, feedback: "Smooth — 'mon fils' and an introduction in one breath." },
          { target: "Oui, c'est ma fils.", native: "Yes, that's my son.", correct: false, feedback: "Fils is masculine — so 'mon fils', not 'ma fils'." },
          { target: "Oui, c'est mon enfants.", native: "Yes, that's my children.", correct: false, feedback: "She asked about one (your son) — 'mon fils' is what you want." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Il est dans la classe de ma fille! Vous avez d\'autres enfants?',
        native: "He's in my daughter's class! Do you have other children?",
      },
      {
        speaker: 'rwen',
        rwenLine: "She slid into 'd'autres enfants?' — other children. The plural of enfant is enfants, with that gentle liaison. You're already inside how French families talk.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'My son (in French)',
        correct: ['Mon fils', 'mon fils'],
      },
      {
        prompt: 'Our children (in French)',
        correct: ['Nos enfants', 'nos enfants'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "If you have kids, name them out loud in French: 'Voici mon fils ___' or 'Voici ma fille ___.' If not, picture a niece or nephew and try: 'C'est mon neveu / ma nièce.'",
    rwenSignoff: "Children are how French becomes everyday. À demain.",
  },

  phase8: {
    scenario: "School pickup time at École Jules Ferry in Bordeaux. You've just collected your child and another parent — Madame Rolland — strikes up small talk by the gate. She wants to know about your kids: how many, ages, what year they're in. Real parent-to-parent conversation.",
    rwenRole: "Madame Sophie Rolland — another school parent, ~40, friendly but slightly reserved at first. Asks practical questions, drops 'd'accord' a lot, will follow up with 'et l'autre?' if you mention more than one child. Doesn't correct you out loud but pauses if you stumble.",
    successCriteria: "User uses 'mon fils' OR 'ma fille' (correctly with possessive matching the noun's gender), and either 'mes enfants' or 'nos enfants' for the plural. Bonus: handles 'l'autre' follow-up about a second child without dropping agreement.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
