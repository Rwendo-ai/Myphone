import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l01-happy-sad',
  module: 10,
  lesson: 1,
  title: 'Conjunctions — although, however, despite, on the other hand',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "ESiNdebele, lapho ufuna ukubonakalisa umqondo ophambeneyo, uthi 'kodwa' kumbe 'lanxa'. ESiNgisini, kulamagama amane akhethelene — 'although', 'however', 'despite', 'on the other hand' — futhi sengisebenzisa ngendlela eyahlukeneyo. Lokhu yizinto ezikwenza ukhulume ngendlela ye-mastery.",
    culturalNote: "Esikhungweni sokusebenza eUK kumbe eUS, abantu bakhulumisana ngokucabangisisa — bachaza, baphambanise, bahleke. 'Although it was raining, we still went' — uveza ubunzima kodwa lokwenzakeleyo. 'However' iqalisa umutsho omutsha, ngokuvamileyo emumva kwekhefu — kucabanga ngeMonday/Tuesday emails. 'Despite' ngu-preposition (kufuneka noun emumva kwawo). 'On the other hand' yokuxoxa — ulethelana enye indlela. Ungasebenzisi 'although' lo-'however' kanyekanye emutshweni owodwa — kuyabhibhidla.",
  },

  chunks: [
    {
      id: 'although',
      target: 'Although',
      native: 'Lanxa / nanxa',
      literal: 'Although',
      emoji: '🔀',
      phonetic: 'awl-THOH',
      audioRef: null,
    },
    {
      id: 'however',
      target: 'However',
      native: 'Kodwa-ke / nokho',
      literal: 'However',
      emoji: '⚡',
      phonetic: 'how-EV-uh',
      audioRef: null,
    },
    {
      id: 'despite',
      target: 'Despite',
      native: 'Lanxa kunjalo / lakanjalo',
      literal: 'Despite (+noun)',
      emoji: '🛡️',
      phonetic: 'di-SPAYT',
      audioRef: null,
    },
    {
      id: 'on_other_hand',
      target: 'On the other hand',
      native: 'Kwelinye icele / ngakwelinye icala',
      literal: 'On the other hand',
      emoji: '🤲',
      phonetic: 'on-thi-UH-thuh-hand',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Four ways to show contrast',
    explanation: "(1) 'Although' iqalisa i-clause: 'Although it was cold, we walked.' (2) 'However' ihlanganisa imitsho emibili — emumva kwekhefu noma e-comma: 'It was cold. However, we walked.' (3) 'Despite' ifuna i-noun noma -ing: 'Despite the cold, we walked.' (4) 'On the other hand' yokuxoxa ngezindlela ezimbili: 'It's expensive. On the other hand, it lasts forever.' Ungasebenzisi 'although' lo-'but' emutshweni owodwa.",
    examples: [
      { target: 'Although I was tired, I finished the work.',                native: 'Lanxa bengikhathele, ngigcine umsebenzi.' },
      { target: 'It was raining. However, we still went to the market.',     native: 'Bekuna izulu. Kodwa-ke, sahamba emakethe.' },
      { target: 'Despite the rain, we walked home.',                          native: 'Lanxa kuna izulu, sahamba ngezinyawo siya ekhaya.' },
      { target: "It's expensive. On the other hand, it'll last for years.",  native: 'Iyabiza. Kwelinye icele, izahlala iminyaka.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa i-conjunction lendlela esebenza ngayo',
      pairs: [
        { left: 'Although',          right: 'Iqalisa i-clause epheleleyo' },
        { left: 'However',           right: 'Imutsho omutsha + i-comma' },
        { left: 'Despite',           right: 'Idinga i-noun emumva kwawo' },
        { left: 'On the other hand', right: 'Ihlanganisa indlela enye yokucabanga' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Khetha igama eliqondileyo',
      sentence: '_____ the heavy traffic, she arrived on time.',
      options: ['Although', 'However', 'Despite'],
      correct: 'Despite',
      context: "U-'Despite' uphathwa li-noun (the heavy traffic). U-'Although' uphathwa li-clause (Although there was traffic). U-'However' uqalisa umutsho omutsha.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Lanxa imali yayingenelisi, sayithenga indlu.',
      correct: [
        'Although the money was not enough, we bought the house.',
        'Although we did not have enough money, we bought the house.',
        "Although we didn't have enough money, we bought the house.",
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Khetha eyiyo — i-meeting yasemsebenzini",
      question: "I-manager ithe: 'Sales are down. _____, customer satisfaction is at an all-time high.' Yiphi efaneleyo?",
      options: [
        { text: 'However',           correct: true },
        { text: 'Although',          correct: false },
        { text: 'Despite',           correct: false },
      ],
      explanation: "U-'However' uqalisa imutsho omutsha emumva kwekhefu (full stop). U-'Although' kungafanele kuqaliswe ngawo umutsho otshintsha umqondo emumva kwekhefu — uqalisa i-clause ehambisana lenye. U-'Despite' bekuzadinga i-noun.",
    },
  ],

  rwenDialogue: {
    intro: 'Usemsebenzini, uxoxa lomngane wakho umsebenzi omutsha owunikiweyo. Yethula imicabango yakho ngokucabangisisa.',
    lines: [
      { speaker: 'npc', target: "So, what do you think about the new project?", native: "Pho, ucabangani ngomsebenzi omutsha?" },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Although it sounds difficult, I think it's a great opportunity. However, the deadline worries me a bit.",
            native: "Lanxa kuzwakala kunzima, ngicabanga kuyithuba elihle. Kodwa-ke, isikhathi sokuqedisa siyangikhathaza kancane.",
            correct: true,
            feedback: "Kuhle — usebenzise kabili: 'although' ngokukhuluma ngobunzima, lo-'however' uphawula ukukhathazeka. Le yi-mastery-level English.",
          },
          {
            target: "But hard. But good. But deadline.",
            native: "Kodwa kunzima. Kodwa kuhle. Kodwa isikhathi.",
            correct: false,
            feedback: "U-'But' uphindwa kanengi. Sebenzisa 'although' ekuqaleni, lo-'however' emumva kwekhefu — kuyaphucuka.",
          },
          {
            target: "On the other hand, although however despite — it's good.",
            native: "Kwelinye icele, lanxa kodwa-ke — kuhle.",
            correct: false,
            feedback: "Wakhethwa wonke amagama kanyekanye! Khetha eyodwa nje — 'It sounds tough, but it's a great opportunity.'",
          },
        ],
      },
      { speaker: 'npc', target: "I see your point. Let's plan it carefully.", native: "Ngiyabona umqondo wakho. Asihlele kuhle." },
      { speaker: 'rwen', rwenLine: "Bona — ekuhlanganiseni 'although' lo-'however' emutshweni owodwa, ukhuluma njengomuntu wesi-Ngisi senjwayelo.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala isiqalo somutsho ngo-'Although' (kuna izulu, sahamba)", correct: ['Although it was raining, we went', 'Although it was raining we went', 'Although it rained, we went'] },
      { prompt: "U-'However' kufanele uqaliswe yini emumva kwawo?", correct: ['comma', 'a comma', 'i-comma', ',' ] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Bhala imitsho emithathu ekuxoxa ngempilo yakho — owodwa ngo-'although', owodwa ngo-'however', owodwa ngo-'despite'. Mzwise umngane noma ufunde uwedwa kakhulu.",
    rwenSignoff: "Kusasa — i-'if', 'unless', 'whenever'. Conditionals.",
  },

  phase8: {
    scenario: "You're at a UK office team meeting. Your manager asks each person to give a quick opinion on a new product idea. Use 'although', 'however', 'despite', or 'on the other hand' to share a balanced view — name a positive AND a concern.",
    rwenRole: "James, 38, your team lead at a Manchester software company. Direct, friendly, expects clear thinking. Will follow up with 'Why do you say that?' if you're vague.",
    successCriteria: "User uses at least TWO of the four target conjunctions correctly. Gives one positive and one concern. Doesn't repeat 'but, but, but'. Doesn't drop into Ndebele.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
