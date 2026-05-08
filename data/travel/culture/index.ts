/**
 * Cultural Guide registry — keyed by ISO 3166-1 country code.
 */

import type { CulturalGuide } from './types';
import ZIMBABWE_GUIDE from './zimbabwe';
import UK_GUIDE from './united-kingdom';
import FRANCE_GUIDE from './france';
import CHINA_GUIDE from './china';
import PHILIPPINES_GUIDE from './philippines';
import SPAIN_GUIDE from './spain';
import PORTUGAL_GUIDE from './portugal';
import INDIA_GUIDE from './india';
import JAPAN_GUIDE from './japan';
import KOREA_GUIDE from './korea';

export const GUIDES_BY_COUNTRY: Record<string, CulturalGuide> = {
  ZW: ZIMBABWE_GUIDE,
  GB: UK_GUIDE,
  FR: FRANCE_GUIDE,
  CN: CHINA_GUIDE,
  PH: PHILIPPINES_GUIDE,
  ES: SPAIN_GUIDE,
  PT: PORTUGAL_GUIDE,
  IN: INDIA_GUIDE,
  JP: JAPAN_GUIDE,
  KR: KOREA_GUIDE,
};

export function getCulturalGuideForCountry(countryCode: string): CulturalGuide | undefined {
  return GUIDES_BY_COUNTRY[countryCode];
}
