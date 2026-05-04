import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-grief-in-the-body',
  module: 1,
  lesson: 7,
  title: 'Grief in the Body — Why You Are So Tired',
  estimatedMinutes: 7,
  xpReward: 25,

  hook: {
    rwenLine: "If today is too heavy, please put it down. Today is a body lesson. If you have been wondering why you are so tired, why food does not taste right, why your sleep is broken, why your back hurts in a way it didn't before — there are reasons. Grief is not 'just' in your head. It is in your nervous system, your immune system, your appetite, your muscles. Knowing that may not make it lighter, but it can make it less confusing — and stop you blaming yourself for being depleted.",
    culturalNote: "Stephen Porges's polyvagal theory — widely used clinically, debated in academic neuroscience but useful as a working map — describes three nervous-system states: ventral-vagal (regulated, social, capable), sympathetic (mobilised, fight/flight), and dorsal-vagal (shutdown, exhaustion, withdrawal). Acute grief tends to drag the nervous system between sympathetic activation (sleeplessness, jaggedness, anxiety) and dorsal-vagal shutdown (exhaustion, brain fog, the 'I can't get up' days). This is biology, not weakness. Joanne Cacciatore writes movingly that grief is 'a full-body event,' and the somatic load is most underestimated by people who have not been through it.",
  },

  chunks: [
    {
      id: 'somatic_grief',
      target: 'Somatic grief',
      native: 'The way grief shows up in the body — exhaustion, broken sleep, weakened appetite, pain, illness — not as separate symptoms but as the same grief, expressed physically',
      literal: 'Cacciatore — *Bearing the Unbearable*; van der Kolk — *The Body Keeps the Score*; the bereavement-immunology literature on cortisol and immune suppression in acute grief.',
      emoji: '🫀',
      phonetic: "Your body grieves whether or not you give it permission to.",
      audioRef: null,
    },
    {
      id: 'shutdown',
      target: 'Dorsal-vagal shutdown',
      native: 'A nervous-system state of low energy, withdrawal, brain fog — not laziness, not depression in itself, but a protective shutdown that grief commonly induces',
      literal: 'Porges — polyvagal theory. Presented here as a clinically useful map; the underlying neuroanatomy is debated but the pattern is well-attested in trauma- and grief-aware practice.',
      emoji: '🌑',
      phonetic: "The 'I can't get up' day is your body conserving energy. It is not a personal failure.",
      audioRef: null,
    },
    {
      id: 'permission_to_rest',
      target: 'Permission to rest',
      native: 'The recognition that, in grief, rest is not a reward earned by productivity — it is the basic condition the body needs in order to grieve at all',
      literal: 'Bonanno on the metabolic cost of grief; Cacciatore on the necessity of slowing down; ACT on adjusting valued action to current capacity.',
      emoji: '🛏️',
      phonetic: "Resting is part of the grieving. The grieving is part of the loving.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Why grief is exhausting',
    explanation: "Acute grief is metabolically expensive. The bereavement-immunology literature has documented elevated cortisol, suppressed immune function, disrupted sleep architecture, and changes in appetite and digestion. The body is doing enormous internal work. Adding 'why am I so tired, I should be coping better' is a second arrow — extra suffering on top of the already-difficult clean pain. The first move in body-grief is to stop blaming the body for behaving exactly as a grieving body behaves.",
    examples: [
      { target: 'You sleep nine hours and wake up exhausted', native: 'Grief disrupts the deep-sleep architecture even when total hours seem adequate. The exhaustion is honest.' },
      { target: 'You catch every cold going round', native: 'Acute grief suppresses immune function. This is well-documented. You are not getting weak; your body is busy.' },
      { target: 'You stand up to make tea and have to sit down again', native: 'Dorsal-vagal shutdown is a real nervous-system state. Sitting back down is not failure. It is the body asking for what it needs.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to its meaning',
      pairs: [
        { left: 'Somatic grief', right: 'How grief shows up in the body — fatigue, broken sleep, illness, pain' },
        { left: 'Dorsal-vagal shutdown', right: 'A nervous-system state of low energy and withdrawal that grief often induces' },
        { left: 'Permission to rest', right: 'Recognising that rest is a condition for grieving, not a reward for it' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these statements best matches the bereavement research?',
      question: 'Pick the most evidence-based view.',
      options: [
        { text: 'Tiredness during grief means you are coping badly', correct: false },
        { text: 'Grief carries a real metabolic and immune cost — exhaustion is biology, not weakness', correct: true },
        { text: 'If you eat well and exercise, you should not feel tired in grief', correct: false },
      ],
      explanation: "The middle option is consistent with the bereavement-immunology literature (elevated cortisol, suppressed immune function) and clinical practice. Tiredness in grief is not a failing of effort. Self-care helps, but does not erase the underlying cost.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "Rest is not a ____ for productivity. It is the basic condition for grieving.",
      options: ['reward', 'punishment', 'replacement'],
      correct: 'reward',
      context: "Most cultures teach rest as something earned. Grief asks the opposite. Rest is the soil grief needs in order to do its work.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is happening when grief makes you exhausted?',
      prompt: "Your body is doing real ____.",
      correct: ['work', 'internal work', 'grief work', 'metabolic work'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's central reframe",
      words: ['weakness', 'is', 'tiredness', 'not', 'biology'],
      correct: ['tiredness', 'is', 'biology', 'not', 'weakness'],
      translation: "If you have been judging yourself for being tired, please read this slowly.",
    },
    {
      type: 'translate',
      instruction: "Where do you feel grief in your body, this week? Name a place in a word. (Or skip.)",
      prompt: "Examples: 'chest'. 'shoulders'. 'stomach'. 'throat'. 'everywhere'. 'I can't tell.'",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's try one small body practice. It will take less than a minute.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Wherever you are, place one hand somewhere your body has been carrying tension lately. Maybe your chest. Maybe your stomach. Maybe the back of your neck. Just rest it there.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Take one slower-than-usual exhale — slightly longer out than in. Then say silently to your body: 'I know. I'm not asking you to be faster than you are.'",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I did it. Something softened a little.", native: '', correct: true, feedback: "That softening is the body recognising it has not been blamed. It does not mean grief is gone. It means a small amount of the dirty pain — the second arrow of self-criticism — has been put down." },
          { target: "I did it. Nothing changed.", native: '', correct: true, feedback: "That is also fine. The skill is the act of placing the hand, not the result. Some days the body needs many of these small offerings before it trusts you are not going to push it again." },
          { target: "I cannot connect to my body very well right now.", native: '', correct: true, feedback: "That dissociation is itself a grief response, and it is more common than people admit. Your body is real even when you cannot feel it. The hand is on it. That is enough for today." },
          { target: "I want to skip this one.", native: '', correct: true, feedback: "Then we skip. Body practices ask trust the body may not be ready to give. The lesson stands without it." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever happened, the body knows it was approached today, not pushed. That counts.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What is the term for how grief shows up in the body? (two words)",
        correct: ['somatic grief', 'somatic', 'embodied grief', 'body grief'],
      },
      {
        prompt: "Complete: 'Tiredness is biology, not ____.'",
        correct: ['weakness', 'a weakness', 'failure', 'a failure', 'laziness'],
      },
    ],
  },

  mission: {
    title: "Today's small offering (optional)",
    task: "Today, when you notice yourself blaming your body for being tired, try once: hand somewhere on your body, one longer-than-usual exhale, and silently — 'I know. I am not asking you to be faster than you are.' That is the whole practice. If today is too heavy, the reading was enough.",
    rwenSignoff: "Your body is grieving alongside you. It deserves the same gentleness you would give a friend.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 7. Rwen offers a short, slow body-anchored conversation. The aim is to help the user locate where in their body the grief has been sitting this week and to offer it one moment of non-judgemental attention.",
    rwenRole: "Rwen — slow, embodied, soft. Speaks in shorter sentences than usual. Asks 'where do you feel it' rather than 'why do you feel it.' Does not interpret. Does not analyse. If the user says they cannot locate the feeling, treats that as honest information, not failure. Names that the body's tiredness is not a moral failing.",
    successCriteria: "User locates one specific somatic sensation of grief (or honestly reports that they cannot locate one) and offers it a moment of attention without trying to fix it. Bonus if they recognise that they had been blaming themselves for being tired.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
