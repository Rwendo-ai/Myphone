import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-what-actually-happened',
  module: 1,
  lesson: 1,
  title: 'What Actually Happened',
  estimatedMinutes: 8,
  xpReward: 25,

  hook: {
    rwenLine: "Today's the day you become someone who can tell the truth about what happened — without making it bigger than it was, without making it smaller, and without rehearsing it for the hundredth time. We are not here to fix anything yet. We are just here to look.",
    culturalNote: "Cognitive therapy (Beck, Burns) found that two distortions tend to fight for control of the story after a knock: catastrophising ('this ruins everything') and minimising ('it wasn't a big deal'). Most people swing between them. The Stoics had a related practice — *premeditatio malorum* — used in advance, but the same precision works in reverse: describe the actual event, in plain sentences, without dramatic colour and without dismissive shrug. That description is the ground we will rebuild on.",
  },

  chunks: [
    {
      id: 'catastrophising',
      target: 'Catastrophising',
      native: "Treating one bad event as proof that everything is now ruined or will be",
      literal: "CBT — Aaron Beck and David Burns; one of the canonical cognitive distortions",
      emoji: '🌪️',
      phonetic: 'It is real that something hard happened. It is rarely true that everything is now over.',
      audioRef: null,
    },
    {
      id: 'minimising',
      target: 'Minimising',
      native: "Telling yourself the loss didn't really matter so you don't have to feel it",
      literal: "CBT — the partner distortion to catastrophising; also recognised in clinical grief work (Bonanno)",
      emoji: '🪨',
      phonetic: "If you skip the feeling, the feeling waits for you somewhere else, usually at 3am.",
      audioRef: null,
    },
    {
      id: 'plain_account',
      target: 'A plain account',
      native: "A description of what happened in simple sentences — no drama, no dismissal, no moral",
      literal: "Stoic *prosoche* (clear seeing); also clinical narrative therapy — telling the story without the editorial voice",
      emoji: '📝',
      phonetic: "A reporter's first paragraph, not a memoir.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The plain account',
    explanation: "A plain account is short, in past tense, names the actual events, and excludes both the catastrophe-voice and the dismissive-voice. It is harder than it sounds, because the mind insists on adding meaning. The work today is to write three sentences that someone neutral could read and recognise as roughly true. That neutral version is what we will work from for the rest of this course.",
    examples: [
      { target: "Catastrophising: 'My career is over and I will never recover.'", native: "Plain account: 'I was made redundant in November after eleven years. I haven't found a comparable role in five months. I have savings for three more.'" },
      { target: "Minimising: 'The marriage just ran its course, no big deal.'", native: "Plain account: 'My wife of nineteen years left in March. She told me on a Tuesday. The kids are with her four nights a week. I am living in a rental I didn't choose.'" },
      { target: "Catastrophising: 'My book failed and I am not a real writer.'", native: "Plain account: 'The book sold under a thousand copies. The publisher passed on the next one. I have written nothing in seven months.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its definition',
      pairs: [
        { left: 'Catastrophising', right: 'Treating one bad event as proof that everything is now ruined' },
        { left: 'Minimising', right: "Telling yourself the loss didn't really matter so you don't have to feel it" },
        { left: 'Plain account', right: 'A short, factual description of what happened, without drama or dismissal' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is the plain account?',
      question: 'Pick the version a neutral reporter could write',
      options: [
        { text: "'The startup we built for six years collapsed and now my whole identity is in ruins, I don't know who I am.'", correct: false },
        { text: "'Honestly the startup thing was a learning curve, I'm fine, onwards and upwards.'", correct: false },
        { text: "'The startup ran out of cash in January after six years. We laid off the team. I was the founder. The product is offline.'", correct: true },
      ],
      explanation: "The first catastrophises (identity in ruins, don't know who I am). The second minimises (a 'learning curve', already 'fine'). The third just describes the events. The plain account is what the other two are afraid to write.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'The plain account is shorter than catastrophe, longer than _____.',
      options: ['dismissal', 'fiction', 'panic'],
      correct: 'dismissal',
      context: "Catastrophising adds drama. Minimising subtracts substance. The plain account is the middle thing — long enough to be honest, short enough to be true.",
    },
    {
      type: 'translate',
      instruction: 'In one word — what is the distortion that makes a setback feel like total ruin?',
      prompt: 'The technical term:',
      correct: ['catastrophising', 'catastrophizing', 'catastrophise', 'catastrophize'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the sentence that anchors today',
      words: ['the', 'truth', 'tell', 'about', 'happened', 'plainly', 'what'],
      correct: ['tell', 'the', 'truth', 'about', 'what', 'happened', 'plainly'],
      translation: "The whole lesson, in seven words. Not bigger than it was. Not smaller.",
    },
    {
      type: 'translate',
      instruction: "In one word — what is the distortion that pretends a real loss didn't really matter?",
      prompt: 'The technical term:',
      correct: ['minimising', 'minimizing', 'minimise', 'minimize'],
    },
  ],

  rwenDialogue: {
    intro: "I want to walk through this with you on a real thing. Not the worst thing — just one specific knock you have been carrying.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind one event from the last year or two that knocked your confidence. Not your whole life — one event. A redundancy. A breakup. A diagnosis. A project that didn't land. A move that didn't work. Hold it in mind. You don't have to type it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now, in your head, finish this sentence in one line, without colour: 'In ___, I ___.' Just the month-or-year and the event. No commentary. Take twenty seconds.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I did it. The plain version is shorter than the version I usually tell.", native: '', correct: true, feedback: "Good. The story you usually tell has been doing some work — protecting you, or punishing you, or both. The plain version is what is left when the work stops. We will use that." },
          { target: "I tried but the catastrophising voice took over. 'Everything is ruined' kept coming in.", native: '', correct: true, feedback: "Honest. That voice is loud after a knock — that is what catastrophising is for, evolutionarily. Today you do not have to silence it. You only have to notice that the plain account exists underneath it. We will get to the rest." },
          { target: "I tried but the dismissive voice took over. 'It wasn't really that bad.'", native: '', correct: true, feedback: "Equally honest, and just as common. Minimising is often a survival move — if I don't admit how big it was, I don't have to grieve. Today you do not have to feel the full weight. You only have to write the plain sentence and let it sit." },
          { target: "I'm not ready to look at it directly today.", native: '', correct: true, feedback: "That is also a real answer. Some events take time before they can be named. You do not need to push. Come back to this lesson when you're ready — there is no clock. The course will keep." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever happened in those twenty seconds, you did the lesson. Telling the truth in plain sentences is the foundation of every other lesson in this track. We will keep coming back to it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'In one word — the distortion that turns one bad event into proof everything is ruined?',
        correct: ['catastrophising', 'catastrophizing', 'catastrophise', 'catastrophize'],
      },
      {
        prompt: 'In one word — the distortion that pretends a real loss did not really matter?',
        correct: ['minimising', 'minimizing', 'minimise', 'minimize'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, in writing — paper, notes app, anywhere — write three sentences describing what happened in the dip. Past tense. No commentary. No moral. No 'and then I learned'. Just the events. Read it back once. Put it away.",
    rwenSignoff: "Three sentences. Once. That is the whole assignment. The other voices will be louder tomorrow — that is fine, you have the plain version on file now.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 1. Rwen offers a 3-minute conversation in which the user practises producing a plain account aloud (or in chat) of one event that knocked their confidence. The aim is for the user to leave with one short, plain, past-tense paragraph — no catastrophising, no minimising — that they can return to.",
    rwenRole: "Rwen — calm, slow, patient. Asks questions one at a time. Does NOT interpret what happened, does NOT reframe it as a gift or a lesson, does NOT rush the user toward feeling better. Gently reflects back when the user catastrophises ('I notice you said \"everything is ruined\" — what is the plainer version?') or minimises ('I notice you said \"no big deal\" — what is the plainer version?').",
    successCriteria: "User produces a short paragraph (2–4 sentences) in past tense that names the event, the time, and the immediate consequences, without dramatic language and without dismissive language. Bonus if they notice the difference between the plain account and the version they usually tell other people.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
