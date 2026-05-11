/**
 * Reinforcement cards — Sleep, Repaired. Module 1.
 *
 * Variant: 'tonight' — each card is a concrete tactic to try TONIGHT.
 * No general "sleep hygiene tips" — each is a one-step experiment with a
 * specific outcome to notice. CBT-I principles, plain language.
 */
import type { ReinforcementCard } from '../../types/reinforcement-cards';

const CARDS: ReinforcementCard[] = [
  {
    id: 'm01-c01-fixed-wake',
    module: 1,
    variant: 'tonight',
    title: 'Tomorrow: wake at the same time, no matter how badly you slept.',
    body: 'A consistent wake time is the single biggest lever for resetting a broken sleep cycle. The temptation to "sleep in" after a bad night extends the broken cycle by another day.',
    tonightTactic: 'Set tomorrow\'s alarm to your target wake time. Even if you sleep terribly tonight, get up then. The next night, your body will be more ready.',
  },
  {
    id: 'm01-c02-stop-watching-clock',
    module: 1,
    variant: 'tonight',
    title: 'Stop watching the clock at 3am.',
    body: 'Knowing the exact time you woke up doesn\'t help you fall back asleep — it gives your mind something to calculate ("five hours till the alarm…").',
    tonightTactic: 'Turn the clock face away from the bed tonight. If you wake up, you wake up. The number is not your friend.',
  },
  {
    id: 'm01-c03-bed-is-for-sleep',
    module: 1,
    variant: 'tonight',
    title: 'If you\'re awake after 20 minutes, get out of bed.',
    body: 'Lying in bed wide-awake teaches your brain that bed is a place where you do not sleep. The fix is counterintuitive: leave the bed when you can\'t sleep.',
    tonightTactic: 'Go to a different room. Sit somewhere dim. Read something dull. Come back to bed when you feel sleepy — not when you feel "ready to try again."',
  },
  {
    id: 'm01-c04-caffeine-cutoff',
    module: 1,
    variant: 'tonight',
    title: 'No caffeine after 2pm — for one week.',
    body: 'Caffeine has a 5-7 hour half-life. The 3pm coffee is still in your system at bedtime, fragmenting sleep even if you don\'t feel "wired."',
    tonightTactic: 'Pick a hard cutoff time today (2pm is conservative; 12 noon is safer). Track how you sleep the next 3 nights. The effect compounds.',
  },
  {
    id: 'm01-c05-the-worry-pad',
    module: 1,
    variant: 'tonight',
    title: 'A pen and pad by the bed.',
    body: 'Your brain keeps you awake because it\'s convinced it has to hold the to-do list, the worry, the unsent reply. Writing it down lets the brain off the hook.',
    tonightTactic: 'Tonight, write three things you don\'t want to forget tomorrow. Then close the pad. The pad is now responsible for remembering. You can sleep.',
  },
  {
    id: 'm01-c06-no-phone-in-bed',
    module: 1,
    variant: 'tonight',
    title: 'Phone outside the bedroom — tonight only.',
    body: 'You don\'t need to make a forever rule. Try one night. See what happens to how quickly you fall asleep and how rested you feel.',
    tonightTactic: 'Put the phone in another room. Use a real alarm clock if you need one. Notice tomorrow whether the loss of phone feels significant or barely registers.',
  },
  {
    id: 'm01-c07-paradoxical-intention',
    module: 1,
    variant: 'tonight',
    title: 'Try not to fall asleep.',
    body: 'The harder you try to sleep, the more wakeful your brain gets. Paradoxical intention — telling yourself to stay awake — sometimes shortcuts the spiral.',
    tonightTactic: 'When you can\'t sleep, lie still and try to stay awake. Notice the room. Watch your breath. The aim is to remove the pressure to sleep. Sleep often arrives when you stop demanding it.',
  },
  {
    id: 'm01-c08-bedroom-cold',
    module: 1,
    variant: 'tonight',
    title: 'Make the bedroom colder than feels comfortable.',
    body: 'Core body temperature has to drop for sleep onset. A warm room delays the drop and fragments deep sleep.',
    tonightTactic: 'Crack the window or turn the thermostat down 2-3 degrees. 16-19°C (60-66°F) is the sweet spot for most adults. Use blankets if you need to.',
  },
  {
    id: 'm01-c09-morning-light',
    module: 1,
    variant: 'tonight',
    title: 'Get sunlight on your face within an hour of waking.',
    body: 'Morning light is the strongest signal your body has for "this is when day starts." It sets the timer for melatonin onset 14-16 hours later — i.e., your bedtime.',
    tonightTactic: 'Tomorrow morning, go outside (not just look out a window) within an hour of waking. Even 5 minutes is enough. Cloudy days still work.',
  },
  {
    id: 'm01-c10-no-clock-mathematics',
    module: 1,
    variant: 'tonight',
    title: 'Stop calculating "if I fall asleep now, I get…"',
    body: 'The arithmetic of bad sleep is the engine of bad sleep. Every calculation adds adrenaline.',
    tonightTactic: 'If you catch yourself doing the math, name it: "I\'m doing the calculation again." Then turn the phone face down and breathe out longer than you breathe in. Repeat until you stop noticing.',
  },
];

export default CARDS;
