import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm07-l07-tea-drinks',
  module: 7,
  lesson: 7,
  title: 'Chai, coffee, drinks — चाय, कॉफ़ी',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "चाय भारत की रोज़ की ज़िंदगी है — सुबह की चाय, शाम की चाय, मेहमान की चाय। English में 'tea with milk', 'black coffee', 'a glass of water'। आज हम चाय की बारीकी English में लाएँगे।",
    culturalNote: "Indian चाय दुनिया से अलग है — दूध, चीनी, अदरक, इलायची सब साथ उबलते हैं। UK की 'English tea' में दूध-चीनी अलग add होती है। US में 'iced tea' default है। 'Chai' अब global word है — Starbucks-Costa में 'chai latte' मिलता है, पर वो असली chai नहीं। जब आप UK में 'tea' order करते हैं, वो बिना दूध के आती है — आपको अलग बोलना पड़ता: 'Tea with milk and one sugar, please' (दूध-वाली चाय एक चीनी)। 'Cutting chai' — Mumbai का छोटा glass — international scene में अब सुनाई देता है। आपकी चाय की पहचान English में पहुँचाएँ।",
  },

  chunks: [
    {
      id: 'tea_with_milk',
      target: 'Tea with milk',
      native: 'दूध वाली चाय',
      literal: 'Doodh waali chai',
      emoji: '🍵',
      phonetic: 'TEE-with-MILK',
      audioRef: null,
    },
    {
      id: 'black_coffee',
      target: 'Black coffee',
      native: 'काली कॉफ़ी (बिना दूध)',
      literal: 'Kaali coffee — bina doodh',
      emoji: '☕',
      phonetic: 'BLAK-KOF-ee',
      audioRef: null,
    },
    {
      id: 'glass_of_water',
      target: 'A glass of water',
      native: 'एक गिलास पानी',
      literal: 'Ek gilaas paani',
      emoji: '🥛',
      phonetic: 'a-GLAS-of-WAW-ter',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Drinks — "with" and "of"',
    explanation: "Drinks में दो structures: WITH/WITHOUT — 'tea with milk', 'coffee without sugar'। A ___ OF ___ — 'a glass of water', 'a cup of tea'। Cup, glass, bottle countable हैं — पानी, चाय uncountable।",
    examples: [
      { target: 'Tea with milk, no sugar, please.',  native: 'दूध वाली चाय, बिना चीनी, please।' },
      { target: 'A black coffee, please.',           native: 'काली कॉफ़ी, please।' },
      { target: 'Could I have a glass of water?',    native: 'एक गिलास पानी मिल सकता है?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'पेय मिलाएँ',
      pairs: [
        { left: 'Tea with milk',     right: 'दूध वाली चाय' },
        { left: 'Black coffee',      right: 'काली कॉफ़ी' },
        { left: 'A glass of water',  right: 'एक गिलास पानी' },
      ],
    },
    {
      type: 'translate',
      instruction: "अंग्रेज़ी में लिखें — London cafe, चाय एक चीनी",
      prompt: 'दूध वाली चाय, एक चीनी, please।',
      correct: [
        'Tea with milk, one sugar, please.',
        'A tea with milk, one sugar, please.',
        'Tea with milk and one sugar, please.',
        'tea with milk, one sugar, please.',
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — काली कॉफ़ी',
      prompt: 'काली कॉफ़ी, please।',
      correct: [
        'Black coffee, please.',
        'A black coffee, please.',
        'Black coffee please.',
        'A black coffee please.',
        'black coffee, please.',
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली भरें — restaurant में पानी',
      sentence: 'Could I have a ____ of water, please?',
      options: ['glass', 'cup', 'bottle'],
      correct: 'glass',
      context: "Restaurant में पानी glass में आता है। Cup चाय के लिए, bottle ख़रीदी हुई।",
    },
    {
      type: 'build_sentence',
      instruction: 'चाय का order',
      words: ['milk', 'Tea', 'with', 'please'],
      correct: ['Tea', 'with', 'milk', 'please'],
      translation: 'दूध वाली चाय please',
    },
    {
      type: 'build_sentence',
      instruction: 'पानी का order',
      words: ['water', 'A', 'of', 'glass'],
      correct: ['A', 'glass', 'of', 'water'],
      translation: 'एक गिलास पानी',
    },
  ],

  rwenDialogue: {
    intro: "London के cafe में हैं। Barista से चाय order करें — दूध, एक चीनी।",
    lines: [
      { speaker: 'npc', target: "Hi there, what can I get you?", native: 'नमस्ते, क्या लेंगे?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "A tea with milk and one sugar, please.",  native: 'दूध वाली चाय एक चीनी के साथ, please।', correct: true,  feedback: 'बढ़िया — UK style perfect।' },
          { target: "Tea milk sugar.",                            native: 'चाय दूध चीनी।',                       correct: false, feedback: "'with' और 'and' छूटे — proper sentence बनाएँ।" },
          { target: "I want tea.",                                 native: 'मुझे चाय चाहिए।',                            correct: false, feedback: "OK पर barista पूछेगा 'how do you take it?'। दूध-चीनी add करें।" },
        ],
      },
      { speaker: 'npc', target: "Lovely. That'll be £3.20.", native: 'अच्छा। £3.20 हुए।' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! UK की चाय India जैसी ही — बस English में।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'Tea with milk (अंग्रेज़ी में)', correct: ['Tea with milk', 'Tea with milk.', 'A tea with milk', 'tea with milk'] },
      { prompt: 'A glass of water (अंग्रेज़ी में)', correct: ['A glass of water', 'A glass of water.', 'Glass of water', 'a glass of water'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "जब अगली बार पीने की चीज़ चाहिए, English में बोलें: 'Tea with milk, one sugar' या 'A black coffee' या 'A glass of water'।",
    rwenSignoff: "कल — Indian foods (sadza-style for India): रोटी, थाली, बिरयानी।",
  },

  phase8: {
    scenario: "You walk into a busy cafe near London Bridge on a cold morning. The barista is friendly but rushed. Order a tea with milk and one sugar.",
    rwenRole: "Jess, 24, the barista. London accent, fast-paced. Will ask 'have here or take away?' as a follow-up.",
    successCriteria: "User orders 'tea with milk' and specifies sugar (or 'no sugar'). Uses 'please'. Handles the take-away follow-up.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
