import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm11-l09',
  module: 11,
  lesson: 9,
  title: 'Reading the Room — When Not to Speak',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "The most fluent thing you can do in any language is to say nothing at the right moment. Today is about silence — and the small Ndebele phrases that mark you as someone who knows when to use it.",
    culturalNote: "In Ndebele culture, silence is not absence — it is a form of presence. At a vigil, before an elder finishes a story, when grief is in the room, when someone is praying — the right move is to be still. A nod, a soft 'Mmm' or 'Yebo bo' (yes indeed, low and quiet), or simply lowered eyes. Speakers who fill every silence are heard as anxious; speakers who hold silence are heard as wise. The pause is the lesson.",
  },

  chunks: [
    {
      id: 'mmm',
      target: 'Mmm.',
      native: 'Mmm. (acknowledging without speaking)',
      emoji: '🤲',
      phonetic: 'mmm',
      audioRef: null,
    },
    {
      id: 'yebo_bo',
      target: 'Yebo bo.',
      native: 'Yes indeed. (soft, low, agreeing without taking the floor)',
      emoji: '😌',
      phonetic: 'YEH-boh boh',
      audioRef: null,
    },
    {
      id: 'thula',
      target: 'thula',
      native: 'be still / quiet (a kind hush)',
      emoji: '🤫',
      phonetic: 'TOO-lah',
      audioRef: null,
    },
    {
      id: 'ngiyezwa_kuphela',
      target: 'Ngiyezwa kuphela.',
      native: 'I am only listening.',
      literal: 'I-am-hearing only',
      emoji: '👂',
      phonetic: 'ngee-YEH-zwah koo-PEH-lah',
      audioRef: null,
    },
    {
      id: 'kunjalo_kuthule',
      target: 'kunjalo, kuthule',
      native: 'it is so, let there be quiet',
      emoji: '🌙',
      phonetic: 'koon-JAH-loh koo-TOO-leh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Three signals you are listening, not speaking",
    explanation: "When the moment calls for silence, three small signals keep you present without taking the floor: a soft 'Mmm' (the lowest acknowledgement), a quiet 'Yebo bo' (yes indeed, agreement with weight), and the explicit 'Ngiyezwa kuphela' (I am only listening) when someone checks if you are still with them. None of these end the silence — they hold it.",
    examples: [
      { target: 'Mmm.', native: '(during their story — you are with them)' },
      { target: 'Yebo bo.', native: '(after a hard truth — you heard it)' },
      { target: 'Ngiyezwa kuphela, mngane.', native: 'I am only listening, friend.' },
      { target: 'Kunjalo. Kuthule.', native: 'It is so. Let it be quiet.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the signal to the moment',
      pairs: [
        { left: 'Mmm', right: 'mid-story acknowledgement' },
        { left: 'Yebo bo', right: 'soft agreement with weight' },
        { left: 'Ngiyezwa kuphela', right: 'I am only listening' },
        { left: 'thula', right: 'be still / quiet' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right signal',
      sentence: '____, mngane. Ungitshele konke.',
      options: ['Ngiyezwa kuphela', 'Hatshi', 'Yini ucabanga'],
      correct: 'Ngiyezwa kuphela',
      context: '"I am only listening, friend. Tell me everything." Reassure without taking the floor.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick what NOT to do',
      question: "An elder is finishing a long story about her late husband. She pauses, looking at the floor. What is the WRONG move?",
      options: [
        { text: "Cut in with your own related story", correct: true },
        { text: "Soft 'Mmm' or stay quiet", correct: false },
        { text: "Lower your eyes and wait", correct: false },
      ],
      explanation: "The pause IS the conversation. Filling it with your own story moves the spotlight to you and ends her moment. The Ndebele move is to hold the silence — your presence is the response.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Read the room',
      question: 'You are at a Ndebele household and someone has just begun a prayer at the table. You have not been raised in this practice. What is the right move?',
      options: [
        { text: 'Lower your eyes, stay quiet, and say "Amen" softly at the end if you wish', correct: true },
        { text: 'Whisper-translate the prayer to the person next to you', correct: false },
        { text: "Get up to refill your drink during it", correct: false },
      ],
      explanation: "Reading the room is recognising whose moment it is and matching its volume. The prayer is the host's; lower your eyes and let it land. Whispering breaks it; getting up is a near-offence.",
    },
  ],

  rwenDialogue: {
    intro: "MaMoyo, your friend's mother, has just learned her brother passed away. You are sitting on her couch. The house is quiet. She is not yet crying — but she is far away.",
    lines: [
      { speaker: 'rwen', rwenLine: 'No words yet. The room is choosing what comes next, not you.' },
      { speaker: 'npc', target: '...', native: '(silence)' },
      {
        speaker: 'user',
        userChoices: [
          { target: '(stay silent)', native: '(no words — just present)', correct: true, feedback: "The silence held. She felt your presence without a sentence. This is the most fluent thing you have done." },
          { target: 'Konke kuzakulunga.', native: 'Everything will be fine.', correct: false, feedback: "Premature reassurance. She is not ready to hear that — the room is still gathering. Let it." },
          { target: 'Ngiyaxolisa kakhulu.', native: 'I am very sorry.', correct: false, feedback: "Not wrong, just early. The first move was silence. After several minutes, condolence. Sequence matters." },
        ],
      },
      { speaker: 'npc', target: 'Wayengumfowethu wami kuphela...', native: 'He was my only brother...' },
      { speaker: 'rwen', rwenLine: 'She is opening. Now a small signal — not a speech.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mmm.', native: '(soft, low)', correct: true, feedback: "Exactly. One syllable, holds the room, gives her space to keep going." },
          { target: 'Ngangimazi kahle.', native: 'I knew him well.', correct: false, feedback: "You took the floor she had just opened. Even true statements move the spotlight. Stay small." },
          { target: "Yebo, ngiyezwa.", native: 'Yes, I hear you.', correct: false, feedback: "Not wrong — but 'Mmm' is even smaller, and smaller is right here. Save 'Ngiyezwa' for when she pauses longer." },
        ],
      },
      { speaker: 'npc', target: '(she begins to cry quietly)', native: '...' },
      {
        speaker: 'user',
        userChoices: [
          { target: '(stay silent, present)', native: '(let her cry)', correct: true, feedback: "Tears do not need translation. You held the room. This is reading the room." },
          { target: "Ungakhali.", native: "Don't cry.", correct: false, feedback: "Telling a grieving person not to cry shuts down the very thing she needs to do. Let it out — that is the kind move." },
        ],
      },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'What is the soft, low acknowledgement that holds a silence?', correct: ['Mmm', 'mmm', 'Mmm.'] },
      { prompt: 'How do you say "yes indeed" softly (low, with weight)?', correct: ['Yebo bo', 'yebo bo', 'Yebo bo.'] },
      { prompt: 'How do you say "I am only listening"?', correct: ['Ngiyezwa kuphela', 'ngiyezwa kuphela', 'Ngiyezwa kuphela.'] },
      { prompt: 'What is the kind hush — "be still / quiet"?', correct: ['thula', 'Thula'] },
    ],
  },

  mission: {
    title: 'Hold one silence today',
    task: "Today, in one conversation, when there is a natural pause, do not fill it. Count to four in your head. Watch what the other person does. Most of the time they will keep going — and what they say next will be the real thing they wanted to say. The silence is not yours to break.",
    rwenSignoff: "The room speaks. Listen.",
  },

  phase8: {
    scenario: "You sit with a Ndebele friend who has just received hard news. Most of the conversation is silence. Your job is to hold it — using small signals (Mmm, Yebo bo, Ngiyezwa kuphela) only when invited, and never taking the floor.",
    rwenRole: "MaMoyo — early 60s, recently bereaved, will warm to a guest who holds silence well and quietly close down on one who fills every gap.",
    successCriteria: "User stayed silent during her pauses, used small signals (Mmm / Yebo bo / Ngiyezwa kuphela) appropriately, did NOT cut in with their own story, did NOT offer premature reassurance.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
  crisisHandoff: true,
};

export default lesson;
