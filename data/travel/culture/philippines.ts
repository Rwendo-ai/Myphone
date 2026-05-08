/**
 * Cultural Guide — Philippines.
 *
 * Etiquette, scams, customs, holidays, dress, tipping. Authored from research
 * + native review. Each section is short prose so we can render the same
 * structure for every country we add.
 */

import type { CulturalGuide } from './types';

const PHILIPPINES_GUIDE: CulturalGuide = {
  countryCode: 'PH',
  countryName: 'Philippines',
  intro:
    'The Philippines is a country of warm smiles, deep family ties, and Catholic-flavoured everyday life layered over more than 7,000 islands. ' +
    'A few small habits — adding "po" when you speak to anyone older, accepting hospitality without protest, never refusing food in a home — ' +
    'will shift you from tourist to friend remarkably fast. Many Filipinos have family working overseas (Saudi, UAE, Hong Kong, the US), so a respectful question about an OFW relative is often the start of a real conversation.',
  sections: [
    {
      id: 'greetings',
      title: 'Greetings come first',
      emoji: '🤝',
      body:
        'A smile and a small nod is the universal opener — Filipinos are some of the most welcoming people you\'ll meet. The "po" suffix when speaking to anyone older than you is non-negotiable: "Salamat po" (thank you), "Opo" (yes), "Paumanhin po" (sorry). Skipping it sounds rude even if your tone is friendly. ' +
        '\nWith grandparents and older relatives of friends, the traditional sign of respect is "mano" — gently taking the elder\'s hand and pressing the back of it to your forehead. Once Filipinos consider you a friend, expect physical warmth: hugs, arm-touching, hands on shoulders. It\'s affection, not familiarity, and pulling away reads as cold.',
    },
    {
      id: 'tipping',
      title: 'Tipping',
      emoji: '💵',
      body:
        '10% at sit-down restaurants if a service charge isn\'t already on the bill (check — many add it automatically). ' +
        '₱20-50 for a hotel porter or housekeeping per stay. Taxis don\'t expect tips but rounding up is appreciated. ' +
        '₱50-100 per guest per day for tour guides; more for multi-day trips or exceptional service. ' +
        'Always tip in pesos, not US dollars — USD is harder for staff to use than you think.',
    },
    {
      id: 'currency',
      title: 'The currency situation',
      emoji: '💴',
      body:
        'The Philippine peso (PHP, ₱) is the only currency you\'ll spend. Cash is king for street food, jeepneys, tricycles, and public markets. Cards work in malls, chain restaurants, and mid-to-upper hotels but not much else. ' +
        '\nATMs are everywhere but charge ₱200-250 per withdrawal for foreign cards on top of your home bank\'s fee — pull larger amounts less often. Carry small bills (₱20s, ₱50s, ₱100s) because "walang barya" (no change) is a constant excuse, especially with tricycle drivers and small vendors. ' +
        'GCash (mobile money via QR) is increasingly used everywhere from sari-sari stores to taxis — set it up if you\'re staying more than a few days.',
    },
    {
      id: 'safety',
      title: 'Safety & scams',
      emoji: '🛡️',
      body:
        'Provincial Philippines is very safe — small towns, beaches, and the Visayas barely register a worry. Manila is where care matters: Quiapo, Tondo, and Divisoria reward street smarts more than curiosity, and pickpockets work crowded LRT/MRT stations and jeepneys. Keep wallets in front pockets and leave visible jewellery at the hotel. ' +
        '\nUse Grab (the local ride-hailing app) at night rather than flagging taxis — fixed price, tracked route. ' +
        'Specific provinces in Mindanao and parts of Bicol have NPA insurgent activity and occasional kidnap-for-ransom advisories — check your government\'s current travel advice before going off the standard tourist track.',
    },
    {
      id: 'food',
      title: 'Eating',
      emoji: '🍽️',
      body:
        'Spoon-and-fork is the standard Filipino setup — the spoon does the cutting, knives rarely appear. Eating with your hands ("kamayan") is completely acceptable and at boodle-fight feasts it\'s the whole point. ' +
        '\nThe palate is sour-savoury: sinigang (sour tamarind soup), adobo (vinegar-soy stew), kinilaw (citrus-cured raw fish). Halo-halo is the essential dessert, lechon (whole roasted pig) is the celebration centrepiece, and Filipinos have a famous sweet tooth that puts sugar in spaghetti and turns hot dogs bright red. ' +
        '\nIf you\'re welcomed into a Filipino home, NEVER refuse the food offered — even a small taste matters. Saying no is read as rejecting the household itself.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'Tropical casual is the rule — light, breathable fabrics, sandals, sunscreen. Shorts and t-shirts are fine almost everywhere in cities and provinces. ' +
        '\nChurches are the exception: at Manila Cathedral, Quiapo Church, and the older Spanish-era churches, cover shoulders and avoid shorts. Many will lend a wrap if you\'re caught out, but it\'s better not to need one. ' +
        'Beachwear stays at the beach or resort — wandering into a town in swimwear reads as disrespectful, not laid-back.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Photography is mostly free and Filipinos genuinely love being photographed — expect smiles, peace signs, and group huddles. Ask vendors politely at markets before pointing a lens at their stall; most say yes happily. ' +
        '\nDO NOT photograph: military checkpoints, soldiers on patrol, immigration officers, or anything that looks like an active security installation. ' +
        'Pets, food, sunsets, jeepneys, your halo-halo — photograph everything. Watch out for the "professional photo" hustle near major tourist sites (Intramuros, Rizal Park) where someone takes your picture unasked then demands payment.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'Filipino (Tagalog) and English are co-official, and English fluency is among the highest in Asia — most signs, menus, and government forms are in English. Don\'t worry about getting lost in translation. ' +
        '\nEveryday speech is "Taglish" — a fluid mix of both languages mid-sentence. Outside Metro Manila and Tagalog regions you\'ll hear Bisaya/Cebuano, Ilocano, Hiligaynon, Bicolano, and dozens of others. ' +
        'A few phrases go a long way: "Salamat po" (thank you), "Magkano po?" (how much?), "Kumusta po kayo?" (how are you?). The "po" everywhere — that\'s the real magic word.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        '1 Jan (New Year), Holy Week (variable — Maundy Thursday, Good Friday, Black Saturday, Easter Sunday — much of Manila empties out), 1 May (Labor Day), 12 Jun (Independence Day), 21 Aug (Ninoy Aquino Day), last Mon of Aug (National Heroes\' Day), 30 Nov (Bonifacio Day), 25 Dec (Christmas), 30 Dec (Rizal Day). ' +
        '\nPhilippines has the most public holidays in Asia, and the government adds "special non-working days" throughout the year — check the current proclamation before booking domestic flights or assuming a bank will be open. ' +
        'Christmas season is famously the world\'s longest: it kicks off in September (the "ber" months) and runs hard through January. Expect carols, parols (star lanterns), and full-throated celebration for four straight months.',
    },
  ],
};

export default PHILIPPINES_GUIDE;
