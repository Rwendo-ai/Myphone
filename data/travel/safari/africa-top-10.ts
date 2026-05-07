/**
 * Safari & Parks — top 10 across our African destinations.
 *
 * Curated, not exhaustive. Each entry is geared to a traveller deciding
 * where to spend their 3-7 day safari window. Best-time + signature-animal
 * fields drive the seasonal recommendation logic in the UI.
 *
 * Phase 2: per-park lodge affiliates (Booking.com), GetYourGuide tour
 * deep-links, and price-tier filters.
 */

import type { SafariPark } from './types';

const AFRICA_TOP_10: SafariPark[] = [
  {
    id: 'hwange',
    name: 'Hwange National Park',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    sizeKm2: 14651,
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    signatureAnimals: ['Elephant', 'Lion', 'Wild dog'],
    description:
      "Zimbabwe's largest park, famous for elephant herds (often 50+ at a single waterhole) and one of the densest wild dog populations in Africa. Less-busy than Kruger, more rustic than the Sabi Sands. Dry-season game-drives near pumped waterholes are the move.",
    nearestCity: { name: 'Victoria Falls', iata: 'VFA' },
    accessNotes: 'Fly into VFA, 2-3 hr road transfer. Lodges arrange.',
  },
  {
    id: 'mana-pools',
    name: 'Mana Pools National Park',
    countryCode: 'ZW',
    countryName: 'Zimbabwe',
    sizeKm2: 2196,
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
    signatureAnimals: ['Elephant', 'Wild dog', 'Lion'],
    description:
      "UNESCO World Heritage site on the Zambezi. The headline experience is walking safaris — Zimbabwe is one of the few countries where you can legally walk alongside wildlife with a licensed guide. Higher-skill, higher-reward.",
    nearestCity: { name: 'Harare', iata: 'HRE' },
    accessNotes: 'Fly into HRE, charter to airstrip. Self-drive accessible Apr-Oct.',
  },
  {
    id: 'serengeti',
    name: 'Serengeti National Park',
    countryCode: 'TZ',
    countryName: 'Tanzania',
    sizeKm2: 14763,
    bestMonths: ['Jan', 'Feb', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    signatureAnimals: ['Wildebeest (Great Migration)', 'Lion', 'Cheetah'],
    description:
      "The Great Migration headlines but the Serengeti is also a year-round predator-density paradise. North in Aug-Sep for the river crossings; south in Jan-Feb for calving season — both world-class.",
    nearestCity: { name: 'Arusha', iata: 'JRO' },
    accessNotes: 'Fly into JRO, light-aircraft transfer to airstrip. Most lodges include this.',
  },
  {
    id: 'masai-mara',
    name: 'Maasai Mara National Reserve',
    countryCode: 'KE',
    countryName: 'Kenya',
    sizeKm2: 1510,
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
    signatureAnimals: ['Lion', 'Cheetah', 'Wildebeest'],
    description:
      "Smaller and more accessible than the Serengeti, with higher cat density per square km. The Mara is where the migration enters Kenya in Jul-Oct. Crowds are real — the conservancies bordering it (Olare Motorogi, Mara North) trade convenience for fewer vehicles per sighting.",
    nearestCity: { name: 'Nairobi', iata: 'NBO' },
    accessNotes: 'Fly into NBO, light-aircraft (~45 min) to Mara airstrips.',
  },
  {
    id: 'okavango',
    name: 'Okavango Delta',
    countryCode: 'BW',
    countryName: 'Botswana',
    sizeKm2: 15000,
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
    signatureAnimals: ['Elephant', 'Hippo', 'Wild dog', 'Leopard'],
    description:
      "An inland river delta that floods during the dry season, creating a green wildlife oasis when everything around it browns out. Mokoro (dugout canoe) safaris are signature — silent, low-impact, eye-level wildlife. Premium pricing reflects low-density model.",
    nearestCity: { name: 'Maun', iata: 'MUB' },
    accessNotes: 'Fly into MUB, light-aircraft to camp airstrip.',
  },
  {
    id: 'kruger',
    name: 'Kruger National Park',
    countryCode: 'ZA',
    countryName: 'South Africa',
    sizeKm2: 19485,
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
    signatureAnimals: ['Lion', 'Leopard', 'Rhino', 'Elephant', 'Buffalo'],
    description:
      "The most accessible Big Five park — well-paved roads, self-drive friendly, full range of accommodation from public rest camps to ultra-luxe Sabi Sands. Best on a tight budget; the private reserves on the western boundary are where the photographic safaris happen.",
    nearestCity: { name: 'Nelspruit / Hoedspruit', iata: 'MQP' },
    accessNotes: 'Fly into MQP. Self-drive within Kruger or rent at HDS.',
  },
  {
    id: 'south-luangwa',
    name: 'South Luangwa National Park',
    countryCode: 'ZM',
    countryName: 'Zambia',
    sizeKm2: 9050,
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    signatureAnimals: ['Leopard', 'Lion', 'Wild dog'],
    description:
      "The birthplace of walking safaris. Luangwa has Africa's highest leopard density and excellent night drives (legal here, banned in Tanzania/Kenya). Camps are smaller, guides among the most experienced on the continent.",
    nearestCity: { name: 'Mfuwe', iata: 'MFU' },
    accessNotes: 'Fly into LUN (Lusaka), connect to MFU.',
  },
  {
    id: 'etosha',
    name: 'Etosha National Park',
    countryCode: 'NA',
    countryName: 'Namibia',
    sizeKm2: 22270,
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    signatureAnimals: ['Black rhino', 'Elephant', 'Lion', 'Springbok'],
    description:
      "A massive salt pan ringed by waterholes — wildlife comes to YOU rather than the other way around. Self-drive friendly. Dust is part of the experience. Black-rhino sightings at Halali camp's floodlit waterhole are unmatched.",
    nearestCity: { name: 'Windhoek', iata: 'WDH' },
    accessNotes: 'Fly into WDH, hire 4x4, drive ~5 hr to gates. Or charter to Mokuti.',
  },
  {
    id: 'volcanoes',
    name: 'Volcanoes National Park',
    countryCode: 'RW',
    countryName: 'Rwanda',
    sizeKm2: 160,
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Dec', 'Jan', 'Feb'],
    signatureAnimals: ['Mountain gorilla', 'Golden monkey'],
    description:
      "Mountain-gorilla trekking. One hour with a habituated family — closer to silverback eye contact than any other place on earth. Permits are strictly limited (~96/day) and expensive (US$1,500). Worth it once in a lifetime.",
    nearestCity: { name: 'Kigali', iata: 'KGL' },
    accessNotes: 'Fly into KGL, road transfer 2.5 hr to Musanze. Permits booked 6+ months ahead.',
  },
  {
    id: 'chobe',
    name: 'Chobe National Park',
    countryCode: 'BW',
    countryName: 'Botswana',
    sizeKm2: 11700,
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    signatureAnimals: ['Elephant', 'Hippo', 'Crocodile', 'Buffalo'],
    description:
      "The river-front section has the highest elephant density on the continent — a single afternoon boat cruise routinely puts you among 200+ elephants drinking. Pairs naturally with Vic Falls (40 min drive across the Kazungula bridge).",
    nearestCity: { name: 'Kasane', iata: 'BBK' },
    accessNotes: 'Fly into BBK or VFA + road transfer (1 hr cross-border).',
  },
];

export default AFRICA_TOP_10;
