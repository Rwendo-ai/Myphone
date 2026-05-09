import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l02',
  module: 10,
  lesson: 2,
  title: 'Past tense markers — -e, -ile, -ke',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Every story is told in the past. To tell one in isiNdebele, you need three endings: -e (recent past, simple), -ile (recent past, completed) and -ke (remote past, narrative). Get these right and your storytelling stops sounding like a textbook and starts sounding like Gogo.",
    culturalNote: "Ndebele storytellers slip naturally between -ile (something just happened) and -ke (something happened long ago, in the time of the ancestors). The shift signals to the listener: are we in this week, or are we in the world of fable? Mixing them on purpose is what gives a great storyteller her flavour.",
  },

  chunks: [
    {
      id: 'wahamba',
      target: 'wahamba',
      native: 'he/she went (narrative past)',
      literal: 'wa- (he/she-past) + hamba (go) — used in stories',
      emoji: '🚶',
      phonetic: 'wah-HAHM-bah',
      audioRef: null,
    },
    {
      id: 'uhambile',
      target: 'uhambile',
      native: 'he/she has gone (perfect/completed)',
      literal: 'u- (he/she) + hamb- + -ile (completed)',
      emoji: '✅',
      phonetic: 'oo-hahm-BEE-leh',
      audioRef: null,
    },
    {
      id: 'wadla',
      target: 'wadla',
      native: 'he/she ate (narrative past)',
      literal: 'wa- + dl- (eat) + -a',
      emoji: '🍽️',
      phonetic: 'WAH-dlah',
      audioRef: null,
    },
    {
      id: 'wathi',
      target: 'wathi',
      native: 'he/she said (the storyteller verb)',
      literal: 'wa- + thi (say) — appears in nearly every folktale',
      emoji: '💬',
      phonetic: 'WAH-tee',
      audioRef: null,
    },
    {
      id: 'wabona',
      target: 'wabona',
      native: 'he/she saw',
      literal: 'wa- + bona (see)',
      emoji: '👀',
      phonetic: 'wah-BOH-nah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three flavours of past',
    explanation: "Use -ile for things that just happened and still matter ('uhambile' — she has gone, she's not back). Use the wa-/-a form ('wahamba') as the narrative past — the default for telling a story. The -ke flavour layers on top to mean 'and then' in long-ago tales: 'wahambeke' = 'and so off he went'. Folktales lean on wa-/-a heavily; everyday news leans on -ile.",
    examples: [
      { target: 'Uhambile', native: 'She has gone (just happened, still relevant)' },
      { target: 'Wahamba', native: 'She went (storytelling — narrative)' },
      { target: 'Wahambeke ehlathini', native: 'And so off she went into the forest' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each verb to its English',
      pairs: [
        { left: 'wahamba', right: 'she went (in a story)' },
        { left: 'uhambile', right: 'she has gone (just now)' },
        { left: 'wathi', right: 'she said' },
        { left: 'wabona', right: 'she saw' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct register',
      question: 'You are TELLING A FOLKTALE about a clever hare who walked into the forest. Which form fits best?',
      options: [
        { text: 'Wahamba ehlathini — and he went into the forest', correct: true },
        { text: 'Uhambile ehlathini — he has just gone into the forest', correct: false },
        { text: 'Uyahamba ehlathini — he is going into the forest (present)', correct: false },
      ],
      explanation: "Folktales use the wa-/-a narrative past. -ile would feel like a news report. The present tense breaks the spell entirely.",
    },
    {
      type: 'fill_blank',
      instruction: 'Choose the right past form for storytelling',
      sentence: 'Umvundla ____ ehlathini.  (The hare ___ into the forest — narrative.)',
      options: ['wahamba', 'uhambile', 'uyahamba'],
      correct: 'wahamba',
      context: 'Folktale = narrative past. wa- + verb stem.',
    },
    {
      type: 'translate',
      instruction: 'Translate (storytelling register)',
      prompt: 'And then he said…',
      correct: ['Wathi', 'wathi', 'Wabe wathi', 'wabe wathi'],
    },
  ],

  rwenDialogue: {
    intro: "Gogo continues yesterday's story. Listen for the -e endings — they're everywhere.",
    lines: [
      { speaker: 'npc', target: 'Wahamba umvundla ehlathini.', native: 'The hare went into the forest.' },
      { speaker: 'npc', target: 'Wabona umfudu egijima kancane.', native: 'He saw a tortoise running slowly.' },
      { speaker: 'npc', target: 'Wathi umvundla, "Ngiyakwedlula!"', native: 'The hare said, "I will pass you!"' },
      { speaker: 'rwen', rwenLine: "Three verbs, three wa- prefixes: wahamba, wabona, wathi. That's the music of an Ndebele folktale." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Wadla.', native: 'He ate. (narrative)', correct: true, feedback: "Perfect. wa- + dl- + -a. Storyteller register." },
          { target: 'Udlile.', native: 'He has eaten. (perfect)', correct: false, feedback: "Grammatical, but you've stepped out of the folktale and into a news report." },
          { target: 'Uyadla.', native: 'He is eating. (present)', correct: false, feedback: "Present tense breaks the storytelling frame." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Storyteller's rule: wa-/-a in fables, -ile when something just happened in real life. Tomorrow the hare meets the tortoise.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Recall without looking up.',
    prompts: [
      { prompt: 'How do you say "she went" in storytelling form?', correct: ['wahamba', 'Wahamba'] },
      { prompt: 'How do you say "she has gone (just now)"?', correct: ['uhambile', 'Uhambile'] },
      { prompt: 'How do you say "he said" (the storyteller\'s verb)?', correct: ['wathi', 'Wathi'] },
    ],
  },

  mission: {
    title: "Tell one short story in narrative past",
    task: "Out loud, in three sentences: tell yourself the story of what you did yesterday morning — but use wa-/-a as if it were a folktale. 'Ngavuka. Ngahamba. Ngadla.' (I rose, I went, I ate.) Notice how it sounds bigger than your actual morning.",
    rwenSignoff: "Past tense isn't grammar — it's the air you breathe when you tell a story. Three days in, you're starting to breathe it.",
  },

  phase8: {
    scenario: "Rwen plays a child who wants you to retell something from your week as a folktale. You must use the wa-/-a narrative past for at least three verbs (e.g., 'ngahamba' I went, 'ngadla' I ate, 'ngabona' I saw). The child will interrupt with 'Cosi!' to keep you going.",
    rwenRole: "A 7-year-old child named Nokuthula — wide-eyed, will say 'Cosi!' enthusiastically and ask 'and then?' (kwabe sekuthini?) to push you forward.",
    successCriteria: "User produced at least three verbs in narrative past (wa-/nga-/ba- + stem + -a) without slipping into present tense.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
