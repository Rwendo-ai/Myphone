import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l04-rehta-hoon',
  module: 3,
  lesson: 4,
  title: 'Main... Mein Rehta Hoon — Where I Live',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Where you live in India says a lot — but where you're from says more. A person can live in Mumbai and still call themselves a Punjabi, a Tamilian, a Bengali. Today we cover both: where you stay now, and the place that made you.",
    culturalNote: "When Indians ask 'आप कहाँ से हैं?' (aap kahaan se hain — where are you from?), they often mean your native state or hometown — not your current address. The answer carries identity, food, language, festivals. Saying 'मैं Bengaluru में रहता हूँ लेकिन मेरा घर Kerala है' (I live in Bengaluru but my home is Kerala) is the natural shape.",
  },

  chunks: [
    {
      id: 'main_rehta',
      target: 'मैं... में रहता/रहती हूँ — Main... mein rehta/rehti hoon',
      native: 'I live in... (m / f)',
      literal: 'I ... in stay am',
      emoji: '🏘️',
      phonetic: 'mayn ... mayn REH-ta / REH-tee hoon',
      audioRef: null,
    },
    {
      id: 'main_se_hoon',
      target: 'मैं... से हूँ — Main... se hoon',
      native: 'I am from...',
      literal: 'I ... from am',
      emoji: '📍',
      phonetic: 'mayn ... say hoon',
      audioRef: null,
    },
    {
      id: 'mera_ghar',
      target: 'मेरा घर... है — Mera ghar... hai',
      native: 'My home is...',
      literal: 'My home ... is',
      emoji: '🏡',
      phonetic: 'MAY-ra ghar ... hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'mein (in) vs se (from) — the location postpositions',
    explanation: "Hindi uses postpositions — small words that come AFTER the place name, not before. 'In Delhi' is Delhi mein (दिल्ली में). 'From Delhi' is Delhi se (दिल्ली से). The word follows the place. This is the opposite of English, where 'in' and 'from' come first.",
    examples: [
      { target: 'मैं Mumbai में रहता हूँ — Main Mumbai mein rehta hoon', native: 'I live in Mumbai' },
      { target: 'मैं Chennai से हूँ — Main Chennai se hoon', native: 'I am from Chennai' },
      { target: 'मेरा घर Kerala है — Mera ghar Kerala hai', native: 'My home is Kerala' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Main... mein rehta/rehti hoon', right: 'I live in...' },
        { left: 'Main... se hoon', right: 'I am from...' },
        { left: 'Mera ghar... hai', right: 'My home is...' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Say "I am from Delhi"',
      sentence: 'Main Delhi _____ hoon.',
      options: ['se', 'mein', 'mera'],
      correct: 'se',
      context: 'से (se) means "from". में (mein) means "in".',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine) — male speaker',
      prompt: 'I live in Mumbai',
      correct: ['Main Mumbai mein rehta hoon', 'main mumbai mein rehta hoon', 'मैं Mumbai में रहता हूँ'],
    },
    {
      type: 'multiple_choice',
      instruction: "Someone asks 'आप कहाँ से हैं?' (aap kahaan se hain — where are you from?). What kind of answer is expected?",
      question: 'Choose the most natural reply',
      options: [
        { text: 'Main Kerala se hoon (your native place)', correct: true },
        { text: 'Main ghar se hoon (I am from home)', correct: false },
        { text: 'Main aaj se hoon (I am from today)', correct: false },
      ],
      explanation: "'Kahaan se hain?' usually asks for your hometown or native state, not your current city. Indians often have one answer for 'where do you live' and a different one for 'where are you from'.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "My home is Kerala"',
      words: ['Kerala', 'ghar', 'hai', 'Mera'],
      correct: ['Mera', 'ghar', 'Kerala', 'hai'],
      translation: 'My home is Kerala',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine) — female speaker',
      prompt: 'I live in Chennai',
      correct: ['Main Chennai mein rehti hoon', 'main chennai mein rehti hoon', 'मैं Chennai में रहती हूँ'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen asks where you live AND where you're originally from. These are two questions in India.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'आप कहाँ रहते हैं? और मूल रूप से कहाँ से हैं? (Aap kahaan rehte hain? Aur mool roop se kahaan se hain?)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मैं... में रहता/रहती हूँ। मैं... से हूँ। (Main... mein rehta/rehti hoon. Main... se hoon.)', native: 'I live in... I am from...', correct: true, feedback: "Two locations — current and origin. That's how Indians narrate their lives. Perfect." },
          { target: 'मैं रहता/रहती हूँ (Main rehta/rehti hoon)', native: 'I live', correct: false, feedback: "You need a place. Add the city: Main Mumbai mein rehta/rehti hoon." },
          { target: 'मुझे नहीं पता (Mujhe nahin pata)', native: "I don't know", correct: false, feedback: "You know where you live. Try Main [city] mein rehta/rehti hoon." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'अच्छा। दो जगहें, एक ज़िंदगी। (Accha. Do jagahein, ek zindagi.)',
      },
      {
        speaker: 'rwen',
        rwenLine: "Two places, one life — that's Rwen's line and it fits most Indians. Now you can describe your two places too.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am from... (start of phrase)', correct: ['Main', 'main'] },
      { prompt: 'My home is... (start of phrase)', correct: ['Mera ghar', 'mera ghar', 'मेरा घर'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Say two sentences in Hindi: 'मैं ___ में रहता/रहती हूँ। मैं ___ से हूँ।' Where you live now, then where you're from. Notice se and mein doing different work.",
    rwenSignoff: "Two homes, one story. फिर मिलेंगे.",
  },

  phase8: {
    scenario: "An IT industry conference networking session at a Hyderabad hotel. After a panel on AI infrastructure, a delegate hands you a business card during the chai break and asks where you're based now and where you originally hail from.",
    rwenRole: "Anjali — senior architect from a competing firm, late 30s, networking energy, asking the standard 'kahaan rehte hain / kahaan se hain' double-question to find common ground.",
    successCriteria: "User produces TWO answers — current city with 'mein rehta/rehti hoon' and origin with 'se hoon'. Doesn't conflate the two postpositions (no 'Main Mumbai se rehta hoon' — that's broken). Recognises that 'kahaan se' usually means native place, not current address.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
