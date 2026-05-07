import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-conversation',
  module: 1,
  lesson: 10,
  title: 'The Greeting Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "This is it. Everything from this module — in one conversation. No new words today. Just you, me, and the language you've built. Five beats: greeting, wellness, name, origin, farewell. Let's see what you can do.",
    culturalNote: "A full first encounter in Spanish flows: time-appropriate greeting → wellness check (with the right register, tú or usted) → name exchange → origin → farewell with a small wish. Each beat lands warmer than the last. By the end, you're not strangers — you have a thread you can pick up next time.",
  },

  chunks: [
    {
      id: 'review_buenas_tardes',
      target: 'Buenas tardes',
      native: 'Good afternoon',
      literal: 'Time-appropriate greeting',
      emoji: '🌤️',
      phonetic: 'BWEH-nahs TAR-dehs',
      audioRef: null,
    },
    {
      id: 'review_como_te_llamas',
      target: '¿Cómo te llamas?',
      native: "What's your name? (informal)",
      literal: 'How (do) you call yourself?',
      emoji: '🏷️',
      phonetic: 'KOH-moh teh YAH-mahs',
      audioRef: null,
    },
    {
      id: 'review_hasta_luego',
      target: 'Hasta luego',
      native: 'See you later (everyday goodbye)',
      literal: 'Until later',
      emoji: '👋',
      phonetic: 'AHS-tah loo-EH-goh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The Full Greeting Flow',
    explanation: "A complete Spanish first encounter has five beats. Each one matters. Miss a step and the conversation feels incomplete or transactional.",
    examples: [
      { target: 'Hola / Buenos días / Buenas tardes / Buenas noches', native: '1. Time greeting' },
      { target: '¿Cómo estás? / ¿Cómo está usted?', native: '2. Wellness check (pick tú or usted)' },
      { target: '¿Cómo te llamas? — Me llamo...', native: '3. Name exchange' },
      { target: '¿De dónde eres? — Soy de...', native: '4. Origin' },
      { target: 'Hasta luego / Nos vemos / Que te vaya bien', native: '5. Farewell with a wish' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each step to the right phrase',
      pairs: [
        { left: 'Time greeting (afternoon)', right: 'Buenas tardes' },
        { left: 'Wellness check (informal)', right: '¿Cómo estás?' },
        { left: 'Farewell (everyday)', right: 'Hasta luego' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "It's 3pm. A new colleague (your age) walks up. What's the BEST opener?",
      question: 'Choose the complete, natural opener',
      options: [
        { text: 'Buenas tardes, ¿cómo estás?', correct: true },
        { text: 'Buenos días', correct: false },
        { text: 'Adiós', correct: false },
      ],
      explanation: "It's afternoon, and they're a peer — 'Buenas tardes' for the time, '¿cómo estás?' for the informal wellness check. 'Buenos días' is morning. 'Adiós' is goodbye.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "What's your name? (informal)",
      correct: ['¿Cómo te llamas?', 'Cómo te llamas?', 'cómo te llamas?', 'Como te llamas?'],
    },
    {
      type: 'fill_blank',
      instruction: "Complete the warm farewell — wish your friend well",
      sentence: 'Que te _____ bien.',
      options: ['vaya', 'sea', 'tiene'],
      correct: 'vaya',
      context: 'Your new friend is leaving — wish them well.',
    },
    {
      type: 'build_sentence',
      instruction: "Build the polite reply: 'Very well, and you (formal)?'",
      words: ['¿y', 'bien,', 'Muy', 'usted?'],
      correct: ['Muy', 'bien,', '¿y', 'usted?'],
      translation: 'Very well, and you? (formal)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I'm from... (start of the phrase)",
      correct: ['Soy de', 'soy de'],
    },
  ],

  rwenDialogue: {
    intro: "A full conversation. You've earned this. I'll be a stranger you've just met at a Mexico City café. You lead the whole exchange.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Buenas tardes, ¿cómo está usted?', native: 'Good afternoon, how are you (formal)?', correct: true, feedback: "Strong opening — time-appropriate AND respectful, since we don't know each other yet. Perfect register choice." },
          { target: 'Hola', native: 'Hi', correct: false, feedback: "Not wrong, but it's afternoon and we're strangers — 'Buenas tardes' opens warmer with the time-of-day form." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "We've barely met! That's a farewell. Open with 'Buenas tardes'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Muy bien, gracias. ¿Y usted? ¿Cómo se llama?',
        native: 'Very well, thanks. And you? What\'s your name?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Muy bien también. Me llamo... ¿y usted?', native: "Very well too. My name is... and you?", correct: true, feedback: "You answered the wellness check, gave your name, and asked back — all in one breath. That's fluency in motion." },
          { target: 'Me llamo...', native: 'My name is...', correct: false, feedback: "Good — but you skipped answering '¿y usted?' for the wellness check. Try 'Muy bien también. Me llamo...'." },
          { target: '¿Cómo te llamas?', native: "What's your name? (informal)", correct: false, feedback: "They asked YOU — answer first. Also they used 'usted' — you should mirror with formal '¿cómo se llama?' if you ask back." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Mucho gusto. Me llamo Carolina. ¿De dónde es usted?',
        native: 'Pleased to meet you. My name is Carolina. Where are you from (formal)?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Soy de... ¿Y usted, de dónde es?', native: "I'm from... and you, where are you from?", correct: true, feedback: "Origin shared, question returned. That's a real Spanish conversation — you're not just answering, you're building it." },
          { target: 'Vivo en...', native: 'I live in...', correct: false, feedback: "Close — but she asked where you're FROM (origin), not where you live. Use 'Soy de...'." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "Not yet! Share your origin first with 'Soy de...'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Soy de Guadalajara, pero vivo en CDMX. Bueno, me tengo que ir. ¡Hasta luego!',
        native: "I'm from Guadalajara, but I live in CDMX. Well, I have to go. See you later!",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hasta luego, ¡que le vaya bien!', native: "See you later, may things go well for you (formal)!", correct: true, feedback: "Perfect close — formal farewell with a warm blessing. Carolina will remember you." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "'Adiós' feels too final for someone you just met and might bump into again. 'Hasta luego' is warmer." },
          { target: 'Buenas tardes', native: 'Good afternoon', correct: false, feedback: "That's a greeting — we're closing, not opening. Try 'Hasta luego' to wrap up warmly." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "A complete Spanish encounter. Greeting, wellness, name, origin, farewell — all five beats, with the right register throughout. You did it. ¡Felicidades!",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Good afternoon (in Spanish)', correct: ['Buenas tardes', 'buenas tardes'] },
      { prompt: 'See you later (everyday goodbye)', correct: ['Hasta luego', 'hasta luego'] },
    ],
  },

  mission: {
    title: "Your Module 1 Mission",
    task: "Have a complete Spanish first encounter today — even if it's with yourself in the mirror. All five beats: greeting, wellness, name, origin, farewell. Out loud.",
    rwenSignoff: "You've walked through Module 1. The door to Spanish is open. ¡Nos vemos en el Módulo 2! — see you in Module 2.",
  },

  phase8: {
    scenario: "It's late morning at a small café in San Telmo, Buenos Aires. The barista — a chatty woman in her 50s — has been making your cortado for the last few minutes and starts talking. This is THE encounter — you need to navigate the entire Module 1 cycle: time-appropriate greeting, wellness check (pick the right register since she's older), name exchange, origin, and a proper farewell when you eventually take your leave.",
    rwenRole: "Doña Mercedes — café owner, ~58, Porteña, warm but observant; she chats with every customer who'll let her, and her judgement of you will travel through her regulars.",
    successCriteria: "User runs all five beats — (1) time-appropriate opener like 'Buenos días' or 'Buenas tardes' (NOT 'Buenas noches'), (2) wellness check using usted '¿Cómo está usted?' (NOT informal '¿Cómo estás?' since she's older and a stranger), (3) name exchange via 'Me llamo...' and asks hers with '¿Cómo se llama?' (formal — NOT '¿Cómo te llamas?'), (4) origin with 'Soy de...' (NOT confusing it with 'Vivo en...'), and (5) farewell with 'Hasta luego' or 'Nos vemos' plus 'Que le vaya bien' (formal — NOT 'Que te vaya bien'). Stays in usted throughout.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
