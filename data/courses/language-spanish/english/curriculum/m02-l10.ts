import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10-emergencia',
  module: 2,
  lesson: 10,
  title: 'Emergencia — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Nine survival tools in your kit. Today they all come out at once, in the highest-stakes scenario you'll meet — a real emergency. Politeness still matters. Honesty still matters. But now speed and clarity matter too. Let's see what you've got.",
    culturalNote: "In any Latin American country, emergency-room intake works on the same fundamentals: tell them what's wrong, where it hurts, who you are, what you need. The phrase 'Necesito ayuda' (I need help) cuts through anywhere. Numbers vary — 911 in Mexico and Colombia, 911 in Argentina too — but in this lesson the scene is a US ER in Miami where Spanish-first staff are the norm. Politeness still earns better care, but honesty about pain and confusion earns it faster.",
  },

  chunks: [
    {
      id: 'necesito_ayuda',
      target: 'Necesito ayuda',
      native: 'I need help',
      literal: 'I-need help',
      emoji: '🆘',
      phonetic: 'neh-seh-SEE-toh ah-YOO-dah',
      audioRef: null,
    },
    {
      id: 'es_una_emergencia',
      target: 'Es una emergencia',
      native: "It's an emergency",
      literal: 'It-is an emergency',
      emoji: '🚨',
      phonetic: 'es OO-nah eh-mehr-HEN-syah',
      audioRef: null,
    },
    {
      id: 'me_duele',
      target: 'Me duele... (la cabeza / el pecho)',
      native: 'It hurts me... (head / chest)',
      literal: 'Me it-hurts...',
      emoji: '🤕',
      phonetic: 'meh DWEH-leh lah kah-BEH-sah / el PEH-cho',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Chaining survival phrases under pressure',
    explanation: "Real emergencies don't happen one phrase at a time — you stack them. Greet (or skip if it's actually urgent), name the problem, ask for what you need, accept or refuse what they offer, thank them. Politeness still works under pressure — it lands as composure, not stiffness.",
    examples: [
      { target: 'Necesito ayuda. Es una emergencia.', native: 'I need help. It\'s an emergency.' },
      { target: 'Me duele el pecho. ¿Habla inglés?', native: 'My chest hurts. Do you speak English?' },
      { target: 'No entiendo — ¿puede repetir, por favor?', native: "I don't understand — can you repeat, please?" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the survival phrase to its meaning',
      pairs: [
        { left: 'Necesito ayuda', right: 'I need help' },
        { left: 'Es una emergencia', right: "It's an emergency" },
        { left: 'Me duele', right: 'It hurts me' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You walk into an ER in pain. What's the cleanest, fastest opening?",
      question: 'Choose the best opener',
      options: [
        { text: 'Necesito ayuda. Es una emergencia.', correct: true },
        { text: '¿Cuánto cuesta?', correct: false },
        { text: 'No sé', correct: false },
      ],
      explanation: "Greeting can wait — name the situation immediately. 'Necesito ayuda. Es una emergencia.' gets you triaged.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I need help',
      correct: ['Necesito ayuda', 'necesito ayuda'],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell them what hurts',
      sentence: 'Me _____ la cabeza.',
      options: ['duele', 'cuesta', 'sé'],
      correct: 'duele',
      context: 'You have a sharp, sudden headache and you need to flag it.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "It\'s an emergency"',
      words: ['emergencia', 'una', 'Es'],
      correct: ['Es', 'una', 'emergencia'],
      translation: "It's an emergency",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'My chest hurts (it hurts me, the chest)',
      correct: ['Me duele el pecho', 'me duele el pecho'],
    },
  ],

  rwenDialogue: {
    intro: "You're a tourist in Miami. Mid-afternoon, sharp chest pain hit twenty minutes ago. You walked into the ER at Jackson Memorial. The intake nurse looks up. Her badge says 'Yolanda — Habla Español'.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Necesito ayuda. Es una emergencia. Me duele el pecho.', native: "I need help. It's an emergency. My chest hurts.", correct: true, feedback: "Three sentences, three pieces of information she needs. She's already reaching for a wristband." },
          { target: '¿Dónde está el baño?', native: 'Where is the bathroom?', correct: false, feedback: "Wrong tool for the moment. Save it for later — right now you need 'Necesito ayuda. Es una emergencia.'" },
          { target: 'Necesito ayuda', native: 'I need help', correct: false, feedback: "Good start — but follow it with the why. 'Necesito ayuda. Es una emergencia. Me duele el pecho.'" },
        ],
      },
      {
        speaker: 'npc',
        target: '¿Cuánto tiempo lleva con el dolor? ¿Se le va al brazo o a la mandíbula?',
        native: 'How long have you had the pain? Does it travel to your arm or jaw?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'No entiendo. Más despacio, por favor. Hablo un poco de español.', native: "I don't understand. Slower, please. I speak a little Spanish.", correct: true, feedback: "You named the gap and asked for what you need. She slows down and uses simpler words." },
          { target: 'Sí', native: 'Yes', correct: false, feedback: "Don't bluff a yes when you didn't catch the question — especially not in an ER. 'No entiendo, más despacio por favor' is the right move." },
          { target: 'Lo siento', native: "I'm sorry", correct: false, feedback: "No need to apologise — you're not at fault. 'No entiendo, más despacio por favor' is what she actually needs from you." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Está bien. ¿El dolor — empezó — hace cuánto tiempo?',
        native: 'Okay. The pain — started — how long ago?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Hace veinte minutos. ¿Habla inglés?', native: 'Twenty minutes ago. Do you speak English?', correct: true, feedback: "Answers her question, then opens the escape hatch for the rest. She nods: 'Sí, también hablo inglés. We can switch.'" },
          { target: 'No sé', native: "I don't know", correct: false, feedback: "You actually do know — twenty minutes ago. Don't claim ignorance you don't have, especially in triage." },
          { target: 'No entiendo', native: "I don't understand", correct: false, feedback: "You DID understand this time — she slowed down. Answer her question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Okay — let me grab a doctor and we will switch to English. You are doing fine. Sit down right here.',
        native: "(switches to English)",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Muchas gracias. Qué amable.', native: 'Thank you very much. How kind.', correct: true, feedback: "Composed, grateful, human. You handled an emergency in your second language. Module 2 complete." },
          { target: 'De nada', native: "You're welcome", correct: false, feedback: "She helped YOU — your line is gracias, not de nada." },
          { target: 'No, gracias', native: 'No, thanks', correct: false, feedback: "You're not refusing anything — she's helping you. 'Muchas gracias' is what closes this." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Chest pain in your second language and you handled it — politely, honestly, clearly. That's not survival anymore. That's competence. Module 2 complete. Module 3 begins next: telling people who you actually are.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I need help', correct: ['Necesito ayuda', 'necesito ayuda'] },
      { prompt: "It's an emergency", correct: ['Es una emergencia', 'es una emergencia'] },
      { prompt: 'My chest hurts', correct: ['Me duele el pecho', 'me duele el pecho'] },
    ],
  },

  mission: {
    title: "Your Module 2 Mission",
    task: "Run the full chain in your head, out loud if you can: 'Necesito ayuda. Es una emergencia. Me duele... No entiendo, más despacio por favor. ¿Habla inglés? Muchas gracias.' If you can run that sequence cold, you can survive almost any moment in Latin America.",
    rwenSignoff: "You can survive anywhere now. Module 3 — who you are — begins next. ¡Hasta pronto!",
  },

  phase8: {
    scenario: "It's late afternoon in Miami. You're a tourist with no Spanish-speaking friends nearby. Sharp chest pain hit twenty minutes ago — could be panic, could be cardiac, you don't know. You've walked into the ER at Jackson Memorial Hospital. The intake nurse on duty speaks Spanish first; English is available but you don't know that yet. Run the full Module 2 chain in a real-stakes scenario.",
    rwenRole: "Yolanda — ~40, bilingual ER intake nurse at Jackson Memorial, calm and efficient, will switch to English the moment you ask but starts in Spanish; she's seen every kind of patient and respects clear communication over panic.",
    successCriteria: "User opens with 'Necesito ayuda. Es una emergencia.' (NOT a greeting — emergency overrides), names the symptom with 'Me duele el pecho', uses 'No entiendo, más despacio por favor' when she asks a complex follow-up (NOT bluffing 'sí'), opens the English escape hatch with '¿Habla inglés?' AFTER showing effort, and closes with 'Muchas gracias' once she switches — chaining 6+ phrases from the module under pressure.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
