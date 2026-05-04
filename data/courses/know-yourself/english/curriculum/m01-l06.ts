import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-attention-becomes-life',
  module: 1,
  lesson: 6,
  title: 'What You Pay Attention to Becomes Your Life',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "There is a sentence the writer Annie Dillard once put in a book, and it has lived in many people's heads for the rest of their lives: 'How we spend our days is, of course, how we spend our lives.' Today's version: how you spend your attention is how you spend your life.",
    culturalNote: "William James, the American psychologist, wrote in 1890 that 'my experience is what I agree to attend to.' The 20th-century attention economy makes that truer than ever — the things you give attention to shape what you remember, what you become, and what you mistake for reality.",
  },

  chunks: [
    {
      id: 'attention_is_currency',
      target: 'Attention is currency',
      native: "What you pay attention to, you spend a piece of your finite life on — and never get back",
      literal: 'Attention economy — Herbert Simon (1971), Tristan Harris; Oliver Burkeman, Four Thousand Weeks',
      emoji: '💰',
      phonetic: "It is not free. It is not infinite. It is paid out, second by second.",
      audioRef: null,
    },
    {
      id: 'selection',
      target: 'Selection',
      native: 'Out of millions of possible inputs, you can only attend to a few — and your selections compound',
      literal: 'William James — "my experience is what I agree to attend to"',
      emoji: '🎚️',
      phonetic: 'Two people standing in the same room have different lives because they are attending to different things.',
      audioRef: null,
    },
    {
      id: 'shaping',
      target: 'Shaping',
      native: 'What you repeatedly attend to becomes more easily attended to in the future — attention shapes itself',
      literal: 'Neuroscience — Hebbian plasticity ("neurons that fire together wire together"); also confirmation bias',
      emoji: '🧠',
      phonetic: "If you have practised attending to threats, threats become easier to find. The same is true of beauty.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The compounding nature of attention',
    explanation: "Where you put your attention this week is not just where your attention is — it is training. The kinds of things you notice today will be the kinds of things you notice more easily next month. This is not mystical. It is how the brain is built. The implication: choosing what to attend to is choosing who to become.",
    examples: [
      { target: 'Attending to slights and grievances', native: 'You become a person who notices slights and grievances more easily' },
      { target: 'Attending to small acts of generosity from others', native: 'You become a person who notices small acts of generosity more easily' },
      { target: 'Attending to your own breath, daily, for a minute', native: 'You become a person to whom the present moment is more available' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to its meaning',
      pairs: [
        { left: 'Attention is currency', right: 'It is finite, spent, and never returned' },
        { left: 'Selection', right: 'You can only attend to a small fraction of what is available' },
        { left: 'Shaping', right: 'What you repeatedly attend to becomes easier to attend to' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Two people work the same job. One ends each day exhausted and resentful. The other ends each day tired but content. The lesson suggests one likely difference between them is...',
      question: 'Pick the answer most aligned with this lesson',
      options: [
        { text: "One has a better job and doesn't realise it", correct: false },
        { text: "They are habitually attending to different parts of the same day", correct: true },
        { text: "One has a better personality", correct: false },
      ],
      explanation: "Same room, same hours, different selection of what to attend to — and over time, different lives. This isn't to deny that some jobs are genuinely worse than others. It's to notice that within any job, attention shapes experience.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the William James quote',
      sentence: 'My experience is what I agree to _____.',
      options: ['attend to', 'remember', 'control'],
      correct: 'attend to',
      context: "James, 1890. The full insight: experience is not what happens to you. It is what you grant the dignity of your attention.",
    },
    {
      type: 'translate',
      instruction: 'In your own words — what does it mean that attention is currency?',
      prompt: 'It is finite. It is spent. It is...',
      correct: ['never returned', 'not returned', 'never refunded', 'gone', 'lost', 'spent forever', 'irrecoverable'],
    },
    {
      type: 'build_sentence',
      instruction: 'Arrange the words into the lesson title',
      words: ['attention', 'becomes', 'pay', 'to', 'your', 'what', 'life', 'you'],
      correct: ['what', 'you', 'pay', 'attention', 'to', 'becomes', 'your', 'life'],
      translation: "A claim, not an instruction. The next move is yours.",
    },
    {
      type: 'translate',
      instruction: 'In one word — the brain principle that explains why repeated attention shapes future attention',
      prompt: 'The pattern is: neurons that fire together...',
      correct: ['wire together', 'wire', 'wire together (Hebbian)', 'become wired'],
    },
  ],

  rwenDialogue: {
    intro: "Let me ask you something specific — and harder than it sounds.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Think back over the last 24 hours. What is one thing you spent significant attention on that, looking back, you wish you hadn't?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Doomscrolling, news, social media — that kind of thing.", native: '', correct: true, feedback: "Common answer, and an honest one. The medium is built to be sticky. The question for tomorrow is not 'will I avoid it?' but 'will I notice when I'm in it?'" },
          { target: "An argument I keep replaying in my head.", native: '', correct: true, feedback: "Many people would relate. Replaying is not processing — it is rumination wearing the costume of thinking. Worth knowing the difference." },
          { target: "Someone else's life — comparing myself to a friend, a colleague, someone online.", native: '', correct: true, feedback: "Comparison is one of the most expensive forms of attention spending — a lot of currency, very little return. Recognising it is the first step." },
          { target: "Honestly, I can't think of one.", native: '', correct: true, feedback: "That's worth sitting with. Either you really did spend yesterday's attention well, or yesterday's attention was so automatic you don't have a record of it. Tomorrow, watch and see." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you said, you are now slightly more aware of how a portion of your day got spent. That awareness is itself a tool — you cannot redirect attention you can't see.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Complete the William James quote: "My experience is what I agree to ___."',
        correct: ['attend to'],
      },
      {
        prompt: 'In one phrase — why does what you attend to repeatedly become easier to attend to in the future?',
        correct: ['neurons that fire together wire together', 'wire together', 'hebbian', 'hebbian plasticity', 'the brain rewires', 'neuroplasticity'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "At one point today, ask yourself: 'Where am I spending my attention right now? Is this what I want to be paying for?' You don't have to change anything. Just see.",
    rwenSignoff: "The seeing is the change.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 6. Rwen and the user do a brief 'attention audit' of the user's last 24 hours: what got the most of their attention, what they wish had got more, what got attention by accident. The aim is awareness, not strategy.",
    rwenRole: "Rwen — non-judgemental, curious, NOT preachy about phones or social media. Helps the user see their actual attention patterns without shame. Asks follow-up questions like 'and how did that feel afterwards?' rather than 'why do you do that?'",
    successCriteria: "User names at least one specific thing that got more attention than they wanted, AND at least one thing that got less attention than they wanted (a person, an activity, a quiet moment). Bonus if they identify a specific cue that triggers attention-spending they regret.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
