import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l06',
  module: 3,
  lesson: 6,
  title: 'What time is it?',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Asking the time in isiNdebele is one short, useful sentence: 'Ngabe lithini iwashi?' — literally, 'what is the watch saying?'. Answer it with a number plus the time-of-day word from yesterday, and you sound completely natural.",
    culturalNote: "Across Matabeleland, you will hear two systems: the 24-hour clock (used on radio, in offices, on bus schedules) and the older sun-anchored phrasing ('ngo-2 ntambama' = at 2 in the afternoon). Both are everywhere. We teach the spoken sun-anchored form because that is what people use when stopping a stranger on the street.",
  },

  chunks: [
    {
      id: 'ngabe_lithini_iwashi',
      target: 'Ngabe lithini iwashi?',
      native: 'What time is it?',
      literal: 'is-it what-says the-watch?',
      emoji: '⏰',
      phonetic: 'NGAH-beh lee-TEE-nee ee-WAH-shee',
      audioRef: null,
    },
    {
      id: 'ngo_isikhathi',
      target: 'ngo-',
      native: 'at (used before clock times)',
      literal: 'at-the',
      emoji: '🕐',
      phonetic: 'ngoh',
      audioRef: null,
    },
    {
      id: 'ngo_2_ntambama',
      target: 'ngo-2 ntambama',
      native: 'at 2 in the afternoon',
      literal: 'at-the-two afternoon',
      emoji: '🕑',
      phonetic: 'ngoh-MBEE-lee n-tahm-BAH-mah',
      audioRef: null,
    },
    {
      id: 'ngo_7_ekuseni',
      target: 'ngo-7 ekuseni',
      native: 'at 7 in the morning',
      literal: 'at-the-seven morning',
      emoji: '🕖',
      phonetic: 'ngoh-see-kohm-BEE-sah eh-koo-SEH-nee',
      audioRef: null,
    },
    {
      id: 'isikhathi_esingaki',
      target: 'isikhathi esingaki?',
      native: 'how much time / how long?',
      literal: 'time how-much?',
      emoji: '⏳',
      phonetic: 'ee-see-KAH-tee eh-seen-GAH-kee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'ngo- + number + part of day',
    explanation: "The structure is mechanical. 'Ngo-' welds onto the front of any clock number ('ngo-3', 'ngo-itshumi'), then you add the time-of-day word: ekuseni / emini / ntambama / kusihlwa / ebusuku. So 'at 8 in the morning' is 'ngo-8 ekuseni'. There is no 'a.m./p.m.' — the time-of-day word disambiguates. To ask the time, say 'Ngabe lithini iwashi?' — keep the whole phrase memorised, no need to break it down at this stage.",
    examples: [
      { target: 'ngo-7 ekuseni', native: 'at 7 a.m.' },
      { target: 'ngo-12 emini', native: 'at noon' },
      { target: 'ngo-5 ntambama', native: 'at 5 p.m.' },
      { target: 'ngo-9 ebusuku', native: 'at 9 p.m.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each clock phrase to its meaning',
      pairs: [
        { left: 'ngo-7 ekuseni', right: '7 in the morning' },
        { left: 'ngo-12 emini', right: 'noon' },
        { left: 'ngo-3 ntambama', right: '3 in the afternoon' },
        { left: 'ngo-9 ebusuku', right: '9 at night' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'What time is it?',
      correct: ['Ngabe lithini iwashi?', 'Ngabe lithini iwashi', 'ngabe lithini iwashi?', 'ngabe lithini iwashi'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: at 6 in the evening (dusk)',
      sentence: 'ngo-6 _____',
      options: ['kusihlwa', 'ekuseni', 'emini'],
      correct: 'kusihlwa',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "at 8 in the morning"',
      words: ['ekuseni', 'ngo-8'],
      correct: ['ngo-8', 'ekuseni'],
      translation: 'at 8 in the morning',
    },
  ],

  rwenDialogue: {
    intro: "You're at a kombi rank in Bulawayo. The driver to Plumtree is on a phone call — but you need to know when he leaves.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngabe lithini iwashi?', native: 'What time is it?', correct: false, feedback: "Useful — but you actually need to know his departure time, not the current time. Try a more specific question." },
          { target: 'Sihamba nini?', native: 'When do we leave?', correct: true, feedback: "Direct and the right question. He pulls out his phone." },
          { target: 'Sawubona', native: 'Hello', correct: false, feedback: "You can greet first, but if the kombi might leave you behind, get to the question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sihamba ngo-2 ntambama.',
        native: 'We leave at 2 in the afternoon.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngo-2 ntambama, kulungile', native: '2 in the afternoon, alright', correct: true, feedback: "Confirming the time back to him is the local move — avoids missed kombis." },
          { target: 'Ekuseni', native: 'Morning', correct: false, feedback: "He said afternoon (ntambama). Listen for the time-of-day word at the end." },
          { target: 'Ngiyahamba', native: 'I am leaving', correct: false, feedback: "Confirm his time, don't talk about your own movement." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Always repeat the time. In a noisy rank, your ears need a second pass at the number.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'What time is it?', correct: ['Ngabe lithini iwashi?', 'Ngabe lithini iwashi', 'ngabe lithini iwashi?'] },
      { prompt: 'at 7 in the morning', correct: ['ngo-7 ekuseni', 'Ngo-7 ekuseni'] },
      { prompt: 'at 5 in the afternoon', correct: ['ngo-5 ntambama', 'Ngo-5 ntambama'] },
    ],
  },

  mission: {
    title: 'Tell three times today',
    task: "Pick three real things on your schedule today. Say them out loud in isiNdebele: 'ngo-X ekuseni / emini / ntambama / kusihlwa / ebusuku'. Coffee at 9, lunch at 12, walk at 5 — wrap each one in the structure.",
    rwenSignoff: "When you can say the time, you can keep an appointment. That's the world opening up.",
  },

  phase8: {
    scenario: "You're trying to schedule a kombi ride from Bulawayo to Plumtree. Rwen plays the driver. Ask the time, ask when the kombi leaves, and confirm the time back to him.",
    rwenRole: "Sipho, ~35, kombi driver — busy, tells you the time once and expects you to confirm it",
    successCriteria: "User asked 'Ngabe lithini iwashi?' or 'Sihamba nini?' correctly, parsed the answer (e.g. 'ngo-2 ntambama'), and repeated the full time back to Sipho with both the number and the time-of-day word.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
