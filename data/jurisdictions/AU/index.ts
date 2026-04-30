import { JurisdictionPack } from '../../../types/packs';

/**
 * Australia jurisdiction pack — populated v1, lawyer-reviewed pre-launch.
 *
 * privacyPolicyMd / termsOfServiceMd: stub for v1. Phase N will move the
 * authored content from docs/legal/privacy-policy.md and
 * docs/legal/terms-of-service.md into these strings (and the legal screens
 * will render from here instead of importing those files directly).
 */
const AU: JurisdictionPack = {
  id: 'AU',
  name: 'Australia',
  countryCodes: ['AU'],
  currency: { code: 'AUD', symbol: 'A$' },
  minAge: 16,
  coolingOffDays: 0,
  voiceConsentRequired: false,
  dataResidency: 'AU',
  languageOfRecord: 'english',
  isEu: false,
  isUk: false,
  privacyPolicyMd: '',  // populated in Phase N from docs/legal/privacy-policy.md
  termsOfServiceMd: '', // populated in Phase N from docs/legal/terms-of-service.md
  crisisResources: [
    { name: 'Lifeline',     phone: '13 11 14',     url: 'https://www.lifeline.org.au',     context: 'crisis_general' },
    { name: 'Beyond Blue',  phone: '1300 22 4636', url: 'https://www.beyondblue.org.au',   context: 'mental_health' },
    { name: 'Kids Helpline', phone: '1800 55 1800', url: 'https://kidshelpline.com.au',    context: 'youth' },
    { name: '13YARN',       phone: '13 92 76',     url: 'https://www.13yarn.org.au',       context: 'indigenous_specific' },
    { name: '1800RESPECT',  phone: '1800 737 732', url: 'https://www.1800respect.org.au',  context: 'domestic_violence' },
  ],
  consentDisclosures: {
    aiPartnerProcessor:
      'Anthropic, Inc. (Claude AI) — operates from the United States. Standard contractual clauses cover data transfer ' +
      'from Australian residents under the Privacy Act 1988 and APP 8.',
    voiceProcessor:
      'ElevenLabs (TTS + STT) — operates from the United States. Audio transcripts are deleted within 24 hours.',
    dataController: 'Rwendo (sole-developer entity, Australia)',
  },
};

export default AU;
