/**
 * Phrasebook registry — keyed by ISO 3166-1 country code.
 *
 * Each country's phrasebook is authored in the destination's local language.
 * As we add countries, register them here. The travel screen looks up the
 * active destination's countryCode and pulls the matching phrasebook.
 */

import type { PhrasebookCategory } from './types';
import ZIMBABWE_PHRASEBOOK from './zimbabwe';
import UK_PHRASEBOOK from './united-kingdom';
import FRANCE_PHRASEBOOK from './france';
import CHINA_PHRASEBOOK from './china';
import PHILIPPINES_PHRASEBOOK from './philippines';
import SPAIN_PHRASEBOOK from './spain';
import PORTUGAL_PHRASEBOOK from './portugal';
import INDIA_PHRASEBOOK from './india';
import JAPAN_PHRASEBOOK from './japan';
import KOREA_PHRASEBOOK from './korea';

export const PHRASEBOOKS_BY_COUNTRY: Record<string, PhrasebookCategory[]> = {
  ZW: ZIMBABWE_PHRASEBOOK,
  GB: UK_PHRASEBOOK,
  FR: FRANCE_PHRASEBOOK,
  CN: CHINA_PHRASEBOOK,
  PH: PHILIPPINES_PHRASEBOOK,
  ES: SPAIN_PHRASEBOOK,
  PT: PORTUGAL_PHRASEBOOK,
  IN: INDIA_PHRASEBOOK,
  JP: JAPAN_PHRASEBOOK,
  KR: KOREA_PHRASEBOOK,
};

export function getPhrasebookForCountry(countryCode: string): PhrasebookCategory[] | undefined {
  return PHRASEBOOKS_BY_COUNTRY[countryCode];
}
