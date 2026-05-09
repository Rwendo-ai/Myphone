import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09',
  module: 9,
  lesson: 9,
  title: 'uMlimu and amadlozi — God and ancestors',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Ndebele spirituality is layered. There is uMlimu — the Creator, often called Nkulunkulu, the great-great-one. Above and beyond. And there are amadlozi — the ancestors, the family-dead, who are close, present, listening, named. The two are not in conflict. Most Ndebele people who follow ancestors today are also Christian. Today we learn the language of both.",
    culturalNote: "Pre-Christian Ndebele cosmology centred on uMlimu (also Mlimu / uNkulunkulu) — the Creator, distant, addressed especially in times of drought through rain shrines, including the famous Mwari/Mlimu shrine at Njelele in the Matobo Hills. Closer to daily life are the amadlozi — ancestral spirits of one's own family, who watch, advise, intervene. The relationship is not 'worship' in a Western sense — it is closer to ongoing conversation with deceased relatives who remain morally invested in your life. Today, most Ndebele people are Christian — Catholic, Anglican, Methodist, and a vast range of African Independent Churches. The relationship between amadlozi and Christianity varies enormously household to household: some keep both, some have rejected one for the other, many quietly do both without theorising. NEVER assume which a Ndebele person you meet practises. Ask gently or wait to be told.",
  },

  chunks: [
    {
      id: 'umlimu',
      target: 'uMlimu',
      native: 'God / the Creator (high god)',
      literal: 'u- + Mlimu — also rendered uNkulunkulu (the great-great-one)',
      emoji: '☁️',
      phonetic: 'oom-LEE-moo',
      audioRef: null,
    },
    {
      id: 'unkulunkulu',
      target: 'uNkulunkulu',
      native: 'God / the great-great-one',
      literal: 'u- + nkulu (great) + nkulu (great) — the great-great Creator',
      emoji: '🌌',
      phonetic: 'oon-koo-loon-KOO-loo',
      audioRef: null,
    },
    {
      id: 'idlozi',
      target: 'idlozi',
      native: 'an ancestor / ancestral spirit (singular)',
      literal: 'class 5 noun — a specific deceased relative who watches over you',
      emoji: '🕯️',
      phonetic: 'ee-DLOH-zee',
      audioRef: null,
    },
    {
      id: 'amadlozi',
      target: 'amadlozi',
      native: 'ancestors (plural) — the family-dead',
      literal: 'ama- (class 6 plural) + dlozi',
      emoji: '🕯️',
      phonetic: 'ah-mah-DLOH-zee',
      audioRef: null,
    },
    {
      id: 'ukukhuleka',
      target: 'ukukhuleka',
      native: 'to pray / to invoke / to greet ancestors',
      literal: 'uku- (infinitive) + khuleka (call respectfully on)',
      emoji: '🙏',
      phonetic: 'oo-koo-koo-LEH-kah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Two distances, one cosmology',
    explanation: "uMlimu (or uNkulunkulu) is far. Big. The Creator. Approached at major shrines, in formal prayer, in moments of crisis like drought. amadlozi are near. Personal. Named. Your grandmother who died last year, your great-grandfather you never met, the children who died young in your lineage. They are addressed in the home, at the family gravesite, when slaughtering an ox for a ritual, when something important is starting (a wedding, a journey, a new job). Christianity layered onto this in different ways for different families — but the language for the ancestors stayed.",
    examples: [
      { target: 'uMlimu wasidala.', native: 'God created us.' },
      { target: 'Amadlozi ami ayangibheka.', native: 'My ancestors are watching me / looking out for me.' },
      { target: 'Ngikhulekela amadlozi.', native: 'I pray to / call on the ancestors.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'uMlimu', right: 'God / the Creator (distant, high)' },
        { left: 'uNkulunkulu', right: 'the great-great-one (another name for the Creator)' },
        { left: 'idlozi', right: 'an ancestor / ancestral spirit' },
        { left: 'amadlozi', right: 'ancestors (the family-dead)' },
        { left: 'ukukhuleka', right: 'to pray / to invoke' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Cosmology',
      question: "In Ndebele tradition, what is the relationship between uMlimu and the amadlozi?",
      options: [
        { text: "uMlimu is the distant Creator; amadlozi are your specific deceased relatives, close and named. Two layers, not in competition.", correct: true },
        { text: 'They are exactly the same thing.', correct: false },
        { text: 'amadlozi replaced uMlimu.', correct: false },
        { text: 'uMlimu is good, amadlozi are evil spirits.', correct: false },
      ],
      explanation: "Two distances. uMlimu is the far Creator, addressed at shrines like Njelele. amadlozi are close family-dead, addressed in the home. They coexist in traditional cosmology, and many people layer Christianity onto the ancestral relationship without seeing a contradiction.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Cultural respect',
      question: "You meet a Ndebele person at a wedding. Which is the safe assumption about their religion?",
      options: [
        { text: "Don't assume. Some are Christian, some follow ancestors, many do both, and the mix varies household to household. Wait to be told or ask gently.", correct: true },
        { text: "They're definitely Christian — most Ndebele are.", correct: false },
        { text: "They follow ancestors and reject Christianity.", correct: false },
      ],
      explanation: "Ndebele religious life is plural and personal. Even within one family, different members can have very different combinations. The respectful posture is to listen, not to label. If they invoke amadlozi at a ritual and also pray to Jesus on Sunday, that is not a contradiction to them — and it shouldn't be a puzzle to you.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: 'My ancestors are watching over me',
      correct: ['Amadlozi ami ayangibheka', 'Amadlozi ami ayangibheka.', 'amadlozi ami ayangibheka'],
    },
  ],

  rwenDialogue: {
    intro: "Your friend's father, Baba Sibanda, is slaughtering a goat for a small family ritual — a thanksgiving for his daughter's graduation. He invites you to stand respectfully nearby. He'll explain quietly as he goes.",
    lines: [
      { speaker: 'npc', target: 'Sibonga amadlozi namuhla.', native: "We're thanking the ancestors today." },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga ngokungimema, baba.', native: 'Thank you for inviting me, baba.', correct: true, feedback: "He nods. 'Yebo, mngane. Mema. Lalela.' — Welcome. Listen. He returns to the ritual; you've struck the right tone." },
          { target: 'Lokhu kuyizenzo zobufelokazi?', native: 'Is this superstition?', correct: false, feedback: "Baba Sibanda stops and looks at you for a long second. 'Lokhu yikholo lethu.' — This is our faith. You've just dismissed it as superstition. There's no recovery from that today." },
          { target: 'Niyakhuleka kuJesu yini?', native: "Don't you pray to Jesus?", correct: false, feedback: "He answers calmly: 'Sikhuleka kubabili — kuMlimu lakumadlozi. Akukho ukungezwani.' — We pray to both — to God and to the ancestors. There is no contradiction. The contradiction is in your head, not theirs." },
        ],
      },
      { speaker: 'npc', target: 'Idlozi likagogo lisinakekele.', native: 'Grandmother\'s spirit is looking after us.' },
      { speaker: 'rwen', rwenLine: "He just named a specific dead person — his mother — who is present in this ritual to him. amadlozi is not abstract. It is named, recent, family." },
    ],
  },

  activeRecall: {
    instruction: 'Recall from memory.',
    prompts: [
      { prompt: 'God / the Creator (high god)', correct: ['uMlimu', 'umlimu', 'Umlimu', 'uNkulunkulu', 'unkulunkulu'] },
      { prompt: 'An ancestor / ancestral spirit (singular)', correct: ['idlozi', 'Idlozi'] },
      { prompt: 'Ancestors (plural)', correct: ['amadlozi', 'Amadlozi'] },
      { prompt: 'To pray / to invoke', correct: ['ukukhuleka', 'Ukukhuleka'] },
      { prompt: 'My ancestors are watching over me', correct: ['Amadlozi ami ayangibheka', 'Amadlozi ami ayangibheka.', 'amadlozi ami ayangibheka'] },
    ],
  },

  mission: {
    title: 'Drop one assumption',
    task: "Notice one place this week where you would normally split 'religion' from 'tradition' — Christianity from ancestors, Western from African, scientific from spiritual. In Ndebele life these are often layered, not opposed. Sit with that. Don't try to resolve it.",
    rwenSignoff: "uMlimu is far. amadlozi are near. Both are real to the people who hold them. Sala kuhle, mngane.",
  },

  phase8: {
    scenario: "You sit with Baba Sibanda the day after the family ritual. He's relaxed, drinking tea. He wants to know what you understood from yesterday — about uMlimu, about amadlozi, about why both are present in his family. He'll be patient with thoughtful questions, frosty with judgemental ones.",
    rwenRole: "Baba Sibanda — late 50s, electrical engineer by trade, devout Methodist on Sundays, also keeps amadlozi rituals at home, sees no contradiction. Will speak honestly about his faith if you ask honestly.",
    successCriteria: "User uses 'uMlimu' (or uNkulunkulu) and 'amadlozi' correctly and distinguishes the two appropriately. Asks at least one genuine, non-judgemental question. Avoids labelling either tradition as 'superstition' or 'paganism'. Bonus if they grasp that Christianity and amadlozi can coexist in one person without contradiction.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
