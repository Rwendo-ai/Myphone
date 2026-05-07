import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l04-tasukete-kudasai',
  module: 2,
  lesson: 4,
  title: '助けてください — Help Me, Please',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Asking for help in a language you barely speak is humbling — but in Japan, it's also welcomed. People will go far out of their way for someone who asks politely. 助けてください (tasukete kudasai) opens that door.",
    culturalNote: "There's a quiet code in Japan: the moment someone admits they're stuck, those nearby feel an obligation to help. It's why station staff will walk you to your platform and shopkeepers will pull out their phones to translate. Asking properly — politely, clearly — activates that response. Mumbling or pretending you're fine often gets you left alone.",
  },

  chunks: [
    {
      id: 'tasukete_kudasai',
      target: '助けてください (tasukete kudasai)',
      native: 'Please help me',
      literal: 'Help-and please',
      emoji: '🆘',
      phonetic: 'tas-KEH-teh koo-da-SAI',
      audioRef: null,
    },
    {
      id: 'komatte_imasu',
      target: '困っています (komatte imasu)',
      native: "I'm in trouble / I'm stuck",
      literal: 'Troubled-am',
      emoji: '😣',
      phonetic: 'koh-MAHT-teh ee-mas',
      audioRef: null,
    },
    {
      id: 'chotto_ii_desu_ka',
      target: 'ちょっといいですか？(chotto ii desu ka?)',
      native: 'Got a moment? / Is it okay if I…?',
      literal: 'A-little good is it?',
      emoji: '🤔',
      phonetic: 'CHOH-toh EE dess kah',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Verb-て + ください — polite request',
    explanation: "To ask politely for an action, take the verb's て-form and add ください. 助けて (help-and) + ください (please) = please help. You'll see this same pattern with dozens of verbs: 待って ください (please wait), 教えて ください (please tell me). Lock the shape in now — it powers a third of basic requests.",
    examples: [
      { target: '助けて + ください', native: 'Please help (me)' },
      { target: '待って + ください (matte kudasai)', native: 'Please wait' },
      { target: '教えて + ください (oshiete kudasai)', native: 'Please tell / show me' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: '助けてください', right: 'Please help me' },
        { left: '困っています', right: "I'm stuck" },
        { left: 'ちょっといいですか？', right: 'Got a moment?' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'Politely flag someone before asking for help',
      sentence: 'すみません、ちょっと_____？',
      options: ['いいですか', 'お願いします', 'ありがとう'],
      correct: 'いいですか',
      context: 'You want to interrupt a passer-by gently before asking your question.',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: 'Please help me',
      correct: ['助けてください', 'tasukete kudasai', 'Tasukete kudasai', 'たすけてください'],
    },
    {
      type: 'multiple_choice',
      instruction: "You're at Shinjuku Station, hopelessly lost. Which is the cleanest opener?",
      question: 'Choose the best line',
      options: [
        { text: 'すみません、ちょっといいですか？困っています。', correct: true },
        { text: '助けて！', correct: false },
        { text: 'ありがとう', correct: false },
      ],
      explanation: "Open with すみません to flag, follow with ちょっといいですか to check it's a good moment, then 困っています names the problem. Bare '助けて！' alone reads as panic; ありがとう would thank them before they've helped.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "Please wait a moment"',
      words: ['ちょっと', 'ください', '待って'],
      correct: ['ちょっと', '待って', 'ください'],
      translation: 'Please wait a moment',
    },
    {
      type: 'translate',
      instruction: 'Type in Japanese (Romaji is fine)',
      prompt: "I'm in trouble / I'm stuck",
      correct: ['困っています', 'komatte imasu', 'Komatte imasu', 'こまっています'],
    },
  ],

  rwenDialogue: {
    intro: "You're outside Shinjuku Station's south exit at 22:30. Last train to your hotel left ten minutes ago. Flag a passer-by.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'すみません、ちょっといいですか？', native: 'Excuse me, got a moment?', correct: true, feedback: 'Perfect opener. The man slows, turns, and gives you his full attention.' },
          { target: '助けて！', native: 'Help!', correct: false, feedback: "Bare 助けて with no softener sounds like panic. Lead with すみません, then ちょっといいですか — that's the human-to-human ramp." },
          { target: 'お願いします', native: 'Please', correct: false, feedback: "Too vague — please what? Open with すみません, then say what you need." },
        ],
      },
      {
        speaker: 'npc',
        target: 'はい、どうしましたか？',
        native: "Yes, what's wrong?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: '困っています。助けてください。', native: "I'm stuck. Please help me.", correct: true, feedback: 'Clear, polite, complete. He nods and pulls out his phone to look up your hotel.' },
          { target: '助けて', native: 'Help', correct: false, feedback: 'You have his attention now — finish the request properly with 助けてください.' },
          { target: 'ありがとう', native: 'Thanks', correct: false, feedback: "He hasn't helped yet — wait until after to thank him. State the problem first." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'Politeness in, help out. That\'s the bargain Japan makes with anyone who asks the right way.',
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'Please help me', correct: ['助けてください', 'tasukete kudasai', 'Tasukete kudasai'] },
      { prompt: 'Got a moment? / Is it okay if I…?', correct: ['ちょっといいですか', 'ちょっといいですか？', 'chotto ii desu ka', 'Chotto ii desu ka'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Pick one thing today you\'d normally figure out alone — directions, a recipe, a tool. Practise asking for help out loud in Japanese: "すみません、ちょっといいですか？助けてください。" Feel the politeness ramp.',
    rwenSignoff: 'Asking is strength. また明日.',
  },

  phase8: {
    scenario: "You're trying to use a Japanese-only ATM at a Mizuho Bank branch in Roppongi at lunchtime — the screen is in kanji, you've already cancelled twice, and the woman behind you in the queue is glancing at her watch. You need to ask for help without holding her up.",
    rwenRole: 'Salarywoman in a charcoal blazer — ~35, helpful but on a 45-minute lunch break; she\'ll happily walk you through the screen if you flag her properly, but won\'t volunteer to a confused tourist staring at the keypad.',
    successCriteria: "User opens with 'すみません、ちょっといいですか？' (NOT just tapping her shoulder or skipping the softener), names the situation with '困っています', and closes the request with '助けてください' rather than miming. Lands the verb-て+ください pattern in real time.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
