import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-hope-future',
  module: 10,
  lesson: 8,
  title: 'Hope & Future — Tariro nemberi',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "MuChiShona unoti 'Ndinotarisira', 'Rimwe zuva ndicha...', 'Ndinorota'. MuChiNgezi: 'I hope to...', 'One day I'll...', 'I dream of...'. Mashoko maviri akawanda asi pattern imwe — kusvika kuneramangwana ne tariro. Pa job interview, mibvunzo yekutarisa mberi: 'Where do you see yourself in 5 years?' — mhinduro inoda mashoko aya.",
    culturalNote: "MuChiShona, kutaura nezvetariro hwakapfukura mwoyo — 'Ndinorota' (kurota) chinhu chinodikana. Job interview pa English-speaking company inotsiura zvakapfava — mhinduro yekuti 'I hope to learn and grow' inenge yakareruka, asi mhinduro yakajeka 'I see myself leading a small team in 5 years' inonzwika senehukuru hwa kuita. ChiNgezi che job interview chinoda 'specific + ambitious + humble' — pamukati metariro yose ye ChiShona.",
  },

  chunks: [
    {
      id: 'hope_to',
      target: 'I hope to...',
      native: 'Ndinotarisira...',
      literal: 'I hope to',
      emoji: '🤞',
      phonetic: 'ay-HOHP-too',
      audioRef: null,
    },
    {
      id: 'one_day_ill',
      target: "One day I'll...",
      native: 'Rimwe zuva ndicha...',
      literal: 'one day I-will',
      emoji: '🌅',
      phonetic: 'WUN-DAY-ayl',
      audioRef: null,
    },
    {
      id: 'dream_of',
      target: 'I dream of...',
      native: 'Ndinorota...',
      literal: 'I-dream of',
      emoji: '✨',
      phonetic: 'ay-DREEM-uv',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Future hopes — three frames',
    explanation: "Mhinduro dzetariro dzinopfeka mafungiro matatu. (1) 'I hope to + verb' = chinhu chinoshanda (realistic): 'I hope to finish my course this year'. (2) 'One day I'll + verb' = chinguva chiripo asi chichiri kure: 'One day I'll start my own business'. (3) 'I dream of + verb-ing' (-ing form!) = chiroto chemwoyo: 'I dream of living near the sea'. Cherechedza: 'dream of living' (-ing), kwete 'dream of live'. Iyi mishonga inopindirana — unogona kushandisa yose miviri pa job interview.",
    examples: [
      { target: 'I hope to finish my course this year.',          native: 'Ndinotarisira kupedza kosi yangu gore rino.' },
      { target: "One day I'll start my own business.",            native: 'Rimwe zuva ndichavamba bhizinesi yangu.' },
      { target: 'I dream of working in education.',                native: 'Ndinorota kushanda muruzivo.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko etariro',
      pairs: [
        { left: 'I hope to',         right: 'Ndinotarisira' },
        { left: "One day I'll",       right: 'Rimwe zuva ndicha' },
        { left: 'I dream of',         right: 'Ndinorota' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndinotarisira kupedza kosi yangu gore rino.',
      correct: ['I hope to finish my course this year.', 'I hope to complete my course this year.', 'I hope to finish my course this year', 'i hope to finish my course this year.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — ratidza chiroto chinoreba',
      prompt: 'Rimwe zuva ndichavamba bhizinesi yangu.',
      correct: ["One day I'll start my own business.", "One day I will start my own business.", "Someday I'll start my own business.", "one day i'll start my own business."],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka chirevo: 'I dream of working in education'",
      words: ['working', 'in', 'I', 'dream', 'of', 'education.'],
      correct: ['I', 'dream', 'of', 'working', 'in', 'education.'],
      translation: 'Ndinorota kushanda muruzivo',
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa — 'dream of' inotevera mhando ipi yeverb?",
      sentence: 'I dream _____ near the sea.',
      options: ['of living', 'of live', 'to live'],
      correct: 'of living',
      context: "'Dream of + verb-ing' (gerund). 'Hope to + verb' (infinitive). Yose miviri inotaura nezveramangwana asi pattern yakasiyana — 'dream of living', 'hope to live'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Job interview answer',
      question: "Interviewer asks: 'Where do you see yourself in 5 years?' Which answer is strongest?",
      options: [
        { text: "I hope to grow into a team lead role here, and one day I'd like to mentor newer engineers. I dream of building products that matter.", correct: true },
        { text: "I don't know.",                                                                                                                            correct: false },
        { text: "Famous and rich.",                                                                                                                          correct: false },
      ],
      explanation: "Mhinduro yakanaka inosanganisa: 'I hope to' (kuita kunoshanda), 'one day I'd like to' (kunorebesa zvishoma), 'I dream of' (chiroto chemwoyo). Pa interview, ratidza chinangwa chakanyatsojeka kwete 'I don't know' kana 'famous'.",
    },
  ],

  rwenDialogue: {
    intro: "Uri pa final round ye job interview pakambani yeChiNgezi. HR ari kubvunza mubvunzo wakaomarara — kwete pamatsamba ekudzidzira asi pamoyo wako we kushuvira.",
    lines: [
      { speaker: 'npc', target: "Last question — where do you see yourself in 5 years?", native: 'Mubvunzo wekupedzisira — unoona iwe pakuva kupi mumakore mashanu?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I hope to grow into a senior role here, leading a small team. One day I'll start my own business — in education tech. I dream of building tools that help kids learn.", native: 'Ndinotarisira kukura kuva senior pano, ndichitungamira chikwata chidiki. Rimwe zuva ndichavamba bhizinesi yangu — pa education tech. Ndinorota kuvaka zvombo zvinobatsira vana kudzidza.', correct: true, feedback: "Wakwanisa — mhinduro yakapfeka structure: 'I hope to' (chinguva chiripi), 'one day I'll' (chiriko chichiri kure), 'I dream of' (chiroto). Vakanzwa kuti une chinangwa chakajeka asi pasina kunyepedzera." },
          { target: "I don't know yet.", native: 'Handisati ndichiziva.', correct: false, feedback: "Pa interview, mhinduro 'I don't know' inoshandura tariro. Edza chero chiri pamberi: 'I hope to grow here. One day I'd like to lead a team.'" },
          { target: "Famous.", native: 'Akakurumbira.', correct: false, feedback: "Pasina chinangwa chakajeka — pa interview pavabasa shandisa 'I hope to + work goal', 'I dream of + meaningful aim'." },
        ],
      },
      { speaker: 'npc', target: "Education tech — interesting. Tell me more after the offer comes through.", native: 'Education tech — chinonakidza. Ndiudze zvakawanda mushure mekugamuchira basa.' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Pattern yatatu mu mhinduro imwe — chinhu chinoshanda, chinhu chiri kure, chiroto. Iyi i ChiNgezi cheinterview yakanaka. Zvinotaridza Tariro yake yakanyatsogadzirwa, kwete chiroto chinodzungaira chete.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'I hope to (in English)',          correct: ['I hope to', 'i hope to'] },
      { prompt: 'I dream of (in English)',          correct: ['I dream of', 'i dream of'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Nyora pa diary mhinduro yako kumubvunzo 'Where do you see yourself in 5 years?' muChiNgezi. Shandisa zvitatu: (1) 'I hope to ___.' (2) 'One day I'll ___.' (3) 'I dream of ___ing.' Verenga muromo katatu. Iyi mhinduro inogona kuita basa rakanaka rezera.",
    rwenSignoff: "Mangwana — proverbs! Kupa hutsika hwedu — kunyange muChiNgezi.",
  },

  phase8: {
    scenario: "Final round of a job interview at an English-speaking tech company. The hiring manager asks: 'Where do you see yourself in 5 years?' Give a structured answer — short-term hope, mid-term aim, longer dream — that shows ambition without overpromising.",
    rwenRole: "Rachel, 42, Head of People at the company. Warm but probing. Will follow up: 'Why education tech?', 'What would success look like for you?'",
    successCriteria: "User uses 'I hope to + verb' AND 'One day I'll + verb' OR 'I dream of + verb-ing'. Gives a specific role/area (not vague). Shows ambition + humility (no 'famous and rich'). Stays in English. Speaks 3+ sentences.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
