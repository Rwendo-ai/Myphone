import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-past-stories',
  module: 10,
  lesson: 7,
  title: 'Telling past stories — Kutaura nyaya yapakare',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Nyaya inotanga ne 'When I was a child...' kana 'When I was young...'. Iyi inotaura kuti uri kuendesa muteereri kunguva yakapfuura. Wedzera chinhu chinosvora — 'I'll never forget...' (handifi ndakanganwa) — nemhinduro yemoyo: 'It was amazing' (zvanga zvichikatyamadza). Nyaya pfupi yamemo, structure yakareruka.",
    culturalNote: "MuChiShona, kutaura nyaya yapakare i basa rinodikanwa pamhuri — vana vanodzidza nayo, vakuru vanorangarira. MuChiNgezi pakati pe English-speakers, nyaya pfupi yepamwoyo (3 zvirevo) ndiyo inoshanda — pasina kuda kuwedzera mavakirwo. 'When I was a child' (chinguva), chiitiko (chiri kuita), uye reflection (manzwiro mushure). Pattern iyi inozonzwika muModule 10 capstone.",
  },

  chunks: [
    {
      id: 'when_i_was_a_child',
      target: 'When I was a child',
      native: 'Pandanga ndichiri mwana',
      literal: 'when I was a child',
      emoji: '👶🏾',
      phonetic: 'wen-AY-wuz-uh-CHAYLD',
      audioRef: null,
    },
    {
      id: 'never_forget',
      target: "I'll never forget...",
      native: 'Handifi ndakanganwa...',
      literal: "I will never forget",
      emoji: '🌟',
      phonetic: 'AYL-NEV-er-fer-GET',
      audioRef: null,
    },
    {
      id: 'was_amazing',
      target: 'It was amazing',
      native: 'Zvanga zvichikatyamadza',
      literal: 'it was amazing',
      emoji: '✨',
      phonetic: 'it-WUZ-uh-MAY-zing',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Past-tense narrative — three-line story',
    explanation: "Nyaya pfupi inotaurwa nemitsetse mitatu: (1) Mavambo: 'When I was a child / When I was young / A long time ago'. (2) Chiitiko: shandisa past tense — 'I went', 'I saw', 'we lived', 'my grandmother taught me'. (3) Mhedziso: manzwiro / chinhu chinoramba — 'I'll never forget it', 'It was amazing', 'It changed me'. Cherechedza past tense: 'go → went', 'see → saw', 'is → was', 'have → had'.",
    examples: [
      { target: "When I was a child, my grandmother taught me to bake bread.", native: 'Pandanga ndichiri mwana, mbuya vakandidzidzisa kubika chingwa.' },
      { target: "I'll never forget the smell of the kitchen.",                  native: 'Handifi ndakanganwa kunhuhwirira kwekicheni.' },
      { target: 'It was amazing — I still bake that bread today.',             native: 'Zvanga zvichikatyamadza — ndichiri kubika chingwa ichocho nhasi.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'When I was a child',     right: 'Pandanga ndichiri mwana' },
        { left: "I'll never forget",       right: 'Handifi ndakanganwa' },
        { left: 'It was amazing',           right: 'Zvanga zvichikatyamadza' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Pandanga ndichiri mwana, takagara kumusha.',
      correct: ['When I was a child, we lived in the village.', 'When I was a kid, we lived in the village.', 'When I was little, we lived in the village.', 'when i was a child, we lived in the village.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Handifi ndakanganwa zuva iroro. Zvanga zvichikatyamadza.',
      correct: ["I'll never forget that day. It was amazing.", "I will never forget that day. It was amazing.", "I'll never forget that day — it was amazing.", "i'll never forget that day. it was amazing."],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka chirevo: 'When I was a child, my grandmother taught me'",
      words: ['child,', 'me.', 'a', 'When', 'taught', 'I', 'grandmother', 'was', 'my'],
      correct: ['When', 'I', 'was', 'a', 'child,', 'my', 'grandmother', 'taught', 'me.'],
      translation: 'Pandanga ndichiri mwana, mbuya vakandidzidzisa',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — past tense yakanaka',
      sentence: 'When I was a child, we _____ in the village every summer.',
      options: ['went', 'go', 'going'],
      correct: 'went',
      context: "Past tense yedu ndeye 'go → went'. 'When I was' inotaura kuti tiri kunguva yakapfuura — verb yose inofanira kuva past.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza nyaya pfupi yakaringana',
      question: "You're at an English-language storytelling night and asked to share a 3-sentence childhood story. Which is most natural?",
      options: [
        { text: "When I was a child, my grandmother used to tell me stories by the fire. I'll never forget the way she laughed. It was amazing — her laugh still lives in me.", correct: true },
        { text: "Child story grandmother fire laugh.",                                                                                                                            correct: false },
        { text: "Pandanga ndichiri mwana, mbuya vaitaura nyaya.",                                                                                                                correct: false },
      ],
      explanation: "Yakanaka inopfeka mitsetse mitatu: chinguva ('When I was a child'), chiitiko ('grandmother used to tell stories'), reflection ('It was amazing — her laugh still lives in me'). Nyaya yakwana mu chirevo chitatu chete.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa English-language storytelling night muLondon. Mukuru wevhiki ari kupa mukana wekuti utaure nyaya pfupi (3 sentences) yepachiitiko chemwana wako. Vateereri vakatarisa.",
    lines: [
      { speaker: 'npc', target: "Next up — share a childhood memory in three sentences. Take it away.", native: 'Anotevera — taura chiitiko chinokuyeuka chemwana mumitsetse mitatu.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "When I was a child, my grandmother taught me to bake bread on Saturdays. I'll never forget the smell of the kitchen — flour, fire, her humming. It was amazing — I still bake that bread today.", native: 'Pandanga ndichiri mwana, mbuya vakandidzidzisa kubika chingwa Mugovera. Handifi ndakanganwa kunhuhwirira kwekicheni — upfu, moto, vachiimba. Zvanga zvichikatyamadza — ndichiri kubika chingwa ichocho nhasi.', correct: true, feedback: "Yakwana — mitsetse mitatu chete, asi inoreba. Chinguva, chiitiko, reflection. Vateereri vari kuona kicheni, vari kunzwa mbuya. Iyi i nyaya yakaringana." },
          { target: "Child grandmother bread story.", native: 'Mwana mbuya chingwa nyaya.', correct: false, feedback: "Mashoko asi pasina chirevo — vaka mitsetse: 'When I was a child, my grandmother used to ___. I'll never forget ___. It was amazing.'" },
          { target: "Pandanga ndichiri mwana, mbuya vakandidzidzisa kubika.", native: 'Pandanga ndichiri mwana, mbuya vakandidzidzisa kubika.', correct: false, feedback: "ChiShona — vateereri vari ku ChiNgezi. Shandura: 'When I was a child, my grandmother taught me to bake.'" },
        ],
      },
      { speaker: 'npc', target: "Beautiful — thank you for sharing.", native: 'Yakanaka — tinotenda nokugovera.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Mitsetse mitatu — chinguva, chiitiko, reflection — ndiyo nyaya pfupi yakwana muChiNgezi. Mbuya vako vatochinjana ne vateereri vatsva. Iyi pattern inozopfukurwa mu capstone — mhuri yose mu mitsetse mishanu.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'When I was a child (in English)',  correct: ['When I was a child', 'when i was a child', 'When I was a child,', 'When I was young'] },
      { prompt: "I'll never forget (in English)",   correct: ["I'll never forget", "I will never forget", "i'll never forget"] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga chiitiko chimwe chemwana wako. Nyora nyaya yemitsetse mitatu muChiNgezi: (1) 'When I was a child, ___.' (2) 'I'll never forget ___.' (3) 'It was amazing.' Verenga muromo. Kana ukaita zvinyatsoshanda, taura kushamwari nhasi.",
    rwenSignoff: "Mangwana — kutarisira mberi. 'I hope...' / 'One day I'll...' — nyika dzepfungwa.",
  },

  phase8: {
    scenario: "You're at an English-language storytelling open mic. The host asks for a 3-sentence childhood memory. Take 90 seconds — set the time, tell what happened, end with a reflection.",
    rwenRole: "Maria, 35, storytelling night host. Warm, attentive. Asks gentle follow-ups: 'How old were you?', 'Do you still do it now?'",
    successCriteria: "User opens with 'When I was a child' or 'When I was young'. Uses past tense throughout (went, saw, was, had, taught). Closes with 'I'll never forget ___' or 'It was amazing'. Tells 3+ sentences. Stays in English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
