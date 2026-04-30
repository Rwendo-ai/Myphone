import { JurisdictionPack } from '../../../types/packs';
import AU from '../AU';

/**
 * Zimbabwe — placeholder. extends AU until lawyer authors ZW-specific
 * Privacy Policy + Terms of Service.
 *
 * Notes:
 *  - Currency: USD is widely used alongside the local Zimbabwean dollar (ZWL)
 *    in Zimbabwe. Setting USD as primary; per-store pricing handles local
 *    display.
 *  - Mobile money payments (EcoCash, OneMoney) dominate over card payments.
 *    RevenueCat handles store-level billing; ZW users will pay via Google
 *    Play / App Store accounts.
 *  - Data Protection Act 2021 (Cyber and Data Protection Act) is the local
 *    privacy framework — patterns roughly with GDPR but lighter enforcement.
 */
const ZW: JurisdictionPack = {
  ...AU,
  id: 'ZW',
  name: 'Zimbabwe',
  countryCodes: ['ZW'],
  extends: 'AU',
  currency: { code: 'USD', symbol: '$' },
  minAge: 13,
  dataResidency: 'global',
  crisisResources: [
    { name: 'Friendship Bench',       phone: '+263 4 339 633',  url: 'https://www.friendshipbenchzimbabwe.org', context: 'mental_health' },
    { name: 'Childline Zimbabwe',     phone: '116',             url: 'https://www.childline.org.zw',            context: 'youth' },
    { name: 'Musasa Project (DV)',    phone: '+263 4 794 983',  url: 'https://www.musasaproject.co.zw',         context: 'domestic_violence' },
  ],
};

export default ZW;
