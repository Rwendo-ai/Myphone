import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm06-l04-time-hours',
  module: 6,
  lesson: 4,
  title: "What time? — कितने बजे हैं?",
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "'What time is it?' — रोज़ का सवाल। जवाब आसान: 'It's seven o'clock' (सात बजे हैं)। आज hours सीखेंगे।",
    culturalNote: "हिंदी में हम 'सात बज गए' या 'शाम के सात' बोलते हैं — context से दिन-रात समझ आता है। English में 'It's' + संख्या + 'o'clock' लगता है। 'O'clock' = 'of the clock' का short form। India में 24-hour clock common है (railway, TV listings), पर English-speakers ज़्यादातर 12-hour के साथ A.M./P.M. use करते हैं। US/UK Zoom calls में 'Let's meet at 3 P.M. your time' सामान्य है।",
  },

  chunks: [
    {
      id: 'what_time',
      target: 'What time is it?',
      native: 'कितने बजे हैं?',
      literal: 'Kitne baje hain?',
      emoji: '⏰',
      phonetic: 'wat-tym-iz-it',
      audioRef: null,
    },
    {
      id: 'seven_oclock',
      target: "It's seven o'clock",
      native: 'सात बजे हैं',
      literal: 'Saat baje hain',
      emoji: '🕖',
      phonetic: 'its-SEH-vn-oh-klok',
      audioRef: null,
    },
    {
      id: 'am_pm',
      target: 'A.M. / P.M.',
      native: 'सुबह / दोपहर या शाम',
      literal: 'Subah / dopahar ya shaam',
      emoji: '🌅',
      phonetic: 'ay-em / pee-em',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Time-telling — hours',
    explanation: "Time बताने के लिए: 'It's' + संख्या + \"o'clock\"। A.M. (सुबह 12 से दोपहर 12 तक) या P.M. (दोपहर 12 से रात 12 तक)। ध्यान दें: \"o'clock\" सिर्फ़ तब use होता है जब minutes 0 हों — 7:15 के लिए 'seven fifteen' या 'quarter past seven', 'seven fifteen o'clock' नहीं।",
    examples: [
      { target: "It's three o'clock",        native: 'तीन बजे हैं' },
      { target: "It's nine A.M.",            native: 'सुबह के नौ बजे हैं' },
      { target: "It's eight o'clock P.M.",   native: 'रात के आठ बजे हैं' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'समय मिलाएँ',
      pairs: [
        { left: "Seven o'clock",   right: '7:00' },
        { left: "Three o'clock",   right: '3:00' },
        { left: "Twelve A.M.",     right: 'मध्यरात्रि' },
        { left: "Twelve P.M.",     right: 'दोपहर' },
      ],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'कितने बजे हैं?',
      correct: ['What time is it?', 'What time is it', 'what time is it?'],
    },
    {
      type: 'fill_blank',
      instruction: 'खाली जगह भरें — समय बता रहे हैं',
      sentence: "It's six ____.",
      options: ["o'clock", "of clock", "the clock"],
      correct: "o'clock",
      context: "\"O'clock\" = 'of the clock' का short form — minutes 0 होने पर use करें।",
    },
    {
      type: 'build_sentence',
      instruction: "वाक्य बनाएँ — time बता रहे हैं",
      words: ['eight', "It's", "o'clock", 'A.M.'],
      correct: ["It's", 'eight', "o'clock", 'A.M.'],
      translation: 'सुबह के आठ बजे हैं।',
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'रात के नौ बजे',
      correct: ["It's nine P.M.", "Nine P.M.", "It's nine o'clock P.M.", "It is nine P.M."],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'चार बजे हैं',
      correct: ["It's four o'clock", "Four o'clock", "It is four o'clock"],
    },
  ],

  rwenDialogue: {
    intro: 'आप BPO ऑफिस में हैं। US-based manager Zoom पर meeting का time fix करना चाहते हैं।',
    lines: [
      { speaker: 'npc', target: "What time can we meet tomorrow?", native: 'कल कितने बजे मिल सकते हैं?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "Let's meet at ten o'clock A.M.",       native: 'सुबह दस बजे मिलते हैं।',  correct: true,  feedback: "बढ़िया — \"o'clock\" + A.M. से time साफ़।" },
          { target: "Ten of clock.",                          native: '10 of clock.',                       correct: false, feedback: "'of clock' नहीं — \"o'clock\" है (एक शब्द जैसा)।" },
          { target: "Morning.",                                native: 'सुबह।',                         correct: false, feedback: 'साफ़ नहीं — meeting के लिए सही time दें।' },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! A.M. से समय का half तय हो गया।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'What time is it? (अंग्रेज़ी में)', correct: ['What time is it?', 'What time is it', 'what time is it?', 'what time is it'] },
      { prompt: "It's five o'clock (अंग्रेज़ी में)", correct: ["It's five o'clock", "Its five o'clock", "It is five o'clock", "Five o'clock"] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज तीन बार घड़ी देखें — अलग-अलग समय पर — और ख़ुद English में बोलें: \"It's three o'clock\", \"It's eight P.M.\"। A.M./P.M. भी जोड़ें।",
    rwenSignoff: 'Time = life। Manage time, manage life। कल मिलते हैं।',
  },

  phase8: {
    scenario: "You're arranging a meeting time over Slack/Zoom with an English-speaking colleague (US-based) for a project review tomorrow. Negotiate a specific hour that works for both of you (use o'clock and A.M./P.M.). Time-zone differences may matter.",
    rwenRole: "Linda, 36, a US-based project manager. Has a packed schedule, will counter-propose if your time doesn't work. Polite and direct.",
    successCriteria: "User proposes at least one specific time using 'o'clock' and 'A.M.' or 'P.M.' correctly, responds to a counter-proposal, and confirms the final agreed time. Doesn't drop the o'clock structure entirely.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
