/**
 * Phrasebook registry — keyed by ISO 3166-1 country code.
 *
 * Each country's phrasebook is authored in the destination's language. As we
 * add countries, register them here. The travel screen looks up the active
 * destination's countryCode and pulls the matching phrasebook.
 */

import type { PhrasebookCategory } from './types';
import ZIMBABWE_PHRASEBOOK from './zimbabwe';

export const PHRASEBOOKS_BY_COUNTRY: Record<string, PhrasebookCategory[]> = {
  ZW: ZIMBABWE_PHRASEBOOK,
  // Other countries pending authoring. Falls back to a "coming soon" view
  // in the phrasebook screen when a country has no entry yet.
};

export function getPhrasebookForCountry(countryCode: string): PhrasebookCategory[] | undefined {
  return PHRASEBOOKS_BY_COUNTRY[countryCode];
}
