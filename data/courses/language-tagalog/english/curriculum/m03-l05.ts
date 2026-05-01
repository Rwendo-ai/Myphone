import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l05-hobbies',
  module: 3,
  lesson: 5,
  title: 'Mga libangan — Hobbies',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Tagaytay weekend. Cool air, view of Taal. Mang Roy at the language exchange leans back and asks, 'Ano ang libangan mo?' Hobbies are how Filipinos find your soft spots — the topic that makes your eyes light up. Today you give him one.",
    culturalNote: "Libangan (lee-BANG-an) means hobby — it shares a root with 'libang', to amuse or distract. The classic frame is 'mahilig ako sa ___' (I'm fond of ___). 'Hilig' literally means 'lean' — your inclination, your tilt towards a thing. Beautiful word for a beautiful idea.",
  },

  chunks: [
    {
      id: 'mahilig-ako-sa',
      target: 'Mahilig ako sa musika',
      native: 'I love music',
      literal: 'Fond I [marker] music',
      emoji: '🎵',
      phonetic: 'ma-HEE-lig a-KO sa moo-SI-ka',
      audioRef: null,
    },
    {
      id: 'gusto-kong-magbasa',
      target: 'Gusto kong magbasa',
      native: 'I like reading',
      literal: 'Like my [linker] read-do',
      emoji: '📚',
      phonetic: 'goos-TO kong mag-BA-sa',
      audioRef: null,
    },
    {
      id: 'sa-libreng-oras-ko',
      target: 'Sa libreng oras ko',
      native: 'In my free time',
      literal: '[Marker] free hour my',
      emoji: '⏰',
      phonetic: 'sa lee-BRENG O-ras ko',
      audioRef: null,
    },
  ],

  pattern: {
    name: '`Mahilig sa` + noun',
    explanation: "'Mahilig ako sa ___' = 'I'm fond of ___'. Slot in any noun: musika, kape, basketbol, paglalakbay (travel). For verbs (reading, cooking), switch to 'Gusto kong ___' — 'gusto' (like) + 'ko' (my) + 'ng' linker + verb. 'Sa libreng oras ko' (in my free time) is the perfect time-frame opener.",
    examples: [
      { target: 'Mahilig ako sa kape', native: "I love coffee" },
      { target: 'Gusto kong magluto', native: 'I like cooking' },
      { target: 'Sa libreng oras ko, naglalakad ako', native: 'In my free time, I walk' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog to its meaning',
      pairs: [
        { left: 'Mahilig ako sa musika', right: 'I love music' },
        { left: 'Gusto kong magbasa', right: 'I like reading' },
        { left: 'Sa libreng oras ko', right: 'In my free time' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the hobby frame',
      sentence: 'Mahilig ako ___ musika.',
      options: ['sa', 'ang', 'si'],
      correct: 'sa',
      context: "'Sa' is the location/object marker — always pairs with 'mahilig'.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I like reading',
      correct: ['Gusto kong magbasa', 'gusto kong magbasa'],
    },
    {
      type: 'build_sentence',
      instruction: 'Tell Mang Roy you love coffee — put the words in order',
      words: ['kape', 'sa', 'Mahilig', 'ako'],
      correct: ['Mahilig', 'ako', 'sa', 'kape'],
      translation: 'I love coffee',
    },
    {
      type: 'multiple_choice',
      instruction: "Mang Roy asks about your hobbies. You love hiking. What's the most natural answer?",
      question: 'Choose the most native-feeling reply',
      options: [
        { text: 'Mahilig ako sa hiking. Sa libreng oras ko, naglalakad ako sa bundok.', correct: true },
        { text: 'Ano ang libangan mo?', correct: false },
        { text: 'Ako si hiking.', correct: false },
      ],
      explanation: "'Mahilig sa ___' for the noun, then add a 'sa libreng oras ko' detail to bring it to life.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'In my free time',
      correct: ['Sa libreng oras ko', 'sa libreng oras ko'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a small language exchange café in Tagaytay. Mang Roy, a retired teacher in his 60s, runs the meet-up. He pours you a coffee.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ano ang mga libangan mo?',
        native: 'What are your hobbies?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mahilig ako sa musika. Sa libreng oras ko, gusto kong magbasa.', native: 'I love music. In my free time, I like reading.', correct: true, feedback: 'Beautiful — two patterns linked into one warm answer.' },
          { target: 'Gusto magbasa.', native: 'Like read.', correct: false, feedback: "Missing 'ako' / 'ko' — Tagalog needs the pronoun marker." },
          { target: 'Mahilig sa ako musika.', native: 'Fond [marker] I music (broken).', correct: false, feedback: "Word order: 'Mahilig ako sa musika'. 'Ako' comes right after the adjective." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, mahilig din ako sa musika!',
        native: 'Ah, I also love music!',
      },
      {
        speaker: 'rwen',
        rwenLine: "And there it is — the click. He found common ground. Hobbies are bridges in any language, but in Tagalog they're built fast.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I love music (in Tagalog)', correct: ['Mahilig ako sa musika', 'mahilig ako sa musika'] },
      { prompt: 'In my free time (in Tagalog)', correct: ['Sa libreng oras ko', 'sa libreng oras ko'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one real hobby and say 'Mahilig ako sa ___' out loud once today. The thing that actually makes you tilt forward — that's the right word for the slot.",
    rwenSignoff: "I'll ask you tomorrow. Ingat — go well.",
  },

  phase8: {
    scenario: "Saturday morning at a small Tagaytay café for the weekly Tagalog–English language exchange. Mang Roy, the retired-teacher host, has poured you a barako coffee and wants to know what you do for fun outside work — what makes your eyes light up.",
    rwenRole: "Mang Roy — late 60s, retired Tagaytay schoolteacher, patient and curious; he'll keep asking gentle 'sa libreng oras mo?' follow-ups and share his own hobby (gardening) when you share yours.",
    successCriteria: "User shares one hobby using 'Mahilig ako sa ___' OR 'Gusto kong ___', then adds context using 'Sa libreng oras ko, ___'. Bonus: user asks Mang Roy his hobby in return.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
