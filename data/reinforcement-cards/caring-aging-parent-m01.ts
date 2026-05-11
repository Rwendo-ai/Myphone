/**
 * Reinforcement cards — Caring for an Aging Parent. Module 1.
 *
 * Variant: 'moment' — a hard situation + something you might say +
 * an after-line for when the conversation lands hard. These are
 * pocket scripts for the moments most courses skip.
 */
import type { ReinforcementCard } from '../../types/reinforcement-cards';

const CARDS: ReinforcementCard[] = [
  {
    id: 'm01-c01-driving',
    module: 1,
    variant: 'moment',
    title: 'You\'re worried about their driving.',
    body: 'You\'ve seen them miss the turn, scrape the curb, drift in the lane. Telling them they can\'t drive feels like telling them they\'re old.',
    sampleScript: '"I want to talk about something hard. I\'ve noticed a few near-misses behind the wheel and I\'m scared. Can we talk about it together — I\'m not here to take the keys, I\'m here to figure this out with you."',
    afterLine: '"I know this isn\'t the conversation you wanted to have. It isn\'t the one I wanted to have either."',
  },
  {
    id: 'm01-c02-finances',
    module: 1,
    variant: 'moment',
    title: 'You found unpaid bills.',
    body: 'A pile of envelopes. Late notices. They got confused or proud or both — and now there\'s a problem to untangle.',
    sampleScript: '"Dad, I saw the bills on the counter. I\'m not judging — I want to help sort it. Can we look at them together this weekend?"',
    afterLine: '"You\'ve done so much for me. Letting me do this is not weakness — it\'s the next chapter."',
  },
  {
    id: 'm01-c03-memory-slipping',
    module: 1,
    variant: 'moment',
    title: 'They\'re repeating the same story.',
    body: 'Third time this week. You\'re trying to track whether it\'s old age, fatigue, or something more.',
    sampleScript: '"Mum — I love hearing that story. Tell me again, I want to make sure I remember it."',
    afterLine: 'You don\'t have to correct them. You don\'t have to test them. You can just listen. The diagnostic conversation happens elsewhere.',
  },
  {
    id: 'm01-c04-moving-out',
    module: 1,
    variant: 'moment',
    title: 'The house is too much for them now.',
    body: 'The stairs. The garden. The shopping. You can see it but they can\'t — or won\'t.',
    sampleScript: '"I\'ve been thinking about the house. I don\'t want you to leave a place you love — and I also want to make sure you\'re safe. Can we walk through it together and figure out what would help?"',
    afterLine: '"This is your call. I\'m not trying to move you anywhere. I want to know what you actually want."',
  },
  {
    id: 'm01-c05-fall',
    module: 1,
    variant: 'moment',
    title: 'They fell. They didn\'t tell you.',
    body: 'A bruise. A sore wrist. A vague story. They didn\'t want to worry you. You\'re worried anyway.',
    sampleScript: '"I noticed the bruise. I\'m not angry, I\'m scared. Can you tell me what happened? I want us to be on the same team about this stuff."',
    afterLine: '"Hiding it doesn\'t protect me. It just leaves me out of the part where I can help."',
  },
  {
    id: 'm01-c06-sibling-not-helping',
    module: 1,
    variant: 'moment',
    title: 'Your sibling isn\'t doing their share.',
    body: 'You\'re the one driving them, calling them, making the meals. Your sibling sends a card on the birthday.',
    sampleScript: '"I need to talk to you about Mum/Dad. I\'m doing more than I can keep doing alone. I\'m not asking you to do the same — I\'m asking what you can take on so I\'m not the only one."',
    afterLine: '"I\'m not making this a fight. I just can\'t keep doing it by myself."',
  },
  {
    id: 'm01-c07-they-yelled-at-you',
    module: 1,
    variant: 'moment',
    title: 'They snapped at you. Hard.',
    body: 'They\'re scared. Or in pain. Or losing autonomy. The anger isn\'t really about you. It still landed on you.',
    sampleScript: '"I can come back when you\'re feeling better. I love you. I\'m going to take a walk."',
    afterLine: 'Letting them have a bad moment without escalating it is sometimes the kindest thing in the room. You can address the snap later.',
  },
  {
    id: 'm01-c08-end-of-life-wishes',
    module: 1,
    variant: 'moment',
    title: 'You haven\'t had the conversation.',
    body: 'What they\'d want at the end. Funeral. Resuscitation. The papers. You keep meaning to. You keep not.',
    sampleScript: '"This isn\'t because anything\'s wrong — it\'s because I want to know your wishes before we ever need them. Can we sit down this weekend and just write it down together?"',
    afterLine: '"You\'re not going anywhere right now. This is just so I know what to do when the day comes."',
  },
  {
    id: 'm01-c09-overwhelmed',
    module: 1,
    variant: 'moment',
    title: 'You\'re running on empty.',
    body: 'Work. Your kids. Their appointments. You\'re snapping at people you love. You haven\'t had an evening to yourself in weeks.',
    sampleScript: '(to a friend, a partner, a sibling, or your GP) "I\'m looking after my parent and I\'m starting to crack. I need to talk to someone about it."',
    afterLine: 'Asking for help is not selfishness. The person you\'re caring for needs you healthy more than they need you depleted.',
  },
  {
    id: 'm01-c10-saying-i-love-you',
    module: 1,
    variant: 'moment',
    title: 'You don\'t know how much time is left.',
    body: 'Today might be a normal day. So might tomorrow. So might next year. You also know there\'s a last conversation in there somewhere.',
    sampleScript: '"I love you. I don\'t say it enough. I wanted you to hear it today, for no reason."',
    afterLine: 'You don\'t need a reason. You don\'t need them to say it back. Saying it is its own thing.',
  },
];

export default CARDS;
