import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l10-conversation',
  module: 7,
  lesson: 10,
  title: 'A meal conversation — Hurukuro yekudya',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Mhoro! Wapedza Module 7. Nhasi tinosanganisa zvose: kupinda murestaurant, kuorder, kutaura zvaunoda, kutsanangura sadza, kupedza nehutsika. Hurukuro imwe — chero zvakawanda — kupedza basa.",
    culturalNote: "Mukati medhinari yeChiNgezi, hutsika hwakavakirwa pamashoko mashoma asi akanaka: 'please', 'thank you', 'I'd like', 'help yourself'. MuShona, kudya kunenge kwakapfuma muhutsika hwekugovera; muChiNgezi, kudya kunenge kwakapfuma muhutsika yekutarisira mumwe asina kupa pressure. Mitsetse yose miviri inomira chete — yakareruka yose miviri kana waiziva.",
  },

  chunks: [
    {
      id: 'review_table_menu',
      target: "A table for two, please. Could we have the menu?",
      native: 'Tafura yevaviri, ndapota. Tingapihwe menyu here?',
      literal: 'A table for two, please. Could we have the menu?',
      emoji: '🪑',
      phonetic: 'a-TAY-bul-fer-TOO-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_id_like_modify',
      target: "I'd like the chicken, without onions, please.",
      native: 'Ndingade huku, pasina hanyanisi, ndapota.',
      literal: "I'd like the chicken, without onions, please.",
      emoji: '🍗',
      phonetic: "ayd-LAYK-thuh-CHIK-en",
      audioRef: null,
    },
    {
      id: 'review_delicious_bill',
      target: "It was delicious. Could we have the bill, please?",
      native: 'Yainoteyera. Tingapihwe bhiro here, ndapota?',
      literal: 'It was delicious. Could we have the bill, please?',
      emoji: '🧾',
      phonetic: 'it-WUZ-de-LISH-us',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full meal flow',
    explanation: "Hurukuro yekudya yose ine zvikamu zvina. (1) PINDA — 'A table for two, please.' (2) ORDER — 'I'd like ___, without ___, please.' (3) DURING — 'It's delicious' / 'Could I have some water?' (4) PEDZA — 'Could we have the bill, please?' Nehutsika: 'please', 'thank you', 'thanks for the meal'. Mutsetse uyu unoshanda muLondon, Cape Town, Joburg, Harare hotel — kwese kunoshandiswa ChiNgezi murestaurant.",
    examples: [
      { target: "A table for two, please.",                                  native: 'Tafura yevaviri, ndapota.' },
      { target: "I'd like the chicken, without onions, please.",            native: 'Ndingade huku, pasina hanyanisi, ndapota.' },
      { target: "It was delicious. Could we have the bill, please?",        native: 'Yainoteyera. Tingapihwe bhiro here, ndapota?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana zvikamu zvehurukuro yekudya',
      pairs: [
        { left: 'A table for two',          right: 'How you arrive' },
        { left: "I'd like ___, please",     right: 'How you order' },
        { left: 'The bill, please',         right: 'How you finish' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wapinda murestaurant uine shamwari',
      prompt: 'Tafura yevaviri, ndapota.',
      correct: [
        'A table for two, please.',
        'Table for two, please.',
        'A table for two please.',
        'a table for two, please.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kuorder huku pasina hanyanisi',
      prompt: 'Ndingade huku, pasina hanyanisi, ndapota.',
      correct: [
        "I'd like the chicken, without onions, please.",
        "I'd like chicken, without onions, please.",
        "I would like the chicken, without onions, please.",
        "Could I have the chicken, without onions, please?",
        "i'd like the chicken, without onions, please.",
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wapedza kudya, kumbira bhiro',
      prompt: 'Yainoteyera. Tingapihwe bhiro here, ndapota?',
      correct: [
        "It was delicious. Could we have the bill, please?",
        "That was delicious. Could we have the bill, please?",
        "It was delicious. The bill, please.",
        "It was delicious. Could we get the bill, please?",
        "it was delicious. could we have the bill, please?",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga order yenyatsoda',
      words: ["I'd", 'rice', 'like', 'please', 'the'],
      correct: ["I'd", 'like', 'the', 'rice', 'please'],
      translation: 'Ndingade mupunga ndapota',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — wapedza, ufunga waiter wakanaka',
      sentence: 'Thanks ____ the meal — it was lovely.',
      options: ['for', 'on', 'in'],
      correct: 'for',
      context: "'Thanks for ___' inotenda chinhu chakapihwa kana basa rakaitwa.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa-restaurant muCape Town nemudiwa wako. Wapinda. Itira hurukuro yose: pinda, order, dya, pedza.",
    lines: [
      { speaker: 'npc', target: "Hi, welcome. Just the two of you?", native: 'Hesi, mauya. Muri vaviri chete here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, a table for two, please. Could we see the menu?", native: 'Hongu, tafura yevaviri, ndapota. Tingaone menyu here?', correct: true,  feedback: 'Wakwanisa — pinda yakajeka, watokumbira menyu pakarepo.' },
          { target: "Two.",                                                       native: 'Vaviri.',                                                correct: false, feedback: "Pfupi zvakanyanya — pa-restaurant unoda hurukuro yakakwana." },
          { target: "Hello, hungry.",                                              native: 'Mhoro, ndine nzara.',                                    correct: false, feedback: "Hauna kupindura mubvunzo — hostess akabvunza nezve nhamba yenyu." },
        ],
      },
      { speaker: 'npc', target: "Right this way. Here's the menu. Anything to drink while you decide?", native: 'Tevera nzira iyi. Heyi menyu. Pane chamungade kunwa muchifunga here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Two glasses of water, please. And I'd like the chicken, without onions.", native: 'Magirazi maviri emvura, ndapota. Uye ndingade huku, pasina hanyanisi.', correct: true,  feedback: 'Wakwanisa — order yakajeka, yakawedzera modification.' },
          { target: "Water. Chicken no onion.",                                                  native: 'Mvura. Huku pasina hanyanisi.',                                          correct: false, feedback: "Mashoko mashoma zvakanyanya — wedzera 'please' uye 'I'd like' kuti zvinzwike sechikumbiro." },
        ],
      },
      { speaker: 'npc', target: "Lovely choice. Coming up.", native: 'Sarudzo yakanaka. Inouya.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. It was delicious — could we have the bill, please?", native: 'Ndatenda. Yainoteyera — tingapihwe bhiro here, ndapota?', correct: true,  feedback: 'Wakwanisa — wapedza nehutsika hwakakwana.' },
          { target: "Bill.",                                                                 native: 'Bhiro.',                                                    correct: false, feedback: "Pfupi — wedzera 'Could we have' + 'please'. Pa-USA unogona kushandisa 'Could we have the check, please?'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wapedza Module 7 — nhasi watangira pamukova kusvika pakubhadhara, mashoko ako akapfava, akajeka, akagamuchira hutsika hweUK/SA pasina kurasa hutsika hwedu hwekugamuchira. Famba zvakanaka.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora hurukuro yakakwana.',
    prompts: [
      { prompt: "I'd like the chicken, without onions, please (in English)", correct: ["I'd like the chicken, without onions, please", "I'd like the chicken, without onions, please.", "I'd like the chicken without onions please", "i'd like the chicken, without onions, please."] },
      { prompt: 'Could we have the bill, please? (in English)', correct: ['Could we have the bill, please?', 'Could we have the bill please?', 'The bill, please.', 'Could we have the check, please?', 'could we have the bill, please?'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi — Hurukuro yedzimba',
    task: "Nhasi, fungidzira kuti uri pa-restaurant. Itira hurukuro yose pamuromo muChiNgezi: 'A table for two, please.' → 'I'd like ___, without ___, please.' → 'Could I have a glass of water?' → 'It was delicious.' → 'Could we have the bill, please?' Pasina kutarisa kumashure.",
    rwenSignoff: "Wapedza Module 7 — wakaita journey kubvira kubika sadza kusvika pakuorder paLondon. Tichaonana muModule 8.",
  },

  phase8: {
    scenario: "Capstone. You're at a busy mid-range restaurant in Cape Town with your partner. Run the full meal: arrive (table for two), order (with a modification), drink, comment on the food, ask for the bill, and thank the staff. The conversation should naturally span 4 minutes.",
    rwenRole: "Lerato, 30, the same hostess from m07-l03 — and Sipho, 35, the waiter from m07-l04. Both polished, attentive. Will react naturally to your pace.",
    successCriteria: "Full meal flow: 'a table for two', orders with 'I'd like ___, without ___', uses 'a glass of water' or similar drink, comments 'delicious' / 'lovely' during the meal, closes with 'Could we have the bill?' + 'thank you'. Combines chunks from Module 7 lessons 1-9.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
