import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l12-good-enough-on-purpose',
  module: 1,
  lesson: 12,
  title: 'Good Enough, On Purpose',
  estimatedMinutes: 8,
  xpReward: 40,

  hook: {
    rwenLine: "We end here. Not on a peak, not on a promise, but on the most underrated frame in parenting: good enough. Donald Winnicott's phrase. He meant it as load-bearing, not as a participation prize. Today is about why being a good-enough parent is the actual goal — and why the parent who reaches for more is often the parent who delivers less.",
    culturalNote: "Donald Winnicott was a paediatrician and psychoanalyst who watched thousands of mothers and children. He noticed that perfect parenting produced more anxious, more brittle children — because they were not being taught that the world tolerates imperfection. The 'good-enough mother' (his words; the principle applies to any caregiver) failed her child in small, survivable ways, repaired, and gave the child the data they needed: love is real, parents are human, ruptures get repaired. Six decades later, this is still the most evidence-supported parenting frame we have.",
  },

  chunks: [
    {
      id: 'good_enough',
      target: 'Good enough',
      native: "A parent who meets the child's needs reliably, fails sometimes, repairs when they fail, and does not pretend to be more than they are. Not a low bar — a load-bearing one.",
      literal: 'Donald Winnicott — the good-enough mother (1953); modern attachment theory',
      emoji: '🌱',
      phonetic: 'Reliable, not perfect. Repairing, not flawless.',
      audioRef: null,
    },
    {
      id: 'small_failures',
      target: 'Survivable small failures',
      native: "The day-to-day misses — the snap, the 'in a minute', the missed signal — that, when followed by repair, teach the child that the world tolerates imperfection and so can they.",
      literal: "Winnicott — manageable disillusionment; Siegel & Bryson — rupture and repair",
      emoji: '〰️',
      phonetic: "Small failures, well-repaired, are the curriculum.",
      audioRef: null,
    },
    {
      id: 'values_under_exhaustion',
      target: 'Values under exhaustion',
      native: "The parent you want to be when you have nothing left. Not a list of ideals — three or four words, your real ones, that survive the night. (Examples: present, honest, kind, steady, calm, fair.)",
      literal: 'ACT (Hayes) — values-based behaviour; Stoic prohairesis',
      emoji: '🧭',
      phonetic: 'When all energy fails, what is left? That is who you actually are.',
      audioRef: null,
    },
  ],

  pattern: {
    name: "How to land 'good enough' as a real frame",
    explanation: "Three things to take away. First: stop reaching for excellent parenting. Excellent parenting, attempted, produces resentment, performance, and exhaustion — and the child receives less than they would from a steady, ordinary parent. Reach for good-enough parenting instead, and you will routinely overshoot. Second: notice that everything in this course has been good-enough work. Regulate yourself. Pause. Name what you feel. Repair after the rupture. Be honest, steady, and findable. Nowhere have we asked you to be perfect. Third: pick three or four words that name the parent you want to be when nothing is going well. Those words — yours, not borrowed — are what you reach for at 2am, after the blow-up, and on the days you don't like your child. Not a strategy. An identity. The kind of parent you already are, on your better days, that you can return to on your worse ones.",
    examples: [
      { target: "After a hard day where everything went wrong", native: "Excellent-parent voice: 'I should have handled all of that better.' Good-enough voice: 'I was present. I repaired what I could. Tomorrow is another day. That is the work.'" },
      { target: "After a stretch of weeks where you've been short-tempered", native: "Excellent-parent voice: 'I'm a bad parent.' Good-enough voice: 'I've been depleted. The repair is still available. The relationship is still intact. I will adjust.'" },
      { target: "Looking back over a year of parenting", native: "Excellent-parent voice: a list of regrets. Good-enough voice: 'I showed up. I missed some things. I came back when I missed them. They are still mine, and I am still theirs.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its meaning',
      pairs: [
        { left: 'Good enough', right: 'Reliable, repairing, honest about being human' },
        { left: 'Survivable small failures', right: 'Day-to-day misses that, repaired, teach the child resilience' },
        { left: 'Values under exhaustion', right: 'The parent you want to be when nothing is left' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: '"Good enough" is best understood as...',
      question: 'Pick the most accurate framing',
      options: [
        { text: "A lowered bar — settling for less because you're tired", correct: false },
        { text: "A load-bearing standard — reliably meeting needs, repairing when you fail, not pretending to be more than you are", correct: true },
        { text: "A reward for parents who have given up on excellence", correct: false },
      ],
      explanation: "Winnicott was clear: 'good enough' is not a consolation prize. It is the empirically better target. The parent reaching for excellence routinely exhausts themselves and disappoints their child. The good-enough parent overshoots routinely and is more reliable in the moments that matter.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Reliable, not perfect. _____, not flawless.',
      options: ['Repairing', 'Trying', 'Patient'],
      correct: 'Repairing',
      context: "Two phrases that hold the whole frame. Reliability and repair are the two pillars; perfection and flawlessness are the two distractions. Most exhausted parents are aiming at the wrong two.",
    },
    {
      type: 'translate',
      instruction: 'Small failures, well-repaired, are the ___',
      prompt: 'The ___',
      correct: ['curriculum', 'lesson', 'teaching', 'real curriculum', 'parenting curriculum', 'real teaching', 'work', 'whole curriculum', 'syllabus'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the central reframe",
      words: ['the', 'is', 'goal', 'enough', 'good'],
      correct: ['good', 'enough', 'is', 'the', 'goal'],
      translation: "Five words. Hold them lightly. They will save you a lot of nights.",
    },
    {
      type: 'translate',
      instruction: 'Three or four words that name the parent you want to be when nothing is left — pick one of yours',
      prompt: 'For example: ___',
      correct: ['present', 'honest', 'kind', 'steady', 'calm', 'fair', 'patient', 'reliable', 'warm', 'safe', 'gentle', 'real', 'available', 'loving', 'consistent', 'firm', 'trustworthy', 'thoughtful'],
    },
  ],

  rwenDialogue: {
    intro: "We've come twelve lessons. One last question — what is the kind of parent you actually want to be, in the hardest hours? Three or four words. Yours, not borrowed.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Not aspirational. Real. The version of you that you can return to when you have nothing left. What are the words?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Present, honest, steady.", native: '', correct: true, feedback: "Hold those three words. They are not a goal — they are a description of who you already are at your best. The work of this course has been remembering them when the hard hours try to make you forget. When the next 2am comes, those three words are what you reach for. Not 'be a great parent.' 'Present, honest, steady.' That is enough." },
          { target: "Calm, kind, reliable.", native: '', correct: true, feedback: "A different but equally good triad. Notice that none of those are 'fun', 'patient', 'wise'. They are the load-bearing virtues — the ones a child can actually feel when the night is hard. Reach for those when you next feel yourself depleting. They are smaller than you think and bigger than they sound." },
          { target: "Loving, fair, real.", native: '', correct: true, feedback: "'Real' is the underrated one. Children — at every age — can tell when a parent is performing versus being themselves. Real includes honesty about being tired, frustrated, or stretched, while still being loving and fair. That triad is rare and powerful. Reach for it." },
          { target: "Safe, warm, repairing.", native: '', correct: true, feedback: "Beautiful triad. 'Repairing' is doing a lot of work — it acknowledges that you'll mess up, and locates your goodness in coming back rather than in not erring. That is the most attachment-secure framing of parenting in a single word. Hold it." },
          { target: "I don't know yet. The course gave me a lot to think about.", native: '', correct: true, feedback: "That's an honest end. Take a week. Let the words come. There is no deadline. Sometimes the right three words arrive in the middle of an ordinary day, in the car, while doing dishes. Write them down when they do. They will be your compass for the next twenty years of parenting." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever your words are, you are already the parent of those words on your better days. The work is remembering them on your harder ones. That is the whole skill. That is what you've been practising. You'll do it again tomorrow.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Whose phrase is 'the good-enough mother'?",
        correct: ['winnicott', 'donald winnicott', 'd.w. winnicott', 'd w winnicott'],
      },
      {
        prompt: "Reliable, not perfect. Repairing, not ___",
        correct: ['flawless', 'faultless', 'perfect', 'spotless'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "Write down — on paper, in your phone, anywhere you'll find it — three or four words that name the parent you want to be when nothing is left. Your words, not borrowed. Then, the next time the night gets hard, those words are the compass. Not 'be a perfect parent'. Yours.",
    rwenSignoff: "Three words. Yours. Findable. The compass for everything that comes next.",
  },

  phase8: {
    scenario: "User has just finished Lesson 12, the final lesson of the track. Rwen helps them land a personal three-or-four-word phrase that names the parent they want to be in the hardest hours. This is the take-away artefact of the entire course.",
    rwenRole: "Rwen — celebratory but quiet, not performative. Helps the user resist clichés or borrowed words. Reflects back the words they choose so they hear themselves say them. Closes the track warmly without overstating what twelve lessons can do.",
    successCriteria: "User produces three or four real, personal words for the kind of parent they want to be under pressure, and writes them somewhere findable. Bonus if they articulate that they will reach for these words rather than 'be a better parent' the next time things get hard.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
