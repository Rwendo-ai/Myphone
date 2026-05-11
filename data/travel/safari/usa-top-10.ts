/**
 * Iconic Places — USA top 10.
 *
 * US national parks + cultural icons. The system has 63 official
 * national parks; this is the curated traveller starter set, weighted
 * toward "once in a lifetime" rather than "you can do it on a weekend".
 */

import type { SafariPark } from './types';

const USA_TOP_10: SafariPark[] = [
  {
    id: 'yellowstone',
    name: 'Yellowstone National Park',
    countryCode: 'US',
    countryName: 'United States',
    sizeKm2: 8983,
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
    signatureAnimals: ['Bison', 'Grizzly bear', 'Grey wolf'],
    description:
      'The world\'s first national park (1872), sitting atop a supervolcano. Old Faithful, the Grand Prismatic Spring, and the Hayden Valley wildlife corridor. Bison roadside is routine — DO NOT approach. Allow 4 days minimum to do it properly. Lamar Valley at dawn for wolves.',
    nearestCity: { name: 'Bozeman', iata: 'BZN' },
    accessNotes: 'Fly into BZN (Montana), Jackson WY, or Cody. 1-2 hr drive to park entrances. Roads close Oct-Apr.',
  },
  {
    id: 'grand-canyon',
    name: 'Grand Canyon National Park',
    countryCode: 'US',
    countryName: 'United States',
    sizeKm2: 4926,
    bestMonths: ['Mar', 'Apr', 'May', 'Sep', 'Oct', 'Nov'],
    signatureAnimals: ['California condor', 'Mule deer', 'Bighorn sheep'],
    description:
      '446km long, 1.6km deep — the canyon humbles photographs and reality both. South Rim is the accessible side (open year-round); North Rim closes in winter. Sunrise from Mather Point. Rim-to-Rim hikes only for the very prepared — heat kills hikers every year.',
    nearestCity: { name: 'Flagstaff', iata: 'FLG' },
    accessNotes: 'Fly Phoenix PHX or Las Vegas LAS, 2-4 hr drive. Shuttle buses inside park (no private cars at viewpoints).',
  },
  {
    id: 'yosemite',
    name: 'Yosemite National Park',
    countryCode: 'US',
    countryName: 'United States',
    sizeKm2: 3027,
    bestMonths: ['May', 'Jun', 'Sep', 'Oct'],
    signatureAnimals: ['Black bear', 'Mule deer', 'Pika'],
    description:
      'Granite cliffs (El Capitan, Half Dome), giant sequoias (Mariposa Grove), and waterfalls that peak in spring snowmelt. The Valley floor is busy; venture to Tuolumne Meadows or Glacier Point for solitude. Bear spray and bear-proof food storage are mandatory.',
    nearestCity: { name: 'Fresno', iata: 'FAT' },
    accessNotes: 'Fly Fresno FAT (closest) or San Francisco SFO (4 hr drive). Reservations required Apr-Oct to drive into the park.',
  },
  {
    id: 'nyc',
    name: 'New York City',
    countryCode: 'US',
    countryName: 'United States',
    sizeKm2: 783,
    bestMonths: ['Apr', 'May', 'Jun', 'Sep', 'Oct', 'Nov'],
    signatureAnimals: ['Hawk (Central Park)', 'Pigeon', 'Rat (subway, regrettably)'],
    description:
      'Five boroughs, 8.5M people, no quiet hours. Manhattan icons: Statue of Liberty, Empire State, Central Park, Brooklyn Bridge. Brooklyn for food and music; Queens for global cuisine; the Bronx for the Yankees. Subway runs 24/7 — never stops, never apologises.',
    nearestCity: { name: 'New York', iata: 'JFK' },
    accessNotes: 'JFK / LGA / EWR airports. Subway from JFK via AirTrain (~$8 + 1 hr to Manhattan). Taxis $70-90.',
  },
  {
    id: 'zion',
    name: 'Zion National Park',
    countryCode: 'US',
    countryName: 'United States',
    sizeKm2: 593,
    bestMonths: ['Apr', 'May', 'Sep', 'Oct', 'Nov'],
    signatureAnimals: ['Bighorn sheep', 'Mountain lion (rarely seen)', 'Mule deer'],
    description:
      'Slot canyon country. The Narrows — wade up the Virgin River between 300m walls — and Angels Landing (permit required, chains for the final ridge) are bucket-list hikes. Shuttle-only access in the main canyon (Mar-Nov). Closest gateway: Springdale.',
    nearestCity: { name: 'St. George', iata: 'SGU' },
    accessNotes: 'Fly into Las Vegas LAS (2.5 hr drive) or Salt Lake City SLC (4 hr). Compulsory shuttle inside park.',
  },
  {
    id: 'glacier',
    name: 'Glacier National Park',
    countryCode: 'US',
    countryName: 'United States',
    sizeKm2: 4101,
    bestMonths: ['Jul', 'Aug', 'Sep'],
    signatureAnimals: ['Grizzly bear', 'Mountain goat', 'Bighorn sheep'],
    description:
      'Montana wilderness on the Canadian border. Going-to-the-Sun Road — a 80km alpine drive — only fully open Jul-mid-Sep. Glaciers actually disappearing (climate change is visible here). Combine with Canadian Waterton Lakes for "Waterton-Glacier International Peace Park".',
    nearestCity: { name: 'Kalispell', iata: 'FCA' },
    accessNotes: 'Fly Kalispell FCA (Glacier Park International). Vehicle reservations required May-Sep.',
  },
  {
    id: 'san-francisco',
    name: 'San Francisco & Bay Area',
    countryCode: 'US',
    countryName: 'United States',
    sizeKm2: 121,
    bestMonths: ['Apr', 'May', 'Sep', 'Oct'],
    signatureAnimals: ['Sea lions (Pier 39)', 'Pelican', 'Red-tailed hawk'],
    description:
      'Hills, fog, Victorians, food obsession. Golden Gate Bridge, Alcatraz, the Castro, Chinatown (oldest in the West). Day trip north to Muir Woods (redwoods) or south to Big Sur. The fog is part of the experience — wear layers in July.',
    nearestCity: { name: 'San Francisco', iata: 'SFO' },
    accessNotes: 'SFO or Oakland OAK. BART train from SFO to downtown ($10, 30 min). Don\'t drive in the city — parking is brutal.',
  },
  {
    id: 'new-orleans',
    name: 'New Orleans',
    countryCode: 'US',
    countryName: 'United States',
    sizeKm2: 906,
    bestMonths: ['Feb', 'Mar', 'Apr', 'Oct', 'Nov', 'Dec'],
    signatureAnimals: ['American alligator (swamp tours)', 'Brown pelican'],
    description:
      'Music, food, history, levees — the culture is unlike anywhere else in the US. French Quarter for jazz and beignets at Café du Monde, Garden District for mansions, Bywater for the next-wave music scene. Mardi Gras (Feb-Mar) is the famous time; Jazz Fest (Apr-May) is the locals\' pick.',
    nearestCity: { name: 'New Orleans', iata: 'MSY' },
    accessNotes: 'MSY airport, 25 min to French Quarter. Streetcars for transport. Hot + humid Jun-Aug — avoid.',
  },
  {
    id: 'hawaii-volcanoes',
    name: 'Hawaiʻi Volcanoes National Park',
    countryCode: 'US',
    countryName: 'United States',
    sizeKm2: 1308,
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Sep', 'Oct', 'Nov', 'Dec'],
    signatureAnimals: ['Nēnē (Hawaiian goose)', 'Hawksbill turtle (coast)'],
    description:
      'Active volcanoes Kīlauea and Mauna Loa on the Big Island. When Kīlauea erupts, you can watch lava from a viewing area at night — a once-in-a-lifetime sight. Crater Rim Drive, Chain of Craters Road, and the Thurston Lava Tube. Check eruption status before going.',
    nearestCity: { name: 'Hilo', iata: 'ITO' },
    accessNotes: 'Fly Hilo ITO (45 min drive) or Kona KOA (2-2.5 hr). Park open 24/7 — night visits for lava viewing.',
  },
  {
    id: 'las-vegas',
    name: 'Las Vegas Strip',
    countryCode: 'US',
    countryName: 'United States',
    sizeKm2: 351,
    bestMonths: ['Oct', 'Nov', 'Mar', 'Apr', 'May'],
    signatureAnimals: ['Coyote (suburbs)', 'Desert tortoise (Red Rock)'],
    description:
      '6.5km of casinos, shows, fountains, neon. Whether you gamble or not, the Strip is theatre — Bellagio fountains, Caesars Palace, the Sphere. Day trips: Hoover Dam, Red Rock Canyon, Death Valley (winter only), Grand Canyon West (4-5 hr).',
    nearestCity: { name: 'Las Vegas', iata: 'LAS' },
    accessNotes: 'LAS airport, 15 min to Strip. Open-container laws relaxed on Strip itself (rare US exception). Walk or rideshare — don\'t drive.',
  },
];

export default USA_TOP_10;
