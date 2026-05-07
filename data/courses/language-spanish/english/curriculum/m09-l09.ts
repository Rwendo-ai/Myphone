import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l09-perdido',
  module: 9,
  lesson: 9,
  title: 'Estoy Perdido — When You Get Lost',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "You will get lost. Mexico City is enormous, Buenos Aires runs on diagonals, Madrid's old quarter is a maze. The phrase 'Estoy perdido' (I'm lost) unlocks help instantly — locals love a tourist who admits it in Spanish. Today we cover lost, found, and the rescue phrases in between.",
    culturalNote: "In Latin America, admitting you're lost in Spanish almost always triggers genuine help — sometimes someone walks you to your destination. The cultural code: a foreigner who tries Spanish has earned the local's patience. It's the opposite of trying English first, where the response can be a cool 'no English'. Vulnerability in the local language is a handshake.",
  },

  chunks: [
    {
      id: 'estoy_perdido',
      target: 'Estoy perdido / perdida',
      native: "I'm lost (m / f)",
      literal: 'I-am lost (-o for male speaker, -a for female)',
      emoji: '🆘',
      phonetic: 'es-TOY pehr-DEE-doh / pehr-DEE-dah',
      audioRef: null,
    },
    {
      id: 'puede_ayudarme',
      target: '¿Puede ayudarme?',
      native: 'Can you help me? (formal)',
      literal: 'Can-you to-help-me?',
      emoji: '🙏',
      phonetic: 'PWEH-deh ah-yoo-DAR-meh',
      audioRef: null,
    },
    {
      id: 'no_entiendo',
      target: 'No entiendo',
      native: "I don't understand",
      literal: 'No I-understand',
      emoji: '🤔',
      phonetic: 'noh en-TYEN-doh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Estoy + adjective — temporary states',
    explanation: "'Estoy' (I am — from estar) is for temporary states. Estoy perdido (I'm lost — right now), estoy cansado (I'm tired — today), estoy aquí (I'm here). The adjective agrees with you: -o if you're male, -a if you're female. 'Soy perdido' would mean 'I'm a lost-type-of-person' — which is not what you want to communicate when you can't find your hotel.",
    examples: [
      { target: 'Estoy perdido', native: "I'm lost (male speaker)" },
      { target: 'Estoy perdida', native: "I'm lost (female speaker)" },
      { target: 'Estoy un poco perdido', native: "I'm a bit lost" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the rescue phrase to its meaning',
      pairs: [
        { left: 'Estoy perdido', right: "I'm lost (m)" },
        { left: '¿Puede ayudarme?', right: 'Can you help me? (formal)' },
        { left: 'No entiendo', right: "I don't understand" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask formally for help',
      sentence: '¿_____ ayudarme, por favor?',
      options: ['Puede', 'Quiere', 'Tiene'],
      correct: 'Puede',
      context: 'Can you help me, please? (formal/usted)',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "I don't understand",
      correct: ['No entiendo', 'no entiendo'],
    },
    {
      type: 'multiple_choice',
      instruction: "You (female speaker) are lost in Buenos Aires. Which is correct?",
      question: 'Female speaker, lost:',
      options: [
        { text: 'Estoy perdida', correct: true },
        { text: 'Estoy perdido', correct: false },
        { text: 'Soy perdida', correct: false },
      ],
      explanation: "Female speaker = perdida (with -a). Male speaker = perdido. Use 'estoy' (temporary state), not 'soy' (permanent identity).",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Excuse me, can you help me? I'm lost'",
      words: ['Disculpe,', '¿puede', 'ayudarme?', 'Estoy', 'perdido.'],
      correct: ['Disculpe,', '¿puede', 'ayudarme?', 'Estoy', 'perdido.'],
      translation: "Excuse me, can you help me? I'm lost",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Can you help me? (formal)',
      correct: ['¿Puede ayudarme?', 'Puede ayudarme?', 'puede ayudarme', 'Puede ayudarme'],
    },
  ],

  rwenDialogue: {
    intro: "You've been wandering San Telmo in Buenos Aires for twenty minutes and your hotel is nowhere in sight. You stop a passer-by.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Disculpe, estoy perdido. ¿Puede ayudarme?', native: "Excuse me, I'm lost. Can you help me?", correct: true, feedback: "Disculpe + the lost confession + the help request. Three pieces, full rescue signal. He stops walking immediately." },
          { target: 'Hola, dónde hotel', native: 'Hi, where hotel', correct: false, feedback: "Lead with the lost-confession: 'Disculpe, estoy perdido. ¿Puede ayudarme?'" },
          { target: 'No entiendo', native: "I don't understand", correct: false, feedback: "He hasn't said anything yet. Open with: 'Disculpe, estoy perdido. ¿Puede ayudarme?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Por supuesto. ¿Adónde quiere ir?',
        native: 'Of course. Where do you want to go?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Al hotel Plaza, en Avenida Belgrano 1500.', native: 'To the Plaza Hotel, at Avenida Belgrano 1500.', correct: true, feedback: "Street first, number second — Avenida Belgrano 1500, not 1500 Belgrano. Buenos Aires address logic." },
          { target: '1500 Belgrano hotel', native: '1500 Belgrano hotel', correct: false, feedback: "Spanish addresses go street-then-number: 'Avenida Belgrano 1500'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "He's now offering to walk you. That's the local code for 'thank you for trying Spanish'. Always lead with 'estoy perdido' — it cracks open help that 'where is...?' never does.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: "I'm lost (m)", correct: ['Estoy perdido', 'estoy perdido'] },
      { prompt: 'Can you help me? (formal)', correct: ['¿Puede ayudarme?', 'Puede ayudarme?', 'puede ayudarme'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Stand somewhere familiar today and rehearse the lost-script as if you weren't: 'Disculpe, estoy perdido/a. ¿Puede ayudarme? Quiero ir a [place].' Make it muscle memory before the day you actually need it.",
    rwenSignoff: "Lost is fixable. Help is one phrase away. Hasta mañana.",
  },

  phase8: {
    scenario: "You're walking through San Telmo in Buenos Aires looking for your hotel. After twenty minutes you've completely lost the cobblestone-grid bearings. A friendly-looking woman is approaching with grocery bags. You have to stop her, admit you're lost in Spanish (with the right gender ending), and give your hotel address in the right street-then-number order.",
    rwenRole: "Doña Beatriz — Buenos Aires resident, 60s, lives in San Telmo and walks the same loop daily, will absolutely help if you open with 'Disculpe, estoy perdido/a' — but won't engage if you start with 'Do you speak English?'.",
    successCriteria: "User opens with 'Disculpe' (NOT 'Hola' — formal register for asking strangers for help), uses 'estoy perdido' or 'estoy perdida' with the correct gender ending, asks '¿puede ayudarme?' (formal usted), gives the hotel address as street-then-number ('Avenida Belgrano 1500', not '1500 Belgrano'), and uses 'no entiendo' if she speaks too fast rather than switching to English.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
