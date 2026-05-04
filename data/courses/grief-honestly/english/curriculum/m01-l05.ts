import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-loss-of-a-future',
  module: 1,
  lesson: 5,
  title: 'The Loss of a Future You Imagined',
  estimatedMinutes: 8,
  xpReward: 30,

  hook: {
    rwenLine: "If today is too heavy, you can stop here. Today's lesson is about a kind of grief that is often not recognised as grief at all — even by the person inside it. Sometimes what you are mourning is not a person who died. It is a future you had been counting on. The marriage that was supposed to last. The child you thought you would have. The career, the country, the version of your life that the diagnosis cancelled. This is real grief. It deserves the same honesty as any other.",
    culturalNote: "ACT (Acceptance and Commitment Therapy) names this directly: when reality and the imagined future diverge, the gap between them is grief. Pauline Boss includes it in her ambiguous-loss work — the future-that-won't-be is a kind of psychological presence-with-physical-absence. Joanne Cacciatore writes about it specifically in the context of stillbirth and infertility. The grief of a future is not a metaphor. It is, neurologically and emotionally, the same wiring that grieves a person.",
  },

  chunks: [
    {
      id: 'imagined_future',
      target: 'The imagined future',
      native: 'The version of your life you had been planning, hoping for, or assuming — and which an event or absence has now made impossible',
      literal: 'A specific category of loss recognised across modern grief literature; particularly central to Boss, Devine, and Cacciatore.',
      emoji: '🌅',
      phonetic: "Not a daydream. A whole shape of life that you had been organising around.",
      audioRef: null,
    },
    {
      id: 'divorce_grief',
      target: 'Divorce grief',
      native: 'The grief of a marriage ending — including the version of your life that was tied up in it, even when the ending was the right thing',
      literal: 'Often dismissed as "just" relational change. The bereavement literature increasingly treats divorce grief as comparable in intensity, particularly when it ended badly or unilaterally.',
      emoji: '💔',
      phonetic: "Even a divorce you wanted is a death of a future. Both can be true.",
      audioRef: null,
    },
    {
      id: 'never_was',
      target: 'Grieving what never was',
      native: 'The grief of an apology that never came, a parent who never showed up, a child you were not able to have, a relationship that never quite started',
      literal: "Cacciatore's work on perinatal loss; family-systems literature on the absent parent; ACT's treatment of values-based grief for unrealised lives.",
      emoji: '🕳️',
      phonetic: "You can grieve a thing that did not happen. The absence is the weight.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The shape of future-grief',
    explanation: "When something happens — or fails to happen — your future quietly rearranges. The wedding you were planning. The retirement you were saving for together. The grandchildren. The book you were going to write before the illness. The reconciliation you were waiting for. When that future collapses, it is not 'just' a disappointment. It is a real loss, and the body grieves it. The mistake we make is not noticing that we are grieving — and so we suppress it, dismiss it, or wonder why we are so tired.",
    examples: [
      { target: 'Your father dies before you became a parent yourself', native: "You are not only grieving him. You are grieving the grandfather he would have been to children he never met." },
      { target: 'You divorce after twenty years', native: "You are not only grieving the marriage. You are grieving the retirement-on-the-coast you had been picturing for a decade." },
      { target: 'You receive a chronic-illness diagnosis at 35', native: "You are grieving every version of your life that assumed a healthy body — career arc, family plans, ordinary independence — alongside the present." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each idea to its meaning',
      pairs: [
        { left: 'The imagined future', right: 'The version of your life you had been organising around — now made impossible' },
        { left: 'Divorce grief', right: "The grief of a marriage ending, including the future tied up in it" },
        { left: 'Grieving what never was', right: 'The grief of an apology, a child, a parent, a relationship that did not happen' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is grief of an imagined future?',
      question: 'Pick the answer that best names this kind of loss.',
      options: [
        { text: 'Crying when you remember a specific moment with someone who has died', correct: false },
        { text: 'Being unexpectedly devastated by your friend\'s pregnancy news after your own years of infertility', correct: true },
        { text: 'Feeling sad on the anniversary of a loved one\'s death', correct: false },
      ],
      explanation: "The first and third are recognised forms of bereavement. The middle one is grief of a future — the children you imagined, the parenthood you planned, the version of your life you had been waiting for. It is real grief, and it is often not recognised as grief either by the person feeling it or by the people around them.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: "You can grieve a future that ____.",
      options: ['never happened', 'will happen', 'might happen'],
      correct: 'never happened',
      context: "If you have ever felt foolish for grieving something that did not exist, this is your permission to stop. Future-grief is not imaginary. The future was real to you. The grief is real too.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — what is grief at its core, in this lesson\'s framing?',
      prompt: "The gap between ____ and the imagined future.",
      correct: ['reality', 'what is', 'what happened', 'what is real', 'the present', 'what actually happened', 'the actual'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the central permission of this lesson",
      words: ['real', 'is', 'grief', 'this'],
      correct: ['this', 'grief', 'is', 'real'],
      translation: "If you have been talking yourself out of feeling this, this lesson asks you to talk yourself back in.",
    },
    {
      type: 'translate',
      instruction: "What future have you lost? Name it in a phrase, just for yourself. (Or skip.)",
      prompt: "Examples: 'the marriage I thought we'd have'. 'the children I won't have now'. 'the retirement we were saving for'. 'the version of me before the diagnosis.'",
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to ask you something, gently. Pick whichever answer is closest to true.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "If you are grieving an imagined future right now, what is one specific image of that future you find yourself returning to? It does not need to be coherent. Just one image — a holiday, a dinner table, a photo you would have had, a conversation that won't happen.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I have one. It is a small ordinary scene that I keep replaying.", native: '', correct: true, feedback: "Those small ordinary scenes carry the whole weight. Big ceremonies are easier to replace, in a way. The Tuesday-night dinner, the breakfast that never happened — those are the ones that sit. You are allowed to mourn them, in detail, without anyone else understanding why a small image hurts so much." },
          { target: "I have one. It is a milestone that won't happen now — a wedding, a birth, a graduation.", native: '', correct: true, feedback: "Those are real losses, and people often dismiss them because the milestone hadn't happened yet. The fact it hadn't happened is what makes the grief specific — you are mourning something that existed only in expectation, but the expectation was real, and so is the absence." },
          { target: "I cannot quite picture it. The future just feels foggy.", native: '', correct: true, feedback: "That fog is itself a form of future-grief. When the version of your life you were organising around becomes impossible, the next version often refuses to take shape for a while. The fog is not failure. It is the imagination needing time to repair." },
          { target: "I am not ready for this question today.", native: '', correct: true, feedback: "Then we leave it. The image will still be there next week if you want to look at it. It does not need to be looked at today." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Whatever you found — or didn't — your loss is real. The future you imagined was a real thing. Mourning it is not delusion. It is honest accounting.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "What is grief, in this lesson's definition? (one phrase about a gap)",
        correct: ['the gap between reality and the imagined future', 'gap between reality and the imagined future', 'the gap between what is and what was imagined', 'the gap between reality and what we imagined', 'the difference between reality and the imagined future', 'gap between what is and the imagined future'],
      },
      {
        prompt: "Complete: 'You can grieve a future that ____.'",
        correct: ['never happened', 'never came', 'did not happen', "didn't happen"],
      },
    ],
  },

  mission: {
    title: "Today's small offering (optional)",
    task: "If today allows, write one sentence — anywhere, even on your phone notes — naming one future you have lost. 'I am grieving the ___.' Then close it. You do not have to do anything with the sentence. Naming it is the practice. If today is too heavy, the reading was enough.",
    rwenSignoff: "Some grief is for what was. Some grief is for what would have been. Both deserve honesty.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 5. Rwen offers a slow conversation about one specific imagined future the user has been quietly grieving — perhaps not realising they were grieving. The aim is recognition, not resolution.",
    rwenRole: "Rwen — slow, witnessing, present. Does NOT suggest the user 'imagine a new future' or 'find meaning in the loss.' Those moves come too fast. Stays with the loss. If the loss is connected to a divorce that ended badly, a child the user could not have, a parent who never apologised, or a self the user used to be — Rwen treats each with full seriousness. Does not pivot to silver linings.",
    successCriteria: "User names one specific imagined future they have lost, in concrete detail (not 'happiness' but 'the road trip we had planned for our 30th'), and recognises it as a real grief rather than a small disappointment. Bonus if they notice they had been minimising it.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
