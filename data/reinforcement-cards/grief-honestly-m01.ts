/**
 * Reinforcement cards — Grief, Honestly. Module 1.
 *
 * Variant: 'permission' — a feeling or thought the user might be having,
 * the explicit permission that it\'s legitimate, and one small practice.
 * Designed to be picked up by someone reading at 2am.
 */
import type { ReinforcementCard } from '../../types/reinforcement-cards';

const CARDS: ReinforcementCard[] = [
  {
    id: 'm01-c01-not-okay',
    module: 1,
    variant: 'permission',
    title: 'You\'re not okay. Saying it out loud is allowed.',
    body: 'People keep asking how you are. You keep saying "fine" because the truth is too big for the conversation.',
    permission: 'You are not obligated to be okay. The grief is not a problem to fix — it is the appropriate response to what happened.',
    tryThis: 'When the next person asks, try: "Today is a hard one." That\'s all. You don\'t have to explain more than that.',
  },
  {
    id: 'm01-c02-laughed-and-felt-guilty',
    module: 1,
    variant: 'permission',
    title: 'You laughed. Then you felt guilty.',
    body: 'Something was funny. For a moment you forgot. Then it came back and the guilt felt like a betrayal of the person you lost.',
    permission: 'Laughing is not forgetting. The person you lost would have wanted you to laugh. Both things — the laugh and the loss — can be true.',
    tryThis: 'Notice three more small things today that don\'t hurt. Coffee that\'s the right temperature. A bird. A friend\'s voice. Joy alongside grief is not betrayal.',
  },
  {
    id: 'm01-c03-everyone-moved-on',
    module: 1,
    variant: 'permission',
    title: 'Everyone else has moved on. You haven\'t.',
    body: 'Three weeks. Three months. A year. The messages stopped. People stopped asking. You\'re still here.',
    permission: 'Grief does not run on anyone else\'s schedule. The world\'s short attention span is not a verdict on the size of your loss.',
    tryThis: 'Reach for one person who knew them. A short message. Not asking for anything. Just: "I was thinking of [name] today."',
  },
  {
    id: 'm01-c04-angry-at-them',
    module: 1,
    variant: 'permission',
    title: 'You\'re angry at the person you lost.',
    body: 'They left. They didn\'t take care of themselves. They said something you can\'t unhear. And now you can\'t fight with them about it.',
    permission: 'Anger is a normal part of grief. Loving someone and being furious with them are not opposites.',
    tryThis: 'Write the thing you would say to them. The unsent letter doesn\'t need to be sent. Naming it on the page takes some of the weight.',
  },
  {
    id: 'm01-c05-second-loss',
    module: 1,
    variant: 'permission',
    title: 'This loss brought back the older one.',
    body: 'You thought you\'d processed that earlier loss. Now this new one has cracked it open again.',
    permission: 'Old grief layered with new grief is not a failure to heal. It\'s the way memory and loss actually work.',
    tryThis: 'Hold both, not one at a time. "I am grieving this person AND remembering that person." There\'s no rule that says one at a time.',
  },
  {
    id: 'm01-c06-cant-cry',
    module: 1,
    variant: 'permission',
    title: 'You can\'t cry. You feel like you should.',
    body: 'Other people are crying. You\'re dry-eyed and wondering what\'s wrong with you.',
    permission: 'Grief does not have one face. Some people cry. Some people clean. Some people go quiet. Some people work. None of these is the correct response.',
    tryThis: 'Stop watching yourself for the right reaction. Do the thing your body wants to do right now — eat, walk, sit, sleep, talk. The tears come when they come, or they don\'t.',
  },
  {
    id: 'm01-c07-anniversary',
    module: 1,
    variant: 'permission',
    title: 'It\'s coming up to an anniversary.',
    body: 'You can feel the date on the calendar. Your body knows before your head does.',
    permission: 'Anniversary grief is real. Your nervous system remembers what your week-to-week mind tries to forget.',
    tryThis: 'Tell one person you trust that the date is coming. You don\'t have to mark it dramatically. Just don\'t carry it entirely alone.',
  },
  {
    id: 'm01-c08-cant-decide',
    module: 1,
    variant: 'permission',
    title: 'You can\'t make any decisions right now.',
    body: 'What to eat, what to wear, whether to go to the thing. Even small choices feel impossible.',
    permission: 'Grief eats executive function. The decision-fatigue is real — it\'s your brain reallocating resources to a much bigger task.',
    tryThis: 'Default to the smallest version. Eat the simplest meal. Wear the same thing you wore yesterday. Decline the optional thing. Save your decision-making for the things that matter.',
  },
  {
    id: 'm01-c09-talking-to-them',
    module: 1,
    variant: 'permission',
    title: 'You\'re still talking to them in your head.',
    body: 'You think of something. You almost text them. You start narrating your day to them on the drive home.',
    permission: 'The relationship doesn\'t end. The form of it changes. People you have loved live inside you and that internal conversation is not delusion — it\'s how love works after death.',
    tryThis: 'Let yourself talk to them out loud once. In the car, on a walk. Tell them something they would have wanted to hear.',
  },
  {
    id: 'm01-c10-the-receipt',
    module: 1,
    variant: 'permission',
    title: 'Grief is the receipt of love.',
    body: 'The size of the grief is the size of the love. You wouldn\'t want it smaller.',
    permission: 'You are not broken. You are someone who loved another person. The grief is the proof.',
    tryThis: 'Say their name out loud today. Once. To yourself in the kitchen or out loud to someone. Names matter. Saying them keeps the person in the world.',
  },
];

export default CARDS;
