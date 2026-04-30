import { JurisdictionPack } from '../../../types/packs';
import AU from '../AU';

/**
 * United Kingdom — placeholder. extends AU until lawyer authors UK-specific
 * Privacy Policy + Terms of Service.
 *
 * Notable UK-specific differences vs AU:
 *  - 14-day cooling-off period (Consumer Contracts Regulations 2013)
 *  - Min age 13 under UK GDPR (Data Protection Act 2018 lowered from 16 with
 *    parental consent above 13; some platforms still target 16+ to be safe)
 *  - Samaritans + Shout for crisis (different from AU lines)
 */
const GB: JurisdictionPack = {
  ...AU,
  id: 'GB',
  name: 'United Kingdom',
  countryCodes: ['GB'],
  extends: 'AU',
  currency: { code: 'GBP', symbol: '£' },
  minAge: 13,
  coolingOffDays: 14,
  isEu: false,
  isUk: true,
  dataResidency: 'EU',
  crisisResources: [
    { name: 'Samaritans',  phone: '116 123',   url: 'https://www.samaritans.org', context: 'crisis_general' },
    { name: 'Shout',       phone: '85258',     url: 'https://giveusashout.org',   context: 'mental_health' },
    { name: 'Childline',   phone: '0800 1111', url: 'https://www.childline.org.uk', context: 'youth' },
    { name: 'Refuge',      phone: '0808 2000 247', url: 'https://www.refuge.org.uk', context: 'domestic_violence' },
  ],
};

export default GB;
