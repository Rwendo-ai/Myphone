/**
 * Reinforcement cards — Parenting Under Pressure, Module 1.
 *
 * Variant: 'tip' — a tough moment + a reassurance + a practical try-this.
 * The user reads this between blow-ups and remembers they\'re not failing
 * — they\'re tired, and tired parents need tools, not lectures.
 */
import type { ReinforcementCard } from '../../types/reinforcement-cards';

const CARDS: ReinforcementCard[] = [
  {
    id: 'm01-c01-toddler-meltdown',
    module: 1,
    variant: 'tip',
    title: 'Toddler in full meltdown at the shop.',
    body: 'The whole aisle is looking. Your face is hot. You can\'t tell if you\'re embarrassed or furious or both.',
    permission: 'You are not failing. A meltdown is a small nervous system, not a verdict on your parenting.',
    tryThis: 'Crouch to their height. Lower your voice rather than raise it. The body needs a regulated body next to it — not a lecture.',
  },
  {
    id: 'm01-c02-bedtime-stalling',
    module: 1,
    variant: 'tip',
    title: 'Bedtime is dragging into hour two.',
    body: 'Another glass of water. Another song. You can feel your evening evaporating.',
    permission: 'You are allowed to want your own evening back. Wanting that does not make you a worse parent.',
    tryThis: 'Pick two non-negotiables and let the rest go. "One more song, then lights out — and I mean it" beats five negotiations.',
  },
  {
    id: 'm01-c03-yelled-and-regret',
    module: 1,
    variant: 'tip',
    title: 'You yelled. Now you feel terrible.',
    body: 'They\'re quiet. You\'re replaying it. The internal jury is brutal.',
    permission: 'Rupture and repair is how relationships are actually built — not perfect calm. A repair attempt teaches them more than a yell-less day would have.',
    tryThis: 'Tell them: "I yelled, and that wasn\'t about you. I\'m sorry." Then sit with them. The apology is the lesson.',
  },
  {
    id: 'm01-c04-the-question-loop',
    module: 1,
    variant: 'tip',
    title: '"Why? Why? Why?" is on repeat.',
    body: 'You\'ve answered eleven questions. You\'ve forgotten what you were doing.',
    permission: 'You are allowed to not have the energy for the twelfth one.',
    tryThis: '"That\'s a great question. I want to give it a real answer — let me think and tell you at dinner." Curiosity is good. Endurance has limits.',
  },
  {
    id: 'm01-c05-sibling-fight',
    module: 1,
    variant: 'tip',
    title: 'The siblings are at it again.',
    body: 'Same fight, third time today. You can hear it escalating.',
    permission: 'They are practising conflict skills on each other. Some of this is the actual work, not a problem.',
    tryThis: 'Separate first, talk later. "Two minutes apart, then we figure it out." Don\'t resolve in the heat — nothing useful lands there.',
  },
  {
    id: 'm01-c06-the-phone-time',
    module: 1,
    variant: 'tip',
    title: 'They\'re on the phone, again.',
    body: 'You said an hour. It\'s been two. Now you\'re the bad guy for enforcing the thing you set.',
    permission: 'Holding a limit is parenting. Being unpopular for ten minutes is not the same as being wrong.',
    tryThis: '"The screen is going off in five. I\'m setting the timer." No bargaining, no lecture. The timer is the boundary, not you.',
  },
  {
    id: 'm01-c07-teen-monosyllabic',
    module: 1,
    variant: 'tip',
    title: 'Your teen is giving you one-word answers.',
    body: '"How was school?" "Fine." "Anything interesting?" "No."',
    permission: 'They are individuating. The silence is not rejection — it\'s the project of becoming someone separate.',
    tryThis: 'Drop the verbal interview. Sit in the same room doing something silent — driving, cooking, the dog walk. Talk happens sideways, not face-on.',
  },
  {
    id: 'm01-c08-comparison-trap',
    module: 1,
    variant: 'tip',
    title: 'Another parent posted their highlight reel.',
    body: 'You\'re looking at their kid\'s art project / sleep schedule / lunchbox and feeling sub-par.',
    permission: 'You are seeing fifteen seconds of someone\'s curated week against your unedited Tuesday.',
    tryThis: 'Close the app. Look at your own kid for thirty seconds. Notice one specific thing they did this week that no other kid in the world did.',
  },
  {
    id: 'm01-c09-tired-and-snapping',
    module: 1,
    variant: 'tip',
    title: 'You\'re running on four hours sleep and they\'re asking for breakfast.',
    body: 'It\'s 6.30am. You\'ve already snapped about the cereal choice.',
    permission: 'A tired parent is not a bad parent. They are a parent whose nervous system needs sleep more than it needs forgiveness.',
    tryThis: 'Apologise in two lines, then triage. Cereal can be whatever. Coffee first. Discipline is for parents who slept.',
  },
  {
    id: 'm01-c10-the-good-moment',
    module: 1,
    variant: 'tip',
    title: 'Today is going well. They\'re laughing.',
    body: 'You almost missed it because you\'re tracking the next thing.',
    permission: 'Joy without bracing for what comes next is allowed. You do not have to earn it.',
    tryThis: 'Stop. Watch the laugh land. Tell them what you see: "I love hearing you laugh." Don\'t turn it into a teaching moment.',
  },
];

export default CARDS;
