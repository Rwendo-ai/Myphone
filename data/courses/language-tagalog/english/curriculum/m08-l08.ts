import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-yesterday',
  module: 8,
  lesson: 8,
  title: 'Kahapon — Past Tense',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "To tell what you did **yesterday**, drop the doubling. Pumupunta (going) → pumunta (went). Kumakain → kumain. The simple form **is** the past. Tagalog tense really is mostly: do you double the syllable or not?",
    culturalNote: "Filipinos love sharing the day's small wins — *anong ginawa mo kahapon?* (what did you do yesterday?) is everyday catch-up. Past forms drop reduplication: simple = done, doubled = ongoing.",
  },

  chunks: [
    {
      id: 'kahapon_pumunta',
      target: 'Kahapon, pumunta ako sa palengke',
      native: 'Yesterday, I went to the market',
      literal: 'Yesterday, went I to market',
      emoji: '🛒',
      phonetic: 'ka-HA-pon, pu-MUN-ta a-KO sa pa-LENG-ke',
      audioRef: null,
    },
    {
      id: 'kumain_ako',
      target: 'Kumain ako ng adobo',
      native: 'I ate adobo',
      literal: 'Ate I of-adobo',
      emoji: '🍛',
      phonetic: 'ku-MA-in a-KO nang a-DO-bo',
      audioRef: null,
    },
    {
      id: 'maganda_ang_araw',
      target: 'Maganda ang araw',
      native: 'It was a beautiful day / The day was good',
      literal: 'Beautiful the day',
      emoji: '🌞',
      phonetic: 'ma-gan-DA ang A-raw',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past = no reduplication',
    explanation: "Strip the doubled syllable, get the past. Pumu**pu**nta → pumunta (went). Kuma**ka**in → kumain (ate). Mag-aaral → nag-aral (studied — mag becomes nag and the doubling drops). The pattern is symmetric. Beautiful, really.",
    examples: [
      { target: 'Kumain ako kahapon', native: 'I ate yesterday' },
      { target: 'Nag-aral ako kagabi', native: 'I studied last night' },
      { target: 'Naligo ako kanina', native: 'I bathed earlier' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Kahapon, pumunta ako sa palengke', right: 'Yesterday, I went to the market' },
        { left: 'Kumain ako ng adobo', right: 'I ate adobo' },
        { left: 'Maganda ang araw', right: 'It was a beautiful day' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tell your friend what you ate last night.",
      sentence: '_____ ako ng adobo kagabi.',
      options: ['Kumain', 'Kumakain', 'Kakain'],
      correct: 'Kumain',
      context: 'Past = no doubling. Kumakain = eating now. Kakain = will eat.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Yesterday, I went to the market',
      correct: ['Kahapon, pumunta ako sa palengke', 'kahapon, pumunta ako sa palengke', 'Kahapon pumunta ako sa palengke'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "I ate adobo"',
      words: ['adobo', 'ako', 'ng', 'Kumain'],
      correct: ['Kumain', 'ako', 'ng', 'adobo'],
      translation: 'I ate adobo',
    },
    {
      type: 'multiple_choice',
      instruction: 'A friend asks "Anong ginawa mo kahapon?" (What did you do yesterday?)',
      question: 'Which form fits a past-tense answer?',
      options: [
        { text: 'Pumunta ako sa palengke', correct: true },
        { text: 'Pumupunta ako sa palengke', correct: false },
        { text: 'Pupunta ako sa palengke', correct: false },
      ],
      explanation: 'Pumunta (no doubling) = went. Pumupunta = is going. Pupunta = will go.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I ate adobo',
      correct: ['Kumain ako ng adobo', 'kumain ako ng adobo'],
    },
  ],

  rwenDialogue: {
    intro: "Monday morning, your coworker grabs coffee with you. She asks how the weekend went.",
    lines: [
      {
        speaker: 'npc',
        target: 'Anong ginawa mo kahapon?',
        native: 'What did you do yesterday?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Pumunta ako sa palengke at kumain ng adobo', native: 'I went to the market and ate adobo', correct: true, feedback: 'Two past verbs in one sentence — chef\'s kiss.' },
          { target: 'Pumupunta ako sa palengke', native: "I'm going to the market", correct: false, feedback: 'Doubled syllable — that\'s present, not yesterday.' },
          { target: 'Pupunta ako', native: 'I will go', correct: false, feedback: 'Future, not past.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Naku, gutom na ako!',
        native: "Oh, now I'm hungry!",
      },
      {
        speaker: 'rwen',
        rwenLine: "Past = no doubling. Drop the syllable, drop the time. You just unlocked half of Tagalog tense.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Yesterday, I went to the market (in Tagalog)', correct: ['Kahapon, pumunta ako sa palengke', 'kahapon, pumunta ako sa palengke', 'Kahapon pumunta ako sa palengke'] },
      { prompt: 'I ate adobo (in Tagalog)', correct: ['Kumain ako ng adobo', 'kumain ako ng adobo'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell someone — even just yourself — three things you did yesterday in Tagalog. Pumunta ako sa... Kumain ako ng... Naligo ako. Three past-tense moments.",
    rwenSignoff: 'Hanggang bukas — until tomorrow.',
  },

  phase8: {
    scenario: "It's Monday morning. You bump into a coworker over coffee and she asks how your weekend went. You'll narrate Sunday in past tense — where you went, what you ate, how the day felt — using non-reduplicated past verbs.",
    rwenRole: "Ate Pia — coworker, ~32, friendly with weekend small-talk; loves a story with specifics (which adobo? which palengke?).",
    successCriteria: "User describes yesterday using at least three past-tense verbs without reduplication (e.g. pumunta, kumain, naligo, nag-aral). Time markers like kahapon or kagabi appear at least once. No present-tense doubling slips in.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
