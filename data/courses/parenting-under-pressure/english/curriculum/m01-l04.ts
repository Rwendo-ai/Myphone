import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-your-attachment-pattern',
  module: 1,
  lesson: 4,
  title: 'Your Own Attachment Pattern, Showing Up at the Worst Time',
  estimatedMinutes: 8,
  xpReward: 30,

  hook: {
    rwenLine: "Under stress, your default attachment pattern — the way you learned to handle closeness when you were small — comes back online. It will shape how you respond to your child long before any parenting book reaches you. Today is about seeing your own pattern clearly enough to choose around it.",
    culturalNote: "Bowlby and Ainsworth mapped infant attachment in the 1960s and 70s. Levine & Heller's *Attached* translated the work to adult relationships. The patterns are not life sentences — they are habits the nervous system installed when it had to. Adults can develop earned secure attachment. The first move is recognising what you do when the heat is on.",
  },

  chunks: [
    {
      id: 'anxious_pattern',
      target: 'Anxious activation',
      native: "When connection feels unstable, you move toward — push, ask again, escalate, demand reassurance. With a child: hovering, over-explaining, repeating questions to a child who is shut down.",
      literal: 'Bowlby/Ainsworth — anxious-preoccupied attachment; Levine & Heller',
      emoji: '🔄',
      phonetic: 'The fear: I am being abandoned. The move: chase.',
      audioRef: null,
    },
    {
      id: 'avoidant_pattern',
      target: 'Avoidant withdrawal',
      native: "When intimacy or conflict gets too intense, you pull away — go cold, go silent, leave the room, suddenly busy. With a child: emotional distance at the moment they most need you.",
      literal: 'Bowlby/Ainsworth — dismissive-avoidant attachment',
      emoji: '🚪',
      phonetic: 'The fear: I will be engulfed. The move: retreat.',
      audioRef: null,
    },
    {
      id: 'earned_secure',
      target: 'Earned secure',
      native: "Not a personality. A capacity built over time, by noticing your default pattern, breathing through it, and choosing the response your child needs rather than the one your nervous system reaches for.",
      literal: "Main & Goldwyn — earned-secure attachment; Siegel — Parenting from the Inside Out",
      emoji: '🌳',
      phonetic: 'You do not stop having the pattern. You stop being run by it.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'How your pattern shows up under parenting stress',
    explanation: "Notice that nothing in this lesson tells you your pattern is bad. The patterns developed because they kept you safe. The trouble is that they were calibrated for the home you grew up in, not the child in front of you now. Anxious parents often produce children who experience them as overwhelming. Avoidant parents often produce children who experience them as absent. Both groups love their children fiercely. The first move is recognising the pattern at the moment it activates — usually about ninety seconds before the parenting move you'll regret.",
    examples: [
      { target: "Anxious parent + a teen who pulled away", native: "Pattern: 'Why won't you talk to me? Are you angry? What did I do?' — escalating questions a teen cannot answer. Earned-secure move: 'I'm here when you're ready' and going to do something else." },
      { target: "Avoidant parent + a child mid-meltdown", native: "Pattern: 'When you're done being like this, come find me' (and walking out). Earned-secure move: staying in the room, even silent, even uncomfortable. The presence is the parenting." },
      { target: "Either pattern + a small child who said something cruel", native: "Anxious: long emotional speech. Avoidant: cold shutdown. Earned-secure: short, calm, real — 'That hurt. Let's both come back to this in a minute.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the pattern to its move under stress',
      pairs: [
        { left: 'Anxious activation', right: 'Move toward — push, ask, escalate' },
        { left: 'Avoidant withdrawal', right: 'Pull away — go cold, go silent, leave' },
        { left: 'Earned secure', right: 'Notice the pattern, choose around it' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Earned secure attachment is best described as...',
      question: 'Pick the most accurate description',
      options: [
        { text: 'A personality type some lucky people are born with', correct: false },
        { text: 'A capacity built by noticing your default pattern and choosing around it over time', correct: true },
        { text: 'A state where you no longer feel anxious or avoidant urges', correct: false },
      ],
      explanation: "You don't stop feeling the pull. You stop being driven by it. Earned-secure parents still feel anxious or avoidant under stress — they just have a slightly bigger gap between feeling it and acting it.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'You do not stop having the pattern. You stop being _____ by it.',
      options: ['run', 'changed', 'helped'],
      correct: 'run',
      context: "The pattern is information about how your nervous system was shaped. The work is not erasure — it's recognising the pull early enough to choose differently.",
    },
    {
      type: 'translate',
      instruction: 'The anxious pattern under stress moves which direction?',
      prompt: 'Toward the other person — push, ask, ___',
      correct: ['escalate', 'chase', 'demand', 'pursue', 'cling', 'over-explain', 'reassure', 'check in', 'repeat', 'insist'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the lesson\'s reframe of attachment patterns',
      words: ['kept', 'they', 'safe', 'you'],
      correct: ['they', 'kept', 'you', 'safe'],
      translation: 'Your pattern was an intelligent response to the home you were small in. The child in front of you needs something different. Both can be true.',
    },
    {
      type: 'translate',
      instruction: 'The avoidant pattern under stress moves which direction?',
      prompt: 'Away — go cold, go silent, ___',
      correct: ['leave', 'leave the room', 'withdraw', 'shut down', 'pull away', 'disengage', 'become busy', 'check out', 'distance'],
    },
  ],

  rwenDialogue: {
    intro: "Here's the question this lesson asks. There's no right answer — only an honest one.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "When your child does something that hurts or scares you, what is your default first move — toward them, asking and pushing, or away from them, going quiet or busy?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Toward. I push. I want to fix it now. I can't stand the not-knowing.", native: '', correct: true, feedback: "That's the anxious pattern. It's a real strength — your child knows you care, knows you'll show up. The work is that sometimes children — especially older ones — need you to back off for ten minutes so they can come to you. The push closes the door it's trying to open." },
          { target: "Away. I go cold or busy. I tell myself I'm giving them space, but really I just can't stay in it.", native: '', correct: true, feedback: "That's the avoidant pattern. It often comes from a childhood where intensity wasn't safe to share. Your strength: you don't crowd your child. The work is staying in the room when leaving feels easier — sometimes the staying *is* the parenting, even silent." },
          { target: "Both, depending on the day or the child. Sometimes I push, sometimes I retreat.", native: '', correct: true, feedback: "Honest. Most of us have a dominant pattern but slip into the other under different stresses. Notice what triggers each — often anxiety pushes you to chase, exhaustion pushes you to withdraw. Same person, different fuel." },
          { target: "I genuinely don't know. I've never thought about this before.", native: '', correct: true, feedback: "Most parents never have. The next time something hard happens with your child, just notice — without judging it — what your body wanted to do first. That observation alone is the first move toward earned-secure parenting." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Your pattern is not your verdict. It's your weather. Once you know your weather, you dress for it. That's all this lesson is asking.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Name the two main attachment patterns under stress (one moves toward, one moves ___)',
        correct: ['away', 'avoidant', 'withdraws', 'withdraw', 'pulls away', 'retreats', 'pull away'],
      },
      {
        prompt: 'Earned secure means you stop being ___ by your pattern',
        correct: ['run', 'driven', 'controlled', 'led', 'dictated to', 'ruled'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "In the next 24 hours, the next time something with your child stresses you, before you act on it, ask one question: 'Is this me wanting to push, or me wanting to retreat?' Just notice the pull. Don't try to override it yet. Awareness is the entire mission today.",
    rwenSignoff: "Notice the pull. That's all. The choosing comes later.",
  },

  phase8: {
    scenario: "User has just finished Lesson 4. Rwen helps them identify their dominant attachment pattern under parenting stress (without judging it as good or bad), and rehearse one alternative move they could try when the pull next activates.",
    rwenRole: "Rwen — non-clinical, warm. Does not psychoanalyse the user's childhood. Stays focused on the present pattern and the next moment, not the origin story.",
    successCriteria: "User names their dominant pattern (anxious, avoidant, or both) without self-criticism, and identifies one specific alternative move they want to try in their next stressed moment with their child. Bonus if they articulate that the pattern was once protective even if it doesn't serve them now.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
