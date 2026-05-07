import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm10-l03-fear-worry',
  module: 10,
  lesson: 3,
  title: 'Fear & Worry — डर और चिंता',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "डर: 'I'm scared' (तुरंत डर) या 'I'm afraid' (formal)। चिंता: 'I'm worried about ___' (कुछ चलता रहता)। 'Don't worry' दिलासा।",
    culturalNote: "Indian families में चिंता एक कला है — माँ-बाप हमेशा कुछ-न-कुछ चिंतित। 'बेटी की शादी', 'बेटे का career', 'मेरी सेहत' — हर कोई किसी और की चिंता करता। English में 'I'm worried about my mother's health' = सीधी बात। 'Don't worry' सिर्फ़ कहना काफ़ी नहीं — 'we'll figure it out together' (साथ हल करेंगे) जोड़ें ताकि असल दिलासा मिले।",
  },

  chunks: [
    {
      id: 'im_scared',
      target: "I'm scared",
      native: 'मुझे डर लगा है',
      literal: 'Mujhe dar laga hai',
      emoji: '😨',
      phonetic: 'aym-SKAYRD',
      audioRef: null,
    },
    {
      id: 'worried_about',
      target: "I'm worried about...",
      native: 'मुझे ___ की चिंता है',
      literal: 'Mujhe ki chinta hai',
      emoji: '😟',
      phonetic: 'aym-WUH-reed-uh-BOWT',
      audioRef: null,
    },
    {
      id: 'dont_worry',
      target: "Don't worry",
      native: 'चिंता मत करो',
      literal: 'Chinta mat karo',
      emoji: '🤝',
      phonetic: 'DOHNT-WUH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Fear vs worry — present moment vs ongoing',
    explanation: "'I'm scared' = अभी डर (तुरंत)। 'I'm worried about ___' = चिंता चलती रहती (आने वाला कुछ)। 'Of' scared के साथ ('scared OF dogs)। 'About' worried के साथ ('worried ABOUT my mother')।",
    examples: [
      { target: "I'm scared of flying.",                              native: 'Plane से डर लगता है।' },
      { target: "I'm worried about my mother's health.",              native: 'माँ की सेहत की चिंता है।' },
      { target: "Don't worry — we'll figure it out together.",        native: 'चिंता मत करो — साथ हल करेंगे।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: "I'm scared",            right: 'डर लगा है' },
        { left: "I'm worried about",      right: 'की चिंता' },
        { left: "Don't worry",            right: 'चिंता मत करो' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'माँ की सेहत की चिंता है।',
      correct: ["I'm worried about my mother's health.", "I am worried about my mother's health.", "I'm worried about my mum's health.", "i'm worried about my mother's health."],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें — दोस्त को दिलासा',
      prompt: 'चिंता मत करो — साथ हल करेंगे।',
      correct: ["Don't worry — we'll figure it out together.", "Don't worry, we'll figure it out together.", "Don't worry — we will figure it out together.", "don't worry — we'll figure it out together."],
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य: 'I'm worried about my job'",
      words: ['my', "I'm", 'worried', 'job.', 'about'],
      correct: ["I'm", 'worried', 'about', 'my', 'job.'],
      translation: 'नौकरी की चिंता',
    },
    {
      type: 'fill_blank',
      instruction: "'of' और 'about' सही",
      sentence: "I'm scared _____ flying, but I'm worried _____ missing the meeting more.",
      options: ['of / about', 'about / of', 'on / in'],
      correct: 'of / about',
      context: "'Scared OF' (चीज़) + 'worried ABOUT' (चलती चिंता)। दोनों pair हमेशा साथ।",
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: "दोस्त ने बताया कि नौकरी जाने की चिंता है। सबसे caring जवाब?",
      options: [
        { text: "Don't worry — we'll figure it out together. Tell me more.", correct: true },
        { text: "Don't worry. It's nothing.",                                   correct: false },
        { text: "That's your problem.",                                          correct: false },
      ],
      explanation: "'Don't worry' अकेला feel कम कर सकता। 'We'll figure it out together' से असली support।",
    },
  ],

  rwenDialogue: {
    intro: "Close English-speaking दोस्त video call पर। उसने देखा कि तुम परेशान हो।",
    lines: [
      { speaker: 'npc', target: "You've been quiet today. Is something on your mind?", native: 'आज चुप-चुप हो। मन में कुछ है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yeah, honestly — I'm worried about my mother's health. She hasn't been well, and I'm scared of what the doctor will say.", native: 'हाँ, असल में — माँ की सेहत की चिंता है। तबीयत ठीक नहीं, और doctor क्या कहेगा डर लगता है।', correct: true, feedback: "बढ़िया — 'worried about' (चलती), 'scared of' (तुरंत), reason भी।" },
          { target: "Nothing.", native: 'कुछ नहीं।', correct: false, feedback: "दोस्त ने gently पूछा — honesty दें।" },
          { target: "Maa ki chinta hai.", native: 'माँ की चिंता है।', correct: false, feedback: "हिंदी में — 'I'm worried about my mother' use करें।" },
        ],
      },
      { speaker: 'npc', target: "Don't worry — we'll figure it out together. When's the appointment?", native: 'चिंता मत करो — साथ हल करेंगे। Appointment कब?' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! दिल खोला। Real दोस्ती English में।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे।',
    prompts: [
      { prompt: "I'm worried about (अंग्रेज़ी में)",  correct: ["I'm worried about", "I am worried about", "i'm worried about"] },
      { prompt: "Don't worry (अंग्रेज़ी में)",         correct: ["Don't worry", "Do not worry", "don't worry", "Don't worry."] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "एक चिंता सोचें। Diary में English: 'I'm worried about ___ because ___.' और जोड़ें 'But I'll be okay' या 'But I have ___ to help me.' लिखने से तनाव कम।",
    rwenSignoff: "कल — doctor visit।",
  },

  phase8: {
    scenario: "You're confiding in a close English-speaking friend over coffee. You have a real worry — about a family member's health, your job, or your future. Your friend won't judge. Open up honestly, in English.",
    rwenRole: "Priya, 32, your closest English-speaking friend. Listens without interrupting. Gently asks 'How long has this been going on?' and 'What can I do?'",
    successCriteria: "User uses 'I'm worried about ___' (with 'about' not 'of'). Uses 'I'm scared of ___' or 'I'm scared that ___' for an immediate fear. States the cause clearly. Stays in English (no Hindi-only sentences).",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
  crisisHandoff: true,
};

export default lesson;
