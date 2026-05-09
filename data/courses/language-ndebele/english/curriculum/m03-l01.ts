import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l01',
  module: 3,
  lesson: 1,
  title: 'Numbers 1 to 5',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Numbers in isiNdebele do not behave like English. The number itself changes shape depending on what you are counting. Today we just learn the bare counting forms — one to five — and tomorrow we keep going.",
    culturalNote: "In Bulawayo markets, vendors will often hold up fingers as they say a price — both because of the noise and because the spoken numbers shift form when paired with the noun (cabbages versus children versus cattle). Learn the counting forms first; the agreement comes later.",
  },

  chunks: [
    {
      id: 'kunye',
      target: 'kunye',
      native: 'one',
      literal: 'it-is-one',
      emoji: '1️⃣',
      phonetic: 'koo-NYEH',
      audioRef: null,
    },
    {
      id: 'kubili',
      target: 'kubili',
      native: 'two',
      literal: 'it-is-two',
      emoji: '2️⃣',
      phonetic: 'koo-BEE-lee',
      audioRef: null,
    },
    {
      id: 'kuthathu',
      target: 'kuthathu',
      native: 'three',
      literal: 'it-is-three',
      emoji: '3️⃣',
      phonetic: 'koo-TAH-too',
      audioRef: null,
    },
    {
      id: 'kune',
      target: 'kune',
      native: 'four',
      literal: 'it-is-four',
      emoji: '4️⃣',
      phonetic: 'KOO-neh',
      audioRef: null,
    },
    {
      id: 'kuhlanu',
      target: 'kuhlanu',
      native: 'five',
      literal: 'it-is-five',
      emoji: '5️⃣',
      phonetic: 'koo-SHLAH-noo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The "ku-" counting prefix',
    explanation: "When counting in the abstract — '1, 2, 3...' — every number from one to five carries the prefix 'ku-'. This is the neutral counting form, the one you use to recite numbers, give a phone number, or say how many of something there are without naming it. The moment you attach the number to a noun, the prefix changes to agree with that noun's class — a feature called concord. We learn counting first; concord comes in M3-L03.",
    examples: [
      { target: 'kunye, kubili, kuthathu', native: 'one, two, three' },
      { target: 'kune, kuhlanu', native: 'four, five' },
      { target: 'Kuthathu, sicela', native: 'Three, please (counting form)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each number to its meaning',
      pairs: [
        { left: 'kunye', right: 'one' },
        { left: 'kubili', right: 'two' },
        { left: 'kuthathu', right: 'three' },
        { left: 'kune', right: 'four' },
        { left: 'kuhlanu', right: 'five' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the count',
      sentence: 'kunye, kubili, _____, kune, kuhlanu',
      options: ['kuthathu', 'kuhlanu', 'kunye'],
      correct: 'kuthathu',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'four',
      correct: ['kune', 'Kune'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'You want to say "five" while counting fingers. Which is right?',
      options: [
        { text: 'kuhlanu', correct: true },
        { text: 'kuthathu', correct: false },
        { text: 'kubili', correct: false },
      ],
      explanation: "'Kuhlanu' is the bare counting form for five — the 'hl' is one sound, like a sharp whispered 'l'.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a stall in Bulawayo's Makokoba market. The vendor is bagging tomatoes and asks how many you want.",
    lines: [
      {
        speaker: 'npc',
        target: 'Ufuna izingaki?',
        native: 'How many do you want?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kuhlanu', native: 'Five', correct: true, feedback: "Clean counting form — she nods and starts bagging five tomatoes." },
          { target: 'Yebo', native: 'Yes', correct: false, feedback: "She asked how many, not yes or no. Try the number itself — 'kuhlanu' for five." },
          { target: 'Sawubona', native: 'Hello', correct: false, feedback: "You already greeted her. Now answer the question with a number." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Kuhlanu, kulungile.',
        native: 'Five, alright.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice she repeated 'kuhlanu' back to confirm — that is the polite habit at any stall. Repeat numbers, avoid mistakes.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'one (counting form)', correct: ['kunye', 'Kunye'] },
      { prompt: 'three (counting form)', correct: ['kuthathu', 'Kuthathu'] },
      { prompt: 'five (counting form)', correct: ['kuhlanu', 'Kuhlanu'] },
    ],
  },

  mission: {
    title: 'Count five things today',
    task: "Pick five everyday objects — five mugs, five steps, five cars passing — and count them out loud in isiNdebele: kunye, kubili, kuthathu, kune, kuhlanu. The mouth needs to feel the rhythm before the brain trusts the words.",
    rwenSignoff: "Numbers are doors. You just opened the first five.",
  },

  phase8: {
    scenario: "You're buying fruit at a Bulawayo street stall. The vendor doesn't speak English and asks 'Ufuna izingaki?' — how many do you want? Practice answering with a number from 1 to 5 and confirming when she repeats it back.",
    rwenRole: "Mama Sibongile, ~60, fruit vendor at Makokoba market — patient with learners, will gently correct if you mix up numbers",
    successCriteria: "User answered 'Ufuna izingaki?' with a correct counting form (kunye / kubili / kuthathu / kune / kuhlanu) and confirmed by repeating the number when Mama Sibongile read it back.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
