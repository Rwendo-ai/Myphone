import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l09-hosting',
  module: 7,
  lesson: 9,
  title: 'Pagiging Host — Filipino Hosting',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'Kain tayo!' — let's eat — is the most Filipino sentence in existence. It's shouted at family, neighbours, the delivery guy, strangers walking past. Today we learn to host like a Filipino: with food, with insistence, with love.",
    culturalNote: "If you're eating and someone walks in — a friend, a cousin, the meralco meter reader — you say 'Kain tayo!'. They politely decline ('Sige, kakayo' — you go ahead), but the offer is sacred. Refusing to offer is rude. Offering is love.",
  },

  chunks: [
    {
      id: 'halika_kain_tayo',
      target: 'Halika, kain tayo!',
      native: "Come, let's eat!",
      literal: 'Come, eat we-all',
      emoji: '🤗',
      phonetic: 'ha-LI-ka KA-in TA-yo',
      audioRef: null,
    },
    {
      id: 'magpahinga_ka',
      target: 'Magpahinga ka',
      native: 'Make yourself comfortable / rest',
      literal: 'Do-rest you',
      emoji: '🛋️',
      phonetic: 'mag-pa-HI-nga ka',
      audioRef: null,
    },
    {
      id: 'kain_pa',
      target: 'Kain pa!',
      native: 'Eat more!',
      literal: 'Eat more',
      emoji: '🍚',
      phonetic: 'KA-in pa',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Filipino hosting culture',
    explanation: "Filipino hosting is about insistence. You offer twice, three times, even when the guest is full. **Kain tayo** = let's eat (inclusive). **Kain pa** = eat more (after they've already started). **Magpahinga ka** = settle in, this is your home now.",
    examples: [
      { target: 'Halika, kain tayo', native: "Come, let's eat" },
      { target: 'Kain pa, marami pa', native: "Eat more, there's plenty" },
      { target: 'Magpahinga ka muna', native: 'Rest first / make yourself at home' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the hosting phrase to its meaning',
      pairs: [
        { left: 'Halika, kain tayo!', right: "Come, let's eat!" },
        { left: 'Magpahinga ka', right: 'Rest / make yourself comfortable' },
        { left: 'Kain pa!', right: 'Eat more!' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Your guest has finished their first plate but you want them to keep going.",
      sentence: '_____ pa!',
      options: ['Kain', 'Halika', 'Magpahinga'],
      correct: 'Kain',
      context: "Kain pa = eat more. Spoken with warm insistence, not pressure.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: "Come, let's eat!",
      correct: ['Halika, kain tayo!', 'Halika kain tayo', 'halika kain tayo'],
    },
    {
      type: 'build_sentence',
      instruction: "Tell your guest to make themselves comfortable",
      words: ['ka', 'Magpahinga'],
      correct: ['Magpahinga', 'ka'],
      translation: 'Make yourself comfortable',
    },
    {
      type: 'multiple_choice',
      instruction: "A neighbour walks past your open door while you're at lunch. The Filipino move is...?",
      question: 'What do you call out?',
      options: [
        { text: 'Halika, kain tayo!', correct: true },
        { text: 'Bill po', correct: false },
        { text: 'Ayoko', correct: false },
      ],
      explanation: "You always offer — even if you barely know them, even if you only have a small plate. Offering is the point.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Eat more! (encouraging a guest)',
      correct: ['Kain pa', 'Kain pa!', 'kain pa'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday lunch. Your friend Ana from Cebu has just arrived at your apartment. You've laid out adobo, kanin, and sinigang.",
    lines: [
      {
        speaker: 'npc',
        target: 'Kakatapos lang nakong kumain sa eroplano.',
        native: 'I just finished eating on the plane.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Halika, kain tayo! Magpahinga ka muna.', native: "Come, let's eat! Rest first.", correct: true, feedback: 'Pure Filipino hosting — insist warmly, regardless of the plane snack.' },
          { target: 'Sige, ayos lang.', native: "Okay, that's fine.", correct: false, feedback: "Too easy a give-up — Filipino hosts always offer at least once more." },
          { target: 'Bill po', native: 'The bill, please', correct: false, feedback: "Wrong scene entirely!" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, kaunti lang. Ang sarap nito!',
        native: "Okay, just a little. This is delicious!",
      },
      {
        speaker: 'rwen',
        rwenLine: "You insisted. She accepted. That's the rhythm of Filipino hospitality.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "Come, let's eat! (in Tagalog)", correct: ['Halika, kain tayo!', 'Halika kain tayo', 'halika kain tayo'] },
      { prompt: 'Eat more! (encouraging a guest)', correct: ['Kain pa', 'Kain pa!', 'kain pa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you eat with someone — anyone — say 'Kain tayo!' before you start. Watch how the simple offer changes the meal.",
    rwenSignoff: "Bukas, the whole conversation. Mabuhay!",
  },

  phase8: {
    scenario: "You're hosting a balikbayan friend (Filipino returning home from abroad) at your apartment. They've just walked in, claiming they ate on the plane. You've laid out adobo and rice. You need to insist warmly — twice — until they sit down and eat.",
    rwenRole: "Ana — your balikbayan friend, ~32yo, lived in Sydney for 6 years and has missed Filipino home cooking; she'll politely refuse the first offer and accept the second if you insist warmly.",
    successCriteria: "User opens with 'Halika, kain tayo!', adds 'Magpahinga ka' to settle them in, and uses 'Kain pa' to encourage a second serving once Ana starts. Three insists across the scene.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
