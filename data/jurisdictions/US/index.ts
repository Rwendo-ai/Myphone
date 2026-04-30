import { JurisdictionPack } from '../../../types/packs';
import AU from '../AU';

/**
 * United States — placeholder. extends AU until lawyer authors US-specific
 * Privacy Policy + Terms of Service.
 *
 * Notable US-specific differences vs AU:
 *  - Min age 13 (COPPA threshold)
 *  - Voice consent required (BIPA — Illinois Biometric Information Privacy Act)
 *  - No statutory cooling-off; refund handled by Apple/Google store policies
 *  - Crisis: 988 Suicide & Crisis Lifeline, Crisis Text Line (text HOME to 741741)
 */
const US: JurisdictionPack = {
  ...AU,
  id: 'US',
  name: 'United States',
  countryCodes: ['US'],
  extends: 'AU',
  currency: { code: 'USD', symbol: '$' },
  minAge: 13,
  voiceConsentRequired: true, // for BIPA compliance in Illinois (and growing list of states)
  dataResidency: 'US',
  crisisResources: [
    { name: '988 Suicide & Crisis Lifeline', phone: '988',          url: 'https://988lifeline.org',    context: 'crisis_general' },
    { name: 'Crisis Text Line',              phone: 'Text 741741',  url: 'https://www.crisistextline.org', context: 'mental_health' },
    { name: 'Trevor Project (LGBTQ+ youth)', phone: '1-866-488-7386', url: 'https://www.thetrevorproject.org', context: 'youth' },
    { name: 'National DV Hotline',           phone: '1-800-799-7233', url: 'https://www.thehotline.org', context: 'domestic_violence' },
  ],
};

export default US;
