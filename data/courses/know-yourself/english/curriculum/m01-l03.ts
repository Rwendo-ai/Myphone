import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l03-voice-in-your-head',
  module: 1,
  lesson: 3,
  title: 'The Voice in Your Head Is Not You',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "Most people, when they hear their own thoughts, assume those thoughts are the truth. Today we try a smaller, stranger claim: the voice in your head is something happening to you. Not the whole of you.",
    culturalNote: "This idea has roots in many traditions. Buddhist psychology calls it 'witnessing'. Modern Acceptance and Commitment Therapy calls it 'defusion'. Stoics called it 'prosoche' — the practice of stepping back and watching your own mind. We use it not as metaphysics but as a practical move you can make in real time.",
  },

  chunks: [
    {
      id: 'fusion',
      target: 'Fusion',
      native: "Treating a thought as if it were a fact about you, the world, or what's possible",
      literal: 'ACT — Steven Hayes; the default state in which a thought arrives and you simply believe it',
      emoji: '🪢',
      phonetic: 'Fused: "I am stupid." Defused: "I am noticing the thought that I am stupid."',
      audioRef: null,
    },
    {
      id: 'defusion',
      target: 'Defusion',
      native: 'Stepping back and watching the thought as a thought, not a truth',
      literal: 'ACT — defusion; the act of unhooking from the content of a thought to see its form',
      emoji: '🎈',
      phonetic: 'You did not stop having the thought. You stopped being inside it.',
      audioRef: null,
    },
    {
      id: 'observer',
      target: 'The observer',
      native: "The part of you that can notice your own thoughts — and which therefore cannot itself be those thoughts",
      literal: 'Across traditions: Buddhist witness consciousness, Stoic prosoche, ACT self-as-context, Jungian self',
      emoji: '👁️',
      phonetic: "If you can watch a thought, you are not the thought. You are the watcher.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The grammar of defusion',
    explanation: "There is a small but powerful linguistic move that changes a thought from a fact into an event. Adding the words 'I am noticing' or 'I am having the thought that' in front of any belief instantly defuses it. You are not denying the thought. You are giving yourself a place to stand outside it.",
    examples: [
      { target: '"I am a failure."', native: '"I am noticing the thought that I am a failure."' },
      { target: '"They hate me."', native: '"I am having the thought that they hate me."' },
      { target: '"Nothing ever works out."', native: '"My mind is producing the story that nothing ever works out."' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its definition',
      pairs: [
        { left: 'Fusion', right: 'Treating a thought as a fact' },
        { left: 'Defusion', right: 'Watching a thought as a thought' },
        { left: 'The observer', right: 'The part of you that can watch your own mind' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Which of these statements is defused?',
      question: 'Pick the one that creates space between the person and the thought',
      options: [
        { text: '"I am completely worthless."', correct: false },
        { text: '"I am noticing the thought that I am completely worthless."', correct: true },
        { text: '"Why do I always think these things?"', correct: false },
      ],
      explanation: "The middle answer is defused — it names the thought as a thought without arguing with it or judging it. The first is fused. The third is fused with a layer of self-criticism on top.",
    },
    {
      type: 'fill_blank',
      instruction: 'Apply the defusion move to this thought',
      sentence: 'Original: "Nobody likes me." → Defused: "I am _____ the thought that nobody likes me."',
      options: ['noticing', 'fixing', 'forgetting'],
      correct: 'noticing',
      context: "Defusion is not refutation. You are not saying the thought is wrong. You are simply watching it instead of being it.",
    },
    {
      type: 'translate',
      instruction: 'In your own words — what does defusion do to a thought?',
      prompt: 'It does not delete the thought. It changes your relationship to the thought from believing it to...',
      correct: ['watching it', 'observing it', 'noticing it', 'witnessing it', 'seeing it'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the core principle in your own words",
      words: ['watch', 'a', 'you', 'thought', 'are', 'if', 'not', 'the', 'thought', 'can'],
      correct: ['if', 'you', 'can', 'watch', 'a', 'thought', 'you', 'are', 'not', 'the', 'thought'],
      translation: "The mere capacity to observe a thought proves there is something doing the observing — and that something is not the thought.",
    },
    {
      type: 'translate',
      instruction: 'A harsh thought arrives. Apply the defusion phrase.',
      prompt: 'Take the thought "I always mess things up" and defuse it. (Hint: "I am ___ the thought that...")',
      correct: ['noticing', 'having', 'observing', 'noticing the thought', 'having the thought'],
    },
  ],

  rwenDialogue: {
    intro: "Let's try defusion in real time with one of your own thoughts.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Bring to mind one harsh or critical thought you have had recently about yourself. You don't have to type it. Just hold it in your head.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now, in your head, add these words at the front: 'I am noticing the thought that...' and finish the sentence with whatever the thought was.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I did it. The thought felt slightly less heavy.", native: '', correct: true, feedback: "That's defusion. The thought didn't disappear — it just became smaller because you stepped half an inch away from it." },
          { target: "I did it. Nothing felt different.", native: '', correct: true, feedback: "That's also a real outcome. Defusion is a skill, not a magic trick. Some thoughts loosen the first time. Others take many reps. Both count." },
          { target: "I did it. I noticed I argued with the thought instead of just watching it.", native: '', correct: true, feedback: "Excellent self-observation. Arguing with a thought is still being inside it. The skill is the watching, not the winning." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You just did the thing. From now on, you have a tool you can reach for whenever a thought tries to claim more than it deserves.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'What is the term for treating a thought as if it were a fact?',
        correct: ['fusion'],
      },
      {
        prompt: 'What is the term for stepping back and watching a thought as a thought?',
        correct: ['defusion'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Catch one harsh thought today — about yourself, about someone else, about the day. Silently add 'I am noticing the thought that...' in front of it. Watch what happens. You don't need to do anything else.",
    rwenSignoff: "One thought. One pair of words. That's the whole assignment.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 3. Rwen invites a short coaching conversation in which the user practises defusion on a real recurring thought of theirs. Rwen guides them through the prefix move and asks them what they notice.",
    rwenRole: "Rwen — gentle, non-judgemental, curious. Does NOT try to talk the user out of the thought, refute the thought, or reassure them. Only helps them apply the defusion phrase and asks one open question about what shifted (if anything).",
    successCriteria: "User names a specific recurring thought (not a vague feeling), applies the 'I am noticing the thought that...' prefix out loud or in writing, and reports what they noticed about their relationship to the thought afterwards. Bonus if they catch themselves arguing with the thought and recognise that as fusion in real time.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
