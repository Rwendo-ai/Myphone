import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l01-hidari-migi',
  module: 9,
  lesson: 1,
  title: 'Hidari, Migi, Massugu — Left, Right, Straight',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Tokyo is a maze. Thirteen subway lines, dozens of operators, hundreds of exits per major station — Shinjuku alone has over 200. The single survival skill isn't reading kanji on signs; it's understanding the three words a stranger will use to point you out: hidari, migi, massugu. Left, right, straight. Master these and the city stops being hostile.",
    culturalNote: "Japanese direction-giving is precise and reluctant — strangers won't volunteer help, but if you ask 'Sumimasen' first they'll often walk you partway. Watch the hand: a flat hand chopping forward means massugu (straight), a small flick to one side means that direction. Pointing with one finger is rude; the whole hand or chin is normal.",
  },

  chunks: [
    {
      id: 'hidari_migi',
      target: '左 / 右 (hidari / migi)',
      native: 'Left / Right',
      literal: 'hidari (left), migi (right) — bare nouns, used in direction-giving',
      emoji: '⬅️➡️',
      phonetic: 'hi-DA-ri / MI-gi',
      audioRef: null,
    },
    {
      id: 'massugu',
      target: 'まっすぐ (massugu)',
      native: 'Straight ahead',
      literal: 'massugu — straight, with the tsu (っ) doubling for emphasis',
      emoji: '⬆️',
      phonetic: 'mas-SU-gu',
      audioRef: null,
    },
    {
      id: 'doko_desu_ka',
      target: 'どこですか？ (doko desu ka?)',
      native: 'Where is it?',
      literal: 'doko (where) + desu (is) + ka (question particle)',
      emoji: '❓',
      phonetic: 'DO-ko des-ka',
      audioRef: null,
    },
  ],

  pattern: {
    name: '[Place] wa doko desu ka? — Where is [place]?',
    explanation: "The bedrock direction-asking pattern. [Place] + wa (topic marker) + doko desu ka (where is it). Eki wa doko desu ka — where is the station. The answer comes back with hidari/migi/massugu, often with a hand gesture you should watch as carefully as you listen.",
    examples: [
      { target: 'Eki wa doko desu ka?', native: 'Where is the station?' },
      { target: 'Massugu desu', native: "It's straight ahead" },
      { target: 'Migi desu', native: "It's to the right" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the direction word to its meaning',
      pairs: [
        { left: 'hidari', right: 'Left' },
        { left: 'migi', right: 'Right' },
        { left: 'massugu', right: 'Straight ahead' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Ask where the station is',
      sentence: 'Eki _____ doko desu ka?',
      options: ['wa', 'o', 'ni'],
      correct: 'wa',
      context: 'Where is the station? — wa marks eki (station) as the topic.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'Straight ahead',
      correct: ['massugu', 'Massugu'],
    },
    {
      type: 'multiple_choice',
      instruction: "You ask for a coffee shop and the woman points right with her whole hand. What did she just say?",
      question: 'Direction given:',
      options: [
        { text: 'Migi desu', correct: true },
        { text: 'Hidari desu', correct: false },
        { text: 'Massugu desu', correct: false },
      ],
      explanation: "Migi = right. The flat-hand point in Japan is the polite version of 'over there to the right'.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Where is the toilet?'",
      words: ['wa', 'desu', 'doko', 'toire', 'ka?'],
      correct: ['toire', 'wa', 'doko', 'desu', 'ka?'],
      translation: 'Where is the toilet?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'Where is it?',
      correct: ['doko desu ka', 'Doko desu ka', 'doko desu ka?', 'Doko desu ka?'],
    },
  ],

  rwenDialogue: {
    intro: "You're lost on the upper concourse of Tokyo Station and need the Yamanote Line. You stop a salaryman walking briskly past.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sumimasen, Yamanote-sen wa doko desu ka?', native: 'Excuse me, where is the Yamanote Line?', correct: true, feedback: "Sumimasen opens the door, the wa-doko-desu-ka frame is exactly what he expects. He stops and points." },
          { target: 'Yamanote-sen?', native: 'Yamanote Line?', correct: false, feedback: "A bare noun with rising tone is too curt. Open with 'Sumimasen' and use the full frame: 'Yamanote-sen wa doko desu ka?'" },
          { target: 'Doko Yamanote?', native: 'Where Yamanote?', correct: false, feedback: "Word order matters. Place comes first, then wa-doko-desu-ka: 'Yamanote-sen wa doko desu ka?'" },
        ],
      },
      {
        speaker: 'npc',
        target: 'Massugu itte, migi desu.',
        native: 'Go straight, then right.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Massugu, migi — wakarimashita. Arigatou gozaimasu.', native: 'Straight, right — understood. Thank you.', correct: true, feedback: "Echoing the directions back is the polite confirmation move; the bow comes naturally with 'arigatou gozaimasu'." },
          { target: 'Hai', native: 'Yes', correct: false, feedback: "Too thin. Repeat the directions to confirm: 'Massugu, migi — wakarimashita.'" },
          { target: 'Wakaranai', native: "I don't understand", correct: false, feedback: "He'll repeat if you ask: 'Mou ichido onegaishimasu.' But if you caught it, echo it back instead." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Massugu, migi. Two words and a bow — that's the whole transaction in Tokyo. You just navigated the busiest station on the planet.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Left', correct: ['hidari', 'Hidari'] },
      { prompt: 'Where is it?', correct: ['doko desu ka', 'Doko desu ka', 'doko desu ka?', 'Doko desu ka?'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk somewhere familiar today and narrate the turns out loud in Japanese: 'Massugu... migi... hidari... massugu.' Make the words automatic before you ever need them at Shinjuku.",
    rwenSignoff: "Hidari, migi, massugu. Three words, every city in Japan. Mata ne.",
  },

  phase8: {
    scenario: "You've just come up the stairs from the Marunouchi Line at Tokyo Station and need the Shinkansen ticket gates. A station attendant in white gloves is standing near a pillar with a paper map — you have 90 seconds before your train and you have to ask, in Japanese, where the Shinkansen entrance is and parse her hidari/migi/massugu reply without dropping into English.",
    rwenRole: "Station attendant at Tokyo Station — late 20s, white gloves, polite but mechanical; she'll answer cleanly in Japanese using massugu/migi/hidari with crisp hand gestures, and switch to English only if you give up.",
    successCriteria: "User opens with 'Sumimasen', uses '[place] wa doko desu ka?' frame correctly (NOT bare 'doko Shinkansen'), parses her hidari/migi/massugu answer and echoes it back to confirm ('Massugu, migi — wakarimashita'), and closes with 'arigatou gozaimasu' before walking off.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
