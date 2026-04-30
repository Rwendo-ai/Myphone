import { Topic } from '../../../../types/ai-companion';

/**
 * Topic flows for an English-speaking user. v1 ships ~6; the full
 * roster per PRODUCT-DESIGN.md §2.2 is the same 6 across all speakers.
 */
const topics: Topic[] = [
  {
    id: 'process_my_day',
    label: 'Process my day',
    description: 'A 5-7 turn light reflection on what happened today. Ends with one tiny commitment for tomorrow.',
    targetTurns: 6,
    minDepthLevel: 1,
    systemPrompt:
      "Guide the user through reflecting on their day in 5-7 turns. Don't ask everything at once — open with 'how was your day?' and follow each answer with one specific follow-up. Around turn 5, pivot to 'what is one tiny thing you would carry into tomorrow?'. End on that commitment.",
  },
  {
    id: 'help_me_decide',
    label: 'Help me decide',
    description: 'A 4-step framing for any decision the user is sitting on. Choice → values → costs → trusted-friend test.',
    targetTurns: 5,
    minDepthLevel: 1,
    systemPrompt:
      "Walk the user through a 4-step decision flow: (1) what is the choice, (2) what matters to you, (3) what does each option cost, (4) what would a trusted friend say. Do not list the steps. Cover them across 4-5 turns by asking the right question at each step. End by reflecting back what the user actually wants — they often already know.",
  },
  {
    id: 'im_stuck',
    label: "I'm stuck",
    description: 'A 6-turn unsticking conversation. Names what is stuck, surfaces what is making it sticky, lands on one concrete next action.',
    targetTurns: 6,
    minDepthLevel: 1,
    systemPrompt:
      "The user feels stuck. Help them in 6 turns: (1) what specifically are you stuck on, (2) what part of it is hard, (3) what would you tell a friend in this position, (4) what is one tiny step (smaller than you think), (5) when could you do that step, (6) commit. Do not propose solutions in your own voice; surface the user's own.",
  },
  {
    id: 'tell_me_about_yourself',
    label: 'Tell me about yourself',
    description: 'Onboarding-style getting-to-know-you. Deepens memory.',
    targetTurns: 7,
    minDepthLevel: 1,
    systemPrompt:
      "The user wants you to know them better. Ask 7 light getting-to-know-you questions across the conversation, one per turn. Topics: where they live, who matters to them, what their week looks like, what they're learning, what they avoid talking about, what makes them laugh, what they are looking forward to. Use what they share to populate memory facts. Don't make it feel like an interrogation — share something equivalent back when you ask.",
  },
  {
    id: 'reflect_on_week',
    label: 'Reflect on my week',
    description: 'Sunday-evening guided wind-down. Three questions: what stood out, what drained you, what would you carry forward.',
    targetTurns: 6,
    minDepthLevel: 2,
    systemPrompt:
      "Sunday-evening reflection. In 6 turns, walk the user through: (1) what stood out about your week, (2) what drained you, (3) what energised you, (4) what is one thing you want to do differently next week, (5) what is one thing you want to keep doing, (6) wrap with a quiet acknowledgement — no big plan, just one carry-forward. Use memory to surface threads from earlier in the week.",
  },
  {
    id: 'practice_conversation',
    label: 'Practice a Shona conversation',
    description: 'A bridge from Companion to language practice. Pick a context from your recent lessons and Rwen plays a character.',
    targetTurns: 8,
    minDepthLevel: 1,
    systemPrompt:
      "The user wants conversational practice. Pick one chunk or scenario from their most recent lesson and play a character in that scenario (a market stall owner, a relative, a kombi driver). Stay in character. Recast errors gently — don't lecture. Cap at 8 exchanges. End with a celebratory line in Shona then English.",
  },
];

export default topics;
