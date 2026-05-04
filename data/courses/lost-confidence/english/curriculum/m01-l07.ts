import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-becoming-a-beginner',
  module: 1,
  lesson: 7,
  title: 'Becoming a Beginner Again',
  estimatedMinutes: 9,
  xpReward: 35,

  hook: {
    rwenLine: "Today's the day you become someone who can be a beginner without flinching. This is harder when you used to be expert at something. The pretend-version of growth mindset says 'you can be anything if you try.' The real version says: you can develop at this — slowly, awkwardly, with help — if you're willing to be bad at it long enough to get less bad.",
    culturalNote: "Carol Dweck has spent the last decade correcting the popular version of her own work. The bumper-sticker 'growth mindset' — 'praise effort, anyone can do anything!' — is what she calls 'false growth mindset', and she has explicitly disavowed it. The real version: ability is *developable*, with specific effort, strategy, and mentorship — not infinite, not effortless, not a feel-good slogan. The Zen tradition has a term for the same orientation — *shoshin*, beginner's mind: openness, lack of preconception, willingness to look foolish. ACT names the same skill in different language: acting in service of a value (learning) in the presence of an unwelcome feeling (looking incompetent).",
  },

  chunks: [
    {
      id: 'corrected_growth_mindset',
      target: 'Growth mindset, corrected',
      native: "The recognition that ability is developable through specific effort, strategy, and mentorship — not effortless and not infinite",
      literal: "Carol Dweck — *Mindset* (2006), with explicit corrections in later writing about 'false growth mindset'; effort is necessary but not sufficient",
      emoji: '📈',
      phonetic: "Not 'try harder.' 'Try differently, with help, for longer than feels reasonable.'",
      audioRef: null,
    },
    {
      id: 'shoshin',
      target: "Shoshin (beginner's mind)",
      native: "Approaching a domain as if for the first time — willing to ask basic questions, willing to look foolish, willing to be slow",
      literal: "Zen Buddhism — Shunryū Suzuki, *Zen Mind, Beginner's Mind* (1970)",
      emoji: '🌱',
      phonetic: "'In the beginner's mind there are many possibilities. In the expert's mind there are few.' — Suzuki",
      audioRef: null,
    },
    {
      id: 'value_action_in_unwelcome_feeling',
      target: 'Acting in the presence of discomfort',
      native: "Doing the thing your values point at, even while the feeling of being incompetent is in the room",
      literal: "ACT — Steven Hayes; the core move of values-aligned action when feelings do not cooperate",
      emoji: '🎒',
      phonetic: "The feeling does not have to leave for you to act. It just has to come along.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Hold both: what you used to be, what you are now',
    explanation: "If you were good at something — a career, a marriage, a body, a creative practice — and now you are starting over, the temptation is one of two errors. Erase the past ('that wasn't really me'). Or use the past to invalidate the present ('I should be further along by now'). The skill is holding both. One sentence: 'I was once expert at ___. I am currently a beginner at ___. Both are true.' That sentence is not a feel-good frame. It is the only honest one.",
    examples: [
      { target: "A 58-year-old former senior executive starting a small carpentry business.", native: "'I led a 200-person division for fifteen years. I am currently bad at sharpening a chisel. Both are true.' The first sentence does not exempt him from being a beginner. The second does not erase what he built." },
      { target: "A 47-year-old recently divorced after 21 years of marriage, dating again.", native: "'I knew how to be married to that person. I am terrible at first dates and I have not had one since 2003. Both are true.' One competence does not transfer; the other has to be re-learned from scratch. That is allowed." },
      { target: "A 64-year-old whose chronic illness ended her thirty-year career as a surgeon.", native: "'I was a skilled surgeon for three decades. I am a beginner at the life I now have to build. Both are true.' The grief is real. So is the next chapter, even if it takes years." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Growth mindset (corrected)', right: 'Ability is developable with effort, strategy, and mentorship — not effortless and not infinite' },
        { left: 'Shoshin', right: "Approaching a domain as a beginner — open, slow, willing to look foolish" },
        { left: 'Acting in the presence of discomfort', right: 'Doing the thing your values point at while the feeling of incompetence is in the room' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is closest to the corrected version of growth mindset (per Dweck herself)?',
      question: 'Pick the most accurate statement',
      options: [
        { text: '"Anyone can do anything if they try hard enough."', correct: false },
        { text: '"Ability is developable through specific effort, strategy, and mentorship — and the developing is harder and slower than the slogan implies."', correct: true },
        { text: '"It does not matter whether you succeed; only whether you tried."', correct: false },
      ],
      explanation: "The first is what Dweck calls 'false growth mindset' — she has explicitly distanced herself from this version. The third is what she calls 'effort as consolation prize' — also wrong; effort without strategy or feedback often does not produce growth. The middle option is the corrected version, which she has been writing about since around 2015.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete Suzuki's line",
      sentence: "In the beginner's mind there are many _____. In the expert's mind there are few.",
      options: ['possibilities', 'mistakes', 'options'],
      correct: 'possibilities',
      context: "*Zen Mind, Beginner's Mind* (1970), opening passages. The line is widely quoted and easily flattened into a slogan; in context it means that expertise narrows attention by design — useful for execution, costly when the domain has changed and the expert hasn't.",
    },
    {
      type: 'translate',
      instruction: "In one phrase — what does the corrected growth mindset add to 'try harder' that the popular version skipped?",
      prompt: 'Specific effort, ___, and mentorship',
      correct: ['strategy', 'a strategy', 'good strategy', 'and strategy'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the holding-both sentence',
      words: ['both', 'are', 'true'],
      correct: ['both', 'are', 'true'],
      translation: "Three words. The most useful sentence in the whole lesson. Read it aloud, then keep it.",
    },
    {
      type: 'translate',
      instruction: "Name one thing you used to be expert at, and one thing you are currently a beginner at.",
      prompt: "Format: 'I was expert at ___. I am a beginner at ___.'",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's hold both, on a real domain in your life.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind one thing you used to be good at — a craft, a role, a body, a relationship. Hold it. You don't have to type it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now bring to mind one thing you are currently a beginner at — by choice or by force, doesn't matter. Hold both at once.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Holding both. The first one feels like a loss.", native: '', correct: true, feedback: "It often is a loss. Holding both does not deny the grief. It just refuses to let the loss erase the rest of your life. The skill is sitting with both — competence and beginnerhood — without letting one cancel the other." },
          { target: "Holding both. The second one feels humiliating.", native: '', correct: true, feedback: "That feeling is information, not a verdict. The work today is not to feel less humiliated. It is to keep showing up to the beginner thing while the feeling is present. ACT calls this acting in the presence of discomfort. The feeling rarely leaves. The action gets less awkward over time anyway." },
          { target: "Holding both. They feel like two different people.", native: '', correct: true, feedback: "Common — and not exactly wrong. Identity is composed of multiple selves over time. The expert self has not vanished; she has been put down for now. The beginner self is the self currently doing the work. They live in the same body. They will reconcile, slowly." },
          { target: "I cannot hold both. The expert version of me feels too far away.", native: '', correct: true, feedback: "Real grief takes its time, and pretending otherwise is its own form of minimising. The lesson is in the trying, not the achieving. Hold one for now. The other will come back into view." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Beginner's mind is not a loss of dignity. It is a return of possibility. You won't always feel that. You can still act on it. That is the lesson.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What is the Zen term for approaching a domain as a beginner — open, willing to look foolish, slow?",
        correct: ['shoshin', "beginner's mind", 'beginners mind', 'beginner mind'],
      },
      {
        prompt: "Three-word sentence that holds 'I was expert' and 'I am a beginner' without one cancelling the other?",
        correct: ['both are true'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, write the holding-both sentence for one domain in your life. 'I was once ___. I am currently a beginner at ___. Both are true.' Read it once, slowly. Put it where you will see it tomorrow.",
    rwenSignoff: "One sentence. Two clauses. Both true. That is the assignment.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 7. Rwen offers a 4-minute conversation in which the user articulates one domain in which they were expert and one domain in which they are now a beginner, and produces the holding-both sentence. The aim is for the user to hold both without one collapsing the other.",
    rwenRole: "Rwen — warm, quietly confident, holds the grief if it arises. Does NOT redirect the user toward optimism. Does NOT use the phrase 'a gift in disguise'. Does NOT minimise how disorienting it is to be a beginner at sixty when you were expert at forty. Reflects back the holding-both sentence and lets it sit.",
    successCriteria: "User (1) names one specific past expertise, (2) names one specific current beginnerhood, (3) produces the 'both are true' sentence in their own words, and (4) sits with it for at least one breath without immediately resolving it. Bonus if they catch a 'I should be further along' fortune-telling sentence and notice it.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
