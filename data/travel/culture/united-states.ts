/**
 * Cultural Guide — United States.
 *
 * The US is fifty countries pretending to be one. Tipping is mandatory.
 * Healthcare is expensive. The pace varies wildly by region. The general
 * default is loud, friendly, fast, and tipping-heavy — but the South,
 * the Midwest, the East and West coasts each have a distinct personality.
 */

import type { CulturalGuide } from './types';

const UNITED_STATES: CulturalGuide = {
  countryCode: 'US',
  countryName: 'United States',
  intro:
    'The US is the most regionally varied developed country in the world. Tipping is essentially a tax — budget 20% on top of restaurant bills. Healthcare without insurance is ruinous — pack travel insurance. Distances are larger than you think (NYC to LA = 5 hours flying). Americans are warm, talkative, and direct — and they\'ll tell you exactly what they think.',
  sections: [
    {
      id: 'tipping',
      title: 'Tipping is not optional',
      emoji: '💵',
      body:
        'Restaurant servers are paid as little as $2.13/hour federally — tips are their income. 18-20% on the pre-tax total is standard for sit-down restaurants. Bartenders: $1-2 per drink. Cabs and Uber: 15-20%. Hotel bellhops: $1-2 per bag. Hotel housekeeping: $2-5 per night. Hairdressers, manicurists: 20%. Even fast-casual now has tip prompts on the card reader — 10% is fine for those. Skipping tip = a serious signal of dissatisfaction.',
    },
    {
      id: 'healthcare',
      title: 'Healthcare is expensive without insurance',
      emoji: '🏥',
      body:
        'ER visit without insurance: $1,000-3,000 minimum. Ambulance: $1,500-3,000. Specialist visit: $300-500. Get travel insurance with at least $100K medical coverage before flying. Urgent Care clinics (not ER) are cheaper for non-emergencies — sprains, infections, minor cuts. Pharmacies (CVS, Walgreens, Rite Aid) sell most basics OTC. Don\'t skip the insurance.',
    },
    {
      id: 'sales-tax',
      title: 'Tax is added at checkout',
      emoji: '💰',
      body:
        'Sales tax is NOT included in displayed prices. The shelf price is what you read, but you\'ll pay 5-10% more at the register depending on the state. California, NY, Washington = high tax. Oregon, Delaware, New Hampshire, Montana = no state sales tax. Hotel taxes are even higher (often 12-17% added to nightly rate). Always check the total before you confirm.',
    },
    {
      id: 'regional',
      title: 'Regions — they are different countries',
      emoji: '🗺️',
      body:
        'New York City: fast, transactional, transit-based. Don\'t block the sidewalk. Southern US: slower, friendlier, "ma\'am" / "sir" common, religion more present. West Coast (CA / OR / WA): casual, environmental, tech-aware, dietary-restriction-friendly. Midwest: polite, modest, "Minnesota nice", drive everywhere. New England: reserved, historical, dry humour. Texas: proud, big portions, big trucks, friendly. Don\'t generalise — what plays in Manhattan does not play in Houston.',
    },
    {
      id: 'tipping-cash',
      title: 'Cash & card practicalities',
      emoji: '💳',
      body:
        'Card is accepted almost everywhere — even food trucks. Apple Pay / Google Pay widespread. Tipping in cash is still appreciated (some servers prefer it). ATMs are everywhere but charge $2-5 per withdrawal. US bills are all the same size and colour — separate denominations carefully ($1 vs $20). No coins for breaking — they\'ll just be in your change pile.',
    },
    {
      id: 'drinking',
      title: 'Drinking age & rules',
      emoji: '🍺',
      body:
        'Legal drinking age is 21. ID will be checked at bars, liquor stores, and even some restaurants — bring a passport. Open container laws: illegal to drink alcohol on streets, beaches, parks in most states (Las Vegas Strip and New Orleans Bourbon St are famous exceptions). Some states (Utah, Pennsylvania, certain counties in the South) have unusual liquor laws — you may need a state-run store. Driving with any alcohol = serious offence.',
    },
    {
      id: 'guns',
      title: 'Guns & safety',
      emoji: '⚠️',
      body:
        'Concealed carry is legal in most states. You\'ll never see a weapon in daily life as a tourist, but be aware: don\'t escalate road-rage incidents, don\'t reach into your bag suddenly during a police stop. Police stop protocol: keep your hands visible on the steering wheel, only retrieve documents when asked. Active-shooter drills are routine in schools and offices — Americans accept this in a way visitors find unsettling.',
    },
    {
      id: 'driving',
      title: 'Driving on the right + interstate scale',
      emoji: '🚗',
      body:
        'Drive on the RIGHT side. Right turn on red is legal in most states unless signed otherwise (NYC is a major exception). Stop signs = full stop. School buses with flashing red lights = ALL traffic stops both directions. Interstate highways (I-95, I-5, I-10 etc.) are the spine of the country. Roadside America is a culture in itself — diners, motels, gas stations. Speed limits: 65-75 mph (105-120 km/h) on highways. Strict enforcement on radar.',
    },
    {
      id: 'service-culture',
      title: 'Service culture & "how are you?"',
      emoji: '🙋',
      body:
        '"How are you?" is a greeting, not a question — the only correct answer is "good, you?". Service workers are unusually warm and chatty — this is American norm, not personal interest. Strangers strike up conversations on planes, in lines, at counters. Reciprocate briefly. Saying "no" politely to street vendors / hustlers in tourist areas: "no thanks" while walking is enough.',
    },
    {
      id: 'public-holidays',
      title: 'Public holidays + cultural moments',
      emoji: '🇺🇸',
      body:
        'Thanksgiving (4th Thursday of November) and Christmas Day: everything closes. Independence Day (July 4): fireworks, parades, most businesses open with limited hours. Memorial Day (late May) and Labor Day (early Sep): three-day weekends, beach/BBQ culture peaks. MLK Day (Jan): banks closed. Super Bowl Sunday (early Feb) is unofficially a holiday — wings, beer, TV.',
    },
  ],
};

export default UNITED_STATES;
