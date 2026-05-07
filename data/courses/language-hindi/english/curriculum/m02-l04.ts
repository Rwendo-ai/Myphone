import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-angrezi-bolte-hain',
  module: 2,
  lesson: 4,
  title: 'Angrezi Bolte Hain? — Do You Speak English?',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "India runs on code-switching — Hindi, English, regional languages all braided together in one sentence. But when you're stuck, knowing how to ask 'do you speak English?' in Hindi is itself a sign of effort. People reward the effort with patience.",
    culturalNote: "In urban India, English is widely spoken — but not universally, and the further you get from major cities, the patchier it becomes. Asking 'kya aap angrezi bolte hain?' in Hindi flips the politeness script: you're trying their language first. Most people will either answer in English with a smile or slow their Hindi down to help you. Pure-English-from-the-start can feel demanding, especially with a chai-walla, an auto driver, or a security guard.",
  },

  chunks: [
    {
      id: 'angrezi_bolte_hain',
      target: 'क्या आप अंग्रेज़ी बोलते हैं?',
      native: 'Do you speak English?',
      literal: 'Kya aap angrezi bolte hain — Q-marker you English speak (formal)',
      emoji: '🗣️',
      phonetic: 'kya AAP an-GREZ-ee BOL-te hain',
      audioRef: null,
    },
    {
      id: 'thoda_thoda',
      target: 'थोड़ा-थोड़ा',
      native: 'A little / a bit',
      literal: 'Thoda-thoda — little-little',
      emoji: '🤏',
      phonetic: 'THO-daa THO-daa',
      audioRef: null,
    },
    {
      id: 'main_seekh_raha',
      target: 'मैं हिंदी सीख रहा हूँ',
      native: "I'm learning Hindi",
      literal: 'Main hindi seekh raha hoon — I Hindi learning am (male)',
      emoji: '📚',
      phonetic: 'main HIN-dee SEEKH ra-haa hoon',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Kya — the question marker',
    explanation: "'Kya' at the start of a sentence turns it into a yes/no question. The rest of the sentence stays in normal order — you don't flip it like English does. 'Aap angrezi bolte hain' = 'You speak English'. 'Kya aap angrezi bolte hain?' = 'Do you speak English?' One word, statement to question.",
    examples: [
      { target: 'आप अंग्रेज़ी बोलते हैं (Aap angrezi bolte hain)', native: 'You speak English' },
      { target: 'क्या आप अंग्रेज़ी बोलते हैं? (Kya aap angrezi bolte hain?)', native: 'Do you speak English?' },
      { target: 'क्या आप समझते हैं? (Kya aap samajhte hain?)', native: 'Do you understand?' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'क्या आप अंग्रेज़ी बोलते हैं? (Kya aap angrezi bolte hain?)', right: 'Do you speak English?' },
        { left: 'थोड़ा-थोड़ा (Thoda-thoda)', right: 'A little' },
        { left: 'मैं हिंदी सीख रहा हूँ (Main hindi seekh raha hoon)', right: "I'm learning Hindi" },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Turn the statement into a question',
      sentence: '_____ आप अंग्रेज़ी बोलते हैं?',
      options: ['क्या (Kya)', 'कौन (Kaun)', 'कहाँ (Kahaan)'],
      correct: 'क्या (Kya)',
      context: "You're asking an auto driver in Mumbai if he speaks English.",
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'Do you speak English?',
      correct: ['क्या आप अंग्रेज़ी बोलते हैं?', 'Kya aap angrezi bolte hain?', 'kya aap angrezi bolte hain', 'kya aap angrezi bolte hain?'],
    },
    {
      type: 'multiple_choice',
      instruction: "An auto driver asks 'angrezi aati hai?' (do you know English?). Your Hindi is shaky and your English is fluent. What's the honest, friendly reply?",
      question: 'Choose the best response',
      options: [
        { text: 'हाँ। मैं हिंदी सीख रहा हूँ। (Haan. Main hindi seekh raha hoon.)', correct: true },
        { text: 'थोड़ा-थोड़ा (Thoda-thoda)', correct: false },
        { text: 'क्या आप अंग्रेज़ी बोलते हैं? (Kya aap angrezi bolte hain?)', correct: false },
      ],
      explanation: "'Haan. Main hindi seekh raha hoon' — yes, and I'm learning Hindi — is the friendly truth. It opens the door for him to help you practice. 'Thoda-thoda' would be the answer if he'd asked about YOUR Hindi.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am learning Hindi"',
      words: ['सीख रहा हूँ (seekh raha hoon)', 'मैं (Main)', 'हिंदी (hindi)'],
      correct: ['मैं (Main)', 'हिंदी (hindi)', 'सीख रहा हूँ (seekh raha hoon)'],
      translation: "I'm learning Hindi",
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (Romanized is fine)',
      prompt: 'A little / a bit',
      correct: ['थोड़ा-थोड़ा', 'थोड़ा थोड़ा', 'Thoda-thoda', 'thoda thoda', 'thoda-thoda'],
    },
  ],

  rwenDialogue: {
    intro: "You're at a chai stall near Churchgate station. The chaiwalla is rattling off prices in fast Hindi. Time to flag the language gap honestly.",
    lines: [
      {
        speaker: 'npc',
        target: 'मसाला चाय बीस रुपये, स्पेशल पच्चीस। (Masala chai bees rupaye, special pacchees.)',
        native: 'Masala chai twenty rupees, special twenty-five.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'क्या आप अंग्रेज़ी बोलते हैं? मैं हिंदी सीख रहा हूँ। (Kya aap angrezi bolte hain? Main hindi seekh raha hoon.)', native: 'Do you speak English? I am learning Hindi.', correct: true, feedback: "You asked in his language first AND told him you're learning. He breaks into a grin and slows down." },
          { target: 'अंग्रेज़ी (Angrezi)', native: 'English', correct: false, feedback: "Just saying 'English' is a demand, not a question. Lead with 'kya aap...' to make it a polite ask." },
          { target: 'थोड़ा-थोड़ा (Thoda-thoda)', native: 'A little', correct: false, feedback: "That's the answer to 'do YOU speak Hindi?' — but right now you need to know if HE speaks English. Ask first." },
        ],
      },
      {
        speaker: 'npc',
        target: 'थोड़ा-थोड़ा। आप कोशिश कीजिए, मैं समझूँगा। (Thoda-thoda. Aap koshish kijiye, main samjhoonga.)',
        native: "A little. You try, I will understand.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You asked in Hindi — and got Hindi help in return. That's the trade-off Indian conversation runs on: effort buys patience.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Do you speak English?', correct: ['क्या आप अंग्रेज़ी बोलते हैं?', 'Kya aap angrezi bolte hain?', 'kya aap angrezi bolte hain', 'kya aap angrezi bolte hain?'] },
      { prompt: "I'm learning Hindi (male speaker)", correct: ['मैं हिंदी सीख रहा हूँ', 'Main hindi seekh raha hoon', 'main hindi seekh raha hoon'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practice 'kya aap angrezi bolte hain?' out loud three times today. Then practice 'main hindi seekh raha hoon' — own your learner status.",
    rwenSignoff: "The honest learner gets the warmest help. Phir milenge.",
  },

  phase8: {
    scenario: "You're at the IRCTC counter at New Delhi station trying to confirm a tatkal ticket and the booking clerk is firing questions in Hindi too fast for you to follow. There's a queue of seven people behind you and the clerk's patience is thin. You need to flip the conversation politely without losing your slot.",
    rwenRole: "Mr Yadav — ~50, IRCTC booking clerk, grumpy by default but professional; he speaks decent English but won't volunteer it unless asked properly in Hindi.",
    successCriteria: "User opens with 'Kya aap angrezi bolte hain?' (NOT a cold English demand), follows up with 'Main hindi seekh raha hoon' to acknowledge the language gap honestly, and uses 'thoda-thoda' if he asks how much Hindi they understand — chaining the kya-question pattern with the learner-honesty pattern.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
