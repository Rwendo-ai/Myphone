import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l01-jaana-aana',
  module: 8,
  lesson: 1,
  title: 'Jaana / Aana — To Go, To Come',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "Hindi verbs almost all end in -ना (jaana, khaana, sona). That ending IS the infinitive — 'to go', 'to eat', 'to sleep'. But here's the kicker: when you actually use a verb, it changes shape based on who you are AND your gender. A man says 'main jaata hoon' (मैं जाता हूँ); a woman says 'main jaati hoon' (मैं जाती हूँ). And the verb sits at the END of the sentence. SOV — Subject, Object, Verb. Welcome to real Hindi.",
    culturalNote: "Movement in India is constant — joint families spread across cities, the morning office commute on metro and auto, weekend trips to the village. 'Jaana' (जाना — to go) and 'aana' (आना — to come) are the two verbs you'll hear most before noon every day. 'Aap kahan ja rahe hain?' (Where are you going?) is small talk in every lift, every chai stall.",
  },

  chunks: [
    {
      id: 'jaana',
      target: 'जाना — Jaana',
      native: 'To go (infinitive)',
      literal: 'jaa- (stem) + -na (infinitive ending)',
      emoji: '🚶',
      phonetic: 'JAA-na',
      audioRef: null,
    },
    {
      id: 'aana',
      target: 'आना — Aana',
      native: 'To come (infinitive)',
      literal: 'aa- (stem) + -na (infinitive ending)',
      emoji: '🏃',
      phonetic: 'AA-na',
      audioRef: null,
    },
    {
      id: 'main_jaata_hoon',
      target: 'मैं जाता हूँ / मैं जाती हूँ — Main jaata hoon / Main jaati hoon',
      native: 'I go (man speaking / woman speaking)',
      literal: 'I go-masc / go-fem am',
      emoji: '⚧️',
      phonetic: 'mayn JAA-ta hoon / mayn JAA-tee hoon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb at the end + gender agreement',
    explanation: "Hindi habitual present = stem + -ta/-ti/-te + होना (hona — to be). A man uses -ta (जाता), a woman uses -ti (जाती), plural/respect uses -te (जाते). The verb is the LAST thing in the sentence: 'I to-the-office go-am' (Main daftar jaata hoon). English would say 'I go to the office' — Hindi flips it.",
    examples: [
      { target: 'मैं घर जाता हूँ — Main ghar jaata hoon', native: 'I go home (man speaking)' },
      { target: 'मैं घर जाती हूँ — Main ghar jaati hoon', native: 'I go home (woman speaking)' },
      { target: 'क्या आप आ रहे हैं? — Kya aap aa rahe hain?', native: 'Are you coming? (formal/respect)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Hindi verb to its meaning',
      pairs: [
        { left: 'Jaana', right: 'To go (infinitive)' },
        { left: 'Aana', right: 'To come (infinitive)' },
        { left: 'Main jaata hoon', right: 'I go (man speaking)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A woman says "I go to the office" — pick the right form',
      sentence: 'Main daftar _____ hoon.',
      options: ['jaati', 'jaata', 'jaate'],
      correct: 'jaati',
      context: 'Female speaker uses -ti, male uses -ta.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (man speaking)',
      prompt: 'I go home',
      correct: ['Main ghar jaata hoon', 'main ghar jaata hoon'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Where does the verb go in a Hindi sentence?',
      question: 'Hindi word order is:',
      options: [
        { text: 'Subject + Object + Verb (verb at the END)', correct: true },
        { text: 'Subject + Verb + Object (like English)', correct: false },
        { text: 'Verb + Subject + Object', correct: false },
      ],
      explanation: "Hindi is SOV. 'I home go-am' = Main ghar jaata hoon. The verb always comes last.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Are you coming?' (formal)",
      words: ['Kya', 'aap', 'aa', 'rahe', 'hain?'],
      correct: ['Kya', 'aap', 'aa', 'rahe', 'hain?'],
      translation: 'Are you coming? (formal)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (woman speaking)',
      prompt: 'I go to the market',
      correct: ['Main bazaar jaati hoon', 'main bazaar jaati hoon'],
    },
  ],

  rwenDialogue: {
    intro: "It's 8:45am, you're heading out the door of Priya's joint-family flat in Pune for the office. Her uncle is sipping chai on the sofa and looks up.",
    lines: [
      {
        speaker: 'npc',
        target: 'क्या आप दफ़्तर जा रहे हैं?',
        native: 'Are you going to the office?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Haan, main daftar jaata hoon. Shaam ko aaunga.', native: 'Yes, I go to the office. I will come back in the evening.', correct: true, feedback: "Habitual present + future of aana. Verb at the end, both times. Uncle nods approvingly." },
          { target: 'Main jaata daftar hoon', native: 'I go office am (wrong order)', correct: false, feedback: "Object before verb! 'Main DAFTAR jaata hoon' — daftar (office) goes BEFORE the verb." },
          { target: 'Main daftar jaa', native: 'I office go (incomplete)', correct: false, feedback: "Hindi verbs need the auxiliary हूँ. 'Main daftar jaata hoon' — go-am, not just go." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Verb at the end. Gender on the verb. Auxiliary हूँ to close. Three rules — and you've got them.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I go home (man speaking)', correct: ['Main ghar jaata hoon', 'main ghar jaata hoon'] },
      { prompt: 'I go home (woman speaking)', correct: ['Main ghar jaati hoon', 'main ghar jaati hoon'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Every time you leave a room today, say 'Main jaata/jaati hoon' under your breath. Every time you walk in, 'Main aata/aati hoon'. Make the verb-at-the-end feel natural.",
    rwenSignoff: "Phir milenge — we will meet again. Verbs are coming.",
  },

  phase8: {
    scenario: "Sunday 9am at Priya's parents' flat in Pune. The whole joint family is at breakfast — Dadi-ji, Priya's parents, two cousins. Dadi-ji asks where you're heading today and where you came from yesterday. You need to answer with proper SOV order, gender agreement, and 'aap'-level respect for the elders.",
    rwenRole: "Dadi-ji (Priya's grandmother, ~72) — traditional, observant. Watches gender on the verbs. Expects respectful aap forms.",
    successCriteria: "User uses verb-final word order (Main + place + jaata/jaati hoon — NOT English order). Picks the right gender ending (-ta vs -ti) consistent with their gender. Includes both jaana (going somewhere today) and aana (came from somewhere yesterday — past tense aaya/aayi).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
