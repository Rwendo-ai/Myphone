import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-fear-worry',
  module: 10,
  lesson: 3,
  title: 'Fear & Worry — Kutya nekunetseka',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Kutya kwakapfukura mumvura — 'ndatya' inotaurwa pasina nyadzi muChiShona. MuChiNgezi: 'I'm scared' kana 'I'm afraid' — yakaererekana zvakaringana. 'I'm worried about ___' inonge yakapfukura mumakore — kunetseka kunoenderera. Shamwari yepedyo inogamuchira mhinduro yepachokwadi — 'don't worry' (usanetseke) chombo chinodzikamisa.",
    culturalNote: "MuChiShona, kutaura kutya kana kunetseka kushamwari yapedyo chinhu chinoshanda — kunokurudzira 'kuturura'. MuChiNgezi izvi zvakafanana, asi structure inosiyana: 'I'm worried about ___' (kunetseka — kuenderera), 'I'm scared of ___' (kutya — chiitiko chinotyisa). 'Don't worry' inonzwika kushoma — wedzera 'we'll figure it out together' kuti zvinzwike kuvepo, kwete kuiderera manzwiro emumwe.",
  },

  chunks: [
    {
      id: 'im_scared',
      target: "I'm scared",
      native: 'Ndatya',
      literal: 'I-am scared',
      emoji: '😨',
      phonetic: 'aym-SKAYRD',
      audioRef: null,
    },
    {
      id: 'worried_about',
      target: "I'm worried about...",
      native: 'Ndine hanya ne...',
      literal: 'I-have worry about',
      emoji: '😟',
      phonetic: 'aym-WUH-reed-uh-BOWT',
      audioRef: null,
    },
    {
      id: 'dont_worry',
      target: "Don't worry",
      native: 'Usanetseke',
      literal: "do-not worry",
      emoji: '🤝',
      phonetic: 'DOHNT-WUH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Fear vs worry — present moment vs ongoing',
    explanation: "'I'm scared' = manzwiro epakarepo (chinhu chiripo). 'I'm worried about ___' = manzwiro anoenderera (chinhu chichiri kuuya, chisina kupera). 'Of' inotevera 'scared' (I'm scared OF dogs); 'about' inotevera 'worried' (I'm worried ABOUT my mother). 'Don't worry' yega yakapfava — wedzera 'we'll figure it out' kana 'I'm here' kuti zvinzwike sechikuru.",
    examples: [
      { target: "I'm scared of flying.",                              native: 'Ndinotya kufamba neindege.' },
      { target: "I'm worried about my mother's health.",              native: 'Ndine hanya nehutano hwa amai.' },
      { target: "Don't worry — we'll figure it out together.",        native: 'Usanetseke — tichaona pamwe.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Sangana mashoko echiNgezi nezviri muChiShona',
      pairs: [
        { left: "I'm scared",            right: 'Ndatya' },
        { left: "I'm worried about",      right: 'Ndine hanya ne' },
        { left: "Don't worry",            right: 'Usanetseke' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi',
      prompt: 'Ndine hanya nehutano hwa amai.',
      correct: ["I'm worried about my mother's health.", "I am worried about my mother's health.", "I'm worried about my mum's health.", "i'm worried about my mother's health."],
    },
    {
      type: 'translate',
      instruction: 'Nyora muChiNgezi — uri kushanga shamwari yako',
      prompt: 'Usanetseke — tichaona pamwe.',
      correct: ["Don't worry — we'll figure it out together.", "Don't worry, we'll figure it out together.", "Don't worry — we will figure it out together.", "don't worry — we'll figure it out together."],
    },
    {
      type: 'build_sentence',
      instruction: "Vaka chirevo: 'I'm worried about my job'",
      words: ['my', "I'm", 'worried', 'job.', 'about'],
      correct: ["I'm", 'worried', 'about', 'my', 'job.'],
      translation: 'Ndine hanya nebasa rangu',
    },
    {
      type: 'fill_blank',
      instruction: "Zadzisa — kusarudza pakati pe 'of' ne 'about'",
      sentence: "I'm scared _____ flying, but I'm worried _____ missing the meeting more.",
      options: ['of / about', 'about / of', 'on / in'],
      correct: 'of / about',
      context: "'Scared OF' (chinotyisa pachacho) + 'worried ABOUT' (chinhu chinoenderera). Mitemo miviri inogara pamwe — uchashandisa kakawanda.",
    },
    {
      type: 'multiple_choice',
      instruction: 'Sarudza yakanaka',
      question: "Your friend just told you they're worried about losing their job. What's most caring?",
      options: [
        { text: "Don't worry — we'll figure it out together. Tell me more.", correct: true },
        { text: "Don't worry. It's nothing.",                                   correct: false },
        { text: "That's your problem.",                                          correct: false },
      ],
      explanation: "'Don't worry' yega inogona kunzwika seyakaderera manzwiro. Wedzera 'we'll figure it out together' (chitumiro) ne 'tell me more' (kuti vavhure mwoyo). Iyi i ChiNgezi cheshamwari.",
    },
  ],

  rwenDialogue: {
    intro: "Shamwari yako yepedyo yakuvhakachira pa video call. Yatanga kuona kuti uri kunetseka, yakubvunza nezve hupenyu hwako.",
    lines: [
      { speaker: 'npc', target: "You've been quiet today. Is something on your mind?", native: 'Wanga wakanyarara nhasi. Pane chiri pamwoyo wako here?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yeah, honestly — I'm worried about my mother's health. She hasn't been well, and I'm scared of what the doctor will say.", native: 'Hongu, pachokwadi — ndine hanya nehutano hwa amai. Havasi kunzwa zvakanaka, uye ndatya zvichanzi nachiremba.', correct: true, feedback: "Yakanaka chose — 'worried about' (kuenderera), 'scared of' (chiitiko chinotyisa), wedzera chikonzero. Pachokwadi pasina kunyepedzera." },
          { target: "Nothing.", native: 'Hapana.', correct: false, feedback: "Vatakubvunza nesimba — vapa pachokwadi: 'I'm worried about ___'." },
          { target: "Ndine hanya ne amai.", native: 'Ndine hanya ne amai.', correct: false, feedback: "ChiShona chete — shanduri muChiNgezi: 'I'm worried about my mother.'" },
        ],
      },
      { speaker: 'npc', target: "Don't worry — we'll figure it out together. When's the appointment?", native: 'Usanetseke — tichaona pamwe. Kuonana nachiremba ndere riini?' },
      {
        speaker: 'rwen',
        rwenLine: "Wakwanisa! Wakavhura mwoyo. 'Worried about' yepamhuri, 'scared of' yepa nguva inoda kuuya. Iyo shamwari yako yagamuchira nesimba — 'we'll figure it out together'. ChiNgezi chemoyo chinozadzika.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Pasina kutarisa.',
    prompts: [
      { prompt: "I'm worried about (in English)",  correct: ["I'm worried about", "I am worried about", "i'm worried about"] },
      { prompt: "Don't worry (in English)",         correct: ["Don't worry", "Do not worry", "don't worry", "Don't worry."] },
    ],
  },

  mission: {
    title: 'Basa raNhasi',
    task: "Funga chinhu chimwe chiri kukunetsa nhasi. Nyora pa diary muChiNgezi: 'I'm worried about ___ because ___.' Wedzera 'But I'll be okay' kana 'But I have ___ to help me.' Kunyora manzwiro kunoaderedza — chombo chiri kuvanachiremba kunzika seru.",
    rwenSignoff: "Mangwana — kupinda kunachiremba — chiri chinhu chinoda kupakata chiri pachena chose.",
  },

  phase8: {
    scenario: "You're confiding in a close English-speaking friend over coffee. You have a real worry — about a family member's health, your job, or your future. Your friend won't judge. Open up honestly, in English.",
    rwenRole: "Tendai, 32, your closest English-speaking friend. Listens without interrupting. Gently asks 'How long has this been going on?' and 'What can I do?'",
    successCriteria: "User uses 'I'm worried about ___' (with 'about' not 'of'). Uses 'I'm scared of ___' or 'I'm scared that ___' for an immediate fear. States the cause clearly. Stays in English (no Shona-only sentences).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
