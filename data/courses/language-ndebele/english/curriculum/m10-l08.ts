import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08',
  module: 10,
  lesson: 8,
  title: 'Imbongi — praise poetry',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "An imbongi is not a folktale teller — she's a praise poet. Historically, she stood beside the king and recited izibongo: long, fast, layered praise verses naming his ancestors and great deeds. Today the form survives at weddings, funerals, and political rallies. You won't become an imbongi in one lesson, but you'll learn the shape so you can hear it.",
    culturalNote: "Praise poetry — izibongo — was a royal art in pre-colonial Matabeleland under King Mzilikazi and King Lobengula. The imbongi was court historian, hype-man, and oral journalist in one body. She/he memorised the king's lineage and could recite it at speed, layering metaphor on metaphor. Praise poems are still performed at chieftaincy installations, presidential inaugurations, and major weddings today. Lobengula's praises are still recited.",
  },

  chunks: [
    {
      id: 'imbongi',
      target: 'imbongi',
      native: 'a praise poet',
      literal: 'im- + bonga (praise) + -i (agent) — "the one who praises"',
      emoji: '🎤',
      phonetic: 'eem-BOH-ngee',
      audioRef: null,
    },
    {
      id: 'izibongo',
      target: 'izibongo',
      native: 'praise poetry / praise verses',
      literal: 'izi- (plural) + bonga (praise) + -o',
      emoji: '👑',
      phonetic: 'ee-zee-BOH-ngoh',
      audioRef: null,
    },
    {
      id: 'inkosi',
      target: 'inkosi',
      native: 'king / chief',
      literal: 'in- + kosi (chief)',
      emoji: '👑',
      phonetic: 'een-KOH-see',
      audioRef: null,
    },
    {
      id: 'wena_owayi',
      target: 'Wena owayi-…',
      native: 'You who were-… (praise verse opener)',
      literal: 'wena (you) + owayi- (relative-past prefix) + verb stem — every line begins this way',
      emoji: '✍️',
      phonetic: 'WEH-nah oh-WAH-yee',
      audioRef: null,
    },
    {
      id: 'bayethe',
      target: 'Bayethe!',
      native: 'Hail! (royal salute, the audience response to praise)',
      literal: 'a salute reserved for kings and chiefs',
      emoji: '🙌',
      phonetic: 'bah-YEH-teh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Basic verse structure: Wena owayi-',
    explanation: "Praise poetry strings together verses that all begin 'Wena owayi-…' (You who [verb]-ed). Each line names one great deed. The audience punctuates with 'Bayethe!' (Hail!) on big lines. Modern weddings use the same form to praise a bride or groom: 'Wena owayikhuthele' (you who were diligent), 'Wena owayilihle' (you who were beautiful).",
    examples: [
      { target: 'Wena owayilwa kakhulu!', native: 'You who fought greatly!' },
      { target: 'Wena owayithanda abantu bakho!', native: 'You who loved your people!' },
      { target: 'Bayethe!', native: 'Hail! (audience reply)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the praise-poetry term to its meaning',
      pairs: [
        { left: 'imbongi', right: 'a praise poet' },
        { left: 'izibongo', right: 'praise verses' },
        { left: 'inkosi', right: 'a king or chief' },
        { left: 'Bayethe!', right: 'Hail! (royal salute)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct historical role',
      question: 'In pre-colonial Matabeleland, what was the imbongi?',
      options: [
        { text: 'Court praise-poet, oral historian, and hype-man for the king.', correct: true },
        { text: 'A type of farmer who composed work-songs.', correct: false },
        { text: 'A children\'s entertainer who told folktales.', correct: false },
      ],
      explanation: "The imbongi was a royal figure — she stood beside Mzilikazi and Lobengula, reciting the king's lineage and deeds at high speed. Folktale tellers (Gogos around the fire) are a separate, equally important tradition.",
    },
    {
      type: 'fill_blank',
      instruction: 'Praise verse opener',
      sentence: '____ owayilwa kakhulu! ("You who fought greatly!")',
      options: ['Wena', 'Mina', 'Yena'],
      correct: 'Wena',
      context: 'Wena = you (singular, addressing the praised one). Praise is always addressed directly to its subject.',
    },
    {
      type: 'translate',
      instruction: 'Translate the audience reply',
      prompt: 'Hail! (royal salute)',
      correct: ['Bayethe', 'Bayethe!', 'bayethe'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen recreates the cadence of an imbongi at a chieftaincy gathering. The verses are simplified — but the rhythm is real. Listen, then add 'Bayethe!' at the end of each line.",
    lines: [
      { speaker: 'rwen', rwenLine: "Listen first. Imagine a fire, a circle, an old chief sitting on a stool. The imbongi steps forward and starts." },
      { speaker: 'npc', target: 'Wena owayikhokhela abantu bakho!', native: 'You who led your people!' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bayethe!', native: 'Hail!', correct: true, feedback: "Right. The praise verse demands the salute." },
          { target: 'Cosi!', native: 'Yes! (folktale reply)', correct: false, feedback: "'Cosi!' is for folktales. Praise poetry takes 'Bayethe!'" },
          { target: 'Yebo.', native: 'Yes (general).', correct: false, feedback: "Too plain. The royal/praise context demands 'Bayethe!'" },
        ],
      },
      { speaker: 'npc', target: 'Wena owayilwa kakhulu ezimpini!', native: 'You who fought greatly in battles!' },
      { speaker: 'npc', target: 'Wena owayithanda abantwana bezwe!', native: 'You who loved the children of the land!' },
      { speaker: 'rwen', rwenLine: "Three verses, three Bayethes. That's the basic loop. The imbongi can string fifty of these together at a real ceremony — but the bones are these.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Recall.',
    prompts: [
      { prompt: 'What is a praise poet called?', correct: ['imbongi', 'Imbongi'] },
      { prompt: 'What are praise verses called?', correct: ['izibongo', 'Izibongo'] },
      { prompt: 'What does the audience shout in response to a great praise line?', correct: ['Bayethe', 'Bayethe!', 'bayethe'] },
    ],
  },

  mission: {
    title: "Compose ONE praise line for someone you love",
    task: "Choose someone — a parent, a child, a friend. Compose ONE 'Wena owayi-…' line about them in any mix of isiNdebele and English: 'Wena owayikhuthele' (you who were diligent), 'Wena owayingikhulisile' (you who raised me). Send it to them. Watch what happens.",
    rwenSignoff: "Praise was royal. Now it's yours. The form was never about the king — it was about saying out loud what someone deserved to hear. Sala kuhle.",
  },

  phase8: {
    scenario: "You compose THREE praise verses for someone in your life (parent, child, partner, mentor) using the 'Wena owayi-…' opener. Rwen plays the role of audience and shouts 'Bayethe!' after each line. He'll then ask you to read the praise to that real person within 24 hours.",
    rwenRole: "Engaged audience member at a gathering — shouts 'Bayethe!' at each praise line, asks brief follow-ups about the person being praised, encourages the user to speak the verses aloud.",
    successCriteria: "User produced 3 praise lines all opening with 'Wena owayi-' (or accepted simpler 'Wena o-') and triggered the 'Bayethe!' response from Rwen at each one.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
