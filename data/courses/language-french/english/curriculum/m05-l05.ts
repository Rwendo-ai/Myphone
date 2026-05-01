import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l05-aunts-uncles',
  module: 5,
  lesson: 5,
  title: 'Tante & Oncle — Aunts, Uncles, Cousins',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Your phone rings — it's your cousin in Quebec. You haven't spoken in a year. To explain who they are when you mention them later, you need 'cousin' (m) or 'cousine' (f). One word, two endings, depending on the person.",
    culturalNote: "French distinguishes male and female cousins by spelling: cousin (m) vs cousine (f). They sound nearly identical when said quickly — the 'e' on cousine is soft. Same trick happens with ami/amie, voisin/voisine. Gender pronunciation in French is often a whisper, not a shout.",
  },

  chunks: [
    {
      id: 'ma_tante',
      target: 'Ma tante',
      native: 'My aunt',
      literal: 'My(f) aunt',
      emoji: '👩‍🦱',
      phonetic: 'mah TAHNT',
      audioRef: null,
    },
    {
      id: 'mon_oncle',
      target: 'Mon oncle',
      native: 'My uncle',
      literal: 'My(m) uncle',
      emoji: '👨‍🦰',
      phonetic: 'mohn-NOHN-kluh',
      audioRef: null,
    },
    {
      id: 'mon_cousin_ma_cousine',
      target: 'Mon cousin / Ma cousine',
      native: 'My cousin (m / f)',
      literal: 'My cousin(m) / My cousin(f)',
      emoji: '🧑',
      phonetic: 'mohn koo-ZAHN / mah koo-ZEEN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Cousin gender — silent endings',
    explanation: "Adding -e to many French nouns makes them feminine. Cousin (male) → cousine (female). The pronunciation barely changes: cousin ends with a nasal 'ahn' sound, cousine ends with a clear 'een'. Listen for that final consonant — that's your gender clue.",
    examples: [
      { target: 'Mon cousin Marc', native: 'My (male) cousin Marc' },
      { target: 'Ma cousine Marie', native: 'My (female) cousin Marie' },
      { target: 'Mes cousins', native: 'My cousins (mixed group or all male)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the French to its meaning',
      pairs: [
        { left: 'Ma tante', right: 'My aunt' },
        { left: 'Mon oncle', right: 'My uncle' },
        { left: 'Ma cousine', right: 'My (female) cousin' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Your cousin is named Sophie — a girl.',
      sentence: 'Voici ma _____ Sophie.',
      options: ['cousin', 'cousine', 'tante'],
      correct: 'cousine',
      context: "Sophie is female, so cousine. 'Tante' would be aunt — only correct if Sophie were the older generation.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My uncle',
      correct: ['Mon oncle', 'mon oncle'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build: "My aunt lives in Quebec"',
      words: ['Québec.', 'au', 'Ma', 'habite', 'tante'],
      correct: ['Ma', 'tante', 'habite', 'au', 'Québec.'],
      translation: 'My aunt lives in Quebec.',
    },
    {
      type: 'multiple_choice',
      instruction: "Your cousin Lucas (a guy) calls you. You tell a friend: 'I just spoke to my cousin Lucas.'",
      question: 'Which is correct?',
      options: [
        { text: "Je viens de parler à mon cousin Lucas.", correct: true },
        { text: "Je viens de parler à ma cousine Lucas.", correct: false },
        { text: "Je viens de parler à ma cousin Lucas.", correct: false },
      ],
      explanation: "Lucas is masculine — so 'mon cousin'. 'Cousine' would mean a female cousin; 'ma cousin' mixes feminine possessive with masculine noun.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'My (female) cousin',
      correct: ['Ma cousine', 'ma cousine'],
    },
  ],

  rwenDialogue: {
    intro: "You're on a video call with your aunt in Montreal. She wants the family update.",
    lines: [
      {
        speaker: 'npc',
        target: 'Comment va ton oncle Pierre?',
        native: 'How is your uncle Pierre?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Mon oncle Pierre va très bien, merci.', native: 'My uncle Pierre is doing great, thanks.', correct: true, feedback: "Clean — 'mon oncle' rolls into 'mon-NONkluh' with that lovely liaison." },
          { target: 'Ma oncle Pierre va très bien.', native: 'My uncle Pierre is doing great.', correct: false, feedback: "Oncle is masculine — 'mon', not 'ma'." },
          { target: 'Mon tante Pierre va très bien.', native: 'My aunt Pierre is doing great.', correct: false, feedback: "Tante means aunt, and Pierre is a man — you want oncle." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Et ta cousine Camille, elle est mariée maintenant?',
        native: 'And your cousin Camille, is she married now?',
      },
      {
        speaker: 'rwen',
        rwenLine: "She said 'ta cousine' — your (female) cousin. The family tree in your head is now mapping cleanly to French. Pas mal.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'My aunt (in French)',
        correct: ['Ma tante', 'ma tante'],
      },
      {
        prompt: 'My (male) cousin (in French)',
        correct: ['Mon cousin', 'mon cousin'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one aunt, uncle, or cousin in your real life. Say their name out loud with the right French label: 'Mon oncle ___' / 'Ma tante ___' / 'Mon cousin ___' / 'Ma cousine ___.'",
    rwenSignoff: "Extended family — the rich layer of any French chat. À demain.",
  },

  phase8: {
    scenario: "Video call with your tante Marie-Claude, who lives in Montreal. She hasn't seen you in two years and wants the full extended-family update — how your uncle is, what your cousins are doing, who's married, who has kids. You need to talk through several relatives by name and relationship.",
    rwenRole: "Tante Marie-Claude — your aunt in Quebec, ~58, warm Quebec accent, asks rapid-fire questions about cousins. Will use 'ben' a lot ('ben oui', 'ben non'). Loves hearing about her side of the family.",
    successCriteria: "User uses 'mon oncle', 'ma tante', AND either 'mon cousin' or 'ma cousine' (with correct gender for the named relative) at least once each. Bonus: handles two named relatives of different genders without dropping agreement.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
