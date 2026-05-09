import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-daily-routine-conversation',
  module: 4,
  lesson: 10,
  title: 'Daily routine — full conversation',
  estimatedMinutes: 7,
  xpReward: 45,

  hook: {
    rwenLine: "Awufundile lonke i-Module 4: izitho zomzimba, ama-verbs amakhulu, le-present tense, le-past tense. Manje sihlanganisa konke ku-conversation engcwele yokuxoxa ngosuku lwakho. Lokhu yikho okuzasebenzisa nsuku zonke.",
    culturalNote: "Lapha eUK abantu bayabuza njalo: 'How was your day?' kumbe 'What did you do today?' Le-imibuzo iyenza ukuxoxa kukhona — yi-small talk. Akufanele uphendule ngegama elilodwa ('fine'), ngokuvamile abantu balindela impendulo encinyane (1-2 sentences). Le-skill yokutsho ngosuku lwakho ngokucacileyo iyenza umehluko phakathi kwenobuhlobo lokuqhubeka uyodwa. Khumbula konke okufundileyo ku-Module 4 — manje siyaluhlanganisa.",
  },

  chunks: [
    {
      id: 'wake_up',
      target: 'I wake up at 6am',
      native: 'Ngivuka nge-6 ekuseni',
      literal: 'morning routine starter',
      emoji: '⏰',
      phonetic: 'AHY WAYK UP',
      audioRef: null,
    },
    {
      id: 'have_breakfast',
      target: 'I have breakfast',
      native: 'Ngidla i-breakfast',
      literal: '"have breakfast" — fixed phrase',
      emoji: '🥣',
      phonetic: 'AHY HAV BREK-fust',
      audioRef: null,
    },
    {
      id: 'go_to_work',
      target: 'I go to work',
      native: 'Ngiya emsebenzini',
      literal: '"go TO work" — preposition required',
      emoji: '💼',
      phonetic: 'AHY GOH TUU WURK',
      audioRef: null,
    },
    {
      id: 'come_home',
      target: 'I come home',
      native: 'Ngibuyela ekhaya',
      literal: '"come home" — no "to" before home',
      emoji: '🏠',
      phonetic: 'AHY KUM HOHM',
      audioRef: null,
    },
    {
      id: 'go_to_bed',
      target: 'I go to bed at 10pm',
      native: 'Ngiyalala nge-10 ebusuku',
      literal: 'evening routine ender',
      emoji: '🛏️',
      phonetic: 'AHY GOH TUU BED',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Daily routine sequence",
    explanation: "Sebenzisa ama-time markers ukuhlela: 'In the morning' (ekuseni), 'At lunch' (emini), 'In the afternoon' (emini-shitha), 'In the evening' (ngokuhlwa), 'At night' (ebusuku). Hlanganisa lo i-verbs ohlanyiweyo: 'In the morning I wake up at 6, then I have breakfast, then I go to work.' Le-'then' (emva kwalokho) yi-essential connector — kuyenza i-conversation iqhubeke ngokuvamile.",
    examples: [
      { target: 'In the morning I wake up at 6',       native: 'Ekuseni ngivuka nge-6' },
      { target: 'Then I have breakfast and go to work', native: 'Emva kwalokho ngidla i-breakfast bese ngiya emsebenzini' },
      { target: 'In the evening I come home and cook', native: 'Ngokuhlwa ngibuyela ekhaya bese ngipheka' },
      { target: 'At night I read and go to bed at 10', native: 'Ebusuku ngiyabala bese ngiyalala nge-10' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Faka i-time marker eqondileyo",
      sentence: '_____ the morning, I wake up at 6am.',
      options: ['In', 'At', 'On'],
      correct: 'In',
      context: '"In the morning" yi-fixed phrase. Kanjalo: "in the afternoon", "in the evening". Kodwa: "AT night" (ay-"in the night").',
    },
    {
      type: 'fill_blank',
      instruction: "Khetha i-verb eqondileyo (present tense)",
      sentence: 'After work, I _____ home and cook dinner.',
      options: ['come', 'go', 'walk'],
      correct: 'come',
      context: '"Come home" = ufika ekhaya. "Go home" kungasebenza kanjalo, kodwa "come home" kuvame kakhulu lapho uchaza i-routine yakho ye-evening. Akumelanga uthi "come TO home" — yi-"come home" kuphela.',
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (full sentence)',
      prompt: 'Ekuseni ngidla i-breakfast bese ngiya emsebenzini',
      correct: ['In the morning I have breakfast and go to work', 'In the morning, I have breakfast and go to work', 'In the morning I have breakfast and then go to work'],
    },
    {
      type: 'build_sentence',
      instruction: "Akhipha umugqa: 'At night I go to bed at 10pm'",
      words: ['10pm.', 'at', 'go', 'bed', 'I', 'to', 'night', 'At'],
      correct: ['At', 'night', 'I', 'go', 'to', 'bed', 'at', '10pm.'],
      translation: 'Ebusuku ngiyalala nge-10 ebusuku',
    },
    {
      type: 'multiple_choice',
      instruction: "Iyiphi i-best response ku-'How was your day?'",
      question: "Ofaneneyo wakho ubuza 'How was your day?' Awufuni ukunika impendulo ezwakalayo.",
      options: [
        { text: "It was good. I worked, came home, and made dinner. How about you?", correct: true },
        { text: "Fine.", correct: false },
        { text: "I am good.", correct: false },
      ],
      explanation: "Impendulo encinyane (1-2 sentences) yi-best ku-small talk eUK. 'Fine' kuyikufutshane — kuzwakala unganendaba. 'I am good' kuphendula 'How are you?' hatshi 'How was your day?' Faka i-past tense ngoba usuku selusilukhulu seludlulile.",
    },
  ],

  rwenDialogue: {
    intro: "Ngokuhlwa ku-flat yakho eCroydon. U-flatmate wakho, uTom, ubuyile emsebenzini. Uyabuza ngosuku lwakho.",
    lines: [
      {
        speaker: 'npc',
        target: "Hey! How was your day?",
        native: 'Sawubona! Lubunjani usuku lwakho?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "It was busy. I worked all morning, then I had lunch with a friend.", native: 'Lwesabusy. Ngasebenza ekuseni konke, emva kwalokho ngadla i-lunch lo-mfan-mfan.', correct: true, feedback: "Kuhle kakhulu — 'It was busy' (past tense), 'worked' (-ed), 'had lunch' (past of 'have'). Konke kuhamba kuhle." },
          { target: "Day is fine.", native: 'Usuku luhle.', correct: false, feedback: "Yi-too short, le-'is' kufanele kube 'was' (past). Sebenzisa i-past tense lapho uxoxa ngosuku osedlulile." },
          { target: "I work and walk and eat.", native: 'Ngiyasebenza, ngiyahamba, ngiyadla.', correct: false, feedback: "Sebenzisa i-past tense (worked, walked, ate). Kanjalo, faka ama-time markers ('this morning', 'at lunch') ukuze kucace." },
        ],
      },
      {
        speaker: 'npc',
        target: "Nice. What did you do after lunch?",
        native: 'Kuhle. Wenzeni emva kwe-lunch?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I went back to work, and after work I walked home.", native: 'Ngabuyela emsebenzini, emva komsebenzi ngahamba ngenyawo ekhaya.', correct: true, feedback: "Kahle kakhulu. 'Went back' (irregular past), 'walked home' (regular -ed)." },
          { target: "I goed back to work.", native: '...', correct: false, feedback: "'Goed' akukho — yi-'went'. Lokhu yi-irregular elifanele ufunde ku-l09 ku-Module 4." },
        ],
      },
      {
        speaker: 'npc',
        target: "Are you going to make dinner now?",
        native: 'Uzakwenza i-dinner manje?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I'm making pasta. I'd like to eat early tonight.", native: 'Yebo, ngenza i-pasta. Ngingathanda ukudla masinya namhlanje ebusuku.', correct: true, feedback: "Excellent! 'I'm making' (present continuous), 'I'd like to eat' (polite + 'to' + verb). Konke ku-perfect." },
          { target: "Yes, I make pasta. I want eat early.", native: 'Yebo, ngenza i-pasta. Ngifuna ukudla masinya.', correct: false, feedback: "Mostly kahle. Kodwa khumbula: 'I want TO eat' (-faka i-'to'). Le-'to' phakathi kuka 'want' lo i-verb iqakathekile." },
        ],
      },
      {
        speaker: 'npc',
        target: "Sounds great. I'll join you if there's enough.",
        native: 'Kuzwakala kuhle. Ngizahamba lawe nxa kunokwanele.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "There's plenty. Come and eat with me!", native: 'Kuphezulu. Woza udle lami!', correct: true, feedback: "Kuhle — 'come' yokuthi uyangakuze. Le-conversation seyisalele kuhle. Wenzile yonke i-Module 4." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Yebo! Uyiphethile i-Module 4! Izitho zomzimba, ama-verbs, present, past, daily routine — konke. Manje uyaqhubeka ku-Module 5: izimpahla zokugqoka, izinto zekhaya. Ungazithembi — uyazi okwanele ukukhuluma usuku lonke ngesiNgisi.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bhala impendulo ngekhanda — i-full sentence.',
    prompts: [
      { prompt: '"In the morning I wake up at 6"',         correct: ['In the morning I wake up at 6', 'In the morning, I wake up at 6', 'in the morning i wake up at 6'] },
      { prompt: '"I go to work" (ngesiNgisi)',             correct: ['I go to work', 'i go to work'] },
      { prompt: '"At night I go to bed"',                  correct: ['At night I go to bed', 'at night i go to bed'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wanamhlanje — Module 4 capstone',
    task: "Bhala usuku lwakho lwanamhlanje ngesiNgisi — 5 sentences eziyibhokisi. Sebenzisa ama-time markers ('in the morning', 'at lunch', 'in the evening', 'at night'). Sebenzisa i-past tense ngoba usuku selusiqedile. Eg: 'In the morning I woke up at 6. I had breakfast and went to work. At lunch I ate a sandwich. In the evening I came home and made dinner. At night I read a book and went to bed at 10.' Phinde uyibhale ngelizwi eliphezulu kabili.",
    rwenSignoff: "Wenzile i-MODULE 4! Izitho zomzimba, basic verbs, present, past — konke. Ku-Module 5 sifunda izimpahla, indlu, lezinto zansuku zonke. Sengithokoza ukuthi uyaqhubeka. Sobonana kusasa.",
  },

  phase8: {
    scenario: "Ekuhlwa ku-flat yakho eCroydon, lo flatmate wakho omtsha. Yikho izinto eziluhlobo eziyabuzwa: lubunjani usuku lwakho, wenzeni, uzakwenzani manje. User kufanele asebenzise i-past tense ngosuku osedlulile, le-present continuous ('I'm making') yokwenziwa manje, le-future plans ('I'll').",
    rwenRole: "Tom, 28, your British flatmate in Croydon. Friendly, asks naturally about your day. Real-life small talk that requires past tense + time markers + connecting words.",
    successCriteria: "User describes their day in at least 4-5 sentences using: past tense (regular and irregular — 'worked', 'went', 'ate', 'had'), time markers ('in the morning', 'at lunch', 'after work'), and at least one polite phrase ('I'd like to'). Conversation flows naturally without dropping prepositions or forming wrong past tense ('goed', 'haved').",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
