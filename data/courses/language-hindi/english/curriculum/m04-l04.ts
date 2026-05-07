import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l04-postpositions',
  module: 4,
  lesson: 4,
  title: 'Postpositions — मेँ, से, को, का',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "English uses prepositions BEFORE the noun: 'in the house', 'from school', 'to me'. Hindi flips them. They go AFTER. 'घर में' (ghar mein) — house in. 'स्कूल से' (school se) — school from. The preposition becomes a postposition. Brace your word order — it's about to break English habits.",
    culturalNote: "Hindi postpositions are the glue of every sentence. Master four — मेँ (in), से (from/by), को (to/object marker), का (of/possession) — and you've already covered most of what you'll hear in a Mumbai conversation.",
  },

  chunks: [
    {
      id: 'mein',
      target: 'मेँ',
      native: 'In / Inside (postposition)',
      literal: 'mein — placed AFTER the noun',
      emoji: '📥',
      phonetic: 'MEIN',
      audioRef: null,
    },
    {
      id: 'se',
      target: 'से',
      native: 'From / By / With (postposition)',
      literal: 'se — placed AFTER the noun',
      emoji: '↩️',
      phonetic: 'SAY',
      audioRef: null,
    },
    {
      id: 'ko',
      target: 'को',
      native: 'To / Object marker (postposition)',
      literal: 'ko — marks indirect object or specific direct object',
      emoji: '🎯',
      phonetic: 'KO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Noun + postposition (the opposite of English)',
    explanation: "Hindi postpositions follow the noun, never precede it. 'In the house' = घर में (ghar mein), literally 'house in'. 'From the school' = स्कूल से (school se), literally 'school from'. 'To me' = मुझ को / मुझे (mujhko / mujhe), literally 'me to'. Train your ear to hear the noun first, then the relationship word.",
    examples: [
      { target: 'घर में (ghar mein)', native: 'In the house (lit. house in)' },
      { target: 'स्कूल से (school se)', native: 'From school (lit. school from)' },
      { target: 'राम को (Rām ko)', native: 'To Ram / Ram (as object) (lit. Ram to)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the postposition to its meaning',
      pairs: [
        { left: 'मेँ (mein)', right: 'In / inside' },
        { left: 'से (se)', right: 'From / by' },
        { left: 'को (ko)', right: 'To / object marker' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Add the right postposition (after the noun)',
      sentence: 'मैं घर _____ हूँ (I am in the house)',
      options: ['mein', 'se', 'ko'],
      correct: 'mein',
      context: 'You need "in" — and remember it goes AFTER ghar.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'In the house',
      correct: ['ghar mein', 'Ghar mein', 'ghar meṁ', 'Ghar meṁ'],
    },
    {
      type: 'multiple_choice',
      instruction: "What's the WRONG word order for 'from school' in Hindi?",
      question: "From school =",
      options: [
        { text: 'से स्कूल (se school) — preposition before noun', correct: true },
        { text: 'स्कूल से (school se) — postposition after noun', correct: false },
        { text: 'Both are correct', correct: false },
      ],
      explanation: "Hindi postpositions ALWAYS follow the noun. 'School se' is correct; 'se school' is an English-shaped mistake.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am in school" (main school mein hoon)',
      words: ['हूँ', 'मैं', 'मेँ', 'स्कूल'],
      correct: ['मैं', 'स्कूल', 'मेँ', 'हूँ'],
      translation: 'I am in school',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'From school',
      correct: ['school se', 'School se', 'skool se', 'Skool se'],
    },
  ],

  rwenDialogue: {
    intro: "You've just landed in Delhi. A relative is asking where you've come from and where you're staying.",
    lines: [
      {
        speaker: 'npc',
        target: 'आप कहाँ से आए हैं? और कहाँ ठहरे हैं?',
        native: 'Where have you come from? And where are you staying?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Main London se āyā hūṁ. Main hotel mein ṭhahrā hūṁ.', native: 'I have come from London. I am staying in a hotel.', correct: true, feedback: "Two postpositions, both placed AFTER their nouns — exactly right." },
          { target: 'Main se London āyā hūṁ. Main mein hotel ṭhahrā hūṁ.', native: '[postpositions before nouns — English order]', correct: false, feedback: "You used English order. In Hindi, the postposition follows the noun: 'London se' (from London), 'hotel mein' (in a hotel)." },
          { target: 'Main London hotel hūṁ', native: 'I am London hotel (no postpositions)', correct: false, feedback: "You need postpositions to show the relationships: 'London se' for 'from London', 'hotel mein' for 'in a hotel'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Wāh. The relationship word always lands after the noun. That's the Hindi shape.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'In the house', correct: ['ghar mein', 'Ghar mein', 'ghar meṁ', 'Ghar meṁ'] },
      { prompt: 'From school', correct: ['school se', 'School se', 'skool se', 'Skool se'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Notice three places you go today — home, work, a shop. Frame each silently in Hindi: 'ghar mein' (in the house), 'kām se' (from work), 'dukān ko' (to the shop). Postposition AFTER the noun every time.",
    rwenSignoff: "The relationship word always trails the noun. Phir milenge.",
  },

  phase8: {
    scenario: "It's your second day at a small co-working space in Bengaluru and your manager Rohit is helping you describe your daily routine to the team in Hindi. He'll prompt you with three quick situations — where you live, where you commute from, who you're sending an email to — and listen for whether you place mein, se, and ko correctly AFTER the noun.",
    rwenRole: "Rohit — a friendly 40-year-old manager who listens for English-style word order ('se London' instead of 'London se') and gently corrects you with 'pehle noun, phir postposition' (noun first, then postposition).",
    successCriteria: "User produces sentences placing all three postpositions AFTER their nouns: 'X mein rehtā hūṁ' (I live in X), 'Y se ātā hūṁ' (I come from Y), and 'Z ko email bhejtā hūṁ' (I send email to Z) — no English-order slips like 'mein X' or 'se Y'.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
