import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-caregiver-guilt',
  module: 1,
  lesson: 9,
  title: "Caregiver Guilt, on All Three Fronts",
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "Today's the day you stop trying to solve guilt and start treating it as information. Caregivers commonly carry guilt on three different fronts at once — toward the parent, toward the partner or kids, and toward themselves. Today we name them, separate them, and stop pretending that a good caregiver feels none of this.",
    culturalNote: "Brené Brown's work makes a useful distinction: shame says 'I am bad.' Guilt says 'I did something wrong (or failed to).' Most of what caregivers call guilt is closer to a structural impossibility — three legitimate claims on you, only one body, no chance of meeting all three. That is not a moral failure. It is the actual shape of the situation. Self-compassion (Neff) is the only honest response to a no-win configuration.",
  },

  chunks: [
    {
      id: 'three_front_guilt',
      target: 'Three-front guilt',
      native: 'The simultaneous guilt of feeling you are short-changing your parent, your partner or kids, and yourself — all in one ordinary week',
      literal: 'Caregiving research; the sandwich generation faces three claims at once and most caregivers experience all three guilts in rotation',
      emoji: '🔺',
      phonetic: 'Three claims, one body. Naming them separately stops them from blurring into one big bad feeling.',
      audioRef: null,
    },
    {
      id: 'guilt_vs_shame',
      target: 'Guilt vs shame',
      native: "Guilt: 'I did something I wish I hadn't.' Shame: 'I am a bad person.' The first is workable. The second is poison.",
      literal: 'Brené Brown — Daring Greatly, on the difference; also John Bradshaw on toxic shame',
      emoji: '🔍',
      phonetic: "Guilt is information. Shame is a verdict. We accept the first, we challenge the second.",
      audioRef: null,
    },
    {
      id: 'structural_impossibility',
      target: 'The structural impossibility',
      native: 'Three legitimate claims on you, one body, finite hours — the math does not work, and pretending it does is the problem',
      literal: 'ACT (Hayes); also caregiver-burden literature; the impossibility is the situation, not your failure to manage it',
      emoji: '🧱',
      phonetic: "The maths is impossible. Stop blaming yourself for not solving impossible maths.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'How to size guilt accurately',
    explanation: "Most caregivers do not actually have one big guilt — they have three smaller, more workable guilts that have been blurred into one unmanageable feeling. The move is to separate them, look at each one honestly, and ask: is this guilt useful information (something I can adjust), or is it a verdict on my worth (which it isn't)? You will sometimes adjust. You will mostly recognise that you are doing the best a person can do inside a no-win situation. Both responses count.",
    examples: [
      { target: 'Front 1 — Parent: "I should be visiting more"', native: 'Often: information ("I could call on Wednesdays" — adjust). Sometimes: verdict ("I am a bad daughter" — challenge.)' },
      { target: 'Front 2 — Partner / Kids: "I have nothing left for them"', native: 'Often: information ("we could take Friday nights off" — adjust). Sometimes: verdict ("I am failing as a partner" — challenge.)' },
      { target: 'Front 3 — Self: "I haven\'t exercised / slept / been alone in months"', native: 'Often: information ("ten minutes outside today" — adjust). Often also: an unwinnable structural reality (challenge the verdict).' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Three-front guilt', right: 'Guilt toward parent, partner/kids, and self — all at once' },
        { left: 'Guilt vs shame', right: '"I did something wrong" vs "I am a bad person"' },
        { left: 'The structural impossibility', right: 'Three legitimate claims on one body — the math does not work' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'You feel guilty for going to your child\'s school play instead of visiting your mother. Which is the most accurate framing?',
      question: 'Pick the one that names the actual situation',
      options: [
        { text: '"I am a bad daughter."', correct: false },
        { text: '"There were two legitimate claims on the same evening. I picked one. The other is still real and the guilt is the system, not me."', correct: true },
        { text: '"There is no reason to feel guilty — I made the right choice."', correct: false },
      ],
      explanation: "The first is the shame verdict — to be challenged. The third papers over the real loss (your mother did not see you that evening) and tends to come back as guilt anyway. The second is what is actually happening: two legitimate claims, one of you. The guilt is the price of being someone with two real loves.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the distinction',
      sentence: 'Guilt is "I did something wrong." _____ is "I am a bad person."',
      options: ['Shame', 'Regret', 'Anger'],
      correct: 'Shame',
      context: "Brown's distinction. Both are uncomfortable; only one is workable. Guilt can prompt repair. Shame mostly produces hiding.",
    },
    {
      type: 'translate',
      instruction: 'In two words — what kind of guilt do most caregivers carry?',
      prompt: 'Three-___ guilt',
      correct: ['front', 'sided', 'way'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the sentence to read on the days you are losing the maths",
      words: ['the', 'is', 'situation', 'impossibility', 'the', 'not', 'me'],
      correct: ['the', 'impossibility', 'is', 'the', 'situation', 'not', 'me'],
      translation: "Read it the next time you tell yourself you are failing. The maths is the maths. Failing maths that has no solution is not a personal failure.",
    },
    {
      type: 'translate',
      instruction: 'Pick ONE of the three fronts. Name the specific guilt and ask: information or verdict?',
      prompt: 'My guilt is: ___ → Information or verdict?',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Three short scenes. All in the same week, in three different lives.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Karen, on a Friday: leaves work early to take her father to the cardiologist; her boss is patient but not infinitely; her teenager has a maths exam Monday and Karen has not asked about it; she has not exercised in five weeks. Three guilts, one body, one Friday. The maths does not work. The maths was never going to work.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Bayani's mother is in his home in Manila. Multi-generational care, by tradition and by love. He still feels guilty: not enough time with her, not enough time with his wife, no time at all for himself. The cultural script said this would feel right. It does feel right, AND it is also exhausting. Both are true. Self-compassion does not require him to choose one.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Itai went home for two weeks to be with his father in Bulawayo, then flew back to Sydney. He calls every other day. He feels guilty for not being there full-time and guilty for the cost of the flights and guilty for the way his daughter looked at him when he left. The guilt is correct information about the situation. It is not a verdict on him.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have been carrying all three guilts as if they were one big thing.", native: '', correct: true, feedback: "Most caregivers do. The single big feeling is unmanageable; the three smaller named guilts are workable. Some you can adjust. Some you can only acknowledge. Both count as honest responses." },
          { target: "I feel guilty for things I cannot change. It feels like shame.", native: '', correct: true, feedback: "If it feels like 'I am a bad person' more than 'I did a specific thing wrong', that is shame, and it deserves to be challenged. You are a person inside a structurally impossible situation. That is not a verdict on your worth — even when the feeling pretends to be one." },
          { target: "I haven't been letting myself feel guilt at all — I just keep moving.", native: '', correct: true, feedback: "Also common. The guilt is still there; it just has nowhere to land. Letting yourself feel it for thirty seconds, named and sized, is sometimes more useful than the relentless motion. Stopping to feel it is also a form of caregiving — of yourself." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You are not failing because you cannot meet three legitimate claims on one body. The maths was always impossible. The kindness you'd offer a friend in this is the kindness available to you.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Whose distinction: 'guilt is I did something wrong; shame is I am a bad person'?",
        correct: ['brené brown', 'brene brown', 'brown', 'brené', 'brene'],
      },
      {
        prompt: "Three-front guilt: name the three fronts.",
        correct: ['parent, partner, self', 'parent, partner/kids, self', 'parent partner self', 'parent kids self', 'parent, kids, self', 'parent, family, self', 'parent partner kids', 'parent, partner or kids, self', 'parent partner/kids self', 'parent, partner, yourself', 'the parent, the partner, yourself', 'parent partner and self', 'parent, partner and self'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Once today, when guilt rises, name which of the three fronts it is on. Then ask: 'Is this useful information I can adjust, or is it a verdict on my worth?' If information: pick one small adjustment for this week. If verdict: place a hand on your own arm and say, 'the impossibility is the situation, not me.'",
    rwenSignoff: "One naming, one question, one response. The guilt was always going to come. Today it gets sized accurately.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 9. Rwen invites the user to walk through their own three-front guilt — naming a specific guilt on each front and asking whether each is information or verdict.",
    rwenRole: "Rwen — non-judgemental, careful. Walks the user through each front in turn (parent, partner/kids, self), asking for ONE specific guilt on each. For each one, asks the information-or-verdict question. Does NOT tell the user they should not feel guilty. Does NOT minimise the guilt. Does NOT solve the structural impossibility. Validates that the maths is genuinely impossible. Closes by asking the user to pick the SINGLE most useful adjustment from anything they named, and accepts whatever they pick — including 'none, I just needed to name them.'",
    successCriteria: "User names one specific guilt on at least two of the three fronts and distinguishes information from verdict on at least one. Bonus if they identify one small adjustment they can make this week. The lesson succeeds when the guilt has been sized down from one big bad feeling into three smaller, more accurate ones — even if no adjustment is made.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
