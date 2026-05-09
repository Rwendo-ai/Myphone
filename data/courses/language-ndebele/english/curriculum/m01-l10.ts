import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10',
  module: 1,
  lesson: 10,
  title: 'Clicks as Identity — Bridge to Module 2',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Last lesson of the primer. Before we move on to greetings and grammar in Module 2, a short conversation about why the clicks matter — and why they're not 'exotic'. Then we close out and you graduate to the standard curriculum.",
    culturalNote: "Clicks travelled into Nguni languages — isiZulu, isiNdebele, isiXhosa — through centuries of contact with Khoisan peoples, including intermarriage. They are not borrowed decoration; they are part of the deep history of this region. When a Ndebele speaker uses iqiniso (truth) or ixoxo (frog), they are speaking sounds that were here before the Mfecane, before colonialism, before written records. Calling clicks 'exotic' is calling Bulawayo exotic to Bulawayo.",
  },

  chunks: [
    {
      id: 'isintu',
      target: 'isintu',
      native: 'humanity, the way of being human / Bantu culture',
      emoji: '🤝',
      phonetic: 'ee-SEEN-too — no click (worth knowing)',
      audioRef: null,
    },
    {
      id: 'iqiniso',
      target: 'iqiniso',
      native: 'the truth (recap)',
      emoji: '🎯',
      phonetic: 'ee-[q-click]ee-NEE-soh — q-click',
      audioRef: null,
    },
    {
      id: 'ulimi',
      target: 'ulimi',
      native: 'language / tongue',
      literal: 'u- + limi (tongue)',
      emoji: '👅',
      phonetic: 'oo-LEE-mee — no click; literally also means tongue',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Clicks belong to the language, not to the costume',
    explanation: "It's tempting to treat clicks as 'the cool feature' of Ndebele, the thing you mention to friends back home. Resist that. Clicks are consonants. They sit inside ordinary words for ordinary things — frog, rib, truth, code, thief, idea. Treat them like you treat 'b' or 'k', and your accent will arrive much faster than if you treat them as a special performance.",
    examples: [
      { target: 'iqiniso', native: 'truth — q-click, ordinary word' },
      { target: 'ixoxo',   native: 'frog — x-click, ordinary word' },
      { target: 'ucansi',  native: 'mat — c-click, ordinary word' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "How should a learner think about the clicks?",
      options: [
        { text: "As ordinary consonants — like b, d, k — that happen to be made differently.", correct: true },
        { text: "As a special trick reserved for showing off Ndebele to outsiders.",          correct: false },
        { text: "As something to apologise for if you can't get them right yet.",             correct: false },
      ],
      explanation: "Treating clicks as ordinary consonants is both linguistically accurate AND the fastest path to fluency. The 'special' framing slows learners down because it makes them tense up.",
    },
    {
      type: 'match_pairs',
      instruction: 'Match each click word to its meaning (review of the whole module)',
      pairs: [
        { left: 'ucansi',  right: 'sleeping mat' },
        { left: 'iqaqa',   right: 'polecat' },
        { left: 'ixoxo',   right: 'frog' },
        { left: 'iqiniso', right: 'truth' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Order the words to mean: "I want the truth."',
      words: ['iqiniso', 'Ngifuna'],
      correct: ['Ngifuna', 'iqiniso'],
      translation: 'I want the truth.',
    },
    {
      type: 'translate',
      instruction: 'Translate to English',
      prompt: 'ulimi',
      correct: ['language', 'tongue', 'a language', 'the tongue', 'the language'],
    },
  ],

  rwenDialogue: {
    intro: "A short conversation that closes the primer. An elder reflects on the clicks — and welcomes you to the language.",
    lines: [
      { speaker: 'npc',  target: 'Ulimi lwethu lulemilolozelo emithathu — c, q, x.', native: "Our language has three clicks — c, q, x." },
      { speaker: 'rwen', rwenLine: "Three clicks. The language belongs to anyone willing to learn them. He's not gatekeeping — he's inviting." },
      { speaker: 'npc',  target: 'Akula nto eyisimanga — yiqiniso nje.', native: "There is nothing exotic about it — it's simply the truth." },
      { speaker: 'rwen', rwenLine: "Yiqiniso — q-click. He's saying the clicks are not strange; they're just real. The way things are." },
      { speaker: 'npc',  target: 'Welcome ekufundeni isiNdebele.', native: "Welcome to learning isiNdebele." },
      { speaker: 'rwen', rwenLine: "You've finished the clicks primer. Module 2 starts tomorrow with greetings, family words, and your first full conversations. The clicks will still be there — only now they're not the main event. They're just part of how you speak." },
    ],
  },

  activeRecall: {
    instruction: 'Without looking up, recall — these are review.',
    prompts: [
      { prompt: 'How do you say "the truth" in isiNdebele?',                                  correct: ['iqiniso', 'Iqiniso'] },
      { prompt: 'Which click is in "ucansi" (mat) — c, q, or x?',                             correct: ['c', 'C'] },
      { prompt: 'How many clicks are there in isiNdebele?',                                   correct: ['3', 'three', 'Three', 'THREE'] },
    ],
  },

  mission: {
    title: 'Graduation: speak one click sentence aloud',
    task: "Stand up, take a breath, and say out loud: 'Salibonani. Ngifuna iqiniso.' (Hello. I want the truth.) That's a complete sentence with one q-click in it. The first of many. Tomorrow, Module 2 begins.",
    rwenSignoff: "You've earned the clicks. They belong to you now — use them like any other consonant. Tomorrow we start treating isiNdebele as a whole language, not three special sounds. Hamba kuhle.",
  },

  phase8: {
    scenario: "A short reflective conversation with Rwen at the end of the primer. He asks you which click was hardest, which felt easiest, and you say one full sentence containing at least one click.",
    rwenRole: "Warm tutor wrapping up a unit, genuinely curious about the learner's experience",
    successCriteria: "User produced one full isiNdebele sentence containing at least one click consonant and reflected on which click was hardest.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
