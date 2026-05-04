import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l01-role-reversal',
  module: 1,
  lesson: 1,
  title: 'The Role Reversal Nobody Prepared You For',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Today's the day you become someone who has language for what's happening to you. Not solutions, not advice — language. Most people doing this work are doing it without words. We start there.",
    culturalNote: "Caring for a parent who is becoming dependent is one of the oldest human experiences and one of the least talked about in modern life. The shape it takes varies enormously — multi-generational households in Manila, residential care in Sydney, family-as-the-care-system in rural Zimbabwe. The interior experience is more universal than the logistics. This course works on the interior.",
  },

  chunks: [
    {
      id: 'kinship_caregiver',
      target: 'Kinship caregiver',
      native: "An adult providing unpaid care to an aging family member — not a profession, often not chosen, almost always invisible",
      literal: 'Caregiving research literature — distinguishes informal/family carers from paid professionals; the role most adults will hold at some point',
      emoji: '🤝',
      phonetic: "If you are doing this work, you are this. The word matters because the role has been invisible.",
      audioRef: null,
    },
    {
      id: 'role_reversal',
      target: 'Role reversal',
      native: 'The slow inversion of who looks after whom — and the disorientation that comes with it',
      literal: 'Lifespan developmental psychology; Pauline Boss writes about this as a profound shift in family identity, not a simple swap',
      emoji: '🔄',
      phonetic: "The word 'reversal' is too neat — it is rarely a clean swap. More like a slow leaning.",
      audioRef: null,
    },
    {
      id: 'caring_for_caring_about',
      target: 'Caring for vs caring about',
      native: 'Caring about is the love. Caring for is the labour. They overlap, but they are not the same thing.',
      literal: 'Care ethics (Joan Tronto, Nel Noddings); a distinction caregivers often discover only when the labour starts',
      emoji: '⚖️',
      phonetic: "You can care about someone deeply and resent the caring for. Both can be true.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Why this is harder than you expected',
    explanation: "Most adults expect to care about their parents as they age. Few expect the daily, physical, logistical labour of caring for them. The gap between those two — between the love you brought into this and the work the work actually is — is where most caregiver distress lives. Naming the gap does not close it. It makes it speakable.",
    examples: [
      { target: "You love your father", native: "and you also dread Tuesday's hospital appointment" },
      { target: "You are honoured to have your mother in your home", native: "and you have not had a private conversation with your spouse in three weeks" },
      { target: "You are the only sibling here", native: "and you are exhausted in a way you do not have a word for yet" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its meaning',
      pairs: [
        { left: 'Kinship caregiver', right: 'An adult providing unpaid care to an aging family member' },
        { left: 'Role reversal', right: 'The slow inversion of who looks after whom' },
        { left: 'Caring for vs caring about', right: 'The labour vs the love — overlapping but not identical' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which statement most accurately describes role reversal in caregiving?',
      question: 'Pick the one that is true to the lived experience',
      options: [
        { text: 'You become the parent and they become the child — a clean swap.', correct: false },
        { text: 'It is a slow leaning, often partial, in which they remain your parent while needing your help.', correct: true },
        { text: "It only happens in Western nuclear families; multi-generational cultures don't experience it.", correct: false },
      ],
      explanation: "The first answer is the popular shorthand and it is misleading — it implies a tidy swap that the data does not support. The second is closer to what Pauline Boss and others describe: an overlapping, often disorienting shift in which the parent remains the parent. The third is wrong: the disorientation occurs in every cultural context; the logistics differ.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the distinction',
      sentence: 'Caring _____ is the love. Caring _____ is the labour.',
      options: ['about, for', 'for, about', 'with, against'],
      correct: 'about, for',
      context: "From care ethics (Tronto, Noddings). The two are not the same thing, and giving them different names makes both easier to hold.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase, name what you are. (No need to be clever — the phrase from this lesson works.)',
      prompt: 'I am a ___ caregiver.',
      correct: ['kinship', 'family', 'informal', 'unpaid'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the line that captures the gap most caregivers feel',
      words: ['the', 'love', 'and', 'gap', 'is', 'between', 'the', 'labour'],
      correct: ['the', 'gap', 'is', 'between', 'the', 'love', 'and', 'the', 'labour'],
      translation: "Read it once, then read it slowly. This is where most of the distress lives, and naming it is the start of the work.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is the most accurate word for what you have been doing?',
      prompt: 'Not just helping. Not just visiting. You have been doing the unpaid work of...',
      correct: ['caring', 'care', 'caregiving', 'care work', 'caring for them', 'looking after them'],
    },
  ],

  rwenDialogue: {
    intro: "Three quick portraits — different lives, same role. See if any of them fit.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Maria in Manila. Her mother has moved into the room where her son used to sleep. Maria works full-time, cooks two dinners a night because her mother needs softer food, and has not slept through the night in five months. Her aunts call her devoted. She does not feel devoted. She feels tired.",
      },
      {
        speaker: 'rwen',
        rwenLine: "James in Sydney. His mother is in residential care twenty minutes away. He visits every Wednesday and most Sundays. The staff are kind. His mother is fading. He pays the fees. He feels guilty for not having her at home and guilty for being relieved that she isn't.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Tendai in rural Zimbabwe. His father lives in the family home; the nearest hospital is three hours away on a road that washes out in the rains. There is no aged-care system. There is Tendai. He is the system.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I see myself in one of them.", native: '', correct: true, feedback: "Good. The role looks different from outside, depending on geography and resources. The interior — the tiredness, the love, the resentment, the fear of getting it wrong — is recognisable across all three." },
          { target: "I see myself in pieces of all three.", native: '', correct: true, feedback: "That is more common than you'd think. Caregivers often live in more than one frame at once — long-distance and present, paying for help and providing it themselves. You don't have to pick one." },
          { target: "None of them quite fit my situation.", native: '', correct: true, feedback: "Then your situation belongs in the next portrait we don't have time to write. The course doesn't depend on matching a story exactly. It depends on you having one." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever your version is — you are a kinship caregiver. The role is real, the load is real, and from today you have a name for it. We start there.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'In one phrase: what is the difference between caring about someone and caring for someone?',
        correct: ['about is love, for is labour', 'one is love the other is work', 'caring about is the love, caring for is the work', 'caring about is love; caring for is labour', 'love vs labour', 'love vs work'],
      },
      {
        prompt: 'What is the one-word term for an adult providing unpaid care to an aging family member?',
        correct: ['kinship', 'kinship caregiver', 'family caregiver', 'informal caregiver', 'carer'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Once today, when you are doing something for your parent — making a phone call on their behalf, sorting their medication, driving them somewhere, washing a dish in their kitchen — silently name what you are doing: 'I am doing the work of caring for someone I love.' That's the whole assignment.",
    rwenSignoff: "Six words, said silently. The role gets a name today.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 1. Rwen invites a short conversation in which the user names their own situation in their own words — who they are caring for, in what context (multi-generational household, residential care, long-distance, sole carer), and which of the three portraits (Maria, James, Tendai) most resembles their reality. The aim is to give the user the experience of being heard naming their role for the first time.",
    rwenRole: "Rwen — warm, curious, unhurried. Asks one open question at a time. Does NOT offer advice, suggest resources, or compare the user's situation to anyone else's. Mirrors back what the user says using their own words. Treats every cultural context as equally valid; never frames residential care as failure or multi-generational care as virtue. If the user says they don't have time for this conversation, Rwen wraps it up in two lines and says they can pick up later.",
    successCriteria: "User describes their caregiving situation in concrete terms (who, where, what they do day-to-day) and uses at least one of the lesson's three named concepts (kinship caregiver, role reversal, caring for vs caring about). Bonus if they name a specific gap between the love and the labour without being prompted.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
