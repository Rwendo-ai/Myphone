import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l11-the-child-hard-to-like-today',
  module: 1,
  lesson: 11,
  title: 'The Child Who Is Hard to Like Today',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "There are days when you love your child fiercely and do not really like them right now. Most parenting content refuses to admit this. Today we say it plainly, and we work with it honestly. You are not a worse parent for feeling it. You are a worse parent if you pretend you don't.",
    culturalNote: "Holding two true things at once — deep love and present-day frustration — is a core skill of mature attachment. Pretending only one is true (sentimentality) or pretending only the other is (cynicism) both damage the relationship. Sue Johnson's work on attachment-based therapy and Esther Perel on long-term relationships both make the same observation: real bonds include the days when you don't feel the bond.",
  },

  chunks: [
    {
      id: 'two_true_things',
      target: 'Two true things at once',
      native: "You love them. Today you do not like them. Both are true. Trying to flatten one into the other is what makes parents either dishonest or cruel.",
      literal: "Esther Perel — long-term relational complexity; IFS — multiple parts at once",
      emoji: '⚖️',
      phonetic: 'Both. Not one. Both.',
      audioRef: null,
    },
    {
      id: 'co_regulation_without_warmth',
      target: 'Co-regulation without warmth',
      native: "Even on days you don't feel warm, you can still keep a level voice and a steady presence. Warmth is a feeling that comes and goes. Steadiness is a behaviour you choose. The child borrows steadiness, not your mood.",
      literal: 'Polyvagal theory — calm presence; ACT — values-based action when feeling is absent',
      emoji: '🧱',
      phonetic: "Be a wall, not a fortress. Solid, not closed.",
      audioRef: null,
    },
    {
      id: 'the_long_view',
      target: 'The long view',
      native: "A hard week is a hard week, not a verdict on the relationship. Children — and adult children — go through phases that are genuinely difficult to be near. The relationship is bigger than any phase of it, if you let it be.",
      literal: "Erik Erikson — developmental phases; Stoic memento mori applied to family time",
      emoji: '🏔️',
      phonetic: 'Today is a day. The relationship is a decade.',
      audioRef: null,
    },
  ],

  pattern: {
    name: "Honest love on a hard day",
    explanation: "The trap most parents fall into: pretending to feel warmth they don't have. Children read it instantly — performed warmth feels worse than honest steadiness, because they sense the lie. The alternative is not coldness. The alternative is honest presence: a level voice, a steady face, the ordinary courtesies, the parenting tasks done. You don't have to feel warm to be loving. You don't have to fake it either. The warmth comes back, usually within days, sometimes hours, and it comes back faster when you have not been pretending in the meantime.",
    examples: [
      { target: "A child who has been complaining and ungrateful all week", native: "Sentimental version: forced cheerfulness, secret resentment. Cynical version: snide comments, withdrawal. Honest version: 'I'm tired today and so are you. Let's both keep our voices low and get through dinner.' True. Steady. Not cold." },
      { target: "A teen who is being genuinely unpleasant to live with", native: "The temptation to take it personally is enormous. The discipline: their phase is not about you. Stay steady, hold the small daily structures, do not retaliate, do not pretend to enjoy them when you don't. The phase ends. Your steadiness is what they remember." },
      { target: "An adult child you find difficult right now", native: "You are allowed to find an adult child difficult and still love them. Don't perform warmth on calls. Be honest, brief, present. 'I love you. This phase between us is hard. I'm not going anywhere.' That sentence does more than a hundred performed conversations." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its meaning',
      pairs: [
        { left: 'Two true things at once', right: 'Deep love and present-day frustration coexist' },
        { left: 'Co-regulation without warmth', right: 'Steady voice, steady presence, even without the feeling' },
        { left: 'The long view', right: 'A hard week is not a verdict on the relationship' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'On a day you find your child hard to like, the right move is...',
      question: 'Pick the move this lesson recommends',
      options: [
        { text: 'Force yourself to feel and perform warmth so they don\'t notice', correct: false },
        { text: 'Keep a level voice and steady presence, without faking the feeling', correct: true },
        { text: 'Be honest and tell them you don\'t like them today', correct: false },
      ],
      explanation: "Performed warmth feels false to a child and is actually more wounding than honest steadiness. Telling them outright is unloading the parent's feelings onto them, which is not their job. The middle move is the kindness: steady, real, not performing.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Warmth is a feeling that comes and goes. Steadiness is a _____.',
      options: ['behaviour you choose', 'feeling you cultivate', 'gift'],
      correct: 'behaviour you choose',
      context: "ACT's distinction. Feelings cannot be willed; behaviours can. The child borrows your behaviour, not your mood. That is what 'parenting from values' means in practice.",
    },
    {
      type: 'translate',
      instruction: 'Today is a day. The relationship is a ___',
      prompt: 'A ___',
      correct: ['decade', 'lifetime', 'long time', 'whole life', 'longer thing', 'long arc', 'long story', 'whole arc', 'years', 'long period'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the lesson\'s permission',
      words: ['fake', 'have', 'do', "you", 'to', "n't", 'it'],
      correct: ['you', "do", "n't", 'have', 'to', 'fake', 'it'],
      translation: "(Read 'don't' as 'do not'.) You can be steady without performing a feeling. The performance is what corrodes; the steadiness is what holds.",
    },
    {
      type: 'translate',
      instruction: 'You can love them and not ___ them today',
      prompt: 'Not ___',
      correct: ['like', 'enjoy', 'particularly like', 'especially like', 'feel warm toward', 'feel close to', 'feel fond of', 'feel like being near'],
    },
  ],

  rwenDialogue: {
    intro: "Honest question. Is there a child in your life who is genuinely hard to be near right now?",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "You don't have to feel guilty for the answer. Tell me what's true.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Yes — one of my children is in a phase that I find exhausting and I don't enjoy them right now.", native: '', correct: true, feedback: "Honest, brave, common. The work is not to manufacture enjoyment. The work is to keep your behaviour steady and to find tiny moments of contact that are easy — a hand on a shoulder, a shared joke that doesn't require anything, a meal where nobody has to perform. Those small contacts feed the relationship while the phase plays out." },
          { target: "Yes — and I feel terrible for feeling it.", native: '', correct: true, feedback: "The guilt is the proof you're not heartless. But the guilt itself is corrosive — it makes you avoid them, which deepens the distance, which deepens the guilt. Lesson 7's replacement script applies: 'I find this hard right now. Many parents do. I'll stay steady and the phase will pass.' Less guilt, more steadiness, the relationship survives." },
          { target: "Yes — and I worry I'm a bad parent for it.", native: '', correct: true, feedback: "Bad parents pretend not to feel it and then leak it sideways — sarcasm, cold shoulders, eye-rolls. The fact that you're naming it openly is a sign of being a present parent, not a failing one. You can be honest with yourself and steady with them. That's all this lesson is asking." },
          { target: "Honestly no, but I dread the phase coming.", native: '', correct: true, feedback: "It probably will, with most children, at some point. Pre-loading: when you eventually find them hard to like, you do not have to fake it. You stay steady. The relationship is bigger than the phase. Knowing that now means you won't panic when it arrives." },
          { target: "It's an adult child. We are estranged or close to it.", native: '', correct: true, feedback: "Adult-child estrangement is a different shape and often needs more than a course. The principle still holds: do not perform a closeness that isn't there, but do not abandon either. A short, real message — 'I love you. I am here when you are ready. I am not going anywhere' — sent without expectation, repeats over time, and held without pressure. If estrangement is the active wound, a therapist who works with adult-child relationships is worth the time." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The relationship survives the days you don't like them, if you let it. Honest, steady, present — without performance — is the version that lasts.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Warmth is a feeling. Steadiness is a ___',
        correct: ['behaviour', 'choice', 'behavior', 'a behaviour you choose', 'a behavior you choose', 'behaviour you choose', 'practice', 'action', 'commitment'],
      },
      {
        prompt: "Today is a day. The relationship is a ___",
        correct: ['decade', 'lifetime', 'long time', 'long arc', 'whole life', 'longer thing', 'years', 'long story'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "If there's a child in your life you find hard right now, do one steady thing today that you would do anyway — make their food, give them a lift, ask if they want a drink — without performing warmth and without withdrawing. Just steady. That is the practice.",
    rwenSignoff: "Steady, not performing. The relationship is built in the ordinary acts.",
  },

  phase8: {
    scenario: "User has just finished Lesson 11. Rwen helps them practise honest steadiness with a child they currently find hard — what one ordinary act they will do today, without faking warmth and without withdrawing. Distinguishes this skill from both performance and coldness.",
    rwenRole: "Rwen — non-judgemental, never moralising about parents who don't feel warm. Helps the user identify a doable, real, ordinary act of steadiness for the next 24 hours.",
    successCriteria: "User identifies one ordinary act they will do today (cook, lift, ask, sit near) and articulates that they will not pretend to feel warm or withdraw. Bonus if they note that this protects the long view of the relationship.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
