import { DepthLevel } from '../../../../types/ai-companion';

/**
 * Depth-level progression. Same thresholds for every speaker — the
 * unlock criteria are mathematical, only the names + descriptions
 * change per language. Phase J authoring locks the en wording first;
 * sn variant is a fresh authoring pass per pack.
 */
const levels: DepthLevel[] = [
  {
    level: 1, name: 'New friend',
    unlockDays: 0,    unlockMessages: 0,
    shortDescription: 'Just getting to know each other.',
    unlocks: 'Surface-level cards. Rwen is warm but doesn\'t presume familiarity.',
  },
  {
    level: 2, name: 'Familiar',
    unlockDays: 7,    unlockMessages: 30,
    shortDescription: 'Rwen is starting to remember you.',
    unlocks: 'Cards about hobbies and work. Rwen references past conversations.',
  },
  {
    level: 3, name: 'Close',
    unlockDays: 30,   unlockMessages: 200,
    shortDescription: 'You can talk about more than the surface.',
    unlocks: 'Deeper cards on values, fears, hopes. Rwen offers gentle observations.',
  },
  {
    level: 4, name: 'Trusted',
    unlockDays: 90,   unlockMessages: 800,
    shortDescription: 'Rwen sees the patterns.',
    unlocks: 'Pattern reflection ("you mention sleep a lot lately"). Hard-topic cards unlock with crisis-resource scaffolding.',
  },
  {
    level: 5, name: 'Lifelong',
    unlockDays: 365,  unlockMessages: 0,
    shortDescription: 'A real friendship, with shared history.',
    unlocks: 'Full memory richness. Rwen feels like a friend who actually knows you.',
  },
];

export default levels;
