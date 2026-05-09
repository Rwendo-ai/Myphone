import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05',
  module: 10,
  lesson: 5,
  title: 'Izinkulumo — story morals',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "An Ndebele story without a moral is half a story. The closing line — inkulumo — is what the storyteller has been driving towards the whole time. Today you learn the most common ones, the ones every Ndebele child has heard a hundred times before they turn twelve.",
    culturalNote: "Folktale morals are not invented by the storyteller in the moment — they are inherited. The same closing lines have been passing through families for generations: 'cleverness without patience is nothing', 'no one is too small', 'the river respects the slow swimmer'. When Gogo says one of these, she is quoting her own grandmother. Story is how a culture remembers what it already knows.",
  },

  chunks: [
    {
      id: 'inkulumo',
      target: 'inkulumo',
      native: 'a saying / a statement / a story\'s moral',
      literal: 'in- + kuluma (speak) + -o',
      emoji: '🗣️',
      phonetic: 'een-koo-LOO-moh',
      audioRef: null,
    },
    {
      id: 'isifundo',
      target: 'isifundo',
      native: 'a lesson (the take-away)',
      literal: 'isi- + funda (learn) + -o',
      emoji: '🎓',
      phonetic: 'ee-see-FOON-doh',
      audioRef: null,
    },
    {
      id: 'ukubekezela',
      target: 'ukubekezela',
      native: 'patience / endurance',
      literal: 'uku- (to) + bekezela (be patient)',
      emoji: '⏳',
      phonetic: 'oo-koo-beh-keh-ZEH-lah',
      audioRef: null,
    },
    {
      id: 'ubuntu',
      target: 'ubuntu',
      native: 'humanity / "I am because we are"',
      literal: 'ubu- (abstract) + ntu (person) — the most repeated moral in southern Africa',
      emoji: '🤲',
      phonetic: 'oo-BOON-too',
      audioRef: null,
    },
    {
      id: 'isifundo_sale_nganekwane',
      target: 'Isifundo salenganekwane yikuthi…',
      native: 'The lesson of this story is that…',
      literal: 'sentence frame the storyteller uses to deliver the moral',
      emoji: '📌',
      phonetic: 'ee-see-FOON-doh sah-leh-een-gah-neh-KWAH-neh yee-KOO-tee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Delivering the moral',
    explanation: "Ndebele storytellers signal the moral with a fixed frame: 'Isifundo salenganekwane yikuthi…' (the lesson of this story is that…). The audience knows what's coming — the music slows, the storyteller's voice drops, and one inherited line lands. Always the same shape, always different content.",
    examples: [
      { target: 'Isifundo salenganekwane yikuthi ukuhlakanipha kungenani ngaphandle kokubekezela.', native: 'The lesson of this story is that cleverness is nothing without patience.' },
      { target: 'Isifundo salenganekwane yikuthi akekho omncane kakhulu.', native: 'The lesson of this story is that no one is too small.' },
      { target: 'Isifundo salenganekwane yikuthi ubuntu bayasinda.', native: 'The lesson of this story is that humanity (ubuntu) is heavy / matters.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each moral to its meaning',
      pairs: [
        { left: 'inkulumo', right: 'a saying / moral statement' },
        { left: 'isifundo', right: 'a lesson, take-away' },
        { left: 'ukubekezela', right: 'patience' },
        { left: 'ubuntu', right: 'humanity / I am because we are' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the storyteller\'s frame',
      question: 'You\'ve finished telling a folktale and want to deliver the moral. Which phrase opens it?',
      options: [
        { text: 'Isifundo salenganekwane yikuthi…', correct: true },
        { text: 'Salibonani bobaba…', correct: false },
        { text: 'Kwasukasukela…', correct: false },
      ],
      explanation: "'Salibonani' is a greeting; 'Kwasukasukela' opens the story. 'Isifundo salenganekwane yikuthi…' closes it.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the moral of the lion-and-mouse',
      sentence: 'Isifundo salenganekwane yikuthi akekho ____ kakhulu.',
      options: ['omncane', 'omkhulu', 'ohlakaniphile'],
      correct: 'omncane',
      context: 'The lion-and-mouse moral is "no one is too SMALL". omncane = small.',
    },
    {
      type: 'translate',
      instruction: 'Translate',
      prompt: 'patience (the noun)',
      correct: ['ukubekezela', 'Ukubekezela'],
    },
  ],

  rwenDialogue: {
    intro: "Gogo is closing tonight's story. Listen for the frame and what comes after.",
    lines: [
      { speaker: 'npc', target: '…umfudu waphumelela. Umvundla wakhala.', native: '…the tortoise won. The hare cried.' },
      { speaker: 'rwen', rwenLine: "She's about to drop the moral. Hear the frame coming." },
      { speaker: 'npc', target: 'Isifundo salenganekwane yikuthi ukuhlakanipha kungenani ngaphandle kokubekezela.', native: 'The lesson of this story is that cleverness is nothing without patience.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Yebo, Gogo. Siyabonga.', native: 'Yes, Grandmother. Thank you.', correct: true, feedback: "The proper close. The story ends, the listener thanks the teller." },
          { target: 'Cosi!', native: 'Yes! (audience reply)', correct: false, feedback: "'Cosi!' is for during the story. After the moral, you thank the teller." },
          { target: '(say nothing)', native: '(silence)', correct: false, feedback: "A folktale ends with thanks. The teller has handed you something. You hold it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Open with Kwasukasukela / Cosi. Close with the moral and 'Siyabonga'. That's the full frame of an Ndebele inganekwane.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Recall.',
    prompts: [
      { prompt: 'How do you say "the lesson of this story is that…"?', correct: ['Isifundo salenganekwane yikuthi', 'isifundo salenganekwane yikuthi'] },
      { prompt: 'What is the word for "patience"?', correct: ['ukubekezela', 'Ukubekezela'] },
      { prompt: 'The moral concept of "I am because we are"?', correct: ['ubuntu', 'Ubuntu'] },
    ],
  },

  mission: {
    title: "Pick one moral to live tomorrow",
    task: "Choose ONE of today's morals — patience, no-one-is-too-small, or ubuntu — and decide one tiny way you'll act on it tomorrow. A folktale moral that doesn't change behaviour is just decoration.",
    rwenSignoff: "Every story is an old voice trying to teach a young one. You're the young one. Listen well.",
  },

  phase8: {
    scenario: "Rwen has just finished telling you a short folktale (he picks one of: hare/tortoise, lion/mouse, or invents one). Your job is to deliver the moral in isiNdebele using the frame 'Isifundo salenganekwane yikuthi…'. Rwen will react to your moral and ask whether you agree with it.",
    rwenRole: "Older storyteller — tests whether you can identify the moral and deliver it in the proper closing frame, then asks if you agree.",
    successCriteria: "User used 'Isifundo salenganekwane yikuthi…' frame correctly, identified a sensible moral that fits the tale, and reflected briefly on whether they agree.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
