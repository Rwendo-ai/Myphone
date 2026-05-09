import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm11-l03',
  module: 11,
  lesson: 3,
  title: 'Asking Deeper Questions',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Until now your questions have been about facts — what, where, when. Today you go deeper. 'Yini ucabanga?' — what do you think? Ask this once and the conversation changes shape.",
    culturalNote: "In Ndebele culture, asking someone's opinion — especially an elder's — is a quiet honour. It signals you see them as a person worth thinking with, not just a person to be greeted. Younger speakers ask elders 'yini ucabanga?' to invite wisdom. Elders ask it back to younger speakers as a sign of respect that the young person has thoughts worth hearing.",
  },

  chunks: [
    {
      id: 'yini_ucabanga',
      target: 'Yini ucabanga?',
      native: 'What do you think?',
      literal: 'what you-think',
      emoji: '🤔',
      phonetic: 'YEE-nee oo-chah-BAHN-gah',
      audioRef: null,
    },
    {
      id: 'ngani',
      target: 'ngani?',
      native: 'why?',
      emoji: '❔',
      phonetic: 'NGAH-nee',
      audioRef: null,
    },
    {
      id: 'ngokwakho',
      target: 'ngokwakho',
      native: 'in your view / according to you',
      literal: 'according-to-yours',
      emoji: '👁️',
      phonetic: 'ngoh-KWAH-khoh',
      audioRef: null,
    },
    {
      id: 'uzwa_njani',
      target: 'Uzwa njani?',
      native: 'How do you feel about it?',
      literal: 'you-feel how',
      emoji: '💭',
      phonetic: 'OO-zwah NJAH-nee',
      audioRef: null,
    },
    {
      id: 'ngitshele',
      target: 'Ngitshele.',
      native: 'Tell me.',
      emoji: '👂',
      phonetic: 'ngee-CHEH-leh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Inviting thought, not facts',
    explanation: "Fact questions ('Where? When? Who?') get short answers. Thought questions invite the other person to slow down. The structure is simple: a question word like 'Yini' (what) plus the verb 'ucabanga' (you think) — or the feeling-question 'Uzwa njani?' (how do you feel?). After they speak, 'Ngitshele' (tell me) signals you want more.",
    examples: [
      { target: 'Yini ucabanga ngalokho?', native: 'What do you think about that?' },
      { target: 'Ngokwakho, kuhle?', native: 'In your view, is it good?' },
      { target: 'Uzwa njani manje?', native: 'How do you feel now?' },
      { target: 'Ngitshele kakhulu.', native: 'Tell me more.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the question to what it invites',
      pairs: [
        { left: 'Yini ucabanga?', right: 'their thinking on something' },
        { left: 'Uzwa njani?', right: 'their feeling about it' },
        { left: 'Ngokwakho', right: 'their personal viewpoint' },
        { left: 'Ngitshele', right: 'more from what they were saying' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Pick the right deeper-question word.',
      sentence: 'Ngokwakho, lokhu ____?',
      options: ['kuhle', 'ngani', 'ngitshele'],
      correct: 'kuhle',
      context: '"In your view, is this good?" The phrase needs the adjective for "good".',
    },
    {
      type: 'build_sentence',
      instruction: 'Build "What do you think about that?"',
      words: ['ngalokho', 'ucabanga', 'Yini'],
      correct: ['Yini', 'ucabanga', 'ngalokho'],
      translation: 'What do you think about that?',
    },
    {
      type: 'multiple_choice',
      instruction: 'Choose the deeper question',
      question: 'An elder has just told you a long story about her childhood. Which response invites her to keep talking?',
      options: [
        { text: 'Kulungile. (Fine.)', correct: false },
        { text: 'Ngitshele kakhulu. Uzwa njani manje? (Tell me more. How do you feel now?)', correct: true },
        { text: 'Ngiyahamba. (I am going.)', correct: false },
      ],
      explanation: "Asking how she feels now — after telling the story — gives her permission to land somewhere with it. 'Ngitshele kakhulu' invites more. This is the Ndebele way of receiving a story.",
    },
  ],

  rwenDialogue: {
    intro: "You're sitting with Gogo (Grandmother) Nkomo on her veranda. She has just shared a worry about her grandson moving to South Africa for work.",
    lines: [
      { speaker: 'npc', target: 'Uyazi, uyahamba ngeSaturday.', native: 'You know, he is leaving on Saturday.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Uzwa njani, Gogo?', native: 'How do you feel about it, Grandmother?', correct: true, feedback: 'Beautifully Ndebele. You did not rush to fix or advise — you asked the feeling first. She will exhale.' },
          { target: 'Kulungile.', native: 'It is fine.', correct: false, feedback: 'You closed the door she just opened. She was sharing something tender; "kulungile" reads as a brush-off.' },
          { target: 'Yini ucabanga?', native: 'What do you think?', correct: false, feedback: 'Not bad — but she is feeling, not thinking. "Uzwa njani?" lands closer to where she actually is.' },
        ],
      },
      { speaker: 'npc', target: "Ngiyamthanda, kodwa ngiyamesaba.", native: 'I love him, but I fear for him.' },
      { speaker: 'rwen', rwenLine: 'She just gave you the heart of it. Do not advise. Stay there.' },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngitshele kakhulu, Gogo. Ngokwakho, kungani uyamesaba?', native: 'Tell me more, Grandmother. In your view, why do you fear for him?', correct: true, feedback: 'Two deeper questions stacked gently. You stayed in her world. This is the highest form of respect.' },
          { target: 'Uzobuya.', native: 'He will return.', correct: false, feedback: 'Premature reassurance. She did not ask for hope; she asked for company in the worry. Stay with the question, not the fix.' },
        ],
      },
    ],
  },

  activeRecall: {
    instruction: 'Type from memory.',
    prompts: [
      { prompt: 'How do you say "What do you think?"', correct: ['Yini ucabanga?', 'Yini ucabanga', 'yini ucabanga'] },
      { prompt: 'How do you say "How do you feel?"', correct: ['Uzwa njani?', 'Uzwa njani', 'uzwa njani'] },
      { prompt: 'How do you say "in your view / according to you"?', correct: ['ngokwakho', 'Ngokwakho'] },
      { prompt: 'How do you say "Tell me."', correct: ['Ngitshele', 'Ngitshele.', 'ngitshele'] },
    ],
  },

  mission: {
    title: 'Ask one elder',
    task: "Today, ask one older person — in any language you share with them — what they think about something. Not a fact question, a thought question. Then practise saying it in isiNdebele under your breath: 'Yini ucabanga?' Match the words to the moment.",
    rwenSignoff: "The questions you ask shape the conversations you can have.",
  },

  phase8: {
    scenario: "You are visiting an elder in Bulawayo who has just returned from a funeral. You are not there to fix anything. You ask deeper questions and let her speak — using 'Yini ucabanga?', 'Uzwa njani?', and 'Ngitshele' across the conversation.",
    rwenRole: "MaMoyo — early 70s, recently bereaved, will open up if you stay with the questions and not advise.",
    successCriteria: "User asked at least two deeper-question phrases (yini ucabanga / uzwa njani / ngokwakho / ngitshele), did NOT offer unsolicited advice, and let her finish her thoughts before moving on.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
