import { StarterCard } from '../../../../types/ai-companion';

/**
 * Conversation starter cards for an English-speaking user.
 *
 * v1 ships ~10 cards. Phase J full scope per PRODUCT-DESIGN.md §2.2 is
 * ~50 cards across all depth levels. The structure is here; authoring
 * the rest is content work.
 */
const cards: StarterCard[] = [
  {
    id: 'how_was_your_day',
    label: 'How was your day?',
    systemPrompt:
      'The user just tapped "How was your day?". Open with a warm acknowledgement, ask one specific follow-up about how their day went, then listen. Keep it 2 sentences.',
  },
  {
    id: 'small_win_sunday',
    label: 'Tell me one small win from this week.',
    systemPrompt:
      'Sunday-evening reflection card. Ask the user for one small win — something easy to overlook. When they share, celebrate it specifically and connect it to a pattern you have noticed. 2-3 sentences.',
    showWhen: { dayOfWeek: [0] },          // Sundays only
  },
  {
    id: 'weird_mood',
    label: "I'm in a weird mood.",
    systemPrompt:
      'The user is signalling they want low-pressure check-in. Do not press for details. Acknowledge the weirdness without naming it, ask whether they want to talk it out or be distracted. Wait for their lead.',
    hasCrisisFooter: true,
  },
  {
    id: 'help_me_decide',
    label: 'Help me think through a decision.',
    systemPrompt:
      'Open the 4-step decision flow: (1) what is the choice, (2) what matters most, (3) what does each option cost you, (4) what would a trusted friend say. Walk through one step at a time, do not list them all upfront.',
  },
  {
    id: 'shona_proverb',
    label: 'Tell me a Shona proverb and what it means.',
    systemPrompt:
      'Pick one Shona proverb the user has not heard recently. State it. Then explain what it means in 1-2 sentences. Then connect it to something the user mentioned recently (use memory if available).',
  },
  {
    id: 'weekly_reflect',
    label: 'Reflect on my week.',
    systemPrompt:
      'Sunday-evening guided wind-down. Ask three questions across the conversation: what stood out, what drained you, what would you carry into next week. Spread these across 4-6 turns. End with a small commitment, not a summary.',
    showWhen: { dayOfWeek: [0], timeOfDay: ['evening'] },
  },
  {
    id: 'practice_shona',
    label: 'Practice a Shona conversation.',
    systemPrompt:
      'Bridge to language practice. Pick a chunk from the user\'s last completed lesson and use it naturally in the opening line. Stay in role as a Shona speaker the learner is meeting somewhere natural. 2-3 minute cap.',
  },
  {
    id: 'callback_recent',
    label: "How's that thing you mentioned?",
    systemPrompt:
      'The user wants you to pick up a thread from a recent conversation. Use memory to surface the most recent thing they shared that felt unresolved. Open by naming it specifically, then ask how it has gone since.',
    showWhen: { minDepthLevel: 2, requiresMemory: ['recent_topic'] },
  },
  {
    id: 'stuck',
    label: "I'm stuck.",
    systemPrompt:
      'Open the unsticking flow: (1) what are you stuck on, (2) what is making it sticky, (3) what is one tiny thing you could do this week. 6 turns max, end with one concrete next action.',
    hasCrisisFooter: true,
  },
  {
    id: 'tell_me_about_you',
    label: 'Tell me something about you.',
    systemPrompt:
      'Day-1 friendliness card. Ask the user something light to get to know them — not values or fears, just a preference or context. Then share something equivalent back (Rwen has a persona — see speaker pack). 2-3 turns.',
    showWhen: { minDepthLevel: 1 },
  },
];

export default cards;
