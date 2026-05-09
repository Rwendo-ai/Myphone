import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l03-siblings',
  module: 5,
  lesson: 3,
  title: 'Siblings — Brother & Sister',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "EsiNdebeleni umfowethu = my brother, udadewethu = my sister. Lobubili buthwele '-ethu' (of us) — bayingxenye yemuli yethu sonke. EsiNgisini, igama yi-'brother' lo-'sister' nje — kufanele ufake 'my' phambili ukuze kucace ukuthi nguwakho. Bese: 'older / younger' kufanele ngezikhathi ezikhethekileyo, ngoba i-formal English ayisivamisi ukuvula leyo nuance.",
    culturalNote: "EsiNdebeleni ukuhlonipha ozelwe kuqala kuvame kakhulu — uthi umfowethu omdala, udadewethu omncane. EsiNgisini, akugcwele ukuphawulwa: 'my older brother' kubikwa kuphela uma kubalulekile. Iqiniso ngempela: kuyabikwa kanjani kunokwesiNdebele. KweyamaHebheru kuthiwa: 'umzalwane lomzalwane bayasizana ngezikhathi zenhlupheko' (IzAga 17:17). Lokho akuncikanga ezimpawini zenkulumo — kuncike ezenzweni zenu lonke lonke. Sebenzisa 'older/younger' uma kubalulekile, kodwa ungazithwali umthwalo wokuthwala 'omdala' kubo bonke abafowenu lapho ungasitsho.",
  },

  chunks: [
    {
      id: 'brother',
      target: 'Brother',
      native: 'Umfowethu',
      literal: 'Brother — umfo (brother) + -ethu (of us)',
      emoji: '👨🏾',
      phonetic: 'BRUH-thuh',
      audioRef: null,
    },
    {
      id: 'sister',
      target: 'Sister',
      native: 'Udadewethu',
      literal: 'Sister — udade + -ethu (of us)',
      emoji: '👩🏾',
      phonetic: 'SIS-tuh',
      audioRef: null,
    },
    {
      id: 'siblings',
      target: 'Siblings',
      native: 'Abafowethu nodadewethu (bonke ndawonye)',
      literal: 'Siblings — gender-neutral, plural',
      emoji: '👫🏾',
      phonetic: 'SIB-lingz',
      audioRef: null,
    },
    {
      id: 'older_younger',
      target: 'Older / Younger',
      native: 'Omdala / omncane',
      literal: 'Older = omdala, younger = omncane',
      emoji: '🧓🏾',
      phonetic: 'OHL-duh / YUNG-guh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Older / Younger before brother or sister',
    explanation: "EsiNgisini ufaka 'older' loba 'younger' phambi 'brother' / 'sister' uma uchaza. Mhlawumbe: 'my older brother' (umfowethu omdala). 'My younger sister' (udadewethu omncane). Akubalulekanga ukukubeka ngaso sonke isikhathi — kuphela uma kucacisa noma kubalulekile esimweni. EsiNdebeleni 'omdala' / 'omncane' kuhamba phambili ngokuvamile — esiNgisini kuhamba phambi 'brother' / 'sister' ngaso sonke isikhathi.",
    examples: [
      { target: 'My older brother',     native: 'Umfowethu omdala' },
      { target: 'My younger sister',     native: 'Udadewethu omncane' },
      { target: 'I have two siblings.',  native: 'Ngilabafowethu nodadewethu ababili.' },
      { target: "She's my younger sister.", native: "Yiyo udadewethu omncane." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa amagama',
      pairs: [
        { left: 'Brother',          right: 'Umfowethu' },
        { left: 'Sister',           right: 'Udadewethu' },
        { left: 'Older brother',    right: 'Umfowethu omdala' },
        { left: 'Younger sister',   right: 'Udadewethu omncane' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Umfowethu omdala uhlala eGoli.',
      correct: ['My older brother lives in Johannesburg.', 'My older brother lives in Joburg.', 'my older brother lives in Johannesburg.'],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi — uxoxa ngogogo wakho omncane',
      prompt: 'Udadewethu omncane uyacula esikhumbini.',
      correct: ['My younger sister sings in the choir.', 'My younger sister sings in the choir', 'my younger sister sings in the choir.'],
    },
    {
      type: 'fill_blank',
      instruction: 'Faka igama elifaneleyo — ukhuluma ngomfana omkhulu kunawe',
      sentence: 'My _____ brother is a doctor in Bulawayo.',
      options: ['old', 'older', 'oldest'],
      correct: 'older',
      context: "'Older' lifaneleyo ngoba kungumfowenu omkhulu kunawe — kunjengoba 'omdala' isebenza ngokuthatha kabili. 'Old' ngokwakho lihlala lifuna isenzo (he is old) — kungelona is-adjective elilungileyo lapha. 'Oldest' lithetha 'omkhulu kakhulu kubo bonke' — kungeke kufanele uma ungumkhulu wakhe yedwa.",
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umutsho — udadewethu omncane uneminyaka eyisithupha',
      words: ['old.', 'My', 'is', 'sister', 'younger', 'years', 'six'],
      correct: ['My', 'younger', 'sister', 'is', 'six', 'years', 'old.'],
      translation: 'Udadewethu omncane uneminyaka eyisithupha.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha eyiqiniso',
      question: 'Umngane oyiNgisi ubuza: "Tell me about your brothers and sisters." Yini efanele?',
      options: [
        { text: "I have two siblings — an older brother and a younger sister.",  correct: true },
        { text: "I have brother and sister.",                                     correct: false },
        { text: "Umfowethu lodadewethu wami.",                                    correct: false },
      ],
      explanation: "'I have two siblings' kuyibuka esimweni se-formal English. 'An older brother' lo-'a younger sister' kufaka i-nuance ka-'omdala/omncane' yesiNdebele. Igama 'siblings' lihloniphekile — gender-neutral, lihambisana lonke iimiveli yakini.",
    },
  ],

  rwenDialogue: {
    intro: "Uxoxa lomngane omtsha oyiNgisi — usemzini wakho. Ufuna ukukwazi imuli yakho.",
    lines: [
      { speaker: 'npc', target: "Do you have any siblings?", native: 'Ulabafowethu loba odadewethu?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — I have an older brother and a younger sister.", native: 'Yebo — ngilomfowethu omdala lodadewethu omncane.', correct: true,  feedback: "Kuhle. Uphendule kahle — 'an older brother' (umfowethu omdala) lo-'a younger sister' (udadewethu omncane). Kucacile, kufudumele." },
          { target: "Yes, brother and sister.",                              native: 'Yebo, umfowethu lodadewethu.',                       correct: false, feedback: "Faka 'I have...' kuqala. Kanti faka 'older' loba 'younger' uma ufuna ukucacisa kakhudlwana." },
          { target: "Older brother. Younger sister.",                         native: 'Umfowethu omdala. Udadewethu omncane.',               correct: false, feedback: "Faka 'I have an older brother and a younger sister.' Iqiniso ngempela isenzo 'have' siyadingakala." },
        ],
      },
      { speaker: 'npc', target: "Are you close with them?", native: 'Lisondelene labo na?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, very close. We talk every week.", native: 'Yebo, sisondele kakhulu. Sixoxa qila viki.', correct: true, feedback: "Kuhle — 'very close' lo-'we talk every week' kunika impendulo egcwele." },
          { target: "Close yes.",                            native: 'Sisondele yebo.',                            correct: false, feedback: "Faka isenzo: 'Yes, we are close.' Kungaba kanti: 'Yes, very close.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenze kuhle. Imindeni ihlonipheka ngokukhuluma — usuvule uxhumano lwesiNgisi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala ngenhliziyo.',
    prompts: [
      { prompt: 'Brother (ngesiNgisi)',          correct: ['Brother', 'brother'] },
      { prompt: 'My older sister (ngesiNgisi)',  correct: ['My older sister', 'my older sister'] },
      { prompt: 'I have two siblings (ngesiNgisi)', correct: ['I have two siblings', 'I have two siblings.'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhla',
    task: "Cabanga ngabafowenu lodadewenu (loba abangane abasondelene njengabafowenu uma ungelabo). Bhala uhlu olufitshane esiNgisini: 'I have ___ siblings. My older brother is ___. My younger sister is ___.' Khuluma ngokuzwakalayo. Lokho kukhulisa imithetho yokuphawula iminyaka esiNgisini.",
    rwenSignoff: "Kusasa — uGogo lo-Khulu (grandparents).",
  },

  phase8: {
    scenario: "An English-speaking visitor at your home is curious about your siblings. Tell them how many you have, who is older, who is younger, and one thing about each one. Be warm and natural.",
    rwenRole: "James, 35, a Canadian friend who's only just learning about Zimbabwean families. Asks gentle follow-ups like 'What does your sister do?' or 'Do you see your brother often?'",
    successCriteria: "User uses 'older' and 'younger' correctly before brother/sister at least once each. Uses 'siblings' or 'brothers and sisters' once. Answers a follow-up about one sibling with a complete sentence.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
