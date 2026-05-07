import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l09-chahna-chahiye',
  module: 8,
  lesson: 9,
  title: 'Chahna / Chahiye — To Want, To Need',
  estimatedMinutes: 6,
  xpReward: 28,

  hook: {
    rwenLine: "चाहना (chahna — to want) is a normal Hindi verb that conjugates like the others. But चाहिए (chahiye — needed/wanted) is something weirder: a fixed form that doesn't change, used with 'mujhe' (to me) instead of 'main' (I). 'Mujhe paani chahiye' = 'water is needed by me' = I need water. It looks backwards. It IS backwards. Lock the frame in.",
    culturalNote: "'Mujhe chahiye' is one of the politer ways to express need in Hindi. It's softer than 'mujhe ___ chahta hoon' (which is more direct want) — chahiye is closer to 'I'd like' / 'I need'. In service settings (auto, hotel, restaurant), 'mujhe ___ chahiye' is the gentle, accepted phrasing. Indians switch between chahna (active wanting) and chahiye (needed/desired) constantly without thinking — but the grammar underneath is genuinely different.",
  },

  chunks: [
    {
      id: 'chahna',
      target: 'चाहना — Chahna',
      native: 'To want (standard verb)',
      literal: 'chah- (want-stem) + -na',
      emoji: '💭',
      phonetic: 'CHAAH-na',
      audioRef: null,
    },
    {
      id: 'chahiye',
      target: 'चाहिए — Chahiye',
      native: 'Is needed / is wanted (fixed form, used with mujhe)',
      literal: 'chah- + -iye (a frozen form, no conjugation)',
      emoji: '🙏',
      phonetic: 'CHAA-hi-yay',
      audioRef: null,
    },
    {
      id: 'mujhe_chahiye',
      target: 'मुझे ___ चाहिए — Mujhe ___ chahiye',
      native: 'I need ___ / I want ___ (literally: ___ is needed by me)',
      literal: 'To-me ___ is-needed',
      emoji: '🤲',
      phonetic: 'mu-jhay ... CHAA-hi-yay',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Chahiye vs chahna — two ways to want, two grammars',
    explanation: "Chahna conjugates normally: 'main paani chahta hoon' (I want water — direct). Chahiye is fixed and uses mujhe (to me): 'mujhe paani chahiye' (water is needed by me — softer/politer). Tense in chahiye changes the auxiliary: chahiye (now), chahiye thaa (was needed), chahiye hoga (will be needed). The verb itself doesn't move.",
    examples: [
      { target: 'मुझे पानी चाहिए — Mujhe paani chahiye', native: 'I need water (gentle, polite)' },
      { target: 'मैं घर जाना चाहता हूँ — Main ghar jaana chahta hoon', native: 'I want to go home (active wanting — man speaking)' },
      { target: 'क्या आपको कुछ चाहिए? — Kya aapko kuch chahiye?', native: 'Do you need anything? (polite host question)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the form to its meaning',
      pairs: [
        { left: 'Chahna', right: 'To want (regular verb)' },
        { left: 'Chahiye', right: 'Is needed (fixed form, used with mujhe)' },
        { left: 'Mujhe paani chahiye', right: 'I need water (polite)' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Polite way to ask for chai',
      sentence: 'Mujhe ek chai _____.',
      options: ['chahiye', 'chahta', 'chahti'],
      correct: 'chahiye',
      context: 'Mujhe + object + chahiye = polite "I need/want".',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'I need water',
      correct: ['Mujhe paani chahiye', 'mujhe paani chahiye'],
    },
    {
      type: 'multiple_choice',
      instruction: "What's grammatically strange about 'mujhe paani chahiye'?",
      question: "The subject of the Hindi sentence is:",
      options: [
        { text: 'Paani (water) — chahiye says "is needed BY me"; the experiencer is in the dative (mujhe), not the nominative', correct: true },
        { text: 'Main (I) — same as English', correct: false },
        { text: 'Chahiye is the subject', correct: false },
      ],
      explanation: "Hindi has 'dative-subject' constructions. The thing wanted is the grammatical subject; the wanter takes 'mujhe' (to me). It feels backwards in English but is normal in Hindi.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'I want to go home' (man speaking, using chahna)",
      words: ['Main', 'ghar', 'jaana', 'chahta', 'hoon.'],
      correct: ['Main', 'ghar', 'jaana', 'chahta', 'hoon.'],
      translation: 'I want to go home (man speaking)',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi (polite)',
      prompt: 'Do you need anything? (formal)',
      correct: ['Kya aapko kuch chahiye?', 'kya aapko kuch chahiye?', 'Kya aapko kuch chahiye', 'kya aapko kuch chahiye'],
    },
  ],

  rwenDialogue: {
    intro: "Sunday 11am. You're at Priya's joint family flat. Aunty-ji walks in carrying a tray of biscuits and chai.",
    lines: [
      {
        speaker: 'npc',
        target: 'बेटा, क्या आपको कुछ चाहिए? चाय, बिस्किट, पानी?',
        native: 'Beta, do you need anything? Tea, biscuits, water?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Aunty-ji, mujhe ek chai chahiye, dhanyavaad. Aur main ghar mein paani peena chahta hoon — bahut pyaas hai.', native: 'Aunty-ji, I need one chai, thank you. And I want to drink some water at home — I am very thirsty.', correct: true, feedback: "Both 'chahiye' (mujhe + object) and 'chahta hoon' (main + verb-infinitive + chahta) used in one breath. Two grammars, both natural." },
          { target: 'Main chai chahta hoon', native: 'I want chai (correct but blunter)', correct: false, feedback: "Not wrong — but with elders, 'mujhe chai chahiye' is softer and more accepted. Use chahiye for polite needs." },
          { target: 'Mujhe chai chahta hoon', native: 'Wrong — mixing the two frames', correct: false, feedback: "Either 'main + chahta hoon' OR 'mujhe + chahiye' — never mix. With aunty-ji, go with 'mujhe chai chahiye'." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Two ways to want. Mujhe X chahiye for soft needs. Main X chahta/chahti hoon for active wants. Both at the same dinner table.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I need water (polite)', correct: ['Mujhe paani chahiye', 'mujhe paani chahiye'] },
      { prompt: 'I want to go home (man speaking)', correct: ['Main ghar jaana chahta hoon', 'main ghar jaana chahta hoon'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Today, ask for something with 'Mujhe ___ chahiye'. Coffee, time, sleep, anything. Then ask for something else with 'Main ___ chahta/chahti hoon'. Feel the difference between the two grammars in your own mouth.",
    rwenSignoff: "Want what you want. Need what you need. Hindi has a verb for each. Phir milenge.",
  },

  phase8: {
    scenario: "Tuesday lunchtime at the office canteen. The canteen-uncle behind the counter is taking orders quickly — there's a line behind you. You need to order what you need (mujhe + chahiye for the food items: roti, dal, sabzi, lassi), then turn to your colleague Anjali and say what you actually want to eat tomorrow ('main kal X khaana chahta/chahti hoon' — using chahna with infinitive). Two grammars side by side under time pressure.",
    rwenRole: "Canteen-uncle — busy, brisk, friendly aap-register. Anjali — colleague, peer 'tum'. The contrast forces you to switch frames mid-conversation.",
    successCriteria: "User uses 'Mujhe ___ chahiye' for at least two items at the counter. Switches to 'Main ___ khaana chahta/chahti hoon' when telling Anjali what they want to eat tomorrow. Doesn't mix the two frames (no 'mujhe X chahta hoon'). Stays formal with the canteen-uncle, casual with Anjali.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
