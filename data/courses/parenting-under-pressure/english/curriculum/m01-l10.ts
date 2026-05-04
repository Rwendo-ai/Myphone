import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l10-late-night-when-nothing-works',
  module: 1,
  lesson: 10,
  title: 'Parenting Alone Late at Night When Nothing Is Working',
  estimatedMinutes: 9,
  xpReward: 35,

  hook: {
    rwenLine: "It is late. The child won't sleep, won't stop crying, won't talk, won't eat, or has done something that broke you. You are alone with it. You are exhausted past the place exhaustion has a word for. This lesson is for that hour. We are not going to fix the night. We are going to make it through.",
    culturalNote: "Single-parent overload, blended-family fatigue, grandparent-as-primary-carer exhaustion, the partnered parent whose partner has checked out — all share the 2am hour. The interventions are not parenting tips; they are survival moves and asking-for-help moves. ACT (Hayes) calls this committed action under pain — choosing the parent you want to be even when no part of you can feel it. If at any point during this lesson you are in real crisis, the app's crisis resources are linked at the end.",
  },

  chunks: [
    {
      id: 'survival_first',
      target: 'Survival first',
      native: "When you are this depleted, parenting tips don't work because the brain that uses them is offline. The first interventions are physical: water, food, two minutes outside, lying flat for ninety seconds. Not optional.",
      literal: 'Polyvagal theory — depleted ventral vagal tone; basic physiological self-care',
      emoji: '🚰',
      phonetic: 'You cannot pour from a body that has no water in it.',
      audioRef: null,
    },
    {
      id: 'one_other_adult',
      target: 'One other adult',
      native: "Even at 2am, even imposing, even when you swore you wouldn't ask again: text, call, voice-note one other adult. Not for advice. For witness. Loneliness is what makes the night unbearable, more than the parenting itself.",
      literal: 'Holt-Lunstad — social connection and health; loneliness research',
      emoji: '📞',
      phonetic: 'A friend awake on the other side of the message changes the temperature of the night.',
      audioRef: null,
    },
    {
      id: 'committed_action',
      target: 'Committed action',
      native: "ACT's idea: when feelings have collapsed, you act from values anyway. Not 'be the parent you want to be' — be the parent you would want a friend to be in this exact moment. Smaller. Survivable. Kind.",
      literal: 'Steven Hayes — ACT; values-based behaviour under pain',
      emoji: '🧭',
      phonetic: 'You do not have to feel like a good parent to be one for the next ten minutes.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The 2am protocol',
    explanation: "Five steps, in order. (1) Body first. Drink water. Eat something with protein. Step outside or open a window. Lie flat for ninety seconds. The instinct will say 'no time' — do it anyway, the next hour is longer than the ninety seconds. (2) Reach out. Text one other adult. Even 'awake. having a hard one.' is enough. If you are partnered and your partner is unhelpful or unavailable, that is real and is part of the problem; reach for someone outside the household. (3) Drop the goal. The night does not need to end well. The child does not need to learn a lesson tonight. You only need to make it to 6am in one piece, with the relationship not worse. (4) Smallest kind move. One. Eye contact. A hand on a back. A blanket adjusted. Whatever you can manage. The kindness is for both of you. (5) Forgive yourself in advance for what tonight will be. The replay tomorrow will try to recruit shame; pre-empt it. You are doing a hard thing alone in the dark. That is honourable, regardless of how the next hour goes.",
    examples: [
      { target: "Newborn won't stop crying, you've been up since 4am yesterday", native: "Body: water, banana. Reach out: text whoever might be awake. Drop goal: the baby does not need to settle in the next ten minutes. One kindness: hold them with a soft face, even if you can't feel soft. Forgive: this hour does not define you." },
      { target: "Your teen has done something serious — sneaking out, lying, breaking trust", native: "Body: same first. Reach out: a friend, not for advice on consequences but to not be alone with it. Drop goal: tonight is not the night for the consequence conversation. One kindness: 'We'll talk tomorrow. Get some sleep.' Forgive: you are not failing because they did this." },
      { target: "Your young child won't sleep, has been up four times, you have work in the morning", native: "Body: water, lie flat with them if you can. Reach out: voice-note a friend even if they won't see it till morning — the act of reaching out lowers cortisol. Drop goal: them sleeping is not a parenting metric tonight, it is a roll of the dice. One kindness: a hand. A hum. Forgive: tomorrow will be hard, and you will get through it." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its meaning',
      pairs: [
        { left: 'Survival first', right: 'Water, food, air, lie flat — before any parenting move' },
        { left: 'One other adult', right: 'Text, call, voice-note someone — for witness, not advice' },
        { left: 'Committed action', right: 'Act from values when the feelings have collapsed' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'At 2am, in real depletion, the FIRST move is...',
      question: 'Pick the move this lesson recommends',
      options: [
        { text: 'Find the right parenting technique for the situation', correct: false },
        { text: 'Drink water, eat something, step outside or lie flat for ninety seconds', correct: true },
        { text: "Push through and figure out what your child needs", correct: false },
      ],
      explanation: "Parenting techniques use a brain that is no longer online at 2am-after-no-food. Water, food, brief horizontal time bring just enough of the prefrontal cortex back to make the next ten minutes possible. Skipping this step is why so many late-night parenting moments get worse.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'The night does not need to _____. You only need to make it to 6am in one piece.',
      options: ['end well', 'be peaceful', 'be over'],
      correct: 'end well',
      context: "Most late-night damage comes from the parent trying to make tonight resolve. It usually doesn't. Lowering the goal is the act of self-respect that gets you through.",
    },
    {
      type: 'translate',
      instruction: 'You reach out to one other adult for ___, not for advice',
      prompt: 'For ___',
      correct: ['witness', 'company', 'a witness', 'presence', 'someone to know', 'connection', 'someone awake', 'not being alone', 'support', 'someone to know you are up'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's central permission",
      words: ['feel', 'have', 'parent', 'do', 'good', 'a', 'to', 'not', 'like', 'you'],
      correct: ['you', 'do', 'not', 'have', 'to', 'feel', 'like', 'a', 'good', 'parent'],
      translation: "...to be one for the next ten minutes. Continued: feelings can collapse and the action — small, kind, present — can hold anyway. That is the whole skill of late nights.",
    },
    {
      type: 'translate',
      instruction: "Name one body-first move from the 2am protocol",
      prompt: "Drink water, eat something, step outside, or ___",
      correct: ['lie flat', 'lie down', 'lie on the floor', 'rest flat', 'open a window', 'step outside', 'breathe slowly', 'lie down for ninety seconds', 'flat on your back', 'go horizontal'],
    },
  ],

  rwenDialogue: {
    intro: "I want to ask carefully — what's your hardest hour, in a typical week? Not the textbook hard. The actual one.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Tell me when it is, who's there, and what's going on.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's the witching hour — the bedtime stretch when everyone is exhausted and small things become big.", native: '', correct: true, feedback: "Bedtime is the most common breaking point in family life. Pre-load the protocol: water and a snack for you at 5pm before it starts; a friend you can voice-note while you're brushing teeth; the goal lowered to 'we get into the bed' rather than 'it goes smoothly.' Forgive yourself in advance for whatever the night becomes." },
          { target: "It's the 2am wake-up. I'm alone. I have no help.", native: '', correct: true, feedback: "The single-parent 2am is one of the heaviest hours in modern life. The body-first move is non-negotiable — water, a snack, two minutes flat. Reaching out at 2am can be a single text to anyone in any time zone — somebody, somewhere, will see it in the morning, and the act of having reached helps now. If this is most nights, the work above the parenting is finding adult support — a parents' group, a babysitter you trust occasionally, a relative you can ask. The exhaustion is the real problem; the parenting is what falls because of it." },
          { target: "It's right after my partner has gone to sleep or left and it's just me with the kids on a hard day.", native: '', correct: true, feedback: "The unspoken-handover hour. Whatever was hard during the day is now your job alone. Body-first: water, a snack you actually want. Reach: a friend, even by message, especially the friend who knows your situation. Drop the goal: your kids do not need an excellent night; they need a present-enough parent. That is much smaller than you have been demanding of yourself." },
          { target: "It's when one child has melted down and the others are watching it ruin the night.", native: '', correct: true, feedback: "Multi-child dynamics make the late hour harder — the watching siblings carry their own load. Body-first still applies. Reach out can be voice-noting a friend later, even after the night ends. Drop the goal: the meltdown will end on its own clock; your job is to keep your face soft and your voice low for the duration. The siblings are learning, by watching, what an adult does in a storm. That is the parenting tonight." },
          { target: "Honestly, I think I'm in real crisis. This is more than tired.", native: '', correct: true, feedback: "Thank you for telling me. I want to ask you to do one thing: please reach out to a real person tonight. The crisis resources for your country are at the end of this lesson — please use them. The AI cannot be the only voice you talk to in a hard hour, especially this one. You are not failing; you are carrying something that needs a real person to share." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The night does not have to end well. You only have to make it through. Tomorrow is its own thing, and you'll be there for it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Name one body-first move in the 2am protocol',
        correct: ['water', 'drink water', 'food', 'eat', 'eat something', 'step outside', 'lie flat', 'lie down', 'open a window', 'breath', 'breathe', 'protein', 'a snack', 'banana', 'flat for ninety seconds', 'fresh air'],
      },
      {
        prompt: "You reach out to one other adult for ___, not for advice",
        correct: ['witness', 'company', 'presence', 'connection', 'support', 'a witness', 'not being alone', 'someone to know'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "Right now — before you forget — write down (on paper or your phone) the names and numbers of three people you could text or call in a hard hour. Not for advice. For witness. Then, the next time the night gets hard, the list is already there.",
    rwenSignoff: "Three names. Now, while it's calm. The list is the gift to your future tired self.",
  },

  phase8: {
    scenario: "User has just finished Lesson 10, a lesson that touches the most depleted hours of parenting and may surface real distress. Rwen explicitly checks the user's current state at the start, offers an exit ramp, and helps them either (a) build their three-name list of supports, or (b) reach out to someone right now if the conversation reveals real present need.",
    rwenRole: "Rwen — careful, present, NOT a substitute for a human in real crisis. If the user expresses anything that suggests crisis (thoughts of harm to self or child, dissociation, sustained sleeplessness past safe limits), Rwen warmly directs them to the jurisdiction's crisis resources and to a trusted human. Otherwise, Rwen helps them build the practical list this lesson asks for.",
    successCriteria: "User produces a list of at least three named supports they could contact in a hard hour. Bonus if they identify which support is best for which kind of hard moment (e.g. one for late-night, one for relationship-with-co-parent, one for medical/practical).",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
