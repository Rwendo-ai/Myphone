import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm04-l10-conversation',
  module: 4,
  lesson: 10,
  title: 'Articles in real talk — Conversation capstone',
  estimatedMinutes: 7,
  xpReward: 50,

  hook: {
    rwenLine: "Aapne Module 4 paar kar liya. Ab aap jante hain 'a/an/the', plurals (-s, irregular), 'this/that/these/those', 'some/any', 'much/many'. Aaj ka task: yeh sab ek hi conversation mein use karna.",
    culturalNote: "BPO aur IT industry mein 'article-perfect' English wo skill hai jo Indian agents ko US/UK clients ke samne credible banati hai. Hindi mein gender, postpositions, SOV order — yeh aapki strengths hain. English mein articles, plurals, demonstratives — yeh naye tools hain. Dono ko jaanna matlab dono mein soch sakte ho. Aaj aap show karoge ki aapne Module 4 master kar liya hai.",
  },

  chunks: [
    {
      id: 'morning_flow',
      target: 'I woke up. I had a cup of tea and an idli.',
      native: 'Main utha. Maine ek cup chai aur ek idli li.',
      literal: 'a cup, an idli',
      emoji: '☕',
      phonetic: 'aw-ee-WOHK-up...',
      audioRef: null,
    },
    {
      id: 'work_flow',
      target: 'I went to work. The meeting took three hours. I have many emails.',
      native: 'Main kaam par gaya. Meeting teen ghante chali. Mere paas bahut emails hain.',
      literal: 'no article (work), the (specific meeting), many (countable)',
      emoji: '💼',
      phonetic: 'aw-ee went tu wurk...',
      audioRef: null,
    },
    {
      id: 'evening_flow',
      target: 'I came home. These children are mine. I love my family.',
      native: 'Main ghar aaya. Yeh bachhe mere hain. Main apne parivaar se pyaar karta hoon.',
      literal: 'no article (home), these (close+plural), no article (family)',
      emoji: '🏠',
      phonetic: 'aw-ee kaym-hohm...',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Articles in flowing speech — capstone",
    explanation: "Natural English mein saare elements ek saath chalte hain — 'a/an' nayi cheez ke liye, 'the' specific ke liye, 'no article' general/abstract ke liye, plurals (regular aur irregular), 'this/that' pointing ke liye, 'some/any' offer/question, 'much/many' quantity. Bina soche kar pana — yeh aaj ka chinangwa hai.",
    examples: [
      { target: 'I have two children. The children love music.',  native: 'Mere do bachhe hain. Wo bachhe sangeet pasand karte hain.' },
      { target: 'Some days are hard. This day is good.',          native: 'Kuch din mushkil hote hain. Yeh din accha hai.' },
      { target: 'How much time do you have? I have many tasks.',  native: 'Aapke paas kitna time hai? Mere paas bahut kaam hai.' },
    ],
  },

  exercises: [
    {
      type: 'fill_blank',
      instruction: 'Saare articles bhariye',
      sentence: 'I woke up at 6. I had _____ coffee and _____ apple. _____ apple was sweet.',
      options: ['a / an / The', 'an / a / The', 'the / a / An'],
      correct: 'a / an / The',
      context: 'A coffee (consonant), an apple (vowel), The apple (now specific).',
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye (articles + plurals dhyan se)',
      prompt: 'Mere do bachhe hain. Mere bachhe sangeet pasand karte hain.',
      correct: ['I have two children. My children love music.', 'I have two children. My children love music'],
    },
    {
      type: 'translate',
      instruction: 'English mein likhiye',
      prompt: 'Aapke paas kitna time hai? Mere paas bahut kaam hai.',
      correct: ['How much time do you have? I have a lot of work.', 'How much time do you have? I have much work.', 'How much time do you have? I have many tasks.'],
    },
    {
      type: 'build_sentence',
      instruction: 'Banaiye: "These books on the table are mine"',
      words: ['mine.', 'are', 'on', 'These', 'the', 'books', 'table'],
      correct: ['These', 'books', 'on', 'the', 'table', 'are', 'mine.'],
      translation: 'Yeh kitaabein mez par meri hain',
    },
    {
      type: 'fill_blank',
      instruction: 'much/many chuniye',
      sentence: "I don't have _____ time, but I have _____ ideas.",
      options: ['much / many', 'many / much', 'much / much'],
      correct: 'much / many',
      context: 'Time = uncountable (much). Ideas = countable plural (many).',
    },
    {
      type: 'multiple_choice',
      instruction: 'Sabse natural vakya kaunsa hai?',
      question: 'Choose the most natural full sentence:',
      options: [
        { text: 'I have a brother. The brother lives in Delhi. He has many friends.', correct: true },
        { text: 'I have brother. Brother lives Delhi. He has much friends.', correct: false },
        { text: 'I have the brother. A brother lives in Delhi. He has many friend.', correct: false },
      ],
      explanation: 'A → the (already mentioned), Delhi proper noun (no article), many friends (countable plural). Saare articles ek saath kaam kar rahe hain.',
    },
  ],

  rwenDialogue: {
    intro: "Capstone! Aapko apne IT manager ko poora din describe karna hai — subah se sham tak. Saare articles, plurals, demonstratives, quantifiers — sab ek saath aane chahiye.",
    lines: [
      {
        speaker: 'npc',
        target: "Tell me about your typical workday, from morning to evening.",
        native: 'Apne typical workday ke baare mein batao — subah se sham tak.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I wake up at 6. I have a cup of tea and some toast. I go to work — the office is far. I have many meetings. In the evening I come home. The children are happy to see me. I love my family.", native: '...', correct: true, feedback: "Bahut accha — saare articles kaam kar rahe hain! 'a cup', 'some toast', 'the office', 'many meetings', 'the children', 'my family' (no article). Yeh A2-to-B1 level ki English hai." },
          { target: "I wake up. I have tea and toast. I go to work. I have meetings. I come home. Children are happy. I love family.", native: '...', correct: false, feedback: "Article-drop bahut zyada hai — Indian English ki signature galti. 'A cup of tea', 'some toast', 'the children', 'my family' lagao." },
          { target: "I wake up at 6. I have the cup of tea and the toast. I go to the work. I have the many meetings.", native: '...', correct: false, feedback: "'The' over-use ho gaya. 'A cup' (intro), 'some toast' (uncountable+positive), 'work' (no article), 'many meetings' (no article). 'The' bas specific cheezon ke liye." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Shabaash, Module 4 complete. Articles tab kaam karte hain jab aap soch hi nahi rahe — aur aapne wo level pakad liya. Ab aap English mein soch rahe ho.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'Bina dekhe — capstone recall.',
    prompts: [
      { prompt: 'I have an apple. ___ apple is red. (fill the blank)', correct: ['The', 'the'] },
      { prompt: 'How ___ children do you have? (much/many)', correct: ['many', 'Many'] },
    ],
  },

  mission: {
    title: 'Module 4 Final Mission',
    task: "Apne din ko English mein describe karo — 5-7 lines ki paragraph. Use karo: 'a/an' (intro), 'the' (specific), '-s' plural, irregular plural (children/people), 'this/these', aur 'some/any' ya 'much/many'. Apne ek dost ko WhatsApp par bhej do.",
    rwenSignoff: "Aapne English ka skeleton complete kar liya. Module 5 mein flesh banayenge.",
  },

  phase8: {
    scenario: "Capstone conversation: aap apne IT manager ko apna poora workday describe karte ho — subah ki shuruat, office mein meetings, sham ki ghar wapsi. Articles, plurals, demonstratives, quantifiers — sab natural use karna hai.",
    rwenRole: "Senior IT manager who is genuinely interested in your day — asks follow-ups about colleagues, projects, family, what you do — natural English conversation.",
    successCriteria: "User correctly uses six or more elements from Module 4 in one flowing conversation: a/an, the, no-article (abstract/general), regular or irregular plural, this/that/these/those, some/any or much/many.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
