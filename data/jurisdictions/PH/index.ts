import { JurisdictionPack } from '../../../types/packs';

/**
 * Philippines jurisdiction pack.
 *
 * Min age 13 follows the Philippines Data Privacy Act 2012 (DPA) which sets
 * the threshold for parental consent at 18, but apps generally allow 13+
 * use with the standard COPPA-style consent for teen accounts. Verified
 * 2026-05-04.
 *
 * Currency PHP/₱. Cooling-off is not legally mandated for digital services
 * in the Philippines (no consumer-rights cooling-off equivalent like EU's
 * 14 days), so 0 days.
 *
 * Crisis resources: National Center for Mental Health 24/7 hotline + the
 * In-Touch Crisis Line. Reviewer should add region-specific lines if/when
 * we localise harder.
 */
const PH: JurisdictionPack = {
  id: 'PH',
  name: 'Philippines',
  countryCodes: ['PH'],
  currency: { code: 'PHP', symbol: '₱' },
  minAge: 13,
  coolingOffDays: 0,
  voiceConsentRequired: false,
  dataResidency: 'global',
  languageOfRecord: 'english',
  isEu: false,
  isUk: false,
  privacyPolicyMd: '',
  termsOfServiceMd: '',
  crisisResources: [
    { name: 'National Center for Mental Health Crisis Hotline', phone: '1553',           url: 'https://www.facebook.com/officialNCMH', context: 'mental_health' },
    { name: 'In Touch Crisis Line',                              phone: '+63 2 8893 7603', url: 'https://in-touch.org',                  context: 'crisis_general' },
    { name: 'PNP Aleng Pulis (women / children)',                phone: '177',            url: '',                                       context: 'domestic_violence' },
  ],
  consentDisclosures: {
    aiPartnerProcessor:
      'Anthropic, Inc. (Claude AI) — operates from the United States. Cross-border data transfer is governed by the ' +
      'Philippines Data Privacy Act 2012 standard contractual provisions.',
    voiceProcessor:
      'ElevenLabs (TTS + STT) — operates from the United States. Audio transcripts are deleted within 24 hours.',
    dataController: 'Rwendo (sole-developer entity, Australia)',
  },
};

export default PH;
