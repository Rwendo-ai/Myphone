import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04',
  module: 10,
  lesson: 4,
  title: 'The Lion and the Mouse — Isilwane lemphuku',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Today's story is borrowed — Aesop's lion and mouse — but Ndebele storytellers have been telling it for generations as if it were always theirs. The moral fits perfectly with what Gogo has been teaching all along: there is no person too small to help you.",
    culturalNote: "Ndebele oral tradition is hospitable. When a foreign story arrives — through missionaries, schools, or radio — and it carries a useful moral, it gets adopted, the names changed, the setting localised. The lion-and-mouse tale travels well because Ndebele culture already valued the same lesson: ubukhulu kabuxabani lobuncane — bigness should not despise smallness.",
  },

  chunks: [
    {
      id: 'isilwane',
      target: 'isilwane',
      native: 'the lion (or large beast)',
      literal: 'isi- + lwane (beast)',
      emoji: '🦁',
      phonetic: 'ee-see-LWAH-neh',
      audioRef: null,
    },
    {
      id: 'imphuku',
      target: 'imphuku',
      native: 'the mouse',
      literal: 'im- + phuku',
      emoji: '🐭',
      phonetic: 'eem-POO-koo',
      audioRef: null,
    },
    {
      id: 'wabophwa',
      target: 'wabophwa',
      native: 'he/she was tied / trapped',
      literal: 'wa- + bophwa (passive of bopha — tie)',
      emoji: '🪤',
      phonetic: 'wah-BOH-pwah',
      audioRef: null,
    },
    {
      id: 'wamsiza',
      target: 'wamsiza',
      native: 'he/she helped him/her',
      literal: 'wa- + m- (him/her object) + siza (help)',
      emoji: '🤝',
      phonetic: 'wahm-SEE-zah',
      audioRef: null,
    },
    {
      id: 'akekho_omncane',
      target: 'akekho omncane kakhulu',
      native: 'no one is too small',
      literal: 'akekho (there is no one) + omncane (who is small) + kakhulu (very/too much)',
      emoji: '🌱',
      phonetic: 'ah-KEH-koh oh-mn-CAH-neh kah-KOO-loo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Object markers in narrative past',
    explanation: "When a story-character does something TO another character, isiNdebele inserts a tiny object marker between the past prefix and the verb stem. 'wamsiza' = wa- (he-past) + m- (him/her) + siza (help) = 'he helped her'. This is how Ndebele storytellers keep two characters straight without naming them every sentence.",
    examples: [
      { target: 'Wambamba.', native: 'He caught him/her.' },
      { target: 'Wamsiza.', native: 'She helped him.' },
      { target: 'Wamkhulula.', native: 'He freed him.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the folktale word to its meaning',
      pairs: [
        { left: 'isilwane', right: 'the lion / great beast' },
        { left: 'imphuku', right: 'the mouse' },
        { left: 'wabophwa', right: 'he was trapped' },
        { left: 'wamsiza', right: 'she helped him' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the moral',
      question: 'Which line carries the moral of this tale?',
      options: [
        { text: 'Akekho omncane kakhulu — no one is too small (to help you).', correct: true },
        { text: 'Isilwane silamandla — the lion is strong.', correct: false },
        { text: 'Imphuku iyagijima — the mouse runs.', correct: false },
      ],
      explanation: "The lion is saved by the mouse he once spared. The point of the story is the smallness of the helper.",
    },
    {
      type: 'fill_blank',
      instruction: 'The mouse helped HIM. Pick the right object marker.',
      sentence: 'Imphuku wa__siza isilwane.',
      options: ['m', 'ba', 'si'],
      correct: 'm',
      context: '"m-" = him/her singular. wa- + m- + siza = wamsiza.',
    },
    {
      type: 'translate',
      instruction: 'Translate the lion\'s line',
      prompt: 'The mouse helped me.',
      correct: ['Imphuku yangisiza', 'Imphuku wangisiza', 'imphuku yangisiza', 'imphuku wangisiza'],
    },
  ],

  rwenDialogue: {
    intro: "Same opener, same form. Listen for the object markers — m-, ngi- — that make the two characters dance.",
    lines: [
      { speaker: 'npc', target: 'Kwasukasukela…', native: 'Once upon a time…' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Cosi!', native: 'Yes!', correct: true, feedback: "Story open." },
          { target: 'Mmm.', native: '(uncertain noise)', correct: false, feedback: "Storyteller pauses. 'Cosi yephi?' — give her a clear 'Cosi!'." },
        ],
      },
      { speaker: 'npc', target: 'Kwakukhona isilwane esikhulu lemphuku encane.', native: 'There was once a great lion and a small mouse.' },
      { speaker: 'npc', target: 'Imphuku yagijima phezu kwesilwane esilele. Isilwane sayibamba — kodwa sayikhulula.', native: 'The mouse ran across the sleeping lion. The lion caught her — but he freed her.' },
      { speaker: 'npc', target: 'Ngelinye ilanga, isilwane sabophwa esibanjini somzingeli. Imphuku yezwa ukukhala. Yagijima, yaluma intambo, yamkhulula isilwane.', native: 'One day, the lion was trapped in a hunter\'s snare. The mouse heard the cry. She ran, gnawed the rope, and freed the lion.' },
      { speaker: 'rwen', rwenLine: "Moral now." },
      { speaker: 'npc', target: 'Akekho omncane kakhulu ukuthi angekenze okuhle.', native: 'No one is too small to do good.' },
      { speaker: 'rwen', rwenLine: "Two characters, three reversals, one moral. That's the umvundla rhythm — even when the umvundla isn't in it.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Recall.',
    prompts: [
      { prompt: 'How do you say "the lion"?', correct: ['isilwane', 'Isilwane'] },
      { prompt: 'How do you say "the mouse"?', correct: ['imphuku', 'Imphuku'] },
      { prompt: 'What\'s the moral, in English?', correct: ['no one is too small', 'no one is too small to help', 'nobody is too small'] },
    ],
  },

  mission: {
    title: "Find your real-life small helper",
    task: "Think of one person — anyone — who once helped you despite being 'too small' to matter on paper. A child. A cleaner. A stranger. Send them a single sentence today, in any language, that thanks them. The lion and the mouse is only a story until you live it.",
    rwenSignoff: "Stories travel. They cross oceans and become Ndebele. The mouse is still the mouse. Sala kuhle.",
  },

  phase8: {
    scenario: "Rwen plays a child who knows the hare-and-tortoise but has never heard the lion-and-mouse. Retell it in 60-90 seconds, using 'isilwane' and 'imphuku' at least twice each, and end with 'Akekho omncane kakhulu'.",
    rwenRole: "Sipho, 9 — same eager listener from earlier lessons. Will gasp at the trap, will recite the moral back to you if you deliver it well.",
    successCriteria: "User opened with 'Kwasukasukela', used 'isilwane' and 'imphuku', used at least one object-marker verb (e.g., wamsiza, yamkhulula), and delivered the moral.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
