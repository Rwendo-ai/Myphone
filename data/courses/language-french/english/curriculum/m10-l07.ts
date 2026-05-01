import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l07-past-stories',
  module: 10,
  lesson: 7,
  title: 'Raconter au passé — Telling stories in the past',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Storytelling in French has TWO past tenses, and they do different jobs. The 'imparfait' paints the scene — what was going on, what things were like. The 'passé composé' (you already know it) drops the events that happened ONCE and changed things. Imparfait sets the stage. Passé composé moves the plot.",
    culturalNote: "French stories almost always braid the two: 'Quand j'étais enfant, j'habitais à Lyon (imparfait — what life was like). Un jour, j'ai trouvé un chien dans la rue (passé composé — the event that happened once)'. Get the rhythm and your stories sound French, not translated.",
  },

  chunks: [
    {
      id: 'quand_jetais_enfant',
      target: "Quand j'étais enfant...",
      native: 'When I was a child...',
      literal: 'When I was(imparfait) child',
      emoji: '👶',
      phonetic: 'kahn zhay-TEH ahn-FAHN',
      audioRef: null,
    },
    {
      id: 'je_noublierai_jamais',
      target: "Je n'oublierai jamais...",
      native: "I'll never forget...",
      literal: 'I will-not-forget never',
      emoji: '💭',
      phonetic: 'zhuh noo-blee-RAY zhah-MEH',
      audioRef: null,
    },
    {
      id: 'cetait_incroyable',
      target: "C'était incroyable",
      native: 'It was incredible',
      literal: 'That-was(imparfait) incredible',
      emoji: '✨',
      phonetic: 'say-TEH ahn-krwa-YAH-bluh',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Imparfait (scene) + passé composé (event)",
    explanation: "Imparfait = background, mood, what life was like, repeated/habitual things. 'J'étais', 'c'était', 'j'habitais', 'il faisait beau'. Passé composé = one specific thing that happened. 'J'ai trouvé', 'elle est arrivée'. The structure of any French story: paint with imparfait, drop events with passé composé.",
    examples: [
      { target: "Quand j'étais enfant, j'habitais à Lyon", native: 'When I was a child, I lived in Lyon (scene)' },
      { target: 'Un jour, j\'ai vu un éléphant au zoo', native: 'One day, I saw an elephant at the zoo (event)' },
      { target: "Il faisait beau et soudain, il a plu", native: 'It was sunny, and suddenly, it rained (scene → event)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: "Quand j'étais enfant", right: 'When I was a child' },
        { left: "Je n'oublierai jamais", right: "I'll never forget" },
        { left: "C'était incroyable", right: 'It was incredible' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Scene-setting (background) — pick the right tense.",
      sentence: "Quand j'_____ enfant, j'habitais à Lyon.",
      options: ['étais', 'ai été', 'suis'],
      correct: 'étais',
      context: "Background description = imparfait. 'J'étais' (I was) for what life was like. 'Ai été' would be one finished event, not a state.",
    },
    {
      type: 'translate',
      instruction: "Type in French — opening line of a childhood memory",
      prompt: "When I was a child",
      correct: ["Quand j'étais enfant", "quand j'étais enfant"],
    },
    {
      type: 'build_sentence',
      instruction: "Tell about an unforgettable trip — put the words in order.",
      words: ["jamais", "Je", "voyage", "n'", "oublierai", "ce"],
      correct: ['Je', "n'", 'oublierai', 'jamais', 'ce', 'voyage'],
      translation: "I'll never forget this trip",
    },
    {
      type: 'multiple_choice',
      instruction: "You're telling a story. Background = it was raining. Event = my umbrella broke. Which sentence uses both tenses correctly?",
      question: 'Pick the natural French story rhythm',
      options: [
        { text: "Il pleuvait, et mon parapluie s'est cassé.", correct: true },
        { text: "Il a plu, et mon parapluie se cassait.", correct: false },
        { text: "Il pleut, et mon parapluie casse.", correct: false },
      ],
      explanation: "Background ('it was raining') = imparfait 'il pleuvait'. Event ('the umbrella broke') = passé composé 's'est cassé'. The other options invert these or use present tense.",
    },
    {
      type: 'translate',
      instruction: 'Type in French — close out a story moment',
      prompt: "It was incredible",
      correct: ["C'était incroyable", "c'était incroyable"],
    },
  ],

  rwenDialogue: {
    intro: "You're at dinner with your friend Camille. She asks about your favourite childhood memory. The food is on the table, you have time.",
    lines: [
      {
        speaker: 'npc',
        target: "Raconte-moi un souvenir d'enfance, un vrai.",
        native: 'Tell me a childhood memory, a real one.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Quand j'étais enfant, on allait à la mer chaque été. Un été, j'ai vu un dauphin. C'était incroyable.", native: 'When I was a child, we went to the sea every summer. One summer, I saw a dolphin. It was incredible.', correct: true, feedback: 'Imparfait sets the scene (étais, allait), passé composé drops the event (j\'ai vu), imparfait closes the feeling (c\'était). Native rhythm.' },
          { target: "Quand j'ai été enfant, j'ai allé à la mer.", native: "When I was-once a child, I went-once to the sea. (wrong tenses)", correct: false, feedback: "'Being a child' is a long state — needs imparfait 'étais'. Habit ('every summer') needs imparfait too — 'allait', not 'a allé'." },
          { target: "Je suis enfant.", native: "I am a child. (present, wrong)", correct: false, feedback: "She asked for a childhood memory. You need a past tense. Try 'quand j'étais enfant'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ah, magnifique. Moi aussi je n\'oublierai jamais ma première fois à la mer.',
        native: "Ah, beautiful. I'll never forget my first time at the sea either.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Listen to that — you and Camille just exchanged stories in two tenses. This is fluent territory.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: "When I was a child (in French)",
        correct: ["Quand j'étais enfant", "quand j'étais enfant"],
      },
      {
        prompt: "It was incredible (in French)",
        correct: ["C'était incroyable", "c'était incroyable"],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Pick one memory — any childhood moment. In your head, frame it in three sentences: imparfait scene, passé composé event, imparfait feeling. Two tenses, one story.",
    rwenSignoff: "Tu racontes maintenant. À demain.",
  },

  phase8: {
    scenario: "Sunday lunch with your French host family in Toulouse. Madame Martin asks across the table: 'Raconte-nous un souvenir de ton enfance.' Tell us a childhood memory. Everyone leans in. You have three minutes.",
    rwenRole: "Madame Martin — host mother, ~55, curious and warm; she uses 'tu' with you (you've been in her home a month), will ask 'et après?' (and then?) and 'pourquoi tu te souviens de ça?' (why do you remember that?).",
    successCriteria: "User tells a 4-6 sentence childhood memory using BOTH imparfait (étais, faisait, allait — for scene/habit/feeling) AND passé composé (j'ai vu, je suis allé(e) — for the specific event). Opens with 'Quand j'étais enfant'. Closes with a feeling using imparfait ('c'était...'). Tense mixing is the key test.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
