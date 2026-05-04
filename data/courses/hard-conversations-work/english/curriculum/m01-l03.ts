import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-feeling-and-need-underneath',
  module: 1,
  lesson: 3,
  title: 'The Feeling and the Need Underneath',
  estimatedMinutes: 8,
  xpReward: 30,

  hook: {
    rwenLine: "Today's the day you become someone who can name what they feel at work, in front of another adult, without apology and without making it the other person's fault. This is the move that most professionals never learn. You're about to be in a small minority.",
    culturalNote: "Rosenberg's insight is that most workplace complaints are feelings dressed up as accusations. 'You don't respect my time' is a feeling — probably hurt or unimportant — projected outward as a charge. Naming the feeling and the need behind it lowers the stakes for both of you. It also makes you harder to argue with, because no one can dispute what you feel.",
  },

  chunks: [
    {
      id: 'feeling',
      target: 'Feeling',
      native: 'A short emotional word about what is happening inside you — not a thought disguised as a feeling',
      literal: 'NVC step 2 — Rosenberg; the universal feelings list (frustrated, hurt, anxious, deflated, uneasy)',
      emoji: '🌊',
      phonetic: '"I feel disrespected" is not a feeling — it is an interpretation. "I feel hurt" or "I feel deflated" — those are feelings.',
      audioRef: null,
    },
    {
      id: 'need',
      target: 'Need',
      native: 'The underlying universal human need that the feeling is pointing toward',
      literal: 'NVC step 3 — Rosenberg; the universal needs taxonomy (clarity, respect, contribution, fairness, autonomy, rest)',
      emoji: '🌱',
      phonetic: 'Frustration usually points to a need for clarity or progress. Hurt usually points to a need for respect or recognition.',
      audioRef: null,
    },
    {
      id: 'pseudo_feelings',
      target: 'Pseudo-feelings',
      native: 'Words that sound like feelings but actually contain a hidden accusation',
      literal: 'NVC — Rosenberg; words like *abandoned*, *betrayed*, *manipulated*, *attacked*, *ignored* — they encode the other person\'s alleged action',
      emoji: '🎭',
      phonetic: '"I feel ignored" is really "you ignored me." Reach for the actual feeling underneath: lonely, deflated, unimportant.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'From accusation to feeling to need',
    explanation: "There is a chain that turns a complaint into something workable. Start with the accusation (what your mind first wants to say). Strip the accusation off and find the feeling underneath. Strip the feeling off and find the universal need pointing through it. The shorter version of this lesson: every workplace complaint is a need wearing a costume.",
    examples: [
      { target: 'Accusation: "You don\'t value my work."', native: 'Feeling: deflated, dismissed. Need: recognition, contribution.' },
      { target: 'Accusation: "You\'re micromanaging me."', native: 'Feeling: frustrated, constrained. Need: autonomy, trust.' },
      { target: 'Accusation: "You blindsided me in that meeting."', native: 'Feeling: surprised, exposed. Need: predictability, prior consultation.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each pseudo-feeling to the actual feeling underneath',
      pairs: [
        { left: '"I feel ignored"', right: 'lonely, deflated, unimportant' },
        { left: '"I feel manipulated"', right: 'uneasy, mistrustful, off-balance' },
        { left: '"I feel attacked"', right: 'scared, defensive, exposed' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which sentence names a real feeling rather than a pseudo-feeling?',
      question: 'The "feel" word that doesn\'t hide an accusation',
      options: [
        { text: '"I feel betrayed by what happened in the meeting."', correct: false },
        { text: '"I feel hurt and a bit anxious about what happened in the meeting."', correct: true },
        { text: '"I feel disrespected by what happened in the meeting."', correct: false },
      ],
      explanation: '"Betrayed" and "disrespected" both encode an accusation against the other person. Hurt and anxious are clean feelings — they describe your interior, not their alleged action. The other person can argue with the first two; they cannot argue with the third.',
    },
    {
      type: 'fill_blank',
      instruction: 'Map a feeling to a likely underlying need',
      sentence: 'Frustration with a colleague who keeps changing the brief usually points to an underlying need for _____.',
      options: ['clarity', 'praise', 'silence'],
      correct: 'clarity',
      context: "Most 'frustrated' moments at work point to clarity, predictability, or progress. Naming the need beneath the frustration often defuses it and gives both of you something to actually work on.",
    },
    {
      type: 'translate',
      instruction: 'Strip the accusation out of this pseudo-feeling',
      prompt: 'Replace "I feel abandoned by the team" with a real feeling. (Hint: think about the actual interior — alone, ___, sad)',
      correct: ['lonely', 'isolated', 'unsupported', 'unsupported and lonely', 'on my own', 'alone'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the NVC ordering of the first three steps',
      words: ['observation', 'feeling', 'need', 'then', 'then'],
      correct: ['observation', 'then', 'feeling', 'then', 'need'],
      translation: 'Observation first (the data). Then the feeling (your interior). Then the need (the universal value beneath the feeling). Request comes in the next lesson.',
    },
    {
      type: 'translate',
      instruction: 'Map the feeling to the need',
      prompt: 'Feeling: deflated after my idea was reattributed in the meeting. Underlying need: ___',
      correct: ['recognition', 'acknowledgement', 'credit', 'being seen', 'fairness', 'contribution'],
    },
  ],

  rwenDialogue: {
    intro: "Let's find the feeling and the need under one of your own workplace complaints.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Take the observation you wrote yesterday. The clean, camera-test version. Now I'm going to ask you a question that might feel slightly invasive: when that thing happened, what did you actually feel? Not what they did. What was going on inside you.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Honestly, anger. Or annoyance.", native: '', correct: true, feedback: "Good. Anger is almost always a surface emotion. Underneath anger there is usually hurt, fear, or a sense of being treated unfairly. Which of those rings most true here?" },
          { target: "I feel disrespected. Or dismissed. One of those.", native: '', correct: true, feedback: "Both are pseudo-feelings — they encode an accusation. The actual feeling underneath is often deflated, small, unimportant, or invisible. Try one of those instead and see if it lands more honestly." },
          { target: "I'm not sure. Maybe just tired.", native: '', correct: true, feedback: "Tired is a real word. Sometimes the feeling under the workplace complaint is just exhaustion — and the need is rest, not the conversation. Worth checking before you go further." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Now the need. If that feeling could speak, what would it ask for? Not from this person specifically — what universal thing? Recognition? Predictability? Autonomy? Fairness? Rest?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Recognition. I want my work to be seen for what it actually was.", native: '', correct: true, feedback: "Clean. That's a need any human would have, and it's much harder to argue with than 'you don't appreciate me'. You've just made the complaint workable." },
          { target: "Predictability. I just want to know what I'm walking into.", native: '', correct: true, feedback: "Excellent. 'I need predictability' is a sentence almost any reasonable colleague can respond to. 'You blindsided me' is a sentence that produces defensiveness." },
          { target: "Honestly, I think I just need rest. The conversation can wait.", native: '', correct: true, feedback: "That's the most adult answer in the dialogue. Sometimes the conversation isn't the answer — sometimes the answer is sleep, food, and revisiting it Tuesday." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You just did the move 90% of professionals never make: you traced an accusation back to a feeling and a need. Tomorrow we add the request, and you'll have the whole four-part move.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Type your answer.',
    prompts: [
      {
        prompt: 'What is the term for words like "ignored", "betrayed", "manipulated" that sound like feelings but contain an accusation?',
        correct: ['pseudo-feelings', 'pseudo feelings', 'pseudofeelings', 'pseudo-feeling', 'pseudo feeling'],
      },
      {
        prompt: 'In one word — what does the feeling of frustration usually point toward as an underlying need?',
        correct: ['clarity', 'progress', 'predictability', 'understanding'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Open your draft from yesterday. Add two new lines. Line one: 'When that happened, I felt ___' — using a real feeling, not a pseudo-feeling. Line two: 'because I needed ___' — using a universal need word (clarity, recognition, fairness, autonomy, predictability, rest, contribution). You now have three of the four parts.",
    rwenSignoff: "Two more lines. You're three-quarters of the way to the message you've been postponing.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 3. Rwen helps the user audit their feeling-and-need lines from the mission, catching pseudo-feelings and helping them locate the more honest interior word. The user leaves with two clean lines to add to their draft.",
    rwenRole: "Rwen — gentle, curious, careful with the feeling-naming. Listens for pseudo-feelings (abandoned, manipulated, attacked, dismissed, disrespected) and gently surfaces the real feeling underneath. Maps the feeling to a candidate need from the universal list. Does NOT tell the user what they 'really' feel — only offers two or three candidate words and asks which lands.",
    successCriteria: "User produces (1) a feeling word that is not a pseudo-feeling — i.e. does not encode an accusation — and (2) a candidate need word from the universal list. Bonus if the user catches themselves reaching for a pseudo-feeling and self-corrects.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
