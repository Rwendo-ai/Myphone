/**
 * Reinforcement cards — Lost Confidence. Module 1.
 *
 * Variant: 'capability' — past-evidence prompts. Confidence isn\'t
 * built by affirmations; it\'s built by remembering specific past
 * evidence of competence. Each card surfaces a concrete prompt to
 * fill in mentally or on paper.
 */
import type { ReinforcementCard } from '../../types/reinforcement-cards';

const CARDS: ReinforcementCard[] = [
  {
    id: 'm01-c01-old-version',
    module: 1,
    variant: 'capability',
    title: 'Five years ago, the current you would have been impressive.',
    body: 'You\'ve normalised what you can now do. Things you would have struggled with five years ago are background tasks now. The growth happened. You just stopped noticing.',
    evidencePrompt: 'What\'s one thing you do casually now that would have intimidated the version of you from five years ago?',
  },
  {
    id: 'm01-c02-hard-thing-you-did',
    module: 1,
    variant: 'capability',
    title: 'You\'ve already done something hard.',
    body: 'Confidence asks "can I do hard things?" The honest answer is "I already have." You just don\'t reach for that evidence first.',
    evidencePrompt: 'Name one specific hard thing you did and got through — even one that didn\'t end the way you wanted.',
  },
  {
    id: 'm01-c03-someone-relies-on-you',
    module: 1,
    variant: 'capability',
    title: 'Someone relies on you. They\'re not wrong to.',
    body: 'If you ask "what do they see that I don\'t?" — that\'s real data. Not flattery. Reality.',
    evidencePrompt: 'Who relies on you for something — and what is the specific thing they trust you with?',
  },
  {
    id: 'm01-c04-skill-you-took-for-granted',
    module: 1,
    variant: 'capability',
    title: 'There\'s a skill you have that you\'ve stopped calling a skill.',
    body: 'You can read a room, drive in traffic, soothe a crying child, debug a problem, make a meal from what\'s in the fridge. Each one was once a skill you didn\'t have.',
    evidencePrompt: 'What\'s one skill you have that you\'d be impressed by in someone else?',
  },
  {
    id: 'm01-c05-comeback',
    module: 1,
    variant: 'capability',
    title: 'You\'ve recovered from something before.',
    body: 'A job loss, a breakup, an illness, a bad year. You\'re still here. The recovery wasn\'t a one-off; it\'s a capacity.',
    evidencePrompt: 'What did you recover from — and what specifically did you do to get back on your feet?',
  },
  {
    id: 'm01-c06-someone-thanked-you',
    module: 1,
    variant: 'capability',
    title: 'Someone thanked you. Specifically. Recently.',
    body: 'You probably brushed it off. Thank-yous are evidence. They are noticing something real.',
    evidencePrompt: 'When was the last time someone thanked you — and what did they thank you for?',
  },
  {
    id: 'm01-c07-the-time-you-asked',
    module: 1,
    variant: 'capability',
    title: 'You\'ve asked for hard things before.',
    body: 'A raise, a date, help, time off, an apology. The asking itself is the skill. It doesn\'t depend on whether you got the answer you wanted.',
    evidencePrompt: 'What\'s something hard you asked for — and did it anyway, regardless of how it turned out?',
  },
  {
    id: 'm01-c08-being-the-only-one',
    module: 1,
    variant: 'capability',
    title: 'You\'ve been the one who handled it.',
    body: 'A moment when no-one else was going to step up and you did. The phone call, the difficult parent, the broken thing, the awkward truth.',
    evidencePrompt: 'When did you step up because no-one else was going to? What did you actually do?',
  },
  {
    id: 'm01-c09-second-language-of-anything',
    module: 1,
    variant: 'capability',
    title: 'You learned something hard from scratch.',
    body: 'A language, an instrument, a recipe, a software, a craft, a sport. There was a version of you that didn\'t know it. You taught yourself or stuck through the lessons.',
    evidencePrompt: 'What skill did you build from zero — and how long did it take you to feel competent?',
  },
  {
    id: 'm01-c10-the-quiet-win',
    module: 1,
    variant: 'capability',
    title: 'The win nobody clapped for.',
    body: 'You showed up to work after a bad night. You called the parent who was hard to call. You said no when it cost you. No-one noticed. That\'s still evidence.',
    evidencePrompt: 'What\'s a recent thing you did that no-one knew was hard? Write it down. You did that.',
  },
];

export default CARDS;
