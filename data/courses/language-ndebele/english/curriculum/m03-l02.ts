import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l02',
  module: 3,
  lesson: 2,
  title: 'Numbers 6 to 10',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Six to ten is where isiNdebele numbers get a reputation. Two of them are nine and ten syllables long. Native speakers do not flinch — and you won't either, once you hear them as music instead of letters.",
    culturalNote: "Older speakers in Matabeleland often shorten 'isishiyangalombili' (eight) and 'isishiyangalolunye' (nine) in fast speech, but in school, in songs, and on the radio, you will hear the full forms. Learn them long; you can hear them short later.",
  },

  chunks: [
    {
      id: 'isithupha',
      target: 'isithupha',
      native: 'six',
      literal: 'the-thumb (six = one full hand plus the thumb of the other)',
      emoji: '6️⃣',
      phonetic: 'ee-see-TOO-pah',
      audioRef: null,
    },
    {
      id: 'isikhombisa',
      target: 'isikhombisa',
      native: 'seven',
      literal: 'the-pointer (the finger that points)',
      emoji: '7️⃣',
      phonetic: 'ee-see-kohm-BEE-sah',
      audioRef: null,
    },
    {
      id: 'isishiyangalombili',
      target: 'isishiyangalombili',
      native: 'eight',
      literal: 'leaving-two-behind (ten minus two)',
      emoji: '8️⃣',
      phonetic: 'ee-see-shee-yan-gah-lohm-BEE-lee',
      audioRef: null,
    },
    {
      id: 'isishiyangalolunye',
      target: 'isishiyangalolunye',
      native: 'nine',
      literal: 'leaving-one-behind (ten minus one)',
      emoji: '9️⃣',
      phonetic: 'ee-see-shee-yan-gah-loh-LOO-nyeh',
      audioRef: null,
    },
    {
      id: 'itshumi',
      target: 'itshumi',
      native: 'ten',
      literal: 'the-ten (a complete count of fingers)',
      emoji: '🔟',
      phonetic: 'ee-CHOO-mee',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Numbers built from the body and from ten',
    explanation: "Six and seven are body words: 'isithupha' (the thumb of the second hand) and 'isikhombisa' (the pointing finger). Eight and nine are subtraction from ten: 'isishiya-nga-lo-mbili' literally means 'leaves-with-two', i.e. two short of ten. 'Itshumi' is ten itself. Once you hear the logic, the long forms stop feeling long — they become a tiny story about hands.",
    examples: [
      { target: 'isithupha', native: 'six = thumb of second hand' },
      { target: 'isishiyangalombili', native: 'eight = leaves-two-behind' },
      { target: 'itshumi', native: 'ten = the full count' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each number to its meaning',
      pairs: [
        { left: 'isithupha', right: 'six' },
        { left: 'isikhombisa', right: 'seven' },
        { left: 'isishiyangalombili', right: 'eight' },
        { left: 'isishiyangalolunye', right: 'nine' },
        { left: 'itshumi', right: 'ten' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type in isiNdebele',
      prompt: 'ten',
      correct: ['itshumi', 'Itshumi'],
    },
    {
      type: 'fill_blank',
      instruction: 'Fill the gap in the count',
      sentence: 'isithupha, _____, isishiyangalombili',
      options: ['isikhombisa', 'itshumi', 'isishiyangalolunye'],
      correct: 'isikhombisa',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'Which number literally means "leaves-one-behind" (one short of ten)?',
      options: [
        { text: 'isishiyangalolunye (nine)', correct: true },
        { text: 'isishiyangalombili (eight)', correct: false },
        { text: 'isithupha (six)', correct: false },
      ],
      explanation: "'Lolunye' contains '-lunye', the 'one' root. Nine is one short of ten. Eight ('lombili') is two short.",
    },
  ],

  rwenDialogue: {
    intro: "You're at a kombi (minibus) rank in Bulawayo. The conductor is calling out the fare and the seat number you'll take.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hlala kunombolo isikhombisa.',
        native: 'Sit in seat number seven.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Isikhombisa, ngiyabonga', native: 'Seven, thank you', correct: true, feedback: "Repeating the number shows you heard it — the conductor nods and waves you on." },
          { target: 'Itshumi', native: 'Ten', correct: false, feedback: "Different number entirely — he said seat seven (isikhombisa). Listen for 'kho' in the middle." },
          { target: 'Isithupha', native: 'Six', correct: false, feedback: "Close but no — six is 'isithupha'. He said 'isikhombisa', seven." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Yebo, isikhombisa.',
        native: 'Yes, seven.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Kombi conductors call numbers all day — your ear will sharpen fast in any rank in Bulawayo or Plumtree.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'six', correct: ['isithupha', 'Isithupha'] },
      { prompt: 'eight', correct: ['isishiyangalombili', 'Isishiyangalombili'] },
      { prompt: 'ten', correct: ['itshumi', 'Itshumi'] },
    ],
  },

  mission: {
    title: 'Stretch the long numbers',
    task: "Say 'isishiyangalombili' and 'isishiyangalolunye' out loud, slowly, five times each. Then say them at normal pace. Long words become short when the mouth has rehearsed them.",
    rwenSignoff: "If you can say nine, you can say anything in this language.",
  },

  phase8: {
    scenario: "You're at a kombi rank in Bulawayo and the conductor calls out a seat number between 6 and 10. You repeat the number to confirm, then ask how much the fare is.",
    rwenRole: "Themba, ~30, kombi conductor — fast-talking, friendly, used to passengers needing a number repeated",
    successCriteria: "User correctly identified at least one number from 6 to 10 when Themba said it, and repeated it back as confirmation.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
