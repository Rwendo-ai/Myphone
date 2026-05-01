import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l06-where-is',
  module: 2,
  lesson: 6,
  title: 'Où est…? — Where is…?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're standing on a sidewalk in Montpellier with your bag over your shoulder, looking at a map on your phone, lost. You need the gare. Or the toilets. Or the address scribbled on a Post-it. 'Où est…' is the question that unlocks every street in France.",
    culturalNote: "In English we soften with 'sorry, I'm a bit lost — do you happen to know…' French goes straight in: 'Excusez-moi, où est la gare?' That's not rude — it's normal. Crisp questions are respected here. Save the apology for actual mistakes; for asking directions, just ask.",
  },

  chunks: [
    {
      id: 'ou_est_la_gare',
      target: 'Où est la gare?',
      native: "Where's the station?",
      literal: 'Where is the station?',
      emoji: '🚉',
      phonetic: 'oo eh lah GAR',
      audioRef: null,
    },
    {
      id: 'ou_sont_les_toilettes',
      target: 'Où sont les toilettes?',
      native: 'Where are the toilets?',
      literal: 'Where are the toilets?',
      emoji: '🚻',
      phonetic: 'oo sohn lay twah-LET',
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
    name: 'Où est vs Où sont',
    explanation: "'Où' = where. The verb agrees with what you're asking about. One thing → 'est' (is). Multiple things → 'sont' (are). 'Toilettes' is plural in French (always les toilettes), so it always takes sont. La gare is singular, so est.",
    examples: [
      { target: 'Où est la pharmacie?', native: "Where's the pharmacy?" },
      { target: 'Où sont les enfants?', native: 'Where are the children?' },
      { target: 'Où est mon sac?', native: "Where's my bag?" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match question to answer',
      pairs: [
        { left: 'Où est la gare?', right: "Where's the station?" },
        { left: 'Où sont les toilettes?', right: 'Where are the toilets?' },
        { left: 'Là-bas', right: 'Over there' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Complete the question — you're asking about the toilets",
      sentence: 'Où _____ les toilettes?',
      options: ['sont', 'est', 'sommes'],
      correct: 'sont',
      context: "'Toilettes' is always plural in French — needs 'sont'.",
    },
    {
      type: 'translate',
      instruction: "Type in French — you're at the airport in Nice and need to find the train station",
      prompt: "Where's the station?",
      correct: ['Où est la gare?', 'où est la gare?', 'Où est la gare', 'où est la gare'],
    },
    {
      type: 'build_sentence',
      instruction: 'Ask politely where the toilets are',
      words: ['les toilettes?', 'Où', 'sont'],
      correct: ['Où', 'sont', 'les toilettes?'],
      translation: 'Where are the toilets?',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct French',
      question: "You ask the local where the bakery is. He points and says…",
      options: [
        { text: 'Là-bas', correct: true },
        { text: 'Où est', correct: false },
        { text: 'Pas bien', correct: false },
      ],
      explanation: "'Là-bas' = over there. The other two don't answer the question.",
    },
    {
      type: 'translate',
      instruction: "Type in French — answer 'over there' while pointing",
      prompt: 'Over there',
      correct: ['Là-bas', 'là-bas', 'La-bas', 'la-bas'],
    },
  ],

  rwenDialogue: {
    intro: "You're at the Vieux-Port in Marseille. You need to catch a train at Saint-Charles in 40 minutes and you have no idea which way to walk. You stop a woman with a baguette under her arm. Ask.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Excusez-moi, où est la gare Saint-Charles?', native: 'Excuse me, where is Saint-Charles station?', correct: true, feedback: 'Perfect — opener + crisp question. She nods.' },
          { target: 'Gare Saint-Charles?', native: 'Saint-Charles station?', correct: false, feedback: "Almost a question, but no opener — sounds like you're testing her on geography." },
          { target: 'Où sont la gare?', native: 'Where are the station?', correct: false, feedback: "La gare is singular — it needs 'est', not 'sont'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'C’est tout droit, là-bas, à dix minutes à pied.',
        native: "It's straight ahead, over there, ten minutes on foot.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Merci beaucoup!', native: 'Thank you very much!', correct: true, feedback: 'Warm close. She smiles and continues on her way.' },
          { target: 'Où sont les toilettes?', native: 'Where are the toilets?', correct: false, feedback: "Different question entirely — finish one before opening another." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice how 'là-bas' came back at you in her answer? It's everywhere. Pointing-words are the universal handshake of directions.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "Where's the station? (in French)",
        correct: ['Où est la gare?', 'où est la gare?', 'Où est la gare', 'où est la gare'],
      },
      {
        prompt: 'Where are the toilets? (in French)',
        correct: ['Où sont les toilettes?', 'où sont les toilettes?', 'Où sont les toilettes', 'où sont les toilettes'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick a place in your town. Practise asking 'Où est…' for it. Bonus: ask out loud and answer yourself with 'Là-bas' and a finger-point. Sounds silly. Works.",
    rwenSignoff: "On y va — let's go.",
  },

  phase8: {
    scenario: "You've just stepped out of the Saint-Lazare station in Paris with a 20kg suitcase, looking for the Hôtel Bellevue on rue de Rome. You don't know which exit to take. A newspaper vendor at his kiosk is the closest human. You need to ask the way — and possibly the toilets while you're at it.",
    rwenRole: "Monsieur Patrice — newspaper vendor, ~55, gruff at first but melts when greeted properly. Knows the neighbourhood like his own pocket; gives directions with 'là-bas' and lots of pointing.",
    successCriteria: "User opens with 'Excusez-moi' or 'Bonjour', uses 'Où est…' (singular) for the hotel and 'Où sont les toilettes?' (plural) if asking about toilets — the est/sont agreement matters. User correctly understands 'là-bas' as the answer when given.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
