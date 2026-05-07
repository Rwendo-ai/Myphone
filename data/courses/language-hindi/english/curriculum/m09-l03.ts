import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l03-seedhe',
  module: 9,
  lesson: 3,
  title: 'Seedhe — Straight Ahead',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "After baayen and daayen, the third pillar of Indian directions is 'seedhe' — straight, straight ahead, keep going. It's the word every shopkeeper points with — 'seedhe jao, fir daayen' (go straight, then right). It's also the most common direction in India: when in doubt, seedhe.",
    culturalNote: "'Seedhe' literally means 'straight' but Indians often use it to mean 'just keep going for a while'. If a passer-by tells you 'seedhe seedhe seedhe' with three repetitions, that means really far. One 'seedhe' might be 50 metres. Three 'seedhes' might be a kilometre. Listen to the repetition.",
  },

  chunks: [
    {
      id: 'seedhe',
      target: 'सीधे',
      native: 'Straight / Straight ahead',
      literal: 'Seedhe — directly',
      emoji: '⬆️',
      phonetic: 'SEED-heh',
      audioRef: null,
    },
    {
      id: 'jao',
      target: 'जाओ',
      native: 'Go (command, informal)',
      literal: 'Jao — go (informal command)',
      emoji: '🚶',
      phonetic: 'jaa-O',
      audioRef: null,
    },
    {
      id: 'rukna',
      target: 'रुको / रुकिए',
      native: 'Stop (informal / polite)',
      literal: 'Ruko / rukiye — stop',
      emoji: '🛑',
      phonetic: 'ru-KO / ru-KI-yeh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Seedhe jao / seedhe jaiye — go straight',
    explanation: "Direction + verb. 'Seedhe jao' (go straight, informal — auto driver). 'Seedhe jaiye' (go straight, polite — Ola driver). Same swap as 'mudo / mudiye'. The verb tells you the register — '-o' is informal, '-iye' is polite.",
    examples: [
      { target: 'Seedhe jao', native: 'Go straight (informal)' },
      { target: 'Seedhe jaiye', native: 'Go straight (polite)' },
      { target: 'Yahaan ruko', native: 'Stop here (informal)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the direction phrase to its meaning',
      pairs: [
        { left: 'Seedhe', right: 'Straight' },
        { left: 'Jao', right: 'Go (informal)' },
        { left: 'Rukiye', right: 'Stop (polite)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell the polite Ola driver to go straight',
      sentence: 'Seedhe _____, signal tak.',
      options: ['jaiye', 'jao', 'mudo'],
      correct: 'jaiye',
      context: 'Go straight to the signal.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Stop here (polite)',
      correct: ['Yahaan rukiye', 'yahaan rukiye', 'yahan rukiye'],
    },
    {
      type: 'multiple_choice',
      instruction: "Your auto driver is going too far. What's the quickest command to stop him?",
      question: 'Tell the auto driver to stop here:',
      options: [
        { text: 'Yahaan ruko!', correct: true },
        { text: 'Yahaan jao!', correct: false },
        { text: 'Seedhe seedhe!', correct: false },
      ],
      explanation: "'Yahaan ruko' = stop here (informal, urgent — auto driver register). 'Jao' is the opposite — go. 'Seedhe seedhe' tells him to keep going. Volume + correct verb = stop.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Go straight, then turn left'",
      words: ['Seedhe', 'jaiye,', 'phir', 'baayen', 'mudiye.'],
      correct: ['Seedhe', 'jaiye,', 'phir', 'baayen', 'mudiye.'],
      translation: 'Go straight, then turn left',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Go straight (informal)',
      correct: ['Seedhe jao', 'seedhe jao'],
    },
  ],

  rwenDialogue: {
    intro: "You're in an auto-rickshaw in Old Delhi and your hotel is straight ahead, then a left at the next chowk (intersection). Direct the driver.",
    lines: [
      {
        speaker: 'npc',
        target: 'किधर मैडम?',
        native: 'Which way, madam?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Seedhe jao, fir agle chowk pe baayen mudo.', native: 'Go straight, then left at the next intersection.', correct: true, feedback: "Auto driver register: short, informal, sequenced. He's already moving." },
          { target: 'Seedhe jaiye, fir baayen mudiye.', native: 'Go straight, then turn left (polite).', correct: false, feedback: "Polite form is technically fine, but with auto drivers the informal 'jao / mudo' is the natural register. Save 'jaiye / mudiye' for Ola." },
          { target: 'Sirf seedhe.', native: 'Only straight.', correct: false, feedback: "Then he'll drive forever. Add the turn: 'Seedhe jao, fir baayen mudo.'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'ठीक है।',
        native: 'OK.',
      },
      {
        speaker: 'rwen',
        rwenLine: "Seedhe + mudo — direction stack. Now you can chain. Tomorrow: paas / door (near / far). Distance arrives.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Straight ahead', correct: ['Seedhe', 'seedhe'] },
      { prompt: 'Stop here (polite)', correct: ['Yahaan rukiye', 'yahaan rukiye', 'yahan rukiye'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Combine all three direction words today: 'Seedhe jao, fir daayen mudo, fir baayen.' Say it out loud three times. By the third, you won't need to think about which is which.",
    rwenSignoff: "Seedhe is the direction of confidence. Keep going. Phir milenge.",
  },

  phase8: {
    scenario: "You're in a green-and-yellow auto-rickshaw at the start of Chandni Chowk in Old Delhi heading to Karim's restaurant. The driver doesn't know the exact lane — you have to navigate him with seedhe / mudo through three turns of narrow market streets, all in Hindi auto-driver register, while he weaves around handcarts and buffaloes.",
    rwenRole: "Auto-rickshaw driver in Chandni Chowk — late 50s, drives this market every day, knows Karim's by reputation but not by exact lane; responds instantly to short Hindi commands ('seedhe jao', 'baayen mudo', 'yahaan ruko') and ignores English instructions on principle.",
    successCriteria: "User commands movement with short informal forms 'jao' and 'mudo' (NOT polite 'jaiye / mudiye' — wrong register for an auto driver), chains direction + turn ('Seedhe jao, fir daayen mudo'), and stops the auto with 'Yahaan ruko' at the right moment instead of letting him overshoot.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
