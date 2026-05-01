import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l02-foods',
  module: 7,
  lesson: 2,
  title: 'Common foods — Zvikafu zvinozivikanwa',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Nhasi tinodzidza mazita echikafu chinozivikanwa muChiNgezi: chingwa, mupunga, nyama. Mashoko echikafu ndiwo aunoshanduisa kazhinji kana uchitaura nezvazvichaitika.",
    culturalNote: "Kumusha kweZimbabwe, sadza ndicho chikafu chikuru. MuhotteliyeHarare neyaCape Town, menyu inenge yaakawanda yakanyorwa muChiNgezi — chingwa, mupunga, nyama, vegetables. Ziva mazita awa kuti uorder pasina kuvhiringika. Cherechedza: muChiNgezi 'meat' inotaura nyama yose — beef, chicken, pork — kwete chimwe chete chete.",
  },

  chunks: [
    {
      id: 'bread',
      target: 'Bread',
      native: 'Chingwa',
      literal: undefined,
      emoji: '🍞',
      phonetic: 'BRED',
      audioRef: null,
    },
    {
      id: 'rice',
      target: 'Rice',
      native: 'Mupunga',
      literal: undefined,
      emoji: '🍚',
      phonetic: 'RAYS',
      audioRef: null,
    },
    {
      id: 'meat',
      target: 'Meat',
      native: 'Nyama',
      literal: undefined,
      emoji: '🍖',
      phonetic: 'MEET',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Food nouns — countable vs uncountable',
    explanation: "MuChiNgezi, zvimwe zvikafu hauziverengi — 'rice', 'bread', 'meat' — saka haupi 'a' kana 's' (kwete 'a rice', kwete 'breads'). Unoti 'some bread', 'a slice of bread', 'a bowl of rice'. Itsika yakasiyana neChiShona inozotaurira mumwe asina shoko rakadaro.",
    examples: [
      { target: 'Some bread, please.',     native: 'Chingwa chimwe, ndapota.' },
      { target: 'A bowl of rice.',          native: 'Ndiro yemupunga.' },
      { target: 'I love meat.',             native: 'Ndinoda nyama chaizvo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana zvikafu',
      pairs: [
        { left: 'Bread', right: 'Chingwa' },
        { left: 'Rice',  right: 'Mupunga' },
        { left: 'Meat',  right: 'Nyama' },
      ],
    },
    {
      type: 'translate',
      instruction: "Nyora muChiNgezi — uri kuda chingwa pa-breakfast",
      prompt: 'Chingwa, ndapota.',
      correct: [
        'Bread, please.',
        'Some bread, please.',
        'Bread please.',
        'Some bread please.',
        'bread, please.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — taurira waiter kuti unoda mupunga',
      prompt: 'Ndinoda mupunga.',
      correct: [
        'I want rice.',
        "I'd like rice.",
        'I would like rice.',
        'I want some rice.',
        'i want rice.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa — uri pa-breakfast paHarare hotel",
      sentence: "I'd like some ____ and butter, please.",
      options: ['bread', 'rice', 'meat'],
      correct: 'bread',
      context: "Pa-breakfast, chingwa nebhata zvinoenderana.",
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga mutsara — uri kuda mupunga nenyama',
      words: ['I', 'want', 'rice', 'and', 'meat'],
      correct: ['I', 'want', 'rice', 'and', 'meat'],
      translation: 'Ndinoda mupunga nenyama',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Waiter akabvunza 'What would you like for breakfast?'. Unodawo chingwa nebhata. Pindura sei?",
      options: [
        { text: "Some bread and butter, please.", correct: true },
        { text: "A bread, please.",                correct: false },
        { text: "Breads, please.",                 correct: false },
      ],
      explanation: "'Bread' haziverengwi — kwete 'a bread', kwete 'breads'. Shandisa 'some bread' kana 'a slice of bread'.",
    },
  ],

  rwenDialogue: {
    intro: 'Uri pa-breakfast paHarare hotel. Waiter anotaura ChiNgezi auya kuna iwe kuti aone zvaunoda.',
    lines: [
      { speaker: 'npc', target: "Good morning, what can I get you for breakfast?", native: 'Mangwanani, ndingakupei chii pa-breakfast?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Some bread and tea, please.",  native: 'Chingwa netii, ndapota.', correct: true,  feedback: 'Wakwanisa — order yakajeka, ine hutsika.' },
          { target: "A bread please.",                native: 'Chingwa chimwe ndapota.', correct: false, feedback: "'Bread' haziverengi — usaisa 'a'. Shandisa 'some bread'." },
          { target: "Bread.",                          native: 'Chingwa.',                  correct: false, feedback: "Hapana 'please' — pa-restaurant unoda hutsika." },
        ],
      },
      { speaker: 'npc', target: "Coming right up.", native: 'Inouya pakarepo.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Mazita echikafu uchaaita order paimba yose yawanopinda — pakatorwa, paair-port, pa-mhuri yatonga.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Bread (in English)', correct: ['Bread', 'bread', 'Bread.', 'bread.'] },
      { prompt: 'I want rice (in English)', correct: ['I want rice', 'I want rice.', "I'd like rice", "I'd like rice.", 'i want rice'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira menyu yebreakfast — taura muChiNgezi zvitatu zvaunoda: 'Bread, tea, eggs, please.' Pamuromo, kunyange uri wega.",
    rwenSignoff: "Tichaonana mangwana — tinopinda murestaurant.",
  },

  phase8: {
    scenario: "You're staying at a hotel in Harare's Avondale. The breakfast room is busy. An English-speaking server comes to your table to take your order — bread, tea, and eggs.",
    rwenRole: "Tanaka, 28, the breakfast server. Speaks polished English with a Zimbabwean accent. Polite, attentive.",
    successCriteria: "User orders at least one food item using 'some' or a polite request frame ('I'd like...', 'Could I have...'), avoids 'a bread' or 'breads', uses 'please'.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
