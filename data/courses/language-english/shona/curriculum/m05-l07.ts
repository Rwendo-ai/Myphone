import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07-friends',
  module: 5,
  lesson: 7,
  title: 'Friends as family — Shamwari',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Shamwari dzepedyo dzinogona kuva sehama. MuChiNgezi: 'best friend', 'close friends', 'like family'. Ano ndoo magic words ekutaura nezve vanhu vauchenjeri kunge mhuri kunyange vasiriiyo.",
    culturalNote: "MuChiShona, 'shamwari yepamoyo' inotaura runako rweshamwari iyo — anokuziva, anokuda, kunge hama. MuChiNgezi, 'best friend' inoshanda asi 'like family' (sehama) ndiyo idiom ye chido. Kana uchida kupa shamwari uremu hwakareba muChiNgezi, 'They're like family to me' inotakura zvauri kuda kutaura. Pfungwa imwe chete neChiShona — mashoko akasiyana.",
  },

  chunks: [
    {
      id: 'best_friend',
      target: 'Best friend',
      native: 'Shamwari yepamoyo',
      literal: 'friend of-the-heart',
      emoji: '🤝',
      phonetic: 'BEST-frend',
      audioRef: null,
    },
    {
      id: 'close_friends',
      target: 'Close friends',
      native: 'Shamwari dzepedyo',
      literal: 'friends of-near',
      emoji: '👯',
      phonetic: 'KLOHS-frends',
      audioRef: null,
    },
    {
      id: 'like_family',
      target: 'Like family',
      native: 'Sehama',
      literal: 'like family',
      emoji: '💞',
      phonetic: 'LAYK FAM-uh-lee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Idiomatic family — \"like family\"',
    explanation: "MuChiNgezi, 'like' inoshandiswa pakuenzanisa: 'A is like B' = A iri sezvakaita B. Kuti utaure kuti shamwari yako yakaita semhuri, unoti 'She's like family to me' kana 'They're like a brother to me'. Cherechedza: pasina 'a' / 'an' — 'like family' (general, no article).",
    examples: [
      { target: 'My best friend',              native: 'Shamwari yangu yepamoyo' },
      { target: "She's like a sister to me.", native: "Akaita sehanzvadzi kwandiri." },
      { target: 'They\'re like family.',         native: 'Vakaita sehama.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Best friend',     right: 'Shamwari yepamoyo' },
        { left: 'Close friends',   right: 'Shamwari dzepedyo' },
        { left: 'Like family',     right: 'Sehama' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Tendai ishamwari yangu yepamoyo kubvira kuchikoro.',
      correct: ['Tendai is my best friend from school.', 'Tendai is my best friend from school', 'tendai is my best friend from school.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutaura kushamwari nyowani nezve mumwe',
      prompt: 'Akaita sehanzvadzi kwandiri.',
      correct: ["She's like a sister to me.", 'She is like a sister to me.', "She's like a sister to me"],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "We have been friends for ten years"',
      words: ['for', 'have', 'We', 'years.', 'been', 'ten', 'friends'],
      correct: ['We', 'have', 'been', 'friends', 'for', 'ten', 'years.'],
      translation: 'Tave shamwari kwemakore gumi',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — idiom yeChiNgezi',
      sentence: "Chipo isn't related to me, but she's _____ family.",
      options: ['as', 'like', 'same'],
      correct: 'like',
      context: "'Like' ndiyo idiom yakanaka pakuenzanisa: 'like family', 'like a sister'. 'As family' inoshanda asi haisi nyore. 'Same family' yakanganisa.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "You're catching up with a friend you haven't seen in five years. How do you express how much you've missed them?",
      options: [
        { text: "I've missed you — you're like family to me.", correct: true },
        { text: "I miss. You family same.",                      correct: false },
        { text: "Suwa for you. Family.",                          correct: false },
      ],
      explanation: "'I've missed you' (present perfect — uneneoshandura nguva yakapfuura kusvika nhasi) ne 'you're like family to me' zvinoshanda pamwe — chido chiri muonekwa.",
    },
  ],

  rwenDialogue: {
    intro: "Wasangana neshamwari yawakapedza nayo chikoro yekale — makore akawanda kubvira pamakapedzisira kuonana. Akafara pakuona iwe.",
    lines: [
      { speaker: 'npc', target: "Oh my word — it's been forever! How are you?", native: 'Kasika — yava nguva refu! Wadii?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm well — and I've missed you so much. You know you're like a sister to me.", native: 'Ndiri zvakanaka — uye ndakusuwa zvikuru. Unozviziva kuti wakaita sehanzvadzi kwandiri.', correct: true, feedback: "Wakwanisa — 'I've missed you' inotakura nguva yakapfuura, uye 'like a sister' inoratidza chido chinochena. Wakawanikidza shamwari yakanaka pamupengo." },
          { target: "Good. Long time.",                                                                native: 'Zvakanaka. Nguva refu.',                                                                       correct: false, feedback: "Pfupi zvikuru — shamwari iri kuda chido. Wedzera 'I've missed you' kana 'It's so good to see you'." },
          { target: "Ndakusuwa zvikuru.",                                                              native: 'Ndakusuwa zvikuru.',                                                                            correct: false, feedback: "ChiShona chete — kana shamwari yako iri ku ChiNgezi, shandura: 'I've missed you so much.'" },
        ],
      },
      { speaker: 'npc', target: "Same here — you're family to me, you know that.", native: 'Neni futi — uri sehama kwandiri, unozviziva.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Idiom ye 'like family' yakatakura pfungwa yedu yeshamwari yepamoyo — kunyange muChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'My best friend (in English)',  correct: ['My best friend', 'my best friend'] },
      { prompt: "She's like family (in English)", correct: ["She's like family", 'She is like family', "She's like family.", 'She is like family.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Sarudza shamwari yepamoyo. Edzana kunyora chirevo cheChiNgezi: 'My best friend is [name]. We've been friends for [number] years. He/She is like a brother/sister to me.' Verenga muromo.",
    rwenSignoff: "Mangwana — zviito zvepamhuri (visit, call, miss).",
  },

  phase8: {
    scenario: "You bump into a school friend you haven't seen in many years. Catch up in English — how life has been, family, work — and express that they're still like family to you.",
    rwenRole: "Rumbi, your old school friend, also Shona-speaking but you're practising English together. Warm, asks 'Are you married?', 'Where are you living?', 'Do you remember Mr. Chiweshe?'",
    successCriteria: "User uses 'best friend', 'old friend', or 'like family / like a sister/brother' at least once. Asks the friend at least one return question (not just answering). Uses present perfect once: 'I've missed you' or 'It's been [time]'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
