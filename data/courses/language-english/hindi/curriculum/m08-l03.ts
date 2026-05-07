import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l03-go-come',
  module: 8,
  lesson: 3,
  title: '"To go" & "to come" — जाना और आना',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "जाना (go) और आना (come) — हिंदी में direct। English में भी पर एक खास बात: 'come' मेज़बान या आप जहाँ हैं वहाँ आना। 'I'm coming' phone पर बहुत common — मतलब 'मैं पहुँच रहा हूँ'।",
    culturalNote: "हिंदी: 'मैं ऑफ़िस जाता हूँ' (going away from here), 'अभी आ रहा हूँ' (coming to you)। English same: 'I go to work', 'Come here'। पर invitation में हमेशा 'come' — 'Come to my house' (मेरे घर आओ)। 'Go to my house' मतलब वो जगह कहीं और है। Phone पर 'I'm coming in 5 minutes' — मतलब 'मैं आपके पास पहुँच रहा हूँ'। यह nuance Indian English speakers कभी miss कर देते।",
  },

  chunks: [
    {
      id: 'i_go_to_work',
      target: 'I go to work.',
      native: 'मैं ऑफ़िस जाता हूँ।',
      literal: 'Main office jaata hoon',
      emoji: '🚶',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'come_here',
      target: 'Come here.',
      native: 'यहाँ आओ।',
      literal: 'Yahaan aao',
      emoji: '👋',
      phonetic: 'KUM-HEER',
      audioRef: null,
    },
    {
      id: 'were_coming',
      target: "We're coming.",
      native: 'हम आ रहे हैं।',
      literal: 'Hum aa rahe hain',
      emoji: '🏃',
      phonetic: 'WEER-KUM-ing',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Go vs Come — Movement verbs',
    explanation: "GO = कहीं और जाना (away from speaker)। COME = आपके या मेज़बान के पास आना। Invitation में हमेशा 'come' use करें। Phone पर 'I'm coming' = 'पहुँच रहा हूँ' — daily life में बहुत काम।",
    examples: [
      { target: 'I go to work.',     native: 'मैं ऑफ़िस जाता हूँ।' },
      { target: 'Come here.',        native: 'यहाँ आओ।' },
      { target: "We're coming.",     native: 'हम आ रहे हैं।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'I go',     right: 'मैं जाता हूँ' },
        { left: 'Come here', right: 'यहाँ आओ' },
        { left: "We're coming", right: 'हम आ रहे हैं' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "'go' या 'come' चुनें",
      sentence: "_____ to my house tonight!",
      options: ['Go', 'Come', 'Make'],
      correct: 'Come',
      context: "Invitation है — आप मेज़बान हैं — 'Come' use करें।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं ऑफ़िस जाता हूँ।',
      correct: ['I go to work.', 'I go to work', "I'm going to work.", 'i go to work.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'हम आ रहे हैं।',
      correct: ["We're coming.", "We're coming", 'We are coming.', 'We are coming', "we're coming."],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "यहाँ आओ"',
      words: ['here.', 'Come'],
      correct: ['Come', 'here.'],
      translation: 'यहाँ आओ',
    },
    {
      type: 'multiple_choice',
      instruction: 'दोस्त call कर रही, आप 5 minute दूर हैं',
      question: '"_____ in five minutes!"',
      options: [
        { text: "I'm coming", correct: true },
        { text: "I'm going", correct: false },
        { text: "I have", correct: false },
      ],
      explanation: "आप उनके पास आ रहे हैं — 'coming'। यही phone पर सबसे common वाक्य।",
    },
  ],

  rwenDialogue: {
    intro: "London Bridge पर दोस्त से Saturday मिलने का plan कर रहे।",
    lines: [
      { speaker: 'npc', target: "Hey, where shall we meet on Saturday?", native: 'अरे, Saturday कहाँ मिलें?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'll go to London Bridge at 2pm. Can you come at the same time?", native: 'मैं 2 बजे London Bridge जाऊँगा। आप उसी समय आ सकती हैं?', correct: true, feedback: "बढ़िया — 'go' अपने लिए, 'come' दोस्त के लिए (वो आपके पास आ रही है) — सही use।" },
          { target: "I'll come to London Bridge. Can you go there?", native: 'मैं London Bridge आऊँगा। आप वहाँ जा सकती हैं?', correct: false, feedback: "उल्टा! आप वहाँ जा रहे, 'go' use करें। दोस्त भी 'come' (आ रही)।" },
        ],
      },
      { speaker: 'npc', target: "Sounds good — I'll see you at 2!", native: 'अच्छा — 2 बजे मिलते!' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Invitation = 'come' हमेशा।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'I go to work (अंग्रेज़ी में)', correct: ['I go to work', 'I go to work.', "I'm going to work", "I'm going to work.", 'i go to work.'] },
      { prompt: 'Come here (अंग्रेज़ी में)', correct: ['Come here', 'Come here.', 'come here.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज दो बार 'go' और दो बार 'come' use करें: 'I go to the shop', 'Come to my house', 'I'm going home', 'Come with me'।",
    rwenSignoff: "कल — 'want' और 'need'।",
  },

  phase8: {
    scenario: "You're using WhatsApp with a London colleague to plan a lunch meeting. Use 'go' and 'come' to negotiate a clear meeting place.",
    rwenRole: "Priya, 29, working at a marketing agency in London. Wants to meet for lunch — you're in different parts of the city.",
    successCriteria: "Student uses 'go' (I'll go to ___) and 'come' (can you come to ___) appropriately, distinguishes places clearly, and reaches a clear decision.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
