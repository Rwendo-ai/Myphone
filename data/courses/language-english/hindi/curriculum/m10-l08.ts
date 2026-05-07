import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l08-hope-future',
  module: 10,
  lesson: 8,
  title: 'Hope & Future — उम्मीदें और सपने',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "उम्मीदें: 'I hope to...' (मैं उम्मीद करता हूँ), 'One day I'll...' (एक दिन), 'I dream of...' (सपना देखता हूँ)। Job interview में ज़रूरी।",
    culturalNote: "Indian career path पर माँ-बाप के सपने भारी होते — 'doctor बनो', 'engineer बनो', 'IAS बनो'। पर अब Indian IT industry global है — Bangalore से Silicon Valley तक भारतीय। Job interview foreign company में: 'Where do you see yourself in 5 years?' — 'I hope to grow' + 'one day I'll lead' + 'I dream of building' — तीन-level structure perfect। 'Famous and rich' से बचें — recruiter को specific goal चाहिए।",
  },

  chunks: [
    {
      id: 'hope_to',
      target: 'I hope to...',
      native: 'मैं उम्मीद करता हूँ...',
      literal: 'Main umeed karta hoon',
      emoji: '🤞',
      phonetic: 'ay-HOHP-too',
      audioRef: null,
    },
    {
      id: 'one_day_ill',
      target: "One day I'll...",
      native: 'एक दिन मैं...',
      literal: 'Ek din main',
      emoji: '🌅',
      phonetic: 'WUN-DAY-ayl',
      audioRef: null,
    },
    {
      id: 'dream_of',
      target: 'I dream of...',
      native: 'मैं सपना देखता हूँ...',
      literal: 'Main sapna dekhta hoon',
      emoji: '✨',
      phonetic: 'ay-DREEM-uv',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Future hopes — three frames',
    explanation: "तीन frames: (1) 'I hope to + verb' = realistic ('I hope to finish my course')। (2) 'One day I'll + verb' = दूर लेकिन possible ('One day I'll start my own business')। (3) 'I dream of + verb-ing' (gerund!) = दिल का सपना ('I dream of living near the sea')। ध्यान दें: 'dream of LIVING' (-ing form), 'live' नहीं।",
    examples: [
      { target: 'I hope to finish my course this year.',          native: 'इस साल course पूरा करने की उम्मीद।' },
      { target: "One day I'll start my own business.",            native: 'एक दिन अपना business शुरू करूँगा।' },
      { target: 'I dream of working in education.',                native: 'Education में काम करने का सपना।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'उम्मीद के शब्द मिलाएँ',
      pairs: [
        { left: 'I hope to',         right: 'उम्मीद करता हूँ' },
        { left: "One day I'll",       right: 'एक दिन मैं' },
        { left: 'I dream of',         right: 'सपना देखता हूँ' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'इस साल course पूरा करने की उम्मीद है।',
      correct: ['I hope to finish my course this year.', 'I hope to complete my course this year.', 'I hope to finish my course this year', 'i hope to finish my course this year.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दूर का सपना',
      prompt: 'एक दिन अपना business शुरू करूँगा।',
      correct: ["One day I'll start my own business.", "One day I will start my own business.", "Someday I'll start my own business.", "one day i'll start my own business."],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य: 'I dream of working in education'",
      words: ['working', 'in', 'I', 'dream', 'of', 'education.'],
      correct: ['I', 'dream', 'of', 'working', 'in', 'education.'],
      translation: 'Education में काम करने का सपना',
    },
    {
      type: 'fill_blank',
      instruction: "'Dream of' के बाद verb form?",
      sentence: 'I dream _____ near the sea.',
      options: ['of living', 'of live', 'to live'],
      correct: 'of living',
      context: "'Dream of + verb-ing' (gerund)। 'Hope to + verb' (infinitive)। दोनों future, अलग pattern।",
    },
    {
      type: 'multiple_choice',
      instruction: 'Job interview answer',
      question: "Interviewer: 'Where do you see yourself in 5 years?'",
      options: [
        { text: "I hope to grow into a team lead role here, and one day I'd like to mentor newer engineers. I dream of building products that matter.", correct: true },
        { text: "I don't know.",                                                                                                                            correct: false },
        { text: "Famous and rich.",                                                                                                                          correct: false },
      ],
      explanation: "'I hope to' + 'one day I'd like to' + 'I dream of' — ambition with humility। 'Don't know' interview-killer।",
    },
  ],

  rwenDialogue: {
    intro: "Bangalore tech company में final round interview। HR ने पाँच साल के सपने पूछे।",
    lines: [
      { speaker: 'npc', target: "Last question — where do you see yourself in 5 years?", native: 'अंतिम सवाल — पाँच साल बाद कहाँ?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I hope to grow into a senior role here, leading a small team. One day I'll start my own business — in education tech. I dream of building tools that help kids learn.", native: 'यहाँ senior role में आने की उम्मीद, छोटी team lead करना। एक दिन अपना business — education tech में। बच्चों के सीखने वाले tools बनाने का सपना।', correct: true, feedback: "बढ़िया — तीनों frames। Specific goal, ambition, humility।" },
          { target: "I don't know yet.", native: 'अभी पता नहीं।', correct: false, feedback: "Interview में 'I don't know' टूट जाता। 'I hope to grow here' से शुरू।" },
          { target: "Famous.", native: 'मशहूर।', correct: false, feedback: "Specific work-goal दें — 'I hope to + work goal'।" },
        ],
      },
      { speaker: 'npc', target: "Education tech — interesting. Tell me more after the offer comes through.", native: 'Education tech — interesting। Offer के बाद और बताइएगा।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! तीन frames एक answer में — interview की कला।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: 'I hope to (अंग्रेज़ी में)',          correct: ['I hope to', 'i hope to'] },
      { prompt: 'I dream of (अंग्रेज़ी में)',          correct: ['I dream of', 'i dream of'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "Diary में 'Where do you see yourself in 5 years?' का जवाब लिखें। तीन frames: (1) 'I hope to ___.' (2) 'One day I'll ___.' (3) 'I dream of ___ing.'",
    rwenSignoff: "कल — मुहावरे और कहावतें (Hindi proverbs in English)।",
  },

  phase8: {
    scenario: "Final round of a job interview at an English-speaking tech company in Bangalore (the company is US-based but has India offices). The hiring manager asks: 'Where do you see yourself in 5 years?' Give a structured answer — short-term hope, mid-term aim, longer dream — that shows ambition without overpromising.",
    rwenRole: "Rachel, 42, Head of People at the company. Warm but probing. Will follow up: 'Why education tech?', 'What would success look like for you?'",
    successCriteria: "User uses 'I hope to + verb' AND 'One day I'll + verb' OR 'I dream of + verb-ing'. Gives a specific role/area (not vague). Shows ambition + humility (no 'famous and rich'). Stays in English. Speaks 3+ sentences.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
