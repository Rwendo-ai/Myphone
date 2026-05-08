/**
 * Cultural Guide — Portugal.
 *
 * Etiquette, scams, customs, holidays, dress, tipping. Authored from research
 * + native review. Each section is short prose so we can render the same
 * structure for every country we add.
 */

import type { CulturalGuide } from './types';

const PORTUGAL_GUIDE: CulturalGuide = {
  countryCode: 'PT',
  countryName: 'Portugal',
  intro:
    'Portugal rewards travellers who slow down. The pace is gentler than Spain, the people warmer than the weather might suggest, and a few learned habits — greeting properly, refusing the couvert if you don\'t want it, never speaking Spanish on arrival — open doors that stay closed to the average tourist. ' +
    'Lisbon and Porto are easy; the interior, the Alentejo, and the islands are where Portugal really lives.',
  sections: [
    {
      id: 'greetings',
      title: 'Greetings come first',
      emoji: '🤝',
      body:
        'Two cheek-kisses, right cheek first, then left — between two women, or a woman and a man. Men greeting men shake hands; in formal or business first meetings, everyone shakes hands. ' +
        '"Olá" works any time, paired with "bom dia" (morning), "boa tarde" (afternoon, from about midday), or "boa noite" (evening). ' +
        'Saying hello before you ask for anything — directions, a coffee, a price — is the small habit that marks you as polite rather than pushy.',
    },
    {
      id: 'tipping',
      title: 'Tipping',
      emoji: '💵',
      body:
        'Tipping is NOT expected in Portugal and not mandatory anywhere. ' +
        'For good service in a restaurant, round up to the nearest €1 or leave 5-10% if it was genuinely exceptional. ' +
        'Cafés and bars: rounding up the change is plenty. Taxis: round up to the nearest euro. Hotel porters: €1-2 per bag if you want to. ' +
        'Nobody chases you down for a tip, and Portuguese locals tip lightly themselves — overtipping marks you out more than it impresses.',
    },
    {
      id: 'currency',
      title: 'Currency & payments',
      emoji: '💴',
      body:
        'Portugal uses the euro (€). Multibanco ATMs are everywhere — at banks, supermarkets, train stations — and most foreign cards withdraw without fees from the machine itself (your home bank may still charge). ' +
        'Cards (Visa/Mastercard) are accepted almost universally in cities; contactless is standard. Smaller cafés, markets, and rural villages may still be cash-preferred, so carry €20-50 in small notes. ' +
        'MB WAY is the local mobile-payment app linked to Portuguese bank accounts — locals use it to split bills and pay informally, but as a tourist your card or Apple/Google Pay covers everything you\'ll need.',
    },
    {
      id: 'safety',
      title: 'Safety & scams',
      emoji: '🛡️',
      body:
        'Portugal is one of the safest countries in Europe — violent crime against tourists is rare. The risks are pickpocket-tier, not threatening. ' +
        '\nLisbon\'s tram 28 is famous for pickpockets; keep your phone and wallet in a front pocket or zipped bag, especially when boarding. Watch for "hash? cocaine?" street dealers in tourist areas — Bairro Alto and Rossio in Lisbon, Ribeira in Porto — they\'re selling fake drugs to tourists and police occasionally sweep buyers. ' +
        'Outside that, Portuguese people are unusually trustworthy — ask for directions and you\'ll often get walked partway there rather than pointed.',
    },
    {
      id: 'food',
      title: 'Eating',
      emoji: '🍽️',
      body:
        'Lunch runs 12:30-2:30pm, dinner 7:30-10pm — earlier than Spain, but later than northern Europe. Many kitchens close between services. ' +
        'Bacalhau (salt cod) is the national obsession, with claims of 1000+ recipes. Pastéis de nata are everywhere — for the original, queue at Pastéis de Belém in Lisbon. ' +
        '\nCoffee vocabulary: "bica" is an espresso (in Lisbon), "galão" is a tall milky coffee in a glass. "Petiscos" are Portuguese tapas — small plates to share. ' +
        '\nTwo rules locals notice: NEVER salt your food before tasting it — Portuguese chefs read it as an insult. And the "couvert" — bread, olives, cheese, sometimes sardine pâté — placed on your table at the start is NOT free. Refuse with "não, obrigado/obrigada" if you don\'t want it; you\'ll be charged for whatever you touch.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'Smart-casual is the Portuguese baseline — more conservative than Spain, more put-together than most of northern Europe. Closed-toe shoes in the cities; flip-flops mark you as a tourist heading to or from the beach. ' +
        'Cathedrals and churches: cover shoulders (a light scarf or shirt does it), and avoid very short shorts or skirts. ' +
        'Beach attire — swimwear, bare chests, sarongs — stays at the beach. Walking into a café in a bikini top will get you served, but coldly.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Streets, viewpoints, markets, azulejo tiles — photograph freely. Inside churches: usually fine without flash, but check for signs and don\'t photograph during a service. ' +
        'Tram 28 and the funiculars: photos welcome and expected. ' +
        '\nFado restaurants (casas de fado) are the exception — NO photos and NO video during the performance. Fado is treated as a sacred art form, sung in low light, and a flash or even a phone screen up during a song is read as deeply disrespectful. Wait for the applause.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'Portuguese spoken here is European Portuguese — distinct from Brazilian Portuguese in vocabulary, "you" forms (tu/você vs você), and pronunciation (much more clipped, harder consonants). Don\'t assume the two are interchangeable. ' +
        'English is moderate-to-good in Lisbon and Porto, especially with under-40s; weaker in the interior, parts of the Algarve, and rural Alentejo. Mirandês is co-official in the northeast (around Miranda do Douro). ' +
        '\nA few Portuguese phrases — "obrigado/obrigada" (thank you, gendered to the speaker), "por favor" (please), "desculpe" (sorry) — and locals warm to you immediately. ' +
        '\nOne hard rule: NEVER speak Spanish to a Portuguese person on the assumption it\'s "close enough." It reads as ignorant and rude — a long history sits behind that. English first, or Portuguese; never Spanish.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        '1 Jan (New Year), Carnival Tuesday (variable, February — widely observed though not officially national in all regions), Good Friday and Easter Sunday (variable), 25 Apr (Liberty Day — celebrates the 1974 Carnation Revolution that ended the dictatorship; big parades in Lisbon along Avenida da Liberdade), 1 May (Labour Day), Corpus Christi (variable, June), 10 Jun (Portugal Day / Camões / Day of Portuguese Communities — the national day), 15 Aug (Assumption), 5 Oct (Republic Day), 1 Nov (All Saints\'), 1 Dec (Restoration of Independence — from Spain in 1640), 8 Dec (Immaculate Conception), 25 Dec (Christmas). ' +
        'Many shops, museums, and offices close on these days. 25 April and 10 June are the most patriotic — worth catching the parades in Lisbon if your dates line up, but transport and hotels book early.',
    },
  ],
};

export default PORTUGAL_GUIDE;
