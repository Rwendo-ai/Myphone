/**
 * Reinforcement cards — Hard Conversations at Work, Module 1.
 *
 * Variant: 'scenario' — workplace situation + a sample line + the
 * underlying NVC/move it demonstrates. The deck rehearses the move
 * across realistic scenes so the four-part move becomes muscle memory.
 */
import type { ReinforcementCard } from '../../types/reinforcement-cards';

const CARDS: ReinforcementCard[] = [
  {
    id: 'm01-c01-late-deliverable',
    module: 1,
    variant: 'scenario',
    title: 'A coworker missed their deadline. Again.',
    body: 'The report you were expecting Monday is still not in. You\'re irritated, but you also notice they\'ve been quiet in stand-ups lately.',
    sampleScript: '"Hey — I noticed the report didn\'t land Monday. I want to check in before I make assumptions. Is something going on?"',
    moveUnderneath: 'Observation without evaluation + opening the floor before judging.',
  },
  {
    id: 'm01-c02-manager-vague',
    module: 1,
    variant: 'scenario',
    title: 'Your manager said "more proactive" with no specifics.',
    body: 'You left the 1:1 with vague feedback and no idea what to do differently. The temptation is to nod and hope.',
    sampleScript: '"I want to act on \'more proactive\' — could you give me one example from this month where I missed the mark? I want to make sure we mean the same thing."',
    moveUnderneath: 'Request for specificity. Demands an example instead of guessing.',
  },
  {
    id: 'm01-c03-undermined-publicly',
    module: 1,
    variant: 'scenario',
    title: 'A peer talked over you in the meeting.',
    body: 'You had the floor and they cut in, then "summarised" your half-finished point as theirs.',
    sampleScript: '"Can I finish the thought I started? I think we\'ll get to a similar place but I want to land it first."',
    moveUnderneath: 'In-the-moment reclaim. Stays warm, doesn\'t accuse, doesn\'t back down.',
  },
  {
    id: 'm01-c04-asking-for-help',
    module: 1,
    variant: 'scenario',
    title: 'You\'re stuck and pretending you\'re not.',
    body: 'You\'ve been blocked for an hour. Asking feels like admitting you don\'t belong. Not asking is more expensive.',
    sampleScript: '"I\'ve been at this for an hour and I\'m going in circles. Could you take five minutes to look at where I am?"',
    moveUnderneath: 'A concrete request with a time-box. Easier for the other person to say yes to.',
  },
  {
    id: 'm01-c05-saying-no-to-scope',
    module: 1,
    variant: 'scenario',
    title: 'Someone wants to add "just one more thing."',
    body: 'A reasonable person asking a small thing — but you already know the small thing isn\'t small, and saying yes means slipping something else.',
    sampleScript: '"I can do that, but it means X slips a week. Which would you rather I do first?"',
    moveUnderneath: 'Trade-off naming. Forces the other person to own the priority decision.',
  },
  {
    id: 'm01-c06-defensive-reply',
    module: 1,
    variant: 'scenario',
    title: 'You said something. They got defensive.',
    body: 'Your feedback landed harder than you meant. Now they\'re explaining themselves and you\'re trying to walk it back without disowning what you said.',
    sampleScript: '"I didn\'t mean that as an attack — I should have led with the part where you\'ve been carrying a lot. Can I restart?"',
    moveUnderneath: 'Repair attempt. Owns delivery without abandoning content.',
  },
  {
    id: 'm01-c07-feedback-up',
    module: 1,
    variant: 'scenario',
    title: 'Your manager did something that\'s bothering the team.',
    body: 'They cancelled the 1:1 again. They keep changing direction. People are venting in DMs. You\'re the one who has to say something.',
    sampleScript: '"I wanted to flag something that\'s affecting how the team is showing up — when the direction shifts mid-week, it\'s hard to know what to prioritise. Can we look at why that\'s been happening?"',
    moveUnderneath: 'Observation + impact + a question — not a demand. Status-aware.',
  },
  {
    id: 'm01-c08-i-screwed-up',
    module: 1,
    variant: 'scenario',
    title: 'You made the mistake. Now what?',
    body: 'You shipped the bug, sent the wrong number, dropped the meeting. The instinct is to explain. The better move is to name it cleanly first.',
    sampleScript: '"I dropped that meeting yesterday. I should have rescheduled when I saw the conflict. What do you need from me to make it right?"',
    moveUnderneath: 'Non-defensive apology: own it, then ask what repair looks like — not what they "want to hear."',
  },
  {
    id: 'm01-c09-the-quiet-pushback',
    module: 1,
    variant: 'scenario',
    title: 'They said yes but you can tell it\'s a no.',
    body: 'Polite agreement with the eyes elsewhere. You can tell they don\'t buy it but they won\'t say so.',
    sampleScript: '"You said yes but it looked like the answer was something else. I\'d rather hear the real one — I won\'t take it personally."',
    moveUnderneath: 'Naming what you observed without accusing. Opens a door without forcing them through.',
  },
  {
    id: 'm01-c10-the-conversation-postponed',
    module: 1,
    variant: 'scenario',
    title: 'The conversation you\'ve been putting off.',
    body: 'You know which one. The one where you\'ve been hoping it sorts itself. It hasn\'t. The cost of postponing is now bigger than the cost of having it.',
    sampleScript: '"I\'ve been meaning to talk to you about [X]. I should have raised it sooner. Could we find fifteen minutes this week?"',
    moveUnderneath: 'The whole point of the unit. Naming the avoidance is half the conversation.',
  },
];

export default CARDS;
