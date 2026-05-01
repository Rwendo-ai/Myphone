import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l08-emergency-travel',
  module: 9,
  lesson: 8,
  title: 'Lost & Travel emergencies — Ndarasika',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Pamwe nguva, zvinhu zvinopinda mukutya. Wapotsa bhazi rako; wakanga wakaisa bhegi rako pa-train wakarikanganwa; wakarasika muguta usina mari yedata. Mashoko aya — 'I'm lost', 'I missed my bus', 'I lost my bag' — anokuponesa.",
    culturalNote: "MuZimbabwe, vagari vatinosangana navo vanonzwira tsitsi pakazara — vanomira navo. MuLondon kana muNYC, anhu vanomira pamabasa — asi kana wati pamberi 'Excuse me, I need help — I'm lost' chete chete, vanozotanga kunzwira tsitsi. Wedzera 'please' — chinokupa simba pakubvunza pasina kuratidza weakness.",
  },

  chunks: [
    {
      id: 'im_lost',
      target: "I'm lost.",
      native: 'Ndarasika.',
      literal: 'I-am lost.',
      emoji: '😰',
      phonetic: 'aym-LOST',
      audioRef: null,
    },
    {
      id: 'i_missed_my_bus',
      target: 'I missed my bus.',
      native: 'Ndapotsa bhazi rangu.',
      literal: 'I missed my bus.',
      emoji: '🚌',
      phonetic: 'ay-MIST-my-BUS',
      audioRef: null,
    },
    {
      id: 'i_lost_my_bag',
      target: 'I lost my bag.',
      native: 'Ndarasa bhegi rangu.',
      literal: 'I lost my bag.',
      emoji: '👜',
      phonetic: 'ay-LOST-my-BAG',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Crisis travel — past tense',
    explanation: "Mashoko ekudambudzika anoshandisa past tense (verb yakapfuura): 'I missed' (ndapotsa), 'I lost' (ndarasa), 'I forgot' (ndakanganwa). Cherechedza: 'I'm lost' = 'Ndiri kunzvimbo isingazivikanwe' — present tense, asi 'I lost ___' = 'Ndakarasa ___' — past tense. Chiri pamwe nemubvunzo: 'Could you help me?' inogona kushandiswa kuti urega kunyaradzwa.",
    examples: [
      { target: "I'm lost.",         native: 'Ndarasika.' },
      { target: 'I missed my bus.', native: 'Ndapotsa bhazi rangu.' },
      { target: 'I lost my bag.',    native: 'Ndarasa bhegi rangu.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko ekudambudzika',
      pairs: [
        { left: "I'm lost",         right: 'Ndarasika' },
        { left: 'I missed my bus', right: 'Ndapotsa bhazi rangu' },
        { left: 'I lost my bag',    right: 'Ndarasa bhegi rangu' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kunzvimbo isingazivikanwe',
      prompt: 'Ndarasika.',
      correct: [
        "I'm lost.",
        "I am lost.",
        "I'm lost",
        "i'm lost.",
        "I think I'm lost.",
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — bhazi raenda usati wasvika',
      prompt: 'Ndapotsa bhazi rangu.',
      correct: [
        'I missed my bus.',
        'I missed my bus',
        "I've missed my bus.",
        'i missed my bus.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — pa-tube, bhegi rakasara muchitima',
      prompt: 'Ndarasa bhegi rangu pachitima.',
      correct: [
        'I lost my bag on the train.',
        "I've lost my bag on the train.",
        'I lost my bag in the train.',
        'I left my bag on the train.',
        'i lost my bag on the train.',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga — uri kukumbira rubatsiro',
      words: ['help', 'Could', 'me', 'you'],
      correct: ['Could', 'you', 'help', 'me'],
      translation: 'Mungandibatsire here?',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — pakuratidza dambudziko',
      sentence: 'Excuse me, I ____ my passport!',
      options: ['lost', 'have', 'am'],
      correct: 'lost',
      context: "'I lost ___' = 'Ndarasa ___'. Past tense — chinhu chakapera kuitika.",
    },
  ],

  rwenDialogue: {
    intro: "Wakapotsa Megabus yako pa-Victoria Coach Station London. Wakanga wakananga Manchester. Bvunza staff member.",
    lines: [
      { speaker: 'npc', target: "You alright? You look a bit panicked.", native: 'Wakanaka here? Unoita kunge wakatya.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Excuse me, I missed my bus to Manchester. Could you help me?", native: 'Tichikumbira, ndapotsa bhazi rangu kuenda Manchester. Mungandibatsire here?', correct: true,  feedback: 'Wakwanisa — wakaisa "Excuse me", wakatsanangura dambudziko, wakakumbira rubatsiro pamutsetse umwe chete.' },
          { target: "Bus gone.",                                                              native: 'Bhazi raenda.',                                                                correct: false, feedback: 'Pfupi zvakanyanya — anozoda kuziva uri kuda kuitwa sei.' },
          { target: "Manchester.",                                                              native: 'Manchester.',                                                                  correct: false, feedback: "Wedzera kuti chii chaitika — 'I missed my bus to Manchester'." },
        ],
      },
      { speaker: 'npc', target: "Oh no — there's another one in 90 minutes from gate 7. £15. Want me to book it?", native: 'Aa nhamo — pane rimwe pamaminitsi makumi mapfumbamwe pa-gate 7. £15. Ndokutengera here?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Pakuita dambudziko, mubvunzo wakanaka unokuponesa. 'I missed my bus' + 'Could you help me?' — chiratidzo chinokwanisira kose.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: "I'm lost (in English)",         correct: ["I'm lost", "I'm lost.", 'I am lost.', "i'm lost."] },
      { prompt: 'I missed my bus (in English)', correct: ['I missed my bus', 'I missed my bus.', "I've missed my bus.", 'i missed my bus.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira matatu mafungidziro emadambudziko: (1) Wakarasika. (2) Wapotsa bhazi. (3) Wakarasa bhegi. Itira mhinduro pamuromo muChiNgezi: 'Excuse me, I'm lost. Could you help me?' kana kuti 'I missed my bus.' kana 'I lost my bag.'. Pasina kutarisa kumashure.",
    rwenSignoff: "Munhu anokwanisa kutaura dambudziko anokwanisa kurigadzirisa. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're at Victoria Coach Station in London. Your Megabus to Manchester left 5 minutes ago — you missed it because the queue was confusing. You need to find a staff member, explain what happened, and find out your options.",
    rwenRole: "Tom, 50, station staff member. Sympathetic, knows the schedule, will offer the next bus or a different route. Speaks clear British English.",
    successCriteria: "User opens with 'Excuse me', uses 'I missed my bus to Manchester' (or similar), asks 'Could you help me?', understands the alternative offered, and thanks him.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
