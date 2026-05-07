import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-onamae',
  module: 1,
  lesson: 6,
  title: 'Onamae wa? — What is Your Name?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You can greet, you can apologise. Now — names. In Japan, you almost never give your given name first. Family name comes first, and you attach 'desu' to make it polite. Tanaka desu. Smith desu. The structure is rigid — and that makes it easy.",
    culturalNote: "Japanese name order is family-name first (Tanaka Hiroshi, never Hiroshi Tanaka). When introducing yourself in business or formal settings, you typically use only your family name + 'desu'. Adding '-san' to someone else's name (Tanaka-san) is essential — never use '-san' about yourself.",
  },

  chunks: [
    {
      id: 'onamae_wa',
      target: 'お名前は？',
      native: 'What is your name? (polite)',
      literal: 'o-namae wa — honourable-name as for...?',
      emoji: '🏷️',
      phonetic: 'oh-NAH-mah-eh wa',
      audioRef: null,
    },
    {
      id: 'watashi_wa_desu',
      target: '私は...です',
      native: 'I am... / My name is...',
      literal: 'watashi wa ... desu — as for me, ... is',
      emoji: '🙋',
      phonetic: 'wah-TAH-shi wa ... dess',
      audioRef: null,
    },
    {
      id: 'san',
      target: 'さん',
      native: '-san (polite suffix for someone else\'s name)',
      literal: 'san — Mr/Ms/Mrs (gender-neutral honorific)',
      emoji: '👤',
      phonetic: 'sahn',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'は (wa) — the topic marker',
    explanation: "'Wa' (は) marks the topic of the sentence — 'as for X'. 'Watashi wa Smith desu' literally means 'as for me, Smith is'. You'll see this everywhere. The topic comes first, then 'wa', then the comment, then 'desu'.",
    examples: [
      { target: '私は (watashi wa)', native: 'As for me...' },
      { target: 'お名前は？(o-namae wa?)', native: 'As for your name? (= what is your name?)' },
      { target: '田中さんは日本人です', native: 'As for Tanaka-san, [he] is Japanese' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the phrase to its meaning',
      pairs: [
        { left: 'お名前は？', right: 'What is your name?' },
        { left: '私は...です', right: 'I am... / My name is...' },
        { left: '田中さん', right: 'Mr/Ms Tanaka' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the introduction',
      sentence: '私_____スミスです',
      options: ['は', 'を', 'の'],
      correct: 'は',
      context: "You're introducing yourself: 'As for me, I am Smith.' Use the topic marker.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'What is your name? (polite)',
      correct: ['o namae wa', 'onamae wa', 'O namae wa', 'Onamae wa'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am Smith" (introducing yourself)',
      words: ['です', '私は', 'スミス'],
      correct: ['私は', 'スミス', 'です'],
      translation: 'I am Smith / My name is Smith',
    },
    {
      type: 'multiple_choice',
      instruction: 'You introduce yourself: "Watashi wa Smith desu." Should you say "Watashi wa Smith-san desu"?',
      question: 'Is "-san" appropriate when speaking about yourself?',
      options: [
        { text: 'No — never use "-san" with your own name; only attach it to other people', correct: true },
        { text: 'Yes — always add "-san" to be polite', correct: false },
        { text: 'Yes, but only in business settings', correct: false },
      ],
      explanation: "'-san' is an honorific you give to OTHERS. Calling yourself '-san' is like calling yourself 'Mr Smith' in English — it sounds odd and slightly arrogant.",
    },
    {
      type: 'translate',
      instruction: 'Type in Romaji',
      prompt: 'I am... (the start of a self-introduction)',
      correct: ['watashi wa', 'Watashi wa', 'watashiwa'],
    },
  ],

  rwenDialogue: {
    intro: "You've just been introduced to a senior colleague at a Tokyo company. The exchange of names happens fast — and it has its own micro-script.",
    lines: [
      {
        speaker: 'npc',
        target: 'はじめまして。お名前は？',
        native: "Pleased to meet you. What is your name?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '私はスミスです。よろしくお願いします', native: 'I am Smith. Please treat me kindly.', correct: true, feedback: "Family name + desu + the closing yoroshiku. Textbook business introduction." },
          { target: '私はスミスさんです', native: 'I am Mr Smith', correct: false, feedback: "Drop the '-san'. You never attach '-san' to yourself — it sounds arrogant. Just 'Smith desu' is correct." },
          { target: 'スミス', native: 'Smith', correct: false, feedback: "Add 'watashi wa ... desu' to make it a polite full sentence — bare 'Smith' is too curt for a first meeting." },
        ],
      },
      {
        speaker: 'npc',
        target: 'スミスさん、よろしくお願いします',
        native: 'Mr/Ms Smith, please treat me kindly',
      },
      {
        speaker: 'rwen',
        rwenLine: "He attached '-san' to your name. You did NOT attach '-san' to your own name. That asymmetry is the entire system in one moment.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'What is your name? (polite)', correct: ['o namae wa', 'onamae wa', 'O namae wa', 'Onamae wa'] },
      { prompt: 'I am... (start of a self-introduction, polite)', correct: ['watashi wa', 'Watashi wa', 'watashiwa'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practise saying 'Watashi wa [your family name] desu' out loud once today. Notice that 'desu' wraps the whole thing in politeness automatically.",
    rwenSignoff: "Yoroshiku, [your-name]-san. Mata ashita.",
  },

  phase8: {
    scenario: "It's mid-afternoon at a Kyoto temple — you're with a small tour group and the temple's caretaker has stopped to chat with foreign visitors near the bell tower. He's asked your name and is curious about who you are. The setting is calm, slightly formal, and you've never met him before; this is both a 'hajimemashite' moment AND a name exchange.",
    rwenRole: "Caretaker-san — Kyoto temple caretaker, ~65, gentle and curious about foreigners learning Japanese; he warms up to anyone who handles the name-exchange politely.",
    successCriteria: "User opens with 'hajimemashite' (first meeting), introduces self with 'watashi wa [family name] desu' WITHOUT attaching '-san' to their own name (key error to avoid), uses 'o-namae wa?' to ask his name back, and addresses him with '-san' once they hear it.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
