import { JurisdictionPack } from '../../../types/packs';
import AU from '../AU';

/**
 * European Union — bloc-level pack covering 27 member states. extends AU
 * until lawyer authors GDPR-specific Privacy Policy + Terms of Service.
 *
 * Notable EU-specific differences vs AU:
 *  - GDPR (much stricter consent + data subject rights)
 *  - 14-day cooling-off period (Consumer Rights Directive 2011/83/EU)
 *  - Min age 16 (GDPR Article 8 — some member states lowered to 13)
 *  - Data must reside in EU (Schrems II — US transfers via SCCs only)
 */
const EU: JurisdictionPack = {
  ...AU,
  id: 'EU',
  name: 'European Union',
  countryCodes: [
    'AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR',
    'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO',
    'SE', 'SI', 'SK',
  ],
  extends: 'AU',
  currency: { code: 'EUR', symbol: '€' },
  minAge: 16,
  coolingOffDays: 14,
  isEu: true,
  isUk: false,
  dataResidency: 'EU',
  crisisResources: [
    // Pan-EU emergency
    { name: 'European Emergency Number', phone: '112',         url: 'https://ec.europa.eu/112',          context: 'crisis_general' },
    { name: 'Telefono Amico (IT)',       phone: '02 2327 2327', url: 'https://www.telefonoamico.it',     context: 'mental_health' },
    { name: 'SOS Amitié (FR)',           phone: '09 72 39 40 50', url: 'https://www.sos-amitie.com',     context: 'mental_health' },
    { name: 'Telefonseelsorge (DE)',     phone: '0800 111 0 111', url: 'https://www.telefonseelsorge.de', context: 'mental_health' },
    // Lawyer / per-member-state authoring will expand this list pre-launch
  ],
};

export default EU;
