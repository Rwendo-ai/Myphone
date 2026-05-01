import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm08-l06-work-school',
  module: 8,
  lesson: 6,
  title: 'Trabaho at Eskwela — Work & Study',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "The Filipino workday: tricycles, MRT lines, a paper cup of 3-in-1 kape. Today we describe it in Tagalog. Pumupunta ako sa trabaho — I go to work. Same reduplication trick from before. You're already an expert.",
    culturalNote: "Filipinos love asking about each other's work — *Anong trabaho mo?* is a normal first-week question. Saying 'pumupunta ako sa trabaho' (I go to work) or 'nag-aaral ako ng Tagalog' (I'm studying Tagalog) is everyday small talk fuel.",
  },

  chunks: [
    {
      id: 'pumupunta_sa_trabaho',
      target: 'Pumupunta ako sa trabaho',
      native: 'I go to work',
      literal: 'Going I to work',
      emoji: '💼',
      phonetic: 'pu-mu-PUN-ta a-KO sa tra-BA-ho',
      audioRef: null,
    },
    {
      id: 'nag_aaral_tagalog',
      target: 'Nag-aaral ako ng Tagalog',
      native: 'I study Tagalog / I am studying Tagalog',
      literal: 'Studying I of-Tagalog',
      emoji: '📚',
      phonetic: 'nag-a-A-ral a-KO nang ta-GA-log',
      audioRef: null,
    },
    {
      id: 'may_meeting_ako',
      target: 'May meeting ako',
      native: 'I have a meeting',
      literal: 'Have meeting I',
      emoji: '📅',
      phonetic: 'my MI-ting a-KO',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Workday verbs (review + sa)',
    explanation: "**Sa** marks 'to/at/in' a place. Pumupunta ako **sa** trabaho = I go **to** work. Combine your present-tense (doubled-syllable) verbs with sa + place to describe a workday. May still does its 'have' job.",
    examples: [
      { target: 'Nasa opisina ako', native: "I'm at the office" },
      { target: 'Pumupunta ako sa eskwela', native: 'I go to school' },
      { target: 'May trabaho ako bukas', native: 'I have work tomorrow' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the Tagalog phrase to its meaning',
      pairs: [
        { left: 'Pumupunta ako sa trabaho', right: 'I go to work' },
        { left: 'Nag-aaral ako ng Tagalog', right: 'I study Tagalog' },
        { left: 'May meeting ako', right: 'I have a meeting' },
      ],
    },
    {
      type: 'fill_blank',
      instruction: "Tell your friend you can't grab lunch — you've got a meeting.",
      sentence: '_____ meeting ako.',
      options: ['May', 'Wala', 'Nag-aaral'],
      correct: 'May',
      context: "May = have. Wala = have not.",
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I study Tagalog',
      correct: ['Nag-aaral ako ng Tagalog', 'nag-aaral ako ng tagalog', 'nag-aaral ako ng Tagalog'],
    },
    {
      type: 'build_sentence',
      instruction: 'Drag to say "I go to work"',
      words: ['sa', 'trabaho', 'Pumupunta', 'ako'],
      correct: ['Pumupunta', 'ako', 'sa', 'trabaho'],
      translation: 'I go to work',
    },
    {
      type: 'multiple_choice',
      instruction: 'A coworker asks why you look busy this afternoon.',
      question: 'Which response fits?',
      options: [
        { text: 'May meeting ako mamaya', correct: true },
        { text: 'Wala akong meeting', correct: false },
        { text: 'Halika', correct: false },
      ],
      explanation: 'May meeting ako = I have a meeting. Mamaya = later.',
    },
    {
      type: 'translate',
      instruction: 'Type in Tagalog',
      prompt: 'I have a meeting',
      correct: ['May meeting ako', 'may meeting ako'],
    },
  ],

  rwenDialogue: {
    intro: "Monday morning. A coworker bumps into you at the elevator with two cups of coffee.",
    lines: [
      {
        speaker: 'npc',
        target: 'Uy, kumusta? May ginagawa ka ngayon?',
        native: "Hey, how are you? You busy right now?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: 'May meeting ako, sorry', native: "I have a meeting, sorry", correct: true, feedback: 'Clear, polite, real.' },
          { target: 'Pumupunta ako sa palengke', native: "I'm going to the market", correct: false, feedback: "On a Monday morning at the office? She'd be confused." },
          { target: 'Halika', native: 'Come', correct: false, feedback: 'Mismatched — she asked if you were busy.' },
        ],
      },
      {
        speaker: 'npc',
        target: 'Sige, kape mamaya?',
        native: 'Okay, coffee later?',
      },
      {
        speaker: 'rwen',
        rwenLine: "Workday Tagalog. May, sa, the doubled syllable — they all show up together. You're stitching real sentences now.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type from memory.',
    prompts: [
      { prompt: 'I go to work (in Tagalog)', correct: ['Pumupunta ako sa trabaho', 'pumupunta ako sa trabaho'] },
      { prompt: 'I have a meeting (in Tagalog)', correct: ['May meeting ako', 'may meeting ako'] },
    ],
  },

  mission: {
    title: "Today's Journey",
    task: 'Describe one piece of your workday in Tagalog. May meeting ako. Pumupunta ako sa trabaho. Nag-aaral ako ng Tagalog. Pick one and say it.',
    rwenSignoff: 'Hanggang bukas — until tomorrow.',
  },

  phase8: {
    scenario: "Monday morning at the office elevator. A friendly coworker asks how your week is shaping up — meetings, work, what you do outside the job. You'll describe your workday using the present-tense Tagalog verbs and the may-construction for things you've got going on.",
    rwenRole: "Kuya Mark — your office friend, mid-30s, sociable and always carrying two cups of coffee; loves a 30-second elevator chat in Tagalog.",
    successCriteria: "User describes their day with at least one pumupunta sa, one nag-aaral or other mag- present-tense verb, and one may + thing construction (e.g. May meeting ako). Sa is used correctly with at least one place.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
