import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l06-preocupado',
  module: 10,
  lesson: 6,
  title: 'Estoy preocupado/a — Worry & Reassurance',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Worry is one of the most useful emotions to name in Spanish, because the response phrases are gold. 'Estoy preocupado por ti' (I'm worried about you) opens the door for someone to share. 'No te preocupes' (don't worry) — said the right way — closes the wound. Today both sides of the conversation.",
    culturalNote: "In Latin American family culture, expressing worry is an expression of love. 'Estoy preocupada por ti, mijo' from a mother is not anxiety; it's care made audible. Reassuring back with 'No te preocupes, mamá, estoy bien' is part of the family choreography. Knowing both lines means you fit in.",
  },

  chunks: [
    {
      id: 'estoy_preocupado',
      target: 'Estoy preocupado/a',
      native: 'I am worried',
      literal: 'Estoy + preocupado (-o) / preocupada (-a)',
      emoji: '😟',
      phonetic: 'es-TOY preh-oh-koo-PAH-doh/dah',
      audioRef: null,
    },
    {
      id: 'no_te_preocupes',
      target: 'No te preocupes',
      native: "Don't worry (informal you)",
      literal: 'No te preocupes — gentle imperative, said with warmth',
      emoji: '🤗',
      phonetic: 'noh teh preh-oh-KOO-pehs',
      audioRef: null,
    },
    {
      id: 'todo_va_a_estar_bien',
      target: 'Todo va a estar bien',
      native: 'Everything is going to be okay',
      literal: 'All goes to be well — the universal reassurance',
      emoji: '☀️',
      phonetic: 'TOH-doh vah ah es-TAR bee-EHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Negative imperative — no te + verb (-es ending)',
    explanation: "Spanish flips the imperative for negatives: 'No te preocupes' — don't worry. The 'te' is reflexive (preocuparse = to worry oneself); the verb takes -es because it's a tú-command in negative form. Same pattern: 'No te enojes' (don't get angry), 'No te asustes' (don't get scared).",
    examples: [
      { target: 'No te preocupes', native: "Don't worry" },
      { target: 'No te enojes', native: "Don't get angry" },
      { target: 'No te asustes — estoy aquí', native: "Don't be scared — I'm here" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the worry/reassurance phrase to its meaning',
      pairs: [
        { left: 'Estoy preocupado/a', right: 'I am worried' },
        { left: 'No te preocupes', right: "Don't worry" },
        { left: 'Todo va a estar bien', right: 'Everything is going to be okay' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Reassure a friend gently',
      sentence: 'No te _____. Todo va a estar bien.',
      options: ['preocupes', 'preocupas', 'preocupa'],
      correct: 'preocupes',
      context: "Don't worry. Everything is going to be okay.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (a woman speaking)',
      prompt: 'I am worried about you',
      correct: ['Estoy preocupada por ti', 'estoy preocupada por ti'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your mom calls late at night, anxious you haven\'t messaged in days. What do you say?',
      question: 'Reassure a worried mother:',
      options: [
        { text: 'No te preocupes, mamá. Estoy bien. Todo va a estar bien.', correct: true },
        { text: '¡Felicidades!', correct: false },
        { text: 'Estoy enojado contigo', correct: false },
      ],
      explanation: "'No te preocupes, mamá. Estoy bien. Todo va a estar bien.' — three reassurances in one breath. That's how you put a Latin American mother's heart back in her chest.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am worried about my brother' (a man speaking)",
      words: ['Estoy', 'preocupado', 'por', 'mi', 'hermano.'],
      correct: ['Estoy', 'preocupado', 'por', 'mi', 'hermano.'],
      translation: 'I am worried about my brother',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: "Don't worry — everything is going to be okay",
      correct: ['No te preocupes — todo va a estar bien', 'no te preocupes — todo va a estar bien', 'No te preocupes, todo va a estar bien', 'no te preocupes, todo va a estar bien'] ,
    },
  ],

  rwenDialogue: {
    intro: "Late-night call from your mother in Mérida. She hasn't heard from you in five days and her voice is tight.",
    lines: [
      {
        speaker: 'npc',
        target: 'Mijo/mija, estoy muy preocupada. ¿Estás bien?',
        native: "Son/daughter, I'm so worried. Are you okay?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'No te preocupes, mamá. Estoy bien. Sólo estuve muy ocupado/a. Todo va a estar bien.', native: "Don't worry, mom. I'm fine. I was just very busy. Everything is going to be okay.", correct: true, feedback: "Reassurance + status + reason + closing reassurance. That's the four-part Latin-American family-call template — and it works." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "Don't hang up — reassure her: 'No te preocupes, mamá. Estoy bien. Todo va a estar bien.'" },
          { target: 'Estoy enojado contigo', native: "I'm angry with you", correct: false, feedback: "She's anxious — meet her with care, not heat: 'No te preocupes, mamá. Estoy bien. Todo va a estar bien.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Gracias, mi amor. Llámame mañana, ¿sí?',
        native: 'Thank you, my love. Call me tomorrow, okay?',
      },
      {
        speaker: 'rwen',
        rwenLine: "'No te preocupes' is one of the kindest sentences in Spanish. Use it gently, mean it when you say it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am worried', correct: ['Estoy preocupado', 'estoy preocupado', 'Estoy preocupada', 'estoy preocupada'] },
      { prompt: "Don't worry", correct: ['No te preocupes', 'no te preocupes'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Send one short voice note today (or say it to yourself) — 'No te preocupes — todo va a estar bien.' Hear how the words sit in your mouth. They're worth practising before you need them.",
    rwenSignoff: "La preocupación nombrada se aliviana. Hasta mañana.",
  },

  phase8: {
    scenario: "11pm. Your phone lights up — it's your mamá in Mérida, and her voice when you pick up is tight. You haven't messaged in five days; she's been imagining the worst. She just wants to hear you're okay, in Spanish, calmly.",
    rwenRole: "Your mother — ~60, anxious, will hear EVERY tone in your voice; doesn't want a long explanation, wants reassurance and a small concrete thing she can hold on to (when you'll call again, that you ate today, etc.).",
    successCriteria: "User leads with 'No te preocupes, mamá' (NOT a defensive 'why are you worrying'), states 'Estoy bien' clearly, gives a brief reason, and closes with 'Todo va a estar bien' or a concrete next step ('te llamo mañana'). Reassurance has structure — they hit it.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
