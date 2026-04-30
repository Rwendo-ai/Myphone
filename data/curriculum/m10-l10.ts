import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l10-your-story',
  module: 10,
  lesson: 10,
  title: 'Your Shona Story — A2 Complete',
  estimatedMinutes: 10,
  xpReward: 100,

  hook: {
    rwenLine: "This is the final lesson of Rwendo's shona-english curriculum. 100 lessons. 10 modules. And this one — lesson 100 — is yours. Today you don't learn. Today you speak. Your full Shona story, from hello to proverbs, from greetings to hope. Show me who you've become.",
    culturalNote: "Completing this curriculum means you've absorbed not just vocabulary but culture — tsika (respect), ubuntu (we are because we are), sadza and proverbs and moyo. You have not just learned Shona words. You have touched Shona life. That is the Rwendo journey.",
  },

  chunks: [
    {
      id: 'ndasvika',
      shona: 'Ndasvika',
      english: 'I have arrived',
      literal: 'I-have-arrived',
      emoji: '🏆',
      phonetic: 'nda-SVI-ka',
      audioRef: null,
    },
    {
      id: 'ndinoenda_mberi',
      shona: 'Ndinoenda mberi',
      english: 'I keep going forward',
      literal: 'I-go forward',
      emoji: '⬆️',
      phonetic: 'ndi-no-EN-da MBE-ri',
      audioRef: null,
    },
    {
      id: 'rwendo_ruchiripo',
      shona: 'Rwendo ruchiripo',
      english: 'The journey continues',
      literal: 'Journey it-continues',
      emoji: '🌅',
      phonetic: 'RWE-ndo ru-chi-RI-po',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'From A2 to beyond — the journey continues',
    explanation: "You've reached A2 functional fluency. You can greet, survive, identify yourself, discuss family, count, navigate markets, talk about food, describe your day, express emotions, tell simple stories, and use proverbs. The next step is speaking — daily, with real people, in real contexts.",
    examples: [
      { shona: 'Ndasvika A2', english: 'I have reached A2' },
      { shona: 'Ndinoenda mberi', english: 'I keep going forward' },
      { shona: 'Rwendo ruchiripo — the journey continues', english: 'The journey continues' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the completion phrase to its meaning',
      pairs: [
        { left: 'Ndasvika', right: 'I have arrived' },
        { left: 'Ndinoenda mberi', right: 'I keep going forward' },
        { left: 'Rwendo ruchiripo', right: 'The journey continues' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You've completed 100 lessons. Which sentence captures your achievement?",
      question: 'Your achievement in Shona:',
      options: [
        { text: 'Ndadzidzа ChiShona. Ndasvika. Ndinoenda mberi.', correct: true },
        { text: 'Handina kudzidzа', correct: false },
        { text: 'Ndichadzidzа ChiShona', correct: false },
      ],
      explanation: "'Ndadzidzа ChiShona.' (I have learned Shona.) 'Ndasvika.' (I have arrived.) 'Ndinoenda mberi.' (I keep going forward.) That is your A2 moment.",
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I have arrived',
      correct: ['Ndasvika', 'ndasvika', 'Ndasvika!', 'ndasvika!'],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete your journey statement',
      sentence: 'Rwendo _____ — ndinoenda mberi.',
      options: ['ruchiripo', 'rakapera', 'rakatanga'],
      correct: 'ruchiripo',
      context: 'The journey continues — I keep going forward.',
    },
    {
      type: 'build_sentence',
      instruction: "Build 'The journey continues'",
      words: ['Rwendo', 'ruchiripo.'],
      correct: ['Rwendo', 'ruchiripo.'],
      translation: 'The journey continues',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'I keep going forward',
      correct: ['Ndinoenda mberi', 'ndinoenda mberi'],
    },
  ],

  rwenDialogue: {
    intro: "Final lesson. Final conversation. Rwen has one question — and it's the most important one.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Zita rangu ndi Rwen. Ndiri chameleon — ndinoona mavara ose emitauro. Ndakuona panguva yako yose. Zvino — ndikuudze chinhu chimwe chakakosha: uri ani zvino, pakupera kwerwendo?",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndiri murwi weshoko. Ndinodzidzа ChiShona. Ndinoda Zimbabwe. Ndasvika — asi rwendo ruchiripo. Ndinoenda mberi.', english: "I am a language learner. I learn Shona. I love Zimbabwe. I have arrived — but the journey continues. I keep going forward.", correct: true, feedback: "Five sentences. Past, present, love, arrival, and forward momentum. That is your complete Shona identity. Rwen has nothing left to teach — and everything left to celebrate." },
          { shona: 'Ndiri mudzidzi', english: 'I am a student', correct: false, feedback: "Go deeper — who are you now after this journey? 'Ndiri murwi weshoko. Ndinoda Zimbabwe. Ndasvika. Rwendo ruchiripo.'" },
          { shona: 'Ndinofara', english: 'I am happy', correct: false, feedback: "That's true — and say more: 'Ndiri murwi weshoko. Ndasvika A2. Ndinoenda mberi.' Complete your story." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Rwendo ruchiripo. You spoke your story — in Shona. 100 lessons. 10 modules. From Mangwanani to proverbs, from greetings to hope. The journey continues. Tichaonana — we will see each other again.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Final recall. Everything began with this.',
    prompts: [
      { prompt: 'The journey continues', correct: ['Rwendo ruchiripo', 'rwendo ruchiripo'] },
      { prompt: 'I keep going forward', correct: ['Ndinoenda mberi', 'ndinoenda mberi'] },
    ],
  },

  mission: {
    title: "Your A2 Mission — The Most Important One",
    task: "Speak Shona with a real person today. Not practice — real. Find a Zimbabwean person, an online community, a language exchange partner. Use your Shona. Because language only lives when it moves between people. Rwendo ruchiripo.",
    rwenSignoff: "Ndasvika. Ndinoenda mberi. Tichaonana, murwi weshoko. We will see each other again, language warrior. Famba zvakanaka — go well, always.",
  },
};

export default lesson;
