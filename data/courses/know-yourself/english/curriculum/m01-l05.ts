import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-five-senses-check',
  module: 1,
  lesson: 5,
  title: 'The Five-Senses Check',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "When your mind is racing — about the past, the future, a problem, a conversation — your senses are still in the present. They have to be. They can't time-travel. Today we use that fact.",
    culturalNote: "This is one of the most reliable grounding techniques in clinical psychology. Sometimes called '5-4-3-2-1', it is taught in trauma-informed therapy, anxiety treatment, and basic emergency calming. It works because attention to sensation is incompatible with rumination — the brain cannot do both fully at once.",
  },

  chunks: [
    {
      id: 'grounding',
      target: 'Grounding',
      native: 'A technique that uses the body and the senses to bring a racing mind back to the present',
      literal: 'Trauma-informed psychology — Babette Rothschild, Peter Levine; widely used in DBT (Linehan)',
      emoji: '🌿',
      phonetic: 'When the mind is up in the air, the body is the ground.',
      audioRef: null,
    },
    {
      id: 'five_four_three_two_one',
      target: '5-4-3-2-1',
      native: 'Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste',
      literal: 'DBT skills training — a sensory-grounding sequence used in clinical settings for anxiety and dissociation',
      emoji: '🖐️',
      phonetic: 'Counting backwards down the senses, you arrive in the present at "one".',
      audioRef: null,
    },
    {
      id: 'rumination',
      target: 'Rumination',
      native: 'The looping pattern of thought that re-chews a worry or memory without producing anything new',
      literal: 'Susan Nolen-Hoeksema — research showing rumination is a strong predictor of depression and anxiety',
      emoji: '🌀',
      phonetic: 'Thinking the same thought is not the same as thinking. Rumination is wheels in mud.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Why grounding works',
    explanation: "Rumination lives in language. The senses live in sensation. When you direct attention to specific sensory detail — the exact texture, the actual colour, the real sound — the verbal looping has to step aside, because the brain has limited bandwidth for both at once. You don't argue with the rumination. You simply give the mind something more concrete to do.",
    examples: [
      { target: 'Rumination: "What if I get fired?"', native: 'Grounding: "I see five things. The blue cup. The crack in the ceiling. The book spine. My hand. The window."' },
      { target: 'Rumination: "I shouldn\'t have said that."', native: 'Grounding: "I hear three things. The hum of the fridge. A bird outside. My own breathing."' },
      { target: 'Rumination: replaying an argument', native: 'Grounding: "I touch four things. Cold table. Warm mug. Soft sleeve. My own pulse."' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each term to its meaning',
      pairs: [
        { left: 'Grounding', right: 'Using the senses to return to the present' },
        { left: 'Rumination', right: 'Looping thought that re-chews without producing anything new' },
        { left: '5-4-3-2-1', right: 'A sensory grounding sequence (see, touch, hear, smell, taste)' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'Why does sensory grounding help with anxious thinking?',
      question: 'Pick the most accurate answer',
      options: [
        { text: 'It distracts you from the bad thought so you forget about it', correct: false },
        { text: 'Sensory attention competes with verbal rumination for the same brain bandwidth', correct: true },
        { text: 'It makes the bad thought logically incorrect', correct: false },
      ],
      explanation: "It's not denial and it's not refutation. It's redirection. The senses give the mind something concrete to do, and the looping language has to make room.",
    },
    {
      type: 'fill_blank',
      instruction: 'Complete the 5-4-3-2-1 sequence',
      sentence: '5 things you can see, 4 you can touch, 3 you can _____, 2 you can smell, 1 you can taste.',
      options: ['hear', 'remember', 'imagine'],
      correct: 'hear',
      context: 'The full sequence runs the senses in descending count. The exact ordering matters less than the descent itself — but this is the version most widely taught.',
    },
    {
      type: 'translate',
      instruction: 'Right now, name one thing you can hear that you were not paying attention to a second ago.',
      prompt: 'Type one sound — anything (a hum, a fan, traffic, breathing, silence)',
      correct: [],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the principle behind grounding',
      words: ['the', 'senses', 'present', 'live', 'in', 'the'],
      correct: ['the', 'senses', 'live', 'in', 'the', 'present'],
      translation: "Your senses cannot worry about tomorrow or relitigate yesterday. They can only register what is, right now.",
    },
    {
      type: 'translate',
      instruction: 'In one word — what is the mental looping pattern that grounding interrupts?',
      prompt: 'The technical term:',
      correct: ['rumination', 'ruminating'],
    },
  ],

  rwenDialogue: {
    intro: "Let's run a shortened version of 5-4-3-2-1 together. Wherever you are, this works.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Look around you. Name three things you can see in your head — silently, no need to type. Take 10 seconds.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now: two things you can hear. Even if they are subtle. The hum of something. Your own breath.",
      },
      {
        speaker: 'rwen',
        rwenLine: "Now: one thing you can feel — your feet on the floor, your back against the seat, the temperature of your hands.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Done. I feel slightly more here than I did 30 seconds ago.", native: '', correct: true, feedback: "That small shift is the whole technique. You used three senses to anchor in the present, and the present feels closer than it did." },
          { target: "Done. I don't feel any different.", native: '', correct: true, feedback: "That's a real outcome. Sometimes the technique produces a noticeable shift, sometimes it just keeps you company through a hard moment. Both are useful." },
          { target: "I tried but my mind kept jumping back to the thing it was worrying about.", native: '', correct: true, feedback: "That happens — especially the first few times. Each return to a sense is a rep. Rumination is sticky; grounding gets stronger with practice." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "You now have a portable tool. The next time your head is too loud, you don't need to make it quieter. You just need to make the world a little louder.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: 'What is the technical term for the technique of using the body and senses to return to the present?',
        correct: ['grounding'],
      },
      {
        prompt: 'What is the looping thought pattern that grounding interrupts?',
        correct: ['rumination', 'ruminating'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Once today — ideally during a moment of stress, but any moment will do — name three things you can see, two you can hear, one you can feel. Out loud or silently. About 30 seconds, total.",
    rwenSignoff: "Tomorrow, on a hard day, you'll remember you have this.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 5. Rwen guides them through a full 5-4-3-2-1 in real time, taking about three minutes. Rwen pauses between each sense, lets the user name what they notice, and at the end asks one question about how they feel compared to before.",
    rwenRole: "Rwen — calm, slow-paced, attentive. Does NOT rush the user through the senses. Allows them time to actually notice rather than just answer. Speaks less than the user does.",
    successCriteria: "User names actual specific sensory detail at each stage (e.g. 'the green stripe on the cup', not 'a cup'), pauses to actually notice rather than just listing, and reports a specific shift in their state by the end (more present, calmer, more here, or honestly: no change). Bonus if they articulate when they will use this technique on their own.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
