import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-mi-historia',
  module: 3,
  lesson: 10,
  title: 'Mi Historia — A Full Self-Introduction',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "This is everything you've learned in Module 3 — strung together. Not a test. A real Spanish self-introduction. Name, age, work, where you live, hobbies, languages, family — and you flag yourself as a beginner, ask politely when stuck, and finish with the why. Ten lessons in one conversation. Vamos.",
    culturalNote: "A full Latin American self-introduction follows a rhythm: name (often with both surnames) → origin → current city → work → family → hobbies → why-you're-here. It's not a list — it's a story. Latinos warm to people who share themselves openly. By the end of yours, you're no longer a stranger — you're someone with a place, a story, and a reason for being there.",
  },

  chunks: [
    {
      id: 'me_llamo_y_soy',
      target: 'Me llamo ___ y soy de ___',
      native: 'My name is ___ and I am from ___',
      literal: 'Me I-call ___ and I-am from ___',
      emoji: '🏷️',
      phonetic: 'meh YAH-mo ___ ee soy deh ___',
      audioRef: null,
    },
    {
      id: 'porque',
      target: 'Porque...',
      native: 'Because... (connecting reasons)',
      literal: 'Because...',
      emoji: '💡',
      phonetic: 'POR-keh',
      audioRef: null,
    },
    {
      id: 'encantado',
      target: 'Encantado / Encantada',
      native: 'Pleased to meet you (m / f)',
      literal: 'Enchanted (m/f)',
      emoji: '🤝',
      phonetic: 'en-kan-TAH-do / en-kan-TAH-dah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Porque — connecting statement to reason',
    explanation: "'Porque' (one word, no accent) means 'because' — connects what you said to why. Different from '¿por qué?' (two words, with accent) which means 'why?'. Use porque to layer your story: 'Estoy aprendiendo español porque mi familia es de México' — I'm learning Spanish because my family is from Mexico. The 'why' is what makes a self-introduction memorable.",
    examples: [
      { target: 'Estoy aprendiendo porque me gusta', native: "I'm learning because I like it" },
      { target: 'Vivo en Texas porque mi trabajo está aquí', native: 'I live in Texas because my job is here' },
      { target: 'Hablo español porque mi mamá es de Cuba', native: 'I speak Spanish because my mom is from Cuba' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Me llamo ___ y soy de ___', right: 'My name is ___ and I am from ___' },
        { left: 'Porque...', right: 'Because... (connecting reasons)' },
        { left: 'Encantado / Encantada', right: 'Pleased to meet you (m / f)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to say WHY you're learning Spanish. Pick the connector:",
      question: 'Choose the right word',
      options: [
        { text: 'porque (one word, no accent)', correct: true },
        { text: '¿por qué? (two words, with accent)', correct: false },
        { text: 'pero (but)', correct: false },
      ],
      explanation: "'Porque' (one word) connects a statement to its reason: 'I learn Spanish PORQUE...'. '¿Por qué?' (two words, with accent and question marks) is the QUESTION 'why?'.",
    },
    {
      type: 'fill_blank',
      instruction: 'Connect happiness to its reason',
      sentence: 'Estoy feliz _____ tengo una familia maravillosa.',
      options: ['porque', 'pero', 'y'],
      correct: 'porque',
      context: 'You\'re explaining why you\'re happy.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'Because... (connecting word)',
      correct: ['Porque', 'porque'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Pleased to meet you. My name is Ana." (female speaker)',
      words: ['Ana.', 'Encantada.', 'Me', 'llamo'],
      correct: ['Encantada.', 'Me', 'llamo', 'Ana'],
      translation: 'Pleased to meet you. My name is Ana.',
    },
    {
      type: 'translate',
      instruction: 'Type in Spanish',
      prompt: 'My name is Maria and I am from Mexico (start with "Me llamo")',
      correct: ['Me llamo Maria y soy de México', 'me llamo maria y soy de méxico', 'Me llamo María y soy de México', 'Me llamo Maria y soy de Mexico', 'me llamo maria y soy de mexico'],
    },
  ],

  rwenDialogue: {
    intro: "End-of-module conversation — a welcome dinner at a Mexican restaurant in Mexico City. The host has invited a few friends to meet you. The room quiets and she asks you to introduce yourself. In Spanish.",
    lines: [
      {
        speaker: 'npc',
        target: 'Cuéntanos de ti — nombre, de dónde eres, qué haces, todo.',
        native: 'Tell us about yourself — name, where you\'re from, what you do, everything.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Me llamo [nombre]. Soy de [país]. Tengo treinta años. Soy [profesión]. Vivo en [ciudad].', native: 'My name is [name]. I\'m from [country]. I am 30. I am a [profession]. I live in [city].', correct: true, feedback: "Five sentences, five Module 3 patterns — Me llamo, soy de, tengo X años, soy [profession with no article], vivo en. The room is listening." },
          { target: 'Soy [nombre].', native: 'I am [name].', correct: false, feedback: "Start strong with 'Me llamo [name]' — and keep going. Add origin, age, work, residence." },
          { target: 'No entiendo.', native: "I don't understand.", correct: false, feedback: "You DO understand — she just asked for your story. Open with 'Me llamo...' and tell it." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Y dime, ¿por qué estás aprendiendo español?',
        native: 'And tell me, why are you learning Spanish?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Estoy aprendiendo español porque me gusta la cultura y tengo familia en México.', native: "I'm learning Spanish because I love the culture and I have family in Mexico.", correct: true, feedback: "Estar + -iendo (in-progress action) + porque (the reason) + a real why. Best sentence in Module 3, said in Spanish." },
          { target: 'Soy aprendiendo.', native: 'I AM learning (with ser).', correct: false, feedback: "The -iendo (-ing) form ALWAYS uses estar — 'Estoy aprendiendo'. Pair it with 'porque' to give the reason." },
          { target: 'Porque sí.', native: 'Just because.', correct: false, feedback: "She wants the real reason — give her one. 'Porque me gusta...' or 'Porque mi familia...' opens the conversation up." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Qué hermoso. Hablas mejor de lo que crees. Encantada.',
        native: "How beautiful. You speak better than you think. Pleased to meet you.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 3 done. You can introduce yourself, say your age without saying 'soy treinta años', name your profession without 'un', flag yourself as a beginner, ask when stuck, and explain WHY you're learning Spanish. You're not a tourist anymore. You have a story in Spanish. Module 4 — verbs that unlock real conversation — starts next.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Because... (connecting word, one word, no accent)', correct: ['Porque', 'porque'] },
      { prompt: 'Pleased to meet you (female speaker)', correct: ['Encantada', 'encantada'] },
    ],
  },

  mission: {
    title: "Your Module 3 Mission",
    task: "Out loud, in Spanish, give your full self-introduction: name → origin → age → work → city → family → hobby → why you're learning Spanish. Stitch it together with 'y' and 'porque'. Make it real. Make it yours.",
    rwenSignoff: "You have a story now — and it lives in Spanish. Module 4 — present-tense verbs that crack open real conversation — starts next. ¡Nos vemos!",
  },

  phase8: {
    scenario: "Welcome dinner at a small restaurant in the Roma Norte neighbourhood of Mexico City. The host has invited a few friends to meet you, and after the first round of micheladas she asks you to introduce yourself fully — in Spanish.",
    rwenRole: "Doña Patricia — host and old family friend, ~60, bilingual but switches to Spanish when she wants you to practice; will gently ask follow-ups if you skip a piece (origin, age, work, family, why).",
    successCriteria: "User strings together a full self-introduction in order using Module 3 patterns: 'Me llamo... | Soy de... | Tengo [number] años | Soy [profession, no article] | Vivo en... | Tengo [family details] | Me gusta(n)... | Estoy aprendiendo español porque...'. Uses ser/estar/tener correctly throughout, drops the article before professions, and gives a real 'porque' reason. No major Module 3 trap (Soy X años / Estoy principiante / Soy un profesor) appears.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
