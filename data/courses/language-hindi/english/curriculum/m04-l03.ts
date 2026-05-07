import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l03-number-agreement',
  module: 4,
  lesson: 3,
  title: 'Number Agreement — One, Many, Plural Verbs',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "You've conquered gender. Now layer on number. One boy 'jātā hai'. Many boys 'jāte hain'. The verb shifts again — different ending, different auxiliary. Singular and plural in Hindi feel completely different in your mouth.",
    culturalNote: "In English, you change the noun (boy → boys) and call it done. In Hindi, the verb AND the auxiliary both shift for plural. 'jātā hai' becomes 'jāte hain' — both endings change at once. It's a four-way matrix: masculine/feminine × singular/plural.",
  },

  chunks: [
    {
      id: 'jaate_hain',
      target: 'जाते हैं',
      native: 'Go (masculine plural)',
      literal: 'jāte hain — masc plural verb + plural aux',
      emoji: '👬',
      phonetic: 'JAA-tay hain',
      audioRef: null,
    },
    {
      id: 'jaati_hain',
      target: 'जाती हैं',
      native: 'Go (feminine plural)',
      literal: 'jātī hain — fem plural (-ī same as fem sg) + plural aux',
      emoji: '👭',
      phonetic: 'JAA-tee hain',
      audioRef: null,
    },
    {
      id: 'larke_larkiyan',
      target: 'लड़के / लड़कियाँ',
      native: 'Boys / Girls',
      literal: 'laṛke (masc pl, -ā→-e) / laṛkiyãã (fem pl, -ī→-iyãã)',
      emoji: '🧑‍🤝‍🧑',
      phonetic: 'LUR-kay / LUR-ki-yaan',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Plural verb endings: -te (masc), -tī (fem), aux → hain',
    explanation: "Going plural changes the verb ending and the auxiliary together. Masculine: -tā hai → -te hain. Feminine: -tī hai → -tī hain (the verb stays -tī, only the auxiliary changes). Watch for that asymmetry — feminine verbs look the same singular and plural; the auxiliary is the giveaway.",
    examples: [
      { target: 'laṛkā jātā hai → laṛke jāte hain', native: 'Boy goes → Boys go (masc sg → masc pl)' },
      { target: 'laṛkī jātī hai → laṛkiyãã jātī hain', native: 'Girl goes → Girls go (fem sg → fem pl: only aux changes)' },
      { target: 'mez girtī hai → mezeṅ girtī hain', native: 'The table falls → The tables fall (mez is masc but plural here just adds aux change in this style)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the subject to its full verb phrase',
      pairs: [
        { left: 'laṛkā (boy)', right: 'jātā hai' },
        { left: 'laṛke (boys)', right: 'jāte hain' },
        { left: 'laṛkiyãã (girls)', right: 'jātī hain' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the plural verb form',
      sentence: 'लड़के _____ हैं (The boys go)',
      options: ['jāte', 'jātā', 'jātī'],
      correct: 'jāte',
      context: 'Masculine plural subject → -e ending on the verb.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'The boys go',
      correct: ['laṛke jāte hain', 'larke jate hain', 'Larke jate hain', 'Laṛke jāte hain'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why is 'laṛkiyãã jātī hain' tricky for English speakers?",
      question: 'What changes between fem singular and fem plural?',
      options: [
        { text: 'The verb stays jātī, only the auxiliary shifts (hai → hain)', correct: true },
        { text: 'The verb changes to jāte, the auxiliary stays', correct: false },
        { text: 'Nothing changes — fem sg and pl are identical', correct: false },
      ],
      explanation: "Feminine verbs don't change for number — jātī covers both. The plural marker is the auxiliary 'hain' (vs sg 'hai').",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "The girls go" (laṛkiyãã jātī hain)',
      words: ['हैं', 'जाती', 'लड़कियाँ'],
      correct: ['लड़कियाँ', 'जाती', 'हैं'],
      translation: 'The girls go',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'The girls go',
      correct: ['laṛkiyãã jātī hain', 'larkiyan jati hain', 'Larkiyan jati hain', 'Laṛkiyãã jātī hain'],
    },
  ],

  rwenDialogue: {
    intro: "You're watching a school assembly file out — first one boy, then a group of boys, then a group of girls. Narrate each.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Pehle ek laṛkā nikla. Ab teen laṛke. Ab pāncha laṛkiyãã. Sab kuch Hindi mein bolo.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Laṛkā jātā hai. Laṛke jāte hain. Laṛkiyãã jātī hain.', native: 'The boy goes. The boys go. The girls go.', correct: true, feedback: "Three subjects, three correctly agreed verbs. You felt the matrix." },
          { target: 'Laṛkā jāte hain. Laṛke jātā hai. Laṛkiyãã jāte hain.', native: 'Boy + plural verb. Boys + sg verb. Girls + masc verb. [all wrong]', correct: false, feedback: "Mixing up gender and number. Singular: jātā/jātī hai. Plural: jāte/jātī hain." },
          { target: 'Sab jaate hain', native: 'Everyone goes (lazy plural)', correct: false, feedback: "Try the matrix one row at a time: laṛkā → jātā hai, laṛke → jāte hain, laṛkiyãã → jātī hain." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bilkul sahī. Gender × number = four cells. You can move through all of them now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The boys go (masculine plural)', correct: ['laṛke jāte hain', 'larke jate hain', 'Larke jate hain', 'Laṛke jāte hain'] },
      { prompt: 'The girls go (feminine plural)', correct: ['laṛkiyãã jātī hain', 'larkiyan jati hain', 'Larkiyan jati hain', 'Laṛkiyãã jātī hain'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Look at any group of two or more people today. Silently classify them masculine or feminine, then say 'X jāte hain' (masc) or 'X jātī hain' (fem). The auxiliary 'hain' is the plural giveaway.",
    rwenSignoff: "Singular to plural — the auxiliary always tells you. Phir milenge.",
  },

  phase8: {
    scenario: "It's a busy weekday morning at a railway platform in Pune Junction. Your friend Meena is teaching you commentary in Hindi — she'll point out single passengers, then groups, then mixed crowds, and ask you to narrate who's getting on which train, with the correct singular/plural and gender agreement on the verb each time.",
    rwenRole: "Meena — a sharp 28-year-old Hindi teacher friend, who claps when you nail 'laṛkiyãã jātī hain' on first try and gently corrects you when you say 'laṛke jātā hai' (mismatched number).",
    successCriteria: "User produces 'laṛkā jātā hai' (masc sg), 'laṛke jāte hain' (masc pl), and 'laṛkiyãã jātī hain' (fem pl) — three sentences spanning the gender/number matrix, with the auxiliary correctly switching between hai (sg) and hain (pl) every time.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
