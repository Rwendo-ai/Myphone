import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l04-grandparents',
  module: 5,
  lesson: 4,
  title: 'Grandparents — Mbuya naSekuru',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Mbuya nasekuru — vakuru vepamhuri vane uchenjeri. MuChiNgezi: 'grandmother' na 'grandfather'. Yeuka — 'grand-' inoreva 'mukuru kupfuura' (kubva chiFrench: grand = big). Hapana kufamba kwakareba mukati meChiNgezi.",
    culturalNote: "MuChiShona, mbuya nasekuru vane chinzvimbo chikuru — vanopa nyaya, kudzidzisa tsika, uye kufunga zvinopfuura miganhu yeruzivo. MuChiNgezi 'grandmother' na 'grandfather' havanetsvige uremu hwakadaro mu shoko ega — uremu hunouya muma stories aunoraira nezvavo. ChiShona chinotaura uchenjeri musefa; ChiNgezi chinochifambisa nemashoko anodaidzwa.",
  },

  chunks: [
    {
      id: 'grandmother',
      target: 'Grandmother',
      native: 'Mbuya',
      literal: 'big-mother',
      emoji: '👵🏾',
      phonetic: 'GRAND-muh-thuh',
      audioRef: null,
    },
    {
      id: 'grandfather',
      target: 'Grandfather',
      native: 'Sekuru',
      literal: 'big-father',
      emoji: '👴🏾',
      phonetic: 'GRAND-fah-thuh',
      audioRef: null,
    },
    {
      id: 'grandchild',
      target: 'Grandchild',
      native: 'Muzukuru',
      literal: 'big-child',
      emoji: '🧒🏾',
      phonetic: 'GRAND-chayld',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Generational — grand- prefix',
    explanation: "MuChiNgezi, 'grand-' inoshandiswa pamberi pemashoko emhuri kuti uratidze chizvarwa chimwe pamusoro: grandmother (mai vamai), grandfather (baba vababa), grandchild (mwana wemwana). Plural inowedzera 's' kumagumo: grandparents, grandchildren (irregular!).",
    examples: [
      { target: 'My grandmother',     native: 'Mbuya vangu' },
      { target: 'My grandfather',     native: 'Sekuru vangu' },
      { target: 'My grandchildren',   native: 'Vazukuru vangu' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: 'Grandmother',  right: 'Mbuya' },
        { left: 'Grandfather',  right: 'Sekuru' },
        { left: 'Grandchild',   right: 'Muzukuru' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Mbuya vangu vanogara kumusha.',
      correct: ['My grandmother lives in the village.', 'My grandmother lives in the village', 'my grandmother lives in the village.'],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kutaura nyaya',
      prompt: 'Sekuru vangu vakanditaurira nyaya.',
      correct: ['My grandfather told me a story.', 'My grandfather told me a story', 'my grandfather told me a story.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka chirevo: "My grandmother used to sing"',
      words: ['used', 'My', 'sing.', 'grandmother', 'to'],
      correct: ['My', 'grandmother', 'used', 'to', 'sing.'],
      translation: 'Mbuya vangu vaisii imba',
    },
    {
      type: 'fill_blank',
      instruction: 'Zadzisa — irregular plural',
      sentence: 'My grandparents have five _____ in total.',
      options: ['grandchilds', 'grandchildren', 'grandchildrens'],
      correct: 'grandchildren',
      context: "'Children' inogara iri irregular — saka 'grandchildren' inogara seka. Hapana 's' kana 'es'.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: 'You\'re telling an English-speaking friend about something wise your grandmother used to say. How do you start?',
      options: [
        { text: "My grandmother used to say...",      correct: true },
        { text: "Mbuya vangu they said...",            correct: false },
        { text: "Grandmother of me say always...",     correct: false },
      ],
      explanation: "'My grandmother used to say' ndiyo nzira yakanaka muChiNgezi yekutanga nyaya yeku ChiShona uchitaura nezvevanhu vakapinda — uremu hwacho hunouya muvoice tone newaitaura uchichengeta zvakavanzwika.",
    },
  ],

  rwenDialogue: {
    intro: 'Une shamwari yeChiNgezi pa coffee. Watanga kutaura nezvembuya vako neuchenjeri hwavo.',
    lines: [
      { speaker: 'npc', target: "You said your grandmother taught you something important — tell me.", native: 'Wati mbuya vako vakakudzidzisa chinhu chakakosha — ndiudze.' },
      {
        speaker: 'user',
        userChoices: [
          { target: "My grandmother used to say: 'A patient person eats ripe fruit.' She told me that often.", native: 'Mbuya vangu vaisitaura kuti: "Munhu ane mwoyo murefu anodya muchero wakaibva." Vainditaurira izvi kazhinji.', correct: true, feedback: "Wakwanisa — 'My grandmother used to say' inotanga zvine uremu, uye watakura proverb yake muChiNgezi. Tsika yapfuura mu mashoko echiNgezi." },
          { target: "Grandmother says fruit ripe wait people.",                                                  native: 'Mbuya vanoti muchero waibva mwoyo murefu vanhu.',                                                                    correct: false, feedback: "Pfungwa iripo asi mashoko akazonyongana — chirevo hachina kuita 'sense' muChiNgezi. Tora mafungiro nyore: 'used to say...'" },
          { target: "Mbuya yangu vaisitaura...",                                                                  native: 'Mbuya vangu vaisitaura...',                                                                                          correct: false, feedback: "ChiShona chete — shamwari yeChiNgezi haichanzwisise. Shandura wose: 'My grandmother used to say...'" },
        ],
      },
      { speaker: 'npc', target: "That's beautiful — was she from the village?", native: 'Zvakanaka — vaibva kumusha here?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Watora nyaya yembuya yako — uchenjeri hwakatamba kuChiNgezi pasina kurasikirwa.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: 'My grandmother (in English)',  correct: ['My grandmother', 'my grandmother'] },
      { prompt: 'My grandfather (in English)',  correct: ['My grandfather', 'my grandfather'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga chinhu chimwe chembuya kana sekuru vako vakakudzidzisa kana kukutaurira. Edzana kunyora pa phone notes muChiNgezi: 'My grandmother used to say...' kana 'My grandfather taught me...' Verenga muromo.",
    rwenSignoff: "Mangwana — tete na sekuru vakuru (aunts and uncles) — pano paChiShona ine mvuvu kupfuura ChiNgezi.",
  },

  phase8: {
    scenario: "You're sharing a memory of your grandmother's wisdom with an English-speaking friend over coffee. Tell them what she used to say or do, and why it stayed with you.",
    rwenRole: "Anna, 35, your friend who loves family stories. Listens warmly and asks follow-ups like 'What was she like?' or 'Do you still remember her voice?'",
    successCriteria: "User uses 'grandmother' or 'grandfather' at least twice. Uses past form like 'used to say' or 'told me'. Shares a specific memory or saying — not a vague 'she was nice'. Avoids dropping into Shona.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
