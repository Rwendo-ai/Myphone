import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07',
  module: 7,
  lesson: 7,
  title: "I'm lost",
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Travel-mode reality: sooner or later you'll take a wrong turn. 'Ngilahlekile' — 'I am lost' — is the one word that turns strangers into helpers within seconds. Say it without shame.",
    culturalNote: "In Matabeleland, a lost stranger is treated as a guest. Saying 'Ngilahlekile' often produces not just directions but an escort — someone walking you partway. Accept the help; refusing it is mildly insulting. A simple 'Ngiyabonga kakhulu' at the end is plenty.",
  },

  chunks: [
    {
      id: 'ngilahlekile',
      target: 'Ngilahlekile.',
      native: 'I am lost.',
      literal: 'I-am-lost (perfective)',
      emoji: '😕',
      phonetic: 'ngee-lahsh-leh-kee-leh',
      audioRef: null,
    },
    {
      id: 'ngiyacela_usizo',
      target: 'Ngicela usizo.',
      native: 'I am asking for help.',
      literal: 'I-ask help',
      emoji: '🙏',
      phonetic: 'ngee-cheh-lah oo-see-zoh',
      audioRef: null,
    },
    {
      id: 'angazi',
      target: 'Angazi.',
      native: "I don't know.",
      literal: 'I-not-know',
      emoji: '🤷',
      phonetic: 'ah-ngah-zee',
      audioRef: null,
    },
    {
      id: 'ungitshele',
      target: 'Ungitshele.',
      native: 'Tell me. / Please tell me.',
      literal: 'You-tell-me',
      emoji: '👂',
      phonetic: 'oon-gee-tsheh-leh',
      audioRef: null,
    },
    {
      id: 'phinda',
      target: 'Phinda futhi.',
      native: 'Say it again. / Repeat please.',
      literal: 'Repeat again',
      emoji: '🔁',
      phonetic: 'pin-dah foo-tee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The -ile ending = "I have / I am"',
    explanation: "When a verb ends in -ile in isiNdebele, it usually means a completed state — 'I have done X' or 'I am in the state of X.' Ngilahlekile = 'I have got lost / I am lost.' The -ile suffix is one of the most common verb endings you'll meet in conversation.",
    examples: [
      { target: 'Ngilahlekile.', native: 'I am lost.' },
      { target: 'Ngiphelelwe.', native: 'I am exhausted.' },
      { target: 'Ngifikile.', native: 'I have arrived.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Ngilahlekile.', right: 'I am lost.' },
        { left: 'Ngicela usizo.', right: 'I am asking for help.' },
        { left: 'Angazi.', right: "I don't know." },
        { left: 'Phinda futhi.', right: 'Say it again, please.' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Translate into isiNdebele',
      prompt: 'I am lost.',
      correct: ['Ngilahlekile', 'Ngilahlekile.', 'ngilahlekile', 'ngilahlekile.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the sentence',
      sentence: '___ futhi? (Say it again?)',
      options: ['Phinda', 'Hamba', 'Jika'],
      correct: 'Phinda',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "Why is saying 'Ngilahlekile' considered safer than wandering silently?",
      options: [
        { text: "In Matabeleland, a lost stranger is treated as a guest — locals will often escort you partway.", correct: true },
        { text: "It's a magic word that requires payment.", correct: false },
        { text: "Only police are allowed to help; saying it summons them.", correct: false },
      ],
      explanation: "Hospitality to lost guests is deeply rooted in Ndebele culture. Saying you're lost activates a help reflex — someone will likely walk part of the way with you.",
    },
  ],

  rwenDialogue: {
    intro: "You took a wrong turn in Mzilikazi township and the streets all look similar. A young woman is at her gate.",
    lines: [
      { speaker: 'user', userChoices: [
        { target: 'Sawubona sisi, ngilahlekile. Ngicela usizo.', native: 'Hello sister, I am lost. I am asking for help.', correct: true, feedback: "Greeting + status + request. Textbook polite." },
        { target: 'Kungaphi ihhotela?', native: 'Where is the hotel?', correct: false, feedback: "Direct, but skipping 'I'm lost' loses you the warmth and the escort." },
        { target: 'Hamba kuhle.', native: 'Go well.', correct: false, feedback: "That's a goodbye — but you've only just arrived at her gate." },
      ]},
      { speaker: 'npc',  target: 'Awu, ungakhathazeki. Uya ngaphi?', native: "Oh, don't worry. Where are you going?" },
      { speaker: 'user', userChoices: [
        { target: 'Ngiya eHillside, kodwa ngilahlekile.', native: "I'm going to Hillside, but I am lost.", correct: true, feedback: "Destination + admission. She has everything she needs." },
        { target: 'Angazi.', native: "I don't know.", correct: false, feedback: "She's trying to help — give her your destination, not a shrug." },
      ]},
      { speaker: 'npc',  target: 'Ngizakuphelekezela kuze ekhoneni. Ngiqonde leyo ndlela.', native: "I'll walk you to the corner. I'm going that way anyway." },
      { speaker: 'rwen', rwenLine: "An escort. This is the Matabeleland reflex you just unlocked." },
    ],
  },

  activeRecall: {
    instruction: 'Recall the lost-and-asking phrases.',
    prompts: [
      { prompt: 'How do you say "I am lost"?', correct: ['Ngilahlekile', 'Ngilahlekile.', 'ngilahlekile'] },
      { prompt: 'How do you say "I am asking for help"?', correct: ['Ngicela usizo', 'Ngicela usizo.', 'ngicela usizo'] },
      { prompt: 'How do you say "Say it again, please"?', correct: ['Phinda futhi', 'Phinda futhi.', 'phinda futhi'] },
    ],
  },

  mission: {
    title: 'Practise the admission',
    task: "Stand in front of a mirror and say 'Ngilahlekile, ngicela usizo' three times. Notice if you flinch or apologise — that's the English habit. In isiNdebele, asking for help is strong, not weak. Say it again until it sounds neutral.",
    rwenSignoff: "The traveller who says 'Ngilahlekile' fast is the traveller who gets home fast.",
  },

  phase8: {
    scenario: "You've taken a wrong kombi and ended up in an unfamiliar Bulawayo suburb at dusk. You stop a friendly elder at a corner shop and admit you're lost.",
    rwenRole: "Elderly shopkeeper in Mzilikazi, 60s, deeply hospitable, gives directions slowly",
    successCriteria: "User said 'Ngilahlekile' or equivalent, gave their intended destination, and thanked the helper.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
