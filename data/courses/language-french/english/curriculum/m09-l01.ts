import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-where-is',
  module: 9,
  lesson: 1,
  title: 'Où est...? — Where is...?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You step out of Châtelet métro. Eight exits, no signs you trust, and a phone with 4% battery. Time to ask. In France, 'Où est...?' is the survival question — but it changes shape depending on whether you want one thing or several. Today, we get you out of the métro.",
    culturalNote: "French keeps subject-verb agreement strict. English shrugs and says 'where is/where are' without thinking. French expects you to match: singular noun → est, plural noun → sont. Get it wrong and people understand, but they hear it. Get it right and you sound like you've been here longer than you have.",
  },

  chunks: [
    {
      id: 'ou_est_la_gare',
      target: 'Où est la gare?',
      native: 'Where is the station?',
      literal: 'Where is the(f) station?',
      emoji: '🚉',
      phonetic: 'oo ay lah GAHR',
      audioRef: null,
    },
    {
      id: 'ou_sont_les_toilettes',
      target: 'Où sont les toilettes?',
      native: 'Where are the toilets?',
      literal: 'Where are the(pl) toilets?',
      emoji: '🚻',
      phonetic: 'oo sohn lay twah-LETT',
      audioRef: null,
    },
    {
      id: 'la_bas',
      target: 'Là-bas',
      native: 'Over there',
      literal: 'There-down',
      emoji: '👉',
      phonetic: 'lah-BAH',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Où est vs Où sont — singular and plural',
    explanation: "French keeps subject-verb agreement everywhere. One thing → 'Où est...?'. More than one thing → 'Où sont...?'. 'Toilettes' is always plural in French (like 'scissors' in English), so it's always 'Où SONT les toilettes?' — never 'où est'. This single agreement is the giveaway between a tourist and a learner.",
    examples: [
      { target: 'Où est la banque?', native: 'Where is the bank? (one bank)' },
      { target: 'Où sont les toilettes?', native: 'Where are the toilets? (always plural)' },
      { target: 'Où sont mes amis?', native: 'Where are my friends? (more than one)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Où est la gare?', right: 'Where is the station?' },
        { left: 'Où sont les toilettes?', right: 'Where are the toilets?' },
        { left: 'Là-bas', right: 'Over there' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You urgently need a bathroom in a café. Toilettes is plural in French.',
      sentence: 'Excusez-moi, où _____ les toilettes?',
      options: ['est', 'sont', 'es'],
      correct: 'sont',
      context: "Les toilettes is plural in French — always. Plural noun takes 'sont'.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Where is the station? (one station)',
      correct: ['Où est la gare?', 'Où est la gare', 'où est la gare?', 'où est la gare', 'Ou est la gare?', 'ou est la gare?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Point out where the métro is to a lost tourist.',
      words: ['est', 'Le', 'là-bas.', 'métro'],
      correct: ['Le', 'métro', 'est', 'là-bas.'],
      translation: 'The métro is over there.',
    },
    {
      type: 'multiple_choice',
      instruction: "You want the toilets in a brasserie. What do you say to the waiter?",
      question: 'Pick the correct form',
      options: [
        { text: 'Où sont les toilettes?', correct: true },
        { text: 'Où est les toilettes?', correct: false },
        { text: 'Où est la toilette?', correct: false },
      ],
      explanation: "'Toilettes' is plural in French (like the English 'scissors') — so the verb must be 'sont'. Singular 'toilette' exists but means a wash/grooming, not a bathroom.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — point out something far away',
      prompt: 'Over there',
      correct: ['Là-bas', 'là-bas', 'la-bas', 'La-bas'],
    },
  ],

  rwenDialogue: {
    intro: "You exit at Châtelet métro and need to find Gare du Nord. A woman is waiting at a kiosk. Approach politely.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excusez-moi, où est la gare du Nord?', native: 'Excuse me, where is Gare du Nord?', correct: true, feedback: "Perfect — 'Excusez-moi' opens it, and 'la gare' is singular, so 'est'." },
          { target: 'Excusez-moi, où sont la gare du Nord?', native: '(wrong agreement)', correct: false, feedback: "One station — singular. It's 'Où EST la gare', not 'sont'." },
          { target: 'Toilettes?', native: 'Toilets?', correct: false, feedback: "Different question — and very abrupt. Always 'Excusez-moi' first, then your full question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, la gare du Nord — c\'est là-bas, à droite.',
        native: "Ah, Gare du Nord — it's over there, to the right.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Hear how she echoed 'là-bas' back? That's the chunk you'll hear on every Paris street. You're fluent enough to ask, and now fluent enough to follow.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Where is the station? (in French)',
        correct: ['Où est la gare?', 'Où est la gare', 'où est la gare?', 'où est la gare', 'Ou est la gare?', 'ou est la gare?'],
      },
      {
        prompt: 'Where are the toilets? (in French — careful with agreement)',
        correct: ['Où sont les toilettes?', 'Où sont les toilettes', 'où sont les toilettes?', 'où sont les toilettes', 'Ou sont les toilettes?', 'ou sont les toilettes?'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one place around you — kitchen, station, your favourite café — and ask out loud, in French: 'Où est ___?' Then ask about 'les toilettes' so your tongue learns the plural shape. Two questions. Two minutes.",
    rwenSignoff: "Tomorrow we learn how to actually FOLLOW the directions. À demain.",
  },

  phase8: {
    scenario: "You've just come up from the Châtelet métro in Paris and you're disoriented. You need Gare du Nord (to catch a Eurostar) and you need the toilets first. There's a newspaper kiosk with a friendly vendor in front of you. Approach him, greet him, ask BOTH questions correctly — singular for the gare, plural for the toilettes — and listen for 'là-bas' in his reply.",
    rwenRole: "Hassan — the kiosk vendor, 40s, unflappable, has answered this question 1000 times. Will gently correct 'où est les toilettes' to 'où sont les toilettes' if the user fudges agreement. Friendly but won't volunteer info — the user has to ask.",
    successCriteria: "User opens with 'Bonjour' or 'Excusez-moi', then asks 'Où est la gare du Nord?' (singular est), and at some point asks 'Où sont les toilettes?' (plural sont). Both agreement choices must be right. Bonus: user understands 'là-bas' in Hassan's reply.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
