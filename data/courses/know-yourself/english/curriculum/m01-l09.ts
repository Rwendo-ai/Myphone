import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l09-sitting-with-what-you-avoid',
  module: 1,
  lesson: 9,
  title: "Sitting With What You'd Rather Avoid",
  estimatedMinutes: 8,
  xpReward: 35,

  hook: {
    rwenLine: "This lesson is harder than the others. Read it slowly. We are not going to go anywhere extreme today. We are simply going to look at the difference between two strategies for living: spending most of your energy avoiding what you don't want to feel, and learning, gently, to be present with it.",
    culturalNote: "ACT (Acceptance and Commitment Therapy) makes a strong claim, supported by decades of clinical research: most psychological suffering is not the original feeling. It is what we do to avoid the feeling. Every contemplative tradition agrees, in its own language. The Stoics: 'we suffer more in imagination than in reality.' Buddhist psychology: 'pain is unavoidable, suffering is what we add.'",
  },

  chunks: [
    {
      id: 'clean_pain',
      target: 'Clean pain',
      native: "The feeling itself — the actual sadness, fear, anger, grief that is happening",
      literal: 'ACT / Buddhist psychology — the unavoidable component of suffering; what is actually here',
      emoji: '💧',
      phonetic: "Real, often appropriate, often passes through faster than we expect when met directly.",
      audioRef: null,
    },
    {
      id: 'dirty_pain',
      target: 'Dirty pain',
      native: 'The extra suffering we add by avoiding, fighting, judging, or analysing the original feeling',
      literal: 'ACT — Steven Hayes; also Tara Brach (radical acceptance), Pema Chödrön (the second arrow)',
      emoji: '🪤',
      phonetic: 'Often larger than the clean pain. Often the part that lasts.',
      audioRef: null,
    },
    {
      id: 'allowing',
      target: 'Allowing',
      native: 'Letting a feeling be what it is, in the body, for as long as it is — without trying to fix it, force it, or talk yourself out of it',
      literal: 'MBSR — non-judgemental awareness; also Tara Brach\'s RAIN: Recognise, Allow, Investigate, Nurture',
      emoji: '🌧️',
      phonetic: "Allowing is not approval. It is not surrender. It is simply: this is what is here right now.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The two arrows',
    explanation: "The Buddha used the metaphor of two arrows. The first arrow is the unavoidable pain — illness, loss, disappointment. The second arrow is the one we shoot ourselves with: the resistance, the why-me, the should-have-been, the thinking-about-the-thinking. The first arrow is given to us. The second is ours to put down.",
    examples: [
      { target: 'First arrow: a hard piece of news', native: 'Second arrow: hours of "this should not be happening" rumination' },
      { target: 'First arrow: a feeling of loneliness on a Sunday', native: 'Second arrow: judging yourself for being lonely on a Sunday' },
      { target: 'First arrow: anxiety before a difficult conversation', native: 'Second arrow: anxiety about being anxious; commentary about your anxiety; trying to suppress the anxiety' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Clean pain', right: 'The feeling itself — sadness, fear, grief' },
        { left: 'Dirty pain', right: 'The extra suffering added by avoidance, judgement, or fighting it' },
        { left: 'Allowing', right: 'Letting the feeling be present, without fixing it' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'You feel anxious before a difficult conversation. According to this lesson, which of these is dirty pain?',
      question: 'Pick the example that adds suffering to suffering',
      options: [
        { text: 'The actual physical anxiety in your chest and stomach', correct: false },
        { text: 'Spending an hour thinking "I should not still be anxious about this — what is wrong with me?"', correct: true },
        { text: 'Acknowledging that the conversation matters to you', correct: false },
      ],
      explanation: "The first is clean pain — the feeling itself. The third is honest acknowledgement, not suffering. The second adds judgement and self-attack on top of an already uncomfortable feeling. That is the second arrow.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the Buddhist metaphor',
      sentence: 'Pain is unavoidable. _____ is what we add.',
      options: ['Suffering', 'Anxiety', 'Healing'],
      correct: 'Suffering',
      context: "The distinction between pain (the first arrow, given to us) and suffering (the second arrow, our own resistance) is the foundational claim of much contemplative psychology.",
    },
    {
      type: 'translate',
      instruction: 'In one word — letting a feeling be what it is, without trying to fix or fight it, is called...',
      prompt: 'The technical term:',
      correct: ['allowing', 'acceptance', 'allowing it', 'accepting'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the central claim of this lesson",
      words: ['add', 'pain', 'is', 'what', 'we', 'unavoidable', 'is', 'suffering'],
      correct: ['pain', 'is', 'unavoidable', 'suffering', 'is', 'what', 'we', 'add'],
      translation: "Read it once. Then read it again, slowly.",
    },
    {
      type: 'translate',
      instruction: 'Name one second arrow you have shot yourself with this week',
      prompt: 'A judgement, a should-have-been, a fight against a feeling. Type a phrase — for yourself, not for me. (Anything counts.)',
      correct: [],
    },
  ],

  rwenDialogue: {
    intro: "I want to walk you through one specific feeling — gently, slowly, just to practise the move.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind a feeling from this week that you've been pushing away. It does not have to be big. Maybe a small disappointment. A flicker of envy. A loneliness. A regret.",
      },
      {
        speaker: 'rwen',
        rwenLine: "First — locate it in your body. Where do you feel it? Chest, throat, stomach, behind the eyes? Just notice. Don't change anything.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now, silently, say to that feeling: 'You can be here.' Not 'I love you.' Not 'this is fine.' Just: 'you can be here.' Take a breath.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I did it. The feeling softened a little.", native: '', correct: true, feedback: "Yes. That is what happens when something is allowed to exist instead of being fought. It does not always shrink — sometimes it stays the same — but the second arrow stops being shot, and that is itself relief." },
          { target: "I did it. The feeling got bigger first.", native: '', correct: true, feedback: "Honest, and important. When a feeling has been pushed away for a long time, allowing it can let it rise before it settles. This is not failure. It is the feeling being heard, possibly for the first time in a while. It will pass." },
          { target: "I did it. Nothing changed.", native: '', correct: true, feedback: "That is also a valid outcome. The skill is the allowing, not the result. Some feelings need to be sat with for a long time before they shift. Some don't shift at all and we still grow by sitting with them." },
          { target: "I tried but I couldn't really locate the feeling in my body.", native: '', correct: true, feedback: "That happens often, especially at first. The body skill is part of Unit 2. For now, even noticing 'I can't find it' is a useful piece of self-knowledge." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "What you just did is the work. Most adults spend most of their lives running from feelings they could have made room for. Today you made room for one. That is real.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'In one phrase: what is the difference between clean pain and dirty pain?',
        correct: ['clean pain is the feeling, dirty pain is what we add', 'clean is the feeling, dirty is what we add', 'clean pain is the actual feeling; dirty pain is the resistance', 'clean is the original; dirty is the resistance', 'one is the feeling; the other is the suffering we add', 'pain is the feeling; suffering is what we add', 'one is unavoidable; the other is added'],
      },
      {
        prompt: 'Complete the principle: "Pain is unavoidable. ___ is what we add."',
        correct: ['suffering'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Today, when one uncomfortable feeling shows up — a small irritation, a flicker of sadness, a wave of anxiety — silently say to it: 'You can be here.' Don't fix it. Don't analyse it. Just keep it company for ten seconds.",
    rwenSignoff: "Ten seconds of company is more than most feelings ever get.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 9. Rwen offers a slightly longer, slower coaching conversation about a real feeling the user has been avoiding. The aim is to practise the allowing move with Rwen present, then notice what shifts (or doesn't). This is the most emotionally intimate Phase 8 of the unit and Rwen's tone matters.",
    rwenRole: "Rwen — soft, slow, unhurried. Speaks LESS than the user. Does NOT analyse, interpret, or solve. Does NOT ask 'why' questions. Asks 'where do you feel it' and 'what does it want you to know'. If the feeling is heavy, names that it is heavy, and reminds the user that they can stop at any time. If the feeling is small, treats it with the same respect.",
    successCriteria: "User names a specific feeling they have been avoiding, locates it in the body, applies the 'you can be here' phrase, and reports honestly what happened (softened, intensified, stayed, became something else). Bonus if they recognise the difference between the clean pain and what they had been adding to it.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
