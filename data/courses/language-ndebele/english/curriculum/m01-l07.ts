import type { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l07',
  module: 1,
  lesson: 7,
  title: 'Producing Your Own Clicks',
  estimatedMinutes: 5,
  xpReward: 25,

  hook: {
    rwenLine: "Today, no new vocabulary. Just your mouth, a mirror, and three positions. The c on your teeth, the q on your palate, the x on your side. We're going to fix the most common mistakes English speakers make so the clicks become automatic.",
    culturalNote: "There is a Bulawayo joke: 'You'll know a foreigner is serious about isiNdebele the day they stop apologising for their clicks.' The clicks are not a performance and not a barrier — they're just sounds. Locals expect to hear yours imperfect at first; what they don't expect is for you to stop trying.",
  },

  chunks: [
    {
      id: 'c_position',
      target: 'c — front of mouth',
      native: 'tongue tip behind the upper front teeth, pull DOWN sharply',
      emoji: '🦷',
      phonetic: '[c-click] — common mistake: too soft, like a whispered tsk',
      audioRef: null,
    },
    {
      id: 'q_position',
      target: 'q — top of mouth',
      native: 'body of tongue against the hard palate, snap DOWN',
      emoji: '🍾',
      phonetic: '[q-click] — common mistake: not loud enough; should pop',
      audioRef: null,
    },
    {
      id: 'x_position',
      target: 'x — side of mouth',
      native: 'side of tongue against upper molars, pull AWAY from the side',
      emoji: '🐴',
      phonetic: '[x-click] — common mistake: trying to do it in the front (turns into c)',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three positions, three releases',
    explanation: "Every click has two parts: a closure (tongue touching somewhere) and a release (tongue pulling away to suck in air). The TYPE of click is decided by WHERE the closure is. Front teeth = c. Hard palate = q. Side teeth = x. Get the position right and the click sounds right.",
    examples: [
      { target: 'c', native: 'closure at front teeth — release down' },
      { target: 'q', native: 'closure at hard palate — release down' },
      { target: 'x', native: 'closure at side molars — release sideways' },
    ],
  },

  exercises: [
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: "What is the most common English-speaker mistake with the q-click?",
      options: [
        { text: 'Making it too quiet — it should pop loudly.',     correct: true },
        { text: 'Putting the tongue too far forward.',              correct: false },
        { text: 'Making it sideways instead of from the top.',      correct: false },
      ],
      explanation: "English speakers tend to under-articulate the q-click out of politeness — but the q is supposed to be sharp and audible. Over-pop it on purpose at first.",
    },
    {
      type: 'match_pairs',
      instruction: 'Match each click to its tongue position',
      pairs: [
        { left: 'c', right: 'tongue tip on the back of the upper teeth' },
        { left: 'q', right: 'tongue body on the hard palate' },
        { left: 'x', right: 'tongue side on the upper molars' },
      ],
    },
    {
      type: 'translate',
      instruction: 'If your x-click sounds like a c-click, where is your tongue going wrong?',
      prompt: 'too far forward (toward the front teeth)',
      correct: ['too far forward', 'forward', 'at the teeth', 'at the front', 'too far front', 'in the front'],
    },
    {
      type: 'multiple_choice',
      instruction: 'Pick the correct answer',
      question: 'Should you pause between the click and the vowel after it?',
      options: [
        { text: 'No — they form one syllable, no gap.',            correct: true },
        { text: 'Yes — always a tiny pause.',                       correct: false },
        { text: 'Only with the q-click.',                            correct: false },
      ],
      explanation: "Click and vowel are one beat. A pause makes you sound like you're learning the alphabet, not speaking the language.",
    },
  ],

  rwenDialogue: {
    intro: "Rwen walks you through a mirror drill. Watch your own mouth as you make each click.",
    lines: [
      { speaker: 'rwen', rwenLine: "Open your mouth slightly. Touch your tongue tip to the back of your upper front teeth. Pull it down sharply. That's the c." },
      { speaker: 'npc',  target: '[c-click]', native: 'dental — front teeth' },
      { speaker: 'rwen', rwenLine: "Now press the body of your tongue — flat — against the roof of your mouth. Snap it down. That's the q. Louder is better at this stage." },
      { speaker: 'npc',  target: '[q-click]', native: 'palatal — pop' },
      { speaker: 'rwen', rwenLine: "Last one. Touch the side of your tongue to your upper side teeth — one side only. Pull it away. The air rushes in from the side. That's the x." },
      { speaker: 'npc',  target: '[x-click]', native: 'lateral — horse clop' },
      { speaker: 'rwen', rwenLine: "Three positions, three sounds. If they're all coming out the same, your tongue isn't moving — only the front of your mouth is. Slow down and feel each placement." },
    ],
  },

  activeRecall: {
    instruction: 'Without looking up, recall.',
    prompts: [
      { prompt: 'For the c-click, where does the tongue tip touch?',                       correct: ['teeth', 'front teeth', 'upper teeth', 'back of front teeth', 'behind the teeth'] },
      { prompt: 'For the q-click, where does the tongue body touch?',                      correct: ['palate', 'roof', 'roof of mouth', 'hard palate'] },
      { prompt: 'For the x-click, where does the tongue side touch?',                      correct: ['side teeth', 'molars', 'upper molars', 'side', 'the side'] },
    ],
  },

  mission: {
    title: 'Five minutes at the mirror',
    task: "In front of a mirror, make each click ten times. Watch your tongue move. The c stays at the front, the q jumps to the top, the x slides to the side. If you can see no movement between them, slow down until you can.",
    rwenSignoff: "Tomorrow you stop staring at your tongue and start telling the clicks apart by ear. That's harder than producing them. Rest the mouth tonight.",
  },

  phase8: {
    scenario: "Rwen coaches you through three click productions and gives feedback on each. He's looking for distinct positions, not perfect sound.",
    rwenRole: "Patient coach, focuses on tongue placement rather than musicality of the click",
    successCriteria: "User produced three clicks (c, q, x) with audibly different sounds — even if imperfect.",
    estimatedMinutes: 3,
    bonusXp: 5,
  },
};

export default lesson;
