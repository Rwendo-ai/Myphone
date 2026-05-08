/**
 * Cultural Guide — Spain.
 *
 * Etiquette, scams, customs, holidays, dress, tipping. Authored from research
 * + native review. Each section is short prose so we can render the same
 * structure for every country we add.
 */

import type { CulturalGuide } from './types';

const SPAIN_GUIDE: CulturalGuide = {
  countryCode: 'ES',
  countryName: 'Spain',
  intro:
    'Spain runs on its own clock — late lunches, later dinners, and a rhythm of small bars rather than long sit-down meals. ' +
    'The culture is warm, loud, and physical: cheek-kisses on first meeting, hands on shoulders, voices that carry across plazas. ' +
    'A traveller who eats at Spanish hours, attempts a few words of Castilian, and resists the tourist combos (no sangria with paella for dinner) ' +
    'gets a much richer Spain than the one sold on Las Ramblas.',
  sections: [
    {
      id: 'greetings',
      title: 'Greetings come first',
      emoji: '🤝',
      body:
        'Socially, two cheek-kisses — left cheek first, then right — between women, and between women and men. Men greet each other with a handshake or, if friends, a hug and back-slap. ' +
        'For a first business meeting, a firm handshake is standard; cheek-kisses come later as the relationship warms. ' +
        '\n"Hola" works any time of day, but Spaniards layer it with "buenos días" (until ~2pm), "buenas tardes" (afternoon to early evening), or "buenas noches" (after dark). ' +
        'Skipping the greeting and going straight to a request reads as cold.',
    },
    {
      id: 'tipping',
      title: 'Tipping',
      emoji: '💵',
      body:
        'Tipping is NOT expected in Spain — service staff are paid a real wage and a tip is genuine extra rather than a top-up. ' +
        'At a bar or café, round up to the nearest €1 or leave the loose change. At a sit-down restaurant, 5–10% is generous and reserved for exceptional service. ' +
        'Taxis: round up to the nearest euro. Hotel porters: €1–2 per bag is fine. Don\'t feel pressured by American-style 15–20% — locals don\'t do it.',
    },
    {
      id: 'currency',
      title: 'The currency situation',
      emoji: '💴',
      body:
        'Spain uses the euro (€). Card adoption is mid-tier — fine in supermarkets, chains, and most city restaurants, but many small neighbourhood bars, market stalls, and rural cafés are still cash-only or have a €10 card minimum. ' +
        'Carry €20–50 in small notes for tapas crawls and taxis. ' +
        '\nATMs: those at major banks (BBVA, Santander, CaixaBank) are usually free or low-fee for some foreign cards — check before withdrawing. ' +
        'Avoid the standalone "Euronet" ATMs in tourist areas; their fees and exchange rates are punishing.',
    },
    {
      id: 'safety',
      title: 'Safety & scams',
      emoji: '🛡️',
      body:
        'Spain is safe — violent crime against tourists is rare. The real threat is pickpockets, who are skilled and persistent in Barcelona\'s Las Ramblas, Madrid\'s Sol and Atocha, and central Sevilla. ' +
        'Use a front pocket or zipped cross-body bag, keep phones off café tables, and stay alert in Metro carriages. ' +
        '\nSpaniards are loud and hands-on — expect raised voices, friendly shoulder-grabs, and lively bar arguments that look like fights but aren\'t. Actual violence is uncommon. ' +
        '\nDrug-dealing offers (hashish, cocaine) happen in tourist zones — a quick "no, gracias" and walking on ends it. Don\'t engage. ' +
        'Late-night Barcelona Raval and parts of Madrid Lavapiés can feel sketchy after midnight; stick to busier streets and use a taxi.',
    },
    {
      id: 'food',
      title: 'Eating',
      emoji: '🍽️',
      body:
        'Spain eats late. Lunch is 2–4pm, dinner 9–11pm — restaurant kitchens close between roughly 4pm and 8pm, and showing up at 7pm for dinner gets you tourist menus or a closed sign. ' +
        '\nTapas culture is the heart of it: small plates, multiple bars in one evening, standing at the counter with a vermut or caña. The "menú del día" at lunch is the best value in the country (€10–15 for three courses + drink). ' +
        '\nDon\'t miss: Iberico ham, paella (a Valencian dish — eat it where it was invented if you can), pincho de tortilla, vermut on tap. ' +
        '\nNEVER ask for sangria with paella for dinner — that combination is a tourist signal locals quietly mock. Spanish wine is excellent and cheap; a glass of house red is usually €2–3 and very good.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'Spaniards dress stylishly but rarely formally — think well-cut casual rather than suits. Closed-toe shoes are the city default; flip-flops and visible swimwear in the centre mark you immediately as a tourist. ' +
        '\nNo shorts at proper restaurants, even in summer. Beachwear stays beachside — covering up before walking into a café or shop is basic respect. ' +
        '\nFor Mass at cathedrals (Sagrada Familia, Sevilla, Toledo, Santiago): shoulders covered, no short-shorts. Some churches will turn you away at the door if you\'re underdressed.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Streets, plazas, and architecture: shoot freely. Inside churches: usually allowed but no flash, and check for signs at the entrance. ' +
        '\nProtect your camera in Las Ramblas and other crowded tourist spines — pickpockets will lift it from your shoulder if you\'re not paying attention. ' +
        '\nSagrada Familia: photography is allowed with a standard ticket — bring a wide lens. ' +
        'Plaza Mayor and similar squares have street performers (human statues, musicians) — if you photograph them, drop a euro in their hat. It\'s expected.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'Castilian Spanish (español/castellano) is the national language, but Spain has four co-official languages: Catalan in Catalonia, Basque (Euskara) in País Vasco, Galician in Galicia, and Valenciano in Valencia. Locals appreciate when you recognise the difference. ' +
        '\nEnglish fluency varies — better in Barcelona, Madrid, and tourism-heavy areas; weaker in smaller cities and rural Spain. Try Spanish first; Spaniards reward effort generously, even if your accent is rough. ' +
        '\nA quirk: Castilian has a distinct "c/z" lisp ("Barthelona", "grathias") that doesn\'t exist in Latin American Spanish. It\'s not a speech defect — it\'s the standard pronunciation here.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        '1 Jan (New Year), 6 Jan (Epiphany / Three Kings — the major children\'s gift-giving day, bigger than Christmas morning), Maundy Thursday + Good Friday (variable, Holy Week), 1 May (Labour Day), 15 Aug (Assumption), 12 Oct (Hispanic Day / Día de la Hispanidad), 1 Nov (All Saints\'), 6 Dec (Constitution Day), 8 Dec (Immaculate Conception), 25 Dec (Christmas). ' +
        '\nPlus regional days: Sant Jordi (23 Apr, Catalonia — books and roses), Día de Andalucía (28 Feb), and many city-specific patron-saint days that close everything locally. ' +
        '\nSemana Santa (Holy Week, the week before Easter) is the spectacle: processions in Sevilla and Málaga can run for hours with hundreds of participants in tall pointed hoods (capirotes). This is a centuries-old Catholic penitential tradition that long predates and has nothing to do with the KKK — don\'t make the comparison out loud.',
    },
  ],
};

export default SPAIN_GUIDE;
