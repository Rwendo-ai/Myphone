import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l04-childhood-wiring',
  module: 1,
  lesson: 4,
  title: 'When Your Childhood Wiring Reactivates',
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Today's the day you become someone who can recognise yourself in real time. Most caregivers are surprised by how reactive they become around their parents — how fast they snap back into being twelve. There is a reason for it, and once you see it you can't unsee it.",
    culturalNote: "John Bowlby and Mary Ainsworth's attachment theory was developed in the 1950s and 60s to describe how infants relate to their caregivers. Modern relational neurobiology (Dan Siegel and others) shows the same wiring stays with us. When your parent — the person who installed your attachment system — needs care, that wiring comes back online. You are not regressing because you are weak. You are regressing because of who you are with.",
  },

  chunks: [
    {
      id: 'attachment_reactivation',
      target: 'Attachment reactivation',
      native: 'The way old childhood patterns with your parent come back online when they become dependent on you',
      literal: 'Bowlby/Ainsworth → Mary Main; relational neurobiology (Siegel); the attachment system never fully turns off, just runs quieter',
      emoji: '🪞',
      phonetic: "You become twelve again in their kitchen. There is a name for that.",
      audioRef: null,
    },
    {
      id: 'felt_age',
      target: 'Felt age',
      native: "How old you feel in a given interaction — often very different from your actual age, especially around your parents",
      literal: 'Practitioner concept (Schwartz IFS, also Bowen family systems); the body and nervous system can return to a developmental age the mind has long left',
      emoji: '👶',
      phonetic: "Most adults are 7, 12, 14, or 16 in their parent's kitchen. The age tells you something useful.",
      audioRef: null,
    },
    {
      id: 'caregiving_self',
      target: 'The caregiving self',
      native: 'The grown adult version of you who has skills, perspective, and choices — and who can be summoned back, on purpose',
      literal: 'Schwartz IFS — Self-energy; Siegel — the integrated adult brain; the self you bring to other adults but lose around your parents',
      emoji: '🧭',
      phonetic: "You have the skills. They get knocked offline by the room. You can come back.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Why you become twelve again in their kitchen',
    explanation: "Your attachment system was wired by the people who raised you. Decades later, when you walk into their house, your nervous system runs the old script — the same threats it learned to scan for, the same hopes it learned to bring, the same defenses it learned to deploy. When the parent then becomes dependent, the script gets even more strange: you are now both the adult and the child in the same conversation. Recognising the script in real time is the move that lets you choose differently.",
    examples: [
      { target: "You become defensive around their criticism the way you were at fourteen", native: "Your nervous system is running its fourteen-year-old defense; you are not actually fourteen" },
      { target: "You feel the urge to hide your real life from them, the way you did at sixteen", native: "An old protective pattern, no longer needed; nameable, optional" },
      { target: "You feel an old longing for their approval that you didn't expect to feel at fifty", native: "The longing is real, ancient, and not a sign that you are weak. It is the system doing what it does." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Attachment reactivation', right: 'Old childhood patterns coming back online with your parent' },
        { left: 'Felt age', right: 'How old you feel in an interaction (often not your actual age)' },
        { left: 'The caregiving self', right: 'The adult version of you with skills and choices' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'You walk into your mother\'s kitchen and within ten minutes you feel sullen and small. Which framing fits best?',
      question: 'Pick the explanation grounded in attachment theory',
      options: [
        { text: 'You are a weak person who needs to grow up.', correct: false },
        { text: 'Your attachment system has reactivated; your felt age in the room is not your actual age.', correct: true },
        { text: 'Your mother is making you feel that way and the only solution is distance.', correct: false },
      ],
      explanation: "The first is the punishing voice we want to retire. The third is also wrong — distance is sometimes wise but is not the only response, and 'making you feel that way' under-credits the wiring you already carry. The second is what is actually happening. Once you can see the pattern, you can act from your adult self even while the old wiring fires.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'You are not regressing because you are weak. You are regressing because of who you are _____.',
      options: ['with', 'without', 'around'],
      correct: 'with',
      context: "Attachment is relational — it lives in pairs, not in individuals. The system fires up because of who is in the room, not because something is wrong with you.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — when old childhood patterns come back online around a parent, the technical term is...',
      prompt: 'Attachment ___',
      correct: ['reactivation', 'activation', 'reactivated'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the principle that lets you choose differently',
      words: ['the', 'the', 'name', 'change', 'pattern', 'to', 'can', 'you'],
      correct: ['name', 'the', 'pattern', 'to', 'change', 'the', 'pattern', 'you', 'can'],
      translation: "Subtle order: 'Name the pattern; to change the pattern, you can.' (A workable Yoda-ism, but the principle is real: the recognition is what makes the choice possible.)",
    },
    {
      type: 'translate',
      instruction: 'In one word or phrase — what felt age are you in their kitchen?',
      prompt: 'Honest answer. (Most adults are surprised by how young.)',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Two short scenes. See if either fits.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Sarah, 47, walks into her mother's kitchen on Sunday. Within twenty minutes she is short, sullen, and snapping at her own teenager. She does not recognise herself. Driving home she realises: she was 14 in that kitchen. The defensive crouch she had at 14 came back without permission.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Reza, 52, sits with his father. His father is critical, the way he always was. Reza catches himself craving a single approving word, the way a much younger Reza did. He is not weak for wanting it. The wiring just came on. He notices, breathes, and stays the adult.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I recognise this. I become someone younger in their house.", native: '', correct: true, feedback: "That recognition is the whole skill of this lesson. The pattern was happening anyway. Now you can see it happening, which is what gives you any choice in the matter." },
          { target: "I feel like the adult around them — but I become someone else in other relationships.", native: '', correct: true, feedback: "That happens too. Sometimes the parent stops being the trigger and a sibling, or a partner, or a workplace authority becomes the one who reactivates the old wiring. The skill is the same: name the felt age, summon the caregiving self." },
          { target: "I feel like a child but I'm doing the labour of an adult. It's exhausting.", native: '', correct: true, feedback: "That is one of the most truthful descriptions of caregiver fatigue there is. You are doing adult work while running on a child's nervous system. Naming it does not solve the work, but it explains the exhaustion." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The wiring was always going to fire. The new skill is the noticing. The next time you walk into their house, see how old you feel. That is the whole exercise.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In two words: what is the technical term for old childhood patterns coming back online with your parent?',
        correct: ['attachment reactivation', 'attachment activation'],
      },
      {
        prompt: 'In one phrase: what is the term for "how old you feel" in a particular interaction?',
        correct: ['felt age', 'felt-age', 'your felt age'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Next time you are in your parent's space (in person, on the phone, by message), notice — what age do you feel? Don't change anything. Don't perform being the adult. Just notice the number that comes up. Carry that information with you when you leave.",
    rwenSignoff: "Just the number. The skill is the noticing, not the fixing.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 4. Rwen invites a short conversation in which the user identifies their typical felt age around the parent they care for, and one specific behaviour they tend to exhibit in that age. The aim is to make the pattern visible without making it shameful.",
    rwenRole: "Rwen — curious, light-touch, non-clinical. Does NOT diagnose attachment style ('you sound anxiously attached'), does NOT pathologise, does NOT compare to research averages. Treats the user's felt age as information, not a problem. Asks one specific question — what does that younger version of you most want from the parent right now? — and listens. If the user surfaces something painful, names it gently and offers to stop.",
    successCriteria: "User names a specific felt age and a specific behaviour or feeling that comes with it. Bonus if they articulate one move their adult caregiving self could make that the younger felt-age self could not. The lesson succeeds if the user laughs, even slightly, at the recognition — laughter here means the pattern has been seen.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
