import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-food-conversation',
  module: 3,
  lesson: 10,
  title: 'Food conversation — Ingxoxo ephelele yokudla',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Lamuhla sihlanganisa konke esikufundileyo emodyulini ye-3: ulambile, ufaka i-oda, ucacisa i-allergy, ucela incwadi yokukhokha, futhi wengeza i-tip. I-dialogue eyodwa, isiNgisi sokwenyani.",
    culturalNote: "Le-dialogue itshengisa ukuthi konke esikuhlangabezile kungasebenza ndawonye. Uphethwe ngeNdebele yakho — uphi (UK kumbe USA) — kodwa indlela enye yokuthi 'kuhloniphe njalo': uthi 'thank you' kahlanu kumbe kakhulu kunalokhu obekulindeleke. EsiNdebeleni siyamukela ukuhlonipha okuyodwa nje. EsiNgisini, kakhulu eUK, 'thank you' kuphindwaphindwa — kungani ungumphathi sevula umnyango, kungani sebethatha i-bill yakho. Akufunqi uba uvumelekile — kungumkhuba.",
  },

  chunks: [
    {
      id: 'table_for_two',
      target: 'A table for two, please.',
      native: 'Itafula labantu ababili, ngiyacela.',
      literal: 'A table for two please',
      emoji: '🪑',
      phonetic: 'uh-TAY-bul-for-too',
      audioRef: null,
    },
    {
      id: 'recommend',
      target: 'What do you recommend?',
      native: 'Ungatshani sivakatshele?',
      literal: 'What do you recommend',
      emoji: '🤔',
      phonetic: 'wot-doo-yoo-rek-uh-MEND',
      audioRef: null,
    },
    {
      id: 'delicious',
      target: 'It was delicious!',
      native: 'Bekumnandi kakhulu!',
      literal: 'It was delicious',
      emoji: '😋',
      phonetic: 'it-woz-deh-LISH-us',
      audioRef: null,
    },
    {
      id: 'thank_you_so_much',
      target: 'Thank you so much.',
      native: 'Ngibonga kakhulu.',
      literal: 'Thank you so much',
      emoji: '🙏',
      phonetic: 'thank-yoo-soh-MUCH',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Restaurant journey: arrival → order → eat → pay",
    explanation: "I-dialogue ehambelana yonke ye-restaurant ilezigaba ezine: (1) ukufika — 'A table for ___, please', (2) ukufaka i-oda — 'I'd like ___, please' / 'Could I have ___, please?', (3) ngesikhathi sokudla — 'It's delicious' / 'Could I have some water?', (4) ukukhokha — 'Could I have the bill, please?' / 'Can I get the check, please?'.",
    examples: [
      { target: "A table for two, please.",          native: 'Itafula labantu ababili, ngiyacela.' },
      { target: "What do you recommend?",            native: 'Ungatshani sivakatshele?' },
      { target: "It was delicious — thank you!",     native: 'Bekumnandi kakhulu — ngiyabonga!' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imisho yerestaurant',
      pairs: [
        { left: 'A table for two, please.',  right: 'Itafula labantu ababili, ngiyacela.' },
        { left: 'What do you recommend?',     right: 'Ungatshani sivakatshele?' },
        { left: 'It was delicious!',          right: 'Bekumnandi kakhulu!' },
        { left: "Could I have the bill?",     right: 'Ngingathola incwadi yokukhokha?' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi',
      prompt: 'Itafula labantu ababili, ngiyacela.',
      correct: ["A table for two, please.", "A table for two please", "Table for two please", "A table for two please."],
    },
    {
      type: 'build_sentence',
      instruction: 'Yakha umusho omfishane wokucela isincomo',
      words: ['What', 'do', 'you', 'recommend?'],
      correct: ['What', 'do', 'you', 'recommend?'],
      translation: 'Ungatshani sivakatshele?',
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha indlela elungileyo',
      question: "Selidlile kahle. Yiphi enhle eyokutsho lokhu?",
      options: [
        { text: "It was delicious — thank you!", correct: true },
        { text: "Food good.",                    correct: false },
        { text: "I ate.",                        correct: false },
      ],
      explanation: "'It was delicious' kuyimqondiso wokulamukela okudla. EsiNgisini sokwenyani, ukubonga okudla emhambeni kuyenza umphathi athokoze.",
    },
  ],

  rwenDialogue: {
    intro: "I-dialogue ephelele: ufika, ufaka i-oda, udla, ukhokha. Le-restaurant iseLondon. Lalela kuhle.",
    lines: [
      { speaker: 'npc', target: "Good evening — welcome! Do you have a reservation?", native: 'Sawubona kusihlwa — uyemukelekile! Ulesibambo (reservation)?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "No, sorry. A table for two, please.", native: 'Hatshi, uxolo. Itafula labantu ababili, ngiyacela.', correct: true,  feedback: "Kuhle kakhulu — uthembekile, ucelile ngenhlonipho." },
          { target: "Two people.",                          native: 'Abantu ababili.',                                    correct: false, feedback: "Akwanele — engeza 'A table for two, please'." },
        ],
      },
      { speaker: 'npc', target: "Of course — please follow me. Here's the menu.", native: 'Yebo ngeqiniso — ngilandele. Nasi umenu.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. What do you recommend?",     native: 'Ngiyabonga. Ungatshani sivakatshele?', correct: true,  feedback: "Kuhle — kuyabona ukuthi ufuna ukubona ukudla okuhle." },
          { target: "Bring food.",                            native: 'Letha ukudla.',                          correct: false, feedback: "Lokhu kuyahlukumeza — sebenzisa 'What do you recommend?'." },
        ],
      },
      { speaker: 'npc', target: "The fish and chips is our most popular. Are there any allergies?", native: 'Inhlanzi lamatemu yiyo eyaziwa kakhulu. Likhona okuwadleka kuwena?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm allergic to peanuts. Is the fish safe?", native: 'Ngiyabadleka kumantongomane. Inhlanzi iphephile?', correct: true,  feedback: "Kuhle kakhulu — ucacisile i-allergy njalo wabuza ngokuqondileyo." },
          { target: "Just bring fish.",                            native: 'Letha kuphela inhlanzi.',                            correct: false, feedback: "Akukho ndlela yokuhlonipha — ungaze ufa ngenxa ye-allergy. Cacisa." },
        ],
      },
      { speaker: 'npc', target: "The fish is peanut-free. I'd recommend it.", native: 'Inhlanzi ayilamantongomane. Ngiyayivakatshela.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Perfect. I'll have the fish and chips, please. And could I have some tap water?", native: 'Kuhle. Ngizathatha inhlanzi lamatemu, ngiyacela. Njalo ngingathola amanzi atapha?', correct: true,  feedback: "Kuhle ngokupheleleyo — ucele konke okudingayo, futhi 'tap water' kuyimahla eUK." },
        ],
      },
      { speaker: 'npc', target: "(Later) ... Was everything alright?", native: '(Emva kwesikhathi) ... Konke kwabe kuhle?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — it was delicious! Could we have the bill, please?", native: 'Yebo — bekumnandi kakhulu! Singathola incwadi yokukhokha, ngiyacela?', correct: true,  feedback: "Kuhle kakhulu — uphethile yonke i-dialogue! Yenza i-Module 3 yonke ngomzuzu owodwa." },
          { target: "Bill.",                                                    native: 'Incwadi.',                                                                  correct: false, feedback: "Ulwazi lukhona kodwa kalahloniphi. Sebenzisa umusho wonke." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wenzile! Lokhu yimsebenzi omkhulu — ulhlanganise konke kweModule 3 ngokuhambisana. Lamuhla, ungaya kuyiphi i-restaurant emhlabeni wesiNgisi futhi uphendule. Ngiyaziqhenya ngawe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Phendula ngesiNgisi (engeza "please" lapho kufanele).',
    prompts: [
      { prompt: 'Itafula labantu ababili, ngiyacela. (ngesiNgisi)', correct: ['A table for two please', 'A table for two, please.', 'A table for two please.'] },
      { prompt: 'Bekumnandi kakhulu! (ngesiNgisi)',                  correct: ['It was delicious!', 'It was delicious', 'It was so delicious'] },
      { prompt: 'Singathola incwadi yokukhokha, ngiyacela? (UK)',     correct: ['Could we have the bill please?', 'Could we have the bill, please?', 'Can we have the bill please?'] },
    ],
  },

  mission: {
    title: 'Umsebenzi omkhulu we-Module 3',
    task: "Lamuhla loba kusasa, hlola ividiyo encane (3-5 minutes) yomuntu odla erestaurant eUK kumbe eUSA (YouTube — bhala 'British restaurant order' kumbe 'New York diner'). Khangela amagama owafundile: 'I'd like', 'Could I have', 'the bill / check', 'tip'. Bopha izikhathi ozezwa ngazo.",
    rwenSignoff: "Uphethile uModule 3! Sengikuhambisa kuModule 4 — uzofunda ngokuhamba ngebhasi langetreni eUK leUSA. Uyinyembezi.",
  },

  phase8: {
    scenario: "You're at a restaurant in London (default) for dinner with a friend. Run the full restaurant journey: arrive without a reservation, ask for the menu, ask for a recommendation, mention you're allergic to peanuts, order, and finally ask for the bill politely. This is the capstone for Module 3.",
    rwenRole: "Olivia, 40s, an experienced English server. Warm, professional, will guide the user through the whole meal naturally. Will use UK English throughout (bill, chips, tap water).",
    successCriteria: "User completes at least 4 of these 5 steps with appropriate language: (1) ask for a table, (2) ask for the menu/recommendation, (3) mention an allergy or dietary need, (4) order using 'I'd like'/'Could I have', (5) ask for the bill politely. Uses 'please' and 'thank you' throughout.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
