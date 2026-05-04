import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-resilience-is-not-bypassing',
  module: 1,
  lesson: 2,
  title: 'Resilience Is Not Bypassing',
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "If today is too heavy, close this and come back when you can. Today is a counter-intuitive lesson. The bereavement research has a finding that surprises a lot of people, and may even feel insulting at first. Read it carefully. We are not telling you you should be 'fine.' We are telling you something subtler — that your capacity to keep functioning while devastated is not a betrayal of the person you lost. It is, in fact, the most common shape grief takes.",
    culturalNote: "George Bonanno's longitudinal research with thousands of bereaved people across decades and cultures has found that the most common trajectory — about half to two-thirds of grievers — is what he calls *resilience*. They grieve, they hurt, they wake up at 3am, and they are also still able to work, eat, laugh occasionally, hold their children. This is not denial. It is not 'bypassing.' It is the human nervous system doing what it evolved to do: oscillate between grief and life so that life can continue.",
  },

  chunks: [
    {
      id: 'resilience',
      target: 'Resilience',
      native: 'The capacity to grieve deeply AND continue to function in ordinary life — both at once, often in the same day',
      literal: "Bonanno — *The Other Side of Sadness*. The modal trajectory across most large studies of bereavement.",
      emoji: '🌱',
      phonetic: "Not 'getting over it.' Not 'being strong.' Carrying it while still living.",
      audioRef: null,
    },
    {
      id: 'guilt_at_functioning',
      target: 'Guilt at functioning',
      native: 'The painful idea that if you are managing to live your day, you must not have loved them enough',
      literal: 'A predictable distortion in grief; explicitly addressed in Devine and Cacciatore',
      emoji: '🪨',
      phonetic: "If you can laugh at a joke, eat lunch, take a meeting — that is not betrayal. That is a body still alive.",
      audioRef: null,
    },
    {
      id: 'bypassing',
      target: 'Bypassing',
      native: 'Pretending the grief is not there — outrunning it with productivity, drink, distraction, spiritual platitudes — which is different from resilience',
      literal: 'Term originally from spiritual traditions; used here to distinguish suppression from genuine resilience',
      emoji: '🚫',
      phonetic: "Resilience holds the grief. Bypassing throws it under a rug. They look similar from the outside. They are not the same.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Resilience versus bypassing',
    explanation: "These two are easily confused. Both can look, from the outside, like 'doing okay.' The difference is internal. Resilience knows the grief is there, lets the waves come when they come, and uses the steadier hours to live a life that still includes the loss. Bypassing tries to make the grief not exist — by working harder, drinking more, repeating affirmations, refusing to talk about it. Resilience is sustainable. Bypassing is interest accruing on a debt that has to be paid eventually.",
    examples: [
      { target: 'Resilience: working through a Tuesday afternoon, then sitting with grief in the car at 6pm', native: 'Bypassing: working through every Tuesday for a year and refusing to look at any of it' },
      { target: 'Resilience: laughing at a friend\'s joke and feeling the loss in the same breath', native: 'Bypassing: laughing only because crying would feel unbearable to start' },
      { target: 'Resilience: telling someone "I am okay today" — and meaning it for today', native: 'Bypassing: telling everyone "I am okay" because being not-okay feels forbidden' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to its meaning',
      pairs: [
        { left: 'Resilience', right: 'Grieving deeply AND continuing to live, often in the same day' },
        { left: 'Bypassing', right: 'Pretending the grief is not there — suppression dressed as strength' },
        { left: 'Guilt at functioning', right: 'The idea that if you are coping at all, you must not have loved them enough' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is most likely resilience rather than bypassing?',
      question: 'Pick the more honest pattern.',
      options: [
        { text: 'Working sixty-hour weeks and refusing to discuss the loss with anyone', correct: false },
        { text: 'Going to work most days, crying in the car some days, talking to one person who knows', correct: true },
        { text: "Posting 'everything happens for a reason' on social media and never feeling the hard part", correct: false },
      ],
      explanation: "Resilience holds the grief while still living. The middle option includes both — the working and the crying — with at least one witness. The other two are versions of pushing the grief out of the room, which is more costly than it looks.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the finding',
      sentence: "In Bonanno's research, the most common trajectory across bereaved people is _____.",
      options: ['resilience', 'depression', 'denial'],
      correct: 'resilience',
      context: "This finding is widely under-reported because it sounds like minimisation. It is not. It says: your nervous system is built to do this hard thing, and most people, given time, do.",
    },
    {
      type: 'translate',
      instruction: "In one phrase — what is the difference between resilience and bypassing?",
      prompt: "Resilience holds the grief. Bypassing ____ it.",
      correct: ['suppresses', 'hides', 'avoids', 'pushes away', 'pushes it away', 'denies', 'ignores'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's central permission",
      words: ['betrayal', 'is', 'not', 'functioning', 'a'],
      correct: ['functioning', 'is', 'not', 'a', 'betrayal'],
      translation: "If you have been carrying guilt for the moments you laughed, ate, slept, worked — read this twice.",
    },
    {
      type: 'translate',
      instruction: "Have you ever felt guilty for a moment of being okay? Type a word or phrase if you want. Or skip.",
      prompt: "(For yourself. Not for me.)",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to give you something that often helps with this particular pain.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Think of one moment, recently, when you laughed, or ate well, or had a good five minutes of work. Anything small. Bring it to mind.",
      },
      {
        speaker: 'rwen',
        rwenLine: "If you noticed guilt for that moment — a flicker of 'how could I' — see if you can offer it this sentence instead: 'I am still here. I love them still. Both of these are true.'",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I tried it. The guilt softened.", native: '', correct: true, feedback: "That softening is the body recognising that love and life are not in competition. They never were. The guilt was a misunderstanding." },
          { target: "I tried it. The guilt got louder.", native: '', correct: true, feedback: "Sometimes the guilt is connected to a more specific story — something you wish you had said, or done, or not done. We will not solve it today. Just naming that the guilt is loud is honest. The phrase is not a fix. It is a counter-weight." },
          { target: "I cannot find a good moment to remember.", native: '', correct: true, feedback: "That happens, especially in early or acute grief. The good moments may not be there yet, or may not feel safe to bring up. This lesson will wait. Some days the assignment is just the reading." },
          { target: "I am not ready for this one. I want to stop.", native: '', correct: true, feedback: "Then we stop. That is also the work. Closing a lesson is a form of self-knowledge. Come back when you can." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you found, you did the lesson. Loving someone and continuing to live are not opposites. They are how the loving continues.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "In Bonanno's research, what is the most common bereavement trajectory? (one word)",
        correct: ['resilience', 'resilient', 'the resilience trajectory'],
      },
      {
        prompt: "Complete the central permission: 'Functioning is not a ____.'",
        correct: ['betrayal', 'betrayal of love', 'betrayal of them'],
      },
    ],
  },

  mission: {
    title: "Today's small offering (optional)",
    task: "Today, if you catch yourself doing something ordinary — drinking water, replying to a message, eating — and the guilt arrives, try saying once, to yourself: 'I am still here. I love them still. Both are true.' If today is not the day for this, the reading was enough.",
    rwenSignoff: "You are allowed to live. The loving has not stopped because you have.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 2. Rwen offers a short, gentle conversation about one specific moment of 'functioning' the user has felt guilty about — a meal eaten, a laugh, a stretch of focused work. The aim is to witness the moment and the guilt together, without resolving them.",
    rwenRole: "Rwen — quieter than the user. Does not advise, fix, or reassure with platitudes. Does not say 'they would have wanted you to' (that is an attribution we cannot make). Mirrors and witnesses. If the user names a moment of guilt, Rwen names it back as 'love that did not know where to go.' If the user does not want to share, Rwen accepts the silence.",
    successCriteria: "User names one specific recent moment of being-okay that has carried guilt, and either softens around it slightly or names that the guilt is connected to a more specific unfinished thing. Either outcome is success. The point is the witnessing, not the resolution.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
