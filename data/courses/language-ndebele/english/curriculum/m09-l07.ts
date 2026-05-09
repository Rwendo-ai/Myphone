import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l07',
  module: 9,
  lesson: 7,
  title: 'iMbongi — the praise poet',
  estimatedMinutes: 7,
  xpReward: 35,

  hook: {
    rwenLine: "Before there were newspapers, before there were history books, before there was Twitter, the Ndebele nation had imbongi. The praise poet who stood in front of the king and recited him — his deeds, his ancestors, his shortcomings, in roaring rhythmic verse. Imbongi is the original journalist, historian and accountability institution of uMthwakazi, all in one body.",
    culturalNote: "iMbongi (plural: iziMbongi) is a praise poet — a specialist in izibongo, the formal praise tradition. Historically every Ndebele king had his official imbongi, who could be summoned to recite his praises at gatherings, military campaigns, and royal ceremonies. uMzilikazi and uLobengula both had iziMbongi attached to the royal court. Crucially, imbongi was NOT a flatterer — the tradition explicitly allowed (and required) the praise poet to call out a king's failings in verse, in front of the assembled nation. It was the only voice that could publicly criticise royalty without consequence. The most famous modern iMbongi is the late Mzwakhe Mbuli of South Africa, who carried the tradition into the anti-apartheid struggle. iziMbongi still perform at Ndebele funerals, weddings, and royal commemorations today.",
  },

  chunks: [
    {
      id: 'imbongi',
      target: 'iMbongi',
      native: 'a praise poet',
      literal: 'class 9 noun — from -bonga (to thank / praise)',
      emoji: '📯',
      phonetic: 'eem-BOH-ngee',
      audioRef: null,
    },
    {
      id: 'izimbongi',
      target: 'iziMbongi',
      native: 'praise poets (plural)',
      literal: 'izi- (class 10) + mbongi',
      emoji: '📯',
      phonetic: 'ee-zeem-BOH-ngee',
      audioRef: null,
    },
    {
      id: 'izibongo',
      target: 'izibongo',
      native: 'praises / praise poetry / one\'s lineage of praise names',
      literal: 'izi- (plural) + bongo (root: praise)',
      emoji: '📜',
      phonetic: 'ee-zee-BOH-ngoh',
      audioRef: null,
    },
    {
      id: 'ukubonga',
      target: 'ukubonga',
      native: 'to thank / to praise',
      literal: 'uku- (infinitive) + bonga — same root as ngiyabonga (thank you)',
      emoji: '🙏',
      phonetic: 'oo-koo-BOH-ngah',
      audioRef: null,
    },
    {
      id: 'inkosi',
      target: 'iNkosi',
      native: 'king / chief',
      literal: 'class 9 noun — the figure imbongi traditionally praised',
      emoji: '👑',
      phonetic: 'een-KOH-see',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-bonga is the praise root',
    explanation: "The same root '-bonga' (to praise / to thank) gives you four important Ndebele words. ngiyabonga = I thank / I praise. iMbongi = the one whose job is praising. izibongo = the formal praises themselves. ukubonga = to praise as an action. When a Ndebele speaker says 'ngiyabonga' to thank you, they are using a fragment of an ancient royal-court vocabulary — the same word a 19th-century imbongi used to thank the king at the start of an epic recital.",
    examples: [
      { target: 'Ngiyabonga.', native: 'I thank / I praise.' },
      { target: 'iMbongi yenkosi.', native: 'The praise poet of the king.' },
      { target: 'izibongo zikaMzilikazi.', native: 'The praises of uMzilikazi.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each form to its meaning',
      pairs: [
        { left: 'iMbongi', right: 'a praise poet' },
        { left: 'izibongo', right: 'praises / praise poetry' },
        { left: 'ukubonga', right: 'to praise / to thank' },
        { left: 'iNkosi', right: 'king / chief' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'History check',
      question: 'What was iMbongi historically allowed to do that almost no one else in Ndebele society could?',
      options: [
        { text: 'Publicly criticise the king in verse without being punished.', correct: true },
        { text: 'Walk into the king\'s sleeping quarters.', correct: false },
        { text: 'Refuse a royal command.', correct: false },
      ],
      explanation: "iMbongi was the public-accountability institution of uMthwakazi. Within the framework of formal praises, he could call the king out — naming his failures, his arrogance, his bad decisions — in front of the whole nation. The praise tradition built this in deliberately: the king needed to hear what no one else could safely tell him.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Word origin',
      question: "When a Ndebele person says 'ngiyabonga' (thank you), what is the root?",
      options: [
        { text: '-bonga (to praise) — the same root as iMbongi (praise poet) and izibongo (praises).', correct: true },
        { text: '-bona (to see).', correct: false },
        { text: '-bongi (to give).', correct: false },
      ],
      explanation: "Every time you say 'ngiyabonga' you are saying a small piece of izibongo. The everyday word for thanks is built from the same root as the most ancient royal praise tradition. Language never forgets where it comes from.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'a praise poet (singular)',
      correct: ['iMbongi', 'imbongi', 'Imbongi'],
    },
  ],

  rwenDialogue: {
    intro: "At a uMzilikazi Day commemoration in Bulawayo, an iMbongi steps forward in animal-skin regalia and begins to recite. Your friend leans over to translate the moment for you.",
    lines: [
      { speaker: 'npc', target: 'IMbongi izaqala — thula, lalela.', native: 'The praise poet is starting — be quiet, listen.' },
      { speaker: 'rwen', rwenLine: "He's not performing for the crowd. He's reciting uMzilikazi back into the air. The names of his ancestors, the rivers he crossed, the people he gathered. Listen to the rhythm." },
      { speaker: 'npc', target: 'Lezi izibongo zikaMzilikazi kaMatshobana...', native: 'These are the praises of uMzilikazi son of Matshobana...' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga ngokungitshela.', native: 'Thank you for telling me.', correct: true, feedback: "Your friend nods. Notice — you used 'ngiyabonga'. That is the same -bonga root the imbongi is using right now in front of you." },
          { target: 'Lokhu kuyini?', native: 'What is this?', correct: false, feedback: "Fair to ask, but maybe later. While imbongi is reciting, the cultural move is silence and attention." },
          { target: '(takes out phone to film)', native: '(no Ndebele)', correct: false, feedback: "Some elders find filming izibongo without permission disrespectful — these are sacred recitations, not content. Watch first, ask after." },
        ],
      },
      { speaker: 'rwen', rwenLine: "What you just witnessed is older than Zimbabwe, older than any colonial border. iMbongi keeps the nation's memory alive. Hold it carefully." },
    ],
  },

  activeRecall: {
    instruction: 'Recall from memory.',
    prompts: [
      { prompt: 'A praise poet (singular)', correct: ['iMbongi', 'imbongi', 'Imbongi'] },
      { prompt: 'Praise poets (plural)', correct: ['iziMbongi', 'izimbongi', 'Izimbongi'] },
      { prompt: 'Praises / praise poetry', correct: ['izibongo', 'Izibongo'] },
      { prompt: 'To thank / to praise', correct: ['ukubonga', 'Ukubonga'] },
      { prompt: 'King / chief', correct: ['iNkosi', 'inkosi', 'Inkosi'] },
    ],
  },

  mission: {
    title: "Hear izibongo once",
    task: "Search YouTube for 'Ndebele imbongi' or 'Zulu praise poet izibongo' (the traditions overlap closely). Watch one performance. Notice the pace, the rolling rhythm, the way the imbongi never seems to breathe. That is the original Ndebele rhetoric. Every 'ngiyabonga' you say going forward carries a small piece of that.",
    rwenSignoff: "Praise is not flattery. In Ndebele tradition, praise is memory made loud. Sala kuhle, mfowethu.",
  },

  phase8: {
    scenario: "You attend a small uMzilikazi Day commemoration at Old Bulawayo (the heritage site of uMzilikazi's royal capital). After the recitation, you fall into conversation with Baba Ndlovu, a retired schoolteacher who still teaches izibongo to schoolchildren in Tsholotsho. He asks what you understood from the iMbongi's performance.",
    rwenRole: "Baba Ndlovu — 70s, retired isiNdebele teacher, lifelong student of izibongo, dignified and patient. Will be delighted by genuine curiosity. Will be cool toward shallow takes.",
    successCriteria: "User uses 'iMbongi' or 'izibongo' or 'ukubonga' correctly in conversation, asks at least one substantive question about the praise tradition, and connects the everyday word 'ngiyabonga' to the deeper praise tradition (or accepts the connection when Baba Ndlovu makes it).",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
