import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07-saying-no-walking-back-owning',
  module: 1,
  lesson: 7,
  title: 'Saying No, Walking Back, Owning a Mistake',
  estimatedMinutes: 9,
  xpReward: 35,

  hook: {
    rwenLine: "Today's the day you become someone who can decline a request, retract a position, or own a screw-up — without grovelling and without minimising. These are three different conversations that share one underlying skill: the ability to say a hard truth and stay in the room afterwards.",
    culturalNote: "Three of the most common workplace conversations — declining work you can't take, walking back a position you've outgrown, and owning a mistake you made — fail for the same reason: people either over-apologise (collapse) or under-apologise (defend). The middle move is plain, specific, and short. Brené Brown's distinction between guilt ('I did something bad') and shame ('I am bad') is load-bearing here. Guilt can be repaired. Shame just makes everyone uncomfortable.",
  },

  chunks: [
    {
      id: 'graceful_no',
      target: 'A graceful no',
      native: 'Declining a request without sandbagging it with five paragraphs of justification',
      literal: 'Workplace negotiation literature; Sue Bryant on declining; the principle that more justification often signals less confidence',
      emoji: '🙅',
      phonetic: 'A short reason, no apology theatre, no door left ajar that isn\'t really open. "I can\'t take this on by Friday — could we talk through priorities?" is enough.',
      audioRef: null,
    },
    {
      id: 'walking_back',
      target: 'Walking back',
      native: 'Changing your stated position when new information or reflection makes the old one wrong',
      literal: 'Crucial Conversations + epistemic humility literature; the move of explicitly updating your view in front of the people who heard the old one',
      emoji: '↩️',
      phonetic: '"Last week I argued X. After thinking about what was raised, I think I was wrong about Y. Here\'s how I see it now." That\'s the whole move.',
      audioRef: null,
    },
    {
      id: 'real_apology',
      target: 'A real apology',
      native: "Naming what you did, naming the impact, naming what you'll do differently — without 'sorry if', 'sorry but', or 'sorry you felt'",
      literal: 'Aaron Lazare, *On Apology*; Harriet Lerner, *Why Won\'t You Apologize?*; both well-supported in clinical and organisational research',
      emoji: '🪨',
      phonetic: '"I sent the deck without checking the figures. Three of them were wrong. I\'ve corrected them and re-sent. I\'ll build a sign-off check into my workflow." That\'s a real apology. No "sorry IF you were confused".',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three short structures, one common move',
    explanation: "Each of the three conversations has its own short structure. Declining: brief reason + alternative or escalation. Walking back: name old position + name new view + explain what changed. Apologising: what I did + impact + what I'll do differently. The common move underneath all three is: short, specific, no over-explaining. Long apologies and long refusals usually signal you don't believe your own no, your new view, or your accountability.",
    examples: [
      { target: 'Decline: "I can\'t take that on this week. The two big things on my plate already need the time."', native: 'Short. Reason given. No grovelling. No five-paragraph backstory.' },
      { target: 'Walking back: "When I pushed back on the timeline last week, I hadn\'t seen the client constraints. Having seen them now, I think the proposed timeline is right."', native: 'Old position named. New view named. What changed named.' },
      { target: 'Apology: "I copied the wrong numbers into the report. The director called it out in the meeting. I\'ve corrected the version on the shared drive and I\'m adding a check before send."', native: 'Specific action, specific impact, specific change. No "sorry if".' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each phrase to its failure mode',
      pairs: [
        { left: '"Sorry if you were upset by what I said"', right: 'Non-apology — locates the problem in the other person\'s reaction' },
        { left: '"I would love to help but unfortunately I just can\'t right now, I\'m so swamped, you wouldn\'t believe..."', right: 'Over-justified no — signals you don\'t trust the no' },
        { left: '"You know what, you\'re right, my bad, doesn\'t matter, let\'s move on"', right: 'Performative apology — too fast, no specifics, leaves nothing repaired' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these is a real apology?',
      question: 'Pick the one with action, impact, and a specific change',
      options: [
        { text: '"I\'m so sorry, I just feel terrible about all of this, I don\'t know what to say."', correct: false },
        { text: '"I missed the deadline on the brief. The client had to wait an extra day for the update. I\'m setting calendar reminders three days out for the rest of the project."', correct: true },
        { text: '"Sorry if you felt let down — that wasn\'t my intention."', correct: false },
      ],
      explanation: 'The middle option does the three things a real apology has to do: it names the action specifically, names the actual impact (the client waited), and names a concrete change going forward. The first is feelings about the apology. The third is the classic non-apology — it locates the problem in the listener\'s reaction.',
    },
    {
      type: 'fill_blank',
      instruction: 'The distinction that makes apologies survivable',
      sentence: 'Guilt says "I did something bad". Shame says "I am _____". Apologies repair guilt; shame just makes everyone uncomfortable.',
      options: ['bad', 'wrong', 'sorry'],
      correct: 'bad',
      context: "Brené Brown's distinction. The move from shame to guilt is what makes a real apology possible. You can repair what you did. You can't repair the claim that you are fundamentally defective — because that's not the actual problem.",
    },
    {
      type: 'translate',
      instruction: 'A graceful no — what to leave OUT',
      prompt: 'A short, clean decline does not include five paragraphs of ___',
      correct: ['justification', 'justifications', 'apology', 'excuses', 'over-explanation', 'overexplanation', 'explaining'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the structure of a real apology',
      words: ['what', 'what', 'I', 'differently', 'did', 'the', 'impact', 'I\'ll', 'was', 'do'],
      correct: ['what', 'I', 'did', 'what', 'the', 'impact', 'was', 'I\'ll', 'do', 'differently'],
      translation: 'Action → impact → change. No "sorry if". No "sorry but". No "sorry you felt".',
    },
    {
      type: 'translate',
      instruction: 'Walking back a position — the three components',
      prompt: 'What I argued before, ___, what I see now',
      correct: ['what changed', 'what shifted', "what I've learned", "what I've heard", 'what I now know', 'why', 'what I missed'],
    },
  ],

  rwenDialogue: {
    intro: "Let's pick one of the three — decline, walk back, or apologise — and draft the actual sentence.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Which one is alive for you right now? A request you need to decline, a position you stated and now think was wrong, or a mistake you owe an apology for.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I owe an apology. I dropped something important last week.", native: '', correct: true, feedback: "Good. Three lines: what you did, what the impact was, what you'll do differently. No 'sorry if'. No 'I'm just so terrible at this'. Specific. Short. Try it now in your head." },
          { target: "I need to decline a request from a colleague that I keep agreeing to.", native: '', correct: true, feedback: "The pattern of repeatedly saying yes when you mean no is its own thing. Today's draft: a short reason, no five-paragraph backstory, and a clear next step ('I can\'t this week — let me know if next week works')." },
          { target: "I argued a position last week that I now think was wrong, and I haven't told anyone.", native: '', correct: true, feedback: "Walking back a position is the rarest of the three — and the one that builds the most trust over time. Three components: name the old position, name the new view, name what changed. The 'what changed' part is the one most people skip — and it's the part that makes it credible." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Now draft it. Three sentences. No more. If you find yourself wanting to add a fourth sentence — that's usually a sign you don't trust the first three. Hold the urge and read it again.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I drafted it. It feels too short. I want to add context and explanation.", native: '', correct: true, feedback: "That's the test. The discomfort with how short it is — that's the muscle being trained. Long versions of these conversations almost always read as defensive or anxious. Send the short version. The other person will read it as adult." },
          { target: "I drafted it and it feels honest.", native: '', correct: true, feedback: "Then send it. Or rehearse it once if it's a face-to-face. Honest + short is the right combination. You'll be one of the few people in your workplace doing this." },
          { target: "I drafted it but I'm scared it'll go badly.", native: '', correct: true, feedback: "Probably. These conversations have variable outcomes — even when delivered well. The course's promise is not that they always go well. It's that you'll have shown up like an adult. The rest is not entirely yours to control. (Lesson 1 again, in case you needed it.)" },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Three sentences for a decline. Three for a walk-back. Three for an apology. The brevity is the skill. The honesty is what makes the brevity earn its keep.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'In one phrase — Brené Brown\'s distinction: "I did something bad" vs "I am ___"',
        correct: ['bad', 'I am bad'],
      },
      {
        prompt: 'In three words — what does a real apology name? (action, ___, change)',
        correct: ['impact', 'the impact', 'consequences', 'effect'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Pick the live one — a decline, a walk-back, or an apology — and write the three sentences. Then send or say it within the next 48 hours. If you find yourself adding a fourth sentence, delete one of the first three until you're back to three. Three is the bar.",
    rwenSignoff: "Three sentences. Two days. The hardest part is hitting send — but the draft is the part that takes the skill.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 7. Rwen helps the user draft the actual sentences for whichever of the three conversations is live for them — decline, walk-back, or apology. The user produces three sentences and Rwen pressure-tests them: any 'sorry if'? Any over-justification? Any vague impact?",
    rwenRole: "Rwen — surgical, slightly insistent on brevity. Looks specifically for: 'sorry if', 'sorry but', 'I just', long preambles, character claims about themselves ('I'm such an idiot for...'), and missing specifics. Does NOT add reassurance. The point is to build the user's tolerance for short, honest sentences, not to make them feel better about a draft that's still hiding.",
    successCriteria: "User produces three sentences (or fewer) that contain: action/decline/old-position, impact/reason/what-changed, change/alternative/new-view. Crucially, the draft is FREE of 'sorry if', 'sorry but', or shame language ('I'm so terrible'). Bonus if the user notices their own urge to add a fourth sentence and recognises it as anxiety, not necessity.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
