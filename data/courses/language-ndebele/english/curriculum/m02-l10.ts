import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l10',
  module: 2,
  lesson: 10,
  title: 'First Conversation — Putting It Together',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "You've got nine lessons of greeting bricks. Today you stack them. We'll walk a real first encounter from start to finish — Salibonani, the volley, the names, the where-from, the polite goodbye. By the end of this lesson you can hold a full one-minute Ndebele greeting conversation without needing a single English word.",
    culturalNote: "A complete Ndebele first-meeting follows a roughly fixed sequence: greeting (with respect-level chosen), how-are-you volley, names exchanged, origin asked, and a soft close with 'sala/hamba kuhle'. Skipping steps reads as rushed. Doing the whole sequence — even if your grammar is imperfect — reads as serious and respectful. The form matters more than perfect words at this stage.",
  },

  chunks: [
    {
      id: 'kuhle_ukukubona',
      target: 'Kuhle ukukubona',
      native: "It's good to see you",
      literal: 'Good (it is) to see you — natural mid-conversation phrase',
      emoji: '😊',
      phonetic: 'KOO-hleh oo-koo-koo-BOH-nah',
      audioRef: null,
    },
    {
      id: 'sokuyisikhathi',
      target: 'Sokuyisikhathi',
      native: "It's been a while",
      literal: 'It-is-now-time / it has been a long time',
      emoji: '⏳',
      phonetic: 'soh-koo-yee-see-KHAH-tee',
      audioRef: null,
    },
    {
      id: 'kulungile',
      target: 'Kulungile',
      native: 'Alright / okay',
      literal: 'It-is-fine — useful filler/transition',
      emoji: '👌',
      phonetic: 'koo-loon-GEE-leh',
      audioRef: null,
    },
    {
      id: 'kahle_kakhulu',
      target: 'Kahle kakhulu',
      native: 'Very well / very nicely',
      literal: 'Well + very — upgraded "good"',
      emoji: '🌟',
      phonetic: 'KAH-hleh kah-KHOO-loo',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The five-beat first conversation',
    explanation: "Every Ndebele first-meeting beats the same five drums. (1) Greeting — 'Salibonani'. (2) Volley — 'Linjani?' / 'Ngiyaphila, wena?' (3) Names — 'Igama lami ngu...' / 'Ungubani igama lakho?' (4) Origin — 'Uphuma ngaphi?' / 'Ngiphuma e-...'. (5) Soft close — 'Sala/Hamba kuhle, sizabonana'. Get those five beats and you've held a conversation, even if your Ndebele between the beats wobbles.",
    examples: [
      { target: '1. Salibonani.', native: 'Greeting.' },
      { target: '2. Linjani? / Ngiyaphila, ngiyabonga. Wena?', native: 'Volley.' },
      { target: '3. Igama lami nguBowen. Wena, ungubani?', native: 'Names.' },
      { target: '4. Ngiphuma eUK. Wena, uphuma ngaphi?', native: 'Origin.' },
      { target: '5. Kuhle ukukukwazi. Sala kuhle.', native: 'Close.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match conversation beat to phrase',
      pairs: [
        { left: 'Greeting', right: 'Salibonani' },
        { left: 'Volley', right: 'Linjani? / Ngiyaphila' },
        { left: 'Names', right: 'Igama lami ngu...' },
        { left: 'Origin', right: 'Uphuma ngaphi?' },
        { left: 'Close', right: 'Sala kuhle / Hamba kuhle' },
      ],
    },
    {
      type: 'build_sentence',
      instruction: "Build a full intro: 'My name is Bowen. I come from the UK.'",
      words: ['eUK.', 'Igama', 'Ngiphuma', 'lami', 'nguBowen.'],
      correct: ['Igama', 'lami', 'nguBowen.', 'Ngiphuma', 'eUK.'],
      translation: 'My name is Bowen. I come from the UK.',
    },
    {
      type: 'multiple_choice',
      instruction: "You've just met someone, exchanged names and where you're each from, and the conversation is winding down. You're leaving. What's the natural close?",
      question: 'Pick the cleanest close',
      options: [
        { text: 'Kuhle ukukukwazi. Sala kuhle.', correct: true },
        { text: 'Hatshi.', correct: false },
        { text: 'Salibonani.', correct: false },
      ],
      explanation: "'Kuhle ukukukwazi' (nice to have known you) + 'Sala kuhle' (stay well, since you're the one leaving) is the warm five-beat close. 'Salibonani' would re-open the greeting — wrong direction. 'Hatshi' is just 'no'.",
    },
    {
      type: 'translate',
      instruction: 'Type the Ndebele',
      prompt: "It's good to see you",
      correct: ['Kuhle ukukubona', 'kuhle ukukubona'] ,
    },
    {
      type: 'fill_blank',
      instruction: "After 'Linjani?', what do you reply with?",
      sentence: '____, ngiyabonga. Wena?',
      options: ['Ngiyaphila', 'Salibonani', 'Hatshi'],
      correct: 'Ngiyaphila',
      context: 'You\'re mid-conversation with a new acquaintance.',
    },
  ],

  rwenDialogue: {
    intro: "Final test. You're at a small gathering at a Ndebele friend's home in Bulawayo. Their cousin — Thandi, mid-30s — has just sat down next to you. Run the full five-beat conversation with her, start to finish.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salibonani. Linjani?', native: 'Hello. How are you (respectfully)?', correct: true, feedback: "Beats one and two stacked. She smiles back: 'Ngiyaphila, wena?'" },
          { target: 'Sawubona. Unjani?', native: 'Hi. How are you (casual)?', correct: false, feedback: "Workable since you're roughly peers — but 'Salibonani / Linjani' is the safer first-meeting default with someone you've never spoken to." },
          { target: 'Igama lami nguBowen.', native: 'My name is Bowen.', correct: false, feedback: "Skipping the greeting and going straight to names is the classic rush. Greet first, name second." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Ngiyaphila, ngiyabonga. Wena?',
        native: "I'm fine, thank you. And you?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyaphila. Igama lami nguBowen. Wena, ungubani?', native: "I'm fine. My name is Bowen. And you?", correct: true, feedback: "Volley closed and pivoted into names. Smooth. She offers her name: 'NginguThandi.'" },
          { target: 'Yebo.', native: 'Yes.', correct: false, feedback: "She just asked how you are — 'yes' isn't the answer. Volley back with 'Ngiyaphila' before pivoting to names." },
          { target: 'Sala kuhle.', native: 'Goodbye (stay well).', correct: false, feedback: "Way too early to close — you've barely begun." },
        ],
      },
      {
        speaker: 'npc',
        target: 'NginguThandi. Uphuma ngaphi, Bowen?',
        native: "I'm Thandi. Where are you from, Bowen?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiphuma eUK, kodwa manje ngihlala eBulawayo. Wena?', native: "I'm from the UK, but now I live in Bulawayo. And you?", correct: true, feedback: "Origin beat handled with full info AND bounced back. She lights up: 'EBulawayo lami!' — me too!" },
          { target: 'eUK.', native: 'UK.', correct: false, feedback: "Brief and unverbed — adding 'Ngiphuma' makes it a sentence and bouncing 'wena?' keeps the volley alive." },
          { target: 'Hatshi.', native: 'No.', correct: false, feedback: "She asked WHERE you're from, not a yes/no question." },
        ],
      },
      {
        speaker: 'npc',
        target: 'EBulawayo lami! Kuhle.',
        native: "Bulawayo is mine too! Nice.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Kuhle ukukukwazi, Thandi. Sala kuhle.', native: "Nice to have known you, Thandi. Stay well.", correct: true, feedback: "Five-beat conversation, complete. You greeted, volleyed, named, traded origins, and closed with the right direction (you're leaving — she's staying — 'sala kuhle')." },
          { target: 'Hamba kuhle.', native: 'Go well.', correct: false, feedback: "Wrong direction — YOU'RE leaving, she's staying. 'Sala kuhle' is what the leaver says." },
          { target: 'Salibonani.', native: 'Hello.', correct: false, feedback: "Re-opening at the close is the classic mix-up. Greetings don't bookend; they only open." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Five beats. One full Ndebele conversation, English-free. You've graduated Module 2.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'How are you (respectful)?', correct: ['Linjani', 'linjani', 'Linjani?', 'linjani?'] },
      { prompt: 'My name is Bowen', correct: ['Igama lami nguBowen', 'Igama lami nguBowen.', 'igama lami nguBowen', 'Igama lami ngu Bowen'] },
      { prompt: 'Goodbye (you\'re the one leaving)', correct: ['Sala kuhle', 'sala kuhle'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Find ONE Ndebele speaker today (in person, on a call, by voice note) and run all five beats — greeting, volley, names, origins, close. Make mistakes. Notice which beats came easily and which made you freeze. That's your real curriculum.",
    rwenSignoff: "Five beats. One conversation. You're already further than you think. Sala kuhle, mngane.",
  },

  phase8: {
    scenario: "You're at a small braai at a Bulawayo friend's house. A cousin you've never met — Thandi, 32, designer — sits down with you on the back wall. Hold a full first-meeting conversation with her: greeting, volley, names, origins, soft close when you eventually need to leave to greet someone else.",
    rwenRole: "Thandi — 32, friendly, will gently note if you skip a beat or mix up sala/hamba kuhle, but won't switch to English unless you completely freeze. Speaks at moderate pace.",
    successCriteria: "User completes ALL FIVE beats in order: (1) Salibonani / Linjani, (2) Ngiyaphila + wena bounce-back, (3) full name exchange both directions, (4) origin asked AND given both directions, (5) closing with correct 'Sala kuhle' (since user is leaving). No skipped beats. Bonus if user adds 'Kuhle ukukukwazi' before the close.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
