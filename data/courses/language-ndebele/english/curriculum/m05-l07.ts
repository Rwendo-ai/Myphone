import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm05-l07',
  module: 5,
  lesson: 7,
  title: 'Igama lika... — Talking About Your Family',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Now you have the vocabulary. Today we put it into sentences. 'Igama lika...' = the name of... 'Igama likaMama wami nguJoyce' — the name of my mother is Joyce. The little 'lika' is doing important grammatical work — it links a name to its owner.",
    culturalNote: "When a Ndebele speaker meets you, they often want to know your people — your mother's name, your father's name, your clan. Naming your family in isiNdebele is a way of saying 'I belong somewhere'. The longer you can talk about your family, the more rooted you appear. Even a foreigner who can name three relatives in isiNdebele earns a different kind of welcome.",
  },

  chunks: [
    {
      id: 'igama',
      target: 'igama',
      native: 'Name',
      literal: 'i- (class 5 prefix) + gama. The basic word for "name".',
      emoji: '🏷️',
      phonetic: 'ee-GAH-mah',
      audioRef: null,
    },
    {
      id: 'lika',
      target: 'lika...',
      native: 'Of (linker for personal names)',
      literal: 'The possessive linker that attaches to personal names. Igama likaMama = the name of Mother.',
      emoji: '🔗',
      phonetic: 'lee-KAH',
      audioRef: null,
    },
    {
      id: 'ngu',
      target: 'ngu...',
      native: 'Is / it is (copula for naming)',
      literal: 'Used before a personal name to say "it is X". Igama lakhe nguJoyce = Her name is Joyce.',
      emoji: '🟰',
      phonetic: 'ngoo',
      audioRef: null,
    },
    {
      id: 'mhuriyami',
      target: 'usapho lwami',
      native: 'My family / household',
      literal: 'usapho (family unit) + lwami (my). The Ndebele word for family in the household sense.',
      emoji: '🏠',
      phonetic: 'oo-SAH-poh lwah-MEE',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Igama lika... ngu... — the naming sentence',
    explanation: "The naming frame in isiNdebele is: Igama lika[relation] ngu[name]. Igama likaMama wami nguJoyce. Igama likaBaba wami nguJohn. The frame works for any kinship term — just slot in the relation and the name. It's the most useful sentence in the family unit.",
    examples: [
      { target: 'Igama likaMama wami nguJoyce.', native: 'My mother\'s name is Joyce.' },
      { target: 'Igama likaBaba wami nguJohn.', native: 'My father\'s name is John.' },
      { target: 'Igama likaGogo wami nguMaria.', native: 'My grandmother\'s name is Maria.' },
      { target: 'Igama lomfowethu nguDavid.', native: 'My brother\'s name is David.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each isiNdebele phrase to its meaning',
      pairs: [
        { left: 'igama', right: 'Name' },
        { left: 'lika...', right: 'Of (linker for names)' },
        { left: 'ngu...', right: 'It is (before a name)' },
        { left: 'usapho lwami', right: 'My family / household' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete: "My mother\'s name is Joyce."',
      sentence: 'Igama _____ Mama wami nguJoyce.',
      options: ['lika', 'ngu', 'wami'],
      correct: 'lika',
      context: 'Igama lika[relation] ngu[name] is the naming frame. lika is the linker between "name" and the relation.',
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: "My father's name is John.",
      correct: ['Igama likaBaba wami nguJohn.', 'Igama likaBaba wami ngu John.', 'Igama lika baba wami nguJohn'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My grandmother\'s name is Maria"',
      words: ['nguMaria.', 'wami', 'Igama', 'likaGogo'],
      correct: ['Igama', 'likaGogo', 'wami', 'nguMaria.'],
      translation: "My grandmother's name is Maria.",
    },
  ],

  rwenDialogue: {
    intro: "At a Bulawayo gathering, an elderly woman wants to know about your family back home. She speaks slowly, leaving space for your answer.",
    lines: [
      { speaker: 'npc', target: 'Mntwana, ngubani igama likaMama wakho?', native: "Child, what is your mother's name?" },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Igama likaMama wami nguJoyce, Gogo.', native: 'My mother\'s name is Joyce, Grandmother.', correct: true, feedback: "Full frame, correct linker, kinship title at the end. uGogo nods — she now knows part of your story." },
          { target: 'Joyce.', native: 'Joyce.', correct: false, feedback: "She asked in isiNdebele — answer in isiNdebele. Use the full frame: 'Igama likaMama wami nguJoyce.'" },
          { target: 'My mom Joyce.', native: 'My mom Joyce (English).', correct: false, feedback: "She asked in the full Ndebele frame; match it. 'Igama likaMama wami nguJoyce.'" },
        ],
      },
      { speaker: 'npc', target: 'Joyce. Igama elihle. Wakhuluma njengomzukulu wami.', native: "Joyce. A beautiful name. You speak like my own grandchild." },
      { speaker: 'rwen', rwenLine: "She just claimed you. The naming frame opens a door — you walked through.", rwenAnimation: 'celebrate' },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Name', correct: ['igama', 'Igama'] },
      { prompt: "My mother's name is Joyce.", correct: ['Igama likaMama wami nguJoyce', 'Igama likaMama wami nguJoyce.', 'Igama lika Mama wami nguJoyce.'] },
      { prompt: "My father's name is John.", correct: ['Igama likaBaba wami nguJohn', 'Igama likaBaba wami nguJohn.', 'Igama lika Baba wami nguJohn.'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Compose three naming sentences in isiNdebele — for your mother, your father, and one grandparent. Igama likaMama wami ngu___. Say each aloud. Then write them down. The frame becomes muscle memory once you've shaped it three times for people you love.",
    rwenSignoff: "Names are the first map of any family. Tomorrow we move outward — into friendship and love.",
  },

  phase8: {
    scenario: "uGogo Magdalene wants to know about your whole family. She asks for each name — mother, father, grandparents, siblings. You answer using the Igama lika... ngu... frame for each one, switching kinship terms as you go.",
    rwenRole: "uGogo Magdalene — late 70s, slow careful speech, listens for each name and repeats it back. Will gently prompt 'and your father?' if you stop short.",
    successCriteria: "User produces at least 3 naming sentences using the Igama lika[relation] ngu[name] frame, varies the kinship terms (Mama, Baba, Gogo, Khulu, etc.), and stays in isiNdebele for the conversation.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
