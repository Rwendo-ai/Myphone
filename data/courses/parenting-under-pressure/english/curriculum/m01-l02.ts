import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-three-second-pause',
  module: 1,
  lesson: 2,
  title: 'The Three-Second Pause Before You Reply',
  estimatedMinutes: 6,
  xpReward: 25,

  hook: {
    rwenLine: "Your child says or does something that hits a nerve. The reply is already forming. Today is about the smallest, most powerful intervention in parenting: the half-second longer between what they did and what you say next.",
    culturalNote: "Frankl's line — 'Between stimulus and response there is a space' — predates parenting books and applies to all of life. Siegel calls the parent's version of this 'staying upstairs' (prefrontal cortex) instead of 'going downstairs' (limbic reactivity). The neurology is real; the practice is small.",
  },

  chunks: [
    {
      id: 'flip',
      target: 'The flip',
      native: "The half-second where the parent's prefrontal cortex hands over to the limbic system. Voice goes sharp before thought catches up.",
      literal: "Daniel Siegel — 'flipping your lid' (The Whole-Brain Child)",
      emoji: '⚡',
      phonetic: 'You feel it as heat. By the time you hear yourself shouting, you have already flipped.',
      audioRef: null,
    },
    {
      id: 'the_pause',
      target: 'The three-second pause',
      native: "Three slow seconds — one breath in, two breaths out — between the trigger and your reply. Long enough to come back upstairs.",
      literal: 'Frankl (attributed); Stoic prohairesis; modern emotion regulation (James Gross)',
      emoji: '⏸️',
      phonetic: "It's not three seconds of silence as a tactic. It's three seconds of you returning to yourself.",
      audioRef: null,
    },
    {
      id: 'response',
      target: 'A response, not a reaction',
      native: "What comes out after the pause: still firm, still real, but yours — chosen, not flung.",
      literal: 'Reaction = automatic; response = chosen, even slightly',
      emoji: '🎯',
      phonetic: 'You can still say no. You can still be angry. The pause does not soften the message — it owns it.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three-second sequence',
    explanation: "Three seconds, three moves. Second one: notice the body cue (heat, jaw, voice climbing). Second two: long exhale. Second three: name the feeling silently — 'this is anger', 'this is fear, dressed as anger'. Then speak. The point is not to delay you so the moment passes. The point is to let you arrive at the moment as yourself.",
    examples: [
      { target: "Toddler hurls food across the kitchen", native: "Reaction: shout. Response (after 3s): 'No. Food stays on the table. Get a cloth, we clean it together.' Same firmness, less heat." },
      { target: "Teen rolls their eyes mid-sentence", native: "Reaction: 'Don't you dare.' Response (after 3s): 'I see that. I'm still going to finish what I was saying.' The eye-roll loses its power because it didn't hijack you." },
      { target: "Adult child cancels visit with 30 minutes' notice", native: "Reaction: a sharp text you'll regret. Response (after 3s): 'I'm disappointed. Can we find another time soon?' True, firm, not corrosive." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its definition',
      pairs: [
        { left: 'The flip', right: 'When the prefrontal cortex hands over to the limbic system' },
        { left: 'The three-second pause', right: 'A short return to yourself before replying' },
        { left: 'A response', right: 'What comes out after the pause — chosen, not flung' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Three seconds is meant to do what?',
      question: 'Pick the most accurate description',
      options: [
        { text: 'Buy time for the child to settle down', correct: false },
        { text: 'Let the parent come back upstairs — prefrontal back online — before speaking', correct: true },
        { text: 'Suppress the parent\'s feelings so the moment passes more quickly', correct: false },
      ],
      explanation: "The pause is for the parent, not the child. It lets the part of your brain that thinks in full sentences come back online before the part that just shouts grabs the microphone. It is not suppression — it is restoration.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the phrase',
      sentence: 'A reaction is automatic. A response involves _____.',
      options: ['choice', 'silence', 'permission'],
      correct: 'choice',
      context: "You can still be firm, angry, even loud. The difference is that you chose it. The reaction would have happened with or without you in the room.",
    },
    {
      type: 'translate',
      instruction: 'Name the three moves inside the three-second pause',
      prompt: 'Notice the body, exhale, and...',
      correct: ['name the feeling', 'name what you feel', 'name it', 'name the emotion', 'naming the feeling', 'name what is there', 'name the heat'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's central claim",
      words: ['the', 'pause', 'is', 'parent', 'for', 'the'],
      correct: ['the', 'pause', 'is', 'for', 'the', 'parent'],
      translation: "Not for the child. The child does not need you to be slower. They need you to be present.",
    },
    {
      type: 'translate',
      instruction: 'Three slow seconds — one breath in, ___',
      prompt: 'Two breaths...',
      correct: ['out', 'breath out', 'breaths out', 'long out', 'longer out', 'slow out'],
    },
  ],

  rwenDialogue: {
    intro: "Bring to mind a typical hot moment in your house. We're going to walk it backwards in slow motion.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Pick a recurring trigger — a thing your child does that always lights you up. It might be a tone, a refusal, a mess. What is the thing?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "When my child whines instead of asking properly.", native: '', correct: true, feedback: "Whining hits parents hard because the brain registers it as distress. The body cue is usually a tightening in the jaw or shoulders. Next time it starts, your three seconds are: notice the jaw, exhale long, then say 'I'll listen when your voice comes back to normal.' Calm, firm, not punitive." },
          { target: "When my teen ignores me or keeps their eyes on the phone.", native: '', correct: true, feedback: "Avoidance reads as rejection, even when it isn't. The cue is often a pulling-in, a chest tightness. Three seconds: notice the chest, exhale, name it ('this is feeling rejected'). Then: 'I need your eyes for one minute. Phone down.' You haven't escalated, but you also haven't disappeared." },
          { target: "When my adult child criticises my parenting.", native: '', correct: true, feedback: "That cuts deep — your competence and your love both attacked at once. Cue: heat, sometimes shame's hot flush. Three seconds: notice it, exhale, name it ('this is hurt'). Then choose: do I want to defend right now, or do I want to actually hear them? Either is okay if you chose it." },
          { target: "When everyone's tired and any small thing sets us all off.", native: '', correct: true, feedback: "The hardest condition. Tired brains have shorter pauses to begin with. The three seconds shrink, but they don't disappear. On those days, just one slow exhale before any reply is the whole intervention. Don't aim for perfect. Aim for one." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You will miss the pause sometimes. That's expected. The skill is not the pause — it's noticing afterwards that you missed it, and trying again. The next chance always arrives.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'The three seconds is for whom — the parent, the child, or both?',
        correct: ['the parent', 'parent', 'for the parent', 'the adult', 'adult', 'the parent only', 'the grown-up'],
      },
      {
        prompt: 'Name the three moves inside the pause (notice ___, exhale, name)',
        correct: ['the body', 'body', 'the body cue', 'body cue', 'the feeling', 'the heat', 'what is happening', 'sensation'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "Pick one recurring trigger in your home — a tone, a refusal, a mess. Decide right now: when it happens today, you will count three seconds (one breath in, two breaths out) before any word leaves your mouth. Just once. See what comes out the other side.",
    rwenSignoff: "Three seconds. One trigger. One time. That is the whole experiment.",
  },

  phase8: {
    scenario: "User has just finished Lesson 2. Rwen helps them pre-load the three-second pause for a specific recurring trigger in their household — naming the trigger, the body cue, and the response they want to try instead of their usual reaction.",
    rwenRole: "Rwen — practical, kind, never moralising. Does not tell the user their reaction was wrong. Helps them rehearse the alternative so it is available next time.",
    successCriteria: "User names a specific recurring trigger, names the body cue they typically feel, and rehearses one chosen response (still firm if they want it firm) that comes after a three-second pause. Bonus if they note that the response keeps the message but loses the heat.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
