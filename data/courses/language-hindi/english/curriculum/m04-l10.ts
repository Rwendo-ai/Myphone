import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-grammar-context',
  module: 4,
  lesson: 10,
  title: 'Grammar in Context — The Full Picture',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Nine grammar lessons. Today we don't add anything new — we USE everything. Gender, verb agreement, postpositions, possessives, demonstratives, SOV, conjugations. All in one conversation. This is where Hindi grammar stops being rules and starts being language.",
    culturalNote: "Hindi grammar is not a checklist to memorise — it's a rhythm to feel. Gender, agreement, postpositions, SOV, the honā spine — when these stop being separate rules and start moving together in your speech, that's the moment fluency begins. You're at that moment now.",
  },

  chunks: [
    {
      id: 'main_seekhna_chahta',
      target: 'मैं सीखना चाहता हूँ',
      native: 'I want to learn (masc speaker)',
      literal: 'main sīkhnā chāhtā hūṁ — I + to-learn + want + am',
      emoji: '🎓',
      phonetic: 'main SEEKH-naa CHAAH-taa hoon',
      audioRef: null,
    },
    {
      id: 'sab_kuch_acha',
      target: 'सब कुछ अच्छा होगा',
      native: 'Everything will be good',
      literal: 'sab kuch acchā hogā — all + something + good + will-be',
      emoji: '✨',
      phonetic: 'sab kuch ACH-chaa HO-gaa',
      audioRef: null,
    },
    {
      id: 'maine_seekha',
      target: 'मैंने सीखा',
      native: 'I learned (it)',
      literal: 'mainne sīkhā — I (ergative) + learned (past, masc)',
      emoji: '🏆',
      phonetic: 'main-ney SEEK-haa',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Grammar summary — all systems together',
    explanation: "Gender (kursī fem, mez masc). Verb agreement (jātā/jātī, jāte/jātī). Number (hai/hain). Postpositions AFTER nouns (ghar mein, school se). Possession agrees with possessed (Rām kī kursī). Demonstratives (yeh/vah/ye/ve). SOV — verb last. honā conjugates by person (hūṁ/hai/ho/hain). Stack these and you have Hindi.",
    examples: [
      { target: 'merī kursī ghar mein hai', native: 'My (fem) chair is in the house (postposition + possession + SOV)' },
      { target: 'vah laṛkī kitāb paṛhtī hai', native: 'That girl reads a book (demonstrative + fem subj + SOV + agreement)' },
      { target: 'ham log Hindi sīkhte hain', native: 'We people learn Hindi (1st pl + masc verb + plural aux)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the grammar concept to its example',
      pairs: [
        { left: 'Postposition after noun', right: 'ghar mein (in the house)' },
        { left: 'Verb agrees with fem subject', right: 'laṛkī jātī hai' },
        { left: 'Possession agrees with possessed', right: 'Rām kī kursī' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Which sentence is grammatically correct?",
      question: 'Choose the right one:',
      options: [
        { text: 'merī kursī ghar mein hai', correct: true },
        { text: 'merā kursī mein ghar hai', correct: false },
        { text: 'main kursī ghar hai mein', correct: false },
      ],
      explanation: "kursī is fem → merī (not merā). Postposition AFTER noun → ghar mein (not mein ghar). Verb at the end → hai last. All three rules respected.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I want to learn',
      correct: ['main sīkhnā chāhtā hūṁ', 'main seekhna chahta hoon', 'Main seekhna chahta hoon', 'Main sīkhnā chāhtā hūṁ'],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the grammatically correct word',
      sentence: 'वह लड़की किताब _____ है (That girl reads a book)',
      options: ['paṛhtī', 'paṛhtā', 'paṛhte'],
      correct: 'paṛhtī',
      context: 'Subject is fem (laṛkī), so verb takes -tī.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My chair is in the house" (SOV + postposition)',
      words: ['है', 'मेँ', 'कुर्सी', 'घर', 'मेरी'],
      correct: ['मेरी', 'कुर्सी', 'घर', 'मेँ', 'है'],
      translation: 'My chair is in the house',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Everything will be good',
      correct: ['sab kuch acchā hogā', 'sab kuch achha hoga', 'Sab kuch achha hoga', 'Sab kuch acchā hogā'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen gives you the Module 4 final challenge — describe yourself, your goals, and your surroundings using everything you've learned in this module.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Apne bāre mein batāo — gender, postposition, SOV, sab kuch use karke. Ek lambā vākya bolo.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main ek vidyārthī hūṁ. Main ghar mein Hindi sīkhtā hūṁ. Merī kitāb mez par hai. Sab kuch acchā hogā.', native: "I am a student. I learn Hindi at home. My book is on the table. Everything will be good.", correct: true, feedback: "honā conjugation, postposition (mein, par), possession (merī), SOV throughout, future (hogā). Real Hindi." },
          { target: 'Main Hindi sīkhtā', native: 'I Hindi learn (fragment)', correct: false, feedback: "Stretch it. Add a postposition (ghar mein), a possessive (merī kitāb), and an aux (hūṁ). One full sentence at minimum." },
          { target: 'Main sīkhtā Hindi hūṁ ghar', native: '[scrambled — verb in middle, postposition orphaned]', correct: false, feedback: "Reorder for SOV: 'main ghar mein Hindi sīkhtā hūṁ' — I + at-home + Hindi + learn + am." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Bahut bahut acchā. Module 4 complete — you have the skeleton of Hindi grammar. Now the flesh comes in Module 5.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I want to learn', correct: ['main sīkhnā chāhtā hūṁ', 'main seekhna chahta hoon', 'Main seekhna chahta hoon', 'Main sīkhnā chāhtā hūṁ'] },
      { prompt: 'Everything will be good', correct: ['sab kuch acchā hogā', 'sab kuch achha hoga', 'Sab kuch achha hoga', 'Sab kuch acchā hogā'] },
    ],
  },

  mission: {
    title: "Your Module 4 Mission",
    task: "Write or say one complete Hindi sentence that uses ALL of: a noun (with its gender), an agreed verb, a postposition AFTER its noun, a possessive that matches what's possessed, and the verb at the END. Even one sentence counts. That's grammar in motion.",
    rwenSignoff: "The skeleton is built. Module 5 — your daily life in Hindi — begins next. Phir milenge.",
  },

  phase8: {
    scenario: "It's the final evening of your homestay in Lucknow. Your host Sharma uncle — a retired Hindi school principal — has poured you both a glass of nimbū pānī and asked you to tell him about yourself in Hindi. He wants to hear, in one short paragraph, that you've actually internalised Module 4: gender, agreement, postpositions, possessives, SOV, the honā spine. This is your oral exam.",
    rwenRole: "Sharma uncle — the 70-year-old retired principal in his element, listening rigorously for whether you can string everything from this module together without scaffolding, and ready to gently correct any single slip.",
    successCriteria: "User produces a complete paragraph (e.g. 'Main ek vidyārthī hūṁ. Main ghar mein Hindi sīkhtā hūṁ. Merī kitāb mez par hai. Sab kuch acchā hogā.') containing (1) noun with correct gender, (2) verb agreement matching subject's gender/number, (3) at least one postposition placed AFTER its noun (mein, par, se, ko), (4) a possessive (merā/merī/mere) agreeing with possessed, AND (5) verb-final SOV order — all five elements present, no English fallback.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
