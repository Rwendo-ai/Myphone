import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-doctor',
  module: 10,
  lesson: 6,
  title: 'At the Doctor — Pa chiremba',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Lesson yapfuura wakatanga — nhasi tinopedza. Pa follow-up appointment, chiremba achabvunza: 'How long?', 'How bad?', 'What helps?'. Mhinduro: 'It hurts here', 'For three days', 'Take this medicine'. Mashoko mazhinji okushandisa, asi structure inoreruka — duration + intensity + treatment.",
    culturalNote: "MuChiShona, pakubvunzwa nezvenguva yekurwara, unenge unotaura 'Kwave nemazuva matatu' — pasina 'for'. MuChiNgezi 'for' inodikanwa: 'for three days', 'for a week'. Cherechedza: 'It's been three days' = 'Kwave nemazuva matatu' — pattern yakafanana, mashoko akasiyana. Nokunzwa zvirinani kunaiwa structure yakaringana — chiremba achanzwisisa zvakanaka.",
  },

  chunks: [
    {
      id: 'hurts_here',
      target: 'It hurts here',
      native: 'Inorwadza pano',
      literal: 'it-hurts here',
      emoji: '👉',
      phonetic: 'it-HERTS-HEER',
      audioRef: null,
    },
    {
      id: 'for_three_days',
      target: 'For three days',
      native: 'Kwemazuva matatu',
      literal: 'for days three',
      emoji: '📅',
      phonetic: 'fer-THREE-DAYZ',
      audioRef: null,
    },
    {
      id: 'take_medicine',
      target: 'Take this medicine',
      native: 'Tora mushonga uyu',
      literal: 'take this medicine',
      emoji: '💊',
      phonetic: 'TAYK-this-MED-uh-sen',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Duration + intensity at the doctor',
    explanation: "Pa chiremba, mhinduro yakajeka inoshanda kupfuura nyaya yakareba. 'For + nguva' inotsanangura kuti chinhu chiri kuenderera nguva yakareba sei: 'for three days', 'for two weeks', 'for a month'. 'It's been + nguva' inoshanda zvakafanana: 'It's been three days'. Pakurwadza, shandisa scale: 'a little', 'quite bad', 'very painful'. Pa drugs / instructions: 'Take this medicine + frequency': 'Take this twice a day', 'Take one before meals'.",
    examples: [
      { target: 'It hurts here — for three days now.',         native: 'Inorwadza pano — kwave nemazuva matatu.' },
      { target: "It's quite bad in the morning.",                 native: 'Inorwadza zvikuru mangwanani.' },
      { target: 'Take this medicine twice a day, after meals.',   native: 'Tora mushonga uyu kaviri pazuva, mushure mekudya.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'It hurts here',          right: 'Inorwadza pano' },
        { left: 'For three days',          right: 'Kwemazuva matatu' },
        { left: 'Take this medicine',      right: 'Tora mushonga uyu' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kupindura mubvunzo wechiremba "How long?"',
      prompt: 'Kwave nemazuva matatu.',
      correct: ["It's been three days.", 'It has been three days.', 'For three days.', "it's been three days.", 'For three days now.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Inorwadza pano — zvikuru mangwanani.',
      correct: ['It hurts here — quite bad in the morning.', 'It hurts here — very bad in the morning.', 'It hurts here, especially in the morning.', 'it hurts here — quite bad in the morning.'],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka chirevo: 'Take this medicine twice a day'",
      words: ['day.', 'medicine', 'a', 'this', 'twice', 'Take'],
      correct: ['Take', 'this', 'medicine', 'twice', 'a', 'day.'],
      translation: 'Tora mushonga uyu kaviri pazuva',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri kupindura "How long has this been going on?"',
      sentence: "It's been _____ three days.",
      options: ['for', 'since', 'about'],
      correct: 'for',
      context: "'For + duration' (kwemazuva, kwavhiki). 'Since + start point' (kubva Mugovera). Yose miviri inoshanda — asi 'for three days' = duration, 'since Saturday' = chinguva chakatangira.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza chinotaura zvakanaka',
      question: "Doctor: 'How bad is the pain on a scale of 1 to 10?' What's a clear answer?",
      options: [
        { text: "About a 6 — it's quite bad in the morning, better at night.", correct: true },
        { text: "Bad.",                                                            correct: false },
        { text: "Yes.",                                                              correct: false },
      ],
      explanation: "Chiremba ari kubvunza scale (1-10) — peura nhamba ('about a 6'), wedzera tsanangudzo ('quite bad in the morning, better at night'). Iyi i ChiNgezi cheGP appointment.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa follow-up GP appointment muLondon. Wakatangira lesson m10-l04 — wakapinda kunyora bambo musoro. Wadzoka mazuva masere apfuura — chiremba ari kuda kunzwa kuti chinhu chichiri kufamba sei.",
    lines: [
      { speaker: 'npc', target: "Welcome back. How's the headache — better, worse, the same?", native: 'Wadzoka, mauya. Bambo musoro — yakanaka, yawedzera, kana yakangofanana?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A bit better, but it still hurts here — for eight more days now. About a 5 on a scale of 10. The medicine helps in the morning.", native: 'Zvishoma yakanaka, asi inorwadza pano — kwave nemamwe mazuva masere. Pamusoro pe 5 pa scale ye 10. Mushonga unobatsira mangwanani.', correct: true, feedback: "Yatova nhau yakwana — duration ('eight more days'), location ('here'), intensity ('5 of 10'), uye chiri kushanda ('medicine helps mornings'). Chiremba ane picture yose." },
          { target: "Same.", native: 'Yakangofanana.', correct: false, feedback: "Pfupi — wedzera duration ne intensity: 'About the same — for eight more days now, around a 5.'" },
          { target: "It hurts.", native: 'Inorwadza.', correct: false, feedback: "Hapana picture — taura papi, kwenguva yakareba sei, uye iri sei: 'It still hurts here, for eight more days, about a 5.'" },
        ],
      },
      { speaker: 'npc', target: "Okay — let's adjust. Take this new medicine twice a day, after meals. Come back if it gets worse.", native: 'Zvakanaka — ngatishanduke. Tora mushonga mutsva uyu kaviri pazuva, mushure mekudya. Dzoka kana ichiwedzera.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Twice a day, after meals — got it. Thank you, doctor.", native: 'Kaviri pazuva, mushure mekudya — ndanzwa. Ndatenda, chiremba.', correct: true, feedback: "Wakwanisa — wadzokorora mirairo (kuratidza wanzwa), uye watenda. Iyi yakaringana." },
          { target: "Okay.", native: 'Zvakanaka.', correct: false, feedback: "Pfupi — dzokorora kuti chiremba aone wanzwa: 'Twice a day, after meals — got it.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! 'For + duration' + 'It hurts here' + 'on a scale of' = chombo che chiremba chakakwana. Wakapindura, wakabvunza, wakadzokorora — hutsika hwese hwepa GP appointment muChiNgezi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'For three days (in English)',     correct: ['For three days', 'for three days', 'For three days.', 'for three days.'] },
      { prompt: 'Take this medicine (in English)', correct: ['Take this medicine', 'take this medicine', 'Take this medicine.', 'take this medicine.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Fungidzira waitora chiitiko chimwe chakuitika — kana chero chirimo. Nyora pa phone notes mhinduro mbiri muChiNgezi: (1) 'It hurts here — for ___ days now.' (2) 'About a ___ on a scale of 10.' Hauchadi chiremba — unodzidzisa muviri wako kufamba neChiNgezi.",
    rwenSignoff: "Mangwana — kutaura nyaya yapakare. 'When I was a child' — chombo chakanaka.",
  },

  phase8: {
    scenario: "Follow-up GP visit in London. You first came in 8 days ago with a headache (m10-l04 scenario). Today the doctor wants an update: better/worse/same, on a 1-10 scale, what helps, what doesn't. Then they'll prescribe something new.",
    rwenRole: "Dr. Patel, 50, same NHS GP from m10-l04. Friendly, remembers you. Will ask about pain level, frequency, what makes it better.",
    successCriteria: "User uses 'For + duration' OR 'It's been + duration'. Gives a 1-10 pain rating. Uses 'It hurts here' or names a body part. Repeats the new prescription back ('twice a day, after meals'). Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
