import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07-hotel',
  module: 9,
  lesson: 7,
  title: 'Hotel & Accommodation — Hotera',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mhoro! Wati wasvika — hotera. Mashoko ari nyore: 'I have a reservation', 'My room key', 'I'd like to check out'. Mibvunzo iyi inoshandiswa pose: muHarare, muLondon, muNew York.",
    culturalNote: "Pa-hotera yeChiNgezi, vagari vacho vanowedzera 'sir' kana 'ma'am' kuratidza tsika — chinhu chinotorwa seyakanyanyokosha kana wakambobata mubasa rakadaro. Cherechedza: kana paine dambudziko mukamuri (mvura, AC, noise), itaura zvine hutsika asi zvakajeka — 'There's a problem with the ___' — havasi vakuomeshera, vanoda kugadzirisa.",
  },

  chunks: [
    {
      id: 'reservation',
      target: 'I have a reservation.',
      native: 'Ndine bhuking.',
      literal: 'I have a reservation.',
      emoji: '📋',
      phonetic: 'ay-HAV-uh-rez-er-VAY-shun',
      audioRef: null,
    },
    {
      id: 'room_key',
      target: 'My room key',
      native: 'Kiyi yekamuri yangu',
      literal: 'My room key',
      emoji: '🔑',
      phonetic: 'my-ROOM-KEE',
      audioRef: null,
    },
    {
      id: 'check_out',
      target: "I'd like to check out.",
      native: 'Ndingade kubuda.',
      literal: 'I-would like to check out.',
      emoji: '🧳',
      phonetic: 'ayd-LAYK-too-CHEK-owt',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hotel vocabulary',
    explanation: "Hotera ine zvikamu zvitatu zvehurukuro: (1) PINDA — 'Hi, I have a reservation under ___.' (2) MUKATI — 'Could I have my room key?' / 'There's a problem with the ___.' (3) BUDA — 'I'd like to check out, please.' Mashoko aya anoshanda kose, kunyange uri muSerena Hotel kuKampala kana Premier Inn yeManchester.",
    examples: [
      { target: 'I have a reservation.',    native: 'Ndine bhuking.' },
      { target: 'My room key',               native: 'Kiyi yekamuri yangu' },
      { target: "I'd like to check out.",     native: 'Ndingade kubuda.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko ehotera',
      pairs: [
        { left: 'I have a reservation',  right: 'Ndine bhuking' },
        { left: 'My room key',            right: 'Kiyi yekamuri yangu' },
        { left: "I'd like to check out", right: 'Ndingade kubuda' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wapinda muhotera, unozvitaura kureception',
      prompt: 'Ndine bhuking pamusoro paBongani Moyo.',
      correct: [
        'I have a reservation under Bongani Moyo.',
        'I have a reservation for Bongani Moyo.',
        'I have a booking under Bongani Moyo.',
        'i have a reservation under Bongani Moyo.',
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — wabuda kamuri, kiyi haichashande',
      prompt: 'Kiyi yangu yekamuri haichashande.',
      correct: [
        "My room key isn't working.",
        "My room key doesn't work.",
        "My key isn't working.",
        "my room key isn't working.",
        "My room key is not working.",
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Ronga — wapedza nguva yako, unoda kubuda',
      words: ['to', 'like', 'check', "I'd", 'out'],
      correct: ["I'd", 'like', 'to', 'check', 'out'],
      translation: 'Ndingade kubuda',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — pa-reception, paunopinda',
      sentence: 'Hi, I ____ a reservation under Mhuri.',
      options: ['have', 'do', 'am'],
      correct: 'have',
      context: "'I have a reservation' — ichi ndicho mhanduro ye 'I am' kana 'I do' panapa.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — pane dambudziko mu-AC mukamuri',
      prompt: "Pane dambudziko ne-AC mukamuri.",
      correct: [
        "There's a problem with the AC in the room.",
        "There is a problem with the AC in the room.",
        "There's a problem with the air conditioning in the room.",
        "there's a problem with the AC in the room.",
        "The AC in the room isn't working.",
      ],
    },
  ],

  rwenDialogue: {
    intro: "Wapinda muPremier Inn muLondon. Wapedza maawa anenge gumi pa-flight. Pinda, wopindukura dambudziko diki rekamuri.",
    lines: [
      { speaker: 'npc', target: "Welcome to Premier Inn. Checking in?", native: 'Mauya kuPremier Inn. Muri kupinda here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, I have a reservation under Mhuri.", native: 'Hongu, ndine bhuking pamusoro paMhuri.', correct: true,  feedback: 'Wakwanisa — wakatanga zvakanaka, wakapa zita.' },
          { target: "Room.",                                       native: 'Kamuri.',                                  correct: false, feedback: 'Pfupi zvakanyanya — taura zita rebhuking.' },
          { target: "I sleep here.",                                native: 'Ndinorara pano.',                          correct: false, feedback: "Hauna kutaura kuti une bhuking. Tanga ne 'I have a reservation'." },
        ],
      },
      { speaker: 'npc', target: "Lovely. Here's your room key — room 412. Anything else?", native: 'Zvakanaka. Heyi kiyi yekamuri yenyu — kamuri 412. Pamwe pane chimwe chinhu here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Actually, yes — could I have a different room? There's a problem with the AC in 412.", native: 'Chaiyo, hongu — ndingawane here imwe kamuri? Pane dambudziko ne-AC mu412.', correct: true,  feedback: 'Wakwanisa — wakaitsanangurira nehutsika asi zvakajeka.' },
          { target: "Room broken.",                                                                                       native: 'Kamuri yakanyangadzwa.',                                                          correct: false, feedback: "Tsanangura zvakajeka — 'There's a problem with the ___'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakapindira nehutsika, wakapindira dambudziko zvine hutsika. Hotera kuLondon kana muHarare — mashoko mamwechete anoshanda.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa kumashure. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'I have a reservation (in English)',   correct: ['I have a reservation', 'I have a reservation.', 'I have a booking', 'i have a reservation.'] },
      { prompt: "I'd like to check out (in English)", correct: ["I'd like to check out", "I'd like to check out.", "I would like to check out.", "i'd like to check out."] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nhasi, fungidzira kuti wapinda muhotera. Itira hurukuro yose pamuromo: 'Hi, I have a reservation under ___.' → 'Could I have my room key?' → 'There's a problem with the ___.' → 'I'd like to check out.' Pasina kutarisa kumashure.",
    rwenSignoff: "Aziva mashoko ehotera, anorara zvine rugare. Tichaonana mangwana.",
  },

  phase8: {
    scenario: "You're checking into the Premier Inn London Waterloo. After getting your room, you discover the air conditioning isn't working. Go back to reception, raise the issue politely, and ask for either a fix or a different room.",
    rwenRole: "Priya, 28, hotel receptionist. Apologetic, problem-solver, will offer two options (engineer or move room). Clear British English.",
    successCriteria: "User opens with 'I have a reservation under ___', raises 'There's a problem with the AC' or similar, accepts one of the offered solutions, and thanks her.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
