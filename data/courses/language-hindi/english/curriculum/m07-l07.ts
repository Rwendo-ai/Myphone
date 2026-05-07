import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-mehmaan',
  module: 7,
  lesson: 7,
  title: 'Mehmaan Bhagwan — Hosting an Indian Way',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "There\'s a Sanskrit phrase older than the country: 'atithi devo bhava' — the guest is god. In Indian hosting, you don\'t ask if the guest wants chai. You make it. You don\'t ask if they want food. You serve it. Refusing the second helping isn\'t modesty — it\'s a negotiation.",
    culturalNote: "'Mehmaan' (मेहमान) means guest. The host\'s job is to insist — once, twice, three times. The guest\'s job is often to refuse politely first, then accept on the second or third offer. This dance — 'aur lijiye' (have more) followed by 'bas, bas' (enough, enough) — is hospitality in motion.",
  },

  chunks: [
    {
      id: 'aaiye_baithiye',
      target: 'आइए, बैठिए',
      native: 'Come, sit (formal welcome)',
      literal: 'Aaiye, baithiye — come(polite) sit(polite)',
      emoji: '🚪🪑',
      phonetic: 'AA-i-ye, BAI-thi-ye',
      audioRef: null,
    },
    {
      id: 'kuch_lijiye',
      target: 'कुछ लीजिए',
      native: 'Please have something',
      literal: 'Kuch lijiye — something take(polite)',
      emoji: '🤲',
      phonetic: 'KUCH LEE-ji-ye',
      audioRef: null,
    },
    {
      id: 'aur_lijiye',
      target: 'और लीजिए',
      native: 'Have some more',
      literal: 'Aur lijiye — more take(polite)',
      emoji: '➕🍽️',
      phonetic: 'OUR LEE-ji-ye',
      audioRef: null,
    },
  ],

  pattern: {
    name: '-iye — the polite imperative',
    explanation: "Add '-iye' (इए) to a verb root to make a polite command. 'Aana' (to come) → 'aaiye' (please come). 'Baithna' (to sit) → 'baithiye' (please sit). 'Lena' (to take) → 'lijiye' (please have/take). This is the form you use with elders, guests, strangers — anyone you'd address with 'aap'.",
    examples: [
      { target: 'Aaiye, baithiye', native: 'Please come, please sit' },
      { target: 'Kuch lijiye', native: 'Please have something' },
      { target: 'Pehle chai pijiye', native: 'First please drink chai' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the host phrase to its meaning',
      pairs: [
        { left: 'Aaiye, baithiye', right: 'Come, sit (formal)' },
        { left: 'Kuch lijiye', right: 'Please have something' },
        { left: 'Aur lijiye', right: 'Have some more' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Welcome a guest formally',
      sentence: 'Aaiye, _____.',
      options: ['baithiye', 'jaiye', 'kahiye'],
      correct: 'baithiye',
      context: 'Inviting them in and to sit down.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Have some more',
      correct: ['Aur lijiye', 'aur lijiye'],
    },
    {
      type: 'multiple_choice',
      instruction: 'You\'re hosting an English friend at home. They\'ve had one helping. What\'s the host move?',
      question: 'After their first helping:',
      options: [
        { text: 'Insist with "aur lijiye" — even if they say no first', correct: true },
        { text: 'Wait silently for them to ask for more', correct: false },
        { text: 'Take the plates away immediately', correct: false },
      ],
      explanation: "Indian hosting is active. Saying 'aur lijiye' once isn\'t pushy — it\'s the script. Many Indian guests refuse the first offer out of politeness; offering twice gives them permission to accept.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Please come, please sit"',
      words: ['baithiye', 'Aaiye,'],
      correct: ['Aaiye,', 'baithiye'],
      translation: 'Please come, please sit',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'Please have something',
      correct: ['Kuch lijiye', 'kuch lijiye'],
    },
  ],

  rwenDialogue: {
    intro: "You\'re hosting your English colleague at your home in Pune. He\'s just rung the bell — your turn to play host the Indian way.",
    lines: [
      {
        speaker: 'npc',
        target: 'Hi! Thanks for inviting me.',
        native: 'Hi! Thanks for inviting me.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Aaiye, aaiye! Baithiye. Pehle chai pijiye, phir baat karenge.', native: 'Come, come in! Sit. First have chai, then we\'ll talk.', correct: true, feedback: 'Welcomed warmly, seated him, and led with chai. Textbook Indian host opening.' },
          { target: 'Hi, come in', native: 'Hi, come in', correct: false, feedback: 'Too short for an Indian welcome. Try: "Aaiye, aaiye! Baithiye. Chai pijiye."' },
          { target: 'Khaana ready hai', native: 'The food is ready', correct: false, feedback: 'Skip ahead. Welcome and seat first: "Aaiye, baithiye." Then chai. Food comes later.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Just water, thanks — I had chai earlier.',
        native: 'Just water, thanks — I had chai earlier.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Arre nahi, ek chai zaroor lijiye. Bas thodi si.', native: 'Oh no, definitely have one chai. Just a little.', correct: true, feedback: 'You insisted gently and offered "bas thodi si" (just a little) — the perfect Indian host nudge. He\'ll accept.' },
          { target: 'Okay, water it is', native: 'Okay, water it is', correct: false, feedback: 'In Indian hosting, the first refusal isn\'t always final. Insist warmly: "Ek chai zaroor lijiye, bas thodi si."' },
          { target: 'Nahi to nahi', native: 'No means no', correct: false, feedback: 'Too cold for the role. Offer once more: "Arre, ek chai to lijiye."' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You insisted, he relaxed. The Indian host\'s job is to make refusal harder than acceptance. You did it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Come, sit (formal welcome)', correct: ['Aaiye, baithiye', 'aaiye, baithiye', 'Aaiye baithiye', 'aaiye baithiye'] },
      { prompt: 'Have some more', correct: ['Aur lijiye', 'aur lijiye'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Next time someone visits your space — even briefly — try the Indian sequence: 'Aaiye, baithiye' → offer water/tea → 'aur lijiye' if they accept. Notice how active hosting changes the room.",
    rwenSignoff: "Atithi devo bhava — the guest is god. Insist accordingly. Phir milenge.",
  },

  phase8: {
    scenario: "Your English colleague Tom has just arrived at your Pune flat for dinner — his first time at an Indian home. He\'s standing awkwardly at the door wondering whether to take off his shoes, holding a bottle of wine, and clearly waiting for cues. You\'re the host now.",
    rwenRole: "Tom — late 30s English colleague, polite but unfamiliar with Indian hospitality conventions; he\'ll happily say 'no thanks' to chai out of politeness and assume you\'ll take it at face value.",
    successCriteria: "User runs the host sequence in order: 'Aaiye, baithiye' to welcome and seat, offers chai/water with 'kuch lijiye' or 'chai pijiye', insists at least once when Tom politely declines (using 'zaroor lijiye' or similar), and offers 'aur lijiye' for a second helping during the meal — NOT taking his first refusal as final.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
