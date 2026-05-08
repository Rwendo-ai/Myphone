/**
 * Cultural Guide — Japan.
 *
 * Etiquette, scams, customs, holidays, dress, tipping. Authored from research
 * + native review. Each section is short prose so we can render the same
 * structure for every country we add.
 */

import type { CulturalGuide } from './types';

const JAPAN_GUIDE: CulturalGuide = {
  countryCode: 'JP',
  countryName: 'Japan',
  intro:
    'Japan rewards travellers who pay attention. The rules are real but rarely spoken aloud — shoes off here, no tipping there, eat at the counter not on the train. ' +
    'Get a few of these right and the country opens up: the bow returned a fraction deeper, the chef who slides over an extra piece, the stranger who walks you three blocks rather than just point. ' +
    'Get them wrong and nobody will tell you, but you will feel the temperature drop.',
  sections: [
    {
      id: 'greetings',
      title: 'Bowing & first contact',
      emoji: '🤝',
      body:
        'Bowing is the default — depth and duration signal respect. Roughly 15° for a casual greeting, 30° for polite ("nice to meet you", "thank you"), 45° for a deep apology or serious gratitude. ' +
        'Don\'t try to bow if you don\'t know what you\'re doing — a slight nod of the head is completely fine and won\'t offend anyone. ' +
        '\nHandshakes with foreigners are common in business and tourism contexts; follow their lead. NEVER hug strangers — physical contact between people who don\'t know each other is read as invasive. ' +
        'NEVER touch anyone\'s head, including children — the head is considered sacred.',
    },
    {
      id: 'tipping',
      title: 'Tipping (don\'t)',
      emoji: '💵',
      body:
        'Tipping in Japan is not just unexpected — it\'s actively rude. Leaving cash on the table is interpreted as suggesting the worker needs charity, or that the establishment underpays its staff. ' +
        'ALL service is bundled into the price. If you try to tip, you\'ll often be chased down the street to have the money returned. ' +
        '\nSometimes a service charge (10%) appears automatically on the bill at higher-end restaurants and hotels — that\'s the entire system. Pay the bill, say "gochisousama deshita", leave.',
    },
    {
      id: 'currency',
      title: 'Cash, cards & IC',
      emoji: '💴',
      body:
        'Currency is the Japanese yen (JPY, ¥). Despite Japan\'s reputation for tech, cash still rules — many small restaurants, shrines, and shops only take cash. Always carry some. ' +
        '\nSuica or Pasmo IC cards are essential: tap-to-pay for trains, buses, many convenience stores, and vending machines. Get one at any major station and top up as you go. ' +
        '\nForeign cards work most places now (post-Olympics rollout) but failures still happen. ATMs at 7-Eleven (Seven Bank) and Japan Post reliably accept foreign cards — most other ATMs do not.',
    },
    {
      id: 'safety',
      title: 'Safety',
      emoji: '🛡️',
      body:
        'Japan is among the safest countries in the world. Lost phones, wallets, and laptops are routinely returned — drop something and someone will chase you down or hand it to the nearest koban (police box). ' +
        'Solo women travel comfortably at all hours. Even Kabukicho or Shinjuku at 3am is, by global standards, still safe — the worst you\'ll usually encounter is an aggressive tout outside a club (just keep walking). ' +
        '\nThis is a rules-following society. Don\'t be the one breaking norms — no littering, no loud phone calls on trains, no jaywalking even on an empty street. You\'ll feel the disapproval.',
    },
    {
      id: 'food',
      title: 'Eating',
      emoji: '🍽️',
      body:
        'Eating while walking is rude — finish your snack at the stall or konbini before moving on. Slurping noodles, on the other hand, is encouraged: it cools the noodles and signals enjoyment. ' +
        '\nNEVER pass food chopstick-to-chopstick (that\'s a funeral cremation custom). Don\'t stick chopsticks vertically into a bowl of rice (also funeral). When drinking with others, pour for them first and let them pour for you — never pour your own. ' +
        '\nSushi: use your hands or chopsticks, never a knife. Say "Itadakimasu" before eating (a humble "I gratefully receive") and "Gochisousama deshita" after. ' +
        'Don\'t ask for substitutions ("can I have it without X?") — it\'s read as disrespectful to the chef\'s craft. Pay at the register on your way out, not at the table.',
    },
    {
      id: 'dress',
      title: 'Dress',
      emoji: '👗',
      body:
        'Modest by default. Visible tattoos remain problematic in onsens, gyms, and some pools — keep them covered with patches or seek out tattoo-friendly venues. ' +
        '\nShoes come off at private homes, ryokans, temples, and some restaurants — look for the shoe shelf or step up at the entrance. Don\'t wear bath slippers onto tatami mats. ' +
        '\nDon\'t enter an onsen wearing swimwear — bathing is done nude. For business: conservative, dark suits, white shirt, restrained tie.',
    },
    {
      id: 'photography',
      title: 'Photography',
      emoji: '📷',
      body:
        'Geisha and maiko in Kyoto: DO NOT block their path or photograph without consent. Kyoto\'s Gion district now imposes fines up to €1000 for harassment — they are working professionals on their way to appointments, not street performers. ' +
        '\nTrain stations and most interiors are usually fine. Children: ASK the parents before pointing a lens at them. Shrines and temples: outside is fine, but the inner halls, altars, and Buddhist statues are often forbidden — look for signs. ' +
        'Sumo wrestlers in transit: don\'t crowd them, don\'t block them, a quick respectful photo from a distance is the limit.',
    },
    {
      id: 'language',
      title: 'Language tips',
      emoji: '🗣️',
      body:
        'Japanese is the language. English is very limited outside the tourism cores of Tokyo, Kyoto, and Osaka — even there, expect to mime and point. ' +
        '\nLearn a handful of phrases and they will be returned tenfold: "sumimasen" (excuse me / sorry), "arigatou gozaimasu" (thank you, polite), "douzo" (please go ahead / here you are), "onegaishimasu" (please). ' +
        '\nGoogle Translate\'s camera mode is genuinely useful for menus and signs. Three scripts coexist — kanji, hiragana, katakana — translation apps handle them well. ' +
        'Politeness levels in Japanese are intricate; for travellers, defaulting to teineigo (the polite -masu form) is correct everywhere.',
    },
    {
      id: 'holidays',
      title: 'Public holidays to know',
      emoji: '📅',
      body:
        '1 Jan (New Year) — most things close 1-3 Jan, including many restaurants and shops. Coming of Age Day (2nd Mon Jan), National Foundation Day (11 Feb), Emperor\'s Birthday (23 Feb), Vernal Equinox (~21 Mar). ' +
        '\nShowa Day (29 Apr) opens Golden Week (29 Apr - 5 May) — domestic travel is extremely busy and expensive; book months ahead or avoid travelling during these dates entirely. ' +
        '\nMarine Day (3rd Mon Jul), Mountain Day (11 Aug), Respect for the Aged (3rd Mon Sep), Autumn Equinox (~23 Sep), Health and Sports Day (2nd Mon Oct), Culture Day (3 Nov), Labour Thanksgiving (23 Nov). ' +
        '\nChristmas (25 Dec) is NOT a public holiday — it\'s a romantic date day for couples, not a family occasion. ' +
        '\nCherry blossom season (~late Mar to early Apr) isn\'t a holiday, but accommodation needs booking 6+ months ahead — the country effectively fills up.',
    },
  ],
};

export default JAPAN_GUIDE;
