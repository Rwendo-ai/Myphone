import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-broke-vs-have-less',
  module: 1,
  lesson: 5,
  title: '"I\'m Broke" vs. "I Have Less Right Now"',
  estimatedMinutes: 6,
  xpReward: 30,

  hook: {
    rwenLine: "Listen to the difference between two sentences. 'I'm broke.' And: 'I have less right now.' One is an identity. The other is a description. Money slides into our self-talk and becomes a self. We start saying we *are* something — broke, poor, behind, struggling, scraping by — and that something becomes the whole story we tell about ourselves. Today we look at the small linguistic move that changes a fact about your money into a chapter, instead of the title of the book.",
    culturalNote: "This is ACT defusion applied to money. Steven Hayes and the wider ACT tradition have shown that adding a small linguistic distance ('I am noticing the thought that…' or 'I have less right now' instead of 'I am broke') changes the relationship between the person and the thought without denying the thought. Narrative therapy (Michael White and David Epston) makes the same move with the question: is this a story you have, or a story that has you?",
  },

  chunks: [
    {
      id: 'identity_statement',
      target: 'Identity statement',
      native: 'A money sentence that fuses what is true right now with who you are: "I am broke."',
      literal: 'ACT — fusion with content; narrative therapy — totalising stories that swallow the person',
      emoji: '🔗',
      phonetic: 'It feels like fact. It is actually a sentence the mind has built.',
      audioRef: null,
    },
    {
      id: 'descriptive_statement',
      target: 'Descriptive statement',
      native: 'A money sentence that names the present situation without making it a self: "I have less right now."',
      literal: 'ACT defusion — separating the speaker from the spoken; CBT — distinguishing observable facts from evaluations',
      emoji: '📐',
      phonetic: '"Right now" is doing a lot of work. It quietly insists this is a moment, not a permanent fact.',
      audioRef: null,
    },
    {
      id: 'temporal_window',
      target: 'The temporal window',
      native: 'The two words — "right now" — that turn a verdict into a description of a moment',
      literal: 'A small but reliable linguistic intervention used in CBT, ACT, and narrative therapy',
      emoji: '⏱️',
      phonetic: 'The whole skill: change "I am" to "right now I have." Two extra words. A different relationship.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Money is something you have, not someone you are',
    explanation: "Watch your sentences. The verb 'to be' is so common we miss what it does — it turns a temporary condition into a self. 'I am broke.' 'I am behind.' 'I am bad with money.' Replace each with a sentence about *having*. 'I have less right now.' 'I am in a stretch where the math is tight.' 'I am working on a pattern with money.' This is not denial. The amount you have has not changed. The story about who you are has.",
    examples: [
      { target: '"I am broke."', native: '"I have less right now than I want to have."' },
      { target: '"I am behind in life."', native: '"My money situation is behind where I imagined it would be at this point. I am not behind. I am in a chapter."' },
      { target: '"I am bad with money."', native: '"I have some habits with money that I am working on. The habits are not the whole of me."' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Identity statement', right: 'A money sentence that fuses your situation with who you are' },
        { left: 'Descriptive statement', right: 'A sentence that names the situation without making it a self' },
        { left: 'The temporal window', right: 'The phrase "right now" that turns a verdict into a moment' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is a descriptive statement, not an identity statement?',
      question: 'Pick the one that creates space between you and your situation',
      options: [
        { text: '"I am poor."', correct: false },
        { text: '"My income is lower than I want it to be at the moment."', correct: true },
        { text: '"I have always been bad with money."', correct: false },
      ],
      explanation: "The middle option names a current condition (\"income\", \"at the moment\") without claiming it as identity. The first is fused. The third extends the fusion across all of time.",
    },
    {
      type: 'fill_blank',
      instruction: 'Apply the move to this sentence',
      sentence: 'Identity: "I am broke." → Descriptive: "I _____ less right now."',
      options: ['have', 'feel', 'know'],
      correct: 'have',
      context: "The verb shift — from 'am' to 'have' — is the entire skill of this lesson.",
    },
    {
      type: 'translate',
      instruction: 'In one phrase — name one identity statement you have made about yourself and money. (You don\'t have to share it. Just see it.)',
      prompt: 'I sometimes say to myself: "I am _____"',
      correct: [],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the orienting principle of this lesson',
      words: ['have', 'is', 'someone', 'are', 'money', 'you', 'something', 'not', 'you'],
      correct: ['money', 'is', 'something', 'you', 'have', 'not', 'someone', 'you', 'are'],
      translation: "It is a possession, not a self.",
    },
    {
      type: 'translate',
      instruction: 'Now rephrase your identity statement from earlier as a descriptive one',
      prompt: 'Descriptive: "Right now, I _____"',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "Let's catch one identity statement in real time.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind a sentence you have said about yourself and money. The kind that starts with 'I am'. 'I am broke.' 'I am bad at this.' 'I am behind.' 'I am the one who can never save.' Whatever the truest one is. Just hold it.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now try it in this exact form: 'Right now, I have ___' or 'Right now, I am working on ___' instead. Same situation. Different relationship. Read your new sentence twice.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "It felt like a small relief — like the sentence stopped being about me and started being about a moment.", native: '', correct: true, feedback: "That is the whole move. The math has not changed. The identity has loosened. From here, decisions are easier to make because they are not also identity defences." },
          { target: "It felt fake. Like I was lying to myself.", native: '', correct: true, feedback: "It often does, the first time. Years of identity-fusion do not unwind in one sentence. The skill is repetition. Try the rephrase even when it doesn't feel earned. The earning comes from the repetition, not the other way around." },
          { target: "I felt resistance — like I deserve to call myself that.", native: '', correct: true, feedback: "Notice the resistance gently. The mind sometimes clings to identity statements because they organise the chaos of a hard situation. The new sentence is not punishment for the old one. It is just one inch more accurate." },
          { target: "I noticed the original sentence is something I heard somewhere, not something I came up with.", native: '', correct: true, feedback: "Big finding. Identity statements are very often borrowed — from a parent, a partner, a culture, a moment of someone saying it once and never being taken back. Knowing the source matters." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Two extra words: 'right now'. They rewrite the time signature of a sentence you might have been carrying for years.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Convert this identity statement into a descriptive one: "I am broke." (One short sentence.)',
        correct: ['i have less right now', 'right now i have less', 'i have less than i want right now', 'i have less money right now', 'i am in a stretch where the math is tight', 'i have less'],
      },
      {
        prompt: 'Complete the principle: "Money is something you have, not someone you _____."',
        correct: ['are'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, catch yourself once saying an 'I am ___' sentence about money. Silently rephrase it: 'Right now, I have ___' or 'Right now, I am working on ___'. The mission is the catch and the rephrase, not the belief.",
    rwenSignoff: "One catch. One rephrase. The skill is built one sentence at a time.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 5. Rwen invites a short conversation in which the user names one identity statement about themselves and money, and practises rephrasing it as a descriptive one. Rwen does not minimise the user's actual situation and does not pretend the rephrase changes the math.",
    rwenRole: "Rwen — gentle, precise. Does NOT tell the user their situation is not bad. Does NOT pretend the rephrase fixes anything material. Helps the user notice the difference between identity language and descriptive language. If the user says the rephrase feels fake, Rwen agrees that it often does and reminds them this is a skill built by repetition, not by feeling truthful in one go.",
    successCriteria: "User names one specific identity statement and produces a descriptive version of it. Rwen does not gaslight the user about their material situation. Bonus if the user notices the original identity statement is borrowed from another voice.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
