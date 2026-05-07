import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l04-enojado',
  module: 10,
  lesson: 4,
  title: 'Estoy enojado/a — Anger & Disappointment',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Anger in Spanish has a few flavours, and choosing the right one matters. 'Enojado' (Mexico, much of LatAm) is the everyday word for 'angry'. 'Enfadado' (Spain) is the same shade. Then there's 'molesto' — bothered, annoyed — softer, more diplomatic. Today you learn to name your anger without setting fires.",
    culturalNote: "In Latin American conversation, naming anger directly is a sign of trust — you only say 'estoy enojado contigo' to someone whose relationship you actually care about. Strangers get 'estoy molesto'. Family and close friends get the full word. The vocabulary itself draws the circle of intimacy.",
  },

  chunks: [
    {
      id: 'estoy_enojado',
      target: 'Estoy enojado/a',
      native: 'I am angry',
      literal: 'Estoy + enojado (-o) / enojada (-a)',
      emoji: '😠',
      phonetic: 'es-TOY eh-noh-HAH-doh/dah',
      audioRef: null,
    },
    {
      id: 'estoy_molesto',
      target: 'Estoy molesto/a',
      native: 'I am annoyed / bothered',
      literal: 'Molesto/a — softer than enojado/a; diplomatic anger',
      emoji: '😤',
      phonetic: 'es-TOY moh-LES-toh/tah',
      audioRef: null,
    },
    {
      id: 'estoy_decepcionado',
      target: 'Estoy decepcionado/a',
      native: 'I am disappointed',
      literal: 'Decepcionado/a — disappointment, the quiet cousin of anger',
      emoji: '😔',
      phonetic: 'es-TOY deh-sep-see-oh-NAH-doh/dah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Naming anger with estar + adjective',
    explanation: "All anger words follow the same template: 'Estoy [adjective with matching gender ending]'. Add 'contigo' (with you), 'con él/ella' (with him/her), or 'con la situación' (with the situation) to point the feeling. 'Estoy enojado contigo' = I'm angry with you. The structure stays simple; the words choose the temperature.",
    examples: [
      { target: 'Estoy enojado/a contigo', native: "I'm angry with you" },
      { target: 'Estoy molesto/a con la situación', native: "I'm annoyed with the situation" },
      { target: 'Estoy decepcionado/a', native: "I'm disappointed" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the anger phrase to its meaning',
      pairs: [
        { left: 'Estoy enojado/a', right: 'I am angry' },
        { left: 'Estoy molesto/a', right: 'I am annoyed' },
        { left: 'Estoy decepcionado/a', right: 'I am disappointed' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right preposition to direct your anger',
      sentence: 'Estoy enojado _____ él, no contigo.',
      options: ['con', 'de', 'por'],
      correct: 'con',
      context: "I'm angry with him, not with you.",
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (a man speaking)',
      prompt: 'I am annoyed',
      correct: ['Estoy molesto', 'estoy molesto'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your colleague missed an important deadline. You want to express anger calmly, not explosively. What do you say?",
      question: 'Diplomatic anger at work:',
      options: [
        { text: 'Estoy molesto/a con la situación.', correct: true },
        { text: '¡Felicidades!', correct: false },
        { text: 'Estoy feliz', correct: false },
      ],
      explanation: "'Estoy molesto/a' is the workplace-safe word — it names the feeling without burning the bridge. Add 'con la situación' (with the situation) to point at the problem, not the person.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I am disappointed but I am not angry' (a woman speaking)",
      words: ['Estoy', 'decepcionada', 'pero', 'no', 'estoy', 'enojada.'],
      correct: ['Estoy', 'decepcionada', 'pero', 'no', 'estoy', 'enojada.'],
      translation: 'I am disappointed but I am not angry',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish (a woman speaking)',
      prompt: 'I am disappointed',
      correct: ['Estoy decepcionada', 'estoy decepcionada'],
    },
  ],

  rwenDialogue: {
    intro: "Your brother in Guadalajara cancelled on you for the third time this month. He calls to say sorry. You want to be honest without exploding.",
    lines: [
      {
        speaker: 'npc',
        target: 'Perdóname, otra vez. Sé que te fallé.',
        native: 'Forgive me, again. I know I let you down.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'No estoy enojado/a — estoy decepcionado/a. Necesito que me digas la verdad la próxima vez.', native: "I'm not angry — I'm disappointed. I need you to tell me the truth next time.", correct: true, feedback: "Naming the right feeling — disappointment, not anger — and asking for what you need. That's adult Spanish, not reactive Spanish." },
          { target: 'Estoy feliz', native: 'I am happy', correct: false, feedback: "Be honest about your real feeling: 'No estoy enojado/a — estoy decepcionado/a.' That's the harder, more honest answer." },
          { target: 'Adiós', native: 'Goodbye', correct: false, feedback: "Don't shut down — name the feeling: 'Estoy decepcionado/a. Necesito que me digas la verdad la próxima vez.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Tienes razón. Te prometo que esta vez sí.',
        native: "You're right. I promise this time, yes.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Three words for one country called anger — enojado, molesto, decepcionado. You picked the precise one. That's how Spanish keeps friendships intact.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am angry (a man)', correct: ['Estoy enojado', 'estoy enojado'] },
      { prompt: 'I am annoyed (a woman)', correct: ['Estoy molesta', 'estoy molesta'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Think of one thing that bothered you this week. Say it in Spanish: 'Estoy molesto/a porque...' (I'm annoyed because...). Naming a small thing in Spanish makes the bigger ones easier next time.",
    rwenSignoff: "El enojo nombrado pierde la mitad de su fuego. Hasta mañana.",
  },

  phase8: {
    scenario: "Tuesday evening phone call. Your brother in Guadalajara just cancelled on Sunday family dinner — the third time this month. He's apologetic, slightly defensive. You want to be honest without blowing up the relationship.",
    rwenRole: "Your brother — ~30, busy, conflict-averse, will respond well to specific feedback but will shut down if you go scorched-earth; he wants to repair this, not be lectured.",
    successCriteria: "User chooses the precise word (most likely 'decepcionado/a' over 'enojado/a' for a relationship grievance), agrees adjective gender to themselves, and lands a forward-pointing sentence ('Necesito que...' or 'La próxima vez...') instead of just venting. Diplomatic anger, not nuclear.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
