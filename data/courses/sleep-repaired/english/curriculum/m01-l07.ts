import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-anxiety-sleep-loop',
  module: 1,
  lesson: 7,
  title: 'The Anxiety–Sleep Loop, and How to Step Out of It',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Here is the cruellest thing about insomnia: the more it matters that you sleep, the harder it gets. The fear of not sleeping becomes the thing that keeps you awake. Tonight you learn how to step out of that loop — not by trying harder, but by trying differently. Sometimes by not trying at all.",
    culturalNote: "The anxiety-sleep loop is one of the most well-documented phenomena in clinical sleep research. Effort to sleep is a form of arousal. The brain reads 'I MUST sleep' as a threat (something is wrong; something must be fixed) — and threat is the opposite of sleep. Acceptance-based approaches (ACT applied to insomnia) and the cognitive components of CBT-I both target this loop directly. The work is letting go of the agenda, not enforcing it harder.",
  },

  chunks: [
    {
      id: 'sleep_effort',
      target: 'Sleep effort',
      native: 'The active mental and physical attempt to make sleep happen — the harder you try, the more it backfires',
      literal: "Espie's psychobiological inhibition model. Sleep is dis-inhibitory — it arrives when wake-promoting effort lets go. Effort itself is wakefulness.",
      emoji: '💪',
      phonetic: "Sleep is the only sport where giving up is the winning strategy.",
      audioRef: null,
    },
    {
      id: 'catastrophic_thinking',
      target: 'Sleep catastrophising',
      native: "The thought-pattern 'if I don't sleep tonight, tomorrow will be ruined' — which makes the body more activated and sleep less likely",
      literal: "CBT-I cognitive component. The thought is rarely true (you usually function 'well enough' on poor sleep), and the thought itself raises arousal more than the bad sleep would.",
      emoji: '💥',
      phonetic: "The catastrophe is the thought, not the bad night. The night you survive. The thought you train.",
      audioRef: null,
    },
    {
      id: 'acceptance',
      target: 'Acceptance',
      native: "Allowing wakefulness to be present without struggle. Not resignation — a deliberate dropping of the fight, which paradoxically softens the alertness that is keeping you awake.",
      literal: "ACT (Hayes); applied to insomnia by Hertenstein, Lundh and others. Welcoming wakefulness shrinks it. Resisting it amplifies it. Counterintuitive but well-evidenced.",
      emoji: '🤲',
      phonetic: "'I am awake right now. That is okay. I do not need to fix this immediately.'",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The struggle is the symptom',
    explanation: "The anxiety-sleep loop runs like this: bad night → catastrophising thoughts about tomorrow → next night, body arrives in bed already activated → more effort to sleep → more wakefulness → more catastrophising. Each loop tightens. Stepping out has three moves. (1) Defuse the catastrophic thought — 'I'm having the thought that tomorrow will be ruined.' Most days, you under-perform a little but function. The thought is not the verdict. (2) Lower sleep effort — paradoxical intention from Lesson 6, plus a deliberate softening of the body. (3) Acceptance — let the wakefulness be present. Speak it: 'I am awake. That is what is happening tonight. I do not have to fix it right now.' This is not magical thinking. Acceptance reduces the threat signal, which reduces the alertness, which sometimes lets sleep arrive — and when it doesn't, at least removes the second-order suffering of the fight.",
    examples: [
      { target: "Lying awake thinking 'this is going to ruin my whole day tomorrow'", native: "Defusion: 'I'm having the thought that tomorrow will be ruined.' Notice it's a thought, not a fact. You've had this thought before and tomorrow happened anyway." },
      { target: "Tense body, jaw clenched, holding the breath, fighting for sleep", native: "Lower effort: long slow exhale, deliberately unclench, soften the face. Try to stay awake. Watch what happens." },
      { target: "1am, wide awake, panicking", native: "Acceptance: 'I am awake at 1am. That is what is happening. I am safe. I do not have to fix this. The night will pass.' Speak it silently. Watch the alertness ease, even slightly." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each move to what it does',
      pairs: [
        { left: 'Defusion', right: "Noticing 'I'm having the thought that...' instead of fusing with it" },
        { left: 'Lower sleep effort', right: 'Soften the body, stop trying, watch what happens' },
        { left: 'Acceptance', right: 'Allowing wakefulness to be present without fighting it' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "What is the central paradox of insomnia?",
      question: 'Pick the most evidence-supported framing',
      options: [
        { text: 'Sleep arrives faster the more relaxed and disciplined you are', correct: false },
        { text: 'The harder you try to sleep, the harder sleep gets, because effort itself is a form of wakefulness', correct: true },
        { text: 'If you have insomnia, you should think of sleep as a battle to win each night', correct: false },
      ],
      explanation: "Espie's psychobiological inhibition model. Sleep is dis-inhibitory — it requires the wake systems to release. Effort engages wake systems. So trying harder produces more of what you don't want. This is why ACT-based and paradoxical-intention approaches outperform 'try harder' interventions for chronic insomnia.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the central instruction",
      sentence: "I am awake. That is what is happening. I do not have to _____ this right now.",
      options: ['fix', 'fight', 'finish'],
      correct: 'fix',
      context: "Acceptance is not resignation. It's the deliberate dropping of the agenda — which lowers the threat signal that is keeping the alertness on. Sleep often arrives soon after the agenda is dropped. Sometimes it doesn't. Either way, the suffering shrinks.",
    },
    {
      type: 'translate',
      instruction: "What is the cognitive defusion move for the thought 'tomorrow will be ruined'?",
      prompt: "Re-state it as: 'I'm having the _____ that tomorrow will be ruined.'",
      correct: ['thought', 'thoughts'],
    },
    {
      type: 'build_sentence',
      instruction: "Arrange the central acceptance statement",
      words: ['fix', 'I', 'this', 'do', 'right', 'have', 'now', 'not', 'to'],
      correct: ['I', 'do', 'not', 'have', 'to', 'fix', 'this', 'right', 'now'],
      translation: "Read it slowly. Mean it. The sentence does most of the work.",
    },
    {
      type: 'translate',
      instruction: "Why does 'trying to sleep' make sleep harder?",
      prompt: "Because effort is a form of...",
      correct: ['wakefulness', 'arousal', 'alertness', 'wake', 'being awake', 'wake activity', 'wake-promoting activity', 'activation'],
    },
  ],

  rwenDialogue: {
    intro: "I want to ask you something a bit confronting. What does your brain say will actually happen if you don't sleep tonight?",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Try to put it into specific words. Not 'I'll be tired' — what does the catastrophising part of you actually predict?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'll mess up at work and people will see I'm not coping.", native: '', correct: true, feedback: "Worth checking against history. Most people with chronic insomnia have functioned at work many times after very poor nights. Your performance dips somewhat but rarely catastrophically. The catastrophising thought is exaggerating; defusion is 'I'm having the thought that I'll mess up at work and be exposed' — and noticing it's a thought, not a guaranteed prediction." },
          { target: "I'll be a terrible parent / partner tomorrow because I'm short-tempered when tired.", native: '', correct: true, feedback: "Real and worth taking seriously, AND defusable. You will probably be more reactive — the move is naming it to your people in advance ('I slept badly, I'm running short on patience today, I'll need a minute'), not pretending you'll be fine. The catastrophising thought makes this worse than it has to be by adding 'and that proves I'm a bad person'. That part is the loop." },
          { target: "My health will deteriorate — I read that even one bad night does damage.", native: '', correct: true, feedback: "This thought has been amplified by some popular sleep writing. The honest reading: a single bad night has trivial long-term health effect. Chronic insufficient sleep over months and years has measurable effects, but one night does not. Reducing the health-catastrophising actually helps you sleep better the next night, by lowering tonight's anxiety. Tell yourself the truer story." },
          { target: "Tomorrow will be ruined and I'll have wasted the day.", native: '', correct: true, feedback: "Almost the textbook catastrophising thought. Try this defusion: 'I'm having the thought that tomorrow is already ruined.' Notice you've predicted this before and the day was uneven, not ruined. The thought is a forecast, not a fact. Lower the agenda; the night will go better." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Notice — putting the prediction into words sometimes makes it look smaller. The catastrophe lives in vagueness. Naming it is half the defusion.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Why does the harder you try to sleep make sleep less likely?",
        correct: ['effort is wakefulness', 'effort is a form of wakefulness', 'trying is alertness', 'sleep effort raises arousal', 'effort raises arousal', 'effort keeps you awake', 'sleep is dis-inhibitory', 'effort prevents sleep', 'because effort is a form of arousal', 'because the effort itself is wakefulness'],
      },
      {
        prompt: "What is the acceptance statement at the heart of this lesson? (I am awake. That is what is happening. I do not have to ___ this right now.)",
        correct: ['fix', 'solve', 'resolve'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Tonight, before bed, write down on paper one sentence: 'I do not have to fix this tonight.' Put it next to your bed. If you wake at 3am, or struggle to fall asleep, read it. Just read it. You don't have to believe it perfectly. The sentence is the practice.",
    rwenSignoff: "One sentence. Present-tense. Available at 3am. The acceptance does the work.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 7. Rwen helps them surface the specific catastrophising thought their insomnia tends to use against them, run a single defusion move on it, and rehearse the acceptance statement out loud. The aim is to leave the user with their own personalised acceptance phrase — in their own words — that will land better at 3am than a generic mantra.",
    rwenRole: "Rwen — kind, slightly direct, willing to gently challenge a thought without arguing. Helps the user catch their specific catastrophising prediction, hold it up to the light, and craft a personal acceptance sentence. Does not promise sleep; promises a smaller fight.",
    successCriteria: "User names one specific catastrophising thought that drives their sleep anxiety, runs a defusion move on it ('I'm having the thought that...'), and crafts a personalised acceptance sentence in their own words. Bonus if they articulate that the goal of the sentence is not to make sleep happen but to lower the second-order suffering when sleep doesn't.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
