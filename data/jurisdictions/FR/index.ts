import { JurisdictionPack } from '../../../types/packs';

/**
 * France jurisdiction pack.
 *
 * Sits under EU rules but with French-specific overlays:
 *   - minAge 15 — France's specific threshold under the GDPR (member states
 *     can set anywhere 13-16; France chose 15)
 *   - 14-day cooling-off — required by EU consumer law
 *   - languageOfRecord 'french' — legal docs MUST be in French per the
 *     Toubon Law for consumer-facing French residents
 *
 * Reviewer to confirm cooling-off applicability to digital services
 * (some carve-outs exist for performed-immediately content).
 */
const FR: JurisdictionPack = {
  id: 'FR',
  name: 'France',
  countryCodes: ['FR'],
  extends: 'EU',
  currency: { code: 'EUR', symbol: '€' },
  minAge: 15,
  coolingOffDays: 14,
  voiceConsentRequired: false,
  dataResidency: 'EU',
  languageOfRecord: 'french',
  isEu: true,
  isUk: false,
  privacyPolicyMd: '',
  termsOfServiceMd: '',
  crisisResources: [
    { name: '3114 — Numéro national de prévention du suicide', phone: '3114',         url: 'https://3114.fr',                        context: 'mental_health' },
    { name: 'SOS Amitié',                                       phone: '09 72 39 40 50', url: 'https://www.sos-amitie.com',           context: 'crisis_general' },
    { name: '3919 — Violences Femmes Info',                    phone: '3919',         url: 'https://www.solidaritefemmes.org',       context: 'domestic_violence' },
    { name: 'Allo Enfance en Danger',                          phone: '119',          url: 'https://www.allo119.gouv.fr',           context: 'youth' },
  ],
  consentDisclosures: {
    aiPartnerProcessor:
      'Anthropic, Inc. (Claude AI) — opère depuis les États-Unis. Le transfert de données est encadré par les Clauses ' +
      'Contractuelles Types de la Commission européenne (RGPD art. 46).',
    voiceProcessor:
      'ElevenLabs (TTS + STT) — opère depuis les États-Unis. Les transcriptions audio sont supprimées sous 24 heures.',
    dataController: 'Rwendo (entité solo-développeur, Australie)',
  },
};

export default FR;
