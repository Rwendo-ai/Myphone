/**
 * Safari & Parks content types.
 *
 * Each park is a single SafariPark object. Lists for "this country's parks"
 * are filtered by countryCode at render time. The seasonal recommendation
 * uses bestMonths (Jan/Feb/...) compared against the user's planned visit.
 */

export interface SafariPark {
  /** Slug-style id, lowercase. */
  id: string;
  name: string;
  countryCode: string;
  countryName: string;
  /** Park area in km² — gives travellers a sense of scale. */
  sizeKm2: number;
  /** Three-letter month abbreviations the park is at its best. */
  bestMonths: string[];
  /** Two or three signature wildlife species — what you'd actually see. */
  signatureAnimals: string[];
  /** 2-3 sentence editorial pitch — why a traveller would pick this park. */
  description: string;
  /** Closest jumping-off city + IATA for booking flights. */
  nearestCity: { name: string; iata: string };
  /** How to actually get there — flights, transfers, charters. */
  accessNotes: string;
}
