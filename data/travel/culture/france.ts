/**
 * Cultural Guide — France.
 *
 * Etiquette, scams, customs, holidays, dress, tipping. Authored from research
 * + native review. Each section is short prose so we can render the same
 * structure for every country we add.
 */

import type { CulturalGuide } from './types';

const FRANCE_GUIDE: CulturalGuide = {
  countryCode: 'FR',
  countryName: 'France',
  intro:
    'France runs on small, formal courtesies — and the traveller who learns them is treated very differently from the one who doesn\'t. ' +
    'A "Bonjour" before every interaction, a "Merci, madame" on the way out, and a willingness to attempt a few words of French will turn the famously chilly Parisian shopkeeper into a warm host. ' +
    'Skip the rituals and you get the cliché. Use them and the country opens up.',
  sections: [
    {
      id: 'greetings',
      title: 'Greetings come first',
      emoji: '🤝',
      body:
        'Say "Bonjour" before EVERY interaction — entering a shop, approaching a waiter, asking for directions. This single word is the rule that turns a hostile interaction into a warm one. After 6pm, switch to "Bonsoir." ' +
        '\nAmong friends and family, greet with cheek-kisses (la bise). The count varies by region: 2 in Paris, 3 in some areas, 4 in others — let the local lead. ' +
        'Use "vous" (the formal "you") by default with anyone you don\'t know well; wait to be invited to switch to "tu."',
    },
    {
      id: 'tipping',
      title: 'Tipping',
      emoji: '💵',
      body:
        'Service is INCLUDED by law — the menu will say "service compris." You are not obligated to tip on top. ' +
        'That said, rounding up or leaving 5-10% for genuinely good service is appreciated. €1-2 for taxi drivers and hotel housekeeping/porters is standard. ' +
        'At bistros, rounding the bill to the nearest €5 is a graceful default.',
    },
    {
      id: 'currency',
      title: 'Money & cards',
      emoji: '💴',
      body:
        'France uses the euro (€). Cards are widely accepted but watch for "pas de carte sous 5€" signs in cafés — small purchases often need cash. ' +
        '\nATMs ("distributeurs") at French banks are free for most foreign cards; third-party machines like Travelex charge inflated fees, so avoid them. ' +
        'Carry small notes (€20s) for cabs, markets, and bakeries — many vendors hate breaking €50s.',
    },
    {
      id: 'safety',
      title: 'Safety & scams',
      emoji: '🛡️',
      body:
        'Pickpocketing is the single biggest threat to tourists. Hot zones: Métro Line 1, the queues at the Louvre and Eiffel Tower, and Gare du Nord. Keep your phone off the table and your bag zipped and in front of you. ' +
        '\nWatch for the petition scam (someone shoves a clipboard at you while an accomplice lifts your wallet) and ATM skimmers — use ATMs inside bank branches when possible. ' +
        'Strikes (grèves) are common and disrupt public transport regularly — check before you travel. Yellow-vest protests have historically clustered on Saturdays. ' +
        '\nCentral Paris is generally very safe at night, but use a ride-hailing app in the 18th and 19th arrondissements after midnight.',
    },
    {
      id: 'food',
      title: 'Eating',
      emoji: '🍽️',
      body:
        'Lunch is 12-2pm, dinner from 8pm onwards — show up at a real restaurant at 6 and you\'ll be turned away or stuck with a tourist menu. Café culture means you can sit for hours over a single coffee without anyone hurrying you. ' +
        '\nBread on the table is FREE. Tap water is fine and free — ask for "une carafe d\'eau." Prix-fixe (set) menus are almost always the best value. ' +
        'Eat the local cheese — Roquefort, Camembert, all of it; French dairy is pasteurised and safe. Wine pairings are encouraged and the waiter will gladly suggest. ' +
        '\nNEVER ask for ketchup with bread. Just don\'t.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'The French aesthetic is effortless chic — neutral colours, well-cut basics, quality over quantity. Athleisure is for the gym, not the street. ' +
        'A scarf is worn year-round and is the easiest way to look local. Closed-toe shoes for restaurants. ' +
        '\nNo shorts at restaurants of any standing. Beach attire (swimsuits, sarongs, flip-flops) stays at the beach — not in town centres or shops.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Always ask before photographing people. Models and street performers in Paris will say "non" or charge a fee — respect both. ' +
        '\nThe Eiffel Tower at night: technically the lights are copyrighted and night photos for commercial use require permission, but enforcement is non-existent for individuals taking holiday snaps. ' +
        'Inside the Louvre and most museums: photography is permitted, no flash. ' +
        'At markets, ask the vendor — most are happy to oblige if you\'ve just bought something.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'French is the obvious answer, but English fluency is patchy outside Paris and major tourist hubs. ' +
        'ALWAYS open with "Bonjour" and try a few French words even if your accent is broken — Parisians soften considerably when they see you trying. "Merci, monsieur" or "Merci, madame" is the correct sign-off. ' +
        '\nAvoid Anglo-Saxon slang in formal interactions. And note that Joual (Quebec slang) is a different beast — don\'t use Quebec phrases here, they read as bizarre rather than friendly.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        '1 Jan (New Year), Easter Monday (variable), 1 May (Labour Day — many things closed, including most shops), 8 May (V-E Day), Ascension Thursday (variable), Pentecost Monday (variable), ' +
        '14 July (Bastille Day — fireworks everywhere, especially around the Champ de Mars), 15 Aug (Assumption), 1 Nov (All Saints\'), 11 Nov (Armistice), 25 Dec (Christmas). ' +
        '\nAugust is HOLIDAY MONTH in France — many small shops, restaurants, and businesses close for 3-4 weeks while owners go on vacation. Plan accordingly, especially in Paris.',
    },
  ],
};

export default FRANCE_GUIDE;
