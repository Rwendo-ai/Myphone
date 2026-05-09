import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01',
  module: 10,
  lesson: 1,
  title: 'Kwasukasukela — Once upon a time',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Every Ndebele story begins the same way: 'Kwasukasukela'. The audience answers 'Cosi'. That call-and-response is the door — once you've stepped through it, you're inside the story, and the storyteller has your full attention. Today you learn to open the door.",
    culturalNote: "In rural Matabeleland, stories — izinganekwane — were told at night, after the evening meal, around a fire or inside the kitchen hut. The opener 'Kwasukasukela' is older than anyone alive remembers. The audience reply 'Cosi!' is mandatory — without it, the storyteller stops. A story is never a monologue; it's a transaction between teller and listener.",
  },

  chunks: [
    {
      id: 'kwasukasukela',
      target: 'Kwasukasukela',
      native: 'Once upon a time / Long, long ago',
      literal: 'kwa- (impersonal it-was) + sukasukela (rising-rising) — "it rose-rose"',
      emoji: '📖',
      phonetic: 'kwah-soo-kah-soo-KEH-lah',
      audioRef: null,
    },
    {
      id: 'cosi',
      target: 'Cosi!',
      native: 'Yes! / We are listening! (audience reply)',
      literal: '[c-click]oh-see — the obligatory response from the audience',
      emoji: '🙌',
      phonetic: '[c-click]OH-see',
      audioRef: null,
    },
    {
      id: 'inganekwane',
      target: 'inganekwane',
      native: 'a folktale, a story',
      literal: 'in- (noun prefix) + ganekwane (tale)',
      emoji: '🌙',
      phonetic: 'een-gah-neh-KWAH-neh',
      audioRef: null,
    },
    {
      id: 'umlando',
      target: 'umlando',
      native: 'history / a true account',
      literal: 'um- + lando (telling, account)',
      emoji: '📜',
      phonetic: 'oom-LAHN-doh',
      audioRef: null,
    },
    {
      id: 'cosi_yephi',
      target: 'Cosi yephi?',
      native: '"Where does the story go?" — playful storyteller prompt',
      emoji: '❓',
      phonetic: '[c-click]OH-see YEH-pee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The opener and its reply',
    explanation: "An Ndebele folktale is opened with 'Kwasukasukela' from the storyteller, answered with 'Cosi!' from the listeners. If the listeners are sleepy or distracted, the storyteller may pause and say 'Cosi yephi?' — literally 'where is the cosi?' — and wait until everyone shouts back. You can't tell a story to a quiet room.",
    examples: [
      { target: 'Kwasukasukela…', native: 'Once upon a time… (storyteller opens)' },
      { target: 'Cosi!', native: 'Yes! (audience answers)' },
      { target: 'Cosi yephi?', native: 'Where is the response? (storyteller prompts)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its function',
      pairs: [
        { left: 'Kwasukasukela', right: 'Storyteller opens the tale' },
        { left: 'Cosi!', right: 'Audience replies "yes, we hear"' },
        { left: 'inganekwane', right: 'a folktale' },
        { left: 'umlando', right: 'a history / true account' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'A storyteller says "Kwasukasukela" and the room is silent. What happens next?',
      options: [
        { text: 'She waits — the audience must reply "Cosi!" before she continues.', correct: true },
        { text: 'She just keeps going — the opener is one-sided.', correct: false },
        { text: 'She starts a different story instead.', correct: false },
      ],
      explanation: "The story is a contract. No 'Cosi!' means no story. The storyteller may even tease 'Cosi yephi?' until the listeners shout back loud enough.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele opener',
      prompt: 'Once upon a time…',
      correct: ['Kwasukasukela', 'kwasukasukela'],
    },
    {
      type: 'fill_blank',
      instruction: 'Fill the audience reply',
      sentence: 'Storyteller: "Kwasukasukela…" — Audience: "____!"',
      options: ['Cosi', 'Yebo', 'Sala'],
      correct: 'Cosi',
      context: '"Yebo" means yes generally. The story-specific call is "Cosi!".',
    },
  ],

  rwenDialogue: {
    intro: "Gogo (grandmother) is about to tell a story by the fire. The children are sitting on a mat. Rwen wants you to be one of those children — answer when she calls.",
    lines: [
      { speaker: 'rwen', rwenLine: "Listen first. She'll open. Your job is to answer — loud enough that she keeps going." },
      { speaker: 'npc', target: 'Kwasukasukela…', native: 'Once upon a time…' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Cosi!', native: 'Yes!', correct: true, feedback: "She smiles. The story is open. She continues." },
          { target: 'Yebo!', native: 'Yes (general)', correct: false, feedback: "Yebo is a regular yes. The story-specific reply is 'Cosi!' — without it, the storyteller stops." },
          { target: '(silence)', native: '(say nothing)', correct: false, feedback: "She'll wait. And wait. And then tease: 'Cosi yephi?' Story doesn't begin until the room joins in." },
        ],
      },
      { speaker: 'npc', target: 'Kwakukhona umvundla owayehlakaniphile kakhulu…', native: 'There was once a hare who was very clever…' },
      {
        speaker: 'rwen',
        rwenLine: "You're inside the story now. Tomorrow we learn how to mark all those past-tense verbs she just used.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking. Type from memory.',
    prompts: [
      { prompt: 'How does an Ndebele storyteller open a folktale?', correct: ['Kwasukasukela', 'kwasukasukela'] },
      { prompt: 'How does the audience reply?', correct: ['Cosi', 'Cosi!', 'cosi'] },
      { prompt: 'What is the word for a folktale?', correct: ['inganekwane', 'Inganekwane'] },
    ],
  },

  mission: {
    title: "Open one story today",
    task: "Find one person — a friend, a child, a partner — and tell them any short true story from your week. But open it with 'Kwasukasukela…' and make them say 'Cosi!' before you continue. Notice how the room changes when you make them part of the contract.",
    rwenSignoff: "A story without a listener is just talk. The Ndebele opener fixes that. Sala kuhle.",
  },

  phase8: {
    scenario: "It's 8pm. You're sitting on a mat in a kitchen hut in rural Tsholotsho with three children waiting for a bedtime story. You open with 'Kwasukasukela', they answer 'Cosi!', and you tell a one-minute story (any topic) — Rwen plays the lead child who interjects with 'Cosi!' whenever you pause.",
    rwenRole: "A 9-year-old child named Sipho — eager listener, will shout 'Cosi!' at every pause, will lose interest if the storyteller forgets to engage him.",
    successCriteria: "User opened with 'Kwasukasukela', triggered at least one 'Cosi!' reply, and held the story for at least 60 seconds.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
