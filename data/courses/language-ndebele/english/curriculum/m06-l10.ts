import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l10',
  module: 6,
  lesson: 10,
  title: 'Edokotela — A Full Health Conversation',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Module 6 finale. We string together everything: greeting, naming the symptom, asking for medicine, getting directions, thanking. One full conversation at the clinic — the kind you might actually have in Bulawayo. No new vocabulary; just stitching the threads.",
    culturalNote: "A typical Ndebele clinic visit involves a long wait and a SHORT consultation. Nurses and doctors often handle dozens of patients per session — efficiency in the conversation is appreciated. Greet, state your symptoms specifically, follow instructions, thank, leave. Long apologies or self-deprecation slow things down for everyone behind you.",
  },

  chunks: [
    {
      id: 'salibonani_dokotela',
      target: 'Salibonani dokotela.',
      native: 'Hello doctor.',
      literal: 'Salibonani + dokotela (drop the "i-" when addressing directly)',
      emoji: '👋',
      phonetic: 'sah-lee-boh-NAH-nee doh-koh-TEH-lah',
      audioRef: null,
    },
    {
      id: 'sukela_izinsuku',
      target: 'Sukela izinsuku ezimbili.',
      native: 'Since two days ago.',
      literal: 'sukela (starting from) + izinsuku (days) + ezimbili (two)',
      emoji: '📅',
      phonetic: 'soo-KEH-lah ee-zin-SOO-koo eh-zim-BEE-lee',
      audioRef: null,
    },
    {
      id: 'phuza_amaphilisi',
      target: 'Phuza amaphilisi la izikhathi ezintathu ngosuku.',
      native: 'Take these tablets three times a day.',
      literal: 'phuza (drink/take) + amaphilisi la (these pills) + izikhathi ezintathu (three times) + ngosuku (per day)',
      emoji: '💊',
      phonetic: 'POO-zah ah-mah-pee-LEE-see lah ee-zee-KAH-tee eh-zin-TAH-too n-goh-SOO-koo',
      audioRef: null,
    },
    {
      id: 'sala_kuhle_dokotela',
      target: 'Sala kuhle, dokotela.',
      native: 'Stay well, doctor. (= Goodbye)',
      literal: 'sala (stay) + kuhle (well) — said by the one leaving',
      emoji: '🙏',
      phonetic: 'SAH-lah KOO-hleh',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Stitching a clinic visit',
    explanation: "A full Ndebele health conversation has the same shape every time: 1) Greet (Salibonani). 2) State the symptom specifically (Ngiphethwe yi-X / [part] sami sibuhlungu). 3) State the duration (sukela izinsuku ezi-X). 4) Listen for instructions. 5) Confirm and thank (ngiyabonga). 6) Close (Sala kuhle). Skip steps and you'll either feel rushed or rude — the structure is the politeness.",
    examples: [
      { target: 'Salibonani — ngiphethwe yikhanda.', native: 'Hello — I have a headache.' },
      { target: 'Sukela izinsuku ezimbili.', native: 'Since two days ago.' },
      { target: 'Ngiyabonga, sala kuhle.', native: 'Thank you, goodbye.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each conversation step to its phrase',
      pairs: [
        { left: 'Greet doctor', right: 'Salibonani dokotela.' },
        { left: 'State headache', right: 'Ngiphethwe yikhanda.' },
        { left: 'State duration (2 days)', right: 'Sukela izinsuku ezimbili.' },
        { left: 'Close warmly', right: 'Sala kuhle, dokotela.' },
      ],
    },
    {
      type: 'translate',
      instruction: 'Type the full opening line in isiNdebele',
      prompt: 'Hello doctor — I have a headache.',
      correct: [
        'Salibonani dokotela, ngiphethwe yikhanda',
        'Salibonani dokotela, ngiphethwe yikhanda.',
        'salibonani dokotela, ngiphethwe yikhanda',
      ],
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Take these tablets three times a day"',
      words: ['amaphilisi', 'la', 'Phuza', 'izikhathi', 'ezintathu', 'ngosuku.'],
      correct: ['Phuza', 'amaphilisi', 'la', 'izikhathi', 'ezintathu', 'ngosuku.'],
      translation: 'Take these tablets three times a day.',
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the right closing',
      question: "The doctor finishes prescribing. You stand to leave. What's the cleanest close?",
      options: [
        { text: 'Ngiyabonga, sala kuhle dokotela.', correct: true },
        { text: 'OK, bye.', correct: false },
        { text: 'Ngiyagula.', correct: false },
      ],
      explanation: "Thank + 'sala kuhle' (stay well, said by the one leaving). 'Hamba kuhle' (go well) is what STAYS-people say to GOERS. So in this case YOU are the goer — you say 'sala kuhle' to the doctor.",
    },
  ],

  rwenDialogue: {
    intro: "Your full clinic visit. Greet, name the symptom, state duration, accept the prescription, close cleanly. You've done every piece in the last nine lessons — now stitch them together.",
    lines: [
      {
        speaker: 'npc',
        target: 'Salibonani. Ngingakusiza?',
        native: 'Hello. Can I help you?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Salibonani dokotela. Ngiphethwe yikhanda.', native: 'Hello doctor. I have a headache.', correct: true, feedback: "Greet + symptom — exactly the right opening." },
          { target: 'Ngiphethwe yikhanda.', native: '(no greeting)', correct: false, feedback: "Greeting first is non-negotiable except in real emergencies. Add 'Salibonani dokotela'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sekuyizinsuku ezingaki?',
        native: 'For how many days now?',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Sukela izinsuku ezimbili.', native: 'Since two days ago.', correct: true, feedback: "Specific duration. He'll know it's not chronic — likely a tablet course." },
          { target: 'Long time.', native: '(English, vague)', correct: false, feedback: "Try the Ndebele duration: 'Sukela izinsuku ezimbili'." },
        ],
      },
      {
        speaker: 'npc',
        target: 'Phuza amaphilisi la izikhathi ezintathu ngosuku — ulalele kahle ebusuku.',
        native: 'Take these tablets three times a day — and sleep well at night.',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'Ngiyabonga dokotela, sala kuhle.', native: 'Thank you doctor, goodbye.', correct: true, feedback: "Thank, close, leave. That's the full arc — module 6 stitched into ONE working conversation." },
          { target: 'Ngiyabonga, hamba kuhle.', native: 'Thank you, go well. (wrong direction)', correct: false, feedback: "You're the one leaving — say 'sala kuhle' (stay well). 'Hamba kuhle' is for the person staying to say to YOU." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Six lessons of body, four lessons of healing — woven into one conversation. You can walk into any clinic in Bulawayo now and hold your own.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Hello doctor.', correct: ['Salibonani dokotela', 'Salibonani dokotela.', 'salibonani dokotela'] },
      { prompt: 'Since two days ago.', correct: ['Sukela izinsuku ezimbili', 'Sukela izinsuku ezimbili.', 'sukela izinsuku ezimbili'] },
      { prompt: 'Stay well, doctor. (= Goodbye)', correct: ['Sala kuhle dokotela', 'Sala kuhle, dokotela', 'Sala kuhle, dokotela.', 'sala kuhle dokotela'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Run the full conversation in your head — out loud if you can. You walk in, greet, name a symptom, give a duration, thank the doctor, leave. Don't memorise — RUN it, with pauses, like a real visit. Three full passes.",
    rwenSignoff: "Module six closed. Body, illness, medicine, wellness — all in your isiNdebele. Sala kuhle, mfowethu.",
  },

  phase8: {
    scenario: "Final Module 6 challenge: a real clinic visit in Bulawayo. You've had a sore throat and mild fever for three days. You greet the doctor, describe the symptoms, give the duration, listen to her instructions, ask one clarifying question (e.g., 'with food or without?'), thank her, and leave properly.",
    rwenRole: "Dr Moyo, ~50, clipped and professional — she sees twenty patients a morning. She'll respect crisp, specific isiNdebele and gently push back if you wander into vague language.",
    successCriteria: "User runs the full six-step arc in isiNdebele: 1) Salibonani greeting, 2) specific symptom statement (umphimbo / umkhuhlane / ukukhwehlela), 3) duration with 'sukela izinsuku ezi-X', 4) one follow-up question to her, 5) ngiyabonga, 6) sala kuhle close. Module passes if at least five of six steps land cleanly in isiNdebele.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
