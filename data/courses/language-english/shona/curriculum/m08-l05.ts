import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l05-wake-up',
  module: 8,
  lesson: 5,
  title: 'Daily routine — Morning',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Mangwanani! MuChiNgezi paunotsanangura zuva rako, nguva inotanga: 'at 6', 'at 7'. Wozonditsva unowedzera basa: 'I wake up', 'I take a shower', 'I eat breakfast'. Mashoko mashoma — asi tsika dzinochengetwa.",
    culturalNote: "MuShona unotaura 'ndinomuka na6' — apo 'na6' inotokwanira pakutsanangura nguva. MuChiNgezi unoda 'at' pamberi penguva: 'I wake up AT 6'. 'At' inoita kunge 'pa-' yeShona — asi yakajairika kupa preposition. Cherechedza zvakare 'wake UP' uye 'get UP' — verbs idzi dzine particle 'up' inova chikamu chichirevo.",
  },

  chunks: [
    {
      id: 'i_wake_up_at_6',
      target: 'I wake up at 6.',
      native: 'Ndinomuka na6.',
      literal: 'I wake up at 6',
      emoji: '⏰',
      phonetic: 'ay-WAYK-UP-at-SIX',
      audioRef: null,
    },
    {
      id: 'i_take_a_shower',
      target: 'I take a shower.',
      native: 'Ndinogeza.',
      literal: 'I take a shower',
      emoji: '🚿',
      phonetic: 'ay-TAYK-uh-SHOW-er',
      audioRef: null,
    },
    {
      id: 'i_eat_breakfast',
      target: 'I eat breakfast.',
      native: 'Ndinodya kudya kwemangwanani.',
      literal: 'I eat breakfast',
      emoji: '🍳',
      phonetic: 'ay-EET-BREK-fust',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time + verb — Morning routine',
    explanation: "Pakutsanangura zuva rako, hwirizana kuti: TIME + VERB + (object). 'At 6, I wake up.' kana 'I wake up at 6.' — zvose zvinoshanda. Pa-routine, shandisa simple present tense (I wake, I take, I eat) — kwete continuous (I'm waking). Iyi inonzi 'habitual present' — chinhu chaunoita zuva nezuva.",
    examples: [
      { target: 'I wake up at 6.',     native: 'Ndinomuka na6.' },
      { target: 'I take a shower.',    native: 'Ndinogeza.' },
      { target: 'I eat breakfast.',    native: 'Ndinodya kudya kwemangwanani.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'I wake up',    right: 'Ndinomuka' },
        { left: 'I take a shower', right: 'Ndinogeza' },
        { left: 'I eat breakfast', right: 'Ndinodya kudya kwemangwanani' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa preposition',
      sentence: 'I wake up _____ 7 every day.',
      options: ['at', 'on', 'in'],
      correct: 'at',
      context: "Nguva chaiyo (6, 7, 8) inoda 'at'. 'On' inoshanda pamazuva (on Monday). 'In' inoshanda pamazuva mahombe (in the morning).",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinomuka na6.',
      correct: ['I wake up at 6.', 'I wake up at 6', 'I wake up at six.', 'I get up at 6.', 'i wake up at 6.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinodya kudya kwemangwanani.',
      correct: ['I eat breakfast.', 'I eat breakfast', 'I have breakfast.', 'I have breakfast', 'i eat breakfast.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "Ndinogeza"',
      words: ['shower.', 'a', 'take', 'I'],
      correct: ['I', 'take', 'a', 'shower.'],
      translation: 'Ndinogeza',
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga zvinoitika mangwanani',
      words: ['breakfast.', 'I', 'wake', 'I', 'shower,', 'eat', 'a', 'I', 'up,', 'take'],
      correct: ['I', 'wake', 'up,', 'I', 'take', 'a', 'shower,', 'I', 'eat', 'breakfast.'],
      translation: 'Ndinomuka, ndinogeza, ndinodya kudya kwemangwanani.',
    },
  ],

  rwenDialogue: {
    intro: "Uri kugara muflat neflatmate yeChiNgezi muLondon. Anokubvunza nezve routine yako yemangwanani.",
    lines: [
      { speaker: 'npc', target: "What time do you usually get up?", native: 'Unowanzomuka inguva ipi?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6, take a shower, then eat breakfast around 6:30.", native: 'Ndinomuka na6, ndinogeza, ndozodya kudya kwemangwanani panenge 6:30.', correct: true, feedback: "Wakwanisa — wakahwirizana zvinhu zvitatu zvichishandisa simple present, uye wakaisa 'at 6' nemazvo." },
          { target: "Six. Shower. Eat.", native: 'Tanhatu. Geza. Dya.', correct: false, feedback: "Zvitatu zvinokosha asi unoda kuvaka chirevo: 'I wake up AT 6', 'I TAKE a shower', 'I EAT breakfast'." },
        ],
      },
      { speaker: 'npc', target: "Wow, that's early! I wake up at 8.", native: 'Maiwe, kwakuru! Ini ndinomuka na8.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'At 6' kwete '6 chete'. 'Take a shower' kwete 'shower' chete. Mashoko maduku anokosha. Mangwana — work day.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'I wake up at 6 (in English)', correct: ['I wake up at 6', 'I wake up at 6.', 'I wake up at six.', 'i wake up at 6.'] },
      { prompt: 'I eat breakfast (in English)', correct: ['I eat breakfast', 'I eat breakfast.', 'I have breakfast.', 'i eat breakfast.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Mangwana mangwanani, paunomuka, taura kuti '(I wake up at __)' muChiNgezi. Wozonditsva, wedzera 'I take a shower' uye 'I eat breakfast'. Tatu dzimwe — zvinotanga zuva rako muChiNgezi.",
    rwenSignoff: "Mangwana — work day. Famba zvakanaka.",
  },

  phase8: {
    scenario: "Uri kuLondon, uchigara muflat neflatmate yeChiNgezi. Mangwanani uno, ari kukubvunza nezve schedule yako — uchada kushandisa internet/bafa nguva imwe chete here. Tsanangura morning routine yako.",
    rwenRole: "Emma, 27, designer, anogara munhandare imwe chete newe. Akanyatsoda kushamwaridzana — anoda kuziva nguva yauri kushandisa shower, kitchen, wifi.",
    successCriteria: "Mudzidzi anotsanangura morning routine — kuti anomuka nguva ipi (with 'at'), zvaanoita (wake up, take a shower, eat breakfast), uye anosvika pa-arrangement neflatmate.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
