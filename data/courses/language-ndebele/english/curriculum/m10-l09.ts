import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l09',
  module: 10,
  lesson: 9,
  title: 'Inkundla — community gathering',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Inkundla. The clearing where the community sits in a circle to talk. Stories happen here, but so do disputes, blessings, planning, and grief. To understand Ndebele storytelling you have to understand the room it lives in. The room is round. Everyone faces in.",
    culturalNote: "Inkundla is the open space at a homestead — usually a flat, swept clearing with a kraal nearby — where the community gathers. Here a chief hears disputes, elders bless newlyweds, the family shares evening stories, and decisions are made by talk until consensus arrives. There is no head of the table because there is no table. The round shape itself is the lesson: every voice is equidistant from the centre.",
  },

  chunks: [
    {
      id: 'inkundla',
      target: 'inkundla',
      native: 'community gathering place / open court',
      literal: 'in- + kundla (clearing)',
      emoji: '🔵',
      phonetic: 'een-KOON-dlah',
      audioRef: null,
    },
    {
      id: 'umphakathi',
      target: 'umphakathi',
      native: 'the community / the people present',
      literal: 'um- + phakathi (inside, among)',
      emoji: '👥',
      phonetic: 'oom-pah-KAH-tee',
      audioRef: null,
    },
    {
      id: 'ukukhuluma',
      target: 'ukukhuluma',
      native: 'to speak / talking (the activity)',
      literal: 'uku- (to) + khuluma (speak)',
      emoji: '💬',
      phonetic: 'oo-koo-koo-LOO-mah',
      audioRef: null,
    },
    {
      id: 'ukulalela',
      target: 'ukulalela',
      native: 'to listen',
      literal: 'uku- + lalela (listen)',
      emoji: '👂',
      phonetic: 'oo-koo-lah-LEH-lah',
      audioRef: null,
    },
    {
      id: 'singasebenzisana',
      target: 'Asisebenzisaneni',
      native: 'Let us work together / let us reach agreement',
      literal: 'asi- (let-us) + sebenzisana (work-together) + -eni (imperative-plural) — what an inkundla aims at',
      emoji: '🤝',
      phonetic: 'ah-see-seh-bee-zee-SAH-neh-nee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Round-room manners',
    explanation: "An inkundla works on three rules: (1) you don't speak before the elders unless invited; (2) you address the whole umphakathi, not just the person you disagree with; (3) the goal is not to win but to land at 'asisebenzisaneni' — let us work together. Stories told at an inkundla aren't entertainment — they're how arguments get diffused. A good elder tells a folktale instead of giving a verdict.",
    examples: [
      { target: 'Umphakathi, ngiyabingelela.', native: 'Community, I greet you.' },
      { target: 'Ngiyalalela kuqala, ngizakhuluma muva.', native: 'I listen first; I will speak later.' },
      { target: 'Asisebenzisaneni.', native: 'Let us work together (towards agreement).' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each word to its meaning',
      pairs: [
        { left: 'inkundla', right: 'community gathering place' },
        { left: 'umphakathi', right: 'the community / people present' },
        { left: 'ukukhuluma', right: 'to speak' },
        { left: 'ukulalela', right: 'to listen' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the inkundla rule',
      question: 'You\'re at an inkundla and disagree strongly with what an elder just said. What is the proper move?',
      options: [
        { text: 'Wait, listen, address the whole umphakathi when you speak — never just the elder.', correct: true },
        { text: 'Cut in directly and contradict the elder.', correct: false },
        { text: 'Walk out — your dissent is louder than words.', correct: false },
      ],
      explanation: "Inkundla manners are foundational. You wait. You address the circle. The goal is consensus, not victory. Cutting in directly is a serious breach.",
    },
    {
      type: 'translate',
      instruction: 'Translate the consensus phrase',
      prompt: 'Let us work together (towards agreement).',
      correct: ['Asisebenzisaneni', 'asisebenzisaneni'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right verb',
      sentence: 'Ngiya____ kuqala, ngizakhuluma muva. (I listen first; I will speak later.)',
      options: ['lalela', 'khuluma', 'hamba'],
      correct: 'lalela',
      context: 'Inkundla rule: lalela (listen) before khuluma (speak).',
    },
  ],

  rwenDialogue: {
    intro: "It's evening. The umphakathi has gathered at the inkundla. Two neighbours are arguing about a goat. The elder, instead of giving a verdict, is going to tell a folktale.",
    lines: [
      { speaker: 'npc', target: 'Umphakathi, siyabingelela.', native: 'Community, we greet you.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yebo, salibonani.', native: 'Yes, hello (plural-respectful).', correct: true, feedback: "Correct register for an inkundla — plural-respectful, addressed to the circle." },
          { target: 'Sawubona.', native: 'Hi (singular-casual).', correct: false, feedback: "Singular-casual is wrong for the umphakathi — you're greeting a whole circle of elders." },
          { target: '(say nothing)', native: '(silence)', correct: false, feedback: "An inkundla begins with mutual greeting. Silence reads as disrespect." },
        ],
      },
      { speaker: 'npc', target: 'Indaba yethu lulu. Ake ngixoxe inganekwane kuqala.', native: 'Our matter is heavy. Let me first tell a folktale.' },
      { speaker: 'rwen', rwenLine: "Watch what just happened. The elder didn't give a verdict — she opened a story. The story will carry the answer." },
      { speaker: 'npc', target: 'Kwasukasukela…', native: 'Once upon a time…' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Cosi!', native: 'Yes!', correct: true, feedback: "Even at an inkundla — story rules apply. The audience answers." },
          { target: 'Bayethe!', native: 'Hail!', correct: false, feedback: "'Bayethe!' is praise-poetry royal salute. Folktales take 'Cosi!'" },
        ],
      },
      { speaker: 'rwen', rwenLine: "Inkundla is the room. Story is the tool. Ubuntu is the goal. That's how an Ndebele community has always sorted itself out.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Recall.',
    prompts: [
      { prompt: 'What is the community gathering place called?', correct: ['inkundla', 'Inkundla'] },
      { prompt: 'What is the word for "the community / the people present"?', correct: ['umphakathi', 'Umphakathi'] },
      { prompt: 'What is the consensus phrase ("let us work together")?', correct: ['Asisebenzisaneni', 'asisebenzisaneni'] },
    ],
  },

  mission: {
    title: "Find your own inkundla today",
    task: "Identify ONE round-room moment in your own life this week — a family dinner, a team meeting, a friendship circle. Notice who speaks first, who listens, who tries to win versus who tries to land at 'asisebenzisaneni'. Reset the room in your head: every voice equidistant from the centre.",
    rwenSignoff: "Stories told at an inkundla aren't decoration — they are governance. Sala kuhle.",
  },

  phase8: {
    scenario: "Rwen sets up a small inkundla scenario: two friends are mildly arguing over something trivial (last slice of bread / who owes who money / whose turn to drive). Instead of taking a side, you must (a) greet the umphakathi, (b) tell a one-minute folktale that addresses the disagreement obliquely, (c) close with a moral and 'Asisebenzisaneni'.",
    rwenRole: "Older mediator — guides you through the inkundla format, models the role of the wise elder who diffuses with story rather than judgment.",
    successCriteria: "User greeted the umphakathi, opened a folktale with 'Kwasukasukela', delivered a moral, and closed with the consensus phrase 'Asisebenzisaneni' (or near-equivalent).",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
