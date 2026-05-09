import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l07',
  module: 3,
  lesson: 7,
  title: 'Months and seasons',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "isiNdebele month names are loanwords from English, lightly Ndebele-ised. They are the easiest vocabulary in this whole course. Seasons, though, are different — and Zimbabwe only has three of them, not four.",
    culturalNote: "Matabeleland sits in southern Africa's seasonal pattern: hot dry (August to October), wet (November to March), cool dry (May to July). The traditional season names are 'ihlobo' (rainy/summer), 'ikwindla' (autumn/harvest), 'ubusika' (winter/dry-cold), 'intwasahlobo' (early spring). 'Spring' as a four-season concept is borrowed from European framing — the rains, not budding trees, are what locals watch for.",
  },

  chunks: [
    {
      id: 'janhuwari',
      target: 'uJanhuwari',
      native: 'January',
      literal: 'January (loanword)',
      emoji: '❄️',
      phonetic: 'oo-jahn-hoo-WAH-ree',
      audioRef: null,
    },
    {
      id: 'februwari',
      target: 'uFebruwari',
      native: 'February',
      literal: 'February (loanword)',
      emoji: '💕',
      phonetic: 'oo-feh-broo-WAH-ree',
      audioRef: null,
    },
    {
      id: 'ihlobo',
      target: 'ihlobo',
      native: 'summer / rainy season (Nov–Mar)',
      literal: 'the-rains',
      emoji: '🌧️',
      phonetic: 'ee-SHLOH-boh',
      audioRef: null,
    },
    {
      id: 'ubusika',
      target: 'ubusika',
      native: 'winter / cold dry season (May–Jul)',
      literal: 'the-cold-time',
      emoji: '🥶',
      phonetic: 'oo-boo-SEE-kah',
      audioRef: null,
    },
    {
      id: 'intwasahlobo',
      target: 'intwasahlobo',
      native: 'spring / start of rains (Aug–Oct)',
      literal: 'beginning-of-rains',
      emoji: '🌱',
      phonetic: 'in-twah-sah-SHLOH-boh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Months are borrowed; seasons are local',
    explanation: "Every month is the English name with a 'u-' prefix and a small pronunciation tweak: uJanhuwari, uFebruwari, uMatshi, u-Ephreli, uMeyi, uJuni, uJulayi, u-Agasti, uSeptemba, u-Okthoba, uNovemba, uDisemba. Seasons, by contrast, come from the language's deep roots: ihlobo (rainy summer), ikwindla (harvest autumn), ubusika (cold dry winter), intwasahlobo (early spring). When you talk weather, use the local words — they encode the climate Matabeleland actually has.",
    examples: [
      { target: 'uJanhuwari ngokwehlobo', native: 'January is in summer' },
      { target: 'uJulayi ngobusika', native: 'July is in winter' },
      { target: 'Kushisa ehlobo', native: "It's hot in summer" },
      { target: 'Kuyabanda ebusika', native: "It's cold in winter" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each season to its meaning',
      pairs: [
        { left: 'ihlobo', right: 'summer / rainy' },
        { left: 'ikwindla', right: 'autumn / harvest' },
        { left: 'ubusika', right: 'winter / cold dry' },
        { left: 'intwasahlobo', right: 'spring / early rains' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'February',
      correct: ['uFebruwari', 'Februwari', 'ufebruwari'],
    },
    {
      type: 'fill_blank',
      instruction: 'Which season fits July in Bulawayo?',
      sentence: 'UJulayi ngo_____',
      options: ['busika', 'hlobo', 'kwindla'],
      correct: 'busika',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "Why does isiNdebele have only four 'real' season words for what Europeans call four seasons?",
      options: [
        { text: 'Because the local climate is dominated by the rain cycle, not leaves on trees — the season vocabulary tracks rain and harvest rather than four equal quarters.', correct: true },
        { text: 'Because isiNdebele dropped one season after independence.', correct: false },
        { text: 'Because the seasons are translated directly from English.', correct: false },
      ],
      explanation: "Southern Africa's year is shaped by the rains. 'Ihlobo' (summer rains), 'ikwindla' (harvest), 'ubusika' (cold dry), 'intwasahlobo' (rains begin) — every name names a moment in that cycle.",
    },
  ],

  rwenDialogue: {
    intro: "You're chatting with a farmer in Esigodini, an hour south of Bulawayo. He's asking when you'll come back to visit.",
    lines: [
      {
        speaker: 'npc',
        target: 'Uzaphenduka nini? Ngo-Disemba kumbe ngo-Julayi?',
        native: 'When will you return? In December or in July?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngo-Julayi, ebusika', native: 'In July, in winter', correct: true, feedback: "Locking the month to the season is the natural local move — he nods and laughs about needing a jacket." },
          { target: 'Ekuseni', native: 'In the morning', correct: false, feedback: "He asked about months, not time of day. Pick July or December." },
          { target: 'Ihlobo', native: 'Summer', correct: false, feedback: "Right kind of word but he asked which month. Pair the month with the season for full marks." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yebo, ubusika kuyabanda — woza ngejazi.',
        native: 'Yes, winter is cold — bring a jacket.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Months are loaned. Seasons are bone-deep. Use both together and you sound like you've been here a while.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'January', correct: ['uJanhuwari', 'Janhuwari', 'ujanhuwari'] },
      { prompt: 'summer / rainy season', correct: ['ihlobo', 'Ihlobo'] },
      { prompt: 'winter / cold dry season', correct: ['ubusika', 'Ubusika'] },
    ],
  },

  mission: {
    title: 'Pin a month to a season',
    task: "Take three months that matter to you — your birthday, a holiday, the month you started this course. Say each one in isiNdebele paired with its season: 'uMatshi ngokwehlobo' (March, in summer), and so on.",
    rwenSignoff: "Climate, calendar, language — they all line up here. You just learned how.",
  },

  phase8: {
    scenario: "Rwen plays a farmer in Esigodini who asks about your home country's seasons and when you would visit Matabeleland. You name a few months, pair them with the right Zimbabwean seasons, and explain one weather difference.",
    rwenRole: "Mkhulu Sibanda, ~70, retired farmer — curious about other countries' weather, knows the local seasons inside out",
    successCriteria: "User correctly named at least two months in isiNdebele AND paired at least one of them with the matching local season (ihlobo / ikwindla / ubusika / intwasahlobo).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
