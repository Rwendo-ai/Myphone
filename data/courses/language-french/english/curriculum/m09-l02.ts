import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-directions',
  module: 9,
  lesson: 2,
  title: 'Gauche, Droite, Tout droit — Directions',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You asked 'Où est la gare?' yesterday and the answer came back fast — too fast. Three turns, a roundabout, something about a boulangerie. Today we slow it down. The three imperatives that build every set of directions in France: tournez, continuez, c'est. Get them and you can follow ANY French stranger's hand-waving.",
    culturalNote: "French uses the polite 'vous' imperative when giving directions to strangers — 'Tournez', not 'Tourne'. It's automatic. A Parisian flicks their wrist and says 'Tournez à gauche, puis tout droit' — no please, no softening, but the 'vous' form keeps it polite. Hearing 'tu' in directions means the speaker thinks you're a child or a friend.",
  },

  chunks: [
    {
      id: 'tournez_a_gauche',
      target: 'Tournez à gauche',
      native: 'Turn left',
      literal: 'Turn(you-pl) to left',
      emoji: '⬅️',
      phonetic: 'toor-NAY ah GOHSH',
      audioRef: null,
    },
    {
      id: 'continuez_tout_droit',
      target: 'Continuez tout droit',
      native: 'Continue straight ahead',
      literal: 'Continue(you-pl) all straight',
      emoji: '⬆️',
      phonetic: 'kohn-tee-noo-AY too DRWAH',
      audioRef: null,
    },
    {
      id: 'cest_a_droite',
      target: "C'est à droite",
      native: "It's on the right",
      literal: 'It-is to right',
      emoji: '➡️',
      phonetic: 'say tah DRWAHT',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'À gauche vs à droite — and the polite imperative',
    explanation: "Two traps in one lesson. Trap 1: 'à gauche' (left) and 'à droite' (right) sound similar to a beginner — droit (straight) vs droite (right) is one silent 'e' apart. Trap 2: directions to strangers always use the 'vous' imperative — 'Tournez', 'Continuez', 'Prenez'. The 'tu' form ('Tourne') is reserved for friends and kids.",
    examples: [
      { target: 'Tournez à gauche au feu.', native: 'Turn left at the light.' },
      { target: 'Continuez tout droit, puis à droite.', native: 'Go straight, then right.' },
      { target: "C'est à droite, à côté du café.", native: "It's on the right, next to the café." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Tournez à gauche', right: 'Turn left' },
        { left: 'Continuez tout droit', right: 'Continue straight ahead' },
        { left: "C'est à droite", right: "It's on the right" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A stranger asks you the way. Be polite.',
      sentence: '_____ à gauche au feu rouge.',
      options: ['Tourne', 'Tournez', 'Tourner'],
      correct: 'Tournez',
      context: "You don't know this person — use the polite 'vous' imperative: Tournez. 'Tourne' is for a friend.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Continue straight ahead',
      correct: ['Continuez tout droit', 'continuez tout droit'],
    },
    {
      type: 'build_sentence',
      instruction: 'Direct someone past the boulangerie and to the right.',
      words: ['tout', 'puis', 'droit,', 'Continuez', "c'est", 'à', 'droite.'],
      correct: ['Continuez', 'tout', 'droit,', 'puis', "c'est", 'à', 'droite.'],
      translation: "Continue straight, then it's on the right.",
    },
    {
      type: 'multiple_choice',
      instruction: "Which means 'straight ahead'? Watch out — 'droit' and 'droite' are NOT the same word.",
      question: 'Pick the correct phrase',
      options: [
        { text: 'tout droit', correct: true },
        { text: 'tout droite', correct: false },
        { text: 'tout gauche', correct: false },
      ],
      explanation: "'Tout droit' (no e) = straight. 'À droite' (with e) = on the right. One silent letter changes the whole direction.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — politely tell a stranger',
      prompt: 'Turn left',
      correct: ['Tournez à gauche', 'tournez à gauche', 'Tournez a gauche', 'tournez a gauche'],
    },
  ],

  rwenDialogue: {
    intro: "Yesterday's kiosk vendor is now giving you actual directions. Listen, then choose how to confirm.",
    lines: [
      {
        speaker: 'npc',
        target: 'Continuez tout droit, puis tournez à gauche après la boulangerie.',
        native: 'Go straight, then turn left after the bakery.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "D'accord — tout droit, puis à gauche. Merci!", native: 'OK — straight, then left. Thanks!', correct: true, feedback: "Beautiful — you echoed the directions back. That's the universal 'I got it' move in any language." },
          { target: "D'accord — tout droite, puis à gauche.", native: '(droite ≠ droit)', correct: false, feedback: "Watch the 'e' — 'tout droit' (straight) has no 'e'. 'Droite' with the 'e' means 'right'." },
          { target: "Quoi?", native: 'What?', correct: false, feedback: 'Try again — better to repeat the directions than ask "what".' },
        ],
      },
      {
        speaker: 'npc',
        target: "Voilà, c'est à droite, à côté du café.",
        native: "There you go — it's on the right, next to the café.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You just navigated Paris with one bakery and one café as landmarks. Locals do exactly the same.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Turn left (politely, to a stranger — in French)',
        correct: ['Tournez à gauche', 'tournez à gauche', 'Tournez a gauche', 'tournez a gauche'],
      },
      {
        prompt: 'Continue straight ahead (in French)',
        correct: ['Continuez tout droit', 'continuez tout droit'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Stand up. Walk to your front door. As you walk, narrate it in French: 'Tout droit... tournez à gauche... c'est à droite.' Three phrases, one trip across your apartment. The body remembers what the brain alone forgets.",
    rwenSignoff: "Tomorrow we add: HOW FAR. À demain — restez sur le bon chemin.",
  },

  phase8: {
    scenario: "You're a Parisian for a moment. A confused American tourist with a paper map stops you outside Saint-Michel and asks the way to Notre-Dame. You can SEE Notre-Dame from here — it's two streets away, straight then right at the river. Give clear, polite directions in French using 'Continuez', 'Tournez', and 'C'est à droite/gauche'. The tourist will fumble, ask you to repeat, and thank you.",
    rwenRole: "Jordan — a friendly American tourist with a paper map, 30s, knows ten words of French, will repeat 'gauche?' or 'droite?' to confirm. Gets directions wrong if the user mixes up 'droit' and 'droite'.",
    successCriteria: "User uses the polite 'vous' imperative ('Tournez', 'Continuez' — never 'Tourne'/'Continue'), correctly distinguishes 'tout droit' (straight) from 'à droite' (right), AND gives at least two directional steps. Bonus: uses 'à gauche' once.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
