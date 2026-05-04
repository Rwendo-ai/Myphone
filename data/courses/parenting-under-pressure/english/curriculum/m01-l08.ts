import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-when-they-say-i-hate-you',
  module: 1,
  lesson: 8,
  title: 'When Your Child Says "I Hate You"',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "If you grew up hearing this from a parent, or saying it, this lesson may bring that up. We stay focused on the present moment — what to do when a child you love says these words to you. If you need to come back to this one tomorrow, that's fine.",
    culturalNote: "Almost every parent will hear this from their child at some point. It is one of the most common, and most wounding, sentences in family life. The wound is real. What the words mean is almost never what they say. Daniel Siegel writes that big feelings in children often come dressed in big words, because their brains have not yet developed the precision the feeling needs. The job of the adult is to hear the feeling, not the dictionary.",
  },

  chunks: [
    {
      id: 'translation',
      target: 'The translation',
      native: "What 'I hate you' usually actually means: 'I am overwhelmed and I feel safe enough with you to throw the worst thing I can think of at you.' The very fact they said it is, paradoxically, evidence of attachment.",
      literal: "Daniel Siegel — big feelings in undeveloped vocabulary; attachment theory — protest behaviour as evidence of bond",
      emoji: '🔄',
      phonetic: "They don't say it to people they aren't attached to.",
      audioRef: null,
    },
    {
      id: 'do_not_match',
      target: 'Do not match the words',
      native: "Don't volley back ('You hate ME?'). Don't collapse ('How can you say that to me?'). Don't punish the words ('Go to your room for saying that'). Match the feeling underneath, not the words on top.",
      literal: 'Co-regulation; NVC — feelings and needs underneath blame',
      emoji: '🛡️',
      phonetic: "The words are smoke. The feeling is the fire.",
      audioRef: null,
    },
    {
      id: 'the_wound',
      target: 'The wound is real',
      native: "These words land. They cut. The right response is not to pretend you weren't hit. The right response is to stay in the room — wounded, real, and not retaliating — and to talk about it later when you're both ready.",
      literal: 'Repair; Self-compassion (Neff); Siegel & Bryson — connection before correction',
      emoji: '🩹',
      phonetic: "Hurt and not abandoning. Both at once.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three moves when those words arrive',
    explanation: "First move: don't speak for ten seconds. Take one slow breath. The words have hit; you need a moment. Second move: respond to the feeling, not the sentence. Something like: 'You're really angry / really hurt right now. I can hear that.' Not 'No you don't' (denying), not 'How dare you' (escalating), not 'Fine, I'll leave then' (collapsing). Third move: later, when both of you are calm — minutes or hours later — come back. 'Earlier when you said you hated me — I want you to know I didn't take it as the literal truth. I heard you were really angry. I'd like to know what was underneath.' That conversation is where the actual repair lives.",
    examples: [
      { target: "Five-year-old, mid-meltdown over screen time", native: "First move: breath. Second move: 'You really wanted more time. You're so frustrated.' Third move (later, calm): a cuddle and 'When you said you hated me earlier, that was a big feeling. Tell me what was happening.'" },
      { target: "Twelve-year-old, after a no on a sleepover", native: "First move: breath. Second move: 'I know that's a hard no. I get that you're furious.' Third move (later): 'When you said it earlier, that landed. I want you to know I didn't take it as the truth — but I want to understand.' Don't moralise about saying it; just talk about what was under it." },
      { target: "Adult child, in an intense argument", native: "Same shape, slower pace. 'I can hear you're really angry with me. I'm not going to argue back right now.' Step away. Days later: 'I want to come back to what you said. I'm not asking you to take it back. I'm asking what was underneath, when you're ready to tell me.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its meaning',
      pairs: [
        { left: 'The translation', right: "What the words usually actually mean — overwhelm, not literal hate" },
        { left: "Do not match the words", right: "Don't volley back, don't collapse, don't punish — respond to the feeling" },
        { left: 'The wound is real', right: "Stay in the room — hurt, not retaliating, not abandoning" },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'When your child says "I hate you," the wrong move is...',
      question: 'Pick the response that escalates or collapses the moment',
      options: [
        { text: "'You're really angry right now. I can hear that.'", correct: false },
        { text: "'How dare you say that to me. Go to your room.'", correct: true },
        { text: "Take a breath, say nothing for ten seconds, then respond", correct: false },
      ],
      explanation: "Punishing the words trains the child to hide the feeling next time, not to feel it less. The other two responses meet the feeling under the words — which is what changes the pattern over time.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "The words are smoke. The feeling is the _____.",
      options: ['fire', 'truth', 'problem'],
      correct: 'fire',
      context: "If you put out the smoke, you've done nothing. The fire under it — overwhelm, fear, helplessness — is what needs your attention. That's what cooperation later in the day is built on.",
    },
    {
      type: 'translate',
      instruction: "What does 'I hate you' usually actually mean?",
      prompt: "I am overwhelmed and I feel ___ enough with you to say it",
      correct: ['safe', 'safe enough', 'secure', 'attached', 'close', 'connected', 'loved'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the move that comes first",
      words: ['speak', 'do', 'ten', 'not', 'for', 'seconds'],
      correct: ['do', 'not', 'speak', 'for', 'ten', 'seconds'],
      translation: 'Ten seconds is enough for the words to land, the wound to register, and the response not to be a reflex. The next sentence will be a different sentence.',
    },
    {
      type: 'translate',
      instruction: "When does the actual repair conversation about those words happen?",
      prompt: "Later, when both of you are ___",
      correct: ['calm', 'calmer', 'ready', 'regulated', 'settled', 'okay', 'okay again', 'both calm', 'less heated', 'cooled down'],
    },
  ],

  rwenDialogue: {
    intro: "I want to ask carefully — has a child of yours said this to you, and how did it land?",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Tell me what's true for you. There's no graded answer here.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes, and I shouted back. I felt cruelly attacked.", native: '', correct: true, feedback: "Most parents who heard those words at least once shouted back at least once. The wound was real. The work now is two-part: forgive yourself for the volley (Lesson 7's replacement script), and the next time it happens, give yourself ten seconds before any reply. That's the only different move you need." },
          { target: "Yes, and I went cold and walked out. I shut down.", native: '', correct: true, feedback: "Withdrawal is a real wound to a child even though it doesn't sound like one — they read it as 'love is conditional on you not having big feelings.' The work next time: stay in the room, even silently, even painfully. The presence — wounded, not retaliating — is the parenting." },
          { target: "Yes, and I think I cried in front of them. I made them feel guilty.", native: '', correct: true, feedback: "It's understandable. The words hit hard and we are not robots. The repair shape afterwards is: 'Earlier I cried when you said that. That wasn't fair to put on you — those words hurt me, but my feelings about it weren't your job to fix. I want to come back to what was actually happening for you.' Owning your reaction without making them comfort you." },
          { target: "No, but I am dreading the day they do.", native: '', correct: true, feedback: "Dread is reasonable. Pre-loading the moves now — breath, name the feeling underneath, talk about it later — means when it happens you have something to reach for. The first time will still hurt. The framework will mean you don't compound the wound by reacting badly." },
          { target: "Yes, an adult child has, and we are not okay.", native: '', correct: true, feedback: "Adult-child estrangement is one of the heaviest carries in modern family life. This lesson is foundational, but the repair work over years is more than a course. If it is right for you, finding a therapist who specialises in adult-child relationships is worth the cost. The principles are the same; the timeline is longer; the love is just as real." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever happened, you're here, learning a different move for next time. That itself is what changes things.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What does 'I hate you' usually actually mean? (I am ___ and I feel safe enough with you to say it)",
        correct: ['overwhelmed', 'overwhelmed and angry', 'angry', 'angry and overwhelmed', 'too much', 'flooded', 'too overwhelmed', 'big-feelinged', 'in too much feeling', 'full of feeling'],
      },
      {
        prompt: 'When does the actual repair conversation about those words happen?',
        correct: ['later', 'later when calm', 'when both are calm', 'when both calm', 'after both have calmed', 'when calm', 'minutes or hours later', 'once everyone is calm', 'after everyone is calm', 'when both are regulated'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "Pre-load the three moves before they're needed: breath, respond to the feeling not the words, repair-talk later. Picture the next time you might hear something cruel from your child. Walk through the three moves in your imagination once. That rehearsal is the whole mission.",
    rwenSignoff: "Rehearse it once, calmly, today. So the body knows what to do tomorrow.",
  },

  phase8: {
    scenario: "User has just finished Lesson 8, a lesson that touches a real and painful experience for many parents. Rwen helps them either (a) process a moment that already happened, or (b) pre-load the three moves for a moment they fear. Rwen offers an exit ramp at the start and checks in mid-conversation about whether the user is okay.",
    rwenRole: "Rwen — gentle, present, never escalating. Does not ask for the worst details. Mirrors the user's feeling. Reminds them, if they seem to be carrying a heavy load, that talking with a real person — friend, partner, therapist — is worth more than talking with the AI for difficult material.",
    successCriteria: "User either drafts a repair-talk for a past 'I hate you' moment or rehearses the three moves for a future one. Bonus if they articulate that the words coming from their child were not a verdict on them as a parent.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
