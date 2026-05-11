/**
 * Reinforcement cards — Money & Meaning, Module 1.
 *
 * Variant: 'decision' — a money-shaped moment + a framing question that
 * surfaces the value underneath. The aim isn\'t a budget rule; it\'s
 * to make every money decision a values decision.
 */
import type { ReinforcementCard } from '../../types/reinforcement-cards';

const CARDS: ReinforcementCard[] = [
  {
    id: 'm01-c01-impulse-buy',
    module: 1,
    variant: 'decision',
    title: 'About to click "buy now."',
    body: 'It\'s late. The thing is in the cart. The discount expires in two hours.',
    reflectionQuestion: 'If I bought this on a Wednesday afternoon in good light, would I still want it?',
  },
  {
    id: 'm01-c02-keeping-up',
    module: 1,
    variant: 'decision',
    title: 'They got the upgrade. You feel behind.',
    body: 'A friend, a sibling, a colleague — they have the thing you said you didn\'t need. Now you\'re reconsidering.',
    reflectionQuestion: 'Whose life am I trying to match — and is that the life I would actually want?',
  },
  {
    id: 'm01-c03-money-fight-with-partner',
    module: 1,
    variant: 'decision',
    title: 'Same money fight, third time this month.',
    body: 'It\'s never really about the dollar amount. You can both feel that — but neither of you has named what it is about.',
    reflectionQuestion: 'What value am I defending that has nothing to do with the spreadsheet?',
  },
  {
    id: 'm01-c04-saving-but-for-what',
    module: 1,
    variant: 'decision',
    title: 'You\'re saving. But for what, exactly?',
    body: 'The number goes up. You feel responsible. You also can\'t name the thing the money is for.',
    reflectionQuestion: 'If I died with this savings untouched, would I regret what I didn\'t spend it on?',
  },
  {
    id: 'm01-c05-too-expensive',
    module: 1,
    variant: 'decision',
    title: '"Too expensive" — but is it?',
    body: 'You said no to something the budget could absorb. "Too expensive" was easier than asking whether you actually wanted it.',
    reflectionQuestion: 'Am I calling this expensive because it costs more than the value it gives me — or because spending feels wrong?',
  },
  {
    id: 'm01-c06-the-side-hustle',
    module: 1,
    variant: 'decision',
    title: 'A side hustle is taking your weekends.',
    body: 'The extra income is nice. The weekends you used to have are gone. You haven\'t added it up.',
    reflectionQuestion: 'What hourly rate am I actually earning on this — and would I take a regular job that paid the same?',
  },
  {
    id: 'm01-c07-debt-shame',
    module: 1,
    variant: 'decision',
    title: 'Looking at the debt makes you flinch.',
    body: 'You haven\'t opened the statement in three weeks. The avoidance is also costing you — late fees, interest, a vague background dread.',
    reflectionQuestion: 'What\'s the actual number — and is the dread bigger or smaller than the truth?',
  },
  {
    id: 'm01-c08-generous-or-buying-love',
    module: 1,
    variant: 'decision',
    title: 'You\'re giving more than you can afford.',
    body: 'A friend, a family member, a cause. You said yes again. Some of it is generosity. Some of it is harder to name.',
    reflectionQuestion: 'Am I giving from abundance, or am I giving because saying no feels like losing them?',
  },
  {
    id: 'm01-c09-paying-for-convenience',
    module: 1,
    variant: 'decision',
    title: 'The premium for "just easier."',
    body: 'The faster delivery, the food app, the upgrade. Each one is small. Together they\'re not.',
    reflectionQuestion: 'Am I buying convenience that gives me time back, or convenience that gives me nothing back?',
  },
  {
    id: 'm01-c10-enough',
    module: 1,
    variant: 'decision',
    title: 'What does "enough" actually look like?',
    body: 'You\'ve been chasing the next bracket for years. Each time you reach it the goalposts move.',
    reflectionQuestion: 'If I had exactly this much for the rest of my life, what would I let myself do differently starting today?',
  },
];

export default CARDS;
