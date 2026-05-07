import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l02-do-make',
  module: 8,
  lesson: 2,
  title: '"To do" & "to make" — करना और बनाना',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "हिंदी में 'करना' एक verb से पूरा काम होता है — चाहे homework हो या चाय। English में दो हैं: 'do' और 'make'। तय करें — कुछ कर रहे हैं या नया बना रहे हैं?",
    culturalNote: "हिंदी का 'करना' सब समेटता है — 'खाना बनाना', 'काम करना', 'गलती करना'। English में distinction है: DO = काम जो already exist (homework, dishes, work)। MAKE = नया बनाना (tea, plan, mistake, sandwich)। शुरू में confusion होती है — 'I made my homework' सुनने में natural लगता पर ग़लत है ('I did my homework')। यह distinction भी बहुत practice से आती है।",
  },

  chunks: [
    {
      id: 'i_do_my_homework',
      target: 'I do my homework.',
      native: 'मैं अपना homework करता हूँ।',
      literal: 'Main apna homework karta hoon',
      emoji: '📚',
      phonetic: 'ay-DOO-may-HOHM-werk',
      audioRef: null,
    },
    {
      id: 'she_makes_tea',
      target: 'She makes tea.',
      native: 'वो चाय बनाती है।',
      literal: 'Wo chai banaati hai',
      emoji: '🍵',
      phonetic: 'shee-MAYKS-TEE',
      audioRef: null,
    },
    {
      id: 'dont_worry',
      target: "Don't worry.",
      native: 'चिंता मत करो।',
      literal: 'Chinta mat karo',
      emoji: '🙏',
      phonetic: 'DOHNT-WUH-ree',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Do vs Make',
    explanation: "DO = काम जो already exist: do work, do homework, do dishes, do exercise। MAKE = नया बनाना: make tea, make a sandwich, make a plan, make a mistake। 'Don't' = 'do not' का short — auxiliary में 'do' use होता।",
    examples: [
      { target: 'I do my homework.',  native: 'Homework करता हूँ।' },
      { target: 'She makes tea.',     native: 'चाय बनाती है।' },
      { target: "Don't worry.",       native: 'चिंता मत करो।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'do homework',  right: 'homework करना' },
        { left: 'make tea',     right: 'चाय बनाना' },
        { left: "don't worry",  right: 'चिंता मत करो' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "'do' या 'make' चुनें",
      sentence: 'I _____ a sandwich for lunch.',
      options: ['do', 'make', 'am'],
      correct: 'make',
      context: "Sandwich बना रहे हैं — 'make'।",
    },
    {
      type: 'fill_blank',
      instruction: "'do' या 'make' चुनें",
      sentence: 'I _____ the dishes after dinner.',
      options: ['do', 'make', 'have'],
      correct: 'do',
      context: "Dishes धोना — चीज़ें already हैं, 'do' use करें।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'वो चाय बनाती है।',
      correct: ['She makes tea.', 'She makes tea', 'He makes tea.', 'He makes tea'],
    },
    {
      type: 'build_sentence',
      instruction: 'वाक्य बनाएँ: "मैं homework करता हूँ"',
      words: ['homework.', 'do', 'I', 'my'],
      correct: ['I', 'do', 'my', 'homework.'],
      translation: 'मैं अपना homework करता हूँ',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'चिंता मत करो।',
      correct: ["Don't worry.", "Don't worry", "Do not worry.", "do not worry."],
    },
  ],

  rwenDialogue: {
    intro: "BPO ऑफिस में हैं। Manager काम के बारे में पूछ रहा है।",
    lines: [
      { speaker: 'npc', target: "Morning! What are you working on today?", native: 'सुप्रभात! आज क्या काम है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I do payroll in the morning, then I make the monthly reports.", native: 'सुबह payroll करता हूँ, फिर monthly reports बनाता हूँ।', correct: true, feedback: "बढ़िया — 'do payroll' (process), 'make reports' (नया content)।" },
          { target: "I make payroll, then I do the reports.", native: 'मैं payroll बनाता हूँ, फिर reports करता हूँ।', correct: false, feedback: "उल्टा! 'Payroll' process है — 'DO payroll'। 'Reports' लिख रहे हो — 'MAKE reports'।" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! 'Do' = process, 'Make' = create। हिंदी का 'करना' English में दो हो जाता।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'I do my homework (अंग्रेज़ी में)', correct: ['I do my homework', 'I do my homework.', 'i do my homework.'] },
      { prompt: 'She makes tea (अंग्रेज़ी में)', correct: ['She makes tea', 'She makes tea.', 'He makes tea', 'He makes tea.', 'she makes tea.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज एक काम के बारे में बोलें: 'I do' या 'I make'। 'I do the laundry', 'I make breakfast', 'I do my emails', 'I make a plan'। तय करें — process या नया?",
    rwenSignoff: "कल — go और come।",
  },

  phase8: {
    scenario: "You're on a Zoom call with a UK colleague who's curious about your daily work. Describe your routine using 'do' and 'make' correctly.",
    rwenRole: "Sarah, 28, project manager in London. Wants to understand your day — takes notes, asks lots of questions.",
    successCriteria: "User uses 'do' (do payroll, do reports, do work) and 'make' (make plans, make calls, make decisions) with the right distinction. Doesn't confuse the two.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
