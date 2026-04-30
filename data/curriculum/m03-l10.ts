import { LessonData } from '../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l10-my-story',
  module: 3,
  lesson: 10,
  title: 'My Story in Shona — A Full Introduction',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "This is it — everything in Module 3. Not a test. A conversation. I want to know your full story. Who you are, what you do, where you're from, your family, what you love. Tell me. In Shona.",
    culturalNote: "A full Shona self-introduction flows naturally: name → profession → origin → family → what you enjoy → why you're learning Shona. Each piece shows respect and openness. By the end, you are no longer a stranger.",
  },

  chunks: [
    {
      id: 'zita_rangu_ndi',
      shona: 'Zita rangu ndi...',
      english: 'My name is...',
      literal: 'Name my it-is...',
      emoji: '🏷️',
      phonetic: 'ZI-ta ran-gu ndi',
      audioRef: null,
    },
    {
      id: 'nokuti',
      shona: 'Nokuti...',
      english: 'Because...',
      literal: 'Because...',
      emoji: '💡',
      phonetic: 'no-KU-ti',
      audioRef: null,
    },
    {
      id: 'ndinoda_kuva_shamwari',
      shona: 'Ndinoda kuva shamwari yako',
      english: 'I want to be your friend',
      literal: 'I-want to-be friend your',
      emoji: '🤝',
      phonetic: 'ndi-no-da ku-VA sha-MWA-ri ya-ko',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Nokuti — because (connecting ideas)',
    explanation: "'Nokuti' connects a statement to its reason — like 'because' in English. 'Ndinofara nokuti...' (I am happy because...), 'Ndinoda kutaura ChiShona nokuti...' (I want to speak Shona because...). It makes your speech explanatory and deep.",
    examples: [
      { shona: 'Ndinofara nokuti ndinofarira kudzidza', english: 'I am happy because I enjoy learning' },
      { shona: 'Ndinoda ChiShona nokuti vanhu veZimbabwe', english: 'I love Shona because of the people of Zimbabwe' },
      { shona: 'Ndiri pano nokuti ndinoda kutaura', english: "I am here because I want to speak" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Zita rangu ndi...', right: 'My name is...' },
        { left: 'Nokuti...', right: 'Because...' },
        { left: 'Ndinoda kuva shamwari yako', right: 'I want to be your friend' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "You want to explain WHY you enjoy something. Which connecting word do you use?",
      question: 'Choose the right connector',
      options: [
        { text: 'Nokuti', correct: true },
        { text: 'Kana', correct: false },
        { text: 'Uye', correct: false },
      ],
      explanation: "'Nokuti' means 'because' — it connects your statement to its reason. 'Uye' means 'and'. 'Kana' means 'if'.",
    },
    {
      type: 'fill_blank',
      instruction: 'Connect your happiness to its reason',
      sentence: 'Ndinofara _____ ndinoda vanhu veZimbabwe.',
      options: ['nokuti', 'uye', 'kana'],
      correct: 'nokuti',
      context: 'Explain why learning Shona makes you happy.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Because...',
      correct: ['Nokuti', 'nokuti'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I want to be your friend"',
      words: ['yako', 'Ndinoda', 'kuva', 'shamwari'],
      correct: ['Ndinoda', 'kuva', 'shamwari', 'yako'],
      translation: 'I want to be your friend',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'My name is... (start of phrase)',
      correct: ['Zita rangu ndi', 'zita rangu ndi'],
    },
  ],

  rwenDialogue: {
    intro: "Full story time. I'm meeting you for the first time. Tell me everything — in Shona.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'Ndiudze nezvako. Zita, basa, musha, mhuri — zvose.',
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Zita rangu ndi... Ndiri mudzidzisi. Ndabva ku... Ndine mhuri.', english: 'My name is... I am a teacher. I am from... I have a family.', correct: true, feedback: "Name, profession, origin, family — in Shona. That's a full person, fully introduced." },
          { shona: 'Zita rangu ndi...', english: 'My name is...', correct: false, feedback: "Good start — keep going! Add profession, origin, and family." },
          { shona: 'Handizivi', english: "I don't know", correct: false, feedback: "You know your story — start with 'Zita rangu ndi...' and keep building." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Unodzidza ChiShona sei? Nei?",
      },
      {
        speaker: 'user',
        userChoices: [
          { shona: 'Ndinoda kutaura ChiShona nokuti ndinoda vanhu veZimbabwe.', english: 'I want to speak Shona because I love the people of Zimbabwe.', correct: true, feedback: "That is the most powerful sentence in this module. And you said it in Shona." },
          { shona: 'Ndirikudzidza ChiShona', english: 'I am learning Shona', correct: false, feedback: "True — add 'nokuti...' to tell them WHY." },
          { shona: 'Ndinoda kudzidza', english: 'I want to learn', correct: false, feedback: "Good — add the reason: 'nokuti ndinoda vanhu veZimbabwe'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Ndinoda kuva shamwari yako. Zvakanakisisa kukuziva.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Module 3 complete. You can introduce yourself, your work, your family, your home, what you love — and why you're here. You are no longer a visitor. You're beginning to belong.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Because... (connector)', correct: ['Nokuti', 'nokuti'] },
      { prompt: 'I want to be your friend', correct: ['Ndinoda kuva shamwari yako', 'ndinoda kuva shamwari yako'] },
    ],
  },

  mission: {
    title: "Your Module 3 Mission",
    task: "Write or say your full Shona introduction out loud — name, profession, origin, family, what you enjoy, why you're learning Shona. Make it real. Make it yours.",
    rwenSignoff: "You have a story. Now it lives in Shona. Module 4 — the grammar that unlocks everything — begins next. Tichaonana.",
  },
};

export default lesson;
