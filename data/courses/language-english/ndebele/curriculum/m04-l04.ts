import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-eat-drink-sleep',
  module: 4,
  lesson: 4,
  title: 'To eat / drink / sleep — present tense',
  estimatedMinutes: 6,
  xpReward: 35,

  hook: {
    rwenLine: "EsiNgisini i-verb iyaguquka kancane ngokwabantu. 'I eat' kodwa 'she eats' (yengeza -s). EsiNdebeleni kuyenzeka njengento eyodwa ('ngiyadla' / 'uyadla'), kodwa esiNgisini lokho -s ku-third person yi-rule onge phelile.",
    culturalNote: "Le-rule (he/she/it eats — faka -s) yiyo ezakwehlelisa sika-Ndebele speakers nxa befika eUK. Awusoze uphuthwe ngempela ngokuyitshiya, kodwa abantu bazakwazi masinya ukuthi awusiye native speaker. Khumbula: 'I eat, you eat, we eat, they eat' — kungenangenelo. Kodwa 'he eats, she eats, it eats' — faka -s. Lapho uxoxa ngosuku oluvamileyo lwakho ('I eat breakfast at 7'), kufuneka uphole le-rule.",
  },

  chunks: [
    {
      id: 'eat',
      target: 'I eat',
      native: 'Ngiyadla',
      literal: 'present, first person',
      emoji: '🍽️',
      phonetic: 'AHY EET',
      audioRef: null,
    },
    {
      id: 'drink',
      target: 'I drink',
      native: 'Ngiyanatha',
      literal: 'present, first person',
      emoji: '🥤',
      phonetic: 'AHY DRINK',
      audioRef: null,
    },
    {
      id: 'sleep',
      target: 'I sleep',
      native: 'Ngiyalala',
      literal: 'present, first person',
      emoji: '😴',
      phonetic: 'AHY SLEEP',
      audioRef: null,
    },
    {
      id: 'she_eats',
      target: 'She eats',
      native: 'Uyadla (owesifazana)',
      literal: 'third person — note the -s!',
      emoji: '👩',
      phonetic: 'SHEE EETS',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Present tense: he/she/it + verb-s",
    explanation: "I-rule yelula: 'I/you/we/they' = i-verb iqobo (eat, drink, sleep). 'He/she/it' = i-verb + s (eats, drinks, sleeps). Lapho uchaza umsebenzi wakho onsuku zonke kumbe abantu, le-rule iyasebenza njalo. Akukho 'she eat' — kuyazwakala kungafundisiswanga.",
    examples: [
      { target: 'I eat breakfast at 7am',           native: 'Ngidla i-breakfast nge-7 ekuseni' },
      { target: 'She eats lunch at noon',           native: 'Uyadla i-lunch emini (faka -s ku "eats"!)' },
      { target: 'They drink tea every morning',     native: 'Banatha i-tiye ekuseni' },
      { target: 'He sleeps eight hours a night',    native: 'Ulala amahora ayisitshiyagalombili (-s ku "sleeps")' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Faka i-form eqondileyo ye-verb",
      sentence: 'My sister _____ rice every day.',
      options: ['eats', 'eat', 'eating'],
      correct: 'eats',
      context: '"My sister" = third person (she) — faka -s: "eats". "She eats rice" hatshi "she eat".',
    },
    {
      type: 'fill_blank',
      instruction: "Faka i-form eqondileyo",
      sentence: 'I _____ tea in the morning.',
      options: ['drink', 'drinks', 'drinking'],
      correct: 'drink',
      context: '"I" = first person — i-verb iqobo (drink). Akusekho -s ku-"I".',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (third person — singular)',
      prompt: 'Uyalala (he sleeps)',
      correct: ['He sleeps', 'he sleeps'],
    },
    {
      type: 'build_sentence',
      instruction: "Akhipha umugqa: 'She drinks coffee'",
      words: ['coffee.', 'drinks', 'She'],
      correct: ['She', 'drinks', 'coffee.'],
      translation: 'Unatha i-khofi',
    },
    {
      type: 'multiple_choice',
      instruction: 'Iyiphi engalunganga?',
      question: 'Iyiphi le-sentence elalele kakhulu nge-rule ye-third person?',
      options: [
        { text: 'My brother eat at 8pm.', correct: true },
        { text: 'My brother eats at 8pm.', correct: false },
        { text: 'I eat at 8pm.', correct: false },
      ],
      explanation: '"My brother" = third person — kufanele kube "eats" (faka -s). I-sentence yokuqala iphuthelwe yi-s — yikho i-rule eyodwa enzima eyenza isiNdebele speakers iphethwe.',
    },
  ],

  rwenDialogue: {
    intro: "Wedlula u-job interview ku-care home eManchester. I-interviewer ufuna ukukwazi ku-routine yakho — kanjalo uyaphela ngomsebenzi.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your daily routine. When do you eat?",
        native: 'Ngitshele ngokuyasuku lwakho. Udla nini?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I eat breakfast at 7, lunch at 1, and dinner at 7pm.", native: 'Ngidla i-breakfast nge-7, i-lunch nge-1, kanye le-dinner nge-7 ebusuku.', correct: true, feedback: "Kahle kakhulu! 'I eat' (akukho -s ku-I)." },
          { target: "I eats breakfast at 7.", native: 'Ngidla i-breakfast nge-7.', correct: false, feedback: "Akukho -s ku-'I'. Faka -s kuphela ku-'he/she/it'. Yithi 'I eat' (no -s)." },
        ],
      },
      {
        speaker: 'npc',
        target: "And your husband — when does he eat?",
        native: 'Lo umyeni wakho — udla nini?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "He eats early, around 6pm.", native: 'Udla masinyane, sengathi nge-6 ebusuku.', correct: true, feedback: "Kahle kakhulu — 'he eats' (faka -s ku-third person)." },
          { target: "He eat early.", native: 'Udla masinyane.', correct: false, feedback: "Akhumbule i-rule: 'he/she/it' kufuneka i-verb + -s. 'He eats' hatshi 'he eat'. Le-rule yi-make-or-break esiNgisini." },
        ],
      },
      {
        speaker: 'npc',
        target: "And how many hours do you sleep?",
        native: 'Lalala amahora amangaki?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I sleep about seven hours every night.", native: 'Ngilala amahora ayisikhombisa ebusuku ngabunye.', correct: true, feedback: "Kuhle. Wenze konke kahle." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wamukelekile ku-shortlist! 'I eat' / 'he eats' — i-rule eyodwa kuphela ekupholisa esiNgisini.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngekhanda — gxila ku-third person -s.',
    prompts: [
      { prompt: '"He eats" (in English)',  correct: ['He eats', 'he eats'] },
      { prompt: '"I drink"',               correct: ['I drink', 'i drink'] },
      { prompt: '"She sleeps"',            correct: ['She sleeps', 'she sleeps'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhlanje',
    task: "Cabanga ngabantu abathathu obaziyo. Sho izinto ezintathu abazenzayo nsuku zonke ngesiNgisi: 'My mother eats sadza every day' (faka -s!), 'My friend drinks beer on weekends' (faka -s!), 'My brother sleeps late' (faka -s!). Khumbula: he/she/it = -s.",
    rwenSignoff: "Le -s incinyane — kodwa yiyo eyenza umehluko phakathi kwe-Ndebele English lekhulumeko ye-native. Sobonana kusasa.",
  },

  phase8: {
    scenario: "Care home job interview eManchester. I-interviewer ifuna ukwazi ku-routine yakho yokuphila — kuyini okudlayo, ulala nini, lokuthi imuli yakho ihambelana lawe njani. Kufanele ukhulumele ngabantu abathathu noma abane okuncedisa ku-third person -s rule.",
    rwenRole: "Helen, 50, care home recruiter, friendly but watching for English fluency — pays attention to verb endings.",
    successCriteria: "User uses present tense correctly for 'I' (no -s) and 'he/she' (with -s) — at least three correct 'he eats' / 'she sleeps' / 'they drink' style sentences without dropping the third-person -s.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
