import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-oir-escuchar',
  module: 8,
  lesson: 8,
  title: 'Oír & Escuchar — Hear and Listen',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Spanish splits hearing the way it splits seeing. Oír — to hear, passive, what reaches your ears ('oigo un ruido'). Escuchar — to listen, active, deliberate ('escucho música'). Oír is irregular and weird — oigo, oyes, oye, oímos, oís, oyen — that 'g' in 'oigo' is one of Spanish's small surprises. Escuchar is regular -ar and easy.",
    culturalNote: "On a kombi-style bus in Mexico City or a cercanías train in Madrid, you'll often hear someone say '¿Oye!' to get attention — literally 'hear!' but functionally 'hey!'. It's the same root as oír but the imperative — 'oye, ¿me das un favor?' (hey, can you do me a favour?). Friendly, slightly informal, very common.",
  },

  chunks: [
    {
      id: 'oigo',
      target: 'Oigo',
      native: 'I hear',
      literal: '(yo) oigo — oír, irregular',
      emoji: '👂',
      phonetic: 'OY-goh',
      audioRef: null,
    },
    {
      id: 'escucho',
      target: 'Escucho',
      native: 'I listen / I am listening',
      literal: '(yo) escucho — regular -ar, deliberate',
      emoji: '🎧',
      phonetic: 'es-KOO-choh',
      audioRef: null,
    },
    {
      id: 'oye',
      target: 'Oye',
      native: 'Hey / Listen up',
      literal: 'imperative of oír — informal attention-grabber',
      emoji: '👋',
      phonetic: 'OH-yeh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Oír vs escuchar — passive vs active hearing',
    explanation: "Oigo el ruido (I hear the noise — automatic, it reached me). Escucho música (I listen to music — chosen, deliberate). The split mirrors ver vs mirar exactly. With music, podcasts, conversations, instructions — you 'escuchas'. With background sounds, alarms, distant voices — you 'oyes'. Spanish has separate verbs because the experiences are separate.",
    examples: [
      { target: 'Oigo un ruido', native: 'I hear a noise' },
      { target: 'Escucho un podcast', native: "I'm listening to a podcast" },
      { target: 'Oye, ¿tienes un momento?', native: 'Hey, do you have a moment?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the verb to its meaning',
      pairs: [
        { left: 'Oigo', right: 'I hear' },
        { left: 'Escucho', right: 'I listen' },
        { left: 'Oye', right: 'Hey! (informal)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Choose the right verb — passive or active?',
      sentence: '_____ música mientras trabajo.',
      options: ['Escucho', 'Oigo', 'Veo'],
      correct: 'Escucho',
      context: 'I listen to music while I work — deliberate, so escucho.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'I hear a noise',
      correct: ['Oigo un ruido', 'oigo un ruido'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to get a friend's attention informally on the metro. What do you say?",
      question: 'Casual attention-grabber:',
      options: [
        { text: 'Oye, ¿tienes un momento?', correct: true },
        { text: 'Escucho, ¿tienes un momento?', correct: false },
        { text: 'Oye escucho un momento.', correct: false },
      ],
      explanation: "'Oye' is the friendly 'hey, listen up'. 'Escucho' is just 'I listen' — a statement, not a call. Don't pile both together.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I listen to podcasts on the metro'",
      words: ['Escucho', 'podcasts', 'en', 'el', 'metro.'],
      correct: ['Escucho', 'podcasts', 'en', 'el', 'metro.'],
      translation: 'I listen to podcasts on the metro',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (informal command)',
      prompt: 'Listen!',
      correct: ['¡Escucha!', 'Escucha!', 'escucha!', 'Escucha', 'escucha'],
    },
  ],

  rwenDialogue: {
    intro: "Tuesday 8:15am on the line 1 metro from Insurgentes to Zócalo, Mexico City. Your friend Diego catches your shoulder.",
    lines: [
      {
        speaker: 'npc',
        target: 'Oye, ¿qué escuchas?',
        native: 'Hey, what are you listening to?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Escucho un podcast en español. Está muy bien.', native: "I'm listening to a podcast in Spanish. It's really good.", correct: true, feedback: "'Escuchar' for the deliberate listening + a casual review. That's metro chat done right." },
          { target: 'Oigo un podcast.', native: 'I hear a podcast.', correct: false, feedback: "Podcasts are deliberate listening — use 'escucho'. 'Oigo' is for noises that reach you accidentally." },
          { target: 'Veo un podcast.', native: 'I watch a podcast.', correct: false, feedback: "Wrong sense — for podcasts you 'escuchas' (listen). 'Veo' is for video." },
        ],
      },
      {
        speaker: 'npc',
        target: '¡Pásamelo después! Yo siempre oigo música pero quiero algo nuevo.',
        native: 'Send it to me later! I always hear music but I want something new.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Oigo. Escucho. Oye. One verb family, three different actions. Spanish splits hearing the way it splits seeing.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I listen / I am listening', correct: ['Escucho', 'escucho'] },
      { prompt: 'Hey! (informal attention-grabber)', correct: ['Oye', 'oye'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "On your commute today, narrate what's reaching your ears. Background noise = 'oigo'. Music or podcast = 'escucho'. Switch verbs as the soundscape switches. Train your ear for the difference.",
    rwenSignoff: "Oigo el mundo. Escucho el español. ¡Buen camino!",
  },

  phase8: {
    scenario: "Tuesday 8:30am, you're squeezed onto the metro line 1 in Mexico City. Your friend Diego, headphones on too, taps your shoulder and asks what you're listening to and what you usually have on during your commute. Background — kids shouting, a busker — keeps interrupting.",
    rwenRole: "Diego — Mexico City friend, mid-20s, peer register (tú). Music nerd, will push back if you mix oír and escuchar.",
    successCriteria: "User uses 'escucho' (deliberate) for podcast or music currently on AND 'oigo' (passive) at least once for the background noise reaching them on the metro. Opens or responds with 'oye' as casual attention-grabber. Three uses of the oír/escuchar split, no English code-switch.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
