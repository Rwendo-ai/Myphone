import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-scarcity-vs-sufficiency',
  module: 1,
  lesson: 3,
  title: 'Scarcity vs. Sufficiency',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Two people can have the same amount of money and live in completely different worlds. One feels constantly under threat. The other feels, mostly, like there is enough. The difference is not always the number. Sometimes it is — actual scarcity is real, and we will respect that. But often, the inner experience of lack persists long after the outer situation changes. That gap is what we look at today.",
    culturalNote: "Brené Brown describes the cultural water we swim in as 'a scarcity culture' — never thin enough, never rich enough, never safe enough. The behavioural scientists Sendhil Mullainathan and Eldar Shafir, in their book *Scarcity*, document the real cognitive costs of actual material scarcity (it occupies attention, narrows decisions, taxes the mind). Both are true. We hold both: scarcity is sometimes a real situation, and sometimes a mindset that persists past the situation. We do not gaslight people who genuinely cannot pay rent. We do not assume the only problem is the math.",
  },

  chunks: [
    {
      id: 'actual_scarcity',
      target: 'Actual scarcity',
      native: 'A real material situation in which there is not enough — for rent, food, a bill, a need',
      literal: 'Mullainathan & Shafir — material scarcity has measurable cognitive costs; this is not a perception problem',
      emoji: '⛔',
      phonetic: "If this is your situation, the rest of this lesson is not for fixing it. The lesson is for not adding shame on top.",
      audioRef: null,
    },
    {
      id: 'scarcity_mindset',
      target: 'Scarcity mindset',
      native: 'The persistent feeling of not-enough that can outlast the situation that caused it',
      literal: 'Brené Brown — scarcity culture; also therapeutic literature on chronic financial anxiety',
      emoji: '⚠️',
      phonetic: "Common signs: comparing constantly; feeling behind no matter what you have; topping up does not bring relief.",
      audioRef: null,
    },
    {
      id: 'sufficiency',
      target: 'Sufficiency',
      native: "The felt sense — not the proof — that what you have right now is, for this moment, enough",
      literal: 'Lynne Twist — *The Soul of Money*; also Buddhist psychology of contentment (santutthi)',
      emoji: '🌳',
      phonetic: "Sufficiency is not denial of need. It is the capacity to rest, briefly, in what is already here.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Scarcity is sometimes real and sometimes a habit',
    explanation: "If you genuinely cannot pay rent, that is actual scarcity. The cognitive load it puts on you is real and the answer is material — more income, less expense, help from somewhere. The mindset work in this lesson is for the additional layer: the version of scarcity that persists even when the situation eases. The version where you got the raise and within a week were back to feeling behind. That version is workable.",
    examples: [
      { target: 'Actual scarcity', native: 'You cannot pay this month\'s bills no matter how you arrange the numbers — the answer is material' },
      { target: 'Scarcity mindset', native: 'Your bills are paid, but you still feel one wrong move from disaster — the answer is not only material' },
      { target: 'Sufficiency', native: '"For today, what I have is enough." — the actual experience, not a slogan' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Actual scarcity', right: 'A real material situation in which there is not enough' },
        { left: 'Scarcity mindset', right: 'A persistent feeling of not-enough that outlasts the situation' },
        { left: 'Sufficiency', right: 'The felt sense that what you have, for now, is enough' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is the MOST important caveat about scarcity, according to this lesson?',
      question: 'Pick the one this lesson explicitly insists on',
      options: [
        { text: 'Scarcity is always a mindset problem; the math is rarely the issue', correct: false },
        { text: 'Sometimes scarcity is a real material situation, and the lesson is not trying to make that situation a perception problem', correct: true },
        { text: 'If you feel scarcity, you simply need to think more positively', correct: false },
      ],
      explanation: "The first and third are exactly what this lesson refuses. Material scarcity is real; the mindset work is for the layer that persists past it.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Sufficiency is not _____ of need. It is the capacity to rest, briefly, in what is already here.',
      options: ['denial', 'proof', 'absence'],
      correct: 'denial',
      context: "Sufficiency is not telling yourself you don't need anything. It is letting yourself feel, for a moment, that what is here right now is enough for right now.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — name a moment in the last month when you felt sufficiency. (A meal. A walk. A small ordinary thing.)',
      prompt: 'I felt, briefly, that what I had was enough when _____',
      correct: [],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the central distinction of this lesson',
      words: ['mindset', 'real', 'and', 'is', 'a', 'sometimes', 'sometimes', 'scarcity'],
      correct: ['scarcity', 'is', 'sometimes', 'real', 'and', 'sometimes', 'a', 'mindset'],
      translation: "Both are true. Knowing which one you are in matters.",
    },
    {
      type: 'translate',
      instruction: "In one phrase — what is one signal in your own life that you might be in a scarcity *mindset* even when the math says you are okay?",
      prompt: 'A signal for me is _____',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to ask you carefully. There is no right answer. We are just looking.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Think about the last week. Where did the feeling of not-enough show up? Not the actual numbers. The feeling. Comparing yourself to someone. Feeling behind. Feeling like topping up wouldn't help. Feeling like you needed something you couldn't quite name.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I felt actual scarcity. The math is genuinely tight right now.", native: '', correct: true, feedback: "Real situations call for real responses. The work for you is not the mindset layer right now — it is taking care of yourself materially, and refusing the extra weight of shame on top of an already heavy situation." },
          { target: "I have enough on paper, but I still felt behind almost every day.", native: '', correct: true, feedback: "That is the scarcity mindset layer. It can be worked with. The first step is naming that the feeling is not actually a verdict on your situation — it is a habit of attention." },
          { target: "I felt scarcity in one specific area — like my bank account is fine but I felt like I had no time.", native: '', correct: true, feedback: "Scarcity transfers across resources. The mind that feels short on money will often feel short on time, attention, and energy. Noticing the transfer is part of the skill." },
          { target: "I noticed something close to sufficiency this week. It surprised me.", native: '', correct: true, feedback: "Notice what conditions allowed it. Sufficiency is partly a cultivable state — and the moments it shows up are worth being curious about." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you said is real. We are not trying to talk you into sufficiency. We are noticing the difference between actual lack — which deserves practical action — and the chronic feeling of lack, which deserves a different kind of attention.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase: what is the difference between actual scarcity and scarcity mindset?',
        correct: ['actual scarcity is material; mindset is the feeling that outlasts the situation', 'one is the real situation; the other is the feeling that persists', 'actual scarcity is real lack; scarcity mindset is the feeling of lack', 'one is material; the other is a habit of attention', 'actual is the situation; mindset is the feeling'],
      },
      {
        prompt: 'In one word — the felt sense, not the proof, that what you have is enough is called…',
        correct: ['sufficiency', 'enough'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, once, look at one ordinary thing you have — your meal, your shoes, the room you are in, a friend's voice on the phone — and silently say: 'For this moment, this is enough.' Don't try to believe it. Just say it. Notice what happens.",
    rwenSignoff: "One thing. One sentence. That's the whole assignment.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 3. Rwen invites a short conversation about whether the user is in actual scarcity, scarcity mindset, or both — and treats the answer with appropriate seriousness. If the user is in actual scarcity, Rwen does not push the mindset frame. If the user is in mindset territory, Rwen helps them name one specific signal of the habit.",
    rwenRole: "Rwen — careful, non-minimising. If the user describes actual scarcity, Rwen takes it seriously and does NOT pivot to mindset reframes; instead Rwen acknowledges the weight of the situation, points out that real-world support (financial counsellors, community resources, family) is sometimes the right move, and refuses to add a layer of shame on top. If the user describes mindset patterns, Rwen helps them name one specific signal.",
    successCriteria: "User accurately distinguishes which kind of scarcity they are in (or both). Rwen does not minimise material reality and does not gaslight the user. Bonus if the user names one signal of scarcity mindset they had not put into words before.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
