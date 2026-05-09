import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09',
  module: 1,
  lesson: 9,
  title: 'Numbers and Body Parts with Clicks',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Time to attach the clicks to things you'll actually use. Numbers — because you can't shop without them. Body parts — because you can't see a doctor without them. And both categories are full of clicks.",
    culturalNote: "When parents in Bulawayo teach toddlers the parts of the body, they touch each one as they say it: ikhanda (head, no click), izinhliziyo (heart), ixhwele (rib — x-click). The 'touch and say' method is universal in Ndebele households, and it's still the fastest way for a learner to remember a click word: produce the click, touch the body part. Connect sound to flesh.",
  },

  chunks: [
    {
      id: 'isithupha',
      target: 'isithupha',
      native: 'six',
      emoji: '6️⃣',
      phonetic: 'ee-see-TOO-pah — no click (in spite of looking like one)',
      audioRef: null,
    },
    {
      id: 'ixhwele',
      target: 'ixhwele',
      native: 'rib',
      emoji: '🦴',
      phonetic: 'ee-[x-click]HWEH-leh — x-click + breathy h',
      audioRef: null,
    },
    {
      id: 'umkhumbi',
      target: 'umqolo',
      native: 'spine, backbone',
      literal: 'um- + qolo (back)',
      emoji: '🧍',
      phonetic: 'oom-[q-click]OH-loh — q-click',
      audioRef: null,
    },
    {
      id: 'incwadi',
      target: 'incwadi',
      native: 'a book / a letter (used in counting forms too)',
      literal: 'i- + ncwadi',
      emoji: '📕',
      phonetic: 'een-[c-click]WAH-dee — c-click after the n',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Clicks inside everyday words',
    explanation: "Clicks turn up in body parts (umqolo — spine, ixhwele — rib), in everyday objects (incwadi — book), and in plenty of nouns you'll need from week one. Notice that 'nc', 'nq', 'nx' combinations exist too — the n is just a small nasal hum BEFORE the click. The click itself is unchanged.",
    examples: [
      { target: 'umqolo',  native: 'spine (q-click)' },
      { target: 'ixhwele', native: 'rib (x-click + h)' },
      { target: 'incwadi', native: 'book (n + c-click)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each Ndebele word to its English meaning',
      pairs: [
        { left: 'umqolo',   right: 'spine' },
        { left: 'ixhwele',  right: 'rib' },
        { left: 'incwadi',  right: 'book' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'In "incwadi" (book), what does the "n" before the "c" do?',
      options: [
        { text: 'Adds a small nasal hum BEFORE the c-click — the click itself is unchanged.', correct: true },
        { text: 'Cancels the click — it becomes a plain c.',                                  correct: false },
        { text: 'Turns it into a different click.',                                            correct: false },
      ],
      explanation: "Ndebele has nasalised clicks: nc, nq, nx. The 'n' is a brief hum, then the click pops out from underneath it. The click letter still tells you which of the three sounds is coming.",
    },
    {
      type: 'translate',
      instruction: 'Translate to English',
      prompt: 'umqolo',
      correct: ['spine', 'backbone', 'the spine', 'the backbone'],
    },
    {
      type: 'fill_blank',
      instruction: 'Fill in the click letter',
      sentence: "Rib: i___hwele.",
      options: ['c', 'q', 'x'],
      correct: 'x',
      context: "Rib has the lateral click — same one as ixoxo and ixhama from earlier in the module.",
    },
  ],

  rwenDialogue: {
    intro: "A friend in a Bulawayo clinic waiting room is describing where it hurts. Listen for the clicks in the body parts.",
    lines: [
      { speaker: 'npc',  target: 'Ngiphethwe ngumqolo.',  native: "I'm troubled by my back / spine." },
      { speaker: 'rwen', rwenLine: "Umqolo — spine. Q-click. The body part you'll mention if you've been carrying water all morning." },
      { speaker: 'npc',  target: 'Ixhwele lami libuhlungu.', native: "My rib hurts." },
      { speaker: 'rwen', rwenLine: "Ixhwele — rib. X-click with the breathy h. Don't drop the puff after the clop." },
      { speaker: 'npc',  target: 'Ngifuna incwadi yedokotela.', native: "I want a doctor's letter." },
      { speaker: 'rwen', rwenLine: "Incwadi — letter or book. Nasal hum, then the c-click. Three words, three different clicks, all in a clinic visit." },
    ],
  },

  activeRecall: {
    instruction: 'Without looking up, recall.',
    prompts: [
      { prompt: 'How do you say "spine / backbone" in isiNdebele?',                  correct: ['umqolo', 'Umqolo'] },
      { prompt: 'Which click is in "ixhwele" (rib) — c, q, or x?',                   correct: ['x', 'X'] },
      { prompt: 'In "nc", "nq", or "nx" — does the n change which click is made?',  correct: ['no', 'No', 'NO', 'no it doesn\'t', 'no it does not'] },
    ],
  },

  mission: {
    title: 'Touch and say',
    task: "Stand up. Say 'umqolo' and touch your spine. Say 'ixhwele' and touch your ribs. Say 'incwadi' and pick up a book. Three words, three clicks, three physical anchors. Sound to body — that's how toddlers in Bulawayo learn it.",
    rwenSignoff: "Anchoring a click word to a physical thing is the fastest way to keep it. You've just done it three times.",
  },

  phase8: {
    scenario: "You're in a clinic in Bulawayo describing minor pain to a nurse — Rwen plays the nurse. You name the body part using a click word.",
    rwenRole: "Calm clinic nurse, ~40yo, asks short questions and waits patiently",
    successCriteria: "User produced a click body-part word (umqolo, ixhwele) and described where it hurts.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
