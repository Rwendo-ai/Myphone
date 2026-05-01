import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l02-numbers-20-100',
  module: 6,
  lesson: 2,
  title: 'Numbers 11-100 — Eleven to One Hundred',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Iye zvino tinokwidza — 11-100. ChiNgezi chine pattern yakareruka kana wagona kupinda nayo: 'twenty, thirty, forty...' uye ukabatanidza nhamba pakati 'twenty-five, forty-seven'.",
    culturalNote: "MuChiShona unoti 'makumi maviri nemashanu' (literally: tens-two-and-five) = 25. MuChiNgezi unobata pakati pe-tens ne-units chete ne-hyphen: 'twenty-five'. Pattern yakareruka — wakatobata 1-9, iye zvino unowedzera 'twenty', 'thirty', 'forty' kuti ukwanise kusvika 100. Cherechedza: 'eleven, twelve, thirteen' anosiyana zvishoma — chete dzidza idzi.",
  },

  chunks: [
    {
      id: 'eleven_nineteen',
      target: 'Eleven, twelve, thirteen, fourteen, fifteen',
      native: '11, 12, 13, 14, 15',
      literal: 'Gumi neimwe, gumi nembiri, gumi nenhatu...',
      emoji: '1️⃣2️⃣',
      phonetic: 'ee-LEH-vn, twelv, THUR-teen, FOR-teen, FIF-teen',
      audioRef: null,
    },
    {
      id: 'tens',
      target: 'Twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety',
      native: '20, 30, 40, 50, 60, 70, 80, 90',
      literal: 'Makumi maviri, makumi matatu, makumi mana...',
      emoji: '🔢',
      phonetic: 'TWEN-tee, THUR-tee, FOR-tee, FIF-tee...',
      audioRef: null,
    },
    {
      id: 'one_hundred',
      target: 'One hundred',
      native: 'Zana',
      literal: 'One hundred',
      emoji: '💯',
      phonetic: 'wun-HUN-dred',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tens + units pattern',
    explanation: "Kuumba nhamba pakati pe-tens: bata izwi re-tens (twenty, thirty), wedzera hyphen, wozopedzisa ne-unit (one to nine). Mhuri yacho yose: '21' = 'twenty-one', '47' = 'forty-seven', '99' = 'ninety-nine'. Cherechedza: 'thirteen' (13) i-different ku 'thirty' (30) — VeryEnglish trick yakajairika.",
    examples: [
      { target: 'Twenty-five',   native: 'Makumi maviri nemashanu' },
      { target: 'Forty-seven',   native: 'Makumi mana nenomwe' },
      { target: 'Ninety-nine',   native: 'Makumi mapfumbamwe nepfumbamwe' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana manhamba',
      pairs: [
        { left: 'Twelve',     right: '12' },
        { left: 'Thirty',     right: '30' },
        { left: 'Fifty-five', right: '55' },
        { left: 'One hundred', right: '100' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Makumi matatu nematatu (33)',
      correct: ['Thirty-three', 'thirty-three', 'Thirty three'],
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa pattern ye-tens',
      sentence: 'Twenty, thirty, ____, fifty, sixty.',
      options: ['fourty', 'forty', 'fortie'],
      correct: 'forty',
      context: '40 = "forty" (cherechedza — hapana "u": kwete "fourty").',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo — uri kupa nhamba yefoni',
      words: ['is', 'My', 'seven', 'six', 'two', 'eight', 'three', 'number'],
      correct: ['My', 'number', 'is', 'seven', 'six', 'eight', 'two', 'three'],
      translation: 'Nhamba yangu i-7-6-8-2-3.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndine makore makumi maviri nemashanu (25)',
      correct: ["I am twenty-five years old", "I'm twenty-five", "I am twenty-five", "I'm twenty-five years old"],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Zana (100)',
      correct: ['One hundred', 'one hundred', 'A hundred', 'a hundred'],
    },
  ],

  rwenDialogue: {
    intro: 'Wasangana neshamwari itsva pa-Harare cafe. Anokumbira nhamba yako yefoni kuti akusenderere meseji.',
    lines: [
      { speaker: 'npc', target: "What's your phone number?", native: 'Iyi nhamba yako yefoni?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's seventy-seven, four hundred, ninety-six, twenty-three.",   native: '0-77-400-96-23',    correct: true,  feedback: 'Wakwanisa — wakatakura ma-tens nezvana zvakanaka. Iyi inzira yakajairika yekutaura nhamba yefoni muChiNgezi.' },
          { target: "Seven seven four nine six two three.",                          native: '7-7-4-9-6-2-3',      correct: false, feedback: 'Iri inzira inoshanda asi pakati pevanhu vechiAmerica zvinotaurwa zvachose ne-grouping ye-tens — yedza zvakare.' },
          { target: "My number.",                                                     native: 'Nhamba yangu.',     correct: false, feedback: 'Hauna kupa nhamba — taura digit dzake.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakwanisa kupa ma-tens ne-hundreds. Iye zvino unogona kupa nhamba yako yefoni kumumwe munhu wese anotaura ChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Forty-two (in English)', correct: ['Forty-two', 'forty-two', 'Forty two', 'forty two'] },
      { prompt: 'Thirteen (kwete thirty!) (in English)', correct: ['Thirteen', 'thirteen'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: 'Taura nhamba yako yefoni neChiNgezi kakati katatu nhasi — kunyange uchizvitaurira pakati pemoyo. Cherechedza ma-tens nemarwadzo ako: 25, 47, 89.',
    rwenSignoff: "Nhamba yefoni ndiyo passport yedu yenyika ino. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You met an English-speaking expat at a cafe in Avondale and she wants your phone number to invite you to a hike on Saturday. Exchange numbers and ages — say your age and ask hers.",
    rwenRole: "Sarah, 32, a British expat working at the embassy. Friendly, asks follow-up questions, will share her own number back.",
    successCriteria: "User says their phone number using English numbers (combined as tens where natural — e.g., 'seventy-seven, four hundred...'), states their age in English, and asks for Sarah's age or number back.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
