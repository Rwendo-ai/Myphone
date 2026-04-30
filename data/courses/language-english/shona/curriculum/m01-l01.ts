import { LessonData } from '../../../../../types/lesson';

/**
 * Phase K STUB — m01-l01 of the language-english course, authored for
 * a Shona speaker.
 *
 * One example lesson to prove the architecture supports the second
 * speaker variant. Full curriculum (100 lessons across 10 modules) is
 * Phase K's authoring scope per PRODUCT-DESIGN.md §8.
 *
 * Notable structural points:
 *  - target = English (the language being learned)
 *  - native = Shona (the user's spoken language)
 *  - Cultural framing comes FROM a Shona speaker's POV — not
 *    translated from the english variant. The Hook narrative below
 *    is Shona-speaker-perspective, not "English-speaker explains
 *    English to Shona learner".
 */
const lesson: LessonData = {
  id: 'm01-l01-hello',
  module: 1,
  lesson: 1,
  title: 'Hello — Mhoro',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! MuChiNgezi, kana uchionana nemumwe, unotanga ne'Hello'. Inyanzvi yekutanga kushandiswa.",
    culturalNote: "Vanhu vanotaura ChiNgezi havasi vechiBritish chete — varimo munyika dzakawanda. 'Hello' inoshanda muchero nyika.",
  },

  chunks: [
    {
      id: 'hello',
      target: 'Hello',
      native: 'Mhoro',
      literal: undefined,
      emoji: '👋',
      phonetic: 'heh-LOH',
      audioRef: null,
    },
    {
      id: 'how_are_you',
      target: 'How are you?',
      native: 'Makadii?',
      literal: 'Sei ari iwe?',
      emoji: '👀',
      phonetic: 'how-AHR-yoo',
      audioRef: null,
    },
    {
      id: 'im_fine_thanks',
      target: "I'm fine, thanks.",
      native: 'Ndiri zvakanaka, ndatenda.',
      literal: 'I-am OK, I-thank',
      emoji: '✨',
      phonetic: 'aym-FAYN-thanks',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Greetings',
    explanation: "MuChiNgezi, kuti ubvunze vanhu kuti vari sei, unoshandisa 'How are you?'. Mhinduro yekutanga inenge iri 'I'm fine, thanks.' kunyange kana usingavi zvakanaka — itsika.",
    examples: [
      { target: 'Hello',        native: 'Mhoro' },
      { target: 'Hi',           native: 'Hesi' },
      { target: 'How are you?', native: 'Makadii?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Hello',         right: 'Mhoro' },
        { left: 'How are you?',  right: 'Makadii?' },
        { left: "I'm fine",      right: 'Ndiri zvakanaka' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mhoro',
      correct: ['Hello', 'hello', 'Hi', 'hi'],
    },
  ],

  rwenDialogue: {
    intro: 'Wasangana neumwe muHarare. Vanotaura ChiNgezi. Kwaziranai.',
    lines: [
      { speaker: 'npc',  target: 'Hello!', native: 'Mhoro!' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hello, how are you?', native: 'Mhoro, makadii?', correct: true,  feedback: 'Zvakanaka — kuonesa rumbidzo, sezvakaita Shona.' },
          { target: 'Hi.',                  native: 'Hesi.',           correct: false, feedback: 'Zvinoshanda asi pfupi — wedzera "How are you?" kuti hurukuro irambe.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Watanga zvakanaka — wakaratidza kuti une tsika.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Hello (in English)', correct: ['Hello', 'hello', 'Hi', 'hi'] },
      { prompt: 'How are you? (in English)', correct: ['How are you?', 'How are you', 'how are you?', 'how are you'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Bvunza mumwe — kunyange uchitaura naye chiShona — 'How are you?' nhasi. Even silently to yourself counts.",
    rwenSignoff: "Ndichakubvunza mangwana. Famba zvakanaka.",
  },
};

export default lesson;
