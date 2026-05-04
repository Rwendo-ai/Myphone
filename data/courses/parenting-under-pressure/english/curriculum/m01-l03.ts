import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-name-what-you-feel',
  module: 1,
  lesson: 3,
  title: 'Naming What You Feel Before You Name What They Did',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Most parenting blow-ups happen because the parent named the child's behaviour ('you are being SO rude') without first naming what was happening inside themselves. Today we reverse that order. The order matters more than the words.",
    culturalNote: "Daniel Siegel's 'name it to tame it' was originally taught as a tool for helping children. The same brain mechanism — the prefrontal cortex coming back online when a feeling is labelled — works on the parent. The parent who can silently name 'this is fear, dressed as anger' becomes a different parent in the next sentence.",
  },

  chunks: [
    {
      id: 'name_it_tame_it',
      target: 'Name it to tame it',
      native: "When you label what you're feeling, the limbic charge drops. The prefrontal cortex comes back online. This is measurable, not metaphorical.",
      literal: "Daniel Siegel — affect labelling; supported by Lieberman et al. (UCLA fMRI studies)",
      emoji: '🏷️',
      phonetic: 'A vague feeling is huge. A named feeling is workable.',
      audioRef: null,
    },
    {
      id: 'underneath_the_anger',
      target: 'Underneath the anger',
      native: "Anger at a child is almost always carrying something else — fear, shame, exhaustion, grief, hurt. The anger is the lid; the real feeling is below it.",
      literal: "NVC (Rosenberg) — anger as a tip; emotion-focused therapy (Greenberg) — primary vs. secondary emotions",
      emoji: '🌊',
      phonetic: "If you only see the anger, you only treat the lid. The pot keeps boiling.",
      audioRef: null,
    },
    {
      id: 'order_of_operations',
      target: 'The order of operations',
      native: "Name your own feeling first (silently, to yourself). Then speak. Reverse it and you almost always shame the child for what is actually happening in you.",
      literal: 'Self-regulation precedes co-regulation — Polyvagal & Siegel',
      emoji: '➡️',
      phonetic: 'Inside first. Outside second.',
      audioRef: null,
    },
  ],

  pattern: {
    name: "What's actually under the anger",
    explanation: "When you feel anger at your child, before you say anything, ask one question silently: what else is here? The most common honest answers are: I am scared (they almost ran into the road, they got a bad mark, they are pulling away), I am exhausted (I have nothing left and they are asking for more), I am ashamed (I think this means I am failing as a parent), or I am hurt (what they said landed harder than I want to admit). The naming changes nothing about whether their behaviour was okay. It changes who you are when you respond to it.",
    examples: [
      { target: 'Toddler runs into the road', native: "Anger on top. Underneath: terror. Naming this lets you grab them firmly without screaming the kind of words that haunt a small body." },
      { target: 'Teen brings home a failing grade', native: "Anger on top. Underneath: fear for their future, mixed with shame about your own. Naming this means the conversation can be about them, not your fear." },
      { target: 'Adult child says you were a difficult parent', native: "Anger on top. Underneath: grief for what you wish had been different, shame, love. Naming this means the reply isn't a counter-attack." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match the term to its meaning',
      pairs: [
        { left: 'Name it to tame it', right: 'Labelling a feeling lowers its charge in the brain' },
        { left: 'Underneath the anger', right: 'The feeling the anger is actually carrying' },
        { left: 'Order of operations', right: 'Inside first, outside second' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Your child does something that lights up anger. Before you speak, the move is to...',
      question: 'Pick the move this lesson recommends',
      options: [
        { text: 'Decide the right consequence', correct: false },
        { text: 'Silently ask: what else is under this anger?', correct: true },
        { text: 'Suppress the anger so you stay calm', correct: false },
      ],
      explanation: "You don't suppress the anger — you investigate it. Anger is a signal that something matters. The question is: what? Until you know, you'll respond to a feeling whose real shape you haven't seen.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the principle',
      sentence: 'Name your own feeling _____. Then speak.',
      options: ['silently', 'loudly', 'later'],
      correct: 'silently',
      context: "The naming is for you, not for them. You don't need to announce 'I am feeling fear right now' to a five-year-old. You just need to know it before you open your mouth.",
    },
    {
      type: 'translate',
      instruction: 'Anger at a child is almost always carrying ___',
      prompt: 'Something else — fear, shame, exhaustion, hurt, or...',
      correct: ['grief', 'sadness', 'love', 'worry', 'tiredness', 'helplessness', 'overwhelm'],
    },
    {
      type: 'build_sentence',
      instruction: "Arrange the lesson's central order",
      words: ['feeling', 'speak', 'name', 'your', 'then'],
      correct: ['name', 'your', 'feeling', 'then', 'speak'],
      translation: "Four words. The whole lesson.",
    },
    {
      type: 'translate',
      instruction: 'A vague feeling is huge. A named feeling is...',
      prompt: 'A named feeling is ___',
      correct: ['workable', 'manageable', 'smaller', 'small', 'usable', 'something you can hold', 'less overwhelming', 'bearable'],
    },
  ],

  rwenDialogue: {
    intro: "Let's practise on a real moment. Bring up the last time you were angry with your child. Don't pick the worst moment — pick a normal one.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Hold that moment. Now ask: under the anger, what else was there? Don't pick the noble answer. Pick the honest one.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Honestly, I was just exhausted. I had nothing left.", native: '', correct: true, feedback: "That's the most common answer in this lesson. Exhaustion looks like anger because your nervous system has no buffer left. The intervention isn't a parenting tip — it's sleep, food, water, and asking for help. The anger is a low-fuel light." },
          { target: "Fear. They were doing something I thought was dangerous or self-destructive.", native: '', correct: true, feedback: "Fear-driven anger feels righteous. It's why we shout at a child who ran into the road. The anger is real — the danger was real — but knowing fear is underneath lets you hold them firmly without making them feel like the danger." },
          { target: "Shame. I felt like their behaviour meant I was failing as a parent.", native: '', correct: true, feedback: "This is the hardest one to name and the most important. When parental shame drives the anger, you punish the child for a feeling that belongs to you. Naming it doesn't excuse the behaviour — it just stops you handing the bill to a person who didn't order it." },
          { target: "Hurt. What they said cut more than I expected.", native: '', correct: true, feedback: "Children — especially older ones — say things that wound real adults. Pretending it didn't hurt makes the response more brittle. Naming the hurt to yourself first lets you reply from someone who is wounded but not collapsing — which is, quietly, what they need to see." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You don't have to say any of this to your child. Knowing it for yourself is the whole intervention. The next sentence out of your mouth is already a different sentence.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In four words: name your feeling, ___ ___ (then ___).',
        correct: ['then speak', 'then talk', 'speak', 'then say', 'before you speak'],
      },
      {
        prompt: 'Name two things anger commonly carries underneath',
        correct: ['fear', 'shame', 'exhaustion', 'hurt', 'grief', 'tiredness', 'worry', 'sadness', 'fear and shame', 'fear, shame', 'shame and exhaustion', 'fear and exhaustion', 'hurt and fear', 'fear, exhaustion', 'shame, exhaustion', 'fear, hurt', 'tiredness and hurt'],
      },
    ],
  },

  mission: {
    title: "Today's 5-Minute Mission",
    task: "Next time today you feel anger at your child, before any words come out, silently complete this sentence: 'Under this anger, I am also feeling ____.' One word. That's the whole intervention. You don't have to say it out loud or do anything with it.",
    rwenSignoff: "One word, said inside your head. The next sentence will be different.",
  },

  phase8: {
    scenario: "User has just finished Lesson 3. Rwen helps them practise naming what is under the anger for a specific recurring frustration with their child. The aim is to make the under-feeling speakable (privately) so the parent has a different starting point next time.",
    rwenRole: "Rwen — gentle, curious, never analytical or therapy-flavoured. Does not interpret what's underneath for the user. Asks the question and reflects back whatever they say.",
    successCriteria: "User identifies one recurring source of anger and names one specific under-feeling (fear, shame, exhaustion, hurt, grief). Bonus if they articulate that this changes who they want to be in the next moment, not what they will tell the child.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
