import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l01-particles-intro',
  module: 4,
  lesson: 1,
  title: 'Particles — The Invisible Glue',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Welcome to the part of Japanese English speakers feel hardest at first: particles. English shows who-did-what-to-whom by word order alone. Japanese marks every noun with a tiny tag — は, が, を, に, で — and the order of the words can shuffle. Once you see the tags, the language stops looking like a wall and starts looking like a circuit board.",
    culturalNote: "There is no way to 'feel' a particle in your English ear, because English never asked you to. Japanese learners often skip particles in early speech and get understood anyway — but a sentence without particles sounds like a telegram. Master five common ones and you sound like a learner who is taking the language seriously.",
  },

  chunks: [
    {
      id: 'wa_particle',
      target: 'は (wa)',
      native: 'Topic marker — "as for ___"',
      literal: 'Spelt は, pronounced "wa" only when used as a particle',
      emoji: '🏷️',
      phonetic: 'wa',
      audioRef: null,
    },
    {
      id: 'wo_particle',
      target: 'を (wo / o)',
      native: 'Object marker — marks what the verb acts on',
      literal: 'Spelt を, pronounced "o" — exists almost only as a particle',
      emoji: '🎯',
      phonetic: 'o',
      audioRef: null,
    },
    {
      id: 'watashi_wa',
      target: '私はパンを食べます。',
      native: 'I eat bread.',
      literal: 'watashi (I) + wa (topic) + pan (bread) + o (object) + tabemasu (eat)',
      emoji: '🍞',
      phonetic: 'wa-ta-shi wa pan o ta-be-ma-su',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Noun + は = topic, Noun + を = object',
    explanation: "Each noun gets tagged. は (wa) flags the topic — the thing the sentence is about. を (o) flags the direct object — the thing being acted on. Particles always come AFTER the noun they tag, never before.",
    examples: [
      { target: '私は学生です。', native: 'I (topic) am a student.' },
      { target: '本を読みます。', native: '(I) read a book (object).' },
      { target: '田中さんはコーヒーを飲みます。', native: 'Tanaka (topic) drinks coffee (object).' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each particle to its job',
      pairs: [
        { left: 'は (wa)', right: 'Topic marker' },
        { left: 'を (o)', right: 'Object marker' },
        { left: '私はパンを食べます', right: 'I eat bread' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Choose the correct particle for the object',
      sentence: '私はお茶___飲みます。',
      options: ['を', 'は', 'に'],
      correct: 'を',
      context: 'I drink tea. (Tea is what I drink — the object.)',
    },
    {
      type: 'translate',
      instruction: 'Type the topic particle (in hiragana)',
      prompt: 'The topic-marker particle (pronounced "wa")',
      correct: ['は'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which sentence correctly tags I as topic and bread as object?',
      question: 'I eat bread:',
      options: [
        { text: '私はパンを食べます。', correct: true },
        { text: '私をパンは食べます。', correct: false },
        { text: '私パン食べます。', correct: false },
      ],
      explanation: 'は after 私 marks the topic; を after パン marks the object. Drop them and the sentence is intelligible but ungrammatical.',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I read a book"',
      words: ['読みます。', '本', 'を', '私', 'は'],
      correct: ['私', 'は', '本', 'を', '読みます。'],
      translation: 'I read a book.',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (hiragana + kanji ok)',
      prompt: 'I eat bread.',
      correct: ['私はパンを食べます。', '私はパンを食べます', 'わたしはパンをたべます。'],
    },
  ],

  rwenDialogue: {
    intro: 'Rwen plays a Japanese teacher in a beginner classroom in Tokyo, walking you through your first particle exercise on the whiteboard.',
    lines: [
      {
        speaker: 'rwen',
        rwenLine: '「私___学生です。」What goes in the blank — は or を?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'は です。私は学生です。', native: 'は. I am a student.', correct: true, feedback: 'Exactly. The sentence is about you — topic — so you need は (wa).' },
          { target: 'を です。私を学生です。', native: 'を. I am a student.', correct: false, feedback: 'を marks objects, not topics. The topic of "I am a student" is 私 — use は.' },
          { target: 'わかりません。', native: "I don't know.", correct: false, feedback: 'は (wa) marks the topic — what the sentence is about. 私は学生です。' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'いいですね。Particles are tags. Get the tags right and the order can almost shuffle.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'The topic-marker particle (pronounced wa)', correct: ['は'] },
      { prompt: 'The object-marker particle (pronounced o)', correct: ['を'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Pick three things you do today (eat lunch, drink coffee, read email) and say each one in your head as 私は___を___ます。 Force yourself to say the particles out loud.',
    rwenSignoff: 'The tags are invisible in English. From today, never invisible again. がんばって。',
  },

  phase8: {
    scenario: "It's day three of an intensive Japanese class in Shinjuku. The sensei has drawn three sentences on the whiteboard with the particles missing — 私___りんご___食べます (I eat an apple), 田中さん___本___読みます (Tanaka reads a book), 母___コーヒー___飲みます (Mum drinks coffee) — and asks you, the only English-speaking student, to fill them in out loud.",
    rwenRole: 'Yamamoto-sensei — a calm, patient mid-50s Japanese teacher who waits for you to choose は or を for each blank and gently corrects (with the English-particle metaphor "topic tag, object tag") if you swap them.',
    successCriteria: "User correctly places は (wa) after each subject/topic noun (私, 田中さん, 母) and を (o) after each object noun (りんご, 本, コーヒー) — six particles, no swaps, no omissions — and can articulate that は marks topic and を marks object.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
