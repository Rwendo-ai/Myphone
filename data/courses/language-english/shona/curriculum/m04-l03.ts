import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-no-article',
  module: 4,
  lesson: 3,
  title: 'No article — Plural & abstract',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Pane nguva dzausingadi 'a/an/the' zvachose. Kana uchitaura nezvinhu zvizhinji muchimumbo, kana zvinhu zvisinganzwiki (love, time, music), siya 'a/an/the'.",
    culturalNote: "ChiShona hachina kana 'article' chero ipi — saka chinhu chimwe chinotinakira ndechekuti muChiNgezi pane dzimwe nguva chausingaisi 'the' kana 'a' zvachose. 'Rudo' = 'Love' (kwete 'the love'). 'Vana' kana uchitaura nezvevana vose vepasi rose = 'Children' (kwete 'the children'). Tarisa kuti pane mamiriro echirevo aunofanira kunyararira chete.",
  },

  chunks: [
    {
      id: 'books',
      target: 'Books',
      native: 'Mabhuku (ese ese)',
      literal: 'books in general — no article',
      emoji: '📚',
      phonetic: 'BUKS',
      audioRef: null,
    },
    {
      id: 'love',
      target: 'Love',
      native: 'Rudo',
      literal: 'love (abstract — no article)',
      emoji: '❤️',
      phonetic: 'LUHV',
      audioRef: null,
    },
    {
      id: 'children',
      target: 'Children',
      native: 'Vana (vese vese)',
      literal: 'children in general — no article',
      emoji: '👶',
      phonetic: 'CHIL-dren',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Zero article — siya 'a/an/the'",
    explanation: "Hapana article kana: (1) uchitaura nezvinhu zvizhinji muchimumbo — 'Cats are clever' (kwete 'The cats'); (2) zvinhu zvisinganzwiki — 'Love is patient', 'Music makes me happy'; (3) mazwi mamwe akaita se 'school', 'home', 'work' — 'I go to school'.",
    examples: [
      { target: 'Children laugh.',  native: 'Vana vanoseka. (vana vese vepasi rose)' },
      { target: 'Love is patient.', native: 'Rudo runomirira. (chinhu chisingabatiki)' },
      { target: 'I go to work.',    native: 'Ndinoenda kubasa. (kwete "the work")' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: "Sarudza 'a', 'the', kana 'no article' (—)",
      sentence: '_____ love is the most powerful feeling.',
      options: ['—', 'The', 'A'],
      correct: '—',
      context: '"Love" rinhi rinhi pano — chinhu chisinganzwiki — siya pasina article.',
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Vana vanoseka',
      correct: ['Children laugh', 'Children laugh.'],
    },
    {
      type: 'fill_blank',
      instruction: "Sarudza yakanaka",
      sentence: 'I drink _____ water every morning.',
      options: ['—', 'a', 'an'],
      correct: '—',
      context: '"Water" chinhu chinodirwa (uncountable) — siya pasina article.',
    },
    {
      type: 'build_sentence',
      instruction: 'Vaka: "Music makes me happy"',
      words: ['happy.', 'me', 'Music', 'makes'],
      correct: ['Music', 'makes', 'me', 'happy.'],
      translation: 'Mumhanzi unondifadza',
    },
    {
      type: 'multiple_choice',
      instruction: 'Ndepipi pasina article inoshanda?',
      question: 'Sarudza chirevo chakanaka',
      options: [
        { text: 'Dogs bark at strangers.', correct: true },
        { text: 'The dogs bark at the strangers.', correct: false },
        { text: 'A dogs bark at a strangers.', correct: false },
      ],
      explanation: "Pataura nezvembwa dzese (general) — siya pasina article. 'Dogs bark' = imbwa dzinohukura.",
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Rudo runomirira',
      correct: ['Love is patient', 'Love is patient.'],
    },
  ],

  rwenDialogue: {
    intro: "Une chamupupuri chechikadzi nepakati pebasa. Muri kutaura nezvezvinhu zvinokukosha — rudo, mhuri, simba renyu seZimbabweans.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me — what matters most to you?",
        native: 'Ndiudze — chii chinokosha kwauri zvikuru?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Family and love matter most. Children are the future.', native: 'Mhuri nerudo zvinokosha zvikuru. Vana ndiwo ramangwana.', correct: true, feedback: "Wakanaka — 'family', 'love', 'children' pasina article. Asi 'the future' — nokuti pane future imwe chete." },
          { target: 'The family and the love matter most. The children are the future.', native: 'Mhuri nerudo zvinokosha zvikuru. Vana ndiwo ramangwana.', correct: false, feedback: "Pataura nezve 'family' uye 'love' muchimumbo — siya pasina article. Asi 'the future' chete inoda 'the'." },
          { target: 'A family and a love matter most.', native: 'Mhuri nerudo zvinokosha zvikuru.', correct: false, feedback: "'Love' uye 'family' (general/abstract) hazvideri 'a' kana taura zvematare ese." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Zvakanaka — wakanyatso jambisa pakati pe 'general' (no article) ne 'specific' (the).",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa. Nyora kubva pamusoro pengwaro.',
    prompts: [
      { prompt: 'Children (in English, no article)', correct: ['Children', 'children'] },
      { prompt: 'Love (in English, no article)', correct: ['Love', 'love'] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga zvinhu zvinokukosha — rudo, runyararo, mhuri, simba. Taura zvirevo zvitatu pasina 'the' kana 'a'. Semuenzaniso: 'Love is good. Family is everything. Music heals.'",
    rwenSignoff: "Pasina article ndiyo nzira. Kunyangwe icho chiri pachena — chero pasina chinyorwa.",
  },

  phase8: {
    scenario: "Uri kuzvitsanangura kushamwari — uri kutaura nezvinhu zvikuru muupenyu (rudo, mhuri, ramangwana, kutenda).",
    rwenRole: "Shamwari yepamoyo, anokurudzira kunzwisisa unyanzvi hwekutaura nezvinhu zvinokosha pasina article.",
    successCriteria: "Mudzidzi anokwanisa kushandisa zvirevo zvitatu pasina article ('Love is...', 'Children are...', 'Music makes...') uye anocherechedza musiyano nezvinhu zvinoda 'the'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
