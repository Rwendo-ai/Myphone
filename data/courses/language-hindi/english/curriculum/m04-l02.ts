import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l02-verb-gender',
  module: 4,
  lesson: 2,
  title: 'Verb Agreement — Verbs Change with Gender',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "In English, you say 'the boy goes' and 'the girl goes' — same verb. In Hindi, the boy 'jaatā hai' but the girl 'jaatī hai'. The verb itself shifts to match the subject's gender. This is the second wall English speakers hit. Once you climb it, fluency is on the other side.",
    culturalNote: "Hindi verb agreement isn't an extra rule — it's the same gender system you met yesterday, now showing up on the verb. The chair (kursī) doesn't just sit there as feminine; everything around it bends toward feminine too.",
  },

  chunks: [
    {
      id: 'jaata_jaati',
      target: 'जाता है / जाती है',
      native: 'Goes (masculine) / Goes (feminine)',
      literal: 'jātā hai (masc) / jātī hai (fem) — verb stem + gender ending',
      emoji: '🚶',
      phonetic: 'JAA-taa hai / JAA-tee hai',
      audioRef: null,
    },
    {
      id: 'larka_jaata',
      target: 'लड़का जाता है',
      native: 'The boy goes',
      literal: 'laṛkā jātā hai — masc subject + masc verb form',
      emoji: '👦',
      phonetic: 'LUR-kaa JAA-taa hai',
      audioRef: null,
    },
    {
      id: 'larki_jaati',
      target: 'लड़की जाती है',
      native: 'The girl goes',
      literal: 'laṛkī jātī hai — fem subject + fem verb form',
      emoji: '👧',
      phonetic: 'LUR-kee JAA-tee hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-ā for masculine, -ī for feminine on the verb',
    explanation: "The habitual present verb takes -tā (jātā, kartā, khātā) for a masculine subject, -tī (jātī, kartī, khātī) for a feminine subject. The same -ā / -ī rhythm you saw on nouns now appears on verbs. The auxiliary 'hai' (is) stays the same in singular.",
    examples: [
      { target: 'laṛkā jātā hai', native: 'The boy goes (masc verb)' },
      { target: 'laṛkī jātī hai', native: 'The girl goes (fem verb)' },
      { target: 'kursī girtī hai', native: 'The chair falls (kursī is fem → girtī)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the subject to its agreed verb form',
      pairs: [
        { left: 'laṛkā (boy)', right: 'jātā hai' },
        { left: 'laṛkī (girl)', right: 'jātī hai' },
        { left: 'kursī (chair, fem)', right: 'girtī hai (falls)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the verb form that matches the subject',
      sentence: 'लड़की _____ है (The girl goes)',
      options: ['jātī', 'jātā', 'jāte'],
      correct: 'jātī',
      context: 'Feminine subject → -ī ending on the verb.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'The boy goes',
      correct: ['laṛkā jātā hai', 'larka jata hai', 'Larka jata hai', 'Laṛkā jātā hai'],
    },
    {
      type: 'multiple_choice',
      instruction: "Kursī (chair) is feminine. How does the verb 'falls' agree with it?",
      question: 'Kursī ___ hai. (The chair falls.)',
      options: [
        { text: 'kursī girtī hai', correct: true },
        { text: 'kursī girtā hai', correct: false },
        { text: 'kursī girte hai', correct: false },
      ],
      explanation: "Even though kursī is an object, it's feminine — so the verb takes the feminine -ī form: girtī.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "The girl goes" (laṛkī jātī hai)',
      words: ['है', 'जाती', 'लड़की'],
      correct: ['लड़की', 'जाती', 'है'],
      translation: 'The girl goes',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'The girl goes',
      correct: ['laṛkī jātī hai', 'larki jati hai', 'Larki jati hai', 'Laṛkī jātī hai'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a Mumbai school gate watching kids leave. Your host asks you to narrate what each child is doing.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Dekho — yeh laṛkā aur vah laṛkī. Donon jā rahe hain. Hindi mein kaise kahoge?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Laṛkā jātā hai. Laṛkī jātī hai.', native: 'The boy goes. The girl goes.', correct: true, feedback: "Two subjects, two verb forms — perfect agreement." },
          { target: 'Laṛkā jātī hai. Laṛkī jātā hai.', native: 'Boy goes (fem verb). Girl goes (masc verb). [swapped]', correct: false, feedback: "Verb endings are swapped. Boy → jātā (masc -ā). Girl → jātī (fem -ī)." },
          { target: 'Donon jaate hain', native: 'They both go', correct: false, feedback: "Try one at a time so the agreement is visible: 'Laṛkā jātā hai' and 'Laṛkī jātī hai'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shābāsh. The verb itself now tells you who the subject is. That's Hindi efficiency.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The boy goes', correct: ['laṛkā jātā hai', 'larka jata hai', 'Larka jata hai', 'Laṛkā jātā hai'] },
      { prompt: 'The girl goes', correct: ['laṛkī jātī hai', 'larki jati hai', 'Larki jati hai', 'Laṛkī jātī hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Watch one person walking today — anyone, anywhere — and silently say in Hindi: 'laṛkā jātā hai' or 'laṛkī jātī hai' depending on who they are. Feel the verb shift.",
    rwenSignoff: "The verb now bends with the speaker. Phir milenge.",
  },

  phase8: {
    scenario: "It's late afternoon at a chai stall in Connaught Place. Your colleague Vikram is teaching you sentence-building between sips. He'll point at people walking by — a boy with a school bag, a girl on a scooter, an older auntie carrying groceries — and ask you to narrate what each one is doing, watching specifically whether your verb ending matches the subject's gender.",
    rwenRole: "Vikram — your patient 35-year-old colleague who switches you back to Hindi every time you slip into English, and corrects gender mismatches with a friendly 'are yaar, fem hai!' (mate, that's feminine!).",
    successCriteria: "User produces 'laṛkā jātā hai' for a boy walking (-tā ending), 'laṛkī jātī hai' for a girl walking (-tī ending), and adapts the verb correctly when Vikram swaps genders mid-sentence — three sentences, two distinct gender endings, no mismatches.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
