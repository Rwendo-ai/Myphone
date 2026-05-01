import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l05-body',
  module: 10,
  lesson: 5,
  title: 'Body Parts — Mitezo yemuviri',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Mitezo yemuviri inotaurwa zvakawanda — pa chiremba, pa physiotherapist, pa shamwari yakuvara. 'Head' (musoro), 'stomach' (dumbu), 'arm' (ruoko) — mashoma asi anosvika kure. Bridge: ChiShona ne ChiNgezi vose vanoshandisa 'My + body part hurts' / 'Ruoko rwangu rwakuvara' — structure yakafanana.",
    culturalNote: "Pa physiotherapist abroad, hauchadi kufamba neshoko mukati memuviri — unongoratidza nemuno wako uchidaidza zita. 'It hurts here' inoenderana ne kunongedza. Asi kuti ushandise mashoko anokunda kunongedza, dzidza mazita mazhinji. Iyi lesson inopa zvitatu zvinoshanda mazuva ose; ukashandisa zvose, makumi maviri akakomberedza muviri achauya zvichibva pamushini wakatevera.",
  },

  chunks: [
    {
      id: 'head',
      target: 'Head',
      native: 'Musoro',
      literal: 'head',
      emoji: '🗣️',
      phonetic: 'HED',
      audioRef: null,
    },
    {
      id: 'stomach',
      target: 'Stomach',
      native: 'Dumbu',
      literal: 'stomach',
      emoji: '🫃',
      phonetic: 'STUH-muk',
      audioRef: null,
    },
    {
      id: 'arm',
      target: 'Arm',
      native: 'Ruoko',
      literal: 'arm',
      emoji: '💪',
      phonetic: 'AHRM',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Body nouns + "My ___ hurts"',
    explanation: "Mitezo yemuviri muChiNgezi i nouns chete — pasina kushanduka. 'My head hurts' / 'My stomach hurts' / 'My arm hurts'. Cherechedza: pasina 's' pa 'hurt' kana muviri uri muumwe (singular). 'My head hurts' yakanaka, 'my head hurt' haitauriki. 'Right' / 'Left' inopinda pamberi pa body part: 'My right arm hurts', 'My left leg hurts'. Iyi pattern inoshanda kuvanachiremba ne kuphysiotherapist.",
    examples: [
      { target: 'My head hurts.',                                native: 'Musoro wangu unorwadza.' },
      { target: 'My stomach hurts after I eat.',                  native: 'Dumbu rangu rinorwadza mushure mekudya.' },
      { target: 'My right arm hurts when I lift.',                native: 'Ruoko rwangu rwekurudyi runorwadza pakusimudza.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mitezo yemuviri',
      pairs: [
        { left: 'Head',     right: 'Musoro' },
        { left: 'Stomach',  right: 'Dumbu' },
        { left: 'Arm',      right: 'Ruoko' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Musoro wangu unorwadza.',
      correct: ['My head hurts.', 'my head hurts.', 'My head hurts'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri pa physiotherapist',
      prompt: 'Ruoko rwangu rwekurudyi runorwadza pakusimudza.',
      correct: ['My right arm hurts when I lift.', 'My right arm hurts when I lift things.', 'My right arm hurts when lifting.', 'my right arm hurts when i lift.'],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka chirevo: 'My stomach hurts after I eat'",
      words: ['I', 'My', 'eat.', 'after', 'stomach', 'hurts'],
      correct: ['My', 'stomach', 'hurts', 'after', 'I', 'eat.'],
      translation: 'Dumbu rangu rinorwadza mushure mekudya',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kuratidza paphysiotherapist',
      sentence: "It hurts _____ — right at the top of my arm.",
      options: ['here', 'this', 'where'],
      correct: 'here',
      context: "'It hurts here' = inorwadza pano. Kunongedza + chirevo chinotsanangura — physio anonzwisisa pakarepo.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "You're at a physiotherapist abroad. Your right shoulder is the problem. What's most useful?",
      options: [
        { text: "It hurts here — my right shoulder. It started two weeks ago when I lifted a heavy box.", correct: true },
        { text: "Pain.",                                                                                            correct: false },
        { text: "Ruoko rwangu runorwadza.",                                                                          correct: false },
      ],
      explanation: "Physio anodikanira: (1) pari kurwadza, (2) zita rebody part, (3) chakatangisira, (4) chiri kuwedzera. ChiShona chete chinopa physio chete pasina kunzwisisa. Tsanangudzo iyi inopa zvose chiri zvine.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa physiotherapist muManchester. Wakuvara muruoko rwekurudyi vhiki rapfuura ukasimudza box yakarema — wakuda kubatsira.",
    lines: [
      { speaker: 'npc', target: "Hi, come in. So — where does it hurt? Show me.", native: 'Mhoro, pinda. Saka — kunorwadza papi? Ndiratidze.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It hurts here — right at the top of my arm. My right arm.", native: 'Inorwadza pano — pamusoro pe ruoko rwangu. Ruoko rwekurudyi.', correct: true, feedback: "Wakwanisa — 'it hurts here' (kunongedza), 'right at the top' (pakanyatsorwadza), 'my right arm' (kuhana yose). Physio ari kuona pakarepo." },
          { target: "Pain here.", native: 'Kurwadza pano.', correct: false, feedback: "Yakapfupika — wedzera 'It hurts here — my right arm'. ChiNgezi chinoda chirevo chizere kunyange chichienda kupfupi." },
          { target: "Pano.", native: 'Pano.', correct: false, feedback: "ChiShona chete — taura 'It hurts here'." },
        ],
      },
      { speaker: 'npc', target: "When did this start? And does it hurt all day, or only sometimes?", native: 'Izvi zvakatanga riini? Inorwadza zuva rose, kana panguva dzimwe chete?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "It started two weeks ago when I lifted a heavy box. My arm hurts most when I reach up.", native: 'Zvakatanga vhiki maviri apfuura pandakasimudza box yakarema. Ruoko rwangu runorwadza zvikuru pakusvikira mberi.', correct: true, feedback: "Yakanyanyokwana — chakatangisa, riini, uye rinotanga riini. Physio ave ne picture yakajeka." },
          { target: "Two weeks. Heavy box.", native: 'Vhiki maviri. Box yakarema.', correct: false, feedback: "Mashoma asi haisi sentence — vaka chirevo: 'It started two weeks ago when I lifted a heavy box.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'It hurts here' + zita rebody part + chakatangisa = chitatu chinopa physio yose. Mitezo i nouns dzakareruka — 'head', 'arm', 'leg', 'back' — saka unogona kuvaka chero chirevo chero.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'My head hurts (in English)',     correct: ['My head hurts', 'my head hurts', 'My head hurts.', 'my head hurts.'] },
      { prompt: 'It hurts here (in English)',     correct: ['It hurts here', 'it hurts here', 'It hurts here.', 'it hurts here.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Mira pamberi pegirazi. Nongedza kumitezo mishanu — head, arm, stomach, leg, back — udaidze zita ravo muChiNgezi: 'This is my head. This is my arm.' Mira pakanaka, dzokorora maviri kana matatu. Muviri wako unozadzika muChiNgezi.",
    rwenSignoff: "Mangwana — kudzokera kuchiremba ne nyaya yakareba. Wapota uchanyatsotaura.",
  },

  phase8: {
    scenario: "You're at a Manchester physiotherapist. Your right shoulder/arm has been hurting for two weeks since lifting a heavy box. The physio asks where, when it started, and what makes it worse. Point and name body parts, describe the trigger.",
    rwenRole: "Liam, 35, NHS physio. Hands-on, asks lots of 'where exactly' and 'when does it hurt most' questions. Will gently move your arm.",
    successCriteria: "User uses 'It hurts here' and at least two body part names ('arm', 'shoulder', 'back', 'neck'). Uses 'My ___ hurts when I ___' structure. Mentions when it started ('two weeks ago', 'last Saturday'). Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
