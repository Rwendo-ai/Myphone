import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-mese',
  module: 1,
  lesson: 8,
  title: 'Makadii Mese — Greeting a Group',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In Zimbabwe, you never walk into a room and only greet one person. You greet the whole room — in one sweep. Skipping someone is an insult. Today you'll learn to greet everyone at once.",
    culturalNote: "Group greetings are a single, inclusive act in Shona. Arriving and only greeting the person you know while ignoring others is considered very rude. 'Makadii mese' — 'how are all of you' — covers everyone and shows you see them all.",
  },

  chunks: [
    {
      id: 'makadii_mese',
      target: 'Makadii mese?',
      native: 'How are all of you?',
      literal: 'You (plural) how-are all?',
      emoji: '👥',
      phonetic: 'ma-kah-DEE MEH-se',
      audioRef: null,
    },
    {
      id: 'tiripo',
      target: 'Tiripo',
      native: 'We are all well',
      literal: 'We-are-here',
      emoji: '🤲',
      phonetic: 'ti-RI-po',
      audioRef: null,
    },
    {
      id: 'tisangane',
      target: 'Tisangane',
      native: 'Let us meet / Greetings (to a group)',
      literal: 'We-meet (together)',
      emoji: '🌟',
      phonetic: 'ti-san-GAH-ne',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Ti- prefix — We / Us',
    explanation: "'Ti-' is the first person plural prefix — it means 'we' or 'us'. You've seen 'Nd-' (I) and 'W-/Ma-' (you). Now 'Ti-' completes the set for now.",
    examples: [
      { target: 'Nd-iripo', native: 'I am here / I am well' },
      { target: 'Ti-ripo', native: 'We are here / We are all well' },
      { target: 'Ti-sangane', native: 'Let us meet (together)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Makadii mese?', right: 'How are all of you?' },
        { left: 'Tiripo', right: 'We are all well' },
        { left: 'Tisangane', right: 'Let us meet / Greetings (group)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the group greeting',
      sentence: 'Makadii _____?',
      options: ['mese', 'sei', 'kupi'],
      correct: 'mese',
      context: 'You walk into a room with 6 people.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'How are all of you?',
      correct: ['Makadii mese?', 'makadii mese?', 'Makadii mese', 'makadii mese'],
    },
    {
      type: 'multiple_choice',
      instruction: "You arrive at a community meeting with 10 people. What is the right greeting?",
      question: 'Choose the correct group greeting',
      options: [
        { text: 'Makadii mese?', correct: true },
        { text: 'Makadii? (to one person)', correct: false },
        { text: 'Wamuka sei?', correct: false },
      ],
      explanation: "'Makadii mese?' covers everyone in the room at once — that's exactly what the situation needs.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build the group greeting',
      words: ['mese?', 'Makadii'],
      correct: ['Makadii', 'mese?'],
      translation: 'How are all of you?',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'We are all well',
      correct: ['Tiripo', 'tiripo'],
    },
  ],

  rwenDialogue: {
    intro: "You walk into Rwen's family home. Four family members are sitting together. They all look up at you.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Makadii mese?', native: 'How are all of you?', correct: true, feedback: "You saw everyone and greeted everyone. The whole room feels respected." },
          { target: 'Makadii?', native: 'How are you? (to one person)', correct: false, feedback: "You greeted one person — the others felt invisible. Use 'Makadii mese?' to include everyone." },
          { target: 'Manheru akanaka', native: 'Good evening (warm)', correct: false, feedback: "Good evening is right — but follow it with 'Makadii mese?' so everyone feels seen." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tiripo, waswera sei?',
        native: 'We are well, how did you spend the day?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You greeted the whole room. That's not just polite — that's love in Shona.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How are all of you? (group greeting)', correct: ['Makadii mese?', 'makadii mese?', 'Makadii mese', 'makadii mese'] },
      { prompt: 'We are all well', correct: ['Tiripo', 'tiripo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time you walk into a room with multiple people, greet the whole room — even just in your head with 'Makadii mese?'. Feel the difference.",
    rwenSignoff: "Nobody left behind. Famba zvakanaka.",
  },

  phase8: {
    scenario: "It's a Saturday afternoon family gathering at your partner's homestead. You step into the main room and there are seven people sitting together — grandparents, aunts, uncles, a cousin or two — all looking up at you at once. You only know one of them by name. The pressure is on to greet the WHOLE room, not just the one face you recognise.",
    rwenRole: "Sekuru Tafadzwa — the family elder leading the room, ~70, kind and patient but watching closely to see if you greet everyone or pick favourites.",
    successCriteria: "User opens with 'Makadii mese?' (NOT singular 'Makadii?' which would only greet one person), uses or recognises 'Tiripo' as the group's collective reply, and stays in the inclusive plural form throughout rather than peeling off to greet only the person they know.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
