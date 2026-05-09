import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l07',
  module: 6,
  lesson: 7,
  title: 'Ikhambi Lomuthi — Pharmacy and Medicine',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "isiNdebele has TWO words for medicine: 'umuthi' and 'ikhambi'. 'Umuthi' is the broad word — covers tablets, syrups, traditional remedies. 'Ikhambi' is more specifically a herbal remedy or tonic. Both are real medicine; both have their place.",
    culturalNote: "An 'inyanga' (traditional herbalist) prepares ikhambi from roots, bark, and leaves — and many Ndebele homes keep ikhambi alongside Western pharmaceuticals. It's not either/or. A grandmother might give you ikhambi for a cough AND tell you to take the panado the clinic prescribed. Respect both routes; question neither.",
  },

  chunks: [
    {
      id: 'umuthi',
      target: 'umuthi',
      native: 'medicine (general)',
      literal: 'um- (class 3) + uthi — tree, also medicine',
      emoji: '💊',
      phonetic: 'oom-OO-tee',
      audioRef: null,
    },
    {
      id: 'ikhambi',
      target: 'ikhambi',
      native: 'herbal remedy / tonic',
      literal: 'i- (class 5) + khambi',
      emoji: '🌿',
      phonetic: 'ee-KHAM-bee',
      audioRef: null,
    },
    {
      id: 'amaphilisi',
      target: 'amaphilisi',
      native: 'pills / tablets',
      literal: 'ama- (class 6 plural) + philisi (from "pill")',
      emoji: '💊',
      phonetic: 'ah-mah-pee-LEE-see',
      audioRef: null,
    },
    {
      id: 'ikhemisi',
      target: 'ikhemisi',
      native: 'pharmacy / chemist',
      literal: 'i- (class 5) + khemisi (loanword)',
      emoji: '🏪',
      phonetic: 'ee-keh-MEE-see',
      audioRef: null,
    },
    {
      id: 'ngifuna_umuthi',
      target: 'Ngifuna umuthi we...',
      native: 'I want medicine for ...',
      literal: 'Ngifuna + umuthi + we- (of) + [condition]',
      emoji: '🛒',
      phonetic: 'ngee-FOO-nah oom-OO-tee weh',
      audioRef: null,
    },
  ],

  pattern: {
    name: '"Medicine for X" — umuthi we[X]',
    explanation: "To ask for medicine for a specific thing, isiNdebele uses 'umuthi we-' (medicine of) + the condition. 'Umuthi wekhanda' = headache medicine (literally 'medicine of head'). 'Umuthi womkhuhlane' = flu medicine. The 'we-' becomes 'wo-' before vowel-starting words. At the ikhemisi, this pattern unlocks anything you need.",
    examples: [
      { target: 'Ngifuna umuthi wekhanda.', native: 'I want headache medicine.' },
      { target: 'Ngifuna umuthi womkhuhlane.', native: 'I want flu medicine.' },
      { target: 'Ngifuna ikhambi lokukhwehlela.', native: 'I want a remedy for coughing.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the medicine word to its meaning',
      pairs: [
        { left: 'umuthi', right: 'medicine (general)' },
        { left: 'ikhambi', right: 'herbal remedy / tonic' },
        { left: 'amaphilisi', right: 'pills / tablets' },
        { left: 'ikhemisi', right: 'pharmacy' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'I want headache medicine.',
      correct: ['Ngifuna umuthi wekhanda', 'Ngifuna umuthi wekhanda.', 'ngifuna umuthi wekhanda'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "I want flu medicine"',
      sentence: 'Ngifuna umuthi ____.',
      options: ['womkhuhlane', 'wekhanda', 'wesisu'],
      correct: 'womkhuhlane',
      context: 'Flu = umkhuhlane. "we-" + umkhuhlane → "womkhuhlane" (vowel fusion).',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right framing',
      question: 'Your auntie offers you ikhambi from her own herbs. What is the most respectful response if you intend to also take the clinic pills?',
      options: [
        { text: 'Ngiyabonga makhulu — ngizokuphuza.', correct: true },
        { text: 'Hayi, ngithanda umuthi wesilungu.', correct: false },
        { text: 'Angiwathandi amakhambi.', correct: false },
      ],
      explanation: "'Thank you very much — I'll drink it.' Refusing or dismissing ikhambi reads as rejecting her care. You can take both ikhambi and the clinic pills — most Ndebele households do exactly that.",
    },
  ],

  rwenDialogue: {
    intro: "You're at the ikhemisi (pharmacy) on Lobengula Street, Bulawayo. The pharmacist looks up.",
    lines: [
      {
        speaker: 'npc',
        target: 'Salibonani. Ngingakusiza?',
        native: 'Hello. Can I help you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salibonani. Ngifuna umuthi wekhanda.', native: 'Hello. I want headache medicine.', correct: true, feedback: "Greeting + the 'umuthi we-' pattern. He'll hand you panado or paracetamol." },
          { target: 'Pills.', native: '(English, no greeting)', correct: false, feedback: "Skipped greeting AND the language. Try 'Salibonani. Ngifuna umuthi wekhanda.'" },
          { target: 'Ngifuna ikhambi lokukhwehlela.', native: 'I want cough remedy.', correct: false, feedback: "Different request — but this is a pharmacy not an inyanga, and your headache is what hurts. Try the headache version." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yebo. Amaphilisi la — phuza amabili emini, amabili ebusuku.',
        native: 'Yes. These tablets — take two in the day, two at night.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga.', native: 'Thank you.', correct: true, feedback: "Clean close. You named the problem, got the medicine, paid your respects." },
          { target: 'How much?', native: '(English)', correct: false, feedback: "Try 'Kuyimalini?' or just 'Ngiyabonga' first then ask the price." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "'Umuthi we-' opens any pharmacy in Zimbabwe. Use it well.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'medicine (general)', correct: ['umuthi', 'Umuthi'] },
      { prompt: 'herbal remedy', correct: ['ikhambi', 'Ikhambi'] },
      { prompt: 'pharmacy', correct: ['ikhemisi', 'Ikhemisi'] },
      { prompt: 'I want headache medicine.', correct: ['Ngifuna umuthi wekhanda', 'Ngifuna umuthi wekhanda.', 'ngifuna umuthi wekhanda'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "List three things you might need medicine for. Build the sentence for each: 'Ngifuna umuthi we[X].' Say all three out loud, with the right vowel-fusion on 'we/wo'.",
    rwenSignoff: "Two healing traditions, one body. Sala kuhle.",
  },

  phase8: {
    scenario: "Your auntie in Bulawayo's Pumula suburb has prepared ikhambi for your stubborn cough. You're also planning to go to the ikhemisi for cough syrup. Navigate the conversation: thank her, accept her remedy, AND mention you'll get the syrup too — without dismissing either.",
    rwenRole: "Auntie MaNcube, late 60s, has been making this same ikhambi for 40 years. She is not threatened by Western medicine but she IS proud of her remedy.",
    successCriteria: "User accepts ikhambi with 'ngiyabonga' and warm framing, and mentions the ikhemisi visit without dismissing either tradition. Bonus if they ask her how to drink the ikhambi.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
