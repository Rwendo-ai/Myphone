/**
 * Course → primary destination mapping for Travel Mode.
 *
 * Each language course has a primary country it most naturally maps to. This
 * powers the Travel hub: "you're learning Shona → here's Zimbabwe travel
 * content". A user with no active course defaults to a global view.
 *
 * Currency codes follow ISO 4217. The `imageEmoji` is what shows in the hub
 * card; later replaced with a real hero image once we author per-country
 * imagery.
 *
 * To extend: add a new entry keyed by CoursePackId. The travel screens
 * (money, flights, hotels, phrasebook, culture, safari) read from this.
 */

export interface TravelDestination {
  /** Country name, English. */
  countryName: string;
  /** ISO 3166-1 alpha-2. Used for Skyscanner/Booking deep links + flag. */
  countryCode: string;
  /** Primary city the traveller is most likely flying into. IATA airport. */
  primaryCity: { name: string; iata: string };
  /** Secondary cities worth listing on the destination page. */
  secondaryCities: Array<{ name: string; iata: string }>;
  /** ISO 4217 currency for FX queries. */
  currencyCode: string;
  /** Display symbol for the currency. */
  currencySymbol: string;
  /** Flag emoji for the hub. */
  flag: string;
  /** Small list of cultural pull-quotes used as the destination's tagline. */
  tagline: string;
  /** Whether this country has safari content authored (top-10 parks etc). */
  hasSafari: boolean;
  /** Whether this country has cultural-guide content authored yet. */
  hasCulture: boolean;
}

/**
 * Keyed by CoursePackId. Each language course's primary destination.
 * Build-Yourself courses don't appear here — Travel Mode is for language
 * learners going somewhere. The hub falls back to a "pick a destination"
 * picker when the user has no active language course.
 */
export const DESTINATIONS_BY_COURSE: Record<string, TravelDestination> = {
  'language-shona': {
    countryName: 'Zimbabwe',
    countryCode: 'ZW',
    primaryCity: { name: 'Harare', iata: 'HRE' },
    secondaryCities: [
      { name: 'Bulawayo',       iata: 'BUQ' },
      { name: 'Victoria Falls', iata: 'VFA' },
    ],
    currencyCode: 'ZWG',
    currencySymbol: 'ZiG',
    flag: '🇿🇼',
    tagline: 'Mosi-oa-Tunya — the smoke that thunders',
    hasSafari: true,
    hasCulture: true,
  },
  'language-english': {
    countryName: 'United Kingdom',
    countryCode: 'GB',
    primaryCity: { name: 'London', iata: 'LHR' },
    secondaryCities: [
      { name: 'Edinburgh',  iata: 'EDI' },
      { name: 'Manchester', iata: 'MAN' },
    ],
    currencyCode: 'GBP',
    currencySymbol: '£',
    flag: '🇬🇧',
    tagline: 'Tea, trains, and the long history of London',
    hasSafari: false,
    hasCulture: true,
  },
  'language-french': {
    countryName: 'France',
    countryCode: 'FR',
    primaryCity: { name: 'Paris', iata: 'CDG' },
    secondaryCities: [
      { name: 'Lyon',      iata: 'LYS' },
      { name: 'Marseille', iata: 'MRS' },
    ],
    currencyCode: 'EUR',
    currencySymbol: '€',
    flag: '🇫🇷',
    tagline: 'Café, cathedrals, and the long lunch',
    hasSafari: false,
    hasCulture: true,
  },
  'language-chinese': {
    countryName: 'China',
    countryCode: 'CN',
    primaryCity: { name: 'Beijing', iata: 'PEK' },
    secondaryCities: [
      { name: 'Shanghai',  iata: 'PVG' },
      { name: 'Guangzhou', iata: 'CAN' },
    ],
    currencyCode: 'CNY',
    currencySymbol: '¥',
    flag: '🇨🇳',
    tagline: 'Where the Great Wall meets the bullet train',
    hasSafari: false,
    hasCulture: true,
  },
  'language-tagalog': {
    countryName: 'Philippines',
    countryCode: 'PH',
    primaryCity: { name: 'Manila', iata: 'MNL' },
    secondaryCities: [
      { name: 'Cebu',     iata: 'CEB' },
      { name: 'Boracay',  iata: 'MPH' },
    ],
    currencyCode: 'PHP',
    currencySymbol: '₱',
    flag: '🇵🇭',
    tagline: '7,641 islands, one warm welcome',
    hasSafari: false,
    hasCulture: true,
  },
  'language-spanish': {
    countryName: 'Spain',
    countryCode: 'ES',
    primaryCity: { name: 'Madrid', iata: 'MAD' },
    secondaryCities: [
      { name: 'Barcelona', iata: 'BCN' },
      { name: 'Seville',   iata: 'SVQ' },
    ],
    currencyCode: 'EUR',
    currencySymbol: '€',
    flag: '🇪🇸',
    tagline: 'Tapas, siestas, and the long Mediterranean evening',
    hasSafari: false,
    hasCulture: true,
  },
  'language-portuguese': {
    countryName: 'Portugal',
    countryCode: 'PT',
    primaryCity: { name: 'Lisbon', iata: 'LIS' },
    secondaryCities: [
      { name: 'Porto', iata: 'OPO' },
      { name: 'Faro',  iata: 'FAO' },
    ],
    currencyCode: 'EUR',
    currencySymbol: '€',
    flag: '🇵🇹',
    tagline: 'Pastéis, fado, and the Atlantic light',
    hasSafari: false,
    hasCulture: true,
  },
  'language-hindi': {
    countryName: 'India',
    countryCode: 'IN',
    primaryCity: { name: 'Delhi', iata: 'DEL' },
    secondaryCities: [
      { name: 'Mumbai',    iata: 'BOM' },
      { name: 'Bengaluru', iata: 'BLR' },
    ],
    currencyCode: 'INR',
    currencySymbol: '₹',
    flag: '🇮🇳',
    tagline: 'A subcontinent of stories, one street at a time',
    hasSafari: false,
    hasCulture: true,
  },
  'language-japanese': {
    countryName: 'Japan',
    countryCode: 'JP',
    primaryCity: { name: 'Tokyo', iata: 'NRT' },
    secondaryCities: [
      { name: 'Osaka', iata: 'KIX' },
      { name: 'Kyoto', iata: 'KIX' }, // Kyoto routes via Osaka KIX
    ],
    currencyCode: 'JPY',
    currencySymbol: '¥',
    flag: '🇯🇵',
    tagline: 'Where the bullet train and the tea ceremony share a country',
    hasSafari: false,
    hasCulture: true,
  },
  'language-korean': {
    countryName: 'South Korea',
    countryCode: 'KR',
    primaryCity: { name: 'Seoul', iata: 'ICN' },
    secondaryCities: [
      { name: 'Busan', iata: 'PUS' },
      { name: 'Jeju',  iata: 'CJU' },
    ],
    currencyCode: 'KRW',
    currencySymbol: '₩',
    flag: '🇰🇷',
    tagline: 'K-everything, and a quieter Korea behind it',
    hasSafari: false,
    hasCulture: true,
  },
};

/** Default destination when the user has no active language course. */
export const DEFAULT_DESTINATION: TravelDestination = DESTINATIONS_BY_COURSE['language-shona'];

export function getDestinationForCourse(courseId: string | null | undefined): TravelDestination {
  if (!courseId) return DEFAULT_DESTINATION;
  return DESTINATIONS_BY_COURSE[courseId] ?? DEFAULT_DESTINATION;
}
