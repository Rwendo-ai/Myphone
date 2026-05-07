import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-sunna',
  module: 8,
  lesson: 6,
  title: 'Sunna — To Listen, To Hear',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "सुनना (sunna) means both 'to listen' and 'to hear'. Like dekhna, one Hindi verb covers what English splits in two. 'Suno!' (Listen!) is one of the most-used commands in Indian conversation — between siblings, in autos, at chai stalls. And 'maine suna' (I heard) is how every piece of joint-family gossip enters the world.",
    culturalNote: "In Hindi, 'maine suna ki...' (I heard that...) is the universal opener for sharing news, gossip, half-confirmed rumours, family updates — anything passed along. It's softer than 'I know'; it acknowledges the chain of telling. In a culture where information moves through aunties and cousins faster than WhatsApp, 'maine suna' is the verb of belonging.",
  },

  chunks: [
    {
      id: 'sunna',
      target: 'सुनना — Sunna',
      native: 'To listen / to hear',
      literal: 'sun- (listen-stem) + -na',
      emoji: '👂',
      phonetic: 'SUN-na',
      audioRef: null,
    },
    {
      id: 'suno',
      target: 'सुनो / सुनिए — Suno / Suniye',
      native: 'Listen! (informal / formal command)',
      literal: 'sun + -o (informal) / + -iye (formal)',
      emoji: '🔇',
      phonetic: 'SU-no / SUN-i-yay',
      audioRef: null,
    },
    {
      id: 'maine_suna',
      target: 'मैंने सुना — Maine suna',
      native: 'I heard',
      literal: 'I-erg heard (past, transitive)',
      emoji: '✅',
      phonetic: 'MAIN-ne SU-na',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Suniye — the formal command (-iye ending)',
    explanation: "Hindi commands have three politeness levels. Tu-form: 'Sun!' (very informal/intimate). Tum-form: 'Suno!' (informal, friends/peers). Aap-form: 'Suniye!' (formal/respectful — to elders, strangers, anyone with 'aap'). The endings -∅ / -o / -iye scale up the respect. Always use 'suniye' with elders.",
    examples: [
      { target: 'सुनो, मैं तुम्हें कुछ बताना चाहता हूँ — Suno, main tumhein kuch batana chahta hoon', native: 'Listen, I want to tell you something (to a friend)' },
      { target: 'सुनिए जी, ये कैसे जाते हैं? — Suniye ji, yeh kaise jaate hain?', native: 'Excuse me sir, how does one go here? (to a stranger)' },
      { target: 'मैंने सुना कि वो शादी कर रहे हैं — Maine suna ki vo shaadi kar rahe hain', native: "I heard that they're getting married" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form to its meaning',
      pairs: [
        { left: 'Sunna', right: 'To listen / to hear' },
        { left: 'Suno', right: 'Listen! (informal — to friend)' },
        { left: 'Suniye', right: 'Listen! (formal — to elder)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'You stop a stranger to ask for directions. Use the formal command.',
      sentence: '_____, station kahan hai?',
      options: ['Suniye', 'Suno', 'Sun'],
      correct: 'Suniye',
      context: 'Stranger = aap-form = -iye ending.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I heard',
      correct: ['Maine suna', 'maine suna'],
    },
    {
      type: 'multiple_choice',
      instruction: "Why does 'sun-' get three different command endings?",
      question: 'The endings -∅ / -o / -iye scale with:',
      options: [
        { text: "Politeness level — matching the listener's social position (tu/tum/aap)", correct: true },
        { text: "Tense — past, present, future", correct: false },
        { text: "Gender — masculine, feminine, neutral", correct: false },
      ],
      explanation: "Three pronouns, three command endings. Sun! (intimate) → Suno! (friend) → Suniye! (respectful). Match the ending to the pronoun.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Listen, I have to tell you something' (informal, to a friend)",
      words: ['Suno,', 'mujhe', 'kuch', 'batana', 'hai.'],
      correct: ['Suno,', 'mujhe', 'kuch', 'batana', 'hai.'],
      translation: 'Listen, I have something to tell you',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (formal — to elder)',
      prompt: 'Excuse me / Listen (formal)',
      correct: ['Suniye', 'suniye', 'Suniye ji', 'suniye ji'],
    },
  ],

  rwenDialogue: {
    intro: "Friday 6pm. You're at a chai stall near the office. An older man sitting next to you on the bench leans over.",
    lines: [
      {
        speaker: 'npc',
        target: 'सुनिए, क्या आपने वो ख़बर सुनी? कल बारिश होगी।',
        native: 'Listen, did you hear the news? It will rain tomorrow.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Haan ji, maine bhi suna. Mausam-vibhag ne kaha hai. Suniye, aap kahan jaate hain?', native: "Yes sir, I also heard. The weather department said. Listen, where do you go (after this)?", correct: true, feedback: "'Maine suna' for past, 'suniye' to politely engage him back, 'jaate hain' verb-final. Three verbs, all polished. He breaks into a smile." },
          { target: 'Haan, maine suni', native: 'Yes, I heard (wrong gender)', correct: false, feedback: "Sunna is intransitive in this sense — past goes 'maine suna' (no gender shift on the object). Stick with -a." },
          { target: 'Suno uncle, kya?', native: 'Listen uncle, what? (too casual)', correct: false, feedback: "With an elder, use 'suniye ji' — the formal command. 'Suno' is for peers." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Suniye for elders. Suno for friends. The same verb, three social levels. You're navigating Hindi like a local.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Listen! (formal — to elder)', correct: ['Suniye', 'suniye', 'Suniye ji', 'suniye ji'] },
      { prompt: 'I heard', correct: ['Maine suna', 'maine suna'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time you want to share news, start the sentence with 'Maine suna ki...' (I heard that...). Even silently, even in your head. Train the rhythm of how Hindi shares stories.",
    rwenSignoff: "Maine suna ki tum bahut acche se padh rahe ho — I heard you're studying really well. Phir milenge.",
  },

  phase8: {
    scenario: "Wednesday lunch break at the office canteen. A senior colleague (Sharma-ji, late 50s, soft-spoken, formally addressed) sits across from you and starts a quiet conversation about something he heard on the news. You need to respond with formal 'suniye' when politely interrupting, 'maine suna' when sharing what you heard, and stay in 'aap' register throughout — no slipping into casual 'tum/suno'.",
    rwenRole: "Sharma-ji — senior colleague, traditional, formal aap-register required. Patient, will smile if you get the formal command right.",
    successCriteria: "User uses 'Suniye' (formal) at least once when getting his attention, 'Maine suna ki...' (I heard that) to share news. Stays in aap-form throughout — never slips into tum/suno. Past tense 'maine suna' (no gender ending — fine). Verb-final order maintained on every full sentence.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
