import { LessonData } from '../../../../../types/lesson';

const lesson: LessonData = {
  id: 'm01-l08-the-conversation-youve-been-avoiding',
  module: 1,
  lesson: 8,
  title: "The Conversation You've Been Avoiding",
  estimatedMinutes: 10,
  xpReward: 50,

  hook: {
    rwenLine: "Today's the day. Not the day you become someone who has hard conversations easily — that day doesn't exist. Today's the day you become someone who has them anyway. We're going to take the draft you've been building all week and you're going to actually have the conversation. That's the only assignment that matters.",
    culturalNote: "Every previous lesson was scaffolding for this one. The four-part move, the camera test, the request that survives 'no', the status-aware opener, the SBI feedback, the three-sentence apology — all of them are tools. Today they get used. Most people who learn these skills never deliver them in the actual room. The course is designed to make you the exception.",
  },

  chunks: [
    {
      id: 'integration',
      target: 'Integration',
      native: 'Combining the four-part NVC move, the pre-flight state check, and the dichotomy-of-control frame into a single act of speaking up',
      literal: 'Skill consolidation — the move from knowing each piece to running them together; the bridge from rehearsal to live delivery',
      emoji: '🧶',
      phonetic: 'You don\'t have time in a real conversation to remember each step. By now they should run as one motion. Integration is what makes that possible.',
      audioRef: null,
    },
    {
      id: 'variable_outcome',
      target: 'Variable outcome',
      native: 'The honest acknowledgement that even a perfectly delivered hard conversation can go badly — and that this does not make you wrong to have had it',
      literal: 'Stoic dichotomy of control again — Epictetus; modern application: ACT distinction between effort under your control and outcome that isn\'t',
      emoji: '🎲',
      phonetic: 'The skill doesn\'t guarantee the result. The skill guarantees you will have shown up well. The rest belongs to the other person.',
      audioRef: null,
    },
    {
      id: 'follow_through',
      target: 'Follow-through',
      native: 'The one or two practical things you do AFTER the conversation — regardless of how it went — that close the loop',
      literal: 'Behavioural psychology — completion bias; organisational research on conflict resolution showing that follow-through doubles the odds of actual change',
      emoji: '🪡',
      phonetic: 'A short note, a calendar follow-up, a single check-in next week. The conversation is the move. The follow-through is the move staying made.',
      audioRef: null,
    },
  ],

  pattern: {
    name: 'The full sequence, run as one motion',
    explanation: "Before: state-check (body, intent, control). During: observation, feeling, need, request — calibrated to the listener's status, free of character claims, with a request that survives 'no'. After: a short follow-through that closes the loop. The whole thing should feel less like a performance and more like a conversation a slightly braver version of you was always going to have.",
    examples: [
      { target: 'Before — three slow exhales, name what you actually want, accept what isn\'t yours.', native: 'Lesson 1, run silently in the thirty seconds before you open your mouth.' },
      { target: 'During — the four-part sentence, with the listener in mind.', native: 'Lessons 2–6, depending on whether it\'s a peer, a manager, or a report.' },
      { target: 'After — one practical follow-up: a message, a calendar reminder, or a date to revisit.', native: 'The bit most people skip. The bit that makes the conversation actually change something.' },
    ],
  },

  exercises: [
    {
      type: 'match_pairs',
      instruction: 'Match each step to its phase',
      pairs: [
        { left: 'Three slow exhales, name your real intent', right: 'Before' },
        { left: 'Observation, feeling, need, request', right: 'During' },
        { left: 'A short message confirming what was agreed', right: 'After' },
      ],
    },
    {
      type: 'multiple_choice',
      instruction: 'The conversation goes badly — they get defensive, they don\'t engage, they walk out. What\'s true?',
      question: 'Pick the most accurate frame',
      options: [
        { text: 'The four-part move was wrong for this situation. The course\'s framework failed.', correct: false },
        { text: 'You showed up well. The outcome wasn\'t fully yours to control. Both can be true.', correct: true },
        { text: 'You probably delivered it badly. Try harder next time.', correct: false },
      ],
      explanation: 'A clean delivery and a bad outcome can co-exist. That\'s the dichotomy of control again. The skill is in the delivery — the response belongs to the other person, the relationship, and the workplace context. If every hard conversation went well, no one would avoid them.',
    },
    {
      type: 'fill_blank',
      instruction: 'Apply the principle',
      sentence: 'The skill guarantees that you will have shown up _____. The rest belongs to the other person.',
      options: ['well', 'fast', 'flawlessly'],
      correct: 'well',
      context: '"Well" is the bar. Not "perfectly". Not "flawlessly". Showing up well — calibrated, honest, unhurried — is the thing under your control. The rest is the variable outcome you have to make peace with.',
    },
    {
      type: 'translate',
      instruction: 'In one word — what part of the conversation are you specifically NOT in control of?',
      prompt: 'You can choose your words. You cannot choose their ___',
      correct: ['reaction', 'response', 'reactions', 'responses'],
    },
    {
      type: 'build_sentence',
      instruction: 'Build the integration principle',
      words: ['the', 'is', 'the', 'follow-through', 'the', 'made', 'staying', 'move', 'is', 'move'],
      correct: ['the', 'move', 'is', 'the', 'move', 'the', 'follow-through', 'is', 'staying', 'made'],
      translation: 'The conversation is the move. The follow-through is what keeps it from being a one-off — what turns it into actual change in the relationship or the work.',
    },
    {
      type: 'translate',
      instruction: 'Name the three phases',
      prompt: 'Before, ___, after',
      correct: ['during', 'in', 'in the conversation', 'during the conversation'],
    },
  ],

  rwenDialogue: {
    intro: "It's time. We're going to walk through the whole conversation — before, during, after — for the one you've been working on all week.",
    lines: [
      {
        speaker: 'rwen',
        rwenLine: "Take thirty seconds. Run the state check. What is your body doing right now as you think about actually having this?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm activated. Heart rate up, mind racing.", native: '', correct: true, feedback: "Right on schedule. Three long exhales. Make the out-breath longer than the in-breath. Notice the activation without fighting it. The point is not to be calm — it's to be aware enough that the activation isn't running the conversation." },
          { target: "I feel ready. Calmer than I expected.", native: '', correct: true, feedback: "That's a good signal. Don't waste it. The hardest part now is starting — the conversation will get easier once the first sentence is out." },
          { target: "Honestly, I want to bail. I'm thinking of reasons to postpone.", native: '', correct: true, feedback: "Notice it without believing it. Postponement is what the activated nervous system always offers. Some postponements are wise (you genuinely need rest, the other person isn't available); most are flight. Ask yourself: 'will the reasons to postpone still be true on Monday?' If yes — postpone. If they're just today's reasons — go." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Now picture the conversation. They're in front of you. You open with your status-aware line. You say your observation. You say your feeling. You say your need. You make your request. They respond. Don't script the response — just imagine being in the room when it lands. What's going on in you?",
      },
      {
        speaker: 'user',
        userChoices: [
          { target: "I'm proud of myself for finally saying it. The fear of the response is still there but I survived saying the thing.", native: '', correct: true, feedback: "That's the actual outcome that matters. You said it. The relief of having said it is one of the most underrated feelings in adult life. Whatever comes next — you crossed the line that matters most." },
          { target: "I'm bracing. I want to know how they'll react before I commit to going through with it.", native: '', correct: true, feedback: "You can't know that in advance. Wanting to know is wanting to control the variable that isn't yours. The skill is to deliver the message anyway and trust your follow-through to handle whatever comes next." },
          { target: "I'm worried it'll come out wrong even after all this prep.", native: '', correct: true, feedback: "It might. Most well-delivered conversations have at least one moment of awkward silence, one sentence that didn't land cleanly, one place where you wished you'd said it differently. That's not failure. That's what real conversations look like." },
        ],
      },
      {
        speaker: 'rwen',
        rwenLine: "Last move. Whatever happens — well, badly, somewhere in between — you do one follow-through. A short message confirming what was discussed. A note in your calendar to revisit in two weeks. A check-in with yourself to write down what actually happened. The follow-through is what makes today a real change, not a one-off.",
      },
      {
        speaker: 'rwen',
        rwenLine: "You started this week with a conversation you were postponing. Today you have the draft, the structure, and the nervous-system tools to walk into it. The course can't make the conversation happen. You can. And once you have, you'll be someone who does this — not just someone who learned about it.",
        rwenAnimation: 'celebrate',
      },
    ],
  },

  activeRecall: {
    instruction: 'No looking back. Answer in your own words.',
    prompts: [
      {
        prompt: 'Name the three phases of a hard conversation:',
        correct: ['before during after', 'before, during, after', 'before during and after', 'before, during and after', 'pre during post', 'before / during / after'],
      },
      {
        prompt: 'In one phrase — what is the part of the outcome you cannot control?',
        correct: ['their reaction', 'their response', 'how they react', 'how they respond', 'the other person\'s reaction', 'the other person\'s response', 'their part', 'what they do'],
      },
    ],
  },

  mission: {
    title: "The Conversation",
    task: "This week — within the next seven days — actually have the conversation. Use your draft. Run the pre-flight check beforehand. Do one follow-through afterwards: a short message, a calendar note, a self-debrief. The conversation may go well. It may go badly. Both outcomes count as the mission completed. The point was to walk into the room and speak.",
    rwenSignoff: "Seven days. One conversation. Whatever happens — well, badly, partially — come back and tell me. That's the last lesson of this track, and the start of being someone who has these.",
  },

  phase8: {
    scenario: "The user has just finished the final lesson of the track. Rwen runs a complete walk-through with them: state-check now, rehearse the four-part sentence one last time, anticipate two pushback responses, and pre-commit to a specific follow-through. The aim is for the user to leave the conversation with Rwen feeling ready to have the actual conversation within the next seven days.",
    rwenRole: "Rwen — warm, calibrated, slightly more direct than usual. Acts like a coach the night before a hard meeting. Runs through the three phases out loud with the user. Does NOT lecture. Asks the user what they will actually do, when, and how they'll know they've followed through. If the user shows signs of bailing, Rwen gently surfaces the postponement test ('will the reasons to postpone still be true on Monday?') without pressuring them into a deadline.",
    successCriteria: "User commits to (1) a specific timeframe for the conversation (within seven days), (2) one specific follow-through action, and (3) one self-check for whether the postponement is wisdom or flight. Bonus if the user articulates their own version of the variable-outcome principle ('it might still go badly, and that doesn\\'t make me wrong to have had it'). Final track milestone — Rwen explicitly marks the completion of the track and invites the user to return with the result.",
    estimatedMinutes: 4,
    bonusXp: 10,
  },
};

export default lesson;
