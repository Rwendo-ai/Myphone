import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm09-l02-forward-back',
  module: 9,
  lesson: 2,
  title: 'Mberi & Shure — Forward & Back',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Two of the most essential direction words in any language — forward and back. In Shona they're mberi (forward/ahead) and shure (behind/back). But notice: mberi also means 'the future'. Shona places the future in front of you.",
    culturalNote: "In Shona thought, the future is mberi — ahead, in front. The past is shure — behind. This is actually different from some African languages where the past is ahead (it's known, you can see it) and the future is behind (unknown, unseen). Shona is forward-looking.",
  },

  chunks: [
    {
      id: 'mberi',
      target: 'Mberi',
      native: 'Forward / Ahead / Future',
      literal: 'In front / Before',
      emoji: '⬆️',
      phonetic: 'MBE-ri',
      audioRef: null,
    },
    {
      id: 'shure',
      target: 'Shure',
      native: 'Behind / Back / Past',
      literal: 'Behind / After',
      emoji: '⬇️',
      phonetic: 'SHU-re',
      audioRef: null,
    },
    {
      id: 'enda_mberi',
      target: 'Enda mberi',
      native: 'Go forward / Continue ahead',
      literal: 'Go ahead',
      emoji: '🚶⬆️',
      phonetic: 'EN-da MBE-ri',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Enda + direction = go that way',
    explanation: "'Enda' (go) + direction word = movement instruction. Enda mberi (go forward), Enda shure (go back), Enda kurudyi (go right), Enda kuruboshwe (go left). One verb, all directions.",
    examples: [
      { target: 'Enda mberi', native: 'Go forward' },
      { target: 'Dzorera shure', native: 'Go back / Return' },
      { target: 'Uri mberi kwangu', native: 'You are ahead of me' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the direction to its meaning',
      pairs: [
        { left: 'Mberi', right: 'Forward / Ahead' },
        { left: 'Shure', right: 'Behind / Back' },
        { left: 'Enda mberi', right: 'Go forward' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Tell someone to go forward',
      sentence: 'Enda _____ — musika uri kure zvishoma.',
      options: ['mberi', 'shure', 'pano'],
      correct: 'mberi',
      context: 'Go forward — the market is a little far.',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Go forward',
      correct: ['Enda mberi', 'enda mberi'],
    },
    {
      type: 'multiple_choice',
      instruction: "'Mberi' means forward — but what else does it mean in Shona?",
      question: 'Mberi also means:',
      options: [
        { text: 'The future', correct: true },
        { text: 'The past', correct: false },
        { text: 'The present', correct: false },
      ],
      explanation: "Mberi = forward AND future. In Shona, the future is ahead of you — forward. 'Ramangwana rinobva kumashure' (the future comes from behind) is a proverb that challenges this.",
    },
    {
      type: 'build_sentence',
      instruction: "Build 'Continue forward, then stop'",
      words: ['Enda', 'mberi,', 'wobva', 'wamira.'],
      correct: ['Enda', 'mberi,', 'wobva', 'wamira.'],
      translation: 'Go forward, then stop',
    },
    {
      type: 'translate',
      instruction: 'Type in Shona',
      prompt: 'Behind / Back',
      correct: ['Shure', 'shure'],
    },
  ],

  rwenDialogue: {
    intro: "You're following directions. The person told you to go forward. Confirm.",
    lines: [
      {
        speaker: 'npc',
        target: 'Enda mberi, unomira pane imba huru.',
        native: 'Go forward, you stop at the big house.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ndinzwisisa. Ndinoenda mberi, ndomira pane imba huru. Ndatenda.', native: 'I understand. I go forward, I stop at the big house. Thank you.', correct: true, feedback: "You repeated the directions back — a great confirmation technique. The person nods." },
          { target: 'Ndanzwisisa', native: 'I understand', correct: false, feedback: "Repeat the directions back to confirm — 'Ndinoenda mberi, ndomira pane imba huru. Ndatenda.'" },
          { target: 'Enda mberi', native: 'Go forward', correct: false, feedback: "Confirm you understood — repeat what they said: 'Ndinoenda mberi, ndomira pane imba huru.'" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Repeating directions back is the smartest thing a traveller can do. Confirmed and clear.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Forward / Ahead', correct: ['Mberi', 'mberi'] },
      { prompt: 'Go forward', correct: ['Enda mberi', 'enda mberi'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Walk somewhere today. As you walk, say 'Ndinoenda mberi' (I am going forward). When you stop, say 'Ndamira pano' (I have stopped here). Narrate your movement in Shona.",
    rwenSignoff: "The future is mberi — ahead. Keep walking toward it. Famba zvakanaka.",
  },

  phase8: {
    scenario: "You're walking along Lobengula Avenue in Bulawayo CBD looking for an address. A tuktuk driver pulls up alongside you offering a lift, and you decide to use him as a local guide — telling him to drive you forward toward Joshua Mqabuko Nkomo Street and stop where the bookshop sign is, all in Shona.",
    rwenRole: "Tinashe — tuktuk driver on Lobengula Avenue, mid-20s, sharp and quick on his feet, charges by direction not metre; he genuinely listens to mberi/shure commands and will go past your stop if you don't speak up.",
    successCriteria: "User commands movement with 'Enda mberi' (not the weaker 'Ndinoenda mberi' which describes themselves), uses 'Dzorera shure' or 'Mira pano' clearly when overshooting, and repeats Tinashe's directions back ('Ndinoenda mberi, ndomira pa...') to confirm before he drives off.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
