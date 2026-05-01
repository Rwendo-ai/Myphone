import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l08-yesterday',
  module: 8,
  lesson: 8,
  title: 'Hier — Telling yesterday with passé composé',
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "Today, you unlock the past. Passé composé is the everyday French past tense — what you ate, saw, did, said yesterday. The pattern: avoir + past participle. J'ai mangé. J'ai vu. J'ai fait. Three pieces, one tense, half your storytelling done.",
    culturalNote: "When French speakers tell stories — at dinner, in cafés, over the phone — they use passé composé almost exclusively. The other past tense (imparfait) sets the scene; passé composé is the action. There's a small footnote: a handful of movement verbs (aller, partir, venir, monter, rentrer, etc., known as Dr Mrs Vandertramp) take ÊTRE instead of avoir. We'll meet those properly later — for now, avoir handles 80% of stories.",
  },

  chunks: [
    {
      id: 'jai_mange',
      target: "Hier, j'ai mangé une pizza",
      native: 'Yesterday, I ate a pizza',
      literal: 'Yesterday, I-have eaten a pizza',
      emoji: '🍕',
      phonetic: 'ee-YEHR zhay mahn-ZHAY oon peed-ZAH',
      audioRef: null,
    },
    {
      id: 'jai_vu',
      target: "J'ai vu un film",
      native: 'I saw a film',
      literal: 'I-have seen a film',
      emoji: '🎬',
      phonetic: 'zhay VOO uhn FEELM',
      audioRef: null,
    },
    {
      id: 'cetait_bien',
      target: "C'était bien",
      native: 'It was good',
      literal: 'It-was good',
      emoji: '👍',
      phonetic: 'say-TEH BYAHN',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Passé composé with avoir — the everyday past',
    explanation: "Two pieces: avoir (conjugated for the subject) + past participle of the main verb. J'ai mangé, tu as mangé, il a mangé, nous avons mangé, vous avez mangé, ils ont mangé. Past participles for -er verbs end in -é (mangé, regardé, parlé). Common irregulars: avoir → eu, être → été, faire → fait, voir → vu, prendre → pris. A small set of movement verbs (Dr Mrs Vandertramp — aller, venir, partir, rentrer, etc.) takes être instead — flag that for now, learn it deeper later.",
    examples: [
      { target: "Hier, j'ai mangé une pizza et j'ai vu un film.", native: 'Yesterday I ate a pizza and saw a film.' },
      { target: "Tu as fait quoi ce week-end?", native: "What did you do this weekend?" },
      { target: "Nous avons pris le train pour Lyon.", native: 'We took the train to Lyon.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the past participle to its infinitive',
      pairs: [
        { left: 'mangé', right: 'manger (to eat)' },
        { left: 'vu', right: 'voir (to see)' },
        { left: 'fait', right: 'faire (to do)' },
        { left: 'pris', right: 'prendre (to take)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right form of avoir',
      sentence: "Hier, j'_____ mangé au restaurant.",
      options: ['ai', 'as', 'a'],
      correct: 'ai',
      context: "Je form of avoir = 'ai'. Always pair the auxiliary with the subject.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'Yesterday I ate a pizza',
      correct: ["Hier j'ai mangé une pizza", "hier j'ai mangé une pizza", "Hier, j'ai mangé une pizza"],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag — "We saw a film yesterday"',
      words: ['avons', 'film', 'hier', 'vu', 'un', 'Nous'],
      correct: ['Nous', 'avons', 'vu', 'un', 'film', 'hier'],
      translation: 'We saw a film yesterday.',
    },
    {
      type: 'multiple_choice',
      instruction: "What did you do yesterday? Pick the natural past tense.",
      question: "Hier, j'___ ___ une réunion importante.",
      options: [
        { text: 'ai eu', correct: true },
        { text: 'avais eu', correct: false },
        { text: 'suis eu', correct: false },
      ],
      explanation: "Avoir's own past participle is 'eu'. So 'I had a meeting' becomes j'ai eu une réunion. And avoir uses avoir as its auxiliary — never être.",
    },
    {
      type: 'translate',
      instruction: 'Type in French',
      prompt: 'It was good',
      correct: ["C'était bien", "c'était bien", "C'était bon"],
    },
  ],

  rwenDialogue: {
    intro: "Monday morning coffee with your colleague Camille. She asks how your weekend went. Tell her in passé composé.",
    lines: [
      {
        speaker: 'npc',
        target: 'Alors, ton week-end? Tu as fait quoi?',
        native: "So, your weekend? What did you do?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "J'ai vu un film samedi soir, et dimanche j'ai mangé chez mes amis. C'était bien!", native: "I saw a film Saturday night, and Sunday I ate at my friends'. It was good!", correct: true, feedback: "Three passé composé verbs in a row plus c'était — that's a complete weekend story." },
          { target: "Je vois un film et je mange chez mes amis. C'est bien.", native: "I see a film and I eat at my friends'. It's good.", correct: false, feedback: "Present tense! She's asking about the past — you need passé composé: j'ai vu, j'ai mangé, c'était." },
          { target: "J'ai voir un film et j'ai manger.", native: "I have to-see a film and I have to-eat.", correct: false, feedback: "Use the past participle, not the infinitive: voir → vu, manger → mangé. So j'ai vu, j'ai mangé." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Cool! Moi j\'ai juste dormi tout le week-end, j\'étais crevée.',
        native: "Cool! Me, I just slept all weekend, I was wiped.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Listen to that 'j'ai dormi' — same pattern. You can describe a whole weekend now. Big day.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Yesterday I ate at a restaurant',
        correct: ["Hier j'ai mangé au restaurant", "hier j'ai mangé au restaurant", "Hier, j'ai mangé au restaurant"],
      },
      {
        prompt: 'I saw a film',
        correct: ["J'ai vu un film", "j'ai vu un film"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Tell yourself yesterday's story in French. Three sentences in passé composé. 'Hier, j'ai...' Don't worry about perfection — get the avoir + past participle shape into your mouth.",
    rwenSignoff: "À demain — see you tomorrow.",
  },

  phase8: {
    scenario: "Monday morning, coffee in hand, you bump into your French colleague Camille at the office kitchen. She asks how your weekend was — you tell her in past tense, she shares hers in return. Stick to passé composé throughout: what you ate, what you watched, where you went, how it was.",
    rwenRole: "Camille — French colleague, early 30s, friendly Monday-morning energy; asks 'Tu as fait quoi ce week-end?', 'C'était bien?', shares her own weekend story in passé composé as a model.",
    successCriteria: "User uses passé composé with avoir for at least 3 actions (j'ai mangé / j'ai vu / j'ai fait / j'ai pris). Past participles must be in -é, -u, -i, or -is form (NOT bare infinitive). User uses 'c'était' to comment on the experience. No present tense slipping in for past actions.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
