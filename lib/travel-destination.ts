/**
 * Active travel destination resolution.
 *
 * Priority order:
 *   1. AsyncStorage override (user picked a country from the dropdown)
 *   2. Active course's primary destination (Shona learner → Zimbabwe)
 *   3. DEFAULT_DESTINATION
 *
 * Storing in AsyncStorage rather than Settings/Context because the override is
 * a travel-mode-local concern — most users will leave it on their course
 * destination. Lifting into Context would broadcast a re-render through every
 * tab on every dropdown change, which we don't need.
 */

import { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  DESTINATIONS_BY_COURSE,
  DEFAULT_DESTINATION,
  type TravelDestination,
} from '../data/travel/destinations';

const STORAGE_KEY = 'rwendo:travel_destination_override';

/** All authored destinations for the picker dropdown — drawn from the
 *  destinations registry. Sorted alphabetically for easy scanning. */
export function listAllDestinations(): TravelDestination[] {
  const seen = new Set<string>();
  const list: TravelDestination[] = [];
  for (const dest of Object.values(DESTINATIONS_BY_COURSE)) {
    if (seen.has(dest.countryCode)) continue;
    seen.add(dest.countryCode);
    list.push(dest);
  }
  return list.sort((a, b) => a.countryName.localeCompare(b.countryName));
}

export function getDestinationByCountryCode(code: string | null | undefined): TravelDestination | null {
  if (!code) return null;
  const dest = Object.values(DESTINATIONS_BY_COURSE).find(d => d.countryCode === code);
  return dest ?? null;
}

/**
 * Hook that returns the currently-active travel destination + a setter.
 *
 * The `activeCourseId` must be passed in (rather than the hook reaching into
 * SettingsContext itself) so this stays callable from screens that want
 * different course bindings — e.g. an admin preview. 99% of callers pass
 * `useSettings().activeCourseId`.
 */
export function useActiveTravelDestination(activeCourseId: string | null | undefined): {
  destination: TravelDestination;
  override: string | null;
  setOverride: (countryCode: string | null) => Promise<void>;
} {
  const [override, setOverrideState] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(v => setOverrideState(v ?? null));
  }, []);

  const setOverride = useCallback(async (code: string | null) => {
    if (code) await AsyncStorage.setItem(STORAGE_KEY, code);
    else await AsyncStorage.removeItem(STORAGE_KEY);
    setOverrideState(code);
  }, []);

  // Resolution priority: explicit override > course → destination > default
  const overriddenDest = getDestinationByCountryCode(override);
  const courseDest = activeCourseId ? DESTINATIONS_BY_COURSE[activeCourseId] : null;
  const destination = overriddenDest ?? courseDest ?? DEFAULT_DESTINATION;

  return { destination, override, setOverride };
}
