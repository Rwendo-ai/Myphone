import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l05-go-come-walk',
  module: 4,
  lesson: 5,
  title: 'To go / come / walk',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Lapha eUK uzakhuluma kakhulu nge-go, come, walk. 'I go to work', 'I come home', 'I walk to the station'. La-verbs yi-foundation yokucaza i-routine yakho.",
    culturalNote: "EsiNgisini, 'go' lo 'come' kakwenzi ngendlela yefanayo. 'Go' = uya kude lapha ofaneneyo, 'come' = ufika lapha okhuluma. Eg: 'I go to London' (Yiya eLondon), 'Come here' (Woza lapha). EZimbabwe sometimes sisebenzisa 'come' kakhulu (uya laye eFakhukhuwana — 'come this way'), kodwa esiNgisini kufuneka ukhethe ngokucacileyo.",
  },

  chunks: [
    {
      id: 'go',
      target: 'I go',
      native: 'Ngiyaya',
      literal: 'movement away from where speaker is',
      emoji: '🚶➡️',
      phonetic: 'AHY GOH',
      audioRef: null,
    },
    {
      id: 'come',
      target: 'I come',
      native: 'Ngiyeza',
      literal: 'movement towards where speaker is',
      emoji: '⬅️🚶',
      phonetic: 'AHY KUM',
      audioRef: null,
    },
    {
      id: 'walk',
      target: 'I walk',
      native: 'Ngiyahamba (ngenyawo)',
      literal: 'on foot — not by car or bus',
      emoji: '🚶',
      phonetic: 'AHY WAWK',
      audioRef: null,
    },
    {
      id: 'goes',
      target: 'She goes',
      native: 'Uyaya (owesifazana)',
      literal: 'third person — note the -s',
      emoji: '👩🚶',
      phonetic: 'SHEE GOHZ',
      audioRef: null,
    },
  ],

  pattern: {
    name: "go to / come from / walk to",
    explanation: "I-prepositions zikhona kanye lala-verbs: 'go to [place]' (yiya kwi-...), 'come from [place]' (uvela kwi-...), 'walk to [place]' (uhamba kwi-...). Akukho 'go in London' kumbe 'come at home' — yi-rule yokuthi 'go to' lo 'come to'. Kanjalo: 'I go to work' (hatshi 'I go work'). Le-'to' encinyane yi-essential.",
    examples: [
      { target: 'I go to work at 8am',         native: 'Ngiya emsebenzini nge-8 ekuseni' },
      { target: 'I come from Bulawayo',        native: 'Ngivela eBulawayo' },
      { target: 'I walk to the shop',          native: 'Ngihamba ngenyawo ukuya esitolo' },
      { target: 'She goes to church on Sunday', native: 'Uyaya esontweni ngeSonto' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Faka i-preposition eqondileyo",
      sentence: 'I go _____ school every morning.',
      options: ['to', 'at', 'in'],
      correct: 'to',
      context: '"Go to [place]" yi-fixed expression. "Go to school", "go to work", "go to church".',
    },
    {
      type: 'fill_blank',
      instruction: "Khetha i-verb eqondileyo (go / come / walk)",
      sentence: "I'm at the office. Please _____ here at 3pm.",
      options: ['come', 'go', 'walk'],
      correct: 'come',
      context: '"Come here" = woza lapha ngikhona. Ngoba okhuluma ukhona e-office, ufuna omunye eze lapho.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Ngivela eBulawayo (origin)',
      correct: ['I come from Bulawayo', 'i come from Bulawayo'],
    },
    {
      type: 'build_sentence',
      instruction: "Akhipha umugqa: 'She walks to the station'",
      words: ['station.', 'to', 'walks', 'She', 'the'],
      correct: ['She', 'walks', 'to', 'the', 'station.'],
      translation: 'Uhamba ngenyawo ukuya esiteshini',
    },
    {
      type: 'multiple_choice',
      instruction: 'Iyiphi eqondileyo?',
      question: 'Ufaka inkulumo ngemvelaphi yakho. Uthini?',
      options: [
        { text: "I come from Zimbabwe.", correct: true },
        { text: "I go from Zimbabwe.", correct: false },
        { text: "I am from Zimbabwe walk.", correct: false },
      ],
      explanation: "'Come from' yindlela elungile yokuchaza imvelaphi. 'Go' yokuya phambili, hatshi yokuvela. 'I come from Zimbabwe' kumbe 'I am from Zimbabwe' — kokubili kuhle.",
    },
  ],

  rwenDialogue: {
    intro: "Sengathi-ngathi usuvele eLondon, uhambisa abantu ngokuya ku-corner shop yakho. Ofaneneyo lawe owayehlala lapha ngoSonto.",
    lines: [
      {
        speaker: 'npc',
        target: "Hi! Where are you off to?",
        native: 'Sawubona! Uya ngaphi?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm going to the shop. I'll walk — it's close.", native: 'Ngiya esitolo. Ngizahamba ngenyawo — kuseduze.', correct: true, feedback: "Kahle. 'Going to' lo 'walk' — kokubili kuyaqondakala." },
          { target: "I go shop walk.", native: 'Ngiya esitolo ngenyawo.', correct: false, feedback: "Yithi 'I'm going to the shop'. Faka 'to' phakathi kuka 'go' lo 'shop'. Akukho 'go shop' esiNgisini." },
        ],
      },
      {
        speaker: 'npc',
        target: "Oh nice. Where do you come from originally?",
        native: 'Heh kuhle. Uvela ngaphi ekuqaleni?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I come from Bulawayo, in Zimbabwe.", native: 'Ngivela eBulawayo, eZimbabwe.', correct: true, feedback: "Yebo. 'Come from' = isizwe sakho." },
          { target: "I go from Bulawayo.", native: 'Ngiya eBulawayo.', correct: false, feedback: "'Go from' yindlela engelungile. Sebenzisa 'come from' (uvela) ku-imvelaphi." },
        ],
      },
      {
        speaker: 'npc',
        target: "Lovely. Are you walking back home after?",
        native: 'Kuhle. Uzobuyela ekhaya ngenyawo emva kwalokho?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I walk home every day. It's good exercise.", native: 'Yebo, ngihamba ngenyawo ekhaya nsuku zonke. Kungokuhle ku-exercise.', correct: true, feedback: "Kuhle. 'Walk home' yi-natural English (akumelanga uthi 'walk to home')." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenzile kahle. 'Go to', 'come from', 'walk to' — la ma-prepositions encinyane akwenza ukhulume njenge-native.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngekhanda — ungabuyeli phezulu.',
    prompts: [
      { prompt: '"I go to work" (ngesiNgisi)',  correct: ['I go to work', 'i go to work'] },
      { prompt: '"I come from Zimbabwe"',       correct: ['I come from Zimbabwe', 'i come from Zimbabwe'] },
      { prompt: '"She walks to school"',        correct: ['She walks to school', 'she walks to school'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhlanje',
    task: "Sho izindawo ezintathu oya kuzo nsuku zonke ngesiNgisi. 'I go to work', 'I go to the shop', 'I walk to the bus stop'. Faka 'to' phakathi (akumelanga uphukile). Kanjalo zama 'I come from [your home town]'.",
    rwenSignoff: "Le verbs zibalulekile ekuxoxeni nabezizweni eUK. Sobonana kusasa.",
  },

  phase8: {
    scenario: "Ucabanga lo-mfanekiselo wakho omtsha eUK — ofuna ukukwazi ngokukhulu. Buza imibuzo eyenze ngapha-ngapha kunye lapho oya khona, lapha okuphuma khona, lokuthi ushintsha kanjani — kuya ngendlela yokuhamba.",
    rwenRole: "Tom, 30, your new neighbour in Croydon, friendly British guy curious about where you're from and your daily routine.",
    successCriteria: "User uses 'go to [place]', 'come from [place]', 'walk to [place]' patterns correctly. At least three sentences with the right preposition. Distinguishes 'go' (away) from 'come' (toward speaker) appropriately.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
