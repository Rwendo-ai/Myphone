import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l05-screen-question-honestly',
  module: 1,
  lesson: 5,
  title: 'The Screen Question, Honestly',
  estimatedMinutes: 7,
  xpReward: 30,

  hook: {
    rwenLine: "If you've been told 'screens before bed are destroying your sleep' — that's not quite the truth. The truth is more interesting and more useful. Blue light matters a little. What you're watching matters a lot. We're going to be honest about both, and stop you blaming the wrong thing.",
    culturalNote: "The wellness internet flattens the screen question into 'screens bad.' The actual evidence: blue-wavelength light suppresses melatonin modestly at typical exposure levels (Heath et al. 2014; subsequent reviews); larger contributors to sleep onset latency are content arousal (what you watch) and bedtime delay (you stayed up later because the screen was interesting). A 2700K bulb is not your enemy. A 1am argument on social media is.",
  },

  chunks: [
    {
      id: 'blue_light',
      target: 'Blue light',
      native: 'Short-wavelength light (peak around 480nm) that suppresses melatonin via melanopsin-containing retinal cells; effect is real but moderate at typical screen brightness',
      literal: "Foster, Brainard et al. The mechanism is well-established. The clinical effect on sleep onset is consistent but small. Replacing your evening screen with a paper book mostly works because of the second factor below.",
      emoji: '🔵',
      phonetic: "Real mechanism. Smaller effect than influencers claim. Wavelength is one variable, not the only one.",
      audioRef: null,
    },
    {
      id: 'content_arousal',
      target: 'Content arousal',
      native: "How emotionally activating what you're watching/reading is — anger, suspense, work email, doomscrolling. This affects sleep more than the light itself.",
      literal: "Sleep psychology — pre-sleep cognitive and emotional arousal is one of the most reliable predictors of sleep onset latency. The TikTok algorithm is engineered to keep you scrolling. That is the actual enemy.",
      emoji: '🎢',
      phonetic: "It's not the screen. It's what the screen is showing you. And how long it's keeping you up.",
      audioRef: null,
    },
    {
      id: 'bedtime_delay',
      target: 'Bedtime delay',
      native: "The drift effect — interesting content makes you stay up 30, 60, 90 minutes later than you intended. This often costs more sleep than the light or the arousal combined.",
      literal: "Behavioural sleep medicine — the largest single sleep cost from screens, in most studies, is simply lost time. Volitional sleep delay. The phone won the bedtime negotiation.",
      emoji: '⏰',
      phonetic: "The screen's biggest cost is the hours it stole, not the photons it emitted.",
      audioRef: null,
    },
  ],

  pattern: {
    name: 'Three layers — light, content, time. Most users blame the wrong one.',
    explanation: "When you blame 'screens' for your sleep, you usually mean three different things stacked together. (1) Blue light — real but small effect, easily dimmed with night mode or just lower brightness. (2) Content arousal — large effect, not solved by night mode; solved by choosing what you watch (a slow novel on a screen will treat your sleep better than thriller TV with a paper book). (3) Bedtime delay — usually the biggest cost. The phone kept you up an hour past your intended bedtime, and you slept less. Treat the right layer. The intervention for layer 1 is a slider. The intervention for layer 2 is what you choose to consume. The intervention for layer 3 is friction (phone out of bedroom).",
    examples: [
      { target: "You read a calm novel on a Kindle in bed for 20 minutes and fall asleep easily", native: "Layer 1 minimal (Kindle is dim and warm-tinted), layer 2 low (calm content), layer 3 controlled (you stop after 20 minutes). The 'screen' is fine because it's the right kind, the right content, and time-bounded." },
      { target: "You watch one episode of a thriller in bed at 11, then can't sleep until 1", native: "Layer 1 small. Layer 2 huge — your nervous system is in chase mode. Layer 3 is the cost — the episode is 50 minutes and the wind-down it cost you was real. Night mode would have done nothing for you." },
      { target: "You meant to scroll for 5 minutes and it's now 2am", native: "Layer 3, full force. The phone won the bedtime negotiation. The fix is friction (phone out of the bedroom, charger in another room) — a behavioural design move, not a moral one." },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each layer to the move that addresses it',
      pairs: [
        { left: 'Blue light', right: 'Night mode, lower brightness, warm bulbs' },
        { left: 'Content arousal', right: 'Choose calm content; avoid news, thrillers, work email' },
        { left: 'Bedtime delay', right: 'Friction — phone out of the bedroom, charger elsewhere' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: "Which of the three is, in most studies, the largest single sleep cost from evening screens?",
      question: 'Pick the one most users blame least',
      options: [
        { text: 'Blue-wavelength light suppressing melatonin', correct: false },
        { text: 'Content arousal raising your nervous system', correct: false },
        { text: 'Bedtime delay — you stayed up later than you meant to', correct: true },
      ],
      explanation: "Behavioural sleep medicine consistently finds that the lost hours are the largest cost. Engaging content extends time awake. Night mode does nothing for that. Putting the phone in another room does. Your behaviour, not your wavelength filter, is the leverage.",
    },
    {
      type: 'fill_blank',
      instruction: "Complete the lesson's central correction",
      sentence: "The biggest sleep cost from a phone is usually not the blue light — it is the bedtime _____.",
      options: ['delay', 'routine', 'alarm'],
      correct: 'delay',
      context: "An hour stolen from sleep by an interesting feed costs you more than any light wavelength would. Friction (phone out of bedroom) is the move; willpower is not.",
    },
    {
      type: 'translate',
      instruction: 'A calm novel on a backlit Kindle vs a thriller TV episode on the same brightness — which is worse for sleep, and why?',
      prompt: 'The thriller — because of...',
      correct: ['content arousal', 'arousal', 'the content', 'what you watch', 'emotional activation', 'emotional arousal', 'pre-sleep arousal'],
    },
    {
      type: 'build_sentence',
      instruction: "Build the lesson's honest correction",
      words: ['matters', 'than', 'wavelength', 'the', 'content', 'more', 'the'],
      correct: ['the', 'content', 'matters', 'more', 'than', 'the', 'wavelength'],
      translation: "Wellness culture got this one backwards. Wavelength is real but small. Content is the larger lever.",
    },
    {
      type: 'translate',
      instruction: "What is the most reliable single intervention against bedtime delay?",
      prompt: "Charge your phone in...",
      correct: ['another room', 'a different room', 'another part of the house', 'the kitchen', 'the hallway', 'the lounge', 'somewhere outside the bedroom', 'outside the bedroom', 'a room that is not the bedroom'],
    },
  ],

  rwenDialogue: {
    intro: "I'm going to ask you to be honest with yourself for a moment. Which of the three layers is doing the most damage in your evenings?",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "If you had to pick one of the three to fix tonight, which is the one that would actually move the needle for you?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "It's the bedtime delay. I keep meaning to put the phone down and don't.", native: '', correct: true, feedback: "Then friction is your move, not willpower. Put the charger in another room tonight. Buy a £10 alarm clock so you don't 'need' the phone by the bed. The intervention is environmental design, not character. Most people who get this right never had to 'try harder' — they just removed the phone." },
          { target: "It's content. I watch the news / thrillers / Reddit and my mind is racing.", native: '', correct: true, feedback: "Then the move is curating evening content, not removing screens. A calm novel on a Kindle, a re-run of a familiar comedy you've seen ten times, slow podcasts — these are sleep-compatible screens. The thriller and the news are not. Choose the content category, not the device." },
          { target: "Honestly, it's just the light — I've used screens fine for years, the light is the new thing.", native: '', correct: true, feedback: "Possible, especially if you're peri-menopausal or older — circadian sensitivity to light shifts with age and hormonal changes. Night mode, dim brightness, and warm-spectrum bulbs in the evening are useful. But check the other two layers too — small effects can stack." },
          { target: "All three. Mainly because all three feed each other.", native: '', correct: true, feedback: "Honest. They do feed each other — engaging content extends time, extends light exposure, raises arousal. The good news is fixing layer 3 (delay) often partially fixes the other two automatically. Phone out of the bedroom is the single move with the highest probability of working." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Pick the one. Don't try to fix all three tonight. The point of being honest about which layer is yours is so you stop spending energy on the wrong one.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back.',
    prompts: [
      {
        prompt: "Of the three layers (light, content arousal, bedtime delay) — which usually does the most damage?",
        correct: ['bedtime delay', 'delay', 'the delay', 'lost time', 'bedtime drift', 'staying up later', 'the time delay', 'time delay'],
      },
      {
        prompt: "What is the most effective single intervention against bedtime delay caused by phone use?",
        correct: ['phone out of bedroom', 'phone out of the bedroom', 'phone in another room', 'charger in another room', 'remove the phone from the bedroom', 'put the phone in another room', 'friction', 'environmental friction', 'physical separation', 'phone elsewhere', 'put phone away', 'no phone in bedroom'],
      },
    ],
  },

  mission: {
    title: "Today's Practice",
    task: "Tonight, charge your phone in a room that is not your bedroom. If that feels impossible, charge it on the far side of the bedroom — out of arm's reach. Buy a cheap alarm clock if you 'need' the phone for the alarm. One night. Notice what happens to your sleep onset. (If your evening problem is content rather than delay, do this anyway — it solves both at once.)",
    rwenSignoff: "Distance over willpower. The phone in another room is one of the single highest-leverage sleep moves there is.",
  },

  phase8: {
    scenario: "The user has just finished Lesson 5. Rwen helps them identify which of the three layers (light, content, delay) is actually doing the most damage in their specific evening, and pre-commits them to one targeted intervention rather than a vague 'screen reduction'.",
    rwenRole: "Rwen — non-moralistic about screens. Pushes back gently if the user blames the wrong layer (e.g. 'I use night mode and still can't sleep' — usually means content or delay is the issue, not wavelength). Helps them choose the matching intervention.",
    successCriteria: "User identifies which of the three layers is dominant in their evenings, and commits to the specific matching intervention (warm bulbs / content curation / phone-out-of-bedroom) rather than a generic 'use screens less'. Bonus if they articulate that wavelength filtering alone won't fix a content or delay problem.",
    estimatedMinutes: 4,
    bonusXp: 5,
  },
};

export default lesson;
