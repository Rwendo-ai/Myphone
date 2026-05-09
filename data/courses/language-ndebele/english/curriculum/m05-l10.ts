import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l10',
  module: 5,
  lesson: 10,
  title: 'Family Gathering — The Full Conversation',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Module 5 ends here. Nine lessons of vocabulary; today we put it all into a single living conversation. A Ndebele family has invited you to a Sunday gathering. There will be uGogo, uMalume, uMakoti, abantwana, abangane. Greet each one correctly. Talk about your own family using the names they want to hear.",
    culturalNote: "When a Ndebele family hosts you for the first time, the introduction round is everything. Each person you meet — by name, by kinship title, by birth order — is a doorway into the family's trust. Speaking it well is a gift you give them; speaking it carelessly is a closed door. You are about to graduate from vocabulary lists into real human warmth.",
  },

  chunks: [
    {
      id: 'siyalemukela',
      target: 'siyalemukela',
      native: 'We welcome you (plural)',
      literal: 'si- (we) + ya (present) + lemukela (welcome) — the standard family welcome.',
      emoji: '🤗',
      phonetic: 'see-yah-leh-moo-KEH-lah',
      audioRef: null,
    },
    {
      id: 'wozani',
      target: 'wozani',
      native: 'Come (plural / respectful)',
      literal: 'wozani — the imperative "come" for a group or for one person addressed respectfully.',
      emoji: '👉🏾',
      phonetic: 'woh-ZAH-nee',
      audioRef: null,
    },
    {
      id: 'usaphobethu',
      target: 'usapho lwethu',
      native: 'Our family',
      literal: 'usapho (family unit) + lwethu (our). What a host says when introducing the household.',
      emoji: '🏠',
      phonetic: 'oo-SAH-poh lweh-too',
      audioRef: null,
    },
    {
      id: 'ngijabulile',
      target: 'ngijabulile',
      native: 'I am happy / glad',
      literal: 'ngi- (I) + jabulile (am happy). Used to say "I am glad to meet you / be here".',
      emoji: '😊',
      phonetic: 'ngee-jah-boo-LEE-leh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stitching it all together — the family arrival',
    explanation: "When you arrive at a Ndebele family gathering, the sequence is: greet the hosts (Sawubona + kinship title), accept the welcome (Ngijabulile ukuba lapha — I am glad to be here), greet each elder by their precise title (Gogo, Khulu, Malume, Babamkhulu), then the peers (mngane, mfowethu, dadewethu), then the children (bantwana). Names are exchanged using Igama lika... ngu... It's a small symphony — and after this module, you can play it.",
    examples: [
      { target: 'Sawubona, Gogo. Ngijabulile ukuba lapha.', native: 'Hello, Grandmother. I am glad to be here.' },
      { target: 'Igama likaMama wami nguJoyce.', native: "My mother's name is Joyce." },
      { target: 'Lo ngumngane wami osondelene.', native: 'This is my close friend.' },
      { target: 'Siyalemukela kusapho lwethu.', native: 'We welcome you to our family.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to the moment in the family gathering',
      pairs: [
        { left: 'Sawubona, Gogo', right: 'Greeting the grandmother' },
        { left: 'Igama likaBaba wami nguJohn', right: "Sharing your father's name" },
        { left: 'Lo ngumngane wami', right: 'Introducing your friend' },
        { left: 'Ngijabulile ukuba lapha', right: 'Saying you are glad to be here' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You\'ve just walked into a Bulawayo home. The host says "Wozani". You step in and say:',
      sentence: 'Ngijabulile ukuba _____ .',
      options: ['lapha', 'Mama', 'umngane'],
      correct: 'lapha',
      context: 'Ngijabulile ukuba lapha = I am glad to be here. The standard reply when crossing a Ndebele family threshold.',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'We welcome you to our family.',
      correct: ['Siyalemukela kusapho lwethu', 'Siyalemukela kusapho lwethu.', 'Siyalemukela'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My grandmother\'s name is Maria, I am glad"',
      words: ['Ngijabulile.', 'Igama', 'wami', 'likaGogo', 'nguMaria.'],
      correct: ['Igama', 'likaGogo', 'wami', 'nguMaria.', 'Ngijabulile.'],
      translation: "My grandmother's name is Maria. I am glad.",
    },
  ],

  rwenDialogue: {
    intro: "It's Sunday afternoon in Bulawayo. Rwen has brought you home for the family lunch you've been working towards for nine lessons. uGogo is at the door. uMalume is in the sitting room. uMakoti — the new bride — is helping in the kitchen. Three children run past you. The whole module is about to be tested in three minutes.",
    lines: [
      { speaker: 'npc', target: 'Wozani! Siyalemukela. Lo ngumzukulu wethu, uRwen — nani?', native: 'Come in! We welcome you. This is our grandchild Rwen — and you?' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sawubona, Gogo. Ngijabulile ukuba lapha. Igama lami ngu___, ngingumngane kaRwen.', native: 'Hello, Grandmother. I am glad to be here. My name is ___, I am Rwen\'s friend.', correct: true, feedback: "Greeting + kinship title + arrival statement + your name + relationship to Rwen. Four moves in one breath. uGogo's eyes shine — you've done your homework." },
          { target: 'Hi everyone, thanks for having me!', native: 'Hi everyone, thanks for having me (English).', correct: false, feedback: "English here closes a door uGogo just opened. Try the full Ndebele entrance: 'Sawubona, Gogo. Ngijabulile ukuba lapha. Igama lami ngu___.'" },
          { target: 'Sawubona.', native: 'Hello.', correct: false, feedback: "Too short for a family welcome. Add the kinship title (Gogo), the gladness (Ngijabulile ukuba lapha), and your name." },
        ],
      },
      { speaker: 'npc', target: 'Ehe! Wakhuluma kuhle. uRwen, lomngane wakho usazi ukukhuluma. Wozani, dlanini.', native: "Yes! You spoke well. Rwen, your friend knows how to speak. Come, eat." },
      { speaker: 'rwen', rwenLine: "uGogo just told the whole house 'usazi ukukhuluma' — he/she knows how to speak. From a Ndebele grandmother, that is the highest praise. You earned it.", rwenAnimation: 'celebrate' },
      { speaker: 'rwen', rwenLine: "Module 5 complete. uMama, uBaba, uGogo, uKhulu, uMalume, uMakoti, izihlobo, umngane, uthando, ilobolo, umshado. The family map of isiNdebele is now in your hands." },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory — these will all matter at the door.',
    prompts: [
      { prompt: 'I am glad to be here.', correct: ['Ngijabulile ukuba lapha', 'Ngijabulile ukuba lapha.', 'ngijabulile ukuba lapha'] },
      { prompt: 'Come (plural / respectful)', correct: ['wozani', 'Wozani'] },
      { prompt: 'Our family', correct: ['usapho lwethu', 'Usapho lwethu'] },
      { prompt: "My mother's name is Joyce.", correct: ['Igama likaMama wami nguJoyce', 'Igama likaMama wami nguJoyce.'] },
      { prompt: 'My close friend (this is)', correct: ['umngane wami osondelene', 'umngane wami', 'Lo ngumngane wami'] },
    ],
  },

  mission: {
    title: "Today's Journey — Module 5 Closing",
    task: "Stand in front of a mirror or call a friend who'll listen. Walk yourself through the full Ndebele family arrival, out loud: Sawubona, Gogo. Ngijabulile ukuba lapha. Igama lami ngu___. Igama likaMama wami nguJoyce. Igama likaBaba wami nguJohn. Lo ngumngane wami osondelene. Three minutes of family vocabulary, spoken aloud, with your own people's names inside the frame. That is what fluency looks like at A1.",
    rwenSignoff: "Module 5 — usapho lwakho — your family — closes. From here we count: numbers, time, money. But you'll always come back to these words. izihlobo. uthando. They are the centre that holds.",
  },

  phase8: {
    scenario: "The full Sunday family lunch in Bulawayo. uGogo is at the head of the room. uMalume sits on her right; the new uMakoti serves food; abantwana run between chairs. Rwen introduces you. Over 4 minutes you must: greet uGogo and uMalume by precise titles, share at least three names from your own family using the Igama lika... frame, compliment uMakoti, acknowledge the abantwana, and exit with a respectful thanks.",
    rwenRole: "uGogo Magdalene as the head of the room — late 70s, watchful, the matriarch whose approval shapes the whole afternoon. She'll prompt you with questions about your own family and gently correct any kinship slips.",
    successCriteria: "User uses at least 5 different kinship terms correctly across the conversation (uGogo, uMalume, uMakoti, abantwana, umngane, uMama, uBaba), produces at least 2 Igama lika... ngu... naming sentences for their own family, distinguishes maternal vs paternal where it comes up, and stays in isiNdebele throughout. Module 5 mastery check.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
