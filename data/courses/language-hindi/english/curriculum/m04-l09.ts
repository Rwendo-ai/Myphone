import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l09-conjugations',
  module: 4,
  lesson: 9,
  title: 'Basic Conjugations — होना (To Be) Across Persons',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "हूँ. है. हो. हैं. Four endings of one verb — होना (honā, to be). 'I am' = main hūṁ. 'You (formal) are' = āp hain. 'He/she is' = vah hai. The verb conjugates by person, not just gender. This is the spine of every Hindi sentence you'll ever speak.",
    culturalNote: "होना (honā) is the most-used verb in Hindi, just like 'to be' in English. Once you've internalised hūṁ / hai / ho / hain, you can build sentences about anyone. The same person endings echo across most other Hindi verbs, so this lesson unlocks dozens more.",
  },

  chunks: [
    {
      id: 'main_hoon',
      target: 'मैं हूँ',
      native: 'I am',
      literal: 'main hūṁ — first person sg',
      emoji: '🙋',
      phonetic: 'main HOON',
      audioRef: null,
    },
    {
      id: 'aap_hain',
      target: 'आप हैं',
      native: 'You are (formal/respectful)',
      literal: 'āp hain — formal you, plural-form aux',
      emoji: '🤝',
      phonetic: 'AAP hain',
      audioRef: null,
    },
    {
      id: 'vah_hai',
      target: 'वह है',
      native: 'He / she / it is',
      literal: 'vah hai — third person sg',
      emoji: '👤',
      phonetic: 'vah HAI',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'होना (honā) — to be — across persons',
    explanation: "main (I) + hūṁ. tū (intimate you) + hai. tum (familiar you) + ho. āp (formal you) + hain. vah (he/she) + hai. ham (we) + hain. ve (they) + hain. The same auxiliary suffixes (hūṁ, ho, hai, hain) attach to almost every Hindi verb in the present tense. Lock these in, and Hindi conjugation is half-done.",
    examples: [
      { target: 'main ḍākṭar hūṁ', native: 'I am a doctor (1st sg)' },
      { target: 'āp adhyāpak hain', native: 'You are a teacher (formal)' },
      { target: 'vah ḍākṭar hai', native: 'He/she is a doctor (3rd sg)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pronoun to its "to be" form',
      pairs: [
        { left: 'main (I)', right: 'hūṁ' },
        { left: 'āp (you formal)', right: 'hain' },
        { left: 'vah (he/she)', right: 'hai' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the matching auxiliary',
      sentence: 'मैं डॉक्टर _____ (I am a doctor)',
      options: ['hūṁ', 'hai', 'ho'],
      correct: 'hūṁ',
      context: '"I am" = main hūṁ. The aux must match the pronoun.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I am a doctor',
      correct: ['main ḍākṭar hūṁ', 'main doctor hoon', 'Main doctor hoon', 'Main ḍākṭar hūṁ'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why do 'āp', 'ham' and 've' all use 'hain'?",
      question: 'Pick the rule:',
      options: [
        { text: 'They all behave like grammatical plurals — formal you, we, they', correct: true },
        { text: 'They all start with vowels', correct: false },
        { text: "They're irregular — no rule", correct: false },
      ],
      explanation: "Even though 'āp' refers to one person, it's grammatically plural for politeness — that's why it takes 'hain', the same aux as 'we' and 'they'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "She is a teacher" (vah adhyāpikā hai)',
      words: ['है', 'अध्यापिका', 'वह'],
      correct: ['वह', 'अध्यापिका', 'है'],
      translation: 'She is a teacher',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (formal "you")',
      prompt: 'You are a teacher (formal)',
      correct: ['āp adhyāpak hain', 'aap adhyapak hain', 'Aap adhyapak hain', 'Āp adhyāpak hain'],
    },
  ],

  rwenDialogue: {
    intro: "You're meeting a colleague's family for the first time. Introduce yourself, ask about them, and identify a third person.",
    lines: [
      {
        speaker: 'npc',
        target: 'आप क्या काम करते हैं?',
        native: 'What work do you do?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main injīniyar hūṁ. Āp adhyāpak hain? Aur vah kaun hai?', native: 'I am an engineer. Are you a teacher? And who is that?', correct: true, feedback: "Three persons, three correct auxiliaries — hūṁ, hain, hai. You're conjugating live." },
          { target: 'Main hain. Āp hai. Vah hūṁ.', native: '[all auxiliaries swapped]', correct: false, feedback: "Auxiliaries swapped. main → hūṁ, āp → hain (formal pl), vah → hai." },
          { target: 'Main injīniyar', native: 'I engineer (no auxiliary)', correct: false, feedback: "You need 'hūṁ' to complete: 'main injīniyar hūṁ' (I am an engineer)." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wāh — three persons, three forms of honā. You can introduce a whole roomful now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am a doctor', correct: ['main ḍākṭar hūṁ', 'main doctor hoon', 'Main doctor hoon', 'Main ḍākṭar hūṁ'] },
      { prompt: 'You are a teacher (formal)', correct: ['āp adhyāpak hain', 'aap adhyapak hain', 'Aap adhyapak hain', 'Āp adhyāpak hain'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Introduce yourself and two people you know — silently, in Hindi. 'Main ___ hūṁ. Vah ___ hai. Āp ___ hain?' Three pronouns, three auxiliaries. Feel the spine.",
    rwenSignoff: "honā is the spine — every other verb hangs on it. Phir milenge.",
  },

  phase8: {
    scenario: "It's the welcome dinner on day one of a 4-week language exchange in Pune. Your host family has gathered around the dining table — mother, father, two siblings, a grandfather — and they each want a quick introduction from you, AND they want you to ask about each of them in turn. You'll need to swap between main, āp, and vah cleanly throughout.",
    rwenRole: "Verma uncle — the 60-year-old patriarch leading the welcome, friendly but precise about Hindi grammar; he'll laugh kindly if you say 'main hain' and remind you 'main → hūṁ, āp → hain'.",
    successCriteria: "User produces sentences in three different persons with the matching auxiliary: 'main ___ hūṁ' (I am ___), 'āp ___ hain?' (are you ___, formal), and 'vah ___ hai' (he/she is ___) — at least three persons used correctly with their right aux, no English fallback for 'is/am/are'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
