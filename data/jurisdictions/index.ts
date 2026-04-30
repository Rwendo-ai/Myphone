import { JurisdictionPack, JurisdictionPackId } from '../../types/packs';
import AU from './AU';
import GB from './GB';
import US from './US';
import EU from './EU';
import ZW from './ZW';

export const JURISDICTIONS: Record<JurisdictionPackId, JurisdictionPack> = {
  AU, GB, US, EU, ZW,
};

export const JURISDICTION_IDS = Object.keys(JURISDICTIONS) as JurisdictionPackId[];

const EU_COUNTRY_CODES = new Set(EU.countryCodes);

/**
 * Resolve a jurisdiction by id or country code. Falls back to AU.
 */
export function getJurisdiction(idOrCountry: string | null | undefined): JurisdictionPack {
  if (!idOrCountry) return AU;
  // Direct ID hit (most common — what's stored in profiles.jurisdiction_id)
  if (JURISDICTIONS[idOrCountry]) return JURISDICTIONS[idOrCountry];
  // Country-code resolution (used during onboarding when we only know ISO 3166)
  const upper = idOrCountry.toUpperCase();
  if (upper === 'GB') return GB;
  if (upper === 'US') return US;
  if (upper === 'AU') return AU;
  if (upper === 'ZW') return ZW;
  if (EU_COUNTRY_CODES.has(upper)) return EU;
  return AU;
}

export { AU, GB, US, EU, ZW };
