import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l02-not-your-failure',
  module: 1,
  lesson: 2,
  title: 'You Are Not Your Failure',
  estimatedMinutes: 8,
  xpReward: 30,

  hook: {
    rwenLine: "Today's the day you become someone who can hold a failure without being one. The thing that failed is not you. That distinction sounds obvious. After a real knock, it stops feeling obvious — which is when this lesson does its work.",
    culturalNote: "Brené Brown drew the cleanest line: guilt says 'I did a bad thing'; shame says 'I am a bad thing.' The first is workable — it points at behaviour, which can change. The second is paralysing — it indicts the self, which can't. ACT (Acceptance and Commitment Therapy) calls the same move 'defusion': noticing that the sentence 'I am a failure' is a sentence the mind is producing, not a fact about the universe. The skill today is small: catching one shame-tier sentence and converting it back into something the mind can actually work with.",
  },

  chunks: [
    {
      id: 'shame_vs_guilt',
      target: 'Shame vs. guilt',
      native: "Shame says 'I am bad.' Guilt says 'I did something bad.' Only the second is actionable.",
      literal: "Brené Brown — *I Thought It Was Just Me* and *Daring Greatly*; built on June Tangney's research on the moral emotions",
      emoji: '🪞',
      phonetic: 'Same pain, different sentence. The sentence is the work.',
      audioRef: null,
    },
    {
      id: 'defusion',
      target: 'Defusion',
      native: "Noticing that a sentence about you is a sentence — not a verdict",
      literal: "ACT — Steven Hayes; the move from 'I am a failure' to 'I am noticing the thought I am a failure'",
      emoji: '🧵',
      phonetic: "The thought stays. The fusion with it loosens.",
      audioRef: null,
    },
    {
      id: 'the_part_that_took_the_hit',
      target: 'The part that took the hit',
      native: "The piece of you that was bound up in the thing that failed — your work self, your spouse self, your founder self, your healthy-body self",
      literal: "IFS-adjacent (Schwartz) and developmental psychology — identity is composed of multiple roles; one collapsing is not all collapsing",
      emoji: '🧩',
      phonetic: "One role lost something. The whole person did not.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Defusing the shame-tier sentence',
    explanation: "When something has failed, the mind likes to produce a sentence that sounds like a verdict — 'I am a failure', 'I am unloveable', 'I am washed up.' The verdict feels true because the failure was real. The move is not to deny the verdict, and not to fight it, but to put a small frame around it. Two phrases do this work. 'I am noticing the thought that ___.' Or: 'The part of me that ___ took a hit.' Either one converts the verdict back into something the mind can hold.",
    examples: [
      { target: "Shame: 'I am a failure as a husband.'", native: "Defused: 'I am noticing the thought that I am a failure as a husband — after a marriage that ended badly.'" },
      { target: "Shame: 'I'm washed up.'", native: "Defused: 'The part of me that built that career took a real hit. I am more than that part, even if I cannot feel it today.'" },
      { target: "Shame: 'I'm a fraud.'", native: "Defused: 'I am noticing the thought I'm a fraud, after one project that did not work.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Shame', right: "'I am a bad thing'" },
        { left: 'Guilt', right: "'I did a bad thing'" },
        { left: 'Defusion', right: 'Noticing that a sentence about you is a sentence, not a verdict' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is a defused version of the thought?',
      question: "The original thought: 'I am a failure as a parent.'",
      options: [
        { text: "'I am not a failure as a parent — that's nonsense, I am a great parent.'", correct: false },
        { text: "'I am noticing the thought I am a failure as a parent, after a hard year with my teenage son.'", correct: true },
        { text: "'It does not matter what I think about my parenting. Thoughts are just thoughts.'", correct: false },
      ],
      explanation: "The first argues with the thought (pure positivity is fragile and the user usually does not believe it). The third dismisses the thought, which is its own kind of running away. The middle option keeps the thought, names it as a thought, and grounds it in the actual situation. That is defusion.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the Brené Brown distinction',
      sentence: "Guilt says 'I did a bad thing.' Shame says 'I _____ a bad thing.'",
      options: ['am', 'made', 'said'],
      correct: 'am',
      context: "One word changes everything. 'Did' points at behaviour, which can be repaired. 'Am' points at identity, which cannot be — and that is why shame is paralysing.",
    },
    {
      type: 'translate',
      instruction: "In one word — the ACT move that converts 'I am a failure' into 'I am noticing the thought that I am a failure'?",
      prompt: 'The technical term:',
      correct: ['defusion', 'cognitive defusion'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the lesson sentence',
      words: ['failure', 'is', 'not', 'thing', 'the', 'you', 'failed', 'that'],
      correct: ['the', 'thing', 'that', 'failed', 'is', 'not', 'you'],
      translation: "Read it. Then read it again. The thing that failed is not you. The thing that failed is the thing that failed.",
    },
    {
      type: 'translate',
      instruction: "Name one role of yours that took the hit. (Examples: my founder self, my husband self, my healthy-body self, my expert self.)",
      prompt: 'The part of me that ___ took a hit:',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's practise the defusion move on a real sentence you have been telling yourself.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind a sentence about yourself that has been showing up since the knock. The harsh one. 'I'm a failure.' 'I'm a fraud.' 'I'm washed up.' 'I'm unlovable.' Whichever one is yours. You don't have to type it. Just hold it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now, in your head, put this in front of it: 'I am noticing the thought that ___.' Say the whole thing once, slowly. Then notice — does anything shift?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Something shifted. The sentence felt smaller — still painful, but smaller.", native: '', correct: true, feedback: "That small shift is the whole technique. The thought stays. You are no longer fused with it. That is enough for today." },
          { target: "Nothing shifted. It still feels like a verdict.", native: '', correct: true, feedback: "That is honest, and very common the first time. Defusion is a muscle — it gets stronger with reps, and the harder the original sentence, the longer it takes. Try this once a day for a week. The shift is usually cumulative, not immediate." },
          { target: "It felt like a trick. Like I was just dressing up the same thought.", native: '', correct: true, feedback: "Sharp observation. ACT therapists hear this often. The point is not to disguise the thought — it is to get half a centimetre of distance from it. Half a centimetre is enough to do the next thing. It is not magic; it is leverage." },
          { target: "The shame sentence I'm carrying is too heavy for this technique.", native: '', correct: true, feedback: "If a thought feels too heavy, that is real information. Some sentences need a person — a friend, a therapist — to be defused, not just a phrase. The next lesson on asking for help is for this. For today, the only assignment is: notice that you noticed." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "The thing that failed is not you. We are going to come back to this sentence many times. Today you only had to put one frame around one thought. That is enough.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Complete the Brown distinction: guilt says 'I did a bad thing'; shame says 'I ___ a bad thing.'",
        correct: ['am'],
      },
      {
        prompt: "What is the ACT term for noticing that 'I am a failure' is a sentence the mind is producing rather than a verdict?",
        correct: ['defusion', 'cognitive defusion'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Once today, when the harsh sentence about yourself shows up, put 'I am noticing the thought that…' in front of it. Say it once, in your head, all the way through. Then continue with whatever you were doing.",
    rwenSignoff: "One sentence. One frame around it. That is all. The thought does not have to leave for the lesson to have worked.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 2. Rwen offers a 3-minute coaching conversation in which the user names one shame-tier sentence about themselves and practises defusing it. The aim is for the user to leave with one specific defused version of one specific thought — and to have noticed (or not) the small shift.",
    rwenRole: "Rwen — gentle, slow, non-prescriptive. Does NOT argue with the user's sentence ('you're not a failure!'). Does NOT analyse why they think it. Does NOT promise the thought will go away. Holds the sentence with the user, models the defusion frame, lets the user produce their own defused version, asks what shifted (or did not).",
    successCriteria: "User names one shame-tier sentence in plain words ('I'm a failure as a ___'), produces one defused version using either 'I am noticing the thought that…' or 'The part of me that ___ took a hit', and reports honestly what they noticed. Bonus if they catch the difference between shame-tier ('I am ___') and guilt-tier ('I did ___') versions of the same situation.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
