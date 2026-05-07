import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-como-esta-usted',
  module: 1,
  lesson: 6,
  title: '¿Cómo Está Usted? — Speaking with Respect',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Yesterday: 'tú' for friends. Today: 'usted' for everyone else. Elders, strangers, your boss, your future in-laws. Mix these up and you can come across as either rude or weirdly cold. Spanish takes the call seriously — and now you will too.",
    culturalNote: "Across most of Latin America, 'usted' is the safe default with anyone older, anyone in authority, and anyone you don't know yet. In Colombia especially, 'usted' is so common that some families use it even between parents and kids. In Argentina, 'usted' is more reserved — but still expected with elders and strangers.",
  },

  chunks: [
    {
      id: 'como_esta_usted',
      target: '¿Cómo está usted?',
      native: 'How are you? (formal — to an elder/stranger)',
      literal: 'How are-you (usted)?',
      emoji: '🎩',
      phonetic: 'KOH-moh ehs-TAH oos-TEHD',
      audioRef: null,
    },
    {
      id: 'muy_bien_usted',
      target: 'Muy bien, ¿y usted?',
      native: 'Very well, and you? (formal)',
      literal: 'Very well, and you (usted)?',
      emoji: '🙏',
      phonetic: 'mwee bee-EHN, ee oos-TEHD',
      audioRef: null,
    },
    {
      id: 'con_permiso',
      target: 'Con permiso',
      native: 'Excuse me / With your permission',
      literal: 'With permission',
      emoji: '🤲',
      phonetic: 'kohn pehr-MEE-soh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Tú vs Usted — Friend vs Stranger/Elder',
    explanation: "One pronoun changes who you're talking to. 'Tú' is for friends and peers (verb ends in -s: estás). 'Usted' is for elders, strangers, formal contexts (verb takes the same ending as he/she: está). Same question, different respect level.",
    examples: [
      { target: '¿Cómo estás?', native: 'How are you? (tú — friend)' },
      { target: '¿Cómo está usted?', native: 'How are you? (usted — elder)' },
      { target: '¿Y usted?', native: 'And you? (formal)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: '¿Cómo está usted?', right: 'How are you? (formal)' },
        { left: 'Muy bien, ¿y usted?', right: 'Very well, and you? (formal)' },
        { left: 'Con permiso', right: 'Excuse me / With your permission' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're greeting your friend's grandmother. Complete the polite question.",
      sentence: '¿Cómo está _____?',
      options: ['usted', 'tú', 'tu'],
      correct: 'usted',
      context: "She's an elder you've just met. Use the respectful form.",
    },
    {
      type: 'multiple_choice',
      instruction: "An elderly woman selling flowers smiles and asks '¿Cómo está usted?'. How do you reply?",
      question: 'Choose the respectful response',
      options: [
        { text: 'Muy bien, ¿y usted?', correct: true },
        { text: 'Bien, ¿y tú?', correct: false },
        { text: 'Adiós', correct: false },
      ],
      explanation: "She used 'usted' — mirror it back with '¿y usted?'. Switching to '¿y tú?' would feel oddly familiar from a stranger.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'How are you? (formal — to an elder)',
      correct: ['¿Cómo está usted?', 'Cómo está usted?', '¿Cómo está usted', 'cómo está usted?', 'Como esta usted?'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the polite response',
      words: ['¿y', 'bien,', 'Muy', 'usted?'],
      correct: ['Muy', 'bien,', '¿y', 'usted?'],
      translation: 'Very well, and you? (formal)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Excuse me / With your permission',
      correct: ['Con permiso', 'con permiso'],
    },
  ],

  rwenDialogue: {
    intro: "It's afternoon at a Lima market. An older woman is selling herbs and flowers. She's been there for thirty years. You approach her stall.",
    lines: [
      {
        speaker: 'npc',
        target: 'Buenas tardes, ¿cómo está usted?',
        native: 'Good afternoon, how are you (formal)?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Muy bien, ¿y usted?', native: 'Very well, and you (formal)?', correct: true, feedback: "Exactly right — you mirrored 'usted' back. She'll treat you like family from this moment on." },
          { target: 'Bien, ¿y tú?', native: 'Well, and you (informal)?', correct: false, feedback: "Almost — but she used 'usted', so reply with 'usted'. Switching to 'tú' from a stranger sounds presumptuous." },
          { target: 'Hola', native: 'Hi', correct: false, feedback: "She gave you a greeting AND a wellness check — answer both. Try 'Muy bien, ¿y usted?'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Bien también, gracias. ¿En qué le puedo ayudar?',
        native: 'Well too, thank you. How can I help you?',
      },
      {
        speaker: 'rwen',
        rwenLine: "You read her as an elder and matched her register. That's tsika in Spanish — knowing the relationship matters.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How are you? (formal — to an elder)', correct: ['¿Cómo está usted?', 'Cómo está usted?', 'cómo está usted?', 'Como esta usted?'] },
      { prompt: 'Very well, and you? (formal)', correct: ['Muy bien, ¿y usted?', 'Muy bien y usted?', 'muy bien, ¿y usted?', 'muy bien y usted?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'usted' once today with someone older or someone you don't know — even just in your head, rehearsing. Notice how the verb changes.",
    rwenSignoff: "Que le vaya bien — may it go well for you.",
  },

  phase8: {
    scenario: "It's mid-afternoon at a small market stall in central Lima. The vendor is in her late 60s, has been there for thirty years, and is arranging bunches of cilantro and ají. You stop to buy some chili paste. She looks up and gives you a warm but proper greeting.",
    rwenRole: "Doña Lucía — Lima market vendor, ~68, traditional and dignified; she greets every customer with 'usted' and expects to be addressed the same way back. She softens visibly when she hears it.",
    successCriteria: "User uses '¿Cómo está usted?' or replies '¿y usted?' (NOT '¿y tú?' — she's an elder/stranger), keeps the verb in the usted form 'está' (NOT 'estás'), and uses 'Con permiso' if reaching past her or excusing themselves. Switching to 'tú' mid-conversation is the failure mode to avoid.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
