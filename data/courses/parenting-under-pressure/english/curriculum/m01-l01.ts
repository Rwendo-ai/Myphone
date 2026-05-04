import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-nervous-system-thermostat',
  module: 1,
  lesson: 1,
  title: 'Your Nervous System Is the Thermostat',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Before any parenting tip works, one thing has to be true: the adult in the room is calmer than the child. Not perfectly calm. Just calmer. Today is about why that is the whole game, and how to come back to it when you've lost it.",
    culturalNote: "Polyvagal theory (Porges) and Daniel Siegel's interpersonal neurobiology converge on the same point — children's nervous systems regulate by borrowing from a regulated adult nearby. This is older than psychology. Every grandmother who ever held a screaming baby until both of them softened was practising co-regulation.",
  },

  chunks: [
    {
      id: 'co_regulation',
      target: 'Co-regulation',
      native: "When one nervous system borrows calm from another. The child cannot calm themselves down faster than the adult nearest them.",
      literal: 'Polyvagal theory (Porges); Daniel Siegel — interpersonal neurobiology',
      emoji: '🫂',
      phonetic: 'You are the thermostat. The room takes its temperature from you.',
      audioRef: null,
    },
    {
      id: 'activated_state',
      target: 'Activated state',
      native: "Sympathetic nervous system on — heart up, jaw tight, voice sharp. Useful for running from danger; bad for parenting.",
      literal: 'Polyvagal — sympathetic activation; "fight or flight"',
      emoji: '⚡',
      phonetic: 'You can feel it in the body before you hear it in the words.',
      audioRef: null,
    },
    {
      id: 'regulated_state',
      target: 'Regulated state',
      native: "Ventral vagal — slower breath, softer face, voice that lands instead of attacks. The state from which good parenting is possible at all.",
      literal: 'Polyvagal — ventral vagal / social engagement system',
      emoji: '🌿',
      phonetic: 'Not perfect peace. Just enough room to think one full sentence.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The thermostat principle',
    explanation: "When your child is dysregulated, they cannot meet you in your activated state and become regulated. They borrow whatever state you are in. If you are activated, the room escalates. If you are regulated, the room — eventually, sometimes slowly — softens. The order of operations is fixed: you regulate first, then you parent. Trying to parent from an activated state is the most common reason parenting interventions don't work.",
    examples: [
      { target: 'Toddler screaming in a shop', native: "You feel the heat rise. If you match it, the volume doubles. If you slow your breath and lower your voice, they don't stop instantly — but the curve bends." },
      { target: '14-year-old slamming a door', native: "Your impulse is to shout through it. If you do, you've handed them your nervous system. If you sit down outside it for 60 seconds and breathe first, the conversation that follows is a different conversation." },
      { target: 'Adult child on the phone, upset with you', native: "The same rule. Your job is not to be right faster. Your job is to be the calmer voice on the line. From there, almost anything is workable." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its definition',
      pairs: [
        { left: 'Co-regulation', right: 'When one nervous system borrows calm from another' },
        { left: 'Activated state', right: 'Heart up, jaw tight, voice sharp' },
        { left: 'Regulated state', right: 'Slower breath, softer face, voice that lands' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your child is mid-meltdown. The first move is to...',
      question: 'Pick the move this lesson recommends',
      options: [
        { text: 'Tell them firmly to calm down', correct: false },
        { text: 'Slow your own breath and soften your face before you speak', correct: true },
        { text: 'Match their volume so they know you mean it', correct: false },
      ],
      explanation: "A child cannot regulate faster than the adult nearest them. Your slower breath is not a passive move — it's the active intervention. Telling them to calm down from your own activated state is asking water to flow uphill.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'You are the _____. The room takes its temperature from you.',
      options: ['thermostat', 'thermometer', 'parent'],
      correct: 'thermostat',
      context: "A thermostat sets the temperature. A thermometer just reads it. Most exhausted parents are running as thermometers — reading and matching the room. The shift to thermostat is small but everything.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is co-regulation?',
      prompt: 'When one nervous system borrows _____ from another',
      correct: ['calm', 'calmness', 'regulation', 'state', 'a state', 'its state', 'steadiness'],
    },
    {
      type: 'build_sentence',
      instruction: "Arrange the lesson's central claim",
      words: ['regulate', 'first', 'parent', 'then', 'you', 'you'],
      correct: ['you', 'regulate', 'first', 'then', 'you', 'parent'],
      translation: 'The order is fixed. Trying to do the second without the first is why so many parenting tips fail in real homes.',
    },
    {
      type: 'translate',
      instruction: 'Name one body cue that tells you you are activated',
      prompt: 'You feel it as...',
      correct: ['heat', 'tight jaw', 'jaw tight', 'jaw clenched', 'racing heart', 'fast heart', 'tight chest', 'heat in chest', 'shallow breath', 'sharp voice', 'tension', 'tightness'],
    },
  ],

  rwenDialogue: {
    intro: "Bring to mind a recent moment where your child was upset and you felt your own state climb. We're not going to fix it. We're just going to look at the thermostat.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Picture the last time your child was really losing it. Where in your own body did you feel it first? Don't think too hard. The first thing that came to mind is the answer.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "In my chest. Heat, tight, fast.", native: '', correct: true, feedback: "That's a sympathetic activation cue. The next time you feel it climb, that heat is your signal — not to fix the child, but to lengthen your own exhale by two counts. Do that first. The whole next minute is different." },
          { target: "In my jaw. I clench before I even know I'm angry.", native: '', correct: true, feedback: "Jaw is one of the most reliable early-warning signals — it tightens before the voice goes sharp. If you can catch the jaw, you've caught the moment with two seconds to spare. That's enough." },
          { target: "In my voice. By the time I notice, I'm already shouting.", native: '', correct: true, feedback: "That's honest. Most of us have been there. The work isn't to shout less by willpower — that fails. The work is to catch the body cue earlier. Practise noticing your jaw or your chest in calm moments, so the signal is recognisable when it counts." },
          { target: "Honestly, I just go numb. I shut down rather than blow up.", native: '', correct: true, feedback: "That's the dorsal-vagal end of the polyvagal map — shutdown rather than activation. Same root: the system has decided this is too much. The recovery move is the same — slow exhale, feet on the floor, one full sentence to yourself before you speak." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whichever it is for you, that's your alarm. Not a flaw. A signal. The signal isn't telling you to be a better parent. It's telling you to take one slower breath before the next thing you say.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'What is co-regulation, in one phrase? (one nervous system borrows ___ from another)',
        correct: ['calm', 'calmness', 'regulation', 'a state', 'state', 'steadiness'],
      },
      {
        prompt: "Complete: 'You are the ___. The room takes its temperature from you.'",
        correct: ['thermostat'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "Sometime in the next 24 hours, when your child (any age — toddler, teen, adult kid) does something that spikes you, before you say a word, lengthen your next exhale to twice the length of the inhale. One breath. Then speak. Notice if the next thirty seconds went any differently.",
    rwenSignoff: "One longer exhale before one reply. Smallest possible move. Real over time.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 1. Rwen helps them rehearse the thermostat move for a specific upcoming moment they expect to find difficult — bedtime resistance, a teen's after-school mood, a phone call with an adult child. Aim is to mentally pre-load the body cue + slow exhale sequence so it's available when the heat actually rises.",
    rwenRole: "Rwen — warm, practical, not promising the user perfection. Helps them identify (a) the specific situation, (b) the body cue they'll likely feel first, (c) the one-breath move. Treats the upcoming moment as a real challenge, not a test.",
    successCriteria: "User names a concrete upcoming parenting moment, names the body cue they expect (chest heat, jaw tension, voice sharpening, going numb), and rehearses the slow-exhale move at least once. Bonus if they articulate that they are not trying to be a perfect parent — just the calmer voice in the room for thirty seconds.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
