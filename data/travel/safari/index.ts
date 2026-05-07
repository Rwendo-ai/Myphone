/**
 * Safari & Parks registry. Top-10 list is the entire current corpus; we
 * scope it to "Africa-relevant destinations" since that's where safari is
 * culturally meaningful. Adding Asian wildlife reserves (Ranthambore, etc.)
 * is a future content pass — likely under a different "Wildlife & Parks"
 * label that doesn't carry the safari-specific connotations.
 */

import AFRICA_TOP_10 from './africa-top-10';
import type { SafariPark } from './types';

export const ALL_PARKS: SafariPark[] = AFRICA_TOP_10;

export function getParksForCountry(countryCode: string): SafariPark[] {
  return ALL_PARKS.filter(p => p.countryCode === countryCode);
}

/** Used for the "see top parks" view when the active destination has no
 *  authored safari content but the user is curious about the broader region. */
export const TOP_10_GLOBAL = AFRICA_TOP_10;
