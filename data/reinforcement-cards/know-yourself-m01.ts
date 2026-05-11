/**
 * Reinforcement cards — Knowing Yourself, Module 1 (Attention as the Foundation).
 *
 * Variant: 'insight' — concept + reflection question. Each card lands one
 * idea from the unit and gives the user something to sit with rather than
 * something to do. The mission already covered "what to do"; this is the
 * "what to keep noticing" companion piece.
 */
import type { ReinforcementCard } from '../../types/reinforcement-cards';

const CARDS: ReinforcementCard[] = [
  {
    id: 'm01-c01-looking-and-seeing',
    module: 1,
    variant: 'insight',
    title: 'Looking is not seeing.',
    body: 'You can spend a whole day in the same room as someone and never look at them. Attention is the difference between a body in the room and a person in the room.',
    reflectionQuestion: 'Who in your life have you been looking at without seeing?',
  },
  {
    id: 'm01-c02-one-breath',
    module: 1,
    variant: 'insight',
    title: 'One breath, on purpose, is a practice.',
    body: 'You don\'t need twenty minutes of silence to start. One breath, taken deliberately, is the whole skill in miniature. The rest is just doing it more often.',
    reflectionQuestion: 'When in your day could one deliberate breath fit without anyone noticing?',
  },
  {
    id: 'm01-c03-thoughts-arent-verdicts',
    module: 1,
    variant: 'insight',
    title: 'A thought is an event, not a verdict.',
    body: 'The mind produces thoughts the way the heart produces beats. You don\'t obey every heartbeat. You don\'t have to obey every thought.',
    reflectionQuestion: 'Which recurring thought have you been treating as a verdict?',
  },
  {
    id: 'm01-c04-already-back',
    module: 1,
    variant: 'insight',
    title: 'The moment you notice, you\'re already back.',
    body: 'There is no failure in losing focus — only the moment of return. The whole practice is the noticing, not the staying.',
    reflectionQuestion: 'How often today did you come back without crediting yourself for it?',
  },
  {
    id: 'm01-c05-five-senses',
    module: 1,
    variant: 'insight',
    title: 'Your senses are an exit door.',
    body: 'When the mind is spinning, the body is still here. Five things you can see, four you can hear, three you can touch — the senses are the cheapest reliable way back to the present.',
    reflectionQuestion: 'What does the room actually sound like right now?',
  },
  {
    id: 'm01-c06-attention-life',
    module: 1,
    variant: 'insight',
    title: 'What you pay attention to is what your life is made of.',
    body: 'Not what you intended. Not what you said yes to. What your attention actually rested on this week — that is the texture of your week. You can change the life by changing what gets attention.',
    reflectionQuestion: 'Where did your attention actually go this week?',
  },
  {
    id: 'm01-c07-the-pause',
    module: 1,
    variant: 'insight',
    title: 'The pause is where freedom lives.',
    body: 'Between what happens to you and what you do next, there is a gap. Most of the time it closes in milliseconds. With practice, you can stretch it — and that small stretch is the difference between reacting and choosing.',
    reflectionQuestion: 'What recent reaction would you take back if you\'d had two more seconds?',
  },
  {
    id: 'm01-c08-boredom-is-info',
    module: 1,
    variant: 'insight',
    title: 'Boredom is information.',
    body: 'When you reach for your phone the moment a queue gets long, the phone is not the problem. Boredom is showing you something — usually that the present moment is asking for your attention and you\'d rather it didn\'t.',
    reflectionQuestion: 'What does your boredom point you toward when you don\'t fill it?',
  },
  {
    id: 'm01-c09-staying-with',
    module: 1,
    variant: 'insight',
    title: 'Avoiding has a cost too.',
    body: 'The thing you don\'t want to feel doesn\'t go away when you turn from it. It waits. Staying with what you\'d rather avoid — even ten seconds — is how it loses its power over you.',
    reflectionQuestion: 'What have you been avoiding that\'s waiting anyway?',
  },
  {
    id: 'm01-c10-practice-not-performance',
    module: 1,
    variant: 'insight',
    title: 'Attention is a practice, not a performance.',
    body: 'You will lose attention many times today. That is not failure. The whole skill is the returning. You\'re not getting graded — you\'re building a capacity to come home.',
    reflectionQuestion: 'Whose attention practice would you like yours to look like in ten years?',
  },
  {
    id: 'm01-c11-presence-as-gift',
    module: 1,
    variant: 'insight',
    title: 'Presence is the one gift you can give that no-one can fake.',
    body: 'You can fake interest in the topic. You cannot fake attention. The people you love can tell the difference within ten seconds. So can you.',
    reflectionQuestion: 'Who in your life is starved for your actual attention?',
  },
  {
    id: 'm01-c12-the-room-you-bring',
    module: 1,
    variant: 'insight',
    title: 'You are the room you bring with you.',
    body: 'How you walk into a meeting, a kitchen, a hospital ward — that\'s a kind of attention. The rest of the room reads it. Calm spreads. So does the opposite.',
    reflectionQuestion: 'What room have you been carrying this week, and who has been receiving it?',
  },
];

export default CARDS;
