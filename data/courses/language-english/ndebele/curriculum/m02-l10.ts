import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-numbers-conversation',
  module: 2,
  lesson: 10,
  title: 'Numbers conversation — Putting it together',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Iqembu lamhla! Lamuhla siphethelela uModule 2: amanani, isikhathi, izinsuku — konke kuhlangana endaweni eyodwa. Sizahlangana e-airport check-in counter — ubudala, isikhathi sokuhamba, inombolo yendiza, kanye nemali yempahla yokuhamba.",
    culturalNote: "Lokhu kuyimemo yokuphenya: ubona ukuthi konke esikufundileyo kungumphumela owodwa. EsiNgisini, ukuxoxa nge-airport, clinic, loba ku-bank kuyimo yamanani — uyavame ukuzwa amanani amabili kumbe amathathu emoyeni omunye: 'Gate twenty-three, three forty-five p.m., that'll be fifty pounds.' Ungesabi lapho ungezwa konke — buza okukodwa: 'Sorry — what time? What gate?' Inkulumo enkulu yase-Britain (le yase-USA) ihloniphe imibuzo — ngakho buza ngokungazi. Le sifundo iyaphela ngendlela yempela: ungenelela kunkulumo eyiyo, akusi imisho enye eyiqobo.",
  },

  chunks: [
    {
      id: 'flight_number',
      target: 'My flight is BA two-four-seven',
      native: 'Indiza yami yi BA 247',
      literal: 'My flight is BA 2-4-7',
      emoji: '✈️',
      phonetic: 'my-FLYT-iz-BEE-AY-too-for-SEH-vn',
      audioRef: null,
    },
    {
      id: 'departure_time',
      target: 'It departs at half past three',
      native: 'Iyahamba ngo-3:30',
      literal: 'It departs at half past three (3:30)',
      emoji: '🕞',
      phonetic: 'it-dee-PARTS-at-haf-past-THREE',
      audioRef: null,
    },
    {
      id: 'baggage_fee',
      target: "That'll be fifty pounds",
      native: 'Lokho kuzakuba ngamaphondi angamatshumi amahlanu',
      literal: 'That-will be fifty pounds (£50)',
      emoji: '💷',
      phonetic: 'thatl-bee-FIF-tee-POWNDZ',
      audioRef: null,
    },
    {
      id: 'today_is',
      target: "Today is Wednesday, the fifth of May",
      native: 'Lamuhla nguLwesithathu, ngomhla wesihlanu kaNkwenkwezi',
      literal: 'Today is Wednesday, the 5th of May',
      emoji: '📅',
      phonetic: 'too-DAY-iz-WENZ-day-the-FIFTH-uv-MAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Inkulumo yamanani — buza, qiniseka, qhubeka",
    explanation: "Lapho amanani amaningi ehambelana, indlela yokuwasebenzisa yi: (1) Lalela. (2) Buza okukodwa nxa ungaqondisi: 'Sorry — what time?' kumbe 'Sorry — what gate?'. (3) Phinda inombolo lapho uqondisise: 'Gate twenty-three, OK.' Lokhu kungumthetho omkhulu — phinda inombolo phambi kakho. Akukuyona ihlazo — abesilungu bayakhumbula ukuthi inombolo iyathobeka, futhi bayazwa lapho uphinda.",
    examples: [
      { target: 'Sorry — what time?',                  native: 'Uxolo — sesiyihola bani?' },
      { target: 'Gate twenty-three, OK.',                native: 'Igate ngamatshumi amabili lantathu, kulungile.' },
      { target: 'Three forty-five, got it.',              native: '3:45, ngiyezwa.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa imisho yangakini eyodwa',
      pairs: [
        { left: 'Half past three',     right: '3:30' },
        { left: 'Quarter to four',      right: '3:45' },
        { left: 'Gate twenty-three',     right: 'Gate 23' },
        { left: 'Fifty pounds',          right: '£50' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (Lamuhla nguLwesithathu)',
      prompt: 'Lamuhla nguLwesithathu',
      correct: ['Today is Wednesday', 'today is Wednesday', 'Today is Wednesday.', 'today is Wednesday.'],
    },
    {
      type: 'fill_blank',
      instruction: "Gcwalisa indawo engelalutho — uphinda ulwazi",
      sentence: "OK, gate twenty-three, ____ past three. Got it.",
      options: ['half', 'quarter', 'past'],
      correct: 'half',
      context: "Uphinda lokho ekutshelwe ngu cashier wezindiza — 3:30 = half past three.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha umphendulo wokulondolozekile',
      question: "Cashier athi: 'Gate twenty-three, half past three, fifty pounds.' Iyiphi indlela engcono yokuphendula?",
      options: [
        { text: "Gate twenty-three, three thirty, fifty pounds. Got it.", correct: true },
        { text: "Yes.",                                                    correct: false },
        { text: "I don't know.",                                            correct: false },
      ],
      explanation: "Ukuphinda inombolo phambi kakho yikho ukuqondisisa kahle — uvumelana, futhi cashier akabuye akhuluma futhi nxa uphendula ngokungalunganga.",
    },
    {
      type: 'build_sentence',
      instruction: 'Hlela amagama — ubuza umsebenzi we-airport',
      words: ['gate?', 'time', 'and', 'What', 'what'],
      correct: ['What', 'time', 'and', 'what', 'gate?'],
      translation: 'Sesiyihola bani futhi yiyiphi i-gate?',
    },
  ],

  rwenDialogue: {
    intro: 'Use ku check-in counter ku-OR Tambo. Cashier ukunika ulwazi olunengi ngomzuzu owodwa — kufuneka uqondisise konke.',
    lines: [
      { speaker: 'npc', target: "Right — your flight BA two-four-seven departs at half past three from gate twenty-three. Baggage fee is fifty pounds.", native: 'Kuhle — indiza yakho ye BA 247 iyahamba ngo-3:30 e-gate 23. Imali yempahla ngamaphondi angamatshumi amahlanu.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Sorry — what time and what gate?",     native: 'Uxolo — sesiyihola bani futhi yiyiphi i-gate?',    correct: true,  feedback: "Kuhle kakhulu! Wabuza imibili imibuzo eyodwa — kuyangcono kulokuvuma uphezu konke." },
          { target: "Yes.",                                    native: 'Yebo.',                                              correct: false, feedback: "'Yes' lapho ungaqondisi konke kuyichilo elikhulu — uzaphumelela igate elingalunganga. Buza." },
          { target: "Three thirty.",                            native: '3:30.',                                              correct: false, feedback: "Wabamba isikhathi nje qha — qaphela i-gate kanye nemali. Buza ngokugcwele." },
        ],
      },
      { speaker: 'npc', target: "Half past three. Gate twenty-three. Fifty pounds for the bag.", native: '3:30. Igate 23. Amaphondi angamatshumi amahlanu kumthwalo.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Three thirty, gate twenty-three, fifty pounds. Thank you.", native: '3:30, igate 23, amaphondi angamatshumi amahlanu. Ngiyabonga.', correct: true,  feedback: "Ungaphumelele! Wonke umlomo waphenduka — uphinde okukodwa zonke izinombolo. Kuyimisebenzi yangempela." },
          { target: "Yes, OK.",                                                    native: 'Yebo, kulungile.',                                                  correct: false, feedback: "Kungahle — kodwa uyaqhamuka njengomuntu ongaqinisekayo. Phinda zonke izinombolo phambi kakho — kuyivikela." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Ungaphumelele kakhulu! UModule 2 uphethile. Manje uyalibhalwa amanani, isikhathi, kanye izinsuku ngokuzimisela. Sesizoya ku Module 3 — ukufundisana eyokukhuluma ngokwakhe.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli phezulu. Bhala ngokwezikhumbuzo zakho.',
    prompts: [
      { prompt: 'Sesiyihola bani futhi yiyiphi i-gate? (ngesiNgisi)', correct: ['What time and what gate?', 'what time and what gate?', 'What time and what gate'] },
      { prompt: '3:30, gate 23, £50 (phinda zonke izinombolo ngesiNgisi)', correct: ['Three thirty, gate twenty-three, fifty pounds', 'Half past three, gate twenty-three, fifty pounds', 'three thirty, gate twenty-three, fifty pounds'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wokuphetha kuModule 2',
    task: "Cabanga indawo elinde ku-airport. Tsho ngomlomo: 'My flight is at [time]. Gate [number]. Today is [day].' Phinda kabili. Lokhu yikho ukuphethelela ulwazi lwakho lwesigatshana esisha.",
    rwenSignoff: "Wenze uModule 2 wonke! Amanani, isikhathi, izinsuku — konke kunye nawe. Sesiqhubekela phambili. Salani kahle.",
  },

  phase8: {
    scenario: "You're at OR Tambo airport check-in for your first international flight. The agent rapid-fires several pieces of information at you: flight number, departure time, gate number, baggage fee, and what day to come back if there's an issue. You need to confirm everything correctly.",
    rwenRole: "Tendai, 28, a fast-talking check-in agent. He'll give you flight BA247, depart 15:30, gate 23, baggage £50. He'll speak fast and won't slow down unless asked. Friendly but busy.",
    successCriteria: "User asks at least once for clarification on time, gate, or fee. Repeats back at least three of the four pieces of information correctly. Uses 'Sorry — what time / what gate / how much?' rather than just 'Yes'. Closes with 'Thank you'.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
