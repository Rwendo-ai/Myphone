import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l04-paas-door',
  module: 9,
  lesson: 4,
  title: 'Paas & Door — Near & Far',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "How far is far? In India, the answer depends on who you ask and how they're feeling. 'Paas' (near) and 'door' (far) are the words you need — but be warned, 'bas paas hi hai' (it's just nearby) can mean 100 metres or 2 kilometres. Indians are optimistic about distances.",
    culturalNote: "Distance in India is rarely measured in metres or kilometres in conversation — it's described as 'paas hi hai' (just nearby), 'thoda door' (a little far), or 'bahut door' (very far). The auto fare meter will tell you the truth; the chaiwala on the corner will tell you the story.",
  },

  chunks: [
    {
      id: 'paas',
      target: 'पास',
      native: 'Near / Close',
      literal: 'Paas — close by',
      emoji: '📍',
      phonetic: 'PAAS',
      audioRef: null,
    },
    {
      id: 'door',
      target: 'दूर',
      native: 'Far',
      literal: 'Door — distant',
      emoji: '🏔️',
      phonetic: 'DOOR',
      audioRef: null,
    },
    {
      id: 'kitne_door',
      target: 'कितने दूर है?',
      native: 'How far is it?',
      literal: 'Kitne door hai — how far is?',
      emoji: '🤔',
      phonetic: 'KIT-neh DOOR hai',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Place] paas hai / [Place] door hai',
    explanation: "Place + paas/door + hai. 'Station paas hai' (the station is near). 'Hotel door hai' (the hotel is far). To intensify: 'bahut door' (very far), 'bilkul paas' (right next door). 'Kitne door?' is the question — how far?",
    examples: [
      { target: 'Metro paas hai', native: 'The Metro is near' },
      { target: 'Airport bahut door hai', native: 'The airport is very far' },
      { target: 'Kitne door hai?', native: 'How far is it?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the distance word to its meaning',
      pairs: [
        { left: 'Paas', right: 'Near' },
        { left: 'Door', right: 'Far' },
        { left: 'Kitne door?', right: 'How far?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask if the railway station is far',
      sentence: 'Station kitne _____ hai?',
      options: ['door', 'paas', 'seedhe'],
      correct: 'door',
      context: 'How far is the station?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'How far is it?',
      correct: ['Kitne door hai?', 'kitne door hai?', 'Kitne door hai', 'kitne door hai'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your auto driver says 'bas paas hi hai'. What does this likely mean?",
      question: "'Bas paas hi hai' typically means:",
      options: [
        { text: 'Just nearby — but could be anywhere from 100m to 2km', correct: true },
        { text: 'Exactly 100 metres', correct: false },
        { text: 'Very far away', correct: false },
      ],
      explanation: "'Bas paas hi hai' (it's just nearby) is the universal optimistic distance phrase in India. Treat it as 'somewhere between close and not really close'. Trust the meter, not the answer.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'The hotel is very far'",
      words: ['Hotel', 'bahut', 'door', 'hai.'],
      correct: ['Hotel', 'bahut', 'door', 'hai.'],
      translation: 'The hotel is very far',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Near / Close',
      correct: ['Paas', 'paas'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Bengaluru airport. You ask an auto driver how far your hotel in Koramangala is.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Bhaiya, Koramangala kitne door hai?', native: 'Brother, how far is Koramangala?', correct: true, feedback: "'Kitne door' is the precise question. He gives you a real answer because you asked in real Hindi." },
          { target: 'Koramangala paas hai?', native: 'Is Koramangala near?', correct: false, feedback: "He'll just say 'haan' (yes) to keep your business. Ask 'Kitne door?' — how far? — for an honest answer." },
          { target: 'Koramangala', native: 'Koramangala', correct: false, feedback: "Just naming a place isn't a question. Ask 'Koramangala kitne door hai?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'मैडम, बारह किलोमीटर है — आधा घंटा।',
        native: 'Madam, twelve kilometres — half an hour.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Twelve kilometres, half an hour — a real number, a real time. 'Kitne door?' got you the truth. That's the power of the right question.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Near / Close', correct: ['Paas', 'paas'] },
      { prompt: 'How far is it?', correct: ['Kitne door hai?', 'kitne door hai?', 'Kitne door hai', 'kitne door hai'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Name three places paas (near) you and three that are door (far): 'Station paas hai. Airport door hai.' Say each out loud. Feel the distance in the words.",
    rwenSignoff: "Every destination is paas or door. Both are reachable. Phir milenge.",
  },

  phase8: {
    scenario: "You've landed at Kempegowda International (Bengaluru) airport at 11 PM and pulled into the prepaid auto queue. Your hotel is in Koramangala but you have no idea how far that is by road at this hour. You need to ask the dispatcher in Hindi using 'kitne door' to get an honest distance — not the optimistic 'bas paas hi hai' brushoff every tourist hears.",
    rwenRole: "Prepaid auto dispatcher at Kempegowda airport — mid-50s, has booked thousands of late-night fares to Koramangala, will give you a precise kilometre + minute estimate if you ask using 'kitne door' in Hindi; otherwise gives the lazy 'paas hi hai' answer.",
    successCriteria: "User asks the explicit 'Koramangala kitne door hai?' (NOT the vague 'paas hai?' which gets a yes-shrug answer), understands when he says 'bahut door' (very far) and 'aadha ghanta' (half an hour), and follows up with seedhe / baayen / daayen vocabulary from earlier lessons to confirm the route after he names a landmark.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
