import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07',
  module: 10,
  lesson: 7,
  title: 'Telling your own story — first person past',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Until now you've been telling other people's stories. Today you tell your own. The trick is the prefix nga- — first-person narrative past. 'Ngavuka. Ngahamba. Ngabona.' I rose, I went, I saw. With those three you can tell anything that happened to you.",
    culturalNote: "In Ndebele oral culture, the highest compliment for a personal story is 'uyenza ibe njengenganekwane' — 'you make it like a folktale'. It means: you took a real event and gave it the shape of a tale, with an opener, beats, a moral. Personal experience becomes wisdom only when it's told well.",
  },

  chunks: [
    {
      id: 'ngavuka',
      target: 'ngavuka',
      native: 'I woke up / I rose',
      literal: 'nga- (I-narrative-past) + vuka (rise)',
      emoji: '🌅',
      phonetic: 'ngah-VOO-kah',
      audioRef: null,
    },
    {
      id: 'ngahamba',
      target: 'ngahamba',
      native: 'I went / I walked',
      literal: 'nga- + hamba (go)',
      emoji: '🚶',
      phonetic: 'ngah-HAHM-bah',
      audioRef: null,
    },
    {
      id: 'ngabona',
      target: 'ngabona',
      native: 'I saw',
      literal: 'nga- + bona (see)',
      emoji: '👀',
      phonetic: 'ngah-BOH-nah',
      audioRef: null,
    },
    {
      id: 'ngathi',
      target: 'ngathi',
      native: 'I said / I thought',
      literal: 'nga- + thi (say) — also "I thought" in narrative',
      emoji: '💬',
      phonetic: 'NGAH-tee',
      audioRef: null,
    },
    {
      id: 'ngafunda',
      target: 'ngafunda',
      native: 'I learned',
      literal: 'nga- + funda (learn) — common moral-line opener',
      emoji: '🎓',
      phonetic: 'ngah-FOON-dah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'First-person narrative past',
    explanation: "The prefix 'nga-' on a verb stem turns it into 'I [verb-ed]' in the storytelling register. Same shape as 'wa-' (he/she) from earlier — just first person. Five high-frequency stems carry most personal stories: vuka, hamba, bona, thi, funda. Combine with sequence words from yesterday and you can tell any short personal tale.",
    examples: [
      { target: 'Kuqala ngavuka.', native: 'First, I woke up.' },
      { target: 'Bese ngahamba emakethe.', native: 'Then I went to the market.' },
      { target: 'Ekugcineni ngafunda ukuthi…', native: 'Finally, I learned that…' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb to its English',
      pairs: [
        { left: 'ngavuka', right: 'I woke up' },
        { left: 'ngahamba', right: 'I went' },
        { left: 'ngabona', right: 'I saw' },
        { left: 'ngathi', right: 'I said / I thought' },
        { left: 'ngafunda', right: 'I learned' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the storytelling prefix',
      question: 'You\'re telling a personal story in folktale style. Which prefix turns "hamba" (go) into "I went"?',
      options: [
        { text: 'nga- → ngahamba', correct: true },
        { text: 'wa- → wahamba', correct: false },
        { text: 'u- → uhambile', correct: false },
      ],
      explanation: "wa- = he/she. u- + -ile = the perfect tense. nga- + verb + -a is the first-person narrative past.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "First, I woke up."',
      words: ['ngavuka', 'Kuqala'],
      correct: ['Kuqala', 'ngavuka'],
      translation: 'First, I woke up.',
    },
    {
      type: 'translate',
      instruction: 'Translate to isiNdebele',
      prompt: 'I learned that patience matters.',
      correct: ['Ngafunda ukuthi ukubekezela kuyasinda', 'Ngafunda ukuthi ukubekezela kubalulekile', 'ngafunda ukuthi ukubekezela kuyasinda'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen tells you a one-paragraph personal story to model the form. Listen for nga- nga- nga-.",
    lines: [
      { speaker: 'rwen', rwenLine: "Watch the prefix. nga-, nga-, nga-. Five sentences. Real life shaped like a folktale." },
      { speaker: 'rwen', rwenLine: 'Kuqala ngavuka emini, ngonyaka odlulileyo eBulawayo. Bese ngahamba emakethe ukuyothenga isinkwa. Kanti, indoda eyayingaphezu kwami yonke imali yayo yayilahlekile. Ngabona, ngathi kuyo "Ngingakusiza." Ekugcineni ngafunda ukuthi akekho omncane kakhulu ukubaluleka.' },
      { speaker: 'rwen', rwenLine: "Did you catch the four connectors and the five nga- verbs? Now you'll do the same shape." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kuqala ngavuka.', native: 'First, I woke up.', correct: true, feedback: "Clean opener. Now keep going — bese, kanti, ekugcineni." },
          { target: 'Wahamba.', native: 'He went. (third person)', correct: false, feedback: "Third-person form. Today is YOUR story — use nga-." },
          { target: 'Ngiyahamba.', native: 'I am going. (present)', correct: false, feedback: "Present tense — breaks the story frame. Narrative past = nga- + stem + -a." },
        ],
      },
      { speaker: 'rwen', rwenLine: "When the story is yours, the moral is yours too. That's the gift of telling.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking. Type from memory.',
    prompts: [
      { prompt: 'How do you say "I woke up" in storytelling form?', correct: ['ngavuka', 'Ngavuka'] },
      { prompt: 'How do you say "I went"?', correct: ['ngahamba', 'Ngahamba'] },
      { prompt: 'How do you say "I learned"?', correct: ['ngafunda', 'Ngafunda'] },
    ],
  },

  mission: {
    title: "Tell ONE story from your week — folktale style",
    task: "Out loud, in five sentences: tell yourself the story of one small thing that happened to you this week. Open with 'Kwasukasukela'. Use four sequence connectors. End with 'Ngafunda ukuthi…' and a one-line moral. The smaller the event, the more the form will lift it.",
    rwenSignoff: "Your real life, told well, is also an inganekwane. The moral is whatever you actually learned. Sala kuhle.",
  },

  phase8: {
    scenario: "You tell Rwen ONE personal story from the past week, shaped as a folktale: opener (Kwasukasukela), 4-beat structure with sequence connectors, at least three nga- verbs, and a closing 'Ngafunda ukuthi…' moral. He'll listen and reflect back the moral.",
    rwenRole: "Attentive listener — will say 'Cosi!' at pauses, will gently prompt 'kwabe sekuthini?' if you stall, and will summarise your moral back to you at the end.",
    successCriteria: "User opened with 'Kwasukasukela', used at least 3 nga- verbs (e.g., ngavuka/ngahamba/ngabona), used at least 2 sequence connectors, and delivered a 'Ngafunda ukuthi…' moral.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
