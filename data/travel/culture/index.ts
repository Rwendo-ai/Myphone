/**
 * Cultural Guide registry — keyed by ISO 3166-1 country code.
 */

import type { CulturalGuide } from './types';
import ZIMBABWE_GUIDE from './zimbabwe';

export const GUIDES_BY_COUNTRY: Record<string, CulturalGuide> = {
  ZW: ZIMBABWE_GUIDE,
};

export function getCulturalGuideForCountry(countryCode: string): CulturalGuide | undefined {
  return GUIDES_BY_COUNTRY[countryCode];
}
