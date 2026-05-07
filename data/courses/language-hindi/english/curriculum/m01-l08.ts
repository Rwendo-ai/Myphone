import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-sab-kaise-hain',
  module: 1,
  lesson: 8,
  title: 'Sab Kaise Hain? — Greeting a Group',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "In an Indian joint family living room, you walk in and there are SEVEN people sitting on the sofas — grandparents, uncles, aunts, cousins. You can't greet them one by one (it'll take ten minutes). And ignoring some is rude. The fix: 'Namaste, sab kaise hain?' — one greeting, the whole room.",
    culturalNote: "In joint families and gatherings, group greetings are normal and expected. Walking in and only greeting the one person you know — your friend's mum, say — and skipping the others is genuinely rude. 'Sab kaise hain?' — 'how is everyone?' — folds the whole room into your hello.",
  },

  chunks: [
    {
      id: 'sab_kaise_hain',
      target: 'सब कैसे हैं?',
      native: 'How is everyone? (group, formal)',
      literal: 'Sab kaise hain — All how are?',
      emoji: '👥',
      phonetic: 'SUB KAY-say HAIN',
      audioRef: null,
    },
    {
      id: 'hum_theek_hain',
      target: 'हम सब ठीक हैं',
      native: 'We are all well',
      literal: 'Hum sab theek hain — We all fine are',
      emoji: '🤲',
      phonetic: 'HUM SUB TEEK HAIN',
      audioRef: null,
    },
    {
      id: 'sabko_namaste',
      target: 'सबको नमस्ते',
      native: 'Hello to everyone',
      literal: 'Sabko namaste — to-all hello',
      emoji: '🌟',
      phonetic: 'SUB-koh nuh-mus-TAY',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Sab + Hum — Everyone / We',
    explanation: "'Sab' (सब) means 'all' or 'everyone'. 'Hum' (हम) means 'we'. They unlock the plural register. You've seen 'main' (I) and 'aap/tum' (you). Now 'hum' (we) and 'sab' (all) complete the picture for greeting and replying as a group.",
    examples: [
      { target: 'Main theek hoon', native: 'I am fine (singular)' },
      { target: 'Hum sab theek hain', native: 'We are all fine (plural reply)' },
      { target: 'Sab kaise hain?', native: 'How is everyone? (asking a group)' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'Sab kaise hain?', right: 'How is everyone?' },
        { left: 'Hum sab theek hain', right: 'We are all well' },
        { left: 'Sabko namaste', right: 'Hello to everyone' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the group greeting',
      sentence: '_____ kaise hain?',
      options: ['Sab', 'Aap', 'Tum'],
      correct: 'Sab',
      context: 'You walk into a living room with six family members.',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'How is everyone? (formal group)',
      correct: ['Sab kaise hain?', 'Sab kaise hain', 'sab kaise hain?', 'sab kaise hain'],
    },
    {
      type: 'multiple_choice',
      instruction: "You arrive at a Sunday family lunch with 10 people in a Mumbai joint family. What is the right greeting?",
      question: 'Choose the correct group greeting',
      options: [
        { text: 'Namaste, sab kaise hain?', correct: true },
        { text: 'Namaste, aap kaise hain? (to one person)', correct: false },
        { text: 'Kaise ho?', correct: false },
      ],
      explanation: "'Sab kaise hain?' folds everyone in at once. Greeting just one person leaves the rest invisible.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build the group greeting',
      words: ['hain?', 'kaise', 'Sab'],
      correct: ['Sab', 'kaise', 'hain?'],
      translation: 'How is everyone?',
    },
    {
      type: 'translate',
      instruction: 'Type in Romanized Hindi',
      prompt: 'We are all well',
      correct: ['Hum sab theek hain', 'hum sab theek hain', 'Hum sab theek hain.', 'hum sab theek hain.'],
    },
  ],

  rwenDialogue: {
    intro: "You walk into Rwen's joint family home for a Sunday lunch. Four family members are sitting in the living room. They all look up at you.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Namaste, sab kaise hain?', native: 'Hello, how is everyone?', correct: true, feedback: "You saw everyone and greeted everyone. The whole room feels respected." },
          { target: 'Namaste, aap kaise hain?', native: 'Hello, how are you? (to one person)', correct: false, feedback: "You greeted one person — the others felt invisible. Use 'sab kaise hain?' to fold everyone in." },
          { target: 'Kya haal hai?', native: "What's up?", correct: false, feedback: "Way too casual for a joint-family Sunday lunch — use the formal 'Namaste, sab kaise hain?'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'हम सब ठीक हैं, अंदर आइए',
        native: 'We are all well, please come inside',
      },
      {
        speaker: 'rwen',
        rwenLine: "You greeted the whole room. That's not just polite — that's how respect works in joint families.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How is everyone? (group greeting)', correct: ['Sab kaise hain?', 'Sab kaise hain', 'sab kaise hain?', 'sab kaise hain'] },
      { prompt: 'We are all well', correct: ['Hum sab theek hain', 'hum sab theek hain', 'Hum sab theek hain.', 'hum sab theek hain.'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "The next time you walk into a room with multiple people, greet the whole room — even just in your head with 'Namaste, sab kaise hain?'. Notice the shift.",
    rwenSignoff: "No one left behind. Phir milenge.",
  },

  phase8: {
    scenario: "It's a Sunday afternoon family gathering at your partner's joint family home in a Pune apartment. You step into the drawing room and there are seven people on sofas — dada-ji and dadi-ji (grandparents), two uncles, an aunt, and a couple of cousins — all looking up at once. You only know your partner's mother by name. The pressure is on to greet the WHOLE room, not just the one face you recognise.",
    rwenRole: "Dada-ji — the family elder anchoring the room, ~75, kind but watching closely to see if you greet everyone or pick favourites.",
    successCriteria: "User opens with 'Namaste, sab kaise hain?' (NOT singular 'aap kaise hain?' which would only address one person), recognises 'Hum sab theek hain' as the group's collective reply, and stays in the inclusive plural form throughout rather than peeling off to greet only the person they know.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
