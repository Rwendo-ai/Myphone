import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-distortions-after-a-knock',
  module: 1,
  lesson: 3,
  title: 'Catastrophising, Mind-Reading, Fortune-Telling',
  estimatedMinutes: 8,
  xpReward: 30,

  hook: {
    rwenLine: "Today's the day you become someone who can name the specific shape of their distorted thinking — not just 'I'm spiralling', but 'this is mind-reading' or 'this is fortune-telling.' Naming is half the work. The other half is one realistic counter-statement, not a positive one.",
    culturalNote: "Aaron Beck and David Burns mapped a small set of cognitive distortions that show up reliably after a setback. Three of them dominate after a confidence knock. Catastrophising — running one bad event into total ruin. Mind-reading — assuming you know what other people are thinking about you. Fortune-telling — predicting the future as if you had already lived it. The Stoics had a corrective practice — *premeditatio malorum*, imagining bad outcomes precisely — but it works only when the imagining is realistic, not vague catastrophe. Precision is the antidote to all three distortions.",
  },

  chunks: [
    {
      id: 'catastrophising_again',
      target: 'Catastrophising',
      native: "Treating the worst possible outcome as the most likely one — and treating likely as already-happened",
      literal: 'CBT — Beck, Burns; one of the most reliable distortions after a setback',
      emoji: '🌪️',
      phonetic: "'I'll never work again.' 'No one will ever love me.' 'My life is over.' Notice the absolutes.",
      audioRef: null,
    },
    {
      id: 'mind_reading',
      target: 'Mind-reading',
      native: "Believing you know what other people are thinking about you — usually that they are judging you",
      literal: 'CBT — Beck, Burns; especially active after a public failure or visible loss',
      emoji: '👁️',
      phonetic: "'They think I am pathetic.' 'They are just being polite.' 'They are talking about me.' You have not actually heard them say any of this.",
      audioRef: null,
    },
    {
      id: 'fortune_telling',
      target: 'Fortune-telling',
      native: "Treating a prediction about the future as if it were a fact already established",
      literal: 'CBT — Beck, Burns; closely related to catastrophising but specifically future-tensed',
      emoji: '🔮',
      phonetic: "'No one will hire me.' 'I will fail again.' 'It will be worse next time.' Notice you have not yet been there.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Name it, then write the realistic counter',
    explanation: "When the harsh thought arrives, the move is two steps. First: name the distortion out loud or in writing — 'this is catastrophising', 'this is mind-reading', 'this is fortune-telling.' Second: write one realistic counter-statement. Not a positive one. The realistic counter does not say 'everything will be fine' — it says what is actually likely given what you actually know. The Stoics' precision is the antidote to vague doom.",
    examples: [
      { target: "'No one will ever hire me again.' (fortune-telling)", native: "Realistic counter: 'I have had three rejections in five months. Search times for senior roles in my sector currently average nine months. I am four months in.'" },
      { target: "'Everyone at the school gate is judging me since the divorce.' (mind-reading)", native: "Realistic counter: 'Two parents have actually said something kind. One was awkward. I have not heard the rest say anything at all. I do not know what they are thinking.'" },
      { target: "'My career is over after this lawsuit.' (catastrophising)", native: "Realistic counter: 'The lawsuit was settled. Two clients dropped me. Three did not. I have a real reputational hit and a working business. Both are true.'" },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each distortion to its definition',
      pairs: [
        { left: 'Catastrophising', right: 'Treating the worst possible outcome as the most likely one' },
        { left: 'Mind-reading', right: 'Believing you know what other people are thinking about you' },
        { left: 'Fortune-telling', right: 'Treating a prediction about the future as if it had already happened' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'A 54-year-old radiologist is laid off after a department restructure. She thinks: "Everyone in my old hospital is whispering that I deserved it." Which distortion is dominant?',
      question: 'Pick the most accurate label',
      options: [
        { text: 'Catastrophising', correct: false },
        { text: 'Mind-reading', correct: true },
        { text: 'Fortune-telling', correct: false },
      ],
      explanation: "She has not heard any of them whisper. She is producing a sentence about what they are thinking and treating that sentence as fact. That is the textbook shape of mind-reading. It is also possible the sentence is partly true — that does not change the distortion; it just means the realistic counter has to include 'some are, some aren't, I don't know which.'",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the second step of the technique',
      sentence: "After naming the distortion, you write one ___ counter-statement — not a positive one.",
      options: ['realistic', 'positive', 'optimistic'],
      correct: 'realistic',
      context: "Forced positivity is brittle and the user usually does not believe it. Realistic counter-statements work because they are defensible. The standard is what a careful, neutral observer would say given the same evidence.",
    },
    {
      type: 'translate',
      instruction: 'In one word — the distortion that predicts the future as if it had already happened?',
      prompt: 'The technical term:',
      correct: ['fortune-telling', 'fortune telling', 'fortunetelling', 'fortune-telling distortion'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the technique",
      words: ['the', 'realistic', 'name', 'distortion', 'write', 'counter', 'one', 'then', 'the'],
      correct: ['name', 'the', 'distortion', 'then', 'write', 'one', 'realistic', 'counter'],
      translation: "Two steps. The first is half the work. The second is the other half. Skip either and the thought wins.",
    },
    {
      type: 'translate',
      instruction: 'Of the three distortions, which has been most active for you in the last week?',
      prompt: 'Type one: catastrophising, mind-reading, or fortune-telling',
      correct: ['catastrophising', 'catastrophizing', 'mind-reading', 'mind reading', 'mindreading', 'fortune-telling', 'fortune telling', 'fortunetelling'],
    },
  ],

  rwenDialogue: {
    intro: "Let's run the technique on a thought that has been live for you this week.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind one harsh thought you have had about yourself or your situation in the last week. Not the worst one — just one specific sentence you noticed yourself thinking.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now look at it. Which of the three is it? Catastrophising — running it into total ruin? Mind-reading — guessing what others think? Fortune-telling — predicting the future as fact? Sometimes it is more than one.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "It was catastrophising. The thought turned one bad event into total ruin.", native: '', correct: true, feedback: "Good naming. The realistic counter for catastrophising is usually a list of what is actually still working alongside what is not. Both columns. Hold both." },
          { target: "It was mind-reading. I was sure I knew what people were thinking about me.", native: '', correct: true, feedback: "Common after a visible knock. The realistic counter is almost always: I have not heard them say it. Some probably are, some probably aren't, most are thinking about themselves. The mind invents a unanimous jury that does not exist." },
          { target: "It was fortune-telling. I was already living in the bad future.", native: '', correct: true, feedback: "Useful catch. The realistic counter for fortune-telling is to come back to what you actually know — the data points you have, not the data points your fear is generating. Stoic precision: imagine the bad outcome accurately, not vaguely." },
          { target: "Honestly, it was a mix of all three.", native: '', correct: true, feedback: "Often is. The three distortions tend to feed each other — catastrophising sets up fortune-telling, mind-reading confirms catastrophising. Naming one is enough for today; you do not have to dismantle the whole stack at once." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You did the harder half. The naming. Tomorrow, when one of these shows up again, you will be a quarter-second faster at catching it. That quarter-second compounds.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'Name the three distortions covered in this lesson.',
        correct: [
          'catastrophising, mind-reading, fortune-telling',
          'catastrophizing, mind reading, fortune telling',
          'catastrophising mind-reading fortune-telling',
          'catastrophizing mind-reading fortune-telling',
          'catastrophising, mind reading, fortune telling',
          'catastrophising mind reading fortune telling',
        ],
      },
      {
        prompt: 'After naming the distortion, what kind of counter-statement do you write — positive or realistic?',
        correct: ['realistic'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, when one harsh thought about yourself or your situation shows up, do two things in writing or in your head: (1) name which of the three it is — catastrophising, mind-reading, or fortune-telling. (2) Write one realistic counter, no positivity required.",
    rwenSignoff: "Two steps. One thought. About a minute. The naming alone is doing real work even if the counter feels weak.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 3. Rwen offers a 3-minute coaching conversation in which the user identifies one harsh thought, names which distortion it is, and produces one realistic counter-statement. The aim is for the user to leave with the named-and-countered version of one specific thought.",
    rwenRole: "Rwen — calm, precise, slightly more analytical than usual (this is a CBT lesson — naming patterns is the work). Does NOT push the user toward optimism. Coaches them toward defensible, realistic statements. If the user produces a forced-positive counter ('everything will be fine'), gently asks 'is that defensible? what is the realistic version?'",
    successCriteria: "User (1) names one specific harsh thought in plain words, (2) correctly identifies which of the three distortions is most active, (3) produces one realistic counter-statement that they actually find defensible. Bonus if the counter explicitly contains both 'this is true' and 'this is also true' — paired evidence rather than rebuttal.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
