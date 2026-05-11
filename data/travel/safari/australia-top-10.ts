/**
 * Iconic Places — Australia top 10.
 *
 * Reuses the SafariPark schema (originally Africa-focused) for any
 * country's "must-see destinations" list. For Australia: national parks,
 * reef, outback, alpine, coastal. signatureAnimals here = signature
 * wildlife / experiences travellers come for.
 */

import type { SafariPark } from './types';

const AUSTRALIA_TOP_10: SafariPark[] = [
  {
    id: 'uluru',
    name: 'Uluru-Kata Tjuta National Park',
    countryCode: 'AU',
    countryName: 'Australia',
    sizeKm2: 1326,
    bestMonths: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    signatureAnimals: ['Red kangaroo', 'Thorny devil', 'Dingo'],
    description:
      'Sacred to the Anangu people for 60,000+ years. The 348m sandstone monolith and the nearby Kata Tjuta domes are unmistakable. Climbing closed in 2019 — the Mala walk and Kuniya walk are the respectful ways to experience it. Sunrise and sunset light it up like coals.',
    nearestCity: { name: 'Ayers Rock', iata: 'AYQ' },
    accessNotes: 'Fly into AYQ from Sydney/Melbourne (3 hr) or drive from Alice Springs (4.5 hr).',
  },
  {
    id: 'great-barrier-reef',
    name: 'Great Barrier Reef',
    countryCode: 'AU',
    countryName: 'Australia',
    sizeKm2: 344400,
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    signatureAnimals: ['Sea turtles', 'Reef sharks', '1,500+ fish species'],
    description:
      'World\'s largest coral reef system — visible from space. Snorkelling and diving the outer reef is the headline. Climate-driven bleaching is real and worsening — go now, go ethically (small-group tours from operators with sustainability certifications).',
    nearestCity: { name: 'Cairns', iata: 'CNS' },
    accessNotes: 'Fly into CNS or Townsville/Hamilton Island. Day tours to the outer reef cost A$200-400.',
  },
  {
    id: 'sydney-harbour',
    name: 'Sydney Harbour & Bondi',
    countryCode: 'AU',
    countryName: 'Australia',
    sizeKm2: 55,
    bestMonths: ['Sep', 'Oct', 'Nov', 'Mar', 'Apr', 'May'],
    signatureAnimals: ['Bottlenose dolphin', 'Fairy penguin'],
    description:
      'The Opera House, the Harbour Bridge, the Bondi-to-Coogee coastal walk, and the ferry from Circular Quay to Manly. Sydney\'s harbour is the city\'s living room. Summer beach culture is intense — early start for surf, sunscreen always.',
    nearestCity: { name: 'Sydney', iata: 'SYD' },
    accessNotes: 'SYD airport, then 30 min by train or taxi to CBD. Ferries are public transport.',
  },
  {
    id: 'kakadu',
    name: 'Kakadu National Park',
    countryCode: 'AU',
    countryName: 'Australia',
    sizeKm2: 19804,
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep'],
    signatureAnimals: ['Saltwater crocodile', 'Jabiru', 'Wallaby'],
    description:
      'World Heritage for both nature and culture — ancient Aboriginal rock art (Ubirr, Nourlangie), wetlands packed with crocs and birds, monsoon forests. Cruise the Yellow Water billabong at sunrise. Wet season (Nov-Apr) closes many roads — dry season only.',
    nearestCity: { name: 'Darwin', iata: 'DRW' },
    accessNotes: 'Fly into DRW, 3 hr drive to Jabiru. 4WD strongly recommended.',
  },
  {
    id: 'great-ocean-road',
    name: 'Great Ocean Road & Twelve Apostles',
    countryCode: 'AU',
    countryName: 'Australia',
    sizeKm2: 1030,
    bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    signatureAnimals: ['Koala (Kennett River)', 'Southern right whale (winter)'],
    description:
      '243km coastal drive west of Melbourne. The Twelve Apostles (limestone stacks) at sunset is the postcard shot. Bells Beach for surfing, the Otways rainforest for koalas. Allow at least 2 days — racing it in one is the regret tourists most commonly express.',
    nearestCity: { name: 'Melbourne', iata: 'MEL' },
    accessNotes: 'Drive from Melbourne — start at Torquay (1.5 hr), finish at Allansford. Self-drive only.',
  },
  {
    id: 'tasmania-cradle',
    name: 'Cradle Mountain-Lake St Clair',
    countryCode: 'AU',
    countryName: 'Australia',
    sizeKm2: 1612,
    bestMonths: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
    signatureAnimals: ['Wombat', 'Tasmanian devil', 'Echidna'],
    description:
      'Tasmania\'s wilderness centerpiece — alpine moors, glacial lakes, button grass plains. The Dove Lake circuit (6km) is the must-do day walk; the Overland Track (65km, 6 days) for serious hikers. Weather changes fast — pack layers even in summer.',
    nearestCity: { name: 'Launceston', iata: 'LST' },
    accessNotes: 'Fly into LST or Hobart, 2.5 hr drive. Cradle Mountain shuttle bus from visitor centre.',
  },
  {
    id: 'whitsundays',
    name: 'Whitsunday Islands',
    countryCode: 'AU',
    countryName: 'Australia',
    sizeKm2: 980,
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    signatureAnimals: ['Sea turtle', 'Dugong', 'Humpback whale (Jun-Sep)'],
    description:
      '74 islands in the heart of the Great Barrier Reef. Whitehaven Beach is consistently rated one of the world\'s best — silica sand so pure it squeaks. Sail charters (2-3 days) are the way to do it; Hamilton Island for resorts, Airlie Beach for backpackers.',
    nearestCity: { name: 'Hamilton Island', iata: 'HTI' },
    accessNotes: 'Fly into HTI or Proserpine (Whitsunday Coast). Boat transfers from Airlie Beach.',
  },
  {
    id: 'blue-mountains',
    name: 'Blue Mountains National Park',
    countryCode: 'AU',
    countryName: 'Australia',
    sizeKm2: 2670,
    bestMonths: ['Sep', 'Oct', 'Nov', 'Mar', 'Apr', 'May'],
    signatureAnimals: ['Yellow-tailed black cockatoo', 'Lyrebird'],
    description:
      'Eucalyptus forest valleys that glow blue from oil vapour. The Three Sisters at Echo Point, Wentworth Falls, the Scenic World cable cars. Day trip from Sydney by train (2 hr each way) — Katoomba is the base. World Heritage listed.',
    nearestCity: { name: 'Sydney', iata: 'SYD' },
    accessNotes: 'Sydney → Katoomba train (2 hr, A$10-20). Walking trails range from 30 min to all day.',
  },
  {
    id: 'kangaroo-island',
    name: 'Kangaroo Island',
    countryCode: 'AU',
    countryName: 'Australia',
    sizeKm2: 4405,
    bestMonths: ['Sep', 'Oct', 'Nov', 'Mar', 'Apr', 'May'],
    signatureAnimals: ['Kangaroo', 'Koala', 'Australian sea lion'],
    description:
      'Australia\'s third-largest island, off South Australia. Wildlife you actually see from the road — kangaroos at dusk, koalas in eucalypts, sea lions at Seal Bay (the only place in the world you can walk among wild sea lions). Bushfires hit hard in 2020 — recovery is ongoing.',
    nearestCity: { name: 'Adelaide', iata: 'ADL' },
    accessNotes: 'Fly Adelaide → Kingscote (35 min) or ferry from Cape Jervis (45 min).',
  },
  {
    id: 'daintree',
    name: 'Daintree Rainforest',
    countryCode: 'AU',
    countryName: 'Australia',
    sizeKm2: 1200,
    bestMonths: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    signatureAnimals: ['Cassowary', 'Tree kangaroo', 'Boyd\'s forest dragon'],
    description:
      'World\'s oldest tropical rainforest (180 million years) meeting the Great Barrier Reef at Cape Tribulation. The only place on Earth where two World Heritage areas meet. Mossman Gorge for swimming, Daintree Ferry crossings to deeper rainforest. Don\'t swim where signs warn — crocs.',
    nearestCity: { name: 'Cairns', iata: 'CNS' },
    accessNotes: 'Fly into CNS, 2-3 hr drive north. Tours run from Cairns and Port Douglas.',
  },
];

export default AUSTRALIA_TOP_10;
