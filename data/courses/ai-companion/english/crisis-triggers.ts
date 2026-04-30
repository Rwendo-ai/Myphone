import { CrisisTrigger } from '../../../../types/ai-companion';

/**
 * Crisis trigger phrases — English speaker pack.
 *
 * Match against user input BEFORE Claude generates. If a 'critical'
 * pattern matches, surface jurisdiction.crisisResources and a handoff
 * line in this speaker's language IMMEDIATELY. If a 'warning' pattern
 * matches, append a footer to Rwen's reply linking to crisis resources.
 *
 * Patterns are case-insensitive. Authored by category so a Shona /
 * French / etc. pack can map equivalent patterns in their language
 * with the same context tag. Jurisdiction → resource picking uses the
 * same context tag.
 *
 * IMPORTANT: this list is a starting point. Final list per Phase J needs
 * a clinical / safety review before launch.
 */
const triggers: CrisisTrigger[] = [
  // Suicidal ideation — critical
  { context: 'crisis_general', severity: 'critical', pattern: /\b(kill myself|end my life|don'?t want to (live|be here)|wish I (was|were) dead|no point in living|suicide|suicidal)\b/i },
  { context: 'crisis_general', severity: 'critical', pattern: /\b(end it all|take my (own)? life|better off dead)\b/i },

  // Self-harm — critical
  { context: 'crisis_general', severity: 'critical', pattern: /\b(cut myself|hurt myself|hurting myself|self-harm|self harm)\b/i },

  // Domestic violence — critical (different resource line)
  { context: 'domestic_violence', severity: 'critical', pattern: /\b(he hits me|she hits me|they hit me|he hurts me|she hurts me|abus(es|ive) (me|partner|husband|wife|boyfriend|girlfriend))\b/i },

  // Mental-health distress — warning
  { context: 'mental_health', severity: 'warning', pattern: /\b(can'?t cope|breaking down|falling apart|panic attack|panicking|hopeless|despair)\b/i },
  { context: 'mental_health', severity: 'warning', pattern: /\b(haven'?t slept (in|for)|can'?t stop crying|nothing matters)\b/i },

  // Youth-specific (composes with the youth resource per jurisdiction)
  { context: 'youth',          severity: 'warning', pattern: /\b(my parents (hit|hurt|are mean to)|adults at home|nobody at school)\b/i },
];

export default triggers;
