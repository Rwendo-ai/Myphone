/**
 * Travel Mode data layer — destinations registry + Storage content
 * loaders, ported from the mobile app (data/travel/destinations.ts +
 * lib/travel-content-loader.ts).
 *
 * Content lives in two PUBLIC Supabase Storage buckets, so the web app
 * fetches plain public URLs and leans on Next's fetch cache
 * (revalidate hourly) instead of a device cache:
 *   travel-content / phrasebook/<contentKey>.json   → PhrasebookCategory[]
 *   travel-content / culture/<contentKey>.json      → CulturalGuide
 *   travel-content / safari/<region>-top-10.json    → SafariPark[]
 *   audio          / phrasebook/<contentKey>/manifest.json + <id>.mp3
 *
 * Destination resolution mirrors mobile: learning language → primary
 * destination, with a user override (web: ?d=<countryCode> query param
 * so pages stay server-rendered and URLs shareable).
 */

// ─── Destinations registry (mirror of data/travel/destinations.ts) ──────

export interface TravelDestination {
  countryName: string;
  countryCode: string;          // ISO 3166-1 alpha-2 (ZW appears twice)
  contentKey?: string;          // Storage key; defaults to countryCode
  primaryCity: { name: string; iata: string };
  secondaryCities: Array<{ name: string; iata: string }>;
  currencyCode: string;         // ISO 4217
  currencySymbol: string;
  flag: string;
  tagline: string;
  hasSafari: boolean;
  hasCulture: boolean;
}

export const DESTINATIONS_BY_COURSE: Record<string, TravelDestination> = {
  'language-shona': {
    countryName: 'Zimbabwe (Shona)', countryCode: 'ZW', contentKey: 'ZW',
    primaryCity: { name: 'Harare', iata: 'HRE' },
    secondaryCities: [{ name: 'Bulawayo', iata: 'BUQ' }, { name: 'Victoria Falls', iata: 'VFA' }],
    currencyCode: 'ZWG', currencySymbol: 'ZiG', flag: '🇿🇼',
    tagline: 'Mosi-oa-Tunya — the smoke that thunders', hasSafari: true, hasCulture: true,
  },
  'language-ndebele': {
    countryName: 'Zimbabwe (Ndebele)', countryCode: 'ZW', contentKey: 'ZW-ND',
    primaryCity: { name: 'Bulawayo', iata: 'BUQ' },
    secondaryCities: [{ name: 'Harare', iata: 'HRE' }, { name: 'Victoria Falls', iata: 'VFA' }],
    currencyCode: 'ZWG', currencySymbol: 'ZiG', flag: '🇿🇼',
    tagline: 'uMthwakazi — the Ndebele heart of Zimbabwe', hasSafari: true, hasCulture: true,
  },
  'language-english': {
    countryName: 'United Kingdom', countryCode: 'GB',
    primaryCity: { name: 'London', iata: 'LHR' },
    secondaryCities: [{ name: 'Edinburgh', iata: 'EDI' }, { name: 'Manchester', iata: 'MAN' }],
    currencyCode: 'GBP', currencySymbol: '£', flag: '🇬🇧',
    tagline: 'Tea, trains, and the long history of London', hasSafari: false, hasCulture: true,
  },
  'language-french': {
    countryName: 'France', countryCode: 'FR',
    primaryCity: { name: 'Paris', iata: 'CDG' },
    secondaryCities: [{ name: 'Lyon', iata: 'LYS' }, { name: 'Marseille', iata: 'MRS' }],
    currencyCode: 'EUR', currencySymbol: '€', flag: '🇫🇷',
    tagline: 'Café, cathedrals, and the long lunch', hasSafari: false, hasCulture: true,
  },
  'language-chinese': {
    countryName: 'China', countryCode: 'CN',
    primaryCity: { name: 'Beijing', iata: 'PEK' },
    secondaryCities: [{ name: 'Shanghai', iata: 'PVG' }, { name: 'Guangzhou', iata: 'CAN' }],
    currencyCode: 'CNY', currencySymbol: '¥', flag: '🇨🇳',
    tagline: 'Where the Great Wall meets the bullet train', hasSafari: false, hasCulture: true,
  },
  'language-tagalog': {
    countryName: 'Philippines', countryCode: 'PH',
    primaryCity: { name: 'Manila', iata: 'MNL' },
    secondaryCities: [{ name: 'Cebu', iata: 'CEB' }, { name: 'Boracay', iata: 'MPH' }],
    currencyCode: 'PHP', currencySymbol: '₱', flag: '🇵🇭',
    tagline: '7,641 islands, one warm welcome', hasSafari: false, hasCulture: true,
  },
  'language-spanish': {
    countryName: 'Spain', countryCode: 'ES',
    primaryCity: { name: 'Madrid', iata: 'MAD' },
    secondaryCities: [{ name: 'Barcelona', iata: 'BCN' }, { name: 'Seville', iata: 'SVQ' }],
    currencyCode: 'EUR', currencySymbol: '€', flag: '🇪🇸',
    tagline: 'Tapas, siestas, and the long Mediterranean evening', hasSafari: false, hasCulture: true,
  },
  'language-portuguese': {
    countryName: 'Portugal', countryCode: 'PT',
    primaryCity: { name: 'Lisbon', iata: 'LIS' },
    secondaryCities: [{ name: 'Porto', iata: 'OPO' }, { name: 'Faro', iata: 'FAO' }],
    currencyCode: 'EUR', currencySymbol: '€', flag: '🇵🇹',
    tagline: 'Pastéis, fado, and the Atlantic light', hasSafari: false, hasCulture: true,
  },
  'language-hindi': {
    countryName: 'India', countryCode: 'IN',
    primaryCity: { name: 'Delhi', iata: 'DEL' },
    secondaryCities: [{ name: 'Mumbai', iata: 'BOM' }, { name: 'Bengaluru', iata: 'BLR' }],
    currencyCode: 'INR', currencySymbol: '₹', flag: '🇮🇳',
    tagline: 'A subcontinent of stories, one street at a time', hasSafari: false, hasCulture: true,
  },
  'language-japanese': {
    countryName: 'Japan', countryCode: 'JP',
    primaryCity: { name: 'Tokyo', iata: 'NRT' },
    secondaryCities: [{ name: 'Osaka', iata: 'KIX' }, { name: 'Kyoto', iata: 'KIX' }],
    currencyCode: 'JPY', currencySymbol: '¥', flag: '🇯🇵',
    tagline: 'Where the bullet train and the tea ceremony share a country', hasSafari: false, hasCulture: true,
  },
  'language-korean': {
    countryName: 'South Korea', countryCode: 'KR',
    primaryCity: { name: 'Seoul', iata: 'ICN' },
    secondaryCities: [{ name: 'Busan', iata: 'PUS' }, { name: 'Jeju', iata: 'CJU' }],
    currencyCode: 'KRW', currencySymbol: '₩', flag: '🇰🇷',
    tagline: 'K-everything, and a quieter Korea behind it', hasSafari: false, hasCulture: true,
  },
  'destination-australia': {
    countryName: 'Australia', countryCode: 'AU',
    primaryCity: { name: 'Sydney', iata: 'SYD' },
    secondaryCities: [
      { name: 'Melbourne', iata: 'MEL' }, { name: 'Brisbane', iata: 'BNE' },
      { name: 'Perth', iata: 'PER' }, { name: 'Cairns', iata: 'CNS' }, { name: 'Adelaide', iata: 'ADL' },
    ],
    currencyCode: 'AUD', currencySymbol: 'A$', flag: '🇦🇺',
    tagline: "Beaches, bush, and the world's longest reef", hasSafari: true, hasCulture: true,
  },
  'destination-usa': {
    countryName: 'United States', countryCode: 'US',
    primaryCity: { name: 'New York', iata: 'JFK' },
    secondaryCities: [
      { name: 'Los Angeles', iata: 'LAX' }, { name: 'San Francisco', iata: 'SFO' },
      { name: 'Chicago', iata: 'ORD' }, { name: 'Las Vegas', iata: 'LAS' }, { name: 'Miami', iata: 'MIA' },
    ],
    currencyCode: 'USD', currencySymbol: 'US$', flag: '🇺🇸',
    tagline: 'Fifty states, fifty countries — pick a coast', hasSafari: true, hasCulture: true,
  },
};

export const DEFAULT_DESTINATION = DESTINATIONS_BY_COURSE['language-shona'];

export function contentKeyOf(d: TravelDestination): string {
  return d.contentKey ?? d.countryCode;
}

/** Unique destinations (by contentKey so Shona + Ndebele Zimbabwe both
 *  appear), sorted by name — picker list. */
export function listAllDestinations(): TravelDestination[] {
  const seen = new Set<string>();
  const out: TravelDestination[] = [];
  for (const d of Object.values(DESTINATIONS_BY_COURSE)) {
    const key = contentKeyOf(d);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(d);
  }
  return out.sort((a, b) => a.countryName.localeCompare(b.countryName));
}

/**
 * Resolve the active destination. Priority: explicit override (the ?d=
 * query param, matched against contentKey) → learning-language default
 * (active_language_pack_id 'english-shona' → 'language-shona') → Zimbabwe.
 */
export function resolveDestination(
  languagePackId: string | null | undefined,
  overrideKey: string | null | undefined,
): TravelDestination {
  if (overrideKey) {
    const hit = Object.values(DESTINATIONS_BY_COURSE).find((d) => contentKeyOf(d) === overrideKey);
    if (hit) return hit;
  }
  if (languagePackId) {
    // 'english-shona' → 'language-shona'; 'shona-english' → 'language-english'
    const learned = languagePackId.split('-').pop();
    const course = `language-${learned}`;
    if (DESTINATIONS_BY_COURSE[course]) return DESTINATIONS_BY_COURSE[course];
  }
  return DEFAULT_DESTINATION;
}

// ─── Content types (mirror of data/travel/*/types.ts) ───────────────────

export interface TravelPhrase {
  id: string;
  target: string;
  native: string;
  phonetic?: string;
  audioPath?: string;
  tags?: Array<'word' | 'phrase' | 'flipcard'>;
}

export interface PhrasebookCategory {
  id: string;
  title: string;
  emoji: string;
  free: boolean;
  phrases: TravelPhrase[];
}

export interface CulturalGuideSection {
  id: string;
  title: string;
  emoji: string;
  body: string;
}

export interface CulturalGuide {
  countryCode: string;
  countryName: string;
  intro: string;
  sections: CulturalGuideSection[];
}

export interface SafariPark {
  id: string;
  name: string;
  countryCode: string;
  countryName: string;
  sizeKm2: number;
  bestMonths: string[];
  signatureAnimals: string[];
  description: string;
  nearestCity: { name: string; iata: string };
  accessNotes: string;
}

export interface AudioManifest {
  countryCode: string;
  voice: string;
  generatedAt: string;
  entries: Array<{ id: string; audioPath: string; charCount: number }>;
}

// ─── Loaders (public buckets → plain fetch + Next cache) ────────────────

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';

export function travelContentUrl(path: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/travel-content/${path}`;
}

export function audioUrl(path: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/audio/${path}`;
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export function loadPhrasebook(contentKey: string) {
  return fetchJson<PhrasebookCategory[]>(travelContentUrl(`phrasebook/${contentKey}.json`));
}

export function loadCulturalGuide(contentKey: string) {
  return fetchJson<CulturalGuide>(travelContentUrl(`culture/${contentKey}.json`));
}

/** Region file selection mirrors mobile: AU and US have their own
 *  top-10; everything else reads the Africa list. */
export function loadSafariParks(countryCode: string) {
  const region = countryCode === 'AU' ? 'australia' : countryCode === 'US' ? 'usa' : 'africa';
  return fetchJson<SafariPark[]>(travelContentUrl(`safari/${region}-top-10.json`));
}

export function loadAudioManifest(contentKey: string) {
  return fetchJson<AudioManifest>(audioUrl(`phrasebook/${contentKey}/manifest.json`));
}

// ─── Money: FX + cost-of-living anchors (mirror of app/travel/money.tsx) ─

export const FX_API = 'https://api.exchangerate.host/latest';

/** Server-side FX fetch; rates revalidate every 6h. Returns null on miss. */
export async function fetchFxRate(
  base: string,
  symbol: string,
): Promise<{ rate: number; date: string } | null> {
  try {
    const res = await fetch(`${FX_API}?base=${base}&symbols=${symbol}`, { next: { revalidate: 21600 } });
    if (!res.ok) return null;
    const json = (await res.json()) as { date?: string; rates?: Record<string, number> };
    const rate = json.rates?.[symbol];
    if (typeof rate !== 'number') return null;
    return { rate, date: json.date ?? new Date().toISOString().slice(0, 10) };
  } catch {
    return null;
  }
}

/** Home currency by jurisdiction (profiles.jurisdiction_id). */
export const CURRENCY_BY_JURISDICTION: Record<string, string> = {
  AU: 'AUD', GB: 'GBP', US: 'USD', EU: 'EUR', FR: 'EUR', ZW: 'USD', PH: 'PHP',
};

export const COST_BY_COUNTRY: Record<string, Array<{ label: string; price: string; note?: string }>> = {
  ZW: [
    { label: 'Sadza meal (local)', price: 'US$3-5', note: 'USD widely accepted alongside ZiG' },
    { label: 'Coffee at a café', price: 'US$2-3' },
    { label: 'Kombi ride within city', price: 'US$0.50-1' },
    { label: 'Taxi airport → Harare', price: 'US$25-35' },
    { label: 'Mid-range hotel night', price: 'US$60-100' },
  ],
  GB: [
    { label: 'Pub meal', price: '£12-18' },
    { label: 'Coffee at a café', price: '£3.50-4.50' },
    { label: 'London Tube zone 1-2', price: '£2.80 (contactless)' },
    { label: 'Heathrow Express', price: '£25 single' },
    { label: 'Mid-range hotel night', price: '£100-160' },
  ],
  FR: [
    { label: 'Café au comptoir', price: '€2-2.50' },
    { label: 'Plat du jour', price: '€14-20' },
    { label: 'Métro single', price: '€2.10' },
    { label: 'CDG → Paris (RER B)', price: '€11.80' },
    { label: 'Mid-range hotel night', price: '€110-170' },
  ],
  ES: [
    { label: 'Menú del día', price: '€12-16' },
    { label: 'Café con leche', price: '€1.80-2.50' },
    { label: 'Madrid metro single', price: '€1.50-2.00' },
    { label: 'Mid-range hotel night', price: '€90-140' },
  ],
  PT: [
    { label: 'Prato do dia', price: '€10-14' },
    { label: 'Bica (espresso)', price: '€0.80-1.20' },
    { label: 'Lisbon metro single', price: '€1.65' },
    { label: 'Mid-range hotel night', price: '€80-130' },
  ],
  IN: [
    { label: 'Thali (local)', price: '₹150-300' },
    { label: 'Chai (street)', price: '₹15-25' },
    { label: 'Auto-rickshaw (5 km)', price: '₹80-150' },
    { label: 'Mid-range hotel night', price: '₹3,000-6,000' },
  ],
  CN: [
    { label: 'Noodle bowl', price: '¥20-40' },
    { label: 'Coffee at a chain', price: '¥25-35' },
    { label: 'Beijing subway', price: '¥3-9' },
    { label: 'Mid-range hotel night', price: '¥400-800' },
  ],
  PH: [
    { label: 'Carinderia meal', price: '₱100-180' },
    { label: 'Halo-halo', price: '₱120-200' },
    { label: 'Jeepney ride', price: '₱13-20' },
    { label: 'Mid-range hotel night', price: '₱3,500-6,500' },
  ],
  JP: [
    { label: 'Ramen bowl', price: '¥900-1,400' },
    { label: 'Convenience store coffee', price: '¥120-200' },
    { label: 'Tokyo metro single', price: '¥180-330' },
    { label: 'NRT → Tokyo (Skyliner)', price: '¥2,580' },
    { label: 'Mid-range hotel night', price: '¥12,000-22,000' },
  ],
  KR: [
    { label: 'Bibimbap', price: '₩9,000-13,000' },
    { label: 'Café Americano', price: '₩4,500-5,500' },
    { label: 'Seoul metro single', price: '₩1,400-1,500' },
    { label: 'Mid-range hotel night', price: '₩120,000-180,000' },
  ],
};

// ─── Affiliate deep links (flights/hotels — plain links on web) ─────────

export function flightsUrl(d: TravelDestination): string {
  return `https://www.skyscanner.net/transport/flights-to/${d.primaryCity.iata.toLowerCase()}/`;
}

export function hotelsUrl(d: TravelDestination): string {
  return `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(`${d.primaryCity.name}, ${d.countryName.replace(/ \(.+\)$/, '')}`)}`;
}
