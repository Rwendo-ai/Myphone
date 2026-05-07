import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm03-l08-shuruwati',
  module: 3,
  lesson: 8,
  title: 'Main Shuruwati Hoon — I Am a Beginner',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Saying 'I'm a beginner' in Hindi is not an apology — it's an invitation. People will slow down, switch to simpler words, and often light up that you're trying. Today you learn the phrase that buys you patience.",
    culturalNote: "In India, an outsider attempting Hindi — even badly — often gets visible delight from native speakers. The phrase 'मैं हिंदी सीख रहा/रही हूँ' (main Hindi seekh raha/rahi hoon — I am learning Hindi) is the magic key. It tells everyone: I'm trying, please be patient, and please correct me. Most Indians will do exactly that.",
  },

  chunks: [
    {
      id: 'main_seekh',
      target: 'मैं हिंदी सीख रहा/रही हूँ — Main Hindi seekh raha/rahi hoon',
      native: 'I am learning Hindi (m / f)',
      literal: 'I Hindi learn -ing am',
      emoji: '📚',
      phonetic: 'mayn HIN-dee seekh RA-ha / RA-hee hoon',
      audioRef: null,
    },
    {
      id: 'shuruwati',
      target: 'मैं शुरुआती हूँ — Main shuruwati hoon',
      native: 'I am a beginner',
      literal: 'I beginner am',
      emoji: '🌱',
      phonetic: 'mayn shu-ru-WAA-tee hoon',
      audioRef: null,
    },
    {
      id: 'dheere_boliye',
      target: 'धीरे बोलिए — Dheere boliye',
      native: 'Please speak slowly',
      literal: 'Slowly speak (polite)',
      emoji: '🐢',
      phonetic: 'DHEE-ray BO-lee-yay',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Present continuous — raha hoon (m) / rahi hoon (f)',
    explanation: "For 'I am [verb]-ing right now', use VERB-stem + रहा/रही + हूँ. Male: सीख रहा हूँ (seekh raha hoon — am learning). Female: सीख रही हूँ (seekh rahi hoon). The same shape works for any verb in progress: काम कर रहा/रही हूँ (kaam kar raha/rahi hoon — am working), खा रहा/रही हूँ (kha raha/rahi hoon — am eating).",
    examples: [
      { target: 'मैं हिंदी सीख रहा हूँ — Main Hindi seekh raha hoon', native: 'I am learning Hindi (m)' },
      { target: 'मैं हिंदी सीख रही हूँ — Main Hindi seekh rahi hoon', native: 'I am learning Hindi (f)' },
      { target: 'मैं काम कर रहा/रही हूँ — Main kaam kar raha/rahi hoon', native: 'I am working' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its meaning',
      pairs: [
        { left: 'Main Hindi seekh raha/rahi hoon', right: 'I am learning Hindi' },
        { left: 'Main shuruwati hoon', right: 'I am a beginner' },
        { left: 'Dheere boliye', right: 'Please speak slowly' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: 'A woman says she is learning Hindi',
      sentence: 'Main Hindi seekh _____ hoon.',
      options: ['rahi', 'raha', 'rahe'],
      correct: 'rahi',
      context: 'Female speaker — present continuous uses rahi for women.',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'I am a beginner',
      correct: ['Main shuruwati hoon', 'main shuruwati hoon', 'मैं शुरुआती हूँ'],
    },
    {
      type: 'multiple_choice',
      instruction: "You want someone to slow down. What do you say (politely)?",
      question: 'Choose the polite request',
      options: [
        { text: 'Dheere boliye', correct: true },
        { text: 'Dheere bol', correct: false },
        { text: 'Bahut bolo', correct: false },
      ],
      explanation: "बोलिए (boliye) is the polite/respectful imperative. बोल (bol) is informal/abrupt. Use boliye with strangers, elders, and at work.",
    },
    {
      type: 'build_sentence',
      instruction: 'Build "I am learning Hindi" (male speaker)',
      words: ['hoon', 'Hindi', 'seekh', 'raha', 'Main'],
      correct: ['Main', 'Hindi', 'seekh', 'raha', 'hoon'],
      translation: 'I am learning Hindi',
    },
    {
      type: 'translate',
      instruction: 'Type in Hindi (romanized is fine)',
      prompt: 'Please speak slowly',
      correct: ['Dheere boliye', 'dheere boliye', 'धीरे बोलिए'],
    },
  ],

  rwenDialogue: {
    intro: "Rwen has switched into Hindi. You need to flag your level honestly.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: 'तो आपकी हिंदी कैसी है? आराम से बात कर सकते हैं? (To aapki Hindi kaisi hai? Aaraam se baat kar sakte hain?)',
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'मैं शुरुआती हूँ। मैं हिंदी सीख रहा/रही हूँ। कृपया धीरे बोलिए। (Main shuruwati hoon. Main Hindi seekh raha/rahi hoon. Kripya dheere boliye.)', native: 'I am a beginner. I am learning Hindi. Please speak slowly.', correct: true, feedback: "Honest, polite, and clear. Most Indians will gladly slow down — you've earned the patience." },
          { target: 'मैं हिंदी (Main Hindi)', native: 'I Hindi', correct: false, feedback: "Almost — finish the sentence: Main Hindi seekh raha/rahi hoon." },
          { target: 'मुझे नहीं पता (Mujhe nahin pata)', native: "I don't know", correct: false, feedback: "Better to say what you DO know. Use Main shuruwati hoon to flag your level." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: 'कोई बात नहीं! धीरे-धीरे बात करते हैं। (Koi baat nahin! Dheere-dheere baat karte hain.)',
      },
      {
        speaker: 'rwen',
        rwenLine: "No problem at all — let's go slowly. That's exactly the response you'll get from real Indians, too.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I am a beginner', correct: ['Main shuruwati hoon', 'main shuruwati hoon'] },
      { prompt: 'Please speak slowly', correct: ['Dheere boliye', 'dheere boliye'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Practise the beginner's bundle out loud: 'मैं शुरुआती हूँ। मैं हिंदी सीख रहा/रही हूँ। कृपया धीरे बोलिए।' This is your safety net for any Hindi conversation.",
    rwenSignoff: "Beginning is the bravest part. फिर मिलेंगे.",
  },

  phase8: {
    scenario: "First week onboarding at a tech firm in Bengaluru. Your manager has just begun running the daily standup in Hindi for the team's benefit, but you haven't followed everything. After the meeting, you stop her in the corridor and need to flag your level.",
    rwenRole: "Priya Madam — your manager, ~45, kind but busy, will happily switch back to slower Hindi (or English if needed) once she knows where you stand.",
    successCriteria: "User combines all three chunks: 'Main shuruwati hoon' + 'Main Hindi seekh raha/rahi hoon' + 'Dheere boliye'. Uses the gendered raha/rahi correctly. Uses boliye (polite) NOT bol (informal) when speaking to a manager.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
