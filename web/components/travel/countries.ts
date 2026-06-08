// Minimal ISO-3166 alpha-2 country list for the travel composer/profile editor.
// We don't ship a polyfill or external dep — this is a static UI table.

export interface CountryOption {
  code: string;
  name: string;
  flag: string;
}

// Curated list seeded from the mobile travel destination set + the most common
// "where are you from / heading to" pairs. The dropdown is searchable so the
// list doesn't need to be exhaustive — users can leave country blank.
export const COUNTRIES: CountryOption[] = [
  { code: 'AR', name: 'Argentina',    flag: '🇦🇷' },
  { code: 'AU', name: 'Australia',    flag: '🇦🇺' },
  { code: 'AT', name: 'Austria',      flag: '🇦🇹' },
  { code: 'BE', name: 'Belgium',      flag: '🇧🇪' },
  { code: 'BR', name: 'Brazil',       flag: '🇧🇷' },
  { code: 'CA', name: 'Canada',       flag: '🇨🇦' },
  { code: 'CL', name: 'Chile',        flag: '🇨🇱' },
  { code: 'CN', name: 'China',        flag: '🇨🇳' },
  { code: 'CO', name: 'Colombia',     flag: '🇨🇴' },
  { code: 'CZ', name: 'Czechia',      flag: '🇨🇿' },
  { code: 'DK', name: 'Denmark',      flag: '🇩🇰' },
  { code: 'EG', name: 'Egypt',        flag: '🇪🇬' },
  { code: 'FI', name: 'Finland',      flag: '🇫🇮' },
  { code: 'FR', name: 'France',       flag: '🇫🇷' },
  { code: 'DE', name: 'Germany',      flag: '🇩🇪' },
  { code: 'GR', name: 'Greece',       flag: '🇬🇷' },
  { code: 'HK', name: 'Hong Kong',    flag: '🇭🇰' },
  { code: 'IN', name: 'India',        flag: '🇮🇳' },
  { code: 'ID', name: 'Indonesia',    flag: '🇮🇩' },
  { code: 'IE', name: 'Ireland',      flag: '🇮🇪' },
  { code: 'IL', name: 'Israel',       flag: '🇮🇱' },
  { code: 'IT', name: 'Italy',        flag: '🇮🇹' },
  { code: 'JP', name: 'Japan',        flag: '🇯🇵' },
  { code: 'KE', name: 'Kenya',        flag: '🇰🇪' },
  { code: 'KR', name: 'South Korea',  flag: '🇰🇷' },
  { code: 'MX', name: 'Mexico',       flag: '🇲🇽' },
  { code: 'MA', name: 'Morocco',      flag: '🇲🇦' },
  { code: 'NL', name: 'Netherlands',  flag: '🇳🇱' },
  { code: 'NZ', name: 'New Zealand',  flag: '🇳🇿' },
  { code: 'NG', name: 'Nigeria',      flag: '🇳🇬' },
  { code: 'NO', name: 'Norway',       flag: '🇳🇴' },
  { code: 'PE', name: 'Peru',         flag: '🇵🇪' },
  { code: 'PH', name: 'Philippines',  flag: '🇵🇭' },
  { code: 'PL', name: 'Poland',       flag: '🇵🇱' },
  { code: 'PT', name: 'Portugal',     flag: '🇵🇹' },
  { code: 'SG', name: 'Singapore',    flag: '🇸🇬' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'ES', name: 'Spain',        flag: '🇪🇸' },
  { code: 'SE', name: 'Sweden',       flag: '🇸🇪' },
  { code: 'CH', name: 'Switzerland',  flag: '🇨🇭' },
  { code: 'TW', name: 'Taiwan',       flag: '🇹🇼' },
  { code: 'TH', name: 'Thailand',     flag: '🇹🇭' },
  { code: 'TR', name: 'Turkey',       flag: '🇹🇷' },
  { code: 'AE', name: 'UAE',          flag: '🇦🇪' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'US', name: 'United States',  flag: '🇺🇸' },
  { code: 'VN', name: 'Vietnam',      flag: '🇻🇳' },
  { code: 'ZW', name: 'Zimbabwe',     flag: '🇿🇼' },
];

const COUNTRY_BY_CODE: Map<string, CountryOption> = new Map(
  COUNTRIES.map((c) => [c.code, c]),
);

export function countryByCode(code: string | null | undefined): CountryOption | undefined {
  if (!code) return undefined;
  return COUNTRY_BY_CODE.get(code.toUpperCase());
}

export function countryFlag(code: string | null | undefined): string {
  return countryByCode(code)?.flag ?? '';
}

export function countryName(code: string | null | undefined): string {
  if (!code) return '';
  return countryByCode(code)?.name ?? code;
}
