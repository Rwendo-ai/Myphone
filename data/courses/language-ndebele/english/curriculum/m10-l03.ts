import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03',
  module: 10,
  lesson: 3,
  title: 'The Hare and the Tortoise — Umvundla loMfudu',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Every Ndebele child knows umvundla — the hare. He is fast, clever, full of himself, and almost always loses. Today we tell his most famous race: against umfudu, the tortoise. Listen for the moral hiding at the end.",
    culturalNote: "In Ndebele folktales, umvundla is the trickster — like Anansi in West Africa or Brer Rabbit in the American South. He's not the hero; he's the cautionary tale. The hare is what happens when cleverness has no patience. The tortoise is what happens when patience has no need to brag. Both are lessons.",
  },

  chunks: [
    {
      id: 'umvundla',
      target: 'umvundla',
      native: 'the hare (the trickster)',
      literal: 'um- (singular animate) + vundla',
      emoji: '🐇',
      phonetic: 'oom-VOON-dlah',
      audioRef: null,
    },
    {
      id: 'umfudu',
      target: 'umfudu',
      native: 'the tortoise',
      literal: 'um- + fudu',
      emoji: '🐢',
      phonetic: 'oom-FOO-doo',
      audioRef: null,
    },
    {
      id: 'umjaho',
      target: 'umjaho',
      native: 'a race',
      literal: 'um- + jah- (run) + -o',
      emoji: '🏁',
      phonetic: 'oom-JAH-hoh',
      audioRef: null,
    },
    {
      id: 'walala',
      target: 'walala',
      native: 'he/she slept (narrative past)',
      literal: 'wa- + lala (sleep)',
      emoji: '😴',
      phonetic: 'wah-LAH-lah',
      audioRef: null,
    },
    {
      id: 'waphumelela',
      target: 'waphumelela',
      native: 'he/she succeeded / won',
      literal: 'wa- + phumelela (succeed, get through)',
      emoji: '🏆',
      phonetic: 'wah-poo-meh-LEH-lah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Folktale skeleton',
    explanation: "An Ndebele folktale has the same bones every time: an opener (Kwasukasukela), a setup ('there was once X who…'), a complication (X meets Y / a contest), narrative past throughout (wa-/-a), a turning point ('but then…'), and a moral wrapped in a closing line. Today's tale is the cleanest possible example.",
    examples: [
      { target: 'Kwakukhona umvundla lomfudu.', native: 'There was once a hare and a tortoise.' },
      { target: 'Bahlangana endleleni.', native: 'They met on the road.' },
      { target: 'Waphumelela umfudu.', native: 'The tortoise won.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the folktale word to its meaning',
      pairs: [
        { left: 'umvundla', right: 'the hare (trickster)' },
        { left: 'umfudu', right: 'the tortoise' },
        { left: 'umjaho', right: 'a race' },
        { left: 'walala', right: 'he slept' },
        { left: 'waphumelela', right: 'he won / succeeded' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'In Ndebele folktales, the hare is usually…',
      question: 'Which best describes umvundla\'s role?',
      options: [
        { text: 'The trickster — clever, arrogant, and usually losing his own game.', correct: true },
        { text: 'The wise elder who always wins.', correct: false },
        { text: 'A peripheral animal that only appears in passing.', correct: false },
      ],
      explanation: "Umvundla is southern Africa's classic trickster — the cousin of Anansi and Brer Rabbit. The story works because his cleverness is also his downfall.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "The hare slept under a tree."',
      words: ['esihlahleni', 'umvundla', 'walala'],
      correct: ['Umvundla', 'walala', 'esihlahleni'],
      translation: 'The hare slept under a tree.',
    },
    {
      type: 'translate',
      instruction: 'Translate the moral',
      prompt: 'The tortoise won.',
      correct: ['Waphumelela umfudu', 'Umfudu waphumelela', 'waphumelela umfudu', 'umfudu waphumelela'],
    },
  ],

  rwenDialogue: {
    intro: "Gogo tells the full short tale. Listen for the wa-/-a verbs and the moral arriving in the last line.",
    lines: [
      { speaker: 'npc', target: 'Kwasukasukela…', native: 'Once upon a time…' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Cosi!', native: 'Yes!', correct: true, feedback: "Good. The story is open." },
          { target: 'Yebo.', native: 'Yes (general).', correct: false, feedback: "Story-specific reply is 'Cosi!'." },
          { target: '(silence)', native: '(say nothing)', correct: false, feedback: "No 'Cosi!', no story." },
        ],
      },
      { speaker: 'npc', target: 'Kwakukhona umvundla lomfudu. Bavumelana ngomjaho.', native: 'There was once a hare and a tortoise. They agreed on a race.' },
      { speaker: 'npc', target: 'Wagijima umvundla, wadlula umfudu kakhulu. Wabona isihlahla esihle, walala phansi kwaso.', native: 'The hare ran, far ahead of the tortoise. He saw a beautiful tree and slept under it.' },
      { speaker: 'npc', target: 'Umfudu wahamba, wahamba, wahamba. Wadlula umvundla olele. Waphumelela.', native: 'The tortoise walked, walked, walked. He passed the sleeping hare. He won.' },
      { speaker: 'rwen', rwenLine: "Moral arriving — wait for it." },
      { speaker: 'npc', target: 'Ukuhlakanipha kungenani uma ungelakubekezela.', native: 'Cleverness is nothing without patience.' },
      { speaker: 'rwen', rwenLine: "That's the shape of every umvundla story. Quick start, smug nap, slow winner, sharp moral.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      { prompt: 'How do you say "the hare"?', correct: ['umvundla', 'Umvundla'] },
      { prompt: 'How do you say "the tortoise"?', correct: ['umfudu', 'Umfudu'] },
      { prompt: 'How do you say "he won / succeeded"?', correct: ['waphumelela', 'Waphumelela'] },
    ],
  },

  mission: {
    title: "Retell the hare and tortoise in three sentences",
    task: "Out loud, in any mix of isiNdebele and English, retell the story in just three sentences: setup, complication, moral. Use 'umvundla' and 'umfudu' at least once each. The shorter you make it, the more you'll remember.",
    rwenSignoff: "The hare loses every time and the children still laugh every time. That's the magic of an inganekwane.",
  },

  phase8: {
    scenario: "Rwen plays a younger sibling who has never heard the hare-and-tortoise story. You retell it to her in 60-90 seconds, using 'umvundla', 'umfudu', and at least three wa-/-a narrative-past verbs. End with the moral.",
    rwenRole: "An 8-year-old named Thandeka — listens hard, will gasp at the nap, will demand the moral if you forget it.",
    successCriteria: "User opened with 'Kwasukasukela', used 'umvundla' and 'umfudu' at least once, used at least 3 narrative-past verbs, and delivered a one-line moral.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
