import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-work-school',
  module: 8,
  lesson: 6,
  title: 'Work & school — मेरा दिन',
  estimatedMinutes: 5,
  xpReward: 30,

  hook: {
    rwenLine: "Work day: 'I go to work', 'I study English', 'I have a meeting'। 'work' से पहले 'the' नहीं — 'I go to work' (the work नहीं)।",
    culturalNote: "हिंदी में 'मैं ऑफ़िस जाता हूँ' — article या 'पर' नहीं। English में 'I go TO work' (work से पहले 'the' नहीं — special rule)। 'School', 'church' भी same — 'go to school'। पर 'meeting' regular noun — 'I have A meeting' (article ज़रूरी)। ये tiny grammar rules Indian English में अक्सर मिक्स हो जाती हैं — 'I go to the office daily' सुनते हैं — पर 'I go to work' purer है।",
  },

  chunks: [
    {
      id: 'i_go_to_work',
      target: 'I go to work.',
      native: 'मैं ऑफ़िस जाता हूँ।',
      literal: 'Main office jaata hoon',
      emoji: '💼',
      phonetic: 'ay-GOH-too-WERK',
      audioRef: null,
    },
    {
      id: 'i_study_english',
      target: 'I study English.',
      native: 'मैं English सीखता हूँ।',
      literal: 'Main English seekhta hoon',
      emoji: '📖',
      phonetic: 'ay-STUH-dee-ING-glish',
      audioRef: null,
    },
    {
      id: 'i_have_a_meeting',
      target: 'I have a meeting.',
      native: 'मेरी एक meeting है।',
      literal: 'Meri ek meeting hai',
      emoji: '👥',
      phonetic: 'ay-HAV-uh-MEE-ting',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Workday verbs — Go / study / have',
    explanation: "GO TO (work, school, the office) — 'work' पर article नहीं, 'office' पर 'the'। STUDY (English, maths)। HAVE (a meeting, a call, lunch) — meeting पर 'a' ज़रूरी।",
    examples: [
      { target: 'I go to work.',           native: 'मैं ऑफ़िस जाता हूँ।' },
      { target: 'I study English.',        native: 'मैं English सीखता हूँ।' },
      { target: 'I have a meeting at 10.', native: '10 बजे meeting है।' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'अंग्रेज़ी और हिंदी मिलाएँ',
      pairs: [
        { left: 'I go to work',     right: 'मैं ऑफ़िस जाता हूँ' },
        { left: 'I study English',  right: 'मैं English सीखता हूँ' },
        { left: 'I have a meeting', right: 'मेरी meeting है' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'सही article या preposition चुनें',
      sentence: 'I go _____ work every day.',
      options: ['to', 'to the', 'in'],
      correct: 'to',
      context: "'Work' पर article नहीं — 'go to work' सही, 'go to THE work' ग़लत।",
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: '10 बजे meeting है।',
      correct: ['I have a meeting at 10.', 'I have a meeting at 10', 'I have a meeting at ten.', 'i have a meeting at 10.'],
    },
    {
      type: 'translate',
      instruction: 'अंग्रेज़ी में लिखें',
      prompt: 'मैं English सीखता हूँ।',
      correct: ['I study English.', 'I study English', "I'm studying English.", "I'm studying English", 'i study english.'],
    },
    {
      type: 'build_sentence',
      instruction: 'सुबह काम जाते हैं',
      words: ['morning.', 'go', 'I', 'work', 'in', 'to', 'the'],
      correct: ['I', 'go', 'to', 'work', 'in', 'the', 'morning.'],
      translation: 'मैं सुबह ऑफ़िस जाता हूँ',
    },
    {
      type: 'multiple_choice',
      instruction: 'सही चुनें',
      question: 'I _____ a meeting with my manager today.',
      options: [
        { text: 'have', correct: true },
        { text: 'do', correct: false },
        { text: 'make', correct: false },
      ],
      explanation: "'Have a meeting' standard है। 'Do' या 'make a meeting' use नहीं होता।",
    },
  ],

  rwenDialogue: {
    intro: "London conference में हैं। Break पर किसी से बात कर रहे।",
    lines: [
      { speaker: 'npc', target: "So what does your typical day look like?", native: 'आपका typical दिन कैसा होता है?' },
      {
        speaker: 'user',
        userChoices: [
          { target: "I go to work at 8, I have a team meeting at 10, and I study English in the evenings.", native: '8 बजे ऑफ़िस जाता हूँ, 10 बजे team meeting है, और शाम को English सीखता हूँ।', correct: true, feedback: "बढ़िया — तीन actions, सब time के साथ।" },
          { target: "Work 8. Meeting 10. English night.", native: 'काम 8। Meeting 10। English रात।', correct: false, feedback: "अधूरा — 'I' + verbs + prepositions जोड़ें।" },
        ],
      },
      { speaker: 'npc', target: "Impressive — studying English on top of work!", native: 'वाह — काम के ऊपर English भी सीखना!' },
      {
        speaker: 'rwen',
        rwenLine: "बढ़िया! Five verbs से पूरा workday।",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'बिना ऊपर देखे, याद से लिखें।',
    prompts: [
      { prompt: 'I go to work (अंग्रेज़ी में)', correct: ['I go to work', 'I go to work.', 'i go to work.'] },
      { prompt: 'I have a meeting (अंग्रेज़ी में)', correct: ['I have a meeting', 'I have a meeting.', 'i have a meeting.'] },
    ],
  },

  mission: {
    title: 'आज का काम',
    task: "आज शाम को English में तीन वाक्य बोलें: 'I went to work', 'I had a meeting', 'I studied English'। अगर काम नहीं — 'I went to school' या 'I studied at home'।",
    rwenSignoff: "कल — evening routine।",
  },

  phase8: {
    scenario: "Tea break at a London conference. Someone wants to know about your daily work.",
    rwenRole: "James, 41, sales manager. Curious about your day-to-day, asks lots of questions.",
    successCriteria: "Student describes work day — uses 'I go to work' (no article), 'I have a meeting' (with article), 'I study ___', and reaches a coherent picture of work.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
