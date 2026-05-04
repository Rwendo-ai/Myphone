import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l06-what-to-do-at-3am',
  module: 1,
  lesson: 6,
  title: 'What to Do at 3am',
  estimatedMinutes: 8,
  xpReward: 30,

  hook: {
    rwenLine: "It is 3am. You have been awake for forty minutes. Your mind is making lists, replaying conversations, simulating your funeral. The single worst thing you can do is keep lying there trying. Tonight you learn what to do instead — three actual moves, all evidence-based, none of which involve heroic effort.",
    culturalNote: "The 3am wake is not a sign of failure. It's how human sleep architecture often goes — we surface near the boundaries between sleep cycles, and most of the time we drop straight back. The wake itself is normal. The problem is what your mind does next, and what your body learns from being awake in bed. CBT-I has specific moves for exactly this moment, and they work better than 'try to relax.'",
  },

  chunks: [
    {
      id: 'fifteen_minute_rule',
      target: 'The 15-minute rule',
      native: "If you've been awake in bed for what feels like 15+ minutes, get out of bed. Go to a dim, low-arousal space. Return only when sleepy.",
      literal: "CBT-I — Bootzin's stimulus control therapy. Counterintuitive but central. Lying awake in bed re-trains the bed as a place for being awake. Getting up protects the conditioned association.",
      emoji: '🚶',
      phonetic: "Don't watch the clock — that makes it worse. Just notice 'this has been a while' and move.",
      audioRef: null,
    },
    {
      id: 'cognitive_shuffle',
      target: 'The cognitive shuffle',
      native: "Generate random, benign, unrelated images in your mind — apple, lamp post, river, pencil — to mimic the loose-association cognition that precedes sleep onset and crowd out the racing planning mind",
      literal: "Beaudoin (2016) — modestly evidenced, harmless, more useful than counting sheep. Works because organised thought (planning, ruminating) suppresses sleep; disorganised thought is the brain's natural pre-sleep state.",
      emoji: '🃏',
      phonetic: "Not a story. Not a list. Random objects. Lemon. Saxophone. Owl. Bus stop.",
      audioRef: null,
    },
    {
      id: 'paradoxical_intention',
      target: 'Paradoxical intention',
      native: "Stop trying to sleep. Lie comfortably and try to stay gently awake. The effort to sleep is the thing keeping you awake; removing the effort lets sleep arrive.",
      literal: "Frankl (Viktor); modern CBT-I treats it as a defusion-from-effort technique. Counterintuitive and well-evidenced for sleep onset insomnia. The harder you try to sleep, the harder it gets.",
      emoji: '🎭',
      phonetic: "Try to stay awake. Watch what happens. The struggle was the problem.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three escape hatches from the 3am loop',
    explanation: "When you wake at 3am, two clocks start running. One is your sleep clock — the gentle pull back to sleep. The other is your alertness clock — the more time you spend awake in bed thinking, the more your brain re-activates. The whole job is to keep the second clock from winning. Three moves do this. (1) The 15-minute rule: if you're noticeably awake, leave the bed; sit in a dim chair, read something boring, return when sleepy. This protects bed-as-sleep. (2) The cognitive shuffle: random unrelated images crowd out racing thought. (3) Paradoxical intention: stop trying to sleep — try to stay gently awake. The effort to sleep is the alertness. The order of escalation: shuffle first (cheap, in-bed), if not working after a while get up (15-minute rule), back in bed try paradoxical intention. None of these are guaranteed. All of them beat lying there trying harder.",
    examples: [
      { target: "Wake at 3am, mind starts on tomorrow's meeting", native: "Move 1: cognitive shuffle. 'Pillow. Camel. Coffee mug. Forest. Saxophone.' Keep going for a few minutes. If still wide awake, get up." },
      { target: "Lying there for 25 minutes, increasingly frustrated", native: "Move 2: get up. Dim room. Slow reading. No phone. Return when you yawn or feel heavy. Frustration in bed is the worst possible learning." },
      { target: "In bed, sleep keeps almost arriving and slipping", native: "Move 3: paradoxical intention. Stop trying. Lie still and try to stay gently awake — eyes open, no effort, no resistance. The trying-to-sleep was the alertness." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each technique to what it does',
      pairs: [
        { left: 'The 15-minute rule', right: 'Get out of bed when wakeful, to protect bed-as-sleep' },
        { left: 'The cognitive shuffle', right: 'Random benign images that mimic pre-sleep cognition' },
        { left: 'Paradoxical intention', right: 'Stop trying to sleep — gently try to stay awake' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Why does getting out of bed help, even though it feels counterintuitive?",
      question: 'Pick the CBT-I rationale',
      options: [
        { text: "It signals to your body it's time to be productive", correct: false },
        { text: "It protects the conditioned link between bed and sleep — lying there frustrated trains the opposite", correct: true },
        { text: "It cools your body temperature, which induces sleep", correct: false },
      ],
      explanation: "Stimulus control. Every minute you spend awake-and-frustrated in bed weakens the bed's association with sleep. Getting up — to a dim, low-arousal space — protects the association so that, when you return, the bed still 'means' sleep. This is one of the most evidence-supported moves in all of insomnia treatment.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the paradox at the heart of paradoxical intention",
      sentence: "The harder you try to sleep, the harder it _____.",
      options: ['gets', 'works', 'feels'],
      correct: 'gets',
      context: "The effort itself is a form of alertness. Sleep arrives in unguarded moments, not earned ones. Trying to sleep is one of the few human pursuits where giving up is the path to success.",
    },
    {
      type: 'translate',
      instruction: 'In the cognitive shuffle, what kind of images are you generating?',
      prompt: 'Random, unrelated, _____ images.',
      correct: ['benign', 'neutral', 'simple', 'mundane', 'random', 'ordinary', 'innocuous', 'everyday', 'plain'],
    },
    {
      type: 'build_sentence',
      instruction: "Arrange the central instruction of paradoxical intention",
      words: ['to', 'try', 'awake', 'stay', 'gently'],
      correct: ['try', 'to', 'gently', 'stay', 'awake'],
      translation: "It sounds absurd. It works because the effort to sleep is the alertness keeping you up.",
    },
    {
      type: 'translate',
      instruction: "Should you check the clock when you wake at 3am?",
      prompt: "No — clock-watching makes it...",
      correct: ['worse', 'much worse', 'harder', 'more anxious', 'more arousing', 'more difficult'],
    },
  ],

  rwenDialogue: {
    intro: "Let's rehearse the 3am protocol now, while you're awake and clear-headed. The point is to pre-load the moves so they're available when your sleeping brain isn't making good decisions.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Imagine it's 3am. You're awake. Your mind is doing the thing it does. Walk me through what you'd actually do, in order.",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "Try the cognitive shuffle first. If still awake after a while, get up.", native: '', correct: true, feedback: "Exactly the right escalation. Shuffle is cheap and stays in bed; if it doesn't take, the 15-minute rule applies. Get up to a dim room, do something low-arousal (slow reading, basic stretching), return when sleepy. The order matters because the shuffle is low-cost and the get-up is medium-cost." },
          { target: "Get out of bed, sit in the dark, then come back when sleepy.", native: '', correct: true, feedback: "Strong move, especially if your insomnia is more chronic. Going straight to the 15-minute rule trains the bed-as-sleep association faster than starting in-bed. Some people do better with this; some prefer the shuffle first. Both are legitimate." },
          { target: "Stop trying to sleep — paradoxical intention.", native: '', correct: true, feedback: "Specifically powerful for users in long sleep-effort spirals where the trying has become the problem. Sometimes used with the shuffle (try to stay awake while running random images). The point is to remove the agenda. Sleep does not arrive on demand; it arrives when it stops being demanded." },
          { target: "Open the phone, scroll until I'm tired enough to drop.", native: '', correct: false, feedback: "Tempting and almost universally counterproductive. The screen raises arousal (Lesson 5), the content engages your planning mind, and the bed becomes more strongly associated with phone-scrolling than with sleep. If you must use a screen, leave the bed and use it elsewhere — dim, brief, calm content. But the shuffle, the get-up, and paradoxical intention all beat the phone." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Have the moves ready before you need them. Sleeping-brain you cannot improvise. Awake you can pre-load.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "If you've been awake in bed for ~15 minutes, what does CBT-I say to do?",
        correct: ['get out of bed', 'leave the bed', 'get up', 'go to another room', 'leave bed', 'get up and go to another room', 'get out of bed and go elsewhere', 'go somewhere dim', 'get up and sit somewhere dim'],
      },
      {
        prompt: "Name the technique where you generate random, unrelated benign images to crowd out racing thought.",
        correct: ['cognitive shuffle', 'the cognitive shuffle', 'shuffle', 'cognitive-shuffle'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Before you sleep tonight, write down — on paper, on your phone notes, anywhere — the three moves in order: (1) cognitive shuffle, (2) get up after ~15 minutes, (3) paradoxical intention. Put it where you can find it at 3am. If you wake tonight, use the list. If you don't wake — the list is still ready for the night you do.",
    rwenSignoff: "Pre-load the moves. Sleeping-brain you will thank awake you.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 6. Rwen runs a brief mental rehearsal of a 3am wake — what is the user's particular flavour of mind activity (planning, replaying, catastrophising, body anxiety)? Which of the three moves fits their flavour best, in what order? The aim is to leave the user with a personalised, sequenced 3am protocol they can actually deploy.",
    rwenRole: "Rwen — calm, practical, treating the 3am wake as a normal feature of human sleep architecture, not a catastrophe. Helps the user name their specific mind-pattern, then matches it to the right move. Reinforces that no single technique works every time — the point is having options.",
    successCriteria: "User names their dominant 3am mind-pattern (e.g. work planning, relationship replay, health anxiety, general 'racing'), and commits to a specific sequenced protocol — usually shuffle → get-up → paradoxical intention, but personalised. Bonus if they articulate that getting out of bed is not failure, it's the move.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
