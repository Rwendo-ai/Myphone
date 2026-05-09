import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07',
  module: 10,
  lesson: 7,
  title: 'US idioms — "Hit the nail on the head", "Touch base"',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Ama-idioms ase-US ahlukile lapha eUK. 'Hit the nail on the head' (uphendule iqiniso ngqo), 'Touch base' (sihlangane), 'Ballpark figure' (inombolo elinganisayo), 'Piece of cake' (basayisebenzisa lalapha kakhulu). Uba ufuna ukusebenza eU.S. emails noma ku-Zoom, lokhu kuwumdlalo wakho.",
    culturalNote: "AbantubaseAmerica bayathanda ama-business idioms — kakhulu emails lemihlanganweni. 'Let's touch base on Monday' = 'asihlangane ngoMsombuluko' (HATSHI 'simbe i-base'!). 'Ballpark figure' iqhamuka ku-baseball — yinombolo ehambela e-correctness, eyokuqala. 'Hit the nail on the head' = 'wakhulume kahle, uthe khona lapho.' Esikhungweni sesiUS, ungeke ufike ndawo ungezwa ama-idioms; emi-meeting kuyabuza 'Can you give me a ballpark?' nje. Ndebele speakers eUS: lalela i-podcasts noma 'Modern Family' kabili-kabili, ungaboni ama-idioms lapha. Lokhu yikho okuvula umnyango we-fluency.",
  },

  chunks: [
    {
      id: 'hit_nail_head',
      target: 'Hit the nail on the head',
      native: 'Ukhulume kahle / waphendula ngqo',
      literal: 'Hit the nail on the head (exactly right)',
      emoji: '🔨',
      phonetic: 'HIT-thuh-NAYL-on-thuh-HED',
      audioRef: null,
    },
    {
      id: 'touch_base',
      target: 'Touch base',
      native: 'Sihlangane / sixhumane',
      literal: 'Touch base (US business)',
      emoji: '⚾',
      phonetic: 'TUCH-bays',
      audioRef: null,
    },
    {
      id: 'ballpark_figure',
      target: 'A ballpark figure',
      native: 'Inombolo elinganisayo',
      literal: 'Ballpark figure (rough estimate)',
      emoji: '⚾',
      phonetic: 'BAWL-park-FIG-yur',
      audioRef: null,
    },
    {
      id: 'on_the_same_page',
      target: 'On the same page',
      native: 'Sivumelane / siphawule lifanayo',
      literal: 'On the same page (in agreement)',
      emoji: '📄',
      phonetic: 'on-thuh-SAYM-payj',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'US business idioms',
    explanation: "Ama-idioms eU.S. ngokuvamileyo aqhamuka ku-sports (i-baseball ikakhulukazi) noma ku-construction. 'Touch base' = 'sihlangane' (kufanele kuhlale kuselula). 'Hit the nail on the head' = wabeka iqiniso. 'Ballpark figure' = inombolo elinganisayo, hatshi eqondileyo. 'On the same page' = sivumelane ngokuyiqiniso. Uphathwa kakhulu kwi-emails: 'Let's touch base next week' kuyahamba kakhulu. 'Just give me a ballpark' kuvamile e-meeting.",
    examples: [
      { target: 'You hit the nail on the head — that is exactly the problem.',  native: 'Ukhulume kahle — yiwo umkhuba ngqo.' },
      { target: "Let's touch base next week.",                                   native: 'Asihlangane evikini elizayo.' },
      { target: 'Can you give me a ballpark figure?',                           native: 'Unganginikeza inombolo elinganisayo yini?' },
      { target: 'Are we on the same page?',                                      native: 'Sivumelane yini?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Hlanganisa i-US idiom lencazelo',
      pairs: [
        { left: 'Hit the nail on the head',  right: 'Wakhulume kahle' },
        { left: 'Touch base',                 right: 'Sihlangane' },
        { left: 'Ballpark figure',             right: 'Inombolo elinganisayo' },
        { left: 'On the same page',            right: 'Sivumelane' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Khetha i-idiom efaneleyo (i-email yomsebenzi)',
      sentence: "Hi! Let's _____ next Monday to discuss the project.",
      options: ['touch base', 'hit the nail', 'ballpark'],
      correct: 'touch base',
      context: "U-'Touch base' uvama ku-emails zomsebenzi. U-'Hit the nail' yokuthi 'wakhulume kahle' — kayilingani. U-'Ballpark' yinombolo elinganisayo.",
    },
    {
      type: 'translate',
      instruction: 'Bhala ngesiNgisi (US business)',
      prompt: 'Ungangipha inombolo elinganisayo yini?',
      correct: [
        'Can you give me a ballpark figure?',
        'Could you give me a ballpark figure?',
        'Can you give me a ballpark?',
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Khetha eyiyo — usaba kahle nge-i.dea yomngane wakho',
      question: "Umngane wakho usanda kuthola incazelo enhle yenkinga. Yiphi i-US idiom efaneleyo?",
      options: [
        { text: "You hit the nail on the head!",                          correct: true },
        { text: "You touch the base!",                                     correct: false },
        { text: "You ballpark the figure!",                                correct: false },
      ],
      explanation: "'Hit the nail on the head' = wakhulume kahle, waphendula ngqo. 'Touch the base' kayisi-idiom (i-correct yi 'touch base' — ngaphandle kwe 'the'). 'Ballpark the figure' kayikho.",
    },
  ],

  rwenDialogue: {
    intro: 'Usemhlanganweni woku-Zoom, ukhulumisana lomphathi waseUS ngomsebenzi.',
    lines: [
      { speaker: 'npc', target: "So, can you give me a rough number — what would the project cost?", native: "Pho, unganginika inombolo elinganisayo — umsebenzi uzobiza kanganani?" },
      {
        speaker: 'user',
        userChoices: [
          {
            target: "Sure! A ballpark figure would be around $50,000. Let's touch base next week to confirm — I want to make sure we're on the same page.",
            native: "Yebo! Inombolo elinganisayo izoba ngama-$50,000. Asihlangane ngeviki elizayo ukuze siqinisekise — ngifuna sivumelane.",
            correct: true,
            feedback: "Wakhulume njengo-American executive! Usebenzise zonke ezintathu — 'ballpark figure', 'touch base', 'on the same page' — ngokuhlukanene.",
          },
          {
            target: "I don't know. Maybe lots of money.",
            native: "Angazi. Mhlawumbe imali eninganana.",
            correct: false,
            feedback: "Awunikezi 'ballpark figure'. Sebenzisa: 'A ballpark figure would be around X'.",
          },
          {
            target: "Touch base ballpark same page nail head.",
            native: "Sihlangane inombolo iphepha umsipha ikhanda.",
            correct: false,
            feedback: "Ushibilike kuwo wonke ama-idioms! Khetha esikhathiselo somunye umuntu, umunye, omunye.",
          },
        ],
      },
      { speaker: 'npc', target: "Perfect — that works. You hit the nail on the head with the timeline too.", native: "Kuhle kakhulu — kuyasebenza. Ukhulume kahle ngesikhathi futhi." },
      { speaker: 'rwen', rwenLine: "Khangela — uxoxe njengomuntu wokulingani enkampaneni yeUS. Ama-idioms enezindlela ezisemqoka ze-fluency.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'Ungabuyeli emuva.',
    prompts: [
      { prompt: "Bhala 'Let's touch base next week' ngesiNgisi", correct: ["Let's touch base next week", "Lets touch base next week", "Let us touch base next week"] },
      { prompt: "Bhala i-idiom ye 'wakhulume kahle' ngesiNgisi", correct: ['Hit the nail on the head', 'You hit the nail on the head', 'hit the nail on the head'] },
    ],
  },

  mission: {
    title: 'Umsebenzi wakho wamuhla',
    task: "Bhala i-WhatsApp message kumngane wesi-US — sebenzisa 'Let's touch base' kumbe 'Are we on the same page?'. Funda kabili ungayithumeli — bona ukuthi izwakala njengeyenyama yini.",
    rwenSignoff: "Kusasa — i-phrasal verbs. 'Look up', 'give in', 'put off'.",
  },

  phase8: {
    scenario: "You're on a Zoom call with a US client. They want a quick update on your project, a rough cost estimate, and confirmation that you both understand the next steps. Use 2-3 US business idioms naturally.",
    rwenRole: "Mike, 42, a no-nonsense US project manager from Chicago. Friendly but values brevity. Loves business idioms — uses 'circle back', 'touch base', 'ballpark' constantly.",
    successCriteria: "User uses at least TWO US idioms ('touch base', 'ballpark figure', 'on the same page', 'hit the nail on the head'). Sounds professional, not stiff. Stays in English throughout.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
