import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l10-conversation',
  module: 9,
  lesson: 10,
  title: 'A travel conversation — Hurukuro yerwendo',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Mhoro! Wapedza Module 9. Nhasi tinosanganisa zvose: kubvunza nzvimbo, kupiwa nzira, kubvunza distance, kutora transport, kutenga tikiti, kupinda muhotera, kukumbira rubatsiro. Hurukuro imwe — kubva kupanhandare kusvika kuhotera, muChiNgezi.",
    culturalNote: "Pa-rwendo rwekutanga muUK kana muUS, ChiNgezi chinodikanwa pakazara. Kunyange wapedza Module 9, mashoko aya akareruka — anodzokorora pose paunenge wakanyora ticket. Cherechedza: 'please', 'thank you', 'excuse me', 'could you' — aya ndiwo mawa anoita kuti hurukuro yose ifambe zvakanaka. MuLondon kana muManhattan, vagari vanozviona se basis yose yehutsika hwerwendo.",
  },

  chunks: [
    {
      id: 'review_arrived_directions',
      target: "Excuse me, I just arrived. Where is the Underground?",
      native: 'Tichikumbira, ndichangosvika. Underground iri kupi?',
      literal: 'Excuse me, I just arrived. Where is the Underground?',
      emoji: '🛬',
      phonetic: 'ek-SKYOOZ-mee-ay-just-uh-RYVD',
      audioRef: null,
    },
    {
      id: 'review_ticket_distance',
      target: "One ticket to King's Cross, please. How far is it?",
      native: "Tikiti rimwe rekuenda kuKing's Cross, ndapota. Iri kure here?",
      literal: "One ticket to King's Cross, please. How far is it?",
      emoji: '🎫',
      phonetic: 'wun-TIK-it-too-KINGZ-KROS-PLEEZ',
      audioRef: null,
    },
    {
      id: 'review_hotel_help',
      target: "I have a reservation. Could you write down the WiFi password?",
      native: 'Ndine bhuking. Mungandinyorere password yeWiFi here?',
      literal: 'I have a reservation. Could you write down the WiFi password?',
      emoji: '📶',
      phonetic: 'ay-HAV-uh-rez-er-VAY-shun',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Full travel flow',
    explanation: "Rwendo rwese rweChiNgezi rune zvikamu zvina chete: (1) SVIKA — 'Excuse me, where is the ___?' (panhandare/station). (2) FAMBA — 'One ticket to ___, please.' / 'How far?' / 'Turn left, on the right.' (3) SVIKA NHANDIRO — 'I have a reservation under ___.' (4) KUMBIRA — 'Could you help me / write it down / recommend ___?'. Mashoko aya akareruka, asi pa-rwendo rwekutanga, anokupa zvose zvaunoda.",
    examples: [
      { target: "Excuse me, I just arrived. Where is the Underground?",            native: 'Tichikumbira, ndichangosvika. Underground iri kupi?' },
      { target: "One ticket to King's Cross, please. How far is it?",                native: "Tikiti rimwe rekuenda kuKing's Cross, ndapota. Iri kure here?" },
      { target: "I have a reservation. Could you write down the WiFi password?",  native: 'Ndine bhuking. Mungandinyorere password yeWiFi here?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana zvikamu zverwendo',
      pairs: [
        { left: 'Where is the ___?',           right: 'Pakusvika — kubvunza nzvimbo' },
        { left: 'One ticket to ___, please',    right: 'Pa-station — kutenga tikiti' },
        { left: 'I have a reservation',          right: 'Pa-hotera — kupinda' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wakaburuka pa-Heathrow, unoda Underground',
      prompt: 'Tichikumbira, ndichangosvika. Underground iri kupi?',
      correct: [
        "Excuse me, I just arrived. Where is the Underground?",
        "Excuse me, I've just arrived. Where is the Underground?",
        "Excuse me, I just arrived. Where is the tube?",
        "excuse me, I just arrived. Where is the Underground?",
        "Excuse me, I just got here. Where is the Underground?",
      ],
    },
    {
      type: 'translate',
      instruction: "Nyora muChiNgezi — uri pa-Heathrow Express ticket counter",
      prompt: "Tikiti rimwe rekuenda kuKing's Cross, ndapota. Iri kure here?",
      correct: [
        "One ticket to King's Cross, please. How far is it?",
        "One ticket to King's Cross, please. How far?",
        "A ticket to King's Cross, please. How far is it?",
        "Could I have one ticket to King's Cross, please? How far is it?",
        "one ticket to King's Cross, please. How far is it?",
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wapinda muhotera, unoda WiFi',
      prompt: 'Ndine bhuking. Mungandinyorere password yeWiFi here?',
      correct: [
        "I have a reservation. Could you write down the WiFi password?",
        "I have a booking. Could you write down the WiFi password?",
        "I have a reservation. Could you write down the wifi password?",
        "I have a reservation. Could you write the WiFi password down?",
        "i have a reservation. could you write down the wifi password?",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga — wapinda muhotera, unotanga hurukuro',
      words: ['have', 'reservation', 'a', 'I'],
      correct: ['I', 'have', 'a', 'reservation'],
      translation: 'Ndine bhuking',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — uri pa-concierge, unoda recommendation',
      sentence: 'Could you ____ a good restaurant nearby?',
      options: ['recommend', 'remember', 'remove'],
      correct: 'recommend',
      context: "'Could you recommend ___?' = mubvunzo wakanaka pakukumbira chiziviso.",
    },
  ],

  rwenDialogue: {
    intro: "Wakaburuka pa-Heathrow Terminal 5 — rwendo rwekutanga muUK. Famba kubva pakuburuka kusvika kuhotera, ChiNgezi chete.",
    lines: [
      { speaker: 'npc', target: "Welcome to Heathrow! First time in the UK?", native: 'Mauya kuHeathrow! Rwendo rwekutanga muUK?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — excuse me, where is the Underground? I'm going to King's Cross.", native: "Hongu — tichikumbira, Underground iri kupi? Ndiri kuenda kuKing's Cross.", correct: true,  feedback: 'Wakwanisa — wakatanga ne "Excuse me", wakatsanangura nzvimbo yauchaenda.' },
          { target: "Tube?",                                                                            native: 'Tube?',                                                              correct: false, feedback: 'Pfupi zvakanyanya — bvunza mubvunzo wakakwana.' },
        ],
      },
      { speaker: 'npc', target: "Right this way — Piccadilly line, blue. The ticket counter is on the right.", native: 'Tevera nzira iyi — Piccadilly line, bhuru. Pekutenga matikiti pari kurudyi.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. One ticket to King's Cross, please. How much is it?", native: "Ndatenda. Tikiti rimwe rekuenda kuKing's Cross, ndapota. Marii?", correct: true,  feedback: 'Wakwanisa — wakatenda, watenga tikiti, wakabvunza mari pamutsetse umwechete.' },
          { target: "Money King's Cross.",                                                  native: "Mari King's Cross.",                                            correct: false, feedback: "Mashoko mashoma zvakanyanya — wedzera 'one ticket' uye 'please'." },
        ],
      },
      { speaker: 'npc', target: "That'll be £25, please. The next train is in 8 minutes from platform 6.", native: "Ndi£25, ndapota. Chitima chinotevera chiri pamaminitsi masere kubva paplatform 6." },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you. How far is the platform from here?", native: 'Ndatenda. Platform iri kure kubva pano here?', correct: true,  feedback: 'Wakwanisa — wakaramba uchibvunza, hutsika hwakareruka.' },
          { target: "Where train.",                                          native: 'Chitima kupi.',                                  correct: false, feedback: 'Mashoko akakanganiswa — bvunza nemibvunzo yakakwana.' },
        ],
      },
      { speaker: 'npc', target: "Just around the corner — 30 seconds. Have a great trip!", native: 'Pakona apa — masekonzi makumi matatu. Ramba uchifara!' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Thank you so much. Have a good day!", native: 'Ndatenda chaizvo. Iva nezuva rakanaka!', correct: true,  feedback: 'Wakwanisa — wakatenda nehutsika hwakakwana.' },
          { target: "Bye.",                                       native: 'Sara.',                                  correct: false, feedback: 'Yakareruka — wedzera "Thank you" pamberi.' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wapedza Module 9 — kubva pakuburuka pandege kusvika pa-platform, ChiNgezi chete. Wakaita journey kuburikidza nemashoko aunoshandisa muLondon, muNYC, muJoburg, kose. Famba zvakanaka mukati merwendo rwako.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: "Excuse me, where is the Underground? (in English)", correct: ["Excuse me, where is the Underground?", "Excuse me, where is the tube?", "Excuse me, where is the Underground", "excuse me, where is the Underground?"] },
      { prompt: "I have a reservation (in English)",                  correct: ['I have a reservation', 'I have a reservation.', 'I have a booking', 'i have a reservation.'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi — Hurukuro yerwendo',
    task: "Nhasi, fungidzira kuti wapedza kuburuka panhandare yeChiNgezi. Itira hurukuro yose pamuromo: 'Excuse me, where is the Underground?' → 'One ticket to ___, please.' → 'How far?' → 'I have a reservation under ___.' → 'Could you write down the WiFi password?'. Pasina kutarisa kumashure.",
    rwenSignoff: "Wapedza Module 9 — wakaita journey kubvira kunhandare kusvika kuhotera, mashoko ako anokupa kibhokisi rekufamba munyika dzinotaura ChiNgezi. Tichaonana muModule 10.",
  },

  phase8: {
    scenario: "Capstone. You've just landed at Heathrow on your first trip to the UK, with a hotel booking at Premier Inn King's Cross. Run the full journey end-to-end in English: ask for directions to the Underground, buy a tube ticket, ask how far, check into the hotel, ask the receptionist for the WiFi and one tourist recommendation. The whole thing should naturally span 4 minutes.",
    rwenRole: "Three NPCs: a Heathrow info desk staffer (welcoming, points to the tube), a tube ticket seller (efficient, transactional), and Priya the Premier Inn receptionist (warm, helpful). Each will respond naturally to your pace.",
    successCriteria: "Full journey: opens with 'Excuse me, where is the Underground?', buys 'one ticket to King's Cross', asks 'How far?', states 'I have a reservation', asks 'Could you write down the WiFi password?' or recommends, thanks each NPC. Combines chunks from Module 9 lessons 1-9.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
