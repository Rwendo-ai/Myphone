import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm02-l01-paumanhin',
  module: 2,
  lesson: 1,
  title: 'Paumanhin — Excuse me',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "You're squeezing through a packed Quiapo sidewalk and someone's basket is blocking the way. In English you'd nudge with 'sorry' or 'excuse me' — in Tagalog it's 'Paumanhin'. Add 'po' to a stranger and you instantly look kind, not pushy.",
    culturalNote: "Filipinos use 'Paumanhin' to ask permission to pass, to interrupt, or to gently disagree. 'Pasensya na' is broader — it can mean 'sorry', 'be patient with me', or 'make do with what we have'. Tagalog softens almost everything with 'po' when there's any age gap.",
  },

  chunks: [
    {
      id: 'paumanhin',
      target: 'Paumanhin',
      native: 'Excuse me / Pardon',
      literal: 'Forgiveness (asked)',
      emoji: 'PARDON',
      phonetic: 'pa-oo-MAN-hin',
      audioRef: null,
    },
    {
      id: 'paumanhin_po',
      target: 'Paumanhin po',
      native: 'Excuse me (formal/respectful)',
      literal: 'Forgiveness (asked) + respect-marker',
      emoji: 'BOW',
      phonetic: 'pa-oo-MAN-hin POH',
      audioRef: null,
    },
    {
      id: 'pasensya_na',
      target: 'Pasensya na',
      native: "Sorry / Bear with me",
      literal: 'Patience already',
      emoji: 'HEART',
      phonetic: 'pa-SEN-sha NA',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Polite intrusion',
    explanation: "When you need to interrupt, pass, or break in: lead with 'Paumanhin'. Add 'po' if the person is older, a stranger, or in any position of authority. 'Pasensya na' is wider — it admits a small inconvenience and asks the other person to be kind about it.",
    examples: [
      { target: 'Paumanhin, padaan po', native: "Excuse me, coming through (please)" },
      { target: 'Paumanhin po, ate', native: "Excuse me, ma'am (older woman)" },
      { target: 'Pasensya na, late ako', native: "Sorry, I'm late (bear with me)" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Paumanhin', right: 'Excuse me / Pardon' },
        { left: 'Paumanhin po', right: 'Excuse me (formal)' },
        { left: 'Pasensya na', right: 'Sorry / Bear with me' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "You're squeezing past a vendor twice your age in a Quiapo alley. What do you say?",
      sentence: '_____, padaan.',
      options: ['Paumanhin po', 'Paumanhin', 'Pasensya na'],
      correct: 'Paumanhin po',
      context: "An older stranger always earns the 'po'. 'Pasensya na' is for excusing a slip-up, not for passing.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Excuse me (formal — to an elder)',
      correct: ['Paumanhin po', 'paumanhin po'],
    },
    {
      type: 'build_sentence',
      instruction: 'Apologise for being late — drag the words into order',
      words: ['ako,', 'na', 'late', 'Pasensya'],
      correct: ['Pasensya', 'na', 'late', 'ako,'],
      translation: "Sorry, I'm late",
    },
    {
      type: 'multiple_choice',
      instruction: "Your friend forgot to bring snacks for the trip. He shrugs and says one of these. Which fits best?",
      question: "Which is closest to 'Sorry, just bear with it'?",
      options: [
        { text: 'Pasensya na', correct: true },
        { text: 'Paumanhin po', correct: false },
        { text: 'Paumanhin', correct: false },
      ],
      explanation: "'Pasensya na' literally asks for patience — it's the everyday 'sorry, make do' that 'paumanhin' doesn't quite cover.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'Excuse me (casual — pushing through a crowd)',
      correct: ['Paumanhin', 'paumanhin'],
    },
  ],

  rwenDialogue: {
    intro: "You're at Quiapo Market on a Sunday afternoon. The aisle is jammed. An older woman with two heavy bags is blocking your path. You need to get past — politely.",
    lines: [
      {
        speaker: 'user',
        userChoices: [
          { target: 'Paumanhin po, padaan', native: 'Excuse me (ma\'am), coming through', correct: true, feedback: "Perfect — 'po' is exactly right for a tita with bags." },
          { target: 'Paumanhin, padaan', native: 'Excuse me, coming through', correct: false, feedback: "Not wrong, but missing 'po' — she's older, give her the respect marker." },
          { target: 'Pasensya na', native: "Sorry / bear with it", correct: false, feedback: "That's for excusing a mistake, not for asking to pass." },
        ],
      },
      {
        speaker: 'npc',
        target: 'O sige, anak, dumaan ka',
        native: "Oh sure, dear — go ahead",
      },
      {
        speaker: 'rwen',
        rwenLine: "She called you 'anak' — child. That's the warmth a tiny 'po' unlocks. You didn't just pass through, you got a blessing.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      {
        prompt: 'Excuse me (formal, to an elder)',
        correct: ['Paumanhin po', 'paumanhin po'],
      },
      {
        prompt: "Sorry / bear with me",
        correct: ['Pasensya na', 'pasensya na'],
      },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: "Use 'paumanhin' once today — out loud. Squeezing past someone, interrupting a meeting, getting a waiter's attention. Let the word leave your mouth at least once.",
    rwenSignoff: "Ingat ka — take care. I'll ask you tomorrow.",
  },

  phase8: {
    scenario: "It's 2pm on a Sunday in Quiapo Market. The aisle near Plaza Miranda is shoulder-to-shoulder. You're trying to reach the sampaguita vendor at the back, but a woman with two huge palengke bags is parked right in your way, chatting with a friend.",
    rwenRole: "Aling Nene — a vendor in her 60s, friendly but won't move unless you greet her properly; she warms up immediately to a 'po' and pretends not to hear anyone who shoves past silently.",
    successCriteria: "User says 'Paumanhin po' (with the 'po' — Aling Nene is older than them) BEFORE asking to pass. A bare 'Paumanhin' or 'Pasensya na' is too informal or wrong context — Rwen should still let them through but flag it.",
    estimatedMinutes: 2,
    bonusXp: 5,
  },
};

export default lesson;
